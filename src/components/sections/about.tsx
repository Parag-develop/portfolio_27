import { GraduationCap } from "lucide-react";

import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-pad"
      aria-labelledby="about-heading"
    >
      <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
        04 · About
      </p>
      <h2
        id="about-heading"
        className="mt-3 max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
      >
        I build frontend software that ships — and stay with it in production.
      </h2>
      <p className="readable mt-6 max-w-2xl text-muted-foreground sm:text-lg sm:leading-8">
        {profile.about}
      </p>

      {site.sections.education ? (
        <div id="education" className="mt-14 scroll-mt-24 border-t border-border pt-10">
          <div className="mb-6 flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            <GraduationCap className="size-3.5" aria-hidden />
            Education
          </div>
          <ul className="space-y-6">
            {profile.education.map((item, index) => (
              <li
                key={`${item.school}-${item.degree}`}
                className="grid gap-2 sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-medium tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school}
                  </p>
                  {item.detail ? (
                    <p className="mt-1 text-sm text-muted-foreground/80">
                      {item.detail}
                    </p>
                  ) : null}
                </div>
                <p className="text-sm text-muted-foreground tabular-nums sm:text-right">
                  {item.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
