import Map "mo:core/Map";
import FaqTypes "../types/faq";

module {
  public type FaqVoteKey = FaqTypes.FaqVoteKey;
  public type FaqVotes = FaqTypes.FaqVotes;
  public type FaqVotesPublic = FaqTypes.FaqVotesPublic;

  // Converts mutable FaqVotes to shareable form
  public func toPublic(v : FaqVotes) : FaqVotesPublic {
    { helpful = v.helpful; notHelpful = v.notHelpful };
  };

  // Composite key string for Map lookup
  public func makeKey(trekSlug : Text, faqIndex : Nat) : Text {
    trekSlug # "::" # faqIndex.toText();
  };

  // Records a vote (helpful or not) for a specific FAQ item
  public func vote(
    votes : Map.Map<Text, FaqVotes>,
    trekSlug : Text,
    faqIndex : Nat,
    isHelpful : Bool,
  ) : Bool {
    let key = makeKey(trekSlug, faqIndex);
    let current = switch (votes.get(key)) {
      case (?v) { v };
      case null { let nv : FaqVotes = { var helpful = 0; var notHelpful = 0 }; votes.add(key, nv); nv };
    };
    if (isHelpful) { current.helpful += 1 } else { current.notHelpful += 1 };
    true;
  };

  // Returns vote counts for a specific FAQ item
  public func getVotes(
    votes : Map.Map<Text, FaqVotes>,
    trekSlug : Text,
    faqIndex : Nat,
  ) : FaqVotesPublic {
    let key = makeKey(trekSlug, faqIndex);
    switch (votes.get(key)) {
      case (?v) { toPublic(v) };
      case null { { helpful = 0; notHelpful = 0 } };
    };
  };
};
