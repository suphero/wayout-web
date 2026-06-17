"use client";

import { motion } from "framer-motion";
import NeonButton from "../ui/NeonButton";

export default function FooterSection() {
  return (
    <footer className="relative py-24 px-4">
      {/* Final CTA */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-4"
        >
          Stop Scrolling.{" "}
          <span className="text-neon-green neon-text-green">
            Start Walking.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg mb-8"
        >
          The digital wellbeing app you can&apos;t cheat.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <NeonButton href="https://apps.apple.com/app/id6756630160" size="lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </NeonButton>
        </motion.div>
      </div>

      {/* Contract address */}
      {/* <div className="max-w-6xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-bg-secondary/60 border border-neon-green/20 rounded-xl p-4 text-center"
        >
          <p className="font-mono text-xs text-text-muted mb-2 tracking-wider">
            // CONTRACT ADDRESS (SOLANA)
          </p>
          <a
            href="https://dexscreener.com/solana/11111111111111111111111111111111"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-neon-green hover:neon-text-green transition-all break-all"
          >
            11111111111111111111111111111111
          </a>
          <div className="mt-3">
            <a
              href="https://dexscreener.com/solana/11111111111111111111111111111111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View on DexScreener
            </a>
          </div>
        </motion.div>
      </div> */}

      {/* Footer links */}
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-display text-xl font-bold text-neon-green">
            WayOut
          </span>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {/* X (Twitter) */}
            <a
              href="https://x.com/wayoutapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* DexScreener */}
            {/* <a
              href="https://dexscreener.com/solana/11111111111111111111111111111111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="DexScreener"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 3v18h18M7 16l4-4 4 4 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a> */}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a
              href="https://bridge.thewayoutapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-orange text-neon-orange/70 transition-colors font-mono"
            >
              Bridge
            </a>
            <a
              href="/whitepaper"
              className="hover:text-neon-green transition-colors"
            >
              White Paper
            </a>
            <a
              href="https://suphero.netlify.app/wayout/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-green transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-green transition-colors"
            >
              Terms of Use
            </a>
          </div>

          {/* Copyright */}
          <span className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} WayOut. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
