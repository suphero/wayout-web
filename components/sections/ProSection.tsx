"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import NeonButton from "../ui/NeonButton";

const comparisonRows = [
  { feature: "Wallet Cap", free: "10,000 Neon", pro: "Unlimited" },
  { feature: "Earning Speed", free: "1x", pro: "2x" },
  { feature: "Unlock Duration", free: "15 min fixed", pro: "5-60 min custom" },
  { feature: "Timer Mode", free: "Wall clock", pro: "+ Screen time only" },
  { feature: "Analytics", free: "7 days", pro: "Unlimited" },
  { feature: "Debt System", free: "Limited", pro: "Extended" },
];

const pricingOptions = [
  { period: "Monthly", price: "$5", sub: "/mo", highlight: false },
  { period: "Yearly", price: "$50", sub: "/yr", badge: "2 MONTHS FREE", highlight: true },
  { period: "Lifetime", price: "$100", sub: "once", highlight: false },
];

export default function ProSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="UPGRADE"
          title="WayOut PRO"
          subtitle="Unlock the full protocol. More Neon, more control, more power."
        />

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-secondary/60 border border-neon-purple/20 rounded-xl overflow-hidden mb-16 max-w-3xl mx-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 font-mono text-xs text-text-muted uppercase tracking-wider">
                  Feature
                </th>
                <th className="text-center py-4 px-4 font-display text-sm text-text-secondary">
                  Free
                </th>
                <th className="text-center py-4 px-4 font-display text-sm text-neon-purple neon-text-purple">
                  PRO
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3 px-6 text-text-primary text-sm">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-text-muted text-sm text-center">
                    {row.free}
                  </td>
                  <td className="py-3 px-4 text-neon-purple text-sm text-center font-medium">
                    {row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {pricingOptions.map((option, i) => (
            <motion.div
              key={option.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl p-6 text-center border transition-all duration-300 ${
                option.highlight
                  ? "bg-neon-purple/10 border-neon-purple/50 neon-border-purple"
                  : "bg-bg-secondary/60 border-white/10 hover:border-neon-purple/30"
              }`}
            >
              {option.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-purple text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full tracking-wider">
                  {option.badge}
                </span>
              )}
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                {option.period}
              </p>
              <p className="text-3xl font-display font-bold text-text-primary mb-1">
                {option.price}
                <span className="text-sm text-text-muted">{option.sub}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <NeonButton variant="purple" size="lg" href="https://apps.apple.com/app/id6756630160">
            Start 7-Day Free Trial
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
}
