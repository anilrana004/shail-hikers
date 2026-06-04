import { c as createLucideIcon, j as reactExports, t as jsxRuntimeExports, F as Layout, w as motion, E as Shield, U as Users, A as AnimatePresence, y as ChevronDown } from "./index-CqRCuDMS.js";
import { T as TrendingUp } from "./trending-up-Cb_qRG4s.js";
import { A as Award } from "./award-Dwjjc5O5.js";
import { C as CircleCheckBig } from "./circle-check-big-DhTWzk61.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode);
const benefits = [
  {
    icon: TrendingUp,
    title: "Leadership Development",
    desc: "Trail challenges expose natural leaders and build confident decision-making under pressure in your team."
  },
  {
    icon: Shield,
    title: "Trust Building",
    desc: "Shared hardship builds deep inter-team trust that no boardroom exercise can replicate."
  },
  {
    icon: Award,
    title: "Resilience Training",
    desc: "The Himalayas teach teams to push through fatigue and uncertainty. That resilience transfers to the workplace."
  },
  {
    icon: Users,
    title: "Shared Achievement",
    desc: "Standing together on a Himalayan summit creates a shared memory that drives long-term cohesion."
  }
];
const packages = [
  {
    name: "Team Spark",
    people: "15-25 people",
    duration: "2 Days",
    trek: "Nag Tibba",
    price: "Rs 8,999",
    color: "#E8A0AA",
    includes: [
      "Expert guide",
      "All meals",
      "Camping gear",
      "Completion certificate"
    ],
    highlight: false
  },
  {
    name: "Team Summit",
    people: "25-50 people",
    duration: "4 Days",
    trek: "Kedarkantha",
    price: "Rs 14,999",
    color: "#B5525E",
    includes: [
      "Expert guide",
      "All meals",
      "Camping gear",
      "Certificate",
      "Professional photography",
      "Drone footage"
    ],
    highlight: true
  },
  {
    name: "Leadership Expedition",
    people: "10-30 people",
    duration: "6 Days",
    trek: "Har Ki Dun",
    price: "Rs 24,999",
    color: "#C9A84C",
    includes: [
      "Senior guide + co-guide",
      "Premium meals",
      "Private tents",
      "Certificate",
      "Photo album",
      "Team performance report"
    ],
    highlight: false
  },
  {
    name: "Custom Enterprise",
    people: "Any team size",
    duration: "Custom",
    trek: "Your choice",
    price: "Contact us",
    color: "#A8C5DA",
    includes: [
      "Fully tailored itinerary",
      "Custom branding on gear",
      "Dedicated relationship manager",
      "Executive-grade logistics",
      "Full post-trek report",
      "Social media content pack"
    ],
    highlight: false
  }
];
const deliverables = [
  {
    icon: "📸",
    title: "Group Photo Album",
    desc: "High-resolution digital album with 100+ curated photos from the trek, delivered within 10 working days."
  },
  {
    icon: "📜",
    title: "Individual Certificates",
    desc: "Personalised Himalayan achievement certificates for every team member, framed and ready to display."
  },
  {
    icon: "📊",
    title: "Team Performance Report",
    desc: "An HR-ready report mapping trek observations to leadership behaviours and resilience indicators."
  },
  {
    icon: "📱",
    title: "Social Media Content Pack",
    desc: "30 edited reels, 60 photos, and copy templates for LinkedIn and Instagram."
  }
];
const clients = ["Infosys", "Wipro", "TCS", "Deloitte", "KPMG", "Google"];
const insuranceItems = [
  { label: "Medical Evacuation", value: "Rs 10,00,000 per person" },
  {
    label: "Group Liability",
    value: "Covered for all terrain and weather incidents"
  },
  {
    label: "Adventure Sports Cover",
    value: "Trekking, camping, river crossings included"
  },
  {
    label: "Emergency Hospitalisation",
    value: "Direct billing at network hospitals"
  },
  {
    label: "Repatriation",
    value: "Full cover for medical repatriation to home city"
  }
];
function CorporatePage() {
  const [headcount, setHeadcount] = reactExports.useState("");
  const [budget, setBudget] = reactExports.useState("");
  const [month, setMonth] = reactExports.useState("");
  const [recommendation, setRecommendation] = reactExports.useState(null);
  const [insuranceOpen, setInsuranceOpen] = reactExports.useState(false);
  const [formState, setFormState] = reactExports.useState({
    name: "",
    company: "",
    headcount: "",
    dates: "",
    trek: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  function calculatePackage() {
    const count = Number.parseInt(headcount || "0");
    const b = Number.parseInt(budget || "0");
    if (count >= 25 && b >= 14999)
      setRecommendation(
        "Team Summit - Kedarkantha, 4 days. Perfect for 25-50 people at Rs 14,999/person."
      );
    else if (count >= 10 && b >= 24999)
      setRecommendation(
        "Leadership Expedition - Har Ki Dun, 6 days. Ideal for leadership teams at Rs 24,999/person."
      );
    else if (count >= 15 && b >= 8999)
      setRecommendation(
        "Team Spark - Nag Tibba, 2 days. Great starter for 15-25 people at Rs 8,999/person."
      );
    else
      setRecommendation(
        "Custom Enterprise package recommended. Contact us for a tailored quote."
      );
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  const inputStyle = {
    width: "100%",
    background: "#1A0E10",
    border: "1px solid rgba(232,160,170,0.25)",
    color: "#FAD4D8",
    borderRadius: 8,
    padding: "0.6rem 0.75rem",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#1A0E10", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&h=900&fit=crop&q=80",
          alt: "Corporate trekking team in Himalayas",
          className: "absolute inset-0 w-full h-full object-cover",
          style: { filter: "brightness(0.35)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center px-4 z-10 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(232,160,170,0.4)",
              color: "#E8A0AA",
              padding: "4px 16px",
              borderRadius: 999,
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              marginBottom: "1.25rem",
              textTransform: "uppercase"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3.5 h-3.5" }),
              " Corporate and Group Experiences"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.7 },
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 7vw, 4.5rem)",
              color: "#FAD4D8",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "1.25rem"
            },
            children: "FORGE YOUR TEAM IN THE HIMALAYAS"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.45, duration: 0.6 },
            style: {
              color: "#E8A0AA",
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              maxWidth: 500,
              margin: "0 auto 2rem"
            },
            children: "50+ corporate groups have discovered that the most powerful team-building happens at 12,000 feet."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#quote",
            "data-ocid": "corporate.hero_cta_button",
            style: {
              display: "inline-block",
              background: "#B5525E",
              color: "#FAD4D8",
              padding: "0.875rem 2.25rem",
              borderRadius: 999,
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "1rem"
            },
            children: "Request a Corporate Quote"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", style: { background: "#2D1B1E" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            color: "#FAD4D8",
            textAlign: "center",
            marginBottom: "3rem",
            fontWeight: 700
          },
          children: "Why Companies Choose the Mountains"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1, duration: 0.5 },
          className: "p-6 rounded-2xl text-center",
          style: {
            background: "#1A0E10",
            border: "1px solid rgba(232,160,170,0.12)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              b.icon,
              {
                className: "w-8 h-8 mx-auto mb-3",
                style: { color: "#B5525E" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "#FAD4D8",
                  fontWeight: 700,
                  marginBottom: "0.5rem"
                },
                children: b.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  color: "#E8A0AA",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65
                },
                children: b.desc
              }
            )
          ]
        },
        b.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", style: { background: "#1A0E10" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            color: "#FAD4D8",
            textAlign: "center",
            marginBottom: "3rem",
            fontWeight: 700
          },
          children: "Corporate Packages"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: packages.map((pkg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1, duration: 0.5 },
          className: "rounded-2xl overflow-hidden flex flex-col",
          style: {
            background: "#2D1B1E",
            border: `2px solid ${pkg.highlight ? "#B5525E" : "rgba(232,160,170,0.15)"}`,
            boxShadow: pkg.highlight ? "0 0 30px rgba(181,82,94,0.2)" : "none"
          },
          children: [
            pkg.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  background: "#B5525E",
                  textAlign: "center",
                  padding: "4px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  color: "#FAD4D8",
                  letterSpacing: "0.1em"
                },
                children: "MOST POPULAR"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    color: pkg.color,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem"
                  },
                  children: pkg.trek
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "#FAD4D8",
                    fontWeight: 700,
                    marginBottom: "0.25rem"
                  },
                  children: pkg.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    color: "#E8A0AA",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    marginBottom: "0.75rem"
                  },
                  children: [
                    pkg.people,
                    " - ",
                    pkg.duration
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "1.875rem",
                    color: "#C9A84C",
                    fontWeight: 700,
                    marginBottom: "1.25rem"
                  },
                  children: [
                    pkg.price,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          fontSize: "0.875rem",
                          color: "#E8A0AA",
                          fontFamily: "var(--font-body)",
                          fontWeight: 400
                        },
                        children: "/person"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex-1 space-y-2 mb-5", children: pkg.includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    className: "w-4 h-4 mt-0.5 flex-shrink-0",
                    style: { color: pkg.color }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      color: "#E8A0AA",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem"
                    },
                    children: item
                  }
                )
              ] }, item)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#quote",
                  "data-ocid": `corporate.package_${i + 1}_button`,
                  style: {
                    display: "block",
                    textAlign: "center",
                    background: pkg.highlight ? "#B5525E" : "transparent",
                    border: `1px solid ${pkg.color}`,
                    color: pkg.highlight ? "#FAD4D8" : pkg.color,
                    padding: "0.625rem",
                    borderRadius: 999,
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none"
                  },
                  children: "Get Quote"
                }
              )
            ] })
          ]
        },
        pkg.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", style: { background: "#2D1B1E" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            color: "#FAD4D8",
            textAlign: "center",
            marginBottom: "0.5rem",
            fontWeight: 700
          },
          children: "Corporate Trek Planner"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          style: {
            textAlign: "center",
            color: "#E8A0AA",
            fontFamily: "var(--font-body)",
            marginBottom: "2rem",
            fontSize: "0.9rem"
          },
          children: "Answer 3 quick questions and we will recommend your ideal package."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-7 flex flex-col gap-4",
          style: {
            background: "#1A0E10",
            border: "1px solid rgba(181,82,94,0.25)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "corp-headcount",
                    style: {
                      color: "#E8A0AA",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      display: "block",
                      marginBottom: 6
                    },
                    children: "Team Headcount"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "corp-headcount",
                    type: "number",
                    placeholder: "e.g. 30",
                    value: headcount,
                    onChange: (e) => setHeadcount(e.target.value),
                    "data-ocid": "corporate.planner_headcount_input",
                    style: { ...inputStyle, background: "#2D1B1E" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "corp-budget",
                    style: {
                      color: "#E8A0AA",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      display: "block",
                      marginBottom: 6
                    },
                    children: "Budget per Person (Rs)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "corp-budget",
                    type: "number",
                    placeholder: "e.g. 15000",
                    value: budget,
                    onChange: (e) => setBudget(e.target.value),
                    "data-ocid": "corporate.planner_budget_input",
                    style: { ...inputStyle, background: "#2D1B1E" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "corp-month",
                    style: {
                      color: "#E8A0AA",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      display: "block",
                      marginBottom: 6
                    },
                    children: "Preferred Month"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "corp-month",
                    value: month,
                    onChange: (e) => setMonth(e.target.value),
                    "data-ocid": "corporate.planner_month_select",
                    style: { ...inputStyle, background: "#2D1B1E" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select month" }),
                      [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                      ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, children: m }, m))
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: calculatePackage,
                "data-ocid": "corporate.planner_calculate_button",
                style: {
                  background: "#B5525E",
                  color: "#FAD4D8",
                  border: "none",
                  padding: "0.75rem 2rem",
                  borderRadius: 999,
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  fontSize: "0.95rem"
                },
                children: "Calculate Ideal Package"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: recommendation && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                style: {
                  background: "rgba(181,82,94,0.12)",
                  border: "1px solid rgba(181,82,94,0.35)",
                  borderRadius: 12,
                  padding: "1rem 1.25rem",
                  color: "#FAD4D8",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem"
                },
                "data-ocid": "corporate.planner_result",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#C9A84C" }, children: "Recommended: " }),
                  recommendation
                ]
              }
            ) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", style: { background: "#1A0E10" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "2.25rem",
            color: "#FAD4D8",
            textAlign: "center",
            marginBottom: "3rem",
            fontWeight: 700
          },
          children: "What You Take Home"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: deliverables.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 25 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1, duration: 0.45 },
          className: "p-6 rounded-2xl",
          style: {
            background: "#2D1B1E",
            border: "1px solid rgba(232,160,170,0.12)",
            textAlign: "center"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.25rem", marginBottom: "0.75rem" }, children: d.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  color: "#FAD4D8",
                  fontWeight: 700,
                  marginBottom: "0.5rem"
                },
                children: d.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  color: "#E8A0AA",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  lineHeight: 1.65
                },
                children: d.desc
              }
            )
          ]
        },
        d.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { background: "#2D1B1E" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          style: {
            color: "#E8A0AA",
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "2rem"
          },
          children: "Trusted by India leading Companies"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-6", children: clients.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            color: "#FAD4D8",
            opacity: 0.55,
            fontWeight: 700,
            letterSpacing: "0.04em",
            padding: "0.5rem 1.25rem",
            border: "1px solid rgba(232,160,170,0.12)",
            borderRadius: 8
          },
          children: c
        },
        c
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { background: "#1A0E10" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "rounded-2xl overflow-hidden",
        style: { border: "1px solid rgba(201,168,76,0.3)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                background: "#2D1B1E",
                padding: "0.75rem 1.5rem",
                borderBottom: "1px solid rgba(201,168,76,0.2)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    color: "#C9A84C",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase"
                  },
                  children: "Case Study"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#2D1B1E", padding: "2rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "#FAD4D8",
                  fontWeight: 700,
                  marginBottom: "0.75rem"
                },
                children: "Infosys Hyderabad - Kedarkantha 2023"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 mb-4", children: [
              ["45", "Team Members"],
              ["98%", "Satisfaction"],
              ["+40%", "Cohesion Score"]
            ].map(([val, lbl]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "#C9A84C",
                    fontWeight: 700
                  },
                  children: val
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    color: "#E8A0AA",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem"
                  },
                  children: lbl
                }
              )
            ] }, lbl)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                style: {
                  color: "#E8A0AA",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.75,
                  fontSize: "0.9rem"
                },
                children: [
                  "The Kedarkantha trek with Shail Hikers transformed how our 45-member engineering team works together. The post-trek survey showed a 40% increase in team cohesion scores and 98% of participants rated the experience 5/5.",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        display: "block",
                        marginTop: "0.75rem",
                        color: "#FAD4D8",
                        fontWeight: 600
                      },
                      children: "HR Director, Infosys Hyderabad"
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { background: "#2D1B1E" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setInsuranceOpen((o) => !o),
          "data-ocid": "corporate.insurance_accordion_toggle",
          style: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#1A0E10",
            border: "1px solid rgba(181,82,94,0.3)",
            color: "#FAD4D8",
            padding: "1.25rem 1.5rem",
            borderRadius: insuranceOpen ? "12px 12px 0 0" : 12,
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 700,
            cursor: "pointer"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Group Insurance Coverage" }),
            insuranceOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5", style: { color: "#B5525E" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5", style: { color: "#B5525E" } })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: insuranceOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.35 },
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                background: "#1A0E10",
                border: "1px solid rgba(181,82,94,0.3)",
                borderTop: "none",
                borderRadius: "0 0 12px 12px",
                padding: "1.5rem"
              },
              children: insuranceItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 mb-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheckBig,
                      {
                        className: "w-4 h-4 mt-0.5 flex-shrink-0",
                        style: { color: "#B5525E" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          style: {
                            fontFamily: "var(--font-body)",
                            color: "#FAD4D8",
                            fontWeight: 600,
                            fontSize: "0.9rem"
                          },
                          children: [
                            item.label,
                            ":",
                            " "
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            color: "#E8A0AA",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem"
                          },
                          children: item.value
                        }
                      )
                    ] })
                  ]
                },
                item.label
              ))
            }
          )
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "quote",
        className: "py-20 px-4",
        style: { background: "#1A0E10" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h2,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "2.25rem",
                color: "#FAD4D8",
                textAlign: "center",
                marginBottom: "0.5rem",
                fontWeight: 700
              },
              children: "Request a Corporate Quote"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                textAlign: "center",
                color: "#E8A0AA",
                fontFamily: "var(--font-body)",
                marginBottom: "2.5rem",
                fontSize: "0.9rem"
              },
              children: "We will respond within 4 business hours with a tailored proposal."
            }
          ),
          submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              className: "text-center p-10 rounded-2xl",
              style: {
                background: "#2D1B1E",
                border: "1px solid rgba(181,82,94,0.3)"
              },
              "data-ocid": "corporate.quote_success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.5rem", marginBottom: "1rem" }, children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "#FAD4D8",
                      marginBottom: "0.75rem",
                      fontWeight: 700
                    },
                    children: "Quote Request Received!"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", fontFamily: "var(--font-body)" }, children: "Our corporate team will reach out within 4 hours with a customised proposal for your team." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "rounded-2xl p-7 flex flex-col gap-4",
              style: {
                background: "#2D1B1E",
                border: "1px solid rgba(232,160,170,0.12)"
              },
              "data-ocid": "corporate.quote_form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  {
                    id: "name",
                    label: "Your Name",
                    placeholder: "Full name",
                    type: "text"
                  },
                  {
                    id: "company",
                    label: "Company",
                    placeholder: "Company name",
                    type: "text"
                  },
                  {
                    id: "headcount",
                    label: "Team Size",
                    placeholder: "Number of people",
                    type: "number"
                  },
                  {
                    id: "dates",
                    label: "Preferred Dates",
                    placeholder: "e.g. March 2025",
                    type: "text"
                  }
                ].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: `corp-${field.id}`,
                      style: {
                        color: "#E8A0AA",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        display: "block",
                        marginBottom: 6
                      },
                      children: field.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: `corp-${field.id}`,
                      required: true,
                      type: field.type,
                      placeholder: field.placeholder,
                      value: formState[field.id],
                      onChange: (e) => setFormState((s) => ({
                        ...s,
                        [field.id]: e.target.value
                      })),
                      "data-ocid": `corporate.quote_${field.id}_input`,
                      style: inputStyle
                    }
                  )
                ] }, field.id)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "corp-trek",
                      style: {
                        color: "#E8A0AA",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        display: "block",
                        marginBottom: 6
                      },
                      children: "Trek Preference"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "corp-trek",
                      value: formState.trek,
                      onChange: (e) => setFormState((s) => ({ ...s, trek: e.target.value })),
                      "data-ocid": "corporate.quote_trek_select",
                      style: inputStyle,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a trek" }),
                        [
                          "Kedarkantha",
                          "Nag Tibba",
                          "Har Ki Dun",
                          "Dayara Bugyal",
                          "Custom"
                        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "corp-message",
                      style: {
                        color: "#E8A0AA",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        display: "block",
                        marginBottom: 6
                      },
                      children: "Message"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "corp-message",
                      rows: 3,
                      placeholder: "Tell us about your team, goals, and any special requirements...",
                      value: formState.message,
                      onChange: (e) => setFormState((s) => ({ ...s, message: e.target.value })),
                      "data-ocid": "corporate.quote_message_textarea",
                      style: { ...inputStyle, resize: "vertical" }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    "data-ocid": "corporate.quote_submit_button",
                    style: {
                      background: "#B5525E",
                      color: "#FAD4D8",
                      border: "none",
                      padding: "0.875rem",
                      borderRadius: 999,
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "1rem",
                      cursor: "pointer"
                    },
                    children: "Submit Quote Request"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] }) });
}
export {
  CorporatePage as default
};
