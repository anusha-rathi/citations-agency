import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { buckets, fmtDate, livePosts, readMinutes } from "@/lib/blog";
import { wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Blog",
  description: "How AI search picks its sources, how to get cited by ChatGPT and AI Overviews, and how Reddit fits in. Written from client work and our own data.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = livePosts();
  return (
    <>
      <Nav />
      <main className={`${wrap} py-14 lg:py-20`}>
        <p className="font-mono text-xs tracking-wider text-muted">blog</p>
        <h1 className="mt-3 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          How AI search picks its sources, and how to become one.
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Notes from client work and our own data on AI citations, AEO, GEO and Reddit.
        </p>

        {posts.length === 0 ? (
          <p className="mt-14 border-t border-line pt-8 text-muted">The first posts are being written.</p>
        ) : (
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {posts.map((p) => (
              <li key={p.slug}>
                <a href={`/blog/${p.slug}`} className="group grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <span className="font-mono text-xs leading-6 text-muted">
                    {buckets[p.bucket]}
                    {p.status === "draft" && <span className="ml-2 rounded bg-accent px-1.5 text-ink">draft</span>}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">{p.title}</span>
                    <span className="mt-1.5 block leading-relaxed text-muted">{p.dek}</span>
                    <span className="mt-2 block font-mono text-[11px] text-muted">
                      Updated {fmtDate(p.updated)} · {readMinutes(p)} min read
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
