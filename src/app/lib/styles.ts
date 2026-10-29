export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

const buttonBase =
  "group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 ease-out-quint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_12px_30px_-14px_var(--color-accent)] hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_18px_40px_-16px_var(--color-accent)] active:translate-y-0",
  secondary:
    "border border-line bg-white text-ink-soft hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-0",
  ghost: "text-ink-soft hover:text-accent",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3.5 text-sm",
  lg: "px-7 py-4 text-base",
  icon: "h-10 w-10 text-lg",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return `${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`.trim();
}

export const sectionPadding =
  "px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24";

/** Arrow used inside buttons; slides with the button's named `group/btn`. */
export const buttonArrow =
  "transition-transform duration-200 ease-out-quint group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5";
