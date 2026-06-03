import { useParams } from "@tanstack/react-router";
export default function WeatherPage() {
  const { slug } = useParams({ from: "/weather/$slug" });
  return (
    <div
      style={{
        color: "#FAD4D8",
        padding: "4rem 2rem",
        fontFamily: "var(--font-display)",
        fontSize: "2rem",
      }}
    >
      Weather: {slug}
    </div>
  );
}
