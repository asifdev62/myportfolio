import type { Metadata } from "next";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { revealDelay } from "@/app/lib/motion";
import { buttonArrow } from "@/app/lib/styles";
import { ButtonLink } from "./components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found | Asif Ali",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-surface px-5 py-24 text-center sm:px-8 lg:px-12">
      <p
        className="eyebrow animate-fade-up"
        style={revealDelay(0)}
      >
        404
      </p>

      <h1
        className="animate-fade-up mt-5 font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] text-ink"
        style={revealDelay(80)}
      >
        Page not found
      </h1>

      <p
        className="animate-fade-up mt-5 max-w-md text-base leading-8 text-muted sm:text-lg"
        style={revealDelay(160)}
      >
        The page you are looking for doesn&apos;t exist or may have moved. Let
        me point you back to the work I&apos;ve built.
      </p>

      <div
        className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
        style={revealDelay(240)}
      >
        <ButtonLink href="/">
          <FiArrowLeft aria-hidden="true" size={18} />
          Back to home
        </ButtonLink>

        <ButtonLink href="/projects" variant="secondary">
          View all projects
          <FiArrowUpRight
            aria-hidden="true"
            className={buttonArrow}
            size={18}
          />
        </ButtonLink>
      </div>
    </section>
  );
}
