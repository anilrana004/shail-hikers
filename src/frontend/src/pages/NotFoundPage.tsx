import { Link } from "@tanstack/react-router";
export default function NotFoundPage() {
  return (
    <div
      style={{
        color: "#1A1A1A",
        padding: "6rem 2rem",
        textAlign: "center",
        background: "#E6D8C4",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "6rem",
          color: "#F88379",
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
      <p style={{ color: "#4A4A4A", marginTop: "0.5rem", fontSize: "0.9rem" }}>
        The trail you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          background: "#F88379",
          color: "#1A1A1A",
          borderRadius: "0.5rem",
          fontWeight: 600,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
