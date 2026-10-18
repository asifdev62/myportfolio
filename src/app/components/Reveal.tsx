"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in milliseconds, applied via the `--reveal-delay` token. */
  delay?: number;
  /** Extra classes for the wrapper (e.g. `h-full` inside a grid). */
  className?: string;
}

/**
 * Reveals its children with a fade-up when they scroll into view.
 *
 * Children stay server-rendered — only this thin wrapper is a Client
 * Component. The hidden state lives in CSS (`.reveal`) with a `<noscript>`
 * fallback, so content remains visible when JavaScript is unavailable, and
 * `prefers-reduced-motion` neutralises the animation entirely.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Once the animation finishes, drop the reveal classes so the wrapper's
  // `transform` no longer overrides hover transforms on the same element,
  // while keeping any layout classes (e.g. `h-full`) passed in.
  const animationProps = settled
    ? { className }
    : {
        className: `reveal ${className}`.trim(),
        style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
      };

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : undefined}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setSettled(true);
      }}
      {...animationProps}
    >
      {children}
    </div>
  );
}
