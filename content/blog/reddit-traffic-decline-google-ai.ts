import type { Post } from "../../lib/blog";

const sej = "https://www.searchenginejournal.com/reddit-to-test-login-only-mode-as-google-search-traffic-drops/595270/";
const release = "https://www.sec.gov/Archives/edgar/data/0001713445/000171344526000114/earningspressreleaseq326.htm";
const transcript = "https://www.investing.com/news/transcripts/earnings-call-transcript-reddit-beats-q3-2026-estimates-but-stock-sinks-93CH-4985392";
const cnbc = "https://www.cnbc.com/2026/10/30/reddit-stock-q3-earnings.html";
const yahoo = "https://finance.yahoo.com/technology/article/reddit-and-everyone-else-faces-a-bleak-internet-without-google-traffic-100000669.html";
const ppc = "https://ppc.land/reddit-faces-q4-drop-from-130m-daily-users-blaming-google-ai-mode/";
const googleDeal = "https://blog.google/inside-google/company-announcements/expanded-reddit-partnership/";
const register = "https://www.theregister.com/2024/02/22/reddit_google_license_ipo_altman/";
const winbuzzer = "https://winbuzzer.com/2026/07/23/reddit-weighs-tighter-google-ai-access-in-renewal-talks-xcxwbn/";
const roundtable = "https://seroundtable.com/reddit-no-special-preference-google-41818.html";
const study = "https://ppc.land/ai-overviews-cut-publisher-clicks-39-8-in-first-randomized-study/";
const sistrix = "https://www.sistrix.com/blog/reddit-domain-analysis/";
const seRanking = "https://seranking.com/blog/google-may-2026-core-update-analysis/";
const semrush = "https://scalevise.com/resources/reddit-166-million-keywords-content-strategy/";

export const post: Post = {
  slug: "reddit-traffic-decline-google-ai",
  tracker: "4.11",
  bucket: "reddit",
  style: "Data post",
  title: "Reddit traffic decline: Google reads Reddit but sends fewer people",
  dek: "Reddit says Google search referrals fell by more than 1 million a week in October, while Google crawls it as hard as ever. Here’s what happened, how the Google deal fits in, and what to change if Reddit is part of your marketing.",
  description: "Why Reddit’s traffic is falling: Google AI Overviews and AI Mode, the $60M Google deal, the login-only test, and what brands should change in their plans.",
  targetQuery: "reddit traffic decline",
  status: "published",
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "On 29 October 2026, Reddit said search referrals had fallen by more than 1 million a week on average in October, and blamed Google’s AI Overviews and AI Mode above all. Google, it says, is crawling Reddit as hard as ever. US logged-out daily users fell from 30.1 million to 27.3 million in a quarter, the stock dropped 29% in a day, and Reddit will now test a login-only site. If you market on Reddit, keep going, but stop judging threads by clicks alone. Track whether AI answers name you, build logged-in community presence, and keep your own pages strong.",
    },
    {
      t: "p",
      c: "For two years, the advice was simple: Google loves Reddit, so get into the threads that rank. Reddit’s latest results complicate that. Threads can still rank and still inform AI answers, but fewer people are clicking through to read them. If you’re spending time or money on Reddit, this changes what you should measure and how you should plan the next quarter.",
    },
    { t: "h2", c: "What happened to Reddit’s traffic?" },
    {
      t: "p",
      c: `In its third-quarter shareholder letter, <a href="${sej}">Reddit wrote</a>: “During October, we have seen that search traffic has dropped by more than 1 million referrals on average per week.” It called Q3 search referrals “down meaningfully”, said the decline sped up late in the quarter, and warned that total daily users could fall by a low double-digit percentage in Q4 if the trend holds.`,
    },
    {
      t: "table",
      head: ["Measure", "Q2 2026", "Q3 2026"],
      rows: [
        ["US daily active uniques", "53.2 million", "50.7 million"],
        ["US logged-out daily users", "30.1 million", "27.3 million"],
        ["US logged-in daily users", "23.1 million", "23.4 million"],
        ["Global daily active uniques", "130.3 million", "130.3 million"],
      ],
      caption: `Q3 figures from <a href="${release}">Reddit’s earnings release</a>. Q2 comparisons from <a href="${sej}">Search Engine Journal</a>.`,
    },
    {
      t: "p",
      c: "Look at where the loss sits. About 2.8 million US logged-out users disappeared in a single quarter, a fall of roughly 9%, while logged-in US users rose slightly. Logged-out readers are often people who arrive from a search and leave. That’s the group a change at Google would hit first.",
    },
    {
      t: "p",
      c: `The business itself isn’t collapsing. <a href="${release}">Revenue rose 53% to $895 million</a>, and advertising rose 54% to $847 million. Even so, <a href="${cnbc}">the stock fell 29.22% on 30 October</a>, its worst day as a public company, after Q4 guidance of $1 billion to $1.03 billion came in below the $1.05 billion analysts expected.`,
    },
    { t: "h2", c: "Why does Reddit blame Google AI?" },
    {
      t: "p",
      c: `CEO Steve Huffman <a href="${transcript}">told investors</a> “the biggest one is the AI Overviews or AI Mode”, describing a change in which “what started as a feature is now the full search experience”. His most quoted line came next: “The reality is the AI Mode does not drive traffic. Not for us, and not to anybody as far as I know.”`,
    },
    { t: "quote", c: "People still want Reddit. It is just Google is not sending them to Reddit the way they used to.", cite: "Steve Huffman, Reddit CEO, quoted by Yahoo Finance", href: yahoo },
    {
      t: "p",
      c: `He also added the detail that makes this story sting: “Google is crawling us as hard as ever.” In other words, Reddit’s view is that Google’s appetite for its content hasn’t changed. What’s changed is how many people Google sends on to the source. Huffman named a second factor too: he believes Reddit’s machine-translated pages are being ranked lower, which mostly affects traffic outside the US. <a href="${ppc}">SEO consultant Glenn Gabe reported</a> in July that those pages were trending down in Germany and Italy.`,
    },
    { t: "h2", c: "Does Google AI really cut clicks?" },
    {
      t: "p",
      c: `The best evidence comes from outside both companies. <a href="${study}">Saharsh Agarwal and Ananya Sen ran a randomized field experiment</a> with 1,065 US participants, using a browser extension that hid AI Overviews for some users. Across 68,089 searches, AI Overviews cut outbound organic clicks by 39.8% and raised zero-click searches by 34.5%. It’s a working paper, but random assignment makes it much stronger than the usual before-and-after charts.`,
    },
    {
      t: "p",
      c: `<a href="${sistrix}">SISTRIX estimates</a> that an AI Overview at the top of the page cuts the click rate for position 1 by 60%, and by an average of 42% across the top 10. It also finds that 54% of Reddit’s US ranking keywords are exposed to AI Overviews. So Reddit is unusually exposed, because its pages rank so widely on the sort of questions these summaries answer.`,
    },
    { t: "h2", c: "Is Reddit still ranking and getting cited?" },
    {
      t: "p",
      c: "Largely yes, which is why this is a story about clicks more than visibility. The picture isn’t all one way, though.",
    },
    {
      t: "table",
      head: ["Signal", "Finding", "Date"],
      rows: [
        [`<a href="${seRanking}">SE Ranking</a>`, "Reddit held 10.24% of Google’s top 3 positions, up from 8.56% after March", "After the May 2026 core update"],
        [`<a href="${semrush}">Semrush data</a>`, "About 166 million ranking keywords, about 65 million on page one, and cited on more than 15 million keywords with AI Overviews", "August 2026"],
        [`<a href="${sistrix}">SISTRIX</a>`, "4th most visible domain in US Google, with a strong negative trend after an October 2025 peak", "July 2026"],
      ],
    },
    {
      t: "p",
      c: "Put together, Reddit remains one of the most visible sites on Google, and its visibility has become less stable. Huffman’s complaint fits that picture: the content keeps getting used, and a smaller share of readers makes the trip to the thread.",
    },
    { t: "cta" },
    { t: "h2", c: "What is the Google and Reddit deal?" },
    {
      t: "p",
      c: `This is the awkward part. Reddit and Google are also business partners. In February 2024, <a href="${googleDeal}">Google announced an expanded partnership</a> giving it access to Reddit’s Data API, including the right to “display, train on, and otherwise use” that content. Google also promised “more content-forward displays of Reddit information”, and Reddit took on Google Cloud’s Vertex AI to improve its own search. The price was <a href="${register}">reported at about $60 million a year</a>, though neither company has confirmed it.`,
    },
    {
      t: "table",
      head: ["Date", "What happened"],
      rows: [
        ["Feb 2024", "Google and Reddit announce the partnership; reported value about $60 million a year"],
        ["Jul 22, 2026", `<a href="${winbuzzer}">Reports</a> cite the Wall Street Journal saying Reddit has discussed limiting or ending Google’s AI access as renewal talks continue`],
        ["Aug 2026", `Google <a href="${roundtable}">tells The Verge</a> Reddit “gets no special preference” in its ranking systems`],
        ["Oct 29, 2026", `On licensing talks, Huffman says “<a href="${transcript}">we’re in active discussions</a>”, and that outcomes could “potentially include not doing a deal”`],
        ["Oct 30, 2026", "Reddit shares fall 29.22%"],
      ],
    },
    {
      t: "p",
      c: `Two details change how you should read a possible breakup. First, the money is small next to ads: <a href="${release}">“other” revenue, where licensing sits, was $48 million in Q3</a>, against $847 million from advertising. Reddit could afford to walk away. Second, ending the deal wouldn’t automatically remove Reddit from Google. Google’s 2024 announcement says the partnership “does not change Google’s use of publicly available, crawlable content for indexing, training, or display”. The paid feed and the public web are separate routes.`,
    },
    {
      t: "p",
      c: `As one <a href="${cnbc}">Citizens analyst note</a> put it, “search changes highlight the problem with selling content to Google”. Google may have paid a fairly modest sum for access to material that now keeps some readers on Google’s own pages. Google, for its part, has argued that AI features still send people to the web, and its own business is feeling the shift: <a href="${yahoo}">Alphabet lost almost $500 billion in market value</a> after reporting slower search ad growth, partly because AI ads earn less.`,
    },
    { t: "h2", c: "What’s changing on Reddit?" },
    {
      t: "p",
      c: `Reddit’s response is the part marketers should watch most closely. It will <a href="${sej}">test a logged-in-only experience in select markets outside the US</a> in Q4, and says the results will inform “an optimized version of logged-in-only Reddit globally”. Huffman was direct: “This is a test, but we are going to make this transition.” He expects to trade reach for engagement. It also makes scraping harder, which he says happens mostly through logged-out access.`,
    },
    {
      t: "ul",
      items: [
        "<strong>What Reddit has said:</strong> some version of the site will stay visible before a hard login prompt, and shared links should keep working.",
        "<strong>What it hasn’t decided or disclosed:</strong> which markets are in the test, and how much of a thread a search visitor can read first.",
        "<strong>Why it’s doing this:</strong> <a href=\"" + sej + "\">more than 80% of monetization</a> comes from logged-in and app users, so a logged-out reader who never returns is worth much less to Reddit.",
      ],
    },
    { t: "h2", c: "What does this mean for your Reddit marketing?" },
    {
      t: "table",
      head: ["Old assumption", "What to assume now"],
      rows: [
        ["A thread on page one brings steady clicks", "It may bring fewer clicks, even in the same position, when an AI answer sits above it"],
        ["Referral traffic shows whether Reddit is working", "It’s one signal, and a shrinking one. Add AI mentions, branded search and customer answers"],
        ["Anyone can read your thread", "A login prompt could limit what search visitors see. Plan for it"],
        ["Reddit reach comes mostly from search", "Logged-in communities are what Reddit is now building around"],
        ["Reddit will always feed Google’s AI the same way", "Licensing is in play, and so is logged-out access. Don’t base everything on one route"],
      ],
    },
    {
      t: "p",
      c: "The case for being on Reddit still holds, and may even be stronger in one way. Buyers still ask for honest recommendations there, and those conversations can shape what AI tools say. What changes is the payoff: more of it arrives as a brand name in an answer, and less as a click you can count. Reddit’s own COO said the company is <a href=\"" + sej + "\">“pretty skeptical of GEO”</a> as a reason to advertise, and that’s useful to hear. So don’t expect Reddit to measure AI visibility for you. Track it yourself.",
    },
    {"t": "p", "c": "This is exactly why we don’t treat Reddit as a traffic channel on its own at Citations. We plan each thread around what it can do for your brand on Reddit, on Google and in AI answers, and we report on each one separately, so a drop in clicks doesn’t hide what’s still working."},
    { t: "h2", c: "What should you do this month?" },
    {
      t: "ol",
      items: [
        "<strong>Check your own numbers.</strong> Compare Reddit referral sessions and signups for the last 90 days against the previous 90, by landing page and by country.",
        "<strong>Audit your top ten threads.</strong> Search the query each one targets. Is it still on page one? Is an AI Overview above it? Does the overview repeat what your thread says, or cite it?",
        "<strong>Measure AI mentions.</strong> Run 20 buyer prompts three times each in ChatGPT, Perplexity and Google, using our <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">free tracking method</a>.",
        "<strong>Put your facts on pages you own.</strong> If a thread is your best explanation of pricing or a comparison, publish a clear version on your site as well. Our <a href=\"/blog/how-to-structure-a-blog-post-for-ai\">page structure guide</a> shows how.",
        "<strong>Shift effort towards communities.</strong> Spend more of your time in active subreddits where logged-in members return, and less chasing old threads for search clicks. Our <a href=\"/blog/how-to-find-subreddits-for-your-business\">subreddit guide</a> helps you choose.",
        "<strong>Warm up real accounts now.</strong> If login becomes the norm, real members with a history will count for even more. Follow our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day plan</a>.",
        "<strong>Ask buyers where they heard of you.</strong> Add a free-text field to signups and demo forms. It catches people who read an answer and came back later.",
      ],
    },
    {"t": "callout", "tone": "short", "title": "Don’t want to do all of this yourself?", "c": "This is the work we do at Citations. On Reddit, we run established accounts in the communities your buyers use, write posts and comments that fit each one, and go after the threads that shape what Google and AI tools say about your category. We also help you structure your own content, so your pricing, comparisons and key facts are clear on pages you own. <a href=\"/call\">Book a call</a> and let’s go through your free AI visibility audit together."},
    { t: "h2", c: "What should you measure instead?" },
    {
      t: "table",
      head: ["Metric", "Why it matters now", "Where to find it"],
      rows: [
        ["Mention rate in AI answers", "Captures influence that sends no click", "Your prompt tracker"],
        ["Threads cited in AI answers", "Shows which discussions are feeding answers", "Sources listed in each answer"],
        ["Branded search", "Readers often search your name later", "Search Console"],
        ["Mentions by other users", "Unprompted recommendations are the strongest signal", "Reddit search or a monitoring tool"],
        ["Reddit referral signups", "Still useful, but a partial view", "GA4 and your CRM"],
        ["Customers naming Reddit or AI", "Direct evidence that analytics can miss", "“How did you hear about us?” field"],
      ],
    },
    {
      t: "p",
      c: "Add these to your monthly reporting now, while you can still set a baseline. Our <a href=\"/blog/ai-visibility-report\">AI visibility report template</a> shows how to lay it out. If you’re paying an agency, ask it to show you which of these it tracks, and what its plan is if the login test reaches your market. That includes us.",
    },
    {"t": "callout", "tone": "short", "title": "Would rather have this measured for you?", "c": "We track all of it at Citations: posts, comments, keywords, search rankings, prompts, AI mentions, linked citations and competitors, measured against your baseline and reported in a format you’ll actually use. <a href=\"/call\">Book a 30-minute call</a> and we’ll show you where you stand today."},
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t drop Reddit because of one earnings call. Reddit’s logged-in audience grew, and buyers are still there.",
        "Don’t quote “1 million” as a percentage or as total traffic lost. Reddit hasn’t published the baseline, and it’s a weekly average for October.",
        "Don’t buy votes to push threads back up. It breaks Reddit’s rules, and it won’t fix a click problem caused by the results page.",
        "Don’t assume a Google and Reddit breakup would remove Reddit from AI answers. Public crawling and the paid feed are separate.",
      ],
    },
    { t: "h2", c: "What to watch next" },
    {
      t: "ul",
      items: [
        "<strong>Reddit’s Q4 results:</strong> did daily users fall by the low double digits it warned about?",
        "<strong>The login test:</strong> how much of a thread can search visitors read, and what happens to its Google visibility?",
        "<strong>The licensing talks:</strong> a renewal, new terms, or no deal at all. Reddit has said any of these is possible.",
        "<strong>Other publishers:</strong> if AI Mode keeps growing, this won’t stay a Reddit story. Our guide to <a href=\"/blog/ai-overviews-traffic-drop\">AI Overviews and traffic</a> shows how to read the same pattern in your own Search Console.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why is Reddit’s traffic declining?",
      a: "Reddit says search referrals fell, and names Google’s AI Overviews and AI Mode as the biggest factor. It also believes its machine-translated pages rank lower outside the US. It hasn’t given a split between the two.",
    },
    {
      q: "How much traffic has Reddit lost from Google?",
      a: "Reddit says search traffic dropped by more than 1 million referrals a week on average in October 2026. It hasn’t published the baseline or a breakdown by search engine. US logged-out daily users fell from 30.1 million to 27.3 million between Q2 and Q3.",
    },
    {
      q: "Does Google pay Reddit for its data?",
      a: "Yes. The two companies announced a partnership in February 2024 that gave Google access to Reddit’s Data API. It’s been reported at about $60 million a year, though neither company has confirmed the price.",
    },
    {
      q: "Will Reddit require a login to read posts?",
      a: "Reddit plans to test a logged-in-only experience in select markets outside the US in Q4 2026, and says it intends to make the transition. It says some content will remain visible before a login prompt and shared links should keep working.",
    },
    {
      q: "Is Reddit marketing still worth it?",
      a: "If your buyers use Reddit, yes, but judge it on more than clicks. Add AI mentions, branded search, unprompted recommendations and what customers tell you, and keep your key facts on pages you own.",
    },
  ],
  sources: [
    { title: "Search Engine Journal: Reddit login-only test and search drop", url: sej, type: "press", read: "2026-11-02" },
    { title: "Reddit Q3 2026 earnings release (SEC)", url: release, type: "primary", read: "2026-11-02" },
    { title: "Reddit Q3 2026 earnings call transcript", url: transcript, type: "primary", read: "2026-11-02" },
    { title: "CNBC: Reddit stock falls 29%", url: cnbc, type: "press", read: "2026-11-02" },
    { title: "Yahoo Finance: a bleak internet without Google traffic", url: yahoo, type: "press", read: "2026-11-02" },
    { title: "PPC Land: Reddit blames Google AI Mode", url: ppc, type: "press", read: "2026-11-02" },
    { title: "Google: expanded Reddit partnership", url: googleDeal, type: "primary", read: "2026-11-02" },
    { title: "The Register: Reddit and Google deal", url: register, type: "press", read: "2026-11-02" },
    { title: "WinBuzzer on WSJ renewal report", url: winbuzzer, type: "press", read: "2026-11-02" },
    { title: "Search Engine Roundtable: no special preference", url: roundtable, type: "press", read: "2026-11-02" },
    { title: "PPC Land on Agarwal and Sen field experiment", url: study, type: "research", read: "2026-11-02" },
    { title: "SISTRIX: Reddit domain analysis", url: sistrix, type: "vendor", read: "2026-11-02" },
    { title: "SE Ranking: May 2026 core update", url: seRanking, type: "vendor", read: "2026-11-02" },
    { title: "Scalevise on Semrush data", url: semrush, type: "press", read: "2026-11-02" },
  ],
  related: ["reddit-seo", "ai-overviews-traffic-drop", "reddit-marketing-for-saas"],
  cta: {
    mid: "Want to see how this affects your category? We’ll check your threads, Google results and AI answers, free.",
    title: "See what Google’s AI is doing to your Reddit visibility.",
    text: "We check which threads rank for your buyers’ questions, whether AI answers use them, and where your brand is named, so you can plan around real numbers.",
    button: "Check my visibility",
  },
};
