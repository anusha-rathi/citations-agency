import type { Post } from "../../lib/blog";

export const post: Post = {
  slug: "does-llms-txt-work",
  tracker: "3.2",
  bucket: "technical",
  style: "Verdict post",
  title: "Does llms.txt work? What 4 studies found, and what to do instead",
  dek: "llms.txt doesn’t get you cited in AI search. Here’s the data, the one kind of site that should still ship it, and the 30-minute checklist that actually helps.",
  description: "Does llms.txt work for AI search? Four studies say AI crawlers rarely fetch it. Who should still use it, and the 30-minute checklist that actually helps.",
  targetQuery: "does llms.txt work",
  status: "published",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "short",
      items: [
        "<strong>No, llms.txt doesn’t get you cited</strong> by ChatGPT, Perplexity or Google’s AI Overviews.",
        "<strong>Almost nothing reads it.</strong> 97% of llms.txt files got zero requests in a month in Ahrefs’ data.",
        "<strong>Google says you don’t need it</strong> for AI Overviews or AI Mode.",
        "<strong>Ship it if you run documentation or a developer tool,</strong> because coding assistants do fetch it.",
        "<strong>Everyone else:</strong> spend the time on the 30-minute checklist at the end of this post.",
      ],
    },
    {
      t: "p",
      c: "An SEO checklist tells you AI search needs an llms.txt file. A plugin generates one in a minute. It feels like progress, and then nothing changes, because the crawlers deciding what ChatGPT cites aren’t looking for it.",
    },
    {
      t: "p",
      c: "Four independent studies covering more than 437,000 domains point the same way: AI search crawlers rarely request the file, and sites that have one don’t get cited more. Here’s what the data shows, who should still bother, and what to do with that afternoon instead.",
    },
    { t: "h2", c: "What is llms.txt?" },
    {
      t: "p",
      c: "llms.txt is a Markdown file at <code>yoursite.com/llms.txt</code> that summarises your site and links to the pages an AI model should read. Jeremy Howard <a href=\"https://llmstxt.org/\">proposed it in September 2024</a>. A minimal one looks like this:",
    },
    {
      t: "code",
      label: "llms.txt",
      c: "# Acme Analytics\n\n> Product analytics for B2B SaaS teams. Self-serve, from $49/month.\n\n## Docs\n- [Quickstart](https://acme.com/docs/quickstart): install the SDK in 5 minutes\n- [API reference](https://acme.com/docs/api): every endpoint and parameter\n\n## Company\n- [Pricing](https://acme.com/pricing)",
    },
    {
      t: "p",
      c: "It’s easy to confuse with robots.txt, but they do different jobs. robots.txt tells crawlers what they’re allowed to fetch, and AI search crawlers obey it. llms.txt can’t allow or block anything. It only suggests what to read, to whatever chooses to look.",
    },
    { t: "h2", c: "llms.txt vs robots.txt vs sitemap.xml" },
    {
      t: "p",
      c: "Three files sit at the root of most sites and they’re easy to mix up. Only two of them affect whether AI search can use your pages:",
    },
    {
      t: "table",
      head: ["File", "What it does", "Read by AI search?", "Do you need it?"],
      rows: [
        ["robots.txt", "Tells crawlers what they may and may not fetch", "Yes. OAI-SearchBot, PerplexityBot and Googlebot all follow it", "Yes, and check it allows AI search crawlers"],
        ["sitemap.xml", "Lists the pages you want indexed and when they changed", "Indirectly, through Google and Bing indexing", "Yes, submit it to both"],
        ["llms.txt", "Suggests which pages an AI model should read", "Rarely, according to every study so far", "Only for docs and developer tools"],
      ],
    },
    {
      t: "p",
      c: "If you only have time for one, fix robots.txt. A single wrong line there can hide your whole site from ChatGPT search. A missing llms.txt costs you nothing.",
    },
    { t: "h2", c: "What the data shows" },
    {
      t: "table",
      head: ["Study", "Sample", "Finding"],
      rows: [
        ["<a href=\"https://ahrefs.com/blog/llmstxt-study/\">Ahrefs</a> (June 2026)", "137,210 domains, May 2026 traffic", "28% publish the file. 97% of those files got zero requests that month."],
        ["<a href=\"https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/\">SE Ranking</a> (Nov 2025)", "About 300,000 domains", "10.13% adoption. No link between having the file and how often a domain is cited in AI answers."],
        ["<a href=\"https://www.optimizely.com/field-notes/articles/does-llms-txt-work/\">Limy</a>", "500M+ bot visits over 90 days", "408 requests to llms.txt in total."],
        ["<a href=\"https://www.optimizely.com/field-notes/articles/does-llms-txt-work/\">Otterly</a>", "62,100+ bot visits", "84 touched llms.txt, about 0.1%."],
      ],
    },
    {
      t: "p",
      c: "When something does fetch the file, it’s usually not an AI search crawler. Ahrefs found Slackbot fetched llms.txt files more often than PerplexityBot did, and 77% of the bots reading them weren’t AI tools at all: mostly SEO audit tools and general crawlers.",
    },
    {
      t: "quote",
      c: "llms.txt is not requested by anything (other than humans checking).",
      cite: "rickette, who runs a blogging platform with 80,000 blogs, on Hacker News",
      href: "https://news.ycombinator.com/item?id=48410589",
    },
    { t: "h2", c: "What Google and OpenAI say" },
    {
      t: "p",
      c: "Google’s guidance on its AI features is direct: <a href=\"https://developers.google.com/search/docs/appearance/ai-features\">“You don’t need to create new machine readable files, AI text files, or markup to appear in these features.”</a> To show up in AI Overviews or AI Mode, a page needs to be indexed and eligible for a snippet. That’s it.",
    },
    {
      t: "p",
      c: "OpenAI’s crawler documentation explains why the file doesn’t help with ChatGPT either. ChatGPT search relies on <a href=\"https://developers.openai.com/api/docs/bots\">OAI-SearchBot</a>, which respects robots.txt and has nothing to do with llms.txt. The OpenAI bot that did show up most in Ahrefs’ llms.txt data was GPTBot, which collects training data. A GPTBot visit doesn’t put you in a ChatGPT answer.",
    },
    { t: "h2", c: "How AI search actually finds your pages" },
    {
      t: "p",
      c: "If AI search crawlers aren’t reading llms.txt, how do they find your content? Through the same plumbing search has always used, with a few new names on the guest list.",
    },
    {
      t: "table",
      head: ["Engine", "How it finds pages", "What you control"],
      rows: [
        ["ChatGPT search", "OpenAI’s own crawler, OAI-SearchBot, plus third-party search partners including Microsoft", "robots.txt rules for OAI-SearchBot; Bing indexing"],
        ["Google AI Overviews and AI Mode", "Google’s normal index, using “query fan-out” to run several related searches per answer", "Indexing, snippet eligibility, answer-first pages"],
        ["Microsoft Copilot", "Bing’s index", "Bing Webmaster Tools, IndexNow"],
        ["Perplexity", "Its own crawler, PerplexityBot, plus search results", "robots.txt rules for PerplexityBot"],
      ],
    },
    {
      t: "p",
      c: "Notice what every row has in common: robots.txt and a search index. That’s where an afternoon of technical work pays off. A page that’s blocked, missing from Bing, or invisible without JavaScript can’t be cited, no matter how good your llms.txt is.",
    },
    {
      t: "p",
      c: "Bing deserves special attention because it feeds two of the four. Verifying your site in Bing Webmaster Tools also gives you its AI Performance report, which shows how often Microsoft Copilot cites your pages. It’s free and takes about ten minutes.",
    },
    { t: "h2", c: "Who actually publishes one: we checked 33 sites" },
    {
      t: "p",
      c: "On 25 October 2026 we requested <code>/llms.txt</code> from the AI companies, AI visibility tools and well-known SaaS sites:",
    },
    {
      t: "table",
      head: ["Group", "Has /llms.txt", "No file"],
      rows: [
        ["AI companies’ developer docs", "developers.openai.com, ai.google.dev/gemini-api/docs, docs.perplexity.ai, docs.claude.com", "platform.openai.com"],
        ["AI companies’ main sites", "None", "anthropic.com, perplexity.ai, ai.google.dev"],
        ["AI visibility tools", "Semrush, RedShip", "Ahrefs, Profound, Peec AI"],
        ["SaaS and infrastructure", "Stripe, HubSpot, Vercel, Next.js, Shopify, Notion, Linear, Zapier, Cloudflare, Supabase", "shopify.dev"],
      ],
    },
    {
      t: "p",
      c: "The pattern is telling. The companies building AI assistants publish llms.txt for their <em>developer documentation</em>, so developers can feed the docs into a coding assistant. None of them publish it on their main sites. That’s the file’s real job, and it isn’t AI search.",
    },
    { t: "cta" },
    { t: "h2", c: "Should you ship one? A quick decision guide" },
    {
      t: "table",
      head: ["Your site", "Ship llms.txt?", "Why"],
      rows: [
        ["Developer docs or an API", "Yes", "Coding agents fetch it. Claude-Code was among the most active fetchers in Ahrefs’ data."],
        ["Developer tool or technical SaaS", "Yes, for your docs", "Your users work inside AI coding assistants."],
        ["Large knowledge base", "Optional", "A curated index can help, if it’s generated automatically."],
        ["Marketing site, B2B SaaS, ecommerce", "Optional at best", "No measurable effect on AI citations."],
        ["Local business, agency, blog", "No", "Spend the time on the checklist below."],
      ],
    },
    {
      t: "p",
      c: "If you do ship one, generate it automatically from your docs or sitemap so it never goes stale. A hand-maintained llms.txt that drifts out of date is worse than none.",
    },
    { t: "h2", c: "If you run docs: how to ship llms.txt properly" },
    {
      t: "p",
      c: "For documentation sites the file is worth having, so do it well. Developers paste it into tools like Cursor, Claude Code or ChatGPT to give the assistant your docs, and a clean file means the assistant writes better code against your API.",
    },
    {
      t: "ol",
      items: [
        "<strong>Generate it from your docs, don’t hand-write it.</strong> Most documentation platforms and static site generators can build it from your navigation or sitemap on every deploy.",
        "<strong>Lead with one line on what your product does,</strong> then sections for getting started, core concepts, API reference and SDKs.",
        "<strong>Link to clean Markdown versions</strong> of each page where you can. Assistants handle Markdown far better than HTML full of navigation.",
        "<strong>Add an llms-full.txt</strong> with the full text of your docs in one file, for developers who want to paste everything at once.",
        "<strong>Mention it in your docs</strong> (“Using an AI assistant? Point it at /llms.txt”). The people who benefit most won’t find it otherwise.",
        "<strong>Check it after every major docs change.</strong> Broken links in a file meant for machines are easy to miss.",
      ],
    },
    { t: "h2", c: "How to check whether anything reads your llms.txt" },
    {
      t: "p",
      c: "If you already have the file, look at who requests it. On most hosts you can filter request logs by path. With raw server logs:",
    },
    {
      t: "code",
      label: "Terminal",
      c: "# Count requests to llms.txt by user agent\ngrep \"GET /llms.txt\" access.log | awk -F'\"' '{print $6}' | sort | uniq -c | sort -rn",
    },
    {
      t: "p",
      c: "On Vercel, filter Logs by the path <code>/llms.txt</code>. On Cloudflare, use Security → Analytics and filter by path. An empty result after a month is normal.",
    },
    {
      t: "p",
      c: "While you’re in the logs, run the same check for the crawlers that do matter. Search for <code>OAI-SearchBot</code>, <code>PerplexityBot</code> and <code>Bingbot</code>. If they’re visiting your key pages, your access is fine. If they’re missing, or getting 403 errors, that’s a far bigger problem than any llms.txt, and it’s usually a CDN bot setting.",
    },
    { t: "h2", c: "What actually decides whether AI cites you" },
    {
      t: "p",
      c: "If llms.txt isn’t the lever, what is? Three things, in this order:",
    },
    {
      t: "ol",
      items: [
        "<strong>Access.</strong> The AI search crawler can fetch your page and read the text. This is robots.txt, your CDN settings and server-rendered HTML, not llms.txt.",
        "<strong>An answer page.</strong> You have a page that answers the exact question a buyer asked. In <a href=\"https://somethinginc.com/blog/2026-ai-citation-study/\">Something Inc’s study of 4,100 B2B queries</a>, comparison and alternatives pages took 33% of AI citations, more than any other format.",
        "<strong>Other people talking about you.</strong> <a href=\"https://ahrefs.com/blog/ai-overview-brand-correlation/\">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated 0.664 with visibility in AI Overviews, three times more than backlinks. Mentions on review sites, comparison articles and Reddit threads move AI answers far more than any file on your own server.",
      ],
    },
    {
      t: "p",
      c: "That third point is why a competitor with a worse website can still be the one ChatGPT recommends. We break that down, with a 30-minute diagnosis, in <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a>.",
    },
    { t: "h2", c: "If your agency or a tool says you need it" },
    {
      t: "p",
      c: "Ask them one question: which AI search crawler requests the file, and can they show you the log lines? If the answer is vague, the recommendation is a checklist item, not a strategy. A good AI visibility audit should talk about crawler access, the prompts your buyers use, the pages that get cited for them, and where your brand is missing. Adding a file takes a minute; that work takes weeks, and it’s the part that moves results.",
    },
    { t: "h2", c: "What to do instead: a 30-minute checklist" },
    {
      t: "ol",
      items: [
        "<strong>Allow AI search crawlers in robots.txt</strong> (5 min). Add the rules below. OpenAI says changes take about 24 hours to apply.",
        "<strong>Check your CDN’s bot settings</strong> (5 min). Cloudflare and other hosts can block AI crawlers even when robots.txt allows them.",
        "<strong>Run the view-source test</strong> (5 min). Open a key page, view source, search for a body sentence. If it’s missing, your text depends on JavaScript.",
        "<strong>Verify your site in Bing Webmaster Tools</strong> and turn on IndexNow (10 min). Microsoft is one of ChatGPT’s search partners.",
        "<strong>Write down 5 questions your buyers ask AI</strong> (5 min) and check whether you have a page that answers each one directly. Our <a href=\"/blog/how-to-get-cited-by-chatgpt\">ChatGPT citation playbook</a> covers what to publish next.",
      ],
    },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Treating llms.txt as your AI strategy.</strong> It’s at most a small extra for documentation.",
        "<strong>Blocking OAI-SearchBot while adding llms.txt.</strong> The first undoes anything the second could do.",
        "<strong>Hand-writing the file once and forgetting it.</strong> Stale links in a file meant for AI are worse than no file.",
        "<strong>Measuring success by whether the file exists.</strong> Measure whether you’re named and linked in AI answers for your buyers’ questions.",
      ],
    },
    { t: "h2", c: "So, does llms.txt work?" },
    {
      t: "p",
      c: "For getting cited in AI search, no. It’s rarely fetched, it makes no measurable difference to citations, and Google says outright you don’t need it. For documentation and developer tools, yes: generate it automatically and move on. Everyone else should spend that time on crawler access, Bing indexing and pages that answer real buyer questions. Those are what ChatGPT actually reads.",
    },
  ],
  faqs: [
    {
      q: "Will adding llms.txt hurt my site?",
      a: "No. Google has said these files won’t hurt or help in Search. The only cost is the time spent maintaining a file almost nothing reads.",
    },
    {
      q: "Does ChatGPT read llms.txt?",
      a: "ChatGPT search relies on OpenAI’s OAI-SearchBot, which follows robots.txt, not llms.txt. OpenAI publishes an llms.txt for its own developer docs, but that’s for developers using coding tools.",
    },
    {
      q: "Is llms.txt the same as robots.txt?",
      a: "No. robots.txt controls which crawlers may fetch your pages. llms.txt only suggests which pages to read and can’t block or allow anything.",
    },
    {
      q: "Does Google AI Overviews use llms.txt?",
      a: "No. Google says you don’t need new machine-readable files, AI text files or markup to appear in AI Overviews or AI Mode. Pages just need to be indexed and eligible for a snippet.",
    },
    {
      q: "What’s llms-full.txt?",
      a: "A companion file some sites publish with the full text of their docs in one Markdown file, so a developer can paste everything into an AI tool at once. Like llms.txt, it’s useful for documentation and doesn’t affect AI search citations.",
    },
  ],
  sources: [
    { title: "Ahrefs llms.txt study", url: "https://ahrefs.com/blog/llmstxt-study/", type: "platform", read: "2026-10-25" },
    { title: "SEJ on SE Ranking", url: "https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/", type: "press", read: "2026-10-25" },
    { title: "Optimizely: Does llms.txt work?", url: "https://www.optimizely.com/field-notes/articles/does-llms-txt-work/", type: "platform", read: "2026-10-25" },
    { title: "Google: AI features", url: "https://developers.google.com/search/docs/appearance/ai-features", type: "primary", read: "2026-10-25" },
    { title: "OpenAI crawlers", url: "https://developers.openai.com/api/docs/bots", type: "primary", read: "2026-10-25" },
    { title: "llmstxt.org", url: "https://llmstxt.org/", type: "primary", read: "2026-10-25" },
    { title: "HN: rickette", url: "https://news.ycombinator.com/item?id=48410589", type: "forum", read: "2026-10-25" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "aeo-vs-geo-vs-seo", "why-chatgpt-recommends-your-competitor"],
  cta: {
    mid: "Not sure whether AI crawlers can even reach your pages? We’ll check robots.txt, your CDN and rendering for you.",
    title: "Skip the file. Find out what’s actually blocking you.",
    text: "We check which AI crawlers can reach your site, whether your pages render without JavaScript, and which buyer questions you’re missing from in ChatGPT and Perplexity.",
    button: "Check my site for free",
  },
};
