import Map "mo:core/Map";
import NewsletterLib "../lib/newsletter";
import Common "../types/common";

mixin (subs : Map.Map<Text, NewsletterLib.NewsletterSub>) {
  // Subscribes or updates an email subscription
  public shared func subscribe(
    email : Text,
    preferences : [Common.NewsletterPreference],
  ) : async Bool {
    NewsletterLib.subscribe(subs, email, preferences, 0);
  };

  // Removes a subscription by email
  public shared func unsubscribe(email : Text) : async Bool {
    NewsletterLib.unsubscribe(subs, email);
  };

  // Returns total active subscriber count (public stat)
  public query func getSubscriberCount() : async Nat {
    NewsletterLib.getSubscriberCount(subs);
  };
};
