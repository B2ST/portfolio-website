import NavMenu from "./components/nav-menu";
import HeroSection from "./components/hero-section";
import SkillsSection from "./components/skills-section";
import ExperienceSection from "./components/experience-section";
import ResearchSection from "./components/research-section";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <>
      <NavMenu />
      <main className="pt-16">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ResearchSection />
        <ContactSection />
      </main>
    </>
  );
}
