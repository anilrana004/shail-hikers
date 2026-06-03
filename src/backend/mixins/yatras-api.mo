import List "mo:core/List";
import YatraLib "../lib/yatras";

mixin (yatras : List.List<YatraLib.Yatra>) {
  // Returns all yatras
  public query func getAllYatras() : async [YatraLib.Yatra] {
    YatraLib.getAll(yatras);
  };

  // Returns a yatra by slug
  public query func getYatraBySlug(slug : Text) : async ?YatraLib.Yatra {
    YatraLib.getBySlug(yatras, slug);
  };
};
