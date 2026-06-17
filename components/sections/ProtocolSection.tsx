"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "WALK",
    desc: "Go outside and walk. Every step earns Neon currency automatically.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
        <path d="M24 4v8m0 24v8M4 24h8m24 0h8" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" />
        <path d="M24 16v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "neon-cyan",
  },
  {
    num: "02",
    title: "EARN",
    desc: "Claim your Neon from the wallet. Watch your balance grow.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
        <rect x="8" y="12" width="32" height="24" rx="4" />
        <path d="M8 20h32M32 28h4" strokeLinecap="round" />
      </svg>
    ),
    color: "neon-green",
  },
  {
    num: "03",
    title: "UNLOCK",
    desc: "Spend Neon to unlock blocked apps. When time's up, they lock again.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
        <rect x="12" y="22" width="24" height="20" rx="3" />
        <path d="M18 22v-6a6 6 0 0112 0" strokeLinecap="round" />
        <circle cx="24" cy="33" r="3" />
      </svg>
    ),
    color: "neon-orange",
  },
];

export default function ProtocolSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="PROTOCOL"
          title="How It Works"
          subtitle="Three steps to digital freedom. No blockchain required — just your feet."
        />

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-neon-cyan via-neon-green to-neon-orange origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative bg-bg-secondary/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-neon-green/30 transition-all duration-300 group"
            >
              {/* Step number */}
              <span className={`font-mono text-xs tracking-[0.3em] text-${step.color}/60 block mb-4`}>
                STEP {step.num}
              </span>

              {/* Icon */}
              <div className={`text-${step.color} mx-auto mb-6 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300`}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className={`font-display text-2xl font-bold text-${step.color} mb-3`}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
