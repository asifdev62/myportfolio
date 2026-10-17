import type { Metadata } from "next";
import Contact from "@/app/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Asif Ali",
  description:
    "Contact Asif Ali, Full-Stack Web Developer, by email or phone, or connect on LinkedIn and GitHub.",
};

export default function ContactPage() {
  return <Contact />;
}
