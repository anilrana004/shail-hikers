import { DIFFICULTY_COLORS } from "@/data/treks";
import type { Trek } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Heart,
  MapPin,
  Mountain,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

// Sample elevation sparkline data per trek
function getElevationData(maxAlt: number): { alt: number }[] {
  const peak = maxAlt;
  return [
    { alt: maxAlt * 0.3 },
    { alt: maxAlt * 0.42 },
    { alt: maxAlt * 0.55 },
    { alt: maxAlt * 0.67 },
    { alt: maxAlt * 0.8 },
    { alt: peak * 0.92 },
    { alt: peak },
    { alt: peak * 0.85 },
    { alt: peak * 0.6 },
    { alt: peak * 0.35 },
  ];
}

interface TrekCardProps {
  trek: Trek;
  index: number;
}

export function TrekCard({ trek, index }: TrekCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const elevData = getElevationData(trek.maxAltitude);
  const diffColor = DIFFICULTY_COLORS[trek.difficulty] ?? "#D4A843";
  const seatsColor =
    (trek.seatsAvailable ?? 10) <= 3
      ? "#F88379"
      : (trek.seatsAvailable ?? 10) <= 7
        ? "#D4A843"
        : "#2D6A4F";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      data-ocid={`treks.card.${index + 1}`}
      className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        width: "300px",
        minWidth: "300px",
        height: "420px",
        border: "1px solid rgba(248,131,121,0.2)",
        boxShadow: hovered
          ? "0 24px 60px rgba(248,131,121,0.25)"
          : "0 4px 24px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={trek.heroImage}
          alt={`${trek.name} Himalayan trek landscape`}
          className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out"
          style={{ transform: hovered ? "scale(1.12)" : "scale(1.0)" }}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,14,16,0) 30%, rgba(255,255,255,0.85) 65%, rgba(26,14,16,0.97) 100%)",
          }}
        />
      </div>

      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: `${diffColor}33`,
              border: `1px solid ${diffColor}66`,
              color: diffColor,
            }}
          >
            {trek.difficulty}
          </span>
          {trek.slug === "valley-of-flowers" && (
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{
                background: "rgba(201,168,76,0.25)",
                border: "1px solid #D4A84366",
                color: "#D4A843",
              }}
            >
              UNESCO
            </span>
          )}
        </div>
        <button
          type="button"
          data-ocid={`treks.wishlist.${index + 1}`}
          onClick={(e) => {
            e.preventDefault();
            setWishlisted(!wishlisted);
          }}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(248,131,121,0.3)",
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={14}
            style={{
              color: wishlisted ? "#F88379" : "#1A1A1A80",
              fill: wishlisted ? "#F88379" : "transparent",
            }}
          />
        </button>
      </div>

      {/* Availability */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: `1px solid ${seatsColor}44`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
            style={{ background: seatsColor }}
          />
          <span
            className="text-[10px] font-medium"
            style={{ color: seatsColor }}
          >
            {trek.seatsAvailable} seats
          </span>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {/* Elevation sparkline */}
        <div className="mb-3 h-12 opacity-70">
          <ResponsiveContainer width="100%" height={48}>
            <AreaChart
              data={elevData}
              margin={{ top: 2, right: 0, left: 0, bottom: 0 }}
            >
              <Area
                type="monotone"
                dataKey="alt"
                stroke="#F88379"
                strokeWidth={1.5}
                fill="rgba(248,131,121,0.2)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <h3
          className="text-lg font-semibold mb-1 leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "#1A1A1A" }}
        >
          {trek.name}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: "#4A4A4A" }}
          >
            <Clock size={11} /> {trek.durationDays}D/{trek.durationNights}N
          </span>
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: "#4A4A4A" }}
          >
            <Mountain size={11} /> {trek.maxAltitude.toLocaleString()} ft
          </span>
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: "#4A4A4A" }}
          >
            <MapPin size={11} /> {trek.startingPoint.split(",")[0]}
          </span>
        </div>

        {/* Social proof */}
        {trek.completedThisMonth && (
          <p className="text-[10px] mb-2" style={{ color: "#4A4A4A70" }}>
            <Users size={9} className="inline mr-1" />
            {trek.completedThisMonth} trekkers this month
          </p>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span
              className="text-[10px] uppercase tracking-wider"
              style={{ color: "#4A4A4A60" }}
            >
              From
            </span>
            <p
              className="text-lg font-bold"
              style={{ color: "#D4A843", fontFamily: "var(--font-display)" }}
            >
              ₹{trek.basePrice.toLocaleString()}
            </p>
          </div>

          {/* Guide hover chip */}
          <div
            className="flex items-center gap-2 transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(6px)",
            }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
              style={{ background: "#F88379", color: "#1A1A1A" }}
            >
              D
            </div>
            <span className="text-[10px]" style={{ color: "#4A4A4A" }}>
              Guide: Deepak
            </span>
          </div>

          <Link
            to="/treks/$slug"
            params={{ slug: trek.slug }}
            data-ocid={`treks.explore.${index + 1}`}
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-all hover:gap-2"
            style={{ color: "#F88379" }}
            onClick={(e) => e.stopPropagation()}
          >
            Explore <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
