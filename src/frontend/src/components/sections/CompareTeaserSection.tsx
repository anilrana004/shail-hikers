import { TREKS } from "@/data/treks";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function CompareTeaserSection() {
  const [left, setLeft] = useState("kedarkantha");
  const [right, setRight] = useState("rupin-pass");

  const leftTrek = TREKS.find((t) => t.slug === left);
  const rightTrek = TREKS.find((t) => t.slug === right);

  const COMPARE_FIELDS: {
    label: string;
    get: (t: (typeof TREKS)[0]) => string;
  }[] = [
    {
      label: "Duration",
      get: (t) => `${t.durationDays}D/${t.durationNights}N`,
    },
    {
      label: "Max Altitude",
      get: (t) => `${t.maxAltitude.toLocaleString()} ft`,
    },
    { label: "Difficulty", get: (t) => t.difficulty },
    { label: "Price From", get: (t) => `₹${t.basePrice.toLocaleString()}` },
    { label: "Best Season", get: (t) => t.bestTime },
    { label: "Distance", get: (t) => `${t.trekDistance} km` },
  ];

  return (
    <section
      data-ocid="compare_teaser.section"
      style={{ background: "#2D1B1E" }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] mb-3"
            style={{ color: "#B5525E" }}
          >
            Can't Decide?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "#FAD4D8" }}
          >
            COMPARE TREKS
            <br />
            <span style={{ color: "#B5525E", fontStyle: "italic" }}>
              SIDE BY SIDE
            </span>
          </motion.h2>
        </div>

        <div
          className="max-w-3xl mx-auto rounded-2xl p-6"
          style={{
            background: "rgba(26,14,16,0.7)",
            border: "1px solid rgba(181,82,94,0.25)",
          }}
        >
          {/* Trek selectors */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {(
              [
                { value: left, setter: setLeft, id: "compare_teaser.left" },
                { value: right, setter: setRight, id: "compare_teaser.right" },
              ] as const
            ).map((sel) => (
              <select
                key={sel.id}
                data-ocid={sel.id}
                value={sel.value}
                onChange={(e) => sel.setter(e.target.value)}
                className="w-full px-3 py-3 rounded-xl text-sm font-medium outline-none"
                style={{
                  background: "#2D1B1E",
                  border: "1px solid rgba(181,82,94,0.35)",
                  color: "#FAD4D8",
                }}
              >
                {TREKS.map((t) => (
                  <option
                    key={t.slug}
                    value={t.slug}
                    style={{ background: "#1A0E10" }}
                  >
                    {t.name}
                  </option>
                ))}
              </select>
            ))}
          </div>

          {/* Comparison table */}
          {leftTrek && rightTrek && (
            <div
              className="divide-y"
              style={{ borderColor: "rgba(181,82,94,0.15)" }}
            >
              {COMPARE_FIELDS.map((field) => (
                <div
                  key={field.label}
                  className="grid grid-cols-3 py-3 items-center"
                >
                  <span
                    className="text-xs uppercase tracking-wide text-center"
                    style={{ color: "#E8A0AA60" }}
                  >
                    {field.label}
                  </span>
                  <span
                    className="text-sm font-medium text-center"
                    style={{ color: "#FAD4D8" }}
                  >
                    {field.get(leftTrek)}
                  </span>
                  <span
                    className="text-sm font-medium text-center"
                    style={{ color: "#FAD4D8" }}
                  >
                    {field.get(rightTrek)}
                  </span>
                </div>
              ))}
            </div>
          )}

          <Link
            to="/compare"
            data-ocid="compare_teaser.full_compare"
            className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "#B5525E", color: "#FAD4D8" }}
          >
            See Full Comparison (25+ Parameters) <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
