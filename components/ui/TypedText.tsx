"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TypedTextProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export default function TypedText({
  text,
  speed = 50,
  className = "",
  cursor = true,
}: TypedTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {cursor && (
        <span
          className={`inline-block w-[2px] h-[1em] bg-neon-green ml-1 align-middle ${
            done ? "animate-pulse" : ""
          }`}
        />
      )}
    </span>
  );
}
