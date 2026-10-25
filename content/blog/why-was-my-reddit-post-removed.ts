import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;

export const post: Post = {
  slug: "why-was-my-reddit-post-removed",
  tracker: "4.4",
  bucket: "reddit",
  style: "RS Answer",
  title: "Why was my Reddit post removed? 10 causes and how to fix each",
  dek: "Most Reddit removals come from automatic filters, not a person reading your post. Here’s how to tell which one caught you, fix it, and post so it doesn’t happen again.",
  description: "Why was my Reddit post removed? The 10 causes, from AutoModerator and karma limits to Crowd Control and spam filters, how to tell which, and how to fix it.",
  targetQuery: "why was my reddit post removed",
  status: "draft",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "answer",
      c: "Your Reddit post was most likely removed by an automatic filter: AutoModerator, a karma or account-age minimum, Crowd Control, or Reddit’s reputation and spam filters. Less often, a moderator removed it for breaking a community rule. First confirm it’s actually gone by checking logged out. Then use Reddit’s Poster Eligibility Guide to see which requirements you miss, message the mods with the link, and build karma in that community before posting again.",
    },
    {
      t: "p",
      c: "You spent an hour on a genuinely useful post. It shows on your profile, but nobody replies, nobody upvotes, nothing. Most of the time nobody ever saw it: a filter held it back seconds after you posted, and Reddit didn’t tell you.",
    },
    {
      t: "p",
      c: "The good news is that every kind of removal leaves a clue, and most have a straightforward fix. Here are the 10 causes, how to spot each one, and what to do so your next post stays up.",
    },
    { t: "h2", c: "Step 1: Check that your post is actually removed" },
    {
      t: "ol",
      items: [
        "<strong>Sort the subreddit by New.</strong> Most communities default to Hot, so a fresh post with no votes sits below everything else. <a href=\"" + help("360045989712", "Why-can-t-I-see-my-post") + "\">Reddit’s own help page</a> lists this as the first thing to check.",
        "<strong>Open the subreddit in a private window, logged out.</strong> Removed posts can still look normal to you while logged in. The logged-out view is the honest one.",
        "<strong>Check your profile logged out too.</strong> If your posts and comments are missing everywhere, your account may be flagged (cause 10).",
        "<strong>Check your inbox and the post itself</strong> for a removal message or an automated reply from AutoModerator.",
      ],
    },
    {
      t: "p",
      c: "Visible logged out? It isn’t removed, it’s just quiet. Try a better title or a different time. Missing? Keep reading.",
    },
    { t: "h2", c: "The 10 causes, and the clue each one leaves" },
    {
      t: "table",
      head: ["#", "Cause", "The clue", "The fix"],
      rows: [
        ["1", "Broke a community rule (topic, format, flair)", "A removal reason or mod comment naming the rule", "Fix it and message the mods"],
        ["2", "AutoModerator rule (link, keyword, title format)", "Gone within seconds, often with an automated reply", "Remove the link or phrase, then ask the mods"],
        ["3", "Karma minimum", "Poster Eligibility Guide shows karma not met", "Earn community karma by commenting"],
        ["4", "Account-age minimum", "Poster Eligibility Guide shows account age not met", "Wait it out; comment in the meantime"],
        ["5", "Unverified email", "Poster Eligibility Guide shows verification not met", "Verify your email"],
        ["6", "Crowd Control", "Post held for mod approval, invisible until approved", "Join the community and build karma there"],
        ["7", "Reputation filter (Contributor Quality Score)", "Held in the mod queue because of your account, not your post", "Build a normal posting history; verify email"],
        ["8", "Reddit’s site-wide spam filter", "New, low-karma accounts hit posting limits", "Comment in the community first, then post"],
        ["9", "Self-promotion treated as spam", "Removed once the brand or link is noticed", "Post about your business less; lead with value"],
        ["10", "Account flagged for spam", "Posts and profile missing everywhere when logged out", "Use Reddit’s appeal form"],
      ],
    },
    { t: "h2", c: "How to fix rule and AutoModerator removals (causes 1–2)" },
    {
      t: "p",
      c: "AutoModerator is a rules engine each community sets up for itself. It reads your title, body, links and account details, and removes anything that matches a rule, instantly. It doesn’t care whether the post was helpful. A rule written to stop link spam removes your useful post too if it contains a link.",
    },
    {
      t: "ol",
      items: [
        "Read the subreddit’s rules in the sidebar (or the “About” tab on mobile), including the wiki if it has one. Look for title formats, required flair, banned links and “no self-promotion” rules.",
        "Find the rule you broke. The usual suspects: a link to your own site, a missing flair, a title that isn’t a question when the sub requires one, or a banned word.",
        "Fix the post or write a new version, then message the mods before reposting.",
      ],
    },
    {
      t: "code",
      label: "Message to the moderators",
      c: "Hi mods,\n\nMy post “[title]” ([link]) was removed and I’m not sure which rule it broke. I’ve read the rules and think it may have been [rule, e.g. the link to my site].\n\nI’ve removed the link. Would you be able to approve it, or let me know what to change?\n\nThanks for running the sub.",
    },
    {
      t: "p",
      c: "Keep it short and polite. Mods are volunteers handling hundreds of posts, and a clear, friendly message gets far more approvals than a complaint. Don’t repost the same thing before they reply.",
    },
    {
      t: "p",
      c: "Use <strong>Post Check</strong> next time. <a href=\"" + help("33702751586836", "Poster-Eligibility-Guide-Post-Check") + "\">Reddit now scans your draft with an AI model</a> while you write and highlights likely rule breaks before you post. It won’t block you, so treat every warning it shows as a free edit.",
    },
    { t: "h2", c: "How to fix karma, account-age and email limits (causes 3–5)" },
    {
      t: "p",
      c: "Many communities only accept posts from accounts above a certain karma or age. When you try to post, Reddit’s <strong>Poster Eligibility Guide</strong> shows which checks you pass and fail: comment karma, post karma, community karma, account age and email verification. Reddit doesn’t show the actual numbers, “to deter potential misuse”.",
    },
    { t: "p", c: "The fix is a two-week warm-up in the community you want to post in:" },
    {
      t: "table",
      head: ["When", "What to do"],
      rows: [
        ["Day 1", "Verify your email. Join the subreddit. Read the rules and the top posts of the month."],
        ["Days 1–7", "Leave 2–3 genuinely helpful comments a day, on posts where you know the answer. No links."],
        ["Days 8–14", "Keep commenting. Reply to people who reply to you. Post one question of your own if the sub allows it."],
        ["Day 15+", "Check the Poster Eligibility Guide again before you write your main post."],
      ],
    },
    {
      t: "p",
      c: "Comments that answer a question well earn karma fastest. Reddit itself says “even earning a small amount of karma by commenting on another post within a community” can get you past its spam filter.",
    },
    { t: "cta" },
    { t: "h2", c: "How to get past Crowd Control and the reputation filter (causes 6–7)" },
    {
      t: "p",
      c: "These are the filters most people have never heard of. <a href=\"" + help("15484545006996", "Crowd-Control") + "\">Crowd Control</a> lets mods hold posts from people who aren’t trusted members yet. At its strictest setting it holds posts from new accounts, non-members and accounts with negative karma in that community. Held posts stay invisible until a mod approves them.",
    },
    {
      t: "p",
      c: "The <a href=\"" + help("27441485903124", "Reputation-filter") + "\">reputation filter</a> uses Reddit’s <a href=\"" + help("19023371170196", "What-is-the-Contributor-Quality-Score") + "\">Contributor Quality Score (CQS)</a>, a hidden rating every account gets based on its history, how it connects to Reddit, and whether it’s verified. Accounts sit in one of five tiers, from Highest to Lowest. The filter judges your account, not your post, so a perfect post from a low-CQS account still gets held.",
    },
    { t: "p", c: "To improve your odds:" },
    {
      t: "ul",
      items: [
        "Join the community before posting, and comment there first.",
        "Verify your email and turn on two-factor authentication.",
        "Post from one consistent account and network, not a fresh account or a VPN that changes every day.",
        "Build history across a few communities you genuinely care about, not just the one you want to sell in.",
        "If you think your post is held, message the mods. Reddit says approved users aren’t caught by the reputation filter, so becoming one is worth asking about in communities you post in often.",
      ],
    },
    { t: "h2", c: "How to avoid being treated as spam (causes 8–9)" },
    {
      t: "p",
      c: "Reddit’s rules ask users to <a href=\"https://redditinc.com/policies/reddit-rules\">“participate authentically in communities where you have a personal interest, and do not spam”</a>. Its <a href=\"" + help("360043504051", "Spam") + "\">spam policy</a> is specific about businesses: “If your contributions to Reddit consist primarily of links to a business that you run, own, or otherwise benefit from, please be thoughtful about the frequency of posting.”",
    },
    { t: "p", c: "In practice, for a brand or founder account:" },
    {
      t: "ul",
      items: [
        "<strong>Keep self-promotion rare.</strong> Most of what you post should be useful without your product in it.",
        "<strong>Say who you are.</strong> A line like “Disclosure: I work at [company]” earns more trust than hiding it, and many subs require it.",
        "<strong>Leave the link out</strong> unless someone asks for it or the sub explicitly allows it.",
        "<strong>Never post the same thing to several subreddits at once.</strong> That’s exactly what spam filters look for.",
        "<strong>Answer existing threads before starting your own.</strong> A helpful reply in a thread that already ranks on Google is often worth more than a new post.",
      ],
    },
    {
      t: "p",
      c: "It matters beyond Reddit too. Reddit threads are among the most-cited sources in AI answers, so a post that stays up can keep naming your brand in ChatGPT and Google for months. That’s also <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why competitors who show up in those threads get recommended</a>, and a big part of <a href=\"/blog/how-to-get-cited-by-chatgpt\">getting cited by ChatGPT</a>.",
    },
    { t: "h2", c: "What to do if your account is flagged (cause 10)" },
    {
      t: "p",
      c: "If your posts, comments and profile don’t show to anyone logged out, the problem is your account. Reddit says it <a href=\"" + help("360045309012", "My-account-was-flagged-for-spam-or-inauthentic-activity") + "\">“might’ve been flagged for spam or inauthentic activity”</a>.",
    },
    {
      t: "ol",
      items: [
        "Log in to the affected account in a browser.",
        "Open Reddit’s appeals page from that help article.",
        "Explain briefly what you were doing and why you think it’s a mistake.",
        "Wait for a reply. Don’t create a new account to get around it: Reddit’s <a href=\"" + help("15484544471444", "Ban-evasion-filter") + "\">ban evasion filter</a> links accounts through signals like how you connect to Reddit.",
      ],
    },
    { t: "h2", c: "Your pre-post checklist" },
    {
      t: "code",
      label: "Before you hit Post",
      c: "[ ] Read the subreddit rules and wiki\n[ ] Checked the Poster Eligibility Guide (karma, age, email)\n[ ] Commented in this sub at least a few times this week\n[ ] Title follows the sub’s format and has the right flair\n[ ] No link to my own site unless the rules allow it\n[ ] Disclosure line included if I mention my company\n[ ] Post is useful even if nobody clicks my profile\n[ ] Fixed anything Post Check flagged\n[ ] Not posting the same thing anywhere else today",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Posting from a brand-new account.</strong> Most business subreddits filter new accounts by default.",
        "<strong>Reposting straight after a removal.</strong> It looks like spam and can get you banned from the sub.",
        "<strong>Arguing with mods.</strong> A short, polite message gets posts approved. An angry one gets you banned.",
        "<strong>Opening a second account.</strong> The ban evasion filter is built to catch exactly that.",
        "<strong>Treating every subreddit the same.</strong> One welcomes founders; the next removes any mention of a product. Read each one’s rules.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Reddit tell you when your post is removed?",
      a: "Not always. Moderators can leave a removal reason and some AutoModerator rules reply automatically, but filtered posts can sit in the mod queue with no notice. Check logged out to be sure.",
    },
    {
      q: "How much karma do I need to post on Reddit?",
      a: "Each community sets its own minimum and Reddit doesn’t publish the numbers. The Poster Eligibility Guide shows which checks you fail. Commenting helpfully in that community for a week or two is the fastest fix.",
    },
    {
      q: "Can I see my Contributor Quality Score?",
      a: "No. Reddit explains the five tiers but doesn’t show your score. Verifying your email, securing your account and posting consistently from one account all help.",
    },
    {
      q: "Should I repost a removed post?",
      a: "Only after you know why it was removed and have fixed it, ideally after the mods reply. Reposting the same content quickly is what spam filters look for.",
    },
    {
      q: "Can a brand post on Reddit without getting removed?",
      a: "Yes. Post in communities your buyers actually use, lead with useful answers, disclose who you are, keep links rare, and build history before you post anything promotional.",
    },
  ],
  sources: [
    { title: "Why can’t I see my post?", url: help("360045989712", "Why-can-t-I-see-my-post"), type: "vendor", read: "2026-10-25" },
    { title: "Poster Eligibility Guide & Post Check", url: help("33702751586836", "Poster-Eligibility-Guide-Post-Check"), type: "vendor", read: "2026-10-25" },
    { title: "Contributor Quality Score", url: help("19023371170196", "What-is-the-Contributor-Quality-Score"), type: "vendor", read: "2026-10-25" },
    { title: "Reputation filter", url: help("27441485903124", "Reputation-filter"), type: "vendor", read: "2026-10-25" },
    { title: "Crowd Control", url: help("15484545006996", "Crowd-Control"), type: "vendor", read: "2026-10-25" },
    { title: "Spam", url: help("360043504051", "Spam"), type: "vendor", read: "2026-10-25" },
    { title: "Ban evasion filter", url: help("15484544471444", "Ban-evasion-filter"), type: "vendor", read: "2026-10-25" },
    { title: "Account flagged for spam", url: help("360045309012", "My-account-was-flagged-for-spam-or-inauthentic-activity"), type: "vendor", read: "2026-10-25" },
    { title: "Reddit Rules", url: "https://redditinc.com/policies/reddit-rules", type: "primary", read: "2026-10-25" },
  ],
  related: ["why-chatgpt-recommends-your-competitor", "how-to-get-cited-by-chatgpt", "aeo-vs-geo-vs-seo"],
  cta: {
    mid: "Posting for a brand and keep getting filtered? We run Reddit from established accounts, inside each community’s rules.",
    title: "Stop losing good posts to filters you can’t see.",
    text: "We find the communities your buyers use, check what each one’s rules and filters allow, and get your brand into the right conversations without getting removed.",
    button: "Get a free Reddit audit",
  },
};
