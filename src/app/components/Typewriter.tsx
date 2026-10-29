"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  /** Milliseconds before typing starts. */
  delay?: number;
  /** Milliseconds per character. */
  speed?: number;
  /** Extra classes for the wrapper (e.g. text colour). */
  className?: string;
  /** Draw an accent underline once the text is complete. */
  underline?: boolean;
}

/**
 * Types a single line of text without any animation dependency.
 *
 * The full string is always present twice: once visually hidden for screen
 * readers and once invisible to reserve the final width, so the surrounding
 * layout never shifts as characters appear. The caret and underline respect
 * `prefers-reduced-motion`, and the full text is restored for print.
 */
export default function Typewriter({
  text,
  delay = 0,
  speed = 32,
  className = "",
  underline = false,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => {
        setDisplayed(text);
        setDone(true);
      });
      return () => cancelAnimationFrame(frame);
    }

    let index = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const typeNext = () => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        setDone(true);
        return;
      }

      timer = setTimeout(typeNext, speed);
    };

    const start = setTimeout(typeNext, delay);

    return () => {
      clearTimeout(start);
      if (timer) clearTimeout(timer);
    };
  }, [text, delay, speed]);

  const underlineDelay = delay + text.length * speed + 120;

  return (
    <span
      className={`relative inline-block whitespace-nowrap ${className}`.trim()}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="typewriter-full invisible">
        {text}
      </span>

      <span
        aria-hidden="true"
        className="typewriter-live absolute inset-y-0 left-0 flex items-center whitespace-pre"
      >
        {displayed}
        {!done ? <span className="typewriter-caret" /> : null}
      </span>

      {underline ? (
        <span
          aria-hidden="true"
          className="typewriter-underline"
          style={{ animationDelay: `${underlineDelay}ms` }}
        />
      ) : null}
    </span>
  );
}
