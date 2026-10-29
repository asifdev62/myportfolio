export const instant = false;
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheck,
  FiGithub,
} from "react-icons/fi";
import {
  getProject,
  getRelatedProjects,
  projects,
} from "@/app/data/projects";
import ProjectCard from "@/app/components/ProjectCard";
import Reveal from "@/app/components/Reveal";
import { buttonArrow } from "@/app/lib/styles";
import { ButtonLink } from "@/app/components/ui/Button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found | Asif Ali" };
  }

  return {
    title: `${project.name} | Asif Ali`,
    description: project.summary,
  };
}

export default async function ProjectDetailsPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <article className="bg-white">
      {/* Case-study header */}
      <header className="border-b border-line bg-surface px-5 pb-14 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent transition hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <FiArrowLeft aria-hidden="true" size={16} />
            Back to all projects
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
            <p className="eyebrow">Case study</p>
          </div>

          <h1 className="mt-5 font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] text-ink">
            {project.name}
          </h1>

          {project.alternateName ? (
            <p className="mt-2 text-lg font-medium text-accent">
              {project.alternateName}
            </p>
          ) : null}

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {project.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-line bg-white px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={project.liveUrl} external>
              Live demo
              <FiArrowUpRight
                aria-hidden="true"
                className={buttonArrow}
                size={18}
              />
            </ButtonLink>

            <ButtonLink
              href={project.repoUrl}
              external
              variant="secondary"
            >
              <FiGithub aria-hidden="true" size={18} />
              GitHub repository
            </ButtonLink>
          </div>

          {project.image ? (
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-50px_rgba(20,22,16,0.5)]">
              <Image
                src={project.image}
                alt={`${project.name} project screenshot`}
                width={project.imageWidth ?? 1920}
                height={project.imageHeight ?? 860}
                priority
                className="h-auto w-full object-cover object-top"
              />
            </div>
          ) : null}
        </div>
      </header>

      {/* Case-study body */}
      <div className="mx-auto max-w-4xl space-y-12 px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <section>
          <h2 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
            Project overview
          </h2>
          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
            {project.overview}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
            The problem it addresses
          </h2>
          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
            Key features
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm text-accent">
                  <FiCheck aria-hidden="true" />
                </span>
                <span className="text-sm leading-6 text-ink-soft">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
            Technologies used
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-xl border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
            My implementation
          </h2>
          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
            {project.implementation}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
            Technical decisions
          </h2>
          <ul className="mt-6 space-y-4">
            {project.decisions.map((decision) => (
              <li key={decision} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                />
                <span className="text-base leading-8 text-muted">
                  {decision}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Related projects */}
      <section
        aria-labelledby="related-projects-heading"
        className="border-t border-line bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
            <p className="eyebrow">More work</p>
          </div>

          <h2
            id="related-projects-heading"
            className="mt-5 font-display text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.02em] text-ink"
          >
            Related projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            More of the work I&apos;ve built.
          </p>

          <Reveal group className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.slug} project={related} />
            ))}
          </Reveal>

          <div className="mt-10 flex justify-center">
            <ButtonLink href="/projects" variant="secondary">
              <FiArrowLeft aria-hidden="true" size={18} />
              Back to all projects
            </ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
