"use client";

import { useState } from "react";
import { wrap } from "@/lib/styles";
import { Head, Reveal, Swap, Tabs } from "./ui";

const communities = ["r/startups", "r/SaaS", "r/smallbusiness"] as const;

// The same underlying message (a simpler way to organize customer feedback), adapted per community.
const posts: Record<(typeof communities)[number], { headline: string; hook: string; tone: string }> = {
  "r/startups": {
    headline: "We built feedback tooling nobody asked for. Here’s what we’d do differently.",
    hook: "For a long time we collected every customer request in one giant board. It felt productive. It wasn’t.",
    tone: "Candid founder story",
  },
  "r/SaaS": {
    headline: "How we triage customer feedback: a few tags, one intake channel, a weekly review",
    hook: "Skipping the story. Here’s the exact structure and what we stopped tracking.",
    tone: "Tactical, peer to peer",
  },
  "r/smallbusiness": {
    headline: "A simple way to keep track of customer requests without buying software",
    hook: "If requests are scattered across texts, emails, and sticky notes, this is quick to set up.",
    tone: "Plain and practical",
  },
};

function CommunityPosts() {
  const [sub, setSub] = useState<(typeof communities)[number]>(communities[0]);
  const p = posts[sub];
  return (
    <>
      <Tabs label="Community" items={communities} value={sub} onChange={setSub} />
      <Swap k={sub} className="mt-3 rounded-2xl border border-line bg-white p-4">
        <p className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-accent/15 px-2 py-0.5 font-medium">{p.tone}</span>
          <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-medium text-paper">Disclosure: founder at Tallybird</span>
        </p>
        <p className="mt-3 font-display font-bold leading-snug">{p.headline}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.hook}</p>
      </Swap>
    </>
  );
}

const checks = [
  ["Account history", "Established"],
  ["Community rules", "Mapped"],
  ["Every draft", "Human-reviewed"],
  ["Account health", "Monitored"],
];

const eyebrow = "font-mono text-xs uppercase tracking-widest text-accent";
const title = "mt-3 font-display text-2xl font-bold leading-tight tracking-tight";

export function Advantage() {
  return (
    <section id="advantage" className="px-2 sm:px-4">
      <div className="rounded-[2rem] bg-ink text-paper">
        <div className={`${wrap} py-16 lg:py-20`}>
          <Head
            dark
            eyebrow="Our advantage"
            title={
              <>
                Reddit isn’t hard to post on. <span className="text-accent">It’s hard to get right.</span>
              </>
            }
          >
            It takes infrastructure and content. You need both.
          </Head>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal className="flex min-w-0 flex-col rounded-3xl border border-paper/10 bg-paper/[0.04] p-6 sm:p-8">
              <p className={eyebrow}>01 / Infrastructure</p>
              <h3 className={title}>The part you can’t build overnight.</h3>
              <p className="mt-3 leading-relaxed text-paper/70">
                Account history and community trust take time. We’ve already built the accounts and workflows, so you
                don’t start from zero.
              </p>
              <ul className="mt-6 divide-y divide-paper/10 rounded-2xl border border-paper/10 px-4">
                {checks.map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between gap-3 py-3 text-sm">
                    {k}
                    <span className="flex items-center gap-1.5 rounded-full bg-paper/10 px-2.5 py-1 text-xs">
                      <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 text-xs text-paper/50">Transparent participation, within platform and community rules.</p>
            </Reveal>

            <Reveal delay={0.08} className="flex min-w-0 flex-col rounded-3xl bg-paper p-6 text-ink sm:p-8">
              <p className={eyebrow}>02 / Content</p>
              <h3 className={title}>The part you can’t copy-paste.</h3>
              <p className="mb-6 mt-3 leading-relaxed text-muted">
                What works in one subreddit fails in another. We rewrite the same message for each community.
              </p>
              <CommunityPosts />
              <p className="mt-auto pt-5 text-xs text-muted">
                Illustrative example. Our team has written for established companies and YC-backed startups.
              </p>
            </Reveal>
          </div>

          <p className="mt-10 text-center font-display text-xl font-bold tracking-tight sm:text-2xl">
            The infrastructure to show up. <span className="text-accent">The expertise to belong.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
