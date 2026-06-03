module {
  public type FaqVoteKey = {
    trekSlug : Text;
    faqIndex : Nat;
  };

  public type FaqVotes = {
    var helpful : Nat;
    var notHelpful : Nat;
  };

  public type FaqVotesPublic = {
    helpful : Nat;
    notHelpful : Nat;
  };
};
