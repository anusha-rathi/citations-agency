"use client";

import { ArrowBigDown, ArrowBigUp, ChevronDown, Globe, Search, Sparkle } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { scenarios, type Scenario } from "@/lib/scenarios";
import { Illustrative } from "./mocks";
import { wrap } from "@/lib/styles";
import { Head, Reveal, Swap, Tabs } from "./ui";

/* ── Card shell ─────────────────────────────────────────────────────── */

function Card({ label, title, text, query, children }: { label: string; title: string; text: string; query?: string; children: ReactNode }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-5 sm:p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
      <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
      {query && (
        <p className="mt-4 flex items-center gap-1.5 truncate rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium">
          <Search aria-hidden className="size-3 shrink-0 text-accent" />
          <span className="truncate">{query}</span>
        </p>
      )}
      <div className="mt-4 flex-1">{children}</div>
    </article>
  );
}

/* ── 01 Discovery ───────────────────────────────────────────────────── */

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

function Discovery({ active, onPick }: { active: number; onPick: (i: number) => void }) {
  const s = scenarios[active];
  return (
    <Card label="01 / Discovery" title="It starts with a question." text="Real buyers ask Reddit before they decide.">
      <div className="flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-3 text-sm shadow-sm">
        <Search aria-hidden className="size-4 shrink-0 text-accent" />
        <Typed key={active} text={s.query} />
      </div>
      <ul className="mt-3 space-y-1">
        {scenarios.map((sc, i) => (
          <li key={sc.query}>
            <button
              type="button"
              aria-pressed={i === active}
              onClick={() => onPick(i)}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-colors duration-200 ${
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
        <p className="mt-0.5 font-semibold leading-snug text-violet">{s.thread.question}</p>
        <p className="mt-1.5 text-sm text-muted">
          {s.thread.comments.length} top-level comments · experiences, objections, and practical tips
        </p>
      </Swap>
    </Card>
  );
}

/* ── 02 Trust ───────────────────────────────────────────────────────── */

const tagTone = { Experience: "bg-paper", Objection: "bg-accent/15", "Practical tip": "bg-lav" };

// Remounted per scenario, so votes and expanded replies reset with the thread.
function Thread({ s }: { s: Scenario }) {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const [votes, setVotes] = useState<Record<number, number>>({});
  const vote = (i: number, v: number) => setVotes((p) => ({ ...p, [i]: p[i] === v ? 0 : v }));

  return (
    <div className="rounded-2xl border border-line bg-paper/60 p-3.5 text-sm">
      <p className="flex items-center gap-2 text-xs text-muted">
        <span aria-hidden className="grid size-5 place-items-center rounded-full bg-accent font-display text-[9px] font-bold text-ink">r/</span>
        <span className="font-semibold text-ink">r/{s.sub}</span>· u/{s.thread.user}
      </p>
      <p className="mt-2 font-display font-semibold leading-snug">{s.thread.question}</p>

      <ul className="mt-3 space-y-2">
        {s.thread.comments.map((c, i) => (
          <li key={c.user} className="rounded-xl bg-white p-3 shadow-sm">
            <div className="flex gap-2.5">
              <div className="flex flex-col items-center">
                <button type="button" aria-label="Upvote" aria-pressed={votes[i] === 1} onClick={() => vote(i, 1)} className="rounded transition-transform hover:scale-110">
                  <ArrowBigUp className={`size-5 ${votes[i] === 1 ? "fill-accent text-accent" : "text-muted"}`} />
                </button>
                <button type="button" aria-label="Downvote" aria-pressed={votes[i] === -1} onClick={() => vote(i, -1)} className="rounded transition-transform hover:scale-110">
                  <ArrowBigDown className={`size-5 ${votes[i] === -1 ? "fill-violet text-violet" : "text-muted"}`} />
                </button>
              </div>
              <div className="min-w-0 flex-1">
                <p className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="font-semibold">u/{c.user}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagTone[c.tag]}`}>{c.tag}</span>
                </p>
                <p className="mt-1 leading-relaxed">{c.text}</p>
                {c.replies.length > 0 && (
                  <button
                    type="button"
                    aria-expanded={!!open[i]}
                    onClick={() => setOpen((p) => ({ ...p, [i]: !p[i] }))}
                    className="mt-2 flex items-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-ink"
                  >
                    <ChevronDown aria-hidden className={`size-3.5 transition-transform duration-200 ${open[i] ? "rotate-180" : ""}`} />
                    {c.replies.length} {c.replies.length === 1 ? "reply" : "replies"}
                  </button>
                )}
                {open[i] && (
                  <ul className="mt-2 space-y-2 border-l-2 border-line pl-3">
                    {c.replies.map((r, j) => (
                      <li key={j}>
                        <p className="flex flex-wrap items-center gap-1.5 text-xs">
                          <span className="font-semibold">u/{r.user}</span>
                          {r.badge && <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-medium text-paper">{r.badge}</span>}
                        </p>
                        <p className="mt-0.5 leading-relaxed text-ink/80">{r.text}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── 03 AI citations ────────────────────────────────────────────────── */

type Source = { domain: string; title: string };

function SourceCard({ n, s }: { n: number; s: Source }) {
  return (
    <span className="flex items-start gap-2 text-left">
      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-ink/10 text-[9px] font-bold">{n}</span>
      <span className="min-w-0">
        <span className="block text-[11px] text-muted">{s.domain}</span>
        <span className="block text-xs font-medium leading-snug">{s.title}</span>
      </span>
    </span>
  );
}

function ChatGPTView({ s, sources }: { s: Scenario; sources: Source[] }) {
  const [list, setList] = useState(false);
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-[#0d0d0d]">
      <p className="ml-auto w-fit max-w-[88%] rounded-3xl bg-[#f4f4f4] px-4 py-2">{s.ai.question}</p>
      <p className="mt-4 leading-relaxed">{s.ai.intro}</p>
      <ul className="mt-3 list-disc space-y-2.5 pl-5 leading-relaxed">
        {s.ai.points.map((p, i) => {
          const n = i === 1 ? 1 : 0;
          return (
            <li key={p.label} className="relative">
              <strong className="font-semibold">{p.label}:</strong> {p.text}{" "}
              {/* Hover or focus the chip to preview the source */}
              <button type="button" className="peer rounded-full bg-[#f4f4f4] px-2 py-0.5 text-[11px] font-medium text-[#5d5d5d] transition-colors hover:bg-[#0d0d0d] hover:text-white focus:bg-[#0d0d0d] focus:text-white">
                {n === 0 ? "Reddit" : "Web"}
              </button>
              <span className="absolute inset-x-0 top-full z-10 mt-1 hidden rounded-xl border border-black/10 bg-white p-3 shadow-lg peer-hover:block peer-focus:block">
                <SourceCard n={n + 1} s={sources[n]} />
              </span>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        aria-expanded={list}
        onClick={() => setList(!list)}
        className="mt-4 flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-[#f4f4f4]"
      >
        <span aria-hidden className="flex -space-x-1">
          <span className="size-3.5 rounded-full border border-white bg-accent" />
          <span className="size-3.5 rounded-full border border-white bg-[#0d0d0d]" />
        </span>
        Sources
      </button>
      {list && (
        <ul className="mt-2 space-y-2 rounded-xl bg-[#f9f9f9] p-3">
          {sources.map((src, i) => (
            <li key={src.title}>
              <SourceCard n={i + 1} s={src} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ClaudeView({ s, sources }: { s: Scenario; sources: Source[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const chip = (n: number) => (
    <button
      type="button"
      aria-expanded={open === n}
      onClick={() => setOpen(open === n ? null : n)}
      className={`mx-0.5 inline-flex items-center rounded-md border px-1.5 py-px align-baseline font-sans text-[11px] transition-colors ${
        open === n ? "border-[#c96442] bg-[#c96442] text-white" : "border-[#d9d5c5] bg-white/70 text-[#5e5d59] hover:border-[#c96442]"
      }`}
    >
      {n === 0 ? "reddit" : "web"}
    </button>
  );
  return (
    <div className="rounded-2xl border border-[#e3dfd0] bg-[#f5f4ed] p-4 text-[#1f1e1d]">
      <p className="ml-auto w-fit max-w-[88%] rounded-xl bg-[#e8e5d8] px-3.5 py-2 text-sm">{s.ai.question}</p>
      <p className="mt-4 flex items-center gap-2 text-xs text-[#5e5d59]">
        <Globe aria-hidden className="size-3.5" />
        Searched the web · {sources.length} results
      </p>
      <div className="mt-3 space-y-3 font-serif text-[15px] leading-relaxed">
        <p>
          {s.ai.prose[0]}
          {chip(0)}
        </p>
        <p>
          {s.ai.prose[1]}
          {chip(0)}
          {chip(1)}
        </p>
      </div>
      {open !== null && (
        <div className="mt-3 rounded-xl border border-[#d9d5c5] bg-white p-3">
          <SourceCard n={open + 1} s={sources[open]} />
        </div>
      )}
      <Sparkle aria-hidden className="mt-4 size-5 fill-[#c96442] text-[#c96442]" />
    </div>
  );
}

const models = ["ChatGPT", "Claude"] as const;

function Citations({ s, k }: { s: Scenario; k: number }) {
  const [model, setModel] = useState<(typeof models)[number]>("ChatGPT");
  const sources: Source[] = [
    { domain: `reddit.com › r/${s.sub}`, title: s.thread.question },
    { domain: "example.com", title: s.ai.guide },
  ];
  return (
    <Card
      label="03 / AI citations"
      title="The conversation doesn’t always end on Reddit."
      text="Relevant public conversations can also appear as sources in AI-powered answers."
      query={s.query}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Tabs label="AI assistant" items={models} value={model} onChange={setModel} />
        <span className="rounded-full bg-lav px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider">Illustrative example</span>
      </div>
      <Swap k={`${model}-${k}`} className="mt-3">
        {model === "ChatGPT" ? <ChatGPTView s={s} sources={sources} /> : <ClaudeView s={s} sources={sources} />}
      </Swap>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        {model === "ChatGPT" ? "Hover or tap a source chip to preview it." : "Tap a source chip to expand it."} Styled after each
        assistant’s interface; not real model output.
      </p>
    </Card>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */

export function Why() {
  const [active, setActive] = useState(0);
  const s = scenarios[active];
  return (
    <section id="why" className={`${wrap} py-24 lg:py-32`}>
      <Head eyebrow="Why Reddit" title="Your buyers are already having the conversation.">
        They’re searching, comparing, questioning, and asking for recommendations. What they find can shape how they see
        your brand.
      </Head>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <Reveal>
          <Discovery active={active} onPick={setActive} />
        </Reveal>
        <Reveal delay={0.08}>
          <Card
            label="02 / Trust"
            title="People trust people. Not another ad."
            text="An honest answer in the right community can do more than a hundred polished marketing claims."
            query={s.query}
          >
            <Swap k={active}>
              <Thread key={active} s={s} />
            </Swap>
          </Card>
        </Reveal>
        <Reveal delay={0.16}>
          <Citations s={s} k={active} />
        </Reveal>
      </div>
      <Illustrative className="mt-6">
        Illustrative examples. Fictional users and discussions, not real reviews, engagement, or AI output.
      </Illustrative>
    </section>
  );
}
