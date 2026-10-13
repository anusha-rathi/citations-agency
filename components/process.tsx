"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { CommunityPosts } from "./advantage";
import { Illustrative } from "./mocks";
import { wrap } from "@/lib/styles";
import { Head, Reveal, Swap } from "./ui";

/* ── Step visuals ───────────────────────────────────────────────────── */

const Lines = ({ w = ["80%", "55%"] }: { w?: string[] }) => (
  <span aria-hidden className="mt-2 block space-y-1.5">
    {w.map((x, i) => (
      <span key={i} className="block h-1.5 rounded-full bg-ink/10" style={{ width: x }} />
    ))}
  </span>
);

function ResearchBoard() {
  const note = "absolute w-[42%] rounded-xl border border-line bg-white p-3 text-xs font-semibold shadow-sm";
  return (
    <div className="relative h-80">
      <svg aria-hidden className="absolute inset-0 size-full text-ink/20" preserveAspectRatio="none">
        {[["21%", "18%"], ["79%", "18%"], ["21%", "82%"], ["79%", "82%"]].map(([x, y]) => (
          <line key={x + y} x1="50%" y1="50%" x2={x} y2={y} stroke="currentColor" strokeDasharray="4 5" />
        ))}
      </svg>
      <div className={`${note} left-0 top-0 -rotate-2`}>Audience & personas<Lines /></div>
      <div className={`${note} right-0 top-0 rotate-1`}>Competitor positioning<Lines w={["70%", "85%"]} /></div>
      <div className={`${note} bottom-0 left-0 rotate-1`}>Customer objections<Lines w={["90%", "40%"]} /></div>
      <div className={`${note} bottom-0 right-0 -rotate-1`}>Reputation & search presence<Lines w={["60%", "75%"]} /></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-bold shadow-lg">
        Your product
        <span className="block text-[10px] font-medium opacity-70">and its use cases</span>
      </div>
    </div>
  );
}

const map = [
  { topic: "Founders", subs: [["r/startups", "How did you pick your first tools without overbuying?"], ["r/Entrepreneur", "What’s worth paying for in year one?"]] },
  { topic: "Operators", subs: [["r/smallbusiness", "How do you keep track of customer requests?"], ["r/sales", "What does your team actually log, and where?"]] },
  { topic: "Category", subs: [["r/SaaS", "Alternatives to the obvious market leader?"], ["r/CustomerSuccess", "How do you close the loop on feedback?"]] },
];

function SubredditMap() {
  const [pick, setPick] = useState(map[0].subs[0]);
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        {map.map((c) => (
          <div key={c.topic} className="rounded-2xl border border-dashed border-ink/20 p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{c.topic}</p>
            <div className="mt-2 flex flex-wrap gap-1.5 sm:flex-col">
              {c.subs.map((s) => (
                <button
                  key={s[0]}
                  type="button"
                  aria-pressed={pick[0] === s[0]}
                  onClick={() => setPick(s)}
                  className={`rounded-full border px-3 py-1.5 text-left text-sm font-medium transition-colors ${
                    pick[0] === s[0] ? "border-accent bg-accent text-ink" : "border-line bg-white hover:border-ink"
                  }`}
                >
                  {s[0]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Swap k={pick[0]} className="mt-4 rounded-2xl bg-paper p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Recurring question in {pick[0]}</p>
        <p className="mt-1.5 font-display text-lg font-semibold leading-snug">“{pick[1]}”</p>
      </Swap>
      <Illustrative className="mt-4">Illustrative mapping. Select a community.</Illustrative>
    </div>
  );
}

const board = [
  ["Drafting", ["Post · r/SaaS", "Comment · r/sales"]],
  ["In review", ["Post · r/startups"]],
  ["Published", ["Comment · r/smallbusiness", "Post · r/Entrepreneur"]],
  ["Monitoring", ["Brand mention · reply drafted", "Thread · new replies"]],
] as const;

function ActivityBoard() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {board.map(([col, cards], i) => (
          <div key={col} className="rounded-2xl bg-paper p-2.5">
            <p className="flex items-center gap-1.5 px-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              {i === 3 && <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-accent" />}
              {col}
            </p>
            <ul className="mt-2 space-y-2">
              {cards.map((c) => (
                <li key={c} className="rounded-xl border border-line bg-white p-2.5 text-xs font-medium">
                  {c}
                  <Lines w={["85%"]} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Illustrative className="mt-4">Illustrative sample data</Illustrative>
    </div>
  );
}

const signals = [
  ["Conversations joined", [3, 5, 4, 6, 7, 6, 8]],
  ["Discussion quality", [4, 4, 5, 5, 6, 7, 7]],
  ["Brand mentions", [2, 3, 3, 5, 4, 6, 6]],
  ["Linked citations", [1, 1, 2, 2, 3, 3, 4]],
  ["Tracked search results", [3, 4, 4, 5, 6, 6, 7]],
] as const;

function Insights() {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {signals.map(([name, bars]) => (
          <div key={name} className="flex items-end justify-between gap-3 rounded-2xl border border-line p-3.5">
            <p className="text-sm font-semibold">{name}</p>
            <span aria-hidden className="flex h-9 items-end gap-1">
              {bars.map((b, i) => (
                <span key={i} className={`w-1.5 rounded-full ${i === bars.length - 1 ? "bg-accent" : "bg-ink/15"}`} style={{ height: `${b * 12}%` }} />
              ))}
            </span>
          </div>
        ))}
        <div className="rounded-2xl bg-ink p-3.5 text-paper">
          <p className="font-mono text-[10px] uppercase tracking-widest text-paper/60">Next period</p>
          <p className="mt-1.5 text-sm font-semibold">Recommendations based on what earned a response</p>
        </div>
      </div>
      <Illustrative className="mt-4">Sample report layout. Shapes are not real data.</Illustrative>
    </div>
  );
}

/* ── Steps ──────────────────────────────────────────────────────────── */

const steps: { short: string; label: string; title: string; text: string; listLabel: string; list: string[]; visual: ReactNode }[] = [
  {
    short: "Learn", label: "We learn your business", title: "First, we get obsessed with your product.",
    text: "We understand what you’re selling, who you’re selling to, why customers choose you, where they hesitate, and how competitors position themselves.",
    listLabel: "Key research",
    list: ["Product and use cases", "Audience and buyer personas", "Competitor positioning", "Customer objections", "Existing reputation and search presence"],
    visual: <ResearchBoard />,
  },
  {
    short: "Map", label: "We find where your buyers hang out", title: "Then, we find the conversations that matter.",
    text: "We map relevant subreddits, search queries, recurring questions, and community behavior to understand where your audience already spends time.",
    listLabel: "Key research",
    list: ["Subreddit scouting", "Community rules and fit", "Keyword and search research", "Competitor discussions", "High-intent buyer questions"],
    visual: <SubredditMap />,
  },
  {
    short: "Plan", label: "We build your Reddit playbook", title: "One brand. Different communities. Different approaches.",
    text: "We design the right narratives, content angles, formats, and participation strategies for each audience. No recycled campaigns.",
    listLabel: "Key work",
    list: ["Subreddit-specific content planning", "Message and topic development", "Appropriate contributor positioning", "Content calendars", "Review and approval workflows"],
    visual: <CommunityPosts />,
  },
  {
    short: "Execute", label: "We get to work", title: "Then the conversations begin.",
    text: "We publish relevant content, participate in discussions, manage campaign activity, and refine the approach around real audience responses.",
    listLabel: "Key work",
    list: ["Organic posts", "Relevant comments and discussion participation", "Brand-monitoring responses", "Reddit Ads where included", "Continuous content refinement"],
    visual: <ActivityBoard />,
  },
  {
    short: "Measure", label: "We learn what moves the needle", title: "We pay attention to what happens next.",
    text: "We measure the conversations, engagement, search visibility, audience signals, and brand mentions that matter. Then we use what we learn to make the next month smarter.",
    listLabel: "Key reporting",
    list: ["Published content and engagement", "Community response and discussion quality", "Brand mentions and sentiment signals", "Search-engine results page tracking", "AI search mention and citation monitoring", "Recommendations for the next period"],
    visual: <Insights />,
  },
];

export function Process() {
  const [i, setI] = useState(0);
  const s = steps[i];
  const arrow = "grid size-11 place-items-center rounded-full border border-ink/15 transition-colors enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-paper disabled:opacity-30";
  return (
    <section id="process" className={`${wrap} py-24 lg:py-32`}>
      <Head
        eyebrow="How we work"
        title={
          <>
            We don’t start with posts. <span className="text-accent">We start with your world.</span>
          </>
        }
      >
        Your product, your competitors, your customers, your category. We learn what matters before we enter the
        conversation.
      </Head>

      <Reveal className="mt-14">
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
                className={`pt-5 text-left transition-colors ${n === i ? "text-ink" : n < i ? "text-ink/60" : "text-muted hover:text-ink"}`}
              >
                <span className={`font-mono text-xs ${n === i ? "text-accent" : ""}`}>0{n + 1}</span>
                <span className="mt-1 block font-display text-sm font-bold tracking-tight sm:text-xl">{st.short}</span>
              </button>
            ))}
          </div>
        </div>

        <div id="process-panel" role="tabpanel" className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col">
            <Swap k={i}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Step 0{i + 1} — {s.label}
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{s.title}</h3>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">{s.text}</p>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-muted">{s.listLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.list.map((x) => (
                  <li key={x} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm">
                    {x}
                  </li>
                ))}
              </ul>
            </Swap>
            <div className="mt-10 flex items-center gap-3 lg:mt-auto lg:pt-10">
              <button type="button" aria-label="Previous step" disabled={i === 0} onClick={() => setI(i - 1)} className={arrow}>
                <ArrowLeft aria-hidden className="size-4" />
              </button>
              <button type="button" aria-label="Next step" disabled={i === steps.length - 1} onClick={() => setI(i + 1)} className={arrow}>
                <ArrowRight aria-hidden className="size-4" />
              </button>
              <span className="font-mono text-xs text-muted">
                {i + 1} / {steps.length}
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-5 sm:p-7 lg:min-h-[28rem]">
            <Swap k={i}>{s.visual}</Swap>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
