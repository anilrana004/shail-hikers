import List "mo:core/List";
import TrekLib "../lib/treks";
import Common "../types/common";

mixin (treks : List.List<TrekLib.Trek>) {
  // Returns all treks
  public query func getAllTreks() : async [TrekLib.Trek] {
    TrekLib.getAll(treks);
  };

  // Returns a trek by slug
  public query func getTrekBySlug(slug : Text) : async ?TrekLib.Trek {
    TrekLib.getBySlug(treks, slug);
  };

  // Returns treks filtered by difficulty level
  public query func getTreksByDifficulty(difficulty : Common.Difficulty) : async [TrekLib.Trek] {
    TrekLib.getByDifficulty(treks, difficulty);
  };

  // Returns featured treks only
  public query func getFeaturedTreks() : async [TrekLib.Trek] {
    TrekLib.getFeatured(treks);
  };
};
