import { ArrowRight, Braces, Check, Layers, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { sectionPadding } from "@/app/lib/styles";

interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
  capabilities: string[];
}

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive, accessible interfaces built with a component-first approach.",
    Icon: Braces,
    capabilities: [
      "Responsive UI Development",
      "React.js & Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Server-side logic, data models, and the APIs that power the product.",
    Icon: Server,
    capabilities: [
      "Node.js & Express.js",
      "REST API Development",
      "MongoDB",
      "JWT & Better Auth",
    ],
  },
  {
    title: "Full-Stack Development",
    description:
      "Connecting the interface and the server into one dependable application.",
    Icon: Layers,
    capabilities: [
      "Frontend and Backend Integration",
      "API Integration",
      "Database Management",
      "Secure Web Applications",
    ],
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      aria-labelledby="what-i-do-heading"
      className={`scroll-mt-24 border-b border-line bg-surface ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              What I <span className="italic text-accent">do</span>
            </>
          }
          description="I work across the stack — shaping responsive interfaces, building the APIs behind them, and connecting the two into reliable web applications."
          id="what-i-do-heading"
          className="mb-10"
        />

        <Reveal group className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon, capabilities }, index) => (
            <article
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line  bg-white p-5 shadow-[0_2px_12px_-8px_rgba(20,22,16,0.3)] transition duration-300 ease-out-quint hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_45px_-30px_rgba(20,22,16,0.45)]"
            >
              {/* Accent rule that draws in on hover, matching the skill cards. */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out-quint group-hover:scale-x-100"
              />

              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/10 transition duration-300 ease-out-quint group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
                  <Icon aria-hidden="true" size={18} strokeWidth={1.75} />
                </span>
                <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
                {title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-muted">
                {description}
              </p>

              <ul className="mt-4 space-y-2 border-t border-line/70 pt-4">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-2 text-xs leading-5 text-ink-soft"
                  >
                    <Check
                      aria-hidden="true"
                      size={14}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>

        <div className="mt-8 flex justify-center">
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 rounded text-sm font-semibold text-accent transition duration-200 ease-out-quint hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            See the full skill set
            <ArrowRight
              aria-hidden="true"
              size={16}
              className="transition-transform duration-200 ease-out-quint group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
