import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
  /** Marks the card as one of the latest projects. */
  featured?: boolean;
}

function getMonogram(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl">
      {/* Screenshot header. Falls back to a monogram if a project has no image. */}
      <div className="relative flex h-44 items-end justify-between overflow-hidden bg-linear-to-br from-green-50 via-white to-green-50 p-6 sm:h-52">
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-green-100/80 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-12 left-10 h-32 w-32 rounded-full bg-teal-50 blur-2xl"
        />

        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            sizes="(min-width: 1024px) 40rem, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-lg font-bold text-white shadow-lg shadow-green-700/20">
            {getMonogram(project.name)}
          </span>
        )}

        <span className="relative ml-auto rounded-full border border-green-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700 backdrop-blur-sm">
          {featured ? "Latest" : "Project"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {project.name}
        </h3>

        {project.alternateName ? (
          <p className="mt-1 text-sm font-medium text-green-700">
            {project.alternateName}
          </p>
        ) : null}

        <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
          {project.tagline}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            View Details
            <FiArrowUpRight aria-hidden="true" size={18} />
          </Link>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Live Demo
            <FiArrowUpRight aria-hidden="true" size={18} />
          </a>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub repository`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white text-lg text-gray-700 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <FiGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
