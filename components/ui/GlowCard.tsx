"use client";

import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  variant?: "green" | "purple" | "cyan" | "default";
  className?: string;
  delay?: number;
}

const glowColors = {
  green: "hover:shadow-[0_0_15px_rgba(13,242,89,0.3)] border-neon-green/20 hover:border-neon-green/50",
  purple: "hover:shadow-[0_0_15px_rgba(180,0,255,0.3)] border-neon-purple/20 hover:border-neon-purple/50",
  cyan: "hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] border-neon-cyan/20 hover:border-neon-cyan/50",
  default: "hover:shadow-[0_0_15px_rgba(13,242,89,0.2)] border-white/10 hover:border-neon-green/30",
};

export default function GlowCard({
  children,
  variant = "default",
  className = "",
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`
        bg-bg-secondary/80 backdrop-blur-sm border rounded-xl p-6
        transition-all duration-300 ${glowColors[variant]} ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
