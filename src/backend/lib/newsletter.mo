import Map "mo:core/Map";
import NewsletterTypes "../types/newsletter";
import Common "../types/common";

module {
  public type NewsletterSub = NewsletterTypes.NewsletterSub;

  // Subscribes an email with given preferences; updates if already subscribed
  public func subscribe(
    subs : Map.Map<Text, NewsletterSub>,
    email : Text,
    preferences : [Common.NewsletterPreference],
    now : Common.Timestamp,
  ) : Bool {
    let sub : NewsletterSub = { email; preferences; subscribedAt = now };
    subs.add(email, sub);
    true;
  };

  // Removes a subscription by email
  public func unsubscribe(subs : Map.Map<Text, NewsletterSub>, email : Text) : Bool {
    switch (subs.get(email)) {
      case (?_) { subs.remove(email); true };
      case null { false };
    };
  };

  // Returns total active subscriber count
  public func getSubscriberCount(subs : Map.Map<Text, NewsletterSub>) : Nat {
    subs.size();
  };
};
