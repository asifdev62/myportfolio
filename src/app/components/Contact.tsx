"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import type { IconType } from "react-icons";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import Reveal from "./Reveal";
import { Button } from "./ui/Button";
import { sectionPadding } from "@/app/lib/styles";

const CONTACT_EMAIL = "asif62n@gmail.com";
const CONTACT_PHONE = "01823059188";

const channels = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: FiMail,
  },
  {
    label: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE}`,
    Icon: FiPhone,
  },
  {
    label: "Location",
    value: "Mirpur, Dhaka, Bangladesh",
    href: null,
    Icon: FiMapPin,
  },
];

interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
  ariaLabel?: string;
  title?: string;
}

const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asifali62",
    Icon: GrLinkedinOption,
  },
  {
    label: "GitHub",
    href: "https://github.com/asifdev62",
    Icon: FaGithub,
  },
  {
    label: "WhatsApp",
    ariaLabel: "Chat with me on WhatsApp",
    title: "Chat with me on WhatsApp",
    href: "https://wa.me/8801823059188",
    Icon: FaWhatsapp,
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string | null>(null);

  function update(field: keyof typeof values, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      return;
    }

    // No backend is configured, so hand the message to the visitor's email
    // client instead of pretending it was delivered.
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus(
      "Your email app should now open with your message ready to send. If it doesn't, please email me directly.",
    );
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition focus:outline-none focus:ring-2";

  function inputState(hasError?: string) {
    return hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-500/30"
      : "border-line focus:border-accent focus:ring-accent/25";
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`scroll-mt-24 bg-white ${sectionPadding}`}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: invitation and contact details */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent/40" />
            <p className="eyebrow">Contact</p>
          </div>

          <h1
            id="contact-heading"
            className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-ink"
          >
            Let&apos;s work together
          </h1>

          <p className="mt-4 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Have a project in mind, or want to talk about a development
            opportunity? Send me a message and I&apos;ll get back to you.
          </p>

          <ul className="mt-8 space-y-4">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition duration-[400ms] ease-out-quint hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_24px_50px_-32px_rgba(20,22,16,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-xl text-accent transition-transform duration-300 ease-out-quint group-hover:-translate-y-0.5">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-ink">
                        {value}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-xl text-accent">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-ink">
                        {value}
                      </span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, Icon, ariaLabel, title }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel ?? label}
                title={title}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-lg text-ink-soft transition duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right: contact form */}
        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(20,22,16,0.35)] sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor={nameId}
                  className="mb-2 block text-sm font-semibold text-ink-soft"
                >
                  Full name
                </label>
                <input
                  id={nameId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => update("name", event.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? `${nameId}-error` : undefined}
                  className={`${inputBase} ${inputState(errors.name)}`}
                  placeholder="Your name"
                />
                {errors.name ? (
                  <p
                    id={`${nameId}-error`}
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor={emailId}
                  className="mb-2 block text-sm font-semibold text-ink-soft"
                >
                  Email address
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => update("email", event.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={
                    errors.email ? `${emailId}-error` : undefined
                  }
                  className={`${inputBase} ${inputState(errors.email)}`}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p
                    id={`${emailId}-error`}
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor={messageId}
                  className="mb-2 block text-sm font-semibold text-ink-soft"
                >
                  Message
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => update("message", event.target.value)}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={
                    errors.message ? `${messageId}-error` : undefined
                  }
                  className={`${inputBase} resize-y ${inputState(
                    errors.message,
                  )}`}
                  placeholder="Tell me about your project or question"
                />
                {errors.message ? (
                  <p
                    id={`${messageId}-error`}
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <Button type="submit" className="mt-6 w-full sm:w-auto">
              <FiSend aria-hidden="true" size={18} />
              Submit message
            </Button>

            {status ? (
              <p
                role="status"
                className="mt-4 rounded-xl border border-accent/20 bg-white p-4 text-sm leading-6 text-ink-soft"
              >
                {status}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
