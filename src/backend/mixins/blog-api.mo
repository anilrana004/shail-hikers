import List "mo:core/List";
import BlogLib "../lib/blog";
import Common "../types/common";

mixin (posts : List.List<BlogLib.BlogPost>) {
  // Returns all published blog posts
  public query func getBlogPosts() : async [BlogLib.BlogPostPublic] {
    BlogLib.getAll(posts);
  };

  // Returns a blog post by its slug
  public query func getBlogBySlug(slug : Text) : async ?BlogLib.BlogPostPublic {
    BlogLib.getBySlug(posts, slug);
  };

  // Returns posts filtered by category
  public query func getBlogByCategory(category : Common.BlogCategory) : async [BlogLib.BlogPostPublic] {
    BlogLib.getByCategory(posts, category);
  };

  // Increments the view counter for a post (non-query to allow mutation)
  public shared func incrementBlogViews(slug : Text) : async Bool {
    BlogLib.incrementViews(posts, slug);
  };
};
