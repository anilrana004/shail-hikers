import Map "mo:core/Map";
import FaqLib "../lib/faqs";

mixin (faqVotes : Map.Map<Text, FaqLib.FaqVotes>) {
  // Records a helpful/not-helpful vote for a FAQ item
  public shared func voteFaq(trekSlug : Text, faqIndex : Nat, isHelpful : Bool) : async Bool {
    FaqLib.vote(faqVotes, trekSlug, faqIndex, isHelpful);
  };

  // Returns the vote counts for a FAQ item
  public query func getFaqVotes(trekSlug : Text, faqIndex : Nat) : async FaqLib.FaqVotesPublic {
    FaqLib.getVotes(faqVotes, trekSlug, faqIndex);
  };
};
