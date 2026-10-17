
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiCode } from "react-icons/fi";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fafbf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for Opportunities
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-700 sm:text-base">
            Hello, I&apos;m Asif Ali
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Building Digital
            <span className="mt-2 block text-green-700">
              Experiences.
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-gray-700 sm:text-2xl">
            Full-Stack Web Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            I build modern, responsive, and user-friendly web applications
            with clean code and thoughtful design. I enjoy turning ideas
            into meaningful digital experiences using modern web technologies.
          </p>

          {/* Technology Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-green-300 hover:text-green-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-1 hover:bg-green-800"
            >
              Explore My Projects
              <FiArrowUpRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-800 transition hover:-translate-y-1 hover:border-green-600 hover:text-green-700"
            >
              Let&apos;s Connect
              <FiArrowUpRight size={20} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm text-gray-500">Find me on</span>

            <Link
              href="https://github.com/asifdev62"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-700 transition hover:border-green-600 hover:text-green-700"
            >
              <FaGithub size={19} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/asifali62"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-700 transition hover:border-green-600 hover:text-green-700"
            >
              <FaLinkedinIn size={19} />
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium italic text-gray-500">
            Always learning. Always building. Always improving.
          </p>
        </div>

        {/* Right Profile Image */}
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
    </section>
  );
};

export default Banner;
