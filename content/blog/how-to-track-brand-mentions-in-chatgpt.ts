import type { Post } from "../../lib/blog";

const google = "https://developers.google.com/search/docs/appearance/ai-features";
const clickport = "https://clickport.io/blog/chatgpt-direct-traffic-ga4";

export const post: Post = {
  slug: "how-to-track-brand-mentions-in-chatgpt",
  tracker: "2.7",
  bucket: "cited",
  style: "RS Playbook",
  title: "How to track brand mentions in ChatGPT: free method and template",
  dek: "A monthly prompt sheet, three free reports and one survey question tell you whether ChatGPT names you, links you, and sends you buyers. Here’s the full setup.",
  description: "How to track brand mentions in ChatGPT for free: a monthly prompt sheet, GA4 setup for ChatGPT traffic, Bing’s AI Performance report, and when to pay.",
  targetQuery: "how to track brand mentions in chatgpt",
  status: "published",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "There’s no dashboard that shows every time ChatGPT mentions your brand, so you build the picture from four free sources: a monthly prompt sheet (20–30 buyer prompts run logged out), GA4 set up to catch chatgpt.com traffic, Bing Webmaster Tools’ AI Performance report for Copilot citations, and a “how did you hear about us?” question with ChatGPT as an option. Set it up in an afternoon, then spend about two hours a month on it. Pay for a tool only when you need daily runs, hundreds of prompts or competitor share of voice.",
    },
    {
      t: "p",
      c: "Ask ten founders whether ChatGPT recommends their product and most will say “I think so”. They asked it once, in their own account, and it mentioned them. That’s not tracking. Your own account is personalised by your chat history, so it’s the least reliable place to look.",
    },
    {
      t: "p",
      c: "Real tracking answers four questions every month: for the prompts my buyers ask, am I named, am I linked, who else shows up, and is any of it turning into visits and signups? You can answer all four for free.",
    },
    {
      t: "p",
      c: "This guide is for marketers and founders who want a reliable monthly number without paying for an AI visibility platform yet.",
    },
    { t: "h2", c: "What you’re actually tracking" },
    {
      t: "p",
      c: "“Brand mentions in ChatGPT” covers four different things. Track them on separate lines, because they move independently:",
    },
    {
      t: "table",
      head: ["Signal", "What it means", "Where to see it"],
      rows: [
        ["Brand mention", "ChatGPT names you in the answer", "Your prompt sheet"],
        ["Linked citation", "ChatGPT shows your page as a clickable source", "Your prompt sheet"],
        ["Referral traffic", "Someone clicked through from ChatGPT to your site", "GA4 (with the setup below)"],
        ["Accuracy", "What ChatGPT says about your pricing, features and positioning is correct", "Your prompt sheet"],
      ],
    },
    {
      t: "p",
      c: "Most tools blend these into one “visibility score”. Don’t. You can be named on every prompt and never linked, or linked as a source while the answer recommends a rival. Each case needs a different fix.",
    },
    { t: "h2", c: "Step 1: Build your prompt list" },
    {
      t: "p",
      c: "Write 20–30 prompts the way your buyers would type them into ChatGPT. Not keywords: full questions with context. Pull them from sales-call notes, support tickets, Reddit thread titles in your category, and Google’s “People also ask” box. Cover five types:",
    },
    {
      t: "table",
      head: ["Type", "Example", "How many"],
      rows: [
        ["Discovery", "What’s the best invoicing tool for a 5-person agency?", "6–8"],
        ["Comparison", "[Your brand] vs [rival] for a small finance team", "4–6"],
        ["Alternatives", "Cheaper alternatives to [rival] with time tracking", "4–6"],
        ["Problem", "How do I stop clients paying invoices late?", "4–6"],
        ["Brand", "Is [your brand] worth it? / How much does [your brand] cost?", "2–4"],
      ],
    },
    {
      t: "p",
      c: "The brand prompts are where you check accuracy. If ChatGPT gets your pricing wrong, buyers walk into sales calls with the wrong number. Our guide to <a href=\"/blog/how-to-get-cited-by-chatgpt\">getting cited by ChatGPT</a> covers prompt research in more depth.",
    },
    { t: "h2", c: "Step 2: Set up your tracking sheet" },
    {
      t: "p",
      c: "One row per prompt, per engine, per month. Copy these columns into a Google Sheet:",
    },
    {
      t: "code",
      label: "Tracking sheet columns",
      c: "Month | Prompt | Type | Engine | Run (1/2/3) | Named? (Y/N) | Position (1st, 2nd…) | Linked? (Y/N) | Our URL cited | Other sources cited | Competitors named | Accuracy issue | Notes",
    },
    {
      t: "p",
      c: "Track ChatGPT and Perplexity at minimum. Add Gemini and Google AI Mode if your buyers use Google heavily. Keep the prompt wording identical month to month, or the trend means nothing.",
    },
    { t: "h2", c: "Step 3: Run the prompts the right way" },
    {
      t: "ol",
      items: [
        "<strong>Use a temporary chat or a logged-out browser.</strong> Your own account knows what you’ve asked before and leans toward you.",
        "<strong>Make sure the answer used search.</strong> Look for sources under the answer. If there are none, ask the same prompt again with search turned on, and log both.",
        "<strong>Run each prompt three times.</strong> AI answers vary between runs. <a href=\"https://somethinginc.com/blog/2026-ai-citation-study/\">Something Inc’s citation study</a> ran every query three times for the same reason. Count a mention if you appear in at least two of three runs.",
        "<strong>Click every source.</strong> Note which pages are cited, especially third-party pages that name your competitors. Those are your outreach list.",
        "<strong>Log immediately.</strong> Don’t trust memory across 30 prompts and three engines.",
      ],
    },
    {
      t: "p",
      c: "Thirty prompts, three runs, two engines is 180 answers. With practice it takes about two hours. Do it on the same day each month, such as the first Monday.",
    },
    { t: "h2", c: "Step 4: Turn the sheet into three numbers" },
    { t: "p", c: "Report these at the top of the sheet every month:" },
    {
      t: "code",
      label: "Monthly metrics",
      c: "Mention rate      = prompts where you’re named ÷ total prompts\nCitation rate     = prompts where your page is linked ÷ total prompts\nShare of voice    = your mentions ÷ all brand mentions across your prompt set",
    },
    {
      t: "p",
      c: "Share of voice is the one leadership understands fastest: “ChatGPT names us in 18% of brand mentions for our category, up from 9% in March. Rival A is at 34%.” Split it by prompt type too. A low share on alternatives prompts usually means you need an alternatives page; a low share on discovery prompts usually means you’re missing from the listicles that get cited.",
    },
    { t: "cta" },
    { t: "h2", c: "Step 5: Track ChatGPT traffic in GA4" },
    {
      t: "p",
      c: `ChatGPT search adds <code>utm_source=chatgpt.com</code> to links in its results, but not a medium. Because of that, GA4 often files these visits under “Unassigned” instead of a referral or AI channel, and some clicks arrive with no tag or referrer at all and land in Direct. <a href="${clickport}">Clickport’s breakdown</a> explains the edge cases. The fix is a custom channel group:`,
    },
    {
      t: "ol",
      items: [
        "In GA4, go to <strong>Admin → Data display → Channel groups</strong> and create a new channel group (copy the default one).",
        "Add a channel called <strong>AI assistants</strong>.",
        "Set the condition to <strong>Source matches regex</strong> and paste the pattern below. Don’t add a medium condition.",
        "Drag the new channel <strong>above Referral</strong> so it’s evaluated first, then save.",
        "Use the channel group in your Traffic acquisition report and build a comparison against Organic Search.",
      ],
    },
    {
      t: "code",
      label: "GA4 regex: Source matches",
      c: "(chatgpt\\.com|chat\\.openai\\.com|perplexity\\.ai|claude\\.ai|gemini\\.google\\.com|copilot\\.microsoft\\.com)",
    },
    {
      t: "p",
      c: "Then add a landing-page breakdown. AI visitors often land on deep pages (comparisons, pricing, guides) rather than the homepage, which tells you which pages ChatGPT is citing.",
    },
    { t: "h2", c: "Step 6: Track Copilot citations in Bing Webmaster Tools" },
    {
      t: "p",
      c: "Bing Webmaster Tools has the closest thing to a free citation counter: an AI Performance report showing how often Microsoft Copilot and partners cite your pages, and how many different pages get cited.",
    },
    {
      t: "img",
      src: "/citations/shot-8.png",
      alt: "Bing Webmaster Tools AI Performance report showing 29.3K total citations and 41 average cited pages over three months",
      width: 1600,
      height: 797,
      caption: "Bing Webmaster Tools’ AI Performance report, October 2026.",
    },
    {
      t: "ol",
      items: [
        "Verify your site at bing.com/webmasters (you can import it from Google Search Console in a couple of minutes).",
        "Submit your sitemap and turn on IndexNow if your CMS supports it.",
        "Open the AI Performance report and set the range to 3 months.",
        "Log total citations and cited pages in your sheet each month, and note which pages appear most.",
      ],
    },
    {
      t: "p",
      c: "It’s Microsoft’s ecosystem, not ChatGPT’s, but the trend is a useful early signal of which pages AI assistants find worth citing, and those are the pages to strengthen first.",
    },
    { t: "h2", c: "Step 7: Check Google AI Overviews in Search Console" },
    {
      t: "p",
      c: `Google counts AI Overview and AI Mode traffic inside the normal Search Console Performance report, under the Web search type. <a href="${google}">Google confirms</a> there’s no separate filter. So watch for two patterns instead:`,
    },
    {
      t: "ul",
      items: [
        "<strong>Impressions up, clicks flat</strong> on informational queries: often an AI Overview answering the question above your result.",
        "<strong>Branded searches rising:</strong> people who saw your name in an AI answer and searched for you directly later.",
      ],
    },
    { t: "h2", c: "Step 8: Ask your customers" },
    {
      t: "p",
      c: "Add “ChatGPT or another AI assistant” as an option to your “How did you hear about us?” question on signup and demo forms. It catches the buyers analytics misses: someone who read your name in ChatGPT on their phone and typed your URL on a laptop two days later. It’s also the simplest way to show leadership that AI answers bring in real buyers.",
    },
    { t: "h2", c: "How to check what ChatGPT says about you" },
    {
      t: "p",
      c: "Being named isn’t enough if the details are wrong. Once a quarter, run your brand prompts and check every fact in the answer against your own pages:",
    },
    {
      t: "ul",
      items: [
        "<strong>Pricing:</strong> plan names, starting price, free tier, per-seat costs.",
        "<strong>Features:</strong> anything it says you do or don’t do, especially integrations.",
        "<strong>Positioning:</strong> who it says you’re for (“best for enterprises” when you sell to startups is a real cost).",
        "<strong>Comparisons:</strong> what it says you do better or worse than named rivals.",
        "<strong>Stale facts:</strong> old pricing, retired products, a previous company name.",
      ],
    },
    {
      t: "p",
      c: "When something’s wrong, click the sources. The error almost always comes from a page: an old review, an outdated listicle, or your own pricing page from last year still sitting in the index. Fix your pages first, then contact the third-party sites with the correct details.",
    },
    { t: "h2", c: "A one-page monthly report" },
    {
      t: "p",
      c: "Keep the report short enough that someone reads it. This format fits on one page:",
    },
    {
      t: "code",
      label: "Monthly AI visibility report",
      c: "AI visibility, [month]\n\nMention rate: 23% (was 17%)   Citation rate: 10% (was 7%)\nShare of voice: 18% vs Rival A 34%, Rival B 21%\nChatGPT visits (GA4): 412 (was 288)   “Found us via AI” signups: 9\nCopilot citations (Bing): 1,240 (was 960)\n\nWins: added to “[listicle]”; alternatives page now cited on 3 prompts\nGaps: missing on all 6 discovery prompts; wrong starting price on 2 answers\nNext month: pitch 10 cited listicles; fix pricing page; answer 5 Reddit threads",
    },
    {
      t: "p",
      c: "Swap in your own numbers. What matters is the shape: three headline rates, the traffic and signups they led to, and three named actions for next month.",
    },
    { t: "h2", c: "When to pay for a tracking tool" },
    {
      t: "p",
      c: "Paid AI visibility platforms such as Profound, Peec AI, Semrush’s AI tools, Ahrefs Brand Radar and Otterly run prompts automatically, daily, across several engines, and chart share of voice against competitors. They’re worth it when the manual method stops scaling:",
    },
    {
      t: "table",
      head: ["Manual sheet is enough when", "A paid tool is worth it when"],
      rows: [
        ["You track fewer than 50 prompts", "You need hundreds of prompts or several markets"],
        ["Monthly checks are fine", "You need daily or weekly trend lines"],
        ["One or two people read the report", "Leadership wants a live dashboard"],
        ["You’re still learning which prompts matter", "Your prompt set is stable and proven"],
      ],
    },
    {
      t: "p",
      c: "Whatever you buy, check that it reports mentions and linked citations separately, shows the actual answers and sources (not just a score), and lets you export your data.",
    },
    { t: "h2", c: "What to do with what you find" },
    {
      t: "table",
      head: ["What the sheet shows", "What to do next"],
      rows: [
        ["Named, but never linked", "Publish clearer answer pages for those prompts so your own pages become sources"],
        ["Linked, but not recommended", "Get onto the third-party lists and threads that are cited alongside you"],
        ["Missing on alternatives prompts", "Publish an honest “[rival] alternatives” page"],
        ["A rival dominates discovery prompts", "Work out <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a> and get onto the same sources"],
        ["Wrong price or features in answers", "Fix your pricing and feature pages first, then the third-party pages repeating the error"],
        ["Reddit threads cited a lot", "Join those threads properly; see <a href=\"/blog/why-was-my-reddit-post-removed\">how to avoid getting filtered</a>"],
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Checking from your own account.</strong> It’s personalised. Always test logged out or in a temporary chat.",
        "<strong>Running each prompt once.</strong> Answers vary. Three runs per prompt gives you a stable result.",
        "<strong>Changing prompt wording every month.</strong> Then you’re measuring your edits, not your visibility.",
        "<strong>Reporting one blended score.</strong> Keep mentions, citations, traffic and accuracy separate.",
        "<strong>Ignoring the sources.</strong> The cited pages are the most useful part of the answer. They tell you exactly where to get mentioned next.",
        "<strong>Tracking without acting.</strong> Every monthly run should end with three actions for the next month.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can I see every time ChatGPT mentions my brand?",
      a: "No. OpenAI doesn’t offer a report of brand mentions. You sample instead: a fixed set of buyer prompts run every month, plus traffic and survey data that show the effect.",
    },
    {
      q: "How often should I check brand mentions in ChatGPT?",
      a: "Monthly is enough for most companies. Weekly makes sense during a launch or a big content push, but answers vary run to run, so short-term swings are noisy.",
    },
    {
      q: "Why does ChatGPT traffic show as Direct or Unassigned in GA4?",
      a: "ChatGPT tags links with utm_source=chatgpt.com but no medium, so GA4’s default channel rules don’t match it. Some clicks also arrive with no referrer. A custom channel group using a source regex fixes most of it.",
    },
    {
      q: "What’s a good share of voice in ChatGPT?",
      a: "It depends on how crowded your category is. Track the trend against your top three competitors rather than chasing an absolute number. Moving from absent to named on your alternatives prompts is usually the first win.",
    },
    {
      q: "Do I need a paid AI visibility tool?",
      a: "Not to start. A manual sheet covers 20–50 prompts well. Pay for a tool when you need daily runs, hundreds of prompts, several markets, or a dashboard for leadership.",
    },
  ],
  sources: [
    { title: "Clickport: Why ChatGPT traffic shows as Direct in GA4", url: clickport, type: "press", read: "2026-10-25" },
    { title: "Google: AI features and your website", url: google, type: "primary", read: "2026-10-25" },
    { title: "Something Inc: 2026 AI Citation Study", url: "https://somethinginc.com/blog/2026-ai-citation-study/", type: "vendor", read: "2026-10-25" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "why-chatgpt-recommends-your-competitor", "prompt-research-for-ai-search"],
  cta: {
    mid: "Don’t want to build the sheet yourself? We’ll run your first month of prompts and hand you the baseline.",
    title: "Get your first month of tracking done for you.",
    text: "We build your buyer prompt list, run it across ChatGPT, Perplexity and Gemini, and send you your mention rate, citation rate and share of voice against your top competitors.",
    button: "Get my visibility baseline",
  },
};
