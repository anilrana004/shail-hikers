import type { TrekData } from "@/types";
import { useEffect, useRef } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  trek: TrekData;
}

export default function TrekMapTab({ trek }: Props) {
  const elevationData = trek.itinerary.map((day) => ({
    day: `Day ${day.dayNum}`,
    altitude: day.altitudeEnd,
    altitudeFt: day.altitudeEnd,
  }));

  const totalAscent = trek.itinerary.reduce((acc, d) => {
    const diff = d.altitudeEnd - d.altitudeStart;
    return acc + (diff > 0 ? diff : 0);
  }, 0);

  const totalDescent = trek.itinerary.reduce((acc, d) => {
    const diff = d.altitudeEnd - d.altitudeStart;
    return acc + (diff < 0 ? Math.abs(diff) : 0);
  }, 0);

  const highestPoint = Math.max(...trek.itinerary.map((d) => d.altitudeEnd));
  const lowestPoint = Math.min(...trek.itinerary.map((d) => d.altitudeStart));

  return (
    <div className="py-8 space-y-10">
      {/* Map placeholder */}
      <section>
        <h2 className="font-display text-3xl mb-5" style={{ color: "#FAD4D8" }}>
          Trek Route Map
        </h2>
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            height: "380px",
            background:
              "linear-gradient(135deg, #1A2A1A 0%, #0D1A0D 50%, #1A0E10 100%)",
          }}
        >
          <img
            src={
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
            }
            alt="Trek route map"
            className="w-full h-full object-cover opacity-40"
          />
          {/* SVG Route Overlay */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#B5525E" />
              </marker>
            </defs>
            <path
              d="M 80,300 C 150,280 200,250 260,200 S 380,130 440,120 S 560,100 620,90 S 700,95 740,100"
              fill="none"
              stroke="#B5525E"
              strokeWidth="3"
              strokeDasharray="8,4"
              markerEnd="url(#arrowhead)"
            />
            {/* Waypoint markers */}
            {[80, 260, 440, 620, 740].map((x, i) => {
              const ys = [300, 200, 120, 90, 100];
              const labels = ["Base Camp", "Camp 1", "Camp 2", "Summit", "End"];
              return (
                <g key={labels[i]}>
                  <circle
                    cx={x}
                    cy={ys[i]}
                    r="10"
                    fill="#1A0E10"
                    stroke="#B5525E"
                    strokeWidth="2"
                  />
                  <circle cx={x} cy={ys[i]} r="4" fill="#FAD4D8" />
                  <text
                    x={x}
                    y={ys[i] - 18}
                    textAnchor="middle"
                    fill="#FAD4D8"
                    fontSize="11"
                    fontFamily="var(--font-display)"
                  >
                    {labels[i]}
                  </text>
                </g>
              );
            })}
          </svg>
          {/* Map Legend */}
          <div
            className="absolute bottom-4 right-4 rounded-xl px-4 py-3 flex flex-col gap-2"
            style={{ background: "rgba(26,14,16,0.85)" }}
          >
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "#FAD4D8" }}
            >
              <div
                className="w-6 h-1 rounded"
                style={{ background: "#B5525E" }}
              />{" "}
              Trek Route
            </div>
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "#FAD4D8" }}
            >
              <div
                className="w-3 h-3 rounded-full border-2"
                style={{ borderColor: "#B5525E", background: "#1A0E10" }}
              />{" "}
              Waypoints
            </div>
          </div>
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {["Terrain", "Satellite", "Topo"].map((layer) => (
              <button
                key={layer}
                type="button"
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(26,14,16,0.85)",
                  color: "#E8A0AA",
                  border: "1px solid #E8A0AA33",
                }}
              >
                {layer}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Elevation Profile */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Elevation Profile
        </h2>
        <div
          className="rounded-2xl p-6 border"
          style={{ background: "rgba(45,27,30,0.8)", borderColor: "#E8A0AA33" }}
        >
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart
              data={elevationData}
              margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
            >
              <defs>
                <linearGradient id="altGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B5525E" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#B5525E" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8A0AA22" />
              <XAxis dataKey="day" tick={{ fill: "#E8A0AA", fontSize: 11 }} />
              <YAxis
                tick={{ fill: "#E8A0AA", fontSize: 11 }}
                tickFormatter={(v) => `${v.toLocaleString()} ft`}
              />
              <Tooltip
                contentStyle={{
                  background: "#1A0E10",
                  border: "1px solid #E8A0AA44",
                  borderRadius: "8px",
                  color: "#FAD4D8",
                }}
                formatter={(value: number) => [
                  `${value.toLocaleString()} ft`,
                  "Altitude",
                ]}
              />
              <Area
                type="monotone"
                dataKey="altitude"
                stroke="#B5525E"
                strokeWidth={2}
                fill="url(#altGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Route Stats */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Route Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Distance", value: `${trek.trekDistance} km` },
            {
              label: "Total Ascent",
              value: `${totalAscent.toLocaleString()} ft`,
            },
            {
              label: "Total Descent",
              value: `${totalDescent.toLocaleString()} ft`,
            },
            {
              label: "Highest Point",
              value: `${highestPoint.toLocaleString()} ft`,
            },
            {
              label: "Lowest Point",
              value: `${lowestPoint.toLocaleString()} ft`,
            },
            {
              label: "Avg Daily Dist",
              value: `${(trek.trekDistance / trek.durationDays).toFixed(1)} km`,
            },
            { label: "Trek Duration", value: `${trek.durationDays} days` },
            {
              label: "Starting Point",
              value: trek.startingPoint.split(",")[0],
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center border"
              style={{
                background: "rgba(45,27,30,0.8)",
                borderColor: "#E8A0AA22",
              }}
            >
              <div className="text-xs mb-1" style={{ color: "#E8A0AA" }}>
                {stat.label}
              </div>
              <div className="font-bold" style={{ color: "#FAD4D8" }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GPS Download */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          GPS Track Download
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="px-6 py-3 rounded-xl text-sm font-semibold border"
            style={{ borderColor: "#B5525E", color: "#B5525E" }}
          >
            Download .GPX File
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-xl text-sm font-semibold border"
            style={{ borderColor: "#E8A0AA44", color: "#E8A0AA" }}
          >
            Download .KML File
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-xl text-sm font-semibold border"
            style={{ borderColor: "#E8A0AA44", color: "#E8A0AA" }}
          >
            Garmin / Suunto Guide
          </button>
        </div>
      </section>

      {/* Nearby Peaks */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Nearby Peaks & Passes
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { name: "Swargarohini", alt: "20,069 ft", dist: "12 km" },
            { name: "Bandarpoonch", alt: "20,722 ft", dist: "28 km" },
            { name: "Kedarnath Peak", alt: "22,769 ft", dist: "45 km" },
            { name: "Gangotri Group", alt: "21,900 ft", dist: "38 km" },
          ].map((peak) => (
            <div
              key={peak.name}
              className="flex items-center gap-4 rounded-xl p-4 border"
              style={{
                background: "rgba(45,27,30,0.6)",
                borderColor: "#E8A0AA22",
              }}
            >
              <div className="text-2xl">&#9968;</div>
              <div className="flex-1">
                <div
                  className="font-semibold text-sm"
                  style={{ color: "#FAD4D8" }}
                >
                  {peak.name}
                </div>
                <div className="text-xs" style={{ color: "#E8A0AA" }}>
                  {peak.alt} / {peak.dist} away
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
