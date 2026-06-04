import type { TrekData } from "@/types";
import { useState } from "react";

interface Props {
  trek: TrekData;
}

export default function TrekSidebar({ trek }: Props) {
  const [groupSize, setGroupSize] = useState(2);
  const [addPorter, setAddPorter] = useState(false);
  const [addInsurance, setAddInsurance] = useState(false);

  const basePrice =
    groupSize === 1
      ? Math.round(trek.basePrice * 1.15)
      : groupSize >= 9
        ? Math.round(trek.basePrice * 0.9)
        : groupSize >= 5
          ? Math.round(trek.basePrice * 0.95)
          : trek.basePrice;
  const extras =
    (addPorter ? 800 * trek.durationDays : 0) + (addInsurance ? 299 : 0);
  const total = (basePrice + extras) * groupSize;

  return (
    <div
      className="sticky top-24 rounded-2xl border p-6 space-y-5"
      style={{ background: "rgba(255,255,255,0.95)", borderColor: "#4A4A4A33" }}
    >
      <div>
        <div className="text-xs mb-1" style={{ color: "#4A4A4A" }}>
          Starting from
        </div>
        <div className="text-3xl font-bold" style={{ color: "#D4A843" }}>
          Rs.{trek.basePrice.toLocaleString()}
        </div>
        <div className="text-xs" style={{ color: "#4A4A4A" }}>
          per person
        </div>
      </div>

      <div
        className="rounded-xl p-3"
        style={{
          background: "rgba(248,131,121,0.15)",
          border: "1px solid #F8837944",
        }}
      >
        <div className="text-xs mb-1" style={{ color: "#4A4A4A" }}>
          Next batch
        </div>
        <div className="font-semibold text-sm" style={{ color: "#1A1A1A" }}>
          Jan 15, 2025
        </div>
        <div
          className="text-xs"
          style={{
            color:
              trek.seatsAvailable && trek.seatsAvailable <= 3
                ? "#F88379"
                : "#4A7C2F",
          }}
        >
          {trek.seatsAvailable} seats remaining
        </div>
      </div>

      <div>
        <div className="text-xs mb-2" style={{ color: "#4A4A4A" }}>
          Group Size: {groupSize}
        </div>
        <input
          type="range"
          min={1}
          max={20}
          value={groupSize}
          onChange={(e) => setGroupSize(Number(e.target.value))}
          className="w-full accent-[#F88379]"
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={addPorter}
            onChange={(e) => setAddPorter(e.target.checked)}
            className="accent-[#F88379]"
          />
          <span className="text-sm" style={{ color: "#1A1A1A" }}>
            Porter hire (+Rs.800/day)
          </span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={addInsurance}
            onChange={(e) => setAddInsurance(e.target.checked)}
            className="accent-[#F88379]"
          />
          <span className="text-sm" style={{ color: "#1A1A1A" }}>
            Insurance upgrade (+Rs.299)
          </span>
        </label>
      </div>

      <div
        className="rounded-xl p-3"
        style={{ background: "rgba(255,255,255,0.9)" }}
      >
        <div className="flex justify-between text-sm mb-1">
          <span style={{ color: "#4A4A4A" }}>
            Rs.{(basePrice + extras).toLocaleString()} x {groupSize}
          </span>
          <span style={{ color: "#1A1A1A" }}>Rs.{total.toLocaleString()}</span>
        </div>
        <div className="text-xs" style={{ color: "#4A4A4A" }}>
          Incl. taxes & permits
        </div>
      </div>

      <a
        href={`/book/${trek.slug}`}
        data-ocid="trek.book_now_button"
        className="block w-full text-center py-3.5 rounded-xl font-semibold"
        style={{ background: "#F88379", color: "#1A1A1A" }}
      >
        Book Now
      </a>

      <a
        href="https://wa.me/918279888470"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 rounded-xl text-sm border"
        style={{ borderColor: "#4A4A4A44", color: "#4A4A4A" }}
      >
        WhatsApp Us
      </a>

      <div
        className="flex items-center gap-3 p-3 rounded-xl"
        style={{ background: "rgba(255,255,255,0.8)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: "#F88379" }}
        >
          <span style={{ color: "#1A1A1A" }}>D</span>
        </div>
        <div>
          <div className="text-xs" style={{ color: "#4A4A4A" }}>
            Your Guide
          </div>
          <div className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
            Deepak Singh
          </div>
          <div className="text-xs" style={{ color: "#D4A843" }}>
            4.9 / 5 from 142 treks
          </div>
        </div>
      </div>
    </div>
  );
}
