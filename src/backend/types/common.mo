import Time "mo:core/Time";

module {
  // Cross-cutting primitive types
  public type Slug = Text;
  public type Timestamp = Int; // nanoseconds, from Time.now()
  public type UserId = Principal;

  // Shared enumerations
  public type Difficulty = {
    #Easy;
    #Moderate;
    #Difficult;
    #Extreme;
  };

  public type BatchStatus = {
    #Open;
    #Full;
    #Cancelled;
    #Completed;
  };

  public type PaymentStatus = {
    #Pending;
    #Paid;
    #Cancelled;
  };

  public type MealPreference = {
    #Veg;
    #NonVeg;
  };

  public type LoyaltyTier = {
    #Explorer;
    #Trailblazer;
    #SummitMaster;
  };

  public type BlogCategory = {
    #TrekTips;
    #YatraGuides;
    #Gear;
    #Stories;
  };

  public type NewsletterPreference = {
    #NewBatches;
    #Offers;
    #BlogPosts;
    #WeatherAlerts;
  };
};
