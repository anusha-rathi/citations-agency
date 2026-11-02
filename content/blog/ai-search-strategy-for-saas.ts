import type { Post } from "../../lib/blog";

const bots = "https://developers.openai.com/api/docs/bots";
const cites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";
const profound = "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search";
const sparktoro = "https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076";
const traffic = "https://ahrefs.com/blog/ai-traffic-study/";

export const post: Post = {
  slug: "ai-search-strategy-for-saas",
  tracker: "1.9",
  bucket: "basics",
  style: "RS Playbook",
  title: "AI search strategy for SaaS: a 90-day playbook (2026)",
  dek: "A week-by-week plan for B2B SaaS teams: fix access, map buyer prompts, build the pages AI cites, earn third-party mentions, and report what changes. Includes owners, targets and a template.",
  description: "AI search strategy for SaaS: a 90-day playbook covering crawler access, buyer prompts, comparison pages, Reddit and third-party mentions, and what to measure.",
  targetQuery: "ai search strategy for saas",
  status: "published",
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "A SaaS AI search strategy has five jobs, in this order: make your site readable by AI crawlers, list the 30 to 50 questions buyers ask, build the pages those questions need (pricing, comparisons, “best for”, integrations), get mentioned on the sites and communities AI already cites, and track mention rate monthly. Week 1–2 is access and baseline. Weeks 3–6 is pages. Weeks 7–10 is off-site work. Weeks 11–13 is measuring and planning the next quarter.",
    },
    {
      t: "p",
      c: "SaaS is well suited to AI search, because buying software involves the long comparison questions people now bring to ChatGPT: which tool suits a team this size, what it costs, what it integrates with. It’s also crowded, and AI answers name only a few options. This playbook is for B2B SaaS founders and marketing leads who need a practical plan for one quarter, with a small team.",
    },
    { t: "h2", c: "How big should this be for your company?" },
    {
      t: "p",
      c: `Size this honestly. When <a href="${traffic}">Ahrefs studied 3,000 sites in early 2025</a>, AI chatbots were a small share of traffic: 0.17% of visitors on average, though the best-performing sites got around 6%, and the study says some AI visits are recorded as direct. Clicks aren’t the whole effect either, since a buyer can read an answer and later search for your name. Use this table to decide your starting effort.`,
    },
    {
      t: "table",
      head: ["Your situation", "Suggested effort", "Focus"],
      rows: [
        ["Pre-seed, few customers", "2–3 hours a week", "Access, core pages, founder on Reddit"],
        ["Seed to Series A, founder-led sales", "1 day a week", "This full playbook at a slower pace"],
        ["Series A to B, marketing team", "1 owner, with agency or writer support", "The full 90 days, plus reporting to leadership"],
        ["Later stage, several products", "Dedicated program per product", "Prompt sets by product and market"],
      ],
    },
    { t: "h2", c: "Weeks 1–2: Fix access and get a baseline" },
    { t: "h3", c: "Technical access" },
    {
      t: "p",
      c: `SaaS sites are often JavaScript-heavy, sit behind a CDN and have docs on a different subdomain, so check each part. OpenAI says sites blocking OAI-SearchBot <a href="${bots}">won’t be shown in ChatGPT search answers</a>.`,
    },
    {
      t: "ul",
      items: [
        "Allow search crawlers in robots.txt on your main domain, docs and blog. Copy from our <a href=\"/blog/robots-txt-for-ai-crawlers\">templates</a>.",
        "Check CDN and firewall bot rules using each bot’s user agent.",
        "Make sure pricing, product and comparison content appears in the HTML, using our <a href=\"/blog/can-chatgpt-read-javascript\">JavaScript test</a>.",
        "Verify Bing Webmaster Tools and turn on IndexNow, following our <a href=\"/blog/bing-webmaster-tools-ai-performance\">Bing guide</a>.",
        "Stop putting pricing and feature comparisons in images.",
      ],
    },
    { t: "h3", c: "Your prompt map" },
    {
      t: "table",
      head: ["Stage", "Example prompt", "Where to source them"],
      rows: [
        ["Problem", "How do I reduce churn in a usage-based SaaS?", "Support tickets, community threads"],
        ["Category", "Best customer success tool for a 20-person SaaS", "Sales calls, Google autocomplete"],
        ["Comparison", "[You] vs [Competitor] for a small team", "Lost-deal notes"],
        ["Alternatives", "Cheaper alternatives to [Competitor]", "Competitor review pages"],
        ["Integration", "Which CRM tools connect with HubSpot and Slack?", "Your integration requests"],
        ["Pricing and risk", "Does [You] have a free plan? Is it SOC 2 compliant?", "Sales objections, security questionnaires"],
      ],
    },
    {
      t: "p",
      c: `Pick 30 to 50 prompts, then run each three times in ChatGPT, Perplexity and Google. <a href="${sparktoro}">SparkToro and Gumshoe’s research</a> found the same brand list recurred in under 1% of responses, so count how often you’re named. Record who’s named and what’s cited, using our <a href="/blog/how-to-track-brand-mentions-in-chatgpt">tracking template</a> or the <a href="/blog/ai-visibility-audit">full audit</a>.`,
    },
    {
      t: "p",
      c: "<strong>By the end of week 2 you should have:</strong> crawler access confirmed, Bing verified, a list of prompts and a baseline mention rate against your top three competitors.",
    },
    { t: "h2", c: "Weeks 3–6: Build the pages AI needs" },
    {
      t: "p",
      c: `Start with what buyers ask just before choosing. In <a href="${cites}">Ahrefs’ study of 1.4 million prompts</a>, cited pages had titles closer in meaning to the prompt, and ChatGPT cited only about half the URLs it retrieved. So each page should answer its question directly, in its title and its first sentence.`,
    },
    {
      t: "table",
      head: ["Page", "Priority", "What it must include"],
      rows: [
        ["Pricing", "1", "A starting price in text, plan table, limits, last-updated date"],
        ["[You] vs [Competitor]", "1", "Honest verdict by use case, HTML table, migration notes"],
        ["Best [category] for [audience]", "2", "A recommendation by situation, including where others fit better"],
        ["[Competitor] alternatives", "2", "Reasons people switch, and a fair list with you in it"],
        ["Integration pages", "2", "What connects, setup steps, limits"],
        ["Security and compliance", "3", "Certifications, data locations, and how to request documents"],
        ["Use-case pages", "3", "A specific team, job and result, not a list of features"],
      ],
    },
    {
      t: "p",
      c: "Be honest in comparison pages. Saying who should choose a competitor makes the page more believable to readers and easier to use for an answer. Our <a href=\"/blog/how-to-structure-a-blog-post-for-ai\">structure guide</a> has page templates.",
    },
    {
      t: "code",
      label: "Comparison page outline",
      c: "Title: [You] vs [Competitor] for [audience]: which to choose\nFirst line: Choose [You] if [situation]. Choose [Competitor] if [situation].\nAt-a-glance table: price, limits, key features, integrations, best for\nWhere [Competitor] is stronger: be specific\nWhere [You] is stronger: be specific, with evidence\nMigration: how long it takes, what moves and what doesn't\nFAQ: the 5 questions your sales team hears\nLast updated: [date]",
    },
    {
      t: "p",
      c: "<strong>By the end of week 6 you should have:</strong> your pricing page fixed, your top three comparison pages live, two “best for” or alternatives pages, and your top five existing pages retitled to match the question.",
    },
    { t: "cta" },
    { t: "h2", c: "Weeks 7–10: Earn mentions on other sites" },
    {
      t: "p",
      c: `Your own site can only say so much. Answers also draw on what others say, and they don’t simply mirror Google: in <a href="${overlap}">Ahrefs’ study of 15,000 queries</a>, about 8% of links cited by ChatGPT ranked in Google’s top 10 for the same query, against 28.6% for Perplexity. Work from the cited-source list in your baseline sheet.`,
    },
    {
      t: "table",
      head: ["Channel", "What to do", "Weekly effort"],
      rows: [
        ["Roundups and listicles", "Contact authors of cited articles with accurate details and a customer example", "2 hours"],
        ["Review sites", "Fill in G2 and Capterra profiles; ask real customers for reviews, with no incentives for positive ones", "1 hour"],
        ["Reddit", "Answer buyer questions openly in 3–5 communities", "2–3 hours"],
        ["Integration partners", "Get listed in partner directories, and co-write useful guides", "1 hour"],
        ["Expert commentary", "Share original data or experience with trade publications", "1–2 hours"],
      ],
    },
    {
      t: "p",
      c: `Reddit deserves extra care. In <a href="${profound}">Profound’s analysis of more than 4 billion citations</a>, it was the most-cited domain across answer engines at 3.11%, but in Ahrefs’ study ChatGPT cited Reddit results only 1.93% of the times they were retrieved. It seems to shape answers more than it gets linked, and it’s where buyers compare tools openly. Start with our <a href="/blog/reddit-marketing-for-saas">Reddit playbook for SaaS</a> and warm up accounts in week 1, so they’re ready by now.`,
    },
    {
      t: "p",
      c: "<strong>By the end of week 10 you should have:</strong> outreach to your top ten cited sources, updated review profiles, and steady, disclosed participation in your chosen communities.",
    },
    { t: "h2", c: "Weeks 11–13: Measure and plan the next quarter" },
    {
      t: "table",
      head: ["Metric", "Source", "What you’re looking for"],
      rows: [
        ["Mention rate by prompt stage", "Your tracker or tool", "Growth on category and comparison prompts"],
        ["Citation rate", "Your tracker or tool", "New pages being used as sources"],
        ["Share of mentions", "Your tracker or tool", "A narrower gap with your top competitors"],
        ["Accuracy", "Manual review", "Fewer errors on price and features"],
        ["AI referral sessions and signups", "<a href=\"/blog/chatgpt-traffic-in-ga4\">GA4</a>", "Trend and conversion, even if the numbers are small"],
        ["Source customers report", "“How did you hear about us?” field", "Mentions of ChatGPT, Reddit or AI tools"],
        ["Branded search", "Search Console", "More people looking for your name"],
      ],
    },
    {
      t: "p",
      c: "Add the free-text “how did you hear about us?” field now if you don’t have one. Ahrefs’ own registration feedback showed more than 14,000 new users naming ChatGPT, and analytics alone won’t show you this. Present your results using our <a href=\"/blog/ai-visibility-report\">monthly report template</a>.",
    },
    { t: "h2", c: "Who owns what" },
    {
      t: "table",
      head: ["Work", "Owner in a small team", "Owner in a larger team"],
      rows: [
        ["Crawlers and rendering", "Whoever manages the site", "Engineering, with SEO"],
        ["Prompt map and tracking", "Founder or first marketer", "SEO or content lead"],
        ["Pages", "First marketer or a contractor", "Content team, with product marketing"],
        ["Reddit and communities", "Founder or a technical teammate", "Community lead or agency"],
        ["Reviews and partners", "Founder or customer success", "Partnerships and customer success"],
        ["Reporting", "First marketer", "Marketing ops or SEO lead"],
      ],
    },
    {
      t: "p",
      c: "This can’t be a side project. Agree on one owner for the whole number, and put a monthly review on the calendar. Considering outside help? Our guides on <a href=\"/blog/how-much-does-ai-seo-cost\">AI SEO costs</a> and <a href=\"/blog/how-to-choose-an-ai-seo-agency\">choosing an agency</a> will help you scope it.",
    },
    {"t": "h2", "c": "What this looks like for a real team"},
    {"t": "p", "c": "Say you’re a Series A customer success platform with one marketer, a part-time writer and a technical co-founder who’s active online. Your baseline shows you’re named in 8% of category runs, against 45% for your biggest competitor, and ChatGPT describes you as enterprise-only because of an old review. Your pricing lives in a JavaScript widget that crawlers can’t read."},
    {"t": "table", "head": ["Weeks", "What this team does", "Who does it"], "rows": [["1–2", "Moves pricing into HTML, opens up CDN rules, verifies Bing, records baseline", "Co-founder and marketer"], ["3–6", "Publishes pricing, two comparison pages and “best CS tool for small SaaS”", "Marketer and writer"], ["7–10", "Corrects the old review, contacts five roundup authors, answers threads on Reddit under the co-founder’s name", "Marketer and co-founder"], ["11–13", "Re-runs the prompts, compares with baseline, chooses next quarter’s gaps", "Marketer"]]},
    {"t": "p", "c": "None of that needs a big budget. It needs one person watching the numbers, and a founder willing to spend a few hours a week in public."},
    {"t": "h2", "c": "What happens after day 90?"},
    {"t": "table", "head": ["Rhythm", "What to do", "Time"], "rows": [["Weekly", "Answer community threads, and publish or update one page where you can", "3–5 hours"], ["Monthly", "Re-run your prompts, review sources and errors, set next month’s fixes", "2–3 hours"], ["Quarterly", "Refresh your prompt list, comparison pages and pricing facts", "1 day"], ["At each launch", "Update product, pricing and integration pages on launch day", "1–2 hours"], ["After each model or product change", "Spot-check your top ten prompts", "30 minutes"]]},
    {"t": "p", "c": "Keep comparison pages especially current. Competitors change prices and features, and an out-of-date claim on your site is an easy way to lose a reader’s trust. Add a visible last-updated date, and assign someone to check each page once a quarter."},
    {"t": "p", "c": "If you can only do one thing this quarter, fix your pricing and top comparison pages. Those are the questions buyers ask right before choosing, the facts AI tools most often repeat, and the pages your sales team can reuse on calls. Everything else in this plan builds on them."},
    {"t": "p", "c": "Put one name beside each of those pages this week, along with a date for finishing it, and review your progress together every Friday."},
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t publish dozens of near-identical “alternatives” pages. Write the ones with a real point of view.",
        "Don’t attack competitors with claims you can’t back up. Answers repeat what they find, and buyers will check.",
        "Don’t promise your board a set number of citations. Commit to the work, and report trends.",
        "Don’t spend your first month on llms.txt. <a href=\"/blog/does-llms-txt-work\">The data doesn’t support it</a>.",
        "Don’t let a tool replace buyer research. Prompts should come from real conversations.",
      ],
    },
    { t: "h2", c: "Common mistakes SaaS teams make" },
    {
      t: "ul",
      items: [
        "<strong>Hiding pricing.</strong> If you won’t publish it, others will describe it for you, perhaps wrongly. At least give a starting price.",
        "<strong>Forgetting docs.</strong> Technical buyers’ questions are often answered by documentation. Make sure it’s crawlable.",
        "<strong>Writing for the company, not the use case.</strong> “The modern platform for teams” matches no question anyone asks.",
        "<strong>Tracking only ChatGPT.</strong> Perplexity, Copilot and Google’s AI features behave differently.",
        "<strong>Ignoring wrong answers.</strong> Fix the source of an error before you chase more mentions.",
        "<strong>Stopping after a quarter.</strong> Sources, models and competitors keep changing. Keep the monthly check running.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is an AI search strategy for SaaS?",
      a: "It’s a plan to make your software easy for AI assistants to find, understand and recommend: fix crawler access, match pages to buyer prompts, earn mentions elsewhere, and track how often you’re named.",
    },
    {
      q: "How long does an AI search strategy take to work?",
      a: "Plan on a full quarter before judging. Access fixes can help within weeks, while third-party mentions and new pages usually take longer to show.",
    },
    {
      q: "Which pages matter most for SaaS?",
      a: "Start with pricing and comparison pages, then “best for” and alternatives pages, integration pages and security information. These match what buyers ask right before choosing.",
    },
    {
      q: "Should a SaaS company invest in Reddit for AI search?",
      a: "If your buyers discuss tools there, yes. Reddit shapes how AI describes a category, and it’s a direct route to buyers too. Participate openly and follow each community’s rules.",
    },
    {
      q: "How do you measure AI search results for SaaS?",
      a: "Track mention rate, citation rate and share of mentions across a fixed prompt list, along with AI referral signups, what customers tell you and branded search.",
    },
  ],
  sources: [
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-11-02" },
    { title: "Ahrefs: why ChatGPT cites pages", url: cites, type: "vendor", read: "2026-11-02" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-11-02" },
    { title: "Profound: the data on Reddit and AI search", url: profound, type: "vendor", read: "2026-11-02" },
    { title: "Search Engine Land on SparkToro study", url: sparktoro, type: "press", read: "2026-11-02" },
    { title: "Ahrefs: AI traffic study", url: traffic, type: "vendor", read: "2026-11-02" },
  ],
  related: ["reddit-marketing-for-saas", "generative-engine-optimization", "how-to-get-chatgpt-to-recommend-your-business"],
  cta: {
    mid: "Want this plan built around your actual prompts and competitors? We’ll start with a free audit.",
    title: "See where your SaaS stands in AI search.",
    text: "We check your crawler access, run your buyers’ questions, and show which competitors and sources show up, so your first 90 days go to the right work.",
    button: "Get my free audit",
  },
};
