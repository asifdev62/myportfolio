import SectionHeading from "./SectionHeading";
import { FiCode, FiLayers, FiServer, FiTool } from "react-icons/fi";
import type { IconType } from "react-icons";

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
      className="scroll-mt-24 bg-[#fafbf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, description, Icon, skills }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-4xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg sm:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700">
                <Icon aria-hidden="true" />
              </span>

              <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                {description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
