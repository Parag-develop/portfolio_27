import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-pad"
      aria-labelledby="contact-heading"
    >
      <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
        05 · Contact
      </p>
      <h2
        id="contact-heading"
        className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl"
      >
        Something worth building?
      </h2>
      <p className="readable mt-5 max-w-xl text-muted-foreground sm:text-lg sm:leading-8">
        {profile.availability}. Say hello and we can talk about the next role.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg" className="gap-2">
          <a href={`mailto:${profile.email}`}>
            <Mail className="size-4" />
            {profile.email}
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
        {profile.phone ? (
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              <Phone className="size-4" />
              {profile.phone}
            </a>
          </Button>
        ) : null}
      </div>

      <ul className="mt-10 flex flex-wrap gap-2">
        {profile.links.map((link) => {
          const Icon = link.label === "GitHub" ? Github : Linkedin;
          return (
            <li key={link.href}>
              <Button asChild variant="ghost" className="gap-2">
                <a href={link.href} target="_blank" rel="noreferrer">
                  <Icon className="size-4" />
                  {link.label}
                  <ArrowUpRight className="size-3.5 opacity-60" />
                </a>
              </Button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
