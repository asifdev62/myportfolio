const stack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Better Auth",
  "Git",
  "Github",
];

/**
 * Slow, CSS-only technology strip under the hero. The list is duplicated so
 * the -50% translate loops seamlessly; the copy is hidden from assistive tech.
 */
export default function TechMarquee() {
  return (
    <div
      className="marquee border-y border-line bg-surface-alt/80"
      role="group"
      aria-label="Technologies I work with"
    >
      <div className="marquee-mask overflow-hidden py-4">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex shrink-0 items-center gap-10 pr-10"
            >
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}




