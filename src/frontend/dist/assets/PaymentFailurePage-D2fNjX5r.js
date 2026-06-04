import { c as createLucideIcon, t as jsxRuntimeExports, F as Layout, w as motion, ai as CircleHelp, L as Link, a1 as MessageCircle, aa as House } from "./index-BbOSvcvx.js";
import { R as RefreshCw } from "./refresh-cw-BcYR6PuI.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode);
function PaymentFailurePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-screen flex items-center justify-center px-4 py-16",
      style: {
        background: "linear-gradient(135deg, #E6D8C4 0%, #FFFFFF 50%, #E6D8C4 100%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "max-w-lg w-full rounded-2xl p-8 md:p-10 text-center",
          style: {
            background: "rgba(255,255,255,0.95)",
            border: "1px solid rgba(248,131,121,0.3)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2
                },
                className: "w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center",
                style: {
                  background: "rgba(248,131,121,0.2)",
                  border: "2px solid #F88379"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 40, style: { color: "#F88379" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                className: "font-display text-2xl md:text-3xl mb-3",
                style: { color: "#1A1A1A" },
                children: "Payment Failed"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4 },
                className: "font-body mb-2",
                style: { color: "#4A4A4A" },
                children: "We could not process your payment. Your booking has not been confirmed and no money was charged."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.45 },
                className: "font-body text-sm mb-6",
                style: { color: "#4A4A4A", opacity: 0.7 },
                children: "This usually happens due to a network issue, expired card, or bank decline. Please try again with a different payment method."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5 },
                className: "rounded-xl p-5 mb-6 text-left",
                style: {
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(250,212,216,0.1)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-sm mb-3",
                      style: { color: "#1A1A1A" },
                      children: "Common reasons for failure:"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                    "Insufficient funds or card limit reached",
                    "Bank declined the transaction for security",
                    "Card expired or incorrect CVV entered",
                    "Network timeout — try again with stable internet",
                    "International transactions disabled on your card"
                  ].map((reason) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2 font-body text-sm",
                      style: { color: "#4A4A4A" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CircleHelp,
                          {
                            size: 14,
                            className: "mt-0.5 shrink-0",
                            style: { color: "#F88379" }
                          }
                        ),
                        reason
                      ]
                    },
                    reason
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6 },
                className: "flex flex-col sm:flex-row gap-3 justify-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => window.history.back(),
                      className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm transition-all duration-200 hover:opacity-90",
                      style: { background: "#F88379", color: "#1A1A1A" },
                      "data-ocid": "payment.retry_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 16 }),
                        "Try Again"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm transition-all duration-200 hover:opacity-90",
                      style: {
                        background: "rgba(250,212,216,0.1)",
                        color: "#1A1A1A",
                        border: "1px solid rgba(250,212,216,0.2)"
                      },
                      "data-ocid": "payment.contact_support_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16 }),
                        "Contact Support"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/",
                      className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm transition-all duration-200 hover:opacity-90",
                      style: {
                        background: "rgba(250,212,216,0.05)",
                        color: "#4A4A4A",
                        border: "1px solid rgba(250,212,216,0.1)"
                      },
                      "data-ocid": "payment.go_home_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 16 }),
                        "Home"
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  ) });
}
export {
  PaymentFailurePage as default
};
