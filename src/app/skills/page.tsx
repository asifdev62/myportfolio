import type { Metadata } from "next";
import Skills from "@/app/components/Skills";

export const metadata: Metadata = {
  title: "Skills | Asif Ali",
  description:
    "Technical skills of Asif Ali across frontend development, styling, APIs and authentication, and development tools.",
};

export default function SkillsPage() {
  return <Skills />;
}
