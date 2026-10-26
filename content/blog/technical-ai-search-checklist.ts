import type { Post } from "../../lib/blog";

const openaiBots = "https://developers.openai.com/api/docs/bots";
const google = "https://developers.google.com/search/docs/appearance/ai-features";
const vercel = "https://vercel.com/blog/the-rise-of-the-ai-crawler";

export const post: Post = {
  slug: "technical-ai-search-checklist",
  tracker: "3.1",
  bucket: "technical",
  style: "RS Playbook",
  title: "Technical SEO checklist for AI search: 12 checks that matter",
  dek: "Twelve checks that decide whether ChatGPT, Perplexity and Google’s AI features can read and cite your pages, ranked by impact, plus the popular fixes you can safely skip.",
  description: "A technical checklist for AI search: crawler access, rendering, indexing, page structure and freshness, ranked must-do to optional, plus what to skip.",
  targetQuery: "technical seo checklist for ai search",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Most of what makes a site work for AI search is ordinary technical SEO done properly, plus a few AI-specific checks. The must-dos: allow AI search crawlers in robots.txt, make sure your CDN isn’t blocking them, serve your content in HTML rather than JavaScript, get indexed in both Google and Bing, and fix broken links. Then improve page structure and keep key pages fresh. Skip llms.txt and schema as AI tactics; the evidence says they don’t move citations. The whole checklist takes a day for most sites.",
    },
    {
      t: "p",
      c: "Technical AI search advice tends to come as a long list where everything sounds equally urgent: llms.txt, schema, “AI-friendly” formatting, special files. Most of it doesn’t matter. A few things matter a lot, and if they’re broken, nothing else you do will get you cited.",
    },
    {
      t: "p",
      c: "This checklist ranks the work by impact. Do the must-dos this week, the should-dos this month, and ignore the rest until there’s evidence they help. It’s written for marketers and developers who want a clear list they can hand to each other.",
    },
    { t: "h2", c: "The checklist at a glance" },
    {
      t: "table",
      head: ["#", "Check", "Priority", "Time"],
      rows: [
        ["1", "AI search crawlers allowed in robots.txt", "Must do", "15 min"],
        ["2", "CDN and firewall not blocking AI crawlers", "Must do", "15 min"],
        ["3", "Key content in server HTML (not JavaScript)", "Must do", "30 min to check"],
        ["4", "Indexed in Google (Search Console)", "Must do", "15 min"],
        ["5", "Indexed in Bing (Webmaster Tools + IndexNow)", "Must do", "20 min"],
        ["6", "Broken links and redirects fixed", "Must do", "1 hour"],
        ["7", "One clear page per buyer question", "Should do", "Ongoing"],
        ["8", "Answer-first structure and real HTML tables", "Should do", "Per page"],
        ["9", "Visible updated dates on key pages", "Should do", "30 min"],
        ["10", "Fast pages that work on mobile", "Should do", "Varies"],
        ["11", "Clean internal links to key pages", "Should do", "1 hour"],
        ["12", "AI crawler activity in your logs", "Nice to have", "30 min monthly"],
      ],
    },
    { t: "h2", c: "Must do: let AI crawlers in" },
    {
      t: "p",
      c: `<strong>1. Allow AI search crawlers in robots.txt.</strong> This is the hard gate. OpenAI says sites that block its search crawler <a href="${openaiBots}">“will not be shown in ChatGPT search answers”</a>. Each AI company runs separate bots for search and for training, so you can allow one and block the other:`,
    },
    {
      t: "code",
      label: "robots.txt",
      c: "# Allow AI search (needed to be cited)\n# Repeat any private Disallow paths here too\nUser-agent: OAI-SearchBot\nUser-agent: Claude-SearchBot\nUser-agent: PerplexityBot\nAllow: /\n\n# Optional: opt out of model training\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: ClaudeBot\nDisallow: /",
    },
    {
      t: "p",
      c: "Our <a href=\"/blog/robots-txt-for-ai-crawlers\">robots.txt template for AI crawlers</a> covers every major bot and the trade-offs of blocking training.",
    },
    {
      t: "p",
      c: "<strong>2. Check your CDN and firewall.</strong> Cloudflare <a href=\"https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/\">started blocking AI crawlers by default for new domains in July 2025</a>, and other providers have similar bot settings. A CDN block overrides your robots.txt. Open your bot or firewall settings and allow verified AI search crawlers, then test with the command in check 3.",
    },
    { t: "h2", c: "Must do: make your content readable" },
    {
      t: "p",
      c: `<strong>3. Serve content in HTML, not just JavaScript.</strong> AI crawlers download JavaScript files but don’t run them. <a href="${vercel}">Vercel’s analysis</a> found that neither OpenAI’s nor Anthropic’s crawler executed any JavaScript. Test your key pages:`,
    },
    {
      t: "code",
      label: "Terminal",
      c: "curl -s -A \"OAI-SearchBot\" https://yoursite.com/pricing | grep -i \"a sentence from your page\"",
    },
    {
      t: "p",
      c: "No match means the text isn’t in the HTML a crawler receives. A 403 or challenge page means you’re being blocked (check 2). The full test and fixes by framework are in <a href=\"/blog/can-chatgpt-read-javascript\">can ChatGPT read JavaScript?</a>",
    },
    { t: "h2", c: "Must do: get indexed everywhere AI looks" },
    {
      t: "p",
      c: `<strong>4. Google.</strong> Google’s AI Overviews and AI Mode only cite pages that are <a href="${google}">“indexed and eligible to be shown in Google Search with a snippet”</a>. In Search Console, check that your key pages are indexed and not blocked by a stray <code>noindex</code> or <code>nosnippet</code>.`,
    },
    {
      t: "p",
      c: "<strong>5. Bing.</strong> OpenAI lists Microsoft among ChatGPT search’s search partners, and Microsoft Copilot runs on Bing. Verify your site in Bing Webmaster Tools (you can import it from Search Console), submit your sitemap and turn on IndexNow so new pages are found quickly. You also get Bing’s AI Performance report, which counts how often Copilot cites your pages.",
    },
    {
      t: "p",
      c: "<strong>6. Fix broken links and redirects.</strong> AI crawlers hit missing pages often: in Vercel’s data, about 34% of their fetches returned 404 errors. Crawl your site, redirect old URLs to their replacements, and keep your sitemap current.",
    },
    { t: "cta" },
    { t: "h2", c: "Should do: structure pages so they can be quoted" },
    {
      t: "p",
      c: "<strong>7. One clear page per buyer question.</strong> AI answers pull passages from specific pages. A page that answers “[you] vs [rival]” directly is far easier to cite than a homepage that mentions everything. Comparison and alternatives content took 33% of citations in <a href=\"https://somethinginc.com/blog/2026-ai-citation-study/\">Something Inc’s study of 4,100 B2B queries</a>, more than any other format.",
    },
    {
      t: "p",
      c: "<strong>8. Answer first, and use real HTML.</strong> Put the direct answer in the first two sentences under each heading. Use real <code>&lt;table&gt;</code> elements for comparisons and pricing, not images or script-built grids. Use descriptive headings that match the question (“How much does X cost?”), so a crawler can find the passage that answers it.",
    },
    {
      t: "p",
      c: "<strong>9. Show when pages were updated.</strong> AI answers favour fresher sources. In a <a href=\"https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf\">University of Toronto study</a>, the median page GPT-4o cited for consumer-electronics queries was 79.8 days old, against 130.4 days for Google’s results. Put a visible “Updated” date on pricing, comparison and guide pages, and only change it when the content changes.",
    },
    {
      t: "p",
      c: "<strong>10. Keep pages fast and mobile-friendly.</strong> Same as for SEO. Slow pages and broken mobile layouts hurt indexing and users alike.",
    },
    {
      t: "p",
      c: "<strong>11. Link to your key pages.</strong> Pricing, comparison and alternatives pages should be linked from your navigation or from relevant guides. Pages buried four clicks deep get crawled less.",
    },
    { t: "h2", c: "Nice to have: watch AI crawler activity" },
    {
      t: "p",
      c: "<strong>12. Check your logs monthly.</strong> See which AI crawlers visit, which pages they fetch and what status codes they get:",
    },
    {
      t: "code",
      label: "Terminal",
      c: "grep -E \"OAI-SearchBot|PerplexityBot|Claude-SearchBot|bingbot\" access.log | awk '{print $9, $7}' | sort | uniq -c | sort -rn | head -30",
    },
    {
      t: "p",
      c: "Lots of 200s on key pages means you’re fine. 403s point to a bot block, 404s to broken links. On Vercel or Cloudflare, filter request logs by user agent instead.",
    },
    { t: "h2", c: "What you can safely skip" },
    {
      t: "table",
      head: ["Popular advice", "What the evidence says", "Verdict"],
      rows: [
        ["Add an llms.txt file", "97% of llms.txt files got zero requests in a month in Ahrefs’ data; no link to citations in SE Ranking’s 300,000-domain study", "Skip (unless you run developer docs)"],
        ["Add schema markup for AI", "Ahrefs tracked 1,885 pages that added JSON-LD: ChatGPT citations moved 2.2%, within noise", "Skip as an AI tactic"],
        ["Create AI-only content or files", `Google: you <a href="${google}">“don’t need to create new machine readable files, AI text files, or markup”</a>`, "Skip"],
        ["Block all AI bots to protect content", "Blocking search crawlers removes you from AI answers", "Block training only, if anything"],
      ],
    },
    {
      t: "p",
      c: "Schema still has normal SEO uses, such as rich results. Just don’t expect it to change what ChatGPT cites. The llms.txt evidence is laid out in <a href=\"/blog/does-llms-txt-work\">does llms.txt work?</a>",
    },
    { t: "h2", c: "How to run the checklist in one day" },
    {
      t: "table",
      head: ["Time", "Who", "Do"],
      rows: [
        ["Morning (1 hour)", "Marketer", "Checks 1, 2, 4, 5: robots.txt, CDN settings, Search Console, Bing Webmaster Tools"],
        ["Late morning (1 hour)", "Marketer + developer", "Check 3 on your 10 most important pages; list failures"],
        ["Afternoon (2 hours)", "Developer", "Fix rendering on failed pages; set up redirects for broken links (check 6)"],
        ["End of day (1 hour)", "Marketer", "Checks 9 and 11: updated dates and internal links on key pages"],
        ["Monthly (30 min)", "Either", "Check 12: crawler logs; recheck any page that changed"],
      ],
    },
    {
      t: "p",
      c: "Once the technical side is clean, the work moves to content and mentions: publishing pages that answer buyer prompts and getting named on the third-party sites AI trusts. That’s covered in our <a href=\"/blog/how-to-get-cited-by-chatgpt\">ChatGPT citation playbook</a>.",
    },
    { t: "h2", c: "Platform notes: where each check usually breaks" },
    {
      t: "p",
      c: "The same twelve checks fail in different places depending on how your site is built. Start with the row that matches your stack:",
    },
    {
      t: "table",
      head: ["Platform", "Usually fine", "Usually breaks", "Where to fix it"],
      rows: [
        ["WordPress", "Server HTML, sitemaps (via an SEO plugin)", "Security plugins blocking bots; old redirects; “discourage search engines” left on", "Settings → Reading; your security plugin’s bot rules"],
        ["Webflow", "Server HTML, clean markup", "Content inside tabs or sliders loaded later; staging robots.txt", "Site settings → SEO; page settings for noindex"],
        ["Shopify", "Product pages in HTML", "Reviews and FAQs loaded by apps in JavaScript; duplicate collection URLs", "The review app’s settings; theme code for canonical tags"],
        ["Next.js / React", "Static and server-rendered routes", "Client-only pages (“use client” at the top of a route, data fetched in the browser)", "Render on the server or prerender; see the JavaScript guide linked above"],
        ["Single-page apps (Vite, CRA)", "Almost nothing for crawlers", "Every page: the HTML is an empty shell", "Prerender key pages or move marketing pages to a static site"],
        ["Behind Cloudflare or another CDN", "Speed", "Bot fight modes and AI crawler blocks", "Your CDN’s bot and AI crawler settings"],
      ],
    },
    {
      t: "p",
      c: "Help centres and docs often live on a separate platform (Zendesk, Intercom, GitBook). They’re frequently cited, because they answer specific questions, so run checks 1 to 4 on that subdomain too.",
    },
    { t: "h2", c: "A ticket you can hand to your developer" },
    {
      t: "p",
      c: "If you’re a marketer and someone else owns the code, paste this into a ticket. It’s specific enough to be done without a meeting:",
    },
    {
      t: "code",
      label: "Ticket template",
      c: "Title: Make key pages readable by AI search crawlers\n\nPages: /pricing, /compare/*, /alternatives/*, /blog/* (top 10 by traffic)\n\n1. robots.txt: allow OAI-SearchBot, Claude-SearchBot, PerplexityBot (keep current rules for others)\n2. CDN/firewall: allow verified AI search crawlers; confirm with\n   curl -A \"OAI-SearchBot\" <url> returns 200\n3. Rendering: main text, pricing tables and FAQs must appear in the\n   initial HTML (view-source or curl), not only after JavaScript runs\n4. Indexing: no noindex/nosnippet on these pages; all in sitemap.xml\n5. Redirects: 301 any 404ing URLs found in the crawl report (attached)\n\nDone when: curl as each bot returns 200 and the page text is in the response.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t serve crawlers a different page from users. Showing bots special content is cloaking, and search engines treat it as spam.",
        "Don’t hide key answers behind “Read more” buttons that load text later. If it isn’t in the HTML, it isn’t in the answer.",
        "Don’t move pricing into a PDF or an image. Crawlers quote text, and buyers ask about price constantly.",
      ],
    },
    { t: "h2", c: "How to know it worked" },
    {
      t: "p",
      c: "Technical fixes don’t show up as a ranking jump. Look for these signs over the following four to six weeks:",
    },
    {
      t: "ul",
      items: [
        "<strong>Crawler logs:</strong> AI search bots fetching your key pages with 200 responses, more often than before.",
        "<strong>Bing Webmaster Tools:</strong> key pages indexed, and Copilot citations appearing in the AI Performance report.",
        "<strong>Prompt checks:</strong> run your top 20 buyer prompts in ChatGPT and Perplexity monthly and note when your pages start appearing as sources. Our guide to <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">tracking brand mentions in ChatGPT</a> has a free spreadsheet method.",
        "<strong>Referral traffic:</strong> visits from chatgpt.com and perplexity.ai in your analytics.",
      ],
    },
    {
      t: "p",
      c: "If crawlers are fetching your pages and you’re still not cited, the problem has moved from access to content and authority. That’s good news: it means the technical foundation is doing its job.",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Blocking every AI bot at once.</strong> Blocking training crawlers is a choice. Blocking search crawlers takes you out of AI answers.",
        "<strong>Trusting robots.txt alone.</strong> A CDN setting can still block crawlers. Test with a real request.",
        "<strong>Checking only the homepage.</strong> Pricing, comparison and guide pages are the ones that get cited.",
        "<strong>Spending a week on llms.txt and schema.</strong> Do the must-dos first; they’re what decides access.",
        "<strong>Never rechecking.</strong> Redesigns, plugins and new CDN rules quietly undo fixes. Add the checks to your release process.",
      ],
    },
  ],
  faqs: [
    {
      q: "What’s the most important technical fix for AI search?",
      a: "Making sure AI search crawlers can reach your pages: allow them in robots.txt and check your CDN isn’t blocking them. Nothing else matters if they can’t fetch your content.",
    },
    {
      q: "Is technical SEO for AI different from normal technical SEO?",
      a: "Mostly not. Indexing, speed, clean HTML and fixed links help both. The AI-specific parts are allowing AI crawlers, rendering content without JavaScript, and getting indexed in Bing as well as Google.",
    },
    {
      q: "Should I block GPTBot?",
      a: "That’s a training decision, not a search one. Blocking GPTBot stops OpenAI using your content for training but doesn’t affect ChatGPT search, which uses OAI-SearchBot.",
    },
    {
      q: "Do I need schema markup for AI Overviews?",
      a: "No. Google says no special markup is needed to appear in AI Overviews or AI Mode. Schema can still help with rich results in normal search.",
    },
    {
      q: "How often should I run this checklist?",
      a: "Once fully, then monthly for the crawler log check and after any redesign, CMS change or new CDN setting.",
    },
  ],
  sources: [
    { title: "OpenAI crawlers", url: openaiBots, type: "primary", read: "2026-10-26" },
    { title: "Google AI features", url: google, type: "primary", read: "2026-10-26" },
    { title: "Vercel: rise of the AI crawler", url: vercel, type: "platform", read: "2026-10-26" },
    { title: "MIT Technology Review: Cloudflare blocks AI bots by default", url: "https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/", type: "press", read: "2026-10-26" },
    { title: "Something Inc study", url: "https://somethinginc.com/blog/2026-ai-citation-study/", type: "vendor", read: "2026-10-26" },
  ],
  related: ["robots-txt-for-ai-crawlers", "can-chatgpt-read-javascript", "does-llms-txt-work"],
  cta: {
    mid: "Want the checklist run for you? We’ll test crawler access, rendering and indexing on your key pages.",
    title: "Get your technical AI search check, free.",
    text: "We test whether AI crawlers can reach and read your key pages, check Google and Bing indexing, and send you a prioritised fix list.",
    button: "Check my site",
  },
};
