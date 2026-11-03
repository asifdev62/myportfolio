import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Heading content; pass JSX to style individual words (e.g. an italic accent). */
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  /** Heading level. Section components that lead a dedicated page use "h1". */
  as?: "h1" | "h2";
  /** Id applied to the heading, for `aria-labelledby` on the section. */
  id?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  id,
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
          <p className="eyebrow">{eyebrow}</p>
          {align === "center" ? (
            <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
          ) : null}
        </div>
      ) : null}

      <Heading
        id={id}
        className="text-balance font-display text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.02em] text-ink"
      >
        {title}
      </Heading>

      {description ? (
        <p className="text-pretty text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
