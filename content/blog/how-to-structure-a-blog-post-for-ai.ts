import type { Post } from "../../lib/blog";

const google = "https://developers.google.com/search/docs/appearance/ai-features";
const cites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const geo = "https://arxiv.org/abs/2311.09735";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const vercel = "https://vercel.com/blog/the-rise-of-the-ai-crawler";

export const post: Post = {
  slug: "how-to-structure-a-blog-post-for-ai",
  tracker: "3.10",
  bucket: "technical",
  style: "RS Playbook",
  title: "How to write content for AI search: a post structure that gets cited",
  dek: "AI tools quote passages, not pages. Here’s a blog post structure that gives Google’s AI and ChatGPT clear passages to lift, with a template, before-and-after rewrites and a pre-publish checklist.",
  description: "How to write content for AI search: a post structure AI tools can quote, with a template, title and heading rules, evidence, tables and a checklist.",
  targetQuery: "how to write content for ai search",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Structure every post so each part can be quoted on its own. Use a title that states the question the post answers. Put a two-to-four-sentence answer at the top. Give each sub-question its own H2, phrased the way people ask it, and answer it in the first sentence underneath. Add specific evidence: numbers with sources, named quotes, real HTML tables for comparisons. Keep all of it in the page’s HTML, with a readable URL and a visible “Updated” date. That gives AI search tools clear passages to lift, and it reads better for people too.",
    },
    {
      t: "p",
      c: "Most blog posts are written to be read top to bottom. AI search tools don’t read them that way. They search for a specific sub-question, land on your page, and look for the passage that answers it. If the answer is buried in paragraph seven, after a story and a definition, another page wins.",
    },
    {
      t: "p",
      c: "The good news is that a structure built for AI is also the structure busy readers prefer. Here’s the template, the rules behind it and how to apply it to posts you’ve already published.",
    },
    { t: "h2", c: "Why structure decides whether you’re cited" },
    {
      t: "ul",
      items: [
        `<strong>AI tools split questions up.</strong> Google says AI Overviews and AI Mode may use <a href="${google}">“query fan-out”</a>, running several related searches for one question. Each section of your post is a chance to match one of them.`,
        `<strong>Titles that match the question get cited.</strong> In <a href="${cites}">Ahrefs’ study of 1.4 million ChatGPT prompts</a>, cited pages had titles much closer in meaning to the prompt than pages that were retrieved but not cited.`,
        `<strong>Evidence gets used.</strong> In the <a href="${geo}">GEO study</a>, adding statistics, quotations and source citations raised content’s visibility in AI answers; keyword stuffing did little.`,
        `<strong>Freshness helps.</strong> In a <a href="${toronto}">University of Toronto study</a>, the median page GPT-4o cited for consumer-electronics queries was 79.8 days old, against 130.4 days for Google’s results.`,
      ],
    },
    { t: "h2", c: "The template" },
    {
      t: "code",
      label: "Blog post structure",
      c: "TITLE: [The question, in buyers' words]: [what the post gives them]\nURL:   /blog/[key-words-of-the-question]\n\nSHORT ANSWER (2-4 sentences)\nThe direct answer, with the key number or recommendation.\n\nINTRO (2-3 short paragraphs)\nWho this is for and what problem it solves. No throat-clearing.\n\nH2: [Sub-question 1, phrased as people ask it]\n  First sentence answers it. Then context, steps or a table.\n\nH2: [Sub-question 2]\n  ...\n\nH2: [Comparison or options] -> HTML table\nH2: [How to do it] -> numbered steps\nH2: Common mistakes -> list\nFAQ: 4-6 real questions, each answered in 1-3 sentences\n\nVisible: author, 'Updated [date]', sources linked inline",
    },
    { t: "h2", c: "Rule 1: Title the question, not the topic" },
    {
      t: "table",
      head: ["Topic title", "Question title"],
      rows: [
        ["Payroll for small businesses", "How to run payroll for a small business: a step-by-step guide"],
        ["Our thoughts on remote onboarding", "How to onboard remote employees in their first week"],
        ["The ultimate guide to churn", "What is a good churn rate for B2B SaaS?"],
        ["Composting 101", "How to start composting in an apartment"],
      ],
    },
    {
      t: "p",
      c: "Use the URL to match: <code>/blog/how-to-run-payroll-small-business</code>. Pages with natural-language URLs were cited 89.78% of the time when retrieved in Ahrefs’ ChatGPT study, against 81.11% for opaque ones.",
    },
    { t: "h2", c: "Rule 2: Answer before you explain" },
    {
      t: "p",
      c: "Put a short answer box directly under the title. Two to four sentences that would satisfy someone who reads nothing else. Then do the same at the top of every section: first sentence answers the heading, the rest explains.",
    },
    {
      t: "code",
      label: "Before and after",
      c: "BEFORE\n## Thinking about pricing\nPricing is one of the most important decisions any founder makes,\nand there are many schools of thought on how to approach it...\n\nAFTER\n## How should a B2B SaaS startup price its first plan?\nMost early B2B SaaS startups do best with per-seat pricing starting\nbetween $20 and $50 per user per month, plus an annual discount.\nPer-seat pricing is easy for buyers to understand and grows with\nthe customer. Usage-based pricing suits products where value\nclearly scales with volume, like API calls or messages sent.",
    },
    { t: "h2", c: "Rule 3: One sub-question per H2" },
    {
      t: "p",
      c: "Each H2 should match a question someone would actually search. Find them in Google’s “People also ask”, the points made in AI answers for your topic, your sales and support questions, and Reddit threads. Avoid headings like “Overview”, “Key considerations” or “The bottom line”: they match nothing.",
    },
    {
      t: "ul",
      items: [
        "Phrase headings as questions or clear statements of the answer.",
        "Include the qualifiers people use: “for small teams”, “in the UK”, “under $100”.",
        "Repeat the subject by name in the first sentence instead of “it”, so the passage makes sense on its own.",
      ],
    },
    { t: "cta" },
    { t: "h2", c: "Where to find the sub-questions" },
    {
      t: "ol",
      items: [
        "<strong>Ask the main question in ChatGPT, Perplexity and Google AI Mode.</strong> Each distinct point in the answers usually maps to a sub-question. Our guide to <a href=\"/blog/what-is-query-fan-out\">query fan-out</a> explains why.",
        "<strong>Open Google’s “People also ask”</strong> for the main query and a few variations.",
        "<strong>Read your sales call notes and support tickets</strong> for the exact words customers use.",
        "<strong>Search Reddit</strong> for the topic and note the follow-up questions people ask in comments.",
        "<strong>Check Bing Webmaster Tools’ grounding queries</strong>, if you have them, for phrases AI already uses to find your pages.",
      ],
    },
    {
      t: "p",
      c: "Pick the five to ten sub-questions that matter most to your reader, and turn each into an H2. Leave out the ones that don’t help someone make a decision or get a job done.",
    },
    { t: "h2", c: "How the template changes by post type" },
    {
      t: "table",
      head: ["Post type", "Short answer contains", "Core sections"],
      rows: [
        ["How-to guide", "The outcome and how long it takes", "Steps (ordered list), tools needed, common problems, FAQ"],
        ["Comparison", "The verdict: who should pick which", "Side-by-side table, who each suits, pricing, switching, FAQ"],
        ["Cost guide", "The typical price range, dated", "Table by size or tier, what changes the price, hidden costs"],
        ["Explainer", "A one-sentence definition plus why it matters", "How it works, examples, related terms, common mistakes"],
        ["Data post", "The headline finding with the number", "Method, key findings each in its own section, what to do"],
      ],
    },
    {
      t: "p",
      c: "Whatever the type, the first thing under the title is the answer someone came for. Everything after that is support.",
    },
    { t: "h2", c: "Rule 4: Make claims specific and sourced" },
    {
      t: "table",
      head: ["Vague", "Specific"],
      rows: [
        ["Most companies see results quickly", "In our data from 120 customers, median setup time was 3 days"],
        ["It’s affordable", "Plans start at $12 per user per month"],
        ["Experts recommend…", "“[Quote],” says [Name], [role] at [Company]"],
        ["AI uses lots of sources", "57% of the sources GPT-4o cited were independent publishers and review sites (University of Toronto)"],
      ],
    },
    {
      t: "p",
      c: "Link each statistic to its source in the same sentence. Use your own data where you have it, and say how many and over what period. Never invent numbers or quotes; a single made-up figure undermines everything else on the page.",
    },
    { t: "h2", c: "Rule 5: Use real HTML for structured information" },
    {
      t: "ul",
      items: [
        "<strong>Comparisons and prices:</strong> HTML <code>&lt;table&gt;</code>, not an image or a script-built grid.",
        "<strong>Steps:</strong> an ordered list.",
        "<strong>Key definitions:</strong> a short sentence in the text, not a tooltip.",
        "<strong>FAQs:</strong> visible questions and answers in the page, not hidden behind accordions that load later.",
      ],
    },
    {
      t: "p",
      c: `Make sure all of it is in the HTML the server sends. AI crawlers generally don’t run JavaScript: <a href="${vercel}">Vercel’s analysis</a> found OpenAI’s and Anthropic’s crawlers didn’t execute it. Test with <code>curl -s https://yoursite.com/blog/post | grep "a sentence from the post"</code>.`,
    },
    { t: "h2", c: "Rule 6: Show who wrote it and when" },
    {
      t: "p",
      c: "Put the author’s name and a visible “Updated” date near the top. Update the date only when you change the content. For topics that change, such as prices, tools, rules and statistics, schedule a review every quarter.",
    },
    { t: "h2", c: "How long should posts be?" },
    {
      t: "p",
      c: "As long as it takes to answer the main question and its sub-questions properly, and no longer. Length isn’t what gets a passage cited; clarity and specificity are. A tight 1,200-word answer to a narrow question can beat a padded 4,000-word guide. For broad topics with many sub-questions, longer posts work because they cover more of the fan-out, as long as each section stands on its own.",
    },
    { t: "h2", c: "Intros that earn the next paragraph" },
    {
      t: "p",
      c: "After the short answer, the intro has one job: tell readers whether this post is for them. Two or three short paragraphs work best. Name the situation (“If your pricing page gets traffic but no signups…”), say what the post gives them (“…here’s how to diagnose it in an afternoon”), and stop. Skip history lessons, definitions everyone knows, and sentences about how important the topic is. AI tools skip them too.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say the post is about choosing a CRM for a small real estate team. A topic-first version might be titled “Real estate CRMs: everything you need to know” and open with the history of CRMs. A structured version looks like this:",
    },
    {
      t: "code",
      label: "Outline",
      c: "TITLE: How to choose a CRM for a small real estate team (2026)\nURL:   /blog/crm-for-small-real-estate-team\n\nSHORT ANSWER: For teams of 2-10 agents, pick a CRM with built-in\nlisting alerts, email and text follow-up and a mobile app. Expect to\npay $25-$60 per agent per month. [Tool A] suits teams on Gmail;\n[Tool B] suits teams that need transaction management too.\n\nH2: What does a real estate CRM need to do?\nH2: How much does a CRM cost for a small team?   -> table\nH2: Which CRMs work with Gmail and Google Calendar?\nH2: [Tool A] vs [Tool B] vs [Tool C]               -> table\nH2: How long does it take to switch CRMs?          -> steps\nH2: Common mistakes when choosing a CRM\nFAQ",
    },
    {
      t: "p",
      c: "Each H2 matches a question an agent might ask an AI assistant, each opens with its answer, and the comparison and pricing are in tables. That one post has seven chances to be cited, instead of one. For Google specifically, our guide to <a href=\"/blog/how-to-get-cited-in-google-ai-overviews\">getting cited in AI Overviews</a> goes further.",
    },
    { t: "h2", c: "How to retrofit old posts" },
    {
      t: "ol",
      items: [
        "<strong>Pick the 10 posts</strong> that matter most: the ones that should answer your most important questions, or that have lost clicks to AI summaries.",
        "<strong>Retitle</strong> each around the question it answers. Keep the URL unless it’s an opaque ID.",
        "<strong>Add a short answer box</strong> at the top.",
        "<strong>Rewrite H2s</strong> as sub-questions, and the first sentence under each as the answer.",
        "<strong>Swap vague claims for sourced numbers</strong>, and add one named quote.",
        "<strong>Convert image tables to HTML tables.</strong>",
        "<strong>Update the date</strong>, then request recrawling in Search Console and submit through IndexNow for Bing.",
      ],
    },
    {
      t: "p",
      c: "Most posts take one to two hours each. Recheck your target questions in ChatGPT and Google a month later, and note which rewritten posts started appearing as sources, so you know which changes to repeat.",
    },
    { t: "h2", c: "Pre-publish checklist" },
    {
      t: "ul",
      items: [
        "Title states the question, in buyers’ words.",
        "URL is readable words.",
        "Short answer box at the top.",
        "Every H2 matches a real sub-question.",
        "First sentence under each H2 answers it.",
        "At least two sourced statistics and one named quote.",
        "Comparisons and prices in HTML tables.",
        "All text present in the page HTML.",
        "Author and “Updated” date visible.",
        "FAQ with real questions and short answers.",
        "Links to related posts on your site.",
      ],
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t open with a dictionary definition or “In today’s world…”.",
        "Don’t hide answers in images, sliders or tabs that load later.",
        "Don’t pad posts to hit a word count. Every section should answer something.",
        "Don’t write separate “AI versions” of posts. One clear post serves both readers and AI.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Clever titles.</strong> They match no question.",
        "<strong>Headings written for style.</strong> “The secret sauce” tells AI nothing.",
        "<strong>Answers that depend on context.</strong> “As mentioned above, it…” can’t be quoted alone.",
        "<strong>Unsourced numbers.</strong> Link the source next to the claim.",
        "<strong>Never updating.</strong> Stale facts lose to fresher pages.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do I write content that AI search tools will cite?",
      a: "Title the post with the question it answers, put a short answer at the top, give each sub-question its own heading with the answer in the first sentence, add sourced statistics and quotes, and keep everything in the page HTML.",
    },
    {
      q: "Does content length matter for AI citations?",
      a: "Not directly. Clear, specific answers matter more than word count. Longer posts help when they cover more sub-questions, each in its own section.",
    },
    {
      q: "Should I write different content for AI and for Google?",
      a: "No. Google says its AI features use the same index and need no special files or markup. One well-structured post serves readers, Google and AI assistants.",
    },
    {
      q: "Do FAQs help AI citations?",
      a: "Visible questions with direct answers give AI tools clear passages to quote. Make sure they’re real questions people ask, written into the page.",
    },
    {
      q: "How often should I update blog posts for AI search?",
      a: "Review posts on changing topics, like prices, tools and statistics, every quarter, and update the visible date only when the content changes.",
    },
  ],
  sources: [
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-29" },
    { title: "Ahrefs: why ChatGPT cites pages", url: cites, type: "vendor", read: "2026-10-29" },
    { title: "GEO: Generative Engine Optimization (KDD 2024)", url: geo, type: "research", read: "2026-10-29" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-29" },
    { title: "Vercel: rise of the AI crawler", url: vercel, type: "platform", read: "2026-10-29" },
  ],
  related: ["how-to-get-cited-in-google-ai-overviews", "generative-engine-optimization", "how-chatgpt-chooses-sources"],
  cta: {
    mid: "Want your best posts restructured so AI can quote them? We’ll rewrite the ones your buyers’ questions hit.",
    title: "Turn your blog into citable answers.",
    text: "We pick the posts that should answer your buyers’ questions and restructure them with question titles, answer-first sections, evidence and tables.",
    button: "Restructure my posts",
  },
};
