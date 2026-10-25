import type { Post } from "../../lib/blog";

const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const openaiBots = "https://developers.openai.com/api/docs/bots";

export const post: Post = {
  slug: "how-to-get-cited-by-chatgpt",
  tracker: "2.1",
  bucket: "cited",
  style: "RS Playbook",
  title: "How to get cited by ChatGPT: the complete playbook (2026)",
  dek: "Be reachable, answer the exact question a buyer asked, and get named on the pages ChatGPT already trusts. A 12-week plan with checklists, templates and what to measure.",
  description: "How to get cited by ChatGPT in 2026: a 12-week playbook covering crawler access, prompt research, the pages that get cited, earned mentions and tracking.",
  targetQuery: "how to get cited by chatgpt",
  status: "published",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "ChatGPT cites pages it can reach, that answer the exact question a buyer asked, from brands the rest of the web already talks about. The 5-phase playbook: fix crawler access in week 1, build a prompt list in weeks 1–2, publish answer-first comparison and alternatives pages in weeks 2–6, get named on third-party pages and Reddit threads from week 4, and track mentions and citations every month. Plan for 4–8 weeks before the first citations and about 3 months before they’re steady.",
    },
    {
      t: "p",
      c: "Most advice on getting cited by ChatGPT is a list of rituals: add an llms.txt file, add schema markup, rewrite your homepage “for AI”. None of those move citations much. What ChatGPT actually cites is far more ordinary, and far more work.",
    },
    {
      t: "p",
      c: "It cites pages that answer the question a buyer typed, from sites it can crawl, and it leans heavily on what <em>other</em> sites say about you. Get those three things right and you show up. Skip any one of them and you don’t.",
    },
    {
      t: "p",
      c: "This is the playbook for founders and marketing leads who want ChatGPT to name their brand when buyers ask for a recommendation, and want a plan they can run in a quarter.",
    },
    { t: "h2", c: "How ChatGPT decides what to cite" },
    {
      t: "p",
      c: "ChatGPT answers in two ways. Sometimes it answers from what the model learned in training. When a question needs current information, it searches the web, and that is where citations come from.",
    },
    {
      t: "p",
      c: `When it searches, OpenAI says ChatGPT <a href="${openaiSearch}">“rewrites your query into one or more targeted queries”</a> and sends them to its search partners, which include Microsoft. So a buyer asking “what’s the best CRM for a 6-person team that hates admin?” triggers several shorter searches behind the scenes. Pages that rank for those searches, and answer them cleanly, become the sources.`,
    },
    { t: "p", c: "Two outcomes are worth separating from day one:" },
    {
      t: "ul",
      items: [
        "<strong>A brand mention</strong> is ChatGPT naming you in the answer.",
        "<strong>A linked citation</strong> is ChatGPT showing one of your pages as a clickable source.",
      ],
    },
    {
      t: "p",
      c: "You can get either without the other. Well-known brands get named from memory with no link. A good guide can be cited as a source while the answer recommends someone else. Track both, separately.",
    },
    { t: "h2", c: "The 3 things that have to be true" },
    {
      t: "ol",
      items: [
        "<strong>Reachable.</strong> ChatGPT’s search crawler can fetch your pages and read the text without running JavaScript.",
        "<strong>Relevant.</strong> You have a page that answers the specific prompt, not just a homepage that mentions the category.",
        `<strong>Referenced.</strong> Other sites, reviewers and community threads name you. In a <a href="${toronto}">University of Toronto study</a>, 57% of the sources GPT-4o cited were independent publishers and review sites, against 41% for Google.`,
      ],
    },
    {
      t: "p",
      c: "Most brands work only on number 2, and only on their own site. Number 3 is where most citations are won, which is why the playbook spends the most weeks on it.",
    },
    { t: "h2", c: "Phase 1: Make sure ChatGPT can reach you (week 1)" },
    {
      t: "p",
      c: `This is an afternoon of work, and it is a hard gate. OpenAI is explicit that sites that block its search crawler, OAI-SearchBot, <a href="${openaiBots}">“will not be shown in ChatGPT search answers”</a>.`,
    },
    {
      t: "p",
      c: "<strong>1. Allow the AI search crawlers in robots.txt.</strong> Add these lines to your <code>robots.txt</code>. GPTBot is OpenAI’s training crawler and a separate decision: you can allow search while blocking training.",
    },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\n# Optional: block model training but keep search\nUser-agent: GPTBot\nDisallow: /",
    },
    { t: "p", c: "OpenAI says robots.txt changes take about 24 hours to apply." },
    {
      t: "p",
      c: "<strong>2. Check your CDN isn’t blocking them anyway.</strong> Cloudflare, Vercel and most hosts have bot-protection settings that can block AI crawlers even when robots.txt allows them. Open your bot settings and make sure AI search crawlers are allowed.",
    },
    {
      t: "p",
      c: "<strong>3. Get indexed by Bing.</strong> Microsoft is one of ChatGPT’s search partners. Verify your site in Bing Webmaster Tools, submit your sitemap, and turn on IndexNow so new pages are picked up in hours.",
    },
    {
      t: "p",
      c: "<strong>4. Run the view-source test.</strong> Open your most important page, view the source, and search for a sentence from the body. If you can’t find it, the text is loaded by JavaScript and many AI crawlers see an empty page. Ask your developer to render that content on the server.",
    },
    {
      t: "p",
      c: "<strong>5. Skip llms.txt.</strong> Four large studies found AI search crawlers almost never request it. The full breakdown is in <a href=\"/blog/does-llms-txt-work\">does llms.txt work?</a>",
    },
    { t: "h2", c: "Phase 2: Build your prompt list (weeks 1–2)" },
    {
      t: "p",
      c: "Keywords are what people type into Google. Prompts are what they say to ChatGPT: longer, more specific, and more often a comparison. You need 20–30 prompts written in your buyers’ words. Pull them from four places:",
    },
    {
      t: "ul",
      items: [
        "<strong>Sales calls.</strong> The questions prospects ask before they buy, word for word.",
        "<strong>Support tickets.</strong> “Can it do X?” and “how do I Y?” questions.",
        "<strong>Reddit thread titles</strong> in your category. Search <code>site:reddit.com [your category]</code> on Google and copy the questions.",
        "<strong>Google’s “People also ask” box</strong> on your three most important keywords.",
      ],
    },
    { t: "p", c: "Sort them into five types. Each type tends to cite a different kind of page, which tells you what to build:" },
    {
      t: "table",
      head: ["Prompt type", "Example", "What usually gets cited"],
      rows: [
        ["Discovery", "best CRM for a 10-person startup", "“Best X” lists, comparison posts, Reddit threads"],
        ["Comparison", "HubSpot vs Pipedrive for a small sales team", "Head-to-head pages, review sites"],
        ["Alternatives", "cheaper alternatives to [rival]", "Alternatives pages, threads where people explain why they switched"],
        ["Problem", "how do I stop leads going cold", "How-to guides, docs, community answers"],
        ["Purchase", "[your brand] pricing for 20 seats", "Your pricing page and docs"],
      ],
    },
    {
      t: "p",
      c: "<strong>Run your baseline.</strong> Ask every prompt in a temporary or logged-out chat in ChatGPT, then in Perplexity and Gemini. Your own account is personalised by your chat history, so it shows you a flattering answer. Log the results in a sheet like this:",
    },
    {
      t: "table",
      head: ["Prompt", "Engine", "Named?", "Linked?", "Pages cited", "Competitors named"],
      rows: [
        ["best CRM for a 10-person startup", "ChatGPT", "No", "No", "3 listicles, 1 Reddit thread", "Rival A, Rival B"],
        ["alternatives to Rival A", "Perplexity", "Yes", "No", "G2 page, 2 blog posts", "Rival B, Rival C"],
      ],
    },
    {
      t: "p",
      c: "By the end of week 2 you should know which prompts you’re missing from, and exactly which pages get cited instead. That sheet drives Phases 3 and 4.",
    },
    { t: "h2", c: "Phase 3: Publish the pages answers are built from (weeks 2–6)" },
    {
      t: "p",
      c: "In <a href=\"https://somethinginc.com/blog/2026-ai-citation-study/\">Something Inc’s study of 4,100 B2B queries</a> across ChatGPT, Perplexity, Claude and Google AI Mode, comparison and alternatives content took 33% of all citations, more than any other format. How-to guides took 21%, product pages and docs 18%, research 16% and community threads 13%. Build in that order.",
    },
    { t: "p", c: "<strong>Comparison pages (“[you] vs [rival]”).</strong> One page per real competitor your buyers ask about. Use this outline:" },
    {
      t: "code",
      label: "Comparison page outline",
      c: "H1: [You] vs [Rival]: which is better for [use case]?\n\n1. The verdict in 2 sentences (who should pick which)\n2. Side-by-side table: price, seats, key features, integrations, support\n3. Where [Rival] is the better choice (be honest)\n4. Where [You] is the better choice\n5. What it costs at 5, 20 and 50 seats\n6. How to switch, and how long it takes\n7. FAQ (5 questions buyers actually ask)",
    },
    {
      t: "p",
      c: "Section 3 is the one most brands skip and the one that makes the page credible. A comparison that never admits the rival wins anywhere reads like an ad, to people and to models.",
    },
    {
      t: "p",
      c: "<strong>Alternatives pages (“[rival] alternatives”).</strong> List 5–8 options including yourself, grouped by why someone is leaving the rival: too expensive, too complex, missing a feature. Buyers looking for alternatives already know what they dislike, so organise the page around that.",
    },
    {
      t: "p",
      c: "<strong>Answer-first writing on every page.</strong> When ChatGPT searches, it pulls passages. A passage that answers the question on its own gets cited; one that needs three paragraphs of context doesn’t. Compare:",
    },
    {
      t: "table",
      head: ["Before", "After"],
      rows: [
        ["“In today’s fast-moving sales world, choosing a CRM can feel overwhelming. Let’s look at what matters.”", "“For a 6-person team, [Tool A] is the faster setup (about an afternoon) and [Tool B] has the bigger free tier. Pick [Tool A] if your reps live in email.”"],
      ],
    },
    {
      t: "p",
      c: "<strong>Put checkable facts on the page.</strong> Prices with the month you checked them, seat limits, named integrations, setup time. The original <a href=\"https://arxiv.org/abs/2311.09735\">GEO research paper</a> found content changes like these could lift visibility in AI answers by up to 40%. Vague claims (“powerful”, “best-in-class”) give a model nothing to quote.",
    },
    {
      t: "p",
      c: `<strong>Date and refresh your key pages.</strong> AI answers favour newer pages. In the <a href="${toronto}">Toronto study</a>, the median page GPT-4o cited for consumer-electronics queries was 79.8 days old, against 130.4 days for Google’s results. Update comparison and pricing pages at least quarterly and show the date.`,
    },
    { t: "cta" },
    {
      t: "callout",
      tone: "dont",
      items: [
        "Hide instructions for AI in invisible text or page headers. It’s hidden-text spam with a new target.",
        "Mass-post your product link across subreddits. It gets removed, and removed threads get cited by nobody.",
        "Treat schema markup as your AI strategy. <a href=\"https://ahrefs.com/blog/schema-ai-citations/\">Ahrefs tracked 1,885 pages that added it</a>: ChatGPT citations moved 2.2%, which is indistinguishable from zero.",
        "Judge progress from your own logged-in ChatGPT. It’s personalised to you.",
      ],
    },
    { t: "h2", c: "Phase 4: Get named on pages you don’t own (weeks 4–12)" },
    {
      t: "p",
      c: "This is the phase that moves the answer. <a href=\"https://ahrefs.com/blog/ai-overview-brand-correlation/\">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated 0.664 with visibility in Google’s AI Overviews, three times more than backlinks (0.218). Brands in the top quarter for mentions averaged 169 AI Overview mentions; the next quarter averaged 14. Being talked about is the lever.",
    },
    {
      t: "p",
      c: "<strong>1. Get onto the lists that are already cited.</strong> Your Phase 2 sheet shows the exact listicles and comparison posts ChatGPT cites for your prompts. Contact each author with something worth their time:",
    },
    {
      t: "code",
      label: "Outreach email",
      c: "Subject: A gap in your [category] list\n\nHi [Name],\n\nYour “[article title]” comes up a lot when people ask AI tools about [category], so it clearly gets read.\n\nOne thing it doesn’t cover: [specific use case or buyer type]. We built [product] for exactly that, and [one concrete fact: price, a result, a feature the others lack].\n\nHappy to set you up with a full account to test it. If it doesn’t earn a spot, no hard feelings.\n\n[Your name], [role] at [company]",
    },
    {
      t: "p",
      c: "Send 10 of these a week. Most won’t reply. Each one that does can keep you in AI answers for months.",
    },
    {
      t: "p",
      c: "<strong>2. Join the Reddit threads where your prompts are asked.</strong> Reddit was the single most-cited domain in <a href=\"https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search\">Profound’s analysis of 4 billion AI citations</a>. Find the threads from your baseline, answer the question properly, say who you are, and mention your product only where it genuinely fits. New accounts get filtered fast, so read <a href=\"/blog/why-was-my-reddit-post-removed\">why Reddit posts get removed</a> before you start.",
    },
    {
      t: "p",
      c: "<strong>3. Earn reviews where they’re cited.</strong> If G2, Capterra or a niche review site shows up in your baseline, ask your happiest customers for reviews there, not everywhere.",
    },
    {
      t: "p",
      c: "<strong>4. Say something worth quoting.</strong> Original data, a benchmark, a strong opinion on a podcast or in a guest post. A small, specific dataset about your category gets picked up by other writers, and their pages get cited.",
    },
    {
      t: "p",
      c: "By week 12, aim to be named on at least 5 of the third-party pages from your baseline, and to be a regular in the 3–5 Reddit threads that matter most.",
    },
    { t: "h2", c: "Phase 5: Measure what changes (monthly)" },
    { t: "p", c: "Re-run your prompt list on the first Monday of every month, logged out, and update the sheet. Watch these:" },
    {
      t: "table",
      head: ["Direct (easy to see)", "Indirect (matters more)"],
      rows: [
        ["Prompts where you’re named", "Branded searches in Google Search Console"],
        ["Prompts where you’re linked", "Signups answering “ChatGPT” to “how did you hear about us?”"],
        ["Copilot citations in Bing Webmaster Tools", "Third-party pages that name you"],
        ["Referral traffic from chatgpt.com", "Competitors named less often on your prompts"],
      ],
    },
    {
      t: "p",
      c: "Bing Webmaster Tools has a free AI Performance report that counts how often Microsoft Copilot cites your pages. It’s the closest thing to a citation counter you can get today:",
    },
    {
      t: "img",
      src: "/citations/shot-9.png",
      alt: "Bing Webmaster Tools AI Performance report: 41.6K total citations and 55 average cited pages over three months, charted daily",
      width: 1600,
      height: 891,
      caption: "Bing Webmaster Tools’ AI Performance report, October 2026.",
    },
    {
      t: "p",
      c: "Add a “ChatGPT” option to your signup survey today. AI-driven signups often show up as direct traffic in analytics, so asking is the most reliable way to count them.",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Only optimising your homepage.</strong> ChatGPT cites specific answer pages and third-party pages far more than homepages.",
        "<strong>Writing comparisons that never admit a weakness.</strong> They read as ads and don’t get quoted.",
        "<strong>Tracking one prompt.</strong> One prompt is a coin flip. Twenty to thirty is a trend.",
        "<strong>Blocking AI crawlers by accident.</strong> A CDN bot setting quietly undoes your robots.txt.",
        "<strong>Quitting at week 6.</strong> Third-party mentions take weeks to be published and more weeks to be picked up. Most of the movement comes after month 2.",
        "<strong>Ignoring what ChatGPT says about you.</strong> Adrian Holovaty found ChatGPT was sending people to his product Soundslice for a feature it didn’t have, and <a href=\"https://www.holovaty.com/writing/chatgpt-fake-feature/\">ended up building it</a>. Check what it says about your pricing and features, not just whether it names you.",
      ],
    },
    { t: "h2", c: "The long game" },
    {
      t: "p",
      c: "Getting cited by ChatGPT isn’t a trick you apply once. It’s the compound result of being reachable, publishing the clearest answers in your category, and being the brand other people mention when the topic comes up.",
    },
    {
      t: "p",
      c: "The pages you publish this quarter keep getting retrieved. The lists you get added to keep getting cited. The Reddit answers you write keep ranking. Start with Phase 1 this week: it takes an afternoon, and nothing else works until it’s done.",
    },
  ],
  faqs: [
    {
      q: "How long does it take to get cited by ChatGPT?",
      a: "Crawler changes apply in about 24 hours. New pages usually need a few weeks to be indexed and retrieved. Third-party mentions take longest, so plan for 4–8 weeks before the first citations and about 3 months before they’re steady.",
    },
    {
      q: "Can I pay to get cited by ChatGPT?",
      a: "You can’t buy a place in its answers. What you can invest in is the work that leads there: pages that answer buyer prompts, coverage on the sites ChatGPT cites, and useful Reddit participation.",
    },
    {
      q: "Does ChatGPT use Google or Bing?",
      a: "OpenAI says ChatGPT search partners with third-party search providers and names Microsoft among them. It also runs its own crawler, OAI-SearchBot. Get indexed in Bing and allow OAI-SearchBot.",
    },
    {
      q: "What’s the difference between a mention and a citation?",
      a: "A mention is ChatGPT naming your brand in its answer. A citation is ChatGPT linking to your page as a source. Track them separately, because you can have one without the other.",
    },
    {
      q: "Does schema markup help ChatGPT cite me?",
      a: "Not measurably. Ahrefs compared 1,885 pages that added JSON-LD with 4,000 that didn’t, and ChatGPT citations moved 2.2%, within normal noise. Spend the time on clearer answer pages instead.",
    },
  ],
  sources: [
    { title: "Searching the web with ChatGPT (OpenAI Help Center)", url: openaiSearch, type: "primary", read: "2026-10-25" },
    { title: "Overview of OpenAI crawlers (OpenAI)", url: openaiBots, type: "primary", read: "2026-10-25" },
    { title: "Navigating the Shift (University of Toronto)", url: toronto, type: "primary", read: "2026-10-25" },
    { title: "Ahrefs: AI Overview brand visibility factors, 75K brands", url: "https://ahrefs.com/blog/ai-overview-brand-correlation/", type: "platform", read: "2026-10-25" },
    { title: "Ahrefs: schema and AI citations", url: "https://ahrefs.com/blog/schema-ai-citations/", type: "platform", read: "2026-10-25" },
    { title: "Something Inc: 2026 AI Citation Study", url: "https://somethinginc.com/blog/2026-ai-citation-study/", type: "vendor", read: "2026-10-25" },
    { title: "Profound × Reddit: the data on Reddit and AI search", url: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search", type: "vendor", read: "2026-10-25" },
    { title: "GEO: Generative Engine Optimization (KDD 2024)", url: "https://arxiv.org/abs/2311.09735", type: "primary", read: "2026-10-25" },
    { title: "Adrian Holovaty: Adding a feature because ChatGPT incorrectly thinks it exists", url: "https://www.holovaty.com/writing/chatgpt-fake-feature/", type: "press", read: "2026-10-25" },
  ],
  related: ["why-chatgpt-recommends-your-competitor", "aeo-vs-geo-vs-seo", "does-llms-txt-work"],
  cta: {
    mid: "Want Phases 1 and 2 done for you? We check crawler access and run your buyers’ prompts across ChatGPT, Perplexity and Gemini.",
    title: "Get your prompt baseline, free.",
    text: "We check whether AI crawlers can reach you, run your buyers’ real prompts logged out, and send you the sheet: who’s named, what’s cited, and where you’re missing.",
    button: "Build my prompt baseline",
  },
};
