"use client";

import Link from "next/link";
import { useState } from "react";

export type Card = { slug: string; title: string; dek: string; bucket: string; label: string; author: string; initials: string; minutes: number; draft: boolean };

// One accent per category, used for the tag bar and hover state.
const tone: Record<string, string> = {
  basics: "#2563EB",
  cited: "#7C6CF5",
  technical: "#0F766E",
  reddit: "#FF5637",
  research: "#171717",
  industry: "#15803D",
  buying: "#B45309",
};

export function BlogGrid({ cards, buckets }: { cards: Card[]; buckets: { key: string; label: string; count: number }[] }) {
  const [active, setActive] = useState("all");

  const shown = active === "all" ? cards : cards.filter((c) => c.bucket === active);
  const pill = (key: string, label: string, count: number) => (
    <button
      key={key}
      type="button"
      aria-pressed={active === key}
      onClick={() => setActive(key)}
      className={`min-h-10 rounded-full border px-4 text-sm font-medium transition-colors ${
        active === key ? "border-ink bg-ink text-paper" : "border-line bg-white text-ink/75 hover:border-ink hover:text-ink"
      }`}
    >
      {label} <span className={active === key ? "text-paper/60" : "text-muted"}>{count}</span>
    </button>
  );

  return (
    <>
      <div role="group" aria-label="Filter by topic" className="mt-10 flex flex-wrap gap-2">
        {pill("all", "All", cards.length)}
        {buckets.map((b) => pill(b.key, b.label, b.count))}
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/blog/${c.slug}`}
              style={{ "--tone": tone[c.bucket] } as React.CSSProperties}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--tone)] hover:shadow-lift"
            >
              <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--tone)" }}>
                <span aria-hidden className="h-3.5 w-1 rounded-full" style={{ background: "var(--tone)" }} />
                {c.label}
                {c.draft && <span className="rounded bg-accent px-1.5 text-ink">draft</span>}
              </span>
              <span className="mt-4 font-display text-[19px] font-bold leading-snug tracking-tight">{c.title}</span>
              <span className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">{c.dek}</span>
              <span className="mt-auto flex items-center gap-2.5 border-t border-line pt-4 text-xs text-muted">
                <span aria-hidden className="grid size-7 place-items-center rounded-full bg-ink text-[10px] font-bold text-paper">{c.initials}</span>
                <span className="font-medium text-ink">{c.author}</span>
                <span>· {c.minutes} min read</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
