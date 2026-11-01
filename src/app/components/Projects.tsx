import PageHeader from "./PageHeader";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "@/app/data/projects";
import { FiArrowUpRight } from "react-icons/fi";
import { buttonArrow, sectionPadding } from "@/app/lib/styles";
import { ButtonLink } from "./ui/Button";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`scroll-mt-24 bg-white ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl">
        <PageHeader
          id="projects-heading"
          eyebrow="Portfolio"
          title={
            <>
              All <span className="italic text-accent">projects</span>
            </>
          }
          description="Four projects spanning market data, news, fitness, and reading. Each one links to its live demo, source code, and a detailed case study."
          meta={[
            `${String(projects.length).padStart(2, "0")} projects`,
            "Live demos",
            "Case studies",
          ]}
        />

        <Reveal group className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/contact" variant="secondary">
            Discuss a project
            <FiArrowUpRight
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
