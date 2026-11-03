import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiMapPin,
  FiUser,
} from "react-icons/fi";
import ProfilePortrait from "./ProfilePortrait";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui/Button";
import { buttonArrow, sectionPadding } from "@/app/lib/styles";

const facts = [
  {
    label: "Role",
    value: "Full-Stack Web Developer",
    Icon: FiUser,
  },
  {
    label: "Location",
    value: "Mirpur, Dhaka, Bangladesh",
    Icon: FiMapPin,
  },
  {
    label: "Core stack",
    value: "React.js, Next.js, TypeScript",
    Icon: FiCode,
  },
  {
    label: "Also working with",
    value: "Tailwind CSS, REST APIs, JWT & Better Auth",
    Icon: FiLayers,
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`scroll-mt-24 bg-surface ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Profile photo */}
          <div className="mx-auto w-full max-w-md">
            <Reveal className="flex justify-center">
              <ProfilePortrait />
            </Reveal>
          </div>

          {/* Introduction */}
          <div>
            <Reveal delay={100}>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
                <p className="eyebrow">About me</p>
              </div>

              <h1
                id="about-heading"
                className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-ink"
              >
                Building practical, user-focused web applications
              </h1>

              <div className="mt-6">
                <p className="text-pretty text-lg leading-9 text-ink-soft sm:text-xl">
                  I&apos;m Asif Ali, a dedicated Full-Stack Web Developer
                  passionate about building modern, responsive, and
                  user-focused web applications.
                </p>

                <div className="mt-5 space-y-5 text-base leading-8 text-muted sm:text-lg">
                  <p>
                    I work with JavaScript, TypeScript, React.js, and Next.js,
                    focusing on intuitive interfaces, clean and maintainable
                    code, and seamless user experiences. I also work with
                    Tailwind CSS, API integration, and authentication to develop
                    practical web applications.
                  </p>
                  <p>
                    I believe in continuous learning, solving problems through
                    code, and turning ideas into useful digital solutions. My
                    goal is to strengthen my full-stack development skills and
                    contribute to building reliable, scalable web applications.
                  </p>
                </div>
              </div>

              <ButtonLink href="/projects" className="mt-8">
                View my projects
                <FiArrowUpRight
                  aria-hidden="true"
                  className={buttonArrow}
                  size={18}
                />
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 lg:mt-16">
          <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
          <p className="eyebrow">At a glance</p>
        </div>

        <Reveal
          as="dl"
          group
          className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {facts.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 transition duration-[400ms] ease-out-quint hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-32px_rgba(20,22,16,0.35)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out-quint group-hover:scale-x-100"
              />

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-xl text-accent transition duration-300 ease-out-quint group-hover:bg-accent group-hover:text-white">
                <Icon aria-hidden="true" />
              </span>
              <dt className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                {label}
              </dt>
              <dd className="mt-1.5 text-base font-semibold leading-6 text-ink">
                {value}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
