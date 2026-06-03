import { j as reactExports, t as jsxRuntimeExports, L as Link, X, U as Users } from "./index-CmnsDpTB.js";
import { B as Button } from "./button-BAnqRNhK.js";
import { C as Check } from "./check-CoyiWauP.js";
import "./clsx-DgYk2OaC.js";
const PACKAGES = [
  {
    id: "explorer",
    name: "Explorer Pack",
    tagline: "Your First Himalayan Adventure",
    heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    price: 9999,
    originalPrice: 12499,
    duration: "6 Days / 5 Nights",
    groupSize: "2–8",
    treks: ["Kedarkantha", "Nag Tibba"],
    badge: "Best for Beginners",
    badgeColor: "#2D5016",
    description: "The perfect entry point into the Himalayas. Combine two iconic beginner-friendly treks — the snow-draped summit of Kedarkantha and the panoramic Nag Tibba weekend escape — in one seamless, guided adventure. Pickup from Dehradun, all meals, premium gear, and certified guides included.",
    includes: [
      "Dehradun pickup & drop",
      "All meals (Day 1 dinner → last day breakfast)",
      "High-quality dome tents (2-person)",
      "-10°C sleeping bags & mats",
      "Certified Trek Leader",
      "First Aid + oxygen kit",
      "All forest permits",
      "₹10L group insurance",
      "Digital completion certificate",
      "Pre-trek briefing session"
    ],
    highlights: [
      "Summit Kedarkantha at 12,500 ft",
      "360° panoramic Himalayan views",
      "Snow trails Dec–Apr",
      "Nag Tibba sunrise special"
    ]
  },
  {
    id: "summit",
    name: "Summit Seeker",
    tagline: "Conquer Two High Passes in One Trip",
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    price: 18999,
    originalPrice: 24998,
    duration: "15 Days / 14 Nights",
    groupSize: "4–12",
    treks: ["Rupin Pass", "Buran Ghati"],
    badge: "Most Popular",
    badgeColor: "#B5525E",
    description: "Two of Uttarakhand's most dramatic high-altitude crossings back to back — Rupin Pass with its legendary waterfalls and snow bridges, followed by Buran Ghati's heart-stopping 200m rappel descent. This is not a trek; this is a transformation. Designed for experienced trekkers who demand the extraordinary.",
    includes: [
      "Dehradun pickup & drop (both treks)",
      "All meals throughout",
      "Premium dome tents",
      "-15°C sleeping bags",
      "Senior Trek Leader",
      "Technical safety gear (harness, crampons)",
      "Gamow bag + AED",
      "All permits (both regions)",
      "₹10L insurance per person",
      "Physical + digital certificate (both)",
      "Photo album (digital)",
      "Priority batch selection"
    ],
    highlights: [
      "Rupin Pass at 15,250 ft",
      "200m snow rappel on Buran Ghati",
      "Traverse two regions: Uttarkashi & Kinnaur",
      "Expert-guided technical sections"
    ]
  },
  {
    id: "grand",
    name: "Grand Himalaya Expedition",
    tagline: "The Ultimate 3-Trek Himalayan Experience",
    heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    price: 29999,
    originalPrice: 39997,
    duration: "21 Days / 20 Nights",
    groupSize: "4–10",
    treks: ["Valley of Flowers", "Har Ki Dun", "Chopta Chandrashila"],
    badge: "Premium",
    badgeColor: "#C9A84C",
    description: "Three of Uttarakhand's most iconic and diverse trails woven into a single, immersive Himalayan odyssey. From the UNESCO wildflower paradise of Valley of Flowers to the mythology-laden Har Ki Dun Valley and the divine summit of Chandrashila above the world's highest Shiva temple — this expedition covers everything the Himalayas have to offer. Exclusively for those who want to experience it all.",
    includes: [
      "All transport (Dehradun → treks → Dehradun)",
      "All meals on all 3 treks",
      "Premium tents throughout",
      "Arctic-grade sleeping gear",
      "Dedicated Senior Guide per trek",
      "Cook + full support staff",
      "Complete medical kit",
      "All permits (3 regions + UNESCO entry)",
      "₹15L premium insurance",
      "3 physical certificates + frame",
      "Professional photo album",
      "Shail Hikers branded merchandise kit",
      "24/7 operations desk support"
    ],
    highlights: [
      "UNESCO World Heritage Valley of Flowers",
      "Mythological Har Ki Dun Valley",
      "Chandrashila summit at 13,123 ft",
      "Tungnath — world's highest Shiva temple"
    ]
  }
];
const COMPARISON_FEATURES = [
  { label: "Duration", keys: ["6D/5N", "15D/14N", "21D/20N"] },
  { label: "Number of Treks", keys: ["2 treks", "2 treks", "3 treks"] },
  { label: "Max Altitude", keys: ["12,500 ft", "15,328 ft", "14,100 ft"] },
  { label: "Difficulty", keys: ["Easy", "Difficult", "Easy–Moderate"] },
  { label: "Dehradun Transport", values: [true, true, true] },
  { label: "All Meals", values: [true, true, true] },
  { label: "Premium Tents", values: [true, true, true] },
  { label: "Technical Gear", values: [false, true, false] },
  { label: "Gamow Bag + AED", values: [true, true, true] },
  { label: "Insurance", keys: ["₹10L", "₹10L", "₹15L"] },
  { label: "Forest Permits", values: [true, true, true] },
  { label: "Physical Certificate", values: [false, true, true] },
  { label: "Photo Album", values: [false, true, true] },
  { label: "Merchandise Kit", values: [false, false, true] },
  { label: "Priority Batch", values: [false, true, true] },
  { label: "24/7 Ops Desk", values: [false, false, true] }
];
const FAQS = [
  {
    q: "Can I customise which treks are in my package?",
    a: "Yes! All packages can be customised. Contact us via WhatsApp or the inquiry form to mix and match treks based on your season, fitness level, and dates."
  },
  {
    q: "Is there a gap between the treks in the multi-trek packages?",
    a: "We build in 1–2 rest days between treks in Dehradun or a nearby base. This ensures proper recovery and acclimatisation before the next trek."
  },
  {
    q: "What if I need to cancel one trek in the package?",
    a: "Our standard cancellation policy applies per trek. If you cancel 30+ days before a trek, you receive a full refund for that trek's value. Within 30 days, partial refund as per policy."
  },
  {
    q: "Are flights or train tickets included?",
    a: "No. Packages cover transport within Uttarakhand (from Dehradun). Flights or trains to Dehradun are not included and must be booked separately."
  },
  {
    q: "Can solo trekkers book packages?",
    a: "Absolutely. Solo pricing is available with a small supplement. Contact us to get a personalised solo quote for any package."
  },
  {
    q: "How much can I save vs booking treks individually?",
    a: "The Explorer Pack saves ₹2,500 (20%), Summit Seeker saves ₹5,999 (24%), and the Grand Expedition saves ₹9,998 (25%) compared to booking each trek separately."
  }
];
function PackagesPage() {
  const [groupSize, setGroupSize] = reactExports.useState(4);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  function calcDiscount(size) {
    if (size >= 16) return 15;
    if (size >= 9) return 10;
    if (size >= 5) return 5;
    return 0;
  }
  const discount = calcDiscount(groupSize);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Exclusive Trekking Packages — Shail Hikers | Multi-Trek Himalayan Combos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Save up to 25% with Shail Hikers' exclusive multi-trek packages. Explorer, Summit Seeker, and Grand Himalaya Expedition bundles for all skill levels."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#1A0E10" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "py-16 px-6 text-center",
          style: {
            background: "linear-gradient(180deg, #2D1B1E 0%, #1A0E10 100%)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs tracking-widest uppercase mb-3",
                style: { color: "#E8A0AA" },
                children: "Best Value"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "text-5xl md:text-7xl mb-4",
                style: {
                  fontFamily: "var(--font-display)",
                  color: "#FAD4D8",
                  letterSpacing: "-0.02em"
                },
                children: "EXCLUSIVE PACKAGES"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", style: { color: "#E8A0AA" }, children: "Handcrafted multi-trek bundles · Save up to 25% · Expert guides throughout" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6", children: PACKAGES.map((pkg, i) => {
        const savings = pkg.originalPrice - pkg.price;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `packages.item.${i + 1}`,
            className: "rounded-2xl overflow-hidden flex flex-col",
            style: {
              background: "#2D1B1E",
              border: "1px solid rgba(232,160,170,0.15)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: pkg.heroImage,
                    alt: pkg.name,
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0",
                    style: {
                      background: "linear-gradient(0deg, rgba(45,27,30,0.8) 0%, transparent 60%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-full",
                    style: {
                      background: pkg.badgeColor,
                      color: pkg.id === "grand" ? "#1A0E10" : "#FAD4D8"
                    },
                    children: pkg.badge
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full",
                    style: { background: "#C9A84C", color: "#1A0E10" },
                    children: [
                      "Save ₹",
                      savings.toLocaleString()
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      className: "text-2xl mb-0.5",
                      style: {
                        fontFamily: "var(--font-display)",
                        color: "#FAD4D8"
                      },
                      children: pkg.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: {
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        color: "#E8A0AA"
                      },
                      children: pkg.tagline
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs leading-relaxed",
                    style: { color: "#E8A0AA" },
                    children: pkg.description
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-lg p-2",
                      style: { background: "rgba(26,14,16,0.6)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA" }, children: "Duration" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", style: { color: "#FAD4D8" }, children: pkg.duration })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-lg p-2",
                      style: { background: "rgba(26,14,16,0.6)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA" }, children: "Group Size" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", style: { color: "#FAD4D8" }, children: [
                          pkg.groupSize,
                          " persons"
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "col-span-2 rounded-lg p-2",
                      style: { background: "rgba(26,14,16,0.6)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA" }, children: "Treks Included" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", style: { color: "#FAD4D8" }, children: pkg.treks.join(" + ") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: pkg.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Check,
                    {
                      size: 12,
                      className: "mt-0.5 shrink-0",
                      style: { color: "#B5525E" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#FAD4D8" }, children: h })
                ] }, h)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "summary",
                    {
                      className: "text-xs font-medium cursor-pointer list-none flex items-center gap-1",
                      style: { color: "#C9A84C" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "What's included (",
                          pkg.includes.length,
                          " items)"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto group-open:rotate-180 transition-transform", children: "▾" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: pkg.includes.map((inc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2 text-xs",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Check,
                          {
                            size: 11,
                            className: "mt-0.5 shrink-0",
                            style: { color: "#2D5016" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: inc })
                      ]
                    },
                    inc
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "mt-auto pt-3",
                    style: { borderTop: "1px solid rgba(232,160,170,0.1)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "text-2xl font-bold",
                            style: {
                              color: "#C9A84C",
                              fontFamily: "var(--font-display)"
                            },
                            children: [
                              "₹",
                              pkg.price.toLocaleString()
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "text-sm line-through",
                            style: { color: "rgba(232,160,170,0.5)" },
                            children: [
                              "₹",
                              pkg.originalPrice.toLocaleString()
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: "#E8A0AA" }, children: "per person" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/book/$slug",
                          params: {
                            slug: pkg.treks[0].toLowerCase().replace(/ /g, "-")
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              className: "w-full",
                              "data-ocid": `packages.book_button.${i + 1}`,
                              style: {
                                background: "#B5525E",
                                color: "#FAD4D8",
                                border: "none"
                              },
                              children: "Book This Package"
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              ] })
            ]
          },
          pkg.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 md:px-6 py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "text-4xl text-center mb-10",
            style: { fontFamily: "var(--font-display)", color: "#FAD4D8" },
            children: "Compare Packages"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: { border: "1px solid rgba(232,160,170,0.15)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  style: {
                    background: "#2D1B1E",
                    borderBottom: "1px solid rgba(232,160,170,0.15)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: "text-left px-5 py-4",
                        style: { color: "#E8A0AA", width: "35%" },
                        children: "Feature"
                      }
                    ),
                    PACKAGES.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: "px-4 py-4 text-center",
                        style: {
                          color: "#FAD4D8",
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem"
                        },
                        children: pkg.name
                      },
                      pkg.id
                    ))
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                COMPARISON_FEATURES.map((feat, i) => {
                  var _a;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      style: {
                        background: i % 2 === 0 ? "#1A0E10" : "rgba(45,27,30,0.5)",
                        borderBottom: "1px solid rgba(232,160,170,0.07)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", style: { color: "#E8A0AA" }, children: feat.label }),
                        feat.keys ? feat.keys.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "td",
                          {
                            className: "px-4 py-3 text-center text-xs font-medium",
                            style: { color: "#FAD4D8" },
                            children: k
                          },
                          k
                        )) : (_a = feat.values) == null ? void 0 : _a.map((v, vi) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "td",
                          {
                            className: "px-4 py-3 text-center",
                            children: v ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Check,
                              {
                                size: 16,
                                className: "mx-auto",
                                style: { color: "#2D5016" }
                              }
                            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                              X,
                              {
                                size: 16,
                                className: "mx-auto",
                                style: { color: "rgba(232,160,170,0.4)" }
                              }
                            )
                          },
                          `val-${vi}`
                        ))
                      ]
                    },
                    feat.label
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { background: "#2D1B1E" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-5 py-4",
                      style: { color: "#FAD4D8", fontWeight: 600 },
                      children: "Price per Person"
                    }
                  ),
                  PACKAGES.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-lg font-bold",
                      style: {
                        color: "#C9A84C",
                        fontFamily: "var(--font-display)"
                      },
                      children: [
                        "₹",
                        pkg.price.toLocaleString()
                      ]
                    }
                  ) }, pkg.id))
                ] })
              ] })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 md:px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-8 text-center",
          style: {
            background: "#2D1B1E",
            border: "1px solid rgba(201,168,76,0.3)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Users,
              {
                size: 32,
                className: "mx-auto mb-4",
                style: { color: "#C9A84C" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl mb-2",
                style: { fontFamily: "var(--font-display)", color: "#FAD4D8" },
                children: "Group Discount Calculator"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-8", style: { color: "#E8A0AA" }, children: "The bigger your group, the more you save." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "packages-group-size",
                  className: "text-sm",
                  style: { color: "#E8A0AA" },
                  children: "Group Size:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "packages-group-size",
                  type: "range",
                  min: 1,
                  max: 20,
                  value: groupSize,
                  onChange: (e) => setGroupSize(Number(e.target.value)),
                  className: "w-48 accent-rose-600",
                  "data-ocid": "packages.group_size_slider"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-2xl font-bold w-10 text-center",
                  style: { color: "#FAD4D8", fontFamily: "var(--font-display)" },
                  children: groupSize
                }
              )
            ] }),
            discount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-5xl font-bold",
                  style: {
                    color: "#C9A84C",
                    fontFamily: "var(--font-display)"
                  },
                  children: [
                    discount,
                    "% OFF"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", style: { color: "#FAD4D8" }, children: [
                "Group of ",
                groupSize,
                " qualifies for a",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                  discount,
                  "% group discount"
                ] }),
                " on any package."
              ] }),
              PACKAGES.map((pkg) => {
                const disc = Math.round(pkg.price * (discount / 100));
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between rounded-lg px-4 py-2 text-sm",
                    style: { background: "rgba(26,14,16,0.6)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: pkg.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#C9A84C" }, children: [
                        "₹",
                        (pkg.price - disc).toLocaleString(),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "rgba(232,160,170,0.5)" }, children: [
                          " ",
                          "/person"
                        ] })
                      ] })
                    ]
                  },
                  pkg.id
                );
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs pt-2", style: { color: "#E8A0AA" }, children: "Contact us for groups of 16+ for custom pricing." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", style: { color: "#E8A0AA" }, children: [
                "Travelling with",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#FAD4D8" }, children: "5 or more?" }),
                " ",
                "Unlock group discounts. Currently no discount for ",
                groupSize,
                " ",
                groupSize === 1 ? "person" : "people",
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-3 text-xs text-center", children: [
                ["5–8 people", "5%"],
                ["9–15 people", "10%"],
                ["16+ people", "15%"]
              ].map(([label, pct]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-lg p-3",
                  style: {
                    background: "rgba(26,14,16,0.6)",
                    border: "1px solid rgba(201,168,76,0.2)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-bold text-base",
                        style: { color: "#C9A84C" },
                        children: pct
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA" }, children: label })
                  ]
                },
                label
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "mt-6",
                "data-ocid": "packages.get_quote_button",
                style: {
                  background: "#B5525E",
                  color: "#FAD4D8",
                  border: "none"
                },
                children: "Request Custom Group Quote"
              }
            ) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 md:px-6 py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "text-4xl text-center mb-8",
            style: { fontFamily: "var(--font-display)", color: "#FAD4D8" },
            children: "Package FAQs"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FAQS.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `packages.faq.item.${i + 1}`,
            className: "rounded-xl overflow-hidden",
            style: { border: "1px solid rgba(232,160,170,0.15)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "w-full flex items-center justify-between text-left px-5 py-4 text-sm font-medium",
                  style: {
                    background: openFaq === i ? "#2D1B1E" : "#1A0E10",
                    color: "#FAD4D8"
                  },
                  onClick: () => setOpenFaq(openFaq === i ? null : i),
                  "data-ocid": `packages.faq.toggle.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faq.q }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "ml-4 shrink-0 transition-transform",
                        style: {
                          transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)"
                        },
                        children: "▾"
                      }
                    )
                  ]
                }
              ),
              openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-5 py-4 text-sm",
                  style: {
                    background: "#2D1B1E",
                    color: "#E8A0AA",
                    borderTop: "1px solid rgba(232,160,170,0.1)"
                  },
                  children: faq.a
                }
              )
            ]
          },
          faq.q
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "py-16 px-6 text-center",
          style: {
            background: "#2D1B1E",
            borderTop: "1px solid rgba(232,160,170,0.1)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-3xl mb-3",
                style: { fontFamily: "var(--font-display)", color: "#FAD4D8" },
                children: "Not sure which package fits you?"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-6", style: { color: "#E8A0AA" }, children: "Take our 2-minute Trek Finder quiz and we'll recommend the perfect package for you." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/trek-finder", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "packages.trek_finder_button",
                  variant: "outline",
                  style: {
                    borderColor: "#B5525E",
                    color: "#FAD4D8",
                    background: "transparent"
                  },
                  children: "Take Trek Finder Quiz"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "packages.contact_button",
                  style: {
                    background: "#B5525E",
                    color: "#FAD4D8",
                    border: "none"
                  },
                  children: "Talk to Our Team"
                }
              ) })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  PackagesPage as default
};
