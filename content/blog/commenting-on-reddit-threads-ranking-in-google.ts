import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;
const rules = "https://redditinc.com/policies/reddit-rules";
const spam = help("360043504051", "Spam");
const cites = "https://ahrefs.com/blog/why-chatgpt-cites-pages/";
const profound = "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search";
const googleBlog = "https://blog.google/products/search/ai-search-driving-more-queries-higher-quality-clicks/";
const pew = "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/";

export const post: Post = {
  slug: "commenting-on-reddit-threads-ranking-in-google",
  tracker: "4.9",
  bucket: "reddit",
  style: "RS Playbook",
  title: "How to find Reddit threads ranking on Google (and comment well)",
  dek: "Some Reddit threads keep getting read for years because they rank on Google and feed AI answers. Here’s how to find the ones in your category, decide which are worth joining, and write a comment that adds to them instead of getting removed.",
  description: "How to find Reddit threads ranking on Google in your category, check if AI cites them, choose which to join, and write comments that add value and stay up.",
  targetQuery: "how to find reddit threads ranking on google",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Find Reddit threads that rank on Google by searching your buyers’ questions with site:reddit.com, noting threads on page one, and checking which ones AI assistants use. Then pick threads that are still open for comments, are in communities that allow your kind of contribution, and are missing something you can add, such as current prices, a new option or a better answer. Write one specific, useful comment from a personal account, disclose where you work if you mention your product, and don’t edit old comments into ads. One good comment on a thread people keep finding can matter more than dozens on new posts.",
    },
    {
      t: "p",
      c: "Most Reddit posts are read for a day or two, then disappear. A small number keep getting traffic for years, because they rank on Google for exactly the questions buyers ask: “best X for Y”, “is X worth it”, “alternatives to X”. Those threads are also part of what AI assistants read when they answer the same questions.",
    },
    {
      t: "p",
      c: "A useful comment on the right one reaches a steady stream of buyers. A careless one gets removed. Here’s how to do it well.",
    },
    { t: "h2", c: "Why these threads matter" },
    {
      t: "ul",
      items: [
        `<strong>Google is sending more traffic to forums.</strong> Google says sites with <a href="${googleBlog}">forums, videos, podcasts and user-generated posts are seeing increased traffic</a>.`,
        `<strong>Reddit shows up in AI summaries.</strong> In <a href="${pew}">Pew Research’s study</a>, Wikipedia, YouTube and Reddit were the three most frequently linked sources in Google’s AI summaries.`,
        `<strong>AI assistants read Reddit heavily.</strong> Reddit was the most-cited domain in <a href="${profound}">Profound’s analysis of AI citations</a>. In <a href="${cites}">Ahrefs’ study of 1.4 million ChatGPT prompts</a>, ChatGPT retrieved Reddit content heavily but rarely linked it, which suggests it uses threads to understand opinion even when it cites other pages.`,
      ],
    },
    {
      t: "p",
      c: "So a well-placed comment can reach people three ways: readers of the thread, searchers who land on it from Google, and AI answers that draw on it.",
    },
    { t: "h2", c: "Step 1: Find threads that rank" },
    {
      t: "p",
      c: "Search Google for the questions your buyers ask, limited to Reddit. Use a private window so your own history doesn’t affect results:",
    },
    {
      t: "code",
      label: "Google searches",
      c: "site:reddit.com best [category] for [audience]\nsite:reddit.com [competitor] alternative\nsite:reddit.com [competitor] vs [competitor]\nsite:reddit.com [category] worth it\nsite:reddit.com how do you [task your product helps with]\nsite:reddit.com [problem] recommendation",
    },
    {
      t: "p",
      c: "Then search the same questions without <code>site:reddit.com</code> and note which Reddit threads appear on page one of normal results, including in “Discussions and forums” sections. Those are the threads searchers actually click.",
    },
    { t: "h2", c: "Step 2: Check which threads AI uses" },
    {
      t: "ol",
      items: [
        "Ask the same questions in Perplexity, ChatGPT (with search on) and Google AI Mode.",
        "Note any Reddit threads linked as sources.",
        "Also note when an answer clearly reflects a thread’s opinions, such as the same tools recommended for the same reasons, even if the thread isn’t linked.",
      ],
    },
    {
      t: "p",
      c: "Threads that rank on Google and appear in AI sources are your highest priority. Threads that only rank are second; threads that only appear in AI answers are third, because fewer people read them directly.",
    },
    { t: "h2", c: "Step 3: Decide which threads are worth joining" },
    {
      t: "table",
      head: ["Check", "Good sign", "Skip if"],
      rows: [
        ["Still open", "You can comment", "Archived or locked"],
        ["Community rules", "Allows helpful replies; disclosure OK", "Bans product mentions or new comments on old posts"],
        ["Gap", "Answers are outdated, thin or missing an option", "It’s already well answered and current"],
        ["Fit", "You have real experience with the question", "You’d only be adding a product mention"],
        ["Visibility", "Ranks on page one; cited by AI", "Buried and not cited"],
      ],
    },
    {
      t: "p",
      c: "The gap matters most. Old threads often recommend tools that have changed price, been discontinued or been overtaken. A comment that updates the thread is genuinely useful to everyone who finds it later. If you can’t name a specific gap in one sentence, the thread probably doesn’t need your comment, and that’s fine: move to the next one on your list.",
    },
    { t: "cta" },
    { t: "h2", c: "Reading a thread before you reply" },
    {
      t: "p",
      c: "Spend five minutes reading the whole thread, not just the top answer. You’re looking for three things. First, what the original poster actually needed: their situation, budget and constraints, which are often buried in a follow-up comment. Second, what’s already been said well, so you don’t repeat it. Third, what’s wrong or out of date: discontinued tools, old prices, advice that no longer applies.",
    },
    {
      t: "p",
      c: "Also check whether anyone from a competitor has already commented, and how the community reacted. If a disclosed vendor comment was well received, the community is open to that kind of contribution. If vendor comments were downvoted or removed, be extra careful, or don’t mention your product at all and just add the most useful update you can.",
    },
    {
      t: "p",
      c: "Finally, look at the date of the most recent comment. A thread still collecting replies from searchers is one where your comment will be seen. A thread with no activity in years may still rank, but fewer people scroll that far, so put your most useful point in the first line.",
    },
    { t: "h2", c: "Step 4: Write a comment that adds something" },
    {
      t: "p",
      c: "Your comment has to earn its place among replies that may be years old and highly upvoted. Lead with what’s new or missing:",
    },
    {
      t: "code",
      label: "Comment template",
      c: "Update for anyone finding this in [year]: [what's changed - a price,\na discontinued tool, a new option].\n\nFor [the original question], here's what I'd look at now:\n- [Option A]: best if [situation]. Watch out for [honest downside].\n- [Option B]: cheaper; [limitation].\n- [Option C]: [one line].\n\n[One specific tip from experience.]\n\n(Disclosure: I work at [company], which makes [Option C].)",
    },
    {
      t: "ul",
      items: [
        "<strong>Answer the original question,</strong> not a different one you’d prefer to answer.",
        "<strong>Name alternatives honestly,</strong> including competitors where they fit better.",
        "<strong>Disclose</strong> if you mention your own product. Reddit’s rules ask people to <a href=\"" + rules + "\">“participate authentically in communities where you have a personal interest”</a>.",
        "<strong>Skip the link</strong> unless someone asks or the community allows it. Name the product; people can search for it.",
        "<strong>Keep it scannable:</strong> short paragraphs, a list, the key point first.",
      ],
    },
    { t: "h2", c: "Step 5: Follow up" },
    {
      t: "p",
      c: "Check the thread a few days later. Answer any replies to your comment. Old threads can still get new comments from people who found them through search, and a helpful follow-up builds the same reputation as the original comment. Then add the thread to a list and check it every few months; if your information goes out of date, add a new reply with the update.",
    },
    { t: "h2", c: "Who on your team should comment" },
    {
      t: "p",
      c: "The best comments come from people with first-hand experience of the question: a support lead who has seen hundreds of setups, an engineer who knows the integration, a founder who has made the trade-off. Use their personal accounts, ideally with some normal history, and make sure their profile says where they work. Comments from brand-new accounts are often filtered in the communities where these threads live, so warm accounts up first. Our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day warm-up plan</a> covers it.",
    },
    { t: "h2", c: "When to start a new thread instead" },
    {
      t: "p",
      c: "Sometimes the best ranking thread is archived, locked or too old for its answers to be relevant. In that case, a new post can work, if the community allows it and you bring something worth discussing:",
    },
    {
      t: "ul",
      items: [
        "Ask the question again with today’s context: “The [year] thread on this is out of date. What are people using now for [situation]?”",
        "Share genuinely new information, like a comparison you ran or data you collected, with the full detail in the post.",
        "Don’t answer your own question with your product from another account. That’s inauthentic behaviour.",
      ],
    },
    { t: "h2", c: "Handling pushback in the thread" },
    {
      t: "p",
      c: "If someone replies that you’re just advertising, don’t argue. Acknowledge it, point to the disclosure, and add something useful that has nothing to do with your product:",
    },
    {
      t: "code",
      label: "Reply template",
      c: "Fair point, I do work on [product], which is why I said so.\nIf it helps regardless: [one genuinely useful tip that applies\nwhatever tool you use].",
    },
    { t: "h2", c: "Measuring the impact" },
    {
      t: "ul",
      items: [
        "<strong>Upvotes and replies</strong> on your comment over the following months.",
        "<strong>Referral traffic</strong> from reddit.com in your analytics, especially to pages related to the thread’s topic.",
        "<strong>“How did you hear about us?”</strong> answers that mention Reddit.",
        "<strong>AI answers:</strong> whether assistants’ recommendations for the same question start to include you.",
      ],
    },
    {
      t: "p",
      c: "Expect this to be slow and cumulative, and don’t judge it after a week. The value of a comment on a ranking thread builds over the months that people keep finding it.",
    },
    { t: "h2", c: "What not to do" },
    {
      t: "table",
      head: ["Don’t", "Why"],
      rows: [
        ["Comment the same thing on many old threads", `Repetitive posting for exposure is listed in Reddit’s <a href="${spam}">spam policy</a>`],
        ["Edit an old, upvoted comment to add your product", "Misleading; moderators and users treat it as spam"],
        ["Ask colleagues to upvote your comment", "Vote manipulation"],
        ["Create new accounts to “agree” with your comment", "Inauthentic behaviour; leads to suspensions"],
        ["Drop a link with no answer", "Removed almost everywhere"],
        ["Pay others to post in ranking threads", "Undisclosed paid promotion"],
      ],
    },
    { t: "h2", c: "Building a thread list" },
    {
      t: "table",
      head: ["Column", "Example"],
      rows: [
        ["Thread", "Link and title"],
        ["Query it ranks for", "“best invoicing app for freelancers”"],
        ["Google position", "Page 1, position 3"],
        ["Cited by AI?", "Perplexity, for the same question"],
        ["Community rules", "Disclosure required; no links"],
        ["Gap", "Top answer recommends a tool that’s since raised prices"],
        ["Commented?", "Date, link to comment"],
        ["Next check", "Date"],
      ],
      caption: "Twenty to thirty threads is plenty to start. Keep it in a shared sheet.",
    },
    { t: "h2", c: "How often to do this" },
    {
      t: "p",
      c: "Treat ranking threads as a monthly task, not a campaign. Once a month, re-run your Google searches and AI checks, add any new ranking threads to your list, and pick two or three where your team can add something genuinely useful. Check the threads you’ve already joined for replies and for information that’s gone out of date. Spread comments across different people and communities, so no single account or community sees a sudden burst of activity from your company.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you make time-tracking software for agencies. Searching “site:reddit.com best time tracking for agencies” turns up a thread from two years ago on page one of Google, with 140 comments. Perplexity cites it when asked the same question. The top answers recommend two tools, one of which has since dropped its small-team plan.",
    },
    {
      t: "p",
      c: "Your head of customer success, who has a personal account with years of normal history, adds a comment: an update noting the plan change, a short list of three current options with honest trade-offs including a competitor, a tip about tracking billable versus non-billable time, and a disclosure that they work on one of the tools. No link. Over the following months, the comment collects upvotes and a few replies asking for more detail, which they answer in the thread.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t treat ranking threads as ad space. Communities can tell.",
        "Don’t comment on archived threads by any workaround. Find a newer one or start a helpful new post where allowed.",
        "Don’t use a brand-new account. Filters often hide comments from new accounts.",
        "Don’t forget to read the community’s rules first.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Picking threads by upvotes alone.</strong> A thread that ranks and is cited matters more than one that was popular once.",
        "<strong>Comments that ignore the question.</strong> Answer what was asked, in the poster’s situation.",
        "<strong>No disclosure.</strong> It’s the fastest way to lose trust.",
        "<strong>Never revisiting.</strong> Update your information when it changes.",
        "<strong>Doing too many at once.</strong> A few careful comments beat a burst that looks like a campaign.",
      ],
    },
    {
      t: "p",
      c: "For finding the communities themselves, see our guide to <a href=\"/blog/how-to-find-subreddits-for-your-business\">finding subreddits for your business</a>, and check the <a href=\"/blog/reddit-self-promotion-rules\">self-promotion rules</a> before you post.",
    },
  ],
  faqs: [
    {
      q: "How do I find Reddit threads that rank on Google?",
      a: "Search your buyers’ questions on Google with site:reddit.com, then search them normally and note which Reddit threads appear on page one, including in the discussions and forums section.",
    },
    {
      q: "Is it OK to comment on old Reddit threads?",
      a: "If the thread is still open and the community allows it, yes, as long as your comment adds something useful, like updated information. Some communities discourage replies to old posts, so check the rules.",
    },
    {
      q: "Can I mention my product in a Reddit thread that ranks on Google?",
      a: "Where the community allows it, answer the question first, name honest alternatives and disclose that you work at the company. Skip the link unless someone asks for it.",
    },
    {
      q: "Do Reddit threads affect AI answers?",
      a: "Yes. AI assistants read Reddit heavily. Some cite threads directly, and others use them to understand opinion even when they cite other pages.",
    },
    {
      q: "How many Reddit threads should I comment on?",
      a: "Start with a list of twenty to thirty that rank and are cited by AI, and add a few careful comments a week rather than many at once.",
    },
  ],
  sources: [
    { title: "Reddit Rules", url: rules, type: "primary", read: "2026-10-29" },
    { title: "Reddit help: Spam", url: spam, type: "primary", read: "2026-10-29" },
    { title: "Ahrefs: why ChatGPT cites pages", url: cites, type: "vendor", read: "2026-10-29" },
    { title: "Profound: Reddit and AI search", url: profound, type: "vendor", read: "2026-10-29" },
    { title: "Google: AI in Search driving more queries", url: googleBlog, type: "primary", read: "2026-10-29" },
    { title: "Pew Research: AI summaries and clicks", url: pew, type: "research", read: "2026-10-29" },
  ],
  related: ["how-to-find-subreddits-for-your-business", "reddit-self-promotion-rules", "reddit-marketing-for-saas"],
  cta: {
    mid: "Want a list of the Reddit threads that rank and feed AI answers in your category? We’ll build it.",
    title: "Get your ranking-thread list.",
    text: "We find the Reddit threads ranking on Google and cited by AI for your buyers’ questions, check each community’s rules, and flag the gaps your team can fill.",
    button: "Find my threads",
  },
};
