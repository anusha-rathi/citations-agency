"use client";

import { Search } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { scenarios } from "@/lib/scenarios";
import { wrap } from "@/lib/styles";
import { Illustrative } from "./mocks";
import { Head, Reveal, Swap } from "./ui";

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
  const [active, setActive] = useState(0);
  const s = scenarios[active];
  return (
    <section id="why" className={`${wrap} grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24`}>
      <Head eyebrow="Why Reddit" title="Your buyers are already having the conversation.">
        They ask Reddit what to buy, what to avoid, and what actually works.
      </Head>
      <Reveal delay={0.08} className="min-w-0">
        <article className="rounded-3xl border border-line bg-white p-5 sm:p-7">
          <h3 className="font-display text-xl font-bold leading-tight tracking-tight">It starts with a question.</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">Real buyers ask Reddit before they decide.</p>
          <div className="mt-5 flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-3 text-sm shadow-sm">
            <Search aria-hidden className="size-4 shrink-0 text-accent" />
            <Typed key={active} text={s.query} />
          </div>
          <ul className="mt-3 space-y-1">
            {scenarios.map((sc, i) => (
              <li key={sc.query}>
                <button
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center gap-2.5 min-h-11 rounded-xl px-3 py-2 text-left text-sm transition-colors duration-200 ${
                    i === active ? "bg-accent/10 font-medium ring-1 ring-accent/40" : "text-muted hover:bg-paper hover:text-ink"
                  }`}
                >
                  <Search aria-hidden className={`size-3.5 shrink-0 ${i === active ? "text-accent" : ""}`} />
                  {sc.query}
                </button>
              </li>
            ))}
          </ul>
          <Swap k={active} className="mt-4 rounded-2xl border border-line p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Top discussion</p>
            <p className="mt-2 text-xs text-muted">reddit.com › r/{s.sub}</p>
            <p className="mt-0.5 font-semibold leading-snug text-violet">{s.question}</p>
          </Swap>
        </article>
        <Illustrative className="mt-4">Illustrative example searches</Illustrative>
      </Reveal>
    </section>
  );
}
