import type { Post } from "../../lib/blog";

const nutshell = "https://www.nutshell.com/blog/geo-costs";
const webfx = "https://www.webfx.com/blog/seo/geo-pricing/";
const pepper = "https://www.pepper.inc/blog/geo-platform-pricing-guide-2026/";
const peec = "https://peec.ai/pricing";
const otterly = "https://otterly.ai/pricing";
const semrushKb = "https://www.semrush.com/kb/1493-ai-visibility-toolkit";
const scrunch = "https://scrunch.com/pricing";

export const post: Post = {
  slug: "how-much-does-ai-seo-cost",
  tracker: "7.2",
  bucket: "buying",
  style: "RS Answer",
  title: "How much does AI SEO cost? Agency and tool pricing in 2026",
  dek: "AI SEO costs anywhere from $29 a month for a tracker to $50,000 a month for an enterprise retainer. Here’s what each level buys, what to budget for your size, and how to spot pricing that doesn’t add up.",
  description: "How much does AI SEO cost in 2026? Agency retainers from $1,500 a month, tools from $29, project and hourly rates, what drives price, and how to budget.",
  targetQuery: "how much does ai seo cost",
  status: "published",
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Harshi Rathi",
  takeaways: [
    "Agency retainers usually run from $1,500 to $5,000 a month for small businesses, and $5,000 to $25,000 for mid-sized ones.",
    "Tracking tools start at $29 a month, but useful prompt coverage usually costs $100–$500 a month.",
    "Project work typically costs $5,000–$50,000, and consultants charge $50–$300 an hour.",
    "A monitoring-only retainer ($500–$1,500) tells you where you stand. It doesn’t change anything by itself.",
    "Scope drives price more than the label: number of prompts, pages, off-site work and how competitive your category is.",
  ],
  body: [
    {
      t: "callout",
      tone: "answer",
      c: "AI SEO (also sold as GEO or AEO) usually costs $1,500 to $5,000 a month with an agency for a small business, $5,000 to $25,000 for a mid-sized one, and $25,000 to $50,000 or more for enterprise. Tracking software alone starts at $29 a month and commonly reaches $500. One-off projects run $5,000 to $50,000, and consultants charge $50 to $300 an hour. For most startups and small B2B companies, $2,000 to $5,000 a month of execution plus a tool you may already own is a sensible starting budget.",
    },
    {
      t: "p",
      c: "Pricing in this market is confusing because “AI SEO” can mean a dashboard, a few rewritten pages or a full program across your site, Reddit and press. Two quotes can differ tenfold and describe different jobs. Here’s how to compare them, and how much you should expect to pay.",
    },
    { t: "h2", c: "What does AI SEO cost at a glance?" },
    {
      t: "table",
      head: ["Option", "Typical price", "What you get"],
      rows: [
        ["Tracking tool only", "$29–$500 a month", "Prompt tracking, mentions, citations, competitor comparison"],
        ["Monitoring-only retainer", "$500–$1,500 a month", "Someone runs the tool and reports on it"],
        ["Agency, small business", "$1,500–$5,000 a month", "Strategy, content changes, some off-site work, reporting"],
        ["Agency, mid-sized business", "$5,000–$25,000 a month", "More pages, wider off-site work, technical support"],
        ["Agency, enterprise", "$25,000–$50,000+ a month", "Several products or markets, dedicated team"],
        ["One-off project", "$5,000–$50,000", "Audit, migration or a specific overhaul"],
        ["Hourly consultant", "$50–$300 an hour", "Advice and review, with your team doing the work"],
        ["In-house specialist (US)", "$70,000–$110,000 a year, plus $3,000–$8,000 for tools", "A full-time owner"],
      ],
      caption: `Retainer, project and hourly ranges from <a href="${nutshell}">Nutshell</a> and <a href="${webfx}">WebFX</a>. Monitoring and in-house figures from <a href="${pepper}">Pepper</a>. Prices read 2 November 2026.`,
    },
    { t: "h2", c: "What do AI visibility tools cost?" },
    {
      t: "table",
      head: ["Tool", "Starts at", "What that includes"],
      rows: [
        [`<a href="${otterly}">Otterly.AI</a>`, "$29 a month", "15 prompts; ChatGPT, AI Overviews, Perplexity, Copilot"],
        [`<a href="${peec}">Peec AI</a>`, "$95 a month", "50 prompts; 3 active AI models; unlimited seats"],
        [`<a href="${semrushKb}">Semrush AI Visibility Toolkit</a>`, "$99 a month", "25 prompts; 1 domain; extra prompts $60 per 50"],
        [`<a href="${scrunch}">Scrunch</a>`, "$250 a month, billed annually", "350 custom prompts; 3 users"],
      ],
      caption: "List prices read from each vendor’s site on 2 November 2026.",
    },
    {
      t: "p",
      c: `Check how a tool bills before you compare. Prompts, models and seats are each priced differently, and <a href="${pepper}">Pepper notes</a> that overage on usage-based plans can add 20–30% to the base price. Our <a href="/blog/best-ai-visibility-tools">comparison of AI visibility tools</a> covers more options. You can also start for free: our <a href="/blog/how-to-track-brand-mentions-in-chatgpt">manual tracking method</a> needs only a spreadsheet.`,
    },
    { t: "h2", c: "What drives the price of AI SEO?" },
    {
      t: "ul",
      items: [
        "<strong>Number of prompts and engines tracked.</strong> Tools and agencies both charge more for broader coverage.",
        "<strong>How many pages get changed or created.</strong> A narrow fix to ten pages costs far less than work across hundreds.",
        "<strong>Off-site work.</strong> Reddit, community work, press and comparison-list outreach take far more labour than editing your own pages.",
        "<strong>Competition.</strong> Software, finance and other crowded categories generally cost more.",
        "<strong>Business size.</strong> Nutshell says business size “drives most of the cost difference”, since bigger sites need more work and more approvals.",
        "<strong>Technical state of your site.</strong> A JavaScript-only site or a blocked crawler needs fixing first, which adds to early costs.",
        "<strong>Who’s doing the work.</strong> A senior strategist costs more than a junior team running a checklist. Ask who’s on your account.",
      ],
    },
    { t: "h2", c: "What should you get at each budget?" },
    {
      t: "table",
      head: ["Monthly budget", "Reasonable to expect", "Be wary if"],
      rows: [
        ["Under $500", "A tool and your own time. Fix the basics yourself.", "Anyone promises “done for you” results at this price"],
        ["$500–$1,500", "Monitoring, monthly reporting and a list of recommendations", "They claim this includes content and off-site work"],
        ["$1,500–$5,000", "Prompt research, 4–10 page changes or new pages, some off-site work, reporting", "They can’t show the prompt list they’ll track"],
        ["$5,000–$15,000", "Bigger content program, active community and PR work, technical support", "Nobody can explain what changed last month"],
        ["$15,000+", "Multiple products or markets, dedicated team", "No named senior person, or the same templates as a small client"],
      ],
    },
    {
      t: "p",
      c: "For comparison, our own Growth plan starts at $2,000 a month and includes a planned 25–30 organic Reddit posts and 35–40 comments, prompt-backed research and content, and prompt, mention, citation, keyword and SERP tracking.",
    },
    { t: "cta" },
    { t: "h2", c: "How should you budget by stage?" },
    {
      t: "table",
      head: ["Stage", "Sensible starting point", "Spend it on"],
      rows: [
        ["Pre-seed", "$0–$100 a month, plus your own time", "Technical checks, a manual prompt tracker, clear core pages"],
        ["Seed", "$100–$2,000 a month", "A basic tool, a few high-intent pages, founder activity in communities"],
        ["Series A–B", "$2,000–$8,000 a month", "Agency or specialist support, off-site work, proper tracking"],
        ["Later stage", "$8,000+ a month", "Dedicated resource, broader coverage, tools and reporting"],
      ],
    },
    {
      t: "p",
      c: "These are our recommendations. Adjust them by how much AI search already matters to your buyers: ask new customers where they researched you, and check how many arrive from ChatGPT or similar tools in <a href=\"/blog/chatgpt-traffic-in-ga4\">GA4</a>.",
    },
    { t: "h2", c: "What can you do for free first?" },
    {
      t: "p",
      c: "Do this before paying anyone. Some of it may be all you need at first, and it makes you a far better buyer later.",
    },
    {
      t: "ol",
      items: [
        "<strong>Check crawler access.</strong> Make sure robots.txt and your CDN aren’t blocking OAI-SearchBot and other search crawlers. Use our <a href=\"/blog/robots-txt-for-ai-crawlers\">robots.txt templates</a>.",
        "<strong>Test your rendering.</strong> Confirm your main content appears without JavaScript, using our <a href=\"/blog/can-chatgpt-read-javascript\">two-minute test</a>.",
        "<strong>Get into Bing.</strong> Verify in Bing Webmaster Tools and set up IndexNow.",
        "<strong>Run 20 buyer prompts.</strong> Record who gets named and who gets cited. That’s your baseline.",
        "<strong>Fix your top five pages.</strong> Title the question, answer in the first sentence, and add real numbers.",
      ],
    },
    { t: "h2", c: "How do you compare two AI SEO proposals?" },
    {
      t: "table",
      head: ["Compare", "Why it matters"],
      rows: [
        ["Prompt list: how many, chosen how?", "“AI visibility” without a prompt list can’t be checked"],
        ["Engines covered", "ChatGPT, Perplexity, AI Overviews and Copilot behave differently"],
        ["Pages changed or created each month", "This is the main on-site output"],
        ["Off-site work: which sites, how many actions?", "Named communities and publications beat “digital PR”"],
        ["Who does the work", "Get the names and experience of your team"],
        ["Tools: included or extra?", "Separate software can add $50–$1,000+ a month"],
        ["Report sample", "Mentions, citations and rankings reported separately"],
        ["Term and exit", "Three months is a fair start; twelve is a lot to commit upfront"],
      ],
    },
    {
      t: "p",
      c: "Ask each agency to fill this table in. If one won’t, you’ve learned something about how they’ll report later. Then use our <a href=\"/blog/how-to-choose-an-ai-seo-agency\">12 questions for choosing an AI SEO agency</a> to test what’s behind the numbers.",
    },
    { t: "h2", c: "Is AI SEO different from what you already pay for SEO?" },
    {
      t: "p",
      c: "Partly. Much of the groundwork overlaps: crawlable pages, clear content and links from sites people trust. If you already pay for SEO, ask your provider what they’d add before you hire someone new. The real additions are prompt research, tracking across AI tools and off-site work in the communities that answers draw on.",
    },
    {
      t: "p",
      c: "Be careful with existing SEO retainers that add an “AI” line item with no new deliverables. If the price goes up, ask what prompts will be tracked, what work is new and how it’ll be reported. Our guide to <a href=\"/blog/what-is-ai-seo\">what AI SEO actually involves</a> gives you the checklist.",
    },
    { t: "h2", c: "When is AI SEO worth paying for?" },
    {
      t: "ul",
      items: [
        "<strong>Yes, probably:</strong> buyers compare options before talking to you, your category is discussed online, and competitors already get named in AI answers.",
        "<strong>Probably yes, but keep it small:</strong> you’re early, with few buyers using AI yet. Do the free work and track monthly.",
        "<strong>Not yet:</strong> you can’t yet explain clearly what you do, your site has basic problems, or you sell mainly through referrals in a tiny market.",
      ],
    },
    {"t": "h2", "c": "What does a $3,000 month actually pay for?"},
    {"t": "p", "c": "Agencies rarely break this down, so ask them to. A reasonable month at this level might look like the example below. It’s our illustration, so use it to test a proposal rather than as a standard rate card."},
    {"t": "table", "head": ["Work", "Share of effort", "What you should see"], "rows": [["Research and prompt tracking", "About 20%", "Updated prompt list, mention and citation results"], ["On-site pages", "About 35%", "Two to four new or rewritten pages, live on your site"], ["Off-site work", "About 35%", "Named threads, outreach and listings, with links"], ["Reporting and calls", "About 10%", "A short report with what changed and what’s next"]]},
    {"t": "p", "c": "If reporting and calls make up most of the visible output, you’re paying for a dashboard with a person attached. If there’s no off-site work at all, ask how they plan to influence the sources that your category’s answers rely on."},
    {"t": "h2", "c": "What costs get left out of the quote?"},
    {"t": "table", "head": ["Cost", "Typical amount", "Ask"], "rows": [["Tool onboarding", "$1,000–$5,000 one-time on some enterprise tools", "Is there a setup fee?"], ["Extra seats", "$50–$150 per person a month beyond the first few", "How many people are included?"], ["Overage", "Can add 20–30% to a usage-based subscription", "What happens at my limit?"], ["Separate software", "$50–$1,000+ a month", "Is the tool in your fee?"], ["Your own team’s time", "Reviews, approvals, developer changes", "How many hours do you need from us?"], ["Content production", "Varies", "Are writing and design included?"]], "caption": "<a href=\"https://www.pepper.inc/blog/geo-platform-pricing-guide-2026/\">Tool fee ranges from Pepper</a>; software range from WebFX."},
    {"t": "p", "c": "Developer time catches many teams out. If an agency’s recommendations need engineering work and nobody has scheduled it, you’ll pay for advice that sits in a document. Agree a monthly allowance of developer hours before you start."},
    {"t": "h2", "c": "How do you work out whether it’s paying off?"},
    {"t": "p", "c": "You won’t get a perfect number, because a buyer can read an AI answer and arrive later through a branded search. Do a simple estimate anyway, so that you have a target for the conversation."},
    {"t": "code", "label": "Break-even sketch", "c": "Monthly cost: $3,000\nAverage first-year customer value: $6,000\nGross margin: 80%\nGross profit per customer: $4,800\n\nCustomers needed per month to break even: 3,000 / 4,800 = 0.6\nThat's about two new customers each quarter."},
    {"t": "p", "c": "Then ask whether that’s believable. Count deals where the customer mentions ChatGPT, Reddit or AI search in a “how did you hear about us?” field, and watch the trend in your mention rate. If your average customer is worth very little, you’ll need far more volume, and a smaller budget or a do-it-yourself approach may make more sense."},
    {"t": "p", "c": "Before you approve any budget, write down the one number you’ll review at month three, such as mention rate on your 20 category prompts. Share it with whoever you hire. A provider who won’t agree to report that number is telling you how the next renewal conversation will go, so find out now."},
    {"t": "p", "c": "Keep that number visible on one shared page, next to the monthly cost, so nobody has to rebuild the case at renewal."},
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t pay for guaranteed citations. Nobody controls what ChatGPT or Google says.",
        "Don’t pay for an llms.txt file as a big deliverable. <a href=\"/blog/does-llms-txt-work\">The data doesn’t support it</a>.",
        "Don’t buy a $500-a-month tool before you’ve run 20 prompts by hand.",
        "Don’t sign for a year before you’ve seen a report.",
      ],
    },
    { t: "h2", c: "What are the common pricing mistakes?" },
    {
      t: "ul",
      items: [
        "<strong>Comparing retainers without comparing scope.</strong> Price means little until you know the output.",
        "<strong>Forgetting tool costs.</strong> Check whether software is in the quote.",
        "<strong>Buying monitoring and expecting change.</strong> A dashboard only tells you where you stand.",
        "<strong>Underbudgeting off-site work.</strong> It’s often where the hardest work sits, so check it’s really in scope.",
        "<strong>Measuring too early.</strong> Give it three months, with a baseline set before work starts.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much should a small business pay for AI SEO?",
      a: "Published ranges start around $1,500 to $5,000 a month for agency work. If that’s too much, start with the free checks, a basic tool and your own time.",
    },
    {
      q: "Are AI SEO, GEO and AEO priced differently?",
      a: "Not in any consistent way. The labels overlap heavily, so compare the actual scope rather than the name on the proposal.",
    },
    {
      q: "What’s the cheapest AI visibility tool?",
      a: "Otterly.AI’s Lite plan is listed at $29 a month for 15 prompts, and you can track prompts by hand in a spreadsheet for free. HubSpot’s AI Search Grader offers a free one-time check.",
    },
    {
      q: "Is it cheaper to hire someone in-house?",
      a: "Usually not at first. Pepper estimates a US GEO specialist at $70,000–$110,000 a year plus tools, which is more than most small retainers. It makes more sense when AI search is a proven channel and you have enough work for one person.",
    },
    {
      q: "Can anyone guarantee AI citations?",
      a: "No. Nobody controls what third-party AI models say or cite. Pay for the work and for clear measurement of what changes.",
    },
  ],
  sources: [
    { title: "Nutshell: how much does GEO cost", url: nutshell, type: "vendor", read: "2026-11-02" },
    { title: "WebFX: GEO pricing", url: webfx, type: "vendor", read: "2026-11-02" },
    { title: "Pepper: GEO platform pricing guide", url: pepper, type: "vendor", read: "2026-11-02" },
    { title: "Peec AI pricing", url: peec, type: "primary", read: "2026-11-02" },
    { title: "Otterly.AI pricing", url: otterly, type: "primary", read: "2026-11-02" },
    { title: "Semrush AI Visibility Toolkit KB", url: semrushKb, type: "primary", read: "2026-11-02" },
    { title: "Scrunch pricing", url: scrunch, type: "primary", read: "2026-11-02" },
  ],
  related: ["how-to-choose-an-ai-seo-agency", "best-ai-visibility-tools", "what-is-ai-seo"],
  cta: {
    mid: "Want to know what your category actually needs before you budget? We’ll check your AI visibility, free.",
    title: "Know what you need before you pay for it.",
    text: "We check where your brand appears in AI answers and what’s holding it back, so you can budget for the work that matters, with us or anyone else.",
    button: "Get my free audit",
  },
};
