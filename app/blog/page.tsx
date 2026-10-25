import type { Metadata } from "next";
import { BlogGrid, type Card } from "@/components/blog-grid";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { buckets, initials, livePosts, readMinutes } from "@/lib/blog";
import { wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Blog",
  description: "How AI search picks its sources, how to get cited by ChatGPT and AI Overviews, and how Reddit fits in. Practical playbooks from citations.agency.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = livePosts();
  const cards: Card[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    dek: p.dek,
    bucket: p.bucket,
    label: buckets[p.bucket],
    author: p.author,
    initials: initials(p.author),
    minutes: readMinutes(p),
    draft: p.status === "draft",
  }));
  const topics = (Object.keys(buckets) as (keyof typeof buckets)[])
    .map((key) => ({ key, label: buckets[key], count: posts.filter((p) => p.bucket === key).length }))
    .filter((b) => b.count > 0);

  return (
    <>
      <Nav />
      <main className={`${wrap} py-14 lg:py-20`}>
        <p className="font-mono text-xs tracking-wider text-muted">blog</p>
        <h1 className="mt-3 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          How AI search picks its sources, and how to become one.
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Practical playbooks on AI citations, AEO, GEO and Reddit, from the team that does the work.
        </p>
        {cards.length === 0 ? (
          <p className="mt-14 border-t border-line pt-8 text-muted">The first posts are being written.</p>
        ) : (
          <BlogGrid cards={cards} buckets={topics} />
        )}
      </main>
      <Footer />
    </>
  );
}
