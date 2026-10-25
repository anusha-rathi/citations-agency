import type { Post } from "../../lib/blog";

const vercel = "https://vercel.com/blog/the-rise-of-the-ai-crawler";
const googleJs = "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics";

export const post: Post = {
  slug: "can-chatgpt-read-javascript",
  tracker: "3.5",
  bucket: "technical",
  style: "RS Answer",
  title: "Can ChatGPT read JavaScript? The 2-minute test for your site",
  dek: "ChatGPT’s crawlers fetch your JavaScript files but don’t run them. If your content only appears after JavaScript loads, AI search sees an empty page. Here’s how to check, and how to fix it.",
  description: "Can ChatGPT read JavaScript? No: its crawlers don’t run it. A 2-minute test to see what AI crawlers see on your site, and how to fix it by framework.",
  targetQuery: "can chatgpt read javascript",
  status: "published",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  takeaways: [
    "OpenAI’s and Anthropic’s crawlers download JavaScript files but don’t execute them.",
    "Anything your page only shows after JavaScript runs (text, prices, reviews, tabs) is invisible to them.",
    "Google is different: Googlebot renders JavaScript, so a page can rank on Google and still be blank to ChatGPT.",
    "The 2-minute test: view the page source and search for a sentence from your page.",
    "The fix is server-side rendering or pre-rendering for anything you want cited.",
  ],
  body: [
    {
      t: "callout",
      tone: "answer",
      c: "No. ChatGPT’s crawlers fetch JavaScript files but don’t run them. Vercel’s analysis of its network found GPTBot requested JavaScript files in 11.5% of its fetches and Anthropic’s crawler in 23.8%, and neither executed any of it. If your content is added to the page by JavaScript after it loads, AI crawlers see the empty shell. Check by viewing the page source and searching for a sentence from your page. If it isn’t there, render that content on the server.",
    },
    {
      t: "p",
      c: "Your site looks perfect in a browser, ranks on Google, and still never gets cited by ChatGPT. One of the most common reasons is invisible from the outside: the content is built by JavaScript in the visitor’s browser, and AI crawlers don’t run JavaScript.",
    },
    {
      t: "p",
      c: "Here’s what AI crawlers actually see, a 2-minute test to check your own site, and how to fix it on the most common setups.",
    },
    { t: "h2", c: "What AI crawlers actually do with JavaScript" },
    {
      t: "p",
      c: `<a href="${vercel}">Vercel looked at crawler traffic across its network</a> in late 2024. In one month, GPTBot made 569 million requests and Anthropic’s crawler 370 million. Both downloaded JavaScript files, but neither ran a single line. Vercel’s advice was blunt: “ChatGPT and Claude don’t execute JavaScript, so any important content should be server-rendered.”`,
    },
    { t: "p", c: "In practice that means an AI crawler sees your page the way it looks with JavaScript switched off:" },
    {
      t: "table",
      head: ["Content", "Visible to AI crawlers?"],
      rows: [
        ["Text in the HTML the server sends", "Yes"],
        ["Page title and meta description", "Yes, if they’re in the server HTML"],
        ["Content loaded from an API after the page opens (prices, reviews, product lists)", "No"],
        ["Text inside tabs or accordions that loads on click", "No"],
        ["Single-page apps that render everything in the browser", "Usually nothing but an empty shell"],
        ["Content behind a cookie wall or login", "No"],
      ],
    },
    {
      t: "p",
      c: "The same study found both crawlers hit missing pages a lot: about 34% of their fetches returned 404 errors. So broken links and missing redirects cost you here too.",
    },
    { t: "h2", c: "Why your site can rank on Google and still be blank to ChatGPT" },
    {
      t: "p",
      c: `Google renders JavaScript. Its documentation says <a href="${googleJs}">“a headless Chromium renders the page and executes the JavaScript”</a> before indexing. So a client-rendered page can rank fine on Google, and Google’s AI Overviews can use it, while ChatGPT’s crawler sees nothing.`,
    },
    {
      t: "p",
      c: "Even Google recommends not relying on that: “server-side or pre-rendering is still a great idea because it makes your website faster for users and crawlers, and not all bots can run JavaScript.” AI search crawlers are exactly the bots it means.",
    },
    { t: "h2", c: "Why this costs you more in AI answers than in SEO" },
    {
      t: "p",
      c: "In classic SEO, a page that Google couldn’t fully render might rank a bit lower. In AI answers the cost is sharper: if the crawler can’t read the text, there’s nothing to quote, so the page can’t be a source at all.",
    },
    {
      t: "p",
      c: "And the pages most likely to rely on JavaScript are the ones AI answers lean on most. Comparison and alternatives content took 33% of all citations in <a href=\"https://somethinginc.com/blog/2026-ai-citation-study/\">Something Inc’s study of 4,100 B2B queries</a>, and product pages and docs another 18%. Those are exactly the pages that tend to use interactive pricing tables, feature toggles and tabbed comparisons.",
    },
    {
      t: "p",
      c: "There’s a second cost. When ChatGPT can’t read your pricing page, it doesn’t say “I don’t know your price”. It uses whatever it can find: an old review, a competitor’s comparison, a listicle from last year. Buyers then arrive with the wrong number. Getting your own pages readable is how you make sure the facts AI repeats about you are yours.",
    },
    { t: "h2", c: "The 2-minute test" },
    { t: "p", c: "Run any of these on your three most important pages: the homepage, your main product page, and a comparison or pricing page." },
    {
      t: "p",
      c: "<strong>Test 1: View source (30 seconds).</strong> Open the page, right-click and choose View Page Source (or press Ctrl+U / Cmd+Option+U). Press Ctrl+F and search for a sentence from the middle of the page. Found it? That text is in the server HTML. Not found? It’s loaded by JavaScript.",
    },
    {
      t: "p",
      c: "<strong>Test 2: Turn JavaScript off (1 minute).</strong> In Chrome, open DevTools, press Ctrl+Shift+P (Cmd+Shift+P on Mac), type “Disable JavaScript” and press Enter, then reload. What you see now is roughly what an AI crawler sees.",
    },
    {
      t: "p",
      c: "<strong>Test 3: Fetch it like a crawler (1 minute).</strong> In a terminal, request the page with an AI crawler’s user agent and search the result:",
    },
    {
      t: "code",
      label: "Terminal",
      c: "curl -s -A \"Mozilla/5.0 (compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)\" https://yoursite.com/pricing | grep -i \"a sentence from your page\"",
    },
    {
      t: "p",
      c: "No output means the crawler didn’t get that text. This test also catches a second problem: if the command returns a 403 error or a challenge page, your CDN or firewall is blocking the crawler before it ever sees your HTML.",
    },
    {
      t: "p",
      c: "Write down the result for each page as pass or fail. If all three pages pass, you’re in good shape and can move on to content and mentions. If any fail, the rest of this guide shows what to check and how to fix it.",
    },
    { t: "cta" },
    { t: "h2", c: "What to check on each page" },
    {
      t: "table",
      head: ["Element", "Pass", "Fail"],
      rows: [
        ["Main body text", "In view-source", "Only appears after load"],
        ["Headings (H1, H2s)", "In view-source", "Missing or generic placeholders"],
        ["Prices and plan details", "In view-source", "Loaded from a pricing API or widget"],
        ["Comparison tables", "Real HTML table", "Built by a script or embedded as an image"],
        ["FAQs", "All answers in the HTML", "Answers fetched when a question is clicked"],
        ["Reviews and testimonials", "In the HTML", "Third-party widget loaded by script"],
        ["Internal links", "Normal <code>&lt;a href&gt;</code> links", "Click handlers with no href"],
      ],
    },
    {
      t: "p",
      c: "Pricing and comparison pages are where a failure hurts most, because they’re exactly the pages AI answers cite for buying questions. Fix those first.",
    },
    { t: "h2", c: "How to fix it, by setup" },
    {
      t: "p",
      c: "<strong>Next.js, Nuxt, SvelteKit, Remix, Astro.</strong> These frameworks render on the server by default. The problems usually come from components marked as client-only that fetch their own data. Move data fetching to the server (server components, <code>getServerSideProps</code>, loaders) or pre-render the page at build time.",
    },
    {
      t: "p",
      c: "<strong>React, Vue or Angular single-page apps.</strong> Out of the box these send an almost empty HTML file. Options, from most to least effort: move to a framework with server rendering, add server-side rendering to the existing app, or use a pre-rendering service that serves static HTML snapshots to crawlers.",
    },
    {
      t: "p",
      c: "<strong>WordPress, Webflow, Shopify, Squarespace.</strong> These mostly serve real HTML already. Problems come from plugins and embeds: pricing tables, review widgets, tabbed content and page builders that load content with scripts. Check those specific blocks with view-source.",
    },
    {
      t: "p",
      c: "<strong>Any setup.</strong> Keep important text out of images, avoid “load more” buttons for key content, and make sure tabs and accordions contain their text in the HTML even when collapsed.",
    },
    {
      t: "p",
      c: "Whichever route you take, you don’t have to give up interactivity. The goal is for the content to exist in the first HTML response; JavaScript can still add filters, toggles and animations on top. A pricing table that’s real HTML and becomes interactive once scripts load works for buyers, Google and AI crawlers alike.",
    },
    { t: "h2", c: "Hidden culprits: patterns that quietly empty your page" },
    {
      t: "p",
      c: "Even sites that render on the server often have a few blocks that don’t. These are the usual suspects:",
    },
    {
      t: "ul",
      items: [
        "<strong>Skeleton loaders.</strong> Grey placeholder boxes that get replaced by real content after an API call. The crawler only sees the boxes.",
        "<strong>Personalisation and A/B testing tools.</strong> Scripts that swap headlines or pricing after load. The crawler sees the original, or nothing.",
        "<strong>Consent and cookie managers</strong> that hold back page content until a visitor clicks “accept”.",
        "<strong>Lazy-loaded sections</strong> that only load when scrolled into view, such as feature grids, logos and FAQs further down the page.",
        "<strong>Language switching in the browser,</strong> where translated text is loaded by script rather than served on its own URL.",
        "<strong>Embedded comparison or pricing widgets</strong> from third-party tools, which often render inside an iframe or with their own JavaScript.",
      ],
    },
    {
      t: "p",
      c: "Run the view-source test on a page you think is fine and check each of these blocks. It’s common to find the hero and intro rendered properly while the comparison table or FAQ halfway down the page is missing.",
    },
    { t: "h2", c: "How to brief your developer" },
    {
      t: "p",
      c: "“Make it work for AI” isn’t a ticket a developer can act on. Give them the specific pages, the specific content, and a test they can run themselves:",
    },
    {
      t: "code",
      label: "Ticket template",
      c: "Title: Render key content in server HTML so AI crawlers can read it\n\nWhy: AI search crawlers (OAI-SearchBot, PerplexityBot, Claude-SearchBot) don’t run JavaScript. Content added after load is invisible to them.\n\nPages:\n- /pricing: plan names, prices and feature table\n- /compare/[rival]: comparison table and verdict\n- /faq: all answers (keep collapsed with CSS if needed)\n\nDone when: each item above appears in View Page Source, and\ncurl -A \"OAI-SearchBot\" https://yoursite.com/pricing | grep \"[plan name]\"\nreturns a match with a 200 status.",
    },
    {
      t: "p",
      c: "Include the “done when” test. It turns a vague request into something with a clear finish line, and it gives you a way to check the work.",
    },
    { t: "h2", c: "Keep it fixed: add the check to every release" },
    {
      t: "p",
      c: "Rendering problems come back. A new pricing widget, a redesign or a plugin update can quietly move content back into JavaScript. Two habits stop that:",
    },
    {
      t: "ol",
      items: [
        "<strong>Add the view-source check to your launch checklist</strong> for any page that matters for buying questions: pricing, comparisons, product pages and key guides.",
        "<strong>Check your server logs monthly</strong> for AI crawler visits and their status codes. Lots of 200s on your key pages is good. 403s mean a bot block; 404s mean broken links worth redirecting.",
      ],
    },
    {
      t: "code",
      label: "Terminal",
      c: "# AI crawler requests to your site, with status codes\ngrep -E \"OAI-SearchBot|GPTBot|PerplexityBot|ClaudeBot|Claude-SearchBot\" access.log | awk '{print $9, $7}' | sort | uniq -c | sort -rn | head -30",
    },
    { t: "h2", c: "Two more things that block AI crawlers" },
    {
      t: "ol",
      items: [
        "<strong>robots.txt.</strong> OpenAI says sites that block OAI-SearchBot <a href=\"https://developers.openai.com/api/docs/bots\">“will not be shown in ChatGPT search answers”</a>. Check your robots.txt allows it, along with PerplexityBot and Claude-SearchBot.",
        "<strong>CDN and firewall bot settings.</strong> Cloudflare and other providers can block AI crawlers even when robots.txt allows them. Test 3 above shows you whether that’s happening.",
      ],
    },
    {
      t: "p",
      c: "And skip llms.txt as a workaround. It doesn’t fix rendering, and <a href=\"/blog/does-llms-txt-work\">four studies found AI crawlers almost never read it</a>.",
    },
    { t: "h2", c: "A 30-minute action plan" },
    {
      t: "ol",
      items: [
        "Run Test 1 on your homepage, product, pricing and top comparison page (5 min).",
        "Run Test 3 on the same pages to rule out CDN blocking (5 min).",
        "List every element that failed, using the table above (10 min).",
        "Send the list to your developer with “render this on the server” as the ask (5 min).",
        "Recheck in two weeks, then run your buyers’ prompts in ChatGPT to see if those pages start getting cited (5 min). Our <a href=\"/blog/how-to-get-cited-by-chatgpt\">citation playbook</a> covers what to do next.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Assuming “it ranks on Google” means it’s fine.</strong> Google renders JavaScript; AI crawlers don’t.",
        "<strong>Testing only the homepage.</strong> The pages AI cites for buying questions are usually deeper: pricing, comparisons, guides.",
        "<strong>Putting prices in a widget.</strong> If buyers ask ChatGPT about your pricing, it needs to read your pricing page.",
        "<strong>Hiding FAQs behind clicks.</strong> Answers that load on click are invisible to crawlers. Put them in the HTML and collapse them with CSS.",
        "<strong>Fixing rendering but leaving a bot block in place.</strong> Always run the crawler test too.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does ChatGPT execute JavaScript when it browses?",
      a: "Its crawlers don’t. Vercel found GPTBot downloads JavaScript files but never runs them. Treat any content that depends on JavaScript as invisible to ChatGPT search.",
    },
    {
      q: "Does Perplexity or Claude read JavaScript?",
      a: "Vercel found Anthropic’s crawler behaves the same as OpenAI’s: it fetches JavaScript files but doesn’t execute them. Assume the same for other AI crawlers unless their documentation says otherwise.",
    },
    {
      q: "Is my site fine if Google indexes it properly?",
      a: "Not necessarily. Google renders JavaScript with headless Chromium, so it can see content AI crawlers miss. Run the view-source test to be sure.",
    },
    {
      q: "Do I need to rebuild my whole site?",
      a: "Usually not. Start with the pages AI answers cite for buying questions: pricing, comparisons and key guides. Rendering those on the server fixes most of the problem.",
    },
    {
      q: "Will server-side rendering also help SEO?",
      a: "Yes. Google recommends server-side or pre-rendering because it makes sites faster for users and crawlers, so the same fix helps both.",
    },
  ],
  sources: [
    { title: "Vercel: The rise of the AI crawler", url: vercel, type: "platform", read: "2026-10-25" },
    { title: "Google: JavaScript SEO basics", url: googleJs, type: "primary", read: "2026-10-25" },
    { title: "OpenAI crawlers", url: "https://developers.openai.com/api/docs/bots", type: "primary", read: "2026-10-25" },
  ],
  related: ["does-llms-txt-work", "how-to-get-cited-by-chatgpt", "how-to-track-brand-mentions-in-chatgpt"],
  cta: {
    mid: "Not sure what AI crawlers see on your pricing and comparison pages? We’ll test them and send you the list of what’s invisible.",
    title: "Find out what ChatGPT can’t see on your site.",
    text: "We test your key pages the way AI crawlers fetch them, check robots.txt and CDN blocking, and send your developer a clear list of what to render on the server.",
    button: "Test my site for free",
  },
};
