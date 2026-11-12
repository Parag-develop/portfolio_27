import { Badge } from "@/components/ui/badge";
import { profile } from "@/content/profile";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-14 sm:py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Skills
      </h2>
      <div className="mt-8 space-y-7">
        {profile.skills.map((group) => (
          <div key={group.group}>
            <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {group.group}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
