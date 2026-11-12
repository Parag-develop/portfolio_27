import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name} · Built with Next.js &amp; shadcn/ui
        </p>
        <Button asChild variant="ghost" size="sm" className="w-fit gap-2">
          <a href="#top">
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </Button>
      </div>
    </footer>
  );
}
