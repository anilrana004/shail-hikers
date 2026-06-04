import Map "mo:core/Map";
import List "mo:core/List";

// Migration: Add waitlists, guides, and adminState stable fields.
//
// OldActor = verbatim copy of 20260603_210000_AddStripeSession.mo NewActor.
module {

  // ── Shared sub-types (inlined) ─────────────────────────────────────────────────────────
  type Booking = {
    id            : Nat;
    userId        : Principal;
    trekSlug      : Text;
    batchId       : Nat;
    travelers     : [{ name : Text; age : Nat; gender : Text; emergencyContact : Text; medicalConditions : Text; tshirtSize : Text; mealPreference : { #Veg; #NonVeg } }];
    addOns        : [{ name : Text; pricePerPerson : Nat }];
    totalAmount   : Nat;
    var paymentStatus   : { #Pending; #Paid; #Cancelled };
    var stripeSessionId : ?Text;
    createdAt     : Int;
  };

  type WaitlistEntry = {
    id         : Text;
    batchId    : Text;
    name       : Text;
    email      : Text;
    phone      : Text;
    numPeople  : Nat;
    position   : Nat;
    var status     : { #Waiting; #Notified; #Booked; #Expired };
    var notifiedAt : ?Int;
    createdAt  : Int;
  };

  type Guide = {
    id                : Text;
    name              : Text;
    photo             : Text;
    designation       : Text;
    yearsExperience   : Nat;
    certifications    : [Text];
    favoriteTrek      : Text;
    var rating            : Float;
    var totalTreksLed     : Nat;
    var availability      : { #Available; #OnTrek; #OnLeave };
    var currentAssignment : ?Text;
    bio               : Text;
  };

  // ── OldActor: verbatim copy of previous migration's NewActor ───────────────────
  type OldActor = {
    treks          : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; difficulty : { #Easy; #Moderate; #Difficult; #Extreme }; maxAltitude : Nat; trekDistance : Nat; durationDays : Nat; durationNights : Nat; bestTime : Text; startingPoint : Text; nearestRailhead : Text; nearestAirport : Text; basePrice : Nat; region : Text; shortDescription : Text; isFeatured : Bool }>;
    yatras         : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; durationDays : Nat; basePrice : Nat; category : Text; shortDescription : Text; nextDeparture : Text }>;
    batches        : List.List<{ id : Nat; trekSlug : Text; startDate : Text; endDate : Text; totalSeats : Nat; var bookedSeats : Nat; pricePerPerson : Nat; guideId : Text; var status : { #Open; #Full; #Cancelled; #Completed } }>;
    bookings       : List.List<Booking>;
    reviews        : List.List<{ id : Nat; trekSlug : Text; userId : Principal; userName : Text; userCity : Text; rating : Nat; guideRating : Nat; foodRating : Nat; safetyRating : Nat; reviewText : Text; createdAt : Int; var verified : Bool; var helpfulVotes : Nat }>;
    posts          : List.List<{ id : Nat; slug : Text; title : Text; excerpt : Text; content : Text; category : { #TrekTips; #YatraGuides; #Gear; #Stories }; author : Text; readTime : Nat; heroImage : Text; tags : [Text]; publishedAt : Int; var views : Nat }>;
    leads          : List.List<{ id : Nat; companyName : Text; contactName : Text; email : Text; phone : Text; headcount : Nat; preferredDates : Text; preferredTrek : Text; message : Text; createdAt : Int }>;
    users          : Map.Map<Principal, { principal : Principal; var name : Text; var email : Text; var phone : Text; var city : Text; var wishlist : [Text]; var loyaltyTier : { #Explorer; #Trailblazer; #SummitMaster }; var totalTreksCompleted : Nat; referralCode : Text; var referralCredits : Nat; createdAt : Int }>;
    newsletterSubs : Map.Map<Text, { email : Text; preferences : [{ #NewBatches; #Offers; #BlogPosts; #WeatherAlerts }]; subscribedAt : Int }>;
    faqVotes       : Map.Map<Text, { var helpful : Nat; var notHelpful : Nat }>;
    bookingState   : { var nextBookingId : Nat };
    reviewState    : { var nextReviewId  : Nat };
    leadState      : { var nextLeadId    : Nat };
    stripeState    : { var stripeSecretKey : Text; var stripePublicKey : Text };
  };

  // ── NewActor: OldActor + waitlists + guides + adminState ───────────────────────
  type NewActor = {
    treks          : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; difficulty : { #Easy; #Moderate; #Difficult; #Extreme }; maxAltitude : Nat; trekDistance : Nat; durationDays : Nat; durationNights : Nat; bestTime : Text; startingPoint : Text; nearestRailhead : Text; nearestAirport : Text; basePrice : Nat; region : Text; shortDescription : Text; isFeatured : Bool }>;
    yatras         : List.List<{ id : Nat; slug : Text; name : Text; tagline : Text; heroImage : Text; durationDays : Nat; basePrice : Nat; category : Text; shortDescription : Text; nextDeparture : Text }>;
    batches        : List.List<{ id : Nat; trekSlug : Text; startDate : Text; endDate : Text; totalSeats : Nat; var bookedSeats : Nat; pricePerPerson : Nat; guideId : Text; var status : { #Open; #Full; #Cancelled; #Completed } }>;
    bookings       : List.List<Booking>;
    reviews        : List.List<{ id : Nat; trekSlug : Text; userId : Principal; userName : Text; userCity : Text; rating : Nat; guideRating : Nat; foodRating : Nat; safetyRating : Nat; reviewText : Text; createdAt : Int; var verified : Bool; var helpfulVotes : Nat }>;
    posts          : List.List<{ id : Nat; slug : Text; title : Text; excerpt : Text; content : Text; category : { #TrekTips; #YatraGuides; #Gear; #Stories }; author : Text; readTime : Nat; heroImage : Text; tags : [Text]; publishedAt : Int; var views : Nat }>;
    leads          : List.List<{ id : Nat; companyName : Text; contactName : Text; email : Text; phone : Text; headcount : Nat; preferredDates : Text; preferredTrek : Text; message : Text; createdAt : Int }>;
    users          : Map.Map<Principal, { principal : Principal; var name : Text; var email : Text; var phone : Text; var city : Text; var wishlist : [Text]; var loyaltyTier : { #Explorer; #Trailblazer; #SummitMaster }; var totalTreksCompleted : Nat; referralCode : Text; var referralCredits : Nat; createdAt : Int }>;
    newsletterSubs : Map.Map<Text, { email : Text; preferences : [{ #NewBatches; #Offers; #BlogPosts; #WeatherAlerts }]; subscribedAt : Int }>;
    faqVotes       : Map.Map<Text, { var helpful : Nat; var notHelpful : Nat }>;
    bookingState   : { var nextBookingId : Nat };
    reviewState    : { var nextReviewId  : Nat };
    leadState      : { var nextLeadId    : Nat };
    stripeState    : { var stripeSecretKey : Text; var stripePublicKey : Text };
    // New fields
    waitlists      : Map.Map<Text, List.List<WaitlistEntry>>;
    guides         : Map.Map<Text, Guide>;
    adminState     : { var adminPrincipal : ?Principal };
  };

  public func migration(old : OldActor) : NewActor {
    {
      treks          = old.treks;
      yatras         = old.yatras;
      batches        = old.batches;
      bookings       = old.bookings;
      reviews        = old.reviews;
      posts          = old.posts;
      leads          = old.leads;
      users          = old.users;
      newsletterSubs = old.newsletterSubs;
      faqVotes       = old.faqVotes;
      bookingState   = old.bookingState;
      reviewState    = old.reviewState;
      leadState      = old.leadState;
      stripeState    = old.stripeState;
      // Initialise new fields empty
      waitlists      = Map.empty<Text, List.List<WaitlistEntry>>();
      guides         = Map.empty<Text, Guide>();
      adminState     = { var adminPrincipal = null };
    };
  };
};
