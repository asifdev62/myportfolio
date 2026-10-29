import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FiCode, FiLayers, FiServer, FiTool } from "react-icons/fi";
import type { IconType } from "react-icons";
import { sectionPadding } from "@/app/lib/styles";

interface SkillCategory {
  title: string;
  description: string;
  Icon: IconType;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive interfaces and application structure.",
    Icon: FiCode,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    description: "Server-side logic, data storage, and the APIs that connect them.",
    Icon: FiServer,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API Integration",
      "Authentication",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "The everyday tools behind the workflow.",
    Icon: FiTool,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Other Skills",
    description: "Additional skills that support the work.",
    Icon: FiLayers,
    skills: ["Responsive Web Design", "API Integration"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={`scroll-mt-24 bg-surface ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="The technologies I use to design, build, and ship full-stack web applications."
          as="h1"
          id="skills-heading"
          className="mb-12"
        />

        <Reveal group className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, description, Icon, skills }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition duration-[400ms] ease-out-quint hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_28px_60px_-32px_rgba(20,22,16,0.35)] sm:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-2xl text-accent transition-transform duration-300 ease-out-quint group-hover:-translate-y-0.5">
                <Icon aria-hidden="true" />
              </span>

              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>

              <p className="mt-2 text-sm leading-7 text-muted">
                {description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-soft transition duration-200 hover:border-accent/30 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
