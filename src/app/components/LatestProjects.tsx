import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { latestProjects } from "@/app/data/projects";
import { FiArrowUpRight } from "react-icons/fi";
import { buttonArrow, sectionPadding } from "@/app/lib/styles";
import { ButtonLink } from "./ui/Button";

export default function LatestProjects() {
  return (
    <section
      aria-labelledby="latest-projects-heading"
      className={`border-b border-line bg-white ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Recent work"
          title="Latest projects"
          description="A closer look at what I have been building most recently — two full-stack applications with live demos and source code."
          id="latest-projects-heading"
          className="mb-12"
        />

        {/* Centered flex tracks mirror the Projects grid columns so the
            featured cards keep the exact same size; a partial row centers. */}
        <Reveal group className="flex flex-wrap justify-center gap-6">
          {latestProjects.map((project) => (
            <div
              key={project.slug}
              className="h-full w-full md:w-[calc(50%_-_0.75rem)] xl:w-[calc(33.333%_-_1rem)]"
            >
              <ProjectCard project={project} featured />
            </div>
          ))}
        </Reveal>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/projects">
            View all projects
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
