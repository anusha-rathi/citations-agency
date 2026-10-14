"use client";

import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { wrap } from "@/lib/styles";
import { AuditCta, Cta, ease } from "./ui";

const terms = ["AI CITATIONS", "AEO", "GEO", "AI SEO"];

const research = [
  { prompt: "Best ATS for a 10-person startup", intent: "Recommendation", competitor: "Several named", source: "Community thread" },
  { prompt: "Alternatives to HubSpot for a small team", intent: "Alternatives", competitor: "HubSpot named", source: "Comparison article" },
  { prompt: "Which AI sales tools are actually useful?", intent: "Evaluation", competitor: "Several named", source: "Reddit discussion" },
  { prompt: "Claude vs ChatGPT for research workflows", intent: "Comparison", competitor: "Two named", source: "Review content" },
];

function useCycle(length: number, ms: number) {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % length), ms);
    return () => clearInterval(t);
  }, [reduced, length, ms]);
  return i;
}

function ResearchCard() {
  const i = useCycle(research.length, 3400);
  const r = research[i];
  const rows = [
    ["Prompt identified", null],
    ["Buyer intent", r.intent],
    ["Competitor mentioned", r.competitor],
    ["Source opportunity", r.source],
  ];
  return (
    <div className="relative rounded-2xl border border-line bg-white p-5 shadow-lift">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] tracking-wider text-muted">prompt research</p>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
          <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-accent" />
          live sample
        </span>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <p className="mt-3 rounded-[10px] bg-paper px-3.5 py-3 font-display text-[15px] font-semibold leading-snug">“{r.prompt}”</p>
          <ul className="mt-3 space-y-1.5">
            {rows.map(([k, v], n) => (
              <motion.li
                key={k}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + n * 0.22, duration: 0.35, ease }}
                className="flex items-center justify-between gap-3 text-[13px]"
              >
                <span className="flex items-center gap-2">
                  <span className="grid size-4 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check aria-hidden className="size-2.5" strokeWidth={3.5} />
                  </span>
                  {k}
                </span>
                {v && <span className="rounded-md bg-lav px-2 py-0.5 text-[11px] font-medium">{v}</span>}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
      <p className="mt-4 border-t border-line pt-3 font-mono text-[10px] text-muted">Illustrative research sample</p>
    </div>
  );
}

export function Hero() {
  const i = useCycle(terms.length, 2500);
  return (
    <section id="top" className="relative overflow-x-clip">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 size-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,86,55,0.13),transparent)]" />
        <div className="absolute -right-40 top-40 size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,108,245,0.11),transparent)]" />
      </div>
      <div className={`${wrap} grid gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-14 lg:pb-24`}>
        <div className="min-w-0">
          <h1>
            <span className="sr-only">AI citations, AEO, GEO and AI SEO = prompt-backed research + content.</span>
            <span aria-hidden className="block">
              <span className="grid overflow-hidden font-display text-[clamp(2.5rem,6.6vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.035em]">
                <span className="invisible col-start-1 row-start-1">AI CITATIONS</span>
                <AnimatePresence initial={false}>
                  <motion.span
                    key={i}
                    className="col-start-1 row-start-1"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    {terms[i]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="mt-2 block font-mono text-xs tracking-wider text-muted">(AEO · GEO · AI SEO · AI CITATIONS)</span>
              <span className="mt-5 block font-display text-[clamp(1.5rem,3vw,2.35rem)] font-bold leading-tight tracking-[-0.025em]">
                <span className="mr-3 text-accent">=</span>
                <span className="bg-[linear-gradient(transparent_62%,#FFE7DE_62%)]">Prompt-backed research</span> + content.
              </span>
            </span>
          </h1>
          <p className="mt-8 max-w-xl font-display text-lg font-semibold leading-snug tracking-tight sm:text-xl">
            Get discovered for the questions your buyers are already asking.
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            We research what people ask AI, identify where your brand is missing, and create content designed to
            strengthen your visibility across AI answers, search results, and the conversations shaping both.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <AuditCta>Get your free audit</AuditCta>
            <Cta href="#system" variant="outline" down>
              See how it works
            </Cta>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }} className="min-w-0">
          <ResearchCard />
        </motion.div>
      </div>
    </section>
  );
}
