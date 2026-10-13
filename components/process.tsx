"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { wrap } from "@/lib/styles";
import { Head, Reveal, Swap } from "./ui";

const steps = [
  { short: "Learn", title: "We get obsessed with your product.", text: "What you sell, who buys it, where they hesitate, and how competitors position themselves.", tags: ["Product", "Buyer personas", "Competitors", "Objections"] },
  { short: "Map", title: "We find the conversations that matter.", text: "The subreddits, searches and recurring questions where your buyers already spend time.", tags: ["Subreddit scouting", "Community rules", "Search research", "Buyer questions"] },
  { short: "Plan", title: "One brand, a different approach per community.", text: "Angles, formats and a content calendar for each audience, reviewed and approved by you.", tags: ["Content angles", "Calendar", "Your approval"] },
  { short: "Execute", title: "Then the conversations begin.", text: "We publish posts, join relevant discussions, and respond to brand mentions.", tags: ["Posts", "Comments", "Mention replies", "Reddit Ads if included"] },
  { short: "Measure", title: "We watch what happens next.", text: "Engagement, search results, brand mentions and AI citations, turned into next month’s plan.", tags: ["Engagement", "Search tracking", "AI mentions and citations", "Recommendations"] },
];

export function Process() {
  const [i, setI] = useState(0);
  const s = steps[i];
  const arrow = "grid size-11 place-items-center rounded-full border border-ink/15 transition-colors enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-paper disabled:opacity-30";
  return (
    <section id="process" className={`${wrap} py-16 lg:py-20`}>
      <Head
        eyebrow="How we work"
        title={
          <>
            We don’t start with posts. <span className="text-accent">We start with your world.</span>
          </>
        }
      />

      <Reveal className="mt-10">
        <div className="relative">
          <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-ink/10">
            <span className="block h-full rounded-full bg-accent transition-all duration-500 ease-out" style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
          </span>
          <div role="tablist" aria-label="Process steps" className="grid grid-cols-5">
            {steps.map((st, n) => (
              <button
                key={st.short}
                type="button"
                role="tab"
                aria-selected={n === i}
                aria-controls="process-panel"
                onClick={() => setI(n)}
                className={`pb-2 pt-4 text-left transition-colors ${n === i ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                <span className={`font-mono text-xs ${n === i ? "text-accent" : ""}`}>0{n + 1}</span>
                <span className="mt-0.5 block font-display text-sm font-bold tracking-tight sm:text-base">{st.short}</span>
              </button>
            ))}
          </div>
        </div>

        <div id="process-panel" role="tabpanel" className="mt-4 flex flex-col gap-6 rounded-3xl border border-line bg-white p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <Swap k={i} className="min-w-0 lg:min-h-36">
            <h3 className="font-display text-xl font-bold leading-tight tracking-tight sm:text-2xl">{s.title}</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-muted">{s.text}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <li key={t} className="rounded-full bg-paper px-3 py-1 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </Swap>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" aria-label="Previous step" disabled={i === 0} onClick={() => setI(i - 1)} className={arrow}>
              <ArrowLeft aria-hidden className="size-4" />
            </button>
            <button type="button" aria-label="Next step" disabled={i === steps.length - 1} onClick={() => setI(i + 1)} className={arrow}>
              <ArrowRight aria-hidden className="size-4" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
