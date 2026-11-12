import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import { LocalTime } from "@/components/local-time";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-end pb-16 pt-20 sm:justify-center sm:pb-24 sm:pt-16"
    >
      <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <Badge
          variant="outline"
          className="border-border bg-background/60 font-normal text-foreground/70"
        >
          {profile.availability}
        </Badge>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5" aria-hidden />
          {profile.location}
        </span>
        <LocalTime />
      </div>

      <h1
        id="hero-heading"
        className="max-w-4xl text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
      >
        {profile.name}, {profile.headline}
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="gap-2">
          <a href={`mailto:${profile.email}`}>
            <Mail className="size-4" />
            Get in touch
            <ArrowUpRight className="size-4" />
          </a>
        </Button>

        {profile.links.map((link) => {
          const Icon = link.label === "GitHub" ? Github : Linkedin;
          return (
            <Tooltip key={link.href}>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <Icon className="size-4" />
                    <span className="hidden sm:inline">{link.label}</span>
                    <span className="sr-only sm:hidden">{link.label}</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{link.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </section>
  );
}
