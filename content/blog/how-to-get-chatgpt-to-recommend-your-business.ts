import type { Post } from "../../lib/blog";

const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const somethingInc = "https://somethinginc.com/blog/2026-ai-citation-study/";
const bots = "https://developers.openai.com/api/docs/bots";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const rules = "https://redditinc.com/policies/reddit-rules";

export const post: Post = {
  slug: "how-to-get-chatgpt-to-recommend-your-business",
  tracker: "2.3",
  bucket: "cited",
  style: "RS Playbook",
  title: "How to get ChatGPT to recommend your business",
  dek: "Being cited and being recommended aren’t the same. Here’s how to become one of the names ChatGPT suggests when buyers ask for options, for software companies and consumer brands alike.",
  description: "How to get ChatGPT to recommend your business: define what you want to be known for, fix access, build comparison pages, earn reviews and mentions, correct errors.",
  targetQuery: "how to get chatgpt to recommend my business",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "ChatGPT recommends the businesses that the web consistently describes as a good fit for a specific need. To become one: decide exactly what you want to be recommended for, say it the same way everywhere, make sure ChatGPT can reach your site, publish comparison and use-case pages that answer buyer questions directly, get onto the roundups and review sites it cites, take part honestly in the communities buyers use, and correct wrong information at its source. Expect specific questions to move within weeks and broad “best X” questions to take months.",
    },
    {
      t: "p",
      c: "There’s a difference between ChatGPT linking to your page and ChatGPT telling someone to use you. The first is a citation. The second is a recommendation, and it’s what actually sends buyers your way. You can have plenty of citations and still never be the brand it suggests.",
    },
    {
      t: "p",
      c: "This guide focuses on the recommendation: how ChatGPT decides which businesses to name, and the steps that make yours one of them.",
    },
    { t: "h2", c: "How ChatGPT decides who to recommend" },
    {
      t: "p",
      c: "When someone asks “what’s the best [thing] for [situation]?”, ChatGPT either searches the web or answers from what it learned in training. Either way, it leans on what independent sources say. For comparison-style questions in a <a href=\"" + toronto + "\">University of Toronto study</a>, AI engines took 59–86% of their citations from independent publishers and review sites rather than brands’ own pages.",
    },
    {
      t: "p",
      c: `So a recommendation is mostly a reflection of reputation across the web, sharpened by how clearly that reputation matches the question. <a href="${brands}">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated 0.664 with AI Overview visibility, three times more than backlinks. Your own site matters too, mainly as the place that states clearly what you are and who you’re for.`,
    },
    { t: "h2", c: "Step 1: Decide what you want to be recommended for" },
    {
      t: "p",
      c: "“Recommend us” is too vague to act on. Pick the two or three situations where you’re genuinely the best answer, and write them as the questions buyers ask:",
    },
    {
      t: "table",
      head: ["Too broad", "Specific enough to win"],
      rows: [
        ["Best CRM", "Best CRM for a 5-person real estate team using Gmail"],
        ["Best skincare brand", "Fragrance-free moisturiser for sensitive skin under $30"],
        ["Best accounting software", "Accounting software for freelancers in the UK"],
        ["Best project management tool", "Project management for agencies that bill by the hour"],
      ],
    },
    {
      t: "p",
      c: "These become your target prompts, the language on your pages, and the pitch you use with reviewers and roundup authors.",
    },
    { t: "h2", c: "Step 2: Say it the same way everywhere" },
    {
      t: "p",
      c: "ChatGPT can only recommend you for a situation if the web connects you to it. Write one plain description and use it on your homepage, About page, review profiles, directory listings, social bios and press materials:",
    },
    {
      t: "code",
      label: "Description template",
      c: "[Brand] is a [category] for [specific audience] who need [main outcome].\nUnlike [common alternative], it [key difference].\nPrices start at [price]. Works with [main integrations or channels].",
    },
    {
      t: "p",
      c: "If one profile says “practice management software”, another “dental CRM” and your site says “patient experience platform”, ChatGPT has three weak signals instead of one strong one.",
    },
    { t: "h2", c: "Step 3: Make sure ChatGPT can reach you" },
    {
      t: "p",
      c: `Check that robots.txt allows OAI-SearchBot (OpenAI says sites that block it <a href="${bots}">won’t be shown in ChatGPT search answers</a>), that your CDN isn’t blocking AI crawlers, that your key pages show their text without JavaScript, and that you’re indexed in Bing, because OpenAI lists Microsoft among <a href="${openaiSearch}">ChatGPT search’s providers</a>. Our <a href="/blog/why-is-my-brand-not-in-chatgpt">10-point diagnosis</a> walks through each check.`,
    },
    { t: "h2", c: "Step 4: Publish the pages buyers compare" },
    {
      t: "p",
      c: `Comparison and alternatives content took 33% of citations in <a href="${somethingInc}">Something Inc’s study of 4,100 B2B queries</a>, more than any other format. These pages also give ChatGPT a clear statement of who you’re best for. Build, in this order:`,
    },
    {
      t: "ol",
      items: [
        "<strong>A use-case page</strong> for each situation from Step 1, titled with the buyer’s question.",
        "<strong>A comparison page</strong> against the rival ChatGPT names most often, fair and specific, with an HTML table.",
        "<strong>An alternatives page</strong> for the category leader, including you and a few honest options.",
        "<strong>A pricing page</strong> with real numbers. “Contact us” gives ChatGPT nothing to say about cost.",
      ],
    },
    { t: "cta" },
    { t: "h2", c: "Step 5: Get onto the lists ChatGPT reads" },
    {
      t: "p",
      c: "Ask ChatGPT your target prompts and open every source it cites. You’ll usually find “best X for Y” roundups, review site category pages, comparison articles and forum threads. Each one that doesn’t include you is a task.",
    },
    {
      t: "code",
      label: "Roundup pitch",
      c: "Subject: [Brand] for your \"[article title]\" list\n\nHi [name],\n\nYour list of [category] tools for [audience] comes up a lot when people\nresearch this. I work at [Brand]; we're built specifically for\n[situation], which none of the current picks focus on.\n\nWhat might be useful for readers: [one concrete difference, with a\nnumber], and pricing starts at [price].\n\nHappy to give you a free account to test, or send screenshots.\nNo worries if it doesn't fit.\n\n[Name], [role]",
    },
    {
      t: "p",
      c: "Keep it short, specific and easy to say no to. Offer access so the author can check your claims. Follow up once, a week later. Authors update popular lists regularly, so a polite note that arrives when they’re refreshing the article often lands even if the first one didn’t.",
    },
    { t: "h2", c: "Step 6: Build reviews where your buyers look" },
    {
      t: "ul",
      items: [
        "<strong>Software:</strong> the main review sites in your category, kept complete and current.",
        "<strong>Consumer products:</strong> product reviews on your store and the marketplaces you sell on, plus independent review sites in your niche.",
        "<strong>Local and service businesses:</strong> the review platforms and directories customers in your area use.",
      ],
    },
    {
      t: "p",
      c: "Ask recent, happy customers for honest reviews, and make it easy with a direct link. Don’t pay for positive reviews or offer rewards for them. Platforms remove them, and fake reviews break most platforms’ rules.",
    },
    { t: "h2", c: "Step 7: Take part where buyers ask for advice" },
    {
      t: "p",
      c: `Communities like Reddit shape how AI describes a category, even when threads aren’t linked as sources. Answer questions in the communities your buyers use, from real team members’ accounts, disclosing where you work when you mention your product. Reddit’s rules ask users to <a href="${rules}">“participate authentically in communities where you have a personal interest”</a>. Our <a href="/blog/reddit-marketing-for-saas">Reddit playbook</a> covers this step by step.`,
    },
    { t: "h2", c: "Step 8: Fix wrong information at the source" },
    {
      t: "p",
      c: "If ChatGPT describes you wrongly, with an old price, the wrong audience or a missing feature, look at the sources it cites next to the claim. The error almost always comes from somewhere: an old review, an outdated roundup, or a page on your own site that was never updated.",
    },
    {
      t: "ol",
      items: [
        "Update your own pages first, with a visible “Updated” date.",
        "Ask third-party authors to correct theirs, with a short note showing what changed.",
        "Update review profiles and directory listings.",
        "Recheck the answer in a few weeks, and note which fix changed it.",
      ],
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you run a company selling a fragrance-free moisturiser for sensitive skin. ChatGPT, asked “what’s a good moisturiser for sensitive skin that doesn’t have fragrance?”, names three bigger brands and cites two beauty buying guides, a dermatology-focused article and a skincare forum thread.",
    },
    {
      t: "p",
      c: "Working through the steps: you settle on “fragrance-free moisturiser for sensitive, reactive skin under $30” as the situation to win. You rewrite your product page so the first lines state exactly that, with the full ingredient list as text and the price. You update your store and marketplace descriptions to match. You send samples to the authors of the two buying guides with a short note on what’s different about your formula. You ask recent customers for reviews. And your founder answers questions in the skincare forum, disclosing who they are.",
    },
    {
      t: "p",
      c: "A couple of months later, one buying guide adds you and the forum thread mentions you twice. ChatGPT starts naming you for narrower versions of the question, like “fragrance-free moisturiser for rosacea under $30”, before the broader one.",
    },
    { t: "h2", c: "Your target prompt list" },
    {
      t: "p",
      c: "Keep the prompts you’re working towards in one table, so the whole team knows what you’re trying to win:",
    },
    {
      t: "table",
      head: ["Prompt", "Situation", "Recommended now?", "Top sources cited", "Next action"],
      rows: [
        ["Best [category] for [audience] with [need]", "Primary", "No", "Roundup A, review site B", "Pitch roundup A"],
        ["[Category] that works with [tool]", "Secondary", "Sometimes", "Integration directory, docs", "Publish integration page"],
        ["[Your brand] vs [rival]", "Comparison", "Yes, but wrong price", "Old review", "Ask reviewer to update"],
        ["Cheapest [category] for [size]", "Price", "No", "Comparison article", "Add pricing examples"],
      ],
    },
    { t: "h2", c: "Local and service businesses" },
    {
      t: "p",
      c: "If you serve a local area, like a clinic, a law firm or a home services company, the same principles apply with different sources. People ask “who’s a good [service] in [area]?”, and the answer leans on review platforms, local directories, local news and community forums. Keep your business name, address, phone number and service description identical across every listing, ask happy clients for reviews on the platforms locals use, and make sure your website states clearly which areas and services you cover, in text rather than only in images or maps.",
    },
    { t: "h2", c: "Software vs consumer brands" },
    {
      t: "table",
      head: ["", "B2B software", "Consumer brands"],
      rows: [
        ["Typical prompt", "“Best [tool] for [team type] that integrates with [tool]”", "“Best [product] for [need] under [price]”"],
        ["Most influential sources", "Review sites, comparison articles, communities, docs", "Review sites, buying guides, forums, retailer pages"],
        ["Key own pages", "Comparison, alternatives, integrations, pricing", "Product pages with specs, ingredients or materials, sizing, price"],
        ["Biggest lever", "Roundups and comparisons", "Reviews and independent buying guides"],
      ],
    },
    { t: "h2", c: "Who should own each step" },
    {
      t: "p",
      c: "Recommendations come from work spread across a company, which is why it often stalls. Give each step an owner:",
    },
    {
      t: "ul",
      items: [
        "<strong>Positioning and descriptions (Steps 1–2):</strong> the founder or marketing lead, because it’s a strategic choice.",
        "<strong>Access (Step 3):</strong> whoever manages your website and hosting.",
        "<strong>Pages (Step 4):</strong> content or product marketing, with product experts checking facts.",
        "<strong>Roundups and press (Step 5):</strong> marketing, PR or the founder, who often gets the best response.",
        "<strong>Reviews (Step 6):</strong> customer success, who know which customers are happiest.",
        "<strong>Communities (Step 7):</strong> named experts on the team, each with their own disclosed account.",
        "<strong>Corrections and tracking (Step 8):</strong> one person who checks the prompt list monthly and assigns fixes.",
      ],
    },
    { t: "h2", c: "Checking your progress" },
    {
      t: "p",
      c: "Each month, run your target prompts in ChatGPT with search on, two or three times each in fresh chats, and record whether you’re named, where you appear in the list, and how you’re described. Note any new sources cited. Movement usually shows first on the most specific prompts, then spreads to broader ones as more sources include you. If nothing has moved after three months, go back to the sources list: the gap is almost always a roundup, review site or community you haven’t reached yet.",
    },
    { t: "h2", c: "What to expect" },
    {
      t: "ul",
      items: [
        "<strong>Weeks 1–4:</strong> access fixed, first pages published. You may start appearing for very specific prompts.",
        "<strong>Months 2–3:</strong> roundup placements and reviews start to show up in answers for your target situations.",
        "<strong>Months 3–6+:</strong> broader category answers begin to include you, depending on competition.",
      ],
    },
    {
      t: "p",
      c: "Track your target prompts monthly with our <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">free tracking method</a>, so you can see which steps moved the answer.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t pay anyone who promises guaranteed ChatGPT recommendations.",
        "Don’t buy reviews or post fake ones.",
        "Don’t flood communities with promotional posts. It gets accounts banned and brands distrusted.",
        "Don’t change your positioning every quarter. Consistency is how ChatGPT learns what you are.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Targeting “best [category]” first.</strong> Win specific situations, then widen.",
        "<strong>Only working on your website.</strong> Recommendations reflect what others say.",
        "<strong>Hiding prices.</strong> Buyers ask about cost constantly, and ChatGPT can’t recommend what it can’t describe.",
        "<strong>Ignoring wrong answers.</strong> Errors spread until the source is fixed.",
        "<strong>Checking once.</strong> Answers change. Track monthly.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do I get ChatGPT to recommend my business?",
      a: "Decide what you want to be recommended for, describe yourself consistently everywhere, make sure ChatGPT can reach your site, publish comparison and use-case pages, and get onto the review sites, roundups and communities it cites.",
    },
    {
      q: "Can I pay to be recommended by ChatGPT?",
      a: "Not in organic answers. You can influence recommendations by improving what ChatGPT can find and what others say about you.",
    },
    {
      q: "Why does ChatGPT recommend my competitor instead of me?",
      a: "Usually because they’re mentioned on more of the sources ChatGPT uses, or described more clearly for the situation asked about. Check the sources it cites and get onto them.",
    },
    {
      q: "How long does it take to get recommended by ChatGPT?",
      a: "Specific questions can change within weeks of fixing access and publishing pages. Broad category questions usually take several months of building mentions and reviews.",
    },
    {
      q: "How do I fix wrong information ChatGPT says about my business?",
      a: "Find the sources it cites next to the wrong claim, update your own pages, and ask third-party sites to correct theirs. Answers usually follow once the sources change.",
    },
  ],
  sources: [
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-29" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-29" },
    { title: "Something Inc study", url: somethingInc, type: "vendor", read: "2026-10-29" },
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-10-29" },
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-29" },
    { title: "Reddit Rules", url: rules, type: "primary", read: "2026-10-29" },
  ],
  related: ["why-chatgpt-recommends-your-competitor", "why-is-my-brand-not-in-chatgpt", "ai-citations-vs-brand-mentions"],
  cta: {
    mid: "Want to know exactly what it’ll take for ChatGPT to recommend you? We’ll map the sources and the gaps.",
    title: "Get recommended, not just cited.",
    text: "We pick the situations you can win, map every source ChatGPT uses for them, and run the pages, outreach and reviews plan that gets you named.",
    button: "Get my recommendation plan",
  },
};
