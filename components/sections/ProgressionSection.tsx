"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const leagues = [
  { name: "Awakening", level: 1, color: "#888888", icon: "💤" },
  { name: "Novice", level: 2, color: "#a0a0a0", icon: "🌱" },
  { name: "Scout", level: 3, color: "#4ade80", icon: "🔍" },
  { name: "Walker", level: 4, color: "#0DF259", icon: "🚶" },
  { name: "Ranger", level: 5, color: "#00ffff", icon: "🏃" },
  { name: "Pathfinder", level: 6, color: "#3b82f6", icon: "🧭" },
  { name: "Explorer", level: 7, color: "#8b5cf6", icon: "🗺️" },
  { name: "Nomad", level: 8, color: "#B400FF", icon: "⚡" },
  { name: "Voyager", level: 9, color: "#FF1493", icon: "🚀" },
  { name: "Titan", level: 10, color: "#FFA500", icon: "🏆" },
  { name: "Legend", level: 11, color: "#FFD700", icon: "👑" },
];

export default function ProgressionSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="RANKS"
          title="Rise Through the Ranks"
          subtitle="11 cyberpunk leagues with exponential XP curves and infinite endgame."
        />

        {/* League ladder */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-text-muted via-neon-green to-[#FFD700] origin-top"
          />

          {leagues.map((league, i) => (
            <motion.div
              key={league.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative flex items-center gap-4 mb-4 ${
                i % 2 === 0
                  ? "md:flex-row md:pr-[52%]"
                  : "md:flex-row-reverse md:pl-[52%]"
              }`}
            >
              {/* Node on the line */}
              <div
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                style={{
                  borderColor: league.color,
                  backgroundColor: `${league.color}33`,
                  boxShadow: `0 0 8px ${league.color}66`,
                }}
              />

              {/* Card */}
              <div
                className="ml-16 md:ml-0 flex-1 bg-bg-secondary/60 border border-white/10 rounded-lg p-4 flex items-center gap-4 hover:border-opacity-50 transition-all duration-300 group cursor-default"
                style={
                  {
                    "--league-color": league.color,
                  } as React.CSSProperties
                }
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {league.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-display text-sm font-bold"
                      style={{ color: league.color }}
                    >
                      {league.name}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      LVL {league.level}
                    </span>
                  </div>
                  {/* XP bar */}
                  <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(league.level / 11) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: league.color }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
