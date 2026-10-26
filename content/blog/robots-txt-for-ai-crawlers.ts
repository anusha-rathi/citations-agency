import type { Post } from "../../lib/blog";

const openaiBots = "https://developers.openai.com/api/docs/bots";
const anthropic = "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler";
const perplexity = "https://docs.perplexity.ai/guides/bots";
const googleCrawlers = "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers";

export const post: Post = {
  slug: "robots-txt-for-ai-crawlers",
  tracker: "3.3",
  bucket: "technical",
  style: "RS Playbook",
  title: "robots.txt for AI crawlers: a copy-paste template (2026)",
  dek: "Every major AI company runs separate bots for search and for training. Here’s which is which, three ready-made robots.txt templates, and how to check they’re working.",
  description: "robots.txt for AI crawlers: which bots power ChatGPT, Claude, Perplexity and Gemini search vs training, three copy-paste templates, and how to test them.",
  targetQuery: "robots.txt for ai crawlers",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "AI companies run separate crawlers for search (which decides whether you can be cited in answers) and for model training. To appear in AI answers, allow OAI-SearchBot, Claude-SearchBot and PerplexityBot. Whether to allow training crawlers like GPTBot, ClaudeBot and Google-Extended is a separate business decision. Copy one of the three templates below, then test it, because CDN bot settings can override robots.txt.",
    },
    {
      t: "p",
      c: "“Should we block AI bots?” is usually asked as one question. It’s really two: do you want AI assistants to find and cite your pages, and do you want your content used to train future models? robots.txt lets you answer them separately, as long as you know which bot does what.",
    },
    {
      t: "p",
      c: "Here’s every major AI crawler, three templates for the most common choices, and how to check they’re actually being respected.",
    },
    { t: "h2", c: "Which AI crawler does what" },
    {
      t: "table",
      head: ["Company", "Bot", "Used for", "Respects robots.txt?"],
      rows: [
        ["OpenAI", "OAI-SearchBot", "ChatGPT search results and citations", "Yes"],
        ["OpenAI", "GPTBot", "Training OpenAI’s models", "Yes"],
        ["OpenAI", "ChatGPT-User", "Fetching a page when a user asks", "Not necessarily"],
        ["Anthropic", "Claude-SearchBot", "Claude’s search results", "Yes"],
        ["Anthropic", "ClaudeBot", "Training Anthropic’s models", "Yes"],
        ["Anthropic", "Claude-User", "Fetching a page when a user asks", "Yes"],
        ["Perplexity", "PerplexityBot", "Perplexity search results (not training)", "Yes"],
        ["Perplexity", "Perplexity-User", "Fetching a page when a user asks", "Generally no"],
        ["Google", "Googlebot", "Google Search, including AI Overviews and AI Mode", "Yes"],
        ["Google", "Google-Extended", "Gemini training and grounding (not Search)", "Yes"],
      ],
      caption: `From each company’s own documentation: <a href="${openaiBots}">OpenAI</a>, <a href="${anthropic}">Anthropic</a>, <a href="${perplexity}">Perplexity</a>, <a href="${googleCrawlers}">Google</a>.`,
    },
    { t: "p", c: "Three details from that table matter most:" },
    {
      t: "ul",
      items: [
        `<strong>Search and training are separate.</strong> OpenAI says you can allow OAI-SearchBot while blocking GPTBot; disallowing GPTBot <a href="${openaiBots}">“indicates a site’s content should not be used in training”</a>.`,
        `<strong>Google-Extended doesn’t touch Google Search.</strong> Google says it <a href="${googleCrawlers}">“does not impact a site’s inclusion in Google Search nor is it used as a ranking signal”</a>. Blocking it won’t remove you from AI Overviews; those run on Googlebot.`,
        "<strong>User-triggered fetchers behave differently.</strong> ChatGPT-User and Perplexity-User fetch a page because a person asked, and both companies say robots.txt may not apply to them.",
      ],
    },
    { t: "h2", c: "Template 1: Allow AI search and training (maximum visibility)" },
    {
      t: "p",
      c: "Best for most B2B and consumer brands that want to be found and recommended everywhere. If your current robots.txt has no rules for these bots, they’re already allowed, but stating it explicitly makes intent clear to the next person who edits the file. Replace the example private paths with your own, and remember to repeat them in any named group you add later:",
    },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nUser-agent: GPTBot\nUser-agent: Claude-SearchBot\nUser-agent: ClaudeBot\nUser-agent: PerplexityBot\nUser-agent: Google-Extended\nDisallow: /admin/\nDisallow: /cart/\nAllow: /\n\nUser-agent: *\nDisallow: /admin/\nDisallow: /cart/\n\nSitemap: https://yoursite.com/sitemap.xml",
    },
    { t: "h2", c: "Template 2: Allow AI search, block training (the common middle ground)" },
    {
      t: "p",
      c: "For publishers, research firms and anyone whose content is the product. You stay eligible for citations in ChatGPT, Claude, Perplexity and Google, while opting out of training:",
    },
    {
      t: "code",
      label: "robots.txt",
      c: "# AI search: allowed (needed to be cited)\nUser-agent: OAI-SearchBot\nUser-agent: Claude-SearchBot\nUser-agent: PerplexityBot\nDisallow: /admin/\nAllow: /\n\n# Model training: blocked\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: ClaudeBot\nDisallow: /\n\nUser-agent: Google-Extended\nDisallow: /\n\nUser-agent: CCBot\nDisallow: /\n\nUser-agent: *\nDisallow: /admin/\n\nSitemap: https://yoursite.com/sitemap.xml",
    },
    {
      t: "p",
      c: "CCBot is Common Crawl’s crawler, whose public dataset is widely used for training. Blocking training is a reasonable choice, but know the trade-off: what a model learns in training shapes which brands it “remembers”, which affects recommendations even when it doesn’t search. We explain that in <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a>.",
    },
    { t: "cta" },
    { t: "h2", c: "Template 3: Block all AI crawlers" },
    {
      t: "p",
      c: "Only if you genuinely don’t want to appear in AI answers, for example on a members-only or licensed-content site. This removes you from ChatGPT, Claude and Perplexity search:",
    },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nDisallow: /\n\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: Claude-SearchBot\nDisallow: /\n\nUser-agent: ClaudeBot\nDisallow: /\n\nUser-agent: PerplexityBot\nDisallow: /\n\nUser-agent: Google-Extended\nDisallow: /\n\nUser-agent: CCBot\nDisallow: /",
    },
    {
      t: "p",
      c: "Note what this doesn’t do: Google’s AI Overviews and AI Mode use Googlebot, so blocking Google-Extended won’t take you out of them. Blocking Googlebot would remove you from Google Search entirely.",
    },
    { t: "h2", c: "How crawlers read your robots.txt (the rule that trips people up)" },
    {
      t: "p",
      c: "A crawler looks for the group that names it. If it finds one, it follows only that group and ignores the <code>User-agent: *</code> rules entirely. If it doesn’t find one, it falls back to <code>*</code>. That’s the standard, written up as <a href=\"https://www.rfc-editor.org/rfc/rfc9309.html\">RFC 9309</a>.",
    },
    {
      t: "p",
      c: "This matters the moment you add an AI section. Say your file blocks <code>/admin/</code> for everyone, and you add a group that allows OAI-SearchBot:",
    },
    {
      t: "code",
      label: "robots.txt (wrong)",
      c: "User-agent: *\nDisallow: /admin/\nDisallow: /checkout/\n\nUser-agent: OAI-SearchBot\nAllow: /",
    },
    {
      t: "p",
      c: "OAI-SearchBot now reads only its own group, so <code>/admin/</code> and <code>/checkout/</code> are open to it. Repeat the private paths inside every named group:",
    },
    {
      t: "code",
      label: "robots.txt (right)",
      c: "User-agent: *\nDisallow: /admin/\nDisallow: /checkout/\n\nUser-agent: OAI-SearchBot\nUser-agent: Claude-SearchBot\nUser-agent: PerplexityBot\nDisallow: /admin/\nDisallow: /checkout/\nAllow: /",
    },
    {
      t: "p",
      c: "You can stack several <code>User-agent</code> lines above one set of rules, as above, which keeps the file short and means you only maintain one list of private paths per group. Keep real secrets behind a login, not just a Disallow line: robots.txt is public and only well-behaved bots follow it.",
    },
    { t: "h2", c: "Partial access: allow some sections, block others" },
    {
      t: "p",
      c: "You don’t have to choose all or nothing. A common setup lets AI search read everything public that helps buyers (product pages, pricing, docs, blog) and keeps out pages that would only produce bad answers, like internal search results, old campaign pages and gated content:",
    },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nUser-agent: Claude-SearchBot\nUser-agent: PerplexityBot\nDisallow: /search\nDisallow: /lp/\nDisallow: /resources/gated/\nAllow: /",
    },
    {
      t: "p",
      c: "Be careful blocking whole folders like <code>/blog/</code> or <code>/docs/</code> to “protect” content. Those are often the pages AI answers cite most, because they answer specific questions.",
    },
    { t: "h2", c: "Other AI crawlers you’ll see in your logs" },
    {
      t: "p",
      c: "The table above covers the assistants most buyers use. Your logs will show others. Look up each one in its owner’s documentation before you decide, because names and purposes change:",
    },
    {
      t: "table",
      head: ["Bot", "Owner", "What to check in their docs"],
      rows: [
        ["Applebot-Extended", "Apple", "Whether you allow your content to train Apple’s AI models (Applebot itself powers Siri and Spotlight search)"],
        ["Amazonbot", "Amazon", "Use in Alexa answers and other Amazon services"],
        ["Meta-ExternalAgent", "Meta", "Use for Meta’s AI training and products"],
        ["CCBot", "Common Crawl", "Its open dataset is widely used to train models"],
        ["Bytespider", "ByteDance", "Use for ByteDance’s AI products"],
      ],
    },
    {
      t: "p",
      c: "A simple rule: allow the search crawlers for any assistant your buyers use, and make training and dataset decisions once, as a company, rather than bot by bot as they appear.",
    },
    { t: "h2", c: "Checking that a bot is really who it says" },
    {
      t: "p",
      c: "Anyone can put “GPTBot” in a user agent string. If you see heavy traffic claiming to be an AI crawler, check it before you allow or block it at the firewall:",
    },
    {
      t: "ol",
      items: [
        "<strong>Compare the IP against the published list.</strong> OpenAI and Perplexity publish IP ranges for their crawlers on the documentation pages linked above.",
        "<strong>Use your CDN’s verified-bot list.</strong> Cloudflare and other CDNs mark known crawlers as verified, which is easier than maintaining IP lists yourself.",
        "<strong>Block fakes, not the real bot.</strong> A scraper pretending to be an AI crawler is a firewall problem. Don’t respond by blocking the real crawler in robots.txt.",
      ],
    },
    {
      t: "p",
      c: `Anthropic notes that blocking by IP address may not work reliably for its crawlers, because the addresses can change, and <a href="${anthropic}">recommends robots.txt instead</a>.`,
    },
    { t: "h2", c: "Which template should you use?" },
    {
      t: "table",
      head: ["Your situation", "Template"],
      rows: [
        ["B2B SaaS, ecommerce, agency, local business", "1: allow everything"],
        ["You want citations but are uneasy about training", "2: allow search, block training"],
        ["Publisher, research firm, paid content", "2, or a licensing conversation"],
        ["Members-only or licensed content you must protect", "3: block all"],
      ],
    },
    {
      t: "p",
      c: "If you sell something and want buyers to hear about it in AI answers, Template 1 or 2. Most companies blocking AI bots today did it by accident, through a CDN default or a copied robots.txt, not as a decision.",
    },
    { t: "h2", c: "Should you allow training crawlers?" },
    {
      t: "p",
      c: "This is the question teams argue about longest, so here’s a way to settle it in one meeting. Allowing training crawlers means future versions of a model may learn about your brand, product and category from your pages. Blocking them means they learn about you only from what other sites say.",
    },
    {
      t: "table",
      head: ["Allow training if…", "Block training if…"],
      rows: [
        ["You sell a product and want models to know it exists", "Your content itself is what you sell (research, courses, news)"],
        ["Your category is new and models describe it poorly", "You license content and training would undercut that"],
        ["Competitors are well known to models and you aren’t", "Legal or compliance has told you to"],
        ["Most of your pages are marketing and docs", "Most of your pages are original paid or premium work"],
      ],
    },
    {
      t: "p",
      c: "For most companies that sell software or services, the content on their site is marketing they want repeated. Allowing training costs them little. For publishers, the calculation is different, and Template 2 exists for them. Whatever you choose, write the decision down so the next person who edits robots.txt doesn’t undo it by accident.",
    },
    { t: "h2", c: "Where to edit robots.txt on common platforms" },
    {
      t: "table",
      head: ["Platform", "Where robots.txt lives"],
      rows: [
        ["WordPress", "Generated by WordPress or your SEO plugin; edit through the plugin’s file editor, or upload a real robots.txt to the site root"],
        ["Shopify", "Edit the <code>robots.txt.liquid</code> template in your theme code"],
        ["Webflow", "Site settings → SEO → robots.txt"],
        ["Squarespace and Wix", "Limited editing; check the platform’s SEO and crawler settings, which may include an AI crawler toggle"],
        ["Next.js", "A <code>robots.ts</code> file in the <code>app</code> folder, or a static file in <code>public</code>"],
        ["Custom server", "A plain text file at the root of your domain"],
      ],
    },
    {
      t: "p",
      c: "Each subdomain needs its own file. <code>docs.yoursite.com</code> and <code>help.yoursite.com</code> don’t inherit the rules from <code>yoursite.com</code>, so check them separately.",
    },
    { t: "h2", c: "How to check robots.txt is working" },
    {
      t: "ol",
      items: [
        "<strong>Open your live file</strong> at <code>yoursite.com/robots.txt</code> and confirm the rules are there. Caching or a CMS setting sometimes serves an old version.",
        "<strong>Check the syntax.</strong> Each <code>User-agent</code> line needs its own rules below it, and paths are case-sensitive. One missing line can block your whole site.",
        "<strong>Test a real request</strong> as the crawler, to catch CDN blocks that ignore robots.txt:",
      ],
    },
    {
      t: "code",
      label: "Terminal",
      c: "curl -s -o /dev/null -w \"%{http_code}\\n\" -A \"OAI-SearchBot\" https://yoursite.com/\n# 200 = reachable   403 or 503 = blocked by your CDN or firewall",
    },
    {
      t: "ol",
      items: [
        "<strong>Check your CDN’s bot settings.</strong> Cloudflare <a href=\"https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/\">began blocking AI crawlers by default for new domains in July 2025</a>. If you’re on Cloudflare, check the AI crawler setting in your dashboard.",
        "<strong>Give it a day.</strong> OpenAI says its systems take about 24 hours to pick up robots.txt changes.",
        "<strong>Watch your logs</strong> over the next week for visits from the bots you allowed.",
      ],
    },
    { t: "h2", c: "robots.txt vs llms.txt" },
    {
      t: "p",
      c: "robots.txt controls access and AI crawlers obey it. llms.txt only suggests what to read and, according to every study so far, AI search crawlers rarely request it. If you only fix one file, fix robots.txt. The data is in <a href=\"/blog/does-llms-txt-work\">does llms.txt work?</a>",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Blocking GPTBot and thinking you’ve left ChatGPT search.</strong> Search uses OAI-SearchBot.",
        "<strong>Blocking Google-Extended and expecting to leave AI Overviews.</strong> AI Overviews use Googlebot.",
        "<strong>Copying a “block all AI” list from a forum.</strong> Many include search crawlers, which removes you from AI answers.",
        "<strong>A <code>Disallow: /</code> under <code>User-agent: *</code></strong> left over from a staging site. It blocks everything, including AI crawlers.",
        "<strong>Fixing robots.txt but not the CDN.</strong> Always test with a real request.",
        "<strong>Forgetting subdomains.</strong> Your docs and help centre each need their own robots.txt, and they’re often the pages AI answers cite.",
        "<strong>Allowing a bot but leaving private paths open to it.</strong> Named groups ignore <code>User-agent: *</code>, so repeat your Disallow lines inside each group.",
      ],
    },
    {
      t: "p",
      c: "Once crawlers can reach you, make sure they can read what they find: our <a href=\"/blog/technical-ai-search-checklist\">technical AI search checklist</a> covers rendering, indexing and page structure next.",
    },
  ],
  faqs: [
    {
      q: "Does blocking GPTBot remove me from ChatGPT?",
      a: "Not from ChatGPT search. GPTBot is OpenAI’s training crawler; ChatGPT search uses OAI-SearchBot. Block GPTBot to opt out of training, and keep OAI-SearchBot allowed to stay eligible for citations.",
    },
    {
      q: "How do I stop my content being used to train AI?",
      a: "Disallow the training crawlers: GPTBot, ClaudeBot, Google-Extended and CCBot. Keep the search crawlers allowed if you still want to appear in AI answers.",
    },
    {
      q: "Do AI crawlers actually respect robots.txt?",
      a: "OpenAI, Anthropic, Perplexity and Google all document that their crawlers respect it. The exceptions are user-triggered fetchers like ChatGPT-User and Perplexity-User, which may fetch a page when a person asks.",
    },
    {
      q: "Will blocking Google-Extended affect my Google rankings?",
      a: "No. Google says Google-Extended doesn’t affect inclusion in Google Search and isn’t a ranking signal.",
    },
    {
      q: "How long do robots.txt changes take to apply?",
      a: "OpenAI says about 24 hours for its systems. Other crawlers re-read robots.txt on their own schedules, usually within a day or two.",
    },
  ],
  sources: [
    { title: "OpenAI crawlers", url: openaiBots, type: "primary", read: "2026-10-26" },
    { title: "Anthropic crawlers", url: anthropic, type: "primary", read: "2026-10-26" },
    { title: "Perplexity crawlers", url: perplexity, type: "primary", read: "2026-10-26" },
    { title: "Google common crawlers", url: googleCrawlers, type: "primary", read: "2026-10-26" },
    { title: "RFC 9309: Robots Exclusion Protocol", url: "https://www.rfc-editor.org/rfc/rfc9309.html", type: "primary", read: "2026-10-26" },
    { title: "MIT Technology Review: Cloudflare", url: "https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/", type: "press", read: "2026-10-26" },
  ],
  related: ["technical-ai-search-checklist", "does-llms-txt-work", "can-chatgpt-read-javascript"],
  cta: {
    mid: "Not sure your robots.txt and CDN are letting AI search crawlers in? We’ll test it for you.",
    title: "Find out if AI crawlers can reach you.",
    text: "We test your site as OAI-SearchBot, Claude-SearchBot and PerplexityBot, check your robots.txt and CDN settings, and tell you exactly what to change.",
    button: "Test my robots.txt",
  },
};
