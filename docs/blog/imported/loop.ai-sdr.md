<!-- Imported verbatim from bkl3/loop/LOOP.md on 2026-10-25. citations.agency overrides live in docs/blog/README.md; where they conflict, README wins. -->

# LOOP.md — The Blog Production Loop for ai-sdr.cc

You are Claude Code running a content production loop. You do not "write blog posts."
You run a cycle, one post at a time, until the current batch is done. Every step
below is mandatory. The files this loop depends on live next to this one:

- `queue.md` — what to write, in what order, and each post's status
- `research-protocol.md` — how to research (ordered, non-negotiable)
- `voice-and-structure.md` — persona method, structure, FAQ method, title rules
- `rulebook.md` — the checker's pass/fail list
- `facts.md` — the shared ledger of every stat, price and source already used
- `research/` — one research file per post slug (you create these)

If the repo contains its own anti-AI-slop guide, load it before your first draft
and treat it as senior to the style section in voice-and-structure.md.

---

## OPERATING MODES

**Mode 1 — Calibration (first 3 posts).** Fully collaborative. After EACH step
(research done, structure proposed, draft done), stop and show the human. Serve
the result on localhost after each draft so they review it rendered, not raw.
Absorb every correction into the relevant file (rulebook, voice, protocol) —
corrections are rule updates, not one-off fixes. Do not start post 2 until post 1
is approved.

**Mode 2 — Batch (20 posts).** Run the full cycle autonomously per post. Stop only
when: (a) a post fails the rulebook twice, (b) research contradicts the master
plan's context, or (c) the batch is complete. At batch end, serve everything on
localhost and produce a batch report: posts shipped, posts flagged, new facts
added to the ledger, rules you think need amending and why.

---

## THE CYCLE (run once per post)

### 1. PICK
Take the top `queued` post from queue.md. Set status → `researching`.
Read its entry in the master plan (ai-sdr-content-master-plan.md): the format,
the research instructions, and any [verify] flags. That entry is human-author
context. It is the base of everything. You may extend it; you may not ignore it.

### 2. RESEARCH
Follow research-protocol.md exactly — the order matters (context first, existing
site research second, the web third, competitors last). Write everything into
`research/<slug>.md` with a source and read-date per fact. Spawn research
subagents for parallel strands (e.g., one on Reddit threads, one on vendor
pricing pages, one on YouTube reviews) whenever the post has 3+ independent
research strands. Consolidate their findings into the single research file —
the writer step reads ONE file.

### 3. BECOME THE READER
Before structuring anything, run the persona step in voice-and-structure.md.
Write, at the top of the research file, 3–5 sentences AS the person asking this
question: who they are, what they've already tried, what they're afraid of
getting wrong, what a useless answer would look like to them. Every structural
decision after this point answers to that person.

### 4. STRUCTURE
Design the post as the best possible LLM answer to that person's question:
answer first, evidence after, the shape of a great conversation turn — not a
report. Rules in voice-and-structure.md. Propose H2s before writing prose.

### 4a. THE DEPTH PASS — added 2026-08-23, and it is now the longest step

Step 2 gathers enough to have a view. Step 4 turns that view into a section
list. **Neither produces enough evidence to fill the section list**, and until
this step existed nothing in the loop asked it to. That is why 74 posts shipped
at a 912-word median against a corpus standard of 1,600–7,400: research ran
until a coherent page was possible, which is about a sixth of the way through a
subject.

This pass runs HERE, after the structure exists, because researching before you
know your sections gets you a post-shaped amount of research. It produces an
artefact. **A post whose research file has no depth block is not ready to draft.**

**1. The coverage diff (W10).** Name the page currently ranking that this reader
would otherwise use. The best one on the SERP, not the nearest to what you
wrote. Into the research file:

    standard page:  <url>, read <date>, ~<n> words, <n> H2s
    covers, we do not:      <item>, one line each
    we cover, it does not:  <item>
    deliberately omitted:   <item> — <why the omission serves this reader>

"Nothing is missing" is not an admissible finding.

**2. One evidence strand per spine section.** For each of the ten `role`
sections in H24, write the line of evidence it will stand on. A section with no
evidence line is a stub, and stubs are what a thin post is made of.

**This is where subagents get spawned, and the trigger is no longer a judgement
call.** It was "3+ independent research strands", which meant the agent decided
how many strands existed and the trigger never fired. It is now: **one subagent
per spine section you cannot already source from the research file** — typically
four to seven. They return `(fact, source, date, type)`; you merge into the one
file the writer reads.

**3. Go where the buyers are, on purpose (H21).** Reddit, HN, GitHub issues, the
vendor's own community board. Two threads minimum, four on a decision post.
Search the vendor name plus the words people use when something has gone wrong:
`bill`, `overage`, `cancel`, `migration`, `hidden`, `why is`.

⚠️ **We already hold 242 unique Reddit URLs with titles, snippets and dates in
`research/serp/*.json`, captured and never opened.** Start there before spending
a SERP credit.

**4. Write the two sections nobody else writes.** `verify` — the procedure this
reader runs on their own account to check us without trusting us, with a named
tool, a stated time cost and a pass/fail threshold. `afterbuy` — what breaks in
month three, sourced from step 3. If you cannot write either, you have
researched the purchase and not the product.

**5. Write "what this page does not know" FIRST, before any prose (H25).** Not
last, where it becomes a disclaimer. Written here it is a research finding. If
the list is empty you have not understood the subject; if it makes you
uncomfortable it is probably right.

**6. Count before you draft.** Distinct figures against H22's floor of 25.
Source types against H20's floor of three, excluding our own. Evidence anchors
against H23's one-per-15-words. **A shortfall found here costs an hour. The same
shortfall found at the checker costs a rewrite, and the only fix available at
that point is padding.**

### 5. WRITE

**STEP 4b — BUILD THE LINK LIST BEFORE YOU WRITE A SENTENCE.** Added
2026-08-25 after H8 failed the first checker pass on five consecutive posts.
Writing "place links as you draft" into the guide did not work, because it is
advice rather than a step. So it is a step now, and it produces an artefact:

    Before drafting, write into the research file:
      category page  -> /categories/<slug>
      tool pages     -> 2-4, the ones the post actually names
      earlier posts  -> the ones this builds on, by slug
      reverse links  -> which published posts should now point HERE

    Then draft with that list open. A post whose research file has no link
    block is not ready to draft.

    ⚠️ **VERIFY EVERY ROUTE EXISTS BEFORE YOU LIST IT.** Added 2026-08-29 after
    `voice-minute-compliance-cost` failed its checker pass for linking
    `/learn/voice-agent-compliance`, a chapter whose status is "planned" and
    which therefore has no route. Relevance is not existence. For learn
    chapters check `status === "published"` in `curriculum.ts`; for blog posts
    check `status === "published"` AND that `body` is present. `npm run seo`
    catches this, but at the checker stage rather than the drafting stage, and
    the fix is cheaper before the prose is written around the link.

**Write the internal links INTO the draft, not after it.** H8 failed the first
checker pass on the first four posts written under this loop, every time, for
the same reason: prose gets written, links get remembered in review. Before
drafting prose, list the category page, the two-to-four tool pages and the
earlier post this one builds on, and place them as you write.

⚠️ **A reverse link spliced into a closing sentence breaks the sentence. Read
the rendered paragraph back, every time.** Added 2026-08-29 after it happened
twice in one batch. Both times the anchor was unique and the edit applied
cleanly, and both times the result was broken prose: once a dangling `"A
thing."`, once a duplicated closing clause. The uniqueness check passes and the
typechecker passes, because neither is a correctness problem — it is a reading
problem, and only reading catches it.

    After adding any reverse link, print the target's final paragraph:
      POSTS.find(p => p.slug === "<target>").body.filter(b => b.t === "p").pop()

    Prefer appending a NEW sentence after the closing full stop over splicing
    into the middle of the existing one. Closings are the most-edited and
    least-reread part of any post.

⚠️ **When editing `posts.ts` by script, anchor every replacement INSIDE the
target post's span.** On 2026-08-22 a `replace(old, new, 1)` matched an
identical H2 in a different post and injected a section on credit overages into
a post about concurrency limits. Two posts sharing a heading is normal. Find the
slug first, then search forward from it.

Draft FROM the research file only. If a fact isn't in the research file with a
source, it doesn't go in the post. Title and headings phrased as humans actually
ask (rules in voice-and-structure.md). FAQs generated by the follow-up-question
method, not by copying "People Also Ask."
Images: generate charts/tables from our own data first; screenshots of public
pricing pages with a source link; vendor press assets; licensed/CC images. Any
third-party visual carries a credit line + link directly beneath it, and is used
only when it genuinely adds what our own chart can't.

### 6. CHECK (separate pass, fresh eyes)
Close the draft. Re-open it and run rulebook.md line by line, as a checker, not
as the writer. Log the result at the bottom of the research file:
PASS, or FAIL with the specific line items.

### 7. FIX or FLAG
FAIL → fix only the failed items, re-run the full check once.
Second FAIL → status `flagged`, write one paragraph on what's wrong and what
decision you need from the human, move to the next post. Never ship a flagged post.

### 8. LOG & LINK
- Append every new stat/price/source used to `facts.md` (format inside that file).
  Before writing any stat, you already checked facts.md in step 2 — if the stat
  exists there, use the ledger version verbatim. One number, one source, sitewide.
- Add internal links: this post → relevant category page + 2–4 tool pages +
  any earlier posts it builds on. Then check the reverse: does any already-
  published post now deserve a link TO this one? Add those too.
- Write the post to the blog directory in the repo's existing format
  (match frontmatter of existing posts exactly).
- Set queue status → `review` (calibration) or `done` (batch).

### 9. NEXT
Return to step 1. If queue is empty → batch report → stop.

---

## HARD RULES THAT LIVE ABOVE EVERYTHING

1. The human's context in the master plan outranks anything you find on the web.
   If research contradicts it, stop and surface the contradiction — don't silently
   pick a side.
2. Never research the same thing twice. facts.md and existing tool pages are
   checked before any web call.
3. The checker pass is never skipped, never merged into the writing pass.
4. A post that reads like AI wrote it is a failed post even if every fact checks
   out. The anti-slop rules are hard-fail rules.
5. When in doubt between shipping something mediocre and flagging it — flag it.
   The queue is long; one flagged post costs nothing, one bad shipped post costs
   the site's premise.
