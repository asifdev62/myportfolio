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
  "rounded-4xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none";

const chipClass =
  "rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700";

function ResumeSectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
      {children}
    </h2>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="scroll-mt-24 bg-[#fafbf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 print:bg-white print:py-0"
    >
      <div className="mx-auto max-w-4xl space-y-8 print:max-w-none print:space-y-6">
        {/* Hero: portrait + intro + resume actions */}
        <div className={cardClass}>
          <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr] lg:gap-12">
            <div className="mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-green-100 bg-[#fafbf9] shadow-lg shadow-green-900/5 sm:h-36 sm:w-36 lg:h-40 lg:w-40 print:border-0 print:shadow-none">
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                Resume
              </p>

              <h1
                id="resume-heading"
                className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                My Resume
              </h1>

              <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
                A concise, one-page summary of my background, education,
                technical skills, and selected projects. View it in the browser
                or download a copy to keep.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  <FiEye aria-hidden="true" size={18} />
                  View Resume
                </a>

                <a
                  href="/resume.pdf"
                  download="Asif-Ali-Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  <FiDownload aria-hidden="true" size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Resume document */}
        <div className={cardClass}>
          {/* Identity + contact details */}
          <div className="flex flex-col gap-6 border-b border-gray-100 pb-8 sm:flex-row sm:items-start sm:justify-between print:break-inside-avoid">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Asif Ali
              </h2>
              <p className="mt-1 text-base font-semibold text-green-700">
                Full-Stack Web Developer
              </p>
            </div>

            <div className="sm:text-right">
              <ul className="space-y-2 text-sm">
                {contactDetails.map(({ label, value, href, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-gray-600 sm:justify-end"
                  >
                    <Icon
                      aria-hidden="true"
                      size={15}
                      className="shrink-0 text-green-700"
                    />
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-gray-700 transition hover:text-green-700"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-medium text-gray-700">{value}</span>
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
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-300 bg-white text-base text-gray-700 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Professional summary */}
          <div className="border-b border-gray-100 py-8 print:break-inside-avoid">
            <ResumeSectionTitle>Professional Summary</ResumeSectionTitle>
            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Full-Stack Web Developer passionate about building modern,
              responsive, and user-focused web applications. Experienced in
              working with JavaScript, TypeScript, React.js, Next.js, Tailwind
              CSS, API integration, and authentication. Focused on writing
              clean, maintainable code and continuously improving development
              skills through practical projects.
            </p>
          </div>

          {/* Technical skills */}
          <div className="border-b border-gray-100 py-8 print:break-inside-avoid">
            <ResumeSectionTitle>Technical Skills</ResumeSectionTitle>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-gray-900">
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
          <div className="border-b border-gray-100 py-8 print:break-inside-avoid">
            <ResumeSectionTitle>Education</ResumeSectionTitle>

            <div className="mt-4">
              <h3 className="text-lg font-bold tracking-tight text-gray-900">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm font-semibold text-green-700">
                {education.detail}
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-600">
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
                    <h3 className="text-base font-bold tracking-tight text-gray-900">
                      {project.name}
                    </h3>
                    {project.alternateName ? (
                      <span className="text-sm font-medium text-green-700">
                        {project.alternateName}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    {project.tagline}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    Technologies: {project.tech.join(", ")}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-green-700 transition hover:text-green-800"
                    >
                      Live Demo
                      <FiExternalLink aria-hidden="true" size={14} />
                    </a>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-gray-700 transition hover:text-green-700"
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
