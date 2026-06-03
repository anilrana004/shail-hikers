import { DIFFICULTY_COLORS, TREKS } from "@/data/treks";
import { useNavigate } from "@tanstack/react-router";
import { Filter, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

const QUICK_FILTERS = [
  "Beginner Friendly",
  "Snow Trek",
  "High Altitude",
  "Camping",
  "Winter",
  "Monsoon",
  "Family",
  "Weekend Trek",
  "Under ₹5,000",
  "UNESCO Site",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DIFFICULTIES = ["Easy", "Moderate", "Difficult", "Extreme"];
const DURATIONS = ["1–3 days", "4–6 days", "7–10 days", "10+ days"];
const BUDGETS = ["Under ₹3,000", "₹3,000–₹7,000", "₹7,000–₹12,000", "₹12,000+"];
const GROUP_TYPES = ["Solo", "Couple", "Friends", "Family", "Corporate"];

interface SearchBarProps {
  compact?: boolean;
}

export function SearchBar({ compact }: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [month, setMonth] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [groupType, setGroupType] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const results = useMemo(() => {
    let filtered = TREKS;
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.region.toLowerCase().includes(q) ||
          t.startingPoint.toLowerCase().includes(q),
      );
    }
    if (difficulty)
      filtered = filtered.filter((t) => t.difficulty === difficulty);
    if (month)
      filtered = filtered.filter((t) =>
        t.bestTime.toLowerCase().includes(month.slice(0, 3).toLowerCase()),
      );
    if (duration) {
      if (duration === "1–3 days")
        filtered = filtered.filter((t) => t.durationDays <= 3);
      else if (duration === "4–6 days")
        filtered = filtered.filter(
          (t) => t.durationDays >= 4 && t.durationDays <= 6,
        );
      else if (duration === "7–10 days")
        filtered = filtered.filter(
          (t) => t.durationDays >= 7 && t.durationDays <= 10,
        );
      else if (duration === "10+ days")
        filtered = filtered.filter((t) => t.durationDays > 10);
    }
    if (budget) {
      if (budget === "Under ₹3,000")
        filtered = filtered.filter((t) => t.basePrice < 3000);
      else if (budget === "₹3,000–₹7,000")
        filtered = filtered.filter(
          (t) => t.basePrice >= 3000 && t.basePrice <= 7000,
        );
      else if (budget === "₹7,000–₹12,000")
        filtered = filtered.filter(
          (t) => t.basePrice > 7000 && t.basePrice <= 12000,
        );
      else if (budget === "₹12,000+")
        filtered = filtered.filter((t) => t.basePrice > 12000);
    }
    if (activeFilters.includes("Under ₹5,000"))
      filtered = filtered.filter((t) => t.basePrice < 5000);
    if (activeFilters.includes("Beginner Friendly"))
      filtered = filtered.filter((t) => t.difficulty === "Easy");
    if (activeFilters.includes("High Altitude"))
      filtered = filtered.filter((t) => t.maxAltitude > 14000);
    if (activeFilters.includes("Weekend Trek"))
      filtered = filtered.filter((t) => t.durationDays <= 3);
    if (activeFilters.includes("UNESCO Site"))
      filtered = filtered.filter((t) => t.name.includes("Valley of Flowers"));
    return filtered;
  }, [query, difficulty, month, duration, budget, activeFilters]);

  const toggleFilter = (f: string) =>
    setActiveFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f],
    );

  const handleSearch = () => {
    navigate({ to: "/treks" });
  };

  return (
    <section
      data-ocid="search.section"
      className={`w-full ${compact ? "" : "sticky top-[88px] z-30"}`}
      style={{
        background: "#2D1B1E",
        borderBottom: "1px solid rgba(232,160,170,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Main search row */}
        <div className="flex flex-wrap gap-2 mb-3">
          {/* Text search */}
          <div className="flex-1 min-w-48 relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "#E8A0AA80" }}
            />
            <input
              type="text"
              data-ocid="search.search_input"
              placeholder="Search treks, regions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm outline-none placeholder:opacity-50"
              style={{
                background: "rgba(26,14,16,0.7)",
                border: "1px solid rgba(232,160,170,0.25)",
                color: "#FAD4D8",
              }}
            />
          </div>

          {/* Dropdowns */}
          {(
            [
              {
                label: "Month",
                value: month,
                setter: setMonth,
                options: MONTHS,
                id: "search.month",
              },
              {
                label: "Difficulty",
                value: difficulty,
                setter: setDifficulty,
                options: DIFFICULTIES,
                id: "search.difficulty",
              },
              {
                label: "Duration",
                value: duration,
                setter: setDuration,
                options: DURATIONS,
                id: "search.duration",
              },
              {
                label: "Budget",
                value: budget,
                setter: setBudget,
                options: BUDGETS,
                id: "search.budget",
              },
              {
                label: "Group",
                value: groupType,
                setter: setGroupType,
                options: GROUP_TYPES,
                id: "search.group",
              },
            ] as const
          ).map((d) => (
            <select
              key={d.label}
              data-ocid={d.id}
              value={d.value}
              onChange={(e) => d.setter(e.target.value)}
              className="px-3 py-2.5 rounded-lg text-sm outline-none min-w-[110px] cursor-pointer"
              style={{
                background: "rgba(26,14,16,0.7)",
                border: "1px solid rgba(232,160,170,0.25)",
                color: d.value ? "#FAD4D8" : "#E8A0AA88",
              }}
            >
              <option value="">{d.label}</option>
              {d.options.map((o) => (
                <option
                  key={o}
                  value={o}
                  style={{ background: "#1A0E10", color: "#FAD4D8" }}
                >
                  {o}
                </option>
              ))}
            </select>
          ))}

          {/* Search button */}
          <button
            type="button"
            data-ocid="search.submit_button"
            onClick={handleSearch}
            className="px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all hover:opacity-90"
            style={{ background: "#B5525E", color: "#FAD4D8" }}
          >
            Search
          </button>

          {/* Clear */}
          {(query ||
            difficulty ||
            month ||
            duration ||
            budget ||
            activeFilters.length > 0) && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setDifficulty("");
                setMonth("");
                setDuration("");
                setBudget("");
                setGroupType("");
                setActiveFilters([]);
              }}
              className="p-2.5 rounded-lg transition-colors"
              style={{
                border: "1px solid rgba(232,160,170,0.25)",
                color: "#E8A0AA",
              }}
              aria-label="Clear filters"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Quick filter pills */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter
            size={13}
            style={{ color: "#E8A0AA60" }}
            className="flex-shrink-0"
          />
          {QUICK_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              data-ocid={`search.filter.${f.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
              onClick={() => toggleFilter(f)}
              className="px-3 py-1 rounded-full text-xs font-medium transition-all"
              style={{
                background: activeFilters.includes(f)
                  ? "#B5525E"
                  : "rgba(26,14,16,0.6)",
                border: `1px solid ${activeFilters.includes(f) ? "#B5525E" : "rgba(232,160,170,0.2)"}`,
                color: activeFilters.includes(f) ? "#FAD4D8" : "#E8A0AA",
              }}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs" style={{ color: "#E8A0AA60" }}>
            Showing {results.length} trek{results.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </section>
  );
}
