import PageHeader from "./PageHeader";
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

const totalSkills = categories.reduce(
  (total, category) => total + category.skills.length,
  0,
);

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={`scroll-mt-24 bg-surface ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl">
        <PageHeader
          id="skills-heading"
          eyebrow="Skills"
          title={
            <>
              Tools I <span className="italic text-accent">work</span> with
            </>
          }
          description="The technologies I use to design, build, and ship full-stack web applications."
          meta={[
            `${String(categories.length).padStart(2, "0")} categories`,
            `${String(totalSkills).padStart(2, "0")} skills`,
            "Frontend + backend",
          ]}
        />

        <Reveal group className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, description, Icon, skills }, index) => (
            <article
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-linear-to-b from-white to-surface/60 p-5 shadow-[0_2px_12px_-8px_rgba(20,22,16,0.3)] transition duration-300 ease-out-quint hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_45px_-30px_rgba(20,22,16,0.45)]"
            >
              {/* Soft wash + accent rule that draws in on hover. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-accent-soft/70 blur-2xl transition-opacity duration-300"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out-quint group-hover:scale-x-100"
              />

              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-lg text-accent ring-1 ring-inset ring-accent/10 transition duration-300 ease-out-quint group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
                  <Icon aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
                {title}
              </h3>

              <p className="mt-1.5 min-h-12 text-xs leading-6 text-muted">
                {description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line/70 bg-surface px-2 py-1 text-[11px] font-medium text-ink-soft transition duration-200 hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
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
