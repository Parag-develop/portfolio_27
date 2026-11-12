import { Separator } from "@/components/ui/separator";
import { profile } from "@/content/profile";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 py-14 sm:py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Education
      </h2>
      <ul className="mt-8">
        {profile.education.map((item, index) => (
          <li key={`${item.school}-${item.degree}`}>
            {index > 0 ? <Separator className="my-6" /> : null}
            <article className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.degree}
                </h3>
                <p className="mt-0.5 text-sm text-primary">{item.school}</p>
                {item.detail ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                ) : null}
              </div>
              <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
                {item.period}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
