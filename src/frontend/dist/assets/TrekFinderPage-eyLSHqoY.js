import { j as reactExports, t as jsxRuntimeExports, w as motion, A as AnimatePresence } from "./index-CMVflWSo.js";
import { T as TREKS } from "./treks-CGIURMuU.js";
import { C as Check } from "./check-Cu3DywVU.js";
import { R as RefreshCw } from "./refresh-cw-Db6-cyRb.js";
import { S as Share2 } from "./share-2-BOMluAdr.js";
import { C as ChevronLeft } from "./chevron-left-ZAxSX7tH.js";
import { C as ChevronRight } from "./chevron-right-BJGWPg2Z.js";
const FITNESS_OPTIONS = [
  {
    value: 1,
    label: "Couch Potato",
    desc: "I rarely exercise and get winded climbing stairs",
    emoji: "🛌"
  },
  {
    value: 2,
    label: "Weekend Walker",
    desc: "I walk 30 min a few times per week",
    emoji: "🚶"
  },
  {
    value: 3,
    label: "Regular Jogger",
    desc: "I exercise 3–4 days/week, can walk 10km comfortably",
    emoji: "🏃"
  },
  {
    value: 4,
    label: "Active Hiker",
    desc: "I hike/run regularly and have reasonable stamina",
    emoji: "🏄"
  },
  {
    value: 5,
    label: "Athletic",
    desc: "I train daily and can sustain high exertion for hours",
    emoji: "💪"
  }
];
const EXPERIENCE_OPTIONS = [
  "Snow",
  "Flowers",
  "Forests",
  "Summit",
  "River",
  "Meadows",
  "Temple",
  "Wildlife"
];
const GROUP_OPTIONS = [
  { value: "Solo", emoji: "🧗", desc: "Just me — my pace, my rules" },
  { value: "Partner", emoji: "👫", desc: "Me and my partner" },
  { value: "Friends", emoji: "👯", desc: "A group of friends" },
  { value: "Family", emoji: "👨‍👩‍👦", desc: "Family with kids" },
  { value: "Corporate", emoji: "🏢", desc: "Corporate team outing" }
];
const CAMPING_OPTIONS = [
  {
    value: "love",
    label: "Love it!",
    desc: "Give me the stars and campfire",
    emoji: "⛺"
  },
  {
    value: "okay",
    label: "It's okay",
    desc: "I can manage camping",
    emoji: "🌿"
  },
  {
    value: "prefer_gh",
    label: "Prefer guesthouse",
    desc: "I like a real bed and shower",
    emoji: "🏡"
  }
];
const ALTITUDE_OPTIONS = [
  { value: "yes", label: "Yes", desc: "Been above 12,000 ft before" },
  {
    value: "no",
    label: "No",
    desc: "This will be my first high altitude experience"
  },
  {
    value: "somewhat",
    label: "Somewhat",
    desc: "I've done some moderate altitude"
  }
];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const defaultAnswers = () => ({
  fitness: 3,
  days: 6,
  budget: 1e4,
  months: [],
  experiences: [],
  group: "",
  altitude: "",
  camping: ""
});
const DIFF_SCORE = {
  Easy: 1,
  Moderate: 2,
  Difficult: 3,
  Extreme: 4
};
function scoreTrek(trek, a) {
  let score = 0;
  const diffScore = DIFF_SCORE[trek.difficulty] ?? 2;
  const fitDiff = Math.abs(a.fitness - diffScore);
  score += Math.max(0, 30 - fitDiff * 8);
  const daysDiff = Math.abs(trek.durationDays - a.days);
  score += Math.max(0, 25 - daysDiff * 3);
  if (trek.basePrice <= a.budget) score += 25;
  else if (trek.basePrice <= a.budget * 1.2) score += 15;
  if (a.months.length > 0) {
    const matchesMonth = a.months.some(
      (m) => trek.bestTime.toLowerCase().includes(m.toLowerCase())
    );
    if (matchesMonth) score += 20;
  } else {
    score += 10;
  }
  return Math.min(100, score);
}
function computeReasons(trek, a) {
  const reasons = [];
  if (DIFF_SCORE[trek.difficulty] <= a.fitness)
    reasons.push(
      `Difficulty perfectly matches your fitness level (${trek.difficulty})`
    );
  if (trek.durationDays <= a.days)
    reasons.push(`Fits your ${a.days}-day window at ${trek.durationDays} days`);
  if (trek.basePrice <= a.budget)
    reasons.push(
      `Within your budget at ₹${trek.basePrice.toLocaleString("en-IN")}/person`
    );
  if (trek.difficulty === "Easy" && a.altitude === "no")
    reasons.push("Great first high-altitude experience");
  if (a.experiences.includes("Snow") && trek.bestTime.includes("Dec"))
    reasons.push("Snow-covered trail in season");
  if (a.experiences.includes("Flowers") && trek.slug === "valley-of-flowers")
    reasons.push("World-famous flower valley");
  if (a.group === "Family" && trek.difficulty === "Easy")
    reasons.push("Family-friendly difficulty");
  if (!reasons.length)
    reasons.push(`Highly rated at ${trek.rating ?? 4.7}/5 stars`);
  return reasons.slice(0, 3);
}
function SliderInput({
  value,
  min,
  max,
  step,
  onChange,
  formatLabel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl", style: { color: "#D4A843" }, children: formatLabel(value) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(Number(e.target.value)),
        className: "w-full accent-[#F88379] h-2",
        style: { accentColor: "#F88379" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex justify-between text-xs mt-1",
        style: { color: "#4A4A4A" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatLabel(min) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatLabel(max) })
        ]
      }
    )
  ] });
}
function TrekFinderPage() {
  const [step, setStep] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState(defaultAnswers());
  const [results, setResults] = reactExports.useState([]);
  const totalSteps = 8;
  const progress = step < totalSteps ? step / totalSteps * 100 : 100;
  const computeResults = () => {
    const scored = TREKS.map((trek) => ({
      trek,
      score: scoreTrek(trek, answers),
      reasons: computeReasons(trek, answers)
    })).sort((a, b) => b.score - a.score).slice(0, 3);
    setResults(scored);
    setStep(8);
  };
  const goNext = () => {
    if (step === totalSteps - 1) computeResults();
    else setStep((s) => s + 1);
  };
  const goBack = () => setStep((s) => Math.max(0, s - 1));
  const update = (key, val) => setAnswers((prev) => ({ ...prev, [key]: val }));
  const QUESTIONS = [
    {
      q: "How would you describe your current fitness level?",
      hint: "Be honest — this determines trek difficulty match",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: FITNESS_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => update("fitness", opt.value),
          "data-ocid": `trekfinder.fitness.${opt.value}`,
          className: "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200",
          style: {
            background: answers.fitness === opt.value ? "rgba(248,131,121,0.2)" : "rgba(255,255,255,0.9)",
            border: answers.fitness === opt.value ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: opt.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-semibold text-sm",
                  style: { color: "#1A1A1A" },
                  children: opt.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5", style: { color: "#4A4A4A" }, children: opt.desc })
            ] }),
            answers.fitness === opt.value && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Check,
              {
                size: 16,
                className: "ml-auto",
                style: { color: "#F88379" }
              }
            )
          ]
        },
        opt.value
      )) })
    },
    {
      q: "How many days can you spare for this trek?",
      hint: "Including travel days",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SliderInput,
        {
          value: answers.days,
          min: 2,
          max: 14,
          step: 1,
          onChange: (v) => update("days", v),
          formatLabel: (v) => `${v} days`
        }
      )
    },
    {
      q: "What's your budget per person?",
      hint: "All-inclusive trek cost",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SliderInput,
        {
          value: answers.budget,
          min: 2e3,
          max: 3e4,
          step: 500,
          onChange: (v) => update("budget", v),
          formatLabel: (v) => `₹${v.toLocaleString("en-IN")}`
        }
      )
    },
    {
      q: "When are you planning to go?",
      hint: "Select all months that work for you",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-2", children: MONTHS.map((m) => {
        const sel = answers.months.includes(m);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => update(
              "months",
              sel ? answers.months.filter((x) => x !== m) : [...answers.months, m]
            ),
            "data-ocid": `trekfinder.month.${m}`,
            className: "py-3 rounded-xl text-sm font-semibold transition-all duration-200",
            style: {
              background: sel ? "rgba(248,131,121,0.2)" : "rgba(255,255,255,0.9)",
              border: sel ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.2)",
              color: sel ? "#1A1A1A" : "#4A4A4A"
            },
            children: m
          },
          m
        );
      }) })
    },
    {
      q: "What experiences excite you most?",
      hint: "Select all that apply",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: EXPERIENCE_OPTIONS.map((ex) => {
        const sel = answers.experiences.includes(ex);
        const emojis = {
          Snow: "❄️",
          Flowers: "🌸",
          Forests: "🌳",
          Summit: "⛰️",
          River: "🚣",
          Meadows: "🌿",
          Temple: "🛕",
          Wildlife: "𞰆"
        };
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => update(
              "experiences",
              sel ? answers.experiences.filter((x) => x !== ex) : [...answers.experiences, ex]
            ),
            "data-ocid": `trekfinder.experience.${ex.toLowerCase()}`,
            className: "p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-200",
            style: {
              background: sel ? "rgba(248,131,121,0.2)" : "rgba(255,255,255,0.9)",
              border: sel ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: emojis[ex] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-semibold",
                  style: { color: sel ? "#1A1A1A" : "#4A4A4A" },
                  children: ex
                }
              )
            ]
          },
          ex
        );
      }) })
    },
    {
      q: "Who are you going with?",
      hint: "This helps us recommend the right group dynamic",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: GROUP_OPTIONS.map((g) => {
        const sel = answers.group === g.value;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => update("group", g.value),
            "data-ocid": `trekfinder.group.${g.value.toLowerCase()}`,
            className: "p-4 rounded-xl flex flex-col items-center gap-2 text-center transition-all duration-200",
            style: {
              background: sel ? "rgba(248,131,121,0.2)" : "rgba(255,255,255,0.9)",
              border: sel ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: g.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-semibold text-sm",
                  style: { color: sel ? "#1A1A1A" : "#4A4A4A" },
                  children: g.value
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: g.desc })
            ]
          },
          g.value
        );
      }) })
    },
    {
      q: "Have you trekked at high altitude before?",
      hint: "High altitude = above 10,000 ft",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: ALTITUDE_OPTIONS.map((o) => {
        const sel = answers.altitude === o.value;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => update("altitude", o.value),
            "data-ocid": `trekfinder.altitude.${o.value}`,
            className: "p-5 rounded-xl text-center transition-all duration-200",
            style: {
              background: sel ? "rgba(248,131,121,0.2)" : "rgba(255,255,255,0.9)",
              border: sel ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-semibold text-base mb-1",
                  style: { color: sel ? "#1A1A1A" : "#4A4A4A" },
                  children: o.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: o.desc }),
              sel && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Check,
                {
                  size: 16,
                  className: "mx-auto mt-2",
                  style: { color: "#F88379" }
                }
              )
            ]
          },
          o.value
        );
      }) })
    },
    {
      q: "How do you feel about camping?",
      hint: "Most high-altitude treks require camping",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: CAMPING_OPTIONS.map((o) => {
        const sel = answers.camping === o.value;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => update("camping", o.value),
            "data-ocid": `trekfinder.camping.${o.value}`,
            className: "flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-200",
            style: {
              background: sel ? "rgba(248,131,121,0.2)" : "rgba(255,255,255,0.9)",
              border: sel ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: o.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-semibold",
                    style: { color: sel ? "#1A1A1A" : "#4A4A4A" },
                    children: o.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: o.desc })
              ] }),
              sel && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18, style: { color: "#F88379" } })
            ]
          },
          o.value
        );
      }) })
    }
  ];
  if (step === 8) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen", style: { background: "#E6D8C4" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3",
                style: {
                  background: "rgba(248,131,121,0.15)",
                  color: "#F88379"
                },
                children: "Your Results"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-display text-4xl mb-2",
                style: { color: "#1A1A1A" },
                children: "Your Perfect Treks"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#4A4A4A" }, children: "Based on your preferences, here are our top recommendations" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: results.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: i * 0.15 },
              className: "rounded-2xl overflow-hidden",
              style: {
                background: "rgba(255,255,255,0.95)",
                border: i === 0 ? "2px solid #F88379" : "1px solid rgba(248,131,121,0.25)"
              },
              children: [
                i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5",
                    style: { background: "#F88379", color: "#1A1A1A" },
                    children: "⭐ Best Match"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: r.trek.heroImage,
                      alt: r.trek.name,
                      className: "w-28 h-20 rounded-xl object-cover flex-shrink-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h2",
                        {
                          className: "font-display text-xl",
                          style: { color: "#1A1A1A" },
                          children: r.trek.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold",
                          style: {
                            background: "rgba(201,168,76,0.2)",
                            color: "#D4A843"
                          },
                          children: [
                            r.score,
                            "% match"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "text-xs mb-2",
                        style: { color: "#4A4A4A" },
                        children: [
                          r.trek.durationDays,
                          " days · ",
                          r.trek.difficulty,
                          " · ₹",
                          r.trek.basePrice.toLocaleString("en-IN"),
                          " ·",
                          " ",
                          r.trek.maxAltitude.toLocaleString(),
                          " ft"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: r.reasons.map((reason) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-1.5 text-xs mb-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Check,
                            {
                              size: 11,
                              className: "mt-0.5 flex-shrink-0",
                              style: { color: "#F88379" }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4A4A4A" }, children: reason })
                        ]
                      },
                      reason
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `/book/${r.trek.slug}`,
                          className: "px-4 py-2 rounded-xl text-xs font-semibold",
                          style: { background: "#F88379", color: "#1A1A1A" },
                          "data-ocid": `trekfinder.result.book.${i + 1}`,
                          children: "Book Now"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `/treks/${r.trek.slug}`,
                          className: "px-4 py-2 rounded-xl text-xs font-semibold",
                          style: {
                            background: "rgba(248,131,121,0.15)",
                            color: "#4A4A4A",
                            border: "1px solid rgba(248,131,121,0.3)"
                          },
                          "data-ocid": `trekfinder.result.view.${i + 1}`,
                          children: "View Details"
                        }
                      )
                    ] })
                  ] })
                ] })
              ]
            },
            r.trek.slug
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-8 p-5 rounded-2xl",
              style: {
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(248,131,121,0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-lg mb-4",
                    style: { color: "#1A1A1A" },
                    children: "Quick Comparison"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pb-2 pr-4", style: { color: "#4A4A4A" }, children: "Metric" }),
                    results.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "pb-2 pr-4 font-semibold",
                        style: { color: "#1A1A1A" },
                        children: r.trek.name
                      },
                      r.trek.slug
                    ))
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
                    {
                      label: "Days",
                      fn: (t) => `${t.durationDays} days`
                    },
                    {
                      label: "Altitude",
                      fn: (t) => `${t.maxAltitude.toLocaleString()} ft`
                    },
                    { label: "Difficulty", fn: (t) => t.difficulty },
                    {
                      label: "Price",
                      fn: (t) => `₹${t.basePrice.toLocaleString("en-IN")}`
                    },
                    { label: "Best Time", fn: (t) => t.bestTime }
                  ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", style: { color: "#4A4A4A" }, children: row.label }),
                    results.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "py-2 pr-4",
                        style: { color: "#1A1A1A" },
                        children: row.fn(r.trek)
                      },
                      r.trek.slug
                    ))
                  ] }, row.label)) })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setStep(0);
                  setAnswers(defaultAnswers());
                  setResults([]);
                },
                className: "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold",
                "data-ocid": "trekfinder.retake_button",
                style: {
                  background: "rgba(248,131,121,0.15)",
                  color: "#4A4A4A",
                  border: "1px solid rgba(248,131,121,0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 14 }),
                  " Retake Quiz"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold",
                style: {
                  background: "rgba(248,131,121,0.15)",
                  color: "#4A4A4A",
                  border: "1px solid rgba(248,131,121,0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 }),
                  " Share Results"
                ]
              }
            )
          ] })
        ]
      }
    ) }) });
  }
  const q = QUESTIONS[step];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen", style: { background: "#E6D8C4" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3",
          style: { background: "rgba(248,131,121,0.15)", color: "#F88379" },
          children: "Trek Finder Quiz"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "font-display text-4xl mb-2",
          style: { color: "#1A1A1A" },
          children: "Find Your Perfect Himalayan Trek"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#4A4A4A" }, children: "Answer 8 quick questions and we'll match you with the best trek" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex justify-between text-xs mb-2",
          style: { color: "#4A4A4A" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Question ",
              step + 1,
              " of ",
              totalSteps
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              Math.round(progress),
              "% done"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-2 rounded-full",
          style: { background: "rgba(248,131,121,0.2)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "h-2 rounded-full",
              style: {
                background: "linear-gradient(to right, #F88379, #4A4A4A)"
              },
              initial: false,
              animate: { width: `${progress}%` },
              transition: { duration: 0.4 }
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
        transition: { duration: 0.2 },
        className: "p-6 rounded-2xl mb-6",
        style: {
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(248,131,121,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl mb-1",
              style: { color: "#1A1A1A" },
              children: q.q
            }
          ),
          q.hint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-6", style: { color: "#4A4A4A" }, children: q.hint }),
          q.content
        ]
      },
      step
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: goBack,
          disabled: step === 0,
          className: "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
          "data-ocid": "trekfinder.back_button",
          style: {
            background: step === 0 ? "rgba(248,131,121,0.05)" : "rgba(248,131,121,0.15)",
            color: step === 0 ? "rgba(232,160,170,0.3)" : "#4A4A4A",
            border: "1px solid rgba(248,131,121,0.2)",
            cursor: step === 0 ? "not-allowed" : "pointer"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
            " Back"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          onClick: goNext,
          "data-ocid": "trekfinder.next_button",
          className: "flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold",
          style: { background: "#F88379", color: "#1A1A1A" },
          children: [
            step === totalSteps - 1 ? "See My Treks" : "Next",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          ]
        }
      )
    ] })
  ] }) });
}
export {
  TrekFinderPage as default
};
