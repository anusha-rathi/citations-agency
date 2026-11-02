import type { Post } from "../../lib/blog";

const llms = "https://llmstxt.org/";
const rfc = "https://www.rfc-editor.org/rfc/rfc9309.html";
const google = "https://developers.google.com/search/docs/crawling-indexing/robots/intro";
const bots = "https://developers.openai.com/api/docs/bots";
const crawlers = "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers";
const ahrefs = "https://ahrefs.com/blog/llmstxt-study/";
const sej = "https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/";

export const post: Post = {
  slug: "llms-txt-vs-robots-txt",
  tracker: "3.9",
  bucket: "technical",
  style: "RS Answer",
  title: "llms.txt vs robots.txt: what each one does and which you need",
  dek: "robots.txt tells crawlers what they may fetch. llms.txt suggests what AI models could read. One can remove you from ChatGPT search if you get it wrong; the other is almost never requested. Here’s how to handle both.",
  description: "llms.txt vs robots.txt: what each file does, which crawlers read them, copy-paste examples, how to test yours, and when llms.txt is worth adding to your site.",
  targetQuery: "llms.txt vs robots.txt",
  status: "published",
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Harshi Rathi",
  takeaways: [
    "robots.txt controls crawler access. llms.txt only suggests which pages to read, and can’t allow or block anything.",
    "Every site needs a checked robots.txt. A wrong line can keep you out of ChatGPT search.",
    "Most sites can skip llms.txt: in Ahrefs’ data, 97% of the files got zero requests in a month.",
    "Consider llms.txt for documentation and developer tools, where people and coding agents may fetch it directly.",
    "Neither file keeps a page out of Google. Use noindex or password protection for that.",
  ],
  body: [
    {
      t: "callout",
      tone: "answer",
      c: "robots.txt is a web standard that tells crawlers which URLs they may fetch, and AI search crawlers such as OAI-SearchBot respect it. llms.txt is a proposed Markdown file that lists pages an AI model might want to read; it has no power to allow or block anything, and studies show AI crawlers rarely request it. Fix your robots.txt first, because a mistake there can remove you from AI search. Add llms.txt only if you run documentation or a developer product.",
    },
    {
      t: "p",
      c: "The two filenames look like siblings, so people often assume llms.txt is “robots.txt for AI”. It isn’t. They do different jobs, they’re read by different things, and getting one wrong costs far more than skipping the other. Here’s what to do with each, in order.",
    },
    { t: "h2", c: "What’s the difference between llms.txt and robots.txt?" },
    {
      t: "table",
      head: ["", "robots.txt", "llms.txt"],
      rows: [
        ["Purpose", "Tells crawlers which URLs they may fetch", "Suggests which pages an AI model should read"],
        ["Status", `Internet standard (<a href="${rfc}">RFC 9309</a>)`, `A <a href="${llms}">proposal</a> from September 2024`],
        ["Format", "Plain-text rules by user agent", "Markdown with headings and links"],
        ["Location", "Must be at the root: /robots.txt", "Root, or any path it should cover"],
        ["Who reads it", "Search and AI crawlers that respect it", "Rarely requested by AI search crawlers"],
        ["Can it block access?", "It asks crawlers not to fetch; compliant ones obey", "No"],
        ["Risk if wrong", "High: can hide your site from search and AI", "Low: little reads it anyway"],
        ["Who needs it", "Every public site", "Docs and developer tools, mainly"],
      ],
    },
    { t: "h2", c: "What does robots.txt actually do?" },
    {
      t: "p",
      c: `robots.txt asks crawlers to stay out of certain URLs. Google says it’s <a href="${google}">“used primarily to manage crawler traffic to your site”</a>. For AI search, the important part is that the main search crawlers follow it. OpenAI says sites that block OAI-SearchBot <a href="${bots}">won’t be shown in ChatGPT search answers</a>.`,
    },
    {
      t: "p",
      c: "AI companies run separate crawlers for search and for training, so you can decide each one separately. This version lets AI tools find and cite you, but asks OpenAI and Anthropic’s training crawlers to stay out:",
    },
    {
      t: "code",
      label: "robots.txt: allow AI search, block AI training",
      c: "User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: ClaudeBot\nDisallow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: https://yoursite.com/sitemap.xml",
    },
    {
      t: "p",
      c: `Whether you allow training is a business decision. It’s separate from being cited. Google has a further wrinkle: blocking Google-Extended <a href="${crawlers}">doesn’t affect your place in Google Search</a>, and AI Overviews run on Googlebot. For more versions, see our <a href="/blog/robots-txt-for-ai-crawlers">robots.txt templates for AI crawlers</a>.`,
    },
    { t: "h2", c: "What can’t robots.txt do?" },
    {
      t: "ul",
      items: [
        `<strong>It can’t keep a page out of Google.</strong> Google says it <a href="${google}">“is not a mechanism for keeping a web page out of Google”</a>. A blocked URL can still be indexed if other sites link to it. Use <code>noindex</code> or password protection.`,
        "<strong>It isn’t security.</strong> Listing a private path in robots.txt tells everyone where it is. Protect sensitive pages with a login.",
        "<strong>It doesn’t bind every fetcher.</strong> User-triggered tools can work differently: ChatGPT-User and Perplexity-User fetch a page because someone asked, and those companies say robots.txt may not apply.",
        "<strong>It doesn’t override your CDN.</strong> Your robots.txt can allow a bot while a firewall rule blocks it. Test both.",
      ],
    },
    { t: "h2", c: "What does llms.txt actually do?" },
    {
      t: "p",
      c: `It gives AI tools a short, curated guide to a site. Under <a href="${llms}">the proposal</a>, an H1 with the site’s name is the only required part, followed by a short summary in a blockquote and sections of links. A section titled “Optional” marks links an agent can skip when it needs less context.`,
    },
    {
      t: "code",
      label: "llms.txt: minimal example",
      c: "# Acme\n\n> Acme is inventory software for small online stores.\n\n## Docs\n- [Quickstart](https://acme.com/docs/quickstart): install in 5 minutes\n- [API reference](https://acme.com/docs/api): every endpoint and parameter\n\n## Company\n- [Pricing](https://acme.com/pricing): plans and limits\n\n## Optional\n- [Changelog](https://acme.com/changelog): release history",
    },
    { t: "h2", c: "Does anyone read llms.txt?" },
    {
      t: "p",
      c: `Very rarely, based on the data so far. <a href="${ahrefs}">Ahrefs looked at 137,210 domains</a> in May 2026: 28% published the file, and 97% of those files got no requests that month. <a href="${sej}">SE Ranking’s study of about 300,000 domains</a> found no link between having the file and how often a domain is cited. Our <a href="/blog/does-llms-txt-work">full llms.txt verdict</a> covers the rest of the research.`,
    },
    { t: "cta" },
    { t: "h2", c: "Which one should you work on first?" },
    {
      t: "table",
      head: ["Your situation", "robots.txt", "llms.txt"],
      rows: [
        ["Marketing site or B2B SaaS", "Check now", "Skip it"],
        ["Ecommerce store", "Check now, including faceted URLs", "Skip it"],
        ["Blog or publisher", "Check now, and decide on training crawlers", "Skip it"],
        ["API or developer tool with docs", "Check now", "Worth an hour"],
        ["Open-source docs used with coding tools", "Check now", "Worth an hour"],
        ["Plugin added one automatically", "Check now", "Leave it if it’s accurate; remove it if it’s wrong"],
      ],
    },
    { t: "h2", c: "How do you test your robots.txt?" },
    {
      t: "p",
      c: "Run through this in 15 minutes. It’s one of the most valuable technical checks you can do for AI search.",
    },
    {
      t: "ol",
      items: [
        "<strong>Open yoursite.com/robots.txt.</strong> Confirm it loads and returns a 200 status.",
        "<strong>Look for broad blocks.</strong> Check whether <code>User-agent: *</code> has <code>Disallow: /</code>, which blocks everything that follows the catch-all.",
        "<strong>Look for each AI search bot by name.</strong> Remember that a bot obeys its own group, not the <code>*</code> group, if one names it.",
        "<strong>Test with the bot’s user agent.</strong> Run the command below on key pages. A 403 or 503 usually means something other than robots.txt is blocking it.",
        "<strong>Check your CDN’s bot settings.</strong> Our <a href=\"/blog/cloudflare-ai-bot-settings\">Cloudflare guide</a> walks through the common ones.",
        "<strong>Check your logs.</strong> Look for OAI-SearchBot and PerplexityBot in server logs, to confirm they’re arriving and getting 200s.",
      ],
    },
    {
      t: "code",
      label: "Test a page as OAI-SearchBot",
      c: "curl -s -o /dev/null -w \"%{http_code}\\n\" -A \"OAI-SearchBot\" https://yoursite.com/pricing\n# 200 = reachable\n# 403 or 503 = blocked by your CDN, firewall or server",
    },
    { t: "h2", c: "What mistakes do people make with robots.txt?" },
    {
      t: "table",
      head: ["Mistake", "What happens", "Fix"],
      rows: [
        ["Copying “block AI” rules from a template", "OAI-SearchBot gets blocked along with training bots", "Block only GPTBot and ClaudeBot if training is your concern"],
        ["Staging rules pushed to production", "<code>Disallow: /</code> blocks everything", "Add robots.txt to your release checks"],
        ["Blocking CSS or JavaScript", "Pages may render badly for crawlers", "Allow the assets your pages need"],
        ["Rule in the wrong group", "A bot ignores your <code>*</code> rules if it has its own group", "Put every rule a bot needs in its own group"],
        ["Blocking pages you want removed", "Crawlers can’t see your noindex tag", "Allow crawling, and use noindex"],
      ],
    },
    { t: "h2", c: "How do you add llms.txt if you need it?" },
    {
      t: "ol",
      items: [
        "<strong>Decide what belongs in it.</strong> For docs, that’s your quickstart, API reference, key guides and pricing. Ten to thirty links is plenty, as a rule of thumb.",
        "<strong>Write one-line notes</strong> that say what each page answers.",
        "<strong>Offer plain Markdown versions</strong> of your docs where you can, since coding tools handle them easily. The proposal suggests adding <code>.md</code> to page URLs.",
        "<strong>Publish at /llms.txt</strong> and check that it’s served as plain text.",
        "<strong>Assign an owner.</strong> A stale file with broken links is worse than none, so add it to your docs release process.",
        "<strong>Check your logs after a month.</strong> If nothing requests it, don’t spend more time on it.",
      ],
    },
    { t: "h2", c: "What should you do instead of llms.txt?" },
    {
      t: "p",
      c: "If you were about to spend an afternoon on llms.txt, these will do more for AI search on a typical site:",
    },
    {
      t: "ul",
      items: [
        "Make sure your main content is in the HTML. Run our <a href=\"/blog/can-chatgpt-read-javascript\">JavaScript test</a>.",
        "Get indexed in Bing, and set up IndexNow. Our <a href=\"/blog/bing-webmaster-tools-ai-performance\">Bing guide</a> takes about ten minutes.",
        "Keep your XML sitemap current, with accurate last-modified dates.",
        "Retitle key pages around the question they answer, and give the answer in the first sentence.",
        "Publish clear pricing and comparison pages in HTML, not images.",
      ],
    },
    { t: "p", c: "Our <a href=\"/blog/technical-ai-search-checklist\">technical AI search checklist</a> has the complete list in priority order." },
    {"t": "h2", "c": "How do robots.txt rules actually get matched?"},
    {"t": "p", "c": "Most robots.txt problems come from misreading two rules in the <a href=\"https://www.rfc-editor.org/rfc/rfc9309.html\">standard</a>. First, a crawler follows the group that names it, and only falls back to the <code>*</code> group if none does. Second, when Allow and Disallow both match a URL, the most specific rule, meaning the longest match, wins."},
    {"t": "code", "label": "Example: a common surprise", "c": "User-agent: *\nDisallow: /private/\n\nUser-agent: OAI-SearchBot\nAllow: /\n\n# OAI-SearchBot follows only its own group.\n# It can fetch /private/ because the * rule no longer applies to it.\n\nUser-agent: PerplexityBot\nDisallow: /blog/\nAllow: /blog/guides/\n\n# PerplexityBot can fetch /blog/guides/pricing (the longer rule wins)\n# but not /blog/news."},
    {"t": "p", "c": "So if you name a bot in its own group, repeat every rule you want it to follow. That’s the mistake behind many “why is this crawler in my private folder?” questions."},
    {"t": "h2", "c": "Where do sitemaps and noindex fit in?"},
    {"t": "table", "head": ["Tool", "Question it answers", "Use it to"], "rows": [["robots.txt", "May you fetch this URL?", "Keep crawlers out of areas such as internal search results and carts"], ["XML sitemap", "Which URLs matter, and when did they change?", "Help search engines find your pages"], ["noindex tag", "May you show this page in results?", "Keep a crawlable page out of search results"], ["Login or password", "Are you allowed to see this at all?", "Protect anything private"], ["llms.txt", "If you’re an AI tool, what should you read?", "Guide people and coding agents around documentation"]]},
    {"t": "p", "c": "Thinking of them this way stops most errors. For instance, if you want a page gone from search results, you need noindex, and crawlers must be allowed to fetch the page to see the tag. Blocking it in robots.txt would hide the very instruction you’re trying to send."},
    {"t": "h2", "c": "What should a typical SaaS site’s robots.txt look like?"},
    {"t": "p", "c": "Here’s a starting point for a marketing site, a blog and an app on the same domain. Change the paths to match your site, then test it. The login-only area still needs real authentication, since this file only makes a request."},
    {"t": "code", "label": "robots.txt for a SaaS site", "c": "User-agent: *\nDisallow: /app/\nDisallow: /search\nAllow: /\n\nUser-agent: OAI-SearchBot\nDisallow: /app/\nDisallow: /search\nAllow: /\n\nUser-agent: PerplexityBot\nDisallow: /app/\nDisallow: /search\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /\n\nSitemap: https://yoursite.com/sitemap.xml"},
    {"t": "p", "c": "Remove the GPTBot group if you’re happy for your content to be used in training. That choice has nothing to do with being cited in ChatGPT search, which relies on OAI-SearchBot."},
    {"t": "h2", "c": "A 30-minute action plan"},
    {"t": "ol", "items": ["<strong>Minutes 1–5:</strong> read your live robots.txt, and note any AI bots named or blocked.", "<strong>Minutes 6–15:</strong> test your homepage, pricing and top blog post using the OAI-SearchBot command above.", "<strong>Minutes 16–20:</strong> check your CDN’s bot and firewall settings.", "<strong>Minutes 21–25:</strong> fix what’s wrong, and put robots.txt changes through your normal release checks.", "<strong>Minutes 26–30:</strong> decide on llms.txt using the table above. For most sites, the decision is to skip it and move on."]},
    {"t": "p", "c": "Whichever files you change, write down the date and what you changed. If AI referrals or citations drop later, that log lets you check quickly whether a robots.txt edit or a new firewall rule was the cause, instead of guessing. Re-test after every site migration, since that’s when old staging rules tend to slip through."},
    {"t": "p", "c": "Keep the log next to your release notes."},
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t try to block bots through llms.txt. It has no such function.",
        "Don’t expect llms.txt to get you cited. Nothing in the data so far shows that it does.",
        "Don’t put private URLs in either file. Both are public.",
        "Don’t pay an agency for llms.txt as a main deliverable.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is llms.txt the same as robots.txt?",
      a: "No. robots.txt tells crawlers what they may fetch. llms.txt is a suggested reading list and has no ability to allow or block anything.",
    },
    {
      q: "Does llms.txt replace robots.txt?",
      a: "No. They do different jobs, and every public site should have a checked robots.txt whether or not it has an llms.txt file.",
    },
    {
      q: "Do I need llms.txt for SEO?",
      a: "No. Studies so far show AI crawlers rarely request it, and SE Ranking found no link between having the file and being cited. It’s mainly useful for documentation.",
    },
    {
      q: "Can I block AI training but stay visible in ChatGPT?",
      a: "Yes. OpenAI runs separate crawlers: block GPTBot and allow OAI-SearchBot in robots.txt.",
    },
    {
      q: "Does blocking a page in robots.txt remove it from Google?",
      a: "No. Google can still index a blocked URL if others link to it. Use noindex or password protection instead, and make sure the page isn’t blocked, so that Google can see the tag.",
    },
  ],
  sources: [
    { title: "llms.txt proposal", url: llms, type: "primary", read: "2026-11-02" },
    { title: "RFC 9309", url: rfc, type: "primary", read: "2026-11-02" },
    { title: "Google: robots.txt introduction", url: google, type: "primary", read: "2026-11-02" },
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-11-02" },
    { title: "Google common crawlers", url: crawlers, type: "primary", read: "2026-11-02" },
    { title: "Ahrefs: llms.txt study", url: ahrefs, type: "vendor", read: "2026-11-02" },
    { title: "Search Engine Journal on SE Ranking’s llms.txt data", url: sej, type: "press", read: "2026-11-02" },
  ],
  related: ["does-llms-txt-work", "robots-txt-for-ai-crawlers", "technical-ai-search-checklist"],
  cta: {
    mid: "Not sure whether your site is blocking AI crawlers? We’ll check it as part of a free audit.",
    title: "Find out if AI search can read your site.",
    text: "We check your crawler access, indexing and how your brand appears in AI answers, then tell you what to fix first.",
    button: "Check my site",
  },
};
