import type { Post } from "../../lib/blog";

const google = "https://developers.google.com/search/docs/appearance/ai-features";
const ahrefsCtr = "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/";
const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";
const pew = "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/";

export const post: Post = {
  slug: "how-to-get-cited-in-google-ai-overviews",
  tracker: "2.5",
  bucket: "cited",
  style: "RS Playbook",
  title: "How to get cited in Google AI Overviews: a step-by-step guide",
  dek: "Google says there are no special tricks, and it’s right. But there’s a clear order of work that gets pages chosen as supporting links. Here it is, with the checks and page templates.",
  description: "How to get cited in Google AI Overviews and AI Mode: eligibility rules, query fan-out, page structure that gets picked, brand mentions, and how to measure it.",
  targetQuery: "how to get cited in google ai overviews",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "To be cited in Google AI Overviews or AI Mode, a page must be indexed and eligible to show a snippet in Google Search. There’s no special markup or file to add. Beyond that, Google’s AI runs several related searches for one question (“query fan-out”), so pages that answer specific sub-questions clearly, near the top of a section, get picked more. Do it in this order: confirm eligibility in Search Console, map the sub-questions behind your target queries, write answer-first sections for each, keep pages fresh, and build mentions on other sites, which correlate strongly with AI Overview visibility.",
    },
    {
      t: "p",
      c: "AI Overviews now sit above the results for a large share of informational searches. When one appears, the top-ranking page gets far fewer clicks: <a href=\"" + ahrefsCtr + "\">Ahrefs measured 58% fewer</a> across 300,000 keywords. Being one of the cited sources inside the overview is how you stay visible on those searches.",
    },
    {
      t: "p",
      c: "Google’s guidance on this is short and honest: do good SEO. That’s true, and it can also feel unhelpful. This guide turns it into a concrete sequence you can work through page by page.",
    },
    { t: "h2", c: "What Google says is required" },
    {
      t: "p",
      c: `Google’s documentation sets one requirement: to be shown as a supporting link, <a href="${google}">“a page must be indexed and eligible to be shown in Google Search with a snippet”</a>. It also says plainly that you <a href="${google}">“don’t need to create new machine readable files, AI text files, or markup”</a>, and that there’s no special schema to add.`,
    },
    { t: "p", c: "Google’s listed best practices are the ordinary ones:" },
    {
      t: "ul",
      items: [
        "Allow crawling in robots.txt (and in your CDN settings).",
        "Make content easy to find through internal links.",
        "Give users a good page experience.",
        "Make sure important content is available as text, not only in images or video.",
      ],
    },
    {
      t: "p",
      c: "So step one is not clever. It’s checking that nothing basic is blocking you, which is where a surprising number of sites fail.",
    },
    { t: "h2", c: "Step 1: Confirm your pages are eligible" },
    { t: "p", c: "Run these four checks on every page you want cited. Our <a href=\"/blog/technical-ai-search-checklist\">technical AI search checklist</a> covers the same ground for ChatGPT and Perplexity too." },
    {
      t: "ol",
      items: [
        "<strong>Inspect the URL in Search Console.</strong> It should say “URL is on Google”. If it says “Discovered” or “Crawled, currently not indexed”, fix that first, usually with internal links and a stronger page.",
        "<strong>Check for snippet blocks.</strong> View the page source and search for <code>nosnippet</code>, <code>max-snippet:0</code> and <code>data-nosnippet</code>. Each one limits what Google can show, and a page that can’t show a snippet can’t be a supporting link.",
        "<strong>Check robots.txt</strong> for any Disallow that covers the page, and test that Googlebot gets a 200 response.",
        "<strong>Check the text is in the HTML.</strong> Use Search Console’s “View crawled page” to confirm the main content and tables appear.",
      ],
    },
    {
      t: "callout",
      tone: "note",
      title: "Google-Extended won’t affect this",
      c: "Blocking Google-Extended in robots.txt controls Gemini’s use of your content. It doesn’t remove you from AI Overviews or AI Mode, which use Googlebot and Google’s normal index.",
    },
    { t: "h2", c: "Step 2: Map the sub-questions behind your query" },
    {
      t: "p",
      c: `Google says AI Overviews and AI Mode may use a <a href="${google}">“query fan-out” technique</a>, issuing “multiple related searches across subtopics and data sources”. One question from a user becomes several searches, and the overview is assembled from the best answers to each.`,
    },
    {
      t: "p",
      c: "That’s why a page can be cited for a query it doesn’t rank for: it was the best answer to one of the hidden sub-searches. Your job is to guess those sub-searches and answer them. For each target query:",
    },
    {
      t: "ol",
      items: [
        "<strong>Search it and read the AI Overview.</strong> Note each point it makes. Each point usually maps to a sub-question.",
        "<strong>Open “People also ask”</strong> and note the questions. They’re close to the sub-searches.",
        "<strong>Click the cited sources</strong> and note which passage each one supplied.",
        "<strong>Write the list:</strong> 5 to 10 sub-questions per target query.",
      ],
    },
    {
      t: "table",
      head: ["Target query", "Likely sub-questions"],
      rows: [
        ["how to reduce customer churn", "what is a good churn rate; main causes of churn; how to measure churn; onboarding and churn; churn by industry"],
        ["best payroll software for small business", "payroll cost per employee; payroll features small businesses need; payroll vs PEO; payroll for contractors"],
        ["how to start composting at home", "what can be composted; compost bin vs pile; how long compost takes; composting in an apartment"],
      ],
      caption: "Example sub-question maps. Build yours from the overview, People also ask and the cited sources.",
    },
    {
      t: "p",
      c: "Our deeper guide to <a href=\"/blog/what-is-query-fan-out\">query fan-out</a> covers how to build these maps at scale.",
    },
    { t: "cta" },
    { t: "h2", c: "Step 3: Write sections that can be lifted" },
    {
      t: "p",
      c: "AI Overviews quote passages, not whole pages. Each sub-question should have its own section that works on its own if someone reads only that part. Use this pattern:",
    },
    {
      t: "code",
      label: "Section template",
      c: "## [The sub-question, phrased the way people ask it]\n\n[1-2 sentence direct answer, with the key number or fact.]\n\n[2-4 sentences of context: when it applies, exceptions, why.]\n\n[A list, steps or a small HTML table if the answer has parts.]\n\n[One sentence pointing to the next step or related section.]",
    },
    {
      t: "p",
      c: "A few rules make sections much easier to pick:",
    },
    {
      t: "ul",
      items: [
        "<strong>Answer in the first sentence.</strong> “A good monthly churn rate for B2B SaaS is…” beats “Churn is a complex topic…”.",
        "<strong>Use the question as the heading.</strong> It matches the sub-search.",
        "<strong>Name the entity, don’t rely on “it”.</strong> A passage read on its own needs to make sense without the previous paragraph.",
        "<strong>Use real HTML tables</strong> for comparisons, costs and specs.",
        "<strong>Be specific.</strong> Numbers, ranges, steps and named examples are more useful to quote than general advice.",
        "<strong>Add what others can’t:</strong> first-hand experience, original data, photos, worked examples.",
      ],
    },
    { t: "h2", c: "Before and after: one section rewritten" },
    {
      t: "p",
      c: "Here’s the kind of rewrite that turns a section nobody quotes into one that gets picked. The sub-question is “how long does it take to set up payroll software?”",
    },
    {
      t: "code",
      label: "Before",
      c: "## Getting started\n\nEvery business is different, and getting started with a new\nsystem can feel overwhelming. That's why our team is here to\nhelp you every step of the way, from day one.",
    },
    {
      t: "code",
      label: "After",
      c: "## How long does it take to set up payroll software?\n\nMost small businesses can set up payroll software in 1-3 hours,\nplus 1-2 days if you need to collect employee bank and tax details.\n\nIt takes longer if you're switching providers mid-year, because\nyou'll need year-to-date figures for each employee.\n\n| Step                          | Typical time |\n| Company and tax details       | 20-30 min    |\n| Add employees                 | 5 min each   |\n| Connect bank account          | 1-2 days     |\n| Run a test payroll            | 30 min       |",
    },
    {
      t: "p",
      c: "The “after” version answers in the first sentence, names the subject, gives ranges, covers the common exception and puts the detail in a table. Any one of those lines can be quoted on its own. The table in your page should be a real HTML table; it’s shown as text here only to illustrate.",
    },
    { t: "h2", c: "Page templates for the three most common query types" },
    {
      t: "table",
      head: ["Query type", "Page structure", "Must include"],
      rows: [
        ["How-to (“how to set up X”)", "Short answer → numbered steps → time and cost → common problems → FAQ", "Steps as an ordered list; time per step"],
        ["Comparison (“X vs Y”, “best X for Y”)", "Verdict in two sentences → comparison table → who each option suits → pricing → FAQ", "HTML table; honest trade-offs; current prices"],
        ["Cost (“how much does X cost”)", "Typical range in the first sentence → table by size or tier → what changes the price → hidden costs", "Ranges with a date; what’s included"],
      ],
    },
    {
      t: "p",
      c: "These structures match how overviews are usually written: a short answer, then the supporting detail. Pages built this way give Google an easy passage for each part of the overview.",
    },
    { t: "h2", c: "Step 4: Keep it fresh and visible" },
    {
      t: "p",
      c: "Overviews favour current information for anything that changes: prices, features, rules, statistics. Put a visible “Updated” date on pages that cover them, review them on a schedule, and change the date only when the content changes. A quarterly review is enough for most pages; pricing and comparison pages deserve monthly checks. Keep a simple list of each page, its owner and its next review date, so updates happen on schedule rather than when someone remembers.",
    },
    { t: "h2", c: "Step 5: Build mentions beyond your site" },
    {
      t: "p",
      c: `On-page work makes you eligible and quotable. What other sites say about you decides how often you’re chosen, especially for queries that name a category. <a href="${brands}">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated 0.664 with AI Overview visibility, three times more than backlinks.`,
    },
    {
      t: "ul",
      items: [
        "Get listed in the “best [category]” roundups that appear as sources in overviews for your queries.",
        "Keep review profiles current and ask customers for reviews.",
        "Answer questions in the forums and communities Google shows for your topic, with disclosure.",
        "Earn coverage with original data that journalists and bloggers can cite.",
      ],
    },
    { t: "h2", c: "Step 6: Measure it" },
    {
      t: "p",
      c: `Google counts AI Overview and AI Mode traffic <a href="${google}">inside the normal “Web” search type</a> in Search Console’s Performance report. There’s no separate AI Overview filter. Work around it:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Keep a list of target queries</strong> and check monthly whether an overview appears and whether you’re cited.",
        "<strong>Watch impressions vs clicks</strong> on those queries in Search Console. Rising impressions with flat clicks often means you’re shown in or near an overview.",
        "<strong>Track the cited sources</strong> each month. When a competitor replaces you, compare the two passages and fix yours.",
      ],
    },
    {
      t: "p",
      c: `Set expectations with your team: being cited doesn’t mean many clicks. In <a href="${pew}">Pew Research’s study</a>, people clicked a link inside an AI summary on just 1% of visits that showed one. The value is being the brand named and quoted at the moment someone is learning about the topic.`,
    },
    { t: "h2", c: "When a competitor is cited instead of you" },
    {
      t: "ol",
      items: [
        "<strong>Open their cited page</strong> and find the exact passage the overview used. It’s usually highlighted when you click the link.",
        "<strong>Compare it with your section</strong> on the same sub-question. Is theirs more direct, more specific, more recent, or in a table?",
        "<strong>Fix the gap</strong>, not the whole page. Usually it’s the first two sentences or a missing table.",
        "<strong>Check again in two to four weeks</strong>, after Google has recrawled the page. You can request recrawling with URL Inspection.",
      ],
    },
    {
      t: "p",
      c: "If the cited source is a third-party roundup or review site rather than a competitor’s own page, the fix is off-site: get listed on that page. That’s often the case for “best” and “vs” queries. Our guide to <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why AI recommends your competitor</a> covers that outreach in detail.",
    },
    { t: "h2", c: "Why ranking first isn’t enough" },
    {
      t: "p",
      c: `Pages cited in AI answers often aren’t the ones ranking at the top. Across ChatGPT, Gemini and Copilot, <a href="${overlap}">Ahrefs found only 12% of cited links ranked in Google’s top 10</a> for the same query. Google’s own overviews draw more on its rankings than other assistants do, but the fan-out means pages that answer a narrow sub-question can win citations without ranking for the main term.`,
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t add schema expecting it to get you into overviews. Google says none is required.",
        "Don’t write separate “AI versions” of pages. Write one clear page for people.",
        "Don’t use <code>nosnippet</code> to protect content and expect to be cited.",
        "Don’t stuff a page with every sub-question in one paragraph. Give each its own section.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Burying the answer.</strong> Intros, stories and definitions before the answer make passages harder to quote.",
        "<strong>Vague headings</strong> like “Overview” or “Things to consider” that don’t match any question.",
        "<strong>Answers inside images or accordions</strong> loaded by JavaScript.",
        "<strong>Stale numbers</strong> on pages that cover prices or statistics.",
        "<strong>Only working on-site.</strong> Mentions elsewhere matter more for category queries.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do I get my website in Google AI Overviews?",
      a: "Make sure the page is indexed and can show a snippet in Google Search, then answer the specific questions behind your target query clearly, in their own sections, near the top. Building mentions on other sites helps you get chosen more often.",
    },
    {
      q: "Do I need schema markup for AI Overviews?",
      a: "No. Google says there’s no special schema.org structured data you need to add, and no AI text files or new markup.",
    },
    {
      q: "Can I see AI Overview traffic in Search Console?",
      a: "Not separately. Google includes AI Overview and AI Mode traffic in the overall Web search type in the Performance report.",
    },
    {
      q: "Why is my page cited in AI Overviews when it doesn’t rank for that query?",
      a: "Because Google uses query fan-out: it runs several related searches and builds the overview from the best answers. Your page may be the best answer to one of those sub-searches.",
    },
    {
      q: "How do I stop Google using my content in AI Overviews?",
      a: "Use nosnippet, data-nosnippet, max-snippet or noindex. These also limit how your page appears in normal search results. Blocking Google-Extended doesn’t affect AI Overviews.",
    },
  ],
  sources: [
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-27" },
    { title: "Ahrefs: AI Overviews reduce clicks", url: ahrefsCtr, type: "vendor", read: "2026-10-27" },
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-27" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-10-27" },
    { title: "Pew Research: AI summaries and clicks", url: pew, type: "research", read: "2026-10-27" },
  ],
  related: ["what-is-query-fan-out", "is-seo-dead", "how-to-get-cited-by-chatgpt"],
  cta: {
    mid: "Want to know which AI Overviews you should be in, and which pages to fix first? We’ll map them.",
    title: "Find the AI Overviews you’re missing from.",
    text: "We check your target queries for AI Overviews, list who’s cited instead of you, map the sub-questions, and tell you which sections to write or rewrite.",
    button: "Map my AI Overviews",
  },
};
