import type { CSSProperties } from "react";

/**
 * Inline style that sets the shared `--reveal-delay` token used by the CSS
 * entrance animations (`animate-fade-up`, `animate-scale-in`, `.reveal`).
 */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
