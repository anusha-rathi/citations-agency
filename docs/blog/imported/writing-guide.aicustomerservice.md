<!-- Imported verbatim from bkl2/docs/writing-guide.md on 2026-10-25. citations.agency overrides live in docs/blog/README.md; where they conflict, README wins. -->

# Writing Guide

The site's only asset is being believed. Every rule here exists to protect that.

---

## The one test that matters

**Could this paragraph have been written without placing a call or opening a
dashboard?**

If yes, cut it or replace it with something that couldn't. That single question
eliminates roughly 80% of what AI writes by default, because generic text is
exactly the text that requires no access to anything.

---

## Structure

**Lead with the finding.** The first sentence carries the answer. Not context,
not history, not "the landscape has evolved rapidly".

> Bad: "In today's rapidly evolving AI landscape, choosing the right voice agent
> platform can be challenging. Let's dive into the key differences."
>
> Good: "Vapi answered 90ms faster than Retell across 30 calls, but dropped 4 of
> them. If you need reliability over speed, that trade decides it."

**Inverted pyramid.** Verdict, then evidence, then caveats, then detail. Readers
leave after two paragraphs; they should already have the answer.

**One idea per section.** If a heading covers two things, it's two sections.

---

## Evidence

**Every claim traces to one of three things:**
1. A test we ran (say when, and how many trials)
2. A document we link (vendor docs, pricing page, changelog)
3. A named vendor statement, attributed as a claim, not as fact

If a sentence traces to none of those, it's an opinion — mark it as one or cut it.

**Attribute vendor claims. Never launder them.**

> Bad: "Retell delivers industry-leading latency."
> Good: "Retell advertises sub-800ms response. We measured 690ms median across
> 30 calls on 12 March 2026."

**Numbers, not adjectives.** "Fast", "affordable", "robust", "seamless",
"powerful" carry zero information. Replace each with a measurement or delete it.

**Show the sample size and date.** "690ms" alone is unfalsifiable. "690ms median,
30 calls, 12 March 2026, US East" is a claim someone can check — and checkable
claims are what earn citations.

---

## Honesty

**Say when something is bad.** A directory where every tool is "a great choice
for certain teams" is worthless and readers know it instantly. If a platform
dropped calls, write that it dropped calls.

**Always include the failure case.** Every tool page needs a "where it breaks"
section. This is the most-read part of any honest review and the least copyable.

**Publish what we don't know.** "We could not test PolyAI because it is sales-led
and we did not get access" is a legitimate, useful sentence. Never fill a gap
with a guess.

**Never invent a number.** Not a latency, not a price, not a user count. If we
don't have it, the cell says "Not tested" or "Not published".

**Disclose money in place.** If a tool paid for a featured listing, the
disclosure sits on that page, visible, not in a footer.

---

## Voice

- **Second person for the reader, first person plural for us.** "You'll hit this
  if you're routing over PSTN." "We placed 30 calls."
- **Active voice.** "Retell dropped four calls", not "four calls were dropped".
- **Vary sentence length.** AI text defaults to a uniform 15–20 words. Mix
  short with long. A three-word sentence lands.
- **Contractions are fine.** Write like a competent person talking, not a
  press release.
- **No hedging stacks.** "It may potentially be somewhat slower" → "It's slower."

---

## Banned constructions

These mark text as machine-written and cost credibility on sight:

| Never write | Because |
|---|---|
| "In today's fast-paced / rapidly evolving..." | Says nothing |
| "It's important to note that..." | Then just note it |
| "Let's dive in" / "Let's explore" | Filler |
| "In conclusion" / "In summary" | The reader can see the end |
| "Whether you're a X or a Y, there's something for everyone" | Meaningless |
| "Game-changer", "revolutionary", "cutting-edge" | Marketing words |
| "Robust", "seamless", "powerful", "leverage" | Adjectives with no content |
| "When it comes to X..." | Delete, start at X |
| "The right choice depends on your needs" | The entire point is to tell them |
| Rule-of-three lists everywhere | AI's default rhythm; break it deliberately |
| A section per tool, all identical length | Real reviews are uneven; some tools deserve two lines |

**On the last one:** the strongest tell of AI writing is uniformity. Every tool
getting exactly four bullet points and 120 words. Real judgement is lumpy —
write 600 words on the two platforms that matter and 80 on the one that doesn't.

---

## Formatting

- Tables for anything with more than three comparable values
- Every table gets units in the header and a "measured on" date
- Bold sparingly — for the verdict, not for keywords
- No emoji as section markers
- Headings describe content, not SEO keywords: "Where Vapi breaks", not
  "Vapi Limitations and Drawbacks 2026"

---

## Before publishing — checklist

- [ ] First sentence contains the finding
- [ ] Every number has a date and a sample size
- [ ] Every vendor claim is attributed as a claim
- [ ] At least one thing is criticised specifically
- [ ] The failure case is documented
- [ ] Nothing is invented — gaps say "not tested"
- [ ] Money disclosed on the page, if any
- [ ] Author byline and last-updated date present
- [ ] Read aloud: does any sentence sound like a brochure?
