import List "mo:core/List";
import BatchLib "../lib/batches";
import BatchTypes "../types/batch";

mixin (
  batches    : List.List<BatchLib.Batch>,
  adminState : { var adminPrincipal : ?Principal },
) {

  func isAdminBatches(caller : Principal) : Bool {
    switch (adminState.adminPrincipal) {
      case (?a) { caller == a };
      case null { false };
    };
  };
  // ── Admin: list ALL batches (across all treks) ─────────────────────────────
  public query func getBatchesAll() : async [BatchLib.BatchPublic] {
    BatchLib.getAll(batches);
  };

  // ── Admin: create a new batch ───────────────────────────────────────────────
  public shared ({ caller }) func createBatch(
    input : BatchTypes.BatchCreateInput,
  ) : async { #ok : BatchLib.BatchPublic; #err : Text } {
    if (not isAdminBatches(caller)) { return #err("Unauthorized") };
    BatchLib.createBatch(batches, input);
  };

  // ── Admin: update an existing batch ────────────────────────────────────────
  public shared ({ caller }) func updateBatch(
    batchId : Nat,
    input   : BatchTypes.BatchUpdateInput,
  ) : async { #ok : BatchLib.BatchPublic; #err : Text } {
    if (not isAdminBatches(caller)) { return #err("Unauthorized") };
    BatchLib.updateBatch(batches, batchId, input);
  };

  // ── Admin: delete a batch ───────────────────────────────────────────────────
  public shared ({ caller }) func deleteBatch(
    batchId : Nat,
  ) : async { #ok : Bool; #err : Text } {
    if (not isAdminBatches(caller)) { return #err("Unauthorized") };
    BatchLib.deleteBatch(batches, batchId);
  };

  // Returns all batches for a given trek slug
  public query func getBatchesByTrek(trekSlug : Text) : async [BatchLib.BatchPublic] {
    BatchLib.getByTrek(batches, trekSlug);
  };

  // Returns all batches with Open status
  public query func getAvailableBatches() : async [BatchLib.BatchPublic] {
    BatchLib.getAvailable(batches);
  };

  // Returns a single batch by id
  public query func getBatchById(id : Nat) : async ?BatchLib.BatchPublic {
    BatchLib.getById(batches, id);
  };

  // Returns availability snapshot (seatsAvailable + isSoldOut) for a batch
  public query func getBatchAvailability(batchId : Nat) : async ?BatchTypes.BatchAvailability {
    BatchLib.getBatchAvailability(batches, batchId);
  };
};
