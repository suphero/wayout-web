"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const bullets = [
  {
    icon: "🛡️",
    title: "OS-level Blocking",
    desc: "Uses Apple ScreenTime API for system-level app restrictions — not a simple overlay.",
  },
  {
    icon: "🔒",
    title: "No Bypass Possible",
    desc: "No workarounds, no cheating, no side-loading exploits. The system enforces the rules.",
  },
  {
    icon: "🔍",
    title: "Anti-Cheat Engine",
    desc: "Cadence check, monotonicity validation, secure timestamps. Every step is verified.",
  },
  {
    icon: "📱",
    title: "Native Integration",
    desc: "Deep iOS integration with Family Controls framework. Works even when app is closed.",
  },
];

const comparison = [
  {
    feature: "Blocking Method",
    wayout: "OS-level (ScreenTime API)",
    others: "App overlay / reminder",
  },
  {
    feature: "Can Be Bypassed",
    wayout: "No",
    others: "Yes (close app / force quit)",
  },
  {
    feature: "Anti-Cheat",
    wayout: "Multi-layer validation",
    others: "None",
  },
  {
    feature: "Motivation System",
    wayout: "Walk-to-Earn economy",
    others: "Guilt / willpower",
  },
  {
    feature: "Works When Closed",
    wayout: "Yes",
    others: "No",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="SECURITY"
          title="Unbreakable Shield"
          subtitle="Built on Apple's ScreenTime API — the same technology parents use. Except this time, you're parenting yourself."
        />

        {/* Shield mockup + bullets */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Animated shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-72 mx-auto">
              {/* Shield shape */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(13,242,89,0.2)",
                    "0 0 40px rgba(13,242,89,0.4)",
                    "0 0 20px rgba(13,242,89,0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-bg-secondary border-2 border-neon-green/50 rounded-t-full rounded-b-[50%] flex flex-col items-center justify-center"
              >
                <span className="text-6xl mb-2">🛡️</span>
                <span className="font-display text-neon-green text-lg font-bold">
                  ACTIVE
                </span>
                <span className="font-mono text-xs text-text-muted mt-1">
                  shield.protocol.v2
                </span>

                {/* Animated scan line */}
                <motion.div
                  animate={{ top: ["10%", "90%", "10%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bullet points */}
          <div className="space-y-6">
            {bullets.map((bullet, i) => (
              <motion.div
                key={bullet.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="text-2xl flex-shrink-0 mt-1">
                  {bullet.icon}
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold text-text-primary mb-1">
                    {bullet.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {bullet.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 font-mono text-xs text-text-muted uppercase tracking-wider">
                  Feature
                </th>
                <th className="text-left py-4 px-4 font-display text-sm text-neon-green">
                  WayOut
                </th>
                <th className="text-left py-4 px-4 font-display text-sm text-text-muted">
                  Typical Apps
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3 px-4 text-text-secondary text-sm">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-neon-green text-sm font-medium">
                    {row.wayout}
                  </td>
                  <td className="py-3 px-4 text-text-muted text-sm">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
