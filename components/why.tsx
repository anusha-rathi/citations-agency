"use client";

import { ArrowUpRight, Search } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { threads } from "@/lib/content";
import { wrap } from "@/lib/styles";
import { Reveal, Swap } from "./ui";

// Remounted per query (via `key`), so the typing restarts from zero.
function Typed({ text }: { text: string }) {
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v < text.length ? v + 1 : v)), 22);
    return () => clearInterval(t);
  }, [text]);
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="truncate">{reduced ? text : text.slice(0, n)}</span>
      <span aria-hidden className="h-4 w-px shrink-0 animate-[blink_1s_steps(1)_infinite] bg-ink" />
    </>
  );
}

export function Why() {
  const [i, setI] = useState(0);
  const t = threads[i];
  return (
    <section id="why" className="border-y border-line bg-white/60">
      <div className={`${wrap} grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-20`}>
        <Reveal>
          <p className="font-mono text-xs tracking-wider text-muted">why reddit</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Why Reddit? Because conversations become sources.
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            Reddit is where people compare products, question claims, and share real experiences. Those discussions are
            also becoming important sources for AI-powered search.
          </p>

          <div className="mt-8 flex items-end gap-5 border-t border-line pt-6">
            <p className="font-display text-6xl font-bold leading-none tracking-[-0.04em] text-accent">3.11%</p>
            <p className="pb-1 text-sm leading-snug">
              of citations in Profound’s analyzed AI-search dataset pointed to Reddit, the most-cited single source across
              ChatGPT, Google AI Overviews and Perplexity.
            </p>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            4B+ citations, Aug 2024 – Oct 2025.{" "}
            <a href="https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 font-medium text-ink underline decoration-accent underline-offset-2">
              Profound × Reddit research, Nov 2025
              <ArrowUpRight aria-hidden className="size-3" />
            </a>
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Semrush found Reddit was the top-cited domain on Perplexity and in the top three on ChatGPT Search and Google AI
            Mode, across 248,000 cited Reddit URLs.{" "}
            <a href="https://www.semrush.com/blog/reddit-ai-search-visibility-study/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 font-medium text-ink underline decoration-accent underline-offset-2">
              Semrush, Nov 2025
              <ArrowUpRight aria-hidden className="size-3" />
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <article className="rounded-2xl border border-line bg-white p-5 shadow-lift sm:p-6">
            <h3 className="font-display text-lg font-bold tracking-tight">It starts with a question. Often, on Reddit.</h3>
            <div className="mt-4 flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm">
              <Search aria-hidden className="size-4 shrink-0 text-accent" />
              <Typed key={i} text={t.query} />
            </div>
            <ul className="mt-2 space-y-0.5">
              {threads.map((th, n) => (
                <li key={th.url}>
                  <button
                    type="button"
                    aria-pressed={n === i}
                    onClick={() => setI(n)}
                    className={`flex min-h-10 w-full items-center gap-2.5 rounded-[10px] px-3 text-left text-sm transition-colors ${
                      n === i ? "bg-accent/10 font-medium ring-1 ring-accent/35" : "text-muted hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <Search aria-hidden className={`size-3.5 shrink-0 ${n === i ? "text-accent" : ""}`} />
                    {th.query}
                  </button>
                </li>
              ))}
            </ul>
            <Swap k={i} className="mt-3 rounded-xl border border-line bg-paper/60 p-3.5">
              <p className="text-xs text-muted">reddit.com › r/{t.sub}</p>
              <p className="mt-1 font-semibold leading-snug">{t.title}</p>
              <a href={t.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-8 items-center gap-1 text-sm font-semibold underline decoration-accent underline-offset-4">
                View discussion
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </Swap>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
