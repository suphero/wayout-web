import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WayOut — Walk More, Scroll Less",
  description:
    "The digital wellbeing app you can't cheat. Earn screen time with every step. Walk to Earn Neon, spend Neon to unlock apps.",
  keywords: [
    "digital wellbeing",
    "screen time",
    "walk to earn",
    "iOS app",
    "gamification",
    "cyberpunk",
  ],
  openGraph: {
    title: "WayOut — Walk More, Scroll Less",
    description:
      "Stop scrolling. Start walking. The digital wellbeing app you can't cheat.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Wayoutonx",
    creator: "@Wayoutonx",
    title: "WayOut — Walk More, Scroll Less",
    description:
      "Stop scrolling. Start walking. The digital wellbeing app you can't cheat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable} antialiased scanline-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
