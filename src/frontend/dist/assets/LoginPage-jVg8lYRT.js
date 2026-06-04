import { _ as useInternetIdentity, K as useActor, x as useNavigate, j as reactExports, t as jsxRuntimeExports, O as createActor } from "./index-CMVflWSo.js";
function LoginPage() {
  const { login, loginStatus, isAuthenticated, identity } = useInternetIdentity();
  const { actor } = useActor(createActor);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (isAuthenticated && actor && identity) {
      actor.createOrUpdateProfile("", "", "", "").catch(() => null).finally(() => {
        navigate({ to: "/dashboard" });
      });
    }
  }, [isAuthenticated, actor, identity, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-screen flex flex-col items-center justify-center px-4 py-12",
      style: { background: "#FFFFFF" },
      "data-ocid": "login.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full max-w-md rounded-2xl overflow-hidden",
          style: {
            background: "#E6D8C4",
            border: "1px solid rgba(248,131,121,0.25)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&auto=format",
                alt: "Himalayan mountain peak at golden hour",
                className: "w-full object-cover",
                style: { height: 220 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-4xl font-semibold mb-2",
                  style: { fontFamily: "var(--font-display)", color: "#1A1A1A" },
                  children: "Welcome Back"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm mb-8",
                  style: { color: "#4A4A4A", fontFamily: "var(--font-body)" },
                  children: "Sign in to manage your trek bookings"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => login(),
                  disabled: loginStatus === "logging-in" || loginStatus === "initializing",
                  className: "w-full py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-3 hover:opacity-90 disabled:opacity-70",
                  style: {
                    background: "#F88379",
                    color: "#fff",
                    fontFamily: "var(--font-body)"
                  },
                  "data-ocid": "login.submit_button",
                  children: loginStatus === "logging-in" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-5 h-5 rounded-full border-2 border-t-transparent animate-spin flex-shrink-0",
                        style: { borderColor: "#fff", borderTopColor: "transparent" }
                      }
                    ),
                    "Signing in..."
                  ] }) : "Sign in with Internet Identity"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "mt-6 text-sm text-center leading-relaxed",
                  style: { color: "#82C8E5" },
                  children: "Internet Identity is a secure, passwordless login — no passwords or personal data shared."
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
export {
  LoginPage as default
};
