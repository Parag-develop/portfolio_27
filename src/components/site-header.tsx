import { ArrowUpRight } from "lucide-react";

import { LocalTime } from "@/components/local-time";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

const navItems = [
  { id: "work", label: "Work", enabled: site.sections.experience },
  { id: "skills", label: "Skills", enabled: site.sections.skills },
  { id: "projects", label: "Projects", enabled: site.sections.projects },
  { id: "about", label: "About", enabled: site.sections.about },
  { id: "contact", label: "Contact", enabled: site.sections.contact },
] as const;

export function SiteHeader() {
  const links = navItems.filter((item) => item.enabled);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <a
            href="#top"
            className="truncate text-sm lowercase tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            {profile.name}
          </a>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {site.yearLabel}
          </span>
        </div>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block">
            <LocalTime />
          </div>
          <ThemeToggle />
          <Button asChild size="sm" className="gap-1.5">
            <a href={`mailto:${profile.email}`}>
              Get in touch
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
