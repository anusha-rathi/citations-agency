import type { Post } from "../../lib/blog";

const pew = "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/";
const ahrefsCtr = "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/";
const googleBlog = "https://blog.google/products/search/ai-search-driving-more-queries-higher-quality-clicks/";
const google = "https://developers.google.com/search/docs/appearance/ai-features";
const bing = "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview";

export const post: Post = {
  slug: "ai-overviews-traffic-drop",
  tracker: "1.8",
  bucket: "basics",
  style: "Data post",
  title: "AI Overviews traffic drop: how to read Search Console now",
  dek: "Impressions holding, clicks falling? That’s the AI Overviews pattern. Here’s what the click data shows, how to confirm it on your own site in Search Console, and what to do about each kind of page.",
  description: "AI Overviews traffic drop explained: what Pew, Ahrefs and Google say about clicks, how to diagnose it in Search Console and what to do for each page type.",
  targetQuery: "ai overviews traffic drop",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "AI Overviews reduce clicks on the searches where they appear. Pew found people clicked a traditional result on 8% of Google visits with an AI summary, against 15% without one, and Ahrefs measured 58% fewer clicks to the top-ranking page when an AI Overview appeared. Google says total organic clicks are “relatively stable” and that quick factual-answer sites see less traffic. The pattern in Search Console is stable or rising impressions with falling clicks, concentrated on informational queries. Search Console doesn’t separate AI Overview traffic, so diagnose it by query type, then upgrade, connect or merge the affected pages.",
    },
    {
      t: "p",
      c: "Few things cause more worry in a marketing meeting than a Search Console chart where the clicks line slopes down while impressions stay flat. Often the cause is AI Overviews answering the question on the results page. Sometimes it’s something else entirely, and fixing the wrong thing wastes months.",
    },
    {
      t: "p",
      c: "Here’s what the data says, how to diagnose your own site step by step in about an hour, and what to do about each kind of affected page.",
    },
    { t: "h2", c: "What the data shows" },
    {
      t: "table",
      head: ["Source", "Finding"],
      rows: [
        [`<a href="${pew}">Pew Research</a> (900 adults, 68,879 searches, March 2025)`, "Clicked a traditional result on 8% of visits with an AI summary vs 15% without"],
        ["Pew Research", "Clicked a link inside the AI summary on 1% of visits"],
        ["Pew Research", "Ended their browsing session on 26% of visits with a summary vs 16% without"],
        ["Pew Research", "AI summaries appeared on 18% of searches; on 60% of question-style searches"],
        [`<a href="${ahrefsCtr}">Ahrefs</a> (300,000 keywords, December 2025)`, "Top-ranking page got 58% fewer clicks when an AI Overview appeared"],
        [`<a href="${googleBlog}">Google</a> (August 2025)`, "“Total organic click volume from Google Search to websites has been relatively stable year-over-year”"],
      ],
    },
    {
      t: "p",
      c: `These aren’t as contradictory as they look. Pew and Ahrefs measure what happens on the specific searches that show an AI Overview. Google is describing total clicks across all searches. Google also says traffic is shifting between kinds of sites: sites with forums, videos, in-depth reviews, original content and first-person analysis are seeing more, while <a href="${googleBlog}">sites providing quick factual answers see less</a>.`,
    },
    { t: "h2", c: "The Search Console pattern" },
    {
      t: "table",
      head: ["What you see", "Likely cause"],
      rows: [
        ["Impressions flat or up, clicks down, average position steady", "AI Overviews (or other features) answering on the page"],
        ["Impressions and clicks both down, position down", "Ranking loss: competition, an update or a technical problem"],
        ["Clicks down on one page only, sharply, on a specific date", "Technical issue on that page: noindex, redirect, rendering"],
        ["Clicks down across the site on a specific date", "Site-wide change: migration, robots.txt, CDN, analytics"],
        ["Clicks down mostly on informational queries", "AI Overviews"],
      ],
    },
    {
      t: "p",
      c: `One complication: Google counts AI Overview and AI Mode traffic <a href="${google}">within the normal “Web” search type</a> in Search Console. There’s no filter for “AI Overview clicks”, so you diagnose by pattern.`,
    },
    { t: "h2", c: "Rule out the other causes first" },
    {
      t: "p",
      c: "Before you put a drop down to AI Overviews, spend fifteen minutes ruling out the usual suspects:",
    },
    {
      t: "ul",
      items: [
        "<strong>Seasonality:</strong> compare with the same months last year, not just the previous period.",
        "<strong>Tracking:</strong> check whether analytics or consent settings changed around the drop date.",
        "<strong>Indexing:</strong> open the Pages report in Search Console for a rise in “not indexed” pages.",
        "<strong>Site changes:</strong> redesigns, migrations, new robots.txt rules or CDN settings around the same time.",
        "<strong>Google updates:</strong> note any known core update dates and see if the drop lines up.",
      ],
    },
    {
      t: "p",
      c: "If none of these explain it, and the drop is concentrated on informational queries with steady positions, AI Overviews are the likely cause. Write down what you checked and when, so the next person who looks at the chart doesn’t repeat the investigation from scratch.",
    },
    { t: "h2", c: "How to diagnose it, step by step" },
    {
      t: "ol",
      items: [
        "<strong>Set a long date range.</strong> In Performance → Search results, choose the last 16 months and compare with the previous period. Turn on clicks, impressions, CTR and position.",
        "<strong>Check for a single drop date.</strong> A cliff on one day usually means a technical or tracking change. AI Overviews tend to show a gradual slide.",
        "<strong>Split by query type.</strong> Add a query filter using regex. Compare informational queries with buying ones (patterns below).",
        "<strong>Compare CTR, not just clicks.</strong> If CTR fell while position held, the results page changed around you.",
        "<strong>Find the most affected pages.</strong> Switch to the Pages tab, sort by clicks difference, and list the top 20.",
        "<strong>Check those queries in Google.</strong> Search the main query for each page and note whether an AI Overview appears and whether you’re cited in it.",
      ],
    },
    {
      t: "code",
      label: "Search Console regex filters",
      c: "Informational:\n^(what|why|how|when|who|is|are|can|does|do)\\b|meaning|definition|examples\n\nBuying / commercial:\nbest|vs|versus|alternative|pricing|price|cost|review|software|tool|near me",
    },
    {
      t: "p",
      c: "Expect informational queries to show a much larger CTR drop than buying queries. If both dropped equally, AI Overviews probably aren’t the main cause. Adjust the patterns to your own industry’s vocabulary; a recipe site and a software company will need different buying words.",
    },
    { t: "cta" },
    { t: "h2", c: "What to do about each type of page" },
    {
      t: "table",
      head: ["Page type", "What’s happening", "What to do"],
      rows: [
        ["Definitions and quick facts", "The overview answers fully; few people need to click", "Keep for citation value, link to deeper pages, don’t expect clicks back"],
        ["How-to guides", "Overview gives the gist; some still click for detail", "Add what a summary can’t: templates, tools, screenshots, troubleshooting"],
        ["Comparisons and reviews", "Buyers still click to check details", "Keep current; strengthen with tables, prices and first-hand testing"],
        ["Pricing, product, signup", "Little affected", "Make sure they’re crawlable, clear and linked from guides"],
        ["Original data and research", "Cited and still clicked for the full data", "Do more of it; it’s the hardest to summarise away"],
      ],
    },
    { t: "h3", c: "Upgrade" },
    {
      t: "p",
      c: "For guides that lost clicks but could be the best answer, add something people need to use rather than read: a template, a calculator, a worked example, original data, a step-by-step with screenshots. Summaries can describe a template, but people still click to get it. Put the useful asset near the top, mention it in the title where it fits (“…with a free template”), and make sure it works without signing up, or the click won’t turn into trust.",
    },
    { t: "h3", c: "Connect" },
    {
      t: "p",
      c: "For pages that will keep losing clicks, like definitions, make sure the clicks you do get go somewhere useful. Add a clear next step linking to a related product, comparison or pricing page, placed right after the answer rather than at the bottom of the page.",
    },
    { t: "h3", c: "Merge" },
    {
      t: "p",
      c: "If you have several thin pages on similar questions, combine them into one strong guide and redirect the old URLs. One comprehensive page is more likely to be cited for several sub-questions than five weak ones.",
    },
    { t: "h2", c: "What about AI Mode?" },
    {
      t: "p",
      c: "AI Mode is Google’s conversational search experience, where people ask follow-up questions in a chat-style interface. Like AI Overviews, Google says AI Mode traffic is counted inside the normal Web search type in Search Console, and the same eligibility rule applies: a page must be indexed and eligible to show a snippet. AI Mode can also use query fan-out, running several related searches for one question.",
    },
    {
      t: "p",
      c: "In practice, treat it the same way. The pages that hold up are the ones that answer specific sub-questions clearly and offer something a summary can’t replace. As AI Mode use grows, expect the informational-versus-buying split in your data to become even sharper.",
    },
    { t: "h2", c: "What to tell your content team" },
    {
      t: "p",
      c: "The biggest change is in what you choose to write. Volume informational content, the “what is X” and “X explained” posts written mainly to catch searches, now gets fewer clicks for the same effort. Shift the plan towards:",
    },
    {
      t: "ul",
      items: [
        "Buying-intent pages: comparisons, alternatives, pricing, use cases.",
        "Content people need to use: templates, calculators, checklists, worked examples.",
        "Original data and first-hand experience that summaries can’t reproduce.",
        "Fewer, deeper guides that cover a topic’s sub-questions in clear sections.",
      ],
    },
    {
      t: "p",
      c: "Keep publishing informational content where it supports these, but judge it by whether it gets cited and leads readers to buying pages, not by clicks alone.",
    },
    { t: "h2", c: "Get cited inside the overview" },
    {
      t: "p",
      c: `On searches where clicks have fallen, being one of the cited sources keeps your brand in front of the searcher. To be eligible, a page must be <a href="${google}">indexed and eligible to show a snippet</a>. Beyond that, answer the question directly at the top of a section, phrase headings as the questions people ask, and add specific evidence. Our guide to <a href="/blog/how-to-get-cited-in-google-ai-overviews">getting cited in AI Overviews</a> covers the full process.`,
    },
    { t: "h2", c: "Check whether you’re cited in the overview" },
    {
      t: "ol",
      items: [
        "Take the top 20 queries from your most affected pages.",
        "Search each one in Google (logged out, in a private window) and note whether an AI Overview appears.",
        "Open the overview’s sources and note whether your page is one of them.",
        "If a competitor’s page is cited instead, compare the passage it supplied with your section on the same point.",
        "Record the results in a sheet, and check the same queries monthly.",
      ],
    },
    {
      t: "p",
      c: "Queries where an overview appears and you’re cited are a reasonable outcome, even with fewer clicks. Queries where you’re not cited are the ones to work on first.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say a B2B software company sees organic clicks down 30% year on year while impressions are up 10%. Average position is steady. The drop isn’t tied to a single date. Splitting by query type shows informational queries’ CTR fell from 4.1% to 2.2%, while buying queries barely moved.",
    },
    {
      t: "p",
      c: "The top affected pages are a glossary and a set of “what is” posts. Searching their main queries shows AI Overviews on almost all of them, citing the company on about half. The plan: merge eight thin glossary pages into three strong guides, add a free template to the two most-visited how-to posts, link every definition page to the relevant product page, and work on the queries where they’re not cited. Leadership gets the monthly note below instead of a single falling line.",
    },
    { t: "h2", c: "Change what you report" },
    {
      t: "p",
      c: "If organic clicks are the only number leadership sees, every AI Overview looks like failure. Add measures that reflect visibility, not just visits:",
    },
    {
      t: "ul",
      items: [
        "Impressions and CTR by query type (informational vs buying).",
        "Clicks and conversions from buying-intent pages specifically.",
        "Branded search impressions: are more people searching for you by name?",
        `Citations in Microsoft’s AI answers from <a href="${bing}">Bing’s AI Performance report</a>.`,
        "Mentions in ChatGPT and Perplexity for a fixed set of buyer prompts.",
        "AI referral traffic in GA4. Our <a href=\"/blog/chatgpt-traffic-in-ga4\">GA4 guide</a> shows how to set it up.",
      ],
    },
    {
      t: "code",
      label: "Monthly note for leadership",
      c: "Organic clicks: [x] ([-y]% YoY). Impressions: [x] ([+z]% YoY).\nInformational CTR: [a]% (was [b]%). Buying-page clicks: [c] ([+/-]%).\n\nWhat's happening: AI Overviews now answer many informational\nqueries on the results page. Buying pages are largely unaffected.\n\nWhat we're doing:\n1. Upgrading [n] guides with templates and original data\n2. Linking definition pages to product and comparison pages\n3. Tracking AI citations and mentions alongside clicks",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t delete pages just because their clicks fell. They may still be cited.",
        "Don’t blame AI Overviews without checking for a technical drop first.",
        "Don’t block Google from showing snippets to “force” clicks. You’ll lose the citation and the snippet.",
        "Don’t compare months without checking for seasonality.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Reading a CTR drop as a ranking drop.</strong> Check average position first.",
        "<strong>Treating all lost traffic the same.</strong> Lost definition traffic matters far less than lost pricing traffic.",
        "<strong>Short date ranges.</strong> Use 16 months to see the trend and seasonality.",
        "<strong>Ignoring Bing.</strong> Its AI Performance report is the only free citation counter.",
        "<strong>Waiting for clicks to come back.</strong> On informational queries, plan for them not to.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do AI Overviews reduce website traffic?",
      a: "On the searches where they appear, yes. Pew found people clicked a traditional result on 8% of visits with an AI summary versus 15% without, and Ahrefs measured 58% fewer clicks to the top result when an AI Overview appeared.",
    },
    {
      q: "Can I see AI Overview traffic in Search Console?",
      a: "Not separately. Google includes AI Overview and AI Mode traffic in the overall Web search type, so you diagnose the effect by comparing query types and CTR changes.",
    },
    {
      q: "Why are my impressions up but clicks down?",
      a: "That’s the typical AI Overviews pattern: you’re still shown, but the overview answers the question, so fewer people click. Check that average position held steady to rule out a ranking loss.",
    },
    {
      q: "Which pages lose the most traffic to AI Overviews?",
      a: "Pages giving quick factual answers and definitions. Google itself says sites providing quick factual answers see less traffic, while in-depth reviews and original content see more.",
    },
    {
      q: "How do I recover traffic lost to AI Overviews?",
      a: "Upgrade guides with things summaries can’t replace, like templates and original data, link affected pages to buying pages, merge thin pages, and aim to be cited inside the overview.",
    },
  ],
  sources: [
    { title: "Pew Research: AI summaries and clicks", url: pew, type: "research", read: "2026-10-29" },
    { title: "Ahrefs: AI Overviews reduce clicks", url: ahrefsCtr, type: "vendor", read: "2026-10-29" },
    { title: "Google: AI in Search driving more queries", url: googleBlog, type: "primary", read: "2026-10-29" },
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-29" },
    { title: "Bing: AI Performance", url: bing, type: "primary", read: "2026-10-29" },
  ],
  related: ["is-seo-dead", "how-to-get-cited-in-google-ai-overviews", "chatgpt-traffic-in-ga4"],
  cta: {
    mid: "Want to know how much of your traffic drop is AI Overviews, and which pages to fix? We’ll diagnose it.",
    title: "Diagnose your traffic drop.",
    text: "We analyse your Search Console data by query and page type, separate AI Overview effects from technical issues, and give you an upgrade, connect and merge plan.",
    button: "Diagnose my traffic",
  },
};
