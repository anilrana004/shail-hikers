import { j as reactExports, t as jsxRuntimeExports, F as Layout, w as motion, L as Link, C as Clock, V as BookOpen, S as Search } from "./index-BbOSvcvx.js";
import { B as BLOG_POSTS, C as CATEGORY_COLORS, T as Tag } from "./blog-DkkGAqcm.js";
import { S as Star } from "./star-CNBIqXZg.js";
import { E as Eye } from "./eye-BonId-7X.js";
import { C as ChevronRight } from "./chevron-right-CKT8kNrW.js";
import { T as TrendingUp } from "./trending-up-BrXGymgQ.js";
const ALL_TAGS = [
  "Kedarkantha",
  "Winter Trek",
  "Uttarakhand",
  "Gear",
  "Beginners",
  "Solo Trek",
  "Chardham",
  "Valley of Flowers",
  "UNESCO",
  "Snow Trek",
  "Camping",
  "High Altitude",
  "Yatra",
  "Family Trek",
  "Monsoon"
];
const POST_COUNTS = {
  "Trek Tips": 2,
  "Yatra Guides": 1,
  Gear: 1,
  Stories: 1
};
const POPULAR_POSTS = BLOG_POSTS.slice(0, 3);
const featuredPost = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
const listPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);
function CategoryBadge({ category }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide",
      style: {
        background: `${CATEGORY_COLORS[category]}22`,
        color: CATEGORY_COLORS[category],
        border: `1px solid ${CATEGORY_COLORS[category]}44`
      },
      children: category
    }
  );
}
function BlogCard({ post, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.08 },
      className: "group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1",
      style: {
        background: "#FFFFFF",
        border: "1px solid rgba(248,131,121,0.2)"
      },
      "data-ocid": `blog.card.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/blog/${post.slug}`, className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.heroImage,
              alt: post.title,
              className: "w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/60 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: post.category }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display text-xl font-semibold leading-snug mb-2 group-hover:transition-colors line-clamp-2",
              style: { color: "#1A1A1A" },
              children: post.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm leading-relaxed line-clamp-3 flex-1",
              style: { color: "#4A4A4A99" },
              children: post.excerpt
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 mt-4 pt-4",
              style: { borderTop: "1px solid rgba(248,131,121,0.15)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: post.author.avatar,
                    alt: post.author.name,
                    className: "w-8 h-8 rounded-full object-cover",
                    style: { border: "2px solid #F8837944" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs font-medium truncate",
                      style: { color: "#1A1A1A" },
                      children: post.author.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#4A4A4A66" }, children: post.date })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 text-xs",
                    style: { color: "#4A4A4A66" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                        post.readTime,
                        "m"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 11 }),
                        (post.views / 1e3).toFixed(1),
                        "K"
                      ] })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function BlogPage() {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filteredPosts = searchQuery.trim() ? [...BLOG_POSTS].filter(
    (p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || p.tags.some(
      (t) => t.toLowerCase().includes(searchQuery.toLowerCase())
    )
  ) : null;
  const postsToShow = filteredPosts ?? listPosts;
  const showFeatured = !filteredPosts;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#E6D8C4", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "relative py-20 text-center overflow-hidden",
        style: {
          background: "linear-gradient(180deg, #FFFFFF 0%, #E6D8C4 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm font-medium tracking-[0.3em] uppercase mb-3",
                  style: { color: "#F88379" },
                  children: "Shail Hikers Journal"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-5xl md:text-7xl font-semibold mb-4",
                  style: { color: "#1A1A1A" },
                  children: "TREK STORIES & GUIDES"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-lg max-w-xl mx-auto",
                  style: { color: "#4A4A4A" },
                  children: "Expert guides, personal stories, gear reviews, and yatra wisdom from the Himalayan trails."
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-6 pb-20", children: [
      showFeatured && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, style: { color: "#D4A843" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-sm font-bold tracking-[0.2em] uppercase",
                  style: { color: "#D4A843" },
                  children: "Editor’s Pick"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: `/blog/${featuredPost.slug}`,
                className: "block group",
                "data-ocid": "blog.editors_pick_card",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1",
                    style: { border: "1px solid rgba(201,168,76,0.3)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: featuredPost.heroImage,
                          alt: featuredPost.title,
                          className: "w-full h-64 md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#E6D8C4] via-[#E6D8C4]/40 to-transparent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 md:p-10", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-center mb-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: featuredPost.category }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs px-3 py-1 rounded-full font-bold",
                              style: {
                                background: "#D4A84322",
                                color: "#D4A843",
                                border: "1px solid #D4A84344"
                              },
                              children: "🔥 Trending"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h2",
                          {
                            className: "font-display text-3xl md:text-5xl font-semibold leading-tight mb-3 max-w-3xl",
                            style: { color: "#1A1A1A" },
                            children: featuredPost.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-base mb-4 max-w-2xl leading-relaxed line-clamp-2",
                            style: { color: "#4A4A4A" },
                            children: featuredPost.excerpt
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: featuredPost.author.avatar,
                                alt: featuredPost.author.name,
                                className: "w-10 h-10 rounded-full object-cover",
                                style: { border: "2px solid #F88379" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "text-sm font-semibold",
                                  style: { color: "#1A1A1A" },
                                  children: featuredPost.author.name
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#4A4A4A88" }, children: featuredPost.author.role })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "flex items-center gap-4 text-sm",
                              style: { color: "#4A4A4A88" },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: featuredPost.date }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }),
                                  featuredPost.readTime,
                                  " min read"
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 13 }),
                                  (featuredPost.views / 1e3).toFixed(1),
                                  "K views"
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "flex items-center gap-1.5 text-sm font-semibold",
                              style: { color: "#F88379" },
                              children: [
                                "Read Article ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ]
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
          searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-sm", style: { color: "#4A4A4A" }, children: [
            (filteredPosts == null ? void 0 : filteredPosts.length) ?? 0,
            " result",
            (filteredPosts == null ? void 0 : filteredPosts.length) !== 1 ? "s" : "",
            " for “",
            searchQuery,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            postsToShow.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCard, { post, index: i }, post.slug)),
            filteredPosts && filteredPosts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "col-span-2 text-center py-16",
                "data-ocid": "blog.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    BookOpen,
                    {
                      size: 40,
                      style: { color: "#F8837933", margin: "0 auto 1rem" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#4A4A4A" }, children: [
                    "No posts found for “",
                    searchQuery,
                    "”"
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-display text-xl font-semibold mb-4",
                style: { color: "#1A1A1A" },
                children: "Search"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Search,
                {
                  size: 16,
                  className: "absolute left-3 top-1/2 -translate-y-1/2",
                  style: { color: "#4A4A4A66" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search articles…",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all",
                  style: {
                    background: "#FFFFFF",
                    border: "1px solid rgba(248,131,121,0.3)",
                    color: "#1A1A1A"
                  },
                  "data-ocid": "blog.search_input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-display text-xl font-semibold mb-4",
                style: { color: "#1A1A1A" },
                children: "Categories"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Object.keys(POST_COUNTS).map(
              (cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex items-center justify-between px-4 py-3 rounded-xl transition-colors cursor-pointer w-full text-left",
                  style: {
                    background: "#FFFFFF",
                    border: "1px solid rgba(248,131,121,0.15)"
                  },
                  onClick: () => setSearchQuery(cat),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-2.5 h-2.5 rounded-full",
                          style: { background: CATEGORY_COLORS[cat] }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-sm",
                          style: { color: "#1A1A1A" },
                          children: cat
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-bold px-2 py-0.5 rounded-full",
                        style: {
                          background: `${CATEGORY_COLORS[cat]}20`,
                          color: CATEGORY_COLORS[cat]
                        },
                        children: POST_COUNTS[cat]
                      }
                    )
                  ]
                },
                cat
              )
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h3",
              {
                className: "font-display text-xl font-semibold mb-4",
                style: { color: "#1A1A1A" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TrendingUp,
                    {
                      size: 18,
                      className: "inline mr-2",
                      style: { color: "#D4A843" }
                    }
                  ),
                  "Popular Posts"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: POPULAR_POSTS.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: `/blog/${post.slug}`,
                className: "flex gap-3 group",
                "data-ocid": `blog.popular.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: post.heroImage,
                      alt: post.title,
                      className: "w-20 h-16 rounded-lg object-cover flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm font-medium leading-snug line-clamp-2 group-hover:transition-colors",
                        style: { color: "#1A1A1A" },
                        children: post.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2 mt-1 text-xs",
                        style: { color: "#4A4A4A66" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
                            post.readTime,
                            "m"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 10 }),
                            (post.views / 1e3).toFixed(1),
                            "K"
                          ] })
                        ]
                      }
                    )
                  ] })
                ]
              },
              post.slug
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h3",
              {
                className: "font-display text-xl font-semibold mb-4",
                style: { color: "#1A1A1A" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tag,
                    {
                      size: 16,
                      className: "inline mr-2",
                      style: { color: "#F88379" }
                    }
                  ),
                  "Tags"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ALL_TAGS.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSearchQuery(tag),
                className: "text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105",
                style: {
                  background: searchQuery === tag ? "#F88379" : "rgba(248,131,121,0.12)",
                  color: searchQuery === tag ? "#1A1A1A" : "#4A4A4A",
                  border: "1px solid rgba(248,131,121,0.3)"
                },
                children: tag
              },
              tag
            )) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  BlogPage as default
};
