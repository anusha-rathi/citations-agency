import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { AuditCta } from "@/components/ui";
import { buckets, fmtDate, getPost, initials, livePosts, readMinutes, slugify, type Block, type Post } from "@/lib/blog";
import { bookingUrl, contactEmail } from "@/lib/site";
import { wrap } from "@/lib/styles";

// Cache Components needs at least one param; "_" renders a 404 until the first post exists.
export const generateStaticParams = () => {
  const slugs = livePosts().map((p) => ({ slug: p.slug }));
  return slugs.length ? slugs : [{ slug: "_" }];
};

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.description, url: `/blog/${p.slug}`, publishedTime: p.published, modifiedTime: p.updated },
    robots: p.status === "draft" ? { index: false } : undefined,
  };
}

const html = (c: string) => ({ dangerouslySetInnerHTML: { __html: c } });

const tone = {
  tldr: ["TL;DR", "bg-peach/60 border-accent/25"],
  answer: ["Quick answer", "bg-peach/60 border-accent/25"],
  short: ["The short version", "bg-lav/60 border-violet/25"],
  dont: ["Don’t do this", "bg-white border-accent/40"],
  note: ["", "bg-white border-line"],
} as const;

function Render({ b, p }: { b: Block; p: Post }) {
  switch (b.t) {
    case "h2":
      return <h2 id={b.id ?? slugify(b.c)} {...html(b.c)} />;
    case "h3":
      return <h3 {...html(b.c)} />;
    case "p":
      return <p {...html(b.c)} />;
    case "ul":
    case "ol": {
      const L = b.t;
      return <L>{b.items.map((it, i) => <li key={i} {...html(it)} />)}</L>;
    }
    case "table":
      return (
        <div className="not-prose -mx-1 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-[15px] leading-snug">
            {b.caption && <caption className="mb-2 text-left font-mono text-[11px] text-muted" {...html(b.caption)} />}
            <thead>
              <tr>{b.head.map((h, i) => <th key={i} className="border-b-2 border-ink/80 px-3 py-2 font-semibold text-ink" {...html(h)} />)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className="border-b border-line">
                  {r.map((c, j) => <td key={j} className="px-3 py-2.5 align-top" {...html(c)} />)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout": {
      const [label, cls] = tone[b.tone];
      return (
        <aside className={`rounded-2xl border p-5 text-[16px] ${cls}`}>
          {(b.title ?? label) && <p className="font-display text-base font-bold text-ink">{b.title ?? label}</p>}
          {b.c && <p className="mt-2" {...html(b.c)} />}
          {b.items && <ul className="mt-2">{b.items.map((it, i) => <li key={i} {...html(it)} />)}</ul>}
        </aside>
      );
    }
    case "img":
      return (
        <figure>
          <Image src={b.src} alt={b.alt} width={b.width} height={b.height} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full rounded-xl border border-line" />
          {b.caption && <figcaption className="mt-2 text-sm text-muted" {...html(b.caption)} />}
        </figure>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-5">
          <p className="italic" {...html(b.c)} />
          <cite className="mt-1 block text-sm not-italic text-muted">{b.href ? <a href={b.href} target="_blank" rel="noopener noreferrer">{b.cite}</a> : b.cite}</cite>
        </blockquote>
      );
    case "code":
      return (
        <figure className="not-prose">
          {b.label && <figcaption className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">{b.label}</figcaption>}
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-line bg-white p-4 font-mono text-[13.5px] leading-relaxed text-ink">{b.c}</pre>
        </figure>
      );
    case "cta":
      return (
        <aside className="flex flex-col gap-3 rounded-2xl bg-lav/60 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[16px] text-ink" {...html(p.cta.mid)} />
          <AuditCta variant="ink" className="shrink-0">{p.cta.button}</AuditCta>
        </aside>
      );
  }
}

const jsonLd = (p: Post) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.published,
      dateModified: p.updated,
      author: { "@type": "Person", name: p.author },
      publisher: { "@type": "Organization", name: "citations.agency", url: "https://citations.agency" },
      mainEntityOfPage: `https://citations.agency/blog/${p.slug}`,
    },
    { "@type": "FAQPage", mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
});

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const related = (p.related ?? []).map((s) => getPost(s)).filter((x): x is Post => !!x);

  const toc = p.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2");

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(p)).replace(/</g, "\\u003c") }} />
      <main className={`${wrap} grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16 lg:py-14`}>
        <article className="min-w-0 max-w-[720px]">
          <p className="flex items-center gap-1.5 text-sm text-muted">
            <Link href="/blog" className="hover:text-ink">Blog</Link>
            <ChevronRight aria-hidden className="size-3.5" />
            <span className="font-medium text-ink">{buckets[p.bucket]}</span>
            {p.status === "draft" && <span className="ml-2 rounded bg-accent px-1.5 font-mono text-xs text-ink">draft</span>}
          </p>
          <h1 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em]">{p.title}</h1>
          <div className="mt-6 flex items-center gap-3">
            <span aria-hidden className="grid size-10 place-items-center rounded-full bg-ink font-display text-sm font-bold text-paper">{initials(p.author)}</span>
            <span className="text-sm leading-tight">
              <span className="block font-semibold">{p.author}</span>
              <span className="text-muted">Updated {fmtDate(p.updated)} · {readMinutes(p)} min read</span>
            </span>
          </div>

          {p.takeaways && (
            <aside className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-soft">
              <p className="font-display font-bold">Key takeaways</p>
              <ul className="post mt-2 !text-[16px]">{p.takeaways.map((t, i) => <li key={i} {...html(t)} />)}</ul>
            </aside>
          )}

          <div className="post mt-8">
            {p.body.map((b, i) => <Render key={i} b={b} p={p} />)}
          </div>

          {p.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="font-display text-[1.6rem] font-bold tracking-tight">FAQ</h2>
              <div className="mt-4">
                {p.faqs.map((f) => (
                  <details key={f.q} name="post-faq" className="group border-t border-line last:border-b">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[17px] font-semibold tracking-tight hover:text-accent [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <Plus aria-hidden className="size-4 shrink-0 transition-transform group-open:rotate-45" />
                    </summary>
                    <p className="pb-5 leading-relaxed text-muted" {...html(f.a)} />
                  </details>
                ))}
              </div>
            </section>
          )}

          <aside className="mt-14 rounded-2xl bg-[linear-gradient(135deg,#FFE7DE,#F8F7F4)] p-6 text-center sm:p-8">
            <p className="font-display text-xl font-bold tracking-tight">{p.cta.title}</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted" {...html(p.cta.text)} />
            <AuditCta className="mt-5">{p.cta.button}</AuditCta>
            <p className="mt-3 text-sm text-muted">
              or <a href={bookingUrl} target="_blank" rel="noopener" className="font-medium text-ink underline decoration-accent underline-offset-2">book a 30-min call</a>, or email <a href={`mailto:${contactEmail}`} className="font-medium text-ink underline decoration-accent underline-offset-2">{contactEmail}</a>
            </p>
          </aside>

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="font-display text-xl font-bold tracking-tight">Keep learning</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="block h-full rounded-xl border border-line bg-white p-4 shadow-soft transition-shadow hover:shadow-lift">
                      <span className="font-mono text-[11px] text-muted">{buckets[r.bucket]}</span>
                      <span className="mt-1 block text-sm font-semibold leading-snug">{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <nav aria-label="On this page">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">On this page</p>
              <ul className="mt-3 space-y-2.5 border-l border-line pl-4 text-[13px] leading-snug">
                {toc.map((h) => (
                  <li key={h.c}>
                    <a href={`#${h.id ?? slugify(h.c)}`} className="text-ink/70 transition-colors hover:text-ink" {...html(h.c)} />
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rounded-2xl border border-line bg-white p-4 shadow-soft">
              <p className="font-display font-bold">citations<span className="text-accent">.agency</span></p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted" {...html(p.cta.mid)} />
              <AuditCta variant="ink" className="mt-3 w-full !min-h-10 text-[13px]">{p.cta.button}</AuditCta>
              <a href={`mailto:${contactEmail}`} className="mt-2.5 block text-center text-xs text-muted hover:text-ink">{contactEmail}</a>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
}
