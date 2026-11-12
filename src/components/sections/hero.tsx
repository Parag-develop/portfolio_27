import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-16 sm:py-20"
    >
      <p className="mb-4 text-sm font-medium tracking-[0.18em] text-primary uppercase">
        {profile.location}
      </p>
      <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-5 max-w-xl text-xl font-medium text-foreground/90 sm:text-2xl">
        {profile.headline}
      </p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {profile.summary}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild size="lg">
          <a href={`mailto:${profile.email}`}>
            <Mail />
            Email me
          </a>
        </Button>
        {profile.links.map((link) => (
          <Button key={link.href} asChild variant="outline" size="lg">
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </Button>
        ))}
        {profile.cvHref ? (
          <Button asChild variant="ghost" size="lg">
            <a href={profile.cvHref} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </Button>
        ) : null}
      </div>
    </section>
  );
}
