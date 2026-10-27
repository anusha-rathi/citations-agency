import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;
const cqs = help("19023371170196", "What-is-the-Contributor-Quality-Score");
const reputation = help("27441485903124", "Reputation-filter");
const email = help("360043047552", "Why-should-I-verify-my-Reddit-account-with-an-email-address");
const karma = help("204511829", "What-is-karma");
const twofa = help("360043470031", "What-is-two-factor-authentication-and-how-do-I-set-it-up");
const spam = help("360043504051", "Spam");
const tooMuch = help("204579879", "Why-am-I-being-told-You-re-doing-that-too-much");

export const post: Post = {
  slug: "reddit-contributor-quality-score",
  tracker: "4.7",
  bucket: "reddit",
  style: "RS Answer",
  title: "Reddit Contributor Quality Score (CQS), explained",
  dek: "Every Reddit account has a hidden score that moderators’ filters use to decide whether your posts show up. Here’s what Reddit says goes into it, how it’s used, and how to raise yours.",
  description: "Reddit Contributor Quality Score (CQS) explained: the five tiers, the signals behind it, how moderators filter with it, and practical steps to improve it.",
  targetQuery: "reddit contributor quality score",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Contributor Quality Score (CQS) is a hidden classification Reddit gives every account to identify potential spammers and users less likely to contribute positively. It’s based on signals including past actions on your account, network and location signals, and steps you’ve taken to secure it, such as verifying your email. Accounts are placed in one of five tiers, from Lowest to Highest, and scores update regularly. Moderators use it through AutoModerator rules and the reputation filter to hold back content from low-tier accounts. You can’t see your score, but you can improve it: verify your email, secure your account, participate genuinely over time and avoid anything that looks like spam.",
    },
    {
      t: "p",
      c: "If your comments keep getting filtered in some communities while friends with older accounts post freely, CQS is often part of the reason. It’s one of the main ways Reddit and moderators decide whether to trust an account before a human ever looks at its content.",
    },
    {
      t: "p",
      c: "Reddit documents more about it than most people realise, in its help articles for moderators. Here’s what it says, how moderators use it, and the practical steps that improve how your account is classified over time.",
    },
    { t: "h2", c: "What Reddit says CQS is" },
    {
      t: "p",
      c: `In Reddit’s words, CQS <a href="${cqs}">“is a user classification that was established to identify potential spammers or users less likely to contribute positively on Reddit”</a>. Every account gets one, based on “a host of signals including past actions taken on a user’s account, network and location signals, and steps a user has taken to secure their account (e.g. email verification)”.`,
    },
    {
      t: "table",
      head: ["Tier", "What it likely means in practice"],
      rows: [
        ["Highest", "Long, trusted history; rarely filtered"],
        ["High", "Established account; passes most filters"],
        ["Moderate", "Ordinary account; may be filtered in strict communities"],
        ["Low", "New or risky signals; often filtered"],
        ["Lowest", "Strong spam signals; filtered almost everywhere moderators use CQS"],
      ],
      caption: `The five tier names come from <a href="${cqs}">Reddit’s help article</a>. The descriptions are practical guidance.`,
    },
    {
      t: "p",
      c: "Reddit adds that scores “are updated regularly, and users have the ability to move up or down tiers based on their activity and/or behavior.” A low score isn’t permanent, and the behaviour that raises it is the same behaviour that makes your contributions useful to communities in the first place.",
    },
    { t: "h2", c: "Why Reddit uses a score at all" },
    {
      t: "p",
      c: "Large communities get far more posts than moderators can read. A score lets them filter likely spam before it reaches anyone, while letting trusted members post freely. From a moderator’s point of view, a few genuine comments held in the queue are a fair price for keeping out hundreds of spam ones. Understanding that makes the filter less frustrating: it isn’t judging you personally, it’s judging how your account looks compared with the accounts that usually turn out to be spam.",
    },
    { t: "h2", c: "How moderators use it" },
    {
      t: "p",
      c: "CQS matters because moderators can filter on it. There are two main ways.",
    },
    { t: "h3", c: "1. AutoModerator rules" },
    {
      t: "p",
      c: `Moderators can use CQS through the <code>contributor_quality</code> field in AutoModerator. Reddit’s own examples show how it’s typically combined with karma:`,
    },
    {
      t: "code",
      label: "Example AutoModerator rules from Reddit’s help centre",
      c: "# Filter comments from users with <5 subreddit karma and low/lowest CQS\ntype: comment\nauthor:\n    combined_subreddit_karma: \"< 5\"\n    contributor_quality: \"< moderate\"\naction: filter\n\n# Filter all posts from users with \"lowest\" CQS, regardless of karma\ntype: submission\nauthor:\n    contributor_quality: \"= lowest\"\naction: filter",
    },
    {
      t: "p",
      c: "Another of Reddit’s examples does the opposite: it lets High and Highest accounts skip a community’s karma minimum. So a good CQS can get you past rules that would otherwise stop a newer account.",
    },
    { t: "h3", c: "2. The reputation filter" },
    {
      t: "p",
      c: `The <a href="${reputation}">reputation filter</a> is a setting moderators can switch on. Reddit says it filters content “by users who may be potential spammers, are likely to have content removed, or have unestablished accounts”, and is “informed by the Contributor Quality Score, which uses karma, verification, and other account signals”.`,
    },
    {
      t: "ul",
      items: [
        "It filters based on the account’s behaviour, not on what the post says.",
        "Moderators choose between “high” filtering (more content filtered) and “moderate” filtering (less).",
        "Filtered content goes to the mod queue, where moderators can approve it.",
        "Approved users in a community aren’t caught by the filter.",
      ],
    },
    { t: "cta" },
    { t: "h2", c: "What affects your score" },
    {
      t: "p",
      c: "Reddit doesn’t publish the formula, and you can’t see your own score. But between the CQS article, the reputation filter article and the spam policy, the signals are clear enough to act on:",
    },
    {
      t: "table",
      head: ["Signal Reddit mentions", "What helps", "What hurts"],
      rows: [
        ["Past actions on your account", "A long history of normal posts and comments", "Removals, spam reports, bans, sitewide actions"],
        ["Securing your account", `<a href="${email}">Verified email</a>; <a href="${twofa}">two-factor authentication</a>`, "Unverified, unsecured accounts"],
        ["Karma", `<a href="${karma}">Upvotes on posts and comments</a> people enjoy`, "Heavily downvoted content"],
        ["Network and location signals", "Normal use from your usual devices and connections", "Many accounts from one network; patterns that look automated"],
      ],
    },
    {
      t: "p",
      c: "Reddit also notes that verifying with a common, well-established email domain is “one way to let us know that you’re likely to use Reddit in good faith”, while making clear it’s only one of several signals.",
    },
    { t: "h2", c: "What moderators see" },
    {
      t: "p",
      c: "When the reputation filter holds back a post or comment, it lands in the community’s mod queue. Reddit says moderators then see the content “with information about the user”. They can approve it, which publishes it, or leave it removed.",
    },
    {
      t: "p",
      c: "That means a filtered comment isn’t necessarily lost. In active communities, moderators review the queue and often approve genuine contributions from newer accounts. What they look for is simple: does this person seem to be here to take part, or to promote? A history of useful comments in that community makes approval much more likely. A history of links to one website makes it unlikely.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say a product manager joins Reddit to answer questions in a community about their industry. In the first week, they write eight good comments there. Three appear normally; five sit in the mod queue for a day before being approved; one is never approved.",
    },
    {
      t: "p",
      c: "That pattern fits a new account in a community that uses the reputation filter or a CQS rule. Nothing is wrong with the content. The account simply hasn’t built the signals yet. The product manager verifies their email, turns on two-factor authentication, keeps commenting a few times a day, and adds some activity in communities about their hobbies. By week four, almost every comment appears straight away, and a moderator offers approved-user status after noticing their answers.",
    },
    {
      t: "p",
      c: "If the same person had instead posted links to their company’s blog in that first week, the outcome would likely have been very different: removals, possible reports, and a history that makes the score harder to raise.",
    },
    { t: "h2", c: "How to improve your CQS" },
    {
      t: "ol",
      items: [
        "<strong>Verify your email.</strong> It’s a signal Reddit names directly, it takes two minutes, and it also protects you from being locked out of the account.",
        "<strong>Turn on two-factor authentication.</strong> Another step to secure your account, which Reddit lists as a factor.",
        "<strong>Participate genuinely and steadily.</strong> A few useful comments most days beats a burst of activity once a month.",
        "<strong>Start in friendly communities.</strong> Build karma where filters are light before posting in strict, business-focused communities.",
        "<strong>Avoid removals.</strong> Read rules before posting. Each removal adds to your account’s history.",
        "<strong>Keep to one account per person</strong>, used from your normal devices.",
        "<strong>Stay away from spam patterns</strong>: repeated links, mass DMs, reposting old content for karma, automation.",
        "<strong>Ask to become an approved user</strong> in communities you contribute to often. It bypasses the reputation filter there.",
      ],
    },
    {
      t: "p",
      c: "For a new account, our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day warm-up plan</a> builds exactly these signals in a sensible order.",
    },
    { t: "h2", c: "CQS vs karma vs account age" },
    {
      t: "p",
      c: "These three are often confused because they all affect whether your posts show up. They’re separate:",
    },
    {
      t: "table",
      head: ["", "Karma", "Account age", "CQS"],
      rows: [
        ["What it is", "Approximate sum of upvotes and downvotes on your content", "How long the account has existed", "Reddit’s classification of how trustworthy your account looks"],
        ["Can you see it?", "Yes, on your profile", "Yes", "No"],
        ["Who uses it", "Communities set karma minimums", "Communities set age minimums", "AutoModerator rules and the reputation filter"],
        ["How it grows", "Upvotes on posts and comments", "Time", "Normal activity, account security, avoiding spam signals"],
        ["Can it drop?", "Yes, with downvotes", "No", "Yes: Reddit says users can move down tiers"],
      ],
    },
    {
      t: "p",
      c: "Communities often combine them. Reddit’s own example filters comments from users with under 5 karma in the community and a CQS below Moderate. So an account can have plenty of karma elsewhere and still be filtered in a community where it has none.",
    },
    { t: "h2", c: "How to tell if CQS is filtering you" },
    {
      t: "p",
      c: "You can’t see your tier, but the pattern is recognisable:",
    },
    {
      t: "ul",
      items: [
        "Your comments appear for you but not for logged-out visitors in certain communities, while appearing normally in others.",
        "It happens mostly in large or business-focused communities, which are more likely to use strict filters.",
        "Your account is new, has little karma, or has had content removed recently.",
        "Some filtered comments appear later, after a moderator approves them from the queue.",
      ],
    },
    {
      t: "p",
      c: "If your profile doesn’t load at all when logged out, that’s a different problem: a possible sitewide flag. See our <a href=\"/blog/reddit-shadowban\">shadowban guide</a> for how to check and appeal.",
    },
    { t: "h2", c: "A four-week plan to raise your standing" },
    {
      t: "table",
      head: ["Week", "Do", "Avoid"],
      rows: [
        ["1", "Verify email; turn on two-factor authentication; fill in your profile; comment in 3–5 communities you genuinely enjoy", "Posting links; joining strict business communities yet"],
        ["2", "3–5 useful comments a day; reply to replies; start reading your target communities", "Copy-pasted comments; voting on friends’ posts"],
        ["3", "Begin commenting in target communities, answering questions in your area of expertise", "Mentioning your product; DMs"],
        ["4", "First non-promotional post in a friendly community; ask moderators about approved-user status where you contribute most", "Posting the same thing in several communities"],
      ],
    },
    {
      t: "p",
      c: "Four weeks won’t take a new account to the top tier, but it builds the signals Reddit describes and usually gets you past the lightest filters. Keep the same rhythm afterwards; steady participation is what keeps a score moving up.",
    },
    { t: "h2", c: "Common myths about CQS" },
    {
      t: "ul",
      items: [
        `<strong>“Reddit Premium raises your score.”</strong> Reddit says <a href="${tooMuch}">Premium doesn’t affect its spam filter</a>, and nothing in its CQS article mentions paying.`,
        "<strong>“High karma means high CQS.”</strong> Karma is one signal among several. An account with high karma and recent spam behaviour can still score low.",
        "<strong>“A low score is permanent.”</strong> Reddit says scores update regularly and users can move up or down.",
        "<strong>“CQS judges what you write.”</strong> The reputation filter that uses it works on the account’s behaviour, not on the content of a post.",
        "<strong>“You can check your CQS with a tool.”</strong> Reddit doesn’t show the score to users. Third-party “CQS checkers” can only guess.",
      ],
    },
    { t: "h2", c: "What CQS means for businesses on Reddit" },
    {
      t: "p",
      c: "For brands, CQS explains why “create an account and post” fails so reliably. A new company account with no history, posting links to its own site, sits in a low tier and hits every filter in the communities where buyers talk.",
    },
    {
      t: "ul",
      items: [
        "Build accounts before you need them. Start participation months before a launch.",
        "Use real team members’ personal accounts, disclosed, alongside a brand account. Established personal accounts often have better standing than a new brand account.",
        "Never share accounts across many people or run several accounts per person. That creates exactly the network signals that hurt scores.",
        `Keep promotion rare. Reddit’s <a href="${spam}">spam policy</a> asks people who post mostly about their own business to “be thoughtful about the frequency of posting”.`,
      ],
    },
    {
      t: "p",
      c: "Our guides to <a href=\"/blog/brand-vs-personal-reddit-account\">brand vs personal accounts</a> and <a href=\"/blog/reddit-marketing-for-saas\">Reddit marketing for SaaS</a> build on this.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t buy “high-karma” or aged accounts. Account history includes how it’s used, and bought accounts are a rules violation.",
        "Don’t farm karma by reposting popular content. Reddit’s spam policy names it.",
        "Don’t log in to many accounts from the same network to “spread” activity.",
        "Don’t use bots or AI tools to comment at volume.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Skipping email verification.</strong> It’s the easiest signal to fix.",
        "<strong>Chasing karma alone.</strong> Karma helps, but CQS looks at more than karma.",
        "<strong>Posting in strict communities first.</strong> Build history where filters are lighter.",
        "<strong>Ignoring removals.</strong> Each one is part of your account’s record. Learn the rule and adjust.",
        "<strong>Assuming a low score is permanent.</strong> Reddit says scores update regularly.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Reddit’s Contributor Quality Score?",
      a: "A hidden classification Reddit gives every account to identify potential spammers and users less likely to contribute positively. It places accounts in one of five tiers, from Lowest to Highest.",
    },
    {
      q: "Can I check my Reddit CQS?",
      a: "Not directly. Reddit doesn’t show users their score. You can infer filtering if your content is held back in some communities but not others, especially on a new account.",
    },
    {
      q: "How do I increase my Contributor Quality Score?",
      a: "Verify your email, enable two-factor authentication, participate genuinely and steadily, avoid removals and spam patterns, and use one account from your normal devices.",
    },
    {
      q: "Does karma affect CQS?",
      a: "Karma is one of the signals Reddit mentions in connection with the reputation filter, alongside verification and other account signals. It isn’t the only factor.",
    },
    {
      q: "Do moderators see my CQS?",
      a: "Moderators can use CQS tiers in AutoModerator rules and the reputation filter, and filtered content appears in their mod queue with information about the user.",
    },
  ],
  sources: [
    { title: "Reddit help: Contributor Quality Score", url: cqs, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: Reputation filter", url: reputation, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: Verify email", url: email, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: What is karma?", url: karma, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: Spam", url: spam, type: "primary", read: "2026-10-27" },
  ],
  related: ["reddit-shadowban", "how-to-warm-up-a-reddit-account", "why-was-my-reddit-post-removed"],
  cta: {
    mid: "Your team’s Reddit accounts keep getting filtered? We’ll audit them and build a plan that earns trust.",
    title: "Get Reddit accounts that don’t get filtered.",
    text: "We review your brand and team accounts, find what’s triggering filters, and run a warm-up and participation plan built on the signals Reddit uses.",
    button: "Audit my Reddit accounts",
  },
};
