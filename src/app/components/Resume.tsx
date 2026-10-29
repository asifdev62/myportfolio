import Image from "next/image";
import {
  FiDownload,
  FiExternalLink,
  FiEye,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { projects } from "@/app/data/projects";
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

const education = {
  degree: "Bachelor of Science in Computer Science and Engineering",
  detail: "BSc in CSE \u00b7 Asian University of Bangladesh",
  description:
    "My studies focus on the fundamentals of software engineering \u2014 programming, data structures, algorithms, and databases \u2014 which I apply directly in the full-stack web applications featured on this site.",
};

const cardClass =
  "rounded-3xl border border-line bg-white p-8 shadow-[0_24px_60px_-40px_rgba(20,22,16,0.35)] sm:p-10 lg:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none";

const chipClass =
  "rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-soft";

function ResumeSectionTitle({ children }: { children: string }) {
  return (
    <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
      {children}
    </h2>
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
            <div className="mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-full border-2
             border-accent bg-surface shadow-[0_24px_50px_-32px_rgba(20,22,16,0.35)] sm:h-36 sm:w-36 lg:h-40 lg:w-40 print:border-0 print:shadow-none">
              <Image
                src="/my.png"
                alt="Portrait of Asif Ali"
                width={720}
                height={987}
                priority
                className="h-full w-full object-cover object-top"
              />
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

              <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
                <ButtonLink href="/resume.pdf" external>
                  <FiEye aria-hidden="true" size={18} />
                  View resume
                </ButtonLink>

                <a
                  href="/resume.pdf"
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

        {/* Resume document */}
        <div className={cardClass}>
          {/* Identity + contact details */}
          <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-start sm:justify-between print:break-inside-avoid">
            <div>
              <h2 className="font-display text-3xl leading-none tracking-[-0.01em] text-ink sm:text-4xl">
                Asif Ali
              </h2>
              <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
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
          <div className="border-b border-line py-8 print:break-inside-avoid">
            <ResumeSectionTitle>Professional Summary</ResumeSectionTitle>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Full-Stack Web Developer passionate about building modern,
              responsive, and user-focused web applications. Experienced in
              working with JavaScript, TypeScript, React.js, Next.js, Tailwind
              CSS, API integration, and authentication. Focused on writing
              clean, maintainable code and continuously improving development
              skills through practical projects.
            </p>
          </div>

          {/* Technical skills */}
          <div className="border-b border-line py-8 print:break-inside-avoid">
            <ResumeSectionTitle>Technical Skills</ResumeSectionTitle>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className={chipClass}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-b border-line py-8 print:break-inside-avoid">
            <ResumeSectionTitle>Education</ResumeSectionTitle>

            <div className="mt-4">
              <h3 className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink">
                {education.degree}
              </h3>
              <p className="mt-1.5 text-sm font-semibold text-accent">
                {education.detail}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                {education.description}
              </p>
            </div>
          </div>

          {/* Selected projects */}
          <div className="pt-8">
            <ResumeSectionTitle>Selected Projects</ResumeSectionTitle>

            <ul className="mt-6 space-y-6">
              {projects.map((project) => (
                <li key={project.slug} className="print:break-inside-avoid">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-base font-bold tracking-tight text-ink">
                      {project.name}
                    </h3>
                    {project.alternateName ? (
                      <span className="text-sm font-medium text-accent">
                        {project.alternateName}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-1 text-sm leading-7 text-muted">
                    {project.tagline}
                  </p>

                  <p className="mt-2 font-mono text-[10px] leading-6 uppercase tracking-[0.1em] text-muted">
                    Technologies: {project.tech.join(", ")}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-accent transition hover:text-accent-strong"
                    >
                      Live Demo
                      <FiExternalLink aria-hidden="true" size={14} />
                    </a>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-ink-soft transition hover:text-accent"
                    >
                      GitHub
                      <FiExternalLink aria-hidden="true" size={14} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
