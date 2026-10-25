# why-was-my-reddit-post-removed: research

Tracker: 4.4 · Style: RS Answer
Target query: why was my reddit post removed · Read-date for this file: 2026-10-25

## Persona
I'm a founder. I wrote a genuinely useful post in r/SaaS about our launch, it showed on my profile, and got zero replies. A friend says it was probably removed. I don't know by whom or why, and I don't want to get banned trying again.

## First-party element (O5)
None yet. The 10-cause diagnostic table is our synthesis of 8 Reddit Help Center articles read 25 Oct 2026. TODO before publish: one anonymised removal example (screenshot of a removal message or mod-queue state) from client work.

## SERP pass
From the keyword research doc (search results checked 25 Oct 2026): Keyword research: 'help threads' rank; RedShip owns adjacent Reddit queries. Gap: a single page mapping each removal cause to the trace it leaves, from Reddit's own docs.
Not re-run per query in this pass; re-check the live SERP before publishing.

## Coverage diff vs the best ranking page (W10)
Help threads answer one cause at a time; we cover all ten with Reddit's own wording, including the newer Poster Eligibility Guide, Post Check, CQS and reputation filter. Omitted: unofficial 'shadowban checker' tools (separate tracker post 4.6).

## Sources
Every source, its type and read-date is in the post file's `sources` array (content/blog/why-was-my-reddit-post-removed.ts).

## Forum threads
HN 12143493 (dbg31415, 2016), HN 40996700 (guywithahat, SaaS founder, 2024), HN 47302487 (AussieWog93, 2026). Reddit itself blocks fetching from our environment, so no Reddit threads quoted.

## Checker log
- 2026-10-25 `npm run check:posts`: PASS (warnings only: answer box pushes intro past ~190 words; answer itself is the first sentence after the box).
- 2026-10-25 manual pass against rulebook + stop-slop: no em dashes, no banned constructions, every figure traced to a source with a read-date, vendor studies labelled as vendor data, forum quotes framed. Open: re-run SERP pass; author sign-off.
