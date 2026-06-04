import Common "common";

module {
  public type WaitlistStatus = {
    #Waiting;
    #Notified;
    #Booked;
    #Expired;
  };

  public type WaitlistEntry = {
    id         : Text;
    batchId    : Text;
    name       : Text;
    email      : Text;
    phone      : Text;
    numPeople  : Nat;
    position   : Nat;
    var status     : WaitlistStatus;
    var notifiedAt : ?Int;
    createdAt  : Int;
  };

  // Shared (non-mutable) version for API responses
  public type WaitlistEntryPublic = {
    id         : Text;
    batchId    : Text;
    name       : Text;
    email      : Text;
    phone      : Text;
    numPeople  : Nat;
    position   : Nat;
    status     : WaitlistStatus;
    notifiedAt : ?Int;
    createdAt  : Int;
  };

  public type WaitlistResult = {
    #ok  : { position : Nat; waitlistId : Text };
    #err : Text;
  };
};
