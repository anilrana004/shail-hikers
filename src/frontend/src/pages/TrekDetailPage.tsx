import TrekSidebar from "@/components/TrekSidebar";
import TrekTabs from "@/components/TrekTabs";
import { TREKS } from "@/data/treks";
import type { TrekData } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";

function getTrekData(slug: string): TrekData | null {
  const trek = TREKS.find((t) => t.slug === slug);
  if (!trek) return null;
  return {
    ...trek,
    highlights: [],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    faqs: [],
    gearList: { mandatory: [], recommended: [], rental: [] },
    permits: [],
    flora: [],
    fauna: [],
    uniqueFeatures: [],
    didYouKnow: "",
    nearestAttractions: [],
    fitnessLevel: 5,
    minAge: 12,
    maxAge: 65,
    galleryImages: [],
  };
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "#2D6A4F",
  Moderate: "#D4A843",
  Difficult: "#F88379",
  Extreme: "#8B0000",
};

export default function TrekDetailPage() {
  const { slug } = useParams({ from: "/treks/$slug" });
  const trek = getTrekData(slug);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!trek) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{ background: "#E6D8C4", color: "#1A1A1A" }}
      >
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Trek Not Found
        </h1>
        <p className="mb-8" style={{ color: "#4A4A4A" }}>
          We couldn't find the trek you're looking for.
        </p>
        <Link
          to="/treks"
          className="px-6 py-3 rounded-xl"
          style={{ background: "#F88379", color: "#1A1A1A" }}
        >
          View All Treks
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#E6D8C4", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div className="px-4 md:px-8 py-3 text-sm" style={{ color: "#4A4A4A" }}>
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/treks" className="hover:underline">
          Treks
        </Link>
        <span className="mx-2">/</span>
        <span style={{ color: "#1A1A1A" }}>{trek.name}</span>
      </div>

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={trek.heroImage}
          alt={trek.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.55)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, #E6D8C4 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-12 pb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{
              background: DIFFICULTY_COLORS[trek.difficulty] ?? "#F88379",
              color: "#1A1A1A",
            }}
          >
            {trek.difficulty}
          </div>
          <h1
            className="text-4xl md:text-7xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-display)",
              color: "#1A1A1A",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            {trek.name}
          </h1>
          <p
            className="text-lg md:text-xl mb-6"
            style={{
              fontFamily: "var(--font-accent, var(--font-display))",
              color: "#4A4A4A",
            }}
          >
            {trek.tagline}
          </p>
          {/* Quick stats */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              {
                label: "Duration",
                value: `${trek.durationDays}D / ${trek.durationNights}N`,
              },
              {
                label: "Max Altitude",
                value: `${trek.maxAltitude.toLocaleString()} ft`,
              },
              { label: "Distance", value: `${trek.trekDistance} km` },
              { label: "Best Time", value: trek.bestTime },
              { label: "Start", value: trek.startingPoint },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-4 py-2 text-sm"
                style={{
                  background: "rgba(45,27,30,0.75)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(232,160,170,0.2)",
                  color: "#1A1A1A",
                }}
              >
                <span
                  style={{
                    color: "#4A4A4A",
                    fontSize: "0.7rem",
                    display: "block",
                  }}
                >
                  {s.label}
                </span>
                <span className="font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
          {/* Live chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            {trek.seatsAvailable !== undefined && (
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background:
                    trek.seatsAvailable <= 3
                      ? "rgba(248,131,121,0.3)"
                      : "rgba(45,80,22,0.4)",
                  color: trek.seatsAvailable <= 3 ? "#F88379" : "#A8D080",
                  border: `1px solid ${trek.seatsAvailable <= 3 ? "#F8837955" : "#2D6A4F44"}`,
                }}
              >
                🪑 {trek.seatsAvailable} Seats Left
              </span>
            )}
            {trek.rating && (
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(201,168,76,0.2)",
                  color: "#D4A843",
                  border: "1px solid #D4A84344",
                }}
              >
                ⭐ {trek.rating}/5 ({trek.reviewCount} reviews)
              </span>
            )}
            {trek.completedThisMonth && (
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(168,197,218,0.15)",
                  color: "#82C8E5",
                  border: "1px solid #82C8E533",
                }}
              >
                👥 {trek.completedThisMonth} trekkers this month
              </span>
            )}
          </div>
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/book/$slug"
              params={{ slug: trek.slug }}
              data-ocid="trek.book_button"
              className="px-8 py-3.5 rounded-xl font-semibold text-base transition-opacity hover:opacity-90"
              style={{ background: "#F88379", color: "#1A1A1A" }}
            >
              Book This Trek — ₹{trek.basePrice.toLocaleString()}
            </Link>
            <a
              href={`/assets/itinerary-${trek.slug}.pdf`}
              data-ocid="trek.download_itinerary_button"
              className="px-8 py-3.5 rounded-xl font-semibold text-base border transition-colors hover:bg-white/5"
              style={{ borderColor: "#4A4A4A55", color: "#4A4A4A" }}
            >
              Download Itinerary PDF
            </a>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div
        className="border-y overflow-x-auto"
        style={{ background: "#FFFFFF", borderColor: "#4A4A4A22" }}
      >
        <div className="flex gap-6 px-6 py-3 min-w-max">
          {[
            "ITBP-Certified Guides",
            "All Meals Included",
            "Premium Camping Gear",
            "High-Altitude Medical Kit",
            "Pickup/Drop Dehradun",
            "₹10L Group Insurance",
            "GPS Tracking Active",
            "24/7 Emergency Support",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-xs whitespace-nowrap"
              style={{ color: "#4A4A4A" }}
            >
              <span style={{ color: "#2D6A4F" }}>✔</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs — main content */}
          <div className="flex-1 min-w-0">
            <TrekTabs trek={trek} />
          </div>
          {/* Sidebar — desktop only */}
          <div className="hidden lg:block w-80 shrink-0">
            <TrekSidebar trek={trek} />
          </div>
        </div>
      </div>

      {/* Sticky bottom bar — mobile */}
      {showStickyBar && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 lg:hidden"
          style={{
            background: "rgba(45,27,30,0.97)",
            borderTop: "1px solid #4A4A4A33",
          }}
        >
          <div>
            <div className="text-xs" style={{ color: "#4A4A4A" }}>
              From
            </div>
            <div className="font-bold" style={{ color: "#D4A843" }}>
              ₹{trek.basePrice.toLocaleString()}
            </div>
          </div>
          {trek.seatsAvailable !== undefined && (
            <div
              className="text-xs"
              style={{
                color: trek.seatsAvailable <= 3 ? "#F88379" : "#4A4A4A",
              }}
            >
              {trek.seatsAvailable} seats left
            </div>
          )}
          <Link
            to="/book/$slug"
            params={{ slug: trek.slug }}
            data-ocid="trek.mobile_book_button"
            className="px-6 py-2.5 rounded-xl font-semibold text-sm"
            style={{ background: "#F88379", color: "#1A1A1A" }}
          >
            Book Now
          </Link>
        </div>
      )}
    </div>
  );
}
