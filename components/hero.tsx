"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { wrap } from "@/lib/styles";
import { AuditCta, Cta, Reveal, ease } from "./ui";

const terms = ["AI CITATIONS", "AEO", "GEO", "AI SEO"];

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

/* ── Prompt intelligence card ───────────────────────────────────────── */

const categories = ["Discovery", "Comparison", "Problem-solving", "Recommendation"] as const;

const samples: { prompt: string; category: (typeof categories)[number]; related: string[] }[] = [
  { prompt: "Best CRM for early-stage startups", category: "Discovery", related: ["CRM with a free tier", "easiest CRM to set up", "CRM for founders"] },
  { prompt: "What are the alternatives to [software]?", category: "Comparison", related: ["[software] vs …", "cheaper than [software]", "[software] competitors"] },
  { prompt: "How do I stop leads slipping through the cracks?", category: "Problem-solving", related: ["lead follow-up process", "pipeline tracking", "sales handoff"] },
  { prompt: "Which AI tool works best for sales prospecting?", category: "Recommendation", related: ["AI prospecting tools", "is it worth paying for", "tools teams actually use"] },
  { prompt: "Which applicant tracking system is best for a small team?", category: "Recommendation", related: ["ATS for 10 employees", "ATS vs spreadsheet", "affordable ATS"] },
];

function PromptCard() {
  const i = useCycle(samples.length, 3600);
  const s = samples[i];
  return (
    <div className="rounded-2xl border border-line bg-[#fffdfa] p-4 shadow-lift sm:p-5">
      <p className="font-mono text-[11px] tracking-wider text-muted">prompt intelligence</p>
      <div className="mt-3 flex min-h-12 items-center gap-2.5 rounded-[10px] border border-line bg-white px-3.5 py-2.5 shadow-[inset_0_1px_2px_rgba(20,20,20,0.04)]">
        <span aria-hidden className="size-2 shrink-0 rounded-full bg-accent" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }} className="text-[15px] font-medium leading-snug">
            {s.prompt}
          </motion.span>
        </AnimatePresence>
      </div>

      <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-muted">prompt type</p>
      <ul className="mt-2 grid grid-cols-2 gap-1.5">
        {categories.map((c) => {
          const on = c === s.category;
          return (
            <li key={c} className={`relative flex items-center gap-2 rounded-[8px] border px-2.5 py-2 text-[13px] transition-colors duration-500 ${on ? "border-accent/50 bg-peach/70 font-semibold" : "border-line text-muted"}`}>
              <span aria-hidden className={`size-1.5 rounded-full transition-colors duration-500 ${on ? "bg-accent" : "bg-ink/15"}`} />
              {c}
            </li>
          );
        })}
      </ul>

      <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-muted">related questions</p>
      <AnimatePresence mode="wait" initial={false}>
        <motion.ul key={i} className="mt-2 flex flex-wrap gap-1.5" initial="h" animate="v" exit="h">
          {s.related.map((r, n) => (
            <motion.li
              key={r}
              variants={{ h: { opacity: 0, y: 4 }, v: { opacity: 1, y: 0, transition: { delay: 0.15 + n * 0.08 } } }}
              className="rounded-full bg-lav/70 px-2.5 py-1 text-xs"
            >
              {r}
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}

/* ── Research → outcomes, and platforms ─────────────────────────────── */

const inputs = ["Prompt Research", "Semantic Research", "Content Mapping"];
const outcomes = ["Brand Mentions", "Linked Citations", "Search Visibility"];

const platforms = [
  { name: "ChatGPT", logo: "/logos/chatgpt.svg" },
  { name: "Claude", logo: "/logos/claude.svg" },
  { name: "Gemini", logo: "/logos/googlegemini.svg" },
  { name: "Perplexity", logo: "/logos/perplexity.svg" },
  { name: "Google Search", logo: "/logos/google.svg" },
  { name: "Google AI Overviews", logo: "/logos/google.svg" },
];

function Flow() {
  const item = (t: string, n: number, accent?: boolean) => (
    <motion.li
      key={t}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (accent ? 0.9 : 0.1) + n * 0.15, duration: 0.5, ease }}
      className={`rounded-[10px] border px-3.5 py-2.5 text-sm font-semibold ${accent ? "border-accent/30 bg-peach/60" : "border-line bg-white"}`}
    >
      {t}
    </motion.li>
  );
  return (
    <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">the research</p>
        <ul className="space-y-1.5">{inputs.map((t, n) => item(t, n))}</ul>
      </div>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mx-auto mt-5 grid size-9 place-items-center rounded-full bg-ink text-paper max-sm:rotate-90"
      >
        <ArrowRight className="size-4" />
      </motion.span>
      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">what we track</p>
        <ul className="space-y-1.5">{outcomes.map((t, n) => item(t, n, true))}</ul>
      </div>
    </div>
  );
}

function Platforms() {
  const i = useCycle(platforms.length, 2800);
  const p = platforms[i];
  return (
    <div className="flex h-14 w-full items-center overflow-hidden rounded-[12px] border border-line bg-white px-4 shadow-soft sm:w-72">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={p.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.5, ease }} className="flex items-center gap-3">
          <Image src={p.logo} alt="" width={24} height={24} className="size-6" />
          <span className="font-display text-lg font-semibold tracking-tight">{p.name}</span>
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">ChatGPT, Claude, Gemini, Perplexity, Google Search and Google AI Overviews</span>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */

export function Hero() {
  const i = useCycle(terms.length, 2500);
  return (
    <section id="top" className="relative overflow-x-clip">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 size-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,86,55,0.11),transparent)]" />
        <div className="absolute -right-40 top-32 size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,108,245,0.09),transparent)]" />
      </div>

      <div className={`${wrap} grid gap-10 pt-12 sm:pt-16 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-14`}>
        <div className="min-w-0">
          <h1>
            <span className="sr-only">AI citations, AEO, GEO and AI SEO = groundbreaking research + content + optimized content.</span>
            <span aria-hidden className="block">
              <span className="grid overflow-hidden font-display text-[clamp(2.5rem,6.6vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.035em]">
                <span className="invisible col-start-1 row-start-1">AI CITATIONS</span>
                <AnimatePresence initial={false}>
                  <motion.span key={i} className="col-start-1 row-start-1" initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.6, ease }}>
                    {terms[i]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="mt-4 block font-display text-[clamp(1.3rem,2.3vw,1.8rem)] font-semibold leading-snug tracking-[-0.02em]">
                <span className="mr-2.5 text-accent">=</span>groundbreaking research <span className="text-ink/35">+</span> content{" "}
                <span className="text-ink/35">+</span> <span className="bg-[linear-gradient(transparent_62%,#FFE7DE_62%)]">optimized content</span>
              </span>
            </span>
          </h1>
          <p className="mt-8 font-display text-base font-semibold tracking-tight sm:text-lg">Get discovered for the questions your buyers are already asking.</p>
          <p className="mt-2 max-w-xl leading-relaxed text-muted">
            We research what people ask AI, identify where your brand is missing, and create content designed to
            strengthen your visibility across AI answers, search results, and the conversations shaping both.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <AuditCta>Get a Free AI Visibility Audit</AuditCta>
            <Cta href="#system" variant="outline" down>
              See how it works
            </Cta>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }} className="min-w-0">
          <PromptCard />
        </motion.div>
      </div>

      {/* Continuation of the landing story */}
      <div className={`${wrap} grid gap-10 pb-14 pt-20 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-24`}>
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            You don’t know what AI says about you. Yet.
            <span className="mt-2 block text-accent">But you can find out.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="min-w-0 rounded-2xl border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#FBF6F1_100%)] p-5 shadow-soft sm:p-6">
          <Flow />
        </Reveal>
        <Reveal className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between lg:col-span-2">
          <p className="font-display text-xl font-semibold tracking-tight">Across the places your buyers search.</p>
          <Platforms />
        </Reveal>
      </div>
    </section>
  );
}
