import { t as jsxRuntimeExports, L as Link } from "./index-CMVflWSo.js";
function NotFoundPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        color: "#1A1A1A",
        padding: "6rem 2rem",
        textAlign: "center",
        background: "#E6D8C4"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "6rem",
              color: "#F88379",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#4A4A4A", marginTop: "0.5rem", fontSize: "0.9rem" }, children: "The trail you're looking for doesn't exist." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            style: {
              display: "inline-block",
              marginTop: "2rem",
              padding: "0.75rem 2rem",
              background: "#F88379",
              color: "#1A1A1A",
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
