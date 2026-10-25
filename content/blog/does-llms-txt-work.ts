import type { Post } from "../../lib/blog";

export const post: Post = {
  slug: "does-llms-txt-work",
  tracker: "3.2",
  bucket: "technical",
  style: "Verdict post",
  title: "Does llms.txt work? Four studies say AI search barely reads it",
  dek: "AI companies publish llms.txt files for their own developer docs. Their search crawlers almost never fetch yours. What the data shows, and the one kind of site that should still ship one.",
  description: "Does llms.txt work for AI search? Studies of 437,000+ domains say crawlers rarely fetch it and citations don't move. Who should still ship one.",
  targetQuery: "does llms.txt work",
  status: "draft",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "short",
      items: [
        "<strong>No measured effect on AI citations.</strong> SE Ranking found no link between having the file and citation frequency across about 300,000 domains.",
        "<strong>Almost nothing reads it.</strong> Ahrefs found 97% of llms.txt files got zero requests in May 2026.",
        "<strong>Google says you don’t need it.</strong> Its AI features need no “AI text files, or markup”.",
        "<strong>Still worth shipping for documentation and developer tools,</strong> where coding agents do fetch it.",
        "<strong>Got one afternoon?</strong> Spend it on crawler access and pages that answer buyer questions instead.",
      ],
    },
    {
      t: "p",
      c: "No, llms.txt does not get you cited by ChatGPT, Perplexity or Google’s AI Overviews. Four independent studies covering more than 437,000 domains found that AI search crawlers rarely request the file, and that sites with one are not cited more often than sites without. The file has a job. It is a much narrower job than most GEO checklists suggest.",
    },
    {
      t: "p",
      c: "Here’s the trap. A checklist says AI search needs an llms.txt file, a plugin generates one in a minute, and it feels like progress. Then nothing changes, because the crawlers that decide what ChatGPT cites were never looking for it. Below: what the file is, what four studies and Google say, what we found when we checked 33 well-known sites on 25 October 2026, and who should still bother.",
    },
    { t: "h2", c: "What is llms.txt?" },
    {
      t: "p",
      c: "llms.txt is a Markdown file at the root of a website, at <code>/llms.txt</code>, that summarises the site and links to the pages a language model should read. Jeremy Howard proposed it in September 2024 on <a href=\"https://llmstxt.org/\">llmstxt.org</a>. It is a proposal. No search engine has adopted it as a standard, and nothing obliges a crawler to read it.",
    },
    {
      t: "p",
      c: "It gets confused with robots.txt, which is a different kind of file. robots.txt tells crawlers what they may fetch, and OpenAI documents that its search crawler obeys it: sites that block OAI-SearchBot “will not be shown in ChatGPT search answers”. llms.txt can’t allow or block anything. It only suggests what to read, to whoever chooses to look.",
    },
    { t: "h2", c: "What do the studies actually show?" },
    {
      t: "table",
      caption: "Limy and Otterly figures as reported in Optimizely’s review of 13 October 2026; we have not seen their underlying data.",
      head: ["Study", "Sample", "What it found", "Published"],
      rows: [
        ["<a href=\"https://ahrefs.com/blog/llmstxt-study/\">Ahrefs</a>", "137,210 domains, May 2026 traffic", "28% publish the file. 97% of those files got zero requests. 96% of the requests that did arrive came from bots.", "15 Jun 2026"],
        ["<a href=\"https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/\">SE Ranking</a>", "About 300,000 domains", "10.13% adoption. No relationship between having the file and how often a domain is cited in LLM answers.", "20 Nov 2025"],
        ["Limy", "500M+ bot visits over 90 days", "408 requests to llms.txt in total.", "Reported Oct 2026"],
        ["Otterly", "62,100+ bot visits", "84 touched llms.txt, about 0.1% of visits.", "Reported Oct 2026"],
      ],
    },
    {
      t: "p",
      c: "Read across the four, the pattern holds. The file mostly sits unread, and when something does fetch it, that is more often an SEO audit tool or a chat app than an AI search crawler. Ahrefs found that <strong>Slackbot fetched llms.txt files more often than PerplexityBot did</strong>, and that 77% of the bots reading the file were not AI tools at all.",
    },
    {
      t: "p",
      c: "The AI bots that did show up were mostly not the ones that decide citations. GPTBot, OpenAI’s training crawler, led the named AI fetchers at 4.51% of requests. OpenAI’s own documentation separates GPTBot (training) from OAI-SearchBot (what surfaces sites in ChatGPT search), and says you can allow one while blocking the other. A visit from GPTBot is not a vote for your page in a ChatGPT answer.",
    },
    {
      t: "quote",
      c: "llms.txt is not requested by anything (other than humans checking).",
      cite: "rickette, who runs a blogging platform with 80,000 blogs, Hacker News, 5 June 2026",
      href: "https://news.ycombinator.com/item?id=48410589",
    },
    {
      t: "p",
      c: "That is one operator describing their own logs, not a study. It lines up with Ahrefs’ 97% figure, and with SE Ranking finding no difference in citations. Three sources of three different kinds point the same way.",
    },
    { t: "h2", c: "What does Google say about llms.txt?" },
    {
      t: "p",
      c: "Google’s guidance on its AI features is unusually direct. Read on 25 October 2026, it says there are “no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary”, and: “You don’t need to create new machine readable files, AI text files, or markup to appear in these features.” A page needs to be indexed and eligible to show with a snippet. That’s the whole list.",
    },
    {
      t: "p",
      c: "Google’s staff have said the same in public. Optimizely’s review records Gary Illyes saying in July 2025 that Google doesn’t support llms.txt and has no plans to, and a June 2026 statement that Google Search doesn’t use these files and that they “won’t hurt or help”. For AI Overviews specifically, the question is settled by the people who run it.",
    },
    { t: "h2", c: "Who actually publishes one? We checked 33 sites" },
    {
      t: "p",
      c: "On 25 October 2026 we requested <code>/llms.txt</code> from 33 URLs: the AI companies’ main and developer domains, AI visibility tool vendors, and well-known SaaS sites. A file counts if it returned a plain-text or Markdown file, not an HTML error page.",
    },
    {
      t: "table",
      caption: "Checked by citations.agency on 25 October 2026. openai.com returned 403 to our request, so its main domain is unknown.",
      head: ["Group", "Publishes /llms.txt", "No file found"],
      rows: [
        ["AI companies, developer docs", "developers.openai.com, ai.google.dev/gemini-api/docs, docs.perplexity.ai, docs.claude.com, code.claude.com/docs", "platform.openai.com"],
        ["AI companies, main domains", "None", "www.anthropic.com, www.perplexity.ai, ai.google.dev (root)"],
        ["AI visibility tools", "Semrush, RedShip", "Ahrefs, Profound, Peec AI"],
        ["SaaS and infrastructure", "Stripe, HubSpot, Vercel, Next.js, Shopify, Notion, Linear, Zapier, Cloudflare, Supabase", "shopify.dev"],
      ],
    },
    {
      t: "p",
      c: "The companies building AI assistants publish llms.txt files for their developer documentation, and not on the domains where they sell their consumer products. That tells you what the file is for: something a developer pastes into a coding assistant so it reads the API docs. It says nothing about whether their search crawlers read <em>your</em> file, and the studies above suggest they don’t. Two of the best-known AI visibility tools, Ahrefs and Profound, don’t publish one at all.",
    },
    { t: "cta" },
    { t: "h2", c: "When is llms.txt still worth it?" },
    {
      t: "ul",
      items: [
        "<strong>Documentation and API references.</strong> Coding agents do fetch these files. In Ahrefs’ data, Claude-Code was the most active agent, at 3.52% of requests.",
        "<strong>Developer tools and technical SaaS,</strong> where your users work inside an AI coding assistant and want your docs in its context.",
        "<strong>Large knowledge bases</strong> where a curated index of the important pages genuinely helps a reader, human or machine.",
        "<strong>Any site where your CMS generates it automatically.</strong> If it costs nothing to keep current, it costs nothing to have.",
      ],
    },
    {
      t: "p",
      c: "One practitioner view, with a stake in it: “Definitely worth it. I work at Mintlify who does it for dev documentation sites and can attest to the boost in SEO/GEO traffic which comes from it” (<a href=\"https://news.ycombinator.com/item?id=44759462\">Hacker News, August 2025</a>). Mintlify sells documentation hosting that generates llms.txt, so read that as a vendor’s claim. It is also the one setting where the independent data agrees that something reads the file.",
    },
    { t: "h2", c: "What should you do instead?" },
    {
      t: "ol",
      items: [
        "<strong>Check robots.txt allows the search crawlers.</strong> OAI-SearchBot decides whether you can appear in ChatGPT search at all, and OpenAI says changes take about 24 hours to apply. Blocking GPTBot (training) is a separate choice.",
        "<strong>Make sure your pages work without JavaScript.</strong> Open a page, view the source, and search for a sentence from the body. If it isn’t there, many AI crawlers can’t see it either.",
        "<strong>Write the pages buyers’ questions need.</strong> Comparison and alternatives pages took 33% of citations in Something Inc’s study of 4,100 B2B queries, more than any other format. Our <a href=\"/blog/how-to-get-cited-by-chatgpt\">guide to getting cited by ChatGPT</a> walks through it.",
        "<strong>Get mentioned where AI already looks.</strong> Third-party pages and discussions carry more weight than your own site. If a rival keeps getting named instead of you, <a href=\"/blog/why-chatgpt-recommends-your-competitor\">this is usually why</a>.",
        "<strong>Measure it.</strong> Bing Webmaster Tools reports how often Microsoft Copilot cites your pages, which is the closest thing to a free citation counter today.",
      ],
    },
    { t: "h2", c: "So, does llms.txt work?" },
    {
      t: "p",
      c: "For getting cited in AI search, no. Across more than 437,000 domains the file is rarely fetched and makes no measurable difference to citations, and Google says outright that its AI features don’t need it. For a documentation site whose readers work inside coding assistants, yes: generate it automatically and forget about it. Everyone else should treat it as optional, ship it only if it’s free to maintain, and put the afternoon into crawler access and better answers instead.",
    },
  ],
  faqs: [
    {
      q: "Will adding llms.txt hurt my site?",
      a: "There is no evidence that it does. Google’s June 2026 position, as recorded by Optimizely, is that these files “won’t hurt or help”. The real cost is the time spent maintaining a file nothing reads.",
    },
    {
      q: "Does ChatGPT read llms.txt?",
      a: "OpenAI publishes an llms.txt file for its developer documentation but has not said its search crawler uses yours. In Ahrefs’ May 2026 data, the most active named AI fetcher was GPTBot, OpenAI’s training crawler, and OpenAI documents that ChatGPT search relies on OAI-SearchBot instead.",
    },
    {
      q: "Is llms.txt the same as robots.txt?",
      a: "No. robots.txt controls which crawlers may fetch your pages, and AI search crawlers like OAI-SearchBot obey it. llms.txt only suggests which pages to read and can’t block or allow anything.",
    },
    {
      q: "How do I check whether anything requests my llms.txt?",
      a: "Filter your server or CDN request logs by the path /llms.txt and group the hits by user agent. Vercel, Cloudflare and most hosts can do this. An empty result is normal: Ahrefs found 97% of files got no requests in a month.",
    },
    {
      q: "Does Google AI Overviews use llms.txt?",
      a: "No. Google’s guidance says you don’t need “new machine readable files, AI text files, or markup” to appear in AI Overviews or AI Mode. A page needs to be indexed and eligible to show with a snippet.",
    },
  ],
  sources: [
    { title: "We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read (Ahrefs)", url: "https://ahrefs.com/blog/llmstxt-study/", type: "platform", read: "2026-10-25" },
    { title: "llms.txt shows no clear effect on AI citations based on 300K domains (Search Engine Journal)", url: "https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/", type: "press", read: "2026-10-25" },
    { title: "Does llms.txt work? (Optimizely)", url: "https://www.optimizely.com/field-notes/articles/does-llms-txt-work/", type: "platform", read: "2026-10-25" },
    { title: "AI features and your website (Google Search Central)", url: "https://developers.google.com/search/docs/appearance/ai-features", type: "primary", read: "2026-10-25" },
    { title: "Overview of OpenAI crawlers (OpenAI)", url: "https://developers.openai.com/api/docs/bots", type: "primary", read: "2026-10-25" },
    { title: "The /llms.txt file proposal (llmstxt.org)", url: "https://llmstxt.org/", type: "primary", read: "2026-10-25" },
    { title: "Ask HN: Is the web for machines (/llm.txt) the one we wished we had as humans?", url: "https://news.ycombinator.com/item?id=48410589", type: "forum", read: "2026-10-25" },
    { title: "Ask HN: Anyone using llms.txt on blogs? Worth it for AI search?", url: "https://news.ycombinator.com/item?id=44759462", type: "forum", read: "2026-10-25" },
    { title: "The 2026 AI Citation Study (Something Inc)", url: "https://somethinginc.com/blog/2026-ai-citation-study/", type: "vendor", read: "2026-10-25" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "why-chatgpt-recommends-your-competitor", "aeo-vs-geo-vs-seo"],
  cta: {
    mid: "Not sure whether AI crawlers can even reach your pages? We’ll check robots.txt, rendering and Copilot citations for you.",
    title: "Skip the file. Find out what’s actually blocking you.",
    text: "We check which AI crawlers can reach your site, whether your pages render without JavaScript, and which buyer prompts you’re missing from.",
    button: "Check my site for free",
  },
};
