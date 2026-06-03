import List "mo:core/List";
import CorporateTypes "../types/corporate";
import Common "../types/common";

module {
  public type CorporateLead = CorporateTypes.CorporateLead;

  // Saves a new corporate enquiry lead
  public func submit(
    leads : List.List<CorporateLead>,
    state : { var nextLeadId : Nat },
    companyName : Text,
    contactName : Text,
    email : Text,
    phone : Text,
    headcount : Nat,
    preferredDates : Text,
    preferredTrek : Text,
    message : Text,
    now : Common.Timestamp,
  ) : CorporateLead {
    let id = state.nextLeadId;
    state.nextLeadId += 1;
    let lead : CorporateLead = { id; companyName; contactName; email; phone; headcount; preferredDates; preferredTrek; message; createdAt = now };
    leads.add(lead);
    lead;
  };

  // Returns all corporate leads (admin-only call site)
  public func getAll(leads : List.List<CorporateLead>) : [CorporateLead] {
    leads.toArray();
  };
};
