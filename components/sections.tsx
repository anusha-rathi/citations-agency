import { Check, Plus } from "lucide-react";
import { custom, faqs, growth } from "@/lib/content";
import { wrap } from "@/lib/styles";
import { AuditDialog } from "./contact";
import { AuditCta, Head, Reveal } from "./ui";

/* ── Pricing + audit prompt ─────────────────────────────────────────── */

const plans = [
  {
    open: "Ready-made for you.",
    name: "Growth Plan",
    price: <><span className="text-sm font-normal text-muted">Starting at</span> $2,000<span className="text-base font-normal text-muted">/month</span></>,
    items: growth,
    cta: "Let’s get started",
    surface: "bg-[radial-gradient(90%_70%_at_100%_0%,#FFE7DE_0%,#FFFDFA_60%)]",
  },
  {
    open: "Built around you.",
    name: "Custom Plan",
    price: <>Custom pricing</>,
    text: "Not sure what your brand needs yet? That’s exactly what we’ll figure out together. We’ll build a program around your goals, category, and opportunities.",
    items: custom,
    cta: "Let’s figure it out",
    surface: "bg-[radial-gradient(90%_70%_at_100%_0%,#EEE9FF_0%,#FFFDFA_60%)]",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className={`${wrap} py-16 lg:py-20`}>
      <Reveal className="max-w-2xl">
        <p className="font-mono text-xs tracking-wider text-muted">pricing</p>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">We have two plans.</h2>
        <p className="mt-3 leading-relaxed text-muted">
          It’s a new space, and you might not know exactly what you need yet. We won’t pretend to know either until we
          understand your business. Let’s figure it out together.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <article className={`flex h-full flex-col rounded-[18px] border border-line p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-7 ${p.surface}`}>
              <p className="font-mono text-xs tracking-wider text-muted">{p.open}</p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{p.name}</h3>
              <p className="mt-3 font-display text-[2rem] font-bold leading-none tracking-[-0.03em]">{p.price}</p>
              {p.text && <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>}
              <ul className="mb-7 mt-5 space-y-2.5 border-t border-ink/10 pt-5 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} />
                    {it}
                  </li>
                ))}
              </ul>
              <AuditCta variant={i === 0 ? "accent" : "ink"} className="mt-auto w-full">
                {p.cta}
              </AuditCta>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 flex flex-col gap-4 rounded-2xl bg-lav/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">Not sure where to start? Good. That’s what the audit is for.</p>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
            You might not know which prompts, conversations, or search results matter most for your brand yet. We won’t
            pretend to know either until we look.
          </p>
        </div>
        <AuditCta variant="ink" className="shrink-0">
          Get a Free AI Visibility Audit
        </AuditCta>
      </Reveal>
    </section>
  );
}

/* ── FAQ ────────────────────────────────────────────────────────────── */

export function Faq() {
  return (
    <section id="faq" className={`${wrap} grid gap-8 py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-14 lg:py-20`}>
      <div className="lg:sticky lg:top-24 lg:self-start">
        <Head eyebrow="faqs" title="Straight answers." />
      </div>
      <Reveal>
        {faqs.map((f) => (
          <details key={f.q} name="faq" className="group border-t border-line last:border-b">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[17px] font-semibold tracking-tight transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus aria-hidden className="size-4 shrink-0 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="max-w-2xl pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Closing CTA + footer ───────────────────────────────────────────── */

export async function Closing() {
  "use cache"; // footer year is read from the clock
  return (
    <>
      <section id="contact" className="bg-[linear-gradient(180deg,#F8F7F4_0%,#FFE7DE_100%)]">
        <Reveal className={`${wrap} py-20 text-center lg:py-24`}>
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Let’s see where your brand should show up.
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted">
            A few questions, a little research, and a clearer picture of what comes next.
          </p>
          <AuditCta className="mt-7">Get a Free AI Visibility Audit</AuditCta>
        </Reveal>
      </section>
      <footer className="bg-peach">
        <div className={`${wrap} flex flex-col gap-3 border-t border-ink/10 py-6 text-sm sm:flex-row sm:items-center sm:justify-between`}>
          <a href="#top" className="font-display font-bold tracking-tight">
            citations<span className="text-accent">.agency</span>
          </a>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-ink/60">
            <a href="#contact" className="hover:text-ink">contact</a>
            <a href="/privacy" className="hover:text-ink">privacy</a>
            <span>© {new Date().getFullYear()}</span>
          </nav>
        </div>
      </footer>
      <AuditDialog />
    </>
  );
}
