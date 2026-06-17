"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import NeonButton from "../ui/NeonButton";
import TypedText from "../ui/TypedText";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Grid floor */}
      <div className="grid-floor" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-neon-green neon-text-green mb-2">
            WayOut
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="font-display text-xl md:text-2xl text-text-primary/90 tracking-wide">
            <TypedText
              text="Stop Scrolling. Start Walking."
              speed={60}
              cursor
            />
          </p>
        </motion.div>

        {/* Sub tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-text-secondary text-lg md:text-xl mb-4 max-w-2xl mx-auto"
        >
          Walk more, scroll less. Earn screen time with every step.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-text-muted text-base mb-10 font-mono"
        >
          The digital wellbeing app you can&apos;t cheat.
        </motion.p>

        {/* Step → Neon conversion animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="flex items-center justify-center gap-4 mb-12 font-mono text-sm md:text-base"
        >
          <span className="text-text-secondary">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-neon-cyan"
            >
              1,000 steps
            </motion.span>
          </span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-neon-green"
          >
            →
          </motion.span>
          <span className="text-neon-green font-bold">1,000 Neon</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="text-neon-green"
          >
            →
          </motion.span>
          <span className="text-neon-orange">15 min session</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <NeonButton href="https://apps.apple.com/app/id6756630160" size="lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </NeonButton>
          <NeonButton href="https://bridge.thewayoutapp.com/" variant="orange-outline" size="lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Token Bridge
          </NeonButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          <a
            href="https://x.com/wayoutapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 whitespace-nowrap px-5 py-2.5 border border-white/10 rounded-full text-text-secondary hover:text-text-primary hover:border-neon-green/30 transition-all"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-xs font-mono">X</span>
          </a>
          {/* <a
            href="https://dexscreener.com/solana/11111111111111111111111111111111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 whitespace-nowrap px-5 py-2.5 border border-white/10 rounded-full text-text-secondary hover:text-text-primary hover:border-neon-green/30 transition-all"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 3v18h18M7 16l4-4 4 4 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-mono">DEX</span>
          </a> */}
          <a
            href="/whitepaper"
            className="inline-flex items-center gap-2.5 whitespace-nowrap px-5 py-2.5 border border-white/10 rounded-full text-text-secondary hover:text-text-primary hover:border-neon-cyan/30 transition-all"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 12h6M9 16h6M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 2v7h7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-mono">White Paper</span>
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          {["FREE", "iOS 17+", "9 LANGUAGES"].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 border border-neon-green/30 rounded-full text-xs font-mono text-neon-green/70 tracking-wider"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-green/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-neon-green rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
