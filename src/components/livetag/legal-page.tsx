import { SiteShell } from "@/components/livetag/site-shell";
import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <SiteShell>
      <main className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-3xl font-black">{title}</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#0B0D10]/70">{children}</div>
      </main>
    </SiteShell>
  );
}
