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
      <header className="border-b border-gray-100 bg-[#fafbf9] px-5 pb-14 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <FiArrowLeft aria-hidden="true" size={18} />
            Back to all projects
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Case study
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            {project.name}
          </h1>

          {project.alternateName ? (
            <p className="mt-2 text-lg font-medium text-green-700">
              {project.alternateName}
            </p>
          ) : null}

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            {project.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              Live Demo
              <FiArrowUpRight aria-hidden="true" size={18} />
            </a>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <FiGithub aria-hidden="true" size={18} />
              GitHub Repository
            </a>
          </div>

          {project.image ? (
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Project overview
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
            {project.overview}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            The problem it addresses
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Key features
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#fafbf9] p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                  <FiCheck aria-hidden="true" />
                </span>
                <span className="text-sm leading-6 text-gray-700">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Technologies used
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            My implementation
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
            {project.implementation}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Technical decisions
          </h2>
          <ul className="mt-6 space-y-4">
            {project.decisions.map((decision) => (
              <li key={decision} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600"
                />
                <span className="text-base leading-8 text-gray-600">
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
        className="border-t border-gray-100 bg-[#fafbf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="related-projects-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Related projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            More of the work I&apos;ve built.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProjects.map((related, index) => (
              <Reveal key={related.slug} delay={index * 90} className="h-full">
                <ProjectCard project={related} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <FiArrowLeft aria-hidden="true" size={18} />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
