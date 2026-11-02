import type { Post } from "../../lib/blog";

const bots = "https://developers.openai.com/api/docs/bots";
const sparktoro = "https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076";
const cites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";
const grader = "https://www.hubspot.com/aeo-grader";

export const post: Post = {
  slug: "ai-visibility-audit",
  tracker: "7.10",
  bucket: "buying",
  style: "RS Playbook",
  title: "AI visibility audit: how to run one in an afternoon (free template)",
  dek: "Find out whether AI assistants can read your site, whether they name you, which sources they trust instead, and what to fix first. Six steps, a scoring sheet and no paid tool required.",
  description: "Run an AI visibility audit yourself: check crawler access, test 20 buyer prompts, map cited sources, score the results and build a prioritised 30-day fix list.",
  targetQuery: "ai visibility audit",
  status: "published",
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "An AI visibility audit shows whether AI assistants can read your site, how often they name you for buyer questions, which sources they cite, and what to fix first. You can run one in about four hours: check crawler access, build a list of 20 prompts, run each three times across ChatGPT, Perplexity and Google, record mentions and citations in a sheet, map the sources you’re missing from, then rank your fixes. Repeat it monthly with the same prompts so you can see what changed.",
    },
    {
      t: "p",
      c: "Most companies learn their AI visibility from a single screenshot: someone asks ChatGPT about the category, and the brand does or doesn’t show up. A screenshot can’t tell you why, or whether it would happen again. A short, repeatable audit can. This one is for founders and marketers who want a real baseline before buying a tool or hiring anyone.",
    },
    { t: "h2", c: "What you’ll need" },
    {
      t: "table",
      head: ["Item", "Time", "Notes"],
      rows: [
        ["A spreadsheet", "5 minutes", "Use the template below"],
        ["List of buyer questions", "45 minutes", "From sales calls, support tickets and comparison searches"],
        ["ChatGPT, Perplexity, Google", "90 minutes", "Fresh chats, logged out or memory off where you can"],
        ["Search Console and Bing Webmaster Tools", "30 minutes", "To check indexing"],
        ["Analytics access", "15 minutes", "To check referral traffic"],
        ["Time to write up findings", "45 minutes", "The fix list is the actual output"],
      ],
    },
    { t: "h2", c: "Step 1: Check that AI tools can reach your site" },
    {
      t: "p",
      c: `Do this first, because nothing else matters if crawlers are blocked. OpenAI says sites that block OAI-SearchBot <a href="${bots}">won’t be shown in ChatGPT search answers</a>.`,
    },
    {
      t: "code",
      label: "Test your site from the command line",
      c: "curl -s https://yoursite.com/robots.txt\n\n# Is your server blocking the crawler? 200 = reachable, 403 or 503 = blocked\ncurl -s -o /dev/null -w \"%{http_code}\\n\" -A \"OAI-SearchBot\" https://yoursite.com/\n\n# Is your pricing visible without JavaScript?\ncurl -s https://yoursite.com/pricing | grep -i \"per month\"",
    },
    {
      t: "ul",
      items: [
        "Check robots.txt for rules on OAI-SearchBot, PerplexityBot, Claude-SearchBot and Googlebot. Copy a fix from our <a href=\"/blog/robots-txt-for-ai-crawlers\">robots.txt templates</a>.",
        "Check your CDN settings. Some AI bot settings block more than you’d expect, as our <a href=\"/blog/cloudflare-ai-bot-settings\">Cloudflare guide</a> explains.",
        "Check that your key pages appear in both Google and Bing. Search <code>site:yoursite.com/pricing</code> on each.",
        "Check rendering with our <a href=\"/blog/can-chatgpt-read-javascript\">two-minute JavaScript test</a>.",
      ],
    },
    { t: "h2", c: "Step 2: Build a list of 20 prompts" },
    {
      t: "p",
      c: "Use the questions real buyers ask, in full sentences. Spread them across the buying journey, so a good showing on your brand name doesn’t hide a gap everywhere else. Our <a href=\"/blog/prompt-research-for-ai-search\">prompt research guide</a> covers this in depth.",
    },
    {
      t: "table",
      head: ["Type", "How many", "Example"],
      rows: [
        ["Category", "6", "What’s the best inventory software for a small Shopify store?"],
        ["Problem", "5", "How do I stop overselling across two sales channels?"],
        ["Comparison", "4", "[Competitor A] vs [Competitor B] for a small team"],
        ["Alternatives", "3", "What are cheaper alternatives to [Competitor A]?"],
        ["Brand", "2", "Is [your brand] any good? What does it cost?"],
      ],
    },
    { t: "h2", c: "Step 3: Run each prompt three times" },
    {
      t: "p",
      c: `Answers change from run to run, which is why one try proves little. In a <a href="${sparktoro}">SparkToro and Gumshoe study of 2,961 responses</a>, the same brand list came back less than 1% of the time, and the same list in the same order less than 0.1%. So run every prompt three times in a new chat, and look at how often you’re named, not where you’re placed.`,
    },
    {
      t: "ol",
      items: [
        "Open a fresh chat for each run, with memory off where you can.",
        "Use ChatGPT with search on, Perplexity, and Google for AI Overviews or AI Mode.",
        "Don’t mention your brand unless the prompt is a brand prompt.",
        "Record the answer before moving on, and save the date. Answers change.",
      ],
    },
    {
      t: "code",
      label: "Audit sheet (one row per prompt, per tool)",
      c: "Prompt | Type | Tool | Date\nNamed in run 1? | Run 2? | Run 3? | Mention rate (0-3)\nOur page cited? (URL)\nCompetitors named\nSources cited (URLs)\nAccurate? (Y/N, and what was wrong)\nSentiment (positive / neutral / negative)",
    },
    { t: "cta" },
    { t: "h2", c: "Step 4: Check that what they say is true" },
    {
      t: "p",
      c: "Being named wrongly can do more harm than not being named. For every answer that mentions you, compare it against your current facts and note where it’s wrong and where the error may have come from.",
    },
    {
      t: "table",
      head: ["Check", "Common problem", "Where to fix it"],
      rows: [
        ["Pricing", "Old prices or a “free” plan you’ve removed", "Your pricing page, then third-party listings"],
        ["Features", "Missing features, or wrong integrations", "Product pages and docs"],
        ["Audience", "Described for the wrong size of company", "Homepage and comparison pages"],
        ["Competitor comparison", "Outdated comparison pages", "Your own comparison page, then outreach to the author"],
        ["Reputation", "One old complaint repeated as fact", "Reply in the source thread, and publish the current facts"],
      ],
    },
    { t: "h2", c: "Step 5: Map the sources AI trusts in your category" },
    {
      t: "p",
      c: "Collect every cited URL from step 3, then count how often each domain shows up. This is the most useful sheet in the whole audit: it tells you where to work, beyond your own site.",
    },
    {
      t: "table",
      head: ["Source type", "Example", "What to do"],
      rows: [
        ["Your own pages", "Your comparison or pricing page", "Keep them accurate, and add what’s missing"],
        ["Competitor pages", "Their “best X” guide", "Publish a more useful page for the same question"],
        ["Comparison and review sites", "Roundups, G2, Capterra", "Ask to be added, and fill in your profile"],
        ["Communities", "Reddit threads, forums", "Join in honestly. See our <a href=\"/blog/reddit-seo\">Reddit SEO playbook</a>"],
        ["Press and publications", "Trade articles", "Pitch data or expert commentary"],
      ],
    },
    {
      t: "p",
      c: `Don’t assume your Google rankings will carry over. <a href="${overlap}">Ahrefs’ study of 15,000 queries</a> found about 8% of links cited by ChatGPT ranked in Google’s top 10 for the same query, against 28.6% for Perplexity. Also compare your pages with the ones cited. In <a href="${cites}">Ahrefs’ study of 1.4 million prompts</a>, ChatGPT cited about half of the URLs it retrieved, and cited pages had titles closer in meaning to the prompt.`,
    },
    { t: "h2", c: "Step 6: Score it and pick your fixes" },
    {
      t: "table",
      head: ["Area", "0 points", "1 point", "2 points"],
      rows: [
        ["Crawler access", "Blocked", "Partly blocked or unverified", "Clear on all key pages"],
        ["Indexing", "Missing from Bing or Google", "Some key pages missing", "All key pages in both"],
        ["Category mentions", "Named in under 10% of runs", "10–40%", "Over 40%"],
        ["Comparison mentions", "Rarely named against competitors", "Sometimes", "Usually"],
        ["Citations", "Own pages never cited", "Cited a few times", "Cited regularly"],
        ["Accuracy", "Major errors", "Minor errors", "Accurate"],
        ["Off-site presence", "Absent from cited sources", "On a few", "On most"],
      ],
      caption: "Our suggested scale. The score is for comparing yourself month to month, not against other companies.",
    },
    {
      t: "p",
      c: "Then fix in this order. Earlier items take less work and can block everything after them.",
    },
    {
      t: "ol",
      items: [
        "<strong>Access problems.</strong> Crawlers, CDN rules and indexing. Usually hours of work.",
        "<strong>Wrong facts.</strong> Correct your pricing and product pages, then the third-party pages being cited.",
        "<strong>Weak key pages.</strong> Title them by the question, and answer in the first sentence. Our <a href=\"/blog/how-to-structure-a-blog-post-for-ai\">page structure guide</a> shows how.",
        "<strong>Missing pages.</strong> Build the comparison and “best for” pages that prompts keep surfacing.",
        "<strong>Off-site gaps.</strong> Work through your list of cited sources, starting with the most repeated domains.",
      ],
    },
    { t: "h2", c: "Check your traffic and write it up" },
    {
      t: "p",
      c: "Look at referral traffic in analytics from chatgpt.com, perplexity.ai, copilot.microsoft.com and gemini.google.com. Our <a href=\"/blog/chatgpt-traffic-in-ga4\">GA4 guide</a> shows how to isolate it. Numbers may be small, and some visits appear as direct, so treat traffic as one signal among several. Then write up a single page your team can act on:",
    },
    {
      t: "code",
      label: "One-page audit summary",
      c: "Date and prompts tested: [20 prompts, 3 tools, 3 runs each]\nHeadline: Named in [X]% of category runs; top competitor named in [Y]%\nBlockers: [crawler, indexing or rendering issues]\nErrors: [what AI gets wrong about us]\nTop 5 cited domains we're missing from: [list]\nThis month's fixes: [owner and date for each]\nNext audit date: [same prompts, one month from now]",
    },
    { t: "h2", c: "Quick checks and tools" },
    {
      t: "p",
      c: `For a fast second opinion, <a href="${grader}">HubSpot’s AI Search Grader</a> is a free one-time check across OpenAI, Perplexity and Gemini. If you repeat the audit every month and the manual work starts eating your time, compare the <a href="/blog/best-ai-visibility-tools">AI visibility tools</a>. Use the audit first, so you know which prompts to load and which numbers matter.`,
    },
    {"t": "h2", "c": "A worked example"},
    {"t": "p", "c": "Say you sell inventory software. You run 20 prompts three times each across three tools, which gives you 180 runs. Of the 99 category and problem runs, you’re named in 10, a mention rate of about 10%. Your top competitor is named in 50, or about 50%. For brand prompts you’re named every time, which is why nobody at your company had noticed a problem."},
    {"t": "p", "c": "Your cited-source list shows why. One roundup, one review site and two Reddit threads appear again and again, and you’re absent from three of the four. ChatGPT also says you have a free plan that you removed last year. Your site is clear to crawlers, so access isn’t the issue."},
    {"t": "p", "c": "That gives you a short, specific fix list: correct the pricing page and ask the roundup’s author for an update, then fill in your review profile, then join both Reddit threads openly, then write a comparison page against that competitor. That’s four actions with named targets, and all of them came from the audit."},
    {"t": "h2", "c": "What should you do with your score?"},
    {"t": "table", "head": ["Result", "What it usually means", "Next step"], "rows": [["Crawler or indexing score below 4 of 4", "Something technical is holding you back", "Fix this before anything else"], ["Access is fine, mentions are low, and few of your pages are cited", "Your pages don’t match the questions", "Retitle and restructure, then build missing pages"], ["Your pages get cited, but brand mentions are low", "You’re a source but not a recommendation", "Add clear use cases, and earn third-party coverage"], ["Mentions are high, but accuracy is low", "Old or wrong information is spreading", "Correct your pages, then the sources being cited"], ["Most scores are strong", "You have a solid base", "Expand your prompt list and defend your position"]]},
    {"t": "h2", "c": "How do you run the next audit faster?"},
    {"t": "ol", "items": ["<strong>Reuse the same prompts, tools and number of runs.</strong> Add new prompts in a separate section so your trend stays clean.", "<strong>Keep every month’s sheet.</strong> Don’t overwrite results. Your history is what makes the numbers useful.", "<strong>Mark what you changed and when.</strong> Note fixes next to the prompts they target, so you can look for links between them.", "<strong>Skip step 1 unless something changed.</strong> Re-check access after a site redesign, a CDN change or a new firewall rule.", "<strong>Look at change over three months.</strong> A single month’s movement can be noise, given how much answers vary."]},
    {"t": "p", "c": "After the first run, plan on about 90 minutes to two hours a month. If it starts taking longer, you’ve got a good reason to consider a tool."},
    {"t": "p", "c": "Share the summary with sales and support as well as marketing. They hear buyers’ questions every day, they’ll spot errors in AI answers quickly, and they can tell you which missing prompts cost real deals. A ten-minute review with them often improves next month’s prompt list."},
    {"t": "p", "c": "Keep their notes in the same sheet, beside the prompt each one relates to, so you can see them next month."},
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t judge from one run of one prompt. Answers vary too much.",
        "Don’t test only your brand name. Being found for your own name says little about buyers who haven’t heard of you.",
        "Don’t report your AI “rank”. Order changes constantly, so use mention rate.",
        "Don’t change your prompt list every month. You lose the comparison.",
      ],
    },
    { t: "h2", c: "Common audit mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Testing while logged in with a long history.</strong> Your chats and memory can shape what you see.",
        "<strong>Mixing up mentions and citations.</strong> They’re different results, so <a href=\"/blog/ai-citations-vs-brand-mentions\">report them separately</a>.",
        "<strong>Skipping accuracy.</strong> You could be named often and described wrongly.",
        "<strong>Producing a report without owners.</strong> Every fix needs a name and a date, or it won’t happen.",
        "<strong>Auditing once.</strong> One audit gives you a baseline. The value comes from running it again.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is an AI visibility audit?",
      a: "It’s a check of whether AI assistants can read your site, how often they name and cite you for buyer questions, whether what they say is accurate, and which sources they use instead.",
    },
    {
      q: "How long does an AI visibility audit take?",
      a: "About four hours for 20 prompts across three tools. Later audits go faster, since the prompts and sheet are already set up.",
    },
    {
      q: "How often should I run one?",
      a: "Monthly works well for most companies. Keep the prompts the same so the results are comparable, and adjust the list once a quarter.",
    },
    {
      q: "Do I need a paid tool for an audit?",
      a: "No. A spreadsheet and fresh chats are enough for a first baseline. Tools help when you’re running many prompts repeatedly across several engines.",
    },
    {
      q: "What’s a good AI visibility score?",
      a: "There’s no universal benchmark. Compare your mention rate with your top competitors on the same prompts, then track your own trend over time.",
    },
  ],
  sources: [
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-11-02" },
    { title: "Search Engine Land on SparkToro study", url: sparktoro, type: "press", read: "2026-11-02" },
    { title: "Ahrefs: why ChatGPT cites pages", url: cites, type: "vendor", read: "2026-11-02" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-11-02" },
    { title: "HubSpot AI Search Grader", url: grader, type: "platform", read: "2026-11-02" },
  ],
  related: ["how-to-track-brand-mentions-in-chatgpt", "why-is-my-brand-not-in-chatgpt", "ai-visibility-report"],
  cta: {
    mid: "Would rather have someone run this for you? Our free AI visibility audit looks at your brand and sends you what we find.",
    title: "Get your AI visibility audit done for you.",
    text: "Tell us your brand and website. We’ll look at where you show up, which prompts, conversations and search results matter, and send your audit by email.",
    button: "Get my free audit",
  },
};
