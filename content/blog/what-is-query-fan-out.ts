import type { Post } from "../../lib/blog";

const google = "https://developers.google.com/search/docs/appearance/ai-features";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const bing = "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";

export const post: Post = {
  slug: "what-is-query-fan-out",
  tracker: "1.6",
  bucket: "basics",
  style: "RS Answer",
  title: "What is query fan-out? How AI search turns one question into many",
  dek: "Google, ChatGPT and Copilot all split a user’s question into several smaller searches before answering. Here’s how it works, why it changes which pages get cited, and how to plan content for it.",
  description: "What is query fan-out? How Google AI Mode, AI Overviews and ChatGPT split one question into many searches, why it matters for citations, and how to plan for it.",
  targetQuery: "what is query fan-out",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Query fan-out is when an AI search tool turns one question into several related searches, gathers results for each, and combines them into one answer. Google says AI Overviews and AI Mode may use it; OpenAI says ChatGPT search rewrites a question into one or more targeted queries; Bing shows the “grounding queries” Copilot used to find your pages. It matters because pages get cited for the sub-searches, not the user’s exact words. To plan for it: map the sub-questions behind each topic, give each one a clear, answer-first section, and check which sub-queries actually lead to your pages.",
    },
    {
      t: "p",
      c: "If you’ve ever wondered why an AI answer cites a page that doesn’t rank for the question you asked, query fan-out is usually the reason. The assistant didn’t search your question. It searched five smaller ones, and that page was the best answer to one of them.",
    },
    { t: "h2", c: "How query fan-out works" },
    {
      t: "p",
      c: "Take a question like “What’s the best CRM for a 10-person real estate team that already uses Google Workspace?” No single page answers all of that. So the assistant breaks it up:",
    },
    {
      t: "table",
      head: ["Step", "What happens", "Example"],
      rows: [
        ["1. Understand", "The question is parsed into its parts", "CRM; real estate; team of 10; Google Workspace"],
        ["2. Fan out", "Several targeted searches are run", "“best CRM for real estate agents”, “CRM Google Workspace integration”, “CRM pricing small team”, “real estate CRM reviews”"],
        ["3. Retrieve", "Results for each search are read", "Roundups, review sites, vendor pages, forum threads"],
        ["4. Combine", "Passages from different sources are merged", "Recommendations, pricing notes, integration caveats"],
        ["5. Cite", "Sources behind each point are linked", "Different pages for different parts of the answer"],
      ],
    },
    {
      t: "p",
      c: "Each part of the final answer may come from a different page. A page about Google Workspace integrations can be cited for that one point without ever mentioning real estate.",
    },
    { t: "h2", c: "Who uses it" },
    {
      t: "table",
      head: ["Platform", "What they say"],
      rows: [
        ["Google AI Overviews and AI Mode", `May use a <a href="${google}">“query fan-out” technique</a>, issuing “multiple related searches across subtopics and data sources”`],
        ["ChatGPT search", `<a href="${openaiSearch}">“Rewrites your query into one or more targeted queries”</a> sent to its search providers`],
        ["Microsoft Copilot and Bing AI", `Bing Webmaster Tools reports <a href="${bing}">“grounding queries”</a>: the key phrases the AI used when retrieving content it cited`],
      ],
    },
    {
      t: "p",
      c: "The names differ, but the idea is the same everywhere: the search the AI runs isn’t the question the user typed." },
    {
      t: "p",
      c: "This is also why AI answers often feel more complete than a single search result. The tool is doing the work a careful researcher would do: searching the parts of the question separately, reading several sources, and putting the pieces together. For anyone trying to be cited, the implication is simple. You’re not competing for one search. You’re competing for a place in several, and each one can be won by a different page, on your site or someone else’s. The rest of this guide shows how to find those searches and make sure you have a strong answer for the ones that matter to buyers.",
    },
    { t: "h2", c: "Why it changes which pages get cited" },
    {
      t: "ul",
      items: [
        `<strong>Rankings for the main keyword matter less.</strong> Across ChatGPT, Gemini and Copilot, <a href="${overlap}">only 12% of cited links ranked in Google’s top 10</a> for the same query in Ahrefs’ study. The sub-searches pull from different results.`,
        "<strong>Narrow pages can win.</strong> A focused page that answers one sub-question precisely can be cited alongside much bigger sites.",
        "<strong>Sections matter more than pages.</strong> The AI takes the passage that answers its sub-search. A page with ten clear sections has ten chances.",
        "<strong>Coverage across sources matters.</strong> If roundups and reviews answer the “best for” sub-search and you aren’t in them, you miss that part of the answer.",
      ],
    },
    { t: "cta" },
    { t: "h2", c: "How to find the sub-queries for your topics" },
    {
      t: "p",
      c: "You can’t see Google’s or ChatGPT’s fan-out directly, but you can reconstruct it closely enough to plan content. Use four sources:",
    },
    {
      t: "ol",
      items: [
        "<strong>Read the AI answer.</strong> Ask the question in ChatGPT, Perplexity and Google AI Mode. Each distinct point or paragraph usually maps to one sub-search. Write them down.",
        "<strong>Check the cited sources.</strong> Note which passage each source supplied. The page title often reveals the sub-search it matched.",
        "<strong>Use “People also ask” and related searches</strong> in Google. They’re close cousins of the fan-out queries.",
        `<strong>Read your Bing grounding queries.</strong> If you’ve verified your site in Bing Webmaster Tools, the AI Performance report shows <a href="${bing}">a sample of the phrases</a> Copilot used to find your cited pages. That’s real fan-out data for your own site.`,
      ],
    },
    {
      t: "p",
      c: "Bing notes that grounding queries aren’t users’ prompts. They’re the AI’s own retrieval phrases, which is exactly what you want to see.",
    },
    { t: "h2", c: "A fan-out map template" },
    {
      t: "p",
      c: "For each important buyer question, build a map like this and keep it in a spreadsheet:",
    },
    {
      t: "table",
      head: ["Main question", "Sub-query", "Who’s cited now", "Our page", "Action"],
      rows: [
        ["Best CRM for a small real estate team", "best CRM for real estate agents", "Two roundups, one review site", "None", "Pitch roundups; write use-case page"],
        ["", "CRM Google Workspace integration", "Vendor docs pages", "/integrations/google", "Add answer-first intro and table"],
        ["", "real estate CRM pricing", "Comparison article", "/pricing", "Add per-seat examples for 10 users"],
        ["", "real estate CRM reviews", "Review site, Reddit thread", "Review profile (12 reviews)", "Ask customers for reviews"],
      ],
      caption: "One row per sub-query. The Action column is your content and outreach plan.",
    },
    { t: "h2", c: "How fan-out differs by question type" },
    {
      t: "p",
      c: "Different kinds of questions split in predictable ways. Use this as a starting point when you map your own topics:",
    },
    {
      t: "table",
      head: ["Question type", "Typical sub-searches", "Pages that tend to win"],
      rows: [
        ["“Best X for Y”", "best X; X for Y; X pricing; X reviews; X alternatives", "Roundups, review sites, use-case pages"],
        ["“How do I do X?”", "X steps; X tools; X time or cost; X common mistakes", "Step-by-step guides, docs, help articles"],
        ["“X vs Y”", "X features; Y features; X pricing; Y pricing; X vs Y reviews", "Comparison pages, review sites, forum threads"],
        ["“How much does X cost?”", "X price; X price by size; X hidden costs; X free options", "Pricing pages, cost guides, comparison articles"],
        ["“Is X worth it?”", "X reviews; X pros and cons; X alternatives; X for my situation", "Reviews, Reddit threads, honest comparison pages"],
      ],
    },
    {
      t: "p",
      c: "Notice how often reviews, alternatives and pricing appear. Those sub-searches show up in almost every buying question, which is why pricing pages, comparison pages and review profiles carry so much weight in AI answers.",
    },
    { t: "h2", c: "How to prioritise sub-queries" },
    {
      t: "p",
      c: "A single topic can produce dozens of sub-queries. You can’t cover them all at once, so score each one from 1 to 3 on three things and start with the highest totals:",
    },
    {
      t: "ul",
      items: [
        "<strong>Buying intent:</strong> does answering it help someone choose a product? Pricing and comparison sub-queries score high; definitions score low.",
        "<strong>Gap:</strong> is the current cited source weak, outdated or missing? A thin or old source is easier to replace.",
        "<strong>Fit:</strong> can you answer it better than anyone, from your own data or experience?",
      ],
    },
    {
      t: "p",
      c: "A sub-query scoring 8 or 9 deserves a dedicated section or page this month. One scoring 3 or 4 can wait, or be handled by getting listed on the source that already answers it.",
    },
    { t: "h2", c: "What fan-out means for measurement" },
    {
      t: "p",
      c: "Fan-out makes keyword rank tracking a weak guide to AI visibility. You might rank fifth for your main keyword and still be cited for three of its sub-queries, or rank first and be cited for none. Track three things instead: whether you appear in the AI answer for the main question, which of your pages are cited and for which part of the answer, and, through Bing’s grounding queries, the phrases that led AI to your pages. Our guide to <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">tracking brand mentions in ChatGPT</a> shows a simple monthly method.",
    },
    { t: "h2", c: "How to write for fan-out" },
    {
      t: "p",
      c: "You don’t need a new kind of content. You need ordinary pages organised so each part can stand alone:",
    },
    {
      t: "ul",
      items: [
        "<strong>One sub-question per section</strong>, with the question as the heading.",
        "<strong>Answer in the first sentence</strong> of the section, then explain.",
        "<strong>Repeat the subject by name</strong> instead of “it” or “this”, so the passage makes sense out of context.",
        "<strong>Use HTML tables</strong> for comparisons and pricing, which are common sub-searches.",
        "<strong>Cover the qualifiers</strong> people add: team size, industry, budget, integrations, location. Those words show up in fan-out queries.",
        "<strong>Link related sections and pages</strong> so crawlers find the whole cluster.",
      ],
    },
    { t: "h2", c: "A 30-minute fan-out exercise" },
    {
      t: "p",
      c: "Try this on your single most important buyer question before you plan anything bigger:",
    },
    {
      t: "ol",
      items: [
        "<strong>Minutes 0–5:</strong> write the question the way a real buyer would ask it, with their situation included: team size, industry, budget, tools they already use.",
        "<strong>Minutes 5–15:</strong> ask it in ChatGPT (with search), Perplexity and Google AI Mode. Copy each answer into a document.",
        "<strong>Minutes 15–20:</strong> split each answer into its separate points. Label each point with the sub-question it answers.",
        "<strong>Minutes 20–25:</strong> list the sources cited for each point, and mark the ones that are yours.",
        "<strong>Minutes 25–30:</strong> circle the sub-questions where you have no page and no presence on the cited sources. Those are your first three tasks. Repeat the exercise for your next four questions over the following week and you’ll have a content plan grounded in real answers.",
      ],
    },
    {
      t: "p",
      c: "A common result the first time you do this: your own site answers the product question, and almost nothing else. The pricing, comparison, review and “for my situation” parts of the answer come from other people.",
    },
    { t: "h2", c: "Fan-out and content clusters" },
    {
      t: "p",
      c: "If you’ve built topic clusters for SEO, a hub page with supporting articles around it, you’re already halfway there. Fan-out rewards the same structure, with two changes.",
    },
    {
      t: "p",
      c: "First, the supporting pages should map to sub-queries you’ve actually seen in AI answers, not just keyword variations from a tool. Second, the hub page itself should answer each sub-question briefly in its own section and link to the deeper page, so both the hub and the supporting page have a chance to be cited. A cluster that looks tidy in a keyword tool but doesn’t match what AI tools search for won’t help much.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you sell accounting software for freelancers. Your main page targets “accounting software for freelancers”. When someone asks ChatGPT “What’s the easiest way for a freelance designer in the UK to handle taxes and invoicing?”, the fan-out likely includes searches about UK self-assessment for freelancers, invoicing tools for designers, expense tracking, and accounting software comparisons.",
    },
    {
      t: "p",
      c: "Your product page answers maybe one of those. A plan built around fan-out would add: a guide to self-assessment for UK freelancers with a clear deadline table, an invoicing page for creative freelancers, an expenses guide, and a fair comparison page. Each answers one sub-search directly. Together, they give you a chance at every part of the answer.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t create dozens of near-identical pages for every keyword variation. Fan-out rewards clear answers, not volume.",
        "Don’t cram every sub-question into one long paragraph. Separate sections are easier to lift.",
        "Don’t ignore off-site sources. Some sub-searches, like “best” and “reviews”, are answered by other people’s sites.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Tracking only the head keyword.</strong> Track the sub-queries too, because that’s where most citations are won.",
        "<strong>Assuming fan-out queries are the same across tools.</strong> Google, ChatGPT and Copilot split questions differently. Check each.",
        "<strong>Writing headings for style.</strong> “The bottom line” matches nothing; “How much does X cost for a 10-person team?” matches a sub-search.",
        "<strong>Skipping Bing Webmaster Tools.</strong> Its grounding queries are the most direct fan-out data you can get for free.",
      ],
    },
    {
      t: "p",
      c: "For the bigger picture of planning content around AI questions, see our guide to <a href=\"/blog/prompt-research-for-ai-search\">prompt research</a>, and for applying this to Google specifically, <a href=\"/blog/how-to-get-cited-in-google-ai-overviews\">how to get cited in AI Overviews</a>.",
    },
  ],
  faqs: [
    {
      q: "What does query fan-out mean?",
      a: "It’s when an AI search tool turns one question into several related searches, retrieves results for each, and combines them into one answer.",
    },
    {
      q: "Does Google use query fan-out?",
      a: "Yes. Google says AI Overviews and AI Mode may use a query fan-out technique, issuing multiple related searches across subtopics and data sources.",
    },
    {
      q: "Does ChatGPT use query fan-out?",
      a: "OpenAI says ChatGPT search rewrites your query into one or more targeted queries before sending them to its search providers, which is the same idea.",
    },
    {
      q: "How can I see the fan-out queries for my site?",
      a: "Bing Webmaster Tools’ AI Performance report shows a sample of grounding queries: the phrases Copilot used to retrieve pages it cited. For Google and ChatGPT, reconstruct them from the answers and their sources.",
    },
    {
      q: "How should I change my content for query fan-out?",
      a: "Give each sub-question its own section with the question as the heading and the answer in the first sentence, and cover the qualifiers people add, like team size, budget and integrations.",
    },
  ],
  sources: [
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-27" },
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-27" },
    { title: "Bing: AI Performance in Webmaster Tools", url: bing, type: "primary", read: "2026-10-27" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-10-27" },
  ],
  related: ["how-to-get-cited-in-google-ai-overviews", "prompt-research-for-ai-search", "does-chatgpt-use-google-or-bing"],
  cta: {
    mid: "Want a fan-out map for your most important buyer questions? We’ll build it and show where you’re missing.",
    title: "Get a fan-out map of your buyer questions.",
    text: "We break your top buyer questions into the sub-searches AI tools run, show who’s cited for each, and give you a content and outreach plan to cover the gaps.",
    button: "Map my sub-queries",
  },
};
