import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;
const rules = "https://redditinc.com/policies/reddit-rules";

export const post: Post = {
  slug: "reddit-self-promotion-rules",
  tracker: "4.5",
  bucket: "reddit",
  style: "RS Playbook",
  title: "Reddit self-promotion rules: what’s allowed and what gets you banned",
  dek: "Reddit doesn’t ban self-promotion. It bans spam, and each community draws its own line. Here’s how to find that line, promote without getting removed, and what to do if you already were.",
  description: "Reddit self-promotion rules: the sitewide policy, the 10% rule, how to read community rules, how to mention your product safely, and what gets you banned.",
  targetQuery: "reddit self-promotion rules",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Reddit’s sitewide rules don’t ban self-promotion; they ban spam and inauthentic behaviour. Reddit says promotional content isn’t inherently spam, but asks anyone whose posts are mostly links to their own business to be thoughtful about how often they post. The real rules are set by each community: some ban promotion outright, some allow it in weekly threads, and some follow the “10% rule” (keep promotion to about one in ten contributions). Read the sidebar and pinned posts, disclose your affiliation every time, answer first and link only when asked. Multiple accounts, vote manipulation and incentivised reviews get accounts suspended.",
    },
    {
      t: "p",
      c: "Most founders learn Reddit’s self-promotion rules the hard way: a post that took an hour to write is removed in a minute, or the account gets banned from the one community that mattered. The rules aren’t hidden, but they’re spread across three layers, and most people only read one.",
    },
    {
      t: "p",
      c: "This guide walks through all three, shows you how to check any community’s rules in five minutes, and gives you templates for mentioning your product without breaking them.",
    },
    { t: "h2", c: "The three layers of Reddit’s rules" },
    {
      t: "table",
      head: ["Layer", "Who sets it", "What it says about promotion", "Where to find it"],
      rows: [
        ["Sitewide rules", "Reddit", "No spam, no manipulation, participate authentically", `<a href="${rules}">Reddit Rules</a> and the <a href="${help("360043504051", "Spam")}">spam policy</a>`],
        ["Community rules", "Each subreddit’s moderators", "Anything from “never” to “allowed with disclosure”", "Sidebar, rules page, wiki and pinned posts"],
        ["Filters and judgment", "Reddit’s systems and moderators", "Removes content from new or low-trust accounts and anything that looks like spam", "Not published in detail; you see the result"],
      ],
    },
    {
      t: "p",
      c: "A post can pass the first layer and fail the second, or pass both and still be caught by the third. You need all three to line up.",
    },
    { t: "h2", c: "Layer 1: what Reddit itself says" },
    {
      t: "p",
      c: `Reddit’s rules ask users to <a href="${rules}">“participate authentically in communities where you have a personal interest, and do not spam”</a>. The spam policy is specific about businesses: “If your contributions to Reddit consist primarily of links to a business that you run, own, or otherwise benefit from, please be thoughtful about the frequency of posting.”`,
    },
    {
      t: "p",
      c: `Reddit’s guidance for moderators makes the point directly: <a href="${help("28012014962580", "How-do-I-keep-spam-out-of-my-community")}">promotional content isn’t inherently spam</a>. It notes that some communities use “the 10% rule”, where about 90% of what someone shares should be helpful, non-promotional participation.`,
    },
    {
      t: "p",
      c: `For businesses using Reddit’s official tools, the <a href="${help("24368958859668", "Sign-up-for-Reddit-Pro")}">Reddit Pro rules</a> add two more: be transparent that you represent your brand, and don’t incentivise positive reviews. Even with a business account, you’re still subject to Reddit’s rules and each community’s rules.`,
    },
    { t: "p", c: "In plain terms, Reddit’s sitewide position is:" },
    {
      t: "ul",
      items: [
        "Promoting your own work is allowed.",
        "Posting mostly promotion is not.",
        "Hiding who you are, faking popularity or paying for praise is not.",
      ],
    },
    { t: "h2", c: "Layer 2: community rules, and how to read them" },
    {
      t: "p",
      c: "Most removals happen here. Every community writes its own rules, and they vary enormously. Before you post or mention your product anywhere, spend five minutes on this:",
    },
    {
      t: "ol",
      items: [
        "<strong>Read the rules list.</strong> On desktop it’s in the sidebar; in the app, tap the community name and open “Rules”. Look for words like “self-promotion”, “advertising”, “links”, “spam” and “surveys”.",
        "<strong>Read the pinned posts.</strong> Many communities pin a weekly promotion or “share your project” thread, and that’s the only place promotion is allowed.",
        "<strong>Check the wiki.</strong> Larger communities often have a wiki with detailed rules, including minimum account age or karma.",
        "<strong>Look at post flairs.</strong> A “Promotion”, “Self-promo” or “Showcase” flair usually means promotion is allowed if tagged.",
        "<strong>Scroll the top posts of the month.</strong> If none are from companies, that tells you how the community feels, whatever the rules say.",
      ],
    },
    {
      t: "table",
      head: ["Community policy", "What it usually looks like", "What you can do"],
      rows: [
        ["No promotion at all", "“No self-promotion, no advertising, no links to your own content”", "Help without mentioning your product. Build reputation only."],
        ["Promotion threads only", "A pinned weekly or monthly thread", "Post there, following its format. Nowhere else."],
        ["Flair required", "“Self-promotion must use the Promotion flair”", "Post with the flair, once, within the stated frequency"],
        ["10% guideline", "“No more than 10% of your activity should be self-promotion”", "Participate a lot; mention your product rarely and with disclosure"],
        ["Allowed with disclosure", "“Disclose your affiliation”", "Mention your product when relevant, always disclosing"],
        ["Ask first", "“Message the mods before promoting”", "Use modmail; see the template below"],
      ],
    },
    { t: "cta" },
    { t: "h2", c: "Layer 3: filters and moderators" },
    {
      t: "p",
      c: "Even a post that follows every rule can be removed automatically. Reddit gives moderators tools that filter content from accounts that look risky:",
    },
    {
      t: "ul",
      items: [
        `<strong>Contributor Quality Score</strong>, a <a href="${help("19023371170196", "What-is-the-Contributor-Quality-Score")}">hidden rating every account gets</a> based on its history, how it connects to Reddit and whether it’s verified.`,
        `<strong>Crowd Control</strong>, which lets moderators <a href="${help("15484545006996", "Crowd-Control")}">hold back content from people who aren’t trusted members yet</a>.`,
        `<strong>The reputation filter</strong>, which <a href="${help("27441485903124", "Reputation-filter")}">uses that score to filter content</a> from low-scoring accounts.`,
        "<strong>AutoModerator</strong>, which many communities configure to remove posts with links, certain words or from accounts below a karma or age threshold.",
      ],
    },
    {
      t: "p",
      c: "This is why a brand-new account that posts about its product is almost always removed, no matter how good the post is. Build the account first; our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day warm-up plan</a> shows how. If posts are vanishing and you don’t know why, <a href=\"/blog/why-was-my-reddit-post-removed\">this guide to removed posts</a> walks through each cause.",
    },
    { t: "h2", c: "What counts as self-promotion" },
    {
      t: "p",
      c: "More than most people think. Moderators usually count all of these:",
    },
    {
      t: "ul",
      items: [
        "Links to your website, product, blog, YouTube channel or newsletter.",
        "Mentioning your product by name, even without a link.",
        "Affiliate links or referral codes.",
        "Surveys and user research requests for your company.",
        "Job posts and recruiting.",
        "“Feedback wanted” posts about your launch.",
        "Asking people to message you for details.",
      ],
    },
    { t: "h2", c: "How to mention your product without breaking the rules" },
    {
      t: "p",
      c: "In communities that allow it, the pattern that survives is simple: answer the question fully first, then mention your product only if it genuinely fits, with disclosure.",
    },
    {
      t: "code",
      label: "Comment template",
      c: "[Direct answer to their question in 2-3 sentences, useful even if\nthey never use your product.]\n\n[One specific tip or warning from experience.]\n\nDisclosure: I work on [product], which does [the relevant thing].\nHappy to share more if useful, but [free option or competitor] also\nhandles this well if you'd rather not switch tools.",
    },
    {
      t: "p",
      c: "Why it works: the comment is useful without the product, the disclosure is clear, and naming an alternative shows you’re helping rather than selling. Leave the link out unless someone asks for it. If they do, reply with the link and nothing else; a second sales pitch undoes the goodwill the first comment earned.",
    },
    { t: "h3", c: "Asking moderators for permission" },
    {
      t: "p",
      c: "When rules are unclear or say “ask first”, message the moderators through modmail (the “Message the mods” button on the community page). Keep it short:",
    },
    {
      t: "code",
      label: "Modmail template",
      c: "Hi mods,\n\nI work at [company], which makes [product] for [audience]. I've been\nparticipating here for [time] as u/[username].\n\nWe've published [specific resource: a free guide, original data,\na free tool] that answers the [common question] people ask here often.\nWould it be OK to share it as a post? Happy to follow any format or\nflair you prefer, or to skip it if it doesn't fit.\n\nThanks for running the community.",
    },
    {
      t: "p",
      c: "Offer something useful, not a product announcement. Moderators say yes far more often to a free resource than to “we just launched”.",
    },
    { t: "h2", c: "How often is too often?" },
    {
      t: "p",
      c: "Reddit doesn’t give a number, and communities that do usually say something like “once a week” or “one in ten posts”. If a community gives no guidance, these limits keep you well inside what moderators tolerate:",
    },
    {
      t: "table",
      head: ["Activity", "Safe frequency"],
      rows: [
        ["Comments that mention your product (with disclosure)", "At most 1 in 10 of your comments in that community"],
        ["Posts about your own content or product", "No more than once a month per community, and only where allowed"],
        ["The same link across communities", "Never on the same day; ideally never the same post twice"],
        ["Promotion-thread posts", "Once per thread, as the thread rules say"],
      ],
    },
    {
      t: "p",
      c: "Check your own ratio before you post. Open your profile, filter to that community, and count. If most of your recent comments there mention your product, spend the next few weeks just helping.",
    },
    { t: "h2", c: "Promotion moderators actually welcome" },
    {
      t: "p",
      c: "Some promotion doesn’t feel like promotion, and those posts tend to stay up and earn upvotes. They share something the community wants, with your company’s name attached:",
    },
    {
      t: "ul",
      items: [
        "<strong>Original data.</strong> “We analysed 2,000 support tickets from small ecommerce stores. Here’s what customers complained about most.” Share the findings in the post itself, not behind a link.",
        "<strong>Free tools and templates</strong> that work without signing up.",
        "<strong>Honest lessons.</strong> What went wrong at your company and what you changed. Communities reward candour.",
        "<strong>AMAs</strong>, arranged with moderators in advance, where your founder or an expert answers questions for an hour.",
        "<strong>Detailed answers to the community’s most common question</strong>, posted as a guide, with your product mentioned once at the end.",
      ],
    },
    {
      t: "p",
      c: "Each of these is useful before anyone clicks. That’s the test moderators apply, whether they say it or not. If you’re unsure, ask yourself whether the post would still be worth reading with your company’s name removed. If yes, it’s probably welcome.",
    },
    { t: "h2", c: "What gets accounts banned" },
    {
      t: "table",
      head: ["Behaviour", "Usual consequence"],
      rows: [
        ["Posting outside promotion threads in a community that bans promotion", "Removal; ban from the community if repeated"],
        ["Posting the same link to many communities", "Spam flags across your account; possible suspension"],
        ["Using several accounts to praise your product", "Sitewide suspension of all accounts involved"],
        ["Asking colleagues or friends to upvote", "Treated as vote manipulation; suspension"],
        ["Paying or rewarding people for positive reviews", "Against Reddit Pro rules and Reddit’s rules; removal and suspension"],
        ["Creating a new account after a community ban", `Caught by the <a href="${help("15484544471444", "Ban-evasion-filter")}">ban evasion filter</a>; sitewide action`],
        ["Hiding that you work for the company", "Removal and community ban when discovered; lasting distrust"],
      ],
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t buy aged accounts or upvotes. Reddit treats both as manipulation.",
        "Don’t write “I found this great tool” about your own product. Undisclosed promotion is the fastest way to lose a community’s trust.",
        "Don’t argue with moderators in public. Use modmail, politely, once.",
        "Don’t make a new account after being banned from a community. That’s ban evasion.",
      ],
    },
    { t: "h2", c: "If you’ve already been removed or banned" },
    {
      t: "ol",
      items: [
        "<strong>Find out which rule you broke.</strong> Check your messages for a removal reason and reread the community rules.",
        "<strong>Message the mods once, politely.</strong> Acknowledge the rule, say you’ll follow it, and ask if they’d reconsider. Don’t argue.",
        "<strong>Accept the answer.</strong> If they say no, move on to other communities. Don’t create a new account.",
        `<strong>If your whole account is suspended</strong>, appeal through Reddit’s own process. If you think the account was <a href="${help("360045309012", "My-account-was-flagged-for-spam-or-inauthentic-activity")}">wrongly flagged for spam</a>, Reddit’s help centre explains how to ask for a review.`,
        "<strong>Change the pattern.</strong> Whatever caused it, from posting frequency to missing disclosure, fix it before you post again.",
      ],
    },
    { t: "h2", c: "A pre-post checklist" },
    {
      t: "ul",
      items: [
        "I’ve read this community’s rules, pinned posts and wiki.",
        "Promotion is allowed here, in this format, at this frequency.",
        "My post or comment is useful even if nobody clicks my link.",
        "I’ve disclosed that I work on the product.",
        "Most of my recent activity in this community isn’t about my product.",
        "I’m posting from one account, my own, with no one asked to upvote.",
      ],
    },
    {
      t: "p",
      c: "If any box is unticked, don’t post yet. A removed post costs you more than a delayed one, because moderators remember usernames.",
    },
  ],
  faqs: [
    {
      q: "Is self-promotion allowed on Reddit?",
      a: "Reddit’s sitewide rules allow it as long as it isn’t spam: you participate authentically, disclose your affiliation and don’t post mostly about your own business. Each community can be stricter, and many are.",
    },
    {
      q: "What is the 10% rule on Reddit?",
      a: "A guideline some communities use: roughly 90% of your activity should be helpful, non-promotional participation, and no more than about 10% about your own work. Reddit mentions it in its guidance for moderators.",
    },
    {
      q: "Can I post a link to my own website on Reddit?",
      a: "Only where the community allows it, and not often. Many communities remove links to your own site entirely. Answer the question in the comment itself and share a link only if someone asks.",
    },
    {
      q: "Do I need to disclose that I work for a company on Reddit?",
      a: "Yes. Reddit Pro’s rules ask businesses to be transparent about representing their brand, and most communities require disclosure. Undisclosed promotion is one of the most common reasons for bans.",
    },
    {
      q: "What happens if I break a subreddit’s self-promotion rule?",
      a: "Usually removal first, then a ban from that community if it happens again. Repeated spam across communities, multiple accounts or vote manipulation can lead to a sitewide suspension.",
    },
  ],
  sources: [
    { title: "Reddit Rules", url: rules, type: "primary", read: "2026-10-26" },
    { title: "Reddit help: Spam", url: help("360043504051", "Spam"), type: "primary", read: "2026-10-26" },
    { title: "Reddit help: keeping spam out of your community", url: help("28012014962580", "How-do-I-keep-spam-out-of-my-community"), type: "primary", read: "2026-10-26" },
    { title: "Reddit help: Sign up for Reddit Pro", url: help("24368958859668", "Sign-up-for-Reddit-Pro"), type: "primary", read: "2026-10-26" },
    { title: "Reddit help: Contributor Quality Score", url: help("19023371170196", "What-is-the-Contributor-Quality-Score"), type: "primary", read: "2026-10-26" },
  ],
  related: ["why-was-my-reddit-post-removed", "how-to-warm-up-a-reddit-account", "brand-vs-personal-reddit-account"],
  cta: {
    mid: "Want to promote on Reddit without getting banned? We’ll map which of your buyers’ communities allow it, and how.",
    title: "Get a community-by-community Reddit rulebook.",
    text: "We review the subreddits your buyers use, summarise each one’s promotion rules and filters, and tell you where and how your brand can take part safely.",
    button: "Map my subreddits",
  },
};
