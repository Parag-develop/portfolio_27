import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Separator } from "@/components/ui/separator";
import { site } from "@/content/site";

export default function HomePage() {
  const sections = [
    site.sections.about ? <AboutSection key="about" /> : null,
    site.sections.experience ? <ExperienceSection key="experience" /> : null,
    site.sections.skills ? <SkillsSection key="skills" /> : null,
    site.sections.projects ? <ProjectsSection key="projects" /> : null,
    site.sections.education ? <EducationSection key="education" /> : null,
    site.sections.contact ? <ContactSection key="contact" /> : null,
  ].filter(Boolean);

  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <HeroSection />
        {sections.map((section, index) => (
          <div key={index}>
            <Separator />
            {section}
          </div>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
