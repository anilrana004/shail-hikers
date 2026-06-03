import Map "mo:core/Map";
import UserLib "../lib/users";
import Common "../types/common";

mixin (users : Map.Map<Common.UserId, UserLib.UserProfile>) {
  // Creates or updates the profile of the calling user
  public shared ({ caller }) func createOrUpdateProfile(
    name : Text,
    email : Text,
    phone : Text,
    city : Text,
  ) : async UserLib.UserProfilePublic {
    UserLib.createOrUpdate(users, caller, name, email, phone, city, 0);
  };

  // Returns the profile of the calling user
  public query ({ caller }) func getUserProfile() : async ?UserLib.UserProfilePublic {
    UserLib.get(users, caller);
  };

  // Adds a trek slug to the calling user's wishlist
  public shared ({ caller }) func addToWishlist(slug : Text) : async Bool {
    UserLib.addToWishlist(users, caller, slug);
  };

  // Removes a trek slug from the calling user's wishlist
  public shared ({ caller }) func removeFromWishlist(slug : Text) : async Bool {
    UserLib.removeFromWishlist(users, caller, slug);
  };
};
