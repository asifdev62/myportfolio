import type { ReactNode } from "react";
import { revealDelay } from "@/app/lib/motion";

interface PageHeaderProps {
  /** Id applied to the `h1`, for the section's `aria-labelledby`. */
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** Small supporting facts shown under the description. */
  meta?: string[];
  className?: string;
}

/**
 * Editorial page intro used by the dedicated index pages. It puts the large
 * display title and the supporting copy side by side on desktop while keeping
 * a single, compact column on mobile.
 */
export default function PageHeader({
  id,
  eyebrow,
  title,
  description,
  meta = [],
  className = "",
}: PageHeaderProps) {
  return (
    <header
      className={`relative mb-12 border-b border-line pb-10 sm:pb-12 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-16 h-44 w-44 rounded-full bg-accent-soft/60 blur-3xl"
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="animate-fade-up" style={revealDelay(0)}>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
            <p className="eyebrow">{eyebrow}</p>
          </div>

          <h1
            id={id}
            className="mt-5 max-w-2xl text-balance font-display text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em] text-ink"
          >
            {title}
          </h1>
        </div>

        <div className="animate-fade-up lg:pb-1" style={revealDelay(120)}>
          <p className="max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
            {description}
          </p>

          {meta.length > 0 ? (
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
              {meta.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </header>
  );
}
