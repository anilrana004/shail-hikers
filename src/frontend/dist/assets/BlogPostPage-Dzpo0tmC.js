import { c as createLucideIcon, P as useParams, j as reactExports, t as jsxRuntimeExports, F as Layout, L as Link, w as motion, C as Clock } from "./index-BbOSvcvx.js";
import { B as BLOG_POSTS, T as Tag, C as CATEGORY_COLORS } from "./blog-DkkGAqcm.js";
import { T as TREKS } from "./treks-CGIURMuU.js";
import { E as Eye } from "./eye-BonId-7X.js";
import { C as ChevronRight } from "./chevron-right-CKT8kNrW.js";
import { S as Share2 } from "./share-2-DXGyCPlV.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode);
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
function renderBody(body) {
  const lines = body.split("\n\n");
  return lines.map((line, i) => {
    const lineKey = `line-${i}-${line.slice(0, 20).replace(/\s/g, "_")}`;
    if (line.startsWith("## ")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-display text-2xl md:text-3xl font-semibold mt-10 mb-4",
          style: { color: "#1A1A1A" },
          children: line.slice(3)
        },
        lineKey
      );
    }
    if (line.startsWith("### ")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "font-display text-xl font-semibold mt-8 mb-3",
          style: { color: "#4A4A4A" },
          children: line.slice(4)
        },
        lineKey
      );
    }
    if (line.startsWith("> ")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "blockquote",
        {
          className: "my-6 pl-5 py-1",
          style: { borderLeft: "3px solid #F88379", color: "#4A4A4A" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic leading-relaxed", children: line.slice(2) })
        },
        lineKey
      );
    }
    const parts = line.split(/\*\*([^*]+)\*\*/g);
    const content = parts.map(
      (part, j) => j % 2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "strong",
        {
          style: { color: "#1A1A1A", fontWeight: 700 },
          children: part
        },
        `bold-${i}-${part}`
      ) : part
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-base leading-loose mb-4",
        style: { color: "#c8b4b8" },
        children: content
      },
      lineKey
    );
  });
}
function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const [copied, setCopied] = reactExports.useState(false);
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen flex flex-col items-center justify-center gap-6",
        style: { background: "#E6D8C4" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl", style: { color: "#1A1A1A" }, children: "Article Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#4A4A4A" }, children: "This post doesn’t exist or may have been removed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              className: "flex items-center gap-2 text-sm font-semibold",
              style: { color: "#F88379" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
                " Back to Blog"
              ]
            }
          )
        ]
      }
    ) });
  }
  const relatedTreks = TREKS.filter(
    (t) => post.relatedTreks.includes(t.slug)
  ).slice(0, 3);
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#E6D8C4", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[50vh] md:h-[65vh] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: post.heroImage,
          alt: post.title,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(26,14,16,0.85) 80%, #E6D8C4 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 md:px-6 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: "inline-flex items-center gap-1.5 text-xs mb-5 transition-colors",
            style: { color: "#4A4A4A" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 13 }),
              " Back to Blog"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: post.category }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "font-display font-semibold leading-tight mb-5",
            style: {
              color: "#1A1A1A",
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)"
            },
            children: post.title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: post.author.avatar,
                alt: post.author.name,
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
                  children: post.author.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#4A4A4A88" }, children: post.author.role })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap items-center gap-4 text-xs",
              style: { color: "#4A4A4A88" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
                  post.readTime,
                  " min read"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 12 }),
                  (post.views / 1e3).toFixed(1),
                  "K views"
                ] })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 md:px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "lg:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: renderBody(post.body) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mt-12 pt-8",
            style: { borderTop: "1px solid rgba(248,131,121,0.2)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 15, style: { color: "#F88379" } }),
              post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-3 py-1.5 rounded-full",
                  style: {
                    background: "rgba(248,131,121,0.12)",
                    color: "#4A4A4A",
                    border: "1px solid rgba(248,131,121,0.25)"
                  },
                  children: tag
                },
                tag
              ))
            ] })
          }
        ),
        relatedPosts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-3xl font-semibold mb-6",
              style: { color: "#1A1A1A" },
              children: "Related Articles"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: relatedPosts.map((rp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/blog/${rp.slug}`,
              className: "group rounded-xl overflow-hidden block transition-transform hover:-translate-y-1",
              style: {
                background: "#FFFFFF",
                border: "1px solid rgba(248,131,121,0.2)"
              },
              "data-ocid": `blog_post.related.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: rp.heroImage,
                    alt: rp.title,
                    className: "w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: rp.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-semibold mt-2 line-clamp-2",
                      style: { color: "#1A1A1A" },
                      children: rp.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs mt-1 flex items-center gap-1",
                      style: { color: "#4A4A4A66" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
                        rp.readTime,
                        "m read"
                      ]
                    }
                  )
                ] })
              ]
            },
            rp.slug
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 space-y-8 lg:sticky lg:top-28 self-start", children: [
        relatedTreks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5",
            style: {
              background: "#FFFFFF",
              border: "1px solid rgba(248,131,121,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display text-xl font-semibold mb-4",
                  style: { color: "#1A1A1A" },
                  children: "Planning This Trek?"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: relatedTreks.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: `/treks/${trek.slug}`,
                  className: "flex gap-3 group items-center",
                  "data-ocid": `blog_post.related_trek.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: trek.heroImage,
                        alt: trek.name,
                        className: "w-16 h-14 rounded-lg object-cover flex-shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm font-semibold truncate",
                          style: { color: "#1A1A1A" },
                          children: trek.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: { color: "#4A4A4A66" }, children: [
                        trek.durationDays,
                        " days · ",
                        trek.difficulty
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "text-xs font-bold",
                          style: { color: "#D4A843" },
                          children: [
                            "From ₹",
                            trek.basePrice.toLocaleString()
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        size: 14,
                        style: { color: "#F88379", flexShrink: 0 }
                      }
                    )
                  ]
                },
                trek.slug
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5",
            style: {
              background: "#FFFFFF",
              border: "1px solid rgba(248,131,121,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display text-xl font-semibold mb-4",
                  style: { color: "#1A1A1A" },
                  children: "About the Author"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: post.author.avatar,
                    alt: post.author.name,
                    className: "w-14 h-14 rounded-full object-cover flex-shrink-0",
                    style: { border: "2px solid #F88379" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", style: { color: "#1A1A1A" }, children: post.author.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-2", style: { color: "#F88379" }, children: post.author.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs leading-relaxed",
                      style: { color: "#4A4A4A99" },
                      children: "An experienced Himalayan guide with Shail Hikers, leading treks across Uttarakhand since 2016."
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5",
            style: {
              background: "#FFFFFF",
              border: "1px solid rgba(248,131,121,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h3",
                {
                  className: "font-display text-xl font-semibold mb-4",
                  style: { color: "#1A1A1A" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Share2,
                      {
                        size: 16,
                        className: "inline mr-2",
                        style: { color: "#F88379" }
                      }
                    ),
                    "Share This Post"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${window.location.href}`)}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]",
                    style: { background: "#2D6A4F", color: "#1A1A1A" },
                    "data-ocid": "blog_post.share_whatsapp",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 18 }, children: "💬" }),
                      " Share on WhatsApp"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]",
                    style: {
                      background: "rgba(168,197,218,0.15)",
                      color: "#82C8E5",
                      border: "1px solid rgba(168,197,218,0.25)"
                    },
                    "data-ocid": "blog_post.share_twitter",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "𝕏" }),
                      " Share on Twitter"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleCopyLink,
                    className: "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]",
                    style: {
                      background: "rgba(248,131,121,0.12)",
                      color: "#4A4A4A",
                      border: "1px solid rgba(248,131,121,0.25)"
                    },
                    "data-ocid": "blog_post.copy_link_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 15 }),
                      " ",
                      copied ? "Link Copied!" : "Copy Link"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5",
            style: {
              background: "linear-gradient(135deg, #FFFFFF, #E6D8C4)",
              border: "1px solid rgba(248,131,121,0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display text-xl font-semibold mb-1",
                  style: { color: "#1A1A1A" },
                  children: "Trek Updates"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-4", style: { color: "#4A4A4A88" }, children: "Get new trek guides and batch alerts in your inbox." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "your@email.com",
                  className: "w-full px-3 py-2.5 rounded-xl text-sm outline-none mb-3",
                  style: {
                    background: "rgba(248,131,121,0.1)",
                    border: "1px solid rgba(248,131,121,0.3)",
                    color: "#1A1A1A"
                  },
                  "data-ocid": "blog_post.newsletter_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "w-full py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90",
                  style: { background: "#F88379", color: "#1A1A1A" },
                  "data-ocid": "blog_post.newsletter_submit",
                  children: "Subscribe"
                }
              )
            ]
          }
        )
      ] })
    ] }) })
  ] }) });
}
export {
  BlogPostPage as default
};
