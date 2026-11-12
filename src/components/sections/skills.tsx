import {
  Code2,
  Layers3,
  Server,
  TestTubes,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profile } from "@/content/profile";

const groupMeta: Record<string, { icon: LucideIcon; blurb: string }> = {
  Frontend: {
    icon: Code2,
    blurb: "Frameworks and language fundamentals I ship with daily.",
  },
  "UI & craft": {
    icon: Layers3,
    blurb: "Design systems, accessibility, and production polish.",
  },
  "APIs & platform": {
    icon: Server,
    blurb: "Integration and platform familiarity around the product.",
  },
  "Testing & delivery": {
    icon: TestTubes,
    blurb: "Quality gates and the path from PR to production.",
  },
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-pad"
      aria-labelledby="skills-heading"
    >
      <div className="mb-10">
        <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
          02 · Skills
        </p>
        <h2
          id="skills-heading"
          className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl"
        >
          Stack I reach for.
        </h2>
        <p className="readable mt-4 max-w-xl text-muted-foreground">
          Every group is visible below — scan the full toolkit without switching
          tabs.
        </p>
      </div>

      <div className="space-y-4">
        {profile.skills.map((group, groupIndex) => {
          const meta = groupMeta[group.group];
          const Icon = meta?.icon ?? Code2;

          return (
            <Card
              key={group.group}
              className="border-border/80 bg-card/90 shadow-md shadow-primary/5 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary shadow-sm">
                    <Icon className="size-5 text-primary" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <CardTitle className="text-lg">{group.group}</CardTitle>
                      <Badge
                        variant="secondary"
                        className="font-mono text-[10px] tracking-wide"
                      >
                        {String(groupIndex + 1).padStart(2, "0")}
                      </Badge>
                    </div>
                    <CardDescription className="mt-1.5">
                      {meta?.blurb ?? "Tools and practices for this area."}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="border border-border/70 bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
