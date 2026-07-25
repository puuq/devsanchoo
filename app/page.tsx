import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <ContactForm />
    </>
  );
}
