import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { latestProjects } from "@/app/data/projects";

export default function LatestProjects() {
  return (
    <section
      aria-labelledby="latest-projects-heading"
      className="border-b border-gray-100 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Recent work"
          title="Latest Projects"
          description="A closer look at what I have been building most recently — two full-stack applications with live demos and source code."
          id="latest-projects-heading"
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {latestProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            View All Projects
            <FiArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
