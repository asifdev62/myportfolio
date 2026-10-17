import type { Metadata } from "next";
import Projects from "@/app/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Asif Ali",
  description:
    "Selected projects by Asif Ali: Bazar Dor, Bangla News 24, FitLog, and Book Vibe, with live demos and source code.",
};

export default function ProjectsPage() {
  return <Projects />;
}
