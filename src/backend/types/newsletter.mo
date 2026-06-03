import Common "common";

module {
  public type NewsletterSub = {
    email : Text;
    preferences : [Common.NewsletterPreference];
    subscribedAt : Common.Timestamp;
  };
};
