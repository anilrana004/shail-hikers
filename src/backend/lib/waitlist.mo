import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Waitlist "../types/waitlist";

module {
  public type WaitlistEntry = Waitlist.WaitlistEntry;
  public type WaitlistEntryPublic = Waitlist.WaitlistEntryPublic;
  public type WaitlistResult = Waitlist.WaitlistResult;

  // Join the waitlist for a batch. Returns position and generated id.
  public func join(
    waitlists : Map.Map<Text, List.List<WaitlistEntry>>,
    batchId   : Text,
    name      : Text,
    email     : Text,
    phone     : Text,
    numPeople : Nat,
  ) : WaitlistResult {
    let list = switch (waitlists.get(batchId)) {
      case (?l) { l };
      case null {
        let l = List.empty<WaitlistEntry>();
        waitlists.add(batchId, l);
        l;
      };
    };
    let position = list.size() + 1;
    let entry : WaitlistEntry = {
      id         = "wl-" # batchId # "-" # position.toText();
      batchId;
      name;
      email;
      phone;
      numPeople;
      position;
      var status     = #Waiting;
      var notifiedAt = null;
      createdAt  = Time.now();
    };
    list.add(entry);
    #ok { position; waitlistId = entry.id };
  };

  // Return the 1-based position of this email in the batch waitlist, or null.
  public func getPosition(
    waitlists : Map.Map<Text, List.List<WaitlistEntry>>,
    batchId   : Text,
    email     : Text,
  ) : ?Nat {
    switch (waitlists.get(batchId)) {
      case null { null };
      case (?list) {
        switch (list.find(func(e : WaitlistEntry) : Bool {
          let isWaiting = switch (e.status) { case (#Waiting) true; case _ false };
          e.email == email and isWaiting;
        })) {
          case (?entry) { ?entry.position };
          case null { null };
        };
      };
    };
  };

  // Return all entries for a batch (admin).
  public func getByBatch(
    waitlists : Map.Map<Text, List.List<WaitlistEntry>>,
    batchId   : Text,
  ) : [WaitlistEntryPublic] {
    switch (waitlists.get(batchId)) {
      case null { [] };
      case (?list) {
        list.map<WaitlistEntry, WaitlistEntryPublic>(func(e) { toPublic(e) }).toArray();
      };
    };
  };

  // Mark the next #Waiting entry as #Notified; returns true if one was found.
  public func notifyNext(
    waitlists : Map.Map<Text, List.List<WaitlistEntry>>,
    batchId   : Text,
  ) : Bool {
    switch (waitlists.get(batchId)) {
      case null { false };
      case (?list) {
        switch (list.find(func(e : WaitlistEntry) : Bool {
          switch (e.status) { case (#Waiting) true; case _ false };
        })) {
          case null { false };
          case (?entry) {
            entry.status     := #Notified;
            entry.notifiedAt := ?Time.now();
            true;
          };
        };
      };
    };
  };

  // Promote a specific waitlist entry to #Booked (admin).
  public func promote(
    waitlists   : Map.Map<Text, List.List<WaitlistEntry>>,
    batchId     : Text,
    waitlistId  : Text,
  ) : { #ok; #err : Text } {
    switch (waitlists.get(batchId)) {
      case null { #err "not found" };
      case (?list) {
        switch (list.find(func(e : WaitlistEntry) : Bool { e.id == waitlistId })) {
          case null { #err "not found" };
          case (?entry) {
            entry.status := #Booked;
            #ok;
          };
        };
      };
    };
  };

  // Convert internal entry to public (no-var) form.
  public func toPublic(entry : WaitlistEntry) : WaitlistEntryPublic {
    {
      id         = entry.id;
      batchId    = entry.batchId;
      name       = entry.name;
      email      = entry.email;
      phone      = entry.phone;
      numPeople  = entry.numPeople;
      position   = entry.position;
      status     = entry.status;
      notifiedAt = entry.notifiedAt;
      createdAt  = entry.createdAt;
    };
  };
};
