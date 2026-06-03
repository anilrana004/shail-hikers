import Map "mo:core/Map";
import List "mo:core/List";

module {
  // OldActor is empty — this is the initial migration for a fresh canister
  type OldActor = {};

  type NewActor = {
    // Seed data collections (List-backed for ordered access)
    treks              : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; difficulty : { #Easy; #Moderate; #Difficult; #Extreme }; maxAltitude : Nat; trekDistance : Nat; durationDays : Nat; durationNights : Nat; bestTime : Text; startingPoint : Text; nearestRailhead : Text; nearestAirport : Text; basePrice : Nat; region : Text; shortDescription : Text; isFeatured : Bool }>;
    yatras             : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; durationDays : Nat; basePrice : Nat; category : Text; shortDescription : Text; nextDeparture : Text }>;
    batches            : List.List<{ id : Nat; trekSlug : Text; startDate : Text; endDate : Text; totalSeats : Nat; var bookedSeats : Nat; pricePerPerson : Nat; guideId : Text; var status : { #Open; #Full; #Cancelled; #Completed } }>;

    // Booking and review collections
    bookings           : List.List<{ id : Nat; userId : Principal; trekSlug : Text; batchId : Nat; travelers : [{ name : Text; age : Nat; gender : Text; emergencyContact : Text; medicalConditions : Text; tshirtSize : Text; mealPreference : { #Veg; #NonVeg } }]; addOns : [{ name : Text; pricePerPerson : Nat }]; totalAmount : Nat; var paymentStatus : { #Pending; #Paid; #Cancelled }; createdAt : Int }>;
    reviews            : List.List<{ id : Nat; trekSlug : Text; userId : Principal; userName : Text; userCity : Text; rating : Nat; guideRating : Nat; foodRating : Nat; safetyRating : Nat; reviewText : Text; createdAt : Int; var verified : Bool; var helpfulVotes : Nat }>;
    posts              : List.List<{ id : Nat; slug : Text; title : Text; excerpt : Text; content : Text; category : { #TrekTips; #YatraGuides; #Gear; #Stories }; author : Text; readTime : Nat; heroImage : Text; tags : [Text]; publishedAt : Int; var views : Nat }>;
    leads              : List.List<{ id : Nat; companyName : Text; contactName : Text; email : Text; phone : Text; headcount : Nat; preferredDates : Text; preferredTrek : Text; message : Text; createdAt : Int }>;

    // Map-backed collections for O(1) key lookups
    users              : Map.Map<Principal, { principal : Principal; var name : Text; var email : Text; var phone : Text; var city : Text; var wishlist : [Text]; var loyaltyTier : { #Explorer; #Trailblazer; #SummitMaster }; var totalTreksCompleted : Nat; referralCode : Text; var referralCredits : Nat; createdAt : Int }>;
    newsletterSubs     : Map.Map<Text, { email : Text; preferences : [{ #NewBatches; #Offers; #BlogPosts; #WeatherAlerts }]; subscribedAt : Int }>;
    faqVotes           : Map.Map<Text, { var helpful : Nat; var notHelpful : Nat }>;

    bookingState       : { var nextBookingId : Nat };
    reviewState        : { var nextReviewId  : Nat };
    leadState          : { var nextLeadId    : Nat };
  };

  public func migration(_ : OldActor) : NewActor {
    {
      treks          = List.empty();
      yatras         = List.empty();
      batches        = List.empty();
      bookings       = List.empty();
      reviews        = List.empty();
      posts          = List.empty();
      leads          = List.empty();
      users          = Map.empty();
      newsletterSubs = Map.empty();
      faqVotes       = Map.empty();
      bookingState   = { var nextBookingId = 1 };
      reviewState    = { var nextReviewId  = 1 };
      leadState      = { var nextLeadId    = 1 };
    };
  };
};
