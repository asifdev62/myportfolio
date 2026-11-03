import { FaGraduationCap } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui/Button";
import { buttonArrow, sectionPadding } from "@/app/lib/styles";

const focusAreas = [
  "Programming",
  "Data Structures",
  "Algorithms",
  "Databases",
];

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className={`scroll-mt-24 bg-white ${sectionPadding}`}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="The formal foundation behind the projects you see on this site."
          id="education-heading"
          className="mb-12"
        />

        <Reveal>
          <article className="group relative grid gap-6 overflow-hidden rounded-3xl border border-line bg-linear-to-b from-white to-surface/50 p-6 shadow-[0_24px_60px_-40px_rgba(20,22,16,0.35)] transition duration-[400ms] ease-out-quint hover:-translate-y-1 hover:border-accent/30 sm:p-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start lg:gap-8">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out-quint group-hover:scale-x-100"
            />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl text-white shadow-[0_16px_36px_-18px_var(--color-accent)]">
                <FaGraduationCap aria-hidden="true" />
              </span>

              <div>
                <h3 className="text-balance font-display text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
                  Bachelor of Science in Computer Science and Engineering
                </h3>

                <p className="mt-1.5 text-sm font-semibold text-accent">
                  BSc in CSE &middot; Asian University of Bangladesh
                </p>

                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  My studies focus on the fundamentals of software engineering —
                  programming, data structures, algorithms, and databases —
                  which I apply directly in the full-stack web applications
                  featured on this site.
                </p>
              </div>
            </div>

            <div className="border-t border-line/70 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                Focus areas
              </p>

              <ul className="mt-2 flex flex-wrap gap-2 lg:flex-col lg:items-start">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-md border border-line/70 bg-surface px-2.5 py-1 text-xs font-medium text-ink-soft transition duration-200 hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 flex justify-center">
          <ButtonLink href="/resume" variant="secondary">
            View my resume
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
