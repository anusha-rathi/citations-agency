"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { threads } from "@/lib/content";
import { wrap } from "@/lib/styles";
import { Head, Reveal, Swap } from "./ui";

const reasons = [
  "Buyers ask detailed questions about products and categories.",
  "People compare alternatives and share real experiences.",
  "Search engines surface relevant Reddit discussions.",
  "AI search experiences can cite public threads.",
];

export function Why() {
  const [i, setI] = useState(0);
  const t = threads[i];
  return (
    <section id="why" className="border-y border-line bg-white/60">
      <div className={`${wrap} py-16 lg:py-24`}>
        <Head eyebrow="why content through reddit" title="Your buyers are already having the conversation.">
          So are your competitors. Every recommendation, comparison, and honest opinion shapes how people discover and
          evaluate brands. The question is whether your brand has a useful place in that conversation.
        </Head>
        <Reveal delay={0.06}>
          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, n) => (
              <li key={r} className="border-t border-line pt-3 text-sm leading-relaxed">
                <span className="font-mono text-xs text-accent">0{n + 1}</span>
                <span className="mt-1 block text-ink/80">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14">
          <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            It starts with a question. <span className="text-muted">Often, it starts on Reddit.</span>
          </h3>
          <div className="mt-6 grid gap-5 lg:grid-cols-[2fr_3fr]">
            <div>
              <p className="font-mono text-xs tracking-wider text-muted">explore the questions</p>
              <ul className="mt-3 space-y-1">
                {threads.map((th, n) => (
                  <li key={th.url}>
                    <button
                      type="button"
                      aria-pressed={n === i}
                      onClick={() => setI(n)}
                      className={`relative flex min-h-11 w-full flex-col justify-center rounded-[10px] py-2 pl-4 pr-3 text-left transition-colors ${
                        n === i ? "bg-white shadow-soft" : "hover:bg-white/70"
                      }`}
                    >
                      <span aria-hidden className={`absolute inset-y-2 left-0 w-0.5 rounded-full ${n === i ? "bg-accent" : "bg-transparent"}`} />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{th.category}</span>
                      <span className={`line-clamp-1 text-sm ${n === i ? "font-semibold" : "text-ink/75"}`}>{th.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 rounded-3xl bg-[linear-gradient(150deg,#FFE7DE_0%,#F8F7F4_60%)] p-3 sm:p-5">
              <Swap k={i} className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-lift sm:p-7">
                <p className="flex flex-wrap items-center gap-2 text-xs">
                  <span aria-hidden className="grid size-6 place-items-center rounded-full bg-accent font-display text-[10px] font-bold">r/</span>
                  <span className="font-semibold">r/{t.sub}</span>
                  <span className="rounded-md bg-paper px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">{t.category}</span>
                </p>
                <p className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight sm:text-[1.75rem]">{t.title}</p>
                <p className="mt-3 leading-relaxed text-muted">{t.text}</p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-8">
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 items-center gap-1.5 rounded-[10px] border border-ink/15 px-4 text-sm font-semibold transition-colors hover:border-ink"
                  >
                    View discussion
                    <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <span className="font-mono text-[10px] text-muted">Real public thread · title as posted</span>
                </div>
              </Swap>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
