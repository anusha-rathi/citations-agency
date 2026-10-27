import type { Post } from "../../lib/blog";

const google = "https://developers.google.com/search/docs/appearance/ai-features";
const schema = "https://ahrefs.com/blog/schema-ai-citations/";
const llms = "https://ahrefs.com/blog/llmstxt-study/";
const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";
const bing = "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview";

export const post: Post = {
  slug: "how-to-choose-an-ai-seo-agency",
  tracker: "7.4",
  bucket: "buying",
  style: "RS Playbook",
  title: "How to choose an AI SEO agency: 12 questions to ask",
  dek: "Every SEO agency now sells “AI search”. Some know what they’re doing; some have renamed their old package. These 12 questions, with the answers to listen for, tell you which is which.",
  description: "How to choose an AI SEO agency: 12 questions to ask, good and bad answers, red flags, what a proposal should include, and how to compare agencies side by side.",
  targetQuery: "ai seo agency",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "A good AI SEO agency can explain how each AI assistant finds sources, will audit crawler access and rendering before writing anything, works on off-site mentions as well as your pages, tracks prompts rather than just keywords, and reports mentions, citations and AI referral traffic. Ask the 12 questions below and listen for specifics. Walk away from guaranteed rankings in ChatGPT, packages built around llms.txt and schema as the main AI tactic, and reports that only show keyword positions.",
    },
    {
      t: "p",
      c: "In 2026 it’s hard to find an SEO agency that doesn’t offer AI search. The labels vary, from AEO and GEO to LLM optimisation and AI visibility, but the work behind them varies far more. Some agencies have built real methods. Others have added “AI” to the same keyword and link package they sold in 2022.",
    },
    {
      t: "p",
      c: "You don’t need to be an expert to tell the difference. You need the right questions, and to know what a good answer sounds like.",
    },
    { t: "h2", c: "What to prepare on your side" },
    {
      t: "p",
      c: "Agencies do better work when you give them good inputs, and the questions above go faster when you’ve done some homework. Before your calls, gather:",
    },
    {
      t: "ul",
      items: [
        "Your top three to five competitors, as buyers see them rather than as you’d like them to be.",
        "Ten real questions from sales calls, support tickets or reviews.",
        "Access details you’d be willing to share: Search Console, Bing Webmaster Tools, GA4.",
        "The names of the people who can review product facts and approve pages.",
        "A rough budget range and how long you can commit before judging results.",
      ],
    },
    {
      t: "p",
      c: "With that ready, you can compare agencies on the same prompts and the same facts, which makes the comparison table far more useful.",
    },
    { t: "h2", c: "Send this before the first call" },
    {
      t: "p",
      c: "Save everyone time by sending a short brief in advance. The answers you get back, and how specific they are, tell you a lot before you’ve spoken:",
    },
    {
      t: "code",
      label: "Email template",
      c: "Hi [name],\n\nWe're [company], a [category] for [audience]. We'd like help getting\nmentioned and cited in AI answers (ChatGPT, Perplexity, Google AI).\n\nTop competitors: [A], [B], [C]\nThree questions buyers ask: [prompt 1], [prompt 2], [prompt 3]\n\nBefore we talk, could you share:\n1. Who is cited for those three questions today?\n2. Anything you can see blocking AI crawlers on our site?\n3. A sample monthly report (anonymised is fine)\n4. Contract terms and what we keep if we stop\n\nThanks,\n[name]",
    },
    {
      t: "p",
      c: "A good agency will come back with real observations: the sources cited for your prompts, a note about your robots.txt or rendering, a sample report. An agency that replies only with a generic deck hasn’t looked.",
    },
    { t: "h2", c: "The 12 questions" },
    { t: "h3", c: "1. How do ChatGPT, Perplexity and Google’s AI find the pages they cite?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> specific and different per platform. ChatGPT search uses its own crawler plus search partners including Microsoft; Perplexity runs its own crawler; Google’s AI features use Google’s index. Some answers come from training data with no search at all.",
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> “AI reads the top Google results.” Rankings and AI citations overlap far less than that suggests.",
    },
    { t: "h3", c: "2. What do you check first?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> crawler access (robots.txt and CDN), whether content renders without JavaScript, and indexing in both Google and Bing, before any content work.",
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> “We start with keyword research.” Content won’t help if crawlers can’t reach or read your pages.",
    },
    { t: "h3", c: "3. How do you decide which questions to target?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> they build a list of prompts from your sales calls, support tickets, reviews, Reddit and competitors, then run them in AI tools to see who’s cited now. See our <a href=\"/blog/prompt-research-for-ai-search\">prompt research guide</a> for what this looks like.",
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> only keyword tools and search volume.",
    },
    { t: "h3", c: "4. What will you do off our website?" },
    {
      t: "p",
      c: `<strong>Good answer:</strong> getting you listed on the roundups, review sites and communities AI cites for your category. <a href="${brands}">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated three times more with AI Overview visibility than backlinks.`,
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> link building only, or nothing off-site at all.",
    },
    { t: "h3", c: "5. What’s your view on llms.txt and schema for AI?" },
    {
      t: "p",
      c: `<strong>Good answer:</strong> honest about the evidence. Google says you don’t need <a href="${google}">AI text files or special schema</a> to appear in its AI features. Ahrefs found <a href="${llms}">97% of llms.txt files got zero requests</a> in a month, and pages that added schema saw <a href="${schema}">ChatGPT citations move just 2.2%</a>. Schema still has normal SEO uses.`,
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> these are the core of their AI package.",
    },
    { t: "h3", c: "6. How will you measure success?" },
    {
      t: "p",
      c: `<strong>Good answer:</strong> mention rate and citation rate across a fixed set of prompts, share of voice against named competitors, AI referral traffic in GA4, <a href="${bing}">Bing’s AI Performance report</a>, and conversions from AI visitors.`,
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> keyword rankings and “AI visibility scores” from a tool with no explanation of how they’re calculated.",
    },
    { t: "cta" },
    { t: "h3", c: "7. Can you guarantee we’ll appear in ChatGPT?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> no. Nobody controls AI answers. They can commit to the work and to transparent measurement.",
    },
    {
      t: "p",
      c: "<strong>Red flag:</strong> any guarantee of placement, rankings or a number of citations.",
    },
    { t: "h3", c: "8. What will you change on our site, and who does it?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> a clear split. They write or rewrite specific pages (comparison, alternatives, pricing, use cases), give your developers precise technical tickets, and tell you what needs your experts’ input.",
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> vague promises to “optimise content”.",
    },
    { t: "h3", c: "9. How do you handle Reddit and communities?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> real, disclosed accounts, following each community’s rules, with your team’s expertise in the replies. Our <a href=\"/blog/reddit-self-promotion-rules\">self-promotion rules guide</a> describes the standard.",
    },
    {
      t: "p",
      c: "<strong>Red flag:</strong> “our network of accounts”, upvote packages or undisclosed posting.",
    },
    { t: "h3", c: "10. What does a typical first 90 days look like?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> weeks 1–2 audit and prompt baseline; weeks 3–6 technical fixes and first pages; weeks 4–12 mentions and outreach; month 3 the first comparison against the baseline.",
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> no plan until you’ve signed.",
    },
    { t: "h3", c: "11. Can we see a sample report and real examples?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> a real (anonymised) monthly report and public examples, such as pages they’ve written that are now cited, or roundups where they secured placements.",
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> only screenshots of AI answers with no context, or case studies that can’t be checked.",
    },
    { t: "h3", c: "12. What’s the contract, and what do we keep if we leave?" },
    {
      t: "p",
      c: "<strong>Good answer:</strong> month-to-month or a short initial term, and you keep all content, accounts, prompt lists and data.",
    },
    {
      t: "p",
      c: "<strong>Weak answer:</strong> long lock-ins, or accounts and tracking that belong to the agency.",
    },
    { t: "h2", c: "Red flags at a glance" },
    {
      t: "table",
      head: ["Red flag", "Why it matters"],
      rows: [
        ["Guaranteed ChatGPT or AI Overview placement", "No one controls AI answers"],
        ["llms.txt and schema as the main AI tactic", "Evidence shows little or no effect on citations"],
        ["No technical audit before content", "Blocked or unreadable pages make content pointless"],
        ["Only keyword rankings in reports", "Rankings and AI citations overlap little"],
        ["“Network of Reddit accounts” or upvotes", "Breaks Reddit’s rules; risks bans"],
        ["Hundreds of AI-written pages per month", "Thin pages are rarely cited and can hurt the site"],
        ["Long contracts with no exit", "AI search changes fast; you need flexibility"],
      ],
    },
    { t: "h2", c: "What a good proposal includes" },
    {
      t: "ul",
      items: [
        "A short audit summary of your site: crawler access, rendering, Bing and Google indexing.",
        "A starter list of 20 to 50 buyer prompts and who’s cited for them today.",
        "The specific pages they’ll create or rewrite first, and why.",
        "Named off-site targets: roundups, review sites, communities.",
        "The metrics they’ll report and how often.",
        "Who on their team does the work, and what they need from yours.",
        "Price, term and what you own.",
      ],
    },
    { t: "h2", c: "Compare agencies side by side" },
    {
      t: "table",
      head: ["", "Agency A", "Agency B", "Agency C"],
      rows: [
        ["Explains platform differences clearly", "", "", ""],
        ["Technical audit first", "", "", ""],
        ["Prompt-based targeting", "", "", ""],
        ["Off-site mentions plan", "", "", ""],
        ["Honest on llms.txt and schema", "", "", ""],
        ["Measures mentions, citations, AI traffic", "", "", ""],
        ["No guarantees", "", "", ""],
        ["Ethical community approach", "", "", ""],
        ["Clear 90-day plan", "", "", ""],
        ["Short term; you own everything", "", "", ""],
      ],
      caption: "Score each 0–2 after your calls. Any red flag is an automatic no.",
    },
    { t: "h2", c: "How to run the call" },
    {
      t: "ol",
      items: [
        "<strong>Let them present for ten minutes</strong>, then move to your questions. Polished slides don’t tell you how they work.",
        "<strong>Ask questions 1, 2, 5 and 7 first.</strong> They separate real expertise from repackaged SEO fastest.",
        "<strong>Ask them to walk through one of your prompts live</strong>: open ChatGPT or Perplexity, run it, and explain why those sources were chosen.",
        "<strong>Ask who will do the work</strong> and whether you can meet them. The person selling is often not the person doing.",
        "<strong>Take notes against the comparison table</strong> straight after the call, while answers are fresh.",
      ],
    },
    { t: "h2", c: "Judge the audit they give you" },
    {
      t: "p",
      c: "Many agencies offer a free audit. It’s a preview of their thinking, so read it carefully:",
    },
    {
      t: "table",
      head: ["Good audit", "Weak audit"],
      rows: [
        ["Tests your site as AI crawlers and reports the results", "Generic “AI readiness score” with no method"],
        ["Shows real prompts and who’s cited for each", "Screenshots of one or two AI answers"],
        ["Names specific pages to fix and why", "General advice to “add FAQ schema” and “create llms.txt”"],
        ["Lists third-party sites you’re missing from", "No mention of off-site work"],
        ["Prioritises: what to do first, second, third", "A long list with everything marked urgent"],
      ],
    },
    { t: "h2", c: "The first 30 days after signing" },
    {
      t: "ol",
      items: [
        "<strong>Agree the prompt baseline</strong> in writing: the exact prompts, platforms and how results are recorded.",
        "<strong>Get the technical audit</strong> and tickets for your developers within two weeks.",
        "<strong>Approve the first pages</strong> to be written or rewritten, with your experts named as reviewers.",
        "<strong>See the outreach target list</strong>: the roundups, review sites and communities they’ll work on.",
        "<strong>Set the reporting date</strong> and format, using the metrics from question 6.",
      ],
    },
    {
      t: "p",
      c: "If any of these slip past day 30 without a reason, raise it. Early delays usually become permanent ones, so it’s worth a direct conversation.",
    },
    { t: "h2", c: "Warning signs after you’ve signed" },
    {
      t: "p",
      c: "Even a good pitch can turn into disappointing work. Watch for these in the first three months:",
    },
    {
      t: "ul",
      items: [
        "<strong>Reports change format every month</strong>, so you can’t compare progress.",
        "<strong>The prompt list quietly shrinks</strong> or swaps hard prompts for easy branded ones.",
        "<strong>Content arrives without your experts’ review</strong>, or with facts about your product that are wrong.",
        "<strong>No off-site work appears</strong> in reports after the first month.",
        "<strong>Every result is “AI visibility up”</strong> with no prompts, sources or traffic behind it.",
      ],
    },
    {
      t: "p",
      c: "Raise each one early and in writing. A good agency will explain what happened and fix it quickly. If it keeps happening, use the short contract you negotiated and move on, taking your content, prompts and data with you.",
    },
    { t: "h2", c: "In-house, agency or both?" },
    {
      t: "p",
      c: "If you have an SEO team already, an agency can add the AI-specific parts: prompt research, AI citation tracking and off-site mentions. If you don’t, an agency can run everything, but your product experts will still need to review comparison pages and answer questions only they can. The same trade-offs apply as for Reddit work; our guide to <a href=\"/blog/reddit-marketing-agency-vs-in-house\">agency vs in-house</a> walks through them.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t choose on price alone. Cheap AI packages are often renamed SEO packages.",
        "Don’t sign before seeing a sample report.",
        "Don’t let an agency own your accounts, content or data.",
        "Don’t judge results after one month. Give it 90 days against an agreed baseline.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Buying the label.</strong> AEO, GEO and AI SEO describe similar work. Ask what they’ll do, not what they call it. Our <a href=\"/blog/aeo-vs-geo-vs-seo\">AEO vs GEO vs SEO guide</a> explains the terms.",
        "<strong>Skipping the baseline.</strong> Without a prompt check before work starts, you can’t measure progress.",
        "<strong>Ignoring off-site work.</strong> For category questions, other sites matter most.",
        "<strong>Accepting tool scores without method.</strong> Ask how any score is calculated.",
        "<strong>Not involving your experts.</strong> The best pages need product knowledge only your team has.",
      ],
    },
  ],
  faqs: [
    {
      q: "What does an AI SEO agency do?",
      a: "It helps your brand get mentioned and cited in AI answers from ChatGPT, Perplexity and Google’s AI. That covers crawler access and rendering, pages that answer buyer questions, mentions on third-party sites, and tracking prompts, citations and AI traffic.",
    },
    {
      q: "How do I know if an AI SEO agency is legitimate?",
      a: "They can explain how each AI platform finds sources, audit technical access first, measure mentions and citations, avoid guarantees, and show real examples and a sample report.",
    },
    {
      q: "Can an agency guarantee ChatGPT rankings?",
      a: "No. Nobody controls what AI assistants say. Treat any guarantee of placement or citations as a red flag.",
    },
    {
      q: "Is AI SEO different from regular SEO?",
      a: "It builds on SEO foundations like indexing and clear pages, then adds prompt research, off-site mentions and AI-specific measurement.",
    },
    {
      q: "How long before an AI SEO agency shows results?",
      a: "Technical fixes and new pages can show citation changes within weeks. Broader mention gains usually take a few months. Agree a baseline and review at 90 days.",
    },
  ],
  sources: [
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-27" },
    { title: "Ahrefs: schema and AI citations", url: schema, type: "vendor", read: "2026-10-27" },
    { title: "Ahrefs: llms.txt study", url: llms, type: "vendor", read: "2026-10-27" },
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-27" },
    { title: "Bing: AI Performance", url: bing, type: "primary", read: "2026-10-27" },
  ],
  related: ["aeo-vs-geo-vs-seo", "reddit-marketing-agency-vs-in-house", "how-to-get-cited-by-chatgpt"],
  cta: {
    mid: "Talking to AI SEO agencies? Ask us the same 12 questions. We’ll answer every one.",
    title: "Put us through the 12 questions.",
    text: "Book a call and ask us everything on this list. You’ll get specific answers, a prompt baseline for your category and a 90-day plan, with no lock-in.",
    button: "Ask us the 12 questions",
  },
};
