import type { Post } from "../../lib/blog";

const bing = "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview";
const google = "https://developers.google.com/search/docs/appearance/ai-features";
const channels = "https://support.google.com/analytics/answer/13051316";
const pew = "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/";

export const post: Post = {
  slug: "ai-visibility-report",
  tracker: "7.9",
  bucket: "buying",
  style: "RS Playbook",
  title: "What a monthly AI visibility report should include",
  dek: "Whether you build it yourself or get it from an agency, an AI visibility report should answer one question: are buyers hearing our name in AI answers more than last month? Here’s the structure, the metrics and a template.",
  description: "What a monthly AI visibility report should include: core metrics, how to collect them, a one-page template, what to leave out and red flags in agency reports.",
  targetQuery: "ai visibility report",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "A good monthly AI visibility report fits on one page and covers five things: mention rate and share of voice across a fixed set of buyer prompts, citation rate and which of your pages are cited, AI referral traffic and conversions, Copilot citations from Bing’s AI Performance report, and the specific wins, gaps and next actions. It compares with last month and the starting baseline, uses the same prompts every month, and links every claim to something checkable. Leave out vanity “AI scores” with no method, keyword rankings presented as AI visibility, and screenshots without context.",
    },
    {
      t: "p",
      c: "AI visibility reporting is still new, and it shows. Some reports are a single “AI score” from a tool nobody can explain. Others are thirty slides of screenshots. Neither tells leadership what they want to know: are we showing up where buyers ask, and is it getting better?",
    },
    {
      t: "p",
      c: "This guide sets out what a useful monthly report includes, how to collect each number, a one-page template you can copy, and what to watch for if an agency sends you one.",
    },
    { t: "h2", c: "The one question the report must answer" },
    {
      t: "p",
      c: "“Are buyers hearing our name in AI answers more than last month, and what are we doing about the gaps?” Every number in the report should help answer that. If a metric doesn’t, leave it out, however impressive it looks on a slide.",
    },
    { t: "h2", c: "The five sections" },
    {
      t: "table",
      head: ["Section", "Metrics", "Where it comes from"],
      rows: [
        ["1. Mentions", "Mention rate, share of voice vs named competitors, average position in the answer", "Monthly prompt check"],
        ["2. Citations", "Citation rate, which of your URLs are cited, for which prompts", "Monthly prompt check"],
        ["3. Traffic and conversions", "Sessions from AI assistants, engagement, signups or demos", "GA4 AI channel"],
        ["4. Microsoft AI", "Total citations, cited pages, top grounding queries", "Bing Webmaster Tools AI Performance"],
        ["5. Actions", "Wins, gaps, what changed, next month’s work", "Your team or agency"],
      ],
    },
    { t: "h2", c: "Section 1: Mentions" },
    {
      t: "p",
      c: "This is the heart of the report, because mentions are what buyers read. In Pew’s research, people clicked a link inside an AI summary on just <a href=\"" + pew + "\">1% of visits that showed one</a>. Being named matters even without a click.",
    },
    {
      t: "ul",
      items: [
        "<strong>Mention rate:</strong> prompts where you’re named ÷ prompts tracked.",
        "<strong>Share of voice:</strong> your mentions ÷ all brand mentions across the prompts, shown next to your top two or three competitors.",
        "<strong>Average position:</strong> whether you’re named first, in the middle or last in lists.",
        "<strong>Accuracy:</strong> share of mentions that describe you correctly (price, audience, features).",
      ],
    },
    {
      t: "p",
      c: "Use a fixed set of 20 to 50 buyer prompts, run in the same assistants every month (typically ChatGPT with search, Perplexity and Google AI Mode or AI Overviews). Run each prompt two or three times, because answers vary, and count a mention if you appear in most runs.",
    },
    { t: "h2", c: "Section 2: Citations" },
    {
      t: "ul",
      items: [
        "<strong>Citation rate:</strong> prompts where one of your URLs is a source ÷ prompts tracked.",
        "<strong>Cited pages:</strong> which URLs, for which prompts. This tells you which pages AI trusts.",
        "<strong>Third-party sources:</strong> the top domains cited across your prompts, and whether they mention you.",
      ],
    },
    {
      t: "p",
      c: "The third-party list is often the most useful part of the whole report, because it turns directly into an outreach list. Our guide to <a href=\"/blog/ai-citations-vs-brand-mentions\">citations vs mentions</a> explains the four states a brand can be in for each prompt.",
    },
    { t: "cta" },
    { t: "h2", c: "Section 3: Traffic and conversions" },
    {
      t: "p",
      c: `Set up a custom “AI assistants” channel in GA4 covering chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com and claude.ai. Google says custom channel groups <a href="${channels}">can be applied to your reports retroactively</a>, so you get history too. Report sessions, engagement rate and key events, compared with Organic Search.`,
    },
    {
      t: "p",
      c: `Add a caveat line every month: Google counts AI Overview and AI Mode clicks <a href="${google}">inside normal Google search traffic</a>, and some AI visits arrive as Direct, so this is a floor. Our <a href="/blog/chatgpt-traffic-in-ga4">GA4 guide</a> covers setup.`,
    },
    { t: "h2", c: "Section 4: Microsoft AI" },
    {
      t: "p",
      c: `<a href="${bing}">Bing’s AI Performance report</a> shows total citations across Copilot, Bing’s AI summaries and some partner integrations, average cited pages per day, page-level citations and a sample of grounding queries. It’s free first-party data, so include it: total citations versus last month, the top five cited URLs, and one line on what the grounding queries show.`,
    },
    { t: "h2", c: "Section 5: Wins, gaps and actions" },
    {
      t: "p",
      c: "Numbers without actions are a status update, not a report. Close with these four parts, kept short enough to read in a minute:",
    },
    {
      t: "ul",
      items: [
        "<strong>Wins:</strong> prompts where you’re newly mentioned or cited, and what caused it.",
        "<strong>Losses:</strong> prompts where you dropped out, and the likely reason.",
        "<strong>Gaps:</strong> the most valuable prompts where you’re missing, with the sources cited instead.",
        "<strong>Next month:</strong> three to five specific actions, each with an owner.",
      ],
    },
    { t: "h2", c: "Setting it up in month one" },
    {
      t: "ol",
      items: [
        "<strong>Build the prompt list.</strong> Twenty to fifty buyer questions from sales calls, support, reviews and Reddit. Our <a href=\"/blog/prompt-research-for-ai-search\">prompt research guide</a> shows how.",
        "<strong>Name your competitors.</strong> Two or three that buyers compare you with most.",
        "<strong>Run the baseline.</strong> Every prompt, in each assistant, two or three times. Save the answers and sources.",
        "<strong>Set up GA4’s AI channel</strong> and verify your site in Bing Webmaster Tools.",
        "<strong>Agree the format</strong> with whoever reads it: one page, the template below, same day each month.",
      ],
    },
    {
      t: "p",
      c: "The baseline is the most important number you’ll ever report. Every later month is judged against it, so take the time to run it carefully.",
    },
    { t: "h2", c: "The one-page template" },
    {
      t: "code",
      label: "Monthly AI visibility report",
      c: "AI VISIBILITY, [MONTH]   ([n] prompts | ChatGPT, Perplexity, Google AI)\n\nMENTIONS\nMention rate     [x]%   (last month [y]% | baseline [z]%)\nShare of voice   Us [x]% | [Rival A] [x]% | [Rival B] [x]%\nAccuracy         [x]% of mentions correct  (issue: [old price on X])\n\nCITATIONS\nCitation rate    [x]%   (last month [y]%)\nTop cited pages  /compare/[a] ([n] prompts), /pricing ([n])\nTop 3rd-party    [domain] ([n]) - lists us? [Y/N]\n\nTRAFFIC (GA4 AI channel)\nSessions [n] ([+/-]%) | Engagement [x]% | Key events [n]\n\nMICROSOFT AI (Bing)\nCitations [n] ([+/-]%) | Top page: [url] | Grounding theme: [x]\n\nWINS     Now named for \"[prompt]\" after [action]\nGAPS     Missing from \"[prompt]\"; cited instead: [domains]\nNEXT     1. [action] - [owner]  2. ...  3. ...",
    },
    { t: "h2", c: "Who reads it, and what they need" },
    {
      t: "table",
      head: ["Reader", "What they care about", "Put first"],
      rows: [
        ["Founder or CEO", "Are we winning against competitors?", "Share of voice and the top gap"],
        ["Head of marketing", "Is the work paying off, and what next?", "Wins tied to actions; next month’s plan"],
        ["Sales", "What do buyers hear about us?", "Accuracy issues and how we’re described"],
        ["Content and SEO team", "Which pages to work on", "Cited pages, gaps and third-party sources"],
      ],
    },
    {
      t: "p",
      c: "One report can serve all of them if the top three lines answer the leadership question and the rest is detail for the team. Add a one-sentence summary at the very top, such as “Mentioned in 31% of buyer prompts, up from 24%; still missing from the two biggest ‘best tool’ questions.”",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say a company tracks 40 prompts. In month three, mention rate is 28%, up from a 15% baseline. Share of voice is 19%, against 34% for the category leader. Citation rate rose from 8% to 18%, mostly because two new comparison pages are now cited. Accuracy is 85%: two answers still quote last year’s pricing from an old review. AI sessions in GA4 rose 40%, with a higher engagement rate than organic search. Copilot citations doubled, led by the integrations page.",
    },
    {
      t: "p",
      c: "The wins section links the comparison-page citations to the pages published in month one. The gaps section lists the three biggest “best tool” prompts where the company is missing, with the five roundups cited instead. Next month’s actions: pitch those five roundups, ask the old review’s author to update pricing, and publish an alternatives page for the category leader. Anyone reading it knows where things stand and what happens next.",
    },
    { t: "h2", c: "Turning the report into decisions" },
    {
      t: "p",
      c: "A report earns its time when it changes what the team does next month. Use simple rules to turn the numbers into decisions:",
    },
    {
      t: "ul",
      items: [
        "<strong>Cited but not mentioned on a prompt:</strong> your page is helping, but others are recommended. Prioritise outreach to the sources that name competitors.",
        "<strong>Mentioned but not cited:</strong> buyers hear your name but your site isn’t the source. Write or improve the page that should answer the prompt.",
        "<strong>Neither:</strong> check crawler access and indexing for related pages, then create the missing page and start outreach.",
        "<strong>Accuracy below 90%:</strong> fix the sources behind wrong descriptions before anything else, because errors repeat across answers.",
        "<strong>Share of voice flat for two months:</strong> look at what changed for the leading competitor, usually new roundup placements or reviews.",
      ],
    },
    { t: "h2", c: "The quarterly review" },
    {
      t: "p",
      c: "Every three months, step back from the monthly numbers. Look at the trend in mention rate and share of voice across the quarter, which actions moved them and which didn’t, and whether the prompt list still reflects what buyers ask. Add a new group of prompts if your product or market has changed, keeping the original set for comparison. This is also the right moment to decide whether to shift effort between pages, outreach and communities.",
    },
    { t: "h2", c: "How to keep it honest" },
    {
      t: "ul",
      items: [
        "<strong>Freeze the prompt list.</strong> Add new prompts as a separate group, so totals stay comparable.",
        "<strong>Show the baseline</strong> every month, not just last month.",
        "<strong>Link everything checkable:</strong> the prompt sheet, the GA4 report, the Bing export.",
        "<strong>Report drops as clearly as gains.</strong> A report that only ever goes up isn’t believable.",
        "<strong>Note method changes.</strong> If you add an assistant or change how prompts are run, say so.",
      ],
    },
    { t: "h2", c: "What to leave out" },
    {
      t: "table",
      head: ["Leave out", "Why"],
      rows: [
        ["A single “AI visibility score” with no method", "Nobody can tell what moved it or what to do"],
        ["Keyword rankings labelled as AI visibility", "Rankings and AI citations overlap far less than people assume"],
        ["Screenshots with no prompt list or dates", "Can’t be checked or compared"],
        ["Branded prompts only (“What is [brand]?”)", "They always mention you; they don’t show category visibility"],
        ["Impressions from tools that don’t explain their data", "Unverifiable numbers erode trust in the rest"],
      ],
    },
    { t: "h2", c: "Red flags in agency reports" },
    {
      t: "ul",
      items: [
        "The prompt list changes every month, usually towards easier prompts.",
        "Only wins are shown.",
        "No competitor comparison.",
        "No link between the numbers and the work done.",
        "No raw data you can check yourself.",
      ],
    },
    {
      t: "p",
      c: "If you’re choosing an agency, ask to see a sample report before signing. Our <a href=\"/blog/how-to-choose-an-ai-seo-agency\">12 questions for AI SEO agencies</a> include what a good one should contain.",
    },
    { t: "h2", c: "How long it takes to produce" },
    {
      t: "table",
      head: ["Task", "Time each month"],
      rows: [
        ["Run 30 prompts × 3 assistants × 2 runs", "2–3 hours manually; minutes with a tracking tool"],
        ["Record mentions, citations and sources", "1 hour"],
        ["Pull GA4 and Bing numbers", "20 minutes"],
        ["Write wins, gaps and actions", "30–45 minutes"],
      ],
    },
    {
      t: "p",
      c: "About half a day a month by hand, which is a small cost next to the decisions it informs. Paid AI visibility tools can automate the prompt runs; if you use one, make sure you can export the underlying answers and sources, not just a score.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t change prompts to make numbers look better.",
        "Don’t report AI traffic without the caveat that it’s a floor.",
        "Don’t send a 30-slide deck. One page, with links to the detail.",
        "Don’t skip the actions section.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Running each prompt once.</strong> Answers vary; use two or three runs.",
        "<strong>No competitors.</strong> Share of voice is what shows progress in a crowded category.",
        "<strong>Mixing assistants without labels.</strong> Report each separately, then combined.",
        "<strong>Ignoring accuracy.</strong> Wrong descriptions cost deals.",
        "<strong>No baseline.</strong> Without one, nobody can tell if the work is working or if the numbers just drifted.",
      ],
    },
  ],
  faqs: [
    {
      q: "What should an AI visibility report include?",
      a: "Mention rate and share of voice across a fixed set of buyer prompts, citation rate and cited pages, AI referral traffic and conversions, Copilot citations from Bing, and a short list of wins, gaps and next actions.",
    },
    {
      q: "How often should I report on AI visibility?",
      a: "Monthly. Weekly checks mostly measure normal variation between runs, and quarterly is too slow to see whether specific work had an effect.",
    },
    {
      q: "How many prompts should I track?",
      a: "Twenty to fifty buyer prompts is enough for most companies. Keep the core set fixed so month-to-month comparisons are meaningful.",
    },
    {
      q: "Can I measure AI Overviews traffic separately?",
      a: "Not in Search Console or GA4. Google counts it within normal search traffic. Track AI Overview citations through your monthly prompt checks instead.",
    },
    {
      q: "Do I need a tool for AI visibility reporting?",
      a: "Not to start. A spreadsheet, GA4 and Bing Webmaster Tools cover the basics. Tools help once you track many prompts, as long as you can export the underlying answers.",
    },
  ],
  sources: [
    { title: "Bing: AI Performance", url: bing, type: "primary", read: "2026-10-29" },
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-29" },
    { title: "GA4: custom channel groups", url: channels, type: "primary", read: "2026-10-29" },
    { title: "Pew Research: AI summaries and clicks", url: pew, type: "research", read: "2026-10-29" },
  ],
  related: ["ai-citations-vs-brand-mentions", "how-to-track-brand-mentions-in-chatgpt", "chatgpt-traffic-in-ga4"],
  cta: {
    mid: "Want this report built for you, with a proper baseline? We’ll set it up and run the first month.",
    title: "Get a baseline AI visibility report.",
    text: "We build your prompt set, run it across ChatGPT, Perplexity and Google’s AI, set up GA4 and Bing tracking, and deliver your first one-page report.",
    button: "Get my baseline report",
  },
};
