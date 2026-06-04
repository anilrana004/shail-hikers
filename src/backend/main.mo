import Map "mo:core/Map";
import List "mo:core/List";
import Common "types/common";
import TrekLib "lib/treks";
import YatraLib "lib/yatras";
import BatchLib "lib/batches";
import BookingLib "lib/bookings";
import WaitlistLib "lib/waitlist";
import GuideLib "lib/guides";
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
import WaitlistApi "mixins/waitlist-api";
import GuidesApi "mixins/guides-api";
import AdminApi "mixins/admin-api";

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
  let waitlists      : Map.Map<Text, List.List<WaitlistLib.WaitlistEntry>>;
  let guides         : Map.Map<Text, GuideLib.Guide>;

  // Mutable id counters wrapped in records so mixins share the same reference
  let bookingState   : { var nextBookingId : Nat };
  let reviewState    : { var nextReviewId  : Nat };
  let leadState      : { var nextLeadId    : Nat };
  let stripeState    : { var stripeSecretKey : Text; var stripePublicKey : Text };
  // Admin principal wrapped in a record so all mixins share the same reference
  let adminState     : { var adminPrincipal : ?Principal };

  // ── Mixin composition (all public API lives here) ─────────────────────────────
  include TreksApi(treks);
  include YatrasApi(yatras);
  include BatchesApi(batches);
  include BookingsApi(bookings, bookingState, batches, treks, stripeState, adminState, users);
  include UsersApi(users);
  include ReviewsApi(reviews, reviewState);
  include BlogApi(posts);
  include CorporateApi(leads, leadState);
  include NewsletterApi(newsletterSubs);
  include FaqsApi(faqVotes);
  include WaitlistApi(waitlists, adminState);
  include GuidesApi(guides, adminState);
  include AdminApi(adminState);
};

