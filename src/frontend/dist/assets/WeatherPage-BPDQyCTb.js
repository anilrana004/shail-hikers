import { N as useParams, t as jsxRuntimeExports } from "./index-CqRCuDMS.js";
function WeatherPage() {
  const { slug } = useParams({ from: "/weather/$slug" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        color: "#FAD4D8",
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
