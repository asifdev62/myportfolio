import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import {
  buttonStyles,
  type ButtonSize,
  type ButtonVariant,
} from "@/app/lib/styles";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

export type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
    /** Opens in a new tab with a safe rel. Ignored for internal routes. */
    external?: boolean;
  };

/** Native button, styled with the shared variant system. */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Link styled as a button. Internal routes use `next/link`; mail, tel, hash,
 * and external URLs use a plain anchor. `external` only adds target/rel.
 */
export function ButtonLink({
  href,
  external = false,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const classes = buttonStyles({ variant, size, className });
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  // `external` also covers static files such as /resume.pdf, which must not
  // go through client-side routing.
  if (isInternal && !external) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
