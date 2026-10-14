"use client";

import { ArrowDown, Check } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { wrap } from "@/lib/styles";
import { Head, Reveal, Swap, ease } from "./ui";

/* ── Step visuals (dark panel) ──────────────────────────────────────── */

const chip = "rounded-[10px] border border-paper/15 bg-paper/[0.06] px-2.5 py-1.5 text-xs";
const label = "font-mono text-[10px] uppercase tracking-wider text-paper/45";

const boardItems = ["Your product", "Your buyers", "Competitors", "Customer objections", "Category", "Business goals"];
const boardScatter = [[8, 6, -8], [58, 2, 6], [30, 40, 4], [62, 56, -5], [4, 62, 7], [40, 74, -3]];

function Board() {
  return (
    <div className="relative h-full min-h-72">
      {boardItems.map((t, n) => (
        <motion.div
          key={t}
          initial={{ left: `${boardScatter[n][0]}%`, top: `${boardScatter[n][1]}%`, rotate: boardScatter[n][2], opacity: 0 }}
          animate={{ left: `${(n % 3) * 34}%`, top: `${Math.floor(n / 3) * 52}%`, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 + n * 0.06, ease }}
          className="absolute h-[46%] w-[32%] rounded-xl border border-paper/12 bg-paper/[0.06] p-3"
        >
          <p className="text-xs font-semibold leading-tight">{t}</p>
          <span aria-hidden className="mt-3 block space-y-1.5">
            <span className="block h-1.5 w-4/5 rounded-full bg-paper/15" />
            <span className="block h-1.5 w-3/5 rounded-full bg-paper/10" />
          </span>
          {n === 0 && <span aria-hidden className="absolute right-3 top-3 size-1.5 rounded-full bg-accent" />}
        </motion.div>
      ))}
    </div>
  );
}

const promptGroups = [
  ["Recommendation", ["best tool for…", "what should we use…"]],
  ["Comparison", ["X vs Y", "alternatives to…"]],
  ["Problem / solution", ["how do I…", "integrates with…"]],
  ["Competitor", ["is [competitor] worth it", "[competitor] reviews"]],
] as const;

function Prompts() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex flex-wrap gap-1.5 opacity-50">
        {boardItems.map((t) => (
          <span key={t} className="rounded-md bg-paper/10 px-2 py-0.5 text-[10px]">{t}</span>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2.5">
        {promptGroups.map(([g, ps], n) => (
          <motion.div
            key={g}
            initial={{ borderColor: "rgba(248,247,244,0.1)" }}
            animate={{ borderColor: n === 0 || n === 1 ? "rgba(255,86,55,0.7)" : "rgba(248,247,244,0.15)" }}
            transition={{ delay: 0.5 + n * 0.25, duration: 0.5 }}
            className="rounded-xl border bg-paper/[0.04] p-3"
          >
            <p className={label}>{g} prompts</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {ps.map((p, k) => (
                <motion.span key={p} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + n * 0.15 + k * 0.1 }} className="rounded-full bg-paper/10 px-2 py-0.5 text-[11px]">
                  {p}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="rounded-xl border border-paper/10 p-3 text-[11px]">
        <p className={label}>tracking · sample</p>
        {[["Comparison", "Competitor cited", "Opportunity"], ["Recommendation", "Not mentioned", "Gap"], ["Problem / solution", "Thread cited", "Opportunity"]].map((r) => (
          <p key={r[0]} className="mt-1.5 grid grid-cols-3 gap-2 text-paper/75">
            {r.map((c, k) => (
              <span key={c} className={k === 2 ? "text-accent" : ""}>{c}</span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}

const channels = [
  ["Website content", 12, 14],
  ["Expert articles", 88, 14],
  ["Other communities", 12, 86],
  ["SEO & link building", 88, 86],
] as const;

function Channels() {
  return (
    <div className="relative h-full min-h-72">
      <svg aria-hidden className="absolute inset-0 size-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {channels.map(([t, x, y], n) => (
          <motion.line key={t} x1="50" y1="50" x2={x} y2={y} stroke="rgba(248,247,244,0.25)" strokeWidth="0.4" strokeDasharray="1.5 1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 + n * 0.15, duration: 0.6 }} />
        ))}
      </svg>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease }} className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-accent p-4 text-ink shadow-[0_0_60px_rgba(255,86,55,0.35)]">
        <p className="font-mono text-[10px] uppercase tracking-wider opacity-70">primary channel</p>
        <p className="mt-1 font-display text-xl font-bold">Reddit</p>
        <p className="mt-1 text-[11px] leading-snug opacity-80">Comparison & recommendation prompts</p>
      </motion.div>
      {channels.map(([t, x, y], n) => (
        <motion.span key={t} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + n * 0.15 }} style={{ left: `${x}%`, top: `${y}%` }} className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap ${chip}`}>
          {t}
        </motion.span>
      ))}
    </div>
  );
}

const infra = ["Account readiness", "Community rules", "Account health", "Operational workflows"];
const content = ["Prompt", "Audience", "Subreddit", "Headline", "Content adaptation"];

function Converge() {
  return (
    <div className="flex h-full flex-col">
      <div className="grid grid-cols-2 gap-3">
        {[["Infrastructure", infra, -1], ["Content", content, 1]].map(([name, items, dir]) => (
          <div key={name as string}>
            <p className={label}>{name as string}</p>
            <ul className="mt-2 space-y-1.5">
              {(items as string[]).map((t, n) => (
                <motion.li key={t} initial={{ opacity: 0, x: (dir as number) * 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + n * 0.08, duration: 0.5, ease }} className={`flex items-center gap-2 ${chip}`}>
                  <Check aria-hidden className="size-3 text-accent" strokeWidth={3} />
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="flex justify-center py-2 text-accent">
        <ArrowDown aria-hidden className="size-4" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5, ease }} className="rounded-xl bg-paper p-4 text-ink">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted">publication-ready plan</p>
        <p className="mt-1.5 text-sm font-semibold">r/SaaS · comparison thread · disclosed contributor</p>
        <p className="mt-1 text-xs text-muted">Rules checked · tone adapted · approved</p>
      </motion.div>
    </div>
  );
}

const spark = ["M0 30 L15 26 L30 28 L45 18 L60 20 L75 10 L90 12", "M0 28 L15 28 L30 22 L45 24 L60 16 L75 14 L90 8", "M0 32 L15 30 L30 30 L45 24 L60 22 L75 16 L90 14", "M0 24 L15 22 L30 24 L45 18 L60 18 L75 12 L90 10"];

function Measure() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-2 gap-2.5">
        {["Prompt tracking", "AI brand mentions", "Linked citations", "SERP visibility"].map((t, n) => (
          <div key={t} className="rounded-xl border border-paper/10 bg-paper/[0.04] p-3">
            <p className="text-xs font-semibold">{t}</p>
            <svg aria-hidden viewBox="0 0 90 36" className="mt-2 h-9 w-full">
              <motion.path d={spark[n]} fill="none" stroke={n === 2 ? "#FF5637" : "#7C6CF5"} strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 + n * 0.12, duration: 0.9 }} />
            </svg>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-paper/10 p-3 text-[11px]">
        <p className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-2 text-paper/45">
          <span>prompt</span><span>mention</span><span>citation</span><span>serp</span>
        </p>
        {["best tool for…", "X vs Y", "alternatives to…"].map((p, n) => (
          <p key={p} className="mt-1.5 grid grid-cols-[1.6fr_repeat(3,1fr)] gap-2 text-paper/80">
            <span>{p}</span>
            <span>{n !== 1 ? "✓" : "–"}</span>
            <span className={n === 0 ? "text-accent" : ""}>{n === 0 ? "✓" : "–"}</span>
            <span>{n !== 2 ? "✓" : "–"}</span>
          </p>
        ))}
      </div>
      <p className="font-mono text-[10px] text-paper/40">Illustrative layout, not client data</p>
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
    label: "We find the prompts",
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
  return (
    <section id="system" className="px-2 sm:px-3">
      <div className="rounded-[24px] bg-ink text-paper">
        <div className={`${wrap} pt-16 lg:pt-24`}>
          <Head dark eyebrow="our system" title="Watch a strategy take shape.">
            Five steps from understanding your business to measuring what changed.
          </Head>
        </div>

        {/* Desktop: pinned panel driven by scroll position */}
        <div ref={ref} className="relative hidden lg:block" style={{ height: `calc(100vh + ${steps.length * 60}vh)` }}>
          <div className="sticky top-0 flex h-screen items-center">
            <div className={`${wrap} grid grid-cols-[1fr_1.1fr] items-center gap-12`}>
              <div>
                <div className="relative mb-8 h-px bg-paper/15">
                  <motion.span style={{ scaleX: scrollYProgress }} className="absolute inset-0 origin-left bg-accent" />
                </div>
                <ol className="mb-8 flex gap-1">
                  {steps.map((st, i) => (
                    <li key={st.label}>
                      <button
                        type="button"
                        aria-current={i === step ? "step" : undefined}
                        aria-label={`Step ${i + 1}: ${st.label}`}
                        onClick={() => go(i)}
                        className={`min-h-9 rounded-[8px] px-2.5 font-mono text-xs transition-colors ${i === step ? "bg-accent text-ink" : "text-paper/50 hover:text-paper"}`}
                      >
                        {n2(i)}
                      </button>
                    </li>
                  ))}
                </ol>
                <Swap k={step}>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {n2(step)} — {s.label}
                  </p>
                  <h3 className="mt-3 font-display text-[1.9rem] font-bold leading-[1.1] tracking-tight">{s.title}</h3>
                  <div className="mt-4 max-w-lg leading-relaxed text-paper/65">{s.body}</div>
                </Swap>
              </div>
              <div className="h-[28rem] rounded-3xl border border-paper/10 bg-[radial-gradient(80%_70%_at_80%_10%,rgba(124,108,245,0.14),transparent),radial-gradient(70%_60%_at_10%_100%,rgba(255,86,55,0.1),transparent)] p-6">
                <Swap k={step} className="h-full">{s.visual}</Swap>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and tablet: plain vertical sequence */}
        <ol className={`${wrap} space-y-14 pb-16 pt-10 lg:hidden`}>
          {steps.map((st, i) => (
            <li key={st.label}>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {n2(i)} — {st.label}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight">{st.title}</h3>
                <div className="mt-3 leading-relaxed text-paper/65">{st.body}</div>
                <div className="mt-6 h-80 rounded-2xl border border-paper/10 bg-paper/[0.03] p-4">{st.visual}</div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="hidden h-16 lg:block" />
      </div>
    </section>
  );
}
