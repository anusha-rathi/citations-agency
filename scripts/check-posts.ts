// Mechanical checks from docs/blog/imported/rulebook.ai-sdr.md and stop-slop.md.
// This catches what a script can; the checker pass in docs/blog/README.md does the rest.
// Usage: npm run check:posts [slug]
import { posts } from "../content/blog";
import { words, type Post } from "../lib/blog";

const banned = [
  "in today's", "in the world of", "let's dive", "dive in", "delve", "when it comes to", "it's important to note",
  "in conclusion", "in summary", "game-changer", "game-changing", "revolutionary", "revolutionize", "cutting-edge",
  "seamless", "robust", "leverage", "unlock", "supercharge", "elevate", "truly", "landscape", "navigate the",
  "picture this", "imagine a", "have you ever wondered", "what if i told you", "needless to say", "at the end of the day",
];
const notJust = [/\bnot just\b[^.]*,\s*(it'?s|but)\b/i, /\bisn'?t about\b[^.]*\bit'?s about\b/i, /\bit'?s not about\b/i];

const strip = (s: string) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const prose = (p: Post) => [
  p.title, p.dek, ...(p.takeaways ?? []),
  ...p.body.flatMap((b) => ("items" in b && b.items ? b.items : "c" in b && b.c ? [b.c] : [])),
  ...p.faqs.flatMap((f) => [f.q, f.a]),
].map(strip);

function check(p: Post) {
  const fail: string[] = [];
  const warn: string[] = [];
  const text = prose(p);

  // H11, H12, H13: voice
  text.forEach((t) => t.includes("—") && fail.push(`H11 em dash: "${t.slice(0, 70)}…"`));
  for (const t of text) for (const r of notJust) if (r.test(t)) fail.push(`H12 "not just X, it's Y": "${t.slice(0, 70)}…"`);
  for (const t of text) for (const b of banned) if (t.toLowerCase().includes(b)) fail.push(`H13 banned phrase "${b}": "${t.slice(0, 60)}…"`);

  // H7: the answer before the first H2, inside the first ~190 words
  const firstH2 = p.body.findIndex((b) => b.t === "h2");
  const intro = p.body.slice(0, firstH2 < 0 ? p.body.length : firstH2);
  const introWords = strip(intro.map((b) => ("c" in b && b.c ? b.c : "items" in b && b.items ? b.items.join(" ") : "")).join(" ")).split(" ").filter(Boolean).length;
  if (introWords === 0) fail.push("H7 no answer before the first H2");
  if (introWords > 190) warn.push(`H7 ${introWords} words before the first H2 (answer should land within ~190)`);

  // H9 / W4: FAQs
  if (p.faqs.length === 0) fail.push("H9 no FAQs");
  else if (p.faqs.length < 4) warn.push(`W4 only ${p.faqs.length} FAQs`);

  // H19: one very short paragraph at most
  const tiny = p.body.filter((b) => b.t === "p" && strip(b.c).split(" ").length < 5).length;
  if (tiny > 1) fail.push(`H19 ${tiny} paragraphs under five words`);

  // H20 / H21: source types and practitioner voice
  const types = new Set(p.sources.filter((s) => s.type !== "ours").map((s) => s.type));
  if (types.size < 3) fail.push(`H20 ${types.size} independent source types (need 3, "ours" excluded)`);
  const forum = p.sources.filter((s) => s.type === "forum").length;
  if (forum < 2) fail.push(`H21 ${forum} forum threads cited (need 2)`);
  p.sources.forEach((s) => !/^\d{4}-\d{2}-\d{2}$/.test(s.read) && fail.push(`H1 source without a read-date: ${s.url}`));

  // H26: freshness
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.updated)) fail.push("H26 missing updated date");

  // House rules (README O4)
  if (!p.body.some((b) => b.t === "cta")) fail.push("O4 no mid-article audit CTA block");
  if (!p.cta?.mid || !p.cta?.title || !p.cta?.button) fail.push("O4 missing post-specific CTA copy");
  [p.cta?.mid, p.cta?.title, p.cta?.text].filter(Boolean).forEach((t) => t!.includes("—") && fail.push("H11 em dash in CTA copy"));
  if (!p.body.some((b) => b.t === "img" || b.t === "table")) warn.push("O4 no proof element (image or table)");

  // SEO warnings
  const q = p.targetQuery.toLowerCase();
  if (!p.title.toLowerCase().includes(q.split(" ").slice(0, 3).join(" "))) warn.push("W11 target query not visible in title");
  if (p.title.length > 70) warn.push(`title is ${p.title.length} chars (aim for ≤70)`);
  if (p.description.length < 110 || p.description.length > 160) warn.push(`description is ${p.description.length} chars (aim 110–160)`);
  const internal = JSON.stringify(p.body).match(/href=\\"\//g)?.length ?? 0;
  if (internal < 2) warn.push(`${internal} internal links`);

  return { fail, warn };
}

const only = process.argv[2];
let failed = 0;
for (const p of posts.filter((x) => !only || x.slug === only)) {
  const { fail, warn } = check(p);
  failed += fail.length ? 1 : 0;
  console.log(`\n${fail.length ? "FAIL" : "PASS"}  ${p.slug}  (${words(p)} words, ${p.status})`);
  fail.forEach((f) => console.log(`  ✗ ${f}`));
  warn.forEach((w) => console.log(`  ! ${w}`));
}
if (!posts.length) console.log("No posts yet.");
process.exit(failed ? 1 : 0);
