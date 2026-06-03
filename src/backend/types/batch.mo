import Common "common";

module {
  public type Batch = {
    id : Nat;
    trekSlug : Common.Slug;
    startDate : Text;
    endDate : Text;
    totalSeats : Nat;
    var bookedSeats : Nat;
    pricePerPerson : Nat;  // in INR
    guideId : Text;
    var status : Common.BatchStatus;
  };

  // Shared (non-mutable) version for API responses
  public type BatchPublic = {
    id : Nat;
    trekSlug : Common.Slug;
    startDate : Text;
    endDate : Text;
    totalSeats : Nat;
    bookedSeats : Nat;
    seatsAvailable : Nat;
    isSoldOut : Bool;
    pricePerPerson : Nat;
    guideId : Text;
    status : Common.BatchStatus;
  };

  // Lightweight availability snapshot for quick queries
  public type BatchAvailability = {
    batchId : Nat;
    seatsAvailable : Nat;
    isSoldOut : Bool;
  };
};
