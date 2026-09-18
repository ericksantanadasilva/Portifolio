import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
}
