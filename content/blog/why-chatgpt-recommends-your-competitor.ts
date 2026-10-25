import type { Post } from "../../lib/blog";

const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";

export const post: Post = {
  slug: "why-chatgpt-recommends-your-competitor",
  tracker: "2.4",
  bucket: "cited",
  style: "Data post",
  title: "Why ChatGPT recommends your competitor (and how to fix it)",
  dek: "ChatGPT picks brands from memory or from the pages it searches. Find out which one is costing you, then fix it with the plan for that case.",
  description: "Why ChatGPT recommends your competitor and not you: the two ways it picks brands, a 30-minute diagnosis, and the fix plan for each case.",
  targetQuery: "why chatgpt recommends my competitor",
  status: "published",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "ChatGPT names brands for two reasons: it already “knows” them from training, or it keeps finding them on the pages it searches. For well-known brands in big categories, memory wins. For most B2B and niche categories, the pages it retrieves decide. Run the 30-minute diagnosis below to see which case you’re in, then follow that fix plan. Source-driven answers can change within weeks; memory-driven ones take months.",
    },
    {
      t: "p",
      c: "You ask ChatGPT for the best tool in your category. It names your biggest rival and two others. You rewrite your homepage, ask again, and get the same answer.",
    },
    {
      t: "p",
      c: "That’s because your homepage is one of the last places ChatGPT looks. It recommends brands it already remembers, or brands it keeps finding on other people’s pages. Your competitor is winning in one of those two places, and you can find out which one in about 30 minutes.",
    },
    { t: "h2", c: "The two ways ChatGPT picks a brand" },
    {
      t: "p",
      c: `A <a href="${toronto}">University of Toronto study</a> published in April 2026 tested exactly this. Researchers had GPT-4o rank brands using live search results, then shuffled those results, swapped brand names inside them, or told the model to use only the results, and measured how much the rankings moved.`,
    },
    {
      t: "table",
      head: ["", "Popular categories (“best SUVs”)", "Niche categories (“family lawyers in Toronto”)"],
      rows: [
        ["How far rankings moved when results were shuffled", "2.30 places", "4.15 places"],
        ["How far they moved when brand names were swapped", "2.60 places", "4.63 places"],
        ["Consistency between two ranking methods", "0.911 (very stable)", "0.556 (unstable)"],
        ["What drives the answer", "<strong>Memory</strong>", "<strong>Search results</strong>"],
      ],
    },
    {
      t: "p",
      c: "<strong>Memory mode.</strong> For familiar categories, the model mostly ranked from what it already believed. Across hundreds of queries, 16% of the brands in its rankings didn’t appear in a single search result it had retrieved. Toyota and Honda were almost always backed by a source. Cadillac was named without one 58% of the time, Infiniti 73%.",
    },
    {
      t: "p",
      c: "<strong>Search mode.</strong> For niche categories, the model leaned on what it retrieved and the rankings moved with the evidence. Most B2B software sits much closer to “family lawyers in Toronto” than to “best SUVs”. That’s good news: if you change what ChatGPT finds, you change what it recommends.",
    },
    { t: "h2", c: "Run the 30-minute diagnosis" },
    {
      t: "ol",
      items: [
        "<strong>Write 5 prompts your buyers would type,</strong> in their words: “best [category] for [team size]”, “alternatives to [rival]”, “[rival] vs [you]”, “is [rival] worth it”, “[category] for [use case]”.",
        "<strong>Open a temporary chat in ChatGPT</strong> (or log out). Your own account is personalised by your chat history and will flatter you.",
        "<strong>Run each prompt and turn on search</strong> if ChatGPT doesn’t search on its own. Then run them again in Perplexity.",
        "<strong>For every brand named, check if a source backs it.</strong> Click the citations. Is the brand on the cited page?",
        "<strong>Log it</strong> in the sheet below.",
      ],
    },
    {
      t: "table",
      head: ["Prompt", "Rival named?", "Backed by a cited page?", "Which page?", "Are you on that page?"],
      rows: [
        ["best CRM for a 10-person startup", "Yes", "Yes", "“12 best CRMs for startups” (listicle)", "No"],
        ["alternatives to [rival]", "Yes", "No", "None", "n/a"],
      ],
    },
    { t: "p", c: "Now read the pattern:" },
    {
      t: "table",
      head: ["What you see", "What it means", "Your fix"],
      rows: [
        ["Rival named, backed by cited pages you’re not on", "Search mode: they’re on the pages, you aren’t", "The source plan (below)"],
        ["Rival named with no cited page behind it", "Memory mode: the model already “knows” them", "The memory plan (below)"],
        ["Nobody named, only generic advice", "Nobody owns this prompt yet", "Publish the best answer page first"],
        ["You’re named but not linked", "You’re in memory, but your pages aren’t cited", "Answer pages plus crawler checks"],
      ],
    },
    { t: "cta" },
    { t: "h2", c: "The 6 reasons your competitor shows up and you don’t" },
    {
      t: "p",
      c: "<strong>1. They’re on the pages ChatGPT cites.</strong> In comparison-style queries, AI engines in the Toronto study took 59–86% of their citations from independent publishers and review sites. <em>Check:</em> the cited pages from your diagnosis. <em>Fix:</em> get onto those exact pages (outreach template below).",
    },
    {
      t: "p",
      c: "<strong>2. More of the web talks about them.</strong> <a href=\"https://ahrefs.com/blog/ai-overview-brand-correlation/\">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated 0.664 with visibility in AI Overviews, against 0.218 for backlinks. The top quarter of brands by mentions averaged 169 AI Overview mentions; the bottom half had almost none. <em>Check:</em> search your rival’s name and yours in Google News, Reddit and review sites. <em>Fix:</em> the memory plan.",
    },
    {
      t: "p",
      c: "<strong>3. They have comparison and alternatives pages; you don’t.</strong> Comparison and alternatives content took 33% of all citations in <a href=\"https://somethinginc.com/blog/2026-ai-citation-study/\">Something Inc’s study of 4,100 B2B queries</a>. <em>Check:</em> search “[rival] vs” and “[rival] alternatives”. <em>Fix:</em> publish honest versions on your site.",
    },
    {
      t: "p",
      c: "<strong>4. They’re in the Reddit threads.</strong> Reddit was the single most-cited domain in <a href=\"https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search\">Profound’s 4-billion-citation dataset</a>. <em>Check:</em> <code>site:reddit.com [category] recommendations</code> and see who gets mentioned. <em>Fix:</em> join those threads properly (see <a href=\"/blog/why-was-my-reddit-post-removed\">how to avoid getting filtered</a>).",
    },
    {
      t: "p",
      c: "<strong>5. ChatGPT can’t read your site.</strong> OpenAI says sites that block its search crawler <a href=\"https://developers.openai.com/api/docs/bots\">“will not be shown in ChatGPT search answers”</a>. <em>Check:</em> your robots.txt for OAI-SearchBot, your CDN’s bot settings, and whether your page text appears in view-source. <em>Fix:</em> Phase 1 of our <a href=\"/blog/how-to-get-cited-by-chatgpt\">citation playbook</a>.",
    },
    {
      t: "p",
      c: "<strong>6. They’ve been around longer.</strong> An older brand that was written about before the model’s training cutoff gets named from memory, even with no supporting page. <em>Fix:</em> you can’t speed this up directly. Every mention you earn now feeds the next model version.",
    },
    { t: "h2", c: "The source plan: when they’re on pages you’re not (weeks 1–8)" },
    {
      t: "ol",
      items: [
        "<strong>List every page ChatGPT and Perplexity cited</strong> for your 5 prompts. Usually 10–20 pages.",
        "<strong>Sort them by how often they appear.</strong> A listicle cited on 4 of your 5 prompts is worth more than ten that appear once.",
        "<strong>Contact the authors of the top 10</strong> with the email below. Offer a real reason to include you: a use case they missed, a price point, a free account to test.",
        "<strong>Publish your own comparison and alternatives pages</strong> for the rivals that keep getting named. Put the honest verdict in the first two sentences.",
        "<strong>Answer the Reddit threads</strong> that appear in the citations, with disclosure.",
        "<strong>Re-run the 5 prompts every two weeks.</strong> Search-mode answers can change as soon as a new page is retrieved.",
      ],
    },
    {
      t: "code",
      label: "Outreach email",
      c: "Subject: [Article title]: one option you might want to add\n\nHi [Name],\n\nI noticed your “[article title]” is one of the pages AI tools cite when people ask about [category], so it clearly gets read.\n\nIt covers [Rival A] and [Rival B] well. One gap: teams that [specific need] tend to end up with [your product], because [one concrete reason].\n\nIf you’re updating it, I can set you up with a full account to test. No pressure either way.\n\n[Name], [role], [company]",
    },
    { t: "h2", c: "How to get added to a list that already ranks" },
    {
      t: "p",
      c: "The listicles and comparison posts ChatGPT cites are usually maintained by one writer or a small content team. They update them a few times a year, and they’re looking for reasons to. Make it easy:",
    },
    {
      t: "ul",
      items: [
        "<strong>Find the right person.</strong> The byline on the article, then their LinkedIn or the site’s contact page. Avoid generic “info@” addresses.",
        "<strong>Lead with their gap, not your product.</strong> A buyer type, use case or price point the list doesn’t cover yet.",
        "<strong>Give them something to write.</strong> One concrete fact they can put straight into the article: your starting price, a limit, an integration nobody else has.",
        "<strong>Offer access, not money.</strong> A full account to test. Paid placements tend to get labelled or removed, and readers trust them less.",
        "<strong>Follow up once, a week later.</strong> Then move on to the next page on your list.",
      ],
    },
    {
      t: "p",
      c: "Track every pitch in the same sheet as your prompts. When a page adds you, note the date and watch for it showing up in AI answers over the following weeks.",
    },
    { t: "h2", c: "What to put on your own comparison page" },
    {
      t: "p",
      c: "When the rival ChatGPT keeps naming has no fair comparison against you anywhere, write one. Structure it so a model can lift the answer straight out:",
    },
    {
      t: "code",
      label: "[You] vs [Rival] page outline",
      c: "1. Verdict in two sentences: who should pick [Rival], who should pick [You]\n2. Table: price, seats, setup time, key features, integrations, support\n3. Where [Rival] is the better choice (be specific and honest)\n4. Where [You] is the better choice\n5. Cost at 5, 20 and 50 seats, with the month you checked prices\n6. How to switch from [Rival], and how long it takes\n7. FAQ: the five questions buyers ask in sales calls",
    },
    {
      t: "p",
      c: "Section 3 matters most. A comparison that admits where the rival wins reads as advice. One that doesn’t reads as an ad, and gets treated like one.",
    },
    { t: "h2", c: "The memory plan: when the model already “knows” them (months 1–6)" },
    {
      t: "p",
      c: "Memory moves slowly because it only changes when a new model is trained. The work is the same as the source plan, sustained for longer and aimed at being mentioned widely:",
    },
    {
      t: "ul",
      items: [
        "<strong>Earn coverage on independent sites:</strong> reviews, comparisons, newsletters and podcasts in your category. Aim for 2–4 new third-party mentions a month.",
        "<strong>Be present in community discussions</strong> where your category gets debated, month after month, not in one burst.",
        "<strong>Publish something others will cite:</strong> original data, a benchmark, a pricing survey of your category.",
        "<strong>Keep doing the source plan.</strong> Search-mode answers still show up for the long-tail prompts where memory is weak, and those are often the buying prompts.",
      ],
    },
    { t: "h2", c: "Copy what’s working for your competitor" },
    {
      t: "p",
      c: "Your rival’s citations are a map. For each page that cites them, ask why it does: are they in a listicle, a Reddit thread, a review site, a comparison on their own domain? Then do the same work, better and more honestly. Two specifics worth stealing:",
    },
    {
      t: "ul",
      items: [
        "<strong>Their comparison pages.</strong> If ChatGPT cites “[rival] vs [other]” from their own site, write the fairer version that includes you.",
        "<strong>Their Reddit footprint.</strong> Find the threads where they’re recommended and see who recommended them and why. Those are the questions you need to be answering.",
      ],
    },
    { t: "h2", c: "How to tell it’s working" },
    {
      t: "p",
      c: "Re-run the same 5 prompts every two weeks, logged out, and track these in your sheet. Source changes show up first; memory changes show up last.",
    },
    {
      t: "table",
      head: ["Signal", "Where to see it", "When it usually moves"],
      rows: [
        ["You appear on cited third-party pages", "Your prompt sheet", "Weeks 2–6"],
        ["You’re named on long-tail prompts", "ChatGPT and Perplexity, logged out", "Weeks 4–8"],
        ["Your pages are linked as sources", "The citations under each answer", "Weeks 4–10"],
        ["Copilot citations rise", "Bing Webmaster Tools, AI Performance", "Weeks 4–10"],
        ["You’re named on broad prompts with no source", "Head prompts like “best [category]”", "Months, after new model versions"],
        ["Branded searches rise", "Google Search Console", "Months 2–6"],
      ],
    },
    { t: "h2", c: "What to do this week" },
    {
      t: "ol",
      items: [
        "Run the 30-minute diagnosis on 5 prompts and fill in the sheet.",
        "Check robots.txt and your CDN settings so OAI-SearchBot can reach you.",
        "Pick the 3 most-cited third-party pages and send the outreach email.",
        "Draft one honest comparison page for the rival that shows up most.",
        "Find 3 Reddit threads from your citations and write one genuinely useful answer in each.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Testing in your own account.</strong> Your chat history changes the answer. Always test logged out or in a temporary chat.",
        "<strong>Rewriting your homepage first.</strong> It’s rarely what ChatGPT cites for buying questions.",
        "<strong>Chasing one prompt.</strong> Fix the pattern across 5–30 prompts, not one answer.",
        "<strong>Attacking the rival.</strong> Comparison pages that trash competitors read as ads. Say where they’re genuinely better.",
        "<strong>Giving up after two weeks.</strong> Source changes show up in weeks; memory takes months.",
      ],
    },
    {
      t: "p",
      c: "Your competitor isn’t winning because of a trick. They’re on more of the pages ChatGPT reads, or they’ve been talked about for longer. Run the diagnosis this week, then spend the next eight weeks getting your brand onto the pages that matter.",
    },
  ],
  faqs: [
    {
      q: "Why does ChatGPT recommend my product on my account but not on others?",
      a: "Your account is personalised by your chat history and saved memories. Test in a temporary chat or logged out to see what your buyers see.",
    },
    {
      q: "If I rank first on Google, will ChatGPT recommend me?",
      a: "Not reliably. In the Toronto study, GPT-4o’s cited domains overlapped Google’s top 10 results by just 4% on average. Perplexity overlapped the most, at 15.2%.",
    },
    {
      q: "How long until ChatGPT starts recommending us?",
      a: "If answers in your category come from search, new pages and mentions can change them within weeks. If they come from memory, expect months, because memory only changes with new model versions.",
    },
    {
      q: "Will a comparison page on my own site help?",
      a: "Yes, for comparison and alternatives prompts, the most-cited format in B2B. Keep it honest and put the verdict up top. For buying prompts like pricing, your own pages get cited more often.",
    },
    {
      q: "Is it worth getting mentioned on Reddit for this?",
      a: "Yes. Reddit was the single most-cited domain in Profound’s analysis of AI citations, and its threads often rank on Google too. Treat it as one channel alongside review sites and comparison articles.",
    },
  ],
  sources: [
    { title: "Navigating the Shift (University of Toronto)", url: toronto, type: "primary", read: "2026-10-25" },
    { title: "Ahrefs: AI Overview brand visibility factors, 75K brands", url: "https://ahrefs.com/blog/ai-overview-brand-correlation/", type: "platform", read: "2026-10-25" },
    { title: "Profound × Reddit", url: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search", type: "vendor", read: "2026-10-25" },
    { title: "Something Inc: 2026 AI Citation Study", url: "https://somethinginc.com/blog/2026-ai-citation-study/", type: "vendor", read: "2026-10-25" },
    { title: "OpenAI crawlers", url: "https://developers.openai.com/api/docs/bots", type: "primary", read: "2026-10-25" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "aeo-vs-geo-vs-seo", "why-was-my-reddit-post-removed"],
  cta: {
    mid: "Want the diagnosis done for you? We’ll run your buyers’ prompts and show exactly which pages put your competitor in the answer.",
    title: "See exactly why your competitor gets named.",
    text: "We run your buyers’ real prompts across ChatGPT, Perplexity and Gemini, map every page that cites your competitors, and mark the ones you can get onto first.",
    button: "Show me why",
  },
};
