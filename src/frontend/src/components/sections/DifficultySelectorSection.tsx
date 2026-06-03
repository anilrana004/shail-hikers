import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const DIFFICULTIES = [
  {
    level: "Beginner",
    sublabel: "Easy",
    color: "#2D5016",
    fitnessNote: "Can walk 8 km/day on flat terrain",
    trainingWeeks: 2,
    ageRange: "12–65",
    bestFor: "First-timers, families, leisure seekers",
    treks: ["Nag Tibba", "Dayara Bugyal", "Kedarkantha", "Chaainsheel Bugyal"],
    emoji: "🌱",
    description:
      "Perfect for first-time trekkers or those new to high-altitude walking. Gradual ascents, well-marked trails, and manageable daily distances.",
  },
  {
    level: "Moderate",
    sublabel: "Intermediate",
    color: "#C9A84C",
    fitnessNote: "Can walk 12 km/day, some hill experience",
    trainingWeeks: 6,
    ageRange: "16–55",
    bestFor: "Outdoor enthusiasts, fitness lovers, small groups",
    treks: [
      "Har Ki Dun",
      "Ruinsara Tal",
      "Chopta Chandrashila",
      "Valley of Flowers",
    ],
    emoji: "🔥",
    description:
      "A step up in altitude, distance and challenge. Expect some steep sections, altitude above 10,000 ft, and multi-day camping.",
  },
  {
    level: "Difficult",
    sublabel: "Challenging",
    color: "#B5525E",
    fitnessNote: "Regular runner or gym-goer, trekking experience",
    trainingWeeks: 10,
    ageRange: "18–50",
    bestFor: "Experienced hikers, adventure-seekers, strong fitness",
    treks: ["Rupin Pass", "Buran Ghati", "Phulara Ridge"],
    emoji: "⚡",
    description:
      "High-altitude passes, technical terrain, and demanding daily distances. Prior Himalayan trekking experience strongly recommended.",
  },
  {
    level: "Extreme",
    sublabel: "Expert Only",
    color: "#8B1A2A",
    fitnessNote: "Elite fitness, mountaineering skills required",
    trainingWeeks: 16,
    ageRange: "20–45",
    bestFor: "Experienced mountaineers, serious expeditions",
    treks: ["Bali Pass", "Borasu Pass"],
    emoji: "🔥🔥",
    description:
      "Remote routes above 16,000 ft, glacier crossings, and extreme conditions. Only for highly experienced trekkers with technical skills.",
  },
];

export function DifficultySelectorSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      data-ocid="difficulty.section"
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
            Find Your Level
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "#FAD4D8" }}
          >
            CHOOSE YOUR CHALLENGE
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {DIFFICULTIES.map((diff, i) => (
            <motion.button
              key={diff.level}
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(selected === i ? null : i)}
              data-ocid={`difficulty.${diff.level.toLowerCase()}`}
              className="group p-5 rounded-2xl text-left transition-all duration-300"
              style={{
                background:
                  selected === i ? `${diff.color}20` : "rgba(26,14,16,0.6)",
                border: `2px solid ${selected === i ? diff.color : `${diff.color}44`}`,
                boxShadow:
                  selected === i ? `0 8px 32px ${diff.color}30` : "none",
              }}
            >
              <div className="text-3xl mb-3">{diff.emoji}</div>
              <p
                className="text-lg font-bold mb-0.5"
                style={{ fontFamily: "var(--font-display)", color: diff.color }}
              >
                {diff.level}
              </p>
              <p className="text-xs" style={{ color: "#E8A0AA" }}>
                {diff.sublabel}
              </p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selected !== null && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "rgba(26,14,16,0.7)",
                border: `1px solid ${DIFFICULTIES[selected].color}44`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3
                    className="text-2xl font-semibold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: DIFFICULTIES[selected].color,
                    }}
                  >
                    {DIFFICULTIES[selected].level} Treks
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#E8A0AA" }}
                  >
                    {DIFFICULTIES[selected].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        label: "Fitness Needed",
                        value: DIFFICULTIES[selected].fitnessNote,
                      },
                      {
                        label: "Training Weeks",
                        value: `${DIFFICULTIES[selected].trainingWeeks} weeks min`,
                      },
                      {
                        label: "Age Range",
                        value: `${DIFFICULTIES[selected].ageRange} years`,
                      },
                      {
                        label: "Best For",
                        value: DIFFICULTIES[selected].bestFor,
                      },
                    ].map((item) => (
                      <div key={item.label}>
                        <p
                          className="text-[10px] uppercase tracking-wider mb-1"
                          style={{ color: "#E8A0AA50" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "#FAD4D8" }}
                        >
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-4"
                    style={{ color: "#E8A0AA50" }}
                  >
                    Matching Treks
                  </p>
                  <div className="space-y-2 mb-6">
                    {DIFFICULTIES[selected].treks.map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <CheckCircle
                          size={13}
                          style={{
                            color: DIFFICULTIES[selected].color,
                            flexShrink: 0,
                          }}
                        />
                        <span className="text-sm" style={{ color: "#FAD4D8" }}>
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/trek-finder"
                    data-ocid="difficulty.trek_finder_cta"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 inline-flex"
                    style={{
                      background: DIFFICULTIES[selected].color,
                      color: "#FAD4D8",
                    }}
                  >
                    Take Full Trek Finder Quiz <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
