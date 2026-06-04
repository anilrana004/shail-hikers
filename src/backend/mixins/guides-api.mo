import Map "mo:core/Map";
import GuidesLib "../lib/guides";
import Guide "../types/guide";

// Mixin: guide management public endpoints.
// Receives:
//   guides     — guide map
//   adminState — shared mutable record holding the admin principal
mixin (
  guides     : Map.Map<Text, GuidesLib.Guide>,
  adminState : { var adminPrincipal : ?Principal },
) {

  func isAdminGuides(caller : Principal) : Bool {
    switch (adminState.adminPrincipal) {
      case (?a) { caller == a };
      case null { false };
    };
  };

  // ── Public query: list all guides ───────────────────────────────────────────
  public query func getAllGuides() : async [Guide.GuidePublic] {
    GuidesLib.getAll(guides);
  };

  // ── Public query: get a single guide by id ──────────────────────────────────
  public query func getGuideById(id : Text) : async ?Guide.GuidePublic {
    GuidesLib.getById(guides, id);
  };

  // ── Admin: assign a guide to a batch ────────────────────────────────────────
  public shared ({ caller }) func assignGuideToBatch(
    batchId : Text,
    guideId : Text,
  ) : async { #ok; #err : Text } {
    if (not isAdminGuides(caller)) { return #err "Unauthorized" };
    GuidesLib.assignToBatch(guides, guideId, batchId);
  };

  // ── Admin: update a guide's availability status ─────────────────────────────
  public shared ({ caller }) func updateGuideAvailability(
    guideId      : Text,
    availability : Guide.GuideAvailability,
  ) : async { #ok; #err : Text } {
    if (not isAdminGuides(caller)) { return #err "Unauthorized" };
    GuidesLib.updateAvailability(guides, guideId, availability);
  };

  // ── Admin: insert or update a guide record ──────────────────────────────────
  public shared ({ caller }) func upsertGuide(
    guide : Guide.GuidePublic,
  ) : async { #ok; #err : Text } {
    if (not isAdminGuides(caller)) { return #err "Unauthorized" };
    GuidesLib.upsert(guides, guide);
  };
};
