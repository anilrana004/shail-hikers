import List "mo:core/List";
import BookingTypes "../types/booking";
import Common "../types/common";

module {
  public type Booking = BookingTypes.Booking;
  public type BookingPublic = BookingTypes.BookingPublic;
  public type TravelerInfo = BookingTypes.TravelerInfo;
  public type AddOn = BookingTypes.AddOn;

  // Converts mutable Booking to a shareable BookingPublic record
  public func toPublic(b : Booking) : BookingPublic {
    {
      id = b.id;
      userId = b.userId;
      trekSlug = b.trekSlug;
      batchId = b.batchId;
      travelers = b.travelers;
      addOns = b.addOns;
      totalAmount = b.totalAmount;
      paymentStatus = b.paymentStatus;
      razorpayPaymentId = b.razorpayPaymentId;
      createdAt = b.createdAt;
    };
  };

  // Creates a new booking, reserves a seat in the batch list
  public func create(
    bookings : List.List<Booking>,
    state : { var nextBookingId : Nat },
    userId : Common.UserId,
    trekSlug : Text,
    batchId : Nat,
    travelers : [TravelerInfo],
    addOns : [AddOn],
    totalAmount : Nat,
    now : Common.Timestamp,
  ) : BookingPublic {
    let id = state.nextBookingId;
    state.nextBookingId += 1;
    let booking : Booking = {
      id;
      userId;
      trekSlug;
      batchId;
      travelers;
      addOns;
      totalAmount;
      var paymentStatus = #Pending;
      var razorpayPaymentId = null;
      createdAt = now;
    };
    bookings.add(booking);
    toPublic(booking);
  };

  // Returns all bookings for a given user
  public func getByUser(bookings : List.List<Booking>, userId : Common.UserId) : [BookingPublic] {
    bookings.filter(func(b) { b.userId == userId }).map<Booking, BookingPublic>(func(b) { toPublic(b) }).toArray();
  };

  // Returns a single booking by id, only if it belongs to userId
  public func getById(bookings : List.List<Booking>, id : Nat, userId : Common.UserId) : ?BookingPublic {
    switch (bookings.find(func(b) { b.id == id and b.userId == userId })) {
      case (?b) { ?toPublic(b) };
      case null { null };
    };
  };

  // Updates the payment status of a booking
  public func updatePaymentStatus(
    bookings : List.List<Booking>,
    id : Nat,
    status : Common.PaymentStatus,
  ) : Bool {
    switch (bookings.find(func(b) { b.id == id })) {
      case (?b) { b.paymentStatus := status; true };
      case null { false };
    };
  };

  // Confirms payment: sets paymentStatus to #Paid, stores razorpayPaymentId.
  // Returns the updated BookingPublic, or null if not found / not owned by caller.
  public func confirmPayment(
    bookings : List.List<Booking>,
    id : Nat,
    userId : Common.UserId,
    razorpayPaymentId : Text,
  ) : ?BookingPublic {
    switch (bookings.find(func(b) { b.id == id and b.userId == userId })) {
      case null { null };
      case (?b) {
        if (b.paymentStatus != #Pending) {
          null;
        } else {
          b.paymentStatus := #Paid;
          b.razorpayPaymentId := ?razorpayPaymentId;
          ?toPublic(b);
        };
      };
    };
  };

  // Cancels a booking (sets paymentStatus to #Cancelled).
  // If the booking was #Paid, returns the groupSize so the caller can release seats.
  // Returns: ?(groupSize, batchId) on success, null if not found/not owned.
  public func cancel(
    bookings : List.List<Booking>,
    id : Nat,
    userId : Common.UserId,
  ) : ?(Nat, Nat) {
    switch (bookings.find(func(b) { b.id == id and b.userId == userId })) {
      case null { null };
      case (?b) {
        if (b.paymentStatus == #Cancelled) {
          // Already cancelled — treat as not found
          null;
        } else {
          let wasPaid = b.paymentStatus == #Paid;
          b.paymentStatus := #Cancelled;
          if (wasPaid) {
            ?(b.travelers.size(), b.batchId);
          } else {
            // Pending cancellation succeeded; signal with (0, 0) so caller
            // knows it worked but no seats need releasing
            ?(0, 0);
          };
        };
      };
    };
  };
};
