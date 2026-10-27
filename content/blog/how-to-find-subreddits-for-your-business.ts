import type { Post } from "../../lib/blog";

const help = (id: string, slug: string) => `https://support.reddithelp.com/hc/en-us/articles/${id}-${slug}`;
const explore = help("17881389378196", "How-do-I-browse-and-find-communities-on-the-Reddit-app");
const profound = "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const rules = "https://redditinc.com/policies/reddit-rules";

export const post: Post = {
  slug: "how-to-find-subreddits-for-your-business",
  tracker: "4.8",
  bucket: "reddit",
  style: "RS Playbook",
  title: "How to find subreddits for your business (that AI also cites)",
  dek: "The right communities aren’t the biggest ones. They’re where your buyers ask for help and where AI assistants pull their answers from. Here’s a six-source method to find them and a scoring sheet to pick the best.",
  description: "How to find subreddits for your business: six ways to discover where buyers ask questions, how to check which threads AI cites, and a scoring sheet to choose.",
  targetQuery: "how to find subreddits for your business",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Vijay Singh",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Find subreddits for your business by looking where your buyers already ask questions, not where the most members are. Use six sources: Google searches with site:reddit.com, Reddit’s own search, communities where competitors are discussed, threads ChatGPT and Perplexity cite, role and industry communities, and Reddit’s Explore page. Then score each community on buyer fit, activity, promotion rules and whether AI cites it, and start with the top five to ten. A 20,000-member community full of your buyers is worth more than a huge general one.",
    },
    {
      t: "p",
      c: "Most companies pick subreddits by size. They find the biggest community with their category in the name, post there, and get ignored or removed. The communities that actually work are usually smaller, more specific, and full of people talking about the problem you solve rather than your category.",
    },
    {
      t: "p",
      c: "There’s a second reason to choose carefully now. Reddit threads are heavily cited by AI assistants: Reddit was the most-cited domain in <a href=\"" + profound + "\">Profound’s analysis of AI citations</a>. The right community reaches buyers twice, once when they read the thread and again when an AI tool quotes it.",
    },
    { t: "h2", c: "Source 1: Google, with site:reddit.com" },
    {
      t: "p",
      c: "Google is often better than Reddit’s own search for finding the threads buyers actually land on. Try these patterns, replacing the brackets:",
    },
    {
      t: "code",
      label: "Google searches",
      c: "site:reddit.com best [category] for [audience]\nsite:reddit.com [competitor] alternative\nsite:reddit.com [competitor] vs [competitor]\nsite:reddit.com how do you [task your product does]\nsite:reddit.com [problem you solve] recommendation\nsite:reddit.com [your category] worth it",
    },
    {
      t: "p",
      c: "For each useful thread, note the community it’s in, how old it is and how many comments it has. Threads that rank in Google keep getting read for years, which makes their communities worth joining. Pay special attention to threads from the last year with dozens of comments: they show a community that’s active, trusted by Google and full of people discussing exactly what you sell.",
    },
    { t: "h2", c: "Source 2: Reddit’s own search" },
    {
      t: "ol",
      items: [
        "Search for your problem keywords, not your product name: “invoice reminders”, “client onboarding”, “inventory spreadsheet”.",
        "Switch the results to <strong>Communities</strong> to see which communities match.",
        "Switch back to <strong>Posts</strong>, sort by <strong>Top</strong> and set the time to <strong>Past year</strong>. Note which communities the popular posts come from.",
        "Repeat with your competitors’ names and with the job titles of the people who buy from you.",
      ],
    },
    { t: "h2", c: "Source 3: where your competitors are discussed" },
    {
      t: "p",
      c: "Search for each competitor’s name on Reddit and in Google with <code>site:reddit.com</code>. Where people complain about, compare or recommend them is exactly where they’d discuss you. Note the questions people ask: “does anyone use [competitor] for [use case]?” tells you both the community and the content you need.",
    },
    { t: "h2", c: "Source 4: threads that AI already cites" },
    {
      t: "p",
      c: "This is the step most teams skip, and the most valuable one now. Ask ChatGPT (with search on), Perplexity and Google AI Mode the questions your buyers ask. Open every Reddit link in the sources.",
    },
    {
      t: "ul",
      items: [
        "Note the community and the thread.",
        "Note what the top comments recommend.",
        "Note whether you’re mentioned, and whether you could add something useful.",
      ],
    },
    {
      t: "p",
      c: `Communities that keep appearing in AI sources are high priority. In comparison-style questions, AI engines in a <a href="${toronto}">University of Toronto study</a> took most of their citations from independent sources rather than brand sites, and Reddit is one of the largest independent sources there is.`,
    },
    { t: "cta" },
    { t: "h2", c: "Source 5: role and industry communities" },
    {
      t: "p",
      c: "Your buyers don’t only gather around your category. They gather around their jobs and industries. A company selling scheduling software to dental clinics will find more buyers in communities for dentists and practice managers than in a community about scheduling software.",
    },
    {
      t: "table",
      head: ["If you sell to…", "Look for communities about…"],
      rows: [
        ["Sales teams", "Sales roles, SDR life, specific sales methods, CRM tools"],
        ["Marketers", "Marketing roles, SEO, PPC, email, content, specific platforms"],
        ["Developers", "Specific languages, frameworks, DevOps, self-hosting"],
        ["Small business owners", "Small business, specific trades, bookkeeping, local business"],
        ["Ecommerce brands", "Ecommerce, Shopify, Amazon sellers, dropshipping, specific niches"],
        ["Consumers", "The hobby, life stage or problem your product serves"],
      ],
    },
    { t: "h2", c: "Source 6: Reddit’s Explore page" },
    {
      t: "p",
      c: `Reddit’s <a href="${explore}">Explore Communities</a> page suggests communities by topic, by trends and by similarity to communities you already follow. Once you’ve joined a few good ones, check Explore for related communities you’ve missed. Also look at each community’s sidebar: many list related communities, which is often the fastest way to find smaller, more specific ones.`,
    },
    { t: "h2", c: "Questions to ask yourself about each community" },
    {
      t: "p",
      c: "Scores are useful, but a quick gut check catches things a spreadsheet misses. For each community near the top of your list, answer these honestly:",
    },
    {
      t: "ul",
      items: [
        "Could someone on our team answer a question here today, from real experience, without mentioning our product?",
        "Would we read this community even if we had nothing to sell?",
        "Do the people here have the problem we solve, or just an interest in the topic?",
        "If our product came up naturally in a thread, would the community see it as helpful or as an intrusion?",
        "Is there someone on our team who will show up here every week for the next six months?",
      ],
    },
    {
      t: "p",
      c: "If the answer to the first or last question is no, move the community down the list, however well it scores. Reddit rewards consistent, knowledgeable participation, and communities notice quickly when someone only appears to promote.",
    },
    {
      t: "p",
      c: "It also helps to write one sentence per community describing what you’ll contribute there: “answer setup questions about integrations”, “share benchmarks from our customer data”, “help new freelancers price their work”. That sentence keeps your team’s comments focused and useful, and it’s a good test of whether the community is a real fit.",
    },
    { t: "h2", c: "Score and choose" },
    {
      t: "p",
      c: "You’ll end up with 20 to 40 candidates. Score each from 1 to 3 on five things:",
    },
    {
      t: "table",
      head: ["Factor", "1", "2", "3"],
      rows: [
        ["Buyer fit", "Few of your buyers", "Some", "Mostly your buyers"],
        ["Buying questions", "Rare", "Monthly", "Weekly or more"],
        ["Activity", "A few posts a week", "Daily posts", "Many posts daily, with replies"],
        ["Rules", "No promotion, strict filters", "Promotion threads or disclosure only", "Disclosure allowed; helpful members welcome"],
        ["AI citations", "Never seen in AI sources", "Occasionally", "Often cited for your buyer questions"],
      ],
    },
    {
      t: "p",
      c: "Start with the five to ten highest scores, and assign each one an owner straight away. A score of 12 or more out of 15 is a strong community; under 8, skip it for now.",
    },
    {
      t: "table",
      head: ["Column", "Example"],
      rows: [
        ["Community", "r/[name]"],
        ["Members / posts per day", "45,000 / 30"],
        ["Example buyer question", "Link to a recent thread"],
        ["Promotion rules", "Disclosure required; no links in posts"],
        ["Account requirements", "Karma or age minimum, if stated"],
        ["Seen in AI sources?", "Yes: cited by Perplexity for “[prompt]”"],
        ["Score", "13 / 15"],
        ["Owner on our team", "Name"],
      ],
      caption: "Your community sheet. Keep it shared and update it monthly.",
    },
    { t: "h2", c: "How to tell if a community is healthy" },
    {
      t: "p",
      c: "Before a community goes on your list, spend ten minutes checking whether it’s a good place to spend time. Signs of a healthy community:",
    },
    {
      t: "ul",
      items: [
        "<strong>Questions get answered.</strong> Open five recent question posts. Most should have useful replies within a day.",
        "<strong>Moderators are active.</strong> Look for pinned posts from the last few months, recent rule updates or moderator comments.",
        "<strong>The mix is right.</strong> A good business community has a steady flow of real questions, not just news links and memes.",
        "<strong>Spam is under control.</strong> If the new feed is full of obvious promotion, either the moderators have given up or the members have left.",
        "<strong>People are kind to newcomers.</strong> Communities that mock beginner questions won’t welcome your answers either.",
      ],
    },
    { t: "h2", c: "Go one level deeper: pick threads, not just communities" },
    {
      t: "p",
      c: "Inside each community, a small number of threads do most of the work. Old threads that rank in Google and appear in AI sources keep getting read for years. When you find one in your research, it’s worth contributing to even if it’s months old, as long as the community allows comments on older posts and you add something new.",
    },
    {
      t: "ol",
      items: [
        "List the threads from sources 1 and 4 that rank in Google or appear in AI answers.",
        "Read the top comments and note what’s missing or outdated, such as old prices or tools that no longer exist.",
        "Write one comment that fills the gap, with specifics and disclosure if you mention your product.",
        "Check back after a week for replies, and answer them.",
      ],
    },
    {
      t: "p",
      c: "One well-placed comment on a thread that AI keeps citing can matter more than a dozen comments on new posts that disappear in a day.",
    },
    { t: "h2", c: "Who should own each community" },
    {
      t: "p",
      c: "Match communities to the people best placed to help there. Technical communities suit engineers. Role communities suit people who did that job. Industry communities suit customer-facing staff who hear customers’ problems every day. Give each person no more than two or three communities, so they can show up regularly and become a recognised name rather than a passing account.",
    },
    { t: "h2", c: "Before you post anything" },
    {
      t: "ol",
      items: [
        "<strong>Read the rules, sidebar, wiki and pinned posts</strong> for each community. Note anything about self-promotion, links and account requirements.",
        "<strong>Read a week of posts</strong> to learn the tone and what gets upvoted.",
        "<strong>Comment before you post.</strong> Many communities filter new or low-karma accounts. Our <a href=\"/blog/how-to-warm-up-a-reddit-account\">warm-up plan</a> covers this.",
        `<strong>Participate as a real person</strong>, as <a href="${rules}">Reddit’s rules</a> ask, and disclose when you mention your product.`,
      ],
    },
    {
      t: "p",
      c: "The rules vary a lot between communities. Our guide to <a href=\"/blog/reddit-self-promotion-rules\">Reddit self-promotion rules</a> explains how to read them.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you sell a tool that helps freelance designers send proposals and contracts. A size-first approach would pick the biggest design community and the biggest freelancing one. A buyer-first search turns up more:",
    },
    {
      t: "ul",
      items: [
        "Google searches for “site:reddit.com proposal software freelancers” surface threads in freelancing, graphic design and web design communities.",
        "Searching competitors’ names shows the same tools compared in communities for designers and small agencies.",
        "Asking Perplexity “how should freelance designers handle contracts?” cites two threads, one in a freelance community and one in a design business community.",
        "The design business community’s sidebar lists three smaller related communities, including one for agency owners.",
      ],
    },
    {
      t: "p",
      c: "After scoring, the top five are a mix of mid-sized and small communities, two of which appear in AI sources. The biggest general design community scores low on buyer questions and rules, so it waits.",
    },
    { t: "h2", c: "Keep the list fresh" },
    {
      t: "p",
      c: "Communities change. Moderators change rules, activity rises and falls, new communities appear. Once a month, check that each community on your list is still active, re-run your AI prompts to see which threads are cited now, and add any new communities you’ve come across. Drop communities where nothing you’ve posted has been useful after a couple of months. It’s better to be a familiar, trusted name in five communities than an occasional visitor in twenty. Note why you dropped each one, so nobody on the team adds it back later without knowing what happened there.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t pick communities by member count alone.",
        "Don’t join 30 communities at once. You can’t be helpful in that many.",
        "Don’t post the same thing in every community on your list. That’s the first item in Reddit’s spam policy.",
        "Don’t create your own subreddit before you have users asking questions. Join the existing conversation first.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Searching your product name instead of the problem.</strong> Buyers who haven’t heard of you describe the problem.",
        "<strong>Ignoring role communities.</strong> Many buyers never visit category communities.",
        "<strong>Skipping the AI check.</strong> Cited threads are where one comment can reach the most people.",
        "<strong>Not recording the rules.</strong> You’ll forget which community bans links.",
        "<strong>Never revisiting the list.</strong> A community that was great last year may have changed.",
      ],
    },
    {
      t: "p",
      c: "Once you have your list, our <a href=\"/blog/reddit-marketing-for-saas\">Reddit marketing for SaaS playbook</a> shows what to do in those communities week by week.",
    },
  ],
  faqs: [
    {
      q: "How do I find the right subreddits for my business?",
      a: "Search Google with site:reddit.com for your buyers’ questions and competitors’ names, check which Reddit threads AI assistants cite, look at role and industry communities, then score each community on buyer fit, activity, rules and AI citations.",
    },
    {
      q: "Should I post in the biggest subreddits?",
      a: "Not first. Smaller, specific communities full of your buyers are usually more effective, friendlier to genuine contributors and easier to stand out in.",
    },
    {
      q: "How many subreddits should a business be active in?",
      a: "Start with five to ten. That’s enough to reach buyers and few enough to participate properly in each.",
    },
    {
      q: "How do I know which subreddits AI cites?",
      a: "Ask your buyers’ questions in ChatGPT with search, Perplexity and Google AI Mode, and note every Reddit thread linked in the sources. Communities that appear repeatedly are high priority.",
    },
    {
      q: "Can I create my own subreddit for my business?",
      a: "Yes, but it works best once you have users asking questions. Before that, join the communities where your buyers already talk.",
    },
  ],
  sources: [
    { title: "Reddit help: Explore communities", url: explore, type: "primary", read: "2026-10-27" },
    { title: "Profound: Reddit and AI search", url: profound, type: "vendor", read: "2026-10-27" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-27" },
    { title: "Reddit Rules", url: rules, type: "primary", read: "2026-10-27" },
  ],
  related: ["reddit-marketing-for-saas", "reddit-self-promotion-rules", "how-to-warm-up-a-reddit-account"],
  cta: {
    mid: "Want your community list built for you? We’ll find where your buyers ask, and which threads AI cites.",
    title: "Get your subreddit map.",
    text: "We find the communities your buyers use, score them on fit, rules and AI citations, and hand you a ranked list with the threads to join first.",
    button: "Map my subreddits",
  },
};
