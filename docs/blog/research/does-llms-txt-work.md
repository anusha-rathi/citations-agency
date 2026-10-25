# does-llms-txt-work: research

Tracker: 3.2 · Style: Verdict post
Target query: does llms.txt work · Read-date for this file: 2026-10-25

## Persona
I run marketing at a 20-person SaaS. An agency told us we need llms.txt for AI search and a plugin made one in a minute. Nothing changed. I want to know whether it matters before I spend another hour on it, and I don't trust posts written by people who sell llms.txt generators.

## First-party element (O5)
Our own check of /llms.txt on 33 URLs (AI companies, AI visibility vendors, SaaS) on 25 Oct 2026: AI companies publish files for their developer docs but not their main domains; Ahrefs, Profound and Peec AI publish none.

## SERP pass
From the keyword research doc (search results checked 25 Oct 2026): Optimizely (Verdict format, 4 studies), geotoolbox (own numbers), Something Inc; glossary pages for 'llms.txt'. Gap: who actually publishes vs reads, and a plain verdict by site type.
Not re-run per query in this pass; re-check the live SERP before publishing.

## Coverage diff vs the best ranking page (W10)
Optimizely covers 4 studies and Google's statements; we add our 33-site check and the training-vs-search crawler distinction from OpenAI's docs. Omitted: our own 60-day server logs (no llms.txt live yet; tracker says add after 60 days).

## Sources
Every source, its type and read-date is in the post file's `sources` array (content/blog/does-llms-txt-work.ts).

## Forum threads
HN 48410589 (rickette, 80k-blog platform logs), HN 44759462 (skeptrune, Mintlify, vendor-interested).

## Checker log
- 2026-10-25 `npm run check:posts`: PASS (warnings only: answer box pushes intro past ~190 words; answer itself is the first sentence after the box).
- 2026-10-25 manual pass against rulebook + stop-slop: no em dashes, no banned constructions, every figure traced to a source with a read-date, vendor studies labelled as vendor data, forum quotes framed. Open: re-run SERP pass; author sign-off.
