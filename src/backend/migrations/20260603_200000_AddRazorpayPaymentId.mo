import Map "mo:core/Map";
import List "mo:core/List";

// Migration: Add var razorpayPaymentId : ?Text to Booking.
//
// OldActor exactly matches 20260603_000000_Init.mo NewActor
// (the only migration ever applied to the live canister).
// Types are copied verbatim from Init's NewActor — no changes.
//
// NewActor = OldActor but with Booking gaining var razorpayPaymentId : ?Text.
module {

  // ── Types copied verbatim from Init NewActor ────────────────────────────────

  type OldBooking = {
    id            : Nat;
    userId        : Principal;
    trekSlug      : Text;
    batchId       : Nat;
    travelers     : [{ name : Text; age : Nat; gender : Text; emergencyContact : Text; medicalConditions : Text; tshirtSize : Text; mealPreference : { #Veg; #NonVeg } }];
    addOns        : [{ name : Text; pricePerPerson : Nat }];
    totalAmount   : Nat;
    var paymentStatus : { #Pending; #Paid; #Cancelled };
    createdAt     : Int;
  };

  type NewBooking = {
    id            : Nat;
    userId        : Principal;
    trekSlug      : Text;
    batchId       : Nat;
    travelers     : [{ name : Text; age : Nat; gender : Text; emergencyContact : Text; medicalConditions : Text; tshirtSize : Text; mealPreference : { #Veg; #NonVeg } }];
    addOns        : [{ name : Text; pricePerPerson : Nat }];
    totalAmount   : Nat;
    var paymentStatus : { #Pending; #Paid; #Cancelled };
    var razorpayPaymentId : ?Text;
    createdAt     : Int;
  };

  // OldActor = verbatim copy of Init NewActor (Booking WITHOUT razorpayPaymentId)
  type OldActor = {
    treks          : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; difficulty : { #Easy; #Moderate; #Difficult; #Extreme }; maxAltitude : Nat; trekDistance : Nat; durationDays : Nat; durationNights : Nat; bestTime : Text; startingPoint : Text; nearestRailhead : Text; nearestAirport : Text; basePrice : Nat; region : Text; shortDescription : Text; isFeatured : Bool }>;
    yatras         : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; durationDays : Nat; basePrice : Nat; category : Text; shortDescription : Text; nextDeparture : Text }>;
    batches        : List.List<{ id : Nat; trekSlug : Text; startDate : Text; endDate : Text; totalSeats : Nat; var bookedSeats : Nat; pricePerPerson : Nat; guideId : Text; var status : { #Open; #Full; #Cancelled; #Completed } }>;
    bookings       : List.List<OldBooking>;
    reviews        : List.List<{ id : Nat; trekSlug : Text; userId : Principal; userName : Text; userCity : Text; rating : Nat; guideRating : Nat; foodRating : Nat; safetyRating : Nat; reviewText : Text; createdAt : Int; var verified : Bool; var helpfulVotes : Nat }>;
    posts          : List.List<{ id : Nat; slug : Text; title : Text; excerpt : Text; content : Text; category : { #TrekTips; #YatraGuides; #Gear; #Stories }; author : Text; readTime : Nat; heroImage : Text; tags : [Text]; publishedAt : Int; var views : Nat }>;
    leads          : List.List<{ id : Nat; companyName : Text; contactName : Text; email : Text; phone : Text; headcount : Nat; preferredDates : Text; preferredTrek : Text; message : Text; createdAt : Int }>;
    users          : Map.Map<Principal, { principal : Principal; var name : Text; var email : Text; var phone : Text; var city : Text; var wishlist : [Text]; var loyaltyTier : { #Explorer; #Trailblazer; #SummitMaster }; var totalTreksCompleted : Nat; referralCode : Text; var referralCredits : Nat; createdAt : Int }>;
    newsletterSubs : Map.Map<Text, { email : Text; preferences : [{ #NewBatches; #Offers; #BlogPosts; #WeatherAlerts }]; subscribedAt : Int }>;
    faqVotes       : Map.Map<Text, { var helpful : Nat; var notHelpful : Nat }>;
    bookingState   : { var nextBookingId : Nat };
    reviewState    : { var nextReviewId  : Nat };
    leadState      : { var nextLeadId    : Nat };
  };

  // NewActor = same as OldActor but bookings use NewBooking (with razorpayPaymentId)
  type NewActor = {
    treks          : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; difficulty : { #Easy; #Moderate; #Difficult; #Extreme }; maxAltitude : Nat; trekDistance : Nat; durationDays : Nat; durationNights : Nat; bestTime : Text; startingPoint : Text; nearestRailhead : Text; nearestAirport : Text; basePrice : Nat; region : Text; shortDescription : Text; isFeatured : Bool }>;
    yatras         : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; durationDays : Nat; basePrice : Nat; category : Text; shortDescription : Text; nextDeparture : Text }>;
    batches        : List.List<{ id : Nat; trekSlug : Text; startDate : Text; endDate : Text; totalSeats : Nat; var bookedSeats : Nat; pricePerPerson : Nat; guideId : Text; var status : { #Open; #Full; #Cancelled; #Completed } }>;
    bookings       : List.List<NewBooking>;
    reviews        : List.List<{ id : Nat; trekSlug : Text; userId : Principal; userName : Text; userCity : Text; rating : Nat; guideRating : Nat; foodRating : Nat; safetyRating : Nat; reviewText : Text; createdAt : Int; var verified : Bool; var helpfulVotes : Nat }>;
    posts          : List.List<{ id : Nat; slug : Text; title : Text; excerpt : Text; content : Text; category : { #TrekTips; #YatraGuides; #Gear; #Stories }; author : Text; readTime : Nat; heroImage : Text; tags : [Text]; publishedAt : Int; var views : Nat }>;
    leads          : List.List<{ id : Nat; companyName : Text; contactName : Text; email : Text; phone : Text; headcount : Nat; preferredDates : Text; preferredTrek : Text; message : Text; createdAt : Int }>;
    users          : Map.Map<Principal, { principal : Principal; var name : Text; var email : Text; var phone : Text; var city : Text; var wishlist : [Text]; var loyaltyTier : { #Explorer; #Trailblazer; #SummitMaster }; var totalTreksCompleted : Nat; referralCode : Text; var referralCredits : Nat; createdAt : Int }>;
    newsletterSubs : Map.Map<Text, { email : Text; preferences : [{ #NewBatches; #Offers; #BlogPosts; #WeatherAlerts }]; subscribedAt : Int }>;
    faqVotes       : Map.Map<Text, { var helpful : Nat; var notHelpful : Nat }>;
    bookingState   : { var nextBookingId : Nat };
    reviewState    : { var nextReviewId  : Nat };
    leadState      : { var nextLeadId    : Nat };
  };

  public func migration(old : OldActor) : NewActor {
    let newBookings = old.bookings.map<OldBooking, NewBooking>(
      func(b) {
        {
          id                    = b.id;
          userId                = b.userId;
          trekSlug              = b.trekSlug;
          batchId               = b.batchId;
          travelers             = b.travelers;
          addOns                = b.addOns;
          totalAmount           = b.totalAmount;
          var paymentStatus     = b.paymentStatus;
          var razorpayPaymentId = null : ?Text;
          createdAt             = b.createdAt;
        };
      }
    );
    {
      treks          = old.treks;
      yatras         = old.yatras;
      batches        = old.batches;
      bookings       = newBookings;
      reviews        = old.reviews;
      posts          = old.posts;
      leads          = old.leads;
      users          = old.users;
      newsletterSubs = old.newsletterSubs;
      faqVotes       = old.faqVotes;
      bookingState   = old.bookingState;
      reviewState    = old.reviewState;
      leadState      = old.leadState;
    };
  };
};
