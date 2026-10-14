import { Check, Plus } from "lucide-react";
import { capabilities, custom, faqs, growth } from "@/lib/content";
import { card, wrap } from "@/lib/styles";
import { AuditDialog } from "./contact";
import { AuditCta, Head, Reveal } from "./ui";

/* ── Capabilities ───────────────────────────────────────────────────── */

export function Capabilities() {
  return (
    <section className={`${wrap} py-16 lg:py-20`}>
      <Head eyebrow="capabilities" title="Research-led. Content-powered. Wherever it matters.">
        From Reddit conversations to search visibility, our capabilities are built around the opportunities your research
        reveals.
      </Head>
      <Reveal className={`mt-10 overflow-hidden ${card}`}>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([t, d], n) => (
            <li key={t} className="group border-line p-6 transition-colors hover:bg-paper/70 max-lg:[&:nth-child(n+2)]:border-t sm:max-lg:[&:nth-child(2)]:border-t-0 sm:max-lg:[&:nth-child(even)]:border-l lg:[&:nth-child(n+4)]:border-t lg:[&:not(:nth-child(3n+1))]:border-l">
              <p className="font-mono text-xs text-accent">0{n + 1}</p>
              <h3 className="mt-2 font-display text-lg font-bold tracking-tight">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ── Pricing + audit prompt ─────────────────────────────────────────── */

export function Pricing() {
  return (
    <section id="pricing" className={`${wrap} py-16 lg:py-20`}>
      <Head eyebrow="pricing" title="Good work. Clear scope.">
        Start with a focused program, or build something around your specific visibility goals.
      </Head>
      <div className="mt-10 grid gap-4 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <article className="flex h-full flex-col rounded-3xl border border-line bg-[radial-gradient(110%_90%_at_100%_0%,#FFE7DE_0%,#FFFFFF_55%)] p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">Growth</h3>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
              <span className="text-sm text-muted">Starting at</span>
              <span className="font-display text-5xl font-bold tracking-[-0.04em]">{growth.price}</span>
              <span className="text-sm text-muted">/ month</span>
            </p>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              Prompt-backed content, Reddit execution, and visibility tracking. Together in one ongoing program.
            </p>
            <ul className="mt-6 grid gap-x-6 gap-y-2.5 border-t border-line pt-6 text-sm sm:grid-cols-2">
              {growth.items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} />
                  {it}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              Post and comment volumes are planned, and depend on community rules and whether the content suits each
              community.
            </p>
            <AuditCta className="mt-6 w-full sm:w-fit">Let’s get started</AuditCta>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className={`flex h-full flex-col p-6 transition-shadow duration-300 hover:shadow-lift sm:p-8 ${card} !rounded-3xl`}>
            <p className="font-mono text-xs tracking-wider text-muted">built around you.</p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight">Need more? We’ll build the right plan.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Some brands need broader visibility, different channels, more content, or deeper research. We’ll shape the
              scope around what makes sense for you.
            </p>
            <ul className="mb-6 mt-5 space-y-2 text-sm">
              {custom.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-ink/40" />
                  {it}
                </li>
              ))}
            </ul>
            <AuditCta variant="outline" className="mt-auto w-full sm:w-fit">
              Let’s talk
            </AuditCta>
          </article>
        </Reveal>
      </div>
      <p className="mt-4 text-xs text-muted">
        No guaranteed citations, rankings, engagement or sales. Moderators and third-party platforms decide what appears.
      </p>

      <Reveal className="mt-8 flex flex-col gap-4 rounded-2xl bg-lav/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">Not sure where to start? Good. That’s what the audit is for.</p>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
            You might not know which prompts, conversations, or search results matter most for your brand yet. We won’t
            pretend to know either until we look.
          </p>
        </div>
        <AuditCta variant="ink" className="shrink-0">
          Get a free visibility audit
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
          <AuditCta className="mt-7">Get your free audit</AuditCta>
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
