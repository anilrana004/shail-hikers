import { TrekCard } from "@/components/TrekCard";
import { TREKS } from "@/data/treks";
import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function FeaturedTreksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const _inView = useInView(ref, { once: true });
  const featured = TREKS.slice(0, 6);

  return (
    <section
      data-ocid="featured_treks.section"
      style={{ background: "#E6D8C4" }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] mb-3"
              style={{ color: "#F88379" }}
            >
              Handpicked for You
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "#1A1A1A" }}
            >
              LEGENDARY TRAILS
            </motion.h2>
          </div>
          <Link
            to="/treks"
            data-ocid="featured_treks.view_all"
            className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "#4A4A4A" }}
          >
            View All 14 Treks →
          </Link>
        </div>

        {/* Horizontal scroll carousel */}
        <div
          ref={ref}
          className="overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-5" style={{ width: "max-content" }}>
            {featured.map((trek, i) => (
              <TrekCard key={trek.id} trek={trek} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <Link
            to="/treks"
            data-ocid="featured_treks.view_all_mobile"
            className="px-6 py-3 rounded-xl text-sm font-semibold tracking-wide"
            style={{
              border: "1px solid rgba(248,131,121,0.4)",
              color: "#F88379",
            }}
          >
            View All 14 Treks →
          </Link>
        </div>
      </div>
    </section>
  );
}
