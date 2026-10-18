import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
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
          <article className="relative flex flex-col gap-6 rounded-4xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg sm:flex-row sm:items-start sm:p-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-700 text-2xl text-white shadow-lg shadow-green-700/20">
            <FaGraduationCap aria-hidden="true" />
          </span>

          <div>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Bachelor of Science in Computer Science and Engineering
            </h3>

            <p className="mt-1 text-sm font-semibold text-green-700">
              BSc in CSE &middot; Asian University of Bangladesh
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              My studies focus on the fundamentals of software engineering —
              programming, data structures, algorithms, and databases — which I
              apply directly in the full-stack web applications featured on this
              site.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-500">
              Institution: Asian University of Bangladesh
            </p>
          </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
