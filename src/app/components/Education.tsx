import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FaGraduationCap } from "react-icons/fa";
import { sectionPadding } from "@/app/lib/styles";

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
          <article className="relative flex flex-col gap-6 rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-40px_rgba(20,22,16,0.35)] transition duration-[400ms] ease-out-quint hover:-translate-y-1 hover:border-accent/30 sm:flex-row sm:items-start sm:p-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl text-white shadow-[0_16px_36px_-18px_var(--color-accent)]">
              <FaGraduationCap aria-hidden="true" />
            </span>

            <div>
              <h3 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-3xl">
                Bachelor of Science in Computer Science and Engineering
              </h3>

              <p className="mt-1.5 text-sm font-semibold text-accent">
                BSc in CSE &middot; Asian University of Bangladesh
              </p>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                My studies focus on the fundamentals of software engineering —
                programming, data structures, algorithms, and databases — which
                I apply directly in the full-stack web applications featured on
                this site.
              </p>

              <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                Institution &middot; Asian University of Bangladesh
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
