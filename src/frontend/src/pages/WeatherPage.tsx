import { useParams } from "@tanstack/react-router";
export default function WeatherPage() {
  const { slug } = useParams({ from: "/weather/$slug" });
  return (
    <div
      style={{
        color: "#1A1A1A",
        padding: "4rem 2rem",
        fontFamily: "var(--font-display)",
        fontSize: "2rem",
      }}
    >
      Weather: {slug}
    </div>
  );
}
