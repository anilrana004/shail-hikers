import { Z as useInternetIdentity, a1 as useSearch, j as reactExports, t as jsxRuntimeExports, F as Layout, w as motion, L as Link, a2 as House, B as Mountain, U as Users } from "./index-CqRCuDMS.js";
import { d as useBooking, e as useConfirmPayment } from "./useBookings-D32VhHZ1.js";
import { C as CircleCheckBig } from "./circle-check-big-DhTWzk61.js";
import { C as Calendar } from "./calendar-Dr446uwV.js";
import { A as ArrowRight } from "./arrow-right-CfgY8QBM.js";
import { D as Download } from "./download-Cedm73LK.js";
import "./backend-CurMeBAW.js";
function useAuthStatus() {
  const { isAuthenticated, identity, loginStatus, login, clear } = useInternetIdentity();
  const isLoading = loginStatus === "initializing" || loginStatus === "logging-in";
  const principal = isAuthenticated && identity ? identity.getPrincipal() : null;
  const principalText = principal ? principal.toText() : null;
  return {
    isAuthenticated,
    isLoading,
    login,
    logout: clear,
    principal,
    principalText
  };
}
function PaymentSuccessPage() {
  const search = useSearch({ from: "/payment-success" });
  const { isAuthenticated } = useAuthStatus();
  const [confetti, setConfetti] = reactExports.useState([]);
  const bookingId = search.bookingId ? BigInt(search.bookingId) : null;
  const sessionId = search.session_id || "";
  const { data: booking, isLoading: bookingLoading } = useBooking(bookingId);
  const confirmPayment = useConfirmPayment();
  reactExports.useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      color: ["#FAD4D8", "#E8A0AA", "#B5525E", "#C9A84C", "#A8C5DA"][Math.floor(Math.random() * 5)]
    }));
    setConfetti(pieces);
  }, []);
  reactExports.useEffect(() => {
    if (bookingId && sessionId && !confirmPayment.isPending && !confirmPayment.isSuccess && !confirmPayment.isError) {
      confirmPayment.mutate({ bookingId, paymentId: sessionId });
    }
  }, [
    bookingId,
    sessionId,
    confirmPayment.isPending,
    confirmPayment.isSuccess,
    confirmPayment.isError,
    confirmPayment.mutate
  ]);
  const isLoading = bookingLoading || confirmPayment.isPending;
  const isError = confirmPayment.isError;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none overflow-hidden z-50", children: confetti.map((piece) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute w-2 h-2 rounded-full",
        style: {
          left: `${piece.left}%`,
          backgroundColor: piece.color,
          top: -10
        },
        animate: {
          y: [0, window.innerHeight + 100],
          rotate: [0, 720],
          opacity: [1, 1, 0]
        },
        transition: {
          duration: piece.duration,
          delay: piece.delay,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY
        }
      },
      piece.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center px-4 py-16",
        style: {
          background: "linear-gradient(135deg, #1A0E10 0%, #2D1B1E 50%, #1A0E10 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.6, ease: "easeOut" },
            className: "max-w-lg w-full rounded-2xl p-8 md:p-10 text-center",
            style: {
              background: "rgba(45,27,30,0.9)",
              border: "1px solid rgba(250,212,216,0.15)"
            },
            children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { rotate: 360 },
                  transition: {
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                  },
                  className: "w-12 h-12 rounded-full border-2 border-t-transparent mx-auto mb-4",
                  style: {
                    borderColor: "#FAD4D8",
                    borderTopColor: "transparent"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body", style: { color: "#E8A0AA" }, children: "Confirming your booking..." })
            ] }) : isError ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center",
                  style: { background: "rgba(181,82,94,0.2)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "⚠️" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-2xl md:text-3xl mb-3",
                  style: { color: "#FAD4D8" },
                  children: "Payment Received"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body mb-2", style: { color: "#E8A0AA" }, children: "Your payment was successful, but we had trouble confirming it in our system." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm mb-6",
                  style: { color: "#E8A0AA", opacity: 0.7 },
                  children: confirmPayment.error instanceof Error ? confirmPayment.error.message : "Please contact support with your booking reference."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm transition-all duration-200 hover:opacity-90",
                    style: { background: "#B5525E", color: "#FAD4D8" },
                    "data-ocid": "payment.contact_support_button",
                    children: "Contact Support"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/dashboard",
                    className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm transition-all duration-200 hover:opacity-90",
                    style: {
                      background: "rgba(250,212,216,0.1)",
                      color: "#FAD4D8",
                      border: "1px solid rgba(250,212,216,0.2)"
                    },
                    "data-ocid": "payment.go_to_dashboard_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 16 }),
                      "Go to Dashboard"
                    ]
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
                    background: "rgba(45,80,22,0.3)",
                    border: "2px solid #2D5016"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 40, style: { color: "#2D5016" } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.h1,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  className: "font-display text-2xl md:text-3xl mb-3",
                  style: { color: "#FAD4D8" },
                  children: "Booking Confirmed!"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className: "font-body mb-6",
                  style: { color: "#E8A0AA" },
                  children: "Your Himalayan adventure is officially booked. We have sent a confirmation to your email with all the details."
                }
              ),
              booking && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  className: "rounded-xl p-5 mb-6 text-left",
                  style: {
                    background: "rgba(26,14,16,0.6)",
                    border: "1px solid rgba(250,212,216,0.1)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 mb-4 pb-4",
                        style: { borderBottom: "1px solid rgba(250,212,216,0.1)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { size: 20, style: { color: "#B5525E" } }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "font-display text-lg",
                              style: { color: "#FAD4D8" },
                              children: [
                                "Booking #",
                                booking.id.toString()
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16, style: { color: "#E8A0AA" } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "font-body text-sm",
                            style: { color: "#E8A0AA" },
                            children: [
                              "Trek:",
                              " ",
                              booking.trekSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16, style: { color: "#E8A0AA" } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "font-body text-sm",
                            style: { color: "#E8A0AA" },
                            children: [
                              "Travelers: ",
                              booking.travelers.length
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "font-body text-sm",
                          style: { color: "#C9A84C" },
                          children: [
                            "Total Paid: ₹",
                            Number(booking.totalAmount).toLocaleString("en-IN")
                          ]
                        }
                      ) })
                    ] })
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
                      Link,
                      {
                        to: "/dashboard",
                        className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm transition-all duration-200 hover:opacity-90",
                        style: { background: "#B5525E", color: "#FAD4D8" },
                        "data-ocid": "payment.go_to_dashboard_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 16 }),
                          "Go to Dashboard",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => window.print(),
                        className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm transition-all duration-200 hover:opacity-90",
                        style: {
                          background: "rgba(250,212,216,0.1)",
                          color: "#FAD4D8",
                          border: "1px solid rgba(250,212,216,0.2)"
                        },
                        "data-ocid": "payment.download_receipt_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
                          "Download Receipt"
                        ]
                      }
                    )
                  ]
                }
              ),
              !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.8 },
                  className: "mt-6 text-sm font-body",
                  style: { color: "#E8A0AA", opacity: 0.7 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/auth/login",
                        className: "underline hover:opacity-80",
                        style: { color: "#FAD4D8" },
                        children: "Create an account"
                      }
                    ),
                    " ",
                    "to manage your bookings and earn loyalty rewards."
                  ]
                }
              )
            ] })
          }
        )
      }
    )
  ] });
}
export {
  PaymentSuccessPage as default
};
