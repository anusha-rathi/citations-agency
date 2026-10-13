import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { proofs } from "@/lib/proof";
import { wrap } from "@/lib/styles";
import { Head, Reveal } from "./ui";

// Renders nothing until real evidence is added to lib/proof.ts.
export function ProofOfWork() {
  if (!proofs.length) return null;
  return (
    <section id="proof" className={`${wrap} py-24 lg:py-32`}>
      <Head eyebrow="Proof" title="What the work looks like." />
      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {proofs.slice(0, 3).map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-4">
                <a href={p.image} target="_blank" rel="noopener noreferrer" aria-label={`Open screenshot: ${p.title}`} className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-contain" />
                </a>
                <div className="flex flex-1 flex-col p-2 pt-5">
                  <p className="w-fit rounded-full border border-ink/15 px-2.5 py-1 text-xs font-medium">{p.category}</p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.context}</p>
                  {p.metrics && (
                    <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <dd className="font-display text-xl font-bold">{m.value}</dd>
                          <dt className="text-xs text-muted">{m.label}</dt>
                        </div>
                      ))}
                    </dl>
                  )}
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4">
                      Open the original
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
