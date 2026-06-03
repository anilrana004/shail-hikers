import { t as jsxRuntimeExports, L as Link } from "./index-CmnsDpTB.js";
function NotFoundPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        color: "#FAD4D8",
        padding: "6rem 2rem",
        textAlign: "center",
        background: "#1A0E10"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "6rem",
              color: "#B5525E",
              lineHeight: 1
            },
            children: "404"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              marginTop: "1rem"
            },
            children: "Page not found"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", marginTop: "0.5rem", fontSize: "0.9rem" }, children: "The trail you're looking for doesn't exist." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            style: {
              display: "inline-block",
              marginTop: "2rem",
              padding: "0.75rem 2rem",
              background: "#B5525E",
              color: "#FAD4D8",
              borderRadius: "0.5rem",
              fontWeight: 600
            },
            children: "Back to Home"
          }
        )
      ]
    }
  );
}
export {
  NotFoundPage as default
};
