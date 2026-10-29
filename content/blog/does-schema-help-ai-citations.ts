import type { Post } from "../../lib/blog";

const schema = "https://ahrefs.com/blog/schema-ai-citations/";
const google = "https://developers.google.com/search/docs/appearance/ai-features";
const geo = "https://arxiv.org/abs/2311.09735";
const cites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const gsd = "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data";

export const post: Post = {
  slug: "does-schema-help-ai-citations",
  tracker: "3.6",
  bucket: "technical",
  style: "Data post",
  title: "Does schema help AI citations? What the data shows",
  dek: "Schema markup is the most common “AI SEO” recommendation. A controlled study of 1,885 pages found it made no meaningful difference to AI citations. Here’s the data, what schema is still good for, and where to spend the time instead.",
  description: "Does schema markup help AI citations? A controlled study of 1,885 pages found no meaningful lift. What the data shows, what schema is still good for, and what works.",
  targetQuery: "does schema help ai citations",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "No, not on current evidence. Ahrefs tracked 1,885 pages that added JSON-LD schema and compared them with 4,000 similar pages that didn’t. Over the 30 days after adding schema, ChatGPT citations moved +2.2% and Google AI Mode +2.4%, both indistinguishable from zero, while Google AI Overviews citations fell 4.6%. Google also says no special schema is needed to appear in its AI features. Keep schema for what it’s good at, like rich results and clear product data, but don’t expect it to win AI citations. Spend that time on titles that match buyer questions, answer-first sections, evidence and third-party mentions.",
    },
    {
      t: "p",
      c: "Almost every AI search checklist includes “add schema markup”. It sounds logical: structured data should be easier for machines to understand. But logic and evidence are different things, and now there’s evidence.",
    },
    {
      t: "p",
      c: "Here’s what the best study so far found, what Google says, what schema is still useful for, and where the time is better spent if your goal is to be named and cited in AI answers.",
    },
    { t: "h2", c: "The study: 1,885 pages that added schema" },
    {
      t: "p",
      c: `<a href="${schema}">Ahrefs looked at 1,885 pages</a> that added JSON-LD schema between August 2025 and March 2026, and matched them with 4,000 control pages that never added it. They compared AI citations in the 30 days before and after the schema went live, using a matched difference-in-differences test (which compares the change in the schema group with the change in the control group over the same period) and three further checks.`,
    },
    {
      t: "table",
      head: ["Platform", "Change in citations after adding schema", "Meaning"],
      rows: [
        ["ChatGPT", "+2.2%", "Indistinguishable from zero"],
        ["Google AI Mode", "+2.4%", "Indistinguishable from zero"],
        ["Google AI Overviews", "−4.6%", "A statistically significant decline"],
      ],
      caption: `From <a href="${schema}">Ahrefs’ schema study</a>. Schema types pooled: Article, FAQ, Product, HowTo, Organization.`,
    },
    {
      t: "p",
      c: "Ahrefs’ conclusion: “Adding schema produced no major uplift in citations on any platform.”",
    },
    { t: "h2", c: "Schema myths and what the evidence says" },
    {
      t: "table",
      head: ["Claim", "What the evidence says"],
      rows: [
        ["“AI needs schema to understand your page”", "AI assistants read and quote the visible text; Google says no special schema is needed for its AI features"],
        ["“FAQ schema gets you into AI answers”", "FAQ schema was part of the pooled study with no meaningful lift"],
        ["“Schema is a ranking factor for AI”", "No controlled study has shown that; the largest one found no effect"],
        ["“Organization schema makes AI know your brand”", "Brand knowledge comes mainly from mentions across the web, not one block of code"],
        ["“More schema types means more citations”", "No evidence; pooling five types showed nothing"],
      ],
    },
    {
      t: "p",
      c: "The pattern behind these claims is reasonable-sounding logic without measurement. When someone recommends schema for AI, ask what evidence they’re relying on. Most of the time it’s an assumption rather than a test.",
    },
    { t: "h2", c: "What the study can and can’t tell you" },
    {
      t: "ul",
      items: [
        "<strong>It studied pages already cited.</strong> The sample was pages that already had 100+ AI citations. Schema might behave differently for pages with none, but there’s no evidence yet that it does.",
        "<strong>It pooled schema types.</strong> Article, FAQ, Product, HowTo and Organization schema were analysed together.",
        "<strong>It measured 30 days.</strong> A long-term effect isn’t ruled out, but nothing in the data suggests one.",
        "<strong>It’s one study.</strong> But it’s a controlled one, which is more than most “schema helps AI” claims rest on.",
      ],
    },
    { t: "h2", c: "What Google says" },
    {
      t: "p",
      c: `Google’s guidance on its AI features is direct: <a href="${google}">“There’s also no special schema.org structured data that you need to add”</a>, and you <a href="${google}">“don’t need to create new machine readable files, AI text files, or markup to appear in these features.”</a> The requirement is simply that a page is indexed and eligible to show a snippet in Search.`,
    },
    { t: "h2", c: "Why schema doesn’t move AI citations much" },
    {
      t: "p",
      c: "The most likely reason is that AI assistants read the page itself. They retrieve it, read the text and quote passages. Schema describes the page in a separate block of code, but the passage that gets quoted is the visible text. If the text is clear, schema adds little; if the text is unclear, schema doesn’t fix it.",
    },
    {
      t: "p",
      c: `What does show up in the data is about the text and its match to the question. In <a href="${cites}">Ahrefs’ study of 1.4 million ChatGPT prompts</a>, cited pages had titles much closer in meaning to the prompt, and pages with readable URLs were cited more often. In the <a href="${geo}">GEO study</a>, adding statistics, quotations and source citations to the text improved visibility in AI answers.`,
    },
    { t: "cta" },
    { t: "h2", c: "What schema is still good for" },
    {
      t: "p",
      c: "Don’t rip out schema you already have. It still has real jobs in normal search:",
    },
    {
      t: "table",
      head: ["Schema type", "Still useful for"],
      rows: [
        ["Product, Offer, AggregateRating", "Product rich results: price, availability and ratings in search results"],
        ["Organization", "Telling search engines your official name, logo and profiles"],
        ["BreadcrumbList", "Showing your site’s structure in search results"],
        ["Article", "Clear publish and update dates for news and blog content"],
        ["LocalBusiness", "Business details for local search"],
        ["Event, Recipe, JobPosting", "Their specific rich result types"],
      ],
      caption: `See Google’s <a href="${gsd}">structured data documentation</a> for which types power which rich results.`,
    },
    {
      t: "p",
      c: "If you run an ecommerce store, Product schema is still worth keeping accurate. Prices and availability in search results matter to shoppers whether or not AI cites the page. Just make sure the same price, stock status and key specs also appear as plain text on the product page, because that visible text is what an AI assistant reads when it describes your product.",
    },
    { t: "h2", c: "Where to spend the time instead" },
    {
      t: "p",
      c: "If you were about to spend a week on schema for AI, here’s what the evidence suggests will do more:",
    },
    {
      t: "ol",
      items: [
        "<strong>Retitle key pages around the exact buyer question</strong> they answer. Title-to-question match is one of the clearest signals in ChatGPT citation data.",
        "<strong>Rewrite the first sentence of each section</strong> so it answers the heading directly.",
        "<strong>Add evidence:</strong> a sourced statistic and a named quote on each important page.",
        "<strong>Put comparisons and prices in HTML tables</strong>, in the visible text.",
        "<strong>Check crawler access and rendering</strong>, so AI crawlers can read the text at all.",
        "<strong>Get listed on the roundups and review sites</strong> AI cites for your category.",
      ],
    },
    { t: "h2", c: "If your page isn’t cited at all yet" },
    {
      t: "p",
      c: "The study looked at pages AI already cited, so it’s fair to ask whether schema helps a page that’s invisible. There’s no evidence that it does, and there are better explanations for invisibility. Work through these first:",
    },
    {
      t: "ol",
      items: [
        "Can AI search crawlers reach the page? Check robots.txt and your CDN.",
        "Is the text in the HTML, or loaded by JavaScript after the page opens?",
        "Is the page indexed in both Google and Bing?",
        "Does the title say, in buyers’ words, the question the page answers?",
        "Does each section answer its heading in the first sentence?",
        "Is your brand mentioned on the third-party pages AI cites for this topic?",
      ],
    },
    {
      t: "p",
      c: "Each of these has a clear mechanism: a crawler that can’t reach or read a page can’t cite it, and a page that doesn’t match the question is less likely to be chosen. Schema changes none of them. Our <a href=\"/blog/why-is-my-brand-not-in-chatgpt\">10-point diagnosis</a> covers the full list.",
    },
    { t: "h2", c: "Before and after: the change that matters" },
    {
      t: "p",
      c: "Take a pricing page with perfect Product and Offer schema, but visible text that says only “Simple pricing for growing teams” above three cards with prices rendered as images. To an AI assistant reading the page, there’s nothing to quote about price.",
    },
    {
      t: "p",
      c: "Now the same page with no schema changes, but rewritten: the first line says “Plans start at $15 per user per month, billed annually”, the plans are in an HTML table with what each includes, and a short FAQ answers “Is there a free trial?” and “Can I pay monthly?” in plain text. That page has several passages an AI answer can use. The schema was never the problem; the text was.",
    },
    { t: "h2", c: "What about FAQ schema?" },
    {
      t: "p",
      c: "FAQ schema is often recommended specifically for AI, because AI answers look like FAQ answers. But in the study, FAQ schema was among the types pooled together, and the overall effect was nil. What helps is having real questions and answers in the visible page: a heading phrased as the question, and a direct answer below it. Whether you also mark it up as FAQ schema doesn’t appear to matter for AI citations.",
    },
    { t: "h2", c: "A two-hour schema check for normal search" },
    {
      t: "p",
      c: "Since schema still matters for rich results, a short check is worthwhile, just for the right reasons:",
    },
    {
      t: "ol",
      items: [
        "Run your key page types (product, article, homepage) through Google’s Rich Results Test.",
        "Fix errors that stop eligible rich results, such as missing price or availability on product pages.",
        "Make sure marked-up values match what’s visible on the page: same price, same rating, same date.",
        "Remove schema for content that no longer exists, like expired offers or events.",
        "Check Search Console’s enhancement reports for warnings once a quarter.",
      ],
    },
    {
      t: "p",
      c: "That’s maintenance, not an AI project. Two hours a quarter is plenty for most sites.",
    },
    { t: "h2", c: "What to tell your team or agency" },
    {
      t: "code",
      label: "Message template",
      c: "We'll keep our existing schema for rich results and fix any errors,\nbut we won't add schema as an AI citation tactic. A controlled study\nof 1,885 pages found no meaningful lift in ChatGPT or AI Mode\ncitations, and Google says no special schema is needed for AI features.\n\nInstead, for the next month:\n1. Retitle our top 10 pages around the buyer question each answers\n2. Rewrite the first sentence of every section to answer it directly\n3. Add a sourced statistic and a named quote to each page\n4. Pitch the 5 roundups AI cites most for our category",
    },
    { t: "h2", c: "How to test it yourself" },
    {
      t: "p",
      c: "If you want to check on your own site, run a simple before-and-after test:",
    },
    {
      t: "ol",
      items: [
        "Pick 10 similar pages. Add schema to five; leave five alone.",
        "Make no other changes to either group for 30 days.",
        "Track citations for both groups: Bing’s AI Performance report for Copilot, plus a fixed set of prompts in ChatGPT and Perplexity.",
        "Compare the change in the schema group with the change in the control group, not just the schema group on its own.",
      ],
    },
    {
      t: "p",
      c: "The control group matters. AI citations move around month to month, so without one, normal variation looks like a result. Keep the test running for the full 30 days even if early numbers look promising, and write down the result either way, so the question doesn’t come back every quarter.",
    },
    { t: "h2", c: "A common scenario" },
    {
      t: "p",
      c: "An agency proposes an “AI readiness” package: FAQ schema on every page, an llms.txt file, Organization schema and a “structured data audit”. The work takes weeks and produces a nice report. Citations don’t change, because none of it changes the text AI reads or what other sites say about you.",
    },
    {
      t: "p",
      c: "A better use of the same weeks: rewrite the ten pages that should answer your top buyer questions, add evidence and tables, fix any crawler blocks, and pitch the five roundups AI cites most. That’s the work the citation data actually rewards. Our <a href=\"/blog/does-llms-txt-work\">llms.txt guide</a> covers the other half of that package.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t buy an “AI schema” package expecting more citations.",
        "Don’t remove schema that powers rich results; it still does that job.",
        "Don’t mark up content that isn’t visible on the page. Google’s guidelines require structured data to match what users see.",
        "Don’t measure schema changes without a control group.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Treating schema as the AI fix.</strong> AI reads the visible text.",
        "<strong>Adding FAQ schema to pages with no real FAQs.</strong> Write the questions and answers into the page instead.",
        "<strong>Skipping access checks.</strong> Schema on a page crawlers can’t reach does nothing.",
        "<strong>Over-trusting checklists.</strong> Ask for evidence behind each recommendation.",
        "<strong>Neglecting off-site work.</strong> Branded mentions on other sites correlate far more strongly with AI visibility than anything you can add in code.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does schema markup help with AI citations?",
      a: "Not on current evidence. In Ahrefs’ controlled study of 1,885 pages, adding schema produced no meaningful increase in ChatGPT or Google AI Mode citations, and a small decline in AI Overviews citations.",
    },
    {
      q: "Do I need schema to appear in Google AI Overviews?",
      a: "No. Google says there’s no special schema.org structured data you need to add to appear in AI Overviews or AI Mode.",
    },
    {
      q: "Does FAQ schema help ChatGPT cite my page?",
      a: "There’s no evidence it does. Real questions and direct answers in the visible text are what AI tools can quote.",
    },
    {
      q: "Should I remove my schema markup?",
      a: "No. Schema still helps with rich results in normal search, such as product prices and ratings. It just isn’t an AI citation lever.",
    },
    {
      q: "What helps AI citations more than schema?",
      a: "Titles and headings that match buyer questions, answer-first sections, specific evidence like statistics and quotes, crawler access, and mentions on the third-party sites AI cites.",
    },
  ],
  sources: [
    { title: "Ahrefs: schema and AI citations", url: schema, type: "vendor", read: "2026-10-29" },
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-29" },
    { title: "Google: intro to structured data", url: gsd, type: "primary", read: "2026-10-29" },
    { title: "Ahrefs: why ChatGPT cites pages", url: cites, type: "vendor", read: "2026-10-29" },
    { title: "GEO: Generative Engine Optimization (KDD 2024)", url: geo, type: "research", read: "2026-10-29" },
  ],
  related: ["does-llms-txt-work", "technical-ai-search-checklist", "how-chatgpt-chooses-sources"],
  cta: {
    mid: "Been told you need “AI schema”? We’ll tell you honestly what will move your citations instead.",
    title: "Skip the schema package. Fix what AI reads.",
    text: "We review the pages that should answer your buyers’ questions and show you the text, structure and evidence changes that the citation data actually rewards.",
    button: "Review my key pages",
  },
};
