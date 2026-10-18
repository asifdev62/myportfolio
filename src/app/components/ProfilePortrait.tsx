import Image from "next/image";
import { FiCode } from "react-icons/fi";
import { revealDelay } from "@/app/lib/motion";

interface ProfilePortraitProps {
  /** Adds a subtle scale-in entrance (used in the hero). */
  animated?: boolean;
  /** Entrance delay in milliseconds, used with `animated`. */
  delay?: number;
}

/**
 * The framed profile portrait shared by the home hero and the About page:
 * offset accent border, caption card, and the "Clean Code" floating badge.
 */
export default function ProfilePortrait({
  animated = false,
  delay = 0,
}: ProfilePortraitProps) {
  return (
    <div
      className={`relative w-full max-w-[320px] sm:max-w-90.5 lg:max-w-112.5 ${
        animated ? "animate-scale-in" : ""
      }`}
      style={animated ? revealDelay(delay) : undefined}
    >
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
            <p className="font-bold text-gray-900">Turning Ideas Into Code</p>
            <p className="mt-1 text-sm text-gray-600">
              Design · Develop · Deliver
            </p>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -left-2 top-6 rounded-lg border border-gray-100 bg-white px-2 py-1.5 shadow-lg sm:-left-6 sm:top-12 sm:rounded-xl sm:px-4 sm:py-3">
        <p className="text-xs font-bold text-gray-900 sm:text-sm">Clean Code</p>
        <p className="mt-0.5 text-[10px] text-green-700 sm:mt-1 sm:text-xs">
          Thoughtful Solutions
        </p>
      </div>
    </div>
  );
}
