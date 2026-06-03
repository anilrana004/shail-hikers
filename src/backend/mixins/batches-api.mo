import List "mo:core/List";
import BatchLib "../lib/batches";
import BatchTypes "../types/batch";

mixin (batches : List.List<BatchLib.Batch>) {
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
