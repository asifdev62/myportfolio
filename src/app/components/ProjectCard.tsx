import Image from "next/image";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "@/app/data/projects";
import { ButtonLink } from "./ui/Button";
import { buttonArrow } from "@/app/lib/styles";

interface ProjectCardProps {
  project: Project;
  /** Marks the card as one of the latest projects. */
  featured?: boolean;
}

/** Tech chips shown before the "+N" counter, so the row never wraps. */
const MAX_VISIBLE_TECH = 3;

function getMonogram(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const badgeClass =
  "absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm";

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const visibleTech = project.tech.slice(0, MAX_VISIBLE_TECH);
  const hiddenTechCount = project.tech.length - visibleTech.length;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-[0_2px_12px_-8px_rgba(20,22,16,0.3)] transition duration-300 ease-out-quint hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_26px_50px_-30px_rgba(20,22,16,0.45)]">
      {/* Screenshot, framed like a mounted print. Falls back to a monogram. */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-[0.7rem] bg-linear-to-br from-surface-alt via-white to-accent-soft/70">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out-quint group-hover:scale-[1.04]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-base font-bold text-white shadow-[0_10px_24px_-12px_var(--color-accent)]">
              {getMonogram(project.name)}
            </span>
          </span>
        )}

        <span
          className={`${badgeClass} ${
            featured
              ? "bg-accent/95 text-white shadow-[0_8px_20px_-12px_var(--color-accent)]"
              : "border border-white/70 bg-white/85 text-ink-soft"
          }`}
        >
          {featured ? (
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-white/80"
            />
          ) : null}
          {featured ? "Latest" : "Project"}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-1 pt-3.5 sm:px-3.5">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-ink">
            {project.name}
          </h3>
          {project.alternateName ? (
            <span className="text-[11px] font-medium text-accent">
              {project.alternateName}
            </span>
          ) : null}
        </div>

        <p className="mt-1.5 line-clamp-2 min-h-9 text-xs leading-[1.15rem] text-muted">
          {project.tagline}
        </p>

        <ul className="mt-3 flex flex-nowrap items-center gap-1.5 overflow-hidden">
          {visibleTech.map((tech) => (
            <li
              key={tech}
              className="shrink-0 rounded-md border border-line/70 bg-surface px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-ink-soft"
            >
              {tech}
            </li>
          ))}
          {hiddenTechCount > 0 ? (
            <li className="shrink-0 rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.08em] text-accent">
              +{hiddenTechCount}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex items-center gap-1.5 pt-3.5">
          <ButtonLink href={`/projects/${project.slug}`} size="xs">
            View details
            <FiArrowUpRight
              aria-hidden="true"
              className={buttonArrow}
              size={14}
            />
          </ButtonLink>

          <div className="ml-auto flex items-center gap-1.5">
            <ButtonLink
              href={project.liveUrl}
              external
              variant="secondary"
              size="iconSm"
              aria-label={`${project.name} live demo`}
              title="Live demo"
            >
              <FiExternalLink aria-hidden="true" />
            </ButtonLink>

            <ButtonLink
              href={project.repoUrl}
              external
              variant="secondary"
              size="iconSm"
              aria-label={`${project.name} GitHub repository`}
              title="Source code"
            >
              <FiGithub aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
