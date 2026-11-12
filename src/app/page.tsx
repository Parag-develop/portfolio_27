import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <HeroSection />
        {site.sections.experience ? <ExperienceSection /> : null}
        {site.sections.skills ? <SkillsSection /> : null}
        {site.sections.projects ? <ProjectsSection /> : null}
        {site.sections.about ? <AboutSection /> : null}
        {site.sections.contact ? <ContactSection /> : null}
      </main>
      <SiteFooter />
    </div>
  );
}
