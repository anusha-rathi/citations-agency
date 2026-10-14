"use client";

import { ArrowDown, Check } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { wrap } from "@/lib/styles";
import { Reveal, ease } from "./ui";

/* ── Step visuals: cream "working documents" on the dark section ──── */

const doc = "flex h-full flex-col rounded-2xl bg-[#F6F1E9] p-5 text-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] sm:p-6";
const docLabel = "font-mono text-[10px] uppercase tracking-wider text-ink/45";

function Item({ n, children, className = "" }: { n: number; children: ReactNode; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + n * 0.07, duration: 0.4, ease }} className={className}>
      {children}
    </motion.div>
  );
}

const DocHead = ({ title, meta }: { title: string; meta: string }) => (
  <div className="flex items-baseline justify-between border-b border-ink/10 pb-3">
    <p className="font-display text-base font-bold tracking-tight">{title}</p>
    <p className={docLabel}>{meta}</p>
  </div>
);

const notes = [
  ["Product", "What it does, who it’s for, and why customers choose it."],
  ["Audience", "Buyer roles, team size, and what triggers a purchase."],
  ["Competitors", "Who buyers compare you with, and where they win."],
  ["Buyer questions", "“Is it worth it for a team our size?”"],
];

function Board() {
  return (
    <div className={doc}>
      <DocHead title="Research board" meta="your business" />
      <div className="mt-4 grid flex-1 grid-cols-2 gap-3">
        {notes.map(([k, v], n) => (
          <Item key={k} n={n} className="rounded-xl border border-ink/10 bg-white/70 p-3.5">
            <p className={docLabel}>{k}</p>
            <p className="mt-2 text-sm leading-snug">{v}</p>
          </Item>
        ))}
      </div>
      <Item n={4} className="mt-3 rounded-xl bg-peach/70 px-3.5 py-2.5 text-sm">
        <span className="font-semibold">Goal:</span> be part of the answer when buyers compare options.
      </Item>
    </div>
  );
}

const keywordRows = [
  ["crm startup", "What CRM should an early-stage startup use?", "Discovery"],
  ["crm alternatives", "What are cheaper alternatives to [CRM]?", "Comparison"],
  ["crm setup", "How do I set up a CRM without a sales ops person?", "Problem-solving"],
  ["best crm", "Which CRM would you recommend for a six-person team?", "Recommendation"],
];

function Prompts() {
  return (
    <div className={doc}>
      <DocHead title="From keywords to prompts" meta="prompt map" />
      <div className="mt-3 grid grid-cols-[6.5rem_1fr] gap-x-4 border-b border-ink/10 pb-2">
        <p className={docLabel}>keyword</p>
        <p className={docLabel}>buyer prompt</p>
      </div>
      <ul className="flex-1 divide-y divide-ink/10">
        {keywordRows.map(([k, p, c], n) => (
          <Item key={k} n={n} className="grid grid-cols-[6.5rem_1fr] items-start gap-x-4 py-3">
            <span className="font-mono text-xs text-ink/55">{k}</span>
            <span>
              <span className="block text-sm font-medium leading-snug">{p}</span>
              <span className="mt-1.5 inline-block rounded-md bg-white px-1.5 py-0.5 text-[11px] text-ink/70 ring-1 ring-ink/10">{c}</span>
            </span>
          </Item>
        ))}
      </ul>
    </div>
  );
}

const plan = [
  ["CRM comparison for small teams", "Reddit · r/SaaS", true],
  ["Setup questions from founders", "Reddit · r/startups", true],
  ["Pricing explainer", "Website page", false],
  ["Category guide", "Expert article", false],
  ["Integration tips", "Niche community", false],
] as const;

function Channels() {
  return (
    <div className={doc}>
      <DocHead title="Content plan" meta="where it lives" />
      <ul className="mt-3 flex-1 space-y-2">
        {plan.map(([topic, channel, reddit], n) => (
          <Item key={topic} n={n} className={`flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-sm ${reddit ? "bg-white shadow-[0_6px_18px_rgba(20,20,20,0.06)] ring-1 ring-accent/30" : "text-ink/65"}`}>
            <span className={reddit ? "font-semibold" : ""}>{topic}</span>
            <span className={`shrink-0 rounded-md px-2 py-0.5 text-xs ${reddit ? "bg-accent text-ink" : "bg-ink/5"}`}>{channel}</span>
          </Item>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink/55">Reddit first. Other channels where the research points.</p>
    </div>
  );
}

function Converge() {
  return (
    <div className={doc}>
      <DocHead title="Ready to publish" meta="infrastructure + content" />
      <div className="mt-4 grid flex-1 grid-cols-2 gap-3">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }} className="rounded-xl border border-ink/10 bg-white/70 p-3.5">
          <p className={docLabel}>infrastructure</p>
          <ul className="mt-2.5 space-y-2 text-sm">
            {["Account readiness", "Community fit", "Workflow & approvals", "Platform rules"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check aria-hidden className="size-3.5 text-accent" strokeWidth={3} />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }} className="rounded-xl border border-ink/10 bg-white/70 p-3.5">
          <p className={docLabel}>content · one message</p>
          <div className="mt-2.5 space-y-2.5 text-sm leading-snug">
            <p><span className="block text-[11px] text-ink/50">r/startups</span>What we learned choosing a CRM at six people</p>
            <p><span className="block text-[11px] text-ink/50">r/smallbusiness</span>A simple way to track customers without new software</p>
          </div>
        </motion.div>
      </div>
      <Item n={4} className="mt-3 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm text-paper">
        <span className="font-semibold">Disclosed · rules checked · approved</span>
        <ArrowDown aria-hidden className="size-4 -rotate-90 text-accent" />
      </Item>
    </div>
  );
}

const report = [
  ["Prompt tracking", "Weekly", [3, 4, 4, 5, 5, 6, 7]],
  ["AI citations", "Linked sources", [1, 2, 2, 3, 4, 4, 5]],
  ["Brand mentions", "Named in answers", [2, 3, 3, 4, 4, 5, 6]],
  ["Search visibility", "Keywords & SERP", [4, 4, 5, 5, 6, 6, 7]],
  ["Engagement", "Posts & comments", [3, 5, 4, 6, 5, 6, 7]],
] as const;

function Measure() {
  return (
    <div className={doc}>
      <DocHead title="Monthly report" meta="what we follow" />
      <ul className="mt-2 flex-1 divide-y divide-ink/10">
        {report.map(([k, v, bars], n) => (
          <Item key={k} n={n} className="flex items-center justify-between gap-4 py-3">
            <span>
              <span className="block text-sm font-semibold">{k}</span>
              <span className="block text-xs text-ink/55">{v}</span>
            </span>
            <span aria-hidden className="flex h-7 items-end gap-[3px]">
              {bars.map((b, j) => (
                <motion.span
                  key={j}
                  initial={{ height: 0 }}
                  animate={{ height: `${b * 14}%` }}
                  transition={{ delay: 0.3 + n * 0.06 + j * 0.03, duration: 0.4 }}
                  className={`w-1.5 rounded-sm ${j === bars.length - 1 ? "bg-accent" : "bg-ink/20"}`}
                />
              ))}
            </span>
          </Item>
        ))}
      </ul>
    </div>
  );
}

/* ── Steps ──────────────────────────────────────────────────────────── */

const steps: { label: string; title: string; body: ReactNode; visual: ReactNode }[] = [
  {
    label: "We learn everything",
    title: "Before we find your audience, we understand your world.",
    body: <p>What you build, who buys it, what they need, where competitors win, and where your brand falls short. Including the questions your team hasn’t thought to ask yet.</p>,
    visual: <Board />,
  },
  {
    label: "We go beyond keywords. Into prompts.",
    title: "Then we find the questions that shape your category.",
    body: <p>Prompt-backed, semantic and language research uncovers recommendation, comparison, problem and competitor prompts, and the sources behind the answers. We see where you appear, where competitors do, and where the gaps are.</p>,
    visual: <Prompts />,
  },
  {
    label: "We decide where content belongs",
    title: "The right content needs the right place to live.",
    body: <p>Reddit is our primary channel for public, topic-specific discussion. But we don’t force everything there: website content, expert articles, other communities and SEO support each have a place when the research points to them.</p>,
    visual: <Channels />,
  },
  {
    label: "We execute",
    title: "Good ideas need the infrastructure to deliver them.",
    body: (
      <>
        <p><strong className="text-paper">Infrastructure:</strong> established, maintained accounts, community-specific workflows and account-health monitoring, used transparently and within each community’s rules.</p>
        <p className="mt-3"><strong className="text-paper">Content:</strong> one message can’t be pasted into five subreddits. We adapt the headline, hook, tone, detail and perspective so it belongs. We’ve written for established companies and YC-backed startups.</p>
        <p className="mt-4 font-display font-bold text-paper">The infrastructure to show up. <span className="text-accent">The expertise to belong.</span></p>
      </>
    ),
    visual: <Converge />,
  },
  {
    label: "We measure",
    title: "We don’t just publish. We follow the evidence.",
    body: <p>Posts, comments, discussion quality, keywords, SERP visibility, prompts, AI mentions, linked citations and competitor appearances, measured against your baseline and reported in a format you’ll actually use.</p>,
    visual: <Measure />,
  },
];

const n2 = (n: number) => `0${n + 1}`;

export function System() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setStep(Math.min(steps.length - 1, Math.floor(v * steps.length))));

  // Scrolls to the middle of a step's scroll range; never locks the page.
  const go = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((el.offsetHeight - window.innerHeight) * (i + 0.5)) / steps.length, behavior: "smooth" });
  };

  const s = steps[step];
  const heading = "font-display text-[clamp(1.75rem,3vw,2.4rem)] font-bold leading-[1.08] tracking-[-0.03em]";
  return (
    <section id="system" className="px-2 sm:px-3">
      <div className="rounded-[24px] bg-[#1C1A17] text-paper">
        {/* Desktop: pinned panel driven by scroll position */}
        <div ref={ref} className="relative hidden lg:block" style={{ height: `calc(100vh + ${steps.length * 60}vh)` }}>
          <div className="sticky top-0 flex h-screen items-center pt-14">
            <div className={`${wrap} grid grid-cols-[1fr_1.1fr] items-center gap-14`}>
              <div>
                <p className="font-mono text-xs tracking-wider text-paper/50">our system</p>
                <h2 className={`mt-2 ${heading}`}>Watch the strategy take shape.</h2>
                <div className="relative mb-5 mt-6 h-px bg-paper/15">
                  <motion.span style={{ scaleX: scrollYProgress }} className="absolute inset-0 origin-left bg-accent" />
                </div>
                <ol className="mb-7 flex gap-1">
                  {steps.map((st, i) => (
                    <li key={st.label}>
                      <button
                        type="button"
                        aria-current={i === step ? "step" : undefined}
                        aria-label={`Step ${i + 1}: ${st.label}`}
                        onClick={() => go(i)}
                        className={`min-h-9 rounded-[8px] px-2.5 font-mono text-xs transition-colors ${i === step ? "bg-paper text-ink" : "text-paper/45 hover:text-paper"}`}
                      >
                        {n2(i)}
                      </button>
                    </li>
                  ))}
                </ol>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={step} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }} transition={{ duration: 0.3, ease }}>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">
                      {n2(step)} — {s.label}
                    </p>
                    <h3 className="mt-3 font-display text-[1.65rem] font-bold leading-[1.15] tracking-tight">{s.title}</h3>
                    <div className="mt-4 max-w-lg text-[15px] leading-relaxed text-paper/65">{s.body}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="h-[29rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={step} className="h-full" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.35, ease }}>
                    {s.visual}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and tablet: plain vertical sequence */}
        <div className={`${wrap} py-14 lg:hidden`}>
          <p className="font-mono text-xs tracking-wider text-paper/50">our system</p>
          <h2 className={`mt-2 ${heading}`}>Watch the strategy take shape.</h2>
          <ol className="mt-10 space-y-12">
            {steps.map((st, i) => (
              <li key={st.label}>
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {n2(i)} — {st.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight">{st.title}</h3>
                  <div className="mt-3 leading-relaxed text-paper/65">{st.body}</div>
                  <div className="mt-6">{st.visual}</div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
