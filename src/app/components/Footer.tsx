import Link from "next/link";
import type { IconType } from "react-icons";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import CopyrightYear from "./CopyrightYear";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
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

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink px-5 py-14 text-white/60 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl leading-none text-white">
            Asif Ali
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-soft">
            Full-Stack Web Developer
          </p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/50">
            Building modern, responsive, and user-focused web applications with
            clean code and thoughtful design.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="rounded text-sm text-white/50 transition hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white">
            Connect
          </h2>
          <div className="mt-4 flex items-center gap-3">
            {socials.map(({ label, href, Icon, ariaLabel, title }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel ?? label}
                title={title}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-200 ease-out-quint hover:border-accent-soft hover:bg-accent-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
              >
                <Icon aria-hidden="true" className="text-lg" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/50">
            Mirpur, Dhaka, Bangladesh
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-sm text-white/50">
          &copy; <CopyrightYear /> Asif Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
