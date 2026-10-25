<!-- Imported verbatim from bkl3/loop/voice-and-structure.md on 2026-10-25. citations.agency overrides live in docs/blog/README.md; where they conflict, README wins. -->

# voice-and-structure.md — Persona, Structure, Titles, FAQs, Voice

If the repo contains its own anti-AI-slop guide, that guide is senior to the
style section here. Voice reference: existing ai-sdr.cc posts (the Twilio
teardown and the who-writes-the-lists post are the strongest examples) and the
aicodereview.cc blog. Imitate THAT voice, not generic blog voice.

---

## 1. The Persona Step (the single most important step in the loop)

Before structuring, become the person asking this question. Not "a reader."
The specific person. Write 3–5 sentences in first person at the top of the
research file. Example, for "which database has the best contacts":

> I run a 6-person B2B company. I bought Apollo credits last year and half my
> emails bounced. I don't have time to trial five tools and I'm suspicious of
> every list I've read because they all end with "buy the author's product."
> If this post makes me sit through 800 words of "in today's fast-paced sales
> landscape" before a number appears, I'm gone.

Then hold the whole post to that person's standard. The test for every section:
would this person, mid-conversation with an LLM, be satisfied by this answer,
or would they type a frustrated follow-up? If the follow-up would be "okay but
just tell me which one," you buried the answer.

## 1b. The opening formula (added 2026-08-21, from the reference sites)

Read `webscraping.cc/blog/web-scraping-api-pricing-comparison` on 2026-08-21.
Its opening is the house pattern and it is worth copying beat for beat:

> **Here's the trap.** You line up three scraping APIs, $30, $49, $69 a month,
> and pick the cheapest. Then the bill arrives at four times the sticker. The
> problem is that no two providers bill on the same unit. One charges per page,
> one per gigabyte, one per browser-hour... Comparing their headline prices is
> like comparing prices at a market where one stall sells by weight, one by the
> piece, and one by how long you stand there. **The number on the sign tells you
> almost nothing.** This page fixes that. Here's what 12 providers actually bill
> on, what the real cost looks like once the multipliers hit, and the specific
> line item that surprises people on each one.

**Six beats, in this order:**

1. **Name the trap in one short line.** "Here's the trap."
2. **Put the reader inside it, in second person, with real numbers.** Not "buyers
   often find" — *you* line up three, *you* pick the cheapest, the bill arrives.
3. **State the mechanism in one plain sentence.** Why the trap works.
4. **One analogy that makes it click.** The market stall. Concrete, physical,
   non-technical. Use one; never two.
5. **The pivot line.** Short, quotable, and the thesis. "The number on the sign
   tells you almost nothing."
6. **Say what this page does**, listing the specific payoffs in order.

**Then: explain the jargon AFTER the reader feels the problem, not before.**
A definition before the pain is a glossary entry. A definition after it is a
relief. This was the note that killed draft 2: the post defined "gated" in
section two, before the reader had any reason to care what the word meant.

**Register.** Short paragraphs, one to three sentences. Second person
throughout. Their H2s are plain-spoken and functional, not clever: *"What each
provider actually bills on"*, *"The multipliers that actually blow up the
bill"*, *"So what does it really cost?"* The word "actually" doing work is the
house tic, and it earns its place because the whole genre exists to correct
what vendors claim.

**The ending must answer the title.** Their weakest habit is trailing off into
Further Reading. Do not copy that. If the title asks a question, the last
substantive section answers it in as many words.

## 1a. Problem before data (added 2026-08-21)

The persona step tells you who is asking. This tells you what to give them, and
in what order. A post that skips this reads like a report even when every
individual rule below is followed.

**The four beats, in order. Every post has all four.**

1. **The situation.** What is happening to this person right now that made them
   search. One or two sentences. Concrete, not abstract.
2. **The problem, named.** What it costs them: time, money, leverage, a decision
   they cannot make. The number is not the problem. What the number does to them
   is the problem.
3. **The evidence.** Now the data, the tables, the arithmetic. This is where
   most of the research goes and it is the third beat, not the first.
4. **The decision.** What they do differently, named and executable. If you
   cannot write this beat, you do not understand the topic well enough to
   publish on it yet.

**Define the load-bearing word.** If the post turns on a term the reader may not
hold precisely, define it in one plain sentence the first time. Not a glossary
box. One sentence, in the flow, then move on.

**The test:** a business owner reads this and can say what they will do on
Monday. If the honest answer is "know a fact they did not know", the post is
trivia, however well sourced.

---

## 2. Structure: the post is a conversation turn, not a report

People talk to LLMs the way they think. The post should read like the best
possible LLM answer, expanded and evidenced, in one place:

- **Answer first.** The direct answer to the title's question appears in the
  first 2–3 sentences. Not after context. Not after a preamble. First.
- **Evidence after.** The tables, the arithmetic, the sources — everything that
  makes the answer trustworthy comes after the answer, in descending order of
  how much the persona cares.
- **Anticipate the follow-up.** Each H2 is, in effect, the next thing the
  persona would ask. Sequence H2s as the conversation would actually go.
- **Show, then explain.** A price table beats three paragraphs about pricing.
  Our own chart beats a described trend. Then one paragraph of what it means.
- **In-depth is not verbose.** Depth = more answered questions per screen.
  Verbosity = more words per answered question. Maximize the first, kill the
  second. If a sentence can be deleted without the persona losing anything,
  delete it.
- **Every post ends with FAQs** (method below) and internal links woven in
  where the persona would naturally want them — not a "related posts" dump.

## 3. Titles: query plus payoff (rewritten 2026-08-21)

Reference corpora: **aicodereview.cc/blog** (297 titles) and
**webscraping.cc/blog** (197 titles), both read 2026-08-21. The owner named
these as the standard. One pattern runs through nearly every strong title on
both sites, and it is not "phrase it as a question."

**TITLE = the query, verbatim + the payoff.**

The first half is the string a person types. The second half is the thing only
somebody who did the work could write: the answer, the catch, the surprise, the
basis of the ranking, or the reason it is not what you assumed.

    Is Semgrep Free for Commercial Use?    | Yes, With Two Catches
    Is SonarLint Deprecated?               | No, Here's What Actually Happened
    Is Snyk SAST or DAST?                  | Neither Label Fits
    5 ScraperAPI Alternatives              | for When 64% Success Isn't Enough
    7 ScrapingBee Alternatives             | (Matched to Why You're Leaving)
    4 Apify Alternatives                   | With a Bill You Can Actually Predict
    Web Scraping API Pricing Compared      | Why the Sticker Price Lies
    The Best Web Scraping APIs in 2026     | Ranked by Measured Success Rate
    Your Smart TV Is Probably a Proxy Node | What the Research Found
    I Reviewed 32 SAST Tools               | The Ones Worth Using
    CodiumAI vs Codium (Open Source)       | They Are NOT the Same

**Four rules that fall out of it:**

1. **Answer a yes/no question in the title.** Never leave it hanging. "Yes,
   With Two Catches" is the whole reason the post gets clicked, and it does not
   spoil anything: it creates the question *which two?*
2. **Qualify an alternatives post by the reason someone is leaving.** Not "7 X
   Alternatives" but "7 X Alternatives (Matched to Why You're Leaving)". The
   qualifier is the differentiator.
3. **State the basis of a ranking.** "Ranked by Measured Success Rate" beats
   "Best", because it says what you did.
4. **A number is a payoff only when it is surprising.** "108 of 264" works
   because the reader expected most tools to have a checkout. "12 Tips" is a
   label.

**The failure mode this replaces.** A title that is only a question, with no
second half, reads as a section heading. It was written as
*"Why Can't You Just Buy Most Sales Software?"* and rejected on exactly that
ground: nothing in it could only have been written by someone who did the work.

**Do not rewrite a sentence to fit a keyword** (W11 is a warning for this
reason). But do put the query in the title, because the query is what the
person typed and the title is the answer they are owed.

## 3b. Headings: how humans actually ask

Titles are queries, not labels. The way a person types it or says it to an LLM.

- YES: "What Does a Verified Contact Actually Cost?" / "Is Sales Navigator
  Worth $120 a Month?" / "The Best Alternatives to 11x That Don't Need a
  $60K Contract" / "How Do I Stop My Cold Emails Going to Spam?"
- NO: "Verified Contact Cost Analysis 2026" / "Sales Navigator: An Evaluation" /
  "11x Alternative Landscape Overview"

H2s follow the same rule where natural — a question or a plain-spoken claim,
never a corporate label. "What the free tier actually lets you do" beats
"Free Tier Capabilities."

## 4. FAQs: the follow-up-question method

FAQs are NOT copied from Google's People Also Ask (check PAA, but as a
cross-reference, not a source). The method:

1. Finish the draft. Re-enter the persona. You have just read this post as them.
2. Ask: what do I want to know NOW? What's my next message in this conversation?
   Generate 6–10 candidate follow-ups.
3. Cross-check against reality: what do people actually ask in Reddit threads on
   this topic (from Stage 2 research)? What does PAA show? What questions does
   an LLM get asked after answering the main question? Merge, dedupe.
4. Keep the best 4–6. Each answered in 2–4 sentences, direct, sourced where a
   fact is involved. An FAQ answer that says "it depends" without then saying
   what it depends on is a failed FAQ.
5. Mark up as FAQPage JSON-LD in frontmatter/schema if the repo supports it —
   this is the GEO/AI-SEO surface.

Good FAQ instinct, for a database comparison post: "Can I export contacts from
the free tier?", "What happens to my credits if I cancel?", "Is ZoomInfo worth
it for a 5-person team?" Bad FAQ instinct: "What is B2B data?" (nobody who read
the post asks that).

## 5. Voice: how it reads

The site's voice is dry, precise, numerate, mildly amused by vendor behavior,
and on the reader's side. Short declaratives. Arithmetic shown, not asserted.
"The advertised rate is not the invoice" is the house register.

**Hard anti-slop rules (these are rulebook hard-fails):**
- No em dashes in post prose. Restructure the sentence or use a period.
- No "this isn't just X, it's Y" / "it's not about X, it's about Y"
  constructions. Ever.
- No preamble throat-clearing: "in today's landscape", "in the world of",
  "let's dive in", "when it comes to". Delete on sight.
- No empty intensifiers: "truly", "seamlessly", "game-changing",
  "revolutionize", "unlock", "supercharge", "elevate".
- No symmetrical triads for rhythm ("faster, smarter, better"). If three items
  are listed, it's because there are three items.
- No section that summarizes the section above it. No conclusion that restates
  the post. End on the last useful thing.
- No hedging stacks ("it may perhaps be possible that"). One hedge maximum,
  and only when uncertainty is real — then say exactly what is uncertain.
- Bold sparingly: numbers and verdicts, not vibes.
- Write like someone the reader would want to hear from for 8 minutes. If a
  paragraph would embarrass you read aloud to a smart friend, rewrite it.

**Attribution and quoting:** quoting a person or brand with attribution is fine
and encouraged when they said something worth quoting — name them, link them.
What's banned is unattributed lifting and paraphrase-plagiarism of structure.

**Criticism:** criticism of any tool, including listed tools, is fine when it's
substantiated — sourced incidents, documented complaints with counts, our own
arithmetic. Competitor-sourced criticism may be USED as a lead, but must be
independently corroborated (primary source, multiple independent reports, or
our own verification) before it appears in the post, and the corroboration is
what gets cited. A competitor's claim alone is never the citation.

**Statistics:** a genuinely illuminating stat with weak sourcing may be used IF
the post says so plainly next to it: "this figure circulates widely but we
could not trace it to a primary source" or "vendor-reported, unverified." The
transparency is the brand. An unmarked unverified stat is a hard fail; a marked
one is editorial judgment.
