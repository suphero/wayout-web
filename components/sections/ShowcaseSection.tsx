"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../ui/SectionHeader";

const screens = [
  {
    label: "Dashboard",
    desc: "Balance ring, daily stats, earning overview",
    color: "border-neon-green/30",
  },
  {
    label: "Shield",
    desc: "Blocked app UI, countdown timer",
    color: "border-neon-cyan/30",
  },
  {
    label: "Progression",
    desc: "League ladder, XP tracking, badges",
    color: "border-neon-purple/30",
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const yValues = [y1, y2, y3];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="INTERFACE"
          title="Designed for the Future"
          subtitle="Cyberpunk aesthetics meet intuitive UX. Every pixel serves a purpose."
        />

        {/* Phone mockups with parallax */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              style={{ y: yValues[i] }}
              className={`relative ${i === 1 ? "md:-mt-8" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`w-56 h-[420px] bg-bg-secondary border-2 ${screen.color} rounded-[2rem] p-3 relative overflow-hidden`}
              >
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-bg-deepest rounded-b-2xl" />

                {/* Placeholder content area */}
                <div className="w-full h-full bg-bg-deepest rounded-[1.5rem] flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-16 h-16 rounded-full border-2 border-neon-green/30 flex items-center justify-center">
                    <span className="text-2xl">
                      {i === 0 ? "📊" : i === 1 ? "🛡️" : "🏆"}
                    </span>
                  </div>
                  <span className="font-display text-xs text-neon-green font-bold tracking-wider">
                    {screen.label}
                  </span>
                  <p className="text-text-muted text-[10px] text-center font-mono">
                    {screen.desc}
                  </p>
                  <span className="text-text-muted/50 text-[10px] font-mono mt-4">
                    [ screenshot placeholder ]
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
