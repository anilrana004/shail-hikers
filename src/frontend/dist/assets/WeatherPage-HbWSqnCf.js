import { P as useParams, t as jsxRuntimeExports } from "./index-BbOSvcvx.js";
function WeatherPage() {
  const { slug } = useParams({ from: "/weather/$slug" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        color: "#1A1A1A",
        padding: "4rem 2rem",
        fontFamily: "var(--font-display)",
        fontSize: "2rem"
      },
      children: [
        "Weather: ",
        slug
      ]
    }
  );
}
export {
  WeatherPage as default
};
