import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingElements } from "@/components/FloatingElements";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhishek Singhal — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Abhishek Singhal — Full Stack Developer building real-time React Native, Node.js and PostgreSQL products.",
      },
      { property: "og:title", content: "Abhishek Singhal — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "React Native · Node.js · PostgreSQL · Socket.IO. Building real-time mobile & web products.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AnimatedCursor />
      <ScrollProgress />
      <FloatingElements />
      <BackToTop />
      <Loader />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
