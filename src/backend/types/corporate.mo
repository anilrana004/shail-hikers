import Common "common";

module {
  public type CorporateLead = {
    id : Nat;
    companyName : Text;
    contactName : Text;
    email : Text;
    phone : Text;
    headcount : Nat;
    preferredDates : Text;
    preferredTrek : Text;
    message : Text;
    createdAt : Common.Timestamp;
  };
};
