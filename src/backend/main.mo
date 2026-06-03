import Map "mo:core/Map";
import List "mo:core/List";
import Common "types/common";
import TrekLib "lib/treks";
import YatraLib "lib/yatras";
import BatchLib "lib/batches";
import BookingLib "lib/bookings";
import UserLib "lib/users";
import ReviewLib "lib/reviews";
import BlogLib "lib/blog";
import CorporateLib "lib/corporate";
import NewsletterLib "lib/newsletter";
import FaqLib "lib/faqs";
import TreksApi "mixins/treks-api";
import YatrasApi "mixins/yatras-api";
import BatchesApi "mixins/batches-api";
import BookingsApi "mixins/bookings-api";
import UsersApi "mixins/users-api";
import ReviewsApi "mixins/reviews-api";
import BlogApi "mixins/blog-api";
import CorporateApi "mixins/corporate-api";
import NewsletterApi "mixins/newsletter-api";
import FaqsApi "mixins/faqs-api";

actor {
  // ── Stable state (typed only; values come from migration chain) ──────────────
  let treks          : List.List<TrekLib.Trek>;
  let yatras         : List.List<YatraLib.Yatra>;
  let batches        : List.List<BatchLib.Batch>;
  let bookings       : List.List<BookingLib.Booking>;
  let reviews        : List.List<ReviewLib.Review>;
  let posts          : List.List<BlogLib.BlogPost>;
  let leads          : List.List<CorporateLib.CorporateLead>;
  let users          : Map.Map<Common.UserId, UserLib.UserProfile>;
  let newsletterSubs : Map.Map<Text, NewsletterLib.NewsletterSub>;
  let faqVotes       : Map.Map<Text, FaqLib.FaqVotes>;

  // Mutable id counters wrapped in records so mixins share the same reference
  let bookingState   : { var nextBookingId : Nat };
  let reviewState    : { var nextReviewId  : Nat };
  let leadState      : { var nextLeadId    : Nat };

  // ── Mixin composition (all public API lives here) ─────────────────────────────
  include TreksApi(treks);
  include YatrasApi(yatras);
  include BatchesApi(batches);
  include BookingsApi(bookings, bookingState, batches);
  include UsersApi(users);
  include ReviewsApi(reviews, reviewState);
  include BlogApi(posts);
  include CorporateApi(leads, leadState);
  include NewsletterApi(newsletterSubs);

  // Group pricing query: groupSize discounts + add-on totals
  // 1 person = +15%, 2-4 = base, 5-8 = -5%, 9-15 = -10%, 16+ = -15%
  public query func calculateGroupPrice(
    trekSlug : Text,
    groupSize : Nat,
    addOns : [BookingLib.AddOn],
  ) : async Nat {
    let basePricePerPerson = switch (TrekLib.getBySlug(treks, trekSlug)) {
      case (?t) { t.basePrice };
      case null { 0 };
    };
    let discountedPrice = if (groupSize == 1) {
      (basePricePerPerson * 115) / 100;
    } else if (groupSize <= 4) {
      basePricePerPerson;
    } else if (groupSize <= 8) {
      (basePricePerPerson * 95) / 100;
    } else if (groupSize <= 15) {
      (basePricePerPerson * 90) / 100;
    } else {
      (basePricePerPerson * 85) / 100;
    };
    var addOnTotal : Nat = 0;
    for (addOn in addOns.vals()) {
      addOnTotal += addOn.pricePerPerson * groupSize;
    };
    (discountedPrice * groupSize) + addOnTotal;
  };
  include FaqsApi(faqVotes);
};

