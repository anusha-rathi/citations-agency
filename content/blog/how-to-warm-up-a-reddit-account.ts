import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;

export const post: Post = {
  slug: "how-to-warm-up-a-reddit-account",
  tracker: "4.3",
  bucket: "reddit",
  style: "RS Playbook",
  title: "How to warm up a new Reddit account: a 30-day plan (2026)",
  dek: "New accounts get filtered everywhere that matters. This 30-day plan builds real karma and history the way Reddit’s own systems reward, so your posts stay up when it counts.",
  description: "How to warm up a new Reddit account in 30 days: setup, daily comment targets, which subreddits to start in, and what gets accounts flagged. No shortcuts.",
  targetQuery: "how to warm up a reddit account",
  status: "draft",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Warming up a Reddit account means building the history Reddit and moderators look for before they trust you: account age, karma in the communities you care about, a verified email, and a pattern of normal participation. The 30-day plan: set the account up properly on day 1, comment helpfully in interest communities in week 1, move into the communities your buyers use in weeks 2–3, post your first non-promotional threads in week 4, and only then mention your product, rarely and with disclosure. Don’t buy accounts, trade votes or run several accounts: those are what get accounts flagged.",
    },
    {
      t: "p",
      c: "You create a Reddit account, write a genuinely useful post in the community your buyers use, and it disappears. No reply, no explanation. Most business communities filter brand-new accounts automatically, and the filters don’t care how good your post was.",
    },
    {
      t: "p",
      c: "The fix isn’t a trick. It’s 30 days of normal, useful participation that builds exactly the signals Reddit’s systems use to decide whether an account is trustworthy. Do it once, properly, and the account keeps working for years.",
    },
    {
      t: "p",
      c: "This plan is for founders and marketers starting Reddit from scratch who want an account that can post and comment in business communities without getting filtered.",
    },
    { t: "h2", c: "What Reddit actually looks at" },
    {
      t: "p",
      c: "“Warming up” sounds mysterious, but Reddit documents most of what matters:",
    },
    {
      t: "table",
      head: ["Signal", "What Reddit says", "What it means for you"],
      rows: [
        ["Karma minimums", `Communities can require comment, post or community karma; the <a href="${help("33702751586836", "Poster-Eligibility-Guide-Post-Check")}">Poster Eligibility Guide</a> shows which you fail`, "Earn karma in the communities you want to post in"],
        ["Account age", "Communities can set a minimum account age", "Time is part of the plan; it can’t be skipped"],
        ["Email verification", "Listed in the eligibility checks", "Verify on day 1"],
        ["Contributor Quality Score", `A hidden score <a href="${help("19023371170196", "What-is-the-Contributor-Quality-Score")}">based on past actions, network signals and account security</a>, in five tiers`, "Behave like one real person on one account"],
        ["Crowd Control", `Mods can <a href="${help("15484545006996", "Crowd-Control")}">hold posts from new accounts and non-members</a>`, "Join the communities and participate before posting"],
      ],
    },
    {
      t: "p",
      c: "Reddit doesn’t publish the exact karma or age thresholds communities use, “to deter potential misuse”. So the goal isn’t to hit a magic number. It’s to look, and actually be, like a genuine member of the communities you care about.",
    },
    { t: "h2", c: "Day 1: Set the account up properly" },
    {
      t: "ol",
      items: [
        "<strong>Pick a real-sounding username.</strong> Your name or a simple variation works best for a founder. Avoid brand names, random strings and anything salesy.",
        "<strong>Verify your email.</strong> It’s one of the eligibility checks communities use.",
        "<strong>Turn on two-factor authentication.</strong> Reddit says account security is part of how it scores accounts.",
        "<strong>Write a short bio.</strong> Who you are and what you work on, including your company. Transparency here makes disclosure easy later.",
        "<strong>Add an avatar.</strong> Default avatars read as throwaway accounts.",
        "<strong>Join 8–12 communities:</strong> about half in topics you genuinely care about outside work, half where your buyers spend time.",
      ],
    },
    {
      t: "p",
      c: "Use one account, from your normal devices and network. Don’t create backups or alternates. Multiple accounts from the same person are exactly what Reddit’s systems look for.",
    },
    { t: "h2", c: "The 30-day plan" },
    {
      t: "table",
      head: ["When", "Where", "What to do", "By the end you should have"],
      rows: [
        ["Days 1–7", "Interest communities (hobbies, your city, your profession)", "3–5 helpful comments a day on posts where you know something. No links.", "Your first comment karma and a profile that looks like a person"],
        ["Days 8–14", "Interest + 2–3 buyer communities", "Keep commenting. Start answering questions in buyer communities. Reply to everyone who replies to you.", "Karma inside the communities your buyers use"],
        ["Days 15–21", "Mostly buyer communities", "Longer, detailed answers to real questions. Ask one question of your own if the rules allow.", "Comments other people upvote and reply to"],
        ["Days 22–30", "Buyer communities", "Post 1–2 useful, non-promotional threads: a lesson learned, a breakdown, a question. Check the Poster Eligibility Guide first.", "Posts that stay up and get discussion"],
      ],
    },
    {
      t: "p",
      c: "That’s roughly 80–120 comments and one or two posts over the month, all useful on their own. It’s about 15–20 minutes a day. Consistency matters more than volume: a little every day looks like a person; 40 comments on a Sunday looks like something else.",
    },
    { t: "cta" },
    { t: "h2", c: "Your daily 15-minute routine" },
    {
      t: "ol",
      items: [
        "<strong>Minutes 0–3:</strong> check replies to your comments from yesterday and answer them. Conversations earn more karma than one-off comments.",
        "<strong>Minutes 3–8:</strong> open two communities sorted by New and find questions you can answer well. Fresh posts give your comment the best chance of being seen.",
        "<strong>Minutes 8–13:</strong> write two or three proper answers. Specific, first-hand, no links.",
        "<strong>Minutes 13–15:</strong> upvote the posts and comments you found genuinely useful, and note any recurring questions. Those become your first posts in week 4.",
      ],
    },
    {
      t: "p",
      c: "Keep a simple note of the questions you see more than once. By the end of the month you’ll have a list of topics people in your buyer communities keep asking about, which is also a ready-made list of blog posts and prompts to track.",
    },
    { t: "h2", c: "What to comment, with examples" },
    {
      t: "p",
      c: "Karma comes fastest from comments that answer the question better than anyone else in the thread. Three formats work almost everywhere:",
    },
    {
      t: "code",
      label: "Comment formats that earn karma",
      c: "1. The specific answer\n“We had the same issue at 8 people. What fixed it was [specific thing], set up like [detail]. Took about an afternoon. The one gotcha: [warning].”\n\n2. The honest comparison\n“Used both for a year. [A] is faster to set up, [B] is better once you have more than 20 users. If you’re small, I’d start with [A].”\n\n3. The useful question back\n“Depends a lot on [factor]. Are you doing [X] or [Y]? If it’s [X], [short answer].”",
    },
    {
      t: "p",
      c: "What doesn’t work: one-line agreement (“this!”), generic advice anyone could write, jokes in serious communities, and anything that reads like a LinkedIn post. And no links to your own site during the warm-up, even when they’d help. Earn the trust first.",
    },
    { t: "h2", c: "Choosing your communities" },
    { t: "p", c: "Split your time between two kinds of community:" },
    {
      t: "ul",
      items: [
        "<strong>Interest communities (about 40% of week 1, less later).</strong> Topics you know well and enjoy: a hobby, your city, your profession. Easy places to be helpful and earn karma that makes your profile look human.",
        "<strong>Buyer communities (most of weeks 2–4).</strong> Where your customers ask questions: role-based communities, industry communities, tool-specific ones. Read each one’s rules before your first comment. Some ban any mention of products; some allow it with disclosure.",
      ],
    },
    {
      t: "p",
      c: "Find buyer communities by searching <code>site:reddit.com [your category]</code> on Google and noting which communities keep appearing. Those threads often rank on Google and get cited in AI answers too, which is <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why competitors who show up there get recommended</a>.",
    },
    { t: "h2", c: "Signs it’s working, and signs it isn’t" },
    {
      t: "table",
      head: ["Good signs", "Warning signs"],
      rows: [
        ["Comments get upvotes and replies", "Comments sit at 1 point with no replies for days"],
        ["You can see your posts logged out", "Posts visible to you but missing when logged out"],
        ["Poster Eligibility Guide shows checks passing", "Still failing karma checks after two weeks"],
        ["People reply to you by name or follow up", "“Potential Spam” labels or collapsed comments"],
        ["Mods approve held posts", "Removals with no reason, across several communities"],
      ],
    },
    {
      t: "p",
      c: "If you see warning signs, slow down, check your comments really answer the question, and make sure nothing you’re doing looks automated or repetitive. If posts and comments vanish everywhere, read <a href=\"/blog/why-was-my-reddit-post-removed\">why Reddit posts get removed</a>; your account may be flagged.",
    },
    {
      t: "p",
      c: "One removal early on isn’t a disaster. Read the rule it broke, send the moderators a short, polite message asking what to change, and adjust. What hurts an account is reacting badly: reposting the same thing straight away, arguing in the comments, or opening a second account to try again.",
    },
    { t: "h2", c: "What a warmed-up profile looks like" },
    { t: "p", c: "On day 30, open your profile logged out and check it against this list:" },
    {
      t: "code",
      label: "Day-30 profile check",
      c: "[ ] Account is 30+ days old with a verified email and 2FA on\n[ ] Avatar and a short, honest bio that names your company\n[ ] 80–120 comments, spread across most days of the month\n[ ] Activity in 4–6 communities, not just one\n[ ] Positive karma in each of your target buyer communities\n[ ] At least a few comments with real replies and discussion\n[ ] 1–2 posts that stayed up and are visible logged out\n[ ] No links to your own site yet\n[ ] Poster Eligibility Guide shows checks passing in your main communities",
    },
    {
      t: "p",
      c: "If most boxes are ticked, you’re ready to participate fully. If several aren’t, give it another two weeks rather than forcing it; a rushed account that gets filtered costs you more time than the extra wait.",
    },
    { t: "h2", c: "What gets accounts flagged" },
    {
      t: "p",
      c: `Reddit’s rules ask you to <a href="https://redditinc.com/policies/reddit-rules">“participate authentically in communities where you have a personal interest”</a> and not to spam or manipulate content. Its <a href="${help("360043504051", "Spam")}">spam policy</a> lists the patterns it acts on. Avoid all of these:`,
    },
    {
      t: "ul",
      items: [
        "<strong>Buying aged accounts or karma.</strong> It breaks Reddit’s rules, and bought accounts carry someone else’s history and risk.",
        "<strong>Vote trading, upvote groups or asking colleagues to upvote.</strong> That’s content manipulation.",
        "<strong>Running several accounts</strong> to support your own posts, or to get around a ban. Reddit’s <a href=\"" + help("15484544471444", "Ban-evasion-filter") + "\">ban evasion filter</a> links related accounts.",
        "<strong>Reposting old popular content</strong> to farm karma. Reddit names this specifically in its spam policy.",
        "<strong>Copy-pasted or AI-generated comments</strong> across many threads.",
        "<strong>Mostly posting links to your own business.</strong> Reddit asks businesses to “be thoughtful about the frequency of posting”.",
      ],
    },
    { t: "h2", c: "After day 30: how to start mentioning your product" },
    {
      t: "p",
      c: "Warming up doesn’t end on day 30; it becomes how the account works. Keep the same habits, and add your product carefully:",
    },
    {
      t: "ol",
      items: [
        "<strong>Keep most activity non-promotional.</strong> The large majority of your comments should be useful without your product in them.",
        "<strong>Mention it only where it genuinely answers the question,</strong> alongside other options, including competitors when they’re the better fit.",
        "<strong>Always disclose.</strong> “Disclosure: I work on [product]” at the start of the relevant sentence.",
        "<strong>Leave links out unless asked</strong> or unless the community’s rules clearly allow them.",
        "<strong>Answer existing threads before starting your own.</strong> Threads that already rank on Google are worth more than new posts.",
      ],
    },
    {
      t: "p",
      c: "Track which comments lead to profile clicks, replies and signups. On Reddit, a handful of genuinely helpful answers in the right threads usually beats a large volume of mentions.",
    },
    { t: "h2", c: "Personal account or brand account?" },
    {
      t: "p",
      c: "For most companies, start with real people: a founder or team member posting from their own account with disclosure. People trust people on Reddit, and a personal account builds history across interests, which looks natural. A brand account works for official announcements, AMAs and customer support in your own community, but it’s harder to warm up because it has no life outside your product.",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Posting in buyer communities on day 1.</strong> Filters catch new accounts first. Build history before you post.",
        "<strong>Only commenting in buyer communities.</strong> A profile that’s 100% your industry looks like marketing. Mix in genuine interests.",
        "<strong>Rushing the plan.</strong> Account age is part of the check. Thirty days of steady activity beats five days of heavy activity.",
        "<strong>Dropping a link “just once”.</strong> One early self-promotional link can undo weeks of credibility in a community.",
        "<strong>Arguing with moderators.</strong> A polite message gets posts approved; an argument gets you banned.",
        "<strong>Stopping after the warm-up.</strong> An account that goes quiet for months and comes back to promote looks suspicious.",
      ],
    },
  ],
  faqs: [
    {
      q: "How long does it take to warm up a Reddit account?",
      a: "Plan for about 30 days of daily activity before posting in strict business communities. Reddit doesn’t publish the thresholds communities use, so some will accept you sooner and some later. The Poster Eligibility Guide tells you which checks you pass.",
    },
    {
      q: "How much karma do I need?",
      a: "There’s no single number. Each community sets its own minimums and Reddit keeps them private. Focus on earning karma inside the communities you want to post in, since many check community karma specifically.",
    },
    {
      q: "Can I buy an aged Reddit account?",
      a: "Don’t. It goes against Reddit’s rules on authentic participation, you inherit someone else’s history, and accounts linked to violations can be caught by Reddit’s filters. Build your own.",
    },
    {
      q: "Is it okay to use AI to write Reddit comments?",
      a: "Use it to research, not to write. Reddit’s spam policy names generative AI tools used to spread spam, and repetitive, generic comments are easy for readers and moderators to spot. Write in your own words.",
    },
    {
      q: "Should my company use a brand account or a personal one?",
      a: "Start with personal accounts from real team members, with disclosure. They build trust faster and warm up more naturally. Use a brand account for announcements and support in your own community.",
    },
  ],
  sources: [
    { title: "Poster Eligibility Guide & Post Check", url: help("33702751586836", "Poster-Eligibility-Guide-Post-Check"), type: "vendor", read: "2026-10-25" },
    { title: "Contributor Quality Score", url: help("19023371170196", "What-is-the-Contributor-Quality-Score"), type: "vendor", read: "2026-10-25" },
    { title: "Crowd Control", url: help("15484545006996", "Crowd-Control"), type: "vendor", read: "2026-10-25" },
    { title: "Spam", url: help("360043504051", "Spam"), type: "vendor", read: "2026-10-25" },
    { title: "Ban evasion filter", url: help("15484544471444", "Ban-evasion-filter"), type: "vendor", read: "2026-10-25" },
    { title: "Reddit Rules", url: "https://redditinc.com/policies/reddit-rules", type: "primary", read: "2026-10-25" },
  ],
  related: ["why-was-my-reddit-post-removed", "why-chatgpt-recommends-your-competitor", "reddit-marketing-agency-cost"],
  cta: {
    mid: "Don’t have 30 days to warm up an account? We work from established accounts with real history, inside each community’s rules.",
    title: "Skip the 30-day warm-up.",
    text: "We find the communities your buyers use, check each one’s rules and filters, and get your brand into the right conversations from accounts that already have the history.",
    button: "Get a free Reddit audit",
  },
};
