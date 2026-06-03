import Map "mo:core/Map";
import UserTypes "../types/user";
import Common "../types/common";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

module {
  public type UserProfile = UserTypes.UserProfile;
  public type UserProfilePublic = UserTypes.UserProfilePublic;

  // Converts mutable UserProfile to shareable form
  public func toPublic(u : UserProfile) : UserProfilePublic {
    {
      principal = u.principal;
      name = u.name;
      email = u.email;
      phone = u.phone;
      city = u.city;
      wishlist = u.wishlist;
      loyaltyTier = u.loyaltyTier;
      totalTreksCompleted = u.totalTreksCompleted;
      referralCode = u.referralCode;
      referralCredits = u.referralCredits;
      createdAt = u.createdAt;
    };
  };

  // Creates or updates a user profile; generates referral code on creation
  public func createOrUpdate(
    users : Map.Map<Common.UserId, UserProfile>,
    principal : Common.UserId,
    name : Text,
    email : Text,
    phone : Text,
    city : Text,
    now : Common.Timestamp,
  ) : UserProfilePublic {
    switch (users.get(principal)) {
      case (?existing) {
        existing.name := name;
        existing.email := email;
        existing.phone := phone;
        existing.city := city;
        toPublic(existing);
      };
      case null {
        let profile : UserProfile = {
          principal;
          var name;
          var email;
          var phone;
          var city;
          var wishlist = [];
          var loyaltyTier = #Explorer;
          var totalTreksCompleted = 0;
          referralCode = generateReferralCode(principal);
          var referralCredits = 0;
          createdAt = now;
        };
        users.add(principal, profile);
        toPublic(profile);
      };
    };
  };

  // Returns the profile for a principal, or null
  public func get(users : Map.Map<Common.UserId, UserProfile>, principal : Common.UserId) : ?UserProfilePublic {
    switch (users.get(principal)) {
      case (?u) { ?toPublic(u) };
      case null { null };
    };
  };

  // Adds a trek slug to the user's wishlist (no duplicates)
  public func addToWishlist(
    users : Map.Map<Common.UserId, UserProfile>,
    principal : Common.UserId,
    slug : Text,
  ) : Bool {
    switch (users.get(principal)) {
      case (?u) {
        let already = switch (u.wishlist.find(func(s) { s == slug })) {
          case (?_) { true };
          case null { false };
        };
        if (already) { return false };
        u.wishlist := Array.tabulate<Text>(u.wishlist.size() + 1, func(i) { if (i < u.wishlist.size()) { u.wishlist[i] } else { slug } });
        true;
      };
      case null { false };
    };
  };

  // Removes a trek slug from the user's wishlist
  public func removeFromWishlist(
    users : Map.Map<Common.UserId, UserProfile>,
    principal : Common.UserId,
    slug : Text,
  ) : Bool {
    switch (users.get(principal)) {
      case (?u) {
        let updated = u.wishlist.filter(func(s) { s != slug });
        if (updated.size() == u.wishlist.size()) { return false };
        u.wishlist := updated;
        true;
      };
      case null { false };
    };
  };

  // Generates a short unique referral code from principal
  public func generateReferralCode(principal : Common.UserId) : Text {
    let t = principal.toText();
    let len = t.size();
    let suffix = if (len >= 6) { Text.fromIter(t.toIter() |> _.take(6)) } else { t };
    "SH-" # suffix;
  };

  // Increments totalTreksCompleted and recalculates loyalty tier
  public func recordCompletedTrek(
    users : Map.Map<Common.UserId, UserProfile>,
    principal : Common.UserId,
  ) : Bool {
    switch (users.get(principal)) {
      case (?u) {
        u.totalTreksCompleted += 1;
        u.loyaltyTier := if (u.totalTreksCompleted >= 10) {
          #SummitMaster;
        } else if (u.totalTreksCompleted >= 4) {
          #Trailblazer;
        } else {
          #Explorer;
        };
        true;
      };
      case null { false };
    };
  };
};
