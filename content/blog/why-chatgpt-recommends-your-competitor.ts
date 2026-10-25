import type { Post } from "../../lib/blog";

const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";

export const post: Post = {
  slug: "why-chatgpt-recommends-your-competitor",
  tracker: "2.4",
  bucket: "cited",
  style: "Data post",
  title: "Why ChatGPT recommends your competitor: memory first, sources second",
  dek: "For well-known brands, ChatGPT ranks from what it learned in training and uses search to confirm it. For newer brands, the pages it retrieves decide. Which case you’re in decides what to fix.",
  description: "Why does ChatGPT recommend your competitor instead of you? What a University of Toronto study and 75,000-brand data show, and how to tell which fix you need.",
  targetQuery: "why chatgpt recommends my competitor",
  status: "draft",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "short",
      items: [
        "ChatGPT draws on two things: what the model learned in training, and the pages it retrieves when it searches.",
        "<strong>For familiar categories, memory wins.</strong> In a University of Toronto study, 16% of the brands in GPT-4o’s rankings appeared in none of the sources it had retrieved.",
        "<strong>For niche categories, the retrieved pages decide.</strong> Rankings moved almost twice as far when the order of the evidence changed.",
        "AI answers lean on third-party pages: 57% of GPT-4o’s cited sources were independent media and reviews, against 41% for Google.",
        "Brands mentioned more across the web show up more. Web mentions correlated three times more strongly with AI Overview visibility than backlinks did.",
      ],
    },
    {
      t: "p",
      c: "ChatGPT recommends your competitor because it either already “knows” them from training or keeps finding them on the pages it searches, and it finds you in neither place. For big, familiar categories, the model ranks mostly from memory and uses search to confirm what it already believes. For smaller categories it leans on whatever pages it retrieves. Rewriting your homepage changes neither, which is why it rarely moves the answer.",
    },
    {
      t: "p",
      c: "Most people react the same way. You ask ChatGPT for the best tool in your category, it names a rival, so you rewrite your homepage and ask again. Same answer. You were editing the one page the answer depends on least. And you may not even be seeing the answer your buyers see.",
    },
    {
      t: "quote",
      c: "A significant number of new signups at my tiny niche SaaS now come from ChatGPT, yet I have no idea what prompts people are using to get it to recommend my product. I can’t get it to recommend my product when trying some obvious prompts on my own, on other people’s accounts (though it does work on my account because it sees my chat history of course).",
      cite: "_1tem, a SaaS founder, Hacker News, July 2025",
      href: "https://news.ycombinator.com/item?id=44494133",
    },
    {
      t: "p",
      c: "That founder found the first problem with testing: your own account is personalised by your chat history. Test from a logged-out or temporary chat, or the answer you see isn’t the one your buyers get.",
    },
    { t: "h2", c: "What the common advice claims, and what the data shows" },
    {
      t: "table",
      head: ["The claim", "What the data shows", "Source"],
      rows: [
        ["Rank well on Google and ChatGPT will follow", "GPT-4o’s cited domains overlapped Google’s top 10 by <strong>4.0%</strong> on average, and the median overlap was 0%", `<a href="${toronto}">University of Toronto, 2026</a>`],
        ["AI reads your own website", "In comparison-style queries, AI engines took <strong>59–86%</strong> of citations from independent third-party sources", `<a href="${toronto}">University of Toronto, 2026</a>`],
        ["Backlinks drive AI visibility", "Branded web mentions correlated <strong>0.664</strong> with AI Overview visibility; backlinks <strong>0.218</strong>", "<a href=\"https://ahrefs.com/blog/ai-overview-brand-correlation/\">Ahrefs, 75,000 brands, May 2025</a>"],
        ["AI search runs on Reddit", "Reddit was the single most-cited source at <strong>3.11%</strong> of citations; GPT-4o drew <strong>8%</strong> of consumer-electronics citations from social sites", "<a href=\"https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search\">Profound × Reddit, Nov 2025</a>; Toronto"],
        ["Comparison pages get cited", "Comparison and alternatives content took <strong>33%</strong> of citations across 4,100 B2B queries, the largest format", "<a href=\"https://somethinginc.com/blog/2026-ai-citation-study/\">Something Inc, Q2 2026</a>"],
      ],
      caption: "Sources read 25 October 2026. Something Inc and Profound sell AI visibility services; their figures are their own.",
    },
    {
      t: "p",
      c: "The Reddit row deserves a second look. Profound found Reddit was the largest <em>single</em> domain, but 3.11% is a small slice of the total, and in Toronto’s consumer-electronics queries the AI engines cited social and community sites less than Google did. Reddit matters because it is one of the few places a smaller brand can get named on a page AI retrieves. It isn’t where every answer comes from.",
    },
    { t: "h2", c: "Is ChatGPT remembering, or is it searching?" },
    {
      t: "p",
      c: "The Toronto team, publishing at the EDBT/ICDT 2026 workshops, tested exactly this. They had GPT-4o rank brands using search results, then shuffled the order of those results, told it to use only the results, or swapped brand names inside them, and measured how far the rankings moved. They ran it on popular categories (“best SUVs to buy in 2025”) and niche ones (“top lawyers in Toronto that specialize in family law”).",
    },
    {
      t: "table",
      caption: "From Tables 1 and 2 of Chen, Wang, Chen and Koudas (University of Toronto), published 9 April 2026. Rank change is the mean absolute change in position.",
      head: ["Measure", "Popular brands", "Niche brands", "What it means"],
      rows: [
        ["Rank change when search results are shuffled", "2.30", "4.15", "Niche rankings depend on the evidence"],
        ["Rank change when brand names are swapped in the results", "2.60", "4.63", "Swapping names barely fools it on familiar brands"],
        ["Agreement between two ranking methods (Kendall τ)", "0.911", "0.556", "Familiar brands have a stable ranking in memory"],
      ],
    },
    {
      t: "p",
      c: "On familiar categories the model mostly ignored what it retrieved. Across hundreds of queries, <strong>16% of the brands in its rankings appeared in no retrieved snippet at all</strong>. Toyota and Honda were almost always backed by a source (missing 6% and 3% of the time). Cadillac was ranked without a supporting source 58% of the time, and Infiniti 73%. The authors’ summary: for familiar brands, retrieval “functions as confirmation, not discovery”.",
    },
    {
      t: "p",
      c: "On niche categories it flipped. The model entered what the authors call a “knowledge-seeking mode” and built its ranking from the retrieved snippets. For most B2B software, which sits closer to the niche end than to SUVs, that is good news: the pages ChatGPT retrieves can change its answer.",
    },
    { t: "h2", c: "Why does your competitor show up and you don’t?" },
    {
      t: "ol",
      items: [
        "<strong>They’re in the model’s memory.</strong> An older brand mentioned on many pages before the training cutoff gets ranked even when no retrieved page names it. You can’t change this quickly. New model versions can.",
        "<strong>They’re on the pages it retrieves.</strong> Comparison posts, “best X” lists, review sites and threads. AI engines cite these third-party pages far more than brand sites in buying research.",
        "<strong>They have more mentions across the web.</strong> In Ahrefs’ data, brands in the top quarter for web mentions averaged 169 AI Overview mentions, more than ten times the next quarter (14). The bottom half had almost none.",
        "<strong>You’ve blocked or confused the crawler.</strong> OpenAI says sites that block OAI-SearchBot “will not be shown in ChatGPT search answers”. Pages that need JavaScript to show their text are another common gap.",
        "<strong>Your page doesn’t answer the question that was asked.</strong> A buyer asking for alternatives to your rival gets pages that list alternatives. If you don’t have one and aren’t on anyone else’s, you can’t be cited.",
      ],
    },
    {
      t: "quote",
      c: "If your site has bad AEO/GEO, the product pages are either impossible to read by an agent or the data is badly formatted -> the agent won’t recommend your product, resulting in a lost sale.",
      cite: "theshrike79, relaying a friend in B2B ecommerce, Hacker News, August 2026",
      href: "https://news.ycombinator.com/item?id=49270996",
    },
    {
      t: "p",
      c: "That is a secondhand view, and it describes reason 4 well. It overstates the rest: a perfectly readable product page still loses to a rival who is named on the comparison pages the model retrieves.",
    },
    { t: "cta" },
    { t: "h2", c: "How do you tell which case you’re in?" },
    {
      t: "p",
      c: "This takes about 30 minutes for five prompts, and it tells you whether to work on memory or on sources.",
    },
    {
      t: "ol",
      items: [
        "<strong>Write five prompts your buyers would type,</strong> in their words: “best X for a 10-person team”, “alternatives to [rival]”, “[rival] vs [you]”.",
        "<strong>Run each in a temporary or logged-out chat</strong> in ChatGPT, and again in Perplexity, so history doesn’t skew the answer.",
        "<strong>For each brand named, check whether a cited source supports it.</strong> Named with no source behind it: that’s memory. Named with a source: open that page.",
        "<strong>On each cited page, look for yourself.</strong> If the page lists your competitors and not you, that page is your gap, and the fix is getting onto it or onto pages like it.",
        "<strong>Check where Microsoft Copilot already cites you.</strong> Bing Webmaster Tools’ AI Performance report shows how often your pages are cited, free.",
      ],
    },
    {
      t: "img",
      src: "/citations/shot-7.png",
      alt: "Bing Webmaster Tools AI Performance report showing total citations and cited pages over three months, rising from zero in early August",
      width: 1600,
      height: 701,
      caption: "Bing Webmaster Tools’ AI Performance report, captured October 2026: citations of one site’s pages in Microsoft Copilot and partner answers over three months.",
    },
    { t: "h2", c: "What actually changes the answer?" },
    {
      t: "p",
      c: "<strong>If it’s memory,</strong> the answer moves slowly, and only through more of the web mentioning you: reviews, press, comparison posts, and community threads where buyers ask about your category. These also feed the next model’s training, which is the only way into memory. Expect months, not weeks.",
    },
    {
      t: "p",
      c: "<strong>If it’s sources,</strong> you can move faster. Get onto the pages the answers already cite: ask to be included in the comparison posts, join the Reddit and community threads where the question is being asked (our guide to <a href=\"/blog/why-was-my-reddit-post-removed\">posting on Reddit without getting filtered</a> covers the basics), and publish your own honest comparison and alternatives pages. Then make sure crawlers can reach them; our <a href=\"/blog/how-to-get-cited-by-chatgpt\">guide to getting cited by ChatGPT</a> has the checklist.",
    },
    { t: "h2", c: "So, why does ChatGPT recommend your competitor?" },
    {
      t: "p",
      c: "Because they are either part of what the model already believes about your category, or they are on the pages it retrieves, or both, and you are on neither. For a well-known rival in a familiar category, assume memory and play the long game of being mentioned widely. For most B2B and niche categories, assume sources: find the pages that ChatGPT and Perplexity cite for your buyers’ prompts this week, and get your brand onto them.",
    },
  ],
  faqs: [
    {
      q: "Why does ChatGPT recommend my product on my account but not on others?",
      a: "Your account is personalised by your own chat history and memory. Test in a temporary chat or logged out to see what a buyer sees.",
    },
    {
      q: "If I rank first on Google, will ChatGPT recommend me?",
      a: "Not reliably. In the Toronto study, GPT-4o’s cited domains overlapped Google’s top 10 results by 4% on average, and not at all for most queries. Perplexity’s overlap was the highest, at 15.2%.",
    },
    {
      q: "How long does it take for ChatGPT to start recommending a brand?",
      a: "It depends on which case you’re in. Answers built from search can change once a page that names you is crawled and starts being retrieved. What the model remembers only changes with a new model version, so that path takes months.",
    },
    {
      q: "Will a comparison page on my own site help?",
      a: "It helps answer comparison and alternatives prompts, the largest citation format in Something Inc’s B2B study at 33%. On buying-intent prompts, AI engines cited brand sites for 52–68% of sources in the Toronto study, so your own pages matter most at the moment of purchase.",
    },
    {
      q: "Is it worth getting mentioned on Reddit for this?",
      a: "Yes, as one channel. Reddit was the single most-cited domain in Profound’s 4-billion-citation dataset at 3.11%, and its threads often rank in Google too. It won’t outweigh being named on review and comparison sites.",
    },
  ],
  sources: [
    { title: "Navigating the Shift: A Comparative Analysis of Web Search and Generative AI Response Generation (University of Toronto, EDBT/ICDT 2026 workshops)", url: toronto, type: "primary", read: "2026-10-25" },
    { title: "An Analysis of AI Overview Brand Visibility Factors, 75K brands (Ahrefs)", url: "https://ahrefs.com/blog/ai-overview-brand-correlation/", type: "platform", read: "2026-10-25" },
    { title: "The data on Reddit and AI search (Profound × Reddit)", url: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search", type: "vendor", read: "2026-10-25" },
    { title: "The 2026 AI Citation Study (Something Inc)", url: "https://somethinginc.com/blog/2026-ai-citation-study/", type: "vendor", read: "2026-10-25" },
    { title: "Overview of OpenAI crawlers (OpenAI)", url: "https://developers.openai.com/api/docs/bots", type: "primary", read: "2026-10-25" },
    { title: "Hacker News comment by _1tem on ChatGPT signups", url: "https://news.ycombinator.com/item?id=44494133", type: "forum", read: "2026-10-25" },
    { title: "Hacker News comment by theshrike79 on AEO and agents", url: "https://news.ycombinator.com/item?id=49270996", type: "forum", read: "2026-10-25" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "aeo-vs-geo-vs-seo", "why-was-my-reddit-post-removed"],
  cta: {
    mid: "Want to know whether ChatGPT is working from memory or from sources for your category? We’ll run your buyers’ prompts and show you.",
    title: "Find out exactly why your competitor gets named.",
    text: "We run your buyers’ real prompts across ChatGPT, Perplexity and Gemini, show which pages each answer cites, and mark the ones you’re missing from.",
    button: "Show me why",
  },
};
