import { c as createLucideIcon, j as reactExports, t as jsxRuntimeExports, F as Layout, w as motion, D as MapPin, Y as Mail, W as Phone, C as Clock, I as Instagram, _ as Facebook, $ as Youtube, a0 as MessageCircle } from "./index-CqRCuDMS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const interests = [
  "Kedarkantha",
  "Har Ki Dun",
  "Valley of Flowers",
  "Rupin Pass",
  "Buran Ghati",
  "Dayara Bugyal",
  "All Treks",
  "Corporate Booking",
  "Chardham Yatra",
  "Do Dham Yatra",
  "Other"
];
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    dates: "",
    groupSize: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  const fieldStyle = {
    width: "100%",
    background: "#2D1B1E",
    border: "1px solid rgba(232,160,170,0.25)",
    color: "#FAD4D8",
    borderRadius: 8,
    padding: "0.65rem 0.875rem",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem"
  };
  const labelStyle = {
    color: "#E8A0AA",
    fontFamily: "var(--font-body)",
    fontSize: "0.8rem",
    display: "block",
    marginBottom: 6
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#2D1B1E", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "pt-24 pb-8 text-center px-4",
        style: { background: "#1A0E10" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                color: "#FAD4D8",
                fontWeight: 700,
                letterSpacing: "0.04em"
              },
              children: "GET IN TOUCH"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.3, duration: 0.5 },
              style: {
                color: "#E8A0AA",
                fontFamily: "var(--font-body)",
                marginTop: "0.75rem",
                fontSize: "1rem"
              },
              children: "We’re available Mon–Sun, 7AM to 10PM. Questions, bookings, or just curious — we love hearing from trekkers."
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "#2D5016",
          textAlign: "center",
          padding: "0.6rem"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            style: {
              color: "#FAD4D8",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem"
            },
            children: [
              "⚡ Expected response time: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "< 4 hours avg" }),
              " · Mon–Sun 7AM–10PM"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col lg:flex-row gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "lg:w-[60%]",
          children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className: "h-full flex flex-col items-center justify-center p-12 rounded-2xl text-center",
              style: {
                background: "#1A0E10",
                border: "1px solid rgba(181,82,94,0.3)",
                minHeight: 400
              },
              "data-ocid": "contact.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "🏔️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      color: "#FAD4D8",
                      fontWeight: 700,
                      marginBottom: "0.75rem"
                    },
                    children: "Thanks! Message Received."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    style: {
                      color: "#E8A0AA",
                      fontFamily: "var(--font-body)",
                      lineHeight: 1.7,
                      maxWidth: 380
                    },
                    children: [
                      "We’ll reply within 4 hours. Meanwhile, feel free to WhatsApp us directly at",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#FAD4D8" }, children: "+91-8279888470" }),
                      " ",
                      "for instant support."
                    ]
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "rounded-2xl p-8 flex flex-col gap-5",
              style: {
                background: "#1A0E10",
                border: "1px solid rgba(232,160,170,0.12)"
              },
              "data-ocid": "contact.form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      color: "#FAD4D8",
                      fontWeight: 700,
                      marginBottom: "0.5rem"
                    },
                    children: "Send Us a Message"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-name", style: labelStyle, children: "Your Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-name",
                        required: true,
                        type: "text",
                        placeholder: "Full name",
                        value: form.name,
                        onChange: (e) => setForm((s) => ({ ...s, name: e.target.value })),
                        style: fieldStyle,
                        "data-ocid": "contact.name_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-email", style: labelStyle, children: "Email Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-email",
                        required: true,
                        type: "email",
                        placeholder: "your@email.com",
                        value: form.email,
                        onChange: (e) => setForm((s) => ({ ...s, email: e.target.value })),
                        style: fieldStyle,
                        "data-ocid": "contact.email_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-phone", style: labelStyle, children: "Phone Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-phone",
                        type: "tel",
                        placeholder: "+91 XXXXX XXXXX",
                        value: form.phone,
                        onChange: (e) => setForm((s) => ({ ...s, phone: e.target.value })),
                        style: fieldStyle,
                        "data-ocid": "contact.phone_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-interest", style: labelStyle, children: "Interested In" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "contact-interest",
                        value: form.interest,
                        onChange: (e) => setForm((s) => ({ ...s, interest: e.target.value })),
                        style: fieldStyle,
                        "data-ocid": "contact.interest_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a trek / package" }),
                          interests.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: i, children: i }, i))
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-dates", style: labelStyle, children: "Preferred Dates" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-dates",
                        type: "text",
                        placeholder: "e.g. January 2025",
                        value: form.dates,
                        onChange: (e) => setForm((s) => ({ ...s, dates: e.target.value })),
                        style: fieldStyle,
                        "data-ocid": "contact.dates_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-groupSize", style: labelStyle, children: "Group Size" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-groupSize",
                        type: "number",
                        placeholder: "Number of people",
                        min: "1",
                        value: form.groupSize,
                        onChange: (e) => setForm((s) => ({ ...s, groupSize: e.target.value })),
                        style: fieldStyle,
                        "data-ocid": "contact.group_size_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-message", style: labelStyle, children: "Your Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "contact-message",
                      rows: 4,
                      placeholder: "Tell us about your dream trek, group, fitness level, or any questions...",
                      value: form.message,
                      onChange: (e) => setForm((s) => ({ ...s, message: e.target.value })),
                      style: { ...fieldStyle, resize: "vertical" },
                      "data-ocid": "contact.message_textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    "data-ocid": "contact.submit_button",
                    style: {
                      background: "#B5525E",
                      color: "#FAD4D8",
                      border: "none",
                      padding: "0.875rem 2.5rem",
                      borderRadius: 999,
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "1rem",
                      cursor: "pointer",
                      alignSelf: "flex-start"
                    },
                    children: "Send Message →"
                  }
                )
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "lg:w-[40%] flex flex-col gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-6",
                style: {
                  background: "#1A0E10",
                  border: "1px solid rgba(232,160,170,0.12)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "1.375rem",
                        color: "#FAD4D8",
                        fontWeight: 700,
                        marginBottom: "1.25rem"
                      },
                      children: "Contact Information"
                    }
                  ),
                  [
                    {
                      icon: MapPin,
                      text: "Rajpur Road, Dehradun, Uttarakhand — 248001",
                      label: "Address"
                    },
                    { icon: Mail, text: "Shailhikers@gmail.com", label: "Email" },
                    { icon: Phone, text: "+91-8279888470", label: "Phone" },
                    {
                      icon: Clock,
                      text: "Monday – Sunday, 7:00 AM – 10:00 PM",
                      label: "Hours"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      item.icon,
                      {
                        className: "w-5 h-5 mt-0.5 flex-shrink-0",
                        style: { color: "#B5525E" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            color: "#E8A0AA",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.75rem",
                            marginBottom: 2
                          },
                          children: item.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            color: "#FAD4D8",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem"
                          },
                          children: item.text
                        }
                      )
                    ] })
                  ] }, item.label)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex gap-3 mt-5 pt-5",
                      style: { borderTop: "1px solid rgba(232,160,170,0.12)" },
                      children: [
                        {
                          icon: Instagram,
                          label: "Instagram",
                          href: "#",
                          color: "#E8A0AA"
                        },
                        {
                          icon: Facebook,
                          label: "Facebook",
                          href: "#",
                          color: "#A8C5DA"
                        },
                        {
                          icon: Youtube,
                          label: "YouTube",
                          href: "#",
                          color: "#B5525E"
                        },
                        {
                          icon: MessageCircle,
                          label: "WhatsApp",
                          href: "https://wa.me/918279888470",
                          color: "#2D5016"
                        }
                      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: s.href,
                          "aria-label": s.label,
                          "data-ocid": `contact.social_${s.label.toLowerCase()}_link`,
                          style: {
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#2D1B1E",
                            border: "1px solid rgba(232,160,170,0.2)",
                            color: s.color,
                            transition: "background 0.2s"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-4.5 h-4.5" })
                        },
                        s.label
                      ))
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl overflow-hidden",
                style: { border: "1px solid rgba(232,160,170,0.12)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop&q=80",
                      alt: "Aerial view of Uttarakhand mountains — Shail Hikers base location",
                      style: {
                        width: "100%",
                        height: 220,
                        objectFit: "cover",
                        display: "block"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        background: "#1A0E10",
                        padding: "0.75rem 1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4", style: { color: "#B5525E" } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              color: "#E8A0AA",
                              fontFamily: "var(--font-body)",
                              fontSize: "0.8rem"
                            },
                            children: "Dehradun, Uttarakhand, India — Gateway to the Himalayas"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-5 flex items-center gap-4",
                style: {
                  background: "#1A0E10",
                  border: "1px solid rgba(45,80,22,0.5)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#2D5016",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        MessageCircle,
                        {
                          className: "w-5 h-5",
                          style: { color: "#FAD4D8" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          color: "#FAD4D8",
                          fontWeight: 700
                        },
                        children: "Chat with us on WhatsApp"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          color: "#E8A0AA",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8rem",
                          marginTop: 2
                        },
                        children: "Typically replies in under 2 hours"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://wa.me/918279888470",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "contact.whatsapp_chat_button",
                      style: {
                        marginLeft: "auto",
                        background: "#2D5016",
                        color: "#FAD4D8",
                        padding: "0.5rem 1.25rem",
                        borderRadius: 999,
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        flexShrink: 0
                      },
                      children: "Chat Now"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.55 },
        className: "max-w-3xl mx-auto rounded-2xl overflow-hidden",
        style: {
          border: "2px solid #B5525E",
          boxShadow: "0 0 40px rgba(181,82,94,0.15)"
        },
        "data-ocid": "contact.emergency_box",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              background: "rgba(181,82,94,0.12)",
              padding: "1.5rem 2rem",
              display: "flex",
              alignItems: "flex-start",
              gap: 16
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TriangleAlert,
                {
                  className: "w-7 h-7 mt-0.5 flex-shrink-0",
                  style: { color: "#B5525E" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "#FAD4D8",
                      fontWeight: 700,
                      marginBottom: "0.25rem"
                    },
                    children: "Emergency Trekking Helpline"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      color: "#E8A0AA",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      marginBottom: "1rem"
                    },
                    children: "For active trek emergencies, injuries, evacuations, or safety concerns during a Shail Hikers batch."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "tel:+918279888470",
                    style: {
                      display: "inline-block",
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      color: "#FAD4D8",
                      fontWeight: 700,
                      textDecoration: "none",
                      letterSpacing: "0.04em"
                    },
                    "data-ocid": "contact.emergency_phone_link",
                    children: "+91-8279888470"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      marginTop: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#4ade80",
                            display: "inline-block"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            color: "#E8A0AA",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.8rem"
                          },
                          children: "Available 24/7 during active batches"
                        }
                      )
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ) })
  ] }) });
}
export {
  ContactPage as default
};
