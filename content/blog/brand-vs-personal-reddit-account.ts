import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;
const rules = "https://redditinc.com/policies/reddit-rules";

export const post: Post = {
  slug: "brand-vs-personal-reddit-account",
  tracker: "4.10",
  bucket: "reddit",
  style: "Verdict post",
  title: "Brand vs personal Reddit account: which should your company use?",
  dek: "Brand accounts are clear and official but get a cold welcome in most communities. Personal accounts get conversations going but need disclosure. Here’s when to use each, and how to run both.",
  description: "Brand vs personal Reddit account: pros and cons of each, Reddit Pro and verified profiles, disclosure rules and a setup for running both without getting banned.",
  targetQuery: "brand vs personal reddit account",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "short",
      c: "Use both, for different jobs. A brand account (ideally set up with Reddit Pro, which is free) is for official things: announcements, support replies in your own community, AMAs and ads. Personal accounts, run by real people at your company with clear disclosure, are for everyday participation in the communities your buyers use, because people on Reddit talk to people, not logos. Never use either to praise yourself anonymously, never run several personal accounts per person, and never ask colleagues to upvote.",
    },
    {
      t: "p",
      c: "When a company decides to “do Reddit”, the first question is usually whose name goes on the comments. Get it wrong one way and every comment reads like an ad. Get it wrong the other way and it looks like you’re hiding who you are. Either mistake gets you removed.",
    },
    {
      t: "p",
      c: "Here’s how each type of account works, what Reddit says about business accounts, and a simple setup most teams can run.",
    },
    { t: "h2", c: "The quick comparison" },
    {
      t: "table",
      head: ["", "Brand account", "Personal account (with disclosure)"],
      rows: [
        ["Example username", "u/AcmeHQ", "u/sam_at_acme or Sam’s existing account"],
        ["How communities react", "Cautious; many treat it as advertising", "Normal, as long as the person is helpful and open"],
        ["Best for", "Announcements, support, AMAs, ads, your own subreddit", "Answering questions, joining discussions, sharing expertise"],
        ["Trust builds through", "Consistent, useful official replies", "A real person’s history and expertise"],
        ["Risk", "Removed by “no promotion” rules more often", "Undisclosed promotion if the person forgets to say where they work"],
        ["If the person leaves", "Account stays with the company", "Account leaves with them"],
        ["Verification", "Can get a verified checkmark through Reddit Pro", "No business verification"],
      ],
    },
    { t: "h2", c: "What Reddit offers business accounts" },
    {
      t: "p",
      c: `<a href="${help("24368510335892", "What-is-Reddit-Pro")}">Reddit Pro</a> is Reddit’s free set of tools for businesses doing organic (unpaid) activity. It’s separate from Reddit Ads.`,
    },
    {
      t: "p",
      c: `Businesses on Reddit Pro can get a <a href="${help("42763717293716", "Verified-profiles")}">verified profile</a>, shown with a grey checkmark. Reddit is clear about what it means: it confirms the account is who it says it is. It doesn’t change how your posts are moderated or ranked. A verified brand account still has to follow every community’s rules.`,
    },
    {
      t: "p",
      c: `Signing up comes with <a href="${help("24368958859668", "Sign-up-for-Reddit-Pro")}">rules of its own</a>: be transparent that you represent your brand, don’t incentivise positive reviews, and follow Reddit’s rules and each community’s rules.`,
    },
    { t: "h2", c: "When to use a brand account" },
    {
      t: "ul",
      items: [
        "<strong>Your own subreddit.</strong> If you run r/YourProduct, the brand account posts updates, pins guides and answers support questions.",
        "<strong>Support in other communities</strong> when someone has a problem with your product. An official reply resolves it faster and shows you care.",
        "<strong>Announcements</strong> in communities that allow them, such as release notes in a community dedicated to your tool category.",
        "<strong>AMAs</strong> arranged with moderators, where the brand account hosts and named team members answer.",
        "<strong>Ads.</strong> Reddit ads run from a brand profile.",
        "<strong>Replying to mentions.</strong> When someone asks “has anyone used [your product]?”, an official account can answer factual questions, with a light touch.",
      ],
    },
    {
      t: "p",
      c: "Keep a brand account’s voice human. Sign replies with a first name (“– Sam, support team”), answer the actual question, and skip marketing language. On Reddit, “We’re thrilled to announce” reads as a warning sign.",
    },
    { t: "h2", c: "When to use a personal account" },
    {
      t: "ul",
      items: [
        "<strong>Everyday participation</strong> in the communities your buyers use, answering questions where you have real expertise.",
        "<strong>Category discussions</strong> where a brand account would feel like an intrusion: “how do you handle X?”, “what’s your stack?”",
        "<strong>Founder stories</strong> and lessons learned, which communities often welcome from a person but not from a logo.",
        "<strong>Feedback threads</strong> where you want honest replies rather than polite ones.",
      ],
    },
    {
      t: "p",
      c: `Reddit’s rules ask everyone to <a href="${rules}">“participate authentically in communities where you have a personal interest”</a>. A personal account that genuinely belongs to someone who knows the field fits that. The condition is disclosure: whenever the person mentions your product, or a topic where your company has a stake, they say they work there.`,
    },
    { t: "cta" },
    { t: "h2", c: "How to disclose on a personal account" },
    {
      t: "p",
      c: "Disclosure needs to be in the comment where it matters, not just in a profile bio nobody reads. Short and plain works best:",
    },
    {
      t: "code",
      label: "Disclosure examples",
      c: "Disclosure: I work at [company], which makes [product].\n\n(I'm on the team at [company], so take this with that in mind.)\n\nFull disclosure, I'm a co-founder of [product], but here's how\nI'd do it with any tool: ...",
    },
    {
      t: "p",
      c: "Also add it to the profile bio (“Product lead at [company]”) so anyone who checks your history sees it. Some people include it in their username, like <code>sam_at_acme</code>, which removes all doubt.",
    },
    {
      t: "p",
      c: "You don’t need to disclose on comments that have nothing to do with your work, such as cooking tips or sports. You do need to disclose on anything in your industry, even when you don’t mention your product, if your answer could steer people towards it.",
    },
    { t: "h2", c: "The setup most companies should run" },
    {
      t: "table",
      head: ["Account", "Who runs it", "Where it posts", "Weekly time"],
      rows: [
        ["Brand account (Reddit Pro, verified)", "Marketing or community lead", "Own subreddit, support replies, announcements, AMAs", "1–2 hours"],
        ["Founder’s personal account", "The founder", "Category discussions, founder stories, expert answers", "1–2 hours"],
        ["1–3 team members’ personal accounts", "Support, product, engineering experts", "Technical questions in their area", "30–60 min each"],
      ],
    },
    {
      t: "p",
      c: "One account per person, each a real person posting as themselves. Give team members a short guide: which communities, the disclosure line, and the rule that they never upvote colleagues’ posts or comment just to boost them.",
    },
    { t: "h3", c: "A one-page guide for your team" },
    {
      t: "code",
      label: "Team Reddit guide",
      c: "1. Post from your own account, as yourself. One account each.\n2. Disclose on anything related to our industry:\n   \"Disclosure: I work at [company].\"\n3. Answer the question first. Mention our product only if it\n   genuinely fits, and name an alternative when you do.\n4. No links unless someone asks.\n5. Never upvote, award or reply to a colleague's post to boost it.\n6. Read each community's rules before posting. If promotion is\n   banned, don't mention the product at all.\n7. Support issues: tag the brand account or send them to support.\n8. If a mod removes something, don't argue. Tell [community lead].",
    },
    { t: "h2", c: "Which account should reply? Eight common situations" },
    {
      t: "table",
      head: ["Situation", "Reply from", "How"],
      rows: [
        ["Someone reports a bug in your product", "Brand account", "Apologise once, give the fix or a support link, follow up in the thread when it’s solved"],
        ["“What’s the best tool for X?” in a category community", "Personal account", "Answer properly, name two or three options including yours, disclose"],
        ["A thread comparing you with a rival", "Personal account", "Correct facts only, disclose, don’t attack the rival"],
        ["Someone posts a complaint about your pricing", "Brand account", "Acknowledge, explain once, offer a contact; no arguing"],
        ["A how-to question in your expert area, no product angle", "Personal account", "Just help. No mention needed"],
        ["You’re shipping a big release", "Brand account", "Post in your own subreddit; elsewhere only if rules allow"],
        ["A journalist or creator asks for sources", "Personal account (founder)", "Reply as yourself with credentials"],
        ["Someone asks “does anyone work at [company]?”", "Either, ideally the brand account", "Answer openly and point to the right contact"],
      ],
    },
    { t: "h2", c: "Setting up the brand account" },
    {
      t: "ol",
      items: [
        "<strong>Pick a clear username.</strong> Your brand name, or brand plus “HQ” or “Official” if the name is taken. Avoid anything that looks like a person, because a brand account pretending to be an individual is exactly what communities distrust.",
        "<strong>Fill in the profile.</strong> Logo, a one-line description of what you do, and a link to your site.",
        "<strong>Sign up for Reddit Pro</strong> and request verification so communities can see the account is genuine.",
        "<strong>Store the login in your company password manager</strong>, with two-factor authentication on, so it doesn’t depend on one person.",
        "<strong>Decide who can post.</strong> One or two people, with a short approval step for anything beyond support replies.",
        "<strong>Search for existing mentions</strong> of your brand on Reddit and note any unanswered questions or complaints. Those are your first replies.",
      ],
    },
    { t: "h2", c: "Handling criticism from either account" },
    {
      t: "p",
      c: "Criticism is where the account choice matters most. A defensive personal comment looks like an employee arguing; a defensive brand comment looks like a company arguing. Neither goes well. Reply once, from the brand account, with something like:",
    },
    {
      t: "code",
      label: "Reply template",
      c: "Thanks for flagging this. You're right that [the fair part of\nthe complaint]. [What's changed, or what we're doing about it.]\n\nIf you're still stuck, [contact route] and I'll look at it\nmyself. – [First name], [role] at [company]",
    },
    {
      t: "p",
      c: "Then let it go. If the community keeps discussing it, don’t keep replying, and don’t ask colleagues to jump in on your side. A single calm, honest answer near the top of the thread does more for your reputation than a long back-and-forth.",
    },
    { t: "h2", c: "When the founder’s account matters most" },
    {
      t: "p",
      c: "In early-stage companies, the founder’s personal account often does more than everything else combined. Communities respond to someone who built the thing, can answer hard questions directly and admits what isn’t ready yet. A founder who answers a handful of questions every week, with disclosure, builds a reputation no brand account can match.",
    },
    {
      t: "p",
      c: "As the company grows, spread that load across the team. Support leads answer troubleshooting questions, engineers answer technical ones, and the founder steps in for big discussions about the category. The aim is that the people buyers meet on Reddit are the same people they’d meet as customers.",
    },
    { t: "h2", c: "What about new personal accounts?" },
    {
      t: "p",
      c: "If a team member doesn’t have a Reddit account, they can create one, but it starts with no history. Many business communities filter new and low-karma accounts automatically, so the first month should be ordinary participation in communities the person genuinely enjoys, then gradually in your industry’s communities. Our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day warm-up plan</a> covers this step by step.",
    },
    {
      t: "p",
      c: "An existing account with years of normal history is worth more than a new one. If someone already has one, and is comfortable linking it to their work, use it. If they’d rather keep their personal account private, a new account under their real professional identity is fine; it just needs time.",
    },
    { t: "h2", c: "What not to do with either" },
    {
      t: "table",
      head: ["Don’t", "Why"],
      rows: [
        ["Create “customer” accounts that praise your product", "Inauthentic; leads to suspension of every account involved"],
        ["Have several accounts per person", `Reddit treats using multiple accounts to manipulate votes or discussions as a rules violation`],
        ["Ask colleagues to upvote brand posts", "Vote manipulation, even from real people"],
        ["Share one personal account across a team", "It stops being a real person’s account, and any slip affects everyone"],
        ["Hire people to post as “happy users”", "Undisclosed paid promotion; removal and bans when discovered"],
        ["Use the brand account to argue with critics", "Public arguments spread; reply once, factually, or not at all"],
      ],
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t buy aged accounts to skip the warm-up. Reddit treats bought accounts as manipulation.",
        "Don’t delete your comments when a thread turns against you. People notice. Edit with a correction or a short follow-up instead.",
        "Don’t create a new account after one gets banned from a community. Reddit’s ban evasion filter is built to catch it.",
      ],
    },
    { t: "h2", c: "How to measure whether it’s working" },
    {
      t: "ul",
      items: [
        "<strong>Comment karma in target communities</strong> for each personal account, month over month.",
        "<strong>Removal rate:</strong> how many posts or comments get removed. Above one in ten means something’s off: rules, frequency or disclosure.",
        "<strong>Replies and follow-ups:</strong> people asking for more detail is the best sign your answers are useful.",
        "<strong>Referral traffic from reddit.com</strong> in your analytics, and “found you on Reddit” answers in signup surveys.",
        "<strong>AI answers:</strong> Reddit threads are frequently cited by AI assistants, so check whether threads you’ve contributed to start appearing as sources for your buyer questions.",
      ],
    },
    {
      t: "p",
      c: "For the bigger picture, including which communities to choose and what to post, see our <a href=\"/blog/reddit-marketing-for-saas\">Reddit marketing playbook for SaaS</a>, and check the <a href=\"/blog/reddit-self-promotion-rules\">self-promotion rules</a> before anyone posts.",
    },
  ],
  faqs: [
    {
      q: "Should my company have a Reddit account?",
      a: "Yes, as a brand account for official replies, support, announcements and ads. Pair it with personal accounts from real team members for everyday participation.",
    },
    {
      q: "Is it allowed to promote my company from a personal Reddit account?",
      a: "Where the community allows promotion, yes, if you disclose that you work there. Undisclosed promotion breaks most communities’ rules and Reddit Pro’s transparency rule.",
    },
    {
      q: "What does the verified checkmark on Reddit mean?",
      a: "It confirms that a Reddit Pro business account is who it says it is. Reddit says it doesn’t affect moderation or how content is ranked.",
    },
    {
      q: "Is Reddit Pro free?",
      a: "Yes. Reddit Pro is a free set of tools for businesses’ organic activity on Reddit. It’s separate from Reddit Ads.",
    },
    {
      q: "Can I run multiple Reddit accounts for my business?",
      a: "Have one brand account and one personal account per real person. Using extra accounts to upvote, praise your product or get around bans breaks Reddit’s rules.",
    },
  ],
  sources: [
    { title: "Reddit help: What is Reddit Pro", url: help("24368510335892", "What-is-Reddit-Pro"), type: "primary", read: "2026-10-26" },
    { title: "Reddit help: Verified profiles", url: help("42763717293716", "Verified-profiles"), type: "primary", read: "2026-10-26" },
    { title: "Reddit help: Sign up for Reddit Pro", url: help("24368958859668", "Sign-up-for-Reddit-Pro"), type: "primary", read: "2026-10-26" },
    { title: "Reddit Rules", url: rules, type: "primary", read: "2026-10-26" },
  ],
  related: ["reddit-self-promotion-rules", "how-to-warm-up-a-reddit-account", "reddit-marketing-for-saas"],
  cta: {
    mid: "Setting up Reddit for your team? We’ll design the account setup, disclosure rules and community list for you.",
    title: "Get your team’s Reddit setup right from day one.",
    text: "We set up your brand account, write your team’s Reddit guide, pick the communities your buyers use, and train your people to take part without getting removed.",
    button: "Plan my Reddit setup",
  },
};
