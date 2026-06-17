"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlowCard from "../ui/GlowCard";

const features = [
  {
    icon: "👟",
    title: "Walk to Earn",
    desc: "Every step mints Neon. Your daily walks become digital currency.",
    variant: "green" as const,
  },
  {
    icon: "🛡️",
    title: "System Blocking",
    desc: "iOS ScreenTime API enforces blocks at the OS level. No bypass possible.",
    variant: "cyan" as const,
  },
  {
    icon: "⏱️",
    title: "Timed Sessions",
    desc: "5-60 min custom unlocks (Pro) or 15 min standard. Time's up — apps lock.",
    variant: "default" as const,
  },
  {
    icon: "🪙",
    title: "Token Sync",
    desc: "Bridge WOUT tokens to in-app Neon. Scan, claim, spend.",
    variant: "default" as const,
  },
  {
    icon: "🔒",
    title: "Privacy-First",
    desc: "All data stays on device. No analytics, no tracking, no cloud sync.",
    variant: "green" as const,
  },
  {
    icon: "🌍",
    title: "9 Languages",
    desc: "Global coverage: EN, TR, DE, FR, ES, PT, IT, ZH, JA.",
    variant: "default" as const,
  },
  {
    icon: "📊",
    title: "Widgets",
    desc: "Home screen widgets showing your Neon balance and daily progress.",
    variant: "cyan" as const,
  },
  {
    icon: "🎨",
    title: "12 Themes",
    desc: "Cyberpunk-inspired themes to customize your experience.",
    variant: "purple" as const,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="FEATURES"
          title="Built Different"
          subtitle="Not another screen time reminder. A complete digital economy powered by real-world movement."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <GlowCard
              key={feature.title}
              variant={feature.variant}
              delay={i * 0.08}
              className="text-center"
            >
              <span className="text-3xl block mb-4">{feature.icon}</span>
              <h3 className="font-display text-base font-bold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.desc}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
