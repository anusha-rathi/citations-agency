import { ArrowBigUp, MessageSquare, Plus, Search } from "lucide-react";
import type { ReactNode } from "react";
import { faqs, plans, services } from "@/lib/content";
import { ContactForm } from "./contact";
import { wrap } from "@/lib/styles";
import { Cta, Head, Reveal } from "./ui";

/* ── Services ───────────────────────────────────────────────────────── */

const bar = (w: string, cls = "bg-current opacity-15") => <span aria-hidden className={`block h-1.5 rounded-full ${cls}`} style={{ width: w }} />;

// One miniature interface per service, in the same order as `services`.
const serviceVisuals: { tone: string; visual: ReactNode }[] = [
  {
    tone: "bg-white",
    visual: (
      <div className="flex flex-wrap content-center gap-1.5">
        {["r/startups", "r/SaaS", "r/smallbusiness", "r/Entrepreneur", "r/marketing", "r/sales"].map((s, i) => (
          <span
            key={s}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-300 ${
              i === 1 || i === 2 ? "bg-accent text-ink group-hover:scale-105" : "border border-line group-hover:opacity-40"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    ),
  },
  {
    tone: "bg-accent/[0.08]",
    visual: (
      <div className="w-full rounded-xl bg-white p-3 shadow-sm transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-[1.03]">
        <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-medium text-paper">Native post</span>
        <div className="mt-2.5 space-y-1.5">
          {bar("85%", "bg-ink/70 !h-2")}
          {bar("95%")}
          {bar("70%")}
        </div>
        <p className="mt-2.5 flex gap-3 text-ink/50">
          <ArrowBigUp aria-hidden className="size-4 text-accent" />
          <MessageSquare aria-hidden className="size-3.5" />
        </p>
      </div>
    ),
  },
  {
    tone: "bg-ink text-paper border-ink",
    visual: (
      <div className="w-full space-y-2">
        <div className="space-y-1.5 rounded-lg bg-paper/10 p-2.5">{bar("80%")}{bar("50%")}</div>
        <div className="ml-5 space-y-1.5 rounded-lg bg-paper/10 p-2.5">{bar("65%")}</div>
        <div className="ml-10 space-y-1.5 rounded-lg bg-accent p-2.5 text-ink transition-transform duration-300 group-hover:translate-x-1.5">
          {bar("75%", "bg-ink/50")}
          {bar("45%", "bg-ink/50")}
        </div>
      </div>
    ),
  },
  {
    tone: "bg-white",
    visual: (
      <ul className="w-full space-y-2 text-xs">
        {[["Needs a reply", "bg-accent"], ["Corrected with a source", "bg-violet"], ["Monitoring", "bg-ink/30"]].map(([label, dot], i) => (
          <li key={label} className="flex items-center gap-2.5 rounded-lg border border-line px-2.5 py-2 transition-transform duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${i * 50}ms` }}>
            <span aria-hidden className={`size-2 shrink-0 rounded-full ${dot}`} />
            <span className="flex-1">{bar(["70%", "55%", "80%"][i])}</span>
            <span className="font-medium">{label}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    tone: "bg-lav/50",
    visual: (
      <div className="w-full rounded-xl bg-white p-3 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-violet">Promoted</p>
        <div className="mt-2 space-y-1.5">{bar("90%", "bg-ink/70 !h-2")}{bar("60%")}</div>
        <span className="mt-3 inline-block rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-paper transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
          Learn more
        </span>
      </div>
    ),
  },
  {
    tone: "bg-white",
    visual: (
      <div className="w-full text-xs">
        <p className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5">
          <Search aria-hidden className="size-3.5 text-accent" />
          best [category] tool reddit
        </p>
        <ul className="mt-2 space-y-1.5">
          {[0, 1].map((i) => (
            <li key={i} className={`rounded-lg px-3 py-2 transition-colors duration-300 ${i === 0 ? "bg-paper group-hover:bg-accent/15" : ""}`}>
              <span className="text-muted">{i === 0 ? "reddit.com › r/…" : "example.com"}</span>
              <span className="mt-1.5 block">{bar(i === 0 ? "80%" : "60%")}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="border-y border-line bg-white/50">
      <div className={`${wrap} py-24 lg:py-32`}>
        <Head
          eyebrow="Our services"
          title={
            <>
              Reddit is complicated.
              <br />
              <span className="text-accent">We make it work.</span>
            </>
          }
        >
          Strategy, conversations, community presence, reputation, paid growth, and search discovery. Built for the way
          Reddit actually works.
        </Head>
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <article
                  className={`group flex h-full flex-col rounded-3xl border border-line p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink hover:shadow-[0_30px_50px_-30px_rgba(23,23,23,0.4)] ${serviceVisuals[i].tone}`}
                >
                  <p className="font-mono text-xs opacity-60">0{i + 1}</p>
                  <div className="mt-4 flex h-40 items-center">{serviceVisuals[i].visual}</div>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight">{s.title}</h3>
                  <p className="mt-3 leading-relaxed opacity-70">{s.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Pricing ────────────────────────────────────────────────────────── */

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-line bg-white/50">
      <div className={`${wrap} py-24 lg:py-32`}>
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
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className={`flex h-full flex-col rounded-[2rem] border p-8 sm:p-10 ${p.dark ? "border-ink bg-ink text-paper" : "border-line bg-white"}`}>
                <p className={`font-mono text-xs uppercase tracking-widest ${p.dark ? "text-accent" : "text-muted"}`}>{p.eyebrow}</p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-6 flex flex-wrap items-baseline gap-x-2.5">
                  {p.priceNote && <span className="text-sm opacity-70">{p.priceNote[0]}</span>}
                  <span className={`font-display text-6xl font-bold tracking-[-0.04em] sm:text-7xl ${p.dark ? "" : "text-accent"}`}>{p.price}</span>
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
        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl font-semibold leading-snug tracking-tight">
          Not sure where to start? We’ll help you figure out what Reddit can realistically do for your brand.{" "}
          <a href="#contact" className="whitespace-nowrap underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent">
            Talk to us
          </a>
        </p>
      </div>
    </section>
  );
}

/* ── FAQ ────────────────────────────────────────────────────────────── */

export function Faq() {
  return (
    <section id="faq" className={`${wrap} grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr] lg:py-32`}>
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Head eyebrow="FAQ" title="Questions worth asking first." />
      </div>
      <Reveal>
        {faqs.map((f) => (
          <details key={f.q} name="faq" className="group border-t border-ink/15 last:border-b">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-xl font-semibold tracking-tight transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent">
                <Plus aria-hidden className="size-4" />
              </span>
            </summary>
            <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Closing CTA + footer ───────────────────────────────────────────── */

const uncover = ["Where your buyers are talking", "Where competitors are winning attention", "The opportunities you’re missing"];

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
            <ul className="mt-10 max-w-md">
              {uncover.map((u, i) => (
                <li key={u} className="flex items-center gap-4 border-t border-paper/15 py-3.5 last:border-b">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {u}
                </li>
              ))}
            </ul>
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
              {[["Services", "#services"], ["Pricing", "#pricing"], ["Contact", "#contact"], ["Privacy Policy", "/privacy"]].map(([l, h]) => (
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
