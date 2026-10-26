import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;
const rules = "https://redditinc.com/policies/reddit-rules";
const profound = "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";

export const post: Post = {
  slug: "reddit-marketing-for-saas",
  tracker: "4.1",
  bucket: "reddit",
  style: "RS Playbook",
  title: "Reddit marketing for SaaS: the 90-day playbook (2026)",
  dek: "How SaaS teams use Reddit to reach buyers and show up in AI answers: finding the right communities, setting up accounts, a daily comment routine, posts that stay up, and how to measure it.",
  description: "Reddit marketing for SaaS: a 90-day playbook covering community research, account setup, daily comment routines, post formats, AI search impact and measurement.",
  targetQuery: "reddit marketing for saas",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Vijay Singh",
  takeaways: [
    "Reddit matters twice for SaaS: buyers ask it for recommendations, and AI assistants cite its threads.",
    "Win in comments first. Posts come later, once accounts have history.",
    "Disclose every time. Answer first, mention your product only when it fits.",
    "Measure removals, replies, referral traffic and AI citations, not just karma.",
  ],
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Reddit marketing for SaaS works when real people from your team help in the communities your buyers already use, and mention your product only when it genuinely fits, with disclosure. The 90-day playbook: spend week 1 finding 5 to 10 communities and the threads where buyers ask for tools; set up a brand account and personal accounts in week 2; warm accounts up with daily helpful comments in weeks 2 to 6; start answering buying questions with disclosure from week 4; publish your first useful posts from week 6; then measure removals, replies, referral traffic and whether your threads appear in AI answers. Skip fake accounts, vote trading and link drops.",
    },
    {
      t: "p",
      c: "SaaS buyers go to Reddit when they don’t trust vendor websites. They ask “what do you actually use for X?”, “is [tool] worth it?” and “alternatives to [tool] that don’t cost a fortune?”, and they trust the answers because they come from peers.",
    },
    {
      t: "p",
      c: "That’s what makes Reddit hard for SaaS companies and why it’s worth getting right. You can’t buy your way into those threads. You can earn your way in, by being the most useful person in the room.",
    },
    { t: "h2", c: "Why Reddit matters more for SaaS in 2026" },
    {
      t: "p",
      c: `Two reasons. First, buyers use it to shortlist tools. Second, AI assistants use it to answer buyers’ questions. Reddit was the most-cited domain in <a href="${profound}">Profound’s analysis of AI citations</a>, and in a <a href="${toronto}">University of Toronto study</a>, AI engines took 59–86% of their citations for comparison-style questions from independent publishers and review sites rather than brands’ own pages.`,
    },
    {
      t: "p",
      c: "So a helpful thread where your product is fairly discussed does double duty: it reaches the people reading it, and it can become a source when someone asks ChatGPT or Perplexity the same question months later. We explain the AI side in <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a>.",
    },
    { t: "h2", c: "The 90-day plan at a glance" },
    {
      t: "table",
      head: ["Weeks", "Focus", "Output"],
      rows: [
        ["1", "Research communities and threads", "A list of 5–10 communities and 30 buyer threads"],
        ["2", "Set up accounts", "Brand account on Reddit Pro; 2–4 personal accounts; team guide"],
        ["2–6", "Warm up with helpful comments", "3–5 genuinely useful comments per person per day"],
        ["4–12", "Answer buying questions, with disclosure", "Your product named where it fits"],
        ["6–12", "Publish useful posts", "1–2 posts a month per community: data, guides, lessons"],
        ["Weekly", "Measure", "Removals, replies, referrals, AI citations"],
      ],
    },
    { t: "h2", c: "Step 1: Find where your buyers actually talk (week 1)" },
    {
      t: "p",
      c: "Don’t start with the biggest communities. Start with the ones where your buyers ask the questions your product answers. Spend a few hours on this:",
    },
    {
      t: "ol",
      items: [
        "<strong>Search Google for buyer threads:</strong> <code>site:reddit.com best [category] for [audience]</code>, <code>site:reddit.com [competitor] alternative</code>, <code>site:reddit.com [problem you solve]</code>. Note which communities the threads are in.",
        "<strong>Search Reddit for your competitors’ names.</strong> Where people discuss them is where they’d discuss you.",
        "<strong>Check what AI cites.</strong> Ask ChatGPT and Perplexity your top buyer questions and note every Reddit thread they link. Those threads, and their communities, are high priority.",
        "<strong>Look for role communities</strong>, not just tool communities: the places where your buyers talk about their jobs (sales, marketing, ops, engineering, finance, ecommerce, a specific industry).",
        "<strong>Read each community’s rules</strong> and note: is promotion allowed, is there a weekly thread, what are the account requirements.",
      ],
    },
    {
      t: "table",
      head: ["Column", "Example"],
      rows: [
        ["Community", "r/[role or industry community]"],
        ["Size and activity", "Members; posts per day"],
        ["Buyer questions seen", "“What CRM do you use for a 5-person team?” (link)"],
        ["Promotion rules", "No promotion / weekly thread / disclosure OK"],
        ["Cited by AI?", "Yes: thread linked by Perplexity for “[prompt]”"],
        ["Priority", "High / medium / low"],
      ],
      caption: "Your community research sheet. Five to ten communities is plenty to start.",
    },
    { t: "h2", c: "Step 2: Set up accounts (week 2)" },
    {
      t: "p",
      c: "You need two kinds of account. A brand account, ideally on <a href=\"" + help("24368510335892", "What-is-Reddit-Pro") + "\">Reddit Pro</a> (free), for support, announcements and official replies. And personal accounts for two to four real people (founder, a product person, a support lead) who participate as themselves and disclose where they work.",
    },
    {
      t: "p",
      c: "One account per person. Reddit’s rules prohibit using multiple accounts to manipulate votes or discussion, and its systems are built to spot it. The full setup, including a one-page guide for your team, is in <a href=\"/blog/brand-vs-personal-reddit-account\">brand vs personal Reddit accounts</a>.",
    },
    { t: "h2", c: "Step 3: Warm up with helpful comments (weeks 2–6)" },
    {
      t: "p",
      c: `New accounts get filtered in most business communities. Reddit gives moderators tools like the <a href="${help("27441485903124", "Reputation-filter")}">reputation filter</a>, which relies on a hidden <a href="${help("19023371170196", "What-is-the-Contributor-Quality-Score")}">Contributor Quality Score</a>, so trust has to be earned through normal activity. Each person should:`,
    },
    {
      t: "ul",
      items: [
        "Write 3 to 5 genuinely useful comments a day, mostly in communities they enjoy, gradually more in your target communities.",
        "Answer questions in their area of expertise. Specific beats general: numbers, steps, gotchas.",
        "Not mention your product at all for the first two weeks.",
        "Verify their email and fill in a short profile bio that says where they work.",
      ],
    },
    {
      t: "p",
      c: "Our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day warm-up plan</a> has the full day-by-day schedule.",
    },
    { t: "cta" },
    { t: "h2", c: "Step 4: Answer buying questions (weeks 4–12)" },
    {
      t: "p",
      c: "This is where most of the value is. Every day, someone in your communities asks which tool to use. Set up a routine to find those threads within a few hours of posting, while answers still get seen:",
    },
    {
      t: "ol",
      items: [
        "<strong>Search daily</strong> for your category, competitors’ names and the problems you solve, sorted by “New”, in your target communities.",
        "<strong>Pick the threads where you can genuinely help.</strong> Skip ones where your product isn’t a fit; a forced mention costs more than it gains.",
        "<strong>Answer the question fully first.</strong> Their situation, the trade-offs, what you’d do.",
        "<strong>Then mention your product, with disclosure, and name an alternative.</strong>",
      ],
    },
    {
      t: "code",
      label: "Buying-question reply template",
      c: "For a team your size, the main thing is [key consideration], because\n[reason]. I'd look at:\n\n- [Competitor A]: best if [situation]. Downside: [honest downside].\n- [Competitor B]: cheaper, but [limitation].\n- [Your product]: we built it for [specific situation]. (Disclosure:\n  I work there.)\n\nIf you share [one detail about their setup], happy to be more specific.",
    },
    {
      t: "p",
      c: "Naming competitors honestly feels counterintuitive. It’s what makes the reply credible, keeps it from being reported as an ad, and makes it the kind of answer other users upvote. Check each community’s <a href=\"/blog/reddit-self-promotion-rules\">self-promotion rules</a> before replying; where promotion is banned, help without the product mention.",
    },
    { t: "h2", c: "What a week looks like" },
    {
      t: "table",
      head: ["Day", "Community lead", "Team experts"],
      rows: [
        ["Monday", "Search new buyer threads from the weekend; share the best 5 with the team", "Reply to 1–2 threads in their area"],
        ["Tuesday", "Reply to buying questions; check for removals", "3–5 helpful comments"],
        ["Wednesday", "Draft or edit this month’s post", "Answer any follow-ups on their replies"],
        ["Thursday", "Reply to buying questions; brand account support replies", "3–5 helpful comments"],
        ["Friday", "Log the week: replies, removals, referrals, any AI citations", "Follow-ups only"],
      ],
    },
    { t: "h2", c: "A bad reply vs a good one" },
    {
      t: "p",
      c: "Same thread, same product. Someone asks: “What do small teams use for customer onboarding? Spreadsheets aren’t cutting it anymore.”",
    },
    {
      t: "code",
      label: "Gets removed",
      c: "Check out [Product]! It's the best onboarding tool for small teams.\nFree trial here: [link]",
    },
    {
      t: "code",
      label: "Gets upvoted",
      c: "We hit the same wall at about 15 customers. What mattered most was\nhaving one checklist per customer that both sides could see, and\nautomatic reminders when a step stalled. Spreadsheets fail at the\nreminders part.\n\nOptions: [Tool A] if you already live in it, [Tool B] if budget is\ntight. I work on [Product], which is built around shared checklists\nfor teams under 20, so I'm biased, but any of these beats the sheet.",
    },
    {
      t: "p",
      c: "The second reply works even if nobody tries your product. That’s the standard to hold every reply to.",
    },
    { t: "h2", c: "Step 5: Publish posts people want (weeks 6–12)" },
    {
      t: "p",
      c: "Once accounts have history, start posting. Posts that stay up and do well share something the community values, in the post itself:",
    },
    {
      t: "table",
      head: ["Post type", "Example title", "Why it works"],
      rows: [
        ["Original data", "“We looked at 1,200 onboarding flows. Here’s where users drop off.”", "New information nobody else has"],
        ["Detailed how-to", "“How we cut our churn reporting from 2 days to 2 hours (full process)”", "Useful without clicking anything"],
        ["Honest lessons", "“We spent $40k on [channel]. What worked and what didn’t.”", "Candour earns trust"],
        ["Templates", "“The exact onboarding email sequence we use (copy it)”", "People save and share it"],
        ["Community question", "“How are you handling [new problem] at small teams?”", "Starts discussion; you learn what buyers need"],
      ],
      caption: "Example titles show the format; use your own real numbers.",
    },
    {
      t: "p",
      c: "Put the whole value in the post. If the post only makes sense after clicking your link, it’s an ad, and it’ll be treated as one. A short line at the end (“I work at [company]; we wrote this up in more detail here”) is enough, where the community allows links.",
    },
    { t: "h2", c: "Step 6: Decide on your own subreddit and ads" },
    {
      t: "p",
      c: "Two optional extras. A subreddit for your product (r/YourProduct) is worth it once you have enough users asking questions; before that, it sits empty. Reddit ads can reach specific communities, and they work best alongside organic activity, not as a replacement: a promoted post from a brand people already see helping in the comments lands better.",
    },
    { t: "h2", c: "Step 7: Measure what matters" },
    {
      t: "table",
      head: ["Metric", "How to get it", "Healthy sign"],
      rows: [
        ["Removal rate", "Count removed posts and comments per account", "Under 1 in 10"],
        ["Replies and follow-ups", "Inbox and thread replies", "People asking for more detail"],
        ["Comment karma in target communities", "Profile, filtered by community", "Growing month over month"],
        ["Referral traffic", "GA4: sessions from reddit.com", "Growing; high engagement"],
        ["Signups citing Reddit", "“How did you hear about us?” field", "Reddit mentioned regularly"],
        ["AI citations of your threads", "Monthly prompt check in ChatGPT and Perplexity", "Threads you’re in appear as sources"],
      ],
    },
    {
      t: "p",
      c: "Expect slow early numbers. Weeks 1 to 6 build accounts; buying-question replies start to pay off after that. Keep the weekly log even when it looks flat, because the trend across three months is what tells you whether to keep going, change communities or change the kind of replies you write. Most teams can judge whether it’s working by the end of the 90 days.",
    },
    { t: "h2", c: "How much time it takes" },
    {
      t: "table",
      head: ["Role", "Weekly time"],
      rows: [
        ["Community lead (research, routine, reporting)", "4–6 hours"],
        ["Founder", "1–2 hours"],
        ["Each team expert", "30–60 minutes"],
        ["Post writing (once a month per community)", "2–4 hours per post"],
      ],
    },
    {
      t: "p",
      c: "If your team can’t find that time, an agency can run research and routines, though the best replies still come from your own experts. Our guide to <a href=\"/blog/reddit-marketing-agency-vs-in-house\">Reddit agencies vs in-house</a> and <a href=\"/blog/reddit-marketing-agency-cost\">what agencies cost</a> can help you decide.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t buy accounts, upvotes or “seeded” comments. Reddit treats all of it as manipulation, and it can get every account involved suspended.",
        "Don’t paste the same reply into ten threads. Moderators and users spot it immediately.",
        "Don’t drop links without an answer. A link-only comment is spam on almost every community.",
        "Don’t hide who you work for. Disclosure is what makes a product mention acceptable.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Starting with posts instead of comments.</strong> New accounts’ posts get filtered; comments build the history that lets posts through.",
        "<strong>Choosing communities by size.</strong> A 20,000-member community full of your buyers beats a 2-million-member general one.",
        `<strong>Treating Reddit like social media scheduling.</strong> Reddit’s rules ask for <a href="${rules}">authentic participation</a>. Show up, reply, follow up.`,
        "<strong>Measuring karma only.</strong> Karma is a means. Replies, signups and AI citations are the outcome.",
        "<strong>Giving up at week 4.</strong> The first month is mostly account building.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Reddit marketing work for B2B SaaS?",
      a: "Yes, when it’s done as genuine participation: answering buyer questions in the communities where your buyers discuss their work, with disclosure. It also feeds AI answers, since assistants frequently cite Reddit threads.",
    },
    {
      q: "How long does Reddit marketing take to show results?",
      a: "Expect the first four to six weeks to go mostly on building account history. Replies to buying questions usually start paying off after that, and most teams can judge results by around 90 days.",
    },
    {
      q: "Should a SaaS company post from a brand account or personal accounts?",
      a: "Both. Use the brand account for support, announcements and official replies; use personal accounts from real team members, with disclosure, for everyday participation.",
    },
    {
      q: "Is it OK to mention my SaaS product on Reddit?",
      a: "Where the community allows it, yes: answer the question first, disclose that you work there, and name alternatives too. Where promotion is banned, help without mentioning it.",
    },
    {
      q: "Are Reddit ads worth it for SaaS?",
      a: "They can be, for reaching specific communities. They work best alongside organic participation, not instead of it.",
    },
  ],
  sources: [
    { title: "Profound: Reddit and AI search", url: profound, type: "vendor", read: "2026-10-26" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-26" },
    { title: "Reddit Rules", url: rules, type: "primary", read: "2026-10-26" },
    { title: "Reddit help: What is Reddit Pro", url: help("24368510335892", "What-is-Reddit-Pro"), type: "primary", read: "2026-10-26" },
    { title: "Reddit help: Reputation filter", url: help("27441485903124", "Reputation-filter"), type: "primary", read: "2026-10-26" },
  ],
  related: ["brand-vs-personal-reddit-account", "reddit-self-promotion-rules", "how-to-warm-up-a-reddit-account"],
  cta: {
    mid: "Want this playbook run for your SaaS? We’ll find your buyers’ communities and the threads AI already cites.",
    title: "Get your SaaS Reddit plan.",
    text: "We map the communities and threads where your buyers ask for tools, check which ones AI assistants cite, and give you a 90-day plan your team can run.",
    button: "Get my Reddit plan",
  },
};
