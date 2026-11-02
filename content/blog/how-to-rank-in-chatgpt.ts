import type { Post } from "../../lib/blog";

const sparktoro = "https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076";
const cites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const bots = "https://developers.openai.com/api/docs/bots";

export const post: Post = {
  slug: "how-to-rank-in-chatgpt",
  tracker: "2.2",
  bucket: "cited",
  style: "RS Answer",
  title: "How to rank in ChatGPT: what to measure and what moves the answer",
  dek: "ChatGPT has no fixed rankings, and the same question can name different brands each time. Here’s what to track instead of position, and the seven changes most likely to get your brand named more often.",
  description: "How to rank in ChatGPT: why there’s no fixed position, how to measure your mention rate, and seven changes that make ChatGPT more likely to name your brand.",
  targetQuery: "how to rank in chatgpt",
  status: "published",
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Harshi Rathi",
  takeaways: [
    "ChatGPT has no fixed rankings. One study found the same list of brands came back less than 1% of the time.",
    "Track mention rate: how often you’re named across repeated runs of the same prompt.",
    "To be cited, you must first be retrievable: allow OAI-SearchBot and get indexed in Bing.",
    "Cited pages have titles closer in meaning to the question and its sub-questions.",
    "Other sources shape the answer too, so work on the sites ChatGPT already cites for your category.",
  ],
  body: [
    {
      t: "callout",
      tone: "answer",
      c: "You can’t rank in ChatGPT the way you rank on Google, because there’s no fixed list. Answers change from run to run. What you can raise is how often ChatGPT names and cites you. Allow OAI-SearchBot, get indexed in Bing, title your pages by the question they answer, put the answer first, add specific facts, and get covered on the third-party pages ChatGPT already cites. Measure your mention rate over repeated runs, not your position in one answer.",
    },
    {
      t: "p",
      c: "“We’re number three in ChatGPT” sounds like a result, but it usually describes one screenshot. Ask again in a new chat and you may be first, sixth or gone. That doesn’t make the work pointless. It means you need a different target, one you can measure honestly and improve.",
    },
    { t: "h2", c: "Why doesn’t ChatGPT have rankings?" },
    {
      t: "p",
      c: `Because each answer is generated fresh. <a href="${sparktoro}">SparkToro and Gumshoe’s study of 2,961 responses</a> asked AI tools for brand recommendations repeatedly. The same list came back in under 1% of runs, and the same list in the same order in under 0.1%. So order doesn’t tell you much on its own. Answers also vary with the wording of the prompt, and with what ChatGPT finds when it searches.`,
    },
    {
      t: "table",
      head: ["", "Google ranking", "ChatGPT visibility"],
      rows: [
        ["What you see", "An ordered list of links", "A written answer, with or without links"],
        ["Stability", "Moves gradually", "Can change on every run"],
        ["Main unit", "Position for a keyword", "Mention rate for a prompt"],
        ["How to check", "Rank tracker", "Repeated runs, by hand or with a tool"],
        ["Winning means", "Being first on the page", "Being named often, accurately, for the right questions"],
      ],
    },
    { t: "h2", c: "What should you measure instead of rank?" },
    {
      t: "table",
      head: ["Metric", "How to calculate it", "Why it matters"],
      rows: [
        ["Mention rate", "Runs that name you ÷ total runs", "Your closest equivalent to a ranking"],
        ["Citation rate", "Runs that link to your site ÷ total runs", "Your pages are being used as a source"],
        ["Share of mentions", "Your mentions ÷ all brand mentions in the answers", "Where you stand against competitors"],
        ["Accuracy", "Answers with correct facts ÷ answers naming you", "Being named wrongly can lose you the sale"],
        ["Referral traffic", "Sessions from chatgpt.com", "One direct signal of business impact"],
      ],
    },
    {
      t: "p",
      c: "Keep mentions and citations separate. They’re different results, and the fix for each is different: our guide to <a href=\"/blog/ai-citations-vs-brand-mentions\">citations vs mentions</a> explains why. To start, pick 20 prompts, run each three times in new chats, and record the results in our <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">free tracking template</a>. Repeat each month with the same prompts.",
    },
    { t: "h2", c: "How does ChatGPT decide what to include?" },
    {
      t: "p",
      c: `There are two routes into an answer. When ChatGPT searches, it <a href="${openaiSearch}">“rewrites your query into one or more targeted queries”</a>, retrieves pages, then picks what to use. When it doesn’t search, it draws on what the model already knows, which you can only influence slowly through what’s been written about you across the web. Most buying questions are likely to trigger a search, so start there.`,
    },
    {
      t: "p",
      c: `The search route has a lot of drop-off. In <a href="${cites}">Ahrefs’ study of 1.4 million prompts</a>, ChatGPT cited only about half the URLs it retrieved. Our guide to <a href="/blog/how-chatgpt-chooses-sources">how ChatGPT chooses its sources</a> goes through each step.`,
    },
    { t: "h2", c: "Seven changes most likely to help" },
    { t: "p", c: "These are ordered by the sequence that makes sense: each one depends on the ones before it." },
    { t: "h3", c: "1. Make sure ChatGPT can reach you" },
    {
      t: "p",
      c: `OpenAI says sites that block OAI-SearchBot <a href="${bots}">won’t be shown in ChatGPT search answers</a>. Check your robots.txt and CDN today, and use our <a href="/blog/gptbot-vs-oai-searchbot">GPTBot vs OAI-SearchBot guide</a> if you’re unsure which crawler to allow.`,
    },
    { t: "h3", c: "2. Get indexed in Bing" },
    {
      t: "p",
      c: "Microsoft is among ChatGPT search’s providers, so a missing Bing listing is an avoidable gap. Verify your site in Bing Webmaster Tools, submit your sitemap and set up IndexNow. Our <a href=\"/blog/bing-webmaster-tools-ai-performance\">10-minute guide</a> shows how.",
    },
    { t: "h3", c: "3. Title pages with the question" },
    {
      t: "p",
      c: "In Ahrefs’ data, cited pages had titles closer in meaning to the prompt than non-cited pages, with a similarity score of 0.602 against 0.484. Use the buyer’s words, including qualifiers such as team size, industry and budget.",
    },
    {
      t: "table",
      head: ["Before", "After"],
      rows: [
        ["Inventory, under control", "Inventory software for small Shopify stores: how to choose"],
        ["Our pricing", "Acme pricing: plans start at $29 per month"],
        ["Why teams love us", "Acme vs Competitor for 10-person teams: which to choose"],
      ],
    },
    { t: "h3", c: "4. Put the answer first" },
    {
      t: "p",
      c: "Start every section with a sentence that answers its heading. If your useful part arrives after three paragraphs of setup, a clearer page can win the citation. Our <a href=\"/blog/how-to-structure-a-blog-post-for-ai\">page structure guide</a> has templates.",
    },
    { t: "h3", c: "5. Replace vague claims with facts" },
    {
      t: "p",
      c: "“Affordable plans for every team” gives ChatGPT nothing to repeat. “$12 per user per month, with a free plan for up to three users” does. Add prices, limits, integrations, setup times, and who it isn’t for. Keep comparisons in HTML tables, and date anything that changes.",
    },
    { t: "cta" },
    { t: "h3", c: "6. Fill the prompts you’re missing from" },
    {
      t: "p",
      c: `Your tracking sheet will show where competitors are named and you’re not. Build a page for each repeating gap. Don’t rely on your head keyword: ChatGPT searches narrower sub-queries, and in <a href="${overlap}">Ahrefs’ study of 15,000 queries</a> only about 8% of the links it cited ranked in Google’s top 10 for the same query. Our guide to <a href="/blog/what-is-query-fan-out">query fan-out</a> shows how to find those narrower questions.`,
    },
    { t: "h3", c: "7. Earn a place on the pages it already cites" },
    {
      t: "p",
      c: "Your own site is only part of the answer. When you record cited URLs, you’ll see the same roundups, review sites and communities come up repeatedly. Those are your targets.",
    },
    {
      t: "ol",
      items: [
        "<strong>Roundups:</strong> contact the author with accurate details, a customer example and what you’re best for.",
        "<strong>Review sites:</strong> fill in your profile, and ask real customers for reviews without offering rewards.",
        "<strong>Reddit and forums:</strong> join relevant threads openly as someone from your company. Our <a href=\"/blog/reddit-seo\">Reddit SEO playbook</a> covers the process.",
        "<strong>Your competitors’ comparison pages:</strong> if they describe you wrongly, ask for a correction, and publish your own accurate version.",
      ],
    },
    { t: "h2", c: "How long does it take to show up in ChatGPT?" },
    {
      t: "table",
      head: ["Change", "When to re-check", "What you may see"],
      rows: [
        ["Unblocking crawlers", "1–2 weeks", "Your pages begin to appear in retrieved sources"],
        ["Bing indexing", "1–2 weeks", "Pages become findable in Bing’s results"],
        ["Retitling and restructuring pages", "2–6 weeks", "More citations for prompts that match"],
        ["New comparison and “best for” pages", "1–3 months", "Citations and mentions on those prompts"],
        ["Third-party coverage and Reddit", "1–3 months", "Mentions grow as sources get picked up"],
        ["What the model knows without search", "Longer, and unpredictable", "Changes with new model versions"],
      ],
      caption: "These timings are our planning estimates. They aren’t guaranteed, and they vary by category.",
    },
    { t: "h2", c: "A one-month plan" },
    {
      t: "table",
      head: ["Week", "Do this", "Finish with"],
      rows: [
        ["1", "Fix crawler and Bing issues. Run 20 prompts three times each.", "A baseline mention rate"],
        ["2", "Retitle and rewrite the openings of your five top pages.", "Five pages that answer the question first"],
        ["3", "Publish one comparison page and one “best for” page.", "Two new pages for your largest gaps"],
        ["4", "Contact three cited roundups, and join five relevant threads.", "Outreach started; second run of the prompts"],
      ],
    },
    { t: "h2", c: "What about asking ChatGPT directly?" },
    {
      t: "p",
      c: "Asking “Why don’t you recommend my brand?” rarely gives a reliable answer. ChatGPT can only offer a plausible explanation, and it doesn’t have access to why a particular run named what it did. Don’t use it as a diagnostic. It’s much better to look at which sources it actually cited, and compare them with your pages. Our guide to <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a> walks through that comparison step by step.",
    },
    {"t": "h2", "c": "How do you calculate your mention rate?"},
    {"t": "p", "c": "Here’s an example with simple numbers. Say you test 20 prompts three times each in ChatGPT, for 60 runs."},
    {"t": "table", "head": ["Prompt group", "Runs", "You named", "Top competitor named", "Your mention rate"], "rows": [["Category (8 prompts)", "24", "3", "15", "12.5%"], ["Problem (5 prompts)", "15", "2", "6", "13.3%"], ["Comparison (4 prompts)", "12", "6", "10", "50%"], ["Alternatives (3 prompts)", "9", "1", "5", "11.1%"]], "caption": "Illustrative numbers, to show the calculation."},
    {"t": "p", "c": "This tells you far more than “we’re third”. Comparison prompts look fine, probably because those prompts often contain your name or category. The real gap is in category and problem prompts, where buyers who haven’t heard of you are looking. So that’s where your next pages and third-party work should go."},
    {"t": "p", "c": "Don’t over-read small moves. With three runs per prompt, a single extra mention can shift a small group by several points. Look at the direction over two or three months, and increase your runs on the prompts that matter most."},
    {"t": "h2", "c": "Which prompts should you work on first?"},
    {"t": "table", "head": ["Priority", "Prompt type", "Why"], "rows": [["1", "“Best [category] for [your exact audience]”", "High intent, and narrow enough for a smaller brand to win"], ["2", "“[Competitor] alternatives”", "The buyer is already looking to switch"], ["3", "“[You] vs [Competitor]”", "Answers shape late-stage decisions, so errors are costly"], ["4", "Problem questions your product solves", "Larger audience, but further from a purchase"], ["5", "Broad “best [category]” prompts", "Most competitive, so build up to them"]]},
    {"t": "h2", "c": "How do you write a passage ChatGPT can use?"},
    {"t": "p", "c": "ChatGPT builds answers from specific points, so each section of your page should contain a clear, self-contained statement. Compare these two versions of the same paragraph:"},
    {"t": "table", "head": ["Harder to use", "Easier to use"], "rows": [["We believe every growing business deserves powerful inventory tools. That’s why our platform is designed with flexibility in mind, offering plans to suit teams at any stage.", "Acme is inventory software for Shopify stores handling 100 to 5,000 orders a month. Plans start at $29 a month, and it syncs stock across Shopify, Amazon and eBay. It doesn’t support purchase orders, so larger wholesalers should look elsewhere."]]},
    {"t": "p", "c": "The second version says who it’s for, what it costs, what it connects to and where it falls short. A person can check every one of those claims, and an assistant answering “inventory software for a mid-sized Shopify store” has something concrete to work with. Go through your top pages and rewrite your opening paragraph this way."},
    {"t": "p", "c": "Once you’ve rewritten a page, re-run the prompts it targets a few weeks later and note the result beside the change. Over a few months that log shows which kinds of edits move your mention rate in your category, which is more useful than any general advice."},
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t buy “ChatGPT ranking” packages that promise a position. Nobody controls the answer.",
        "Don’t report a single screenshot to your team as a result.",
        "Don’t ask staff to repeatedly prompt ChatGPT about you. It won’t change what others see in any way you can rely on.",
        "Don’t publish hundreds of thin pages. Each one should answer a real question.",
        "Don’t skip your own site in favour of Reddit alone. ChatGPT uses formal pages for facts.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Tracking too few prompts.</strong> Two or three prompts can swing wildly. Use 20 or more.",
        "<strong>Testing inside a logged-in, long-used account.</strong> Your history can colour the answer. Use fresh chats, with memory off.",
        "<strong>Using only your brand name as a test.</strong> Buyers who don’t know you ask about the category.",
        "<strong>Forgetting accuracy.</strong> Check that prices and features are right when you’re named.",
        "<strong>Assuming Google success carries over.</strong> Check ChatGPT separately.",
        "<strong>Stopping too early.</strong> Compare month on month, and give changes time to show.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can you rank number one in ChatGPT?",
      a: "Not in a lasting way. Answers change between runs, so there’s no fixed first place. Aim to be named often and accurately for the prompts that matter, and measure your mention rate.",
    },
    {
      q: "How do I check my visibility in ChatGPT?",
      a: "Pick 20 buyer prompts, run each three times in fresh chats with search on, and record whether you’re named and cited. Repeat monthly with the same prompts.",
    },
    {
      q: "Does ChatGPT use Google or Bing?",
      a: "ChatGPT uses several search providers, including Microsoft, so make sure you’re indexed in Bing as well as Google. Our guide to ChatGPT’s search sources has the details.",
    },
    {
      q: "Does ranking on Google help in ChatGPT?",
      a: "It can help, but it isn’t enough. In Ahrefs’ study, only about 8% of links cited by ChatGPT ranked in Google’s top 10 for the same query, because ChatGPT searches narrower sub-queries.",
    },
    {
      q: "How much does it cost to appear in ChatGPT?",
      a: "The core fixes cost nothing but time. Tools and agency support cost more: see our guide to AI SEO pricing for typical ranges.",
    },
  ],
  sources: [
    { title: "Search Engine Land on SparkToro study", url: sparktoro, type: "press", read: "2026-11-02" },
    { title: "Ahrefs: why ChatGPT cites pages", url: cites, type: "vendor", read: "2026-11-02" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-11-02" },
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-11-02" },
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-11-02" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "how-chatgpt-chooses-sources", "how-to-get-chatgpt-to-recommend-your-business"],
  cta: {
    mid: "Want to know your actual mention rate? We’ll run your buyer prompts and show you who ChatGPT names instead.",
    title: "See how often ChatGPT names your brand.",
    text: "We run the questions your buyers ask, record who gets named and cited, and show you the changes most likely to move the numbers.",
    button: "Check my visibility",
  },
};
