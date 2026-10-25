<!-- Imported verbatim from bkl3/loop/rulebook.md on 2026-10-25. citations.agency overrides live in docs/blog/README.md; where they conflict, README wins. -->

# rulebook.md — The Checker's Pass/Fail List

Run this as a SEPARATE pass after writing. You are the checker now, not the
writer. Go line by line. Log PASS or FAIL + line items at the bottom of the
post's research file. Two FAILs → flag for human, move on.

---

## HARD FAILS (post cannot ship)

**Sourcing**
- [ ] H1. Any price without the date it was read.
- [ ] H2. Any statistic presented as fact without a source — UNLESS it carries
      an explicit unverified marker in the prose ("vendor-reported, unverified"
      / "circulates widely, no traceable primary source"). Unmarked = fail.
      Marked = pass, but only if the stat genuinely earns its place.
- [ ] H3. Criticism of any tool resting solely on a competitor's claim, with no
      independent corroboration cited. (Corroborated criticism passes, however
      harsh.)
- [ ] H4. Any fact in the post that is not in `research/<slug>.md` with a source.
- [ ] H5. A number that contradicts `facts.md` without an explanation and a
      ledger update.
- [ ] H6. Verbatim copying without quotation + attribution. Attributed quotes
      of real statements are fine.

**Structure**
- [ ] H7. The direct answer to the title's question is NOT in the first 2–3
      sentences.
- [ ] H7a. **The post never names the reader's problem.** A number is not a
      problem. "108 of 264 are gated" is a fact; "you cannot price two thirds
      of your shortlist before the budget meeting" is a problem. If a reader
      cannot tell in the first screen what this costs *them*, the post fails.
- [ ] H7b. **A term the post is built on is used without being defined.** If
      the post turns on "gating", "waterfall", "concurrency" or any other
      insider word, define it the first time in one plain sentence. Assume the
      reader is competent and new, not stupid and expert.
- [ ] H7c. **The post does not end with a decision the reader can act on.**
      Named, concrete, executable this week. "Consider your options" is a
      failure. "Price the self-serve half first and use it as your anchor" is
      a decision. Census posts are not exempt: a count that changes nothing
      the reader does is trivia.
- [ ] H7e. **The post defines its jargon before the reader feels the problem.**
      Definition-then-pain is a glossary. Pain-then-definition is a relief. The
      load-bearing term gets defined only after the reader has a reason to want
      it defined.
- [ ] H7f. **The ending does not answer the title.** If the title asks a
      question, the last substantive section answers it in as many words. A post
      that trails off into related links has not finished.
- [ ] H7d. **The data is the point instead of the evidence.** Tables and counts
      exist to support an argument the reader cares about. If the post would
      collapse into a spreadsheet without losing anything, it was never a post.

      *Added 2026-08-21 after `no-demo-required` shipped and was rejected on
      exactly these four grounds: no problem stated, "gating" never defined,
      no decision offered, and the census standing in for an argument.*
- [ ] H8. Missing internal links: category page + at least 2 tool pages
      (where tools are discussed) + earlier posts it builds on. Also check the
      reverse-link step happened (older posts updated to point here when clearly
      warranted).
- [ ] H9. No FAQ section, or FAQs that fail the follow-up-question test
      (questions nobody who just read the post would ask).
- [ ] H10. Title/headings phrased as labels instead of the way humans ask.
- [ ] H10a. **Title has no payoff.** A title that is only a query, with no
      second half, is a section heading. The second half must be something only
      someone who did the work could write: the answer, the catch, the basis of
      the ranking, or why it is not what the reader assumed. A yes/no question
      left unanswered in the title is an automatic fail.
      See `voice-and-structure.md` §3 for the reference corpora and pattern.

**Voice (anti-slop — these fail the post regardless of factual quality)**
- [ ] H11. Em dashes in post prose.
- [ ] H12. Any "not just X, it's Y" / "isn't about X, it's about Y" construction.
- [ ] H13. Preamble throat-clearing or banned filler ("in today's...",
      "dive in", "seamlessly", "game-changing", "unlock", etc.).
- [ ] H14. A paragraph that summarizes the paragraph or section above it; a
      conclusion that restates the post.
- [ ] H15. Reads like AI. The gut check: read the intro and one middle section
      aloud in your head as the persona. If it sounds like every AI blog post,
      it fails, even if no individual banned phrase appears.

**Legal/brand**
- [ ] H16. Any third-party image without credit + link beneath it, or any
      image used where our own chart from the same data was possible.
- [ ] H17. Litigation or enforcement facts stated as findings when they are
      allegations (pending suits must be labelled pending; allegations labelled
      allegations).

**Honest fixes (amended 2026-08-21)**
- [ ] H18. Any fix made to satisfy a STYLE metric (rhythm, cadence,
      readability) must be by deletion, splitting, merging, or reordering
      existing material. Inserting a stylistic device to move a number is a
      hard fail. Banned as metric-fixes: one-word paragraphs, sentence
      fragments, rhetorical questions, em-dash asides, repetition-for-cadence.
      These devices are allowed ONLY where the meaning earns them, never where
      a score demands them.
- [ ] H19. Maximum one paragraph under five words per post, and only on the
      post's actual pivot point. Two or more is a hard fail.

      *Why these exist:* a factual rule has one honest fix each. A style metric
      has many dishonest ones. On 2026-08-21 the loop's first post hit a
      paragraph-rhythm threshold and the fix was to insert a one-word paragraph
      reading "No." purely to move the variance. The post passed. The prose was
      worse. That is the failure mode H18 closes.

**DEPTH — added 2026-08-23. Read the amendment note at the foot of this file
first, because these exist for a diagnosed reason.**

Every one of H1–H19 above is satisfied by *deleting* something. Not one of them
can only be satisfied by going and finding out more. A checker that can only
subtract converges on the shortest page that survives it, and over 74 posts it
did: a 912-word median against a corpus standard of 1,600–7,400, zero cited
practitioner threads, and 137 of 178 citations pointing at this site.

H20–H27 are the rules that can only be satisfied by research. **None of them is
fixable at the checker.** That is deliberate: H18 exists because a metric with
one honest fix and many dishonest ones gets a dishonest one, and a depth metric
discovered during editing has exactly one dishonest fix, which is padding.

- [ ] H20. **Fewer than three independent source types.** A source belongs to
      exactly one type: `vendor` (their own pricing, docs, ToS, status page,
      changelog), `forum` (Reddit, HN, GitHub issue, community board), `primary`
      (FCC, SEC, FTC, a court docket), `platform` (docs from someone not selling
      the thing being priced), `press` (named byline and date), `reviews`
      (with counts and dates, per W6), `ours`.

      Three minimum, four on any post naming a price. **`ours` does not count.**
      Our own page is a link, not a source, and counting it as one is how this
      site came to cite itself three times in four.

      Volume floor, from the reference corpus: **one distinct external source
      per 250 body words, at least half of them non-vendor.**

- [ ] H21. **No practitioner voice.** Zero cited forum threads fails. Two
      minimum, four on a post that recommends a purchase. Cite the thread by ID
      or permalink, quote it verbatim, and then *frame it* — the framing
      sentence is the work, not the quote:

      > "That is one person's characterisation, not a finding of fact. A
      > security team asked to approve this will find that thread inside ten
      > minutes. Have an answer ready."

      *Why:* vendors publish the rate. Only buyers publish the surprise. Every
      finding on this site a vendor would not have volunteered came from
      somebody complaining in public.

      **THIN-COMMUNITY DISCHARGE, added 2026-08-24 after the first post held to
      this standard.** Some topics have no practitioner corpus. The AI
      receptionist market has exactly two Hacker News threads with real
      discussion; the rest are three-point Show HNs with no comments. Citing
      those to reach four would be padding the bibliography, which is the same
      failure as padding the prose.

      So the floor can be discharged by **documenting the search in
      `doesNotKnow`**: name the sources searched, the queries used, what was
      found, and what that thinness itself tells a buyer. A market nobody argues
      about in public is a market with no independent scrutiny, and saying so is
      a finding.

      This is not a loophole while it requires the search record to be published
      where the reader sees it. If it starts appearing on posts about crowded
      topics, it is being abused and should be removed.

- [ ] H22. **Fewer than 25 distinct specific figures.** A figure is a price,
      count, rate, percentage, duration or threshold, counted once however often
      repeated. Prose and tables both count. Years alone do not.

      *An absolute count, deliberately, not a density.* When this rule was
      written our figures-per-1,000-words was already three times the reference
      standard while our posts were a sixth the length. A density rule would
      have passed all 74 and changed nothing, because a ratio is satisfied for
      free by being short.

- [ ] H23. **Evidence anchors thinner than one per 15 words.** An anchor is a
      numeral, a named vendor or product, an explicit date, or a verbatim
      quotation. The reference corpus runs **one per 12.7 to 14.1 words** on its
      strongest posts. Above 25 words per anchor the page is opinion with
      examples.

- [ ] H24. **The spine is incomplete.** Tag each H2 with `role`. A
      buyer-decision post carries all ten, roughly in order:

        answer · definition · mechanism · arithmetic · verify ·
        sidebyside · decision · afterbuy · unknowns · verdict

      **`verify` and `afterbuy` are the two nobody else in this market writes
      and they are not optional.** `verify` is a procedure the reader runs on
      their own account, with a stated time cost and a stated pass/fail
      threshold. `afterbuy` is what breaks in month three, sourced from H21.
      A page that says what to buy but not how to check it or what will go
      wrong has sold, not advised.

      Non-decision formats (news, census, single-vendor explainer) may drop
      `sidebyside` and `afterbuy`. Which format applies is written into the
      research file at step 1, not argued at the checker.

      The `sidebyside` table must be **8+ rows by 5+ columns**. A 4×3 is an
      illustration, not a comparison. Three tables minimum per post.

- [ ] H25. **No "what this page does not know" section**, named exactly that,
      placed before the FAQ, in the five-part form:

        1. name the missing measurement precisely
        2. specify the experiment that would produce it
        3. state that nobody publishes it
        4. state that THIS page has not run it either
        5. tell the reader what to do instead

      Stopping before part five turns a disclosure into an apology. Never end
      the paragraph on the admission.

      *Why a hard fail:* this site's premise is that computed is not measured. A
      page that never says what it did not measure is quietly claiming to have
      measured everything.

- [ ] H26. **No freshness metadata.** `updated` (ISO, set on every substantive
      edit), `changelog` (first entry "initial publication"), and `reverify`
      (one sentence naming which figures go stale and how fast). A post naming a
      price whose `updated` is over 90 days old fails on sight — the same rule
      `npm run seo` already applies to `entities.ts`. Prices in the directory
      carry a verification date; prices in posts did not, which is the same
      claim made twice with only one of them checkable.

- [ ] H27. **Attribution verbs.** Every vendor claim carries its status in the
      same sentence or the next: *vendor-reported, treat as a ceiling not a
      floor* · *that is one person's characterisation, not a finding of fact* ·
      *modelled from stated assumptions, not measured* · *this is a vendor claim
      about a competitor's product*. Drop the verb and the claim stops being
      reportable. "IPRoyal states it uses responsibly sourced IPs" is
      reportable; without "states" it is us asserting it.

      Any table cell that cannot be sourced says so. **"Not stated publicly" is
      an honest cell value.** An estimate in a cell that looks like a fact is
      the failure this rule prevents.

**The acceptance test.** A page passes if a reader who distrusts us can, using
only the page: find the answer in under 190 words, re-derive every number from
its cited source, run one named procedure on their own account inside 30
minutes, and list what the page does not know. If any of the four fails, the
research is not finished, whatever the word count says.

## WARNINGS (ship, but log in the batch report)

**Demoted from hard fail 2026-08-21** — paragraph-rhythm threshold and the word
floor. Both live in `scripts/slop-check.ts`, which `LOOP.md` makes senior to the
style guide, so they were operating as hard fails in practice. They are now
warnings, and `slop-check.ts` has been changed to match.

**Amended 2026-08-23, and the amendment is the important entry in this file.**

That demotion was right about rhythm and wrong about length, and the wrongness
took 74 posts to become visible. With the word floor demoted to a warning and W7
firing at 1,700 words, the checker had no mechanism that could ever ask for more
work — only mechanisms that asked for less.

Three compounding causes, named so they are not repeated:

1. **Every hard fail was a subtraction rule.** H1–H19 are all satisfied by
   removing something. A checker that can only subtract finds the shortest page
   that survives it.
2. **The floor was calibrated to the output it was meant to police.** 800 words
   was set as "the median of the 24 posts published as of 2026-08-17". A floor
   derived from current output cannot raise current output; it ratchets down as
   the median falls.
3. **The completeness test was self-refereed.** W10 asked the writer to judge
   whether the persona was satisfied, with a one-line escape hatch, and no
   artefact.

W9's paragraph-rhythm demotion stands and was correct — it fired three times
since, and all three were correctly ignored. It is the length half that broke.
H20–H27 exist so the checker can ask for more work, and W10 now demands an
artefact rather than a judgement.

- [ ] W1. A [verify] item from the master plan shipped still single-sourced
      (must carry the unverified marker per H2).
- [ ] W2. Post leans on one source for >40% of its claims.
- [ ] W3. No original chart/table in a post whose topic is numeric.
- [ ] W4. Fewer than 4 FAQs.
- [ ] W5. Persona block missing from research file or visibly ignored by the
      structure.
- [ ] W6. G2/Capterra cited without review counts and dates.
- [ ] W7. **Words that carry no new fact.** Padding is real and this rule
      catches it, but length was never the symptom. The symptom is a section
      containing no figure, no source, no named entity and no decision — one
      that could be deleted with nothing lost. Find those and delete them, at
      any length. A 6,000-word post with none of them is not padded; a 700-word
      post with two of them is.

      *This used to read "post exceeds what the persona needs" and fired at
      1,700 words — a quarter of the standard. Between them, that wording and
      that threshold taught the loop that long was a defect and short a virtue,
      and 74 posts shipped at a 912-word median. Padding is still not the
      answer. Neither was stopping.*
- [ ] W8. A claim that will stale within 90 days has no refresh note in
      frontmatter.
- [ ] W9. Paragraph rhythm below repo threshold. Log the score, ship the post.
- [ ] W10. **Coverage diff against a named page, in writing.**

      *Length is an output of completeness* is still true. What was wrong was
      the direction we read it in. A post a sixth the length of the standard is
      not evidence that our question was smaller — it is evidence that
      completeness has not been reached. **Short is a diagnosis, not a defence,
      and it was used as a defence four times in one week.**

      So completeness stops being self-certified. The old test asked the writer
      to re-enter the persona and judge whether the persona was satisfied: a
      test whose passing condition is an unwritten judgement by the party being
      tested. Before drafting, name the page currently ranking that this reader
      would otherwise use — the best one on the SERP, not the nearest one to
      what you already wrote — and write into the research file:

          what it covers that we do not, item by item
          what we cover that it does not
          which of its items we deliberately omit, and why that serves this reader

      **"Nothing is missing" is no longer admissible.** The omissions list is,
      and it can be long: the honest short post names the six sections it is not
      writing and gives a reason for each. What is not admissible is an
      unwritten judgement that the post is finished.

      **Still never padding.** If the diff comes back empty you picked the wrong
      comparison page.

**DEPTH WARNINGS (added 2026-08-23)**

- [ ] W15. **Median paragraph under 40 words.** The reference corpus, counted
      across 692 paragraphs, runs a median of **50** with a target band of
      36–62 and a hard ceiling of 110. Ours was 41. This is a warning and not a
      fail because the honest fix is a paragraph that carries a fact, its
      mechanism and its consequence instead of just the fact — and the
      dishonest fix is gluing two paragraphs together, which is an H18
      violation. Never merge to move this number.

      Sentence rhythm inside those paragraphs: median 10–16 words, and **19–35%
      of sentences under 8**. The mechanism is a long analytic sentence followed
      by a short verdict. *"Ten IPs inside one /24 is not a pool. It is one
      blockable unit sold ten times."*

- [ ] W16. Fewer than six cited forum threads (the reference standard is seven).
- [ ] W17. More than half the `sources` are `ours`.
- [ ] W18. Fewer than 40 distinct figures (the reference standard is 47).
- [ ] W19. `updated` older than 180 days on a post that names no price.
- [ ] W20. **No inline evidence tags** on a post with a comparison table. The
      corpus marks cells and claims `[vendor]`, `[thread]`, `[arch]`,
      `[not tested]`, at roughly one per 104 words. `[not tested]` in the cells
      where a competitor would guess is the single most credibility-earning
      mark available.

**SEO — keep it, do not game it (added 2026-08-21)**
- [ ] W11. Primary query does not appear naturally in title, H1, and first 100
      words.
- [ ] W12. FAQ block not marked up as FAQPage JSON-LD.
- [ ] W13. Post has no in-prose internal link within the first three
      paragraphs.
- [ ] W14. Fewer than two H2s phrased as questions a person would actually
      type.

      *These are warnings on purpose.* Never rewrite a sentence to fit a
      keyword. If the phrasing has to get worse to hit one, log the warning and
      move on. Ranking follows the post being the best answer to the query, not
      the other way round.

## AFTER THE CHECK

PASS → proceed to LOG & LINK (LOOP.md step 8).
FAIL → fix ONLY the failed items, run the FULL checklist once more.
Second FAIL → status `flagged` in queue.md + one paragraph on the blocker.
