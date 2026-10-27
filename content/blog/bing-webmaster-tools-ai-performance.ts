import type { Post } from "../../lib/blog";

const bing = "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview";
const indexnow = "https://www.indexnow.org/documentation";
const engines = "https://www.indexnow.org/searchengines.json";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";

export const post: Post = {
  slug: "bing-webmaster-tools-ai-performance",
  tracker: "3.8",
  bucket: "technical",
  style: "RS Playbook",
  title: "Bing Webmaster Tools AI Performance and IndexNow: setup guide",
  dek: "The only free report that counts how often AI cites your pages, plus the fastest way to get new pages found. Here’s how to set both up in under 30 minutes and what to do with the data.",
  description: "Set up Bing Webmaster Tools AI Performance and IndexNow: verify your site, read citations and grounding queries, submit URLs instantly, and act on the data.",
  targetQuery: "bing webmaster tools ai performance",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Bing Webmaster Tools has an AI Performance report, launched in public preview on February 10, 2026, that shows how often your pages are cited in Microsoft Copilot, Bing’s AI summaries and some partner integrations. It shows total citations, average cited pages per day, page-level citations and grounding queries: the phrases the AI used to find your content. Set it up by importing your site from Google Search Console. Then turn on IndexNow, which tells Bing and other participating engines about new or changed URLs immediately. Both are free and take under 30 minutes.",
    },
    {
      t: "p",
      c: "Most AI visibility data costs money or takes manual work. Bing’s AI Performance report is the exception: free, first-party data on how often an AI assistant cites your site. And because OpenAI names Microsoft among <a href=\"" + openaiSearch + "\">ChatGPT search’s providers</a>, being well indexed in Bing matters beyond Bing itself.",
    },
    {
      t: "p",
      c: "This guide sets up both tools, step by step, and shows how to turn the report into actions.",
    },
    { t: "h2", c: "Why Bing matters even if nobody you know uses it" },
    {
      t: "p",
      c: "Bing’s own search share is small in many markets, so it’s easy to skip. But Bing’s index does more than power bing.com. It’s the index behind Microsoft Copilot, and OpenAI lists Microsoft among the search providers ChatGPT search uses. A page that isn’t in Bing’s index is missing from part of how ChatGPT finds sources.",
    },
    {
      t: "p",
      c: "That makes Bing Webmaster Tools less about Bing traffic and more about AI eligibility. The two jobs that matter most are making sure your key pages are indexed in Bing, and watching how often Microsoft’s AI cites them.",
    },
    {
      t: "table",
      head: ["", "Google Search Console", "Bing Webmaster Tools"],
      rows: [
        ["Indexing status", "Yes", "Yes"],
        ["Search clicks and impressions", "Yes, including AI Overviews inside “Web”", "Yes"],
        ["Separate AI citation data", "No", "Yes: AI Performance report"],
        ["AI retrieval phrases", "No", "Yes: grounding queries"],
        ["Instant URL submission", "URL Inspection (limited per day)", "IndexNow (up to 10,000 URLs per request)"],
      ],
    },
    { t: "h2", c: "Step 1: Verify your site (5 minutes)" },
    {
      t: "ol",
      items: [
        "Go to <strong>bing.com/webmasters</strong> and sign in with a Microsoft, Google or Facebook account.",
        "Choose <strong>Import from Google Search Console</strong>. Bing pulls in your verified sites and their sitemaps. This is the fastest route.",
        "If you don’t use Search Console, add the site manually and verify with a DNS record, an HTML file or a meta tag.",
        "Under <strong>Sitemaps</strong>, confirm your sitemap is listed (for example <code>https://yoursite.com/sitemap.xml</code>). Submit it if not.",
      ],
    },
    {
      t: "p",
      c: "Verify every subdomain that matters, such as <code>docs.</code> and <code>help.</code>. Help centres and documentation are often cited by AI answers, because they answer narrow, specific questions. If they run on a separate platform, add them as separate sites so their citations show up in their own reports.",
    },
    { t: "h2", c: "Step 2: Open the AI Performance report" },
    {
      t: "p",
      c: `Bing’s report covers citations across <a href="${bing}">“Microsoft Copilot, AI-generated summaries in Bing, and select partner integrations”</a>. It contains:`,
    },
    {
      t: "table",
      head: ["Metric", "Bing’s definition", "What to use it for"],
      rows: [
        ["Total citations", "The total number of citations displayed as sources in AI-generated answers in the time frame", "Overall trend: is AI citing you more or less?"],
        ["Average cited pages", "The average number of unique pages from your site displayed as sources per day", "Breadth: is AI relying on many pages or a few?"],
        ["Grounding queries", "Key phrases the AI used when retrieving content it referenced; a sample of overall activity", "What questions your content answers"],
        ["Page-level citation activity", "Citation counts for specific URLs in the date range", "Which pages to protect and which to improve"],
        ["Visibility trends", "How citation activity changes over time", "Spotting gains or drops after changes"],
      ],
      caption: `Definitions from <a href="${bing}">Bing’s announcement</a>.`,
    },
    { t: "h2", c: "Step 3: Turn on IndexNow (10 minutes)" },
    {
      t: "p",
      c: `<a href="${indexnow}">IndexNow</a> is a protocol for telling search engines a URL has been added, changed or deleted. Submissions are shared among participating engines, which include <a href="${engines}">Bing, Yandex, Seznam, Naver, Yep, the Internet Archive and Amazonbot</a>. Google doesn’t participate, so keep using Search Console for Google.`,
    },
    { t: "h3", c: "The easy way" },
    {
      t: "ul",
      items: [
        "<strong>WordPress:</strong> many SEO plugins include IndexNow; switch it on in their settings, or use the official IndexNow plugin.",
        "<strong>Cloudflare:</strong> Crawler Hints can send IndexNow pings automatically when your content changes.",
        "<strong>Other platforms:</strong> check your CMS or host for an IndexNow setting before building anything.",
      ],
    },
    { t: "h3", c: "The manual way" },
    {
      t: "ol",
      items: [
        "<strong>Create a key:</strong> 8 to 128 characters of letters, numbers or dashes. A random hex string works.",
        "<strong>Host the key file</strong> at <code>https://yoursite.com/{key}.txt</code>, containing only the key.",
        "<strong>Send the URLs</strong> with a POST request:",
      ],
    },
    {
      t: "code",
      label: "Terminal",
      c: "curl -X POST https://api.indexnow.org/indexnow \\\n  -H \"Content-Type: application/json; charset=utf-8\" \\\n  -d '{\n    \"host\": \"yoursite.com\",\n    \"key\": \"your-key\",\n    \"keyLocation\": \"https://yoursite.com/your-key.txt\",\n    \"urlList\": [\n      \"https://yoursite.com/\",\n      \"https://yoursite.com/pricing\",\n      \"https://yoursite.com/blog/new-post\"\n    ]\n  }'",
    },
    {
      t: "table",
      head: ["Response", "Meaning"],
      rows: [
        ["200", "OK: submitted"],
        ["202", "Accepted: received, key validation pending"],
        ["400", "Bad request: invalid format"],
        ["403", "Forbidden: key not valid (file missing or doesn’t match)"],
        ["422", "Unprocessable: URLs don’t match the host, or key mismatch"],
        ["429", "Too many requests: slow down"],
      ],
      caption: `Up to 10,000 URLs per request. From the <a href="${indexnow}">IndexNow documentation</a>.`,
    },
    {
      t: "p",
      c: "Submit when you publish, update or delete a page, not on a timer. Resubmitting unchanged URLs repeatedly is the kind of activity a 429 warns against.",
    },
    { t: "cta" },
    { t: "h2", c: "Step 4: Read the report (monthly, 20 minutes)" },
    {
      t: "ol",
      items: [
        "<strong>Check the trend.</strong> Compare total citations with the previous month. A drop after a site change, such as a redesign or migration, usually points to a crawling or rendering problem.",
        "<strong>List your top 10 cited pages.</strong> These are the pages AI trusts. Keep them accurate, fresh and linked from your navigation.",
        "<strong>Find pages that should be cited but aren’t.</strong> Pricing, comparison and key product pages with few or no citations need work: an answer-first intro, an HTML table, a visible update date.",
        "<strong>Read the grounding queries.</strong> Group them by theme. They show what AI thinks your pages answer, which isn’t always what you intended.",
        "<strong>Note queries with no good page.</strong> If a grounding query is only loosely matched by your content, write a section or page that answers it directly.",
      ],
    },
    { t: "h2", c: "What grounding queries tell you" },
    {
      t: "p",
      c: "Grounding queries are the AI’s own search phrases, not what users typed. That makes them unusually useful: they show how the AI breaks questions down before it looks for sources, the process known as <a href=\"/blog/what-is-query-fan-out\">query fan-out</a>.",
    },
    {
      t: "table",
      head: ["Pattern you see", "What it means", "What to do"],
      rows: [
        ["Many queries about one feature", "That page is AI’s go-to source on the topic", "Expand the page; keep it current"],
        ["Queries about pricing or plans", "AI uses you for price facts", "Make sure prices are accurate and dated"],
        ["Queries naming competitors", "You’re cited in comparisons", "Check your comparison pages are fair and current"],
        ["Queries you didn’t expect", "AI sees your content as relevant to another topic", "Decide whether to lean in with a dedicated page"],
        ["Very few queries overall", "AI rarely finds you", "Check indexing, rendering and page structure"],
      ],
    },
    { t: "h2", c: "IndexNow on Next.js and Vercel" },
    {
      t: "p",
      c: "If your site runs on Next.js, put the key file in the <code>public</code> folder, for example <code>public/3f2a9c1e7b.txt</code> containing <code>3f2a9c1e7b</code>, and deploy. It’s then served at <code>https://yoursite.com/3f2a9c1e7b.txt</code>. After each deploy that adds or changes pages, send their URLs. A simple approach is to read them from your own sitemap:",
    },
    {
      t: "code",
      label: "Terminal",
      c: "URLS=$(curl -s https://yoursite.com/sitemap.xml \\\n  | grep -o \"<loc>[^<]*</loc>\" | sed 's/<\\/*loc>//g' \\\n  | python3 -c 'import sys,json;print(json.dumps([l.strip() for l in sys.stdin]))')\n\ncurl -s -o /dev/null -w \"%{http_code}\\n\" -X POST https://api.indexnow.org/indexnow \\\n  -H \"Content-Type: application/json; charset=utf-8\" \\\n  -d \"{\\\"host\\\":\\\"yoursite.com\\\",\\\"key\\\":\\\"3f2a9c1e7b\\\",\\\"urlList\\\":$URLS}\"",
    },
    {
      t: "p",
      c: "For a small site, sending the whole sitemap after a batch of new posts is fine. For larger sites, send only the URLs that changed.",
    },
    { t: "h2", c: "No data in the AI Performance report?" },
    {
      t: "ol",
      items: [
        "<strong>Give it time.</strong> New sites and newly verified sites may show little or nothing for the first weeks.",
        "<strong>Check indexing.</strong> Use URL Inspection on your top pages. Pages that aren’t indexed can’t be cited.",
        "<strong>Check robots.txt and your CDN</strong> for rules that block Bingbot.",
        "<strong>Check the content.</strong> Pages that are mostly JavaScript, images or thin text are hard to cite.",
        "<strong>Check demand.</strong> If few people ask Copilot questions your pages answer, citations will be low even for good pages. Compare with your normal Bing search impressions.",
      ],
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you run a project management tool. Your AI Performance report shows most citations going to one blog post about sprint planning, a handful to your integrations page, and almost none to pricing. The grounding queries include phrases like “sprint planning template”, “how long should a sprint be” and “[your tool] Slack integration”.",
    },
    {
      t: "p",
      c: "That tells you three things. The sprint planning post is your strongest AI asset, so keep it fresh and add a clear link to a free template that uses your product. The integrations page is being used for setup questions, so add short answer-first sections for each integration. And pricing is invisible to Copilot, so check that the page is indexed, that prices are in HTML text rather than images, and that it opens with a plain sentence such as “Plans start at $X per user per month.”",
    },
    { t: "h2", c: "Use the rest of Bing Webmaster Tools too" },
    {
      t: "ul",
      items: [
        "<strong>URL Inspection:</strong> confirm key pages are indexed and see when they were last crawled.",
        "<strong>Site Explorer:</strong> spot crawl errors and blocked sections.",
        "<strong>Search Performance:</strong> Bing’s equivalent of Search Console’s performance report, for normal search clicks and impressions.",
        "<strong>Recommendations:</strong> Bing’s list of technical issues, worth a quarterly review.",
      ],
    },
    { t: "h2", c: "Sharing the data with your team" },
    {
      t: "p",
      c: "The AI Performance report is easy to export as CSV, which makes it simple to share. Each month, pull three numbers into your marketing report: total citations, average cited pages and the top five cited URLs, each compared with the previous month. Add one sentence about the grounding queries, such as “AI is citing our integration pages for setup questions”, and one action you’re taking next.",
    },
    {
      t: "p",
      c: "Keep the expectations honest. Copilot citations are one AI ecosystem, and a citation isn’t a visit. The report is most valuable as an early signal of which pages AI systems find worth citing. Those pages tend to be the ones worth strengthening for ChatGPT, Perplexity and Google’s AI as well.",
    },
    { t: "h2", c: "How to improve an under-cited page" },
    {
      t: "ol",
      items: [
        "<strong>Inspect it in Bing.</strong> Confirm it’s indexed and see the last crawl date. If it hasn’t been crawled recently, send it through IndexNow.",
        "<strong>Rewrite the opening.</strong> The first two sentences should directly answer the main question the page exists for.",
        "<strong>Add headings that match real questions</strong>, taken from your grounding queries where possible.",
        "<strong>Put comparisons and prices in HTML tables</strong> and add a visible “Updated” date.",
        "<strong>Link to it</strong> from your most-cited pages, so crawlers and readers find it.",
        "<strong>Resubmit and wait a month</strong>, then compare its citations in the next report.",
      ],
    },
    { t: "h2", c: "A monthly routine" },
    {
      t: "table",
      head: ["When", "Task", "Time"],
      rows: [
        ["Every publish or update", "IndexNow ping (automatic if set up)", "0 min"],
        ["Monthly", "AI Performance: trend, top pages, grounding queries", "20 min"],
        ["Monthly", "Fix one under-cited key page", "1–2 hours"],
        ["Quarterly", "Recommendations and crawl errors", "30 min"],
      ],
    },
    {
      t: "p",
      c: "Combine this with a monthly check of ChatGPT and Perplexity answers for your buyer questions. Bing’s report covers Microsoft’s AI surfaces; the manual check covers the rest. Our guide to <a href=\"/blog/ai-citations-vs-brand-mentions\">citations vs brand mentions</a> explains how to report both together.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t ping IndexNow for every URL every day. Submit changes only.",
        "Don’t treat Copilot citations as your whole AI picture. It’s one ecosystem.",
        "Don’t ignore a sudden citation drop. Check robots.txt, CDN settings and rendering first.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Never verifying Bing.</strong> Many sites set up Search Console years ago and never did Bing.",
        "<strong>Forgetting subdomains.</strong> Docs and help centres need verifying too.",
        "<strong>Hosting the IndexNow key in the wrong place.</strong> A 403 usually means the file is missing or its content doesn’t match the key.",
        "<strong>Reading grounding queries as user prompts.</strong> They’re the AI’s retrieval phrases, which is what makes them useful.",
        "<strong>Looking once.</strong> The value is in the monthly trend, not any single number.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the AI Performance report in Bing Webmaster Tools?",
      a: "A report, launched in public preview in February 2026, that shows how often your pages are cited in Microsoft Copilot, Bing’s AI summaries and some partner integrations, with page-level data and grounding queries.",
    },
    {
      q: "What are grounding queries?",
      a: "The key phrases the AI used when retrieving content it cited. They’re not users’ prompts, and Bing shows a sample rather than every query.",
    },
    {
      q: "Does IndexNow work for Google?",
      a: "No. Google doesn’t participate in IndexNow. Participating engines include Bing, Yandex, Seznam, Naver, Yep, the Internet Archive and Amazonbot.",
    },
    {
      q: "How many URLs can I submit with IndexNow?",
      a: "Up to 10,000 URLs per request. Submit only when pages are added, changed or deleted.",
    },
    {
      q: "Is Bing Webmaster Tools free?",
      a: "Yes. Bing Webmaster Tools, including the AI Performance report, is free for any verified site.",
    },
  ],
  sources: [
    { title: "Bing: Introducing AI Performance", url: bing, type: "primary", read: "2026-10-27" },
    { title: "IndexNow documentation", url: indexnow, type: "primary", read: "2026-10-27" },
    { title: "IndexNow participating engines", url: engines, type: "primary", read: "2026-10-27" },
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-27" },
  ],
  related: ["what-is-query-fan-out", "technical-ai-search-checklist", "does-chatgpt-use-google-or-bing"],
  cta: {
    mid: "Want help reading your AI Performance data? We’ll turn your citations and grounding queries into a page-by-page plan.",
    title: "Turn your Bing AI data into a plan.",
    text: "We review your AI Performance report, find the pages AI trusts and the ones it skips, and give you a prioritised list of fixes and new pages.",
    button: "Review my AI data",
  },
};
