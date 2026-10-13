"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Illustrative } from "./mocks";
import { wrap } from "@/lib/styles";
import { Head, Reveal, Swap, Tabs } from "./ui";

/* ── One message, three communities ─────────────────────────────────── */

const communities = ["r/startups", "r/SaaS", "r/smallbusiness"] as const;

// The same underlying message (a simpler way to organize customer feedback), adapted per community.
const posts: Record<(typeof communities)[number], { headline: string; hook: string; tone: string; detail: string; call: string }> = {
  "r/startups": {
    headline: "We built feedback tooling nobody asked for. Here’s what we’d do differently.",
    hook: "For a long time we collected every customer request in one giant board. It felt productive. It wasn’t.",
    tone: "Candid founder story",
    detail: "Narrative, lessons learned",
    call: "What did you build too early?",
  },
  "r/SaaS": {
    headline: "How we triage customer feedback: a few tags, one intake channel, a weekly review",
    hook: "Skipping the story. Here’s the exact structure, why each tag exists, and what we stopped tracking.",
    tone: "Tactical, peer to peer",
    detail: "Step by step, specific",
    call: "How are you triaging right now?",
  },
  "r/smallbusiness": {
    headline: "A simple way to keep track of customer requests without buying software",
    hook: "If requests are scattered across texts, emails, and sticky notes, this is quick to set up.",
    tone: "Plain and practical",
    detail: "Short steps, no jargon",
    call: "What’s your system for this?",
  },
};

export function CommunityPosts() {
  const [sub, setSub] = useState<(typeof communities)[number]>(communities[0]);
  const p = posts[sub];
  const row = "grid gap-1 border-t border-line py-3 sm:grid-cols-[7.5rem_1fr] sm:gap-4";
  const label = "font-mono text-[10px] uppercase tracking-widest text-muted sm:pt-1";
  return (
    <div>
      <Tabs label="Community" items={communities} value={sub} onChange={setSub} />
      <Swap k={sub} className="mt-4 rounded-2xl border border-line bg-white p-4 text-ink shadow-[0_24px_48px_-28px_rgba(23,23,23,0.35)] sm:p-5">
        <p className="flex flex-wrap items-center gap-2 pb-3 text-xs text-muted">
          <span aria-hidden className="grid size-5 place-items-center rounded-full bg-accent font-display text-[9px] font-bold text-ink">r/</span>
          <span className="font-semibold text-ink">{sub}</span>
          <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-medium text-paper">Disclosure: founder at Tallybird</span>
        </p>
        <div className={row}>
          <span className={label}>Headline</span>
          <span className="font-display text-lg font-bold leading-snug">{p.headline}</span>
        </div>
        <div className={row}>
          <span className={label}>Opening hook</span>
          <span className="text-sm leading-relaxed">{p.hook}</span>
        </div>
        <div className={row}>
          <span className={label}>Tone</span>
          <span className="w-fit rounded-full bg-accent/15 px-2.5 py-0.5 text-sm font-medium">{p.tone}</span>
        </div>
        <div className={row}>
          <span className={label}>Detail level</span>
          <span className="w-fit rounded-full bg-lav px-2.5 py-0.5 text-sm font-medium">{p.detail}</span>
        </div>
        <div className={row}>
          <span className={label}>Call to discussion</span>
          <span className="text-sm font-semibold">“{p.call}”</span>
        </div>
      </Swap>
      <Illustrative className="mt-4">Illustrative posts for a fictional brand</Illustrative>
    </div>
  );
}

/* ── Infrastructure dashboard (abstract, no counts) ─────────────────── */

// Add verified operational metrics here when available, e.g. { label: "Removal rate", value: "…" }.
const verifiedMetrics: { label: string; value: string }[] = [];

const tile = "rounded-2xl border border-paper/10 bg-paper/[0.05] p-4";
const tileLabel = "font-mono text-[10px] uppercase tracking-widest text-paper/50";

function Dashboard() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className={tile}>
        <p className={tileLabel}>Account readiness</p>
        <ul className="mt-3 space-y-2.5 text-sm">
          {[["Participation history", "Established"], ["Community standing", "Reviewed"], ["Activity pattern", "Consistent"], ["Account health", "Monitored"]].map(([k, v]) => (
            <li key={k} className="flex items-center justify-between gap-3">
              <span className="text-paper/80">{k}</span>
              <span className="flex items-center gap-1.5 rounded-full bg-paper/10 px-2 py-0.5 text-xs">
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                {v}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={tile}>
        <p className={tileLabel}>Community mapping</p>
        <ul className="mt-3 space-y-2.5 text-sm">
          {["Self-promotion rules", "Account requirements", "Flair and format", "Moderation patterns"].map((k, i) => (
            <li key={k} className="flex items-center gap-3">
              <span className="w-36 shrink-0 text-paper/80">{k}</span>
              <span aria-hidden className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper/10">
                <span className="block h-full rounded-full bg-accent/80" style={{ width: `${[100, 100, 75, 60][i]}%` }} />
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-paper/50">Mapped per subreddit before anything is posted</p>
      </div>
      <div className={tile}>
        <p className={tileLabel}>Pre-post checks</p>
        <ul className="mt-3 space-y-2 text-sm">
          {["Community rules reviewed", "Disclosure appropriate", "Tone and format fit", "Timing considered"].map((k) => (
            <li key={k} className="flex items-center gap-2.5 text-paper/80">
              <span className="grid size-4 place-items-center rounded-full bg-accent text-ink">
                <Check aria-hidden className="size-3" strokeWidth={3} />
              </span>
              {k}
            </li>
          ))}
        </ul>
      </div>
      <div className={tile}>
        <p className={tileLabel}>Operational workflow</p>
        <ol className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
          {["Draft", "Review", "Approve", "Publish", "Monitor"].map((k, i) => (
            <li key={k} className="flex items-center gap-1.5">
              {i > 0 && <ArrowRight aria-hidden className="size-3 text-paper/40" />}
              <span className={`rounded-full px-2.5 py-1 ${i === 4 ? "bg-accent font-semibold text-ink" : "bg-paper/10"}`}>{k}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-paper/50">Human review at every stage</p>
      </div>
      {verifiedMetrics.length > 0 && (
        <dl className={`${tile} flex flex-wrap gap-x-10 gap-y-3 sm:col-span-2`}>
          {verifiedMetrics.map((m) => (
            <div key={m.label}>
              <dd className="font-display text-2xl font-bold">{m.value}</dd>
              <dt className="text-xs text-paper/60">{m.label}</dt>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */

const infra = [
  ["Established account infrastructure", "Legitimate, established contributor accounts and operational account-management processes, used with appropriate transparency and within platform and community rules."],
  ["Community readiness", "Understanding community restrictions, moderation patterns, subreddit requirements, and participation norms."],
  ["Operational reliability", "Structured quality control, publishing workflows, account health monitoring, and preventive review processes designed to reduce avoidable removals."],
  ["Execution at scale", "The operational capacity to manage consistent, community-appropriate engagement across multiple relevant conversations."],
];

const content = [
  ["Subreddit-specific writing", "Every community has different expectations. We adjust the content to the people and the context."],
  ["Audience and contributor understanding", "We consider audience personas, contributor perspectives, buyer intent, and appropriate disclosure rather than treating every community as interchangeable."],
  ["Experience with demanding brands", "Our team brings content experience from work with established companies and YC-backed startups."],
  ["Content that earns its place", "Useful posts, credible explanations, comparisons, and conversations rather than obvious promotional copy."],
];

function Capabilities({ items, dark }: { items: string[][]; dark?: boolean }) {
  return (
    <dl className="mt-8 grid gap-x-8 sm:grid-cols-2">
      {items.map(([t, d]) => (
        <div key={t} className={`border-t py-4 ${dark ? "border-paper/15" : "border-ink/15"}`}>
          <dt className="font-display font-bold tracking-tight">{t}</dt>
          <dd className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-paper/65" : "text-muted"}`}>{d}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Advantage() {
  return (
    <section id="advantage" className="px-2 sm:px-4">
      <div className="rounded-[2rem] bg-ink text-paper">
        <div className={`${wrap} py-16 lg:py-24`}>
          <Head
            dark
            eyebrow="Our advantage"
            title={
              <>
                Reddit isn’t hard to post on. <span className="text-accent">It’s hard to get right.</span>
              </>
            }
          >
            Most teams think Reddit marketing is a content problem. It isn’t. It’s an infrastructure problem and a content
            problem. You need both to build a presence that lasts.
          </Head>

          <Reveal className="mt-10 rounded-3xl border border-paper/10 bg-paper/[0.04] p-6 sm:p-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">01 / The infrastructure</p>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">The part you can’t build overnight.</h3>
                <p className="mt-5 leading-relaxed text-paper/70">
                  Reddit isn’t a platform where you can create an account on Monday and run a full-fledged marketing
                  program on Tuesday. Account history, community trust, moderation rules, timing, and operational
                  consistency all matter.
                </p>
                <p className="mt-4 leading-relaxed text-paper/70">
                  We’ve already invested in the infrastructure and workflows required to operate responsibly across Reddit
                  communities. Your team doesn’t have to start from zero.
                </p>
              </div>
              <div className="lg:pt-2">
                <Dashboard />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-paper/50">Abstract view of our operating checks</p>
              </div>
            </div>
            <Capabilities items={infra} dark />
          </Reveal>

          <Reveal className="mt-5 rounded-3xl bg-paper p-6 text-ink sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="lg:order-2">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">02 / The content</p>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">The part you can’t just copy-paste.</h3>
                <p className="mt-5 leading-relaxed text-muted">
                  A post that works in r/startups can fail completely in another community. The format, tone, timing,
                  expertise, and person behind the conversation all change how people respond.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  We understand Reddit-native writing: the questions worth answering, the way different audiences
                  communicate, and the type of content people actually want to engage with.
                </p>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold">One message. Three communities.</p>
                <CommunityPosts />
              </div>
            </div>
            <Capabilities items={content} />
          </Reveal>

          <Reveal className="mt-14 text-center">
            <p className="font-display text-[clamp(1.6rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]">
              The infrastructure to show up.
              <br />
              <span className="text-accent">The expertise to belong.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
