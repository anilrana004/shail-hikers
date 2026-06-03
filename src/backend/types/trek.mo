import Common "common";

module {
  public type Trek = {
    id : Nat;
    slug : Common.Slug;
    name : Text;
    tagline : Text;
    heroImage : Text;
    difficulty : Common.Difficulty;
    maxAltitude : Nat;       // in feet
    trekDistance : Nat;      // in km
    durationDays : Nat;
    durationNights : Nat;
    bestTime : Text;
    startingPoint : Text;
    nearestRailhead : Text;
    nearestAirport : Text;
    basePrice : Nat;         // in INR
    region : Text;
    shortDescription : Text;
    isFeatured : Bool;
  };
};
