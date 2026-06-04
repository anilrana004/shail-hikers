import { c as createLucideIcon, P as useParams, j as reactExports, t as jsxRuntimeExports, A as AnimatePresence, w as motion, W as User, Y as Phone, Z as Mail, B as Mountain, D as MapPin, E as Shield } from "./index-CMVflWSo.js";
import { T as TREKS } from "./treks-CGIURMuU.js";
import { u as useBatchesByTrek, a as useCreateBooking } from "./useBookings-C-ACTtFC.js";
import { C as Calendar } from "./calendar-B6uEOwgl.js";
import { P as Package, G as Gift } from "./package-eGnJLO0s.js";
import { C as Check } from "./check-Cu3DywVU.js";
import { C as ChevronRight } from "./chevron-right-BJGWPg2Z.js";
import { C as ChevronLeft } from "./chevron-left-ZAxSX7tH.js";
import { T as Tent } from "./tent-CPlmS7XZ.js";
import { S as Star } from "./star-BP2yrVNJ.js";
import { C as Camera } from "./camera-BqWHjJPq.js";
import { S as Share2 } from "./share-2-BOMluAdr.js";
import "./useMutation-CHXod-pd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
const FALLBACK_BATCHES = [
  {
    id: "b1",
    trekSlug: "",
    startDate: "2026-01-15",
    endDate: "2026-01-20",
    seatsTotal: 12,
    seatsBooked: 8,
    price: 0,
    guideName: "Deepak Negi",
    guideId: "g1",
    status: "filling_fast"
  },
  {
    id: "b2",
    trekSlug: "",
    startDate: "2026-02-01",
    endDate: "2026-02-06",
    seatsTotal: 12,
    seatsBooked: 4,
    price: 0,
    guideName: "Rohit Sharma",
    guideId: "g2",
    status: "open"
  },
  {
    id: "b3",
    trekSlug: "",
    startDate: "2026-02-15",
    endDate: "2026-02-20",
    seatsTotal: 12,
    seatsBooked: 12,
    price: 0,
    guideName: "Arun Kumar",
    guideId: "g3",
    status: "full"
  },
  {
    id: "b4",
    trekSlug: "",
    startDate: "2026-03-01",
    endDate: "2026-03-06",
    seatsTotal: 12,
    seatsBooked: 2,
    price: 0,
    guideName: "Deepak Negi",
    guideId: "g1",
    status: "open"
  },
  {
    id: "b5",
    trekSlug: "",
    startDate: "2026-03-15",
    endDate: "2026-03-20",
    seatsTotal: 12,
    seatsBooked: 9,
    price: 0,
    guideName: "Rohit Sharma",
    guideId: "g2",
    status: "filling_fast"
  }
];
function mapBatchStatus(status) {
  switch (status) {
    case "Open":
      return "open";
    case "Full":
      return "full";
    case "Cancelled":
      return "cancelled";
    case "Completed":
      return "completed";
    default:
      return "filling_fast";
  }
}
const ADD_ONS = [
  {
    id: "porter",
    name: "Porter Hire",
    description: "Personal porter for luggage (4kg limit)",
    price: 800,
    perDay: true,
    icon: Mountain
  },
  {
    id: "private_tent",
    name: "Private Tent",
    description: "Exclusive tent for solo occupancy",
    price: 500,
    perDay: false,
    icon: Tent
  },
  {
    id: "meal_upgrade",
    name: "Meal Plan Upgrade",
    description: "Premium meals: fruit, snacks, evening soup",
    price: 999,
    perDay: false,
    icon: Star
  },
  {
    id: "photography",
    name: "Photography Package",
    description: "Drone + photographer for the trek",
    price: 3999,
    perDay: false,
    icon: Camera
  },
  {
    id: "pre_trek_stay",
    name: "Pre-trek Stay (Day 0)",
    description: "Guesthouse in Dehradun night before",
    price: 699,
    perDay: false,
    icon: MapPin
  },
  {
    id: "post_trek_stay",
    name: "Post-trek Stay",
    description: "Guesthouse in Dehradun last day",
    price: 699,
    perDay: false,
    icon: MapPin
  },
  {
    id: "merchandise",
    name: "Merchandise Kit",
    description: "T-shirt + Cap + Badge + Sticker pack",
    price: 499,
    perDay: false,
    icon: Gift
  },
  {
    id: "insurance",
    name: "Insurance Upgrade",
    description: "Medical evacuation up to ₹5L",
    price: 299,
    perDay: false,
    icon: Shield
  },
  {
    id: "airport_pickup",
    name: "Airport/Railway Pickup",
    description: "Dehradun airport/station to hotel",
    price: 399,
    perDay: false,
    icon: MapPin
  },
  {
    id: "certificate",
    name: "Physical Certificate + Frame",
    description: "Framed completion certificate by courier",
    price: 199,
    perDay: false,
    icon: Star
  },
  {
    id: "guidebook",
    name: "Trek Guide Book",
    description: "Physical trek-specific guide book",
    price: 149,
    perDay: false,
    icon: Package
  }
];
const STEPS = [
  { num: 1, label: "Select Batch", icon: Calendar },
  { num: 2, label: "Traveler Details", icon: User },
  { num: 3, label: "Add-ons", icon: Package },
  { num: 4, label: "Review & Pay", icon: CreditCard }
];
const formatDate = (d) => new Date(d).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric"
});
const statusConfig = {
  open: {
    label: "Available",
    color: "#2D6A4F",
    bg: "rgba(45,80,22,0.2)",
    dot: "#4ade80"
  },
  filling_fast: {
    label: "Limited",
    color: "#D4A843",
    bg: "rgba(201,168,76,0.15)",
    dot: "#D4A843"
  },
  full: {
    label: "Full",
    color: "#F88379",
    bg: "rgba(248,131,121,0.15)",
    dot: "#F88379"
  },
  cancelled: {
    label: "Cancelled",
    color: "#666",
    bg: "rgba(0,0,0,0.1)",
    dot: "#666"
  },
  completed: {
    label: "Completed",
    color: "#888",
    bg: "rgba(0,0,0,0.1)",
    dot: "#888"
  }
};
function StepIndicator({ current }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-0 mb-10", children: STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
          style: {
            background: current >= step.num ? "#F88379" : "rgba(248,131,121,0.15)",
            color: current >= step.num ? "#1A1A1A" : "#4A4A4A",
            border: current === step.num ? "2px solid #4A4A4A" : "2px solid transparent",
            boxShadow: current === step.num ? "0 0 16px rgba(248,131,121,0.4)" : "none"
          },
          children: current > step.num ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16 }) : step.num
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-xs hidden sm:block",
          style: {
            color: current === step.num ? "#1A1A1A" : "#4A4A4A",
            opacity: current === step.num ? 1 : 0.6
          },
          children: step.label
        }
      )
    ] }),
    i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-16 sm:w-24 h-px mx-2 mb-4",
        style: {
          background: current > step.num ? "#F88379" : "rgba(248,131,121,0.25)"
        }
      }
    )
  ] }, step.num)) });
}
function Step1BatchSelector({
  trek,
  batches,
  selected,
  onSelect,
  onNext
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-2", style: { color: "#1A1A1A" }, children: "Select Your Batch" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-8 text-sm", style: { color: "#4A4A4A" }, children: [
      "Choose from available departure dates for ",
      trek.name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: batches.map((b) => {
      const sc = statusConfig[b.status];
      const seatsLeft = b.seatsTotal - b.seatsBooked;
      const isSelected = (selected == null ? void 0 : selected.id) === b.id;
      const isDisabled = b.status === "full" || b.status === "cancelled";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          whileHover: isDisabled ? {} : { y: -2 },
          onClick: () => !isDisabled && onSelect(b),
          "data-ocid": `batch.item.${b.id}`,
          className: "w-full text-left p-4 rounded-xl transition-all duration-200",
          style: {
            background: isSelected ? "rgba(248,131,121,0.15)" : "rgba(255,255,255,0.9)",
            border: isSelected ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.25)",
            opacity: isDisabled ? 0.55 : 1,
            cursor: isDisabled ? "not-allowed" : "pointer"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display text-xl",
                      style: { color: "#1A1A1A" },
                      children: formatDate(b.startDate)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", style: { color: "#4A4A4A" }, children: [
                    "→ ",
                    formatDate(b.endDate)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#4A4A4A" }, children: [
                    "🧭 Guide:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#1A1A1A" }, children: b.guideName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#4A4A4A" }, children: [
                    "👥 ",
                    seatsLeft,
                    " seats left"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5",
                    style: { background: sc.bg, color: sc.color },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-1.5 h-1.5 rounded-full animate-pulse-dot",
                          style: { background: sc.dot }
                        }
                      ),
                      sc.label
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-display text-lg",
                    style: { color: "#D4A843" },
                    children: [
                      "₹",
                      trek.basePrice.toLocaleString("en-IN")
                    ]
                  }
                )
              ] })
            ] }),
            isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                className: "mt-4 pt-4 border-t",
                style: { borderColor: "rgba(248,131,121,0.3)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#4A4A4A" }, children: [
                    "🌤️ Forecast:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A1A1A" }, children: "Clear skies, -8°C nights" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#4A4A4A" }, children: [
                    "👫 Group:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A1A1A" }, children: "Mix of 4M+3F, avg age 27" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#4A4A4A" }, children: [
                    "📊 Experience:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A1A1A" }, children: "70% intermediate" })
                  ] })
                ] })
              }
            )
          ]
        },
        b.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        onClick: onNext,
        disabled: !selected,
        "data-ocid": "book.next_button",
        className: "px-8 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-200",
        style: {
          background: selected ? "#F88379" : "rgba(248,131,121,0.3)",
          color: selected ? "#1A1A1A" : "rgba(250,212,216,0.4)",
          cursor: selected ? "pointer" : "not-allowed"
        },
        children: [
          "Continue to Traveler Details ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
        ]
      }
    ) })
  ] });
}
const defaultTraveler = () => ({
  name: "",
  age: "",
  gender: "male",
  emergencyContact: "",
  medicalConditions: "",
  mealPreference: "veg",
  height: "",
  weight: "",
  isFirstHimalayanTrek: false,
  tshirtSize: "M"
});
function TravelerFormCard({
  idx,
  data,
  onChange,
  extreme
}) {
  const inputClass = "w-full px-3 py-2 rounded-lg text-sm bg-transparent border outline-none transition-all duration-200";
  const inputStyle = {
    borderColor: "rgba(248,131,121,0.4)",
    color: "#1A1A1A",
    background: "rgba(255,255,255,0.8)"
  };
  const labelStyle = { color: "#4A4A4A" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-5 rounded-xl mb-4",
      style: {
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(248,131,121,0.25)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h3",
          {
            className: "font-display text-lg mb-4 flex items-center gap-2",
            style: { color: "#1A1A1A" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
                  style: { background: "#F88379", color: "#1A1A1A" },
                  children: idx + 1
                }
              ),
              idx === 0 ? "Lead Traveler" : `Traveler ${idx + 1}`
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `t-${idx}-name`,
                className: "block text-xs mb-1.5",
                style: labelStyle,
                children: "Full Name *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: `t-${idx}-name`,
                className: inputClass,
                style: inputStyle,
                value: data.name,
                onChange: (e) => onChange("name", e.target.value),
                placeholder: "As on Aadhaar"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `t-${idx}-age`,
                className: "block text-xs mb-1.5",
                style: labelStyle,
                children: "Age *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: `t-${idx}-age`,
                type: "number",
                className: inputClass,
                style: inputStyle,
                value: data.age,
                onChange: (e) => onChange("age", e.target.value),
                placeholder: "18",
                min: "12",
                max: "70"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `t-${idx}-gender`,
                className: "block text-xs mb-1.5",
                style: labelStyle,
                children: "Gender *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: `t-${idx}-gender`,
                className: inputClass,
                style: inputStyle,
                value: data.gender,
                onChange: (e) => onChange("gender", e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "male", children: "Male" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "female", children: "Female" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `t-${idx}-shirt`,
                className: "block text-xs mb-1.5",
                style: labelStyle,
                children: "T-Shirt Size"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: `t-${idx}-shirt`,
                className: inputClass,
                style: inputStyle,
                value: data.tshirtSize,
                onChange: (e) => onChange("tshirtSize", e.target.value),
                children: ["XS", "S", "M", "L", "XL", "XXL"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `t-${idx}-emerg`,
                className: "block text-xs mb-1.5",
                style: labelStyle,
                children: "Emergency Contact *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: `t-${idx}-emerg`,
                className: inputClass,
                style: inputStyle,
                value: data.emergencyContact,
                onChange: (e) => onChange("emergencyContact", e.target.value),
                placeholder: "+91 XXXXX XXXXX"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `t-${idx}-meal`,
                className: "block text-xs mb-1.5",
                style: labelStyle,
                children: "Meal Preference"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: `t-${idx}-meal`,
                className: inputClass,
                style: inputStyle,
                value: data.mealPreference,
                onChange: (e) => onChange("mealPreference", e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "veg", children: "Vegetarian" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "non-veg", children: "Non-Vegetarian" })
                ]
              }
            )
          ] }),
          extreme && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `t-${idx}-height`,
                  className: "block text-xs mb-1.5",
                  style: labelStyle,
                  children: "Height (cm)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `t-${idx}-height`,
                  type: "number",
                  className: inputClass,
                  style: inputStyle,
                  value: data.height,
                  onChange: (e) => onChange("height", e.target.value),
                  placeholder: "170"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `t-${idx}-weight`,
                  className: "block text-xs mb-1.5",
                  style: labelStyle,
                  children: "Weight (kg)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `t-${idx}-weight`,
                  type: "number",
                  className: inputClass,
                  style: inputStyle,
                  value: data.weight,
                  onChange: (e) => onChange("weight", e.target.value),
                  placeholder: "65"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `medical_${idx}`,
                className: "block text-xs mb-1.5",
                style: labelStyle,
                children: "Medical Conditions (if any)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: `medical_${idx}`,
                className: inputClass,
                style: inputStyle,
                value: data.medicalConditions,
                onChange: (e) => onChange("medicalConditions", e.target.value),
                placeholder: "e.g. Asthma, BP — leave blank if none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                id: `first_trek_${idx}`,
                checked: data.isFirstHimalayanTrek,
                onChange: (e) => onChange("isFirstHimalayanTrek", e.target.checked),
                className: "w-4 h-4 accent-[#F88379]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `first_trek_${idx}`,
                className: "text-sm",
                style: { color: "#4A4A4A" },
                children: "This is my first Himalayan trek"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Step2TravelerDetails({
  trek,
  travelers,
  lead,
  trekkerCount,
  onTravelerChange,
  onLeadChange,
  onCountChange,
  onNext,
  onBack
}) {
  const isExtreme = trek.difficulty === "Extreme" || trek.difficulty === "Difficult";
  const inputStyle = {
    borderColor: "rgba(248,131,121,0.4)",
    color: "#1A1A1A",
    background: "rgba(255,255,255,0.8)"
  };
  const inputClass = "w-full px-3 py-2 rounded-lg text-sm bg-transparent border outline-none";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-2", style: { color: "#1A1A1A" }, children: "Traveler Details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm", style: { color: "#4A4A4A" }, children: "Tell us who's going on this incredible journey" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mb-6 p-4 rounded-xl",
        style: {
          background: "rgba(255,255,255,0.85)",
          border: "1px solid rgba(248,131,121,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-4", style: { color: "#1A1A1A" }, children: "Lead Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "lead_phone",
                  className: "block text-xs mb-1.5",
                  style: { color: "#4A4A4A" },
                  children: "Phone *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, style: { color: "#F88379" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "lead_phone",
                    className: inputClass,
                    style: inputStyle,
                    value: lead.phone,
                    onChange: (e) => onLeadChange("phone", e.target.value),
                    placeholder: "+91 XXXXX XXXXX"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "lead_email",
                  className: "block text-xs mb-1.5",
                  style: { color: "#4A4A4A" },
                  children: "Email *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, style: { color: "#F88379" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "lead_email",
                    className: inputClass,
                    style: inputStyle,
                    value: lead.email,
                    onChange: (e) => onLeadChange("email", e.target.value),
                    placeholder: "you@email.com"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "lead_city",
                  className: "block text-xs mb-1.5",
                  style: { color: "#4A4A4A" },
                  children: "City *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "lead_city",
                  className: inputClass,
                  style: inputStyle,
                  value: lead.city,
                  onChange: (e) => onLeadChange("city", e.target.value),
                  placeholder: "Delhi"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "lead_source",
                  className: "block text-xs mb-1.5",
                  style: { color: "#4A4A4A" },
                  children: "How did you hear about us?"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "lead_source",
                  className: inputClass,
                  style: inputStyle,
                  value: lead.source,
                  onChange: (e) => onLeadChange("source", e.target.value),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select..." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "instagram", children: "Instagram" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "google", children: "Google" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "friend", children: "Friend Referral" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "youtube", children: "YouTube" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#4A4A4A" }, children: "Number of trekkers:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [1, 2, 3, 4, 5, 6].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onCountChange(n),
          className: "w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-200",
          style: {
            background: trekkerCount === n ? "#F88379" : "rgba(248,131,121,0.15)",
            color: trekkerCount === n ? "#1A1A1A" : "#4A4A4A",
            border: "none"
          },
          children: n
        },
        n
      )) })
    ] }),
    travelers.map((t, i) => {
      var _a;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        TravelerFormCard,
        {
          idx: i,
          data: t,
          onChange: (f, v) => onTravelerChange(i, f, v),
          extreme: isExtreme
        },
        `tf-${i}-${((_a = travelers[i]) == null ? void 0 : _a.name) || i}`
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
          style: {
            background: "rgba(248,131,121,0.15)",
            color: "#4A4A4A",
            border: "1px solid rgba(248,131,121,0.3)"
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
          onClick: onNext,
          "data-ocid": "book.traveler_next_button",
          className: "px-8 py-3 rounded-xl font-semibold text-sm flex items-center gap-2",
          style: { background: "#F88379", color: "#1A1A1A" },
          children: [
            "Continue to Add-ons ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          ]
        }
      )
    ] })
  ] });
}
function Step3AddOns({
  selectedAddOns,
  trekkerCount,
  batchDays,
  onToggle,
  totalBase,
  onNext,
  onBack
}) {
  const perPersonIds = ["porter", "meal_upgrade", "private_tent", "insurance"];
  const addOnTotal = ADD_ONS.filter(
    (a) => selectedAddOns.includes(a.id)
  ).reduce(
    (sum, a) => sum + (a.perDay ? a.price * batchDays : a.price) * (perPersonIds.includes(a.id) ? trekkerCount : 1),
    0
  );
  const grandTotal = totalBase + addOnTotal;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-2", style: { color: "#1A1A1A" }, children: "Enhance Your Trek" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm", style: { color: "#4A4A4A" }, children: "Optional add-ons to make your experience extraordinary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 mb-8", children: ADD_ONS.map((addon) => {
      const Icon = addon.icon;
      const isSelected = selectedAddOns.includes(addon.id);
      const costPerUnit = addon.perDay ? addon.price * batchDays : addon.price;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          whileHover: { y: -1 },
          onClick: () => onToggle(addon.id),
          "data-ocid": `addon.toggle.${addon.id}`,
          className: "w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all duration-200",
          style: {
            background: isSelected ? "rgba(248,131,121,0.15)" : "rgba(255,255,255,0.9)",
            border: isSelected ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                style: {
                  background: isSelected ? "#F88379" : "rgba(248,131,121,0.2)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    size: 18,
                    style: { color: isSelected ? "#1A1A1A" : "#F88379" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-semibold text-sm",
                  style: { color: "#1A1A1A" },
                  children: addon.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5", style: { color: "#4A4A4A" }, children: addon.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-display text-base",
                  style: { color: "#D4A843" },
                  children: [
                    "₹",
                    costPerUnit.toLocaleString("en-IN")
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-6 h-6 rounded-md flex items-center justify-center",
                  style: {
                    background: isSelected ? "#F88379" : "rgba(248,131,121,0.2)"
                  },
                  children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, style: { color: "#1A1A1A" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4A4A4A", fontSize: 18 }, children: "+" })
                }
              )
            ] })
          ]
        },
        addon.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-4 rounded-xl mb-6",
        style: {
          background: "rgba(201,168,76,0.1)",
          border: "1px solid rgba(201,168,76,0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#4A4A4A" }, children: [
              "Trek cost (",
              trekkerCount,
              " person",
              trekkerCount > 1 ? "s" : "",
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#1A1A1A" }, children: [
              "₹",
              totalBase.toLocaleString("en-IN")
            ] })
          ] }),
          addOnTotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4A4A4A" }, children: "Add-ons total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#1A1A1A" }, children: [
              "₹",
              addOnTotal.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between items-center mt-3 pt-3 border-t",
              style: { borderColor: "rgba(201,168,76,0.3)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", style: { color: "#D4A843" }, children: "Total (before discount)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl", style: { color: "#D4A843" }, children: [
                  "₹",
                  grandTotal.toLocaleString("en-IN")
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold",
          style: {
            background: "rgba(248,131,121,0.15)",
            color: "#4A4A4A",
            border: "1px solid rgba(248,131,121,0.3)"
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
          onClick: onNext,
          "data-ocid": "book.addons_next_button",
          className: "px-8 py-3 rounded-xl font-semibold text-sm flex items-center gap-2",
          style: { background: "#F88379", color: "#1A1A1A" },
          children: [
            "Review & Pay ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          ]
        }
      )
    ] })
  ] });
}
function SuccessScreen({
  trek,
  batch,
  confetti
}) {
  const NEXT_STEPS = [
    "Upload your Aadhaar to your dashboard",
    "Receive trek briefing document via email",
    "Join the WhatsApp group for your batch",
    "Download the offline trail map",
    "Check packing list and begin preparation"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      className: "text-center py-10",
      "data-ocid": "book.success_state",
      children: [
        confetti && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none z-50 overflow-hidden", children: Array.from({ length: 30 }, (_, idx) => idx).map((petIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: {
              y: -20,
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 800),
              opacity: 1
            },
            animate: {
              y: (typeof window !== "undefined" ? window.innerHeight : 600) + 20,
              rotate: Math.random() * 720
            },
            transition: {
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 0.5
            },
            className: "absolute w-3 h-3 rounded-sm",
            style: {
              background: petIdx % 3 === 0 ? "#F88379" : petIdx % 3 === 1 ? "#1A1A1A" : "#D4A843"
            }
          },
          `petal-${petIdx + 1}`
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
            style: {
              background: "rgba(248,131,121,0.2)",
              border: "3px solid #F88379"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 40, style: { color: "#F88379" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mb-3", style: { color: "#1A1A1A" }, children: "Booking Confirmed!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg mb-2", style: { color: "#4A4A4A" }, children: [
          "You're going on ",
          trek.name,
          "! 🏔"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-8", style: { color: "#4A4A4A" }, children: [
          "Batch starts ",
          formatDate(batch.startDate),
          " · Guide: ",
          batch.guideName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl text-left max-w-md mx-auto mb-8",
            style: {
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(248,131,121,0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-4", style: { color: "#1A1A1A" }, children: "Next Steps" }),
              NEXT_STEPS.map((s, stepIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                    style: {
                      background: "rgba(248,131,121,0.2)",
                      border: "1px solid #F88379"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F88379", fontSize: 11 }, children: stepIdx + 1 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4A4A4A" }, children: s })
              ] }, s))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/dashboard",
              className: "px-6 py-3 rounded-xl text-sm font-semibold",
              style: { background: "#F88379", color: "#1A1A1A" },
              children: "Go to Dashboard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2",
              style: {
                background: "rgba(248,131,121,0.15)",
                color: "#4A4A4A",
                border: "1px solid rgba(248,131,121,0.3)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 }),
                " Share"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Step4ReviewPay({
  trek,
  batch,
  travelers,
  selectedAddOns,
  trekkerCount,
  batchDays,
  onBack,
  onGoToStep
}) {
  const [coupon, setCoupon] = reactExports.useState("");
  const [couponApplied, setCouponApplied] = reactExports.useState(false);
  const [payMode, setPayMode] = reactExports.useState(
    "full"
  );
  const [whatsapp, setWhatsapp] = reactExports.useState(true);
  const [gcal, setGcal] = reactExports.useState(false);
  const [paid, setPaid] = reactExports.useState(false);
  const [confetti, setConfetti] = reactExports.useState(false);
  const [payError, setPayError] = reactExports.useState(null);
  const [termsAccepted, setTermsAccepted] = reactExports.useState(false);
  const createBooking = useCreateBooking();
  const perPersonIds = ["porter", "meal_upgrade", "private_tent", "insurance"];
  const baseTotal = trek.basePrice * trekkerCount;
  const addOnTotal = ADD_ONS.filter(
    (a) => selectedAddOns.includes(a.id)
  ).reduce(
    (sum, a) => sum + (a.perDay ? a.price * batchDays : a.price) * (perPersonIds.includes(a.id) ? trekkerCount : 1),
    0
  );
  const subtotal = baseTotal + addOnTotal;
  const discount = couponApplied ? Math.round(subtotal * 0.05) : 0;
  const fullDiscount = Math.round(subtotal * 0.05);
  const totalFull = subtotal - fullDiscount;
  const totalNormal = subtotal - discount;
  const payAmounts = reactExports.useMemo(
    () => ({
      full: totalFull,
      partial: 2e3 * trekkerCount,
      emi3: Math.ceil(totalNormal / 3),
      emi6: Math.ceil(totalNormal / 6)
    }),
    [totalFull, trekkerCount, totalNormal]
  );
  const handlePay = reactExports.useCallback(async () => {
    setPayError(null);
    try {
      const backendAddOns = ADD_ONS.filter(
        (a) => selectedAddOns.includes(a.id)
      ).map((a) => ({
        name: a.name,
        pricePerPerson: BigInt(a.perDay ? a.price * batchDays : a.price)
      }));
      const backendTravelers = travelers.map((t) => ({
        name: t.name || "Unnamed",
        age: BigInt(Number(t.age) || 18),
        gender: t.gender,
        emergencyContact: t.emergencyContact,
        medicalConditions: t.medicalConditions,
        tshirtSize: t.tshirtSize,
        mealPreference: t.mealPreference === "veg" ? "Veg" : "NonVeg"
      }));
      const totalAmount = BigInt(Math.round(totalFull));
      const result = await createBooking.mutateAsync({
        trekSlug: trek.slug,
        batchId: BigInt(batch.id),
        travelers: backendTravelers,
        addOns: backendAddOns,
        totalAmount
      });
      if (result && "checkoutUrl" in result && typeof result.checkoutUrl === "string") {
        window.location.href = result.checkoutUrl;
      } else {
        setPaid(true);
        setConfetti(true);
      }
    } catch (err) {
      setPayError(
        err instanceof Error ? err.message : "Payment failed. Please try again."
      );
    }
  }, [
    createBooking,
    batch,
    batchDays,
    travelers,
    selectedAddOns,
    totalFull,
    trek.slug
  ]);
  if (paid)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessScreen, { trek, batch, confetti });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-2", style: { color: "#1A1A1A" }, children: "Review & Pay" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm", style: { color: "#4A4A4A" }, children: "Almost there! Review your booking before payment." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl mb-5",
        style: {
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", style: { color: "#1A1A1A" }, children: "Booking Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onGoToStep(1),
                className: "text-xs underline",
                style: { color: "#F88379" },
                children: "Edit batch"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#4A4A4A" }, children: "Trek" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#1A1A1A", fontWeight: 600 }, children: trek.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#4A4A4A" }, children: "Batch Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#1A1A1A" }, children: formatDate(batch.startDate) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#4A4A4A" }, children: "Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#1A1A1A" }, children: batch.guideName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#4A4A4A" }, children: "Trekkers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#1A1A1A" }, children: trekkerCount })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl mb-5",
        style: {
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", style: { color: "#1A1A1A" }, children: "Travelers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onGoToStep(2),
                className: "text-xs underline",
                style: { color: "#F88379" },
                children: "Edit"
              }
            )
          ] }),
          travelers.map((t, i) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 py-2 text-sm border-b last:border-0",
                style: { borderColor: "rgba(248,131,121,0.15)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-6 h-6 rounded-full flex items-center justify-center text-xs",
                      style: { background: "#F88379", color: "#1A1A1A" },
                      children: i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A1A1A" }, children: t.name || `Traveler ${i + 1}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#4A4A4A" }, children: [
                    "Age ",
                    t.age
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4A4A4A" }, children: t.mealPreference === "veg" ? "🥗 Veg" : "🍗 Non-veg" })
                ]
              },
              `ts-${i}-${((_a = travelers[i]) == null ? void 0 : _a.name) || i}`
            );
          })
        ]
      }
    ),
    selectedAddOns.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl mb-5",
        style: {
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", style: { color: "#1A1A1A" }, children: "Add-ons" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onGoToStep(3),
                className: "text-xs underline",
                style: { color: "#F88379" },
                children: "Edit"
              }
            )
          ] }),
          ADD_ONS.filter((a) => selectedAddOns.includes(a.id)).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between text-sm py-1.5",
              style: { color: "#4A4A4A" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#1A1A1A" }, children: [
                  "₹",
                  (a.perDay ? a.price * batchDays : a.price).toLocaleString(
                    "en-IN"
                  )
                ] })
              ]
            },
            a.id
          ))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "flex-1 px-3 py-2 rounded-lg text-sm border outline-none",
            style: {
              borderColor: "rgba(248,131,121,0.4)",
              color: "#1A1A1A",
              background: "rgba(255,255,255,0.8)"
            },
            value: coupon,
            onChange: (e) => setCoupon(e.target.value),
            placeholder: "Have a coupon code?",
            "data-ocid": "book.coupon_input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              if (coupon.toLowerCase() === "shail10") setCouponApplied(true);
            },
            className: "px-4 py-2 rounded-lg text-sm font-semibold",
            style: {
              background: "rgba(248,131,121,0.3)",
              color: "#1A1A1A",
              border: "1px solid rgba(248,131,121,0.4)"
            },
            children: "Apply"
          }
        )
      ] }),
      couponApplied && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", style: { color: "#4ade80" }, children: "✓ Coupon SHAIL10 applied — 5% off!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-3", style: { color: "#1A1A1A" }, children: "Choose Payment Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
        {
          id: "full",
          label: "Pay Full",
          sub: `Save ₹${fullDiscount.toLocaleString("en-IN")} (5%)`,
          amount: totalFull
        },
        {
          id: "partial",
          label: "Pay ₹2,000 Now",
          sub: "Balance due 7 days before trek",
          amount: 2e3 * trekkerCount
        },
        {
          id: "emi3",
          label: "EMI — 3 Months",
          sub: "via Razorpay",
          amount: payAmounts.emi3
        },
        {
          id: "emi6",
          label: "EMI — 6 Months",
          sub: "via Razorpay",
          amount: payAmounts.emi6
        }
      ].map((pm) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setPayMode(pm.id),
          "data-ocid": `book.payment_mode.${pm.id}`,
          className: "p-4 rounded-xl text-left transition-all duration-200",
          style: {
            background: payMode === pm.id ? "rgba(248,131,121,0.2)" : "rgba(255,255,255,0.9)",
            border: payMode === pm.id ? "2px solid #F88379" : "2px solid rgba(248,131,121,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-semibold text-sm mb-0.5",
                style: { color: "#1A1A1A" },
                children: pm.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: pm.sub }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "font-display text-base",
                style: { color: "#D4A843" },
                children: [
                  "₹",
                  pm.amount.toLocaleString("en-IN")
                ]
              }
            )
          ]
        },
        pm.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: termsAccepted,
            onChange: (e) => setTermsAccepted(e.target.checked),
            className: "w-4 h-4 accent-[#F88379]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#4A4A4A" }, children: "I agree to the Terms & Conditions and Cancellation Policy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: whatsapp,
            onChange: (e) => setWhatsapp(e.target.checked),
            className: "w-4 h-4 accent-[#F88379]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#4A4A4A" }, children: "📱 Send booking confirmation on WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: gcal,
            onChange: (e) => setGcal(e.target.checked),
            className: "w-4 h-4 accent-[#F88379]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#4A4A4A" }, children: "📅 Add trek dates to Google Calendar" })
      ] })
    ] }),
    payError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mb-4 p-3 rounded-lg text-sm",
        style: {
          background: "rgba(248,131,121,0.15)",
          color: "#F88379",
          border: "1px solid rgba(248,131,121,0.3)"
        },
        children: payError
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold",
          style: {
            background: "rgba(248,131,121,0.15)",
            color: "#4A4A4A",
            border: "1px solid rgba(248,131,121,0.3)"
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
          onClick: handlePay,
          disabled: !termsAccepted || createBooking.isPending,
          "data-ocid": "book.pay_button",
          className: "px-10 py-3 rounded-xl font-semibold text-base flex items-center gap-2",
          style: {
            background: termsAccepted && !createBooking.isPending ? "#F88379" : "rgba(248,131,121,0.3)",
            color: "#1A1A1A",
            boxShadow: termsAccepted && !createBooking.isPending ? "0 4px 20px rgba(248,131,121,0.4)" : "none",
            cursor: termsAccepted && !createBooking.isPending ? "pointer" : "not-allowed"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 18 }),
            createBooking.isPending ? "Redirecting to Stripe..." : `Pay ₹${payAmounts[payMode].toLocaleString("en-IN")}`
          ]
        }
      )
    ] })
  ] });
}
function BookPage() {
  const { slug } = useParams({ from: "/book/$slug" });
  const trek = TREKS.find((t) => t.slug === slug) ?? TREKS[0];
  const { data: remoteBatches } = useBatchesByTrek(slug || "");
  const batches = remoteBatches && remoteBatches.length > 0 ? remoteBatches.map((b) => ({
    id: String(b.id),
    trekSlug: b.trekSlug,
    startDate: b.startDate,
    endDate: b.endDate,
    seatsTotal: Number(b.totalSeats),
    seatsBooked: Number(b.bookedSeats),
    price: Number(b.pricePerPerson),
    guideName: "Guide",
    guideId: b.guideId,
    status: mapBatchStatus(b.status)
  })) : FALLBACK_BATCHES.map((b) => ({
    ...b,
    trekSlug: slug || "",
    price: trek.basePrice
  }));
  const batchDays = trek.durationDays;
  const [step, setStep] = reactExports.useState(1);
  const [selectedBatch, setSelectedBatch] = reactExports.useState(null);
  const [trekkerCount, setTrekkerCount] = reactExports.useState(1);
  const [travelers, setTravelers] = reactExports.useState([
    defaultTraveler()
  ]);
  const [lead, setLead] = reactExports.useState({
    phone: "",
    email: "",
    city: "",
    source: ""
  });
  const [selectedAddOns, setSelectedAddOns] = reactExports.useState([]);
  const handleCountChange = (n) => {
    setTrekkerCount(n);
    setTravelers(
      (prev) => Array.from({ length: n }, (_, i) => prev[i] ?? defaultTraveler())
    );
  };
  const handleTravelerChange = (idx, field, val) => {
    setTravelers(
      (prev) => prev.map((t, i) => i === idx ? { ...t, [field]: val } : t)
    );
  };
  const handleLeadChange = (field, val) => {
    setLead((prev) => ({ ...prev, [field]: val }));
  };
  const toggleAddOn = (id) => {
    setSelectedAddOns(
      (prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };
  const baseTotal = trek.basePrice * trekkerCount;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#E6D8C4" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: trek.heroImage,
          alt: trek.name,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.95))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: "Booking for" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", style: { color: "#1A1A1A" }, children: trek.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-0.5", style: { color: "#4A4A4A" }, children: [
          trek.durationDays,
          " Days · ",
          trek.difficulty,
          " · ₹",
          trek.basePrice.toLocaleString("en-IN"),
          " per person"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { current: step }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -30 },
          transition: { duration: 0.25 },
          children: [
            step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Step1BatchSelector,
              {
                trek,
                batches,
                selected: selectedBatch,
                onSelect: setSelectedBatch,
                onNext: () => setStep(2)
              }
            ),
            step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Step2TravelerDetails,
              {
                trek,
                travelers,
                lead,
                trekkerCount,
                onTravelerChange: handleTravelerChange,
                onLeadChange: handleLeadChange,
                onCountChange: handleCountChange,
                onNext: () => setStep(3),
                onBack: () => setStep(1)
              }
            ),
            step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Step3AddOns,
              {
                selectedAddOns,
                trekkerCount,
                batchDays,
                onToggle: toggleAddOn,
                totalBase: baseTotal,
                onNext: () => setStep(4),
                onBack: () => setStep(2)
              }
            ),
            step === 4 && selectedBatch && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Step4ReviewPay,
              {
                trek,
                batch: selectedBatch,
                travelers,
                selectedAddOns,
                trekkerCount,
                batchDays,
                onBack: () => setStep(3),
                onGoToStep: setStep
              }
            ),
            step === 4 && !selectedBatch && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#4A4A4A" }, children: "Please go back and select a batch first." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setStep(1),
                  className: "mt-4 px-6 py-2 rounded-xl text-sm",
                  style: { background: "#F88379", color: "#1A1A1A" },
                  children: "Select Batch"
                }
              )
            ] })
          ]
        },
        step
      ) })
    ] })
  ] });
}
export {
  BookPage as default
};
