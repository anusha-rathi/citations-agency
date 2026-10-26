import type { Post } from "../../lib/blog";

const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const openaiBots = "https://developers.openai.com/api/docs/bots";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";
const google = "https://developers.google.com/search/docs/appearance/ai-features";
const perplexity = "https://docs.perplexity.ai/guides/bots";

export const post: Post = {
  slug: "does-chatgpt-use-google-or-bing",
  tracker: "1.7",
  bucket: "basics",
  style: "RS Answer",
  title: "Does ChatGPT use Google or Bing? How AI search finds pages",
  dek: "ChatGPT doesn’t just “use Google”. Here’s where each AI assistant actually gets its sources, why ranking on Google isn’t enough, and what to set up so all of them can find you.",
  description: "Does ChatGPT use Google or Bing? How ChatGPT, Perplexity, Copilot, Claude and Google’s AI find pages, why rankings overlap so little, and what to set up.",
  targetQuery: "does chatgpt use google or bing",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "ChatGPT search uses its own crawler (OAI-SearchBot) plus third-party search providers, and OpenAI names Microsoft, which runs Bing, among them. It isn’t simply showing Google’s results: only about 8% of the links ChatGPT cites in its answers rank in Google’s top 10 for the same query, and about 8% rank in Bing’s. Copilot runs on Bing, Google’s AI Overviews run on Google’s index, and Perplexity runs its own crawler. To be findable everywhere: allow OAI-SearchBot and PerplexityBot, get indexed in both Google and Bing, and answer the specific question each prompt asks.",
    },
    {
      t: "p",
      c: "It’s one of the first questions teams ask when they start on AI search: if we rank on Google, are we covered in ChatGPT? The short answer is no. The longer answer explains why your rankings and your AI visibility can look so different, and what to do about it.",
    },
    { t: "h2", c: "Where each AI assistant gets its sources" },
    {
      t: "table",
      head: ["Assistant", "Where it finds pages", "What you need"],
      rows: [
        ["ChatGPT search", `Its own crawler, OAI-SearchBot, plus <a href="${openaiSearch}">third-party search providers including Microsoft</a>`, "Allow OAI-SearchBot; get indexed in Bing"],
        ["Microsoft Copilot", "Bing’s index", "Get indexed in Bing"],
        ["Google AI Overviews and AI Mode", `Google’s index; pages must be <a href="${google}">indexed and eligible for a snippet</a>`, "Normal Google indexing; no special markup"],
        ["Gemini app", "Google Search for grounding", "Google indexing"],
        ["Perplexity", `Its own crawler, <a href="${perplexity}">PerplexityBot</a>, which surfaces and links sites in its results`, "Allow PerplexityBot"],
        ["Claude", "Anthropic’s search crawler, Claude-SearchBot", "Allow Claude-SearchBot"],
      ],
    },
    {
      t: "p",
      c: "So the honest answer to “Google or Bing?” for ChatGPT is: Bing is part of it, Google isn’t named, and OpenAI also crawls the web itself. For your site, that means three separate doors: Google’s index, Bing’s index and the AI companies’ own crawlers. Each one needs to be open.",
    },
    { t: "h2", c: "How a ChatGPT search actually works" },
    {
      t: "p",
      c: `When ChatGPT decides a question needs fresh information, OpenAI says it <a href="${openaiSearch}">“rewrites your query into one or more targeted queries”</a> and sends them to its search providers. It then reads the pages that come back and writes an answer, with links to the sources it used.`,
    },
    { t: "p", c: "That process explains most of what surprises people:" },
    {
      t: "ol",
      items: [
        "<strong>The query ChatGPT searches isn’t the one the user typed.</strong> A user asks a long, conversational question; ChatGPT turns it into shorter, sharper searches, often several. You need to rank for those, not for the user’s exact words.",
        "<strong>It reads pages, not just titles.</strong> After searching, it opens the results and pulls out passages. A page that ranks but buries the answer is easy to skip.",
        "<strong>It favours pages that answer the specific question.</strong> A comparison page beats a homepage for “[you] vs [rival]”, even if the homepage has more authority.",
        "<strong>It doesn’t always search.</strong> For many questions, ChatGPT answers from what the model learned in training. There, your rankings don’t matter at all; what matters is how often and how well you were described across the web.",
      ],
    },
    { t: "h2", c: "Why your Google rankings don’t carry over" },
    {
      t: "p",
      c: `<a href="${overlap}">Ahrefs checked 15,000 queries</a> and compared the links each AI assistant cited with the top 10 results on Google and Bing for the same query:`,
    },
    {
      t: "table",
      head: ["Assistant", "Cited links in Google’s top 10", "Cited links in Bing’s top 10"],
      rows: [
        ["Perplexity", "28.6%", "16.6%"],
        ["Gemini", "8.6%", "Not reported"],
        ["Copilot", "8.2%", "14.0%"],
        ["ChatGPT (links in the answer)", "8.0%", "8.1%"],
        ["ChatGPT (reference list)", "6.1%", "Not reported"],
      ],
      caption: "Ahrefs, 15,000 queries, August 2025. Overall, only 12% of links cited by ChatGPT, Gemini and Copilot ranked in Google’s top 10.",
    },
    {
      t: "p",
      c: "Two things stand out. First, ranking in the top 10 is a weak predictor of being cited anywhere, even on Bing for Bing-powered Copilot. Second, the assistants differ: Perplexity overlaps most with Google, ChatGPT barely overlaps with either. The rewritten queries are a big part of why. ChatGPT searches for something narrower than the keyword you rank for, and pulls results from deeper than page one.",
    },
    { t: "cta" },
    { t: "h2", c: "What to set up so every assistant can find you" },
    {
      t: "p",
      c: "This is a one-afternoon job for most sites:",
    },
    {
      t: "ol",
      items: [
        "<strong>Allow the AI search crawlers.</strong> In robots.txt, allow OAI-SearchBot, PerplexityBot and Claude-SearchBot. OpenAI says sites that block OAI-SearchBot <a href=\"" + openaiBots + "\">won’t be shown in ChatGPT search answers</a>. Our <a href=\"/blog/robots-txt-for-ai-crawlers\">robots.txt template</a> has the exact lines.",
        "<strong>Check your CDN isn’t blocking them.</strong> Some CDNs block AI crawlers by default. Test with <code>curl -A \"OAI-SearchBot\"</code> against a key page; you want a 200.",
        "<strong>Verify in Google Search Console.</strong> Make sure your pricing, comparison and guide pages are indexed with no <code>noindex</code> or <code>nosnippet</code>.",
        "<strong>Verify in Bing Webmaster Tools.</strong> Import your site from Search Console, submit your sitemap and enable IndexNow. This is the step most teams skip.",
        "<strong>Serve your content in HTML.</strong> AI crawlers generally don’t run JavaScript. If your page text only appears after scripts load, they can’t read it. Test it with <a href=\"/blog/can-chatgpt-read-javascript\">this guide</a>.",
      ],
    },
    { t: "h2", c: "How to see what ChatGPT is actually searching for" },
    {
      t: "p",
      c: "You can’t see ChatGPT’s rewritten queries directly, but you can get close enough to act on:",
    },
    {
      t: "ol",
      items: [
        "<strong>Ask a buyer question in ChatGPT with search on.</strong> For example: “What’s the best invoicing software for a five-person design agency?”",
        "<strong>Open the sources.</strong> List every page it cited. Note the page type: review site, comparison, Reddit thread, vendor page.",
        "<strong>Search Bing and Google for short versions of the question.</strong> “Best invoicing software small agency”, “invoicing software for designers”. See which of ChatGPT’s sources appear and where.",
        "<strong>Spot the pattern.</strong> If the sources are mostly roundups and reviews, you need to be on those pages. If they’re vendor comparison pages, you need your own.",
        "<strong>Repeat for 10 to 20 buyer questions.</strong> The pattern across them is your plan.",
      ],
    },
    {
      t: "p",
      c: "This takes about an hour and tells you more than any rank tracker about where ChatGPT gets its information in your category. Save the source list in a spreadsheet with the date, because sources shift, and next month’s list is how you’ll see whether your work is landing.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you sell scheduling software for dental clinics. You rank third on Google for “dental scheduling software”, and you’re confused that ChatGPT never mentions you. Here’s how the lookup method above usually plays out.",
    },
    {
      t: "p",
      c: "You ask ChatGPT: “What scheduling software do small dental practices use, and which is easiest to set up?” It answers with four tools and cites six sources: two “best dental software” roundups from industry blogs, a G2 category page, a Reddit thread in a dentistry community, and the comparison pages of two competitors.",
    },
    {
      t: "p",
      c: "Your ranking page isn’t among them, because it’s a features page that never says “easy to set up” or mentions practice size. Neither roundup lists you. The Reddit thread doesn’t mention you. Your G2 profile has six reviews; the tools ChatGPT named have hundreds.",
    },
    {
      t: "p",
      c: "Now you have a concrete plan, and none of it is about Google rankings: write a page that answers “easiest scheduling software for small dental practices” directly, contact the two roundup authors with an update, ask happy customers for G2 reviews, and answer setup questions in the Reddit community with disclosure.",
    },
    { t: "h2", c: "Assistant-by-assistant checklist" },
    {
      t: "ul",
      items: [
        "<strong>ChatGPT:</strong> OAI-SearchBot allowed; Bing indexing verified; key pages answer specific questions in HTML; you’re listed on the third-party pages it cites for your category.",
        "<strong>Copilot:</strong> Bing indexing verified; IndexNow on; check the AI Performance report in Bing Webmaster Tools monthly.",
        "<strong>Google AI Overviews and AI Mode:</strong> pages indexed in Search Console, no <code>nosnippet</code>; answer-first structure; nothing special to add.",
        "<strong>Gemini:</strong> same as Google. Blocking Google-Extended affects Gemini’s use of your content, not Google Search.",
        "<strong>Perplexity:</strong> PerplexityBot allowed and not blocked at your CDN; fresh, dated pages, because Perplexity searches on almost every question.",
        "<strong>Claude:</strong> Claude-SearchBot allowed.",
      ],
    },
    { t: "h2", c: "How to tell which assistant is sending you traffic" },
    {
      t: "p",
      c: "Each assistant shows up differently in analytics. In GA4, go to Reports → Acquisition → Traffic acquisition, set the dimension to “Session source”, and look for:",
    },
    {
      t: "table",
      head: ["Source", "Assistant"],
      rows: [
        ["chatgpt.com", "ChatGPT"],
        ["perplexity.ai", "Perplexity"],
        ["copilot.microsoft.com", "Copilot"],
        ["gemini.google.com", "Gemini app"],
        ["claude.ai", "Claude"],
      ],
    },
    {
      t: "p",
      c: "Google’s AI Overviews and AI Mode don’t appear separately; their clicks are counted inside normal Google organic traffic. Some assistant clicks also arrive without a referrer and land in “Direct”. Treat these numbers as a floor, and pair them with monthly prompt checks to see the full picture.",
    },
    { t: "h2", c: "When ChatGPT doesn’t search at all" },
    {
      t: "p",
      c: "Plenty of answers come straight from the model, especially broad questions like “what are good CRMs for startups?” Here the question “Google or Bing?” doesn’t apply. The model is drawing on what it learned from the web during training.",
    },
    {
      t: "p",
      c: "You influence this the slow way: by being described accurately and often on the sites models learn from, such as review platforms, industry publications, forums and Reddit, and by having clear, crawlable pages about what you do. If you block training crawlers like GPTBot, you only appear through what others write about you. We cover this in detail in <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a>.",
    },
    {
      t: "table",
      head: ["Answer type", "What drives it", "What you can do"],
      rows: [
        ["Search-based (shows sources)", "Crawlers, Bing and partner indexes, page relevance", "Technical access, indexing, answer-first pages"],
        ["Model-based (no sources)", "What the model learned in training", "Mentions across the web, consistent descriptions, time"],
      ],
    },
    { t: "h2", c: "What this means for the pages you write" },
    {
      t: "p",
      c: "Because ChatGPT turns one conversational question into several narrow searches, the pages that get picked are the ones that match a narrow search exactly. That changes how you plan content:",
    },
    {
      t: "ul",
      items: [
        "<strong>Write for the sub-question, not the head term.</strong> “Dental scheduling software” is the keyword; “scheduling software for a two-dentist practice” and “dental scheduling that works with [practice software]” are what get searched.",
        "<strong>Name the audience and the situation in headings.</strong> “For small practices”, “for teams under 10”, “if you already use [tool]”. These words match rewritten queries.",
        "<strong>Answer in the first two sentences under each heading.</strong> The assistant reads passages, and the first lines of a section are the easiest to quote.",
        "<strong>Keep facts current and visible.</strong> Prices, plan limits and integrations change, and assistants prefer recent, dated pages.",
        "<strong>Publish the comparison yourself.</strong> If buyers compare you with a rival, a fair, specific comparison page gives the assistant something to cite besides the rival’s version.",
      ],
    },
    {
      t: "p",
      c: "None of this is a trick for one assistant. Pages that answer specific questions clearly work across ChatGPT, Perplexity, Copilot and Google’s AI at once.",
    },
    { t: "h2", c: "Should you optimise for Bing now?" },
    {
      t: "p",
      c: "Not as a separate project, but don’t ignore it. Most of what ranks on Google ranks on Bing too. The difference is that many teams have never verified their site in Bing Webmaster Tools, so they don’t know if their key pages are indexed there, and they’re missing the AI Performance report, which counts how often Copilot cites them.",
    },
    {
      t: "p",
      c: "Do the setup, check that your important pages are indexed, and fix anything that isn’t. Bing’s URL Inspection tool shows the same kind of detail as Google’s, including when a page was last crawled. That covers Bing’s role in ChatGPT and Copilot without a new strategy.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t assume a top Google ranking means you’re in ChatGPT’s answers. Check the actual answers.",
        "Don’t block GPTBot thinking it removes you from ChatGPT search. Search uses OAI-SearchBot; GPTBot is for training.",
        "Don’t buy “ChatGPT ranking” services. No one controls which sources ChatGPT picks.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Only checking Google.</strong> ChatGPT and Copilot draw on Bing, and the assistants run their own crawlers.",
        "<strong>Tracking keywords instead of questions.</strong> ChatGPT rewrites questions into its own searches. Track the prompts buyers ask, as in our <a href=\"/blog/prompt-research-for-ai-search\">prompt research guide</a>.",
        "<strong>Optimising one homepage for everything.</strong> Assistants cite pages that answer the specific question.",
        "<strong>Forgetting the help centre.</strong> Docs and help articles on subdomains are often cited, and often blocked or unindexed.",
        "<strong>Measuring once.</strong> Answers change. Rerun your buyer questions monthly.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does ChatGPT use Google search?",
      a: "OpenAI doesn’t name Google as a search partner. It says ChatGPT search uses third-party search providers, including Microsoft, along with its own crawler, OAI-SearchBot.",
    },
    {
      q: "Is ChatGPT search powered by Bing?",
      a: "Partly. Microsoft is among the search providers OpenAI names, but ChatGPT also crawls the web itself and only about 8% of its cited links rank in Bing’s top 10, so it isn’t simply showing Bing’s results.",
    },
    {
      q: "If I rank #1 on Google, will ChatGPT cite me?",
      a: "Not necessarily. In Ahrefs’ study, only about 8% of the links ChatGPT cited in its answers ranked in Google’s top 10 for the same query.",
    },
    {
      q: "Where does Perplexity get its results?",
      a: "From its own crawler, PerplexityBot, which Perplexity says is designed to surface and link websites in its search results. It overlaps with Google’s top 10 more than other assistants do.",
    },
    {
      q: "How do I get indexed in Bing?",
      a: "Verify your site in Bing Webmaster Tools (you can import it from Google Search Console), submit your sitemap and turn on IndexNow so new and updated pages are found quickly.",
    },
  ],
  sources: [
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-26" },
    { title: "OpenAI crawlers", url: openaiBots, type: "primary", read: "2026-10-26" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-10-26" },
    { title: "Google AI features", url: google, type: "primary", read: "2026-10-26" },
    { title: "Perplexity crawlers", url: perplexity, type: "primary", read: "2026-10-26" },
  ],
  related: ["robots-txt-for-ai-crawlers", "how-to-get-cited-by-chatgpt", "is-seo-dead"],
  cta: {
    mid: "Want to know which sources ChatGPT uses for your category, and whether you’re among them? We’ll map it.",
    title: "See where ChatGPT gets its answers about your category.",
    text: "We run your buyers’ questions through ChatGPT, Perplexity, Copilot and Google’s AI, map every source they cite, and show you where to get listed.",
    button: "Map my AI sources",
  },
};
