import Common "common";

module {
  public type BlogPost = {
    id : Nat;
    slug : Common.Slug;
    title : Text;
    excerpt : Text;
    content : Text;
    category : Common.BlogCategory;
    author : Text;
    readTime : Nat;  // minutes
    heroImage : Text;
    tags : [Text];
    publishedAt : Common.Timestamp;
    var views : Nat;
  };

  public type BlogPostPublic = {
    id : Nat;
    slug : Common.Slug;
    title : Text;
    excerpt : Text;
    content : Text;
    category : Common.BlogCategory;
    author : Text;
    readTime : Nat;
    heroImage : Text;
    tags : [Text];
    publishedAt : Common.Timestamp;
    views : Nat;
  };
};
