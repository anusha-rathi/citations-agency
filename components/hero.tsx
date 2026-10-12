"use client";

import { ArrowBigUp } from "lucide-react";
import { motion } from "motion/react";
import { AIAnswer, Brand, Cite, Comment, Illustrative, RedditPost, Skeleton } from "./mocks";
import { Cta, ease } from "./ui";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export function Hero() {
  return (
    <section id="top" className="overflow-x-clip">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20 lg:pb-28">
        <motion.p {...rise(0)} className="font-mono text-xs uppercase tracking-widest text-muted">
          The Reddit Marketing & AI Visibility Agency
        </motion.p>
        <motion.h1
          {...rise(0.08)}
          className="mt-6 font-display text-[clamp(2.6rem,6.6vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em]"
        >
          Get talked about on{" "}
          <span className="relative whitespace-nowrap text-accent">
            Reddit
            <span
              aria-hidden
              className="absolute -top-3 left-[calc(100%-0.25rem)] hidden rotate-6 items-center gap-0.5 rounded-full bg-ink px-2.5 py-1 font-sans text-xs font-semibold tracking-normal text-paper sm:flex lg:text-sm"
            >
              <ArrowBigUp className="size-4 fill-accent text-accent" />
              2.4k
            </span>
          </span>
          .
          <br />
          Get discovered by{" "}
          <span className="inline-block -rotate-2 rounded-[0.22em] bg-lav px-[0.16em]">
            AI
          </span>
          .
        </motion.h1>

        <motion.div {...rise(0.16)} className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            We help brands turn real Reddit conversations into awareness, demand, and stronger visibility across
            ChatGPT, Perplexity, Google, and beyond.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href="#contact">Get Your Free Visibility Audit</Cta>
            <Cta href="#services" variant="outline" down>
              Explore What We Do
            </Cta>
          </div>
        </motion.div>
        <motion.p {...rise(0.22)} className="mt-8 border-t border-line pt-5 text-sm text-muted">
          Reddit-native marketing. AI-search intelligence. Human-led execution.
        </motion.p>

        {/* Reddit thread → AI answer */}
        <figure className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_19rem_minmax(0,1fr)] lg:gap-0">
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: -1 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="relative z-10 min-w-0"
            >
              <RedditPost
                sub="SaaS"
                user="founder_mode"
                time="6h"
                title="What’s the best tool for keeping customer feedback organized across a small team?"
                body="We’re 8 people. Feedback lives in Slack, email, and a spreadsheet nobody opens. What actually worked for you?"
                votes="214"
                comments="87 comments"
              >
                <Comment user="opsnerd_" time="5h" votes="96">
                  We did the spreadsheet thing for a year. The fix wasn’t a fancier tool, it was one inbox everyone
                  actually checks.
                </Comment>
                <Comment user="maya_tallybird" time="4h" votes="61" badge="Disclosure: works at Tallybird" highlight>
                  Biased, obviously: I work at <Brand />. Happy to share the tagging setup we see small teams stick
                  with, whichever tool you pick.
                </Comment>
                <Comment user="quietchurn" time="3h" votes="38">
                  That tagging advice is solid. We trialed three options and the Slack sync is what decided it for us.
                </Comment>
              </RedditPost>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col items-center gap-2 lg:gap-3"
            >
              <span aria-hidden className="h-8 w-0.5 flow-v lg:hidden" />
              <span className="whitespace-nowrap rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider">
                Conversations → Discovery → AI Visibility
              </span>
              <span aria-hidden className="h-8 w-0.5 flow-v lg:h-0.5 lg:w-[calc(100%+3rem)] lg:flow-h" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="relative z-10 min-w-0"
            >
              <AIAnswer
                query="What are the best tools for organizing customer feedback?"
                sources={["reddit.com · r/SaaS · “What’s the best tool for keeping customer feedback…”", "tallybird.example · Feedback tagging guide"]}
              >
                <p>Here are several options worth evaluating, depending on your team size and workflow:</p>
                <ol className="space-y-2">
                  <li className="rounded-xl bg-lav/40 p-2.5">
                    <Brand /> comes up in public discussions among small teams that work in Slack, often for its
                    tagging workflow.
                    <Cite n={1} />
                    <Cite n={2} />
                  </li>
                  <li className="flex items-center gap-2 px-2.5">
                    <span className="text-muted">Another option</span> <Skeleton w="45%" />
                  </li>
                  <li className="flex items-center gap-2 px-2.5">
                    <span className="text-muted">Another option</span> <Skeleton w="30%" />
                  </li>
                </ol>
              </AIAnswer>
            </motion.div>
          </div>
          <figcaption className="mt-8 flex justify-center">
            <Illustrative>
              Illustrative example. Fictional brand and thread, not a real citation or customer result.
            </Illustrative>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
