"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { evidence, type Evidence } from "@/lib/evidence";
import { wrap } from "@/lib/styles";
import { Head } from "./ui";

const typeTone = { "Linked citation": "bg-lav", "Brand mention": "bg-peach", "Search result": "bg-paper" };

function Shot({ e, onOpen, dupe }: { e: Evidence; onOpen: () => void; dupe?: boolean }) {
  return (
    <li className={`shrink-0 snap-start ${dupe ? "marquee-dupe max-md:hidden" : ""}`} aria-hidden={dupe || undefined}>
      <button
        type="button"
        tabIndex={dupe ? -1 : undefined}
        onClick={onOpen}
        className="group block rounded-2xl border border-line bg-white p-2.5 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
      >
        <span className="block h-44 overflow-hidden rounded-xl bg-paper sm:h-56" style={{ aspectRatio: `${Math.max(e.width / e.height, 1.6)}` }}>
          <Image src={e.src} alt={dupe ? "" : `${e.platform}: ${e.title}`} width={e.width} height={e.height} sizes="480px" className="size-full object-cover object-left-top" />
        </span>
        <span className="flex items-center gap-2 px-1 pb-0.5 pt-2.5 text-xs">
          <span className="font-semibold">{e.platform}</span>
          <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${typeTone[e.type]}`}>{e.type}</span>
        </span>
      </button>
    </li>
  );
}

export function Citations() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  const e = evidence[i];
  const open = (n: number) => {
    setI(n);
    dialog.current?.showModal();
  };
  const step = (d: number) => setI((v) => (v + d + evidence.length) % evidence.length);

  return (
    <section id="citations" className="overflow-x-clip py-16 lg:py-24">
      <div className={wrap}>
        <Head eyebrow="ai citations in action" title="Here’s what being cited actually looks like.">
          Different questions. Different AI experiences. Real sources, mentions, and citations worth paying attention to.
        </Head>
      </div>

      <div className="marquee-wrap mt-10 overflow-x-auto pb-4 md:overflow-hidden">
        <ul className="flex w-max snap-x snap-mandatory gap-4 px-5 md:animate-[marquee_70s_linear_infinite] md:snap-none md:hover:[animation-play-state:paused] md:has-focus-visible:[animation-play-state:paused]">
          {evidence.map((ev, n) => (
            <Shot key={ev.src} e={ev} onOpen={() => open(n)} />
          ))}
          {evidence.map((ev, n) => (
            <Shot key={`${ev.src}-dupe`} e={ev} onOpen={() => open(n)} dupe />
          ))}
        </ul>
      </div>
      <p className={`${wrap} mt-3 text-xs text-muted`}>
        Screenshots from analytics dashboards. Select one to enlarge. Mentions, linked citations and search results are
        different outcomes.
      </p>

      <dialog
        ref={dialog}
        aria-label={`${e.platform}: ${e.title}`}
        onClick={(ev) => ev.target === dialog.current && dialog.current.close()}
        onKeyDown={(ev) => {
          if (ev.key === "ArrowRight") step(1);
          if (ev.key === "ArrowLeft") step(-1);
        }}
        className="m-auto w-[min(94vw,68rem)] rounded-3xl bg-paper p-0 text-ink outline-none backdrop:bg-ink/75 backdrop:backdrop-blur-sm"
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold">{e.platform}</span>
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${typeTone[e.type]}`}>{e.type}</span>
                <span className="font-mono text-muted">{i + 1} / {evidence.length}</span>
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight">{e.title}</h3>
            </div>
            <button type="button" aria-label="Close" onClick={() => dialog.current?.close()} className="grid size-11 shrink-0 place-items-center rounded-[10px] border border-ink/15 hover:border-ink">
              <X aria-hidden className="size-4" />
            </button>
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-white">
            <Image key={e.src} src={e.src} alt={`${e.platform}: ${e.title}`} width={e.width} height={e.height} sizes="(min-width: 1100px) 1050px, 94vw" className="h-auto w-full" />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              {e.context}
              {e.prompt && <> Prompt: “{e.prompt}”.</>}
              {e.captured && <> Captured {e.captured}.</>}
            </p>
            <div className="flex items-center gap-2">
              {e.url && (
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="mr-2 inline-flex items-center gap-1 text-sm font-semibold underline decoration-accent underline-offset-4">
                  Source <ArrowUpRight aria-hidden className="size-4" />
                </a>
              )}
              <button type="button" aria-label="Previous screenshot" onClick={() => step(-1)} className="grid size-11 place-items-center rounded-[10px] border border-ink/15 hover:border-ink">
                <ArrowLeft aria-hidden className="size-4" />
              </button>
              <button type="button" aria-label="Next screenshot" onClick={() => step(1)} className="grid size-11 place-items-center rounded-[10px] border border-ink/15 hover:border-ink">
                <ArrowRight aria-hidden className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
