import Common "common";

module {
  public type Review = {
    id : Nat;
    trekSlug : Common.Slug;
    userId : Common.UserId;
    userName : Text;
    userCity : Text;
    rating : Nat;       // 1–5
    guideRating : Nat;  // 1–5
    foodRating : Nat;   // 1–5
    safetyRating : Nat; // 1–5
    reviewText : Text;
    createdAt : Common.Timestamp;
    var verified : Bool;
    var helpfulVotes : Nat;
  };

  public type ReviewPublic = {
    id : Nat;
    trekSlug : Common.Slug;
    userId : Common.UserId;
    userName : Text;
    userCity : Text;
    rating : Nat;
    guideRating : Nat;
    foodRating : Nat;
    safetyRating : Nat;
    reviewText : Text;
    createdAt : Common.Timestamp;
    verified : Bool;
    helpfulVotes : Nat;
  };
};
