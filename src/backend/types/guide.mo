module {
  public type GuideAvailability = {
    #Available;
    #OnTrek;
    #OnLeave;
  };

  public type Guide = {
    id                : Text;
    name              : Text;
    photo             : Text;
    designation       : Text;
    yearsExperience   : Nat;
    certifications    : [Text];
    favoriteTrek      : Text;
    var rating            : Float;
    var totalTreksLed     : Nat;
    var availability      : GuideAvailability;
    var currentAssignment : ?Text;
    bio               : Text;
  };

  // Shared (non-mutable) version for API responses
  public type GuidePublic = {
    id                : Text;
    name              : Text;
    photo             : Text;
    designation       : Text;
    yearsExperience   : Nat;
    certifications    : [Text];
    favoriteTrek      : Text;
    rating            : Float;
    totalTreksLed     : Nat;
    availability      : GuideAvailability;
    currentAssignment : ?Text;
    bio               : Text;
  };
};
