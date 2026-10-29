"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode, Ref } from "react";

type RevealVariant = "up" | "fade" | "scale";
type RevealTag = "div" | "dl" | "ul";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in milliseconds, applied via the `--reveal-delay` token. */
  delay?: number;
  /** Entrance style. */
  variant?: RevealVariant;
  /**
   * Treat this wrapper as the layout container and stagger its direct
   * children (e.g. a grid) instead of animating the wrapper as one block.
   */
  group?: boolean;
  /** Element to render, so semantic containers like `<dl>` stay intact. */
  as?: RevealTag;
  /** Extra classes for the wrapper (e.g. `h-full` inside a grid). */
  className?: string;
}

/**
 * Reveals its children when they scroll into view.
 *
 * Children stay server-rendered — only this thin wrapper is a Client
 * Component. The hidden state lives in CSS (`.reveal` / `.reveal-group`) with
 * a `<noscript>` fallback, so content remains visible when JavaScript is
 * unavailable, and `prefers-reduced-motion` neutralises the motion entirely.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  group = false,
  as = "div",
  className = "",
}: RevealProps) {
  const nodeRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
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
      { threshold: 0.05, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const setNode = (node: HTMLElement | null) => {
    nodeRef.current = node;
  };

  // The runtime element can be a div, dl, or ul; the ref is cast because the
  // callback itself accepts any HTMLElement.
  const Tag = as as "div";

  return (
    <Tag
      ref={setNode as Ref<HTMLDivElement>}
      data-visible={visible ? "true" : undefined}
      data-variant={variant !== "up" ? variant : undefined}
      className={`${group ? "reveal-group" : "reveal"} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
