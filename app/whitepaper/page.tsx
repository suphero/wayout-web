"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const sections = [
  { id: "abstract", label: "Abstract" },
  { id: "problem", label: "Problem" },
  { id: "protocol", label: "Protocol" },
  { id: "neon-economy", label: "Neon Economy" },
  { id: "security", label: "Security" },
  { id: "anti-cheat", label: "Anti-Cheat" },
  { id: "progression", label: "Progression" },
  { id: "wout-token", label: "WOUT Token" },
  { id: "pro", label: "WayOut PRO" },
  { id: "privacy", label: "Privacy" },
  { id: "roadmap", label: "Roadmap" },
];

function SectionTitle({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <motion.h2
      {...fadeIn}
      id={id}
      className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-20 mb-6 scroll-mt-24"
    >
      <span className="text-neon-green font-mono text-lg mr-3">{number}</span>
      {title}
    </motion.h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      {...fadeIn}
      className="text-text-secondary text-base leading-relaxed mb-4"
    >
      {children}
    </motion.p>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      {...fadeIn}
      className="bg-bg-secondary/80 border border-neon-green/20 rounded-xl p-6 my-6 font-mono text-sm"
    >
      {children}
    </motion.div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-neon-green font-medium">{children}</span>;
}

function CyanHighlight({ children }: { children: React.ReactNode }) {
  return <span className="text-neon-cyan font-medium">{children}</span>;
}

function PurpleHighlight({ children }: { children: React.ReactNode }) {
  return <span className="text-neon-purple font-medium">{children}</span>;
}

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="grid-floor" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors mb-8 font-mono text-sm"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-neon-green neon-text-green mb-4">
            White Paper
          </h1>
          <p className="font-mono text-sm text-text-muted tracking-wider mb-2">
            // WayOut Protocol v1.0
          </p>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            The digital wellbeing protocol powered by real-world movement.
            Walk to earn, spend to unlock.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24 flex flex-col lg:flex-row gap-12">
        {/* Table of Contents - sticky sidebar */}
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:sticky lg:top-8 lg:self-start lg:w-56 shrink-0 hidden lg:block"
        >
          <p className="font-mono text-xs text-neon-green/70 tracking-wider mb-4">
            // TABLE OF CONTENTS
          </p>
          <ul className="space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-text-muted hover:text-neon-green text-sm font-mono transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Abstract */}
          <SectionTitle id="abstract" number="00" title="Abstract" />
          <Paragraph>
            WayOut is a digital wellbeing application that creates an
            economy around physical movement. Users earn{" "}
            <Highlight>Neon</Highlight> currency by walking, then spend it to
            temporarily unlock blocked applications. Unlike typical screen time
            tools that rely on willpower and reminders, WayOut enforces
            restrictions at the{" "}
            <CyanHighlight>operating system level</CyanHighlight> using
            Apple&apos;s ScreenTime API — making bypass impossible.
          </Paragraph>
          <Paragraph>
            The protocol operates on a simple principle:{" "}
            <Highlight>1 step = 1 Neon = 1 second</Highlight> of screen time.
            This creates a direct, tangible relationship between physical
            activity and digital access, transforming screen time management
            from a restriction into a game.
          </Paragraph>

          {/* Problem */}
          <SectionTitle id="problem" number="01" title="The Problem" />
          <Paragraph>
            Existing screen time management tools share a fundamental flaw:
            they are advisory, not enforceable. Users can dismiss
            notifications, close apps, or simply ignore warnings. These tools
            rely on willpower — the very resource that is depleted by
            excessive screen use.
          </Paragraph>
          <CodeBlock>
            <p className="text-text-muted mb-2">
              // Typical screen time app flow
            </p>
            <p className="text-neon-orange">
              User sets limit → Notification appears → User dismisses →
              Continues scrolling
            </p>
            <p className="text-text-muted mt-4 mb-2">
              // WayOut protocol flow
            </p>
            <p className="text-neon-green">
              Apps blocked at OS level → Walk to earn Neon → Spend Neon to
              unlock → Time expires → Apps blocked again
            </p>
          </CodeBlock>
          <Paragraph>
            WayOut solves this by replacing willpower with an economic system.
            The motivation is not guilt or reminders — it&apos;s a tangible
            currency that users earn through physical movement and spend for
            digital access.
          </Paragraph>

          {/* Protocol */}
          <SectionTitle id="protocol" number="02" title="The Protocol" />
          <Paragraph>
            The WayOut protocol operates in three phases:
          </Paragraph>

          <motion.div {...fadeIn} className="space-y-6 my-8">
            {[
              {
                step: "01",
                title: "WALK",
                desc: "The device pedometer tracks every step in real-time. Steps are validated through multi-layer anti-cheat and converted to Neon at a 1:1 ratio.",
                color: "neon-cyan",
              },
              {
                step: "02",
                title: "EARN",
                desc: "Validated steps are claimable from the wallet. Users manually claim to convert unclaimed steps into spendable Neon currency.",
                color: "neon-green",
              },
              {
                step: "03",
                title: "UNLOCK",
                desc: "Neon is spent to unlock blocked apps for timed sessions. When the session expires, apps are blocked again at the OS level.",
                color: "neon-orange",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`flex gap-4 items-start bg-bg-secondary/60 border border-${item.color}/20 rounded-xl p-6`}
              >
                <span
                  className={`font-mono text-xs text-${item.color}/60 mt-1`}
                >
                  STEP {item.step}
                </span>
                <div>
                  <h4
                    className={`font-display text-lg font-bold text-${item.color} mb-1`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Neon Economy */}
          <SectionTitle id="neon-economy" number="03" title="Neon Economy" />
          <Paragraph>
            Neon is the in-app currency that powers the entire WayOut
            ecosystem. It operates as a{" "}
            <Highlight>closed-loop economy</Highlight> with deterministic
            conversion rates and no external market dependency.
          </Paragraph>

          <CodeBlock>
            <p className="text-text-muted mb-3">// CONVERSION RATES</p>
            <div className="space-y-2">
              <p>
                <span className="text-neon-cyan">1 step</span>{" "}
                <span className="text-text-muted">=</span>{" "}
                <span className="text-neon-green">1 Neon</span>{" "}
                <span className="text-text-muted">=</span>{" "}
                <span className="text-neon-orange">1 second</span>
              </p>
            </div>
            <p className="text-text-muted mt-4 mb-3">// SESSION BREAKDOWN</p>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-text-secondary">
                  15 min = 900 seconds
                </span>
                <span className="text-neon-green">900 Neon</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">
                  + Refundable credit
                </span>
                <span className="text-neon-cyan">100 Neon</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                <span className="text-text-primary font-bold">
                  Total session cost
                </span>
                <span className="text-neon-green font-bold">1,000 Neon</span>
              </div>
            </div>
            <p className="text-text-muted text-xs mt-3">
              Close session early → unused credit refunded to wallet
            </p>
          </CodeBlock>

          <Paragraph>
            The economy is backed by an{" "}
            <Highlight>append-only transaction ledger</Highlight> (SQLite) that
            serves as the single source of truth. Every earn, spend, and refund
            is recorded as an immutable transaction with a running balance,
            ensuring O(1) balance lookups and full audit trail.
          </Paragraph>

          <Paragraph>
            Free users have a <Highlight>10,000 Neon wallet cap</Highlight>.
            PRO users enjoy unlimited storage. The cap encourages regular
            spending and prevents hoarding.
          </Paragraph>

          {/* Security */}
          <SectionTitle id="security" number="04" title="Security Model" />
          <Paragraph>
            WayOut&apos;s enforcement relies on Apple&apos;s{" "}
            <CyanHighlight>Family Controls</CyanHighlight> and{" "}
            <CyanHighlight>ScreenTime API</CyanHighlight> — the same
            frameworks used for parental controls. This provides OS-level app
            blocking that cannot be bypassed by:
          </Paragraph>

          <motion.ul
            {...fadeIn}
            className="list-none space-y-3 my-6 pl-4"
          >
            {[
              "Closing or force-quitting the app",
              "Restarting the device",
              "Side-loading or VPN workarounds",
              "App overlay or notification dismissal",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-neon-green mt-1 text-sm">&#9656;</span>
                <span className="text-text-secondary text-sm">{item}</span>
              </li>
            ))}
          </motion.ul>

          <Paragraph>
            The blocking persists even when WayOut is not running. Device
            Activity Monitor extensions run independently, enforcing time
            limits and re-blocking apps when sessions expire.
          </Paragraph>

          <motion.div
            {...fadeIn}
            className="overflow-x-auto my-8"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-mono text-xs text-text-muted uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="text-left py-3 px-4 font-display text-sm text-neon-green">
                    WayOut
                  </th>
                  <th className="text-left py-3 px-4 font-display text-sm text-text-muted">
                    Typical Apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Blocking Method",
                    wayout: "OS-level (ScreenTime API)",
                    others: "App overlay / reminder",
                  },
                  {
                    feature: "Can Be Bypassed",
                    wayout: "No",
                    others: "Yes",
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
                ].map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/5"
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

          {/* Anti-Cheat */}
          <SectionTitle
            id="anti-cheat"
            number="05"
            title="Anti-Cheat Engine"
          />
          <Paragraph>
            WayOut employs a multi-layer validation system to ensure every
            step counted is a genuine physical step:
          </Paragraph>

          <motion.div {...fadeIn} className="space-y-4 my-8">
            {[
              {
                title: "Cadence Check",
                desc: "Step frequency is validated against human walking patterns. Abnormal cadences (device shaking, mechanical vibration) are rejected.",
              },
              {
                title: "Monotonicity Validation",
                desc: "The pedometer counter must increase monotonically. Any resets or backward jumps are flagged and discarded.",
              },
              {
                title: "Secure Timestamps",
                desc: "Each step batch is timestamped using system-secure clocks. Time manipulation is detected and nullified.",
              },
              {
                title: "Rate Limiting",
                desc: "Maximum step rate is capped to physiologically plausible limits. Superhuman step rates are automatically rejected.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start"
              >
                <span className="text-neon-green text-lg mt-0.5">
                  &#9656;
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Progression */}
          <SectionTitle
            id="progression"
            number="06"
            title="Progression System"
          />
          <Paragraph>
            WayOut features an{" "}
            <PurpleHighlight>11-league progression system</PurpleHighlight>{" "}
            with exponential XP curves. Users earn XP alongside Neon for every
            step, advancing through increasingly prestigious ranks.
          </Paragraph>

          <motion.div
            {...fadeIn}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-8"
          >
            {[
              { name: "Awakening", icon: "💤", color: "#888888" },
              { name: "Novice", icon: "🌱", color: "#a0a0a0" },
              { name: "Scout", icon: "🔍", color: "#4ade80" },
              { name: "Walker", icon: "🚶", color: "#0DF259" },
              { name: "Ranger", icon: "🏃", color: "#00ffff" },
              { name: "Pathfinder", icon: "🧭", color: "#3b82f6" },
              { name: "Explorer", icon: "🗺️", color: "#8b5cf6" },
              { name: "Nomad", icon: "⚡", color: "#B400FF" },
              { name: "Voyager", icon: "🚀", color: "#FF1493" },
              { name: "Titan", icon: "🏆", color: "#FFA500" },
              { name: "Legend", icon: "👑", color: "#FFD700" },
            ].map((league) => (
              <div
                key={league.name}
                className="bg-bg-secondary/60 border border-white/10 rounded-lg p-3 text-center"
              >
                <span className="text-xl block mb-1">{league.icon}</span>
                <span
                  className="font-display text-xs font-bold"
                  style={{ color: league.color }}
                >
                  {league.name}
                </span>
              </div>
            ))}
          </motion.div>

          <Paragraph>
            The XP curve is exponential, meaning early ranks are achievable
            quickly while higher ranks require sustained commitment. The{" "}
            <Highlight>Legend</Highlight> rank features an infinite endgame —
            the XP counter continues indefinitely for dedicated walkers.
          </Paragraph>

          {/* WOUT Token */}
          <SectionTitle id="wout-token" number="07" title="WOUT Token" />
          <Paragraph>
            <Highlight>WOUT</Highlight> is a Solana SPL token that bridges the
            on-chain and in-app economies. Users can redeem WOUT tokens for
            in-app Neon at a <Highlight>1:1 ratio</Highlight> through the
            token bridge feature.
          </Paragraph>

          <CodeBlock>
            <p className="text-text-muted mb-3">
              // TOKEN BRIDGE FLOW
            </p>
            <p className="text-neon-purple">
              Hold WOUT (Solana) → Scan QR in app → Verify wallet → Claim Neon
              at 1:1
            </p>
            {/* <p className="text-text-muted mt-4 mb-2">
              // CONTRACT ADDRESS (SOLANA)
            </p>
            <p className="text-neon-green text-xs break-all">
              11111111111111111111111111111111
            </p> */}
          </CodeBlock>

          <Paragraph>
            The token bridge is one-directional: WOUT converts to Neon, but
            Neon cannot be converted back to WOUT. This maintains the integrity
            of both economies and prevents arbitrage.
          </Paragraph>

          {/* PRO */}
          <SectionTitle id="pro" number="08" title="WayOut PRO" />
          <Paragraph>
            WayOut PRO unlocks the full protocol with enhanced capabilities:
          </Paragraph>

          <motion.div
            {...fadeIn}
            className="overflow-x-auto my-8"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-mono text-xs text-text-muted uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="text-center py-3 px-4 font-display text-sm text-text-secondary">
                    Free
                  </th>
                  <th className="text-center py-3 px-4 font-display text-sm text-neon-purple">
                    PRO
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Wallet Cap",
                    free: "10,000 Neon",
                    pro: "Unlimited",
                  },
                  { feature: "Earning Speed", free: "1x", pro: "2x" },
                  {
                    feature: "Unlock Duration",
                    free: "15 min fixed",
                    pro: "5-60 min custom",
                  },
                  {
                    feature: "Timer Mode",
                    free: "Wall clock",
                    pro: "+ Screen time only",
                  },
                  { feature: "Analytics", free: "7 days", pro: "Unlimited" },
                  {
                    feature: "Debt System",
                    free: "Limited",
                    pro: "Extended",
                  },
                ].map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/5"
                  >
                    <td className="py-3 px-4 text-text-primary text-sm">
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

          <Paragraph>
            PRO also includes the <PurpleHighlight>Debt System</PurpleHighlight>{" "}
            — users can borrow Neon against future walks. This provides
            flexibility for users who need screen time before their next walk,
            while maintaining the economy&apos;s integrity through mandatory
            repayment.
          </Paragraph>

          <CodeBlock>
            <p className="text-text-muted mb-3">// PRICING</p>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-text-secondary">Monthly</span>
                <span className="text-neon-purple">$5/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">
                  Yearly (2 months free)
                </span>
                <span className="text-neon-purple">$50/yr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Lifetime</span>
                <span className="text-neon-purple">$100 once</span>
              </div>
            </div>
          </CodeBlock>

          {/* Privacy */}
          <SectionTitle id="privacy" number="09" title="Privacy" />
          <Paragraph>
            WayOut is built with a{" "}
            <Highlight>privacy-first architecture</Highlight>. All data — step
            counts, Neon balance, transaction history, app blocking
            preferences — stays entirely on the user&apos;s device.
          </Paragraph>

          <motion.ul
            {...fadeIn}
            className="list-none space-y-3 my-6 pl-4"
          >
            {[
              "No analytics or tracking SDKs",
              "No cloud sync or server-side storage",
              "No user accounts required",
              "Transaction ledger stored locally in encrypted SQLite",
              "App selection data protected by Apple's privacy framework",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-neon-green mt-1 text-sm">&#9656;</span>
                <span className="text-text-secondary text-sm">{item}</span>
              </li>
            ))}
          </motion.ul>

          {/* Roadmap */}
          <SectionTitle id="roadmap" number="10" title="Roadmap" />

          <motion.div {...fadeIn} className="space-y-6 my-8">
            {[
              {
                phase: "Phase 1",
                title: "Foundation",
                status: "COMPLETE",
                statusColor: "text-neon-green",
                items: [
                  "Core walk-to-earn economy",
                  "OS-level app blocking",
                  "Anti-cheat engine",
                  "11-league progression system",
                  "9 language support",
                ],
              },
              {
                phase: "Phase 2",
                title: "Token Integration",
                status: "COMPLETE",
                statusColor: "text-neon-green",
                items: [
                  "WOUT token launch on Solana",
                  "In-app token bridge",
                  "DexScreener listing",
                ],
              },
              {
                phase: "Phase 3",
                title: "PRO & Advanced Economy",
                status: "COMPLETE",
                statusColor: "text-neon-green",
                items: [
                  "WayOut PRO subscription",
                  "Debt system",
                  "Custom unlock durations",
                  "Advanced analytics",
                  "Append-only transaction ledger",
                ],
              },
              {
                phase: "Phase 4",
                title: "Expansion",
                status: "IN PROGRESS",
                statusColor: "text-neon-cyan",
                items: [
                  "Social features & leaderboards",
                  "Achievement system",
                  "Widget enhancements",
                  "Community challenges",
                ],
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="bg-bg-secondary/60 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-text-muted">
                    {phase.phase}
                  </span>
                  <span className="font-display text-lg font-bold text-text-primary">
                    {phase.title}
                  </span>
                  <span
                    className={`ml-auto font-mono text-xs ${phase.statusColor} tracking-wider`}
                  >
                    [{phase.status}]
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-text-secondary text-sm"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          phase.status === "COMPLETE"
                            ? "bg-neon-green"
                            : "bg-neon-cyan"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            {...fadeIn}
            className="mt-20 pt-8 border-t border-white/10 text-center"
          >
            <p className="font-mono text-xs text-text-muted tracking-wider mb-4">
              // END OF DOCUMENT
            </p>
            <p className="text-text-secondary text-sm mb-6">
              WayOut White Paper v1.0 — Last updated March 2026
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neon-green hover:neon-text-green transition-all font-mono text-sm"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
