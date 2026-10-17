import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Page not found | Asif Ali",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-[#fafbf9] px-5 py-24 text-center sm:px-8 lg:px-12">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
        404
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>

      <p className="mt-5 max-w-md text-base leading-8 text-gray-600 sm:text-lg">
        The page you are looking for doesn&apos;t exist or may have moved. Let
        me point you back to the work I&apos;ve built.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
          <FiArrowLeft aria-hidden="true" size={18} />
          Back to home
        </Link>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
          View all projects
          <FiArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}
