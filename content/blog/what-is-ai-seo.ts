import type { Post } from "../../lib/blog";

const google = "https://developers.google.com/search/docs/appearance/ai-features";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const pew = "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/";
const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";
const geo = "https://arxiv.org/abs/2311.09735";

export const post: Post = {
  slug: "what-is-ai-seo",
  tracker: "1.3",
  bucket: "basics",
  style: "RS Answer",
  title: "What is AI SEO? A plain-language guide for founders",
  dek: "AI SEO is the work of getting your brand named and cited when people ask ChatGPT, Perplexity or Google’s AI for recommendations. Here’s what it involves, how it differs from SEO, and where to start this week.",
  description: "What is AI SEO? A plain-language explanation for founders: how AI assistants pick sources, how it differs from SEO, the four parts of the work and where to start.",
  targetQuery: "what is ai seo",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "AI SEO means making your brand easy for AI assistants to find, understand and recommend. When someone asks ChatGPT, Perplexity, Copilot or Google’s AI Overviews “what’s the best tool for X?”, AI SEO is the work that decides whether you’re in the answer. It has four parts: letting AI crawlers reach and read your pages, publishing pages that answer buyers’ exact questions, getting mentioned on the third-party sites AI trusts, and tracking what AI says about you. It builds on SEO rather than replacing it. You’ll also hear it called AEO, GEO or LLM optimisation.",
    },
    {
      t: "p",
      c: "If you’re a founder, you’ve probably been told you need “AI SEO” by at least one agency, investor or LinkedIn post this year. It’s a real thing, but the label hides what the work actually is. This guide explains it without jargon, so you can decide how much of it you need and what to do first.",
    },
    { t: "h2", c: "The short version" },
    {
      t: "p",
      c: "People increasingly ask AI tools for advice before they buy. Instead of ten blue links, they get one written answer that names a few brands. If your brand isn’t named, you’re not in the running for that buyer, however well you rank on Google.",
    },
    {
      t: "p",
      c: "AI SEO is everything you do to change that: making sure AI tools can read your site, giving them clear pages to quote, and making sure other websites describe you well, because AI answers lean heavily on what others say.",
    },
    { t: "h2", c: "How AI assistants decide what to say" },
    {
      t: "p",
      c: "There are two ways an AI assistant can mention you. Understanding both explains almost everything else.",
    },
    {
      t: "table",
      head: ["", "Answers from search", "Answers from memory"],
      rows: [
        ["How it works", "The assistant searches the web, reads pages and cites them", "The assistant answers from what it learned during training"],
        ["You can tell because", "Sources and links are shown", "No sources are shown"],
        ["What decides if you appear", "Whether your pages can be crawled, are indexed, and answer the question", "How often and how consistently the web described you before training"],
        ["How fast you can change it", "Weeks", "Months, with each new model"],
      ],
    },
    {
      t: "p",
      c: `When ChatGPT searches, OpenAI says it <a href="${openaiSearch}">“rewrites your query into one or more targeted queries”</a> and sends them to search providers including Microsoft. Google’s AI Overviews use Google’s own index and may run several related searches for one question, a technique Google calls <a href="${google}">“query fan-out”</a>. In both cases, the assistant reads the results and writes an answer from the most useful passages.`,
    },
    { t: "h2", c: "How AI SEO differs from SEO" },
    {
      t: "table",
      head: ["", "SEO", "AI SEO"],
      rows: [
        ["Goal", "Rank on Google and get clicks", "Be named and cited in AI answers"],
        ["Unit of work", "Keywords", "Prompts: the full questions people ask AI"],
        ["Main inputs", "Your pages, links, technical health", "Your pages plus what other sites say about you"],
        ["Where buyers see you", "A list of results", "Inside a written answer"],
        ["How you measure", "Rankings, clicks, Search Console", "Mentions, citations, AI referral traffic, share of voice"],
      ],
    },
    {
      t: "p",
      c: `The overlap is large, but rankings don’t carry over automatically. In Ahrefs’ study of 15,000 queries, <a href="${overlap}">only 12% of links cited by ChatGPT, Gemini and Copilot ranked in Google’s top 10</a> for the same query. And mentions matter more than links: <a href="${brands}">branded web mentions correlated 0.664</a> with AI Overview visibility, three times more than backlinks.`,
    },
    {
      t: "p",
      c: "If the acronyms confuse you, our <a href=\"/blog/aeo-vs-geo-vs-seo\">AEO vs GEO vs SEO guide</a> sorts them out. For practical purposes, they describe the same work.",
    },
    { t: "h2", c: "Why it matters now" },
    {
      t: "ul",
      items: [
        `<strong>Fewer clicks from search.</strong> In <a href="${pew}">Pew Research’s study</a>, people clicked a traditional result on 8% of Google visits that showed an AI summary, against 15% without one.`,
        "<strong>Longer questions get AI answers.</strong> Pew found 60% of question-style searches produced an AI summary. Buying questions are usually long and specific.",
        "<strong>One answer, few brands.</strong> An AI answer typically names a handful of options. Being fourth on Google was still visible; being left out of the answer isn’t.",
        "<strong>It compounds.</strong> Mentions you earn today feed both live AI search and future models.",
      ],
    },
    { t: "cta" },
    { t: "h2", c: "Who AI SEO matters most for" },
    {
      t: "p",
      c: "Every business with buyers who research online is affected, but some feel it sooner than others:",
    },
    {
      t: "ul",
      items: [
        "<strong>B2B software and services</strong>, where buyers ask long comparison questions and shortlist from a handful of names.",
        "<strong>Consumer products with lots of research</strong>, like electronics, skincare, home goods and finance apps, where people ask “which one should I buy?”",
        "<strong>New companies in established categories</strong>, because AI answers default to the brands mentioned most across the web.",
        "<strong>Businesses whose traffic came from informational content</strong>, since AI summaries now answer many of those questions on the results page.",
      ],
    },
    {
      t: "p",
      c: "It matters least for businesses that win almost entirely on referrals, local foot traffic or direct sales relationships. Even then, a quick check of what AI says about you is worth an hour, because prospects increasingly ask AI about a company before a first call.",
    },
    { t: "h2", c: "The four parts of AI SEO" },
    { t: "h3", c: "1. Access: can AI read your site?" },
    {
      t: "p",
      c: "AI assistants use their own crawlers, and many sites block them by accident through robots.txt, CDN settings or pages that only load content with JavaScript. This is the fastest part to fix and the most damaging to get wrong. Our <a href=\"/blog/technical-ai-search-checklist\">technical AI search checklist</a> covers it in a day.",
    },
    { t: "h3", c: "2. Pages: do you answer the question?" },
    {
      t: "p",
      c: "AI tools quote passages that answer specific questions. Comparison pages, alternatives pages, honest pricing pages and use-case pages are the ones that get cited for buying questions. Each section should answer its heading in the first sentence.",
    },
    { t: "h3", c: "3. Mentions: what do others say about you?" },
    {
      t: "p",
      c: "Review sites, “best tools” roundups, Reddit threads, industry publications and partner pages are where AI assistants learn which brands to recommend. This is usually the biggest gap for newer companies, and the slowest to close.",
    },
    { t: "h3", c: "4. Measurement: what does AI say today?" },
    {
      t: "p",
      c: "Search Console won’t tell you what ChatGPT says. You need a list of buyer prompts, checked regularly, plus AI referral traffic in your analytics. Our guide to <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">tracking brand mentions in ChatGPT</a> has a free method.",
    },
    { t: "h2", c: "What actually works, and what doesn’t" },
    {
      t: "table",
      head: ["Works", "Doesn’t (on current evidence)"],
      rows: [
        ["Allowing AI search crawlers and serving content in HTML", "llms.txt files as a ranking trick"],
        ["Answer-first sections with specific facts", "Adding schema expecting more AI citations"],
        ["Comparison, alternatives and pricing pages", "Keyword stuffing"],
        ["Being listed on the review sites and roundups AI cites", "Publishing hundreds of thin AI-written pages"],
        ["Original data, statistics and quotes from experts", "Fake reviews, bought Reddit accounts"],
      ],
    },
    {
      t: "p",
      c: `The research supports this. In the <a href="${geo}">GEO study from Princeton and IIT Delhi</a>, adding statistics, quotations and source citations to content improved its visibility in AI answers, while keyword stuffing offered little improvement.`,
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you run a small company selling employee scheduling software for restaurants. You rank on page one of Google for “restaurant scheduling software”, and you get steady signups from it. Then a few prospects mention they found your competitor “through ChatGPT”.",
    },
    {
      t: "p",
      c: "You ask ChatGPT: “What’s the best scheduling app for a restaurant with 25 staff?” It names three competitors and cites a hospitality blog’s roundup, a review site category page, a Reddit thread from restaurant managers and one competitor’s comparison page. You’re in none of them.",
    },
    {
      t: "p",
      c: "That’s an AI SEO problem, and the fixes are concrete. You check your robots.txt and find nothing blocking ChatGPT. You write a fair comparison page against the competitor it named first. You email the roundup’s author with a short pitch about what you do for restaurants of that size. You ask a handful of happy customers for reviews on the review site. And you answer questions in the restaurant managers’ community, saying where you work. Two months later, you appear in the answer for the narrower versions of the question, and the roundup has added you.",
    },
    { t: "h2", c: "Where to start this week" },
    {
      t: "ol",
      items: [
        "<strong>Ask the questions your buyers ask.</strong> Run 10 buyer questions in ChatGPT (with search on), Perplexity and Google. Note who’s named and which sources are cited.",
        "<strong>Check access.</strong> Make sure robots.txt allows OAI-SearchBot, PerplexityBot and Claude-SearchBot, and that your CDN isn’t blocking them.",
        "<strong>Verify Bing.</strong> ChatGPT search uses Microsoft among its providers. Bing Webmaster Tools also shows how often Copilot cites you.",
        "<strong>Write one page.</strong> The comparison or alternatives page for the rival that shows up most in those answers.",
        "<strong>Contact two roundup authors</strong> whose lists are cited but don’t include you.",
      ],
    },
    {
      t: "p",
      c: "That’s a few hours of work and it tells you more than most audits, because it shows you the real answers your buyers see. Repeat the question check monthly, on the same date, to see what changes.",
    },
    { t: "h2", c: "How much time it takes" },
    {
      t: "table",
      head: ["Work", "First time", "Ongoing"],
      rows: [
        ["Access checks (robots.txt, CDN, rendering, Bing)", "Half a day", "A quick check after site changes"],
        ["Prompt list and first check", "2–3 hours", "1 hour a month"],
        ["Key pages (comparison, alternatives, pricing)", "1–2 days per page", "Monthly review"],
        ["Mentions (reviews, roundups, communities)", "A few hours to start", "2–4 hours a week"],
        ["Reporting", "1 hour to set up", "30 minutes a month"],
      ],
    },
    {
      t: "p",
      c: "For a small company, that’s roughly a week of setup and a few hours a week after that. Most of the ongoing time goes on mentions, because that’s the part nobody can do in one sitting.",
    },
    { t: "h2", c: "A quick glossary" },
    {
      t: "table",
      head: ["Term", "Plain meaning"],
      rows: [
        ["Prompt", "The full question someone types into an AI assistant"],
        ["Citation", "A link to a page shown as a source in an AI answer"],
        ["Mention", "Your brand named in the text of an AI answer"],
        ["Share of voice", "How often you’re mentioned compared with competitors across a set of prompts"],
        ["AI crawler", "The bot an AI company uses to read web pages, such as OAI-SearchBot"],
        ["Query fan-out", "When an AI tool splits one question into several searches"],
        ["AI Overview", "Google’s AI-written summary at the top of search results"],
      ],
    },
    { t: "h2", c: "What good results look like" },
    {
      t: "p",
      c: "Success in AI SEO isn’t one number going up. After three months of steady work, a healthy picture usually looks like this: you’re named for several of the specific buyer questions you tracked, your comparison or pricing page is cited as a source, a couple of roundups or review pages that AI cites now include you, and a small but engaged stream of visitors arrives from chatgpt.com and perplexity.ai. Broad “best X” questions may still favour bigger names. That’s normal, and it’s where steady work on mentions pays off over the following months.",
    },
    { t: "h2", c: "Do you need an agency?" },
    {
      t: "p",
      c: "Not necessarily. A founder or one marketer can do the first month of work above. An agency helps when nobody has a few hours a week, when you’re in a crowded category, or when you need outreach and measurement done consistently. If you talk to agencies, our <a href=\"/blog/how-to-choose-an-ai-seo-agency\">12 questions to ask</a> will separate real expertise from renamed SEO packages.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t pay for guaranteed ChatGPT placement. Nobody controls AI answers.",
        "Don’t stop SEO. AI tools find pages through the same indexes.",
        "Don’t block all AI bots to “protect” your content if you want buyers to find you.",
        "Don’t judge from one question asked once. Answers vary between runs.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Treating it as a new channel to buy.</strong> It’s mostly about making your existing presence clear and findable.",
        "<strong>Only working on your own site.</strong> For “best tool” questions, other sites matter most.",
        "<strong>Tracking keywords instead of questions.</strong> Buyers ask AI in full sentences.",
        "<strong>Ignoring Bing.</strong> It’s part of how ChatGPT and Copilot find sources.",
        "<strong>Expecting overnight results.</strong> Technical fixes are fast; mentions take months.",
      ],
    },
  ],
  faqs: [
    {
      q: "What does AI SEO mean?",
      a: "It’s the work of getting your brand found, understood and recommended by AI assistants like ChatGPT, Perplexity, Copilot and Google’s AI Overviews, through crawler access, clear pages, third-party mentions and measurement.",
    },
    {
      q: "Is AI SEO different from regular SEO?",
      a: "It builds on SEO. The foundations, like indexing and clear pages, are shared. AI SEO adds prompt research, a bigger focus on mentions on other sites, and measuring what AI assistants actually say.",
    },
    {
      q: "Is AI SEO the same as GEO or AEO?",
      a: "Mostly, yes. Generative engine optimisation (GEO), answer engine optimisation (AEO) and AI SEO are different names for overlapping work.",
    },
    {
      q: "How long does AI SEO take to work?",
      a: "Technical fixes can take effect within days, new pages can be cited within weeks, and broader recommendations based on mentions usually take a few months.",
    },
    {
      q: "Can I do AI SEO myself?",
      a: "Yes. Start by checking what AI says about your category, fixing crawler access, writing one strong comparison page and contacting the authors of roundups that leave you out.",
    },
  ],
  sources: [
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-29" },
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-29" },
    { title: "Pew Research: AI summaries and clicks", url: pew, type: "research", read: "2026-10-29" },
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-29" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-10-29" },
    { title: "GEO: Generative Engine Optimization (KDD 2024)", url: geo, type: "research", read: "2026-10-29" },
  ],
  related: ["aeo-vs-geo-vs-seo", "generative-engine-optimization", "how-to-get-cited-by-chatgpt"],
  cta: {
    mid: "Want to see what AI says about your category today? We’ll run your buyers’ questions and show you.",
    title: "See where AI puts your brand today.",
    text: "We run your buyers’ questions across ChatGPT, Perplexity and Google’s AI, show who’s named and why, and give you the first three things to fix.",
    button: "Show me my AI visibility",
  },
};
