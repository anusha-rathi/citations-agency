import type { Post } from "../../lib/blog";

const bots = "https://developers.openai.com/api/docs/bots";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const vercel = "https://vercel.com/blog/the-rise-of-the-ai-crawler";
const somethingInc = "https://somethinginc.com/blog/2026-ai-citation-study/";

export const post: Post = {
  slug: "why-is-my-brand-not-in-chatgpt",
  tracker: "2.6",
  bucket: "cited",
  style: "RS Answer",
  title: "Why is my brand not in ChatGPT? 10 things to check",
  dek: "If ChatGPT never mentions you, the cause is usually one of ten things, from a blocked crawler to a missing comparison page. Here’s how to check each one, in order, and what to fix.",
  description: "Why is my brand not in ChatGPT answers? Ten causes to check in order, from blocked crawlers and JavaScript pages to missing mentions, with the fix for each.",
  targetQuery: "why is my brand not in chatgpt",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Your brand is usually missing from ChatGPT for one of ten reasons: OAI-SearchBot is blocked, your CDN blocks AI crawlers, your content only appears after JavaScript runs, you’re not indexed in Bing, you have no page that answers the question asked, your pages bury the answer, your information is out of date, you’re absent from the review sites and roundups ChatGPT cites, people describe you inconsistently, or you’re checking the wrong prompts. Work through them in this order. The first four are technical and fast; the rest take longer but matter more.",
    },
    {
      t: "p",
      c: "You ask ChatGPT for the best tools in your category and your competitors come up. You don’t. You rephrase, try again, and get the same list. It’s frustrating, and it’s almost always fixable once you know which of the usual causes applies to you.",
    },
    {
      t: "p",
      c: "Work through these ten checks in order. Each has a quick test and a fix.",
    },
    { t: "h2", c: "First: are you checking properly?" },
    {
      t: "p",
      c: "Before you fix anything, make sure the problem is real. ChatGPT gives different answers to different phrasings and sometimes between runs of the same question. Check like this:",
    },
    {
      t: "ol",
      items: [
        "Write 15 to 20 questions a real buyer would ask, from narrow (“[category] for [niche] with [integration]”) to broad (“best [category]”).",
        "Ask each in ChatGPT with search turned on, in a fresh chat, two or three times.",
        "Note whether you’re named, whether your site is cited, and who’s named instead.",
      ],
    },
    {
      t: "p",
      c: "If you appear for narrow questions but not broad ones, you have a different problem from a brand that appears nowhere. Keep the results in a spreadsheet with the date; you’ll need them for checks 5 to 10, and again in a month to see what changed.",
    },
    { t: "h2", c: "1. OAI-SearchBot is blocked" },
    {
      t: "p",
      c: `<strong>Test:</strong> open <code>yoursite.com/robots.txt</code> and search for “OAI-SearchBot”, then check whether <code>User-agent: *</code> disallows everything. OpenAI says sites that block OAI-SearchBot <a href="${bots}">won’t be shown in ChatGPT search answers</a>.`,
    },
    {
      t: "p",
      c: "<strong>Fix:</strong> add a group that allows OAI-SearchBot. Blocking GPTBot is fine if you want to opt out of training; it doesn’t affect search. See our <a href=\"/blog/gptbot-vs-oai-searchbot\">GPTBot vs OAI-SearchBot guide</a>.",
    },
    { t: "h2", c: "2. Your CDN or firewall blocks AI crawlers" },
    {
      t: "p",
      c: "<strong>Test:</strong> run <code>curl -s -o /dev/null -w \"%{http_code}\" -A \"OAI-SearchBot\" https://yoursite.com/</code>. A 403 or 503 means something in front of your site is blocking it, even if robots.txt allows it.",
    },
    {
      t: "p",
      c: "<strong>Fix:</strong> open your CDN’s bot or AI crawler settings and allow verified AI search crawlers. Some CDNs block AI crawlers by default on new domains.",
    },
    { t: "h2", c: "3. Your content only appears after JavaScript runs" },
    {
      t: "p",
      c: `<strong>Test:</strong> run <code>curl -s https://yoursite.com/pricing | grep -i "a phrase from the page"</code>. No match means crawlers see an empty page. <a href="${vercel}">Vercel’s analysis</a> found OpenAI’s and Anthropic’s crawlers didn’t execute JavaScript.`,
    },
    {
      t: "p",
      c: "<strong>Fix:</strong> render key pages on the server or prerender them. Details by framework are in <a href=\"/blog/can-chatgpt-read-javascript\">can ChatGPT read JavaScript?</a>",
    },
    { t: "h2", c: "4. You’re not indexed in Bing" },
    {
      t: "p",
      c: `<strong>Test:</strong> search <code>site:yoursite.com</code> on bing.com, or check Bing Webmaster Tools. OpenAI says ChatGPT search uses <a href="${openaiSearch}">third-party search providers, including Microsoft</a>.`,
    },
    {
      t: "p",
      c: "<strong>Fix:</strong> verify in Bing Webmaster Tools (import from Search Console), submit your sitemap and turn on IndexNow. Our <a href=\"/blog/bing-webmaster-tools-ai-performance\">Bing setup guide</a> takes 30 minutes.",
    },
    { t: "cta" },
    { t: "h2", c: "5. You have no page that answers the question" },
    {
      t: "p",
      c: "<strong>Test:</strong> for each prompt you’re missing from, ask: which page on our site answers exactly this? If the answer is “the homepage, sort of”, that’s the problem.",
    },
    {
      t: "p",
      c: `<strong>Fix:</strong> create the page. Comparison and alternatives content took 33% of citations in <a href="${somethingInc}">Something Inc’s study of 4,100 B2B queries</a>, more than any other format. Start with:`,
    },
    {
      t: "ul",
      items: [
        "A comparison page against the rival ChatGPT names most often.",
        "An alternatives page for the category leader.",
        "A use-case page for your best-fit customer (“[category] for [niche]”).",
        "A pricing page with real numbers in an HTML table.",
      ],
    },
    { t: "h2", c: "6. Your pages bury the answer" },
    {
      t: "p",
      c: "<strong>Test:</strong> read the first two sentences under each heading on your key pages. Do they answer the heading’s question? Or are they scene-setting (“In today’s fast-moving world…”)?",
    },
    {
      t: "p",
      c: "<strong>Fix:</strong> rewrite each section so the answer comes first, with numbers and specifics, then the explanation. Use headings phrased as the questions buyers ask. AI tools quote passages, and the first lines of a section are the easiest to quote.",
    },
    { t: "h2", c: "7. Your information is out of date" },
    {
      t: "p",
      c: `<strong>Test:</strong> check whether your pricing, features and comparison pages show a recent “Updated” date and current facts. AI answers favour recent sources: in a <a href="${toronto}">University of Toronto study</a>, the median page GPT-4o cited for consumer-electronics queries was 79.8 days old, against 130.4 days for Google’s results.`,
    },
    {
      t: "p",
      c: "<strong>Fix:</strong> review key pages monthly, update facts, and show the date. Don’t change the date without changing the content.",
    },
    { t: "h2", c: "8. You’re missing from the sources ChatGPT cites" },
    {
      t: "p",
      c: "<strong>Test:</strong> for the prompts you’re missing from, open every source ChatGPT cited. Are you listed on those pages? Usually you’ll find roundups, review sites and Reddit threads that name your competitors and not you.",
    },
    {
      t: "p",
      c: `<strong>Fix:</strong> get onto those pages. This is the most important check for broad category questions. <a href="${brands}">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated 0.664 with AI Overview visibility, three times more than backlinks, and in the Toronto study 57% of the sources GPT-4o cited were independent publishers and review sites.`,
    },
    {
      t: "ol",
      items: [
        "Email roundup authors with a short, specific pitch: who you’re best for and what’s changed recently.",
        "Complete your review profiles and ask recent customers for honest reviews.",
        "Answer questions in the Reddit threads and communities ChatGPT cites, with disclosure.",
      ],
    },
    { t: "h2", c: "9. People describe you inconsistently" },
    {
      t: "p",
      c: "<strong>Test:</strong> compare how your site, review profiles, directory listings, LinkedIn and press coverage describe you. If one says “HR software”, another “people analytics” and a third “employee engagement”, ChatGPT may not connect you to any one category strongly.",
    },
    {
      t: "p",
      c: "<strong>Fix:</strong> write one plain description of what you do and who it’s for, and use it everywhere you control. Ask partners and directories to update theirs.",
    },
    { t: "h2", c: "10. You’re checking the wrong prompts" },
    {
      t: "p",
      c: "<strong>Test:</strong> are your test prompts the questions buyers actually ask, or the keywords you’d like to rank for? “Best CRM” is a tough fight for a new tool; “CRM for small property management companies that use QuickBooks” might already include you.",
    },
    {
      t: "p",
      c: "<strong>Fix:</strong> build your prompt list from sales calls, support tickets, reviews and Reddit questions. Our <a href=\"/blog/prompt-research-for-ai-search\">prompt research guide</a> shows how.",
    },
    { t: "h2", c: "The diagnosis in one table" },
    {
      t: "table",
      head: ["#", "Cause", "Test", "Time to fix"],
      rows: [
        ["1", "OAI-SearchBot blocked", "robots.txt", "15 min"],
        ["2", "CDN blocks AI crawlers", "curl as OAI-SearchBot", "15 min"],
        ["3", "JavaScript-only content", "curl and grep for page text", "Hours to weeks"],
        ["4", "Not in Bing", "site: search on Bing", "30 min, then days to index"],
        ["5", "No page for the question", "Which page answers this prompt?", "Days per page"],
        ["6", "Answer buried", "Read first two sentences per section", "Hours per page"],
        ["7", "Out of date", "Check facts and dates", "Hours, then monthly"],
        ["8", "Missing from cited sources", "Open ChatGPT’s sources", "Weeks to months"],
        ["9", "Inconsistent descriptions", "Compare profiles", "A few hours"],
        ["10", "Wrong prompts", "Compare with real buyer questions", "A few hours"],
      ],
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you sell bookkeeping software for restaurants. You test 15 prompts and appear in none. Working through the checks:",
    },
    {
      t: "ul",
      items: [
        "<strong>Checks 1–2:</strong> robots.txt is fine, but the curl test returns a 403. Your CDN’s bot protection is blocking AI crawlers. Fixed in 15 minutes.",
        "<strong>Check 3:</strong> your pricing page loads its plan table with JavaScript. The HTML has the heading but no prices. Your developer moves the table into the server-rendered page.",
        "<strong>Check 4:</strong> you’ve never verified Bing. You import from Search Console and submit the sitemap.",
        "<strong>Check 5:</strong> ChatGPT’s answers for “bookkeeping software for restaurants” cite two roundups and a comparison of the category leader with a rival. You have no comparison or alternatives page. You write both.",
        "<strong>Check 8:</strong> neither roundup lists you. You email both authors with a short note on what you do for restaurants specifically.",
      ],
    },
    {
      t: "p",
      c: "Six weeks later, you appear for four of the narrower prompts, cited from your new comparison page. One roundup has added you. The broad “best bookkeeping software” prompt still doesn’t include you, and that’s expected at this stage. Keep building mentions and re-check monthly.",
    },
    { t: "h2", c: "If you only have one week" },
    {
      t: "ol",
      items: [
        "<strong>Day 1:</strong> checks 1 to 4. Fix anything blocking access.",
        "<strong>Day 2:</strong> run your prompt list and save every source ChatGPT cites.",
        "<strong>Days 3–4:</strong> write or rewrite the one page that answers your most valuable missing prompt, answer-first, with a table.",
        "<strong>Day 5:</strong> contact the authors of the two most-cited roundups that don’t list you, and update your review profiles.",
      ],
    },
    {
      t: "p",
      c: "That covers the most common blockers and starts the slower work. Everything else can follow over the next month.",
    },
    { t: "h2", c: "Who needs to be involved" },
    {
      t: "table",
      head: ["Check", "Usually owned by"],
      rows: [
        ["1–4: access, CDN, rendering, Bing", "Developer or whoever manages hosting"],
        ["5–7: pages, structure, freshness", "Content or product marketing"],
        ["8: mentions on other sites", "PR, partnerships or community"],
        ["9: consistent descriptions", "Marketing lead"],
        ["10: prompt list", "Marketing with input from sales and support"],
      ],
    },
    { t: "h2", c: "If ChatGPT mentions you without searching" },
    {
      t: "p",
      c: "Some answers come from the model’s training rather than a live search, and show no sources. Checks 1 to 4 don’t affect those. What does: how often and how consistently the web described you before the model was trained (checks 8 and 9), and whether you let training crawlers like GPTBot read your own pages. Changes here show up only when new models are released, so think in months, not weeks.",
    },
    { t: "h2", c: "When the answer is wrong, not missing" },
    {
      t: "p",
      c: "Sometimes ChatGPT does mention you, but gets something wrong: old pricing, a feature you removed, the wrong audience. That’s a variation of the same problem, and the same checks apply. Open the sources cited next to the wrong statement. Usually it’s an outdated review, an old roundup or a page on your own site that was never updated.",
    },
    {
      t: "p",
      c: "Fix your own pages first, then ask third-party authors to update theirs, with a short note showing what changed and when. For answers with no sources, consistent, current information across your site and profiles is what eventually corrects future models.",
    },
    { t: "h2", c: "What to expect after fixing" },
    {
      t: "ul",
      items: [
        "<strong>Technical fixes (1–4):</strong> ChatGPT search can reach you within days. Citations follow as pages are crawled and indexed, usually over a few weeks.",
        "<strong>Content fixes (5–7):</strong> new or rewritten pages can be cited within weeks for the specific questions they answer.",
        "<strong>Mention fixes (8–9):</strong> the slowest and the most powerful. Expect months before broad category answers change.",
      ],
    },
    {
      t: "p",
      c: "Re-run your prompt list monthly in the same way, so you can see which fixes worked. Our guide to <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">tracking brand mentions in ChatGPT</a> has a free template.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t pay for “ChatGPT ranking” or “guaranteed AI placement”. No one controls ChatGPT’s answers.",
        "Don’t publish dozens of thin AI-written pages to “cover” every prompt. Clear, specific pages win.",
        "Don’t fake reviews or Reddit posts. Platforms remove them, and the mentions disappear with them.",
        "Don’t judge from a single prompt run. Answers vary.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Jumping to content before checking access.</strong> A blocked crawler makes every other fix pointless.",
        "<strong>Only testing broad prompts.</strong> You may already appear for specific ones, which tells you what’s working.",
        "<strong>Ignoring what ChatGPT cites.</strong> The sources tell you exactly where you need to be.",
        "<strong>Fixing the site and ignoring mentions.</strong> For category questions, other people’s pages matter most.",
        "<strong>Changing your description every quarter.</strong> Consistency is how AI learns what you are.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why doesn’t ChatGPT mention my company?",
      a: "Usually because ChatGPT search can’t reach or read your pages, you have no page that answers the question asked, or you’re missing from the review sites, roundups and threads it cites. Check access first, then content, then mentions.",
    },
    {
      q: "How do I check if ChatGPT can access my website?",
      a: "Make sure robots.txt allows OAI-SearchBot, test with curl using the OAI-SearchBot user agent (you want a 200), and confirm your page text appears in the raw HTML.",
    },
    {
      q: "How long does it take to appear in ChatGPT after fixing issues?",
      a: "Technical fixes can take effect within days, and new pages can be cited within weeks for specific questions. Appearing in broad category answers usually takes months of building mentions.",
    },
    {
      q: "Does ChatGPT favour big brands?",
      a: "Big brands are mentioned in more places, which helps them in broad questions. Smaller brands can win specific questions where they have the clearest answer and are listed on the sources cited.",
    },
    {
      q: "Can I pay to appear in ChatGPT answers?",
      a: "Not in organic answers. You can influence what ChatGPT finds and cites by fixing access, publishing clear pages and earning mentions on the sites it trusts.",
    },
  ],
  sources: [
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-10-27" },
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-27" },
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-27" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-27" },
    { title: "Vercel: rise of the AI crawler", url: vercel, type: "platform", read: "2026-10-27" },
    { title: "Something Inc study", url: somethingInc, type: "vendor", read: "2026-10-27" },
  ],
  related: ["why-chatgpt-recommends-your-competitor", "how-to-get-cited-by-chatgpt", "can-a-new-website-show-up-in-chatgpt"],
  cta: {
    mid: "Want us to run all ten checks for you? We’ll tell you exactly why ChatGPT isn’t mentioning you.",
    title: "Find out why ChatGPT isn’t mentioning you.",
    text: "We run all ten checks on your site and your buyer prompts, show who ChatGPT cites instead, and give you a fix list in order of impact.",
    button: "Diagnose my brand",
  },
};
