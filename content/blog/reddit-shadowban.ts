import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;
const flagged = help("360045309012", "My-account-was-flagged-for-spam-or-inauthentic-activity");
const banEvasion = help("360043504811", "What-is-ban-evasion");
const spam = help("360043504051", "Spam");
const cantSee = help("360045989712", "Why-can-t-I-see-my-post");
const tooMuch = help("204579879", "Why-am-I-being-told-You-re-doing-that-too-much");
const reputation = help("27441485903124", "Reputation-filter");

export const post: Post = {
  slug: "reddit-shadowban",
  tracker: "4.6",
  bucket: "reddit",
  style: "RS Playbook",
  title: "Reddit shadowban: how to check, why it happened, how to recover",
  dek: "If your posts and comments seem to vanish for everyone but you, you might be shadowbanned, or just filtered. Here’s how to tell which, what usually causes each, and the exact steps to recover.",
  description: "Reddit shadowban explained: how to check if you’re shadowbanned or just filtered, the common causes, how to appeal a sitewide flag, and how to avoid it again.",
  targetQuery: "reddit shadowban",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "“Shadowban” on Reddit can mean three different things: a sitewide flag by Reddit for spam or inauthentic activity, a silent ban set up by one community’s moderators through AutoModerator, or ordinary spam filtering of a new or low-trust account. Check by opening your profile in a logged-out private window: if it doesn’t load, your account is likely flagged sitewide, and you can appeal through Reddit’s appeals page. If your profile loads but posts in one community never appear, it’s a community filter or ban; message the moderators. Don’t create a new account to get around it: that’s ban evasion.",
    },
    {
      t: "p",
      c: "Few things on Reddit are as confusing as a shadowban. Everything looks normal to you. You post, you comment, nothing errors. But nobody replies, nothing gets upvoted, and when you check from another device, your content isn’t there.",
    },
    {
      t: "p",
      c: "The first job is working out what’s actually happening, because the fix is different for each case. A sitewide flag needs an appeal to Reddit. A community ban needs a conversation with that community’s moderators. Spam filtering needs time and normal participation. Doing the wrong one wastes days and can make things worse. This guide walks through the checks, the causes and the recovery steps, with templates for the messages you’ll need to send.",
    },
    { t: "h2", c: "The three things people call a shadowban" },
    {
      t: "table",
      head: ["Type", "Who does it", "Scope", "What you see"],
      rows: [
        ["Sitewide flag", "Reddit", "Your whole account", `Your <a href="${flagged}">“posts, comments, chat messages, and profile page aren’t showing up as expected”</a>`],
        ["Community silent ban", "One community’s moderators, using AutoModerator", "One community", "Your content in that community is removed automatically, with no notice"],
        ["Spam filtering", "Community settings and Reddit’s filters", "Usually one or a few communities", "Some posts or comments held or removed, especially from new accounts"],
      ],
    },
    {
      t: "p",
      c: `Reddit itself uses the phrase “automoderator shadow bans” for the second kind, and notes it <a href="${banEvasion}">doesn’t treat them as community bans</a>. The first kind is the one Reddit calls being flagged for spam or inauthentic activity.`,
    },
    { t: "h2", c: "Shadowban vs suspension vs community ban" },
    {
      t: "table",
      head: ["", "Shadowban (sitewide flag)", "Suspension", "Community ban"],
      rows: [
        ["Do you get told?", "Usually not", "Yes, with a message", "Often, by a moderator message"],
        ["Can you still post?", "Yes, but others don’t see it", "No, or only limited actions", "Not in that community"],
        ["Scope", "Whole account", "Whole account", "One community"],
        ["Who decides", "Reddit", "Reddit", "That community’s moderators"],
        ["How to respond", "Appeals page", "The appeal route in the suspension message", "Modmail to that community"],
      ],
    },
    {
      t: "p",
      c: "The difference matters because each has its own process. Appealing a community ban to Reddit won’t help, and arguing with moderators about a sitewide flag won’t either.",
    },
    { t: "h2", c: "How to check: the five-minute test" },
    {
      t: "ol",
      items: [
        "<strong>Open a private (incognito) window</strong> so you’re logged out.",
        "<strong>Go to your profile:</strong> <code>reddit.com/user/yourusername</code>. If the page says it can’t be found, while you know the account exists, your account is likely flagged sitewide.",
        "<strong>If the profile loads, open a recent post or comment</strong> by its direct link. If it shows as removed or missing to logged-out visitors but visible to you, it’s been removed or filtered.",
        "<strong>Check where it happens.</strong> Is it every community, or only one or two? Sitewide flags affect everything; community bans and filters affect specific places.",
        "<strong>Check your inbox</strong> for messages from moderators or Reddit. Sometimes there is a notice, just not where you expected.",
      ],
    },
    {
      t: "table",
      head: ["What you find", "Most likely cause", "Go to"],
      rows: [
        ["Profile not found when logged out", "Sitewide flag", "Recovering from a sitewide flag"],
        ["Profile loads; content missing in one community only", "Community silent ban or filter", "Recovering from a community ban"],
        ["Profile loads; some posts missing in several communities, account is new", "Spam filtering", "Recovering from spam filtering"],
        ["Everything visible logged out", "Not a shadowban; maybe sorting or low engagement", "Check “New” sort"],
      ],
    },
    {
      t: "p",
      c: `On that last row: Reddit notes that most communities sort by “Hot” by default, so <a href="${cantSee}">a new post may not appear unless you sort by New</a>. Check that before you assume the worst.`,
    },
    { t: "h2", c: "Why accounts get flagged sitewide" },
    {
      t: "p",
      c: `Reddit’s <a href="${spam}">spam policy</a> lists the behaviours it acts on. The ones that most often catch business and marketing accounts:`,
    },
    {
      t: "ul",
      items: [
        "“Mass-posting repetitive content for the purpose of exposure or financial gain”, such as the same link or post in many communities.",
        "“Sending large amounts of unsolicited chat or private messages”, such as outreach DMs.",
        "“Repeatedly posting or sharing old content for the purpose of rapidly gaining karma”.",
        "“Using tools (e.g., bots, generative AI tools) that may break Reddit or facilitate the proliferation of spam”.",
        "“Automating the creation of multiple Reddit accounts or communities.”",
      ],
    },
    {
      t: "p",
      c: "Other common triggers: several accounts voting on each other’s posts, logging in to many accounts from the same network, and posting mostly links to your own business. Reddit asks anyone in that last group to “be thoughtful about the frequency of posting”.",
    },
    { t: "cta" },
    { t: "h2", c: "Recovering from a sitewide flag" },
    {
      t: "p",
      c: `If you think the flag is a mistake, Reddit’s instructions are short: <a href="${flagged}">log in to the affected account in a browser, go to the appeals page, and submit the form</a>.`,
    },
    { t: "p", c: "To give the appeal the best chance:" },
    {
      t: "ol",
      items: [
        "<strong>Be specific and brief.</strong> Say what you use the account for, and that you believe it was flagged in error.",
        "<strong>Own anything you did wrong.</strong> If you posted the same link in several places, say so and say you’ve stopped.",
        "<strong>Don’t argue about the rules.</strong> Appeals are reviewed against them.",
        "<strong>Verify your email</strong> if you haven’t, and turn on two-factor authentication. These are part of the signals Reddit uses to judge accounts.",
        "<strong>Wait.</strong> Don’t submit the form repeatedly, and don’t post from another account in the meantime.",
      ],
    },
    {
      t: "code",
      label: "Appeal template",
      c: "I use this account to [participate in communities about X / answer\nquestions about Y]. I believe it was flagged by mistake.\n\n[If relevant:] I recently [posted the same link in several communities /\nsent several DMs]. I understand that looks like spam and I've stopped.\n\nI've verified my email and enabled two-factor authentication.\nThank you for reviewing.",
    },
    { t: "h2", c: "Recovering from a community ban or filter" },
    {
      t: "ol",
      items: [
        "<strong>Read the community’s rules</strong> and recent removals to work out which rule applies: self-promotion, links, account age or karma minimums are the usual ones.",
        "<strong>Message the moderators</strong> through modmail, once, politely. Ask whether your account is restricted and what you’d need to change.",
        "<strong>Accept their answer.</strong> It’s their community. If they say no, participate elsewhere.",
        "<strong>Don’t create another account.</strong> Using an alternative account to keep participating after a ban is <a href=\"" + banEvasion + "\">ban evasion</a>, which Reddit says “could result in a sitewide suspension”.",
      ],
    },
    {
      t: "code",
      label: "Modmail template",
      c: "Hi mods, my posts and comments here seem to be removed automatically.\nIs my account restricted in this community? If I broke a rule, I'm sorry,\nand I'd like to understand which one so I can follow it.\nThanks for your time.",
    },
    { t: "h2", c: "Recovering from spam filtering" },
    {
      t: "p",
      c: `If your account is new or has little karma, you’re probably hitting filters rather than a ban. Reddit says that to prevent spam <a href="${tooMuch}">there’s a limit to how often users can post and comment</a> in a community, and that “even earning a small amount of karma by commenting on another post within a community” can help you get past it.`,
    },
    {
      t: "p",
      c: `Communities can also turn on the <a href="${reputation}">reputation filter</a>, which filters content from accounts that may be spammers, are likely to have content removed, or are unestablished. It works on the account’s behaviour, not the post’s content, and approved users aren’t caught by it.`,
    },
    {
      t: "ul",
      items: [
        "Comment helpfully in communities you genuinely enjoy for a few weeks before posting in strict ones.",
        "Verify your email and fill in your profile.",
        "Ask moderators of communities you post in often whether you can be an approved user.",
        "Follow our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day warm-up plan</a>.",
      ],
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say a founder creates a new account, writes a helpful post about their category, and shares it in six relevant communities on the same afternoon, each with a link to their blog. The next day, none of the posts have any comments.",
    },
    {
      t: "p",
      c: "Logged out, the profile still loads, but four of the six posts show as removed. That rules out a sitewide flag for now. The cause is a mix of spam filtering (a brand-new account) and the same link posted in several communities in a short time, which is the first item on Reddit’s spam list.",
    },
    {
      t: "p",
      c: "The fix: stop posting the link, spend the next three or four weeks commenting helpfully in those communities without links, ask one moderator through modmail whether a tailored version of the post would be welcome, and when it’s allowed, post it in one community at a time with the full value in the post itself.",
    },
    { t: "h2", c: "If your business account was flagged" },
    {
      t: "p",
      c: "A flag on the account you use for marketing hurts more than a personal one, because your plans depend on it. While you wait for the appeal:",
    },
    {
      t: "ul",
      items: [
        "Pause all Reddit activity on that account, including scheduled posts.",
        "Don’t move the same activity to a teammate’s account. If the pattern caused the flag, it will cause another.",
        "Review what the account did in the past month: links per post, DMs sent, communities posted in on the same day.",
        "Write down new rules for the account before it posts again, using our <a href=\"/blog/reddit-self-promotion-rules\">self-promotion rules guide</a>.",
        "If the appeal fails, rebuild with genuine personal accounts for real team members, with disclosure, rather than another brand account doing the same thing.",
      ],
    },
    { t: "h2", c: "Check your team’s accounts regularly" },
    {
      t: "p",
      c: "If several people at your company use Reddit, add a quick monthly check to your routine. Open each person’s profile in a logged-out window, open their three most recent comments by direct link, and note anything missing. It takes five minutes and catches problems weeks before anyone notices their replies have stopped getting answers.",
    },
    {
      t: "p",
      c: "Keep a simple log: the account, the date, what was missing and in which community. Patterns show up quickly, such as one community removing everything with a link, or one account with far more removals than the others. That tells you whether to change a habit, talk to a moderator or slow down.",
    },
    { t: "h2", c: "How to avoid it next time" },
    {
      t: "table",
      head: ["Do", "Don’t"],
      rows: [
        ["Post different, tailored content in each community", "Paste the same post or link into many communities"],
        ["Comment far more than you post", "Post mostly links to your own site"],
        ["Disclose when you mention your own product", "Hide that you work for the company"],
        ["Use one account per person", "Run several accounts, or vote with them"],
        ["Reply to people who ask, in the thread", "Send unsolicited DMs"],
        ["Write your own posts", "Use bots or AI tools to post at volume"],
      ],
    },
    {
      t: "p",
      c: "For businesses, the safest structure is a brand account for official replies and personal accounts for real team members, each disclosed. Our guide to <a href=\"/blog/brand-vs-personal-reddit-account\">brand vs personal accounts</a> and the <a href=\"/blog/reddit-self-promotion-rules\">self-promotion rules</a> cover the details.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t make a new account to get around a ban. Reddit treats it as ban evasion.",
        "Don’t buy “unshadowban” services or aged accounts. They break Reddit’s rules and usually make things worse.",
        "Don’t submit the appeal form over and over.",
        "Don’t keep posting from a flagged account while you wait.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Checking while logged in.</strong> Your own content always looks normal to you. Check logged out.",
        "<strong>Assuming every missing post is a shadowban.</strong> Most are community filters or sorting.",
        "<strong>Arguing with moderators in public threads.</strong> Use modmail.",
        "<strong>Ignoring the cause.</strong> Recovering without changing the behaviour usually leads to the same result.",
        "<strong>Running marketing from a single new account.</strong> New accounts are the most heavily filtered.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do I know if I’m shadowbanned on Reddit?",
      a: "Open your profile in a logged-out private window. If it says the page can’t be found, your account is likely flagged sitewide. If it loads but your posts are missing in one community, you’re probably filtered or banned there.",
    },
    {
      q: "How do I get unshadowbanned on Reddit?",
      a: "If your account was flagged by mistake, log in through a browser, go to Reddit’s appeals page and submit the form. For a single community, message its moderators through modmail.",
    },
    {
      q: "How long does a Reddit shadowban last?",
      a: "Reddit doesn’t publish a fixed time. A sitewide flag lasts until it’s reviewed or lifted; community restrictions last as long as the moderators decide.",
    },
    {
      q: "Can I make a new account if I’m shadowbanned?",
      a: "Not to get around a ban. Using another account to keep participating after a ban is ban evasion, which can lead to a sitewide suspension.",
    },
    {
      q: "Why do my Reddit posts disappear but my account isn’t banned?",
      a: "Usually spam filters, karma or account-age limits, or a community rule. Reddit says even a small amount of karma earned by commenting in a community can help you get past its spam filter.",
    },
  ],
  sources: [
    { title: "Reddit help: flagged for spam or inauthentic activity", url: flagged, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: What is ban evasion?", url: banEvasion, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: Spam", url: spam, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: Why can’t I see my post?", url: cantSee, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: “You’re doing that too much”", url: tooMuch, type: "primary", read: "2026-10-27" },
    { title: "Reddit help: Reputation filter", url: reputation, type: "primary", read: "2026-10-27" },
  ],
  related: ["why-was-my-reddit-post-removed", "reddit-contributor-quality-score", "how-to-warm-up-a-reddit-account"],
  cta: {
    mid: "Business account flagged or filtered everywhere? We’ll diagnose it and set up Reddit the safe way.",
    title: "Get your Reddit presence back on track.",
    text: "We work out whether you’re flagged, banned or filtered, help with the appeal, and set up an account structure and routine that stays within Reddit’s rules.",
    button: "Fix my Reddit account",
  },
};
