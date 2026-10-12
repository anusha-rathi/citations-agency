import { ArrowBigUp, Check, Plus, Search, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { aiServices, faqs, plans, process, reasons, redditServices } from "@/lib/content";
import { ContactForm } from "./contact";
import { Cite, Illustrative } from "./mocks";
import { StoryStages } from "./story";
import { Cta, Reveal } from "./ui";

const wrap = "mx-auto max-w-7xl px-5 sm:px-8";
const h2 = "font-display text-[clamp(2.1rem,5.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.035em]";

function Head({ eyebrow, title, children, dark }: { eyebrow: string; title: ReactNode; children?: ReactNode; dark?: boolean }) {
  return (
    <Reveal className="max-w-4xl">
      <p className={`font-mono text-xs uppercase tracking-widest ${dark ? "text-paper/60" : "text-muted"}`}>{eyebrow}</p>
      <h2 className={`mt-5 ${h2}`}>{title}</h2>
      {children && <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-paper/70" : "text-muted"}`}>{children}</p>}
    </Reveal>
  );
}

/* ── 2. Why Reddit + Why AI ─────────────────────────────────────────── */

const whyCards = [
  {
    label: "01 / Discovery",
    title: "Your buyers are searching Reddit.",
    visual: (
      <div className="space-y-2 text-sm">
        <p className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 shadow-sm">
          <Search aria-hidden className="size-4 shrink-0 text-accent" />
          best CRM for startups reddit
          <span aria-hidden className="-ml-1.5 h-4 w-px animate-[blink_1s_steps(1)_infinite] bg-ink" />
        </p>
        {["is [brand] worth it?", "[brand] vs [competitor] reddit", "best invoicing tool for freelancers"].map((q) => (
          <p key={q} className="flex items-center gap-2 px-4 py-1 text-muted">
            <Search aria-hidden className="size-3.5 shrink-0" />
            {q}
          </p>
        ))}
      </div>
    ),
  },
  {
    label: "02 / Trust",
    title: "People trust useful conversations.",
    visual: (
      <div className="space-y-2 text-sm">
        <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm border border-line bg-white px-3.5 py-2.5 shadow-sm">
          Has anyone actually used this with a team of ten?
        </p>
        <div className="ml-6 rounded-2xl rounded-tl-sm border border-line bg-white px-3.5 py-2.5 shadow-sm">
          <p>Two years in. Here’s what I’d check before you buy…</p>
          <p className="mt-2 flex items-center gap-3 text-xs text-muted">
            <span className="flex items-center gap-0.5 font-semibold text-ink">
              <ArrowBigUp aria-hidden className="size-4 fill-accent text-accent" />
              128
            </span>
            <span className="rounded-full bg-accent/10 px-2 py-0.5 font-medium text-ink">Helpful</span>
            12 replies
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "03 / AI Visibility",
    title: "Those conversations can travel further.",
    visual: (
      <div className="rounded-2xl border border-line bg-white p-3.5 text-sm shadow-sm">
        <p className="flex items-center gap-1.5 text-xs font-semibold">
          <Sparkles aria-hidden className="size-3.5 text-violet" />
          AI answer
        </p>
        <p className="mt-2 leading-relaxed">
          Teams in public discussions often compare options by onboarding time and support quality.
          <Cite />
        </p>
        <p className="mt-3 flex items-center gap-2 rounded-lg bg-lav/50 px-2.5 py-1.5 text-xs">
          <span className="grid size-4 place-items-center rounded bg-violet text-[10px] font-bold text-white">1</span>
          reddit.com · public discussion
        </p>
      </div>
    ),
  },
];

export function Why() {
  return (
    <section id="why" className={`${wrap} py-24 lg:py-32`}>
      <Head
        eyebrow="Why Reddit, why AI"
        title={
          <>
            Your next customer is already asking. <span className="text-muted">Are you in the conversation?</span>
          </>
        }
      >
        Buyers search Reddit for honest opinions, real experiences, and product comparisons. AI search can surface
        information from those conversations alongside other sources. Showing up with useful, credible information
        matters.
      </Head>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {whyCards.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-3 transition-colors duration-300 hover:border-ink">
              <div className={`flex min-h-56 flex-col justify-center rounded-2xl p-5 ${i === 2 ? "bg-lav/40" : "bg-paper"}`}>
                {c.visual}
              </div>
              <div className="p-4 pt-6">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{c.label}</p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight">{c.title}</h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Illustrative className="mt-6">Interfaces shown are illustrative mockups</Illustrative>
    </section>
  );
}

/* ── 3. Services ────────────────────────────────────────────────────── */

function ServiceGrid({
  letter, name, items, cols, icon, tag,
}: { letter: string; name: string; items: typeof redditServices; cols: string; icon: string; tag: string }) {
  return (
    <div className="mt-16">
      <Reveal className="flex items-center gap-4">
        <span className={`rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${tag}`}>{letter}</span>
        <h3 className="font-display text-2xl font-bold tracking-tight">{name}</h3>
        <span aria-hidden className="h-px flex-1 bg-line" />
        <span className="font-mono text-xs text-muted">{String(items.length).padStart(2, "0")} services</span>
      </Reveal>
      <ul className={`mt-6 grid gap-4 sm:grid-cols-2 ${cols}`}>
        {items.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={(i % 4) * 0.05} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_24px_40px_-24px_rgba(23,23,23,0.3)]">
                <div className="flex items-start justify-between">
                  <span className={`grid size-11 place-items-center rounded-2xl transition-colors duration-300 ${icon}`}>
                    <s.icon aria-hidden className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4 className="mt-8 font-display text-lg font-bold leading-snug tracking-tight">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="border-y border-line bg-white/50">
      <div className={`${wrap} py-24 lg:py-32`}>
        <Head
          eyebrow="Our services"
          title={
            <>
              Everything <span className="text-accent">Reddit</span>.
              <br />
              Everything <span className="rounded-[0.2em] bg-lav px-[0.15em]">AI visibility</span>.
            </>
          }
        >
          From the first conversation to the next customer recommendation, we build your visibility where it matters.
        </Head>
        <ServiceGrid
          letter="A"
          name="Reddit Marketing"
          items={redditServices}
          cols="lg:grid-cols-4"
          tag="bg-accent text-ink"
          icon="bg-accent/10 text-ink group-hover:bg-accent"
        />
        <ServiceGrid
          letter="B"
          name="AI Citations & Search Visibility"
          items={aiServices}
          cols="lg:grid-cols-3"
          tag="bg-lav text-ink"
          icon="bg-lav text-violet group-hover:bg-violet group-hover:text-white"
        />
      </div>
    </section>
  );
}

/* ── 4. The visual story ────────────────────────────────────────────── */

export function Story() {
  return (
    <section id="story" className={`${wrap} py-24 lg:py-32`}>
      <Head eyebrow="The visual story" title="From Reddit thread to AI answer." />
      <Reveal className="mt-14">
        <StoryStages />
      </Reveal>
      <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <Illustrative>Illustrative thread and answer, fictional brand</Illustrative>
        <p className="max-w-xl sm:text-right">
          AI citations and recommendations are algorithmically determined and not guaranteed.
        </p>
      </div>
    </section>
  );
}

/* ── 5. Why citations.agency ────────────────────────────────────────── */

export function Manifesto() {
  return (
    <section className="px-2 sm:px-4">
      <div className="rounded-[2rem] bg-ink text-paper">
        <div className={`${wrap} py-24 lg:py-32`}>
          <Head
            dark
            eyebrow="Why citations.agency"
            title={
              <>
                Not another agency posting <span className="text-accent">into the void.</span>
              </>
            }
          >
            We combine community expertise, thoughtful content, and AI-search intelligence to build visibility that
            compounds.
          </Head>
          <ol className="mt-16 grid gap-x-12 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li key={r.title}>
                <Reveal delay={(i % 2) * 0.08} className="group flex gap-6 border-t border-paper/15 py-8">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {r.title}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-paper/70">{r.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ── 6. How we work ─────────────────────────────────────────────────── */

export function Process() {
  return (
    <section id="how-it-works" className={`${wrap} py-24 lg:py-32`}>
      <Head eyebrow="How we work" title="Simple process. Serious execution." />
      <ol className="mt-16 grid lg:grid-cols-4">
        {process.map((p, i) => (
          <li key={p.title} className="relative border-l border-ink/15 pb-12 pl-8 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-10 lg:pt-10">
            <span aria-hidden className="absolute -left-[5px] top-0 size-2.5 rounded-full bg-accent ring-4 ring-paper lg:-top-[5px] lg:left-0" />
            <Reveal delay={i * 0.1}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}.</span>
                <span className="grid size-9 place-items-center rounded-full border border-line bg-white">
                  <p.icon aria-hidden className="size-4" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── 7. Pricing ─────────────────────────────────────────────────────── */

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-line bg-white/50">
      <div className={`${wrap} py-24 lg:py-32`}>
        <Head eyebrow="Pricing" title="Choose your visibility engine.">
          Focused programs for every stage of brand growth.
        </Head>
        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className={p.popular ? "lg:-my-5" : ""}>
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
                  p.popular ? "border-ink bg-ink text-paper shadow-[0_40px_70px_-35px_rgba(23,23,23,0.6)]" : "border-line bg-white"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
                    Most Popular
                  </span>
                )}
                <p className={`font-mono text-xs uppercase tracking-widest ${p.popular ? "text-paper/60" : "text-muted"}`}>
                  Plan {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">{p.name}</h3>
                <p className={`mt-3 min-h-[2lh] leading-relaxed ${p.popular ? "text-paper/70" : "text-muted"}`}>{p.blurb}</p>
                <p className={`mt-8 border-y py-5 font-display text-4xl font-bold tracking-tight ${p.popular ? "border-paper/15" : "border-line"}`}>
                  Custom quote
                </p>
                <p className={`mt-6 text-sm font-semibold ${p.popular ? "text-accent" : ""}`}>{p.lead}</p>
                <ul className="mb-8 mt-4 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check aria-hidden className={`mt-0.5 size-4 shrink-0 ${p.popular ? "text-accent" : "text-violet"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Cta href="#contact" variant={p.popular ? "accent" : "outline"} className={`mt-auto ${p.popular ? "hover:!bg-paper hover:!text-ink" : ""}`}>
                  {p.cta}
                </Cta>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-14 text-center text-sm text-muted">Every engagement is scoped to your goals, audience, and market.</p>
      </div>
    </section>
  );
}

/* ── 8. FAQ ─────────────────────────────────────────────────────────── */

export function Faq() {
  return (
    <section id="faq" className={`${wrap} grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr] lg:py-32`}>
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Head eyebrow="FAQ" title="Frequently asked questions." />
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

/* ── 9. Closing CTA + footer ────────────────────────────────────────── */

export async function Closing() {
  "use cache"; // footer year is read from the clock
  return (
    <div className="bg-ink text-paper">
      <section id="contact" className={`${wrap} grid gap-14 py-24 lg:grid-cols-2 lg:items-center lg:py-32`}>
        <Head
          dark
          eyebrow="Free visibility audit"
          title={
            <>
              The conversation is happening. <span className="text-accent">Make sure your brand belongs in it.</span>
            </>
          }
        >
          See where your brand stands on Reddit and in AI search — and discover your biggest opportunities.
        </Head>
        <Reveal delay={0.1}>
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
          © {new Date().getFullYear()} citations.agency. citations.agency is an independent agency and is not affiliated
          with, endorsed by, or sponsored by Reddit, OpenAI, Google, Perplexity, or any other named AI platform. All
          trademarks belong to their respective owners.
        </p>
      </footer>
    </div>
  );
}
