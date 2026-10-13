import { plans } from "@/lib/content";
import { wrap } from "@/lib/styles";
import { ContactForm } from "./contact";
import { Cta, Head, Reveal } from "./ui";

/* ── Pricing ────────────────────────────────────────────────────────── */

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-line bg-white/50">
      <div className={`${wrap} py-16 lg:py-24`}>
        <Head
          eyebrow="Pricing"
          title={
            <>
              Two ways to grow.
              <br />
              Neither involves guesswork.
            </>
          }
        >
          Start with a consistent Reddit presence or build a more ambitious program around your goals.
        </Head>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className={`flex h-full flex-col rounded-3xl border p-6 sm:p-8 ${p.dark ? "border-ink bg-ink text-paper" : "border-line bg-white"}`}>
                <p className={`font-mono text-xs uppercase tracking-widest ${p.dark ? "text-accent" : "text-muted"}`}>{p.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-6 flex flex-wrap items-baseline gap-x-2.5">
                  {p.priceNote && <span className="text-sm opacity-70">{p.priceNote[0]}</span>}
                  <span className={`font-display text-5xl font-bold tracking-[-0.04em] ${p.dark ? "" : "text-accent"}`}>{p.price}</span>
                  {p.priceNote && <span className="text-sm opacity-70">{p.priceNote[1]}</span>}
                </p>
                <p className="mt-5 max-w-md leading-relaxed opacity-70">{p.blurb}</p>
                <div className={`my-8 grid gap-6 border-t pt-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 ${p.dark ? "border-paper/15" : "border-line"}`}>
                  {p.groups.map((g) => (
                    <div key={g.label}>
                      <p className="font-mono text-[11px] uppercase tracking-widest opacity-60">{g.label}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-snug">
                        {g.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {p.note && <p className="mb-8 rounded-2xl bg-paper p-4 text-xs leading-relaxed text-muted">{p.note}</p>}
                <div className="mt-auto">
                  <Cta href="#contact" className={`w-full sm:w-auto ${p.dark ? "hover:!bg-paper hover:!text-ink" : ""}`}>
                    {p.cta}
                  </Cta>
                  <p className="mt-5 text-sm opacity-60">{p.footer}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center font-display text-lg font-semibold leading-snug tracking-tight">
          Not sure where to start? We’ll help you figure out what Reddit can realistically do for your brand.{" "}
          <a href="#contact" className="whitespace-nowrap underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent">
            Talk to us
          </a>
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted">
          We don’t guarantee engagement, rankings, sales or AI citations. Community moderators and third-party platforms
          decide what appears.
        </p>
      </div>
    </section>
  );
}

/* ── Closing CTA + footer ───────────────────────────────────────────── */

export async function Closing() {
  "use cache"; // footer year is read from the clock
  return (
    <div className="px-2 pb-2 sm:px-4 sm:pb-4">
      <div className="rounded-[2rem] bg-ink text-paper">
        <section id="contact" className={`${wrap} grid gap-12 py-16 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-20 lg:py-20`}>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/60">Free Reddit audit</p>
            <h2 className="mt-5 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.035em]">
              Reddit already has an opinion. <span className="text-accent">Let’s make sure your brand shows up.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-paper/70">
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
