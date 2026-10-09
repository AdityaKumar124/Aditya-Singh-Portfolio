import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AiLabSection } from "@/components/ai-lab/AiLabSection";
import { EducationSection } from "@/components/education/EducationSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { AiAssistantDrawer } from "@/components/assistant/AiAssistantDrawer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AiLabSection />
      <EducationSection />
      <ContactSection />
      <AiAssistantDrawer />
    </main>
  );
}
