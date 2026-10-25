import type { Post } from "../../lib/blog";

const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const google = "https://developers.google.com/search/docs/appearance/ai-features";

export const post: Post = {
  slug: "aeo-vs-geo-vs-seo",
  tracker: "1.1",
  bucket: "basics",
  style: "RS Playbook",
  title: "AEO vs GEO vs SEO: one job, three names, and where they really differ",
  dek: "Google says optimising for its AI answers is still SEO, and it’s mostly right. The differences that matter are off your site and in how you measure success.",
  description: "AEO vs GEO vs SEO explained: why Google calls AI search optimisation SEO, the two differences that change your plan, and what to measure in 2026.",
  targetQuery: "aeo vs geo vs seo",
  status: "draft",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      items: [
        "<strong>SEO</strong> gets your pages ranked in search results. <strong>AEO</strong> (answer engine optimization) and <strong>GEO</strong> (generative engine optimization) get your brand into the answers AI tools write. People use the last two interchangeably.",
        "<strong>On your own site, they are the same work.</strong> Google says its AI features have “no additional requirements” beyond normal SEO.",
        "<strong>Difference one: what happens off your site counts for more.</strong> AI answers cite independent third-party pages more than Google’s results do.",
        "<strong>Difference two: clicks stop being the scoreboard.</strong> AI Overviews cut the top result’s clicks by 58% in Ahrefs’ data, so you count mentions and citations too.",
        "<strong>Timeline:</strong> the on-site part is a few weeks of fixes; the off-site part is months.",
      ],
    },
    {
      t: "p",
      c: "SEO, AEO and GEO are mostly the same job described three ways. SEO aims at ranked links in search results, and AEO and GEO aim at being named or cited inside AI-written answers in ChatGPT, Perplexity, Gemini and Google’s AI Overviews. On your own website the work barely changes: Google says its AI features need nothing beyond normal SEO. Two things do change, and both are bigger than any on-page tweak: off-site mentions carry more weight, and clicks stop being a complete measure of success.",
    },
    {
      t: "p",
      c: "Here’s the trap. Three acronyms suggest three budgets, three agencies and three dashboards. In practice most “GEO services” are SEO with a new invoice line, and the work that does move AI answers, getting named on other people’s pages, is the part nobody puts in the package. This guide is for founders and marketing leads deciding where to spend on search in 2026.",
    },
    { t: "h2", c: "What do SEO, AEO and GEO each mean?" },
    {
      t: "table",
      head: ["", "SEO", "AEO", "GEO"],
      rows: [
        ["Stands for", "Search engine optimization", "Answer engine optimization", "Generative engine optimization"],
        ["Aims at", "Ranked links on Google and Bing", "Being the answer: snippets, voice, AI answers", "Being named or cited in AI-generated answers"],
        ["Where it shows", "Search results pages", "Featured snippets, assistants, AI chat", "ChatGPT, Perplexity, Gemini, AI Overviews"],
        ["Unit of success", "Rankings and clicks", "Answers won", "Mentions and linked citations"],
      ],
    },
    {
      t: "p",
      c: "GEO comes from a 2023 paper by Aggarwal and colleagues, published at KDD 2024, which defined generative engines and found content changes could raise visibility in their answers “by up to 40%”, with results varying by domain. AEO is older and broader. You’ll also see “AI SEO” and “LLM SEO”. For buying decisions, treat AEO, GEO and AI SEO as one thing: getting into AI answers.",
    },
    { t: "h2", c: "Is GEO just SEO? What Google says" },
    {
      t: "p",
      c: "For Google’s own AI features, yes. Google’s guidance, read on 25 October 2026, says there are “no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary”. It says you don’t need “new machine readable files, AI text files, or markup”, that a page only needs to be indexed and eligible for a snippet, and that AI feature traffic is counted inside the normal Search Console performance report.",
    },
    {
      t: "p",
      c: "Google also explains the one mechanical difference: AI Overviews and AI Mode use “query fan-out”, running several related searches across subtopics to build an answer. Your page can be cited for a sub-question you never targeted. That rewards pages that answer specific questions cleanly, which good SEO already did.",
    },
    {
      t: "p",
      c: "The large tests agree that the on-page rituals sold as GEO don’t move citations. Ahrefs tracked 1,885 pages that added schema markup against 4,000 that didn’t and found no meaningful citation lift on any platform. Four studies of llms.txt found AI crawlers almost never fetch the file (<a href=\"/blog/does-llms-txt-work\">the evidence is here</a>).",
    },
    {
      t: "quote",
      c: "A cousin of SEO and equally unsavory in how trust is being eroded through info shaping.",
      cite: "boilerupnc, on GEO, Hacker News, September 2026",
      href: "https://news.ycombinator.com/item?id=49537870",
    },
    {
      t: "p",
      c: "That is the sceptic’s view, and it lands on a real point: if GEO means planting text for machines, it deserves the reputation. The useful version is the opposite. It means being accurately described on pages people and AI already trust.",
    },
    { t: "h2", c: "Difference one: what happens off your site counts for more" },
    {
      t: "p",
      c: "A University of Toronto team compared Google with GPT-4o, Claude, Perplexity and Gemini on 1,000 ranking-style queries and published the results in April 2026. The AI engines’ cited domains barely overlapped Google’s top 10 results: 4.0% on average for GPT-4o, 11.1% for Gemini, 12.6% for Claude and 15.2% for Perplexity. Ranking first on Google doesn’t put you in the AI answer.",
    },
    {
      t: "table",
      caption: "Share of cited sources by type across all query intents, from Figure 2 of the University of Toronto study (consumer-electronics queries). Earned = independent media and reviews; brand = company-owned sites; social = community platforms.",
      head: ["Engine", "Earned", "Brand", "Social"],
      rows: [
        ["Google", "40.7%", "25.7%", "33.6%"],
        ["GPT-4o", "56.9%", "35.6%", "7.6%"],
        ["Claude 4.5 Sonnet", "64.5%", "34.4%", "1.1%"],
        ["Perplexity Sonar Pro", "49.9%", "38.7%", "11.4%"],
        ["Gemini 2.5 Flash", "46.2%", "46.4%", "7.3%"],
      ],
    },
    {
      t: "p",
      c: "The AI engines lean on earned media, meaning independent publishers and review sites, far more than Google does. In comparison-style queries that share rose to 59–86%. Ahrefs’ study of 75,000 brands found the same pattern from the other side: branded web mentions correlated 0.664 with visibility in AI Overviews, against 0.218 for backlinks. Correlation, Ahrefs notes, not proof of cause.",
    },
    {
      t: "p",
      c: "This is the real gap between the disciplines. SEO budgets go mostly into your own pages and links. AI visibility depends more on whether other sites, reviewers and community threads describe you, which is why Reddit, review sites and comparison articles show up so often in AI citations. Our post on <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a> goes deeper on this.",
    },
    { t: "cta" },
    { t: "h2", c: "Difference two: clicks stop being the scoreboard" },
    {
      t: "p",
      c: "Ahrefs compared 300,000 keywords in December 2025 and found that when an AI Overview appears, the top-ranking page’s click-through rate is 58% lower than expected: “For every 100 clicks you could historically earn for a top-ranking page, Google now ‘keeps’ 58.” Its April 2025 version of the same study found 34.5%.",
    },
    {
      t: "p",
      c: "So the SEO report that tracks rankings and sessions under-counts what is happening. A buyer can read your name in an AI answer, never click, and search for you directly a week later. Measure three things side by side: rankings and clicks (SEO), brand mentions in AI answers, and linked citations to your pages. Mentions and citations are different results and should never share a line on a report. Google folds AI feature traffic into Search Console’s normal Web report, and Bing Webmaster Tools reports how often Microsoft Copilot cites you.",
    },
    {
      t: "quote",
      c: "I have a friend who works in B2B eCommerce specifically with some projects in D2C and they’re saying that SEO is mostly a dead end now. It’s all about Answer Engine Optimization (AEO) or Generative Engine Optimization (GEO).",
      cite: "theshrike79, Hacker News, August 2026",
      href: "https://news.ycombinator.com/item?id=49270996",
    },
    {
      t: "p",
      c: "That secondhand verdict goes too far. Google’s AI features only cite pages that are indexed and eligible to show with a snippet, and ChatGPT search pulls from search partners, so a site that isn’t crawlable and indexed doesn’t get into AI answers either. SEO is the entry ticket. It just isn’t the whole game anymore.",
    },
    { t: "h2", c: "A smaller difference: AI answers favour fresher pages" },
    {
      t: "p",
      c: "The Toronto team also measured the age of cited pages. For consumer-electronics queries, the median cited page was 62.3 days old for Claude, 79.8 for GPT-4o and 90.4 for Perplexity, against 130.4 days for Google’s results. In automotive the gap was wider: 148 to 217 days for the AI engines, against 493 for Google. Keeping key comparison and pricing pages updated, with a visible date, matters more for AI answers than it did for rankings.",
    },
    { t: "h2", c: "So, what should you actually do differently?" },
    {
      t: "ol",
      items: [
        "<strong>Keep doing SEO</strong> (crawlable, indexed, fast, pages that answer specific questions). It is the entry ticket for Google’s AI features and for ChatGPT search.",
        "<strong>Add the AI-specific access checks:</strong> allow OAI-SearchBot and the other AI search crawlers, and get indexed by Bing. Our <a href=\"/blog/how-to-get-cited-by-chatgpt\">ChatGPT citation playbook</a> has the list.",
        "<strong>Research prompts, not just keywords,</strong> and write pages that answer them directly, starting with comparisons and alternatives.",
        "<strong>Move budget off-site:</strong> reviews, comparison articles and community threads where buyers ask about your category. Reddit is one of the few places a smaller brand can be named quickly; read <a href=\"/blog/why-was-my-reddit-post-removed\">why Reddit posts get removed</a> before you start.",
        "<strong>Report mentions, citations and clicks separately,</strong> from a fixed prompt list, every month.",
      ],
    },
    {
      t: "p",
      c: "AEO vs GEO vs SEO, then: the same on-page job, with AI search adding two demands that SEO never had. Be talked about on other people’s pages, and measure success by whether you’re named and cited, not only by whether you’re clicked. Don’t buy three services. Buy SEO done properly, plus off-site visibility and honest measurement.",
    },
  ],
  faqs: [
    {
      q: "Is AEO the same as GEO?",
      a: "For practical purposes, yes. AEO started with featured snippets and voice answers, and GEO was named in a 2023 research paper about generative engines. Both now mean getting your brand into AI-written answers.",
    },
    {
      q: "Do I need a separate GEO agency if I already have SEO?",
      a: "Not for the on-page work, which Google says is ordinary SEO. Check whether your SEO provider also works on off-site mentions and reports AI mentions and citations. If not, that is the gap to fill.",
    },
    {
      q: "Is SEO dead because of AI?",
      a: "No. Google’s AI features only cite indexed pages, and ChatGPT search relies on search partners and its own crawler, so unindexed sites don’t appear in either. What has changed is the payoff: AI Overviews cut the top result’s clicks by 58% in Ahrefs’ December 2025 data.",
    },
    {
      q: "Which AI search engine should I optimise for first?",
      a: "Start where your buyers search. For most B2B brands that’s Google, including AI Overviews, then ChatGPT. Perplexity’s cited domains overlapped Google’s top 10 the most in the Toronto study, at 15.2%, so it tends to reward the same pages.",
    },
    {
      q: "How do I measure GEO results?",
      a: "Pick 20 to 30 prompts your buyers ask and re-run them monthly from a logged-out account. Record whether you’re named, whether you’re linked, and who else appears. Add Search Console and Bing Webmaster Tools’ AI Performance report for the free signals.",
    },
  ],
  sources: [
    { title: "AI features and your website (Google Search Central)", url: google, type: "primary", read: "2026-10-25" },
    { title: "Navigating the Shift (University of Toronto, EDBT/ICDT 2026 workshops)", url: toronto, type: "primary", read: "2026-10-25" },
    { title: "GEO: Generative Engine Optimization (Aggarwal et al., KDD 2024)", url: "https://arxiv.org/abs/2311.09735", type: "primary", read: "2026-10-25" },
    { title: "Update: AI Overviews Reduce Clicks by 58% (Ahrefs)", url: "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/", type: "platform", read: "2026-10-25" },
    { title: "An Analysis of AI Overview Brand Visibility Factors, 75K brands (Ahrefs)", url: "https://ahrefs.com/blog/ai-overview-brand-correlation/", type: "platform", read: "2026-10-25" },
    { title: "We tracked 1,885 pages adding schema. AI citations barely moved (Ahrefs)", url: "https://ahrefs.com/blog/schema-ai-citations/", type: "platform", read: "2026-10-25" },
    { title: "Searching the web with ChatGPT (OpenAI Help Center)", url: "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt", type: "primary", read: "2026-10-25" },
    { title: "Hacker News comment by boilerupnc on GEO", url: "https://news.ycombinator.com/item?id=49537870", type: "forum", read: "2026-10-25" },
    { title: "Hacker News comment by theshrike79 on SEO and AEO", url: "https://news.ycombinator.com/item?id=49270996", type: "forum", read: "2026-10-25" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "why-chatgpt-recommends-your-competitor", "does-llms-txt-work"],
  cta: {
    mid: "Not sure whether your SEO is already doing the AEO job, or where the gap is? We’ll show you side by side.",
    title: "See your SEO and AI visibility on one page.",
    text: "We compare where you rank on Google with where you’re named and cited in ChatGPT, Perplexity and AI Overviews, and show which gap to close first.",
    button: "Compare my SEO and AI visibility",
  },
};
