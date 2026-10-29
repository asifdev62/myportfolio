import ProfilePortrait from "./ProfilePortrait";
import TechStack from "./TechStack";
import Typewriter from "./Typewriter";
import { ButtonLink } from "./ui/Button";
import { buttonArrow } from "@/app/lib/styles";
import { revealDelay } from "@/app/lib/motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import TechMarquee from "./TechMarquee";

const socials = [
  {
    label: "GitHub profile",
    href: "https://github.com/asifdev62",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/asifali62",
    Icon: FaLinkedinIn,
  },
  {
    label: "Chat with me on WhatsApp",
    href: "https://wa.me/8801823059188",
    Icon: FaWhatsapp,
  },
];

const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const Banner = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:pb-24 lg:pt-24">
        {/* Left Content */}
        <div>
          <div
            className="animate-fade-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-soft px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent"
            style={revealDelay(0)}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-accent"
            />
            Available for opportunities
          </div>

          <p
            className="eyebrow animate-fade-up mb-5"
            style={revealDelay(60)}
          >
            <Typewriter text="Hello, I'm Asif Ali" delay={120} speed={34} />
          </p>

          <h1 className="text-[clamp(2.9rem,6.2vw,5.75rem)] leading-[0.95] tracking-[-0.03em] text-ink">
            <span className="mask-line" style={revealDelay(120)}>
              <span>Building digital</span>
            </span>
            <span className="mask-line" style={revealDelay(200)}>
              <span className="font-display italic text-accent">
                experiences.
              </span>
            </span>
          </h1>

          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <Typewriter
              text="Full-Stack Web Developer"
              delay={780}
              speed={30}
              underline
              className="text-accent-strong"
            />

            <span
              className="animate-fade-in flex items-center gap-4"
              style={revealDelay(1500)}
            >
              <span
                aria-hidden="true"
                className="hidden h-px w-8 bg-line sm:block"
              />
              <span>Dhaka, Bangladesh</span>
            </span>
          </p>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
            style={revealDelay(900)}
          >
            I build modern, responsive web applications with clean code and
            thoughtful design — turning ideas into meaningful digital
            experiences.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={revealDelay(1100)}
          >
            <ButtonLink href="/projects" size="lg">
              Explore my projects
              <FiArrowUpRight
                aria-hidden="true"
                className={buttonArrow}
                size={20}
              />
            </ButtonLink>

            <ButtonLink href="/contact" variant="secondary" size="lg">
              Let&apos;s connect
              <FiArrowUpRight
                aria-hidden="true"
                className={buttonArrow}
                size={20}
              />
            </ButtonLink>
          </div>

          <div
            className="animate-fade-up mt-9 flex items-center gap-3"
            style={revealDelay(1300)}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Find me on
            </span>
            <span aria-hidden="true" className="h-px w-6 bg-line" />

            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={socialClass}
              >
                <Icon aria-hidden="true" size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <ProfilePortrait animated delay={240} />
        </div>
      </div>

      <TechStack />
    </section>
  );
};

export default Banner;
