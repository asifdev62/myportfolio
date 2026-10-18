import Link from "next/link";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiMapPin,
  FiUser,
} from "react-icons/fi";
import ProfilePortrait from "./ProfilePortrait";
import Reveal from "./Reveal";

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
    value: "Tailwind CSS, REST APIs, Authentication",
    Icon: FiLayers,
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-[#fafbf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
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
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                About me
              </p>

              <h1
                id="about-heading"
                className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Building practical, user-focused web applications
              </h1>

              <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
                <p>
                  I&apos;m Asif Ali, a dedicated Full-Stack Web Developer
                  passionate about building modern, responsive, and
                  user-focused web applications.
                </p>
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

              <Link
                href="/projects"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                View my projects
                <FiArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </Reveal>
          </div>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {facts.map(({ label, value, Icon }, index) => (
            <Reveal
              key={label}
              delay={index * 80}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl text-green-700">
                <Icon aria-hidden="true" />
              </span>
              <dt className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                {label}
              </dt>
              <dd className="mt-1 text-base font-semibold text-gray-900">
                {value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
