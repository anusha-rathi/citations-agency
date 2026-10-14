"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { card, wrap } from "@/lib/styles";
import { Head, Reveal } from "./ui";

const methods = [
  ["Prompt research", "The real questions buyers ask AI about your category, competitors, and the problems you solve."],
  ["Semantic & NLP research", "How phrasings, intent, and related topics connect to your discoverability."],
  ["Competitor & visibility research", "Where competitors appear, where you don’t, and which sources get cited."],
  ["Content opportunity mapping", "Findings turned into specific topics, conversations, and source opportunities."],
];

const clusters = [
  { name: "Discovery prompts", at: [24, 18], prompts: ["What’s the best tool for…", "Top options for…", "What do teams use for…"] },
  { name: "Comparison prompts", at: [76, 18], prompts: ["Is X better than Y?", "Alternatives to…", "X vs Y for startups"] },
  { name: "Problem-solving prompts", at: [24, 70], prompts: ["Which platform integrates with…", "How do I fix…", "Easiest way to…"] },
  { name: "Recommendation prompts", at: [76, 70], prompts: ["What should a small team use for…", "Which would you recommend?", "Worth paying for…?"] },
];

// Scattered start positions (x%, y%), one per prompt, in cluster order.
const scatter = [[50, 8], [12, 46], [88, 52], [30, 92], [70, 38], [8, 22], [92, 86], [42, 60], [62, 90], [18, 70], [84, 24], [56, 30]];

function Bubble({ p, text, from, to }: { p: MotionValue<number>; text: string; from: number[]; to: number[] }) {
  const left = useTransform(p, [0, 1], [`${from[0]}%`, `${to[0]}%`]);
  const top = useTransform(p, [0, 1], [`${from[1]}%`, `${to[1]}%`]);
  return (
    <motion.span style={{ left, top }} className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-white px-2.5 py-1 text-[11px] shadow-soft">
      {text}
    </motion.span>
  );
}

function ResearchMap() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "center 50%"] });
  const p = useTransform(scrollYProgress, (v) => (reduced ? 1 : v));
  const labelOpacity = useTransform(p, [0.7, 1], [0, 1]);
  const centerOpacity = useTransform(p, [0, 0.6], [1, 0]);
  return (
    <div ref={ref} className="relative h-[27rem] overflow-hidden rounded-3xl bg-[radial-gradient(90%_80%_at_50%_45%,#EEE9FF_0%,#FFE7DE_55%,#F8F7F4_100%)]">
      <motion.span style={{ opacity: centerOpacity }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-ink px-3 py-2 text-xs font-semibold text-paper">
        Your category
      </motion.span>
      {clusters.map((c, ci) => (
        <div key={c.name}>
          <motion.span
            style={{ opacity: labelOpacity, left: `${c.at[0]}%`, top: `${c.at[1] - 9}%` }}
            className="absolute -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-wider text-accent"
          >
            {c.name}
          </motion.span>
          {c.prompts.map((t, pi) => (
            <Bubble key={t} p={p} text={t} from={scatter[ci * 3 + pi]} to={[c.at[0], c.at[1] + pi * 9]} />
          ))}
        </div>
      ))}
    </div>
  );
}

const outcomes = [
  { name: "Brand mention", text: "Your brand is named in an answer.", demo: <>…teams often shortlist <mark className="rounded bg-peach px-1">YourBrand</mark> for this.</> },
  { name: "Linked citation", text: "Your page or thread is shown as a source.", demo: <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2 py-0.5 text-[11px]"><span className="size-2 rounded-full bg-accent" />yourbrand.com</span> },
  { name: "Search visibility", text: "Your page ranks in search results.", demo: <span className="text-[11px]"><span className="font-mono text-accent">#3</span> yourbrand.com › guide</span> },
];

const platforms = ["ChatGPT", "Claude", "Gemini", "Perplexity", "Google Search", "Google AI Overviews"];

export function Approach() {
  return (
    <section id="approach" className={`${wrap} py-16 lg:py-24`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
        <div>
          <Head eyebrow="the visibility question" title="You don’t know what AI says about you. Yet.">
            And more importantly, you may not know what your buyers are asking in the first place. That’s where we start.
          </Head>
          <Reveal delay={0.08}>
            <ol className="mt-8 border-t border-line">
              {methods.map(([t, d], n) => (
                <li key={t} className="grid grid-cols-[2rem_1fr] border-b border-line py-3.5">
                  <span className="font-mono text-xs text-accent">0{n + 1}</span>
                  <span>
                    <span className="block text-[15px] font-semibold">{t}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="min-w-0">
          <div className="max-md:hidden">
            <ResearchMap />
            <p className="mt-3 font-mono text-[10px] text-muted">Scroll: scattered questions sort into prompt clusters.</p>
          </div>
          <div className="grid gap-3 rounded-3xl bg-[linear-gradient(160deg,#EEE9FF,#FFE7DE)] p-4 md:hidden">
            {clusters.map((c) => (
              <div key={c.name} className="rounded-2xl bg-white/70 p-3">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">{c.name}</p>
                <p className="mt-2 flex flex-wrap gap-1.5">
                  {c.prompts.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px]">
                      {t}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className={`mt-16 p-6 sm:p-8 ${card}`}>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight">Your visibility doesn’t stop at ChatGPT.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We look at how your brand appears across AI-powered answers and traditional search, because buyers don’t
              discover brands in just one place.
            </p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {platforms.map((p) => (
                <li key={p} className="rounded-[10px] border border-line px-2.5 py-1 text-xs font-medium">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {outcomes.map((o) => (
              <li key={o.name} className="rounded-2xl bg-paper p-4">
                <p className="text-sm font-semibold">{o.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{o.text}</p>
                <p className="mt-3 text-xs">{o.demo}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 border-t border-line pt-4 text-xs text-muted">Three different outcomes. We track and report them separately.</p>
      </Reveal>
    </section>
  );
}
