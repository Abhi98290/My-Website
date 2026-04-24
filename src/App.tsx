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

export function App() {
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