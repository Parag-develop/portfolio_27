"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

import { profile } from "@/content/profile";

function formatLocalTime(date: Date, timeZone: string) {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  const offset =
    new Intl.DateTimeFormat("en-GB", {
      timeZone,
      timeZoneName: "shortOffset",
    })
      .formatToParts(date)
      .find((part) => part.type === "timeZoneName")?.value ?? "";

  return `${time} ${offset}`;
}

export function LocalTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground tabular-nums">
      <Clock className="size-3.5 opacity-70" aria-hidden />
      <span>
        {profile.location.split("·")[0].trim()} ·{" "}
        {formatLocalTime(now, profile.timezone)}
      </span>
    </span>
  );
}
