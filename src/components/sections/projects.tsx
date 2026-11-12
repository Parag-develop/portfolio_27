import { ArrowUpRight, ExternalLink, FolderKanban } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profile } from "@/content/profile";

export function ProjectsSection() {
  if (profile.projects.length === 0) return null;

  return (
    <section
      id="projects"
      className="section-pad"
      aria-labelledby="projects-heading"
    >
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            <FolderKanban className="size-3.5" aria-hidden />
            03 · Selected work
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Drawn, then shipped.
          </h2>
        </div>
        <p className="readable max-w-sm text-muted-foreground">
          Personal tools, open source, and client UI — open a card for the live
          link.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((project, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <Card
              key={project.title}
              className="group flex h-full flex-col border-border/80 bg-card/90 shadow-md shadow-primary/5 backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge
                    variant="secondary"
                    className="font-mono text-[10px] tracking-wide"
                  >
                    {number}
                  </Badge>
                  {project.href ? (
                    <ExternalLink
                      className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <CardTitle className="mt-3 text-lg leading-snug">
                  {project.title}
                </CardTitle>
                <CardDescription className="readable mt-2 text-foreground/75">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto">
                {project.tags && project.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-border bg-secondary/50 font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </CardContent>

              {project.href ? (
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="gap-1.5">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      View live
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </Button>
                </CardFooter>
              ) : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
