import Common "common";

module {
  public type TravelerInfo = {
    name : Text;
    age : Nat;
    gender : Text;
    emergencyContact : Text;
    medicalConditions : Text;
    tshirtSize : Text;
    mealPreference : Common.MealPreference;
  };

  public type AddOn = {
    name : Text;
    pricePerPerson : Nat;
  };

  public type Booking = {
    id : Nat;
    userId : Common.UserId;
    trekSlug : Common.Slug;
    batchId : Nat;
    travelers : [TravelerInfo];
    addOns : [AddOn];
    totalAmount : Nat;
    var paymentStatus : Common.PaymentStatus;
    var stripeSessionId : ?Text;
    createdAt : Common.Timestamp;
  };

  public type BookingPublic = {
    id : Nat;
    userId : Common.UserId;
    trekSlug : Common.Slug;
    batchId : Nat;
    travelers : [TravelerInfo];
    addOns : [AddOn];
    totalAmount : Nat;
    paymentStatus : Common.PaymentStatus;
    stripeSessionId : ?Text;
    createdAt : Common.Timestamp;
  };
};
