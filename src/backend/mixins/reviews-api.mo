import List "mo:core/List";
import ReviewLib "../lib/reviews";

mixin (
  reviews : List.List<ReviewLib.Review>,
  reviewState : { var nextReviewId : Nat },
) {
  // Submits a review from the calling user
  public shared ({ caller }) func submitReview(
    trekSlug : Text,
    userName : Text,
    userCity : Text,
    rating : Nat,
    guideRating : Nat,
    foodRating : Nat,
    safetyRating : Nat,
    reviewText : Text,
  ) : async ReviewLib.ReviewPublic {
    ReviewLib.submit(reviews, reviewState, trekSlug, caller, userName, userCity, rating, guideRating, foodRating, safetyRating, reviewText, 0);
  };

  // Returns all reviews for a trek
  public query func getReviewsByTrek(trekSlug : Text) : async [ReviewLib.ReviewPublic] {
    ReviewLib.getByTrek(reviews, trekSlug);
  };

  // Increments helpful votes on a review
  public shared func voteHelpful(reviewId : Nat) : async Bool {
    ReviewLib.voteHelpful(reviews, reviewId);
  };

  // Returns average rating (×10) for a trek
  public query func getAverageRating(trekSlug : Text) : async Nat {
    ReviewLib.getAverageRating(reviews, trekSlug);
  };
};
