import type { Post } from "../../lib/blog";

const geo = "https://arxiv.org/abs/2311.09735";
const google = "https://developers.google.com/search/docs/appearance/ai-features";
const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";
const chatgptCites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const bots = "https://developers.openai.com/api/docs/bots";

export const post: Post = {
  slug: "generative-engine-optimization",
  tracker: "1.2",
  bucket: "basics",
  style: "RS Playbook",
  title: "Generative engine optimization (GEO): the complete guide",
  dek: "GEO started as a research paper and became a whole industry. Here’s what the original study actually found, what’s held up since, and a step-by-step process for getting your content into AI answers.",
  description: "Generative engine optimization explained: what the original GEO study found, which tactics improve AI visibility, a step-by-step process and how to measure it.",
  targetQuery: "generative engine optimization",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Generative engine optimization (GEO) is making content more likely to be used and cited in AI-generated answers. The term comes from a 2023 study by researchers at Princeton and IIT Delhi, published at KDD 2024, which found that adding quotations, statistics and source citations raised content’s visibility in AI answers by up to about 40%, while keyword stuffing did little. Since then, other research has added two big lessons: titles and sections must match the exact questions AI searches for, and mentions on other sites matter as much as your own pages. The process: fix access, map prompts, write citable sections, earn mentions, measure.",
    },
    {
      t: "p",
      c: "GEO is one of those terms that went from academic paper to agency service line in about a year. Along the way, the original findings got stretched, simplified and sometimes misquoted. This guide goes back to what the research found, adds what’s been learned since, and turns it into a process you can follow.",
    },
    { t: "h2", c: "Where GEO comes from" },
    {
      t: "p",
      c: `The term was introduced in <a href="${geo}">“GEO: Generative Engine Optimization”</a> by Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan and Ameet Deshpande, from Princeton University, IIT Delhi and independent researchers. It was published at KDD 2024, one of the main data-science conferences.`,
    },
    {
      t: "p",
      c: "The researchers built a benchmark of queries, rewrote source content using nine different methods, and measured how much each rewrite increased that source’s presence in AI-generated answers. Their headline: GEO “can boost visibility by up to 40% in generative engine responses”.",
    },
    { t: "h2", c: "What the study found, method by method" },
    {
      t: "table",
      head: ["Method", "What it means", "Visibility gain*"],
      rows: [
        ["Quotation addition", "Add relevant quotes from credible people", "27.8%"],
        ["Statistics addition", "Replace vague claims with specific numbers", "25.9%"],
        ["Fluency optimisation", "Make the text read more smoothly", "25.1%"],
        ["Cite sources", "Reference credible sources in the text", "24.9%"],
        ["Technical terms", "Use precise domain vocabulary", "23.1%"],
        ["Easy-to-understand", "Simplify the language", "22.2%"],
        ["Authoritative", "Write more persuasively and confidently", "21.8%"],
        ["Unique words", "Use less common vocabulary", "20.7%"],
        ["Keyword stuffing", "Repeat query keywords", "17.8%"],
      ],
      caption: `*Relative improvement in position-adjusted word count, from the <a href="${geo}">GEO paper</a>. The researchers note results vary by domain.`,
    },
    {
      t: "p",
      c: "Two findings matter most for practitioners. First, the winners were all about evidence: quotes, numbers and sources. Second, the researchers found that lower-ranked pages gained the most. The “cite sources” method raised visibility by 115.1% for sites ranked fifth in search results. GEO is partly a way for smaller sites to compete with bigger ones.",
    },
    { t: "h2", c: "How to read the research honestly" },
    {
      t: "p",
      c: "It helps to know what the GEO study could and couldn’t show. The researchers tested rewrites of sources on a benchmark of queries, called GEO-bench, and measured how much of each source made it into the answer. That’s a clean way to compare methods, but it isn’t the same as a live ChatGPT or Google answer, where crawling, indexing, freshness and other sites’ coverage all play a part.",
    },
    {
      t: "p",
      c: "So treat the method rankings as direction, not a formula. The consistent message, that evidence beats keyword tricks, matches what later real-world studies found. The specific percentages belong to that experiment. Test changes on your own pages and measure them against your prompt baseline before rolling them out everywhere.",
    },
    { t: "h2", c: "What’s been learned since" },
    {
      t: "p",
      c: "The GEO study tested rewrites in a controlled setting. Real-world research since then adds three lessons:",
    },
    {
      t: "ul",
      items: [
        `<strong>Match the question exactly.</strong> In <a href="${chatgptCites}">Ahrefs’ analysis of 1.4 million ChatGPT prompts</a>, cited pages had titles noticeably closer in meaning to the prompt and to ChatGPT’s internal sub-queries than pages that were retrieved but not cited. Pages with natural-language URLs were cited 89.78% of the time when retrieved, against 81.11% for others.`,
        `<strong>Mentions elsewhere matter.</strong> <a href="${brands}">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated 0.664 with AI Overview visibility, three times more than backlinks.`,
        `<strong>Independent sources dominate.</strong> In a <a href="${toronto}">University of Toronto study</a>, 57% of the sources GPT-4o cited were independent publishers and review sites.`,
      ],
    },
    {
      t: "p",
      c: "So GEO in practice has two halves: making your content citable, and getting the content AI already cites elsewhere to include you. The steps below cover both, in the order that tends to pay off fastest.",
    },
    { t: "cta" },
    { t: "h2", c: "The GEO process, step by step" },
    { t: "h3", c: "Step 1: Make sure AI can reach and read you" },
    {
      t: "p",
      c: `None of the content work matters if crawlers can’t get in. Allow AI search crawlers in robots.txt (OpenAI says sites that block OAI-SearchBot <a href="${bots}">won’t be shown in ChatGPT search answers</a>), check your CDN isn’t blocking them, and make sure your text is in the HTML rather than loaded by JavaScript. Google’s AI features only need pages to be <a href="${google}">indexed and eligible for a snippet</a>.`,
    },
    { t: "h3", c: "Step 2: Map the prompts that matter" },
    {
      t: "p",
      c: "List 20 to 50 questions your buyers ask, taken from sales calls, support tickets, reviews and Reddit. Run them in ChatGPT, Perplexity and Google AI Mode, and record who’s named and which sources are cited. Our <a href=\"/blog/prompt-research-for-ai-search\">prompt research guide</a> shows how.",
    },
    { t: "h3", c: "Step 3: Rewrite sections to be citable" },
    {
      t: "p",
      c: "Apply the GEO findings to your most important pages. For each section:",
    },
    {
      t: "ol",
      items: [
        "Use the buyer’s question, in their words, as the heading.",
        "Answer it in the first sentence, with a specific number or fact.",
        "Add a statistic from your own data or a credible source, linked.",
        "Add a short quote from someone credible, such as a customer, your own expert or a published source, with their name and role.",
        "Use a real HTML table for comparisons and prices.",
        "Keep the language clear and fluent; avoid repeating keywords for their own sake.",
      ],
    },
    {
      t: "code",
      label: "Before and after",
      c: "BEFORE\n## Our approach to onboarding\nWe believe onboarding is critical to success and our platform makes it\nsimple, fast and effective for teams of every size.\n\nAFTER\n## How long does customer onboarding take?\nMost B2B SaaS teams take 2-4 weeks to onboard a new customer; teams\nusing shared checklists report finishing in under 10 days.\n\n\"The biggest delay is waiting on the customer's IT team,\" says\n[Name], Head of CS at [Company]. Our data from [n] onboardings shows\n[specific finding].",
    },
    { t: "h3", c: "Step 4: Create the pages AI looks for" },
    {
      t: "p",
      c: "For buying questions, AI answers draw heavily on comparisons, alternatives and pricing. If you don’t have these pages, create them: a fair comparison against your main rival, an alternatives page for the category leader, a transparent pricing page and a page per main use case.",
    },
    { t: "h3", c: "Step 5: Earn mentions on cited sources" },
    {
      t: "p",
      c: "From your prompt map, list every third-party page AI cites that doesn’t mention you. Contact roundup authors, complete review profiles, and take part in the communities AI cites, with disclosure. This is the slowest step and usually the most important for “best tool” questions.",
    },
    { t: "h3", c: "Step 6: Measure and repeat" },
    {
      t: "p",
      c: "Re-run your prompt list monthly. Track mention rate, citation rate and share of voice against competitors, plus AI referral traffic and Bing’s AI Performance report. Our guide to <a href=\"/blog/ai-citations-vs-brand-mentions\">citations vs mentions</a> explains how to report it.",
    },
    { t: "h2", c: "Applying GEO to different page types" },
    {
      t: "table",
      head: ["Page type", "Add this evidence", "Structure that helps"],
      rows: [
        ["Comparison (“X vs Y”)", "Current prices, feature counts, setup times, a customer quote on why they switched", "Verdict first, then an HTML table, then “who each is best for”"],
        ["Alternatives", "Who each option suits, starting prices, one honest downside each", "One section per option, each opening with a one-line summary"],
        ["Pricing", "Exact prices, what’s included, example totals for common team sizes", "Price in the first sentence; table by plan"],
        ["How-to guide", "Time per step, common error rates, an expert tip with a name", "Numbered steps with the outcome first"],
        ["Industry or data post", "Your own numbers, sample size, date range", "Key finding in the first paragraph, then method"],
      ],
    },
    {
      t: "p",
      c: "The same principle runs through every row: put the most quotable fact first, support it with evidence a reader could check, and make each section stand on its own.",
    },
    { t: "h2", c: "Where to get statistics and quotes, honestly" },
    {
      t: "p",
      c: "The GEO study rewarded quotes and statistics, which creates an obvious temptation to make them up. Don’t. Here’s where to find real ones:",
    },
    {
      t: "ul",
      items: [
        "<strong>Your own product data.</strong> Anonymised and aggregated: average setup time, most-used features, typical results. Say how many customers and what period.",
        "<strong>Customer interviews.</strong> Ask permission to quote, and use their name and role.",
        "<strong>Your own team.</strong> A named expert explaining a trade-off is a quote. Make sure they’d stand behind it.",
        "<strong>Public research.</strong> Government data, academic papers and well-known industry studies. Link them next to the number.",
        "<strong>Small surveys.</strong> Twenty or thirty customers answering three questions can produce a genuinely new statistic.",
      ],
    },
    { t: "h2", c: "A one-page GEO checklist" },
    {
      t: "p",
      c: "Run any important page through these questions before you publish or update it:",
    },
    {
      t: "ul",
      items: [
        "Does the title say, in plain words, the question this page answers?",
        "Is the URL readable words rather than an ID?",
        "Does every section heading match a question a buyer would ask?",
        "Does the first sentence under each heading answer it?",
        "Is there at least one specific, sourced number on the page?",
        "Is there at least one attributed quote?",
        "Are comparisons and prices in HTML tables?",
        "Is there a visible “Updated” date, and is it accurate?",
        "Is the text in the page HTML, not loaded by scripts?",
      ],
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you sell expense software and want to appear for “how should a small company handle employee expenses?” Your current page is titled “Expense management, reimagined” and opens with a mission statement.",
    },
    {
      t: "p",
      c: "Applying GEO, you retitle it “How small companies should handle employee expenses”, change the URL to match, and open with a direct answer: a short policy, a receipt rule and a reimbursement deadline. You add a statistic from your own data about how long reimbursements take, linked to a short methodology note, a quote from a finance manager customer, and a table comparing three approaches: spreadsheets, corporate cards and expense software. Each heading becomes a question. The page now gives an AI answer several specific, credible passages to use, and it’s also more useful to the person reading it.",
    },
    { t: "h2", c: "How long GEO takes to show results" },
    {
      t: "p",
      c: "Rewritten pages can start being cited within a few weeks, once they’ve been recrawled. Ask for recrawling through Google Search Console’s URL Inspection and Bing’s IndexNow to speed that up. New mentions on other sites usually take one to three months to show up in answers, depending on how often AI tools revisit those pages. Broad category answers, where AI names the same few brands for “best X” questions, shift slowest of all. Set expectations accordingly: early wins on specific questions, and steady gains on broader ones over a quarter or two.",
    },
    { t: "h2", c: "GEO vs SEO" },
    {
      t: "table",
      head: ["", "SEO", "GEO"],
      rows: [
        ["Optimises for", "Ranking in a list of results", "Being used and cited inside a written answer"],
        ["Rewards", "Relevance, links, technical health", "Evidence, clarity, question match, third-party mentions"],
        ["Smaller sites", "Struggle against high-authority domains", "Can gain the most, per the GEO study"],
        ["Measured by", "Rankings and clicks", "Mentions, citations and share of voice"],
      ],
    },
    {
      t: "p",
      c: "They’re not rivals. GEO depends on pages being crawlable and indexed, which is SEO work. Our <a href=\"/blog/aeo-vs-geo-vs-seo\">AEO vs GEO vs SEO guide</a> covers the terms in more detail.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t invent statistics or quotes to “add evidence”. Fabricated facts damage trust when they’re checked, and AI tools increasingly cross-check sources.",
        "Don’t keyword-stuff. It was the weakest method in the GEO study.",
        "Don’t rewrite every page at once. Start with the pages that should answer your top buyer prompts.",
        "Don’t treat GEO as on-page only. Mentions elsewhere drive recommendations.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Quoting “40%” as a promise.</strong> It was the best case in a controlled benchmark, and results varied by domain.",
        "<strong>Adding numbers without sources.</strong> Link the source next to each statistic.",
        "<strong>Generic headings.</strong> “Our approach” matches no question. Use the question itself.",
        "<strong>Skipping access checks.</strong> Blocked crawlers make all content work pointless.",
        "<strong>Measuring with rankings.</strong> Track what AI answers actually say.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is generative engine optimization?",
      a: "GEO is the practice of making content more likely to be used and cited in AI-generated answers from tools like ChatGPT, Perplexity and Google’s AI Overviews.",
    },
    {
      q: "Who invented GEO?",
      a: "The term was introduced in a 2023 paper by researchers from Princeton University, IIT Delhi and independent researchers, published at the KDD 2024 conference.",
    },
    {
      q: "What GEO techniques work best?",
      a: "In the original study, adding quotations, statistics and source citations gave the biggest gains, while keyword stuffing gave the least.",
    },
    {
      q: "Is GEO the same as SEO?",
      a: "No, but they overlap. GEO relies on SEO foundations like crawlability and indexing, then focuses on being quoted inside AI answers and mentioned on the sources AI cites.",
    },
    {
      q: "How do I measure GEO results?",
      a: "Track a fixed list of buyer prompts monthly: whether you’re mentioned, whether your pages are cited, and your share of voice against competitors, alongside AI referral traffic.",
    },
  ],
  sources: [
    { title: "GEO: Generative Engine Optimization (KDD 2024)", url: geo, type: "research", read: "2026-10-29" },
    { title: "Ahrefs: why ChatGPT cites pages", url: chatgptCites, type: "vendor", read: "2026-10-29" },
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-29" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-29" },
    { title: "Google AI features", url: google, type: "primary", read: "2026-10-29" },
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-10-29" },
  ],
  related: ["what-is-ai-seo", "aeo-vs-geo-vs-seo", "how-chatgpt-chooses-sources"],
  cta: {
    mid: "Want your key pages rewritten using what the GEO research found? We’ll start with the ones your buyers’ questions hit.",
    title: "Make your pages citable.",
    text: "We map your buyers’ prompts, find the pages that should answer them, and rewrite them with the evidence, structure and question match AI answers reward.",
    button: "Start my GEO plan",
  },
};
