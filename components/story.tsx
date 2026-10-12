"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { AIAnswer, Brand, Cite, Comment, RedditPost } from "./mocks";

const STEP_MS = 4500;

const steps = [
  {
    title: "The Question",
    text: "A buyer asks Reddit for advice about a product category.",
    visual: (
      <RedditPost
        sub="startups"
        user="late_stage_lena"
        time="2d"
        title="Outgrowing our feedback spreadsheet. What do teams of 10–20 actually use?"
        body="Not looking for a sales pitch. What stuck after the first month?"
        votes="342"
        comments="129 comments"
      />
    ),
  },
  {
    title: "The Conversation",
    text: "A brand contributes relevant, genuinely useful information to the discussion.",
    visual: (
      <div className="space-y-1 rounded-3xl border border-line bg-white p-3 shadow-[0_30px_60px_-30px_rgba(23,23,23,0.22)]">
        <Comment user="maya_tallybird" time="2d" votes="88" badge="Disclosure: works at Tallybird" highlight>
          I work at <Brand />, so weigh this accordingly. What sticks is one intake channel plus five tags, max. We
          wrote the setup up here: <span className="text-violet underline">tallybird.example/tagging-guide</span>
        </Comment>
        <Comment user="late_stage_lena" time="2d" votes="41">
          Appreciate the disclosure. The five-tag rule is the most useful thing in this thread.
        </Comment>
        <Comment user="pm_in_exile" time="1d" votes="27">
          Can confirm the intake-channel point, regardless of which tool you end up with.
        </Comment>
      </div>
    ),
  },
  {
    title: "The Discovery",
    text: "A potential customer or AI-powered search experience discovers relevant public information.",
    visual: (
      <AIAnswer
        query="How do small teams keep customer feedback organized?"
        sources={["reddit.com · r/startups · public discussion", "tallybird.example · Tagging guide"]}
      >
        <p>
          A common recommendation is a single intake channel with a small, fixed set of tags.
          <Cite n={1} /> <Brand /> publishes a setup guide teams reference for this.
          <Cite n={2} />
        </p>
      </AIAnswer>
    ),
  },
];

export function StoryStages() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduced = useReducedMotion();
  const playing = auto && inView && !reduced;

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), STEP_MS);
    return () => clearInterval(t);
  }, [playing]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  return (
    <ol ref={ref} className="grid gap-12 lg:grid-cols-3 lg:gap-6">
      {steps.map((s, i) => {
        const on = i === active;
        return (
          <li key={s.title} onMouseEnter={() => pick(i)}>
            <button type="button" aria-pressed={on} onClick={() => pick(i)} onFocus={() => pick(i)} className="block w-full text-left">
              <span aria-hidden className="block h-0.5 overflow-hidden rounded-full bg-ink/10 max-lg:hidden">
                <span
                  className={`block h-full origin-left bg-accent transition-transform ease-linear ${
                    on ? "scale-x-100" : "scale-x-0 duration-0"
                  }`}
                  style={on ? { transitionDuration: `${playing ? STEP_MS : 300}ms` } : undefined}
                />
              </span>
              <span className="mt-5 block font-mono text-xs uppercase tracking-widest text-muted">Step {i + 1}</span>
              <span className="mt-2 block font-display text-2xl font-bold tracking-tight">{s.title}</span>
              <span className="mt-2 block min-h-[3lh] text-muted lg:max-w-xs">{s.text}</span>
            </button>
            <div
              className={`mt-6 transition-all duration-500 ${
                on ? "" : "lg:scale-[0.96] lg:opacity-45 lg:grayscale"
              }`}
            >
              {s.visual}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
