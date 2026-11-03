import { ArrowUpRight, Braces, Server, ShieldCheck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui/Button";
import { buttonArrow, sectionPadding } from "@/app/lib/styles";

interface SkillCategory {
  title: string;
  description: string;
  Icon: LucideIcon;
  skills: string[];
}

/**
 * Skills are grouped from the stack actually used across the projects in
 * `src/app/data/projects.ts` — update both together.
 */
const categories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces, component structure, and the details that make them feel right.",
    Icon: Braces,
    skills: [
      "React.js",
      "Next.js App Router",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "HTML & CSS",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Server-side logic, data storage, and the APIs that connect the product.",
    Icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "API Integration",
    ],
  },
  {
    title: "Auth & Data",
    description:
      "Account flows, protected routes, and client-side state that stays predictable.",
    Icon: ShieldCheck,
    skills: [
      "JWT Authentication",
      "Better Auth",
      "Next.js Proxy",
      "Protected Routes",
      "React Context API",
      "localStorage",
    ],
  },
  {
    title: "Tools & Libraries",
    description:
      "Everyday tools and the supporting libraries used across the projects.",
    Icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "React Icons",
      "Recharts",
      "React Hot Toast",
    ],
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

        <Reveal group className="grid gap-4 md:grid-cols-2">
          {categories.map(({ title, description, Icon, skills }, index) => (
            <article
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-linear-to-b from-white to-surface/60 p-6 shadow-[0_2px_12px_-8px_rgba(20,22,16,0.3)] transition duration-300 ease-out-quint hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_45px_-30px_rgba(20,22,16,0.45)]"
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

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/10 transition duration-300 ease-out-quint group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-lg font-semibold tracking-tight text-ink">
                      {title}
                    </h2>
                    <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {description}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <ul className="flex flex-wrap gap-2 border-t border-line/70 pt-5">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-line/70 bg-surface px-2.5 py-1 text-xs font-medium text-ink-soft transition duration-200 hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Reveal>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/projects" variant="secondary">
            See these skills in my projects
            <ArrowUpRight
              aria-hidden="true"
              className={buttonArrow}
              size={18}
            />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
