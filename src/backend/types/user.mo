import Common "common";

module {
  public type UserProfile = {
    principal : Common.UserId;
    var name : Text;
    var email : Text;
    var phone : Text;
    var city : Text;
    var wishlist : [Common.Slug];
    var loyaltyTier : Common.LoyaltyTier;
    var totalTreksCompleted : Nat;
    referralCode : Text;
    var referralCredits : Nat;
    createdAt : Common.Timestamp;
  };

  public type UserProfilePublic = {
    principal : Common.UserId;
    name : Text;
    email : Text;
    phone : Text;
    city : Text;
    wishlist : [Common.Slug];
    loyaltyTier : Common.LoyaltyTier;
    totalTreksCompleted : Nat;
    referralCode : Text;
    referralCredits : Nat;
    createdAt : Common.Timestamp;
  };
};
