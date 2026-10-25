import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;

export const post: Post = {
  slug: "why-was-my-reddit-post-removed",
  tracker: "4.4",
  bucket: "reddit",
  style: "RS Answer",
  title: "Why was my Reddit post removed? 10 causes and how to tell which",
  dek: "Most removals come from filters a moderator switched on, not from a person reading your post. The fix depends on which one caught you, and each leaves a different trace.",
  description: "Why was my Reddit post removed? The 10 causes, from AutoModerator and karma minimums to Crowd Control and CQS, and how to tell which one caught you.",
  targetQuery: "why was my reddit post removed",
  status: "draft",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Vijay Singh",
  takeaways: [
    "First check the post is actually gone: sort the community by <strong>New</strong> and open it logged out.",
    "Most removals are automatic. AutoModerator, karma and account-age minimums, Crowd Control and the reputation filter all act before a human reads anything.",
    "Reddit’s <strong>Poster Eligibility Guide</strong> tells you which karma, account-age or email checks you fail. It won’t tell you the thresholds.",
    "Reddit gives every account a hidden <strong>Contributor Quality Score</strong>, and moderators can filter on it in AutoModerator.",
    "If your posts are missing everywhere, not just in one community, your account may be flagged for spam. That has its own appeal form.",
  ],
  body: [
    {
      t: "callout",
      tone: "answer",
      c: "Your post was most likely removed by an automatic filter, not a moderator. Communities can require minimum karma, account age and a verified email; collapse posts from new accounts and non-members (Crowd Control); and filter accounts with a low Contributor Quality Score. If the post broke a written community rule, a moderator or AutoModerator removed it. If it looks like repeated self-promotion, Reddit’s spam policy applies. Each cause leaves a different trace, and the table below shows how to tell them apart.",
    },
    {
      t: "p",
      c: "You write a careful post, it appears on your profile, and nobody replies. You assume the post was boring. Often nobody ever saw it, because a filter held it for review or removed it within seconds, and Reddit doesn’t always tell you. This guide covers the ten causes, how to tell which one caught you, and what to change before you post again.",
    },
    { t: "h2", c: "Is your post actually removed?" },
    {
      t: "p",
      c: "Check two things before assuming anything. Reddit’s own help page lists the first: most communities sort by <strong>Hot</strong>, so a new post with no votes sits below everything else. Sort by <strong>New</strong> and look again. Second, open the community in a private window where you’re logged out. Your own posts can still look normal to you after removal, so the logged-out view is the honest one.",
    },
    {
      t: "p",
      c: "If the post shows logged out, it isn’t removed, it’s just quiet. If it’s missing, keep reading. If your whole profile is missing logged out, skip to cause 10.",
    },
    { t: "h2", c: "What are the 10 causes, and how do you tell which one it was?" },
    {
      t: "table",
      caption: "Built from Reddit’s Help Center articles, read 25 October 2026. Reddit doesn’t publish the karma or account-age numbers communities use.",
      head: ["#", "Cause", "Who acts", "The trace it leaves", "What to do"],
      rows: [
        ["1", "A community rule (format, topic, flair)", "Moderator or AutoModerator", "Often a removal comment or message naming the rule", "Read the sidebar rules, fix, and message the mods"],
        ["2", "AutoModerator keyword, link or title rule", "AutoModerator", "Gone almost immediately, sometimes with an automated reply", "Remove the link or phrase, then repost or ask the mods"],
        ["3", "Karma minimum", "AutoModerator config", "Poster Eligibility Guide shows karma criteria not met", "Earn community karma by commenting first"],
        ["4", "Account-age minimum", "AutoModerator config", "Poster Eligibility Guide shows account age not met", "Wait; there is no shortcut"],
        ["5", "Unverified email", "AutoModerator config", "Poster Eligibility Guide shows verification not met", "Verify your email"],
        ["6", "Crowd Control", "Safety filter", "Post held for mod review; invisible until approved", "Join the community, build karma there, or wait for approval"],
        ["7", "Reputation filter (Contributor Quality Score)", "Safety filter", "Held in the mod queue; based on your account, not the post", "Build a normal posting history; verify your email"],
        ["8", "Reddit’s site-wide spam filter", "Reddit", "New accounts with little karma hit posting limits", "Comment in the community first, then post"],
        ["9", "Self-promotion read as spam", "Moderator or Reddit", "Removed after the link or brand is noticed", "Post less often about your own business; add value without the link"],
        ["10", "Account flagged for spam or inauthentic activity", "Reddit", "Posts, comments and profile missing everywhere when logged out", "Use Reddit’s appeal form"],
      ],
    },
    { t: "h2", c: "Why does AutoModerator remove posts that follow the rules?" },
    {
      t: "p",
      c: "AutoModerator is a rules engine each community configures for itself. It reads your title, body, links and account details and acts in milliseconds, with no judgement about whether the post was helpful. A rule written to stop link spam removes your useful post too, if the post has a link.",
    },
    {
      t: "quote",
      c: "You can have a post removed because you didn’t end your question in the syntax the bot was expecting... and even if you fix it, and appeal to the mods, and they reverse the decision, your post gets restored as older and without any votes so nobody will ever see it.",
      cite: "dbg31415, Hacker News, July 2016",
      href: "https://news.ycombinator.com/item?id=12143493",
    },
    {
      t: "p",
      c: "That complaint is ten years old and still accurate about the cost. A reversed removal rarely recovers the post’s reach, so the time to get it right is before you press Post. Reddit now runs <strong>Post Check</strong>, which uses a language model to flag likely rule breaks while you write. Its help page says it highlights problems and won’t stop you posting, so treat its warnings as the cheapest edit you’ll get.",
    },
    { t: "h2", c: "What are karma and account-age minimums?" },
    {
      t: "p",
      c: "Karma is the score your posts and comments earn from votes. Many communities refuse posts from accounts below a karma or account-age threshold, and Reddit’s <strong>Poster Eligibility Guide</strong> now tells you, when you try to post, which of these checks you fail: comment karma, post karma, combined karma, community karma, account age and email verification. It doesn’t tell you the number. Reddit says “specific karma and account age thresholds used by communities aren’t disclosed at this time to deter potential misuse”, and updates each community’s criteria every six hours.",
    },
    {
      t: "quote",
      c: "Reddit has proved difficult, because it has strict account age rules and karma requirements for posts. The subreddits I want to post to also usually have strict spam rules, which would include my posts.",
      cite: "guywithahat, a SaaS founder describing their launch channels, Hacker News, July 2024",
      href: "https://news.ycombinator.com/item?id=40996700",
    },
    {
      t: "p",
      c: "That is one founder’s account of the most common version of this problem: a brand-new account trying to post about its own product in a community that filters exactly that. Reddit’s own advice is that “even earning a small amount of karma by commenting on another post within a community” can help you past the filter. Comment usefully first. Post later.",
    },
    { t: "cta" },
    { t: "h2", c: "What are Crowd Control and the Contributor Quality Score?" },
    {
      t: "p",
      c: "These are the filters most posters have never heard of. <strong>Crowd Control</strong> lets moderators hold posts from people who aren’t trusted members of the community yet. Filtered posts go to the mod queue and stay invisible until a moderator approves them. At its strictest setting it filters accounts with negative community karma, new accounts and non-members.",
    },
    {
      t: "p",
      c: "The <strong>Contributor Quality Score (CQS)</strong> is a hidden rating Reddit gives every account, “based on a host of signals including past actions taken on a user’s account, network and location signals, and steps a user has taken to secure their account (e.g. email verification)”. It puts accounts in five tiers, from Highest to Lowest. Moderators can filter on it directly in AutoModerator, and the <strong>reputation filter</strong> uses it to hold content from “unestablished accounts”. Reddit notes the reputation filter judges the account, not the post. A perfect post from a low-CQS account still gets held.",
    },
    {
      t: "quote",
      c: "A new human user will spend actual time creating a thoughtful and helpful post, only to be greeted by “sorry, your post has been removed by automod because you don’t meet criteria”. They get disheartened and walk away forever.",
      cite: "AussieWog93, Hacker News, March 2026",
      href: "https://news.ycombinator.com/item?id=47302487",
    },
    {
      t: "p",
      c: "The same commenter argues the rules mostly stop genuine newcomers while spammers simply wait 30 days and farm karma. That is an opinion, not data. It explains why these filters keep tightening, and why the accounts that get through are the ones with real history.",
    },
    { t: "h2", c: "When does Reddit treat your post as spam?" },
    {
      t: "p",
      c: "Reddit’s Rule 2 asks users to “participate authentically in communities where you have a personal interest, and do not spam”. Its spam policy defines spam as “repeated or unsolicited actions (whether automated or manual) that negatively affect users, communities, and/or Reddit itself”, and lists mass-posting the same content, bots that promote products, and accounts built mostly from links to your own business.",
    },
    {
      t: "p",
      c: "The line for a brand is frequency and relevance. Reddit’s advice: “If your contributions to Reddit consist primarily of links to a business that you run, own, or otherwise benefit from, please be thoughtful about the frequency of posting.” Moderators also decide what counts as spam in their own community, so one subreddit welcomes a founder’s post and the next removes it. Read each community’s self-promotion rules before you post. It matters beyond Reddit, too: these threads feed AI answers, which is often <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why a competitor gets recommended instead of you</a>.",
    },
    { t: "h2", c: "What if your posts are missing everywhere?" },
    {
      t: "p",
      c: "If your posts, comments and profile don’t show to anyone logged out, the problem is your account, not one community. Reddit’s help page says your account “might’ve been flagged for spam or inauthentic activity”. If you think that’s a mistake, log in to the affected account and submit the appeal form Reddit links from that page. Don’t open a second account to get around it: Reddit runs a ban evasion filter that links accounts through signals like “how users connect to Reddit and information they share with us”, and moderators can switch it on.",
    },
    { t: "h2", c: "So, why was your Reddit post removed?" },
    {
      t: "p",
      c: "Most likely an automatic filter: AutoModerator, a karma or account-age minimum, Crowd Control or the reputation filter. Confirm the post is really gone logged out, open the Poster Eligibility Guide to see which checks you fail, then message the moderators with the post link and a polite question. Before your next post, earn some karma in that community by commenting, verify your email, and keep links to your own business rare. If your posts are missing everywhere, use the appeal form, and don’t make a new account.",
    },
  ],
  faqs: [
    {
      q: "Does Reddit tell you when your post is removed?",
      a: "Not always. Moderators can leave a removal reason, and some AutoModerator rules reply automatically, but filtered posts can simply sit in the mod queue. The reliable check is opening the community in a logged-out window.",
    },
    {
      q: "How much karma do I need to post on Reddit?",
      a: "Each community sets its own minimum, and Reddit doesn’t disclose the numbers. The Poster Eligibility Guide shows which karma checks you fail when you try to post. Commenting usefully in that community is the fastest legitimate way to meet them.",
    },
    {
      q: "Can I see my Contributor Quality Score?",
      a: "No. Reddit describes the five tiers but doesn’t show you yours. You can influence it by verifying your email, securing your account and building a normal posting history.",
    },
    {
      q: "Should I repost a removed post?",
      a: "Only after you know why it was removed and have fixed it. Reposting the same content quickly is what Reddit’s spam policy calls repetitive posting. Ask the moderators first if the reason isn’t clear.",
    },
    {
      q: "Can a brand post on Reddit without getting removed?",
      a: "Yes, if it posts in communities where it has a genuine interest, adds value without leading with a link, discloses who it is, and posts about its own business rarely. Reddit’s spam policy points businesses that want more frequent exposure to its self-serve ads instead.",
    },
  ],
  sources: [
    { title: "Why can’t I see my post? (Reddit Help)", url: help("360045989712", "Why-can-t-I-see-my-post"), type: "vendor", read: "2026-10-25" },
    { title: "Poster Eligibility Guide & Post Check (Reddit Help)", url: help("33702751586836", "Poster-Eligibility-Guide-Post-Check"), type: "vendor", read: "2026-10-25" },
    { title: "What is the Contributor Quality Score? (Reddit Help)", url: help("19023371170196", "What-is-the-Contributor-Quality-Score"), type: "vendor", read: "2026-10-25" },
    { title: "Reputation filter (Reddit Help)", url: help("27441485903124", "Reputation-filter"), type: "vendor", read: "2026-10-25" },
    { title: "Crowd Control (Reddit Help)", url: help("15484545006996", "Crowd-Control"), type: "vendor", read: "2026-10-25" },
    { title: "Spam (Reddit Help)", url: help("360043504051", "Spam"), type: "vendor", read: "2026-10-25" },
    { title: "Ban evasion filter (Reddit Help)", url: help("15484544471444", "Ban-evasion-filter"), type: "vendor", read: "2026-10-25" },
    { title: "My account was flagged for spam or inauthentic activity (Reddit Help)", url: help("360045309012", "My-account-was-flagged-for-spam-or-inauthentic-activity"), type: "vendor", read: "2026-10-25" },
    { title: "Reddit Rules (Reddit Inc.)", url: "https://redditinc.com/policies/reddit-rules", type: "primary", read: "2026-10-25" },
    { title: "Hacker News comment by dbg31415 on AutoModerator removals", url: "https://news.ycombinator.com/item?id=12143493", type: "forum", read: "2026-10-25" },
    { title: "Hacker News comment by guywithahat on launch channels", url: "https://news.ycombinator.com/item?id=40996700", type: "forum", read: "2026-10-25" },
    { title: "Hacker News comment by AussieWog93 on new-account filters", url: "https://news.ycombinator.com/item?id=47302487", type: "forum", read: "2026-10-25" },
  ],
  related: ["why-chatgpt-recommends-your-competitor", "how-to-get-cited-by-chatgpt", "does-llms-txt-work"],
  cta: {
    mid: "Posting for a brand and keep getting filtered? We run Reddit from established accounts, inside each community’s rules.",
    title: "Stop losing good posts to filters you can’t see.",
    text: "We check which communities your buyers use, what each one’s rules and filters allow, and where your brand can join the conversation without getting removed.",
    button: "Get a free Reddit audit",
  },
};
