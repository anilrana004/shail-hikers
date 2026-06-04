import { t as jsxRuntimeExports, F as Layout, w as motion, D as MapPin } from "./index-BbOSvcvx.js";
import { S as Star } from "./star-CNBIqXZg.js";
import { C as CircleCheckBig } from "./circle-check-big-DY_mt6zQ.js";
import { A as Award } from "./award-CasNsgX9.js";
const guides = [
  {
    name: "Deepak Rawat",
    designation: "Lead Trek Leader",
    years: 12,
    favTrek: "Kedarkantha",
    certs: ["ITBP Certified", "WFR", "High Altitude Rescue"],
    funFact: "Has summited Kedarkantha 47 times in all seasons",
    available: true,
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Priya Sharma",
    designation: "Trek Leader",
    years: 7,
    favTrek: "Valley of Flowers",
    certs: ["Wilderness First Aid", "NOLS", "Rescue 3"],
    funFact: "Documented 120+ rare Himalayan wildflower species",
    available: true,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Amit Negi",
    designation: "Mountain Guide",
    years: 9,
    favTrek: "Rupin Pass",
    certs: ["IMF Basic", "ITBP", "Rock Craft"],
    funFact: "Trained at Nehru Institute of Mountaineering, Uttarkashi",
    available: false,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Sunita Bisht",
    designation: "Safety Officer",
    years: 6,
    favTrek: "Har Ki Dun",
    certs: ["WFR", "AED Certified", "Crisis Management"],
    funFact: "Led emergency evacuation of 12 trekkers in a blizzard — all safe",
    available: true,
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Rajan Thakur",
    designation: "Base Camp Manager",
    years: 11,
    favTrek: "Buran Ghati",
    certs: ["Food Safety", "Logistics", "High Altitude"],
    funFact: "Once cooked a 3-course dinner at 14,000 ft in a snowstorm",
    available: false,
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Kavita Rana",
    designation: "Trek Coordinator",
    years: 5,
    favTrek: "Dayara Bugyal",
    certs: ["Tourism Mgmt", "First Aid", "Hospitality"],
    funFact: "Fluent in 4 languages — coordinates international trekkers seamlessly",
    available: true,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Vikram Singh",
    designation: "Mountain Guide",
    years: 8,
    favTrek: "Bali Pass",
    certs: ["IMF Basic", "Rock Climbing", "Navigation"],
    funFact: "Expert in technical glacier crossings — trained over 200 trekkers",
    available: true,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Anjali Dobhal",
    designation: "Junior Guide",
    years: 3,
    favTrek: "Nag Tibba",
    certs: ["WFR", "Trekking Leader", "Nature Interpretation"],
    funFact: "Youngest female certified trek leader in Uttarakhand at age 24",
    available: true,
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&q=80"
  }
];
const stats = [
  { label: "Expert Guides", value: "15" },
  { label: "Batches Led", value: "200+" },
  { label: "Avg Rating", value: "4.9", icon: true },
  { label: "Safety Record", value: "100%" }
];
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
function TeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#FFFFFF", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-24 pb-8 text-center px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: -30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
            color: "#1A1A1A",
            fontWeight: 700,
            letterSpacing: "0.04em",
            lineHeight: 1.1
          },
          children: "THE PEOPLE BEHIND THE PEAKS"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.3, duration: 0.6 },
          style: {
            color: "#4A4A4A",
            fontFamily: "var(--font-body)",
            marginTop: "1rem",
            fontSize: "1.125rem"
          },
          children: "Certified mountain professionals who have spent thousands of hours on Himalayan trails"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { background: "#F88379" }, className: "py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            color: "#1A1A1A",
            fontWeight: 700
          },
          children: [
            s.value,
            s.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: "inline w-5 h-5 ml-1 mb-1",
                style: { color: "#D4A843" }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            color: "#1A1A1A",
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            opacity: 0.85
          },
          children: s.label
        }
      )
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-60px" },
        children: guides.map((guide) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: cardVariants,
            className: "group relative rounded-2xl overflow-hidden",
            style: {
              background: "#E6D8C4",
              border: "1px solid rgba(232,160,170,0.15)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 z-10 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: guide.available ? "#4ade80" : "#D4A843"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      color: guide.available ? "#4ade80" : "#D4A843",
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-body)"
                    },
                    children: guide.available ? "Available" : "On Trek"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      border: "3px solid #F88379",
                      overflow: "hidden",
                      boxShadow: "0 0 0 4px rgba(248,131,121,0.2)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: guide.photo,
                        alt: guide.name,
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        },
                        loading: "lazy"
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "1.375rem",
                      color: "#1A1A1A",
                      fontWeight: 700,
                      marginBottom: "0.25rem"
                    },
                    children: guide.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      color: "#4A4A4A",
                      fontSize: "0.875rem",
                      marginBottom: "0.5rem"
                    },
                    children: guide.designation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      background: "rgba(248,131,121,0.18)",
                      border: "1px solid rgba(248,131,121,0.35)",
                      color: "#1A1A1A",
                      borderRadius: 999,
                      padding: "2px 12px",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-body)",
                      marginBottom: "0.75rem"
                    },
                    children: [
                      guide.years,
                      " yrs experience"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MapPin,
                    {
                      className: "w-3.5 h-3.5",
                      style: { color: "#D4A843" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      style: {
                        color: "#D4A843",
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600
                      },
                      children: [
                        "Fav: ",
                        guide.favTrek
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-1.5 mb-4", children: guide.certs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      background: "#E6D8C4",
                      border: "1px solid rgba(232,160,170,0.3)",
                      color: "#4A4A4A",
                      borderRadius: 999,
                      padding: "2px 10px",
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-body)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheckBig,
                        {
                          className: "inline w-3 h-3 mr-1",
                          style: { color: "#F88379" }
                        }
                      ),
                      c
                    ]
                  },
                  c
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    style: {
                      background: "linear-gradient(to top, rgba(26,14,16,0.97) 60%, transparent)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Award,
                        {
                          className: "w-5 h-5 mx-auto mb-2",
                          style: { color: "#D4A843" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            color: "#1A1A1A",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.85rem",
                            lineHeight: 1.5
                          },
                          children: guide.funFact
                        }
                      )
                    ] })
                  }
                )
              ] })
            ]
          },
          guide.name
        ))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "text-center pb-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        style: {
          background: "#E6D8C4",
          border: "1px solid rgba(248,131,121,0.3)",
          borderRadius: 16,
          padding: "2.5rem",
          maxWidth: 600,
          margin: "0 auto"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "1.875rem",
                color: "#1A1A1A",
                marginBottom: "0.75rem"
              },
              children: "Trek with Our Certified Experts"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                color: "#4A4A4A",
                fontFamily: "var(--font-body)",
                marginBottom: "1.5rem",
                fontSize: "0.95rem"
              },
              children: "Every Shail Hikers batch is led by ITBP-certified professionals with years of high-altitude experience."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/treks",
              style: {
                display: "inline-block",
                background: "#F88379",
                color: "#1A1A1A",
                padding: "0.75rem 2rem",
                borderRadius: 999,
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s"
              },
              "data-ocid": "team.explore_treks_button",
              children: "Explore Our Treks"
            }
          )
        ]
      }
    ) })
  ] }) });
}
export {
  TeamPage as default
};
