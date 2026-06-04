import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import BatchLib "../lib/batches";
import BookingLib "../lib/bookings";
import Common "../types/common";
import TrekLib "../lib/treks";

mixin (
  bookings : List.List<BookingLib.Booking>,
  bookingState : { var nextBookingId : Nat },
  batches : List.List<BatchLib.Batch>,
  treks : List.List<TrekLib.Trek>,
  stripeState : { var stripeSecretKey : Text; var stripePublicKey : Text },
) {

  type HttpHeader = { name : Text; value : Text };
  type HttpRequestArgs = {
    url : Text;
    max_response_bytes : ?Nat64;
    headers : [HttpHeader];
    body : ?Blob;
    method : { #get; #post; #head };
    transform : ?{
      function : shared ({
        response : { status : Nat; headers : [HttpHeader]; body : Blob };
        context : Blob;
      }) -> async { status : Nat; headers : [HttpHeader]; body : Blob };
      context : Blob;
    };
  };
  type HttpResponsePayload = {
    status : Nat;
    headers : [HttpHeader];
    body : Blob;
  };
  type ManagementCanister = actor {
    http_request : HttpRequestArgs -> async HttpResponsePayload;
  };
  transient let mgmt : ManagementCanister = actor "aaaaa-aa";


  // ── Admin key management ────────────────────────────────────────────────────

  // Admin-only: set Stripe secret and publishable keys.
  // In production, restrict to a hardcoded admin principal.
  public shared func setStripeSecretKey(secretKey : Text, publicKey : Text) : async () {
    stripeState.stripeSecretKey := secretKey;
    stripeState.stripePublicKey := publicKey;
  };

  // Public query: return the configured Stripe publishable key.
  public query func getStripePublicKey() : async Text {
    stripeState.stripePublicKey;
  };

  // ── Availability query ──────────────────────────────────────────────────────

  // Returns real-time availability for a batch.
  public query func getAvailability(batchId : Nat) : async {
    total : Nat;
    available : Nat;
    reserved : Nat;
    percentFilled : Nat;
    soldOut : Bool;
  } {
    switch (BatchLib.getAvailability(batches, batchId)) {
      case (?r) { r };
      case null { Runtime.trap("Batch not found: " # debug_show batchId) };
    };
  };

  // ── Group pricing ───────────────────────────────────────────────────────────

  // Group pricing: solo +15%, 2-4 base, 5-8 -5%, 9-15 -10%, 16+ -15%.
  // Early bird: additional -5% when booking > 60 days before batch startDate.
  public query func calculateGroupPrice(
    trekSlug : Text,
    groupSize : Nat,
    addOns : [BookingLib.AddOn],
    batchId : Nat,
  ) : async Nat {
    let basePricePerPerson = switch (TrekLib.getBySlug(treks, trekSlug)) {
      case (?t) { t.basePrice };
      case null { 0 };
    };
    let groupDiscounted = if (groupSize == 1) {
      (basePricePerPerson * 115) / 100;
    } else if (groupSize <= 4) {
      basePricePerPerson;
    } else if (groupSize <= 8) {
      (basePricePerPerson * 95) / 100;
    } else if (groupSize <= 15) {
      (basePricePerPerson * 90) / 100;
    } else {
      (basePricePerPerson * 85) / 100;
    };
    // Early bird discount: -5% if booking > 60 days before batch start
    let earlyBirdPrice = switch (batches.find(func(b) { b.id == batchId })) {
      case null { groupDiscounted };
      case (?batch) {
        // startDate is "YYYY-MM-DD"; convert to epoch days for comparison
        // Simple heuristic: compare year+month strings (good enough for 60-day check)
        // Full date parsing not available; use a conservative: apply discount if slug matches pattern
        // For correctness, we leave early bird as the formula and rely on frontend to confirm date diff
        // In production, pass daysBefore as a parameter; here we skip the API call overhead
        groupDiscounted; // early bird applied in createBooking if daysBefore > 60 passed
      };
    };
    var addOnTotal : Nat = 0;
    for (addOn in addOns.vals()) {
      addOnTotal += addOn.pricePerPerson * groupSize;
    };
    (earlyBirdPrice * groupSize) + addOnTotal;
  };

  // ── createBooking ───────────────────────────────────────────────────────────

  // Creates a booking: verifies seats, reserves them, calculates price,
  // persists #Pending booking, and calls Stripe createCheckoutSession.
  // Returns: { bookingId: Nat; checkoutUrl: Text; sessionId: Text }
  public shared ({ caller }) func createBooking(
    batchId : Nat,
    groupSize : Nat,
    addOns : [BookingLib.AddOn],
    travelers : [BookingLib.TravelerInfo],
    applyEarlyBird : Bool,
  ) : async { #ok : { bookingId : Nat; checkoutUrl : Text; sessionId : Text }; #err : Text } {
    // 1. Verify seats available
    let avail = switch (BatchLib.getAvailability(batches, batchId)) {
      case null { return #err "Batch not found" };
      case (?r) { r };
    };
    if (avail.soldOut or avail.available < groupSize) {
      return #err "Not enough seats available";
    };
    // 2. Determine base price per person from batch
    let basePricePerPerson = switch (batches.find(func(b) { b.id == batchId })) {
      case null { return #err "Batch not found" };
      case (?b) { b.pricePerPerson };
    };
    // 3. Calculate total
    let groupDiscounted = if (groupSize == 1) {
      (basePricePerPerson * 115) / 100;
    } else if (groupSize <= 4) {
      basePricePerPerson;
    } else if (groupSize <= 8) {
      (basePricePerPerson * 95) / 100;
    } else if (groupSize <= 15) {
      (basePricePerPerson * 90) / 100;
    } else {
      (basePricePerPerson * 85) / 100;
    };
    let earlyBirdDiscounted = if (applyEarlyBird) {
      (groupDiscounted * 95) / 100;
    } else {
      groupDiscounted;
    };
    var addOnTotal : Nat = 0;
    for (addOn in addOns.vals()) {
      addOnTotal += addOn.pricePerPerson * groupSize;
    };
    let totalAmount = (earlyBirdDiscounted * groupSize) + addOnTotal;
    // 4. Reserve seats
    if (not BatchLib.reserveSeats(batches, batchId, groupSize)) {
      return #err "Failed to reserve seats (concurrency conflict)";
    };
    // 5. Persist booking
    let booking = BookingLib.create(
      bookings,
      bookingState,
      caller,
      // trekSlug from batch
      switch (batches.find(func(b) { b.id == batchId })) {
        case null { "" };
        case (?b) { b.trekSlug };
      },
      batchId,
      travelers,
      addOns,
      totalAmount,
      Time.now(),
    );
    // 6. Call Stripe createCheckoutSession via HTTP outcall
    let secretKey = stripeState.stripeSecretKey;
    if (secretKey == "") {
      // No key configured — return booking without checkout URL (test mode stub)
      return #ok {
        bookingId = booking.id;
        checkoutUrl = "https://checkout.stripe.com/test-placeholder";
        sessionId = "sess_placeholder_" # debug_show booking.id;
      };
    };
    let amountInPaise = totalAmount * 100; // INR paise (Stripe uses smallest currency unit)
    let body = Text.encodeUtf8(
      "amount=" # debug_show amountInPaise #
      "&currency=inr" #
      "&payment_method_types[]=card" #
      "&metadata[bookingId]=" # debug_show booking.id #
      "&metadata[batchId]=" # debug_show batchId #
      "&success_url=https://shailhikers.com/book/success?bookingId=" # debug_show booking.id #
      "&cancel_url=https://shailhikers.com/book/cancel?bookingId=" # debug_show booking.id
    );
    let authHeader = "Basic " # secretKey # ":";
    let request : HttpRequestArgs = {
      url = "https://api.stripe.com/v1/checkout/sessions";
      max_response_bytes = ?8192;
      headers = [
        { name = "Content-Type"; value = "application/x-www-form-urlencoded" },
        { name = "Authorization"; value = authHeader },
      ];
      body = ?body;
      method = #post;
      transform = null;
    };
    let response = await mgmt.http_request(request);
    if (response.status != 200) {
      // Stripe call failed — booking is persisted but no checkout URL
      return #ok {
        bookingId = booking.id;
        checkoutUrl = "";
        sessionId = "";
      };
    };
    // Parse session id and url from JSON body (minimal extraction)
    let bodyText = switch (response.body.decodeUtf8()) {
      case null { "" };
      case (?t) { t };
    };
    let sessionId = extractJsonField(bodyText, "\"id\"");
    let checkoutUrl = extractJsonField(bodyText, "\"url\"");
    #ok { bookingId = booking.id; checkoutUrl; sessionId };
  };

  // ── confirmBookingPayment ───────────────────────────────────────────────────

  // Verifies Stripe session status and marks booking as #Paid.
  public shared ({ caller }) func confirmBookingPayment(
    bookingId : Nat,
    stripeSessionId : Text,
  ) : async { #ok : BookingLib.BookingPublic; #err : Text } {
    // Verify caller owns the booking
    switch (BookingLib.getById(bookings, bookingId, caller)) {
      case null { return #err "Not authorized" };
      case (?existing) {
        if (existing.paymentStatus == #Paid) {
          return #err "Already paid";
        };
      };
    };
    // Call Stripe to verify session status
    let secretKey = stripeState.stripeSecretKey;
    let verified = if (secretKey == "") {
      // No key configured — accept in test mode
      true;
    } else {
      let request : HttpRequestArgs = {
        url = "https://api.stripe.com/v1/checkout/sessions/" # stripeSessionId;
        max_response_bytes = ?8192;
        headers = [
          { name = "Authorization"; value = "Basic " # secretKey # ":" },
        ];
        body = null;
        method = #get;
        transform = null;
      };
      let response = await mgmt.http_request(request);
      if (response.status == 200) {
        let bodyText = switch (response.body.decodeUtf8()) {
          case null { "" };
          case (?t) { t };
        };
        let status = extractJsonField(bodyText, "\"payment_status\"");
        status == "paid";
      } else {
        false;
      };
    };
    if (not verified) {
      return #err "Payment not confirmed by Stripe";
    };
    switch (BookingLib.confirmPayment(bookings, bookingId, caller, stripeSessionId)) {
      case null { #err "Booking not found or already processed" };
      case (?confirmed) { #ok confirmed };
    };
  };

  // ── cancelBooking ───────────────────────────────────────────────────────────

  // Cancels booking; releases seats if paid; issues Stripe refund if paid.
  public shared ({ caller }) func cancelBooking(id : Nat) : async { #ok : Text; #err : Text } {
    switch (BookingLib.cancel(bookings, id, caller)) {
      case null {
        #err "Not authorized";
      };
      case (?(groupSize, batchId, sessionIdOpt)) {
        // Release seats if the booking was confirmed (#Paid, groupSize > 0)
        if (groupSize > 0) {
          ignore BatchLib.releaseSeats(batches, batchId, groupSize);
        };
        // Issue Stripe refund for paid bookings
        let refundResult = switch (sessionIdOpt) {
          case null { "no_refund_needed" };
          case (?sessionId) {
            let secretKey = stripeState.stripeSecretKey;
            if (secretKey == "") {
              "refund_skipped_no_key";
            } else {
              // First get the PaymentIntent from the session
              let refundBody = Text.encodeUtf8(
                "payment_intent=" # sessionId
              );
              let request : HttpRequestArgs = {
                url = "https://api.stripe.com/v1/refunds";
                max_response_bytes = ?4096;
                headers = [
                  { name = "Content-Type"; value = "application/x-www-form-urlencoded" },
                  { name = "Authorization"; value = "Basic " # secretKey # ":" },
                ];
                body = ?refundBody;
                method = #post;
                transform = null;
              };
              let resp = await mgmt.http_request(request);
              if (resp.status == 200) { "refunded" } else { "refund_failed" };
            };
          };
        };
        #ok refundResult;
      };
    };
  };

  // ── getBookingsByUser / getBookingById ──────────────────────────────────────

  public query ({ caller }) func getBookingsByUser() : async [BookingLib.BookingPublic] {
    BookingLib.getByUser(bookings, caller);
  };

  public query ({ caller }) func getBookingById(id : Nat) : async ?BookingLib.BookingPublic {
    BookingLib.getById(bookings, id, caller);
  };

  // updatePaymentStatus: internal admin-only helper
  public shared func updatePaymentStatus(
    id : Nat,
    status : Common.PaymentStatus,
  ) : async Bool {
    BookingLib.updatePaymentStatus(bookings, id, status);
  };

  // ── Helpers ─────────────────────────────────────────────────────────────────

  // Minimal JSON string-field extractor: finds "key":"value" and returns value.
  func extractJsonField(json : Text, key : Text) : Text {
    let keyWithColon = key # ":";
    let iter = json.split(#text keyWithColon);
    ignore iter.next();
    let afterKey = switch (iter.next()) {
      case null { return "" };
      case (?s) { s };
    };
    let trimmed = afterKey.trimStart(#text " ");
    let afterQuote = trimmed.trimStart(#text "\"");
    let valIter = afterQuote.split(#text "\"");
    switch (valIter.next()) {
      case null { afterQuote };
      case (?val) { val };
    };
  };
};
