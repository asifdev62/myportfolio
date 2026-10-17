"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

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

const socials = [
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

  const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-green-600/40";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: invitation and contact details */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Contact
          </p>

          <h1
            id="contact-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Let&apos;s Work Together
          </h1>

          <p className="mt-4 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Have a project in mind, or want to talk about a development
            opportunity? Send me a message and I&apos;ll get back to you.
          </p>

          <ul className="mt-8 space-y-4">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#fafbf9] p-5 transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl text-green-700">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {label}
                      </span>
                      <span className="block text-sm font-semibold text-gray-900">
                        {value}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#fafbf9] p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl text-green-700">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {label}
                      </span>
                      <span className="block text-sm font-semibold text-gray-900">
                        {value}
                      </span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white text-lg text-gray-700 transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: contact form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-4xl border border-gray-200 bg-[#fafbf9] p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor={nameId}
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Full Name
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
                className={`${inputClass} ${
                  errors.name ? "border-red-400" : "border-gray-300"
                }`}
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
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Email Address
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? `${emailId}-error` : undefined}
                className={`${inputClass} ${
                  errors.email ? "border-red-400" : "border-gray-300"
                }`}
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
                className="mb-2 block text-sm font-semibold text-gray-800"
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
                className={`${inputClass} resize-y ${
                  errors.message ? "border-red-400" : "border-gray-300"
                }`}
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

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-700/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 sm:w-auto"
          >
            <FiSend aria-hidden="true" size={18} />
            Submit Message
          </button>

          {status ? (
            <p
              role="status"
              className="mt-4 rounded-xl border border-green-200 bg-white p-4 text-sm leading-6 text-gray-700"
            >
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
