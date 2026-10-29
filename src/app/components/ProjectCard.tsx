import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/app/data/projects";
import { ButtonLink } from "./ui/Button";
import { buttonArrow } from "@/app/lib/styles";

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
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-[400ms] ease-out-quint hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_28px_60px_-32px_rgba(20,22,16,0.35)]">
      {/* Screenshot header. Falls back to a monogram if a project has no image. */}
      <div className="relative flex aspect-video items-end justify-between overflow-hidden bg-linear-to-br from-surface-alt via-white to-accent-soft/60 p-5">
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-accent-soft/80 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-12 left-10 h-32 w-32 rounded-full bg-surface-alt blur-2xl"
        />

        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out-quint group-hover:scale-[1.03]"
          />
        ) : (
          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-white shadow-[0_12px_30px_-14px_var(--color-accent)]">
            {getMonogram(project.name)}
          </span>
        )}

        <span className="relative ml-auto rounded-full border border-line bg-white/90 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-accent backdrop-blur-sm">
          {featured ? "Latest" : "Project"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
          {project.name}
        </h3>

        {project.alternateName ? (
          <p className="mt-1 text-sm font-medium text-accent">
            {project.alternateName}
          </p>
        ) : null}

        <p className="mt-2 flex-1 text-sm leading-6 text-muted">
          {project.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <ButtonLink href={`/projects/${project.slug}`} size="sm">
            View details
            <FiArrowUpRight
              aria-hidden="true"
              className={buttonArrow}
              size={17}
            />
          </ButtonLink>

          <ButtonLink
            href={project.liveUrl}
            external
            variant="secondary"
            size="sm"
          >
            Live demo
            <FiArrowUpRight
              aria-hidden="true"
              className={buttonArrow}
              size={17}
            />
          </ButtonLink>

          <ButtonLink
            href={project.repoUrl}
            external
            variant="secondary"
            size="icon"
            className="ml-auto"
            aria-label={`${project.name} GitHub repository`}
          >
            <FiGithub aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
