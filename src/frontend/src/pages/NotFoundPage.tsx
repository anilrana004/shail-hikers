import { Link } from "@tanstack/react-router";
export default function NotFoundPage() {
  return (
    <div
      style={{
        color: "#FAD4D8",
        padding: "6rem 2rem",
        textAlign: "center",
        background: "#1A0E10",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "6rem",
          color: "#B5525E",
          lineHeight: 1,
        }}
      >
        404
      </p>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          marginTop: "1rem",
        }}
      >
        Page not found
      </p>
      <p style={{ color: "#E8A0AA", marginTop: "0.5rem", fontSize: "0.9rem" }}>
        The trail you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          background: "#B5525E",
          color: "#FAD4D8",
          borderRadius: "0.5rem",
          fontWeight: 600,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
