import {
  Braces,
  Database,
  Network,
  Route,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { sectionPadding } from "@/app/lib/styles";

interface ExploringTopic {
  title: string;
  note: string;
  Icon: LucideIcon;
}

const topics: ExploringTopic[] = [
  {
    title: "Advanced TypeScript",
    note: "Generics, narrowing, and type-safe patterns.",
    Icon: Braces,
  },
  {
    title: "Next.js App Router",
    note: "Server components, routing, and data fetching.",
    Icon: Route,
  },
  {
    title: "Backend Development",
    note: "Server-side logic with Node.js and Express.js.",
    Icon: ServerCog,
  },
  {
    title: "REST API Design",
    note: "Resource modelling, status codes, and clean endpoints.",
    Icon: Network,
  },
  {
    title: "Authentication & Authorization",
    note: "Sessions, tokens, and protecting routes.",
    Icon: ShieldCheck,
  },
  {
    title: "Database Management",
    note: "Schema design and querying with MongoDB.",
    Icon: Database,
  },
];

export default function CurrentlyExploring() {
  return (
    <section
      id="currently-exploring"
      aria-labelledby="currently-exploring-heading"
      className={`scroll-mt-24 border-b border-line bg-surface-alt ${sectionPadding}`}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
        <SectionHeading
          eyebrow="Learning"
          title={
            <>
              Currently <span className="italic text-accent">exploring</span>
            </>
          }
          description="Topics I'm actively studying to strengthen the way I design, build, and secure full-stack applications."
          id="currently-exploring-heading"
          align="left"
        />

        <Reveal group className="grid gap-3 sm:grid-cols-2">
          {topics.map(({ title, note, Icon }) => (
            <article
              key={title}
              className="group flex h-full items-start gap-3  bg-white p-4 transition duration-300 ease-out-quint hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_18px_35px_-28px_rgba(20,22,16,0.4)] border-b border-accent"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition duration-300 ease-out-quint group-hover:bg-accent group-hover:text-white">
                <Icon aria-hidden="true" size={17} strokeWidth={1.75} />
              </span>

              <div>
                <h3 className="text-sm font-semibold leading-6 tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-0.5 text-xs leading-5 text-muted">{note}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
