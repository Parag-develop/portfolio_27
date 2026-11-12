import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/content/profile";

export function ProjectsSection() {
  if (profile.projects.length === 0) return null;

  return (
    <section id="projects" className="scroll-mt-20 py-14 sm:py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Projects
      </h2>
      <ul className="mt-8">
        {profile.projects.map((project, index) => (
          <li key={project.title}>
            {index > 0 ? <Separator className="my-6" /> : null}
            <article>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                    >
                      {project.title}
                      <ArrowUpRight className="size-4 opacity-60" />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              {project.tags && project.tags.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
