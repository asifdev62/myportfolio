import type { Metadata } from "next";
import Resume from "@/app/components/Resume";

export const metadata: Metadata = {
  title: "Resume | Asif Ali",
  description:
    "View or download the resume of Asif Ali, Full-Stack Web Developer.",
};

export default function ResumePage() {
  return <Resume />;
}
