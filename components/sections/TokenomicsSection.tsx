"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  {
    label: "Step-to-Neon Rate",
    value: 1,
    suffix: ":1",
    note: "1 step = 1 Neon = 1 second",
  },
  {
    label: "15 min Session Cost",
    value: 1000,
    suffix: " Neon",
    note: "900 base + 100 refundable credit",
  },
  {
    label: "Anti-cheat Validated",
    value: 100,
    suffix: "%",
    note: "No exploits possible",
  },
];

const flowSteps = [
  { label: "Steps", icon: "👟", color: "text-neon-cyan", bgColor: "bg-neon-cyan/10 border-neon-cyan/30" },
  { label: "Mint Neon", icon: "⚡", color: "text-neon-green", bgColor: "bg-neon-green/10 border-neon-green/30" },
  { label: "Spend", icon: "🔓", color: "text-neon-orange", bgColor: "bg-neon-orange/10 border-neon-orange/30" },
  { label: "WOUT → Neon", icon: "🪙", color: "text-neon-purple", bgColor: "bg-neon-purple/10 border-neon-purple/30" },
];

export default function TokenomicsSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="TOKENOMICS"
          title="Neon Economy"
          subtitle="A closed-loop economy powered by your steps. Walk to earn or bridge WOUT tokens — no cheating, just honest effort."
        />

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-20"
        >
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4 md:gap-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl border ${step.bgColor}`}
              >
                <span className="text-2xl">{step.icon}</span>
                <span className={`font-mono text-sm font-bold ${step.color}`}>
                  {step.label}
                </span>
              </motion.div>
              {i < flowSteps.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="text-neon-green text-xl font-bold hidden md:block"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-bg-secondary/60 border border-white/10 rounded-xl p-8 text-center corner-brackets"
            >
              <div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={1.5}
                />
              </div>
              <p className="font-display text-sm text-text-primary/80 mb-1 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-text-muted text-xs font-mono">{stat.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Session breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="bg-bg-secondary/60 border border-neon-green/20 rounded-xl p-6">
            <p className="font-mono text-xs text-neon-green/70 tracking-wider mb-4 text-center">
              // SESSION BREAKDOWN
            </p>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">15 min = 900 seconds</span>
                <span className="text-neon-green">900 Neon</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">+ Refundable credit</span>
                <span className="text-neon-cyan">100 Neon</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                <span className="text-text-primary font-bold">Total session cost</span>
                <span className="text-neon-green font-bold">1,000 Neon</span>
              </div>
              <p className="text-text-muted text-xs pt-2">
                Close early → unused credit returns to your wallet
              </p>
            </div>
          </div>
        </motion.div>

        {/* Token bridge + debt system notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-col items-center gap-3"
        >
          <div className="inline-flex items-center gap-3 bg-neon-green/10 border border-neon-green/30 rounded-lg px-6 py-3">
            <span className="text-neon-green font-mono text-xs tracking-wider">
              WOUT
            </span>
            <span className="text-text-secondary text-sm">
              Token Bridge — Redeem WOUT tokens for Neon at 1:1
            </span>
          </div>
          <div className="inline-flex items-center gap-3 bg-neon-purple/10 border border-neon-purple/30 rounded-lg px-6 py-3">
            <span className="text-neon-purple font-mono text-xs tracking-wider">
              PRO
            </span>
            <span className="text-text-secondary text-sm">
              Debt System — Borrow Neon against future walks
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
