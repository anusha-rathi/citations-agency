import type { Post } from "../../lib/blog";

const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const openaiBots = "https://developers.openai.com/api/docs/bots";

export const post: Post = {
  slug: "how-to-get-cited-by-chatgpt",
  tracker: "2.1",
  bucket: "cited",
  style: "RS Playbook",
  title: "How to get cited by ChatGPT in 2026: what the citation data says works",
  dek: "ChatGPT cites pages it can reach, that answer the exact question a buyer asked, from sites the rest of the web already mentions. A 12-week plan built on that, and what to skip.",
  description: "How to get cited by ChatGPT: let OAI-SearchBot in, find the prompts buyers ask, publish answer-first pages, get named on third-party sites, and track it.",
  targetQuery: "how to get cited by chatgpt",
  status: "draft",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      items: [
        "<strong>Thesis:</strong> ChatGPT cites pages it can reach, that answer the question a buyer actually asked, from brands other sites already mention. Fix those three in that order.",
        "<strong>Weeks 1–2:</strong> let OAI-SearchBot in, get indexed by Bing, and list the 20–30 prompts your buyers ask.",
        "<strong>Weeks 2–6:</strong> publish answer-first pages for those prompts, starting with comparisons and alternatives.",
        "<strong>Weeks 4–12:</strong> get named on the third-party pages and threads ChatGPT already cites.",
        "<strong>Ongoing:</strong> track brand mentions and linked citations separately, from a logged-out account.",
      ],
    },
    {
      t: "p",
      c: "To get cited by ChatGPT, make sure its search crawler can reach your pages, publish pages that answer the specific questions your buyers ask it, and get your brand named on the third-party pages it already trusts. Most of the advice that circulates (llms.txt files, schema markup, “AI-optimised” rewrites of your homepage) works on none of those three.",
    },
    {
      t: "p",
      c: "AI answers feel like a black box, so the advice fills with rituals: add this file, this markup, this keyword density. Meanwhile the data on what ChatGPT cites is fairly plain, and most of it points away from your own homepage. This playbook is for founders and marketing leads at B2B and consumer brands who want ChatGPT to name them when buyers ask for a recommendation.",
    },
    { t: "h2", c: "What does “cited by ChatGPT” actually mean?" },
    {
      t: "p",
      c: "Two different things get called a citation. A <strong>brand mention</strong> is ChatGPT naming you in the answer. A <strong>linked citation</strong> is ChatGPT showing one of your pages as a source, a link the reader can click. You can get one without the other: a well-known brand gets named from the model’s memory with no link, and a niche page can be cited as a source for a fact without the brand being recommended. Track them separately.",
    },
    {
      t: "p",
      c: "ChatGPT also answers in two modes. Sometimes it answers from what it learned in training. When a question benefits from current information it searches the web, and OpenAI says it then “rewrites your query into one or more targeted queries” sent to its search partners, which include Microsoft. Only the search mode produces linked citations, and it’s the mode you can influence this quarter. Our post on <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a> covers the memory side.",
    },
    {
      t: "quote",
      c: "What this immediately makes me realize is how many people are currently trying [to] figure out how to intentionally get AI chat bots to send people to their site, like ChatGPT was sending people to this guy’s site.",
      cite: "jrochkind1, Hacker News, July 2025, on Adrian Holovaty’s post about ChatGPT sending users to Soundslice",
      href: "https://news.ycombinator.com/item?id=44494196",
    },
    {
      t: "p",
      c: "The post that comment replied to is worth knowing. Holovaty noticed users uploading ChatGPT screenshots to Soundslice because ChatGPT was telling them about an ASCII-tab import feature that didn’t exist. He built it: “we might as well meet the market demand.” Being cited is only half the job. Being described accurately is the other half.",
    },
    { t: "h2", c: "Phase 1 (week 1): make sure ChatGPT can reach you" },
    {
      t: "p",
      c: "<strong>Allow OAI-SearchBot in robots.txt.</strong> OpenAI’s crawler documentation is blunt: sites that disallow OAI-SearchBot “will not be shown in ChatGPT search answers”. It is separate from GPTBot, which collects training data, and you can allow one while blocking the other. OpenAI says robots.txt changes take about 24 hours to apply. Check your CDN too: bot-blocking settings at Cloudflare or your host can block crawlers your robots.txt allows.",
    },
    {
      t: "p",
      c: "<strong>Get indexed by Bing.</strong> OpenAI’s help page lists Microsoft among the search providers ChatGPT search partners with. Verify your site in Bing Webmaster Tools, submit your sitemap and turn on IndexNow so new pages are found in hours rather than weeks.",
    },
    {
      t: "p",
      c: "<strong>Make your text visible without JavaScript.</strong> Open a key page, view the source, and search for a sentence from the body copy. If it isn’t in the HTML, a crawler that doesn’t run JavaScript sees an empty page.",
    },
    {
      t: "p",
      c: "<strong>Skip llms.txt for this.</strong> Four studies found AI search crawlers almost never request it; the evidence is in <a href=\"/blog/does-llms-txt-work\">does llms.txt work?</a>.",
    },
    { t: "h2", c: "Phase 2 (weeks 1–2): find the prompts your buyers actually ask" },
    {
      t: "p",
      c: "Keywords are what people type into Google. Prompts are what they say to ChatGPT, and they’re longer, more specific and more often a comparison. Build a list of 20 to 30, in your buyers’ words, from four places: sales-call notes, support tickets, Reddit thread titles in your category, and the “People also ask” box on your main keywords.",
    },
    {
      t: "table",
      head: ["Prompt type", "Example", "What usually gets cited"],
      rows: [
        ["Discovery", "best CRM for a 10-person startup", "Comparison posts, “best X” lists, community threads"],
        ["Comparison", "HubSpot vs Pipedrive for a small sales team", "Head-to-head pages, review sites"],
        ["Alternatives", "cheaper alternatives to [rival]", "Alternatives pages, threads where people say why they left"],
        ["Problem", "how do I stop leads going cold", "How-to guides, docs, threads"],
        ["Purchase", "[your brand] pricing for 20 seats", "Your own pricing and docs pages"],
      ],
      caption: "Prompt types and the sources each tends to draw, based on the Something Inc and University of Toronto findings below.",
    },
    {
      t: "p",
      c: "Run each prompt in a logged-out or temporary chat so your history doesn’t personalise the answer. Note which brands are named, which pages are cited, and whether you appear. That sheet is your baseline, and it tells you which pages to build first.",
    },
    { t: "h2", c: "Phase 3 (weeks 2–6): publish the pages answers are built from" },
    {
      t: "p",
      c: "Something Inc ran 4,100 high-intent B2B queries through ChatGPT, Perplexity, Claude and Google AI Mode between April and June 2026 and classified every cited URL by format. Something Inc sells GEO services, so treat this as their data, not an independent audit. It is still the clearest format breakdown published.",
    },
    {
      t: "table",
      caption: "Share of citations by content format, Something Inc 2026 AI Citation Study, read 25 October 2026.",
      head: ["Format", "Share of citations"],
      rows: [
        ["Comparison and alternatives", "33%"],
        ["How-to and guides", "21%"],
        ["Product pages and docs", "18%"],
        ["Research and data", "16%"],
        ["Community threads (including Reddit)", "13%"],
      ],
    },
    {
      t: "p",
      c: "<strong>Start with comparison and alternatives pages.</strong> They are a third of citations and most brands don’t have honest ones. Name your competitors, say where each one is the better choice, and put the verdict in the first paragraph.",
    },
    {
      t: "p",
      c: "<strong>Answer first, on every page.</strong> Put the direct answer to the prompt in the opening two sentences, then the evidence. Search-mode ChatGPT pulls passages, and a passage that answers the question on its own is easier to cite than one that needs three paragraphs of context.",
    },
    {
      t: "p",
      c: "<strong>Add facts a model can check.</strong> Prices with dates, specific limits, named integrations, numbers with sources. The original <a href=\"https://arxiv.org/abs/2311.09735\">GEO paper</a> (Aggarwal et al., KDD 2024) found content changes could raise visibility in generative engines “by up to 40%”, and that what works varies by domain. Specific, verifiable detail is the part of that finding that holds up in practice.",
    },
    { t: "cta" },
    { t: "h2", c: "Phase 4 (weeks 4–12): get named on pages you don’t own" },
    {
      t: "p",
      c: "This is the phase most brands skip, and it carries the most weight. A University of Toronto study published in April 2026 found that 57% of GPT-4o’s cited sources were independent “earned” media such as publishers and review sites, against 41% for Google. In comparison-style queries, AI engines took 59–86% of citations from third parties. Your own site is a minority of what gets read.",
    },
    {
      t: "p",
      c: "Ahrefs’ study of 75,000 brands points the same way: branded web mentions correlated 0.664 with visibility in Google’s AI Overviews, against 0.218 for backlinks. Ahrefs is careful to say correlation isn’t causation. As a direction, it is consistent: AI answers favour brands the rest of the web already talks about.",
    },
    {
      t: "ul",
      items: [
        "<strong>Get onto the lists that are already cited.</strong> Take the cited pages from your Phase 2 sheet and contact the authors with something useful: a correction, data, a product they haven’t tested.",
        "<strong>Join the threads.</strong> Reddit was the single most-cited domain in Profound’s analysis of 4 billion AI citations, at 3.11%. Answer questions in your category with disclosure. Our guide to <a href=\"/blog/why-was-my-reddit-post-removed\">why Reddit posts get removed</a> covers the filters that catch brand accounts.",
        "<strong>Earn reviews and press</strong> on the sites your prompts cite, not on sites nobody reads.",
      ],
    },
    {
      t: "quote",
      c: "The correlation between Google ranking and LLM recommendation is near zero (0.08 across ~150 brands we tested). So a company that spent a decade building SEO authority can be completely invisible to ChatGPT, while a smaller competitor with better documentation and more mentions on Reddit or GitHub gets recommended instead.",
      cite: "13pixels, Hacker News, February 2026",
      href: "https://news.ycombinator.com/item?id=47111550",
    },
    {
      t: "p",
      c: "That figure is self-reported by a commenter who tracks LLM recommendations commercially, and we haven’t seen the data behind it. It fits the Toronto study’s finding that GPT-4o’s cited domains overlapped Google’s top 10 results by only 4.0% on average.",
    },
    {
      t: "callout",
      tone: "dont",
      items: [
        "Hide instructions for AI in page headers or invisible text. It’s hidden-text spam with a new target.",
        "Buy reviews or mass-post on Reddit. Reddit’s spam policy and its account-level filters catch this, and removed threads get cited by nobody.",
        "Treat llms.txt or schema markup as your AI strategy. Neither moved citations in the large studies.",
        "Judge progress from your own logged-in ChatGPT. Your chat history personalises what you see.",
      ],
    },
    { t: "h2", c: "Phase 5 (ongoing): measure mentions and citations separately" },
    {
      t: "p",
      c: "Re-run your prompt sheet every month from a logged-out session and record, per prompt: were you named, were you linked, which pages were cited, and which competitors appeared. Add the free data you already have. Google counts AI Overview and AI Mode traffic inside the normal Search Console performance report, and Bing Webmaster Tools has an AI Performance report that shows how often Microsoft Copilot cites your pages.",
    },
    {
      t: "img",
      src: "/citations/shot-9.png",
      alt: "Bing Webmaster Tools AI Performance report: 41.6K total citations and 55 average cited pages over three months, with citations and cited pages charted daily",
      width: 1600,
      height: 891,
      caption: "Bing Webmaster Tools’ AI Performance report, captured October 2026: citations of one site’s pages across Microsoft Copilot and partners over three months.",
    },
    {
      t: "table",
      head: ["Phase", "Weeks", "What you can check at the end"],
      rows: [
        ["Reach", "1", "OAI-SearchBot allowed; site verified in Bing; key pages render without JavaScript"],
        ["Prompts", "1–2", "A baseline sheet of 20–30 prompts with who is named and cited"],
        ["Pages", "2–6", "Comparison, alternatives and answer pages live and indexed"],
        ["Named elsewhere", "4–12", "Your brand on cited lists, threads and review pages"],
        ["Measure", "Monthly", "Mentions and linked citations moving on your prompt sheet"],
      ],
    },
    { t: "h2", c: "So, how do you get cited by ChatGPT?" },
    {
      t: "p",
      c: "Be reachable, be the answer, and be named elsewhere. Allow OAI-SearchBot and get indexed by Bing this week. Spend the next two weeks finding the prompts your buyers really ask, then publish pages that answer them directly, starting with honest comparisons. From week four, put most of your effort into third-party pages and threads, because that is where most of ChatGPT’s citations come from. Measure mentions and links separately every month, from a logged-out account.",
    },
  ],
  faqs: [
    {
      q: "Can I pay to get cited by ChatGPT?",
      a: "Not as a placement in its answers. What you can pay for is the work that leads to citations: content, research and getting covered by the sites ChatGPT cites. Be wary of anyone selling guaranteed placement.",
    },
    {
      q: "How long does it take to get cited by ChatGPT?",
      a: "Crawler access takes effect in about 24 hours, according to OpenAI. New pages need to be found and indexed first, which IndexNow speeds up. Getting named on third-party pages usually takes the longest, weeks to months.",
    },
    {
      q: "Does ChatGPT use Google or Bing?",
      a: "OpenAI says ChatGPT search partners with third-party search providers and names Microsoft among them. Being indexed in Bing is the practical step. ChatGPT also runs its own crawler, OAI-SearchBot.",
    },
    {
      q: "What’s the difference between a mention and a citation?",
      a: "A mention is ChatGPT naming your brand in its answer. A linked citation is ChatGPT showing your page as a source. You can have either without the other, so count them separately.",
    },
    {
      q: "Does schema markup help ChatGPT cite me?",
      a: "Not on the evidence so far. Ahrefs tracked 1,885 pages that added JSON-LD against 4,000 that didn’t: ChatGPT citations moved 2.2%, which is indistinguishable from zero. Google also says its AI features need no special markup.",
    },
  ],
  sources: [
    { title: "Searching the web with ChatGPT (OpenAI Help Center)", url: openaiSearch, type: "primary", read: "2026-10-25" },
    { title: "Overview of OpenAI crawlers (OpenAI)", url: openaiBots, type: "primary", read: "2026-10-25" },
    { title: "Navigating the Shift (University of Toronto, EDBT/ICDT 2026 workshops)", url: toronto, type: "primary", read: "2026-10-25" },
    { title: "AI features and your website (Google Search Central)", url: "https://developers.google.com/search/docs/appearance/ai-features", type: "primary", read: "2026-10-25" },
    { title: "An Analysis of AI Overview Brand Visibility Factors, 75K brands (Ahrefs)", url: "https://ahrefs.com/blog/ai-overview-brand-correlation/", type: "platform", read: "2026-10-25" },
    { title: "The 2026 AI Citation Study (Something Inc)", url: "https://somethinginc.com/blog/2026-ai-citation-study/", type: "vendor", read: "2026-10-25" },
    { title: "The data on Reddit and AI search (Profound × Reddit)", url: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search", type: "vendor", read: "2026-10-25" },
    { title: "We tracked 1,885 pages adding schema. AI citations barely moved (Ahrefs)", url: "https://ahrefs.com/blog/schema-ai-citations/", type: "platform", read: "2026-10-25" },
    { title: "GEO: Generative Engine Optimization (Aggarwal et al., KDD 2024)", url: "https://arxiv.org/abs/2311.09735", type: "primary", read: "2026-10-25" },
    { title: "Adding a feature because ChatGPT incorrectly thinks it exists (Adrian Holovaty)", url: "https://www.holovaty.com/writing/chatgpt-fake-feature/", type: "press", read: "2026-10-25" },
    { title: "Hacker News comment by jrochkind1 on getting AI chatbots to send traffic", url: "https://news.ycombinator.com/item?id=44494196", type: "forum", read: "2026-10-25" },
    { title: "Hacker News comment by 13pixels on Google rank vs LLM recommendation", url: "https://news.ycombinator.com/item?id=47111550", type: "forum", read: "2026-10-25" },
  ],
  related: ["why-chatgpt-recommends-your-competitor", "does-llms-txt-work", "aeo-vs-geo-vs-seo"],
  cta: {
    mid: "Don’t know which prompts your buyers ask, or where ChatGPT already cites your rivals? That baseline is exactly what our free audit builds.",
    title: "Get your Phase 1 and 2 done for you.",
    text: "We check crawler access and Bing indexing, run your buyers’ prompts logged out, and hand you the sheet of who’s named, what’s cited and where you’re missing.",
    button: "Build my prompt baseline",
  },
};
