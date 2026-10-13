"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, ImageIcon, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { proofFields, proofTypes, proofs, type Proof, type ProofType } from "@/lib/proof";
import { wrap } from "@/lib/styles";
import { Head, Reveal, Swap, Tabs } from "./ui";

const resultTone = { "Search ranking": "bg-paper", "Linked citation": "bg-lav", "Brand mention": "bg-accent/15" };

function Shot({ p, large }: { p: Proof; large?: boolean }) {
  if (p.image)
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-paper ${large ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image src={p.image} alt={p.title} fill sizes={large ? "(min-width: 1024px) 60vw, 100vw" : "420px"} className="object-contain" />
      </div>
    );
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ink/25 text-muted ${large ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]"}`}
      style={{ background: "repeating-linear-gradient(135deg, transparent 0 14px, rgba(23,23,23,0.035) 14px 28px)" }}
    >
      <ImageIcon aria-hidden className="size-6" />
      <span className="font-mono text-[11px] uppercase tracking-widest">Screenshot to be added</span>
    </div>
  );
}

const Tags = ({ p }: { p: Proof }) => (
  <p className="flex flex-wrap items-center gap-1.5 text-xs">
    <span className="rounded-full border border-ink/15 px-2.5 py-1 font-medium">{p.category}</span>
    {p.result && <span className={`rounded-full px-2.5 py-1 font-medium ${resultTone[p.result]}`}>{p.result}</span>}
    {!p.image && <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-paper">Placeholder</span>}
  </p>
);

export function ProofOfWork() {
  const [type, setType] = useState<ProofType>(proofTypes[0]);
  const [openItem, setOpenItem] = useState<Proof | null>(null);
  const rail = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const items = proofs.filter((p) => p.type === type);
  const pending = proofs.some((p) => !p.image);

  const scroll = (dir: number) => rail.current?.scrollBy({ left: dir * 440, behavior: "smooth" });
  const show = (p: Proof) => {
    setOpenItem(p);
    dialog.current?.showModal();
  };

  return (
    <section id="proof" className="overflow-x-clip border-y border-line bg-white/50">
      <div className={`${wrap} py-24 lg:py-32`}>
        <Head
          eyebrow="Proof of work"
          title={
            <>
              Don’t take our word for it. <span className="text-accent">Read the threads.</span>
            </>
          }
        >
          The content, conversations, and opportunities behind the work.
        </Head>

        <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <Tabs label="Evidence type" items={proofTypes} value={type} onChange={setType} />
          <div className="flex gap-2">
            {[-1, 1].map((d) => (
              <button
                key={d}
                type="button"
                aria-label={d < 0 ? "Scroll back" : "Scroll forward"}
                onClick={() => scroll(d)}
                className="grid size-10 place-items-center rounded-full border border-ink/15 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                {d < 0 ? <ArrowLeft aria-hidden className="size-4" /> : <ArrowRight aria-hidden className="size-4" />}
              </button>
            ))}
          </div>
        </Reveal>

        {type === "Search & AI Citations" && (
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-ink">A brand mention</strong> is your brand named in an answer.{" "}
            <strong className="font-semibold text-ink">A linked citation</strong> is a source URL shown with the answer. They
            are different results, and we track them separately.
          </p>
        )}

        <Swap k={type} className="mt-8">
          <ul ref={rail} className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8">
            {items.map((p) => (
              <li key={p.title} className="w-[min(84vw,26rem)] shrink-0 snap-start">
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-ink">
                  <Shot p={p} />
                  <div className="flex flex-1 flex-col p-2 pt-5">
                    <Tags p={p} />
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
                    <button type="button" onClick={() => show(p)} className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold transition-colors hover:text-accent">
                      <Maximize2 aria-hidden className="size-4" />
                      View details
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Swap>

        {pending && (
          <p className="mt-4 flex items-start gap-2 text-sm text-muted">
            <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
            Evidence is being added. Cards marked “Placeholder” are empty slots, not campaign results.
          </p>
        )}
      </div>

      <dialog
        ref={dialog}
        aria-label={openItem?.title}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto w-[min(94vw,60rem)] rounded-3xl bg-paper p-0 text-ink outline-none backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
      >
        {openItem && (
          <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
            <Shot p={openItem} large />
            <div className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <Tags p={openItem} />
                <button type="button" aria-label="Close" onClick={() => dialog.current?.close()} className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 hover:border-ink">
                  <X aria-hidden className="size-4" />
                </button>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight">{openItem.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{openItem.context}</p>
              <dl className="mt-6 space-y-4 border-t border-line pt-5 text-sm">
                {(openItem.notes ?? proofFields[openItem.type].map((label) => ({ label, text: "" }))).map((n) => (
                  <div key={n.label}>
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">{n.label}</dt>
                    <dd className="mt-1 leading-relaxed">{n.text || <span className="text-muted">To be added</span>}</dd>
                  </div>
                ))}
              </dl>
              {openItem.url && (
                <a href={openItem.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4">
                  Open the source
                  <ArrowUpRight aria-hidden className="size-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
