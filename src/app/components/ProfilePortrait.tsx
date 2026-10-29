import Image from "next/image";
import { revealDelay } from "@/app/lib/motion";

interface ProfilePortraitProps {
  /** Adds a subtle scale-in entrance (used in the hero). */
  animated?: boolean;
  /** Entrance delay in milliseconds, used with `animated`. */
  delay?: number;
}

/**
 * The framed profile portrait shared by the home hero and the About page:
 * a single offset rule, a soft gradient caption, and no floating badges.
 */
export default function ProfilePortrait({
  animated = false,
  delay = 0,
}: ProfilePortraitProps) {
  return (
    <div
      className={`relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[440px] ${
        animated ? "animate-scale-in" : ""
      }`}
      style={animated ? revealDelay(delay) : undefined}
    >
      {/* Single decorative offset rule */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-accent"
      />

      <div className="relative aspect-[6/7] overflow-hidden rounded-3xl bg-surface-alt shadow-[0_30px_80px_-40px_rgba(20,22,16,0.5)]">
        <Image
          src="/portrait.jpg"
          alt="Asif Ali, Full-Stack Web Developer"
          fill
          priority
          sizes="(min-width: 1024px) 440px, (min-width: 640px) 380px, 90vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-accent/85 via-accent/40 to-transparent"
        />

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
          <div>
            <p className="font-display text-2xl leading-none [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
              Asif Ali
            </p>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
              Full-stack developer
            </p>
          </div>

          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm">
            Dhaka, BD
          </span>
        </div>
      </div>
    </div>
  );
}
