import type { Post } from "../../lib/blog";

const rules = "https://redditinc.com/policies/reddit-rules";
const spam = "https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam";
const pro = "https://support.reddithelp.com/hc/en-us/articles/24368958859668-Sign-up-for-Reddit-Pro";
const discovered = "https://discoveredlabs.com/blog/reddit-marketing-agency-cost";

export const post: Post = {
  slug: "how-to-choose-a-reddit-marketing-agency",
  tracker: "7.3",
  bucket: "buying",
  style: "RS Playbook",
  title: "How to choose a Reddit marketing agency: 12 questions to ask",
  dek: "Most Reddit agencies sound the same on a sales call. These 12 questions show you who does the work, whose accounts they use and what you’ll actually get, plus a scorecard for comparing them.",
  description: "How to choose a Reddit marketing agency: 12 questions to ask, good and bad answers, a scorecard to compare proposals, red flags and a 90-day trial plan.",
  targetQuery: "how to choose a reddit marketing agency",
  status: "published",
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Choose a Reddit marketing agency by testing how it works, not how it pitches. Ask whose accounts it posts from, how it handles disclosure, which communities it would start in, what happens when a post is removed, and what the monthly report contains. Ask for three real comments it has written and read them as a community member would. Rule out anyone who offers guaranteed upvotes, fake customers or a 12-month lock-in. Then run a 90-day trial with named communities, written volumes and targets you agreed in advance.",
    },
    {
      t: "p",
      c: "Hiring the wrong Reddit agency costs more than the retainer. Bad posts get removed, accounts get banned, and a thread calling out your fake review can sit on page one of Google for your brand name. Picking well takes about two hours of careful questions. This playbook is for founders and marketers comparing two or three agencies right now.",
    },
    { t: "h2", c: "Before you take a call: write down three things" },
    {
      t: "p",
      c: "Agencies will shape the conversation around what they sell. Decide these first, so you can judge their answers against your needs.",
    },
    {
      t: "ol",
      items: [
        "<strong>Your goal.</strong> Pick one main outcome: signups from Reddit, threads ranking on Google for buyer searches, mentions in AI answers, or reputation repair. Each one needs different work.",
        "<strong>Your budget and term.</strong> Published retainers commonly start around $1,500 to $3,000 a month. Our <a href=\"/blog/reddit-marketing-agency-cost\">pricing guide</a> breaks down what each level buys.",
        "<strong>Your red lines.</strong> Agree internally what you won’t accept. We’d suggest no anonymous praise of your own product, no bought accounts and no bought votes.",
      ],
    },
    { t: "h2", c: "The 12 questions, and what good answers sound like" },
    {
      t: "p",
      c: "Ask all 12 on the call, and ask for the important ones in writing afterwards. Vague answers to questions 1, 2 and 7 should end the conversation.",
    },
    { t: "h3", c: "Accounts and honesty" },
    {
      t: "table",
      head: ["Ask", "Good answer", "Bad answer"],
      rows: [
        ["1. Whose accounts will post?", "Named accounts, explained plainly: your team’s, a Reddit Pro brand account, or specific writers with real history", "“We have a network of aged accounts”"],
        ["2. How do you disclose the link to our brand?", "A clear rule per community, shown with examples", "“Disclosure hurts performance, so we keep it natural”"],
        ["3. Do you ever buy accounts or votes?", "A flat no, with no hedging", "“We have ways of boosting early traction”"],
        ["4. Who owns the accounts if we leave?", "Stated in the contract, with a handover plan", "“We’ll figure that out later”"],
      ],
    },
    {
      t: "p",
      c: `These answers matter because Reddit’s position is clear. Its <a href="${spam}">spam policy</a> covers vote manipulation and using several accounts to fake engagement, and its <a href="${pro}">Reddit Pro terms</a> ask businesses to be transparent that they represent a brand. An agency that breaks these rules puts your brand’s name on the risk while it keeps the fee.`,
    },
    { t: "h3", c: "Community knowledge" },
    {
      t: "table",
      head: ["Ask", "Good answer", "Bad answer"],
      rows: [
        ["5. Which subreddits would you start in, and why?", "Three to five named communities, each with a reason and its rules on promotion", "“We’ll cover all relevant subreddits”"],
        ["6. Which threads in our category rank on Google today?", "Actual examples, found before the call or quickly during it", "“We’ll look into that once we start”"],
        ["7. What happens when a post is removed?", "It’s logged, the reason is found, and the approach changes", "“That doesn’t happen to us”"],
        ["8. How do you get accounts past community filters?", "Patient warm-up and real participation", "Tricks to dodge filters, or a new account each time"],
      ],
    },
    {
      t: "p",
      c: "Question 7 is the most revealing one here. Removals happen to everyone on Reddit, so an agency claiming otherwise is either hiding them or hasn’t done much work. You want the team that can tell you why a post came down. Our guide to <a href=\"/blog/why-was-my-reddit-post-removed\">why Reddit posts get removed</a> gives you the vocabulary to test the answer.",
    },
    { t: "cta" },
    { t: "h3", c: "Work and reporting" },
    {
      t: "table",
      head: ["Ask", "Good answer", "Bad answer"],
      rows: [
        ["9. How many posts and comments a month, in writing?", "Numbers in the proposal, adjusted for community rules", "“It depends” with no range at all"],
        ["10. Can we approve content before it goes live?", "Yes, with a turnaround that fits fast-moving threads", "“No, it slows us down”, or approval so slow that threads go cold"],
        ["11. Can we see a sample report?", "A real anonymised report: links, removals, rankings, AI mentions", "A slide of total impressions and upvotes"],
        ["12. What’s the minimum term, and how do we cancel?", "Month to month or three months, with clear exit terms", "Twelve months, paid upfront"],
      ],
    },
    {
      t: "p",
      c: `On question 12, <a href="${discovered}">Discovered Labs’ agency pricing survey</a> calls annual contracts “a red flag for Reddit marketing in 2026”. Reddit results take a few months to show, so a three-month minimum is reasonable. A year is a lot to commit before you’ve seen any.`,
    },
    { t: "h2", c: "Run the sample comment test" },
    {
      t: "p",
      c: "This is the most useful ten minutes of the whole process. Ask each agency for three comments or posts it has written (anonymised is fine) and answer these questions about each:",
    },
    {
      t: "ol",
      items: [
        "Would you upvote it if you weren’t paying for it?",
        "Does it answer the question the thread actually asked?",
        "Does it contain a specific detail: a number, a setup, a real trade-off?",
        "Does it mention a downside of the product it recommends?",
        "Could it be pasted into any other thread unchanged? If yes, it’s template work.",
        "Does it sound like the community it’s in?",
      ],
    },
    {
      t: "p",
      c: "Then run a live test. Pick a real thread in your category and ask how they’d reply. A good writer gives you a reasonable draft within a day, and may tell you the thread isn’t worth joining. That second answer is often the better sign.",
    },
    { t: "h2", c: "Score each agency the same way" },
    {
      t: "p",
      c: "Copy this scorecard and fill it in straight after each call, while the details are fresh. Score each line from 0 to 2. The weights reflect our advice: honesty and quality count double, because the damage from getting them wrong lasts longer than a contract.",
    },
    {
      t: "table",
      head: ["Criterion", "Weight", "What a 2 looks like"],
      rows: [
        ["Accounts and disclosure", "×2", "Named accounts, written disclosure rules, flat no on buying votes"],
        ["Sample comment quality", "×2", "You’d upvote all three"],
        ["Community knowledge", "×1", "Named subreddits and rules before you paid anything"],
        ["Search and AI knowledge", "×1", "Showed you threads that rank and get cited for your category"],
        ["Removal process", "×1", "Explained a real removal and what changed afterwards"],
        ["Reporting", "×1", "Sample report with links, removals and rankings"],
        ["Deliverables in writing", "×1", "Volumes, communities and approval process in the proposal"],
        ["Contract terms", "×1", "Three months or less, with clear exit terms"],
      ],
    },
    {
      t: "p",
      c: "The maximum is 20. As a rule of thumb, take anything under 12 off your list, and treat a 0 on accounts and disclosure as a veto whatever the total says. Compare price only between agencies that clear the bar.",
    },
    { t: "h2", c: "Match the agency type to your stage" },
    {
      t: "table",
      head: ["Your situation", "Look for", "Be careful about"],
      rows: [
        ["Early startup with a technical product", "Writers who can understand your product and write as your founder, with disclosure", "Volume packages with generic comments"],
        ["Series A to B, buyers already on Reddit", "A program across several communities, plus search and AI tracking", "Agencies with no reporting beyond links"],
        ["Brand with a reputation problem", "Monitoring, real responses, a named senior person", "Anyone offering to “bury” threads"],
        ["Launch or event", "A one-off campaign with an AMA or launch posts", "Paying for a launch with no presence beforehand"],
        ["Team that wants to do it in-house later", "An agency that trains your staff and hands over", "Contracts that keep accounts with the agency"],
      ],
    },
    {
      t: "p",
      c: "Weighing up whether to hire at all? Our comparison of a <a href=\"/blog/reddit-marketing-agency-vs-in-house\">Reddit agency vs an in-house team</a> covers the time and cost of each route.",
    },
    {"t": "h2", "c": "What to send an agency before the call"},
    {"t": "p", "c": "A short brief gets you better answers and makes the proposals easier to compare. Send the same one to everyone, and notice who has read it when you speak."},
    {"t": "ul", "items": ["Your product in two sentences, and who buys it.", "Your top three competitors, and how you win or lose against them.", "Ten questions your buyers ask, in their own words.", "Any Reddit history you have: accounts, threads about you, past removals.", "The goal you chose, your budget range and who will approve content."]},
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t buy on upvote or karma promises. Guaranteed votes mean manipulation, and Reddit bans it.",
        "Don’t agree to posing as a happy customer. Reddit’s rules ask users to be authentic, and a thread exposing it can outlast your campaign.",
        "Don’t compare agencies by comment count alone. Forty comments that get removed are worth less than ten that stay up.",
        "Don’t let an agency hold your only brand account. Keep ownership in your name.",
      ],
    },
    { t: "h2", c: "Check their claims in 15 minutes" },
    {
      t: "ol",
      items: [
        "<strong>Search Reddit for the agency’s name.</strong> Look for complaints, and for how the agency responds to them.",
        "<strong>Ask for one live, public example</strong> where they’re allowed to show it. Read the replies, because people on Reddit notice marketing and say so.",
        "<strong>Check any case study for a before and after.</strong> “Grew Reddit presence” tells you nothing. Look for named measures and dates.",
        "<strong>Search Google for threads they cite as wins.</strong> If a thread is supposed to rank, you should be able to find it.",
        "<strong>Ask for a reference client</strong> you can speak to for ten minutes. Ask them what went wrong and how it was handled.",
      ],
    },
    { t: "h2", c: "Put these terms in the contract" },
    {
      t: "code",
      label: "Clauses to ask for",
      c: "Deliverables: [X] posts and [Y] comments per month in [named communities].\nNo prohibited tactics: no purchased votes, no purchased accounts, no posing as customers.\nDisclosure: brand connection disclosed according to Reddit's rules and each community's rules.\nApproval: client approves posts within [24] hours; comments follow an agreed guide.\nReporting: monthly report listing every post and comment, removals and reasons, rankings and AI mentions.\nOwnership: all brand accounts and content belong to the client on termination.\nTerm: [3] months, then rolling, with [30] days' notice.",
    },
    {
      t: "p",
      c: `The “no prohibited tactics” clause does the most work. A reputable agency will sign it without argument, because <a href="${rules}">Reddit’s rules</a> already forbid those tactics. Hesitation here tells you what you needed to know.`,
    },
    { t: "h2", c: "Run the first 90 days as a trial" },
    {
      t: "table",
      head: ["Period", "What should happen", "What to check"],
      rows: [
        ["Weeks 1–2", "Research, community list, prompt and keyword list, account setup", "You’ve received the list and agree with it"],
        ["Weeks 3–6", "Comments first, then first posts in the easiest communities", "Most content is staying up, and replies are real"],
        ["Weeks 7–10", "Regular posts and comments, first threads worth tracking", "Upvotes and replies are improving, and removals are explained"],
        ["Weeks 11–13", "Review against your agreed goals", "Threads ranking, AI mentions, referral traffic and signups"],
      ],
    },
    {
      t: "p",
      c: "Agree the review date and the measures on day one. Then the decision to continue rests on what you both said mattered. Our guide to <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">tracking brand mentions in ChatGPT</a> will help you measure AI visibility yourself, so you aren’t relying only on the agency’s report.",
    },
    { t: "h2", c: "Common mistakes when hiring" },
    {
      t: "ul",
      items: [
        "<strong>Choosing on price alone.</strong> The cheapest package usually means less research and more generic comments.",
        "<strong>Skipping internal rules.</strong> If you haven’t decided who approves content, posts wait until the thread is dead.",
        "<strong>Not sharing product knowledge.</strong> Give the agency sales calls, support tickets and real objections. Better inputs make better comments.",
        "<strong>Measuring only clicks.</strong> Reddit also shapes Google results and AI answers. Track threads and mentions as well as sessions.",
        "<strong>Judging in week three.</strong> Accounts and threads need time. Keep your review to the date you agreed.",
        "<strong>Never reading the comments yourself.</strong> Spend 20 minutes each month reading what went out under your brand.",
      ],
    },
  ],
  faqs: [
    {
      q: "What should I look for in a Reddit marketing agency?",
      a: "Named accounts, clear disclosure, knowledge of your communities before you pay, a process for removals and reporting that lists every post and comment. Sample comments you’d genuinely upvote are the best single test.",
    },
    {
      q: "Is it safe to hire a Reddit marketing agency?",
      a: "Yes, if it follows Reddit’s rules and discloses the link to your brand. The risk comes from tactics such as bought votes, fake customers and account networks, so ban them in your contract.",
    },
    {
      q: "How long should a Reddit agency contract be?",
      a: "Three months is a sensible minimum, since results take time to show. Be cautious about twelve-month commitments before you’ve seen the work.",
    },
    {
      q: "Should the agency post from my brand account?",
      a: "Usually use both: a brand account for official updates and support, and real people with disclosure for everyday discussion. See our guide to brand and personal Reddit accounts for how to set that up.",
    },
    {
      q: "How do I know whether a Reddit agency is working?",
      a: "Check that content stays up and gets real replies, then track threads ranking on Google for your buyer searches, mentions in AI answers for your key prompts, and referral traffic and signups.",
    },
  ],
  sources: [
    { title: "Reddit Rules", url: rules, type: "primary", read: "2026-11-02" },
    { title: "Reddit Help: Spam", url: spam, type: "primary", read: "2026-11-02" },
    { title: "Reddit Help: Sign up for Reddit Pro", url: pro, type: "primary", read: "2026-11-02" },
    { title: "Discovered Labs: Reddit marketing agency cost", url: discovered, type: "vendor", read: "2026-11-02" },
  ],
  related: ["reddit-marketing-agency-cost", "reddit-marketing-agency-vs-in-house", "brand-vs-personal-reddit-account"],
  cta: {
    mid: "Want to test us with these questions? Ask them all. We’ll also show you which communities and threads matter for your category, free.",
    title: "See what a Reddit program should target for your brand.",
    text: "We look at the communities your buyers use and the threads and AI answers shaping your category, so you can judge any agency’s plan, including ours.",
    button: "Get my free audit",
  },
};
