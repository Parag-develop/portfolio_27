import { Separator } from "@/components/ui/separator";
import { profile } from "@/content/profile";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-14 sm:py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Experience
      </h2>
      <ol className="mt-8 space-y-0">
        {profile.experience.map((role, index) => (
          <li key={`${role.company}-${role.start}`} className="relative">
            {index > 0 ? <Separator className="mb-8" /> : null}
            <article className="pb-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {role.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">
                    {role.company}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
                  {role.start} – {role.end}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {role.location}
              </p>
              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-sm leading-relaxed text-foreground/85 before:absolute before:top-[0.65em] before:left-0 before:size-1.5 before:rounded-full before:bg-primary/50"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
