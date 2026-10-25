# citations.agency blog: how posts get made

Posts live at `/blog/<slug>`. The plan is `docs/blog/tracker.md` (70 posts, 7 buckets).
The writing rules are imported from the two sibling sites in `docs/blog/imported/`,
read in this order:

1. `imported/writing-guide.aicustomerservice.md`: the one test, evidence and honesty rules
2. `imported/voice-and-structure.ai-sdr.md`: persona step, opening formula, titles, FAQ method, voice
3. `imported/research-protocol.ai-sdr.md`: research order (context, ours, web, competitors)
4. `imported/rulebook.ai-sdr.md`: the checker's pass/fail list
5. `imported/stop-slop.md`: mandatory anti-slop pass on all prose
6. `imported/loop.ai-sdr.md`: the production loop and its two modes

This file is senior to all of them. Where they disagree, the overrides below decide.

## Overrides for citations.agency

**O0. The model is redship.io (added 25 Oct 2026, senior to everything below and to the
imported files).** Anusha rejected the first five drafts as "written to show how the blog is
written, not to help", "very short", "no actionable things", with "subtext you want to tell
me but end up telling the whole world". So:

- **Help, don't perform.** Direct second-person advice in a confident voice. No openers like
  "Here's the trap", no "this guide covers…", no commentary on our own sources or method.
- **Actionable everywhere.** Every H2 leaves the reader with something to do: steps,
  checklists, templates, example copy, thresholds ("by week 4 you should have…"), tables to
  copy, a "Don't do this" box, a mistakes list, what to measure.
- **Length:** every post 2,100–2,500 words, whatever the style (Anusha, 25 Oct 2026). Length comes from more useful sections, never padding.
- **Sources inline only.** Link a stat to its source where it's used; attribute a quote at the
  quote. No sources list at the end. Caveats about a source's motives, unseen data or our
  method go in the research file or to Anusha in chat, never in the post.
- **Still never invent.** Facts and numbers come from real sources; recommendations ("aim for
  20–30 prompts") are clearly advice.

The imported rules about provenance commentary (ai-sdr H25, H27 attribution verbs, the
"what this page does not know" form, the forum-thread minimums) are overridden by O0.

**O1. Never write a section about the page itself.** aicustomerservice banned this on
18 Sep 2026 after reading rendered posts, and that ruling beats ai-sdr's H25. So: no
"what this page does not know", "our method", "check it yourself" sections. Honesty is
carried by the facts: a read-date on every movable fact, "not published" where a source
publishes nothing, and attribution at the point of the claim.

**O2. Titles = the query + the payoff** (voice-and-structure §3). The tracker's working
titles are placeholders. "X: the complete playbook (2026)" only survives if the second
half says something only someone who did the work could write. stop-slop's colon ban
applies to empty colons, not to query-plus-payoff.

**O3. The five styles** come from the tracker: RS Playbook, RS Answer, Data post,
Verdict post, Comparison. Each style's skeleton is in `tracker.md`. Model structure,
never wording.

**O4. House rules on every post:** the answer in the first screen, one proof element
(a screenshot, number or example we own), `updated` date, one CTA tied to the Free AI
Visibility Audit (mid-article mention plus the end box).

**O5. Our first-party proof** is what separates us from tool vendors: client
screenshots (anonymised), Bing AI Performance and Search Console data, Reddit threads we
have worked on. Every post names its first-party element in the research file before
drafting. No first-party element, no post (the "one thing no competitor has" rule).

**O6. Never invent.** No made-up citation counts, client results or Reddit numbers.
Anonymise clients, never fabricate them. AI-output examples must be real captures with a
date, or not shown.

**O7. Nothing ships without review.** Drafts are committed with `status: "draft"`,
which renders only on localhost. A post goes `published` only after Anusha has read it
rendered.

## The cycle (per post)

1. **Pick** the next ★ post from `tracker.md`; set its status to Outlining.
2. **Research** into `docs/blog/research/<slug>.md` from `_template.md`: persona,
   SERP pass (top 5–8 results), the best ranking page and a coverage diff, sources with
   read-dates (3+ types, 2+ Reddit threads), and the first-party element.
3. **Structure**: H2s in the order the persona would ask, in the chosen style.
4. **Draft** into `content/blog/<slug>.ts` as `status: "draft"`.
5. **Check**: `npm run check:posts` (mechanical rules), then a separate checker pass
   against `imported/rulebook.ai-sdr.md` and `imported/stop-slop.md`, logged at the
   foot of the research file.
6. **Review**: serve on localhost, Anusha reads it rendered, corrections become rule
   changes in this README rather than one-off fixes.
7. **Publish**: set `status: "published"` with the date, deploy, submit the URL to
   Bing (IndexNow) and Search Console, update `tracker.md`.

Calibration mode (ai-sdr LOOP) applies to the first 3 posts: stop for review after
research, after structure and after the draft. After that, batch mode.
