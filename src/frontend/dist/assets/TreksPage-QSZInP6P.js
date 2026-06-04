import { c as createLucideIcon, j as reactExports, t as jsxRuntimeExports, X, L as Link } from "./index-CMVflWSo.js";
import { u as useComposedRefs, c as cn, a as createSlot, B as Button } from "./button-CW19pU3d.js";
import { u as useLayoutEffect2, P as Presence, a as Primitive$1, b as useControllableState, c as composeEventHandlers, d as createContextScope, R as Root$1, T as Trigger, C as Content, e as Close, f as Title, g as Portal, O as Overlay } from "./index-BVVnDPjd.js";
import { C as Check } from "./check-Cu3DywVU.js";
import { T as TREKS, D as DIFFICULTY_COLORS } from "./treks-CGIURMuU.js";
import { H as Heart } from "./heart-D1MW-4rr.js";
import { S as Star } from "./star-BP2yrVNJ.js";
import "./clsx-DgYk2OaC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
function usePrevious(value) {
  const ref = reactExports.useRef({ value, previous: value });
  return reactExports.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
function useSize(element) {
  const [size, setSize] = reactExports.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = reactExports.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control == null ? void 0 : control.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive$1.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = reactExports.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
const QUICK_FILTERS = [
  { label: "Beginner Friendly", key: "beginner" },
  { label: "Snow Trek", key: "snow" },
  { label: "High Altitude", key: "highAlt" },
  { label: "Camping", key: "camping" },
  { label: "Winter", key: "winter" },
  { label: "Monsoon", key: "monsoon" },
  { label: "Family", key: "family" },
  { label: "Weekend Trek", key: "weekend" },
  { label: "Under ₹5,000", key: "budget" },
  { label: "UNESCO Site", key: "unesco" }
];
const SORT_OPTIONS = [
  { label: "Best Rated", value: "rating" },
  { label: "Lowest Price", value: "price_asc" },
  { label: "Highest Altitude", value: "altitude" },
  { label: "Duration (Short to Long)", value: "duration" }
];
const DIFFICULTIES = ["Easy", "Moderate", "Difficult", "Extreme"];
const SEASONS = [
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
const GROUP_TYPES = ["Solo", "Couple", "Group", "Family", "Corporate"];
function applyQuickFilter(trek, key) {
  switch (key) {
    case "beginner":
      return trek.difficulty === "Easy";
    case "snow":
      return trek.bestTime.toLowerCase().includes("jan") || trek.bestTime.toLowerCase().includes("dec") || trek.bestTime.toLowerCase().includes("feb");
    case "highAlt":
      return trek.maxAltitude >= 14e3;
    case "camping":
      return true;
    case "winter":
      return trek.bestTime.toLowerCase().includes("dec") || trek.bestTime.toLowerCase().includes("jan");
    case "monsoon":
      return trek.bestTime.toLowerCase().includes("jul") || trek.bestTime.toLowerCase().includes("aug");
    case "family":
      return trek.difficulty === "Easy" || trek.difficulty === "Moderate";
    case "weekend":
      return trek.durationDays <= 3;
    case "budget":
      return trek.basePrice < 5e3;
    case "unesco":
      return trek.slug === "valley-of-flowers";
    default:
      return true;
  }
}
function TrekCard({ trek }) {
  const [wishlisted, setWishlisted] = reactExports.useState(false);
  const diffColor = DIFFICULTY_COLORS[trek.difficulty] ?? "#F88379";
  const seatsLow = (trek.seatsAvailable ?? 10) <= 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `treks.item.${trek.id}`,
      className: "relative rounded-xl overflow-hidden flex flex-col",
      style: {
        background: "#E6D8C4",
        border: "1px solid rgba(232,160,170,0.15)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: trek.heroImage,
              alt: trek.name,
              className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `treks.wishlist.${trek.id}`,
              "aria-label": wishlisted ? "Remove from wishlist" : "Add to wishlist",
              onClick: () => setWishlisted((w) => !w),
              className: "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center",
              style: { background: "rgba(255,255,255,0.85)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Heart,
                {
                  size: 16,
                  fill: wishlisted ? "#F88379" : "none",
                  stroke: wishlisted ? "#F88379" : "#1A1A1A"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex gap-1 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-semibold px-2 py-0.5 rounded-full",
                style: { background: diffColor, color: "#1A1A1A" },
                children: trek.difficulty
              }
            ),
            trek.slug === "valley-of-flowers" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-semibold px-2 py-0.5 rounded-full",
                style: { background: "#D4A843", color: "#E6D8C4" },
                children: "UNESCO"
              }
            )
          ] }),
          seatsLow && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute bottom-3 left-3 text-xs px-2 py-0.5 rounded-full font-medium",
              style: { background: "#F88379", color: "#1A1A1A" },
              children: [
                "Only ",
                trek.seatsAvailable,
                " seats left!"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-4 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-lg leading-tight",
              style: { fontFamily: "var(--font-display)", color: "#1A1A1A" },
              children: trek.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs line-clamp-2", style: { color: "#4A4A4A" }, children: trek.shortDescription }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap gap-x-4 gap-y-1 text-xs mt-1",
              style: { color: "#4A4A4A" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "⏱ ",
                  trek.durationDays,
                  "D/",
                  trek.durationNights,
                  "N"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "📍 ",
                  trek.maxAltitude.toLocaleString(),
                  " ft"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "📅 ",
                  trek.bestTime
                ] })
              ]
            }
          ),
          trek.rating && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1 text-xs",
              style: { color: "#D4A843" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, fill: "#D4A843" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: trek.rating }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#4A4A4A" }, children: [
                  "(",
                  trek.reviewCount,
                  " reviews)"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between mt-auto pt-2",
              style: { borderTop: "1px solid rgba(232,160,170,0.1)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", style: { color: "#4A4A4A" }, children: [
                    "From",
                    " "
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-base font-bold",
                      style: { color: "#D4A843", fontFamily: "var(--font-display)" },
                      children: [
                        "₹",
                        trek.basePrice.toLocaleString()
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book/$slug", params: { slug: trek.slug }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    "data-ocid": `treks.book_button.${trek.id}`,
                    className: "text-xs px-3",
                    style: {
                      background: "#F88379",
                      color: "#1A1A1A",
                      border: "none"
                    },
                    children: "Book Now"
                  }
                ) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function FilterPanel({
  difficulties,
  setDifficulties,
  maxDuration,
  setMaxDuration,
  maxAlt,
  setMaxAlt,
  season,
  setSeason,
  maxBudget,
  setMaxBudget,
  groupType,
  setGroupType
}) {
  function toggleDiff(d) {
    setDifficulties(
      difficulties.includes(d) ? difficulties.filter((x) => x !== d) : [...difficulties, d]
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-sm", style: { color: "#1A1A1A" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", style: { color: "#4A4A4A" }, children: "Difficulty" }),
      DIFFICULTIES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            id: `diff-${d}`,
            checked: difficulties.includes(d),
            onCheckedChange: () => toggleDiff(d),
            "data-ocid": `treks.filter.diff.${d.toLowerCase()}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `diff-${d}`, style: { color: "#1A1A1A" }, children: d })
      ] }, d))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold mb-2", style: { color: "#4A4A4A" }, children: [
        "Max Duration: ",
        maxDuration,
        " days"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: 2,
          max: 12,
          value: maxDuration,
          onChange: (e) => setMaxDuration(Number(e.target.value)),
          className: "w-full accent-rose-600",
          "data-ocid": "treks.filter.duration"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex justify-between text-xs",
          style: { color: "#4A4A4A" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2 days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "12 days" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold mb-2", style: { color: "#4A4A4A" }, children: [
        "Max Altitude: ",
        maxAlt.toLocaleString(),
        " ft"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: 9e3,
          max: 18e3,
          step: 500,
          value: maxAlt,
          onChange: (e) => setMaxAlt(Number(e.target.value)),
          className: "w-full accent-rose-600",
          "data-ocid": "treks.filter.altitude"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex justify-between text-xs",
          style: { color: "#4A4A4A" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9,000 ft" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "18,000 ft" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold mb-2", style: { color: "#4A4A4A" }, children: [
        "Max Budget: ₹",
        maxBudget.toLocaleString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: 2e3,
          max: 2e4,
          step: 500,
          value: maxBudget,
          onChange: (e) => setMaxBudget(Number(e.target.value)),
          className: "w-full accent-rose-600",
          "data-ocid": "treks.filter.budget"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex justify-between text-xs",
          style: { color: "#4A4A4A" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹2,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹20,000+" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", style: { color: "#4A4A4A" }, children: "Best Season" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: SEASONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSeason(season === s ? "" : s),
          className: "text-xs px-2 py-1 rounded-full border transition-colors",
          style: {
            borderColor: season === s ? "#F88379" : "rgba(232,160,170,0.3)",
            background: season === s ? "#F88379" : "transparent",
            color: "#1A1A1A"
          },
          children: s
        },
        s
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", style: { color: "#4A4A4A" }, children: "Group Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: GROUP_TYPES.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setGroupType(groupType === g ? "" : g),
          className: "text-xs px-2 py-1 rounded-full border transition-colors",
          style: {
            borderColor: groupType === g ? "#F88379" : "rgba(232,160,170,0.3)",
            background: groupType === g ? "#F88379" : "transparent",
            color: "#1A1A1A"
          },
          children: g
        },
        g
      )) })
    ] })
  ] });
}
function TreksPage() {
  const [difficulties, setDifficulties] = reactExports.useState([]);
  const [maxDuration, setMaxDuration] = reactExports.useState(12);
  const [maxAlt, setMaxAlt] = reactExports.useState(18e3);
  const [season, setSeason] = reactExports.useState("");
  const [maxBudget, setMaxBudget] = reactExports.useState(2e4);
  const [groupType, setGroupType] = reactExports.useState("");
  const [activeQuick, setActiveQuick] = reactExports.useState([]);
  const [sortBy, setSortBy] = reactExports.useState("rating");
  function toggleQuick(key) {
    setActiveQuick(
      (prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }
  const filtered = reactExports.useMemo(() => {
    let list = [...TREKS];
    if (difficulties.length > 0) {
      list = list.filter((t) => difficulties.includes(t.difficulty));
    }
    list = list.filter(
      (t) => t.durationDays <= maxDuration && t.maxAltitude <= maxAlt && t.basePrice <= maxBudget
    );
    if (season) {
      list = list.filter(
        (t) => t.bestTime.toLowerCase().includes(season.toLowerCase())
      );
    }
    for (const qk of activeQuick) {
      list = list.filter((t) => applyQuickFilter(t, qk));
    }
    switch (sortBy) {
      case "rating":
        list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case "price_asc":
        list.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "altitude":
        list.sort((a, b) => b.maxAltitude - a.maxAltitude);
        break;
      case "duration":
        list.sort((a, b) => a.durationDays - b.durationDays);
        break;
    }
    return list;
  }, [
    difficulties,
    maxDuration,
    maxAlt,
    season,
    maxBudget,
    activeQuick,
    sortBy
  ]);
  const activeFilterCount = difficulties.length + (maxDuration < 12 ? 1 : 0) + (maxAlt < 18e3 ? 1 : 0) + (maxBudget < 2e4 ? 1 : 0) + (season ? 1 : 0) + (groupType ? 1 : 0) + activeQuick.length;
  function clearAll() {
    setDifficulties([]);
    setMaxDuration(12);
    setMaxAlt(18e3);
    setSeason("");
    setMaxBudget(2e4);
    setGroupType("");
    setActiveQuick([]);
  }
  const filterProps = {
    difficulties,
    setDifficulties,
    maxDuration,
    setMaxDuration,
    maxAlt,
    setMaxAlt,
    season,
    setSeason,
    maxBudget,
    setMaxBudget,
    groupType,
    setGroupType
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "All Treks — Shail Hikers | Himalayan Trekking Uttarakhand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Explore 14 legendary Himalayan treks with Shail Hikers. Filter by difficulty, season, altitude, budget. Book your perfect trek today."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#FFFFFF" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "py-16 px-6 text-center",
          style: {
            background: "linear-gradient(180deg, #E6D8C4 0%, #FFFFFF 100%)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs tracking-widest uppercase mb-3",
                style: { color: "#4A4A4A" },
                children: "Uttarakhand's Finest"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "text-5xl md:text-7xl mb-4",
                style: {
                  fontFamily: "var(--font-display)",
                  color: "#1A1A1A",
                  letterSpacing: "-0.02em"
                },
                children: "ALL TREKS"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", style: { color: "#4A4A4A" }, children: "14 legendary trails · handpicked routes · expert guides" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "px-6 py-4 overflow-x-auto",
          style: {
            background: "#E6D8C4",
            borderBottom: "1px solid rgba(232,160,170,0.15)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 min-w-max mx-auto max-w-6xl", children: QUICK_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `treks.quickfilter.${f.key}`,
              onClick: () => toggleQuick(f.key),
              className: "text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors",
              style: {
                borderColor: activeQuick.includes(f.key) ? "#F88379" : "rgba(232,160,170,0.3)",
                background: activeQuick.includes(f.key) ? "#F88379" : "transparent",
                color: "#1A1A1A"
              },
              children: f.label
            },
            f.key
          )) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-6 py-8 flex gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "aside",
          {
            className: "hidden lg:block w-64 shrink-0 rounded-xl p-5 self-start sticky top-24",
            style: {
              background: "#E6D8C4",
              border: "1px solid rgba(232,160,170,0.15)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-semibold",
                    style: { color: "#1A1A1A", fontFamily: "var(--font-display)" },
                    children: "Filters"
                  }
                ),
                activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: clearAll,
                    className: "text-xs",
                    style: { color: "#4A4A4A" },
                    children: "Clear all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { ...filterProps })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "lg:hidden gap-2",
                    "data-ocid": "treks.filter_sheet_open",
                    style: {
                      borderColor: "rgba(232,160,170,0.3)",
                      color: "#1A1A1A",
                      background: "transparent"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 14 }),
                      "Filters",
                      " ",
                      activeFilterCount > 0 && `(${activeFilterCount})`
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  SheetContent,
                  {
                    side: "left",
                    className: "overflow-y-auto",
                    style: {
                      background: "#E6D8C4",
                      border: "none",
                      color: "#1A1A1A"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SheetTitle,
                        {
                          style: {
                            color: "#1A1A1A",
                            fontFamily: "var(--font-display)"
                          },
                          children: "Filter Treks"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { ...filterProps })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", style: { color: "#4A4A4A" }, children: [
                "Showing",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#1A1A1A" }, children: filtered.length }),
                " ",
                "treks"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              difficulties.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full",
                  style: {
                    background: "rgba(248,131,121,0.2)",
                    color: "#1A1A1A",
                    border: "1px solid #F88379"
                  },
                  children: [
                    d,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setDifficulties(difficulties.filter((x) => x !== d)),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
                      }
                    )
                  ]
                },
                d
              )),
              season && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full",
                  style: {
                    background: "rgba(248,131,121,0.2)",
                    color: "#1A1A1A",
                    border: "1px solid #F88379"
                  },
                  children: [
                    season,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSeason(""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 }) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: sortBy,
                onChange: (e) => setSortBy(e.target.value),
                "data-ocid": "treks.sort_select",
                className: "text-sm rounded-lg px-3 py-1.5 border",
                style: {
                  background: "#E6D8C4",
                  color: "#1A1A1A",
                  borderColor: "rgba(232,160,170,0.3)"
                },
                children: SORT_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value))
              }
            )
          ] }),
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "treks.empty_state",
              className: "py-20 text-center rounded-xl",
              style: {
                background: "#E6D8C4",
                border: "1px solid rgba(232,160,170,0.15)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "🏔" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-lg mb-2",
                    style: {
                      fontFamily: "var(--font-display)",
                      color: "#1A1A1A"
                    },
                    children: "No treks match your filters"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-5", style: { color: "#4A4A4A" }, children: "Try broadening your search criteria" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: clearAll,
                    "data-ocid": "treks.clear_filters_button",
                    style: { background: "#F88379", color: "#1A1A1A" },
                    children: "Clear All Filters"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5", children: filtered.map((trek) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/treks/$slug",
              params: { slug: trek.slug },
              className: "block",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek })
            },
            trek.id
          )) })
        ] })
      ] })
    ] })
  ] });
}
export {
  TreksPage as default
};
