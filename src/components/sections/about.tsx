import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-14 sm:py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        About
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {profile.about}
      </p>
    </section>
  );
}
