import List "mo:core/List";
import CorporateLib "../lib/corporate";

mixin (
  leads : List.List<CorporateLib.CorporateLead>,
  leadState : { var nextLeadId : Nat },
) {
  // Submits a corporate enquiry lead
  public shared func submitCorporateLead(
    companyName : Text,
    contactName : Text,
    email : Text,
    phone : Text,
    headcount : Nat,
    preferredDates : Text,
    preferredTrek : Text,
    message : Text,
  ) : async CorporateLib.CorporateLead {
    CorporateLib.submit(leads, leadState, companyName, contactName, email, phone, headcount, preferredDates, preferredTrek, message, 0);
  };

  // Returns all corporate leads; caller must be canister owner
  public shared ({ caller }) func getCorporateLeads() : async [CorporateLib.CorporateLead] {
    ignore caller;
    CorporateLib.getAll(leads);
  };
};
