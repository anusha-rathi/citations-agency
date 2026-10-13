import { growth } from "@/lib/content";
import { wrap } from "@/lib/styles";
import { ContactForm } from "./contact";
import { Cta, Head, Reveal } from "./ui";

/* ── Pricing ────────────────────────────────────────────────────────── */

export function Pricing() {
  const p = growth;
  return (
    <section id="pricing" className={`${wrap} py-24 lg:py-32`}>
      <Head eyebrow="Pricing" title="Simple pricing. No guesswork." />
      <Reveal className="mt-14">
        <article className="grid gap-10 rounded-[2rem] border border-line bg-white p-8 sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div className="flex flex-col">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">{p.eyebrow}</p>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">{p.name}</h3>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-2.5">
              <span className="text-sm text-muted">Starting at</span>
              <span className="font-display text-6xl font-bold tracking-[-0.04em] text-accent sm:text-7xl">{p.price}</span>
              <span className="text-sm text-muted">/ month</span>
            </p>
            <p className="mb-8 mt-5 max-w-md leading-relaxed text-muted">{p.blurb}</p>
            <Cta href="#contact" className="mt-auto w-full sm:w-fit">
              {p.cta}
            </Cta>
          </div>
          <div>
            <div className="grid gap-6 sm:grid-cols-3">
              {p.groups.map((g) => (
                <div key={g.label} className="border-t border-line pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{g.label}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-snug">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-2xl bg-paper p-4 text-xs leading-relaxed text-muted">{p.note}</p>
          </div>
        </article>
        <p className="mt-10 font-display text-xl font-semibold tracking-tight">Need a different scope? We’ll build it around your brand.</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          We don’t guarantee engagement, rankings, sales or AI citations. Community moderators and third-party platforms
          decide what appears.
        </p>
      </Reveal>
    </section>
  );
}

/* ── Closing CTA + footer ───────────────────────────────────────────── */

export async function Closing() {
  "use cache"; // footer year is read from the clock
  return (
    <div className="px-2 pb-2 sm:px-4 sm:pb-4">
      <div className="rounded-[2rem] bg-ink text-paper">
        <section id="contact" className={`${wrap} grid gap-12 py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-20 lg:py-28`}>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/60">Free Reddit audit</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em]">
              Reddit already has an opinion. <span className="text-accent">Let’s make sure your brand shows up.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
              Find out where your buyers are talking, where your competitors are winning attention, and what
              opportunities you’re missing.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="w-full max-w-md lg:justify-self-end">
            <ContactForm />
          </Reveal>
        </section>
        <footer className={`${wrap} border-t border-paper/15 py-10 text-sm text-paper/60`}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xl font-bold tracking-tight text-paper">
                citations<span className="text-accent">.agency</span>
              </p>
              <p className="mt-1">Reddit Marketing + AI Visibility</p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
              {[["Services", "#advantage"], ["Pricing", "#pricing"], ["Contact", "#contact"], ["Privacy Policy", "/privacy"]].map(([l, h]) => (
                <a key={h} href={h} className="transition-colors hover:text-paper">
                  {l}
                </a>
              ))}
            </nav>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-paper/60">
            © {new Date().getFullYear()} citations.agency. citations.agency is an independent agency and is not
            affiliated with, endorsed by, or sponsored by Reddit, OpenAI, Anthropic, Google, Perplexity, or any other
            named platform. All trademarks belong to their respective owners.
          </p>
        </footer>
      </div>
    </div>
  );
}
