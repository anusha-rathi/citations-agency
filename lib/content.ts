export const nav = [
  { href: "#why", label: "why reddit" },
  { href: "#system", label: "our system" },
  { href: "#citations", label: "citations" },
  { href: "#pricing", label: "pricing" },
  { href: "#faq", label: "faqs" },
];

/** Real public Reddit threads. Descriptions only restate what each title asks. */
export const threads = [
  { category: "CRM", sub: "SaaS", query: "best crm for a startup reddit", title: "What CRM for a Startup?", text: "A founder asks which CRM makes sense for an early-stage startup.", url: "https://www.reddit.com/r/SaaS/comments/1kgitgx/what_crm_for_a_startup/" },
  { category: "Hiring software", sub: "recruiting", query: "best ats for a 10 person startup", title: "Best ATS for a growing startup with 10 employees?", text: "A ten-person startup looks for an applicant tracking system it can grow into.", url: "https://www.reddit.com/r/recruiting/comments/1ovefu3/best_ats_for_a_growing_startup_with_10_employees/" },
  { category: "AI sales tools", sub: "SaaS", query: "best ai tools for sales prospecting", title: "What are the best AI tools for sales prospecting in 2025?", text: "A request for AI tools that genuinely help with sales prospecting.", url: "https://www.reddit.com/r/SaaS/comments/1j9n8o9/what_are_the_best_ai_tools_for_sales_prospecting/" },
  { category: "Project management", sub: "SaaS", query: "project management software for small teams", title: "best project management software 2026 for small teams, what actually works in real life?", text: "A small team asks which project management tools hold up in day-to-day use.", url: "https://www.reddit.com/r/SaaS/comments/1ps7lis/best_project_management_software_2026_for_small/" },
  { category: "Software comparison", sub: "VideoEditors", query: "davinci resolve vs premiere pro", title: "daVinci or Premiere Pro", text: "An editor weighs two well-known video editing tools against each other.", url: "https://www.reddit.com/r/VideoEditors/comments/1s9fmes/davinci_or_premiere_pro/" },
  { category: "AI SaaS", sub: "SaaS", query: "ai tools that actually deliver reddit", title: "What's the Best AI Tool That Actually Delivers?", text: "A search for AI tools that live up to their claims.", url: "https://www.reddit.com/r/SaaS/comments/1ig3shl/whats_the_best_ai_tool_that_actually_delivers/" },
];

// Monthly volumes are planned deliverables; adjust here before launch if needed.
export const growth = [
  "25–30 organic Reddit posts / month",
  "35–40 relevant comments / month",
  "Prompt-backed research & content",
  "Prompt, keyword & SERP tracking",
  "Reddit conversations, AI mentions & citation tracking",
  // "Guaranteed impressions" — add back once the contractual minimum and how it's measured are agreed.
];

export const custom = [
  "Custom Reddit programs & subreddit coverage",
  "SEO & relevant backlink initiatives",
  "Sentiment analysis & reputation management",
  "Reddit Ads & campaign support",
  "Content creation & UGC",
  "Custom reporting & broader visibility intelligence",
];

export const faqs = [
  {
    q: "What are AI citations, GEO, and AEO?",
    a: "An AI citation is when an AI answer shows a source link, like your page or a thread about you. GEO (generative engine optimization) and AEO (answer engine optimization) are the work of making your brand easier for those answers to find, understand, and reference. AI SEO is the same idea applied to AI-powered search.",
  },
  {
    q: "Why does prompt research matter?",
    a: "Because buyers don't type keywords into ChatGPT, they ask full questions. If you don't know which questions shape your category, you can't know where your brand is missing. Prompt research tells us what to write, where it should live, and what to track.",
  },
  {
    q: "Why do you focus so much on Reddit?",
    a: "Reddit is where buyers ask detailed questions, compare alternatives, and share real experiences in public. Search engines surface those threads, and AI search tools can cite them. That makes useful, transparent participation there one of the most direct ways to show up where buying questions are answered.",
  },
  {
    q: "Is Reddit the only channel you work with?",
    a: "No. Reddit is our main execution channel, but research decides where content belongs. Depending on scope, that can include website content, expert articles, other communities, and SEO or link-building work.",
  },
  {
    q: "What can you actually track in AI search?",
    a: "For an agreed set of prompts and tools, we track whether your brand is mentioned, whether your pages or threads appear as linked citations, and which competitors and sources show up instead. We track search rankings separately. Mentions, citations, and rankings are different outcomes, and we report them separately.",
  },
  {
    q: "Can you guarantee that ChatGPT or Claude will cite my brand?",
    a: "No. Nobody controls what third-party AI models say or cite, and nobody can guarantee rankings or engagement either. We commit to the work: research, useful content in the right places, and clear measurement of what changes.",
  },
  {
    q: "What does the $2,000 monthly program include?",
    a: "Growth starts at $2,000 per month: a planned 25–30 organic Reddit posts and 35–40 relevant comments, prompt-backed research and content, prompt, mention, citation, keyword and SERP tracking, and regular reporting. Volumes depend on community rules and whether the content suits each community.",
  },
];
