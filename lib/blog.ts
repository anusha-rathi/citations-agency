// Blog data model. Posts live one per file in content/blog/ and are listed in content/blog/index.ts.
// Writing rules: docs/blog/README.md.
import { posts } from "../content/blog";

export const buckets = {
  basics: "AI Search Basics",
  cited: "Get Cited",
  technical: "Technical",
  reddit: "Reddit Marketing",
  research: "Research & Teardowns",
  industry: "Industry Playbooks",
  buying: "Buying Guides",
} as const;

export const bucketIntro: Record<keyof typeof buckets, string> = {
  basics: "How AI search works, and what it changes about SEO.",
  cited: "Getting named and cited by ChatGPT, Perplexity and AI Overviews, and tracking it.",
  technical: "Crawlers, robots.txt, rendering and the files that do and don’t matter.",
  reddit: "Posting, commenting and growing on Reddit without getting removed.",
  research: "Original data on what AI search actually cites.",
  industry: "Playbooks for specific categories.",
  buying: "Pricing, agencies and tools, for when you’re ready to buy.",
};

export type Style = "RS Playbook" | "RS Answer" | "Data post" | "Verdict post" | "Comparison";
export type SourceType = "vendor" | "forum" | "primary" | "platform" | "press" | "reviews" | "ours";

/** Prose strings may contain inline HTML (<a>, <strong>, <em>, <code>). */
export type Block =
  | { t: "h2"; c: string; id?: string }
  | { t: "h3"; c: string }
  | { t: "p"; c: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][]; caption?: string }
  | { t: "callout"; tone: "tldr" | "answer" | "short" | "dont" | "note"; title?: string; c?: string; items?: string[] }
  | { t: "img"; src: string; alt: string; width: number; height: number; caption?: string }
  | { t: "quote"; c: string; cite: string; href?: string }
  /** Copyable text: robots.txt rules, templates, example messages. Rendered verbatim. */
  | { t: "code"; c: string; label?: string }
  | { t: "cta" };

export type Post = {
  slug: string;
  /** Tracker number, e.g. "2.1". */
  tracker: string;
  bucket: keyof typeof buckets;
  style: Style;
  /** <title> and visible h1: the query plus the payoff. */
  title: string;
  /** One-sentence standfirst under the h1. */
  dek: string;
  description: string;
  targetQuery: string;
  status: "draft" | "published";
  published: string;
  updated: string;
  author: string;
  takeaways?: string[];
  body: Block[];
  faqs: { q: string; a: string }[];
  /** Internal research record only. Never rendered: sources are linked inline in the copy (README O0). */
  sources: { title: string; url: string; type: SourceType; read: string }[];
  related?: string[];
  /** Problem-specific CTA copy. `mid` sits in the body's { t: "cta" } block; title/text/button make the end box. */
  cta: { mid: string; title: string; text: string; button: string };
};

const strip = (s: string) => s.replace(/<[^>]+>/g, " ");

export function words(p: Post) {
  const text = [p.dek, ...(p.takeaways ?? []), ...p.faqs.flatMap((f) => [f.q, f.a])];
  for (const b of p.body) {
    if ("c" in b && b.c) text.push(b.c);
    if ("items" in b && b.items) text.push(...b.items);
    if (b.t === "table") text.push(...b.head, ...b.rows.flat());
  }
  return strip(text.join(" ")).split(/\s+/).filter(Boolean).length;
}

export const readMinutes = (p: Post) => Math.max(1, Math.round(words(p) / 230));

// Drafts render on localhost only (docs/blog/README.md, O7).
const showDrafts = process.env.NODE_ENV === "development";

export const livePosts = () =>
  posts.filter((p) => p.status === "published" || showDrafts).sort((a, b) => b.published.localeCompare(a.published));

export const getPost = (slug: string) => livePosts().find((p) => p.slug === slug);

export const slugify = (s: string) => strip(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const initials = (name: string) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
