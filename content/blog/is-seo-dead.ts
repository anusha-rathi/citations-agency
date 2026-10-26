import type { Post } from "../../lib/blog";

const pew = "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/";
const ahrefsCtr = "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";
const google = "https://developers.google.com/search/docs/appearance/ai-features";
const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";

export const post: Post = {
  slug: "is-seo-dead",
  tracker: "1.4",
  bucket: "basics",
  style: "RS Answer",
  title: "Is SEO dead because of AI? What the 2026 data says",
  dek: "Clicks are falling, rankings matter less for AI answers, and yet AI search runs on the same foundations SEO built. Here’s what changed, what didn’t, and how to split your time now.",
  description: "Is SEO dead because of AI? What the click data, AI citation studies and Google’s own guidance show, which SEO work still pays off, and what to add in 2026.",
  targetQuery: "is seo dead",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "No, SEO isn’t dead, but the return on it has changed. AI summaries cut clicks: Pew found people clicked a result on 8% of Google visits with an AI summary against 15% without one, and Ahrefs measured 58% fewer clicks to the top result when an AI Overview appears. Rankings also matter less for AI answers: only 12% of links ChatGPT, Gemini and Copilot cite rank in Google’s top 10 for the same query. What still works: technical SEO, indexing and pages that answer real questions, because AI tools find content through search indexes. What to add: third-party mentions and pages built for the questions buyers ask AI.",
    },
    {
      t: "p",
      c: "Every year someone declares SEO dead. This time there’s real data behind the worry. AI Overviews answer the question on the results page, ChatGPT answers without a results page at all, and site owners can see the click drop in Search Console.",
    },
    {
      t: "p",
      c: "But “dead” is the wrong word. Some SEO work has lost value, some is more important than ever, and some new work sits next to it. Here’s which is which.",
    },
    { t: "h2", c: "What the data actually shows" },
    {
      t: "table",
      head: ["Finding", "Source", "What it means for you"],
      rows: [
        [`People clicked a traditional result on 8% of visits with an AI summary, vs 15% without`, `<a href="${pew}">Pew Research, 900 adults, March 2025</a>`, "Fewer clicks from the same rankings"],
        ["Only 1% of visits with an AI summary included a click on a link inside it", "Pew Research", "Being cited in the summary isn’t a traffic plan on its own"],
        ["Top-ranking page got 58% fewer clicks when an AI Overview appeared", `<a href="${ahrefsCtr}">Ahrefs, 300,000 keywords, Dec 2025</a>`, "Rank #1 is worth less on informational queries"],
        ["Only 12% of links cited by ChatGPT, Gemini and Copilot rank in Google’s top 10", `<a href="${overlap}">Ahrefs, 15,000 queries</a>`, "Ranking doesn’t guarantee AI citations"],
        ["Branded web mentions correlated 0.664 with AI Overview visibility, three times more than backlinks", `<a href="${brands}">Ahrefs, 75,000 brands</a>`, "Mentions matter more than links for AI"],
      ],
    },
    {
      t: "p",
      c: "Two things are true at once. Search still drives a lot of traffic, and people still search: in Pew’s data only 18% of searches produced an AI summary. But each ranking now earns fewer clicks on the queries where AI answers, and ranking well no longer means you’ll appear in AI answers.",
    },
    { t: "h2", c: "What died, what didn’t, what’s new" },
    {
      t: "table",
      head: ["Status", "SEO work", "Why"],
      rows: [
        ["Lost value", "Thin informational posts written to catch definitions (“what is X”)", "AI summaries answer these on the page; clicks drop the most here"],
        ["Lost value", "Chasing rankings for keywords with no buying intent", "Traffic was always weak; now it’s weaker"],
        ["Lost value", "Link schemes and volume link building", "Mentions correlate more with AI visibility than links do"],
        ["Still essential", "Technical SEO: crawling, indexing, speed, clean HTML", "AI tools find pages through search indexes and crawlers"],
        ["Still essential", "Pages that answer buying questions: pricing, comparisons, alternatives", "These get clicked and cited"],
        ["Still essential", "Being indexed in Google and Bing", "Google’s AI features only cite indexed pages; ChatGPT search uses partners including Microsoft"],
        ["New", "Getting mentioned on third-party sites AI trusts (reviews, Reddit, lists)", "AI answers lean heavily on independent sources"],
        ["New", "Tracking how AI answers describe you", "Search Console doesn’t show ChatGPT"],
        ["New", "Prompt research alongside keyword research", "Buyers ask AI longer, more specific questions"],
      ],
    },
    {
      t: "p",
      c: `Google’s own guidance makes the overlap explicit. To appear in AI Overviews and AI Mode, a page must be <a href="${google}">“indexed and eligible to be shown in Google Search with a snippet”</a>, and there are no extra requirements. The foundations of SEO are the entry ticket to AI search.`,
    },
    { t: "h2", c: "Why “SEO is dead” keeps going viral" },
    {
      t: "p",
      c: "Because the traffic drop is real and visible. If your site grew on informational content, such as glossaries, how-to explainers and definitions, you’ve probably watched impressions hold while clicks fell. That’s exactly the pattern AI summaries create: you still rank, you’re still shown, but fewer people need to click.",
    },
    {
      t: "p",
      c: "Sites built around buying-intent pages see a smaller effect. Someone comparing two tools or checking pricing still wants to visit the pages, read the details and sign up. That’s the useful split: the question isn’t whether SEO works, it’s which queries still send clicks worth having.",
    },
    { t: "cta" },
    { t: "h2", c: "Which queries still send clicks" },
    {
      t: "p",
      c: "A useful rule of thumb: the more a searcher needs to do something after reading, the more likely they are to click. Use this to decide which pages deserve your best work:",
    },
    {
      t: "table",
      head: ["Query type", "Example", "Clicks after AI summaries"],
      rows: [
        ["Definition", "what is customer churn", "Low: the summary is usually enough"],
        ["Simple how-to", "how to export contacts from Gmail", "Low to medium"],
        ["Comparison", "[tool A] vs [tool B]", "Medium to high: buyers want details and pricing"],
        ["Pricing", "[tool] pricing", "High: people check the source"],
        ["Navigational", "[brand] login", "High"],
        ["Templates and tools", "sales commission calculator", "High: they need to use the thing"],
      ],
    },
    {
      t: "p",
      c: "Your numbers will vary by industry, so confirm the pattern with your own Search Console split from the check below before you move budget between page types.",
    },
    { t: "h2", c: "How to check what’s happening on your own site" },
    {
      t: "p",
      c: "Don’t rely on headlines. Spend an hour in Search Console and you’ll know whether AI is hurting you, and where:",
    },
    {
      t: "ol",
      items: [
        "<strong>Compare clicks and impressions over 16 months.</strong> In Performance → Search results, set the date to the last 16 months. Rising or flat impressions with falling clicks means you’re still being shown but answered on the page.",
        "<strong>Split by query type.</strong> Filter queries containing “what is”, “how to” and “meaning” and compare their click-through rate with queries containing “pricing”, “vs”, “alternative” and “best”. Expect informational queries to drop much more.",
        "<strong>Find your most affected pages.</strong> Switch to the Pages tab and sort by the largest drop in clicks. List the top 20.",
        "<strong>Check those queries in Google.</strong> Search the main query for each page. If an AI Overview answers it fully, the page’s job has changed from getting clicks to being the cited source.",
        "<strong>Ask ChatGPT and Perplexity the buying versions.</strong> For each product category you sell in, ask “What are the best [category] tools for [use case]?” and note whether you’re named.",
      ],
    },
    {
      t: "p",
      c: "The output is a short list: pages that lost clicks to AI summaries, pages that still perform, and buying prompts where you’re missing from AI answers. That list tells you where to spend time.",
    },
    { t: "h2", c: "How to split your time in 2026" },
    {
      t: "p",
      c: "There’s no single right ratio, but this is a sensible starting point for a B2B or ecommerce team that has done SEO for a while:",
    },
    {
      t: "table",
      head: ["Share of time", "Work", "Examples"],
      rows: [
        ["About 20%", "Technical health", "Indexing, speed, crawler access, broken links, rendering"],
        ["About 40%", "Buying-intent pages", "Pricing, comparisons, alternatives, use-case and integration pages, kept fresh"],
        ["About 25%", "Third-party mentions", "Review sites, roundup lists, Reddit and community answers, partner pages"],
        ["About 15%", "Measurement", "Search Console, Bing’s AI Performance report, monthly prompt checks"],
      ],
    },
    {
      t: "p",
      c: "Notice what’s missing: volume informational content. If you still publish it, publish less and make each piece the definitive answer, with original data or experience that a summary can’t replace.",
    },
    { t: "h2", c: "What to do with pages that lost their clicks" },
    {
      t: "p",
      c: "Don’t delete them by reflex. A page that’s cited in AI Overviews still builds familiarity with your brand, even without clicks. Instead, sort them into three groups:",
    },
    {
      t: "ul",
      items: [
        "<strong>Keep and connect:</strong> pages that still get some clicks. Add a clear next step that links to a relevant product, comparison or pricing page.",
        "<strong>Upgrade:</strong> pages that could become the best answer with original data, examples, a template or a tool. Summaries can’t replace something people need to use.",
        "<strong>Merge:</strong> several thin pages on similar questions. Combine them into one strong guide and redirect the old URLs.",
      ],
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t stop SEO entirely and put the whole budget into “AI optimisation”. AI tools find you through the same indexes.",
        "Don’t buy a tool that promises to rank you in ChatGPT. Nobody can guarantee what an AI model says.",
        "Don’t measure success only by organic clicks. Track AI mentions and branded search too.",
      ],
    },
    { t: "h2", c: "A 90-day plan for an SEO team adapting to AI" },
    {
      t: "table",
      head: ["Weeks", "Focus", "Done when"],
      rows: [
        ["1–2", "Run the Search Console check above; list affected pages and missing buying prompts", "You have a ranked list of 20 pages and 20 prompts"],
        ["3–4", "Technical pass: crawler access, Bing indexing, rendering on key pages", "AI search crawlers get a 200 and readable HTML on every key page"],
        ["5–8", "Rewrite or create buying-intent pages: pricing, comparisons, alternatives", "Each page answers its question in the first two sentences, with a dated update"],
        ["5–12", "Earn mentions: review profiles, roundup outreach, helpful Reddit answers", "You’re listed on the sources AI cites for your top prompts"],
        ["9–12", "Merge or upgrade the informational pages that lost clicks", "Fewer, stronger guides, each with a clear next step"],
        ["12", "Re-run the prompt check and compare", "You can show where you now appear and where you don’t"],
      ],
    },
    {
      t: "p",
      c: "The prompt list comes from <a href=\"/blog/prompt-research-for-ai-search\">prompt research</a>, which works like keyword research but starts from the full questions buyers type into ChatGPT.",
    },
    { t: "h2", c: "How to explain this to your leadership" },
    {
      t: "p",
      c: "When organic clicks fall, someone will ask whether SEO still deserves its budget. Here’s a short update you can adapt and send:",
    },
    {
      t: "code",
      label: "Update template",
      c: "Organic clicks are down [X]% year on year while impressions are [up/flat].\nThat pattern means we're still ranking, but AI summaries now answer\nmore informational queries on the results page.\n\nOur buying-intent pages (pricing, comparisons) are down [Y]%, much less.\n\nPlan for next quarter:\n1. Shift effort from informational posts to buying-intent pages\n2. Make sure AI search tools can crawl and read our key pages\n3. Get listed on the review sites and lists AI answers cite\n4. Track how ChatGPT and Perplexity describe us monthly\n\nWe'll report AI mentions alongside organic traffic from [month].",
    },
    {
      t: "p",
      c: "The point is to change the scoreboard before someone else does it for you. If organic clicks are the only number leadership sees, every AI summary looks like failure, even when your brand is being named in more answers than before.",
    },
    { t: "h2", c: "SEO vs AI search: same foundations, different scoreboard" },
    {
      t: "p",
      c: "The simplest way to think about it: SEO gets your pages into the indexes AI reads from; AI search optimisation makes sure what’s in those indexes, on your site and other people’s, describes you well when a buyer asks. One without the other leaves gaps.",
    },
    {
      t: "table",
      head: ["", "SEO", "AI search"],
      rows: [
        ["Goal", "Rank and get clicks", "Get named and cited in answers"],
        ["Main inputs", "Your pages, links, technical health", "Your pages plus what other sites say about you"],
        ["Where you measure", "Search Console, analytics", "Prompt checks, Bing AI Performance, referral traffic"],
        ["Unit of work", "Keyword", "Prompt (a full question)"],
      ],
    },
    {
      t: "p",
      c: "If the terms are confusing, our <a href=\"/blog/aeo-vs-geo-vs-seo\">AEO vs GEO vs SEO guide</a> sorts them out, and the <a href=\"/blog/how-to-get-cited-by-chatgpt\">ChatGPT citation playbook</a> covers the AI side step by step.",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Reading the click drop as a ranking drop.</strong> Check impressions first. You may be ranking fine and simply getting answered on the page.",
        "<strong>Treating all traffic loss the same.</strong> Losing definition traffic is very different from losing pricing-page traffic.",
        "<strong>Assuming a #1 ranking means AI will cite you.</strong> The overlap between rankings and AI citations is small.",
        "<strong>Ignoring Bing.</strong> It feeds Copilot and is among ChatGPT search’s partners. Verifying your site there takes twenty minutes.",
        "<strong>Waiting for certainty.</strong> AI search is changing quickly, but the foundations (indexable pages, clear answers, independent mentions) have held up across every change so far.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is SEO still worth it in 2026?",
      a: "Yes. Search still drives large amounts of traffic, and AI tools find content through search indexes. What’s changed is which SEO work pays off: technical health and buying-intent pages, much more than volume informational content.",
    },
    {
      q: "Will AI replace Google search?",
      a: "Not on current evidence. In Pew’s March 2025 data, only 18% of Google searches even showed an AI summary. Use is shifting, but people use both, often for different kinds of questions.",
    },
    {
      q: "Do I need different content for AI search than for SEO?",
      a: "Mostly the same content, structured differently: direct answers near the top, comparison tables in HTML, honest pricing and visible update dates. The new work is mostly off your site, getting mentioned in places AI trusts.",
    },
    {
      q: "Why are my impressions up but clicks down?",
      a: "That’s the usual sign of AI summaries answering queries on the results page. You’re still shown, but fewer people need to click.",
    },
    {
      q: "Should I hire an SEO agency or an AI search agency?",
      a: "Ask what they’ll measure. A good partner in 2026 covers technical SEO and buying-intent pages and also tracks AI answers and third-party mentions. Be wary of anyone promising guaranteed AI rankings.",
    },
  ],
  sources: [
    { title: "Pew Research: AI summaries and clicks", url: pew, type: "research", read: "2026-10-26" },
    { title: "Ahrefs: AI Overviews reduce clicks", url: ahrefsCtr, type: "vendor", read: "2026-10-26" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-10-26" },
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-26" },
    { title: "Google AI features", url: google, type: "primary", read: "2026-10-26" },
  ],
  related: ["aeo-vs-geo-vs-seo", "how-to-get-cited-by-chatgpt", "does-chatgpt-use-google-or-bing"],
  cta: {
    mid: "Want to know how much of your traffic loss is AI, and where you’re missing from AI answers? We’ll check both.",
    title: "See where AI is costing you traffic.",
    text: "We compare your Search Console data with how ChatGPT, Perplexity and Google’s AI describe your category, then tell you which pages to fix and where to get mentioned.",
    button: "Get my AI search audit",
  },
};
