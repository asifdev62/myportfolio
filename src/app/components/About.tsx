import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

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
              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                      <div className="relative w-full max-w-[320px] sm:max-w-90.5 lg:max-w-112.5">
            
                        {/* Decorative Background */}
                        <div className="absolute -right-3 -top-3 h-full w-full rounded-4xl border-2 border-green-600 sm:-right-5 sm:-top-5" />
            
                        <div className="relative overflow-hidden rounded-4xl bg-green-100 shadow-2xl shadow-green-900/10">
                          <Image
                            src="/my .jpg"
                            alt="Asif Ali - Full-Stack Web Developer"
                            width={600}
                            height={700}
                            priority
                            className="h-87.5 w-full object-cover object-center sm:h-110 lg:h-130"
                          />
            
                          {/* Image Caption */}
                          <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                            <div className="rounded-xl bg-green-100 p-3 text-green-700">
                              <FiCode size={25} />
                            </div>
            
                            <div>
                              <p className="font-bold text-gray-900">
                                Turning Ideas Into Code
                              </p>
                              <p className="mt-1 text-sm text-gray-600">
                                Design · Develop · Deliver
                              </p>
                            </div>
                          </div>
                        </div>
            
                        {/* Floating Badge */}
                        <div className="absolute -left-3 top-8 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg sm:-left-6 sm:top-12">
                          <p className="text-sm font-bold text-gray-900">
                            Clean Code
                          </p>
                          <p className="mt-1 text-xs text-green-700">
                            Thoughtful Solutions
                          </p>
                        </div>
                      </div>
                    </div>
          </div>

          {/* Introduction */}
          <div>
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
                I&apos;m Asif Ali, a dedicated Full-Stack Web Developer passionate
                about building modern, responsive, and user-focused web
                applications.
              </p>
              <p>
                I work with JavaScript, TypeScript, React.js, and Next.js,
                focusing on intuitive interfaces, clean and maintainable code, and
                seamless user experiences. I also work with Tailwind CSS, API
                integration, and authentication to develop practical web
                applications.
              </p>
              <p>
                I believe in continuous learning, solving problems through code,
                and turning ideas into useful digital solutions. My goal is to
                strengthen my full-stack development skills and contribute to
                building reliable, scalable web applications.
              </p>
            </div>

            <Link
              href="/projects"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              View my projects
              <FiArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {facts.map(({ label, value, Icon }) => (
            <div
              key={label}
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
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
