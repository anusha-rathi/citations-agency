import type { Post } from "../../lib/blog";

const cites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const bots = "https://developers.openai.com/api/docs/bots";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const overlap = "https://ahrefs.com/blog/ai-search-overlap/";

export const post: Post = {
  slug: "how-chatgpt-chooses-sources",
  tracker: "1.5",
  bucket: "cited",
  style: "Data post",
  title: "How ChatGPT chooses its sources: what 1.4M prompts show",
  dek: "ChatGPT retrieves far more pages than it cites. Here’s how a search answer is put together, what separates the pages it cites from the ones it reads and drops, and what to change on yours.",
  description: "How ChatGPT chooses sources: the steps behind a search answer, what a 1.4M-prompt study found about cited vs ignored pages, and how to make yours the one cited.",
  targetQuery: "how does chatgpt choose sources",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "When ChatGPT searches, it rewrites the question into targeted queries, retrieves pages from search providers and other channels, reads them and cites only some. In Ahrefs’ study of 1.4 million prompts, ChatGPT cited about half of the URLs it retrieved. Cited pages had titles closer in meaning to the prompt and to ChatGPT’s own sub-queries, and pages with readable, natural-language URLs were cited 89.78% of the time when retrieved, against 81.11% for others. Pages from regular web search were cited far more often than Reddit threads, which were retrieved a lot but rarely cited. To be chosen: be crawlable, match the exact question in your title and headings, and answer it directly.",
    },
    {
      t: "p",
      c: "Most advice about getting cited by ChatGPT is guesswork. That’s changed. Large studies of real ChatGPT answers now show which pages get cited and which get read and dropped. The patterns are clear enough to act on, and most of the fixes take hours rather than months: better titles, clearer first sentences, readable URLs and making sure the right search index can see you.",
    },
    {
      t: "p",
      c: "This guide walks through how an answer is assembled, what the data shows at each step, and what to change on your pages.",
    },
    { t: "h2", c: "How a ChatGPT search answer is built" },
    {
      t: "table",
      head: ["Step", "What happens", "What decides whether you make it through"],
      rows: [
        ["1. Decide to search", "ChatGPT decides whether the question needs fresh information", "Questions about products, prices and recent events usually trigger search"],
        ["2. Rewrite the query", `ChatGPT <a href="${openaiSearch}">“rewrites your query into one or more targeted queries”</a>`, "Whether your pages match the narrower sub-queries"],
        ["3. Retrieve", "Results come back from search providers (including Microsoft) and other channels", "Crawler access, indexing in Bing, ranking for the sub-queries"],
        ["4. Read and select", "ChatGPT reads the pages and picks which to use", "How directly and clearly the page answers"],
        ["5. Write and cite", "The answer is written and sources are linked", "Whether your passage was used for a specific point"],
      ],
    },
    {
      t: "p",
      c: `Step 3 has a hard gate: OpenAI says sites that block its search crawler, OAI-SearchBot, <a href="${bots}">won’t be shown in ChatGPT search answers</a>. Everything below assumes you’ve cleared it.`,
    },
    { t: "h2", c: "What the 1.4 million prompts showed" },
    {
      t: "p",
      c: `<a href="${cites}">Ahrefs analysed 1.4 million ChatGPT prompts</a> and 25.4 million URLs, comparing pages ChatGPT retrieved and cited with pages it retrieved but didn’t cite. The key findings:`,
    },
    {
      t: "table",
      head: ["Finding", "Number"],
      rows: [
        ["Share of retrieved URLs that ChatGPT cited", "About 50%"],
        ["Citation rate for pages from regular web search", "88.46%"],
        ["Citation rate for news results", "12.01%"],
        ["Citation rate for Reddit results", "1.93%"],
        ["Share of non-cited URLs that were Reddit", "67.8%"],
        ["Citation rate, natural-language URLs vs others", "89.78% vs 81.11%"],
        ["Title similarity to the prompt, cited vs not cited", "0.602 vs 0.484"],
        ["Median age of cited pages from web search", "About 500 days"],
      ],
      caption: `From <a href="${cites}">Ahrefs’ study of 1.4 million ChatGPT prompts</a>. Similarity scores are cosine similarity between embeddings; higher means closer in meaning.`,
    },
    { t: "h2", c: "Why retrieved pages get dropped" },
    {
      t: "p",
      c: "Half of the pages ChatGPT retrieves never make it into the answer. When you compare the sources it cites with similar pages it could have used, a few reasons come up again and again, and they’re easy to spot once you look for them:",
    },
    {
      t: "ul",
      items: [
        "<strong>It answers a different question.</strong> The page is about the topic, but not the specific situation asked about.",
        "<strong>The answer is buried.</strong> The useful part is in paragraph six, after an introduction and a story.",
        "<strong>It’s vague.</strong> “Affordable plans for every team” loses to “$12 per user per month”.",
        "<strong>Another source says the same thing more clearly.</strong> When several pages agree, ChatGPT needs only one or two to cite.",
        "<strong>It’s a discussion rather than a reference.</strong> Forum threads inform the answer, but formal pages are cited for the facts.",
      ],
    },
    {
      t: "p",
      c: "Each one has a direct fix: retitle around the exact question, lead with the answer, replace vague claims with numbers, add something other sources don’t have, and publish a clear reference page for anything people discuss in communities.",
    },
    { t: "h2", c: "Finding 1: Your title has to match the question" },
    {
      t: "p",
      c: "The clearest signal in the data is meaning, not keywords. Cited pages had titles much closer in meaning to the user’s prompt, and even closer to the sub-queries ChatGPT generated internally. In practice, that means a page titled “How to choose payroll software for a 10-person company” beats “Payroll, simplified” for that question, even if the second page ranks well.",
    },
    {
      t: "ul",
      items: [
        "Write titles that state the question the page answers, in the words buyers use.",
        "Do the same for H2s: each one should match a sub-question a buyer, or ChatGPT, would search.",
        "Cover the qualifiers people add: team size, industry, budget, integrations. Those words show up in rewritten queries.",
      ],
    },
    { t: "h2", c: "Finding 2: Readable URLs help" },
    {
      t: "p",
      c: "Pages with natural-language URL slugs were cited 89.78% of the time when retrieved, against 81.11% for pages with opaque ones. A URL like <code>/blog/how-to-choose-payroll-software</code> tells ChatGPT what the page is about before it reads a word. <code>/p?id=4821</code> doesn’t.",
    },
    {
      t: "p",
      c: "Don’t rename every URL on your site at once. Redirects carry risk, and the gain is modest. But for new pages, and for a few key pages with opaque URLs, readable slugs are worth it. Always add a permanent redirect from the old URL, and update internal links so they point straight to the new one.",
    },
    { t: "cta" },
    { t: "h2", c: "Finding 3: Reddit is read far more than it’s cited" },
    {
      t: "p",
      c: "This surprises people, because Reddit is often described as AI’s favourite source. In Ahrefs’ data, ChatGPT retrieved Reddit content heavily, but Reddit results had a citation rate of just 1.93%, and 67.8% of all retrieved-but-not-cited URLs were from Reddit.",
    },
    {
      t: "p",
      c: "The likely reading: ChatGPT uses Reddit to understand what people think, then cites more formal pages for the facts. For brands, that means Reddit still matters, because discussions shape the answer, but don’t expect thread links in ChatGPT’s sources to be your main measure. Other assistants behave differently, so check each one separately.",
    },
    { t: "h2", c: "Finding 4: Established pages get cited" },
    {
      t: "p",
      c: `Among pages from web search, the median cited page was about 500 days old, and pages that weren’t cited skewed younger. That seems to contradict research showing AI prefers fresh content; a <a href="${toronto}">University of Toronto study</a> found GPT-4o’s cited pages were younger on average than Google’s results. Both can be true: AI tends to pick fresher sources across the web as a whole, but within a single set of search results, established pages that have earned their ranking are often the ones chosen.`,
    },
    {
      t: "p",
      c: "The practical lesson: don’t constantly replace pages with new ones. Keep strong pages at the same URL and update their content, so they keep their history and stay current.",
    },
    { t: "h2", c: "Finding 5: Rankings help, but aren’t enough" },
    {
      t: "p",
      c: `To be retrieved, a page has to rank for ChatGPT’s sub-queries in its search providers. But those sub-queries differ from the keywords you track. In a separate Ahrefs study, <a href="${overlap}">only about 8% of the links ChatGPT cited in its answers ranked in Google’s top 10</a> for the same query. Ranking for the head keyword isn’t the goal; ranking for the narrow questions behind it is.`,
    },
    { t: "h2", c: "Other assistants choose differently" },
    {
      t: "p",
      c: "These findings are about ChatGPT. Other assistants overlap with search rankings to different degrees. In <a href=\"" + overlap + "\">Ahrefs’ study of 15,000 queries</a>, 28.6% of the links Perplexity cited ranked in Google’s top 10 for the same query, against about 8% for ChatGPT, 8.6% for Gemini and 8.2% for Copilot. Copilot overlapped more with Bing’s top 10, at 14.0%.",
    },
    {
      t: "p",
      c: "So rankings matter more for Perplexity than for ChatGPT, and Bing matters more for Copilot than Google does. A page that answers the question clearly, with a matching title, tends to do well across all of them, but check each assistant’s sources separately before deciding where to focus.",
    },
    { t: "h2", c: "How to see ChatGPT’s choices for your topic" },
    {
      t: "ol",
      items: [
        "<strong>Pick five buyer questions</strong> and ask each in ChatGPT with search on, in a fresh chat.",
        "<strong>List every cited source</strong>, and note which part of the answer each one supported.",
        "<strong>Compare cited titles with the question.</strong> How closely do they match? Yours probably doesn’t, which is the first fix.",
        "<strong>Search Bing for short versions of the question</strong> and see where cited pages rank. You’ll often find they rank for a narrower phrase than you’d expect.",
        "<strong>Write down what the cited pages have that yours lack:</strong> a direct answer, a table, a price, a date.",
      ],
    },
    { t: "h2", c: "A page checklist based on the data" },
    {
      t: "ul",
      items: [
        "OAI-SearchBot allowed in robots.txt and not blocked by your CDN.",
        "Indexed in Bing as well as Google.",
        "Title states the question the page answers, in buyers’ words.",
        "URL is readable words, not an ID.",
        "Each H2 matches a sub-question, with the answer in the first sentence.",
        "Specific facts: prices, numbers, dates, named examples.",
        "Comparisons in HTML tables, not images.",
        "Content updated at the same URL rather than replaced.",
      ],
    },
    { t: "h2", c: "What this means for different page types" },
    {
      t: "table",
      head: ["Page type", "Change based on the data"],
      rows: [
        ["Blog guides", "Retitle around the exact question; one sub-question per H2; readable slug for new posts"],
        ["Comparison pages", "Title “[A] vs [B] for [audience]: which to choose”; verdict first; HTML table"],
        ["Product and feature pages", "Add a section titled with the buyer’s question the feature answers, answered in one sentence"],
        ["Pricing pages", "Open with “Plans start at $X per [unit]”; table of plans; dated"],
        ["Docs and help articles", "Title each article with the task (“How to connect X to Y”); steps as a numbered list"],
      ],
    },
    { t: "h2", c: "Quick wins this week" },
    {
      t: "ol",
      items: [
        "Rewrite the titles of your five most important pages so each states the question it answers.",
        "Rewrite the first sentence under each H2 on those pages so it answers the heading directly.",
        "Check those pages are indexed in Bing; submit them through IndexNow if not.",
        "For any new page, use a readable URL made of the question’s key words.",
        "Ask your top five buyer questions in ChatGPT and save the sources, so you can compare next month.",
      ],
    },
    {
      t: "p",
      c: "None of these needs new content. They make existing pages easier to retrieve for the right sub-queries and easier to choose once retrieved. Then compare your saved sources a month later to see which changes moved anything, and roll the ones that worked out to your next ten pages.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you sell inventory software for small online shops, and your strongest page is titled “Inventory, under control” at <code>/features/stock</code>. ChatGPT, asked “what’s the easiest inventory software for a Shopify store doing 200 orders a month?”, cites a roundup titled “Best inventory apps for small Shopify stores”, a comparison page and a guide titled “How to manage inventory on Shopify”.",
    },
    {
      t: "p",
      c: "Every cited title is close in meaning to the question. Yours isn’t. The fix is a page that is: “Inventory software for small Shopify stores: how to choose” at <code>/guides/inventory-software-for-shopify</code>, opening with a direct recommendation by order volume, an HTML table comparing options including yours, and setup times. Then contact the roundup’s author. That covers both halves: being retrievable for the sub-query, and being chosen once retrieved.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t write clever or brand-style titles for pages you want cited. Match the question.",
        "Don’t rename all your URLs at once. Prioritise key pages and redirect properly.",
        "Don’t delete and republish strong pages to look “fresh”. Update them in place.",
        "Don’t measure Reddit success only by ChatGPT citations. It influences answers without being linked.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Optimising for the head keyword only.</strong> ChatGPT searches narrower sub-queries.",
        "<strong>Ignoring Bing.</strong> Microsoft is among ChatGPT search’s providers.",
        "<strong>Burying the answer.</strong> Retrieved pages that don’t answer directly are easy to drop.",
        "<strong>Assuming one study applies to every assistant.</strong> Perplexity, Copilot and Google behave differently.",
        "<strong>Never checking the sources.</strong> ChatGPT shows you exactly what it chose. Read it every month.",
      ],
    },
  ],
  faqs: [
    {
      q: "How does ChatGPT decide which websites to cite?",
      a: "It rewrites the question into targeted searches, retrieves pages from its search providers and other channels, reads them and cites the ones it uses. Pages whose titles closely match the question and its sub-questions are cited more often.",
    },
    {
      q: "Does ChatGPT cite every page it reads?",
      a: "No. In Ahrefs’ study of 1.4 million prompts, ChatGPT cited roughly half of the URLs it retrieved.",
    },
    {
      q: "Does ChatGPT prefer Reddit?",
      a: "It reads Reddit a lot but rarely cites it. In Ahrefs’ data, Reddit results had a 1.93% citation rate and made up 67.8% of retrieved pages that weren’t cited.",
    },
    {
      q: "Do URLs matter for ChatGPT citations?",
      a: "Somewhat. Pages with natural-language URL slugs were cited 89.78% of the time when retrieved, against 81.11% for pages with opaque slugs.",
    },
    {
      q: "Does ChatGPT prefer new content?",
      a: "Not always. Among pages from web search, cited pages had a median age of about 500 days, and non-cited pages skewed younger. Update strong pages in place rather than replacing them.",
    },
  ],
  sources: [
    { title: "Ahrefs: why ChatGPT cites pages (1.4M prompts)", url: cites, type: "vendor", read: "2026-10-29" },
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-29" },
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-10-29" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-29" },
    { title: "Ahrefs: AI search overlap", url: overlap, type: "vendor", read: "2026-10-29" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "what-is-query-fan-out", "does-chatgpt-use-google-or-bing"],
  cta: {
    mid: "Want to know why ChatGPT picks other pages over yours? We’ll compare them side by side.",
    title: "Find out why ChatGPT skips your pages.",
    text: "We run your buyer questions, list every source ChatGPT chose, and show exactly what those pages have that yours don’t, with a fix for each.",
    button: "Compare my pages",
  },
};
