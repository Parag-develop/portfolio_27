import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-14 sm:py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Contact
      </h2>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        Open to frontend roles and collaborations. Reach out anytime.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${profile.email}`}>
            <Mail />
            {profile.email}
          </a>
        </Button>
        {profile.phone ? (
          <Button asChild variant="outline">
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              {profile.phone}
            </a>
          </Button>
        ) : null}
        {profile.links.map((link) => (
          <Button key={link.href} asChild variant="secondary">
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
