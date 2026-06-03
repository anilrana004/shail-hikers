import { c as createLucideIcon, N as useParams, j as reactExports, t as jsxRuntimeExports, A as AnimatePresence, w as motion, V as User, W as Phone, Y as Mail, B as Mountain, D as MapPin, E as Shield } from "./index-CmnsDpTB.js";
import { T as TREKS } from "./treks-CFuBXqZV.js";
import { C as Calendar } from "./calendar-BkKDOzcO.js";
import { P as Package, G as Gift } from "./package-DFoYRGdV.js";
import { C as Check } from "./check-CoyiWauP.js";
import { C as ChevronRight } from "./chevron-right-DsTmUOJa.js";
import { C as ChevronLeft } from "./chevron-left-DUObJq25.js";
import { T as Tent } from "./tent-Cx-tiAz_.js";
import { S as Star } from "./star-DUUEjHRt.js";
import { C as Camera } from "./camera-Zxav06xO.js";
import { S as Share2 } from "./share-2-DEsXrJef.js";
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
const MOCK_BATCHES = [
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
    color: "#2D5016",
    bg: "rgba(45,80,22,0.2)",
    dot: "#4ade80"
  },
  filling_fast: {
    label: "Limited",
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.15)",
    dot: "#C9A84C"
  },
  full: {
    label: "Full",
    color: "#B5525E",
    bg: "rgba(181,82,94,0.15)",
    dot: "#B5525E"
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
            background: current >= step.num ? "#B5525E" : "rgba(181,82,94,0.15)",
            color: current >= step.num ? "#FAD4D8" : "#E8A0AA",
            border: current === step.num ? "2px solid #E8A0AA" : "2px solid transparent",
            boxShadow: current === step.num ? "0 0 16px rgba(181,82,94,0.4)" : "none"
          },
          children: current > step.num ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16 }) : step.num
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-xs hidden sm:block",
          style: {
            color: current === step.num ? "#FAD4D8" : "#E8A0AA",
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
          background: current > step.num ? "#B5525E" : "rgba(181,82,94,0.25)"
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-2", style: { color: "#FAD4D8" }, children: "Select Your Batch" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-8 text-sm", style: { color: "#E8A0AA" }, children: [
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
            background: isSelected ? "rgba(181,82,94,0.15)" : "rgba(26,14,16,0.8)",
            border: isSelected ? "2px solid #B5525E" : "2px solid rgba(181,82,94,0.25)",
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
                      style: { color: "#FAD4D8" },
                      children: formatDate(b.startDate)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", style: { color: "#E8A0AA" }, children: [
                    "→ ",
                    formatDate(b.endDate)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#E8A0AA" }, children: [
                    "🧭 Guide:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#FAD4D8" }, children: b.guideName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#E8A0AA" }, children: [
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
                    style: { color: "#C9A84C" },
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
                style: { borderColor: "rgba(181,82,94,0.3)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#E8A0AA" }, children: [
                    "🌤️ Forecast:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#FAD4D8" }, children: "Clear skies, -8°C nights" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#E8A0AA" }, children: [
                    "👫 Group:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#FAD4D8" }, children: "Mix of 4M+3F, avg age 27" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#E8A0AA" }, children: [
                    "📊 Experience:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#FAD4D8" }, children: "70% intermediate" })
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
          background: selected ? "#B5525E" : "rgba(181,82,94,0.3)",
          color: selected ? "#FAD4D8" : "rgba(250,212,216,0.4)",
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
    borderColor: "rgba(181,82,94,0.4)",
    color: "#FAD4D8",
    background: "rgba(26,14,16,0.6)"
  };
  const labelStyle = { color: "#E8A0AA" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-5 rounded-xl mb-4",
      style: {
        background: "rgba(26,14,16,0.7)",
        border: "1px solid rgba(181,82,94,0.25)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h3",
          {
            className: "font-display text-lg mb-4 flex items-center gap-2",
            style: { color: "#FAD4D8" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
                  style: { background: "#B5525E", color: "#FAD4D8" },
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
                className: "w-4 h-4 accent-[#B5525E]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `first_trek_${idx}`,
                className: "text-sm",
                style: { color: "#E8A0AA" },
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
    borderColor: "rgba(181,82,94,0.4)",
    color: "#FAD4D8",
    background: "rgba(26,14,16,0.6)"
  };
  const inputClass = "w-full px-3 py-2 rounded-lg text-sm bg-transparent border outline-none";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-2", style: { color: "#FAD4D8" }, children: "Traveler Details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm", style: { color: "#E8A0AA" }, children: "Tell us who's going on this incredible journey" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mb-6 p-4 rounded-xl",
        style: {
          background: "rgba(26,14,16,0.7)",
          border: "1px solid rgba(181,82,94,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-4", style: { color: "#FAD4D8" }, children: "Lead Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "lead_phone",
                  className: "block text-xs mb-1.5",
                  style: { color: "#E8A0AA" },
                  children: "Phone *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, style: { color: "#B5525E" } }),
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
                  style: { color: "#E8A0AA" },
                  children: "Email *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, style: { color: "#B5525E" } }),
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
                  style: { color: "#E8A0AA" },
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
                  style: { color: "#E8A0AA" },
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#E8A0AA" }, children: "Number of trekkers:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [1, 2, 3, 4, 5, 6].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onCountChange(n),
          className: "w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-200",
          style: {
            background: trekkerCount === n ? "#B5525E" : "rgba(181,82,94,0.15)",
            color: trekkerCount === n ? "#FAD4D8" : "#E8A0AA",
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
            background: "rgba(181,82,94,0.15)",
            color: "#E8A0AA",
            border: "1px solid rgba(181,82,94,0.3)"
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
          style: { background: "#B5525E", color: "#FAD4D8" },
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-2", style: { color: "#FAD4D8" }, children: "Enhance Your Trek" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm", style: { color: "#E8A0AA" }, children: "Optional add-ons to make your experience extraordinary" }),
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
            background: isSelected ? "rgba(181,82,94,0.15)" : "rgba(26,14,16,0.8)",
            border: isSelected ? "2px solid #B5525E" : "2px solid rgba(181,82,94,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                style: {
                  background: isSelected ? "#B5525E" : "rgba(181,82,94,0.2)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    size: 18,
                    style: { color: isSelected ? "#FAD4D8" : "#B5525E" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-semibold text-sm",
                  style: { color: "#FAD4D8" },
                  children: addon.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5", style: { color: "#E8A0AA" }, children: addon.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-display text-base",
                  style: { color: "#C9A84C" },
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
                    background: isSelected ? "#B5525E" : "rgba(181,82,94,0.2)"
                  },
                  children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, style: { color: "#FAD4D8" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA", fontSize: 18 }, children: "+" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#E8A0AA" }, children: [
              "Trek cost (",
              trekkerCount,
              " person",
              trekkerCount > 1 ? "s" : "",
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#FAD4D8" }, children: [
              "₹",
              totalBase.toLocaleString("en-IN")
            ] })
          ] }),
          addOnTotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: "Add-ons total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#FAD4D8" }, children: [
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", style: { color: "#C9A84C" }, children: "Total (before discount)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl", style: { color: "#C9A84C" }, children: [
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
            background: "rgba(181,82,94,0.15)",
            color: "#E8A0AA",
            border: "1px solid rgba(181,82,94,0.3)"
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
          style: { background: "#B5525E", color: "#FAD4D8" },
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
              background: petIdx % 3 === 0 ? "#B5525E" : petIdx % 3 === 1 ? "#FAD4D8" : "#C9A84C"
            }
          },
          `petal-${petIdx + 1}`
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
            style: {
              background: "rgba(181,82,94,0.2)",
              border: "3px solid #B5525E"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 40, style: { color: "#B5525E" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mb-3", style: { color: "#FAD4D8" }, children: "Booking Confirmed!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg mb-2", style: { color: "#E8A0AA" }, children: [
          "You're going on ",
          trek.name,
          "! 🏔"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-8", style: { color: "#E8A0AA" }, children: [
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
              background: "rgba(26,14,16,0.8)",
              border: "1px solid rgba(181,82,94,0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-4", style: { color: "#FAD4D8" }, children: "Next Steps" }),
              NEXT_STEPS.map((s, stepIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                    style: {
                      background: "rgba(181,82,94,0.2)",
                      border: "1px solid #B5525E"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#B5525E", fontSize: 11 }, children: stepIdx + 1 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: s })
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
              style: { background: "#B5525E", color: "#FAD4D8" },
              children: "Go to Dashboard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2",
              style: {
                background: "rgba(181,82,94,0.15)",
                color: "#E8A0AA",
                border: "1px solid rgba(181,82,94,0.3)"
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
  const handlePay = reactExports.useCallback(() => {
    var _a, _b;
    const w = window;
    if (w.Razorpay) {
      const rp = new w.Razorpay({
        key: "rzp_test_placeholder",
        amount: payAmounts[payMode] * 100,
        currency: "INR",
        name: "Shail Hikers",
        description: `${trek.name} — ${formatDate(batch.startDate)}`,
        prefill: {
          contact: ((_a = travelers[0]) == null ? void 0 : _a.emergencyContact) ?? "",
          name: ((_b = travelers[0]) == null ? void 0 : _b.name) ?? ""
        },
        theme: { color: "#B5525E" },
        handler: () => {
          setPaid(true);
          setConfetti(true);
        }
      });
      rp.open();
    } else {
      setPaid(true);
      setConfetti(true);
    }
  }, [payMode, payAmounts, trek, batch, travelers]);
  if (paid)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessScreen, { trek, batch, confetti });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-2", style: { color: "#FAD4D8" }, children: "Review & Pay" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm", style: { color: "#E8A0AA" }, children: "Almost there! Review your booking before payment." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl mb-5",
        style: {
          background: "rgba(26,14,16,0.8)",
          border: "1px solid rgba(181,82,94,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", style: { color: "#FAD4D8" }, children: "Booking Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onGoToStep(1),
                className: "text-xs underline",
                style: { color: "#B5525E" },
                children: "Edit batch"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#E8A0AA" }, children: "Trek" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#FAD4D8", fontWeight: 600 }, children: trek.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#E8A0AA" }, children: "Batch Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#FAD4D8" }, children: formatDate(batch.startDate) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#E8A0AA" }, children: "Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#FAD4D8" }, children: batch.guideName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#E8A0AA" }, children: "Trekkers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#FAD4D8" }, children: trekkerCount })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl mb-5",
        style: {
          background: "rgba(26,14,16,0.8)",
          border: "1px solid rgba(181,82,94,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", style: { color: "#FAD4D8" }, children: "Travelers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onGoToStep(2),
                className: "text-xs underline",
                style: { color: "#B5525E" },
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
                style: { borderColor: "rgba(181,82,94,0.15)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-6 h-6 rounded-full flex items-center justify-center text-xs",
                      style: { background: "#B5525E", color: "#FAD4D8" },
                      children: i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#FAD4D8" }, children: t.name || `Traveler ${i + 1}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#E8A0AA" }, children: [
                    "Age ",
                    t.age
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: t.mealPreference === "veg" ? "🥗 Veg" : "🍗 Non-veg" })
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
          background: "rgba(26,14,16,0.8)",
          border: "1px solid rgba(181,82,94,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", style: { color: "#FAD4D8" }, children: "Add-ons" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onGoToStep(3),
                className: "text-xs underline",
                style: { color: "#B5525E" },
                children: "Edit"
              }
            )
          ] }),
          ADD_ONS.filter((a) => selectedAddOns.includes(a.id)).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between text-sm py-1.5",
              style: { color: "#E8A0AA" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#FAD4D8" }, children: [
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
              borderColor: "rgba(181,82,94,0.4)",
              color: "#FAD4D8",
              background: "rgba(26,14,16,0.6)"
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
              background: "rgba(181,82,94,0.3)",
              color: "#FAD4D8",
              border: "1px solid rgba(181,82,94,0.4)"
            },
            children: "Apply"
          }
        )
      ] }),
      couponApplied && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", style: { color: "#4ade80" }, children: "✓ Coupon SHAIL10 applied — 5% off!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-3", style: { color: "#FAD4D8" }, children: "Choose Payment Plan" }),
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
            background: payMode === pm.id ? "rgba(181,82,94,0.2)" : "rgba(26,14,16,0.8)",
            border: payMode === pm.id ? "2px solid #B5525E" : "2px solid rgba(181,82,94,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-semibold text-sm mb-0.5",
                style: { color: "#FAD4D8" },
                children: pm.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#E8A0AA" }, children: pm.sub }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "font-display text-base",
                style: { color: "#C9A84C" },
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
            checked: whatsapp,
            onChange: (e) => setWhatsapp(e.target.checked),
            className: "w-4 h-4 accent-[#B5525E]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#E8A0AA" }, children: "📱 Send booking confirmation on WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: gcal,
            onChange: (e) => setGcal(e.target.checked),
            className: "w-4 h-4 accent-[#B5525E]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#E8A0AA" }, children: "📅 Add trek dates to Google Calendar" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold",
          style: {
            background: "rgba(181,82,94,0.15)",
            color: "#E8A0AA",
            border: "1px solid rgba(181,82,94,0.3)"
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
          "data-ocid": "book.pay_button",
          className: "px-10 py-3 rounded-xl font-semibold text-base flex items-center gap-2",
          style: {
            background: "#B5525E",
            color: "#FAD4D8",
            boxShadow: "0 4px 20px rgba(181,82,94,0.4)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 18 }),
            " Pay ₹",
            payAmounts[payMode].toLocaleString("en-IN")
          ]
        }
      )
    ] })
  ] });
}
function BookPage() {
  const { slug } = useParams({ from: "/book/$slug" });
  const trek = TREKS.find((t) => t.slug === slug) ?? TREKS[0];
  const batches = MOCK_BATCHES.map((b) => ({
    ...b,
    trekSlug: slug,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#1A0E10" }, children: [
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
            background: "linear-gradient(to bottom, rgba(26,14,16,0.4), rgba(26,14,16,0.9))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-1", style: { color: "#E8A0AA" }, children: "Booking for" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", style: { color: "#FAD4D8" }, children: trek.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-0.5", style: { color: "#E8A0AA" }, children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA" }, children: "Please go back and select a batch first." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setStep(1),
                  className: "mt-4 px-6 py-2 rounded-xl text-sm",
                  style: { background: "#B5525E", color: "#FAD4D8" },
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
