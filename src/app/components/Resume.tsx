import Image from "next/image";
import type { ReactNode } from "react";
import {
  FiArrowUpRight,
  FiDownload,
  FiEye,
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
  FiServer,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { latestProjects } from "@/app/data/projects";
import { ButtonLink } from "./ui/Button";
import { buttonStyles, sectionPadding } from "@/app/lib/styles";

const CONTACT_EMAIL = "asif62n@gmail.com";
const CONTACT_PHONE = "01823059188";

const contactDetails = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: FiMail,
  },
  {
    label: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE}`,
    Icon: FiPhone,
  },
  {
    label: "Location",
    value: "Mirpur, Dhaka, Bangladesh",
    href: null,
    Icon: FiMapPin,
  },
];

interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
  ariaLabel?: string;
  title?: string;
}

const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asifali62",
    Icon: GrLinkedinOption,
  },
  {
    label: "GitHub",
    href: "https://github.com/asifdev62",
    Icon: FaGithub,
  },
  {
    label: "WhatsApp",
    ariaLabel: "Chat with me on WhatsApp",
    title: "Chat with me on WhatsApp",
    href: "https://wa.me/8801823059188",
    Icon: FaWhatsapp,
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API Integration",
      "Authentication",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Other Skills",
    skills: ["Responsive Web Design", "API Integration"],
  },
];

const strengths = [
  "Full-stack development",
  "REST API integration",
  "Authentication",
  "Responsive UI",
];

const education = {
  degree: "Bachelor of Science in Computer Science and Engineering",
  detail: "BSc in CSE \u00b7 Asian University of Bangladesh",
  description:
    "My studies focus on the fundamentals of software engineering \u2014 programming, data structures, algorithms, and databases \u2014 which I apply directly in the full-stack web applications featured on this site.",
};

const totalSkills = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0,
);

const cardClass =
  "rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-40px_rgba(20,22,16,0.35)] sm:p-9 lg:p-11 print:rounded-none print:border-0 print:p-0 print:shadow-none";

const chipClass =
  "rounded-md border border-line/70 bg-surface px-2 py-1 text-[11px] font-medium text-ink-soft";

const statClass =
  "rounded-full border border-line bg-surface px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted";

function ResumeSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-line py-8 last:border-0 last:pb-0">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-accent/50">
          {index}
        </span>
        <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className={`scroll-mt-24 bg-surface print:bg-white print:py-0 ${sectionPadding}`}
    >
      <div className="mx-auto max-w-4xl space-y-8 print:max-w-none print:space-y-6">
        {/* Hero: portrait + intro + resume actions. Hidden in print so the
            printed page starts directly with the resume document. */}
        <div className={`${cardClass} print:hidden`}>
          <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr] lg:gap-12">
            <div className="relative mx-auto shrink-0">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 scale-110 rounded-full bg-accent-soft blur-xl"
              />
              <div className="h-32 w-32 overflow-hidden rounded-full ring-4 ring-accent-soft sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                <Image
                  src="/my.png"
                  alt="Portrait of Asif Ali"
                  width={720}
                  height={987}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div>
              <p className="eyebrow">Resume</p>

              <h1
                id="resume-heading"
                className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-ink"
              >
                My resume
              </h1>

              <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
                A concise, one-page summary of my background, education,
                technical skills, and selected projects. View it in the browser
                or download a copy to keep.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                <li className={statClass}>{latestProjects.length} projects</li>
                <li className={statClass}>{totalSkills} skills</li>
                <li className={statClass}>BSc in CSE</li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
                <ButtonLink href="/resume.pdf?v=2" external>
                  <FiEye aria-hidden="true" size={18} />
                  View resume
                </ButtonLink>

                <a
                  href="/resume.pdf?v=2"
                  download="Asif-Ali-Resume.pdf"
                  className={buttonStyles({ variant: "secondary" })}
                >
                  <FiDownload aria-hidden="true" size={18} />
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Resume document. Kept as plain divs: the global print stylesheet
            hides real <header>/<footer> elements. */}
        <div className={cardClass}>
          {/* Identity + contact details */}
          <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-start sm:justify-between print:break-inside-avoid">
            <div>
              <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-accent" />
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-none tracking-[-0.01em] text-ink">
                Asif Ali
              </h2>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                Full-Stack Web Developer
              </p>
            </div>

            <div className="sm:text-right">
              <ul className="space-y-2 text-sm">
                {contactDetails.map(({ label, value, href, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-muted sm:justify-end"
                  >
                    <Icon
                      aria-hidden="true"
                      size={15}
                      className="shrink-0 text-accent"
                    />
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-ink-soft transition hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-medium text-ink-soft">{value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-2 sm:justify-end">
                {socials.map(({ label, href, Icon, ariaLabel, title }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel ?? label}
                    title={title}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white text-base text-ink-soft transition duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Professional summary */}
          <ResumeSection index="01" title="Professional Summary">
            <div className="rounded-2xl border border-line border-l-2 border-l-accent bg-surface p-5 sm:p-6">
              <p className="text-sm leading-7 text-ink-soft sm:text-[15px] sm:leading-8">
                Full-Stack Web Developer passionate about building modern,
                responsive, and user-focused web applications. Experienced in
                working with JavaScript, TypeScript, React.js, Next.js, Tailwind
                CSS, API integration, and authentication. Focused on writing
                clean, maintainable code and continuously improving development
                skills through practical projects.
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {strengths.map((strength) => (
                  <li
                    key={strength}
                    className="rounded-md bg-white px-2 py-1 text-[11px] font-medium text-accent ring-1 ring-inset ring-accent/15"
                  >
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </ResumeSection>

          {/* Technical skills */}
          <ResumeSection index="02" title="Technical Skills">
            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className={chipClass}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* Education */}
          <ResumeSection index="03" title="Education">
            <div className="rounded-2xl border border-line border-l-2 border-l-accent bg-surface p-5 sm:p-6">
              <h3 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink">
                {education.degree}
              </h3>
              <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                {education.detail}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                {education.description}
              </p>
            </div>
          </ResumeSection>

          {/* Selected projects */}
          <ResumeSection index="04" title="Selected Projects">
            <ul className="divide-y divide-line">
              {latestProjects.map((project) => (
                <li
                  key={project.slug}
                  className="py-5 first:pt-0 last:pb-0 print:break-inside-avoid"
                >
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <h3 className="text-base font-bold tracking-tight text-ink">
                      {project.name}
                    </h3>

                    {project.alternateName ? (
                      <span className="text-xs font-medium text-accent">
                        {project.alternateName}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-1.5 text-sm leading-7 text-muted">
                    {project.tagline}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li key={tech} className={chipClass}>
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3.5 flex flex-wrap items-center gap-2">
                    <ButtonLink
                      href={project.liveUrl}
                      external
                      size="xs"
                    >
                      Live demo
                      <FiArrowUpRight aria-hidden="true" size={13} />
                    </ButtonLink>

                    <ButtonLink
                      href={project.repoUrl}
                      external
                      variant="secondary"
                      size="xs"
                    >
                      <FiGithub aria-hidden="true" size={13} />
                      Code
                    </ButtonLink>

                    {project.backendRepoUrl ? (
                      <ButtonLink
                        href={project.backendRepoUrl}
                        external
                        variant="secondary"
                        size="xs"
                      >
                        <FiServer aria-hidden="true" size={13} />
                        Backend
                      </ButtonLink>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </ResumeSection>
        </div>
      </div>
    </section>
  );
}
