import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import ProfilePortrait from "./ProfilePortrait";
import { revealDelay } from "@/app/lib/motion";

const techStack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
];

const Banner = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fafbf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div
            className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800"
            style={revealDelay(0)}
          >
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-green-500" />
            Available for Opportunities
          </div>

          <p
            className="animate-fade-up mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-700 sm:text-base"
            style={revealDelay(80)}
          >
            Hello, I&apos;m Asif Ali
          </p>

          <h1
            className="animate-fade-up text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            style={revealDelay(160)}
          >
            Building Digital
            <span className="mt-2 block text-green-700">Experiences.</span>
          </h1>

          <h2
            className="animate-fade-up mt-5 text-xl font-semibold text-gray-700 sm:text-2xl"
            style={revealDelay(240)}
          >
            Full-Stack Web Developer
          </h2>

          <p
            className="animate-fade-up mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg"
            style={revealDelay(320)}
          >
            I build modern, responsive, and user-friendly web applications
            with clean code and thoughtful design. I enjoy turning ideas
            into meaningful digital experiences using modern web technologies.
          </p>

          {/* Technology Stack */}
          <div
            className="animate-fade-up mt-6 flex flex-wrap gap-2"
            style={revealDelay(400)}
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-green-300 hover:text-green-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={revealDelay(480)}
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-1 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              Explore My Projects
              <FiArrowUpRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-800 transition hover:-translate-y-1 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              Let&apos;s Connect
              <FiArrowUpRight size={20} />
            </Link>
          </div>

          {/* Social Links */}
          <div
            className="animate-fade-up mt-8 flex items-center gap-4"
            style={revealDelay(560)}
          >
            <span className="text-sm text-gray-500">Find me on</span>

            <a
              href="https://github.com/asifdev62"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-700 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/asifali62"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-700 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="https://wa.me/8801823059188"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with me on WhatsApp"
              title="Chat with me on WhatsApp"
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-700 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <FaWhatsapp size={19} />
            </a>
          </div>

          <p
            className="animate-fade-up mt-8 text-sm font-medium italic text-gray-500"
            style={revealDelay(640)}
          >
            Always learning. Always building. Always improving.
          </p>
        </div>

        {/* Right Profile Image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <ProfilePortrait animated delay={300} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
