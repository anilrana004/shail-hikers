import List "mo:core/List";
import ReviewTypes "../types/review";
import Common "../types/common";

module {
  public type Review = ReviewTypes.Review;
  public type ReviewPublic = ReviewTypes.ReviewPublic;

  // Converts mutable Review to shareable form
  public func toPublic(r : Review) : ReviewPublic {
    {
      id = r.id;
      trekSlug = r.trekSlug;
      userId = r.userId;
      userName = r.userName;
      userCity = r.userCity;
      rating = r.rating;
      guideRating = r.guideRating;
      foodRating = r.foodRating;
      safetyRating = r.safetyRating;
      reviewText = r.reviewText;
      createdAt = r.createdAt;
      verified = r.verified;
      helpfulVotes = r.helpfulVotes;
    };
  };

  // Submits a new review; one review per user per trek
  public func submit(
    reviews : List.List<Review>,
    state : { var nextReviewId : Nat },
    trekSlug : Text,
    userId : Common.UserId,
    userName : Text,
    userCity : Text,
    rating : Nat,
    guideRating : Nat,
    foodRating : Nat,
    safetyRating : Nat,
    reviewText : Text,
    now : Common.Timestamp,
  ) : ReviewPublic {
    let id = state.nextReviewId;
    state.nextReviewId += 1;
    let review : Review = {
      id;
      trekSlug;
      userId;
      userName;
      userCity;
      rating;
      guideRating;
      foodRating;
      safetyRating;
      reviewText;
      createdAt = now;
      var verified = false;
      var helpfulVotes = 0;
    };
    reviews.add(review);
    toPublic(review);
  };

  // Returns all reviews for a given trek slug
  public func getByTrek(reviews : List.List<Review>, trekSlug : Text) : [ReviewPublic] {
    reviews.filter(func(r) { r.trekSlug == trekSlug }).map<Review, ReviewPublic>(func(r) { toPublic(r) }).toArray();
  };

  // Increments helpfulVotes on a review
  public func voteHelpful(reviews : List.List<Review>, reviewId : Nat) : Bool {
    switch (reviews.find(func(r) { r.id == reviewId })) {
      case (?r) { r.helpfulVotes += 1; true };
      case null { false };
    };
  };

  // Computes average overall rating for a trek; returns (rating * 10) as Nat to avoid Float
  public func getAverageRating(reviews : List.List<Review>, trekSlug : Text) : Nat {
    let trekReviews = reviews.filter(func(r) { r.trekSlug == trekSlug });
    let count = trekReviews.size();
    if (count == 0) { return 0 };
    let total = trekReviews.foldLeft(0 : Nat, func(acc : Nat, r : Review) : Nat { acc + r.rating });
    (total * 10) / count;
  };
};
