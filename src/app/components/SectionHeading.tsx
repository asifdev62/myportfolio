interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Heading level. Section components that lead a dedicated page use "h1". */
  as?: "h1" | "h2";
  /** Id applied to the heading, for `aria-labelledby` on the section. */
  id?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  id,
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
          {eyebrow}
        </p>
      ) : null}

      <Heading
        id={id}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        {title}
      </Heading>

      {description ? (
        <p className="text-base leading-8 text-gray-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
