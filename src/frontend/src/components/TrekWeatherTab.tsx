import type { TrekData } from "@/types";
import {
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

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MONTHLY_WEATHER = [
  {
    month: "Jan",
    low: -15,
    high: 5,
    condition: "Snow",
    status: "open",
    best: false,
  },
  {
    month: "Feb",
    low: -12,
    high: 8,
    condition: "Snow",
    status: "open",
    best: false,
  },
  {
    month: "Mar",
    low: -5,
    high: 12,
    condition: "Snow/Clear",
    status: "open",
    best: false,
  },
  {
    month: "Apr",
    low: 2,
    high: 18,
    condition: "Clear",
    status: "open",
    best: true,
  },
  {
    month: "May",
    low: 8,
    high: 22,
    condition: "Excellent",
    status: "open",
    best: true,
  },
  {
    month: "Jun",
    low: 10,
    high: 20,
    condition: "Pre-Monsoon",
    status: "open",
    best: false,
  },
  {
    month: "Jul",
    low: 8,
    high: 18,
    condition: "Monsoon",
    status: "caution",
    best: false,
  },
  {
    month: "Aug",
    low: 7,
    high: 17,
    condition: "Monsoon",
    status: "caution",
    best: false,
  },
  {
    month: "Sep",
    low: 5,
    high: 16,
    condition: "Post-Monsoon",
    status: "open",
    best: true,
  },
  {
    month: "Oct",
    low: 0,
    high: 14,
    condition: "Clear",
    status: "open",
    best: false,
  },
  {
    month: "Nov",
    low: -8,
    high: 6,
    condition: "Early Snow",
    status: "open",
    best: false,
  },
  {
    month: "Dec",
    low: -14,
    high: 2,
    condition: "Snow",
    status: "open",
    best: false,
  },
];

const HISTORICAL_DATA = MONTHS.map((m, i) => ({
  month: m,
  rainfall: [5, 3, 8, 12, 18, 45, 120, 100, 40, 10, 4, 3][i],
  snowfall: [80, 70, 40, 15, 5, 0, 0, 0, 0, 10, 50, 75][i],
}));

const FORECAST = [
  { day: "Mon", high: 8, low: -2, icon: "sun", precip: 5 },
  { day: "Tue", high: 6, low: -4, icon: "cloud", precip: 15 },
  { day: "Wed", high: 4, low: -6, icon: "snow", precip: 40 },
  { day: "Thu", high: 2, low: -8, icon: "snow", precip: 60 },
  { day: "Fri", high: 5, low: -5, icon: "cloud", precip: 20 },
  { day: "Sat", high: 9, low: -1, icon: "sun", precip: 5 },
  { day: "Sun", high: 11, low: 1, icon: "sun", precip: 5 },
];

const WEATHER_ICONS: Record<string, string> = {
  sun: "☀️",
  cloud: "⛅",
  snow: "❄️",
  rain: "🌧️",
};

export default function TrekWeatherTab({ trek }: Props) {
  return (
    <div className="py-8 space-y-10">
      {/* Current Weather */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Current Weather — {trek.startingPoint.split(",")[0]}
        </h2>
        <div
          className="rounded-2xl p-6 border"
          style={{ background: "rgba(45,27,30,0.8)", borderColor: "#A8C5DA44" }}
        >
          <div className="flex items-center gap-8">
            <div className="text-6xl">❄️</div>
            <div>
              <div
                className="text-4xl font-bold mb-1"
                style={{ color: "#FAD4D8" }}
              >
                -3°C
              </div>
              <div className="text-sm" style={{ color: "#E8A0AA" }}>
                Light Snowfall
              </div>
              <div className="text-xs mt-1" style={{ color: "#E8A0AA88" }}>
                Last updated: Just now
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 ml-auto">
              {[
                ["Humidity", "68%"],
                ["Wind", "12 km/h NW"],
                ["Visibility", "8 km"],
                ["UV Index", "3 (Low)"],
                ["Feels Like", "-8°C"],
                ["Condition", "Snowfall"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-xs" style={{ color: "#E8A0AA" }}>
                    {label}
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#FAD4D8" }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Forecast */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          7-Day Forecast
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {FORECAST.map((day) => (
            <div
              key={day.day}
              className="flex-shrink-0 rounded-xl p-4 text-center min-w-[90px] border"
              style={{
                background: "rgba(45,27,30,0.8)",
                borderColor: "#E8A0AA22",
              }}
            >
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: "#FAD4D8" }}
              >
                {day.day}
              </div>
              <div className="text-2xl mb-2">{WEATHER_ICONS[day.icon]}</div>
              <div className="text-sm font-bold" style={{ color: "#FAD4D8" }}>
                {day.high}°
              </div>
              <div className="text-xs" style={{ color: "#A8C5DA" }}>
                {day.low}°
              </div>
              <div className="text-xs mt-1" style={{ color: "#A8C5DA" }}>
                {day.precip}%
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Guide */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Monthly Weather Guide
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {MONTHLY_WEATHER.map((m) => (
            <div
              key={m.month}
              className="flex-shrink-0 rounded-xl p-4 min-w-[110px] border relative"
              style={{
                background: "rgba(45,27,30,0.8)",
                borderColor: m.best ? "#C9A84C" : "#E8A0AA22",
              }}
            >
              {m.best && (
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "#C9A84C", color: "#1A0E10" }}
                >
                  Best
                </div>
              )}
              <div
                className="font-bold text-sm mb-1"
                style={{ color: "#FAD4D8" }}
              >
                {m.month}
              </div>
              <div className="text-xs mb-1" style={{ color: "#E8A0AA" }}>
                {m.high}° / {m.low}°
              </div>
              <div
                className="text-xs"
                style={{
                  color: m.status === "caution" ? "#C9A84C" : "#A8C5DA",
                }}
              >
                {m.condition}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AMS Warning */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Altitude & AMS Warning
        </h2>
        <div
          className="rounded-2xl p-6 border"
          style={{
            background: "rgba(181,82,94,0.1)",
            borderColor: "#B5525E66",
          }}
        >
          <div className="font-semibold mb-3" style={{ color: "#B5525E" }}>
            AMS Risk at {trek.maxAltitude.toLocaleString()} ft (
            {trek.maxAltitudeM.toLocaleString()} m)
          </div>
          <div className="mb-4 text-sm" style={{ color: "#FAD4D8" }}>
            At altitudes above 10,000 ft, Acute Mountain Sickness can affect
            anyone regardless of fitness level. Know the signs.
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div
                className="font-semibold text-sm mb-3"
                style={{ color: "#E8A0AA" }}
              >
                Symptoms Checklist
              </div>
              <div className="space-y-2">
                {[
                  "Headache",
                  "Nausea or vomiting",
                  "Dizziness / lightheadedness",
                  "Fatigue beyond normal",
                  "Loss of appetite",
                  "Shortness of breath at rest",
                ].map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#FAD4D8" }}
                  >
                    <span style={{ color: "#B5525E" }}>&#9679;</span> {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                className="font-semibold text-sm mb-3"
                style={{ color: "#E8A0AA" }}
              >
                What To Do
              </div>
              <div className="space-y-2">
                {[
                  "Stop ascending immediately",
                  "Inform your trek leader",
                  "Rest at current altitude",
                  "Drink 3-4 litres of water per day",
                  "Take Diamox if prescribed",
                  "Descend 500 ft if symptoms worsen",
                ].map((s, idx) => (
                  <div
                    key={s}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#FAD4D8" }}
                  >
                    <span className="font-bold" style={{ color: "#A8C5DA" }}>
                      {idx + 1}.
                    </span>{" "}
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Chart */}
      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Historical Rainfall & Snowfall
        </h2>
        <div
          className="rounded-2xl p-6 border"
          style={{ background: "rgba(45,27,30,0.8)", borderColor: "#E8A0AA33" }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={HISTORICAL_DATA}
              margin={{ top: 5, right: 10, bottom: 5, left: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E8A0AA11" />
              <XAxis dataKey="month" tick={{ fill: "#E8A0AA", fontSize: 10 }} />
              <YAxis tick={{ fill: "#E8A0AA", fontSize: 10 }} />
              <Tooltip
                contentStyle={{
                  background: "#1A0E10",
                  border: "1px solid #E8A0AA44",
                  borderRadius: "8px",
                  color: "#FAD4D8",
                }}
              />
              <Bar
                dataKey="rainfall"
                fill="#A8C5DA"
                opacity={0.8}
                name="Rainfall (mm)"
              />
              <Bar
                dataKey="snowfall"
                fill="#FAD4D8"
                opacity={0.6}
                name="Snowfall (cm)"
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-6 justify-center mt-3">
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "#E8A0AA" }}
            >
              <div
                className="w-3 h-3 rounded"
                style={{ background: "#A8C5DA" }}
              />
              Rainfall (mm)
            </div>
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "#E8A0AA" }}
            >
              <div
                className="w-3 h-3 rounded"
                style={{ background: "#FAD4D8" }}
              />
              Snowfall (cm)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
