import { ArrowUpRight, FileText } from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui/Button";
import { buttonArrow, sectionPadding } from "@/app/lib/styles";

interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
}

const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/asifdev62",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asifali62",
    Icon: GrLinkedinOption,
  },
];

const socialClass =
  "group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft transition duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ConnectCTA() {
  return (
    <section
      id="connect"
      aria-labelledby="connect-heading"
      className={`scroll-mt-24 bg-surface ${sectionPadding}`}
    >
      <Reveal className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-white px-6 py-8 shadow-[0_24px_60px_-40px_rgba(20,22,16,0.35)] sm:px-8 sm:py-10 lg:px-10 lg:py-10">
          {/* Soft accent wash, matching the page headers. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-accent-soft/70 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Let's connect"
              title={
                <>
                  Have a <span className="italic text-accent">Project</span> in
                  Mind?
                </>
              }
              description="I'm always interested in building meaningful web experiences and exploring new opportunities. Let's connect and create something great together."
              id="connect-heading"
            />

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" size="lg">
                Get in touch
                <ArrowUpRight
                  aria-hidden="true"
                  className={buttonArrow}
                  size={20}
                />
              </ButtonLink>

              <ButtonLink href="/resume" variant="secondary" size="lg">
                <FileText aria-hidden="true" size={18} />
                View resume
              </ButtonLink>
            </div>

            <div className="mt-8 border-t border-line/70 pt-5">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                  Find me on
                </span>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialClass}
                    >
                      <Icon aria-hidden="true" className="text-base" />
                      {label}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={14}
                        className="transition-transform duration-200 ease-out-quint group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
