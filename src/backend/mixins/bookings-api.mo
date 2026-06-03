import List "mo:core/List";
import BatchLib "../lib/batches";
import BookingLib "../lib/bookings";
import Common "../types/common";

mixin (
  bookings : List.List<BookingLib.Booking>,
  bookingState : { var nextBookingId : Nat },
  batches : List.List<BatchLib.Batch>,
) {
  // Creates a new booking for the calling user
  public shared ({ caller }) func createBooking(
    trekSlug : Text,
    batchId : Nat,
    travelers : [BookingLib.TravelerInfo],
    addOns : [BookingLib.AddOn],
    totalAmount : Nat,
  ) : async BookingLib.BookingPublic {
    BookingLib.create(bookings, bookingState, caller, trekSlug, batchId, travelers, addOns, totalAmount, 0);
  };

  // Returns all bookings belonging to the calling user
  public query ({ caller }) func getBookingsByUser() : async [BookingLib.BookingPublic] {
    BookingLib.getByUser(bookings, caller);
  };

  // Returns a single booking by id (must belong to caller)
  public query ({ caller }) func getBookingById(id : Nat) : async ?BookingLib.BookingPublic {
    BookingLib.getById(bookings, id, caller);
  };

  // Updates payment status; only canister owner may call this
  public shared ({ caller }) func updatePaymentStatus(
    id : Nat,
    status : Common.PaymentStatus,
  ) : async Bool {
    ignore caller;
    BookingLib.updatePaymentStatus(bookings, id, status);
  };

  // Confirms payment for a booking: sets paymentStatus to #Paid, stores razorpayPaymentId,
  // and atomically decrements batch seatsBooked by groupSize.
  // Returns updated BookingPublic or error text.
  public shared ({ caller }) func confirmBookingPayment(
    bookingId : Nat,
    razorpayPaymentId : Text,
  ) : async { #ok : BookingLib.BookingPublic; #err : Text } {
    switch (BookingLib.confirmPayment(bookings, bookingId, caller, razorpayPaymentId)) {
      case null { #err "Booking not found or already processed" };
      case (?confirmed) {
        ignore BatchLib.reserveSeats(batches, confirmed.batchId, confirmed.travelers.size());
        #ok confirmed;
      };
    };
  };

  // Cancels a booking belonging to the calling user.
  // If the booking was previously paid (#Paid), atomically increments batch seatsBooked back.
  public shared ({ caller }) func cancelBooking(id : Nat) : async Bool {
    switch (BookingLib.cancel(bookings, id, caller)) {
      case null {
        // Booking not found, not owned by caller, or already cancelled
        false;
      };
      case (?(groupSize, batchId)) {
        // Release seats only when groupSize > 0 (i.e. booking was #Paid)
        if (groupSize > 0) {
          ignore BatchLib.releaseSeats(batches, batchId, groupSize);
        };
        true;
      };
    };
  };
};
