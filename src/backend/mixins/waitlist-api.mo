import Map "mo:core/Map";
import List "mo:core/List";
import Email "mo:caffeineai-email/emailClient";
import WaitlistLib "../lib/waitlist";
import Waitlist "../types/waitlist";

// Mixin: waitlist public endpoints.
// Receives:
//   waitlists  — per-batch waitlist map
//   adminState — shared mutable record holding the admin principal
mixin (
  waitlists  : Map.Map<Text, List.List<WaitlistLib.WaitlistEntry>>,
  adminState : { var adminPrincipal : ?Principal },
) {

  // ── isAdmin helper ──────────────────────────────────────────────────────────
  func isAdminWaitlist(caller : Principal) : Bool {
    switch (adminState.adminPrincipal) {
      case (?a) { caller == a };
      case null { false };
    };
  };

  // ── Public: join the waitlist for a batch ───────────────────────────────────
  public shared ({ caller }) func joinWaitlist(
    batchId   : Text,
    name      : Text,
    email     : Text,
    phone     : Text,
    numPeople : Nat,
  ) : async Waitlist.WaitlistResult {
    ignore caller;
    WaitlistLib.join(waitlists, batchId, name, email, phone, numPeople);
  };

  // ── Public query: position of this email on a batch waitlist ───────────────
  public query func getWaitlistPosition(
    batchId : Text,
    email   : Text,
  ) : async ?Nat {
    WaitlistLib.getPosition(waitlists, batchId, email);
  };

  // ── Admin query: all entries for a batch ────────────────────────────────────
  public shared query ({ caller }) func getWaitlistByBatch(
    batchId : Text,
  ) : async [Waitlist.WaitlistEntryPublic] {
    assert isAdminWaitlist(caller);
    WaitlistLib.getByBatch(waitlists, batchId);
  };

  // ── Internal: notify next waiting entry after a seat opens up ──────────────
  // Called by cancelBooking after releasing seats.
  public shared func notifyNextOnWaitlist(batchId : Text) : async Bool {
    let found = WaitlistLib.notifyNext(waitlists, batchId);
    if (found) {
      switch (waitlists.get(batchId)) {
        case null {};
        case (?list) {
          switch (list.find(func(e : WaitlistLib.WaitlistEntry) : Bool {
              switch (e.status) { case (#Notified) true; case _ false };
            })) {
            case null {};
            case (?entry) {
              ignore await Email.sendServiceEmail(
                "shailhikers",
                [entry.email],
                "A seat has opened — your waitlisted trek batch is waiting for you!",
                "Good news! A seat opened on your waitlisted trek. Visit https://shailhikers.com to book within 24 hours before this offer expires."
              );
            };
          };
        };
      };
    };
    found;
  };

  // ── Admin: manually promote a waitlist entry to booked ─────────────────────
  public shared ({ caller }) func promoteFromWaitlist(
    batchId    : Text,
    waitlistId : Text,
  ) : async { #ok; #err : Text } {
    if (not isAdminWaitlist(caller)) { return #err "Unauthorized" };
    WaitlistLib.promote(waitlists, batchId, waitlistId);
  };

  // ── Admin: send a manual notification message to a waitlist entry ──────────
  public shared ({ caller }) func sendManualWaitlistNotification(
    batchId    : Text,
    waitlistId : Text,
    message    : Text,
  ) : async Bool {
    if (not isAdminWaitlist(caller)) { return false };
    switch (waitlists.get(batchId)) {
      case null { false };
      case (?list) {
        switch (list.find(func(e : WaitlistLib.WaitlistEntry) : Bool { e.id == waitlistId })) {
          case null { false };
          case (?entry) {
            ignore await Email.sendServiceEmail(
              "shailhikers",
              [entry.email],
              "Update on your Shail Hikers waitlist position",
              message
            );
            true;
          };
        };
      };
    };
  };
};
