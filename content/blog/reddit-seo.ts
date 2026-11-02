import type { Post } from "../../lib/blog";

const semrush = "https://scalevise.com/resources/reddit-166-million-keywords-content-strategy/";
const seRanking = "https://seranking.com/blog/google-may-2026-core-update-analysis/";
const growtika = "https://www.growtika.com/blog/reddit-backlinks-research";
const sistrix = "https://www.sistrix.com/blog/reddit-domain-analysis/";
const google = "https://www.relevantaudience.com/seo/google-reddit-no-special-preference/";
const profound = "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search";
const cites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const spam = "https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam";

export const post: Post = {
  slug: "reddit-seo",
  tracker: "4.2",
  bucket: "reddit",
  style: "RS Playbook",
  title: "Reddit SEO: how to get threads ranking in Google and cited by AI",
  dek: "Reddit ranks for about 166 million keywords, and most of its top pages have no backlinks. Here’s how to find the searches you can win, write threads worth ranking, and track what happens over 12 weeks.",
  description: "Reddit SEO playbook: find searches where Reddit already ranks, write threads people answer, add to threads that rank, and track Google and AI visibility.",
  targetQuery: "reddit seo",
  status: "published",
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Reddit SEO means getting useful threads about your category to show up on Google and in AI answers. Search your buyers’ questions, keep the ones where Reddit already appears on page one, then either add a strong comment to the thread that ranks or write a new post in the right community using the buyer’s words in the title. Plan on 12 weeks: two weeks of research, six of steady posting, four of tracking and updating. Never buy votes or fake conversations. Reddit bans both.",
    },
    {
      t: "p",
      c: "Reddit gives a small company something it can’t easily get on its own domain: a page on a site Google already ranks well, published this week. You don’t own that page, and you can’t control the replies, which is why it has to deserve its place. This playbook is for founders and marketers who want Reddit to bring in buyers from search, without getting banned from the communities they need.",
    },
    { t: "h2", c: "Why Reddit threads rank" },
    {
      t: "table",
      head: ["Measure", "Number", "Source"],
      rows: [
        ["Keywords reddit.com ranks for", "About 166 million (about 65 million on page one)", `<a href="${semrush}">Semrush data, August 2026</a>`],
        ["Share of Google’s top 3 positions", "10.24%, up from 8.56% after March", `<a href="${seRanking}">SE Ranking, about 100,000 keywords</a>`],
        ["High-traffic Reddit pages with no referring domains", "53% (45 of the top 50)", `<a href="${growtika}">Growtika, 8,743 pages</a>`],
        ["Ranking keywords that trigger AI Overviews", "About 35 million, with Reddit cited for more than 15 million", `<a href="${semrush}">Semrush data, August 2026</a>`],
      ],
    },
    {
      t: "p",
      c: `Two things follow. First, you don’t need to build links to a thread. Growtika’s numbers suggest the strength of the domain does much of the work. Second, you’re writing for a page that competes in the normal way: Google <a href="${google}">told The Verge</a> that Reddit “gets no special preference” in its ranking systems.`,
    },
    {
      t: "p",
      c: `Don’t build your plan around one lucky thread, either. <a href="${sistrix}">SISTRIX’s July 2026 report</a> shows Reddit’s visibility has fallen back from its October 2025 peak and gives it a strong negative trend, and only 16% of its US rankings are in the top three. Its gains also vary by topic: SE Ranking found big rises in pets and education after May, and small ones in real estate and healthcare. Your goal is a steady presence across many questions.`,
    },
    { t: "h2", c: "Weeks 1–2: Find the searches worth winning" },
    {
      t: "p",
      c: "Start with what your buyers type, and check what Google shows. Use a clean or private browser window, because your search history will otherwise change the results.",
    },
    {
      t: "ol",
      items: [
        "<strong>List 30 to 50 buyer questions.</strong> Use sales calls, support tickets and competitor comparison pages. Our <a href=\"/blog/prompt-research-for-ai-search\">prompt research guide</a> shows how to build the list.",
        "<strong>Search each one on Google.</strong> Note whether a Reddit thread appears on page one, or in the Discussions and forums section.",
        "<strong>Add “reddit” to the query.</strong> Searching “best crm for startups reddit” shows what people want from Reddit on that topic.",
        "<strong>Ask the same questions in ChatGPT and Perplexity.</strong> Note any Reddit thread cited and which brands get named.",
        "<strong>Record each thread’s age, comment count and whether it’s still open.</strong>",
      ],
    },
    {
      t: "table",
      head: ["What you see", "What to do"],
      rows: [
        ["Reddit thread on page one, still open, your category poorly covered", "Add a detailed comment. This is your fastest win."],
        ["Reddit thread on page one, archived or locked", "Write a new, more current post in the same community"],
        ["Reddit in Discussions and forums, not in the main results", "Write a new post with the exact question in the title"],
        ["No Reddit in the results, mostly vendor pages", "Skip it, or cover the question on your own site"],
        ["Your brand is named negatively in a ranking thread", "Reply openly as yourself, and fix the real problem first"],
      ],
    },
    {
      t: "p",
      c: "Score each question by buying intent. “Best X for Y” and “X vs Y” beat general questions, because the person is closer to a decision. For more on finding them, see <a href=\"/blog/commenting-on-reddit-threads-ranking-in-google\">how to find Reddit threads ranking on Google</a>.",
    },
    { t: "h2", c: "Choose the right community" },
    {
      t: "p",
      c: "A thread’s home affects both its reach and its survival. Look for a subreddit where the question already gets asked, where the rules allow your kind of contribution, and where posts get real replies. Growtika found traffic is spread across a long tail of niche subreddits, with even r/ChatGPT, the largest, holding only 3.9% of traffic in its sample. A small, focused community can do the job.",
    },
    {
      t: "ul",
      items: [
        "<strong>Read the rules and the last 20 posts.</strong> Note what gets upvotes and what gets removed.",
        "<strong>Check for a stickied thread</strong> for tool recommendations or self-promotion. Some communities restrict that talk to one place.",
        "<strong>Make sure your account qualifies.</strong> Many communities filter new or low-karma accounts. Follow our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day warm-up plan</a> before you post.",
      ],
    },
    { t: "h2", c: "Weeks 3–8: Write threads worth ranking" },
    {
      t: "p",
      c: "A title for Reddit SEO has two jobs: it must match the search and it must sound like a person in that community wrote it. Use the words your buyers use, including qualifiers such as team size or budget.",
    },
    {
      t: "table",
      head: ["Weak title", "Stronger title"],
      rows: [
        ["Thoughts on CRMs?", "Best CRM for a 5-person startup with no sales ops? What we tried and dropped"],
        ["Our new tool for inventory management!", "How do small Shopify stores manage inventory past 200 orders a month?"],
        ["SEO tips for 2026", "What changed in our Search Console after AI Overviews hit our main keywords"],
      ],
    },
    { t: "p", c: "Then use a body structure that gives people something to respond to:" },
    {
      t: "code",
      label: "Post template",
      c: "Context: who you are and your situation, in two lines. Say if you work on a product in this space.\nWhat you tried: tools or methods, with real numbers (cost, time, team size).\nWhat worked and what didn't: be specific, including the downsides.\nThe question: ask something people here can answer from experience.\nEdit later: summarise the best replies at the top of the post.",
    },
    {
      t: "p",
      c: "That last line helps twice. A good summary makes the thread more useful to searchers, and it gives AI assistants a clear passage to work from. It’s also an honest reason to come back, reply and keep the discussion going.",
    },
    { t: "cta" },
    { t: "h2", c: "Write comments for threads that already rank" },
    {
      t: "p",
      c: "On an old, ranking thread, the top comments get seen first, but a new comment can still help readers who scroll, and AI tools may read the whole page. Your comment should earn its place with something the thread lacks.",
    },
    {
      t: "ul",
      items: [
        "<strong>Update it.</strong> “This thread is from 2024. Pricing has changed since: here’s what it costs now.”",
        "<strong>Add a comparison.</strong> A short table or list of what each option suits is often missing.",
        "<strong>Name your connection.</strong> “I work at [brand], so I’m biased, but here’s where we fit and where we don’t.”",
        "<strong>Mention alternatives.</strong> A comment that names competitors fairly reads as advice, not an ad.",
        "<strong>Leave out the link</strong> unless the rules allow it and someone needs it.",
      ],
    },
    { t: "h2", c: "What helps a thread keep ranking" },
    {
      t: "p",
      c: "No independent study has isolated which features of a post make it rank, so use this as a working list and test it on your own threads. All of it also makes the thread better for readers, so you lose nothing if Google doesn’t respond.",
    },
    {
      t: "table",
      head: ["Do this", "Why it should help"],
      rows: [
        ["Put the question in the title, in plain words", "Matches the search and the sub-queries AI tools run"],
        ["Reply to every reasonable comment in the first day", "Adds depth and keeps the discussion moving"],
        ["Edit the post with a summary of the replies", "Gives searchers the answer quickly"],
        ["Link to the thread from your own relevant articles when it adds something", "Sends real readers and helps search engines find it"],
        ["Update or revisit the topic when facts change", "Old answers go stale, so a fresher thread can replace yours"],
      ],
    },
    {"t": "h2", "c": "What a strong comment looks like"},
    {"t": "p", "c": "Here’s the same reply written two ways, for a ranking thread asking which inventory tool suits a small store. The second one gives a reader something to use, and says who wrote it."},
    {"t": "table", "head": ["Weak", "Stronger"], "rows": [["Great question! You should check out Acme. It’s the best inventory tool for small stores and has tons of features.", "I work at Acme, so factor that in. Under about 200 orders a month, a spreadsheet plus your store’s built-in stock tracking is often enough. Past that, overselling across channels is the usual problem. We handle that, and so does [Competitor], which is better if you need purchase orders. Check how each one prices extra sales channels, since that’s where costs tend to jump."]]},
    {"t": "p", "c": "Before you post, check it against three questions. Does it answer what was asked? Would it still help someone who never buys from you? Does it say who you are? If any answer is no, rewrite it or leave that thread alone."},
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        `Don’t buy upvotes or use extra accounts to reply to yourself. Reddit’s <a href="${spam}">spam policy</a> covers this, and it can cost you the account.`,
        "Don’t stuff keywords into titles. People downvote it, and moderators remove it.",
        "Don’t paste the same comment across threads. It gets flagged and looks like what it is.",
        "Don’t delete a post because it got tough replies. Answer them. A brand that responds well reads better than one that disappears.",
      ],
    },
    { t: "h2", c: "How Reddit shows up in AI answers" },
    {
      t: "p",
      c: `Reddit’s AI presence varies by tool and over time. In <a href="${profound}">Profound’s analysis of more than 4 billion citations</a>, Reddit was the most-cited domain across answer engines with a 3.11% share, ranking first on Perplexity and second on ChatGPT, but 31st on Copilot. ChatGPT’s Reddit share also swung from about 7% to about 1% and back to about 3% within weeks. And in <a href="${cites}">Ahrefs’ study of 1.4 million prompts</a>, ChatGPT read a lot of Reddit content but cited Reddit results only 1.93% of the time.`,
    },
    {
      t: "p",
      c: "So track two things: threads cited as links, and whether the answer repeats what those discussions say about you. A thread can shape an answer without being linked. Profound also found the average cited post was about a year old, which is a good reason to write things that stay true.",
    },
    { t: "h2", c: "Weeks 9–12: Track, then repeat what works" },
    {
      t: "code",
      label: "Weekly tracking sheet (one row per thread)",
      c: "Thread URL | Community | Target search | Date posted\nStill live? | Upvotes | Comments\nGoogle position for target search | In Discussions and forums?\nCited in ChatGPT / Perplexity / AI Overviews?\nReferral visits | Signups | Notes",
    },
    {
      t: "table",
      head: ["By the end of", "A reasonable target for a new program"],
      rows: [
        ["Week 4", "Accounts warmed up, 20 or more useful comments, a list of 10 priority threads"],
        ["Week 8", "4 to 8 posts live, most still up, real replies on at least half"],
        ["Week 12", "At least one thread on page one for a long-tail search, or a clear reason why not"],
      ],
    },
    {
      t: "p",
      c: "These targets are our advice, and categories vary. Once you have 12 weeks of data, look at which communities, title styles and question types did best, then do more of those. For measuring the AI side, use our <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">free brand mention tracking method</a>.",
    },
    { t: "h2", c: "Common Reddit SEO mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Starting with high-volume keywords.</strong> Long, specific questions are easier to win and closer to a sale.",
        "<strong>Posting from a brand-new account.</strong> Filters remove the post before anyone reads it.",
        "<strong>Writing for Google rather than the community.</strong> A downvoted or removed thread can’t rank for long.",
        "<strong>Ignoring your own site.</strong> Threads send attention, but buyers still check your pages. Keep them clear and current.",
        "<strong>Not disclosing who you are.</strong> People on Reddit check post histories. Getting caught does more harm than a disclosure ever would.",
        "<strong>Measuring only sessions.</strong> Reddit influences searches and AI answers that never send a click.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Reddit SEO?",
      a: "It’s the work of getting useful Reddit threads about your category to appear on Google and in AI answers, by choosing questions where Reddit already ranks and writing posts and comments worth reading.",
    },
    {
      q: "Do Reddit posts rank on Google?",
      a: "Yes. Semrush’s August 2026 data has reddit.com ranking for about 166 million keywords, with about 65 million on page one, though rankings for individual threads move around.",
    },
    {
      q: "Do Reddit threads need backlinks to rank?",
      a: "Often not. Growtika found 53% of high-traffic Reddit pages had no referring domains, including 45 of the top 50. The strength of the Reddit domain seems to do much of the work.",
    },
    {
      q: "How long does it take a Reddit thread to rank?",
      a: "It varies by topic and competition, and no reliable study sets a timeline. Plan on a 12-week program so you can judge a set of threads instead of one post.",
    },
    {
      q: "Is Reddit SEO against Reddit’s rules?",
      a: "Writing useful, honest posts isn’t. Vote manipulation, fake accounts and undisclosed promotion are the problem, and individual communities can set stricter rules on top of Reddit’s.",
    },
  ],
  sources: [
    { title: "Scalevise on Semrush/Search Engine Land data", url: semrush, type: "press", read: "2026-11-02" },
    { title: "SE Ranking: May 2026 core update", url: seRanking, type: "vendor", read: "2026-11-02" },
    { title: "Growtika: Reddit backlinks research", url: growtika, type: "research", read: "2026-11-02" },
    { title: "SISTRIX: Reddit domain analysis", url: sistrix, type: "vendor", read: "2026-11-02" },
    { title: "Relevant Audience on Google’s Verge statement", url: google, type: "press", read: "2026-11-02" },
    { title: "Profound: the data on Reddit and AI search", url: profound, type: "vendor", read: "2026-11-02" },
    { title: "Ahrefs: why ChatGPT cites pages", url: cites, type: "vendor", read: "2026-11-02" },
    { title: "Reddit Help: Spam", url: spam, type: "primary", read: "2026-11-02" },
  ],
  related: ["commenting-on-reddit-threads-ranking-in-google", "how-to-find-subreddits-for-your-business", "reddit-marketing-for-saas"],
  cta: {
    mid: "Want a list of the Reddit threads ranking and getting cited for your category? We’ll pull it for you, free.",
    title: "See which Reddit threads shape your category.",
    text: "We find the threads that rank on Google and show up in AI answers for your buyers’ questions, then show you where your brand is missing.",
    button: "Find my threads",
  },
};
