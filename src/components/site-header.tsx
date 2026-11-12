import { profile } from "@/content/profile";
import { site } from "@/content/site";

const navItems = [
  { id: "about", label: "About", enabled: site.sections.about },
  { id: "experience", label: "Experience", enabled: site.sections.experience },
  { id: "skills", label: "Skills", enabled: site.sections.skills },
  { id: "projects", label: "Projects", enabled: site.sections.projects },
  { id: "education", label: "Education", enabled: site.sections.education },
  { id: "contact", label: "Contact", enabled: site.sections.contact },
] as const;

export function SiteHeader() {
  const links = navItems.filter((item) => item.enabled);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {profile.name}
        </a>
        <nav
          aria-label="Page sections"
          className="hidden items-center gap-1 sm:flex"
        >
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
