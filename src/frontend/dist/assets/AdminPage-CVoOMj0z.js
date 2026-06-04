import { c as createLucideIcon, t as jsxRuntimeExports, X, H as o, j as reactExports, a2 as vt, K as useActor, a3 as useAuthStatus, E as Shield, a4 as LoaderCircle, U as Users, C as Clock, S as Search, a5 as GuideAvailability, D as MapPin, a6 as BatchStatus, Z as Mail, O as createActor } from "./index-BbOSvcvx.js";
import { S as Slot, c as cn, b as cva, B as Button } from "./button-B-yHfRNz.js";
import { R as Root, C as Content, e as Close, f as Title, g as Portal, O as Overlay } from "./index-BbCvCIGm.js";
import { C as Calendar } from "./calendar-DnEEdKPW.js";
import { T as TrendingUp } from "./trending-up-BrXGymgQ.js";
import { P as Plus } from "./plus-CubAfPpA.js";
import { S as Star } from "./star-CNBIqXZg.js";
import { A as Award } from "./award-CasNsgX9.js";
import { T as Trash2 } from "./trash-2-CFEvn_kr.js";
import { C as ChevronUp } from "./chevron-up-CY-lYNwU.js";
import "./clsx-DgYk2OaC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
];
const ListOrdered = createLucideIcon("list-ordered", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode);
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
var jt = (n) => {
  switch (n) {
    case "success":
      return ee;
    case "info":
      return ae;
    case "warning":
      return oe;
    case "error":
      return se;
    default:
      return null;
  }
}, te = Array(12).fill(0), Yt = ({ visible: n, className: e }) => o.createElement("div", { className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "), "data-visible": n }, o.createElement("div", { className: "sonner-spinner" }, te.map((t, a) => o.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), ee = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), oe = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), ae = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), se = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Ot = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, o.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), o.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var Ft = () => {
  let [n, e] = o.useState(document.hidden);
  return o.useEffect(() => {
    let t = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), n;
};
var bt = 1, yt = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    });
    this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    };
    this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    };
    this.create = (e) => {
      var S;
      let { message: t, ...a } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, f = this.toasts.find((g) => g.id === u), w = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((g) => g.id === u ? (this.publish({ ...g, ...e, id: u, title: t }), { ...g, ...e, id: u, dismissible: w, title: t }) : g) : this.addToast({ title: t, ...a, dismissible: w, id: u }), u;
    };
    this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: true })), e);
    this.message = (e, t) => this.create({ ...t, message: e });
    this.error = (e, t) => this.create({ ...t, message: e, type: "error" });
    this.success = (e, t) => this.create({ ...t, type: "success", message: e });
    this.info = (e, t) => this.create({ ...t, type: "info", message: e });
    this.warning = (e, t) => this.create({ ...t, type: "warning", message: e });
    this.loading = (e, t) => this.create({ ...t, type: "loading", message: e });
    this.promise = (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let u = e instanceof Promise ? e : e(), f = a !== void 0, w, S = u.then(async (i) => {
        if (w = ["resolve", i], o.isValidElement(i)) f = false, this.create({ id: a, type: "default", message: i });
        else if (ie(i) && !i.ok) {
          f = false;
          let T = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
          this.create({ id: a, type: "error", message: T, description: F });
        } else if (t.success !== void 0) {
          f = false;
          let T = typeof t.success == "function" ? await t.success(i) : t.success, F = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "success", message: T, description: F });
        }
      }).catch(async (i) => {
        if (w = ["reject", i], t.error !== void 0) {
          f = false;
          let D = typeof t.error == "function" ? await t.error(i) : t.error, T = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "error", message: D, description: T });
        }
      }).finally(() => {
        var i;
        f && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
      }), g = () => new Promise((i, D) => S.then(() => w[0] === "reject" ? D(w[1]) : i(w[1])).catch(D));
      return typeof a != "string" && typeof a != "number" ? { unwrap: g } : Object.assign(a, { unwrap: g });
    };
    this.custom = (e, t) => {
      let a = (t == null ? void 0 : t.id) || bt++;
      return this.create({ jsx: e(a), id: a, ...t }), a;
    };
    this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, v = new yt(), ne = (n, e) => {
  let t = (e == null ? void 0 : e.id) || bt++;
  return v.addToast({ title: n, ...e, id: t }), t;
}, ie = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", le = ne, ce = () => v.toasts, de = () => v.getActiveToasts(), ue = Object.assign(le, { success: v.success, info: v.info, warning: v.warning, error: v.error, custom: v.custom, message: v.message, promise: v.promise, dismiss: v.dismiss, loading: v.loading }, { getHistory: ce, getToasts: de });
function wt(n, { insertAt: e } = {}) {
  if (typeof document == "undefined") return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(n) {
  return n.label !== void 0;
}
var pe = 3, me = "32px", ge = "16px", Wt = 4e3, he = 356, be = 14, ye = 20, we = 200;
function M(...n) {
  return n.filter(Boolean).join(" ");
}
function xe(n) {
  let [e, t] = n.split("-"), a = [];
  return e && a.push(e), t && a.push(t), a;
}
var ve = (n) => {
  var Dt, Pt, Nt, Bt, Ct, kt, It, Mt, Ht, At, Lt;
  let { invert: e, toast: t, unstyled: a, interacting: u, setHeights: f, visibleToasts: w, heights: S, index: g, toasts: i, expanded: D, removeToast: T, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: l, className: ot = "", descriptionClassName: at = "", duration: X2, position: st, gap: pt, loadingIcon: rt, expandByDefault: B, classNames: s, icons: P, closeButtonAriaLabel: nt = "Close toast", pauseWhenPageIsHidden: it } = n, [Y, C] = o.useState(null), [lt, J] = o.useState(null), [W, H] = o.useState(false), [A, mt] = o.useState(false), [L, z] = o.useState(false), [ct, d] = o.useState(false), [h, y] = o.useState(false), [R, j] = o.useState(0), [p, _] = o.useState(0), O = o.useRef(t.duration || X2 || Wt), G = o.useRef(null), k = o.useRef(null), Vt = g === 0, Ut = g + 1 <= w, N = t.type, V = t.dismissible !== false, Kt = t.className || "", Xt = t.descriptionClassName || "", dt = o.useMemo(() => S.findIndex((r) => r.toastId === t.id) || 0, [S, t.id]), Jt = o.useMemo(() => {
    var r;
    return (r = t.closeButton) != null ? r : et;
  }, [t.closeButton, et]), Tt = o.useMemo(() => t.duration || X2 || Wt, [t.duration, X2]), gt = o.useRef(0), U = o.useRef(0), St = o.useRef(0), K = o.useRef(null), [Gt, Qt] = st.split("-"), Rt = o.useMemo(() => S.reduce((r, m, c) => c >= dt ? r : r + m.height, 0), [S, dt]), Et = Ft(), qt = t.invert || e, ht = N === "loading";
  U.current = o.useMemo(() => dt * pt + Rt, [dt, Rt]), o.useEffect(() => {
    O.current = Tt;
  }, [Tt]), o.useEffect(() => {
    H(true);
  }, []), o.useEffect(() => {
    let r = k.current;
    if (r) {
      let m = r.getBoundingClientRect().height;
      return _(m), f((c) => [{ toastId: t.id, height: m, position: t.position }, ...c]), () => f((c) => c.filter((b) => b.toastId !== t.id));
    }
  }, [f, t.id]), o.useLayoutEffect(() => {
    if (!W) return;
    let r = k.current, m = r.style.height;
    r.style.height = "auto";
    let c = r.getBoundingClientRect().height;
    r.style.height = m, _(c), f((b) => b.find((x) => x.toastId === t.id) ? b.map((x) => x.toastId === t.id ? { ...x, height: c } : x) : [{ toastId: t.id, height: c, position: t.position }, ...b]);
  }, [W, t.title, t.description, f, t.id]);
  let $ = o.useCallback(() => {
    mt(true), j(U.current), f((r) => r.filter((m) => m.toastId !== t.id)), setTimeout(() => {
      T(t);
    }, we);
  }, [t, T, f, U]);
  o.useEffect(() => {
    if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let r;
    return D || u || it && Et ? (() => {
      if (St.current < gt.current) {
        let b = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        O.current = O.current - b;
      }
      St.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      O.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), r = setTimeout(() => {
        var b;
        (b = t.onAutoClose) == null || b.call(t, t), $();
      }, O.current));
    })(), () => clearTimeout(r);
  }, [D, u, t, N, it, Et, $]), o.useEffect(() => {
    t.delete && $();
  }, [$, t.delete]);
  function Zt() {
    var r, m, c;
    return P != null && P.loading ? o.createElement("div", { className: M(s == null ? void 0 : s.loader, (r = t == null ? void 0 : t.classNames) == null ? void 0 : r.loader, "sonner-loader"), "data-visible": N === "loading" }, P.loading) : rt ? o.createElement("div", { className: M(s == null ? void 0 : s.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"), "data-visible": N === "loading" }, rt) : o.createElement(Yt, { className: M(s == null ? void 0 : s.loader, (c = t == null ? void 0 : t.classNames) == null ? void 0 : c.loader), visible: N === "loading" });
  }
  return o.createElement("li", { tabIndex: 0, ref: k, className: M(ot, Kt, s == null ? void 0 : s.toast, (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt.toast, s == null ? void 0 : s.default, s == null ? void 0 : s[N], (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt[N]), "data-sonner-toast": "", "data-rich-colors": (Nt = t.richColors) != null ? Nt : F, "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": W, "data-promise": !!t.promise, "data-swiped": h, "data-removed": A, "data-visible": Ut, "data-y-position": Gt, "data-x-position": Qt, "data-index": g, "data-front": Vt, "data-swiping": L, "data-dismissible": V, "data-type": N, "data-invert": qt, "data-swipe-out": ct, "data-swipe-direction": lt, "data-expanded": !!(D || B && W), style: { "--index": g, "--toasts-before": g, "--z-index": i.length - g, "--offset": `${A ? R : U.current}px`, "--initial-height": B ? "auto" : `${p}px`, ...ut, ...t.style }, onDragEnd: () => {
    z(false), C(null), K.current = null;
  }, onPointerDown: (r) => {
    ht || !V || (G.current = /* @__PURE__ */ new Date(), j(U.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (z(true), K.current = { x: r.clientX, y: r.clientY }));
  }, onPointerUp: () => {
    var x, Q, q, Z;
    if (ct || !V) return;
    K.current = null;
    let r = Number(((x = k.current) == null ? void 0 : x.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), m = Number(((Q = k.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), c = (/* @__PURE__ */ new Date()).getTime() - ((q = G.current) == null ? void 0 : q.getTime()), b = Y === "x" ? r : m, I = Math.abs(b) / c;
    if (Math.abs(b) >= ye || I > 0.11) {
      j(U.current), (Z = t.onDismiss) == null || Z.call(t, t), J(Y === "x" ? r > 0 ? "right" : "left" : m > 0 ? "down" : "up"), $(), d(true), y(false);
      return;
    }
    z(false), C(null);
  }, onPointerMove: (r) => {
    var Q, q, Z, zt;
    if (!K.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
    let c = r.clientY - K.current.y, b = r.clientX - K.current.x, I = (q = n.swipeDirections) != null ? q : xe(st);
    !Y && (Math.abs(b) > 1 || Math.abs(c) > 1) && C(Math.abs(b) > Math.abs(c) ? "x" : "y");
    let x = { x: 0, y: 0 };
    Y === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && c < 0 || I.includes("bottom") && c > 0) && (x.y = c) : Y === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x.x = b), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && y(true), (Z = k.current) == null || Z.style.setProperty("--swipe-amount-x", `${x.x}px`), (zt = k.current) == null || zt.style.setProperty("--swipe-amount-y", `${x.y}px`);
  } }, Jt && !t.jsx ? o.createElement("button", { "aria-label": nt, "data-disabled": ht, "data-close-button": true, onClick: ht || !V ? () => {
  } : () => {
    var r;
    $(), (r = t.onDismiss) == null || r.call(t, t);
  }, className: M(s == null ? void 0 : s.closeButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.closeButton) }, (Ct = P == null ? void 0 : P.close) != null ? Ct : Ot) : null, t.jsx || reactExports.isValidElement(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : o.createElement(o.Fragment, null, N || t.icon || t.promise ? o.createElement("div", { "data-icon": "", className: M(s == null ? void 0 : s.icon, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Zt() : null, t.type !== "loading" ? t.icon || (P == null ? void 0 : P[N]) || jt(N) : null) : null, o.createElement("div", { "data-content": "", className: M(s == null ? void 0 : s.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content) }, o.createElement("div", { "data-title": "", className: M(s == null ? void 0 : s.title, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.title) }, typeof t.title == "function" ? t.title() : t.title), t.description ? o.createElement("div", { "data-description": "", className: M(at, Xt, s == null ? void 0 : s.description, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.description) }, typeof t.description == "function" ? t.description() : t.description) : null), reactExports.isValidElement(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? o.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || ft, onClick: (r) => {
    var m, c;
    tt(t.cancel) && V && ((c = (m = t.cancel).onClick) == null || c.call(m, r), $());
  }, className: M(s == null ? void 0 : s.cancelButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.cancelButton) }, t.cancel.label) : null, reactExports.isValidElement(t.action) ? t.action : t.action && tt(t.action) ? o.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || l, onClick: (r) => {
    var m, c;
    tt(t.action) && ((c = (m = t.action).onClick) == null || c.call(m, r), !r.defaultPrevented && $());
  }, className: M(s == null ? void 0 : s.actionButton, (Lt = t == null ? void 0 : t.classNames) == null ? void 0 : Lt.actionButton) }, t.action.label) : null));
};
function _t() {
  if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, e) {
  let t = {};
  return [n, e].forEach((a, u) => {
    let f = u === 1, w = f ? "--mobile-offset" : "--offset", S = f ? ge : me;
    function g(i) {
      ["top", "right", "bottom", "left"].forEach((D) => {
        t[`${w}-${D}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof a == "number" || typeof a == "string" ? g(a) : typeof a == "object" ? ["top", "right", "bottom", "left"].forEach((i) => {
      a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
    }) : g(S);
  }), t;
}
reactExports.forwardRef(function(e, t) {
  let { invert: a, position: u = "bottom-right", hotkey: f = ["altKey", "KeyT"], expand: w, closeButton: S, className: g, offset: i, mobileOffset: D, theme: T = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = pe, toastOptions: l, dir: ot = _t(), gap: at = be, loadingIcon: X2, icons: st, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: rt } = e, [B, s] = o.useState([]), P = o.useMemo(() => Array.from(new Set([u].concat(B.filter((d) => d.position).map((d) => d.position)))), [B, u]), [nt, it] = o.useState([]), [Y, C] = o.useState(false), [lt, J] = o.useState(false), [W, H] = o.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = o.useRef(null), mt = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = o.useRef(null), z = o.useRef(false), ct = o.useCallback((d) => {
    s((h) => {
      var y;
      return (y = h.find((R) => R.id === d.id)) != null && y.delete || v.dismiss(d.id), h.filter(({ id: R }) => R !== d.id);
    });
  }, []);
  return o.useEffect(() => v.subscribe((d) => {
    if (d.dismiss) {
      s((h) => h.map((y) => y.id === d.id ? { ...y, delete: true } : y));
      return;
    }
    setTimeout(() => {
      vt.flushSync(() => {
        s((h) => {
          let y = h.findIndex((R) => R.id === d.id);
          return y !== -1 ? [...h.slice(0, y), { ...h[y], ...d }, ...h.slice(y + 1)] : [d, ...h];
        });
      });
    });
  }), []), o.useEffect(() => {
    if (T !== "system") {
      H(T);
      return;
    }
    if (T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
    let d = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      d.addEventListener("change", ({ matches: h }) => {
        H(h ? "dark" : "light");
      });
    } catch (h) {
      d.addListener(({ matches: y }) => {
        try {
          H(y ? "dark" : "light");
        } catch (R) {
          console.error(R);
        }
      });
    }
  }, [T]), o.useEffect(() => {
    B.length <= 1 && C(false);
  }, [B]), o.useEffect(() => {
    let d = (h) => {
      var R, j;
      f.every((p) => h[p] || h.code === p) && (C(true), (R = A.current) == null || R.focus()), h.code === "Escape" && (document.activeElement === A.current || (j = A.current) != null && j.contains(document.activeElement)) && C(false);
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [f]), o.useEffect(() => {
    if (A.current) return () => {
      L.current && (L.current.focus({ preventScroll: true }), L.current = null, z.current = false);
    };
  }, [A.current]), o.createElement("section", { ref: t, "aria-label": `${pt} ${mt}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, P.map((d, h) => {
    var j;
    let [y, R] = d.split("-");
    return B.length ? o.createElement("ol", { key: d, dir: ot === "auto" ? _t() : ot, tabIndex: -1, ref: A, className: g, "data-sonner-toaster": true, "data-theme": W, "data-y-position": y, "data-lifted": Y && B.length > 1 && !w, "data-x-position": R, style: { "--front-toast-height": `${((j = nt[0]) == null ? void 0 : j.height) || 0}px`, "--width": `${he}px`, "--gap": `${at}px`, ...ut, ...Te(i, D) }, onBlur: (p) => {
      z.current && !p.currentTarget.contains(p.relatedTarget) && (z.current = false, L.current && (L.current.focus({ preventScroll: true }), L.current = null));
    }, onFocus: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || z.current || (z.current = true, L.current = p.relatedTarget);
    }, onMouseEnter: () => C(true), onMouseMove: () => C(true), onMouseLeave: () => {
      lt || C(false);
    }, onDragEnd: () => C(false), onPointerDown: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(true);
    }, onPointerUp: () => J(false) }, B.filter((p) => !p.position && h === 0 || p.position === d).map((p, _) => {
      var O, G;
      return o.createElement(ve, { key: p.id, icons: st, index: _, toast: p, defaultRichColors: F, duration: (O = l == null ? void 0 : l.duration) != null ? O : et, className: l == null ? void 0 : l.className, descriptionClassName: l == null ? void 0 : l.descriptionClassName, invert: a, visibleToasts: ft, closeButton: (G = l == null ? void 0 : l.closeButton) != null ? G : S, interacting: lt, position: d, style: l == null ? void 0 : l.style, unstyled: l == null ? void 0 : l.unstyled, classNames: l == null ? void 0 : l.classNames, cancelButtonStyle: l == null ? void 0 : l.cancelButtonStyle, actionButtonStyle: l == null ? void 0 : l.actionButtonStyle, removeToast: ct, toasts: B.filter((k) => k.position == p.position), heights: nt.filter((k) => k.position == p.position), setHeights: it, expandByDefault: w, gap: at, loadingIcon: X2, expanded: Y, pauseWhenPageIsHidden: rt, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const EMOJIS = [
  "🏔️",
  "🎒",
  "⛺",
  "🌸",
  "🌿",
  "❄️",
  "☀️",
  "🎉",
  "🔥",
  "⭐",
  "🏕️",
  "🗻",
  "🌄",
  "🌊",
  "🦅",
  "✅",
  "⚠️",
  "📅",
  "💰",
  "👥"
];
function RichTextEditor({
  value,
  onChange,
  placeholder = "Type here..."
}) {
  const editorRef = reactExports.useRef(null);
  const [showEmoji, setShowEmoji] = reactExports.useState(false);
  const [isFocused, setIsFocused] = reactExports.useState(false);
  const isInternalUpdate = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;
    if (isFocused) return;
    if (editor.innerHTML === value) return;
    isInternalUpdate.current = true;
    editor.innerHTML = value;
    isInternalUpdate.current = false;
  }, [value, isFocused]);
  const handleInput = () => {
    const editor = editorRef.current;
    if (!editor) return;
    if (isInternalUpdate.current) return;
    onChange(editor.innerHTML);
  };
  const exec = (command, valueArg = void 0) => {
    var _a;
    document.execCommand(command, false, valueArg);
    handleInput();
    (_a = editorRef.current) == null ? void 0 : _a.focus();
  };
  const handleLink = () => {
    const url = window.prompt("Enter URL:", "https://");
    if (url) {
      exec("createLink", url);
    }
  };
  const insertEmoji = (emoji) => {
    exec("insertText", emoji);
    setShowEmoji(false);
  };
  const isEmpty = !value || value === "<br>" || value === "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 rounded-t border border-[#C9B99A] bg-[#E6D8C4] px-2 py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => exec("bold"),
          className: "rounded px-2 py-1 text-sm font-bold text-[#1A1A1A] transition-colors hover:bg-[#F88379] hover:text-white",
          title: "Bold",
          children: "B"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => exec("italic"),
          className: "rounded px-2 py-1 text-sm italic text-[#1A1A1A] transition-colors hover:bg-[#F88379] hover:text-white",
          title: "Italic",
          children: "I"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => exec("underline"),
          className: "rounded px-2 py-1 text-sm underline text-[#1A1A1A] transition-colors hover:bg-[#F88379] hover:text-white",
          title: "Underline",
          children: "U"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleLink,
          className: "rounded px-2 py-1 text-sm text-[#1A1A1A] transition-colors hover:bg-[#F88379] hover:text-white",
          title: "Insert Link",
          children: "🔗"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowEmoji((v2) => !v2),
            className: "rounded px-2 py-1 text-sm text-[#1A1A1A] transition-colors hover:bg-[#F88379] hover:text-white",
            title: "Insert Emoji",
            children: "😊"
          }
        ),
        showEmoji && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "fixed inset-0 z-40",
              onClick: () => setShowEmoji(false),
              onKeyDown: (e) => {
                if (e.key === "Escape") setShowEmoji(false);
              },
              role: "button",
              tabIndex: 0,
              "aria-label": "Close emoji picker"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-full z-50 mt-1 grid grid-cols-5 gap-1 rounded border border-[#C9B99A] bg-white p-2 shadow-lg", children: EMOJIS.map((emoji) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => insertEmoji(emoji),
              className: "rounded p-1 text-lg transition-colors hover:bg-[#F5EEE4]",
              children: emoji
            },
            emoji
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      isEmpty && !isFocused && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-3 top-3 text-sm text-[#7A7A7A]", children: placeholder }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: editorRef,
          contentEditable: true,
          onInput: handleInput,
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false),
          className: "min-h-[80px] rounded-b border border-t-0 border-[#C9B99A] bg-white p-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#F88379]",
          suppressContentEditableWarning: true
        }
      )
    ] })
  ] });
}
const MOCK_BOOKINGS = [
  {
    id: "BK-001",
    trekName: "Kedarkantha Trek",
    customerName: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91-98765-43210",
    batchDate: "2026-01-15",
    groupSize: 4,
    totalAmount: 23996,
    status: "confirmed",
    paymentStatus: "paid",
    guideName: "Deepak Negi",
    bookedAt: "2025-12-01"
  },
  {
    id: "BK-002",
    trekName: "Har Ki Dun Trek",
    customerName: "Priya Patel",
    email: "priya.p@email.com",
    phone: "+91-98765-43211",
    batchDate: "2026-02-20",
    groupSize: 2,
    totalAmount: 15998,
    status: "pending",
    paymentStatus: "partial",
    bookedAt: "2025-12-05"
  },
  {
    id: "BK-003",
    trekName: "Valley of Flowers",
    customerName: "Amit Kumar",
    email: "amit.k@email.com",
    phone: "+91-98765-43212",
    batchDate: "2026-07-10",
    groupSize: 6,
    totalAmount: 41994,
    status: "confirmed",
    paymentStatus: "paid",
    guideName: "Suresh Bisht",
    bookedAt: "2025-11-20"
  },
  {
    id: "BK-004",
    trekName: "Bali Pass Trek",
    customerName: "Neha Gupta",
    email: "neha.g@email.com",
    phone: "+91-98765-43213",
    batchDate: "2026-05-15",
    groupSize: 1,
    totalAmount: 14999,
    status: "cancelled",
    paymentStatus: "pending",
    bookedAt: "2025-12-10"
  },
  {
    id: "BK-005",
    trekName: "Dayara Bugyal Trek",
    customerName: "Vikram Singh",
    email: "vikram.s@email.com",
    phone: "+91-98765-43214",
    batchDate: "2026-03-05",
    groupSize: 3,
    totalAmount: 17997,
    status: "confirmed",
    paymentStatus: "paid",
    guideName: "Deepak Negi",
    bookedAt: "2025-12-08"
  }
];
const MOCK_WAITLIST = [
  {
    id: "WL-001",
    batchId: "BT-002",
    trekName: "Har Ki Dun Trek",
    batchDate: "2026-02-20",
    name: "Sneha Reddy",
    email: "sneha.r@email.com",
    phone: "+91-98765-43215",
    position: 1,
    numPeople: 2,
    status: "Waiting",
    createdAt: "2025-12-12"
  },
  {
    id: "WL-002",
    batchId: "BT-002",
    trekName: "Har Ki Dun Trek",
    batchDate: "2026-02-20",
    name: "Arjun Nair",
    email: "arjun.n@email.com",
    phone: "+91-98765-43216",
    position: 2,
    numPeople: 1,
    status: "Notified",
    createdAt: "2025-12-10",
    notifiedAt: "2025-12-14"
  },
  {
    id: "WL-003",
    batchId: "BT-005",
    trekName: "Dayara Bugyal Trek",
    batchDate: "2026-03-05",
    name: "Meera Iyer",
    email: "meera.i@email.com",
    phone: "+91-98765-43217",
    position: 1,
    numPeople: 3,
    status: "Waiting",
    createdAt: "2025-12-13"
  }
];
function StatusBadge({ status }) {
  const styles = {
    confirmed: "bg-[#2D6A4F] text-white",
    pending: "bg-[#FFEB3B] text-[#1A1A1A]",
    cancelled: "bg-[#F88379] text-white",
    completed: "bg-[#82C8E5] text-[#1A1A1A]",
    paid: "bg-[#2D6A4F] text-white",
    partial: "bg-[#FFEB3B] text-[#1A1A1A]",
    open: "bg-[#2D6A4F] text-white",
    full: "bg-[#F88379] text-white",
    closed: "bg-[#7A7A7A] text-white",
    Available: "bg-[#2D6A4F] text-white",
    OnTrek: "bg-[#82C8E5] text-[#1A1A1A]",
    OnLeave: "bg-[#E6D8C4] text-[#1A1A1A]",
    Waiting: "bg-[#E6D8C4] text-[#1A1A1A]",
    Notified: "bg-[#FFEB3B] text-[#1A1A1A]",
    Booked: "bg-[#2D6A4F] text-white",
    Expired: "bg-[#F88379] text-white"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Badge,
    {
      className: `${styles[status] || "bg-[#E6D8C4] text-[#1A1A1A]"} font-medium`,
      children: status
    }
  );
}
function StatCard({
  label,
  value,
  icon: Icon,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-[#E6D8C4] bg-white p-5 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#7A7A7A]", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-2xl font-bold text-[#1A1A1A]", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg p-3 ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-white" }) })
  ] }) });
}
function BookingsTab() {
  const [filter, setFilter] = reactExports.useState("all");
  const [search, setSearch] = reactExports.useState("");
  const filtered = MOCK_BOOKINGS.filter((b) => {
    const matchesFilter = filter === "all" || b.status === filter;
    const matchesSearch = search === "" || b.customerName.toLowerCase().includes(search.toLowerCase()) || b.trekName.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  const stats = {
    total: MOCK_BOOKINGS.length,
    confirmed: MOCK_BOOKINGS.filter((b) => b.status === "confirmed").length,
    revenue: MOCK_BOOKINGS.filter((b) => b.paymentStatus === "paid").reduce(
      (sum, b) => sum + b.totalAmount,
      0
    ),
    pending: MOCK_BOOKINGS.filter((b) => b.status === "pending").length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Total Bookings",
          value: stats.total.toString(),
          icon: Calendar,
          color: "bg-[#F88379]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Confirmed",
          value: stats.confirmed.toString(),
          icon: CircleCheck,
          color: "bg-[#2D6A4F]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Revenue (₹)",
          value: stats.revenue.toLocaleString(),
          icon: TrendingUp,
          color: "bg-[#D4A843]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Pending",
          value: stats.pending.toString(),
          icon: Clock,
          color: "bg-[#82C8E5]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E6D8C4] bg-white shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 border-b border-[#E6D8C4] p-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-[#1A1A1A]", children: "All Bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A7A7A]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search bookings...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "rounded-lg border border-[#E6D8C4] bg-white py-2 pl-9 pr-4 text-sm text-[#1A1A1A] placeholder:text-[#7A7A7A] focus:border-[#F88379] focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: filter,
              onChange: (e) => setFilter(e.target.value),
              className: "rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelled" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-[#F5EEE4]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Booking ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Trek" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Batch Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Group" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Payment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Guide" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.map((booking) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm text-[#1A1A1A]", children: booking.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-[#1A1A1A]", children: booking.trekName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#1A1A1A]", children: booking.customerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#7A7A7A]", children: booking.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-[#1A1A1A]", children: booking.batchDate }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-[#1A1A1A]", children: booking.groupSize }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium text-[#D4A843]", children: [
            "₹",
            booking.totalAmount.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: booking.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: booking.paymentStatus }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-[#1A1A1A]", children: booking.guideName || "—" })
        ] }, booking.id)) })
      ] }) })
    ] })
  ] });
}
function GuidesTab() {
  const { actor } = useActor(createActor);
  const [guides, setGuides] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [uploadingId, setUploadingId] = reactExports.useState(null);
  const [uploadError, setUploadError] = reactExports.useState(null);
  const [uploadSuccess, setUploadSuccess] = reactExports.useState(
    {}
  );
  const fileInputRef = reactExports.useRef(null);
  const fetchGuides = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const data = await actor.getAllGuides();
      setGuides(data);
    } catch {
      ue.error("Failed to load guides");
    } finally {
      setLoading(false);
    }
  }, [actor]);
  reactExports.useEffect(() => {
    fetchGuides();
  }, [fetchGuides]);
  const handleFileSelect = async (guideId, file) => {
    if (!file.type.startsWith("image/")) {
      setUploadError("Please select an image file.");
      setUploadingId(guideId);
      setTimeout(() => {
        setUploadError(null);
        setUploadingId(null);
      }, 2500);
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setUploadError("File too large. Maximum 2MB.");
      setUploadingId(guideId);
      setTimeout(() => {
        setUploadError(null);
        setUploadingId(null);
      }, 2500);
      return;
    }
    setUploadError(null);
    setUploadSuccess((prev) => {
      const next = { ...prev };
      delete next[guideId];
      return next;
    });
    setUploadingId(guideId);
    try {
      const url = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      if (!actor) throw new Error("Actor not ready");
      const result = await actor.updateGuidePhoto(guideId, url);
      if (result.__kind__ === "ok") {
        setUploadSuccess((prev) => ({ ...prev, [guideId]: "✓ Photo updated" }));
        setTimeout(() => {
          setUploadSuccess((prev) => {
            const next = { ...prev };
            delete next[guideId];
            return next;
          });
        }, 3e3);
        await fetchGuides();
      } else {
        setUploadError(result.err);
        setTimeout(() => setUploadError(null), 3e3);
      }
    } catch {
      setUploadError("Upload failed — try again");
      setTimeout(() => setUploadError(null), 3e3);
    } finally {
      setUploadingId(null);
    }
  };
  const handleAvailabilityToggle = async (guideId) => {
    if (!actor) return;
    const guide = guides.find((g) => g.id === guideId);
    if (!guide) return;
    const next = [
      GuideAvailability.Available,
      GuideAvailability.OnTrek,
      GuideAvailability.OnLeave
    ];
    const idx = next.indexOf(guide.availability);
    const nextAvail = next[(idx + 1) % 3];
    try {
      const result = await actor.updateGuideAvailability(guideId, nextAvail);
      if (result.__kind__ === "ok") {
        ue.success("Guide availability updated");
        await fetchGuides();
      } else {
        ue.error(result.err);
      }
    } catch {
      ue.error("Failed to update availability");
    }
  };
  const availabilityLabel = (a) => {
    if (a === GuideAvailability.Available) return "Available";
    if (a === GuideAvailability.OnTrek) return "OnTrek";
    return "OnLeave";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-[#1A1A1A]", children: "Guide Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#7A7A7A]", children: [
        guides.length,
        " guides ·",
        " ",
        guides.filter(
          (g) => g.availability === GuideAvailability.Available
        ).length,
        " ",
        "available"
      ] })
    ] }) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-[#F88379]" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", children: guides.map((guide) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-[#E6D8C4] bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              guide.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: guide.photo,
                  alt: guide.name,
                  className: "h-12 w-12 rounded-full object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#F88379] font-display text-lg font-bold text-white", children: guide.name.charAt(0) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-[#1A1A1A]", children: guide.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#7A7A7A]", children: guide.designation })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: availabilityLabel(guide.availability) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileInputRef,
                type: "file",
                accept: "image/jpeg,image/png",
                className: "hidden",
                onChange: (e) => {
                  var _a;
                  const file = (_a = e.target.files) == null ? void 0 : _a[0];
                  if (file) handleFileSelect(guide.id, file);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "border-[#F88379] text-[#F88379] hover:bg-[#F88379] hover:text-white text-xs h-7 px-2",
                onClick: () => {
                  var _a;
                  return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                },
                disabled: uploadingId === guide.id,
                "data-ocid": `admin.upload_photo_button.${guide.id}`,
                children: [
                  uploadingId === guide.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-3 w-3" }),
                  "Upload Photo"
                ]
              }
            ),
            uploadError && uploadingId === guide.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[#F88379]", children: uploadError }),
            uploadSuccess[guide.id] && !uploadingId && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[#2D6A4F]", children: uploadSuccess[guide.id] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-[#4A4A4A]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-[#82C8E5]" }),
              guide.yearsExperience.toString(),
              " years exp"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-[#4A4A4A]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-[#D4A843]" }),
              guide.rating,
              "/5 · ",
              Number(guide.totalTreksLed),
              " treks led"
            ] }),
            guide.currentAssignment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-[#4A4A4A]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-[#F88379]" }),
              guide.currentAssignment
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1", children: guide.certifications.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "border-[#82C8E5] text-[#1A1A1A]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "mr-1 h-3 w-3 text-[#82C8E5]" }),
                cert
              ]
            },
            cert
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "flex-1 border-[#E6D8C4] text-[#1A1A1A] hover:bg-[#F5EEE4]",
              onClick: () => handleAvailabilityToggle(guide.id),
              "data-ocid": "admin.toggle_availability_button",
              children: "Toggle Status"
            }
          ) })
        ]
      },
      guide.id
    )) })
  ] });
}
function BatchesTab() {
  const { actor } = useActor(createActor);
  const [batches, setBatches] = reactExports.useState([]);
  const [guides, setGuides] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [assigningBatch, setAssigningBatch] = reactExports.useState(
    null
  );
  const [selectedGuide, setSelectedGuide] = reactExports.useState("");
  const [showModal, setShowModal] = reactExports.useState(false);
  const [modalMode, setModalMode] = reactExports.useState("create");
  const [editingBatchId, setEditingBatchId] = reactExports.useState(null);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [formTrek, setFormTrek] = reactExports.useState("");
  const [formStartDate, setFormStartDate] = reactExports.useState("");
  const [formEndDate, setFormEndDate] = reactExports.useState("");
  const [formPrice, setFormPrice] = reactExports.useState("");
  const [formMaxSeats, setFormMaxSeats] = reactExports.useState("");
  const [formMeetingPoint, setFormMeetingPoint] = reactExports.useState("");
  const [formGuide, setFormGuide] = reactExports.useState("");
  const [formStatus, setFormStatus] = reactExports.useState("active");
  const [formErrors, setFormErrors] = reactExports.useState({});
  const TREK_OPTIONS = [
    { label: "Kedarkantha", value: "kedarkantha" },
    { label: "Har Ki Dun", value: "har-ki-dun" },
    { label: "Chandernahan Lake", value: "chandernahan-lake" },
    { label: "Chaainsheel Bugyal", value: "chaainsheel-bugyal" },
    { label: "Buran Ghati", value: "buran-ghati" },
    { label: "Ruinsara Tal", value: "ruinsara-tal" },
    { label: "Rupin Pass", value: "rupin-pass" },
    { label: "Bali Pass", value: "bali-pass" },
    { label: "Dayara Bugyal", value: "dayara-bugyal" },
    { label: "Nag Tibba", value: "nag-tibba" },
    { label: "Chopta Chandrashila", value: "chopta-chandrashila" },
    { label: "Phulara Ridge", value: "phulara-ridge" },
    { label: "Borasu Pass", value: "borasu-pass" },
    { label: "Valley of Flowers", value: "valley-of-flowers" }
  ];
  const fetchBatches = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const [batchData, guideData] = await Promise.all([
        actor.getBatchesAll(),
        actor.getAllGuides()
      ]);
      setBatches(batchData);
      setGuides(guideData);
    } catch {
      ue.error("Failed to load batches");
    } finally {
      setLoading(false);
    }
  }, [actor]);
  reactExports.useEffect(() => {
    fetchBatches();
  }, [fetchBatches]);
  const resetForm = () => {
    setFormTrek("");
    setFormStartDate("");
    setFormEndDate("");
    setFormPrice("");
    setFormMaxSeats("");
    setFormMeetingPoint("");
    setFormGuide("");
    setFormStatus("active");
    setFormErrors({});
    setEditingBatchId(null);
  };
  const openCreateModal = () => {
    resetForm();
    setModalMode("create");
    setShowModal(true);
  };
  const openEditModal = (batch) => {
    setModalMode("edit");
    setEditingBatchId(batch.id);
    setFormTrek(batch.trekSlug);
    setFormStartDate(batch.startDate);
    setFormEndDate(batch.endDate);
    setFormPrice(String(batch.pricePerPerson));
    setFormMaxSeats(String(batch.totalSeats));
    setFormMeetingPoint("");
    setFormGuide(batch.guideId || "");
    setFormStatus(
      batch.status === BatchStatus.Open ? "active" : batch.status === BatchStatus.Completed ? "completed" : batch.status === BatchStatus.Cancelled ? "cancelled" : "active"
    );
    setFormErrors({});
    setShowModal(true);
  };
  const validateForm = () => {
    const errors = {};
    if (!formTrek) errors.trek = "Trek is required";
    if (!formStartDate) errors.startDate = "Start date is required";
    if (!formEndDate) errors.endDate = "End date is required";
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (formStartDate) {
      const sd = new Date(formStartDate);
      sd.setHours(0, 0, 0, 0);
      if (sd < today) errors.startDate = "Start date must be today or later";
    }
    if (formStartDate && formEndDate) {
      const sd = new Date(formStartDate);
      const ed = new Date(formEndDate);
      if (ed <= sd) errors.endDate = "End date must be after start date";
    }
    const price = Number(formPrice);
    if (!formPrice || price <= 0) errors.price = "Price must be greater than 0";
    const seats = Number(formMaxSeats);
    if (!formMaxSeats || seats < 1 || seats > 50)
      errors.maxSeats = "Max seats must be between 1 and 50";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async () => {
    var _a;
    if (!actor) return;
    if (!validateForm()) return;
    setSubmitting(true);
    try {
      const trekName = ((_a = TREK_OPTIONS.find((t) => t.value === formTrek)) == null ? void 0 : _a.label) || formTrek;
      if (modalMode === "create") {
        const result = await actor.createBatch({
          trekSlug: formTrek,
          trekName,
          startDate: formStartDate,
          endDate: formEndDate,
          pricePerPerson: BigInt(formPrice),
          maxSeats: BigInt(formMaxSeats),
          meetingPoint: formMeetingPoint || "Dehradun ISBT",
          guideId: formGuide || void 0,
          status: formStatus
        });
        if (result.__kind__ === "ok") {
          ue.success("Batch created successfully");
          setShowModal(false);
          resetForm();
          await fetchBatches();
        } else {
          ue.error(result.err);
        }
      } else if (modalMode === "edit" && editingBatchId !== null) {
        const input = {
          trekSlug: formTrek,
          trekName,
          startDate: formStartDate,
          endDate: formEndDate,
          pricePerPerson: BigInt(formPrice),
          maxSeats: BigInt(formMaxSeats),
          meetingPoint: formMeetingPoint || void 0,
          guideId: formGuide || void 0,
          status: formStatus
        };
        const result = await actor.updateBatch(editingBatchId, input);
        if (result.__kind__ === "ok") {
          ue.success("Batch updated successfully");
          setShowModal(false);
          resetForm();
          await fetchBatches();
        } else {
          ue.error(result.err);
        }
      }
    } catch {
      ue.error("Failed to save batch");
    } finally {
      setSubmitting(false);
    }
  };
  const handleDelete = async (batchId) => {
    if (!actor) return;
    if (!window.confirm("Delete this batch? This action cannot be undone."))
      return;
    try {
      const result = await actor.deleteBatch(batchId);
      if (result.__kind__ === "ok") {
        ue.success("Batch deleted");
        setBatches((prev) => prev.filter((b) => b.id !== batchId));
      } else {
        ue.error(result.err);
      }
    } catch {
      ue.error("Failed to delete batch");
    }
  };
  const handleAssignGuide = async () => {
    if (!actor || !assigningBatch || !selectedGuide) return;
    try {
      const result = await actor.assignGuideToBatch(
        String(assigningBatch.id),
        selectedGuide
      );
      if (result.__kind__ === "ok") {
        ue.success("Guide assigned successfully");
        await fetchBatches();
      } else {
        ue.error(result.err);
      }
    } catch {
      ue.error("Failed to assign guide");
    }
    setAssigningBatch(null);
    setSelectedGuide("");
  };
  const statusBadgeClass = (status) => {
    const s = status.toLowerCase();
    if (s === "active" || s === "open") return "bg-[#F88379] text-white";
    if (s === "cancelled") return "bg-red-100 text-red-700";
    if (s === "completed" || s === "full") return "bg-[#82C8E5] text-[#1A1A1A]";
    return "bg-[#E6D8C4] text-[#1A1A1A]";
  };
  const seatsBarColor = (booked, total) => {
    const ratio = Number(booked) / Number(total);
    if (ratio > 0.8) return "#F88379";
    if (ratio > 0.5) return "#D4A843";
    return "#2D6A4F";
  };
  const trekNameFromSlug = (slug) => {
    const map = {
      kedarkantha: "Kedarkantha Trek",
      "har-ki-dun": "Har Ki Dun Trek",
      "chandernahan-lake": "Chandernahan Lake Trek",
      "chaainsheel-bugyal": "Chaainsheel Bugyal Trek",
      "buran-ghati": "Buran Ghati Trek",
      "ruinsara-tal": "Ruinsara Tal Trek",
      "rupin-pass": "Rupin Pass Trek",
      "bali-pass": "Bali Pass Trek",
      "dayara-bugyal": "Dayara Bugyal Trek",
      "nag-tibba": "Nag Tibba Trek",
      "chopta-chandrashila": "Chopta Chandrashila Trek",
      "phulara-ridge": "Phulara Ridge Trek",
      "borasu-pass": "Borasu Pass Trek",
      "valley-of-flowers": "Valley of Flowers Trek"
    };
    return map[slug] || slug;
  };
  const guideName = (guideId) => {
    const g = guides.find((x) => x.id === guideId);
    return g == null ? void 0 : g.name;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Total Batches",
          value: batches.length.toString(),
          icon: Calendar,
          color: "bg-[#F88379]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Open",
          value: batches.filter((b) => b.status === BatchStatus.Open).length.toString(),
          icon: CircleCheck,
          color: "bg-[#2D6A4F]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Full",
          value: batches.filter((b) => b.status === BatchStatus.Full).length.toString(),
          icon: CircleAlert,
          color: "bg-[#D4A843]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "With Guide",
          value: batches.filter((b) => b.guideId).length.toString(),
          icon: Users,
          color: "bg-[#82C8E5]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E6D8C4] bg-white shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 border-b border-[#E6D8C4] p-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-[#1A1A1A]", children: "Batch Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: openCreateModal,
            className: "inline-flex items-center gap-2 rounded-lg bg-[#F88379] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#D9604F]",
            "data-ocid": "admin.create_batch_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              "Create New Batch"
            ]
          }
        )
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-[#F88379]" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-[#F5EEE4]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Batch ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Trek" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Dates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Seats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: batches.map((batch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm text-[#1A1A1A]", children: String(batch.id) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-[#1A1A1A]", children: trekNameFromSlug(batch.trekSlug) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-[#1A1A1A]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: batch.startDate }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#7A7A7A]", children: [
              "to ",
              batch.endDate
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-16 rounded-full bg-[#E6D8C4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-2 rounded-full",
                style: {
                  width: `${Number(batch.bookedSeats) / Number(batch.totalSeats) * 100}%`,
                  backgroundColor: seatsBarColor(
                    batch.bookedSeats,
                    batch.totalSeats
                  )
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-[#1A1A1A]", children: [
              String(batch.bookedSeats),
              "/",
              String(batch.totalSeats)
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium text-[#D4A843]", children: [
            "₹",
            Number(batch.pricePerPerson).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: `${statusBadgeClass(batch.status)} font-medium`,
              children: batch.status
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: guideName(batch.guideId) ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-[#1A1A1A]", children: guideName(batch.guideId) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-[#7A7A7A]", children: "Unassigned" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "border-[#F88379] text-[#F88379] hover:bg-[#F88379] hover:text-white h-7 px-2 text-xs",
                onClick: () => {
                  setAssigningBatch(batch);
                  setSelectedGuide(batch.guideId || "");
                },
                "data-ocid": "admin.assign_guide_button",
                children: batch.guideId ? "Reassign" : "Assign Guide"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "border-[#F88379] text-[#F88379] hover:bg-[#F88379] hover:text-white h-7 px-2 text-xs",
                onClick: () => openEditModal(batch),
                "data-ocid": "admin.edit_batch_button",
                children: "Edit"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 h-7 px-2 text-xs",
                onClick: () => handleDelete(batch.id),
                "data-ocid": "admin.delete_batch_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
              }
            )
          ] }) })
        ] }, String(batch.id))) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!assigningBatch,
        onOpenChange: (open) => !open && setAssigningBatch(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-[#1A1A1A]", children: [
            "Assign Guide to",
            " ",
            assigningBatch ? trekNameFromSlug(assigningBatch.trekSlug) : ""
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 text-sm text-[#4A4A4A]", children: [
              "Batch: ",
              assigningBatch == null ? void 0 : assigningBatch.startDate,
              " to ",
              assigningBatch == null ? void 0 : assigningBatch.endDate
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "guide-select",
                className: "text-sm font-medium text-[#1A1A1A]",
                children: "Select Guide"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "guide-select",
                value: selectedGuide,
                onChange: (e) => setSelectedGuide(e.target.value),
                className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose a guide..." }),
                  guides.filter((g) => g.availability === GuideAvailability.Available).map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: g.id, children: [
                    g.name,
                    " — ",
                    g.designation,
                    " (",
                    g.rating,
                    "★)"
                  ] }, g.id))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setAssigningBatch(null),
                className: "border-[#E6D8C4] text-[#1A1A1A]",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleAssignGuide,
                disabled: !selectedGuide,
                className: "bg-[#F88379] text-white hover:bg-[#D9604F]",
                children: "Assign Guide"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: showModal,
        onOpenChange: (open) => {
          if (!open) {
            setShowModal(false);
            resetForm();
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-white max-w-2xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-[#1A1A1A]", children: modalMode === "create" ? "Create New Batch" : "Edit Batch" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "batch-trek",
                  className: "text-sm font-medium text-[#1A1A1A]",
                  children: [
                    "Trek ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F88379]", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "batch-trek",
                  value: formTrek,
                  onChange: (e) => setFormTrek(e.target.value),
                  className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a trek..." }),
                    TREK_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t.value, children: t.label }, t.value))
                  ]
                }
              ),
              formErrors.trek && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: formErrors.trek })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "batch-start",
                    className: "text-sm font-medium text-[#1A1A1A]",
                    children: [
                      "Start Date ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F88379]", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "batch-start",
                    type: "date",
                    value: formStartDate,
                    onChange: (e) => setFormStartDate(e.target.value),
                    className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
                  }
                ),
                formErrors.startDate && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: formErrors.startDate })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "batch-end",
                    className: "text-sm font-medium text-[#1A1A1A]",
                    children: [
                      "End Date ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F88379]", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "batch-end",
                    type: "date",
                    value: formEndDate,
                    onChange: (e) => setFormEndDate(e.target.value),
                    className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
                  }
                ),
                formErrors.endDate && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: formErrors.endDate })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "batch-price",
                    className: "text-sm font-medium text-[#1A1A1A]",
                    children: [
                      "Price Per Person (₹) ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F88379]", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "batch-price",
                    type: "number",
                    min: 0,
                    value: formPrice,
                    onChange: (e) => setFormPrice(e.target.value),
                    placeholder: "e.g. 5999",
                    className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
                  }
                ),
                formErrors.price && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: formErrors.price })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "batch-seats",
                    className: "text-sm font-medium text-[#1A1A1A]",
                    children: [
                      "Max Seats ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F88379]", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "batch-seats",
                    type: "number",
                    min: 1,
                    max: 50,
                    value: formMaxSeats,
                    onChange: (e) => setFormMaxSeats(e.target.value),
                    placeholder: "e.g. 12",
                    className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
                  }
                ),
                formErrors.maxSeats && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: formErrors.maxSeats })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "batch-meeting",
                  className: "text-sm font-medium text-[#1A1A1A]",
                  children: "Meeting Point"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "batch-meeting",
                  type: "text",
                  value: formMeetingPoint,
                  onChange: (e) => setFormMeetingPoint(e.target.value),
                  placeholder: "e.g. Dehradun ISBT Gate 3",
                  className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "batch-guide",
                    className: "text-sm font-medium text-[#1A1A1A]",
                    children: "Guide"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "batch-guide",
                    value: formGuide,
                    onChange: (e) => setFormGuide(e.target.value),
                    className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Unassigned" }),
                      guides.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: g.id, children: [
                        g.name,
                        " — ",
                        g.designation
                      ] }, g.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "batch-status",
                    className: "text-sm font-medium text-[#1A1A1A]",
                    children: "Status"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "batch-status",
                    value: formStatus,
                    onChange: (e) => setFormStatus(e.target.value),
                    className: "mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "Active" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelled" })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => {
                  setShowModal(false);
                  resetForm();
                },
                className: "border-[#E6D8C4] text-[#1A1A1A]",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleSubmit,
                disabled: submitting,
                className: "bg-[#F88379] text-white hover:bg-[#D9604F]",
                "data-ocid": "admin.submit_batch_button",
                children: [
                  submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null,
                  submitting ? "Saving..." : modalMode === "create" ? "Create Batch" : "Update Batch"
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function WaitlistsTab() {
  const [waitlist, setWaitlist] = reactExports.useState(MOCK_WAITLIST);
  const [filterBatch, setFilterBatch] = reactExports.useState("all");
  const batches = Array.from(new Set(waitlist.map((w) => w.batchId))).map(
    (id) => {
      const entry = waitlist.find((w) => w.batchId === id);
      return { id, name: `${entry == null ? void 0 : entry.trekName} (${entry == null ? void 0 : entry.batchDate})` };
    }
  );
  const filtered = filterBatch === "all" ? waitlist : waitlist.filter((w) => w.batchId === filterBatch);
  const handlePromote = (entryId) => {
    setWaitlist(
      (prev) => prev.map(
        (w) => w.id === entryId ? {
          ...w,
          status: "Notified",
          notifiedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        } : w
      )
    );
    ue.success("Waitlist entry promoted and notified");
  };
  const handleNotifyNext = (batchId) => {
    const next = waitlist.find(
      (w) => w.batchId === batchId && w.status === "Waiting"
    );
    if (next) {
      handlePromote(next.id);
    } else {
      ue.info("No one waiting for this batch");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Total Waitlisted",
          value: waitlist.length.toString(),
          icon: ListOrdered,
          color: "bg-[#F88379]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Waiting",
          value: waitlist.filter((w) => w.status === "Waiting").length.toString(),
          icon: Clock,
          color: "bg-[#82C8E5]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Notified",
          value: waitlist.filter((w) => w.status === "Notified").length.toString(),
          icon: Mail,
          color: "bg-[#D4A843]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E6D8C4] bg-white shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 border-b border-[#E6D8C4] p-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-[#1A1A1A]", children: "Waitlist Entries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filterBatch,
            onChange: (e) => setFilterBatch(e.target.value),
            className: "rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Batches" }),
              batches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b.id, children: b.name }, b.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-[#F5EEE4]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Entry ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Trek / Batch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "People" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Created" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[#1A1A1A]", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm text-[#1A1A1A]", children: entry.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#1A1A1A]", children: entry.trekName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#7A7A7A]", children: entry.batchDate })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#1A1A1A]", children: entry.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#7A7A7A]", children: entry.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold text-[#F88379]", children: [
            "#",
            entry.position
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-[#1A1A1A]", children: entry.numPeople }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: entry.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-sm text-[#7A7A7A]", children: [
            entry.createdAt,
            entry.notifiedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#D4A843]", children: [
              "Notified: ",
              entry.notifiedAt
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            entry.status === "Waiting" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white",
                onClick: () => handlePromote(entry.id),
                "data-ocid": "admin.promote_waitlist_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "mr-1 h-3 w-3" }),
                  "Promote"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "border-[#82C8E5] text-[#82C8E5] hover:bg-[#82C8E5] hover:text-white",
                onClick: () => handleNotifyNext(entry.batchId),
                "data-ocid": "admin.notify_next_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mr-1 h-3 w-3" }),
                  "Notify Next"
                ]
              }
            )
          ] }) })
        ] }, entry.id)) })
      ] }) })
    ] })
  ] });
}
function AnnouncementsTab() {
  const { actor } = useActor(createActor);
  const [announcements, setAnnouncements] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [newText, setNewText] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const fetchAll = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const data = await actor.getAllAnnouncements();
      setAnnouncements(data);
    } catch {
      ue.error("Failed to load announcements");
    } finally {
      setLoading(false);
    }
  }, [actor]);
  reactExports.useEffect(() => {
    fetchAll();
  }, [fetchAll]);
  const handleToggle = async (a) => {
    if (!actor) return;
    try {
      const result = await actor.updateAnnouncement(a.id, a.text, !a.isActive);
      if (result.__kind__ === "ok") {
        ue.success(
          a.isActive ? "Announcement deactivated" : "Announcement activated"
        );
        setAnnouncements(
          (prev) => prev.map((item) => item.id === a.id ? result.ok : item)
        );
      } else {
        ue.error(result.err);
      }
    } catch {
      ue.error("Failed to update announcement");
    }
  };
  const handleDelete = async (id) => {
    if (!actor) return;
    try {
      const result = await actor.deleteAnnouncement(id);
      if (result.__kind__ === "ok") {
        ue.success("Announcement deleted");
        setAnnouncements((prev) => prev.filter((a) => a.id !== id));
      } else {
        ue.error(result.err);
      }
    } catch {
      ue.error("Failed to delete announcement");
    }
  };
  const handleCreate = async () => {
    if (!actor || !newText.trim()) return;
    setSubmitting(true);
    try {
      const created = await actor.createAnnouncement(newText.trim());
      ue.success("Announcement created");
      setAnnouncements((prev) => [created, ...prev]);
      setNewText("");
      setShowAddForm(false);
    } catch {
      ue.error("Failed to create announcement");
    } finally {
      setSubmitting(false);
    }
  };
  const activeCount = announcements.filter((a) => a.isActive).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-[#1A1A1A]", children: "Announcements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#7A7A7A]", children: [
          announcements.length,
          " total · ",
          activeCount,
          " active"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => setShowAddForm((v2) => !v2),
          className: "bg-[#F88379] text-white hover:bg-[#D9604F]",
          "data-ocid": "admin.add_announcement_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
            "Add Announcement"
          ]
        }
      )
    ] }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E6D8C4] bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: "announcement-text",
          className: "text-sm font-medium text-[#1A1A1A]",
          children: "Announcement Text"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RichTextEditor,
        {
          value: newText,
          onChange: (html) => setNewText(html),
          placeholder: "e.g. 🏔 Kedarkantha Winter Batch — Jan 15 | 3 Seats Left"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => {
              setShowAddForm(false);
              setNewText("");
            },
            className: "border-[#E6D8C4] text-[#1A1A1A]",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleCreate,
            disabled: !newText.trim() || submitting,
            className: "bg-[#F88379] text-white hover:bg-[#D9604F]",
            "data-ocid": "admin.submit_announcement_button",
            children: [
              submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
              "Create"
            ]
          }
        )
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-[#F88379]" }) }) : announcements.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E6D8C4] bg-white p-8 text-center shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "mx-auto h-8 w-8 text-[#7A7A7A]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-[#7A7A7A]", children: "No announcements yet. Create one to show in the navbar ticker." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: announcements.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `rounded-xl border bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${a.isActive ? "border-l-4 border-[#F88379] border-t border-r border-b border-[#E6D8C4]" : "border-[#E6D8C4]"}`,
        style: a.isActive ? { borderLeftWidth: 4, borderLeftColor: "#F88379" } : void 0,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-sm font-medium ${a.isActive ? "text-[#1A1A1A]" : "text-[#7A7A7A]"}`,
                children: a.text
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2", children: [
              a.isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[#F88379] text-white font-medium", children: "Active" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "border-[#7A7A7A] text-[#7A7A7A] font-medium",
                  children: "Inactive"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[#7A7A7A] font-mono", children: [
                "ID: ",
                a.id
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleToggle(a),
                className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${a.isActive ? "bg-[#E6D8C4] text-[#1A1A1A] hover:bg-[#D9604F] hover:text-white" : "bg-[#2D6A4F] text-white hover:bg-[#1A4A2F]"}`,
                "data-ocid": `admin.toggle_announcement.${a.id}`,
                children: a.isActive ? "Deactivate" : "Activate"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleDelete(a.id),
                className: "p-1.5 rounded-lg text-[#F88379] hover:bg-[#F88379] hover:text-white transition-colors",
                "aria-label": "Delete announcement",
                "data-ocid": `admin.delete_announcement.${a.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      },
      a.id
    )) })
  ] });
}
function AdminPage() {
  const [activeTab, setActiveTab] = reactExports.useState("bookings");
  const { actor } = useActor(createActor);
  const { principalText } = useAuthStatus();
  const [isAdminInitialized, setIsAdminInitialized] = reactExports.useState(
    null
  );
  const [isInitializing, setIsInitializing] = reactExports.useState(false);
  reactExports.useEffect(() => {
    async function checkAdmin() {
      if (!actor) return;
      try {
        const adminPrincipal = await actor.getAdminPrincipal();
        setIsAdminInitialized(!!adminPrincipal);
      } catch {
        setIsAdminInitialized(false);
      }
    }
    checkAdmin();
  }, [actor]);
  const handleInitAdmin = async () => {
    if (!actor || !principalText) return;
    setIsInitializing(true);
    try {
      await actor.initAdmin();
      ue.success("Admin initialized successfully");
      setIsAdminInitialized(true);
    } catch (err) {
      ue.error(`Failed to initialize admin: ${String(err)}`);
    } finally {
      setIsInitializing(false);
    }
  };
  const tabs = [
    { key: "bookings", label: "Bookings", icon: Calendar },
    { key: "guides", label: "Guides", icon: Users },
    { key: "batches", label: "Batches", icon: Calendar },
    { key: "waitlists", label: "Waitlists", icon: ListOrdered },
    { key: "announcements", label: "Announcements", icon: Megaphone }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-[#E6D8C4] bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-[#F88379]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-[#1A1A1A]", children: "Admin Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#7A7A7A]", children: "Shail Hikers Management" })
        ] })
      ] }),
      isAdminInitialized === false && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleInitAdmin,
          disabled: isInitializing,
          className: "bg-[#F88379] text-white hover:bg-[#D9604F]",
          "data-ocid": "admin.init_admin_button",
          children: [
            isInitializing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "mr-2 h-4 w-4" }),
            "Initialize Admin"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex overflow-x-auto border-b border-[#E6D8C4] lg:hidden", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab(tab.key),
          className: `flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.key ? "border-[#F88379] text-[#F88379]" : "border-transparent text-[#7A7A7A] hover:text-[#1A1A1A]"}`,
          "data-ocid": `admin.tab.${tab.key}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "h-4 w-4" }),
            tab.label
          ]
        },
        tab.key
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden w-[200px] shrink-0 lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(tab.key),
            className: `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${activeTab === tab.key ? "bg-[#F5EEE4] text-[#F88379]" : "text-[#4A4A4A] hover:bg-[#F5EEE4] hover:text-[#1A1A1A]"}`,
            "data-ocid": `admin.sidebar.${tab.key}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "h-4 w-4" }),
              tab.label,
              tab.key === "waitlists" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-[#F88379] text-white", children: MOCK_WAITLIST.length })
            ]
          },
          tab.key
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 flex-1", children: [
          activeTab === "bookings" && /* @__PURE__ */ jsxRuntimeExports.jsx(BookingsTab, {}),
          activeTab === "guides" && /* @__PURE__ */ jsxRuntimeExports.jsx(GuidesTab, {}),
          activeTab === "batches" && /* @__PURE__ */ jsxRuntimeExports.jsx(BatchesTab, {}),
          activeTab === "waitlists" && /* @__PURE__ */ jsxRuntimeExports.jsx(WaitlistsTab, {}),
          activeTab === "announcements" && /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementsTab, {})
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminPage as default
};
