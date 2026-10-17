import type { Metadata } from "next";
import About from "@/app/components/About";
import Education from "@/app/components/Education";

export const metadata: Metadata = {
  title: "About | Asif Ali",
  description:
    "About Asif Ali, a Full-Stack Web Developer, and his education at Asian University of Bangladesh.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Education />
    </>
  );
}
