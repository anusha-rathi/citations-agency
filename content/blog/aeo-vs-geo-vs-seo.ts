import type { Post } from "../../lib/blog";

const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const google = "https://developers.google.com/search/docs/appearance/ai-features";

export const post: Post = {
  slug: "aeo-vs-geo-vs-seo",
  tracker: "1.1",
  bucket: "basics",
  style: "RS Playbook",
  title: "AEO vs GEO vs SEO: what’s actually different in 2026",
  dek: "On your own website it’s mostly the same work. The real differences are off-site, in prompts instead of keywords, and in how you measure. Here’s what to change, and what to keep.",
  description: "AEO vs GEO vs SEO in 2026: what each means, what stays the same, the 3 differences that change your plan, and a 90-day plan to cover all three.",
  targetQuery: "aeo vs geo vs seo",
  status: "draft",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "SEO gets your pages ranked in search results. AEO and GEO get your brand named and cited in AI answers from ChatGPT, Perplexity, Gemini and Google’s AI Overviews. On your own site the work is largely the same: Google says its AI features have no extra requirements beyond SEO. Three things genuinely change: off-site mentions matter much more, you plan around prompts instead of keywords, and clicks stop being the only scoreboard. Keep your SEO, then add those three. A 90-day plan is at the end.",
    },
    {
      t: "p",
      c: "Three acronyms make it sound like you need three strategies, three budgets and probably three agencies. You don’t.",
    },
    {
      t: "p",
      c: "Most of what gets sold as GEO is good SEO with a new name. The work that actually moves AI answers, getting your brand talked about on other people’s pages, is usually missing from the package. This guide explains what each term means, what to keep doing, what to change, and how to split your time.",
    },
    { t: "h2", c: "What SEO, AEO and GEO mean" },
    {
      t: "table",
      head: ["", "SEO", "AEO", "GEO"],
      rows: [
        ["Stands for", "Search engine optimization", "Answer engine optimization", "Generative engine optimization"],
        ["Goal", "Rank your pages in search results", "Be the answer: featured snippets, voice, AI answers", "Get named and cited in AI-written answers"],
        ["Where it shows", "Google and Bing results", "Snippets, assistants, AI chat", "ChatGPT, Perplexity, Gemini, AI Overviews"],
        ["You win when", "You rank and get the click", "Your answer is the one shown", "Your brand is named or your page is cited"],
      ],
    },
    {
      t: "p",
      c: "GEO comes from a <a href=\"https://arxiv.org/abs/2311.09735\">2023 research paper</a> that coined the term and found content changes could lift a page’s visibility in AI answers by up to 40%. AEO is the older idea of optimising to be <em>the</em> answer rather than one of ten links. You’ll also see “AI SEO” and “LLM SEO”. For planning and buying, treat AEO, GEO and AI SEO as one thing: getting into AI answers.",
    },
    { t: "h2", c: "What stays the same" },
    {
      t: "p",
      c: `For Google’s own AI features, the answer is official. Google says there are <a href="${google}">“no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary”</a>. A page needs to be indexed and eligible to show a snippet. You don’t need special files or markup.`,
    },
    { t: "p", c: "So this SEO checklist does double duty. Keep doing all of it:" },
    {
      t: "ul",
      items: [
        "<strong>Crawlable and indexed.</strong> Clean robots.txt, an XML sitemap, no important pages blocked.",
        "<strong>Text in the HTML.</strong> Key content visible without JavaScript (check with view-source).",
        "<strong>One page per question.</strong> A clear page for each thing buyers ask, not one page that mentions everything.",
        "<strong>Answer first.</strong> The direct answer in the first two sentences, then the detail.",
        "<strong>Fast and mobile-friendly.</strong> Same as always.",
        "<strong>Updated dates.</strong> Keep important pages current and show when they were updated.",
      ],
    },
    {
      t: "p",
      c: `Google also explains the one mechanical twist: AI Overviews and AI Mode use <a href="${google}">“query fan-out”</a>, running several related searches to build one answer. Your page can be cited for a sub-question you never targeted, which rewards pages that answer specific questions cleanly.`,
    },
    {
      t: "p",
      c: "What you can skip: llms.txt files (<a href=\"/blog/does-llms-txt-work\">four studies found AI crawlers almost never read them</a>) and schema markup as an AI tactic (<a href=\"https://ahrefs.com/blog/schema-ai-citations/\">Ahrefs found adding it didn’t lift AI citations</a>).",
    },
    { t: "h2", c: "Difference 1: What happens off your site matters more" },
    {
      t: "p",
      c: `This is the big one. A <a href="${toronto}">University of Toronto study</a> compared Google with GPT-4o, Claude, Perplexity and Gemini on 1,000 ranking-style queries. The AI engines’ cited domains barely overlapped Google’s top 10: 4.0% on average for GPT-4o, 11.1% for Gemini, 12.6% for Claude and 15.2% for Perplexity. Ranking first on Google doesn’t put you in the AI answer.`,
    },
    { t: "p", c: "The AI engines also lean much harder on independent sources. Share of cited sources by type, across consumer-electronics queries:" },
    {
      t: "table",
      head: ["Engine", "Independent media & reviews", "Brand sites", "Community & social"],
      rows: [
        ["Google", "40.7%", "25.7%", "33.6%"],
        ["GPT-4o", "56.9%", "35.6%", "7.6%"],
        ["Claude", "64.5%", "34.4%", "1.1%"],
        ["Perplexity", "49.9%", "38.7%", "11.4%"],
        ["Gemini", "46.2%", "46.4%", "7.3%"],
      ],
    },
    {
      t: "p",
      c: "<a href=\"https://ahrefs.com/blog/ai-overview-brand-correlation/\">Ahrefs’ study of 75,000 brands</a> points the same way: branded web mentions correlated 0.664 with visibility in AI Overviews, three times more than backlinks (0.218).",
    },
    { t: "p", c: "<strong>What to do about it:</strong>" },
    {
      t: "ol",
      items: [
        "Find the review sites, comparison articles and “best X” lists that AI cites for your category (run your buyers’ questions in ChatGPT and Perplexity and click the sources).",
        "Get onto those pages: pitch the authors, earn reviews, offer data they can use.",
        "Show up in the community threads where your category is discussed, especially on Reddit, which was the single most-cited domain in <a href=\"https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search\">Profound’s analysis of AI citations</a>. Read <a href=\"/blog/why-was-my-reddit-post-removed\">why Reddit posts get removed</a> first.",
        "Aim for a steady flow of new third-party mentions every month, not one launch-week spike.",
      ],
    },
    { t: "cta" },
    { t: "h2", c: "Difference 2: You plan around prompts, not just keywords" },
    {
      t: "p",
      c: "People type keywords into Google. They talk to ChatGPT. The same buying intent looks very different in each, and the prompt version tells you exactly what page to write:",
    },
    {
      t: "table",
      head: ["Keyword (SEO)", "Prompt (AEO / GEO)", "Page that answers it"],
      rows: [
        ["crm small business", "What’s the best CRM for a 6-person sales team that hates admin?", "“Best CRM for small teams” with a clear pick per team type"],
        ["hubspot alternatives", "What’s cheaper than HubSpot but still has email tracking?", "Alternatives page grouped by reason for leaving"],
        ["pipedrive vs hubspot", "Should a seed-stage startup use Pipedrive or HubSpot?", "Head-to-head with the verdict up top"],
        ["crm pricing", "How much does a CRM cost for 20 users per year?", "Pricing page with totals at 5, 20, 50 seats"],
      ],
    },
    {
      t: "p",
      c: "Build a list of 20–30 prompts from sales calls, support tickets and Reddit thread titles. Keep your keyword research too: AI answers are assembled from searches, so the pages that rank for those sub-searches still matter. Our <a href=\"/blog/how-to-get-cited-by-chatgpt\">ChatGPT citation playbook</a> walks through building the list.",
    },
    { t: "h2", c: "Difference 3: Clicks aren’t the whole scoreboard anymore" },
    {
      t: "p",
      c: "<a href=\"https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/\">Ahrefs compared 300,000 keywords</a> in December 2025: when an AI Overview appears, the top-ranking page gets 58% fewer clicks than expected. A buyer can read your name in an AI answer, never click, and search for you directly a week later. Your SEO report won’t show that.",
    },
    { t: "p", c: "Report these side by side every month:" },
    {
      t: "table",
      head: ["Metric", "Discipline", "Where to get it"],
      rows: [
        ["Rankings and clicks", "SEO", "Google Search Console, Bing Webmaster Tools"],
        ["Prompts where your brand is named", "AEO / GEO", "Your prompt list, run logged out monthly"],
        ["Prompts where your page is linked as a source", "AEO / GEO", "The citations under each AI answer"],
        ["Copilot citations", "AEO / GEO", "Bing Webmaster Tools, AI Performance report"],
        ["Branded searches", "Both", "Google Search Console"],
        ["“Found us via ChatGPT” signups", "Both", "A question on your signup form"],
      ],
    },
    {
      t: "p",
      c: "Keep mentions and linked citations on separate lines. They’re different results: you can be named without a link, or linked without being recommended.",
    },
    { t: "h2", c: "A smaller difference: freshness counts for more" },
    {
      t: "p",
      c: `The same Toronto study measured how old cited pages were. For consumer-electronics queries, the median cited page was 79.8 days old for GPT-4o and 62.3 for Claude, against 130.4 days for Google. In automotive the gap was wider still. Update your comparison, pricing and “best X” pages at least every quarter, and show the date.`,
    },
    {
      t: "p",
      c: "A practical routine: keep a list of your 10 most important answer pages, put a quarterly reminder in the calendar, and on each pass update prices, screenshots and anything a competitor has changed. Change the visible “updated” date only when the content genuinely changed. A page that says it was updated yesterday but still quotes last year’s prices does more harm than an honest older date.",
    },
    { t: "h2", c: "How to split your time" },
    {
      t: "p",
      c: "For a small team with an SEO foundation already in place, here’s a reasonable starting split. Adjust once you see where you’re missing:",
    },
    {
      t: "table",
      head: ["Share of effort", "Work", "Discipline"],
      rows: [
        ["About 40%", "Answer pages: comparisons, alternatives, “best X for Y”, pricing, how-tos", "SEO + AEO"],
        ["About 40%", "Off-site: list outreach, reviews, Reddit and community threads, data others can cite", "GEO"],
        ["About 10%", "Technical: crawler access, rendering, Bing indexing, page speed", "SEO + GEO"],
        ["About 10%", "Measurement: prompt tracking, citations, branded search", "All three"],
      ],
    },
    {
      t: "p",
      c: "If you have no SEO foundation yet, flip the first month: fix technical access and publish your core answer pages before you start outreach.",
    },
    { t: "h2", c: "Questions to ask anyone selling you GEO" },
    {
      t: "ol",
      items: [
        "Which prompts will you track, and can I see the list before we start?",
        "Will you report brand mentions and linked citations separately?",
        "How do you get us mentioned on third-party sites, specifically?",
        "What do you do on Reddit and communities, and how do you avoid getting removed?",
        "What on-page work is different from normal SEO, and why?",
        "Do you recommend llms.txt or schema as AI tactics? (If yes, ask for the evidence.)",
        "How do you test prompts so personalisation doesn’t skew the results?",
        "What should we expect to see by month 3?",
      ],
    },
    {
      t: "p",
      c: "Good answers are specific and talk about prompts, pages and third-party mentions. Vague answers about “AI-optimised content” are SEO with a new invoice line.",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Pausing SEO to “do GEO”.</strong> AI answers are built from pages that are crawlable, indexed and ranking for the sub-searches behind a prompt. Drop SEO and you drop out of both.",
        "<strong>Rewriting every page “for AI”.</strong> Clear, answer-first pages already work for both. Rewrite the pages that answer buying questions first and leave the rest.",
        "<strong>Spending everything on your own site.</strong> The AI engines in the Toronto study took most of their citations from independent sites. If none of your budget goes off-site, you’re missing the biggest lever.",
        "<strong>Tracking AI visibility from your own account.</strong> ChatGPT personalises answers to your history. Test logged out or in a temporary chat.",
        "<strong>Reporting one blended “AI visibility score”.</strong> A single number hides whether you’re being named, linked, or neither. Keep mentions, citations and clicks separate.",
        "<strong>Buying three services.</strong> One team that covers on-page, off-site and measurement beats three that each assume the others are doing the hard part.",
      ],
    },
    { t: "h2", c: "Your 90-day plan" },
    {
      t: "table",
      head: ["When", "Do this", "You should have"],
      rows: [
        ["Weeks 1–2", "Fix crawler access and Bing indexing. Build a 20–30 prompt list and run a baseline.", "A sheet of who’s named and cited for each prompt"],
        ["Weeks 3–6", "Publish or rewrite comparison, alternatives and pricing pages, answer-first.", "4–8 answer pages live and indexed"],
        ["Weeks 4–12", "Outreach to cited lists, reviews, Reddit and community answers.", "Your brand on several pages AI already cites"],
        ["Monthly", "Re-run prompts; report SEO, mentions and citations side by side.", "A trend line, not a one-off snapshot"],
      ],
    },
    {
      t: "p",
      c: "AEO vs GEO vs SEO comes down to this: the same on-page job, plus two things SEO never asked of you. Be talked about on other people’s pages, and measure whether you’re named and cited, not only whether you’re clicked. Keep your SEO, add those, and you’ve covered all three acronyms.",
    },
  ],
  faqs: [
    {
      q: "Is AEO the same as GEO?",
      a: "For practical purposes, yes. AEO started with featured snippets and voice answers, and GEO was named in a 2023 research paper on generative engines. Both now mean getting your brand into AI-written answers.",
    },
    {
      q: "Do I need a separate GEO agency if I already have SEO?",
      a: "Not for the on-page work, which Google says is ordinary SEO. Ask whether your SEO provider also builds off-site mentions and reports AI mentions and citations. If not, that’s the gap to fill.",
    },
    {
      q: "Is SEO dead because of AI?",
      a: "No. Google’s AI features only cite indexed pages, and ChatGPT search relies on search partners and its own crawler. What changed is the payoff: AI Overviews cut the top result’s clicks by 58% in Ahrefs’ December 2025 data.",
    },
    {
      q: "Which AI search engine should I optimise for first?",
      a: "Start where your buyers search. For most B2B brands that’s Google, including AI Overviews, then ChatGPT. Perplexity overlaps most with Google’s results, so it tends to reward the same pages.",
    },
    {
      q: "How do I measure GEO?",
      a: "Pick 20–30 prompts your buyers ask and re-run them monthly from a logged-out account. Record whether you’re named, whether you’re linked, and who else appears. Add Search Console and Bing Webmaster Tools’ AI Performance report.",
    },
  ],
  sources: [
    { title: "Google: AI features", url: google, type: "primary", read: "2026-10-25" },
    { title: "Toronto study", url: toronto, type: "primary", read: "2026-10-25" },
    { title: "GEO paper", url: "https://arxiv.org/abs/2311.09735", type: "primary", read: "2026-10-25" },
    { title: "Ahrefs: AI Overviews reduce clicks by 58%", url: "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/", type: "platform", read: "2026-10-25" },
    { title: "Ahrefs: brand visibility factors", url: "https://ahrefs.com/blog/ai-overview-brand-correlation/", type: "platform", read: "2026-10-25" },
    { title: "Ahrefs: schema and AI citations", url: "https://ahrefs.com/blog/schema-ai-citations/", type: "platform", read: "2026-10-25" },
    { title: "Profound × Reddit", url: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search", type: "vendor", read: "2026-10-25" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "why-chatgpt-recommends-your-competitor", "does-llms-txt-work"],
  cta: {
    mid: "Not sure whether your SEO already covers AEO, or where the gap is? We’ll show you side by side.",
    title: "See your SEO and AI visibility on one page.",
    text: "We compare where you rank on Google with where you’re named and cited in ChatGPT, Perplexity and AI Overviews, and show you which gap to close first.",
    button: "Compare my SEO and AI visibility",
  },
};
