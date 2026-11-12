import {
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/content/profile";

export function ExperienceSection() {
  return (
    <section id="work" className="section-pad" aria-labelledby="work-heading">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            <Briefcase className="size-3.5" aria-hidden />
            01 · Experience
          </p>
          <h2
            id="work-heading"
            className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Shipped, then supported.
          </h2>
        </div>
        <p className="readable max-w-sm text-muted-foreground">
          Company, title, dates, and impact — highlights are open so you can
          scan quickly.
        </p>
      </div>

      <div className="space-y-4">
        {profile.experience.map((role, index) => {
          const number = String(index + 1).padStart(2, "0");
          const isCurrent = role.end.toLowerCase() === "present";

          return (
            <Card
              key={`${role.company}-${role.start}`}
              className="overflow-hidden border-border/80 bg-card/90 shadow-md shadow-primary/5 backdrop-blur-sm"
            >
              <CardHeader className="pb-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="font-mono text-[10px] tracking-wide"
                  >
                    {number}
                  </Badge>
                  {isCurrent ? (
                    <Badge className="gap-1">
                      <span className="size-1.5 rounded-full bg-primary-foreground" />
                      Current
                    </Badge>
                  ) : null}
                </div>

                <CardTitle className="mt-3 text-lg sm:text-xl">
                  {role.company}
                </CardTitle>
                <CardDescription className="mt-1.5 flex items-center gap-1.5 text-foreground/75">
                  <Building2 className="size-3.5 shrink-0" aria-hidden />
                  {role.title}
                </CardDescription>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="gap-1.5 font-normal">
                    <CalendarDays className="size-3.5" aria-hidden />
                    {role.start} – {role.end}
                  </Badge>
                  <Badge variant="outline" className="gap-1.5 font-normal">
                    <MapPin className="size-3.5" aria-hidden />
                    {role.location}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <Separator className="mb-1" />
                <Accordion
                  type="multiple"
                  defaultValue={[`item-${index}`]}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="py-3 text-sm text-foreground hover:no-underline">
                      Role highlights
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3">
                        {role.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="readable flex gap-2.5 text-foreground/85"
                          >
                            <CheckCircle2
                              className="mt-1 size-4 shrink-0 text-primary"
                              aria-hidden
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
