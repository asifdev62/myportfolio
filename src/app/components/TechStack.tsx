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
];

/**
 * Static technology strip under the hero. It intentionally does not scroll:
 * continuous motion is reserved for the one-time hero entrance.
 */
export default function TechStack() {
  return (
    <div
      className="border-y border-line bg-surface-alt/60"
      role="group"
      aria-label="Technologies I work with"
    >
      <ul className="mx-auto flex max-w-7xl flex-wrap  items-center justify-center gap-x-8 gap-y-3 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:px-8 lg:px-12">
        {stack.map((tech) => (
          <li key={tech} className="whitespace-nowrap">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}



