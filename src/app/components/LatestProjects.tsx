import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { latestProjects } from "@/app/data/projects";
import { FiArrowUpRight } from "react-icons/fi";
import { buttonArrow, projectGrid, sectionPadding } from "@/app/lib/styles";
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
          description="A closer look at what I have been building most recently — three applications with live demos and source code."
          id="latest-projects-heading"
          className="mb-12"
        />

        {/* Same grid as /projects, so featured cards keep an identical size. */}
        <Reveal group className={projectGrid}>
          {latestProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
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
