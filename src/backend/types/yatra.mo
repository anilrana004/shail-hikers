import Common "common";

module {
  public type Yatra = {
    id : Nat;
    slug : Common.Slug;
    name : Text;
    tagline : Text;
    heroImage : Text;
    durationDays : Nat;
    basePrice : Nat;  // in INR
    category : Text;
    shortDescription : Text;
    nextDeparture : Text;
  };
};
