"use client";

import { motion } from "framer-motion";

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "green" | "purple" | "cyan" | "orange-outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorMap = {
  green: {
    bg: "bg-neon-green",
    text: "text-bg-deepest",
    shadow: "shadow-[0_0_20px_rgba(13,242,89,0.4)]",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(13,242,89,0.6)]",
  },
  purple: {
    bg: "bg-neon-purple",
    text: "text-white",
    shadow: "shadow-[0_0_20px_rgba(180,0,255,0.4)]",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(180,0,255,0.6)]",
  },
  cyan: {
    bg: "bg-neon-cyan",
    text: "text-bg-deepest",
    shadow: "shadow-[0_0_20px_rgba(0,255,255,0.4)]",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]",
  },
  "orange-outline": {
    bg: "bg-transparent border-2 border-neon-orange",
    text: "text-neon-orange",
    shadow: "shadow-[0_0_20px_rgba(255,165,0,0.2)]",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(255,165,0,0.4)]",
  },
};

const sizeMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function NeonButton({
  children,
  href,
  variant = "green",
  size = "md",
  className = "",
}: NeonButtonProps) {
  const colors = colorMap[variant];
  const sizeClass = sizeMap[size];

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-display font-bold uppercase tracking-wider
    rounded-lg transition-all duration-300
    ${colors.bg} ${colors.text} ${colors.shadow} ${colors.hoverShadow}
    ${sizeClass} ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
