"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { wrap } from "@/lib/styles";
import { Illustrative } from "./mocks";
import { Head, Reveal, Swap, Tabs } from "./ui";

const communities = ["r/startups", "r/SaaS", "r/smallbusiness"] as const;

// The same underlying message (a simpler way to organize customer feedback), adapted per community.
const posts: Record<(typeof communities)[number], { headline: string; hook: string }> = {
  "r/startups": {
    headline: "We built feedback tooling nobody asked for. Here’s what we’d do differently.",
    hook: "For most of a year we collected every customer request in one giant board. It felt productive. It wasn’t.",
  },
  "r/SaaS": {
    headline: "How we triage customer feedback: a few tags, one intake channel, a weekly review",
    hook: "Skipping the story. Here’s the exact structure, why each tag exists, and what we stopped tracking.",
  },
  "r/smallbusiness": {
    headline: "A simple way to keep track of customer requests without buying software",
    hook: "If requests are scattered across texts, emails, and sticky notes, this is quick to set up.",
  },
};

function CommunityPosts() {
  const [sub, setSub] = useState<(typeof communities)[number]>(communities[0]);
  const p = posts[sub];
  return (
    <div>
      <p className="mb-3 text-sm font-semibold">One message. Three communities.</p>
      <Tabs label="Community" items={communities} value={sub} onChange={setSub} />
      <Swap k={sub} className="mt-4 rounded-2xl border border-line bg-white p-4 shadow-[0_24px_48px_-28px_rgba(23,23,23,0.35)] sm:p-5">
        <p className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span aria-hidden className="grid size-5 place-items-center rounded-full bg-accent font-display text-[9px] font-bold text-ink">r/</span>
          <span className="font-semibold text-ink">{sub}</span>
          <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-medium text-paper">Disclosure: founder at Tallybird</span>
        </p>
        <p className="mt-3 font-display text-lg font-bold leading-snug">{p.headline}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{p.hook}</p>
      </Swap>
      <Illustrative className="mt-4">Illustrative example, not a client result.</Illustrative>
    </div>
  );
}

const checks = [
  ["Account readiness", "Participation history and account health."],
  ["Community fit", "Rules, account requirements and allowed formats."],
  ["Pre-post review", "Disclosure, tone and timing."],
];

const steps = [
  ["Understand", "Learn your product, buyers and competitors."],
  ["Prepare", "Choose communities and review the content with you."],
  ["Publish and learn", "Post, follow the conversation and report what happened."],
];

const panelTitle = "font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl";

export function Advantage() {
  return (
    <section id="advantage" className="px-2 sm:px-4">
      <div className="rounded-[2rem] bg-ink text-paper">
        <div className={`${wrap} py-24 lg:py-32`}>
          <Head
            dark
            eyebrow="Our advantage"
            title={
              <>
                Reddit is complicated.
                <br className="max-sm:hidden" /> <span className="text-accent">We make it work.</span>
              </>
            }
          >
            The setup gets you ready to participate. The content gives people a reason to listen.
          </Head>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal className="flex min-w-0 flex-col rounded-3xl border border-paper/10 bg-paper/[0.04] p-6 sm:p-10">
              <h3 className={panelTitle}>Ready before we post.</h3>
              <p className="mt-4 leading-relaxed text-paper/70">
                We check the account, the community and the draft before anything goes live.
              </p>
              <ul className="mt-8">
                {checks.map(([t, d]) => (
                  <li key={t} className="flex gap-4 border-t border-paper/15 py-5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-ink">
                      <Check aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold tracking-tight">{t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-paper/65">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-paper/15 pt-5 text-sm text-paper/60">
                Transparent participation. Community rules first.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="min-w-0 rounded-3xl bg-paper p-6 text-ink sm:p-10">
              <h3 className={panelTitle}>Written for the community.</h3>
              <p className="mb-8 mt-4 leading-relaxed text-muted">The same product needs a different angle in every subreddit.</p>
              <CommunityPosts />
            </Reveal>
          </div>

          <Reveal className="mt-16 scroll-mt-24 border-t border-paper/15 pt-8">
            <div id="process" className="scroll-mt-28">
              <h3 className="font-mono text-xs uppercase tracking-widest text-paper/60">How we work</h3>
              <ol className="mt-6 grid gap-8 sm:grid-cols-3">
                {steps.map(([t, d], i) => (
                  <li key={t}>
                    <span className="font-mono text-sm text-accent">0{i + 1}</span>
                    <p className="mt-2 font-display text-2xl font-bold tracking-tight">{t}</p>
                    <p className="mt-2 leading-relaxed text-paper/65">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
