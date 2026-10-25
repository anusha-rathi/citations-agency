import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { bucketIntro, buckets, fmtDate, initials, livePosts, readMinutes, type Post } from "@/lib/blog";
import { wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Blog",
  description: "How AI search picks its sources, how to get cited by ChatGPT and AI Overviews, and how Reddit fits in. Written from client work and our own data.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = livePosts();
  // Buckets in their defined order, only those with posts.
  const groups = (Object.keys(buckets) as (keyof typeof buckets)[])
    .map((k) => [k, posts.filter((p) => p.bucket === k)] as [keyof typeof buckets, Post[]])
    .filter(([, list]) => list.length > 0);
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
          <>
            <nav aria-label="Categories" className="mt-10 flex flex-wrap gap-2">
              {groups.map(([key, list]) => (
                <a key={key} href={`#${key}`} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium shadow-soft transition-colors hover:border-ink">
                  {buckets[key]} <span className="text-muted">{list.length}</span>
                </a>
              ))}
            </nav>
            {groups.map(([key, list]) => (
              <section key={key} id={key} className="mt-14 scroll-mt-24">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
                  <h2 className="font-display text-2xl font-bold tracking-tight">{buckets[key]}</h2>
                  <p className="text-sm text-muted">{bucketIntro[key]}</p>
                </div>
                <ul className="mt-5 grid gap-4 md:grid-cols-2">
                  {list.map((p) => (
                    <li key={p.slug}>
                      <a href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition-shadow hover:shadow-lift">
                        {p.status === "draft" && <span className="mb-2 w-fit rounded bg-accent px-1.5 font-mono text-xs text-ink">draft</span>}
                        <span className="font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">{p.title}</span>
                        <span className="mt-2 text-sm leading-relaxed text-muted">{p.dek}</span>
                        <span className="mt-auto flex items-center gap-2 pt-4 text-xs text-muted">
                          <span aria-hidden className="grid size-6 place-items-center rounded-full bg-ink text-[10px] font-bold text-paper">{initials(p.author)}</span>
                          {p.author} · {readMinutes(p)} min read · {fmtDate(p.updated)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
