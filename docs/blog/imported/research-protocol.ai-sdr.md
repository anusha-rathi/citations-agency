<!-- Imported verbatim from bkl3/loop/research-protocol.md on 2026-10-25. citations.agency overrides live in docs/blog/README.md; where they conflict, README wins. -->

# research-protocol.md — How Every Post Gets Researched

The order below is mandatory. Each stage feeds the next. Skipping a stage or
reordering them is a process violation even if the output looks fine.

Output of this protocol: `research/<slug>.md`, containing the persona block,
then findings grouped by stage, every fact carrying `(source, date read)`.

---

## Stage 0 — The human context (the base)

Read the post's entry in the master plan. This is author-provided context and it
is the foundation: the angle, the format, the named sources, the warnings, the
[verify] flags. Extract from it:
- the exact question the post answers
- the claims already made that need verification vs the ones already sourced
- what the entry says NOT to do (e.g., "never source criticism from a
  competitor's comparison page")

If, at any later stage, the web contradicts this context, do not resolve it
yourself. Write the contradiction into the research file, flag it, ask.

## Stage 1 — What we already know (no double research)

Before any web call:
1. Search `facts.md` for every stat/price/claim relevant to this post. Reuse
   ledger entries verbatim.
2. Read the site's own tool pages for every tool this post touches — pricing,
   scores, the five score bars, category notes. The site is its own best source
   and it is already dated and verified.
3. Read every already-published post that overlaps (queue.md lists slugs of
   done posts). Note what they claimed and their internal-link opportunities.
4. Read the relevant /learn chapter if one exists.

Write down what is already covered. The web research below fills gaps ONLY.

## Stage 2 — The open web

Search the post's target query plus 3–5 reformulations, phrased the way a human
would type them. Read the top 5–8 results per query. For each result note:
who published it (vendor selling in the category? independent? affiliate?),
what it claims, what it fails to answer. The gaps list becomes the post's spine.

Then go wherever the topic lives:
- **Reddit** — r/sales, r/salestechniques, r/Emailmarketing, r/msp, tool-specific
  subs. Practitioner threads are gold for real complaints, real numbers, and the
  FAQ method. Attribute as anecdote, link the thread, never present as data.
- **YouTube** — walkthroughs and reviews reveal UI truths and limitations no
  pricing page admits. Note channel + date; flag sponsored reviews as sponsored.
- **G2 / Capterra / Trustpilot** — quote sparingly, attribute with review counts
  and dates. A 4.5 from 12 reviews is noise; say so when it is.
- **Primary sources always outrank coverage of them**: FCC.gov, court dockets
  (CourtListener), FTC releases, Google/Microsoft sender documentation, vendor
  ToS and privacy policies, earnings call transcripts, public procurement records.
- **Vendor pricing pages** — read directly, record the date. This is the site's
  core discipline.

Spawn parallel research subagents when the post has 3+ independent strands
(e.g., pricing sweep / Reddit sentiment / legal-primary-source check). Each
subagent returns findings in the same `(fact, source, date)` format. You merge;
you resolve duplicates against facts.md.

## Stage 3 — Visuals

Decide what the post should SHOW, not just tell:
1. **First choice: our own charts and tables** built from the data gathered above
   (price spreads, census counts, timelines, break-even curves). This is the
   brand — the arithmetic is ours.
2. Screenshots of public pricing pages / docs, with "Source: [vendor pricing
   page], read [date]" beneath.
3. Vendor press-kit assets and logos (editorial use).
4. Licensed or CC images where a photo genuinely helps.
5. Third-party charts/figures only when our own version is impossible, used
   minimally, with credit + link directly beneath the image. Attribution is not
   a license — if there's doubt about whether we can use it, rebuild it as our
   own chart from the underlying numbers instead, citing the original as the
   data source. That is both safer and better.

## Stage 4 — Competitors and structure check

Last, deliberately: read what competitors (other roundups, the formanorden-style
sites, vendor content ranking for the query) say. Two purposes only:
1. Catch anything structurally wrong or missing in our plan — a sub-question
   every competitor answers that we don't, a segmentation we ignored.
2. Confirm our differentiation — what we answer that none of them do.

Competitors are read AFTER forming our own view so they inform structure without
setting it. Note, in the research file: "every ranking result for this query is
vendor-published: yes/no" — when yes, the post says so explicitly.

## Stage 5 — Close the file

End `research/<slug>.md` with:
- **Answer in three sentences** — if you can't answer the post's question in
  three sentences from this research, the research isn't done.
- **The gaps we fill** — bullet list of what no ranking page answers.
- **Facts to add to ledger** — the new entries facts.md will receive at step 8.
- **Open flags** — [verify] items still unresolved, contradictions with the
  master plan, anything needing a human call.
