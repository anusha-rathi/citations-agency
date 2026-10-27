import type { Post } from "../../lib/blog";

const channels = "https://support.google.com/analytics/answer/13051316";
const google = "https://developers.google.com/search/docs/appearance/ai-features";
const bing = "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview";
const pew = "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/";

export const post: Post = {
  slug: "chatgpt-traffic-in-ga4",
  tracker: "2.10",
  bucket: "cited",
  style: "RS Playbook",
  title: "How to find ChatGPT traffic in GA4 (and other AI assistants)",
  dek: "ChatGPT, Perplexity, Copilot, Gemini and Claude all send visitors, but GA4 lumps them into Referral or Direct. Here’s how to find them in two minutes and set up a permanent AI channel.",
  description: "How to find ChatGPT traffic in GA4: the quick report, a regex for every AI assistant, a custom AI channel group, landing-page analysis and what GA4 can’t show.",
  targetQuery: "chatgpt traffic in google analytics 4",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "In GA4, go to Reports → Acquisition → Traffic acquisition, change the dimension to “Session source / medium”, and search for chatgpt.com. Links ChatGPT cites usually carry utm_source=chatgpt.com, so they show as “chatgpt.com / referral”. To see every AI assistant at once, filter with a regex for chatgpt, perplexity, copilot, gemini and claude. To keep it permanently, create a custom channel group with an “AI assistants” channel; GA4 can apply it to past data. Remember the limits: AI Overviews clicks are counted as Google organic, and some AI visits arrive as Direct.",
    },
    {
      t: "p",
      c: "AI assistants send traffic that’s easy to miss. It’s spread across several sources, labelled as ordinary referrals, and sometimes missing a referrer altogether. But it’s often high-intent: someone who clicks a source in a ChatGPT answer about tools in your category is already comparing options.",
    },
    {
      t: "p",
      c: "This guide shows the quick check, then the permanent setup, then how to read the numbers.",
    },
    { t: "h2", c: "The two-minute check" },
    {
      t: "ol",
      items: [
        "In GA4, open <strong>Reports → Acquisition → Traffic acquisition</strong>.",
        "Click the dimension dropdown above the table (it usually says “Session primary channel group”) and choose <strong>Session source / medium</strong>.",
        "Type <code>chatgpt</code> in the search box above the table.",
        "Set the date range to the last 90 days and compare with the previous period.",
      ],
    },
    {
      t: "p",
      c: "You’ll usually see <code>chatgpt.com / referral</code>. ChatGPT adds <code>utm_source=chatgpt.com</code> to many of the links it cites, which is why the source is labelled so clearly. Repeat the search for <code>perplexity</code>, <code>copilot</code>, <code>gemini</code> and <code>claude</code>.",
    },
    { t: "h2", c: "AI assistant sources to look for" },
    {
      t: "table",
      head: ["Assistant", "Source you’ll usually see in GA4"],
      rows: [
        ["ChatGPT", "chatgpt.com (older visits may show chat.openai.com)"],
        ["Perplexity", "perplexity.ai"],
        ["Microsoft Copilot", "copilot.microsoft.com"],
        ["Google Gemini app", "gemini.google.com"],
        ["Claude", "claude.ai"],
        ["Google AI Overviews and AI Mode", "Not separate: counted as google / organic"],
      ],
    },
    { t: "h2", c: "See all AI traffic at once with a regex" },
    {
      t: "p",
      c: "Instead of searching one by one, use an exploration with a regex filter:",
    },
    {
      t: "ol",
      items: [
        "Go to <strong>Explore → Free form</strong>.",
        "Add the dimensions <strong>Session source</strong> and <strong>Landing page + query string</strong>, and the metrics <strong>Sessions</strong>, <strong>Engaged sessions</strong> and <strong>Key events</strong>.",
        "Drag Session source into Rows.",
        "Add a filter: Session source → <strong>matches regex</strong> → paste the expression below.",
      ],
    },
    {
      t: "code",
      label: "GA4 regex",
      c: ".*(chatgpt\\.com|chat\\.openai\\.com|perplexity\\.ai|copilot\\.microsoft\\.com|gemini\\.google\\.com|claude\\.ai).*",
    },
    {
      t: "p",
      c: "Add new assistants to the list as they appear in your referral report. Keep the regex in a shared document so everyone uses the same one.",
    },
    { t: "cta" },
    { t: "h2", c: "Make it permanent: an AI channel group" },
    {
      t: "p",
      c: "Explorations are good for digging, but a custom channel makes AI traffic show up in every standard report next to Organic Search, Paid and Email. GA4 lets you do this with a custom channel group:",
    },
    {
      t: "ol",
      items: [
        "Go to <strong>Admin → Data display → Channel groups</strong>. You need Editor access or above.",
        "Click <strong>Create new channel group</strong>. GA4 starts you with a copy of the default group.",
        "Name it, for example “Channels with AI”.",
        "Click <strong>Add new channel</strong>, name it “AI assistants”, and set the condition: <strong>Source</strong> → <strong>matches regex</strong> → the expression above.",
        "Click <strong>Reorder</strong> and drag “AI assistants” above “Referral”. Channels are matched top to bottom, so it must come first or AI visits will be counted as Referral.",
        "Click <strong>Save group</strong>.",
      ],
    },
    {
      t: "p",
      c: `Google says custom channel groups <a href="${channels}">can be applied to your reports retroactively</a>, so you’ll see historical AI traffic too. Standard properties can have two custom channel groups in addition to the default one.`,
    },
    {
      t: "p",
      c: "To use it, open Traffic acquisition, click the dimension dropdown and pick your new channel group instead of the default.",
    },
    { t: "h2", c: "Find which pages AI sends people to" },
    {
      t: "p",
      c: "Knowing the total is useful. Knowing the landing pages is what tells you what to do next. In your exploration, put Landing page in Rows and keep the AI regex filter. You’ll typically see three kinds of page:",
    },
    {
      t: "table",
      head: ["Landing page type", "What it suggests", "What to do"],
      rows: [
        ["Pricing, comparison, alternatives", "AI cites you in buying answers", "Keep facts current; make the next step obvious"],
        ["Blog guides and how-tos", "AI uses you as an explainer", "Add clear links to related product pages"],
        ["Docs and help articles", "AI uses you for setup and troubleshooting", "Make sure docs link to signup or support"],
        ["Homepage", "Often a brand mention without a specific source", "Check the homepage states clearly what you do and for whom"],
      ],
    },
    { t: "h2", c: "Compare AI visitors with everyone else" },
    {
      t: "p",
      c: "A comparison makes the numbers easier to read. In any standard report, click <strong>Add comparison</strong> at the top, choose <strong>Session source</strong>, set it to match your AI regex, and save. Add a second comparison for “Session default channel group exactly matches Organic Search”. Every report you open, from landing pages to conversions, now shows AI visitors and organic visitors side by side.",
    },
    {
      t: "p",
      c: "If you use Looker Studio, connect your GA4 property and create a chart using your custom channel group as the dimension. Filter it to the “AI assistants” channel and add sessions, engaged sessions and key events. A single page with that chart, a landing-page table and a month-over-month comparison is enough for most teams.",
    },
    { t: "h2", c: "AI visits showing up as Direct or Unassigned" },
    {
      t: "p",
      c: "If your AI channel looks smaller than expected, some visits may be landing elsewhere:",
    },
    {
      t: "ul",
      items: [
        "<strong>Direct:</strong> clicks from desktop and mobile apps sometimes arrive without a referrer. Watch for spikes in Direct traffic to pages that AI cites, such as pricing or a specific guide.",
        "<strong>Unassigned:</strong> visits with a UTM source but no medium can land here. Check Session source / medium for chatgpt.com entries without “referral”.",
        "<strong>Referral:</strong> if the AI channel isn’t above Referral in your channel group, AI visits still show here.",
      ],
    },
    {
      t: "p",
      c: "You can’t recover every lost referrer, but you can spot patterns. A page that suddenly gets more Direct traffic at the same time as it starts appearing in ChatGPT answers is a strong hint.",
    },
    { t: "h2", c: "Measure quality, not just volume" },
    {
      t: "p",
      c: "AI traffic is usually small compared with Google, so judge it by what it does. Compare the AI assistants channel with Organic Search on:",
    },
    {
      t: "ul",
      items: [
        "<strong>Engagement rate</strong>: are AI visitors reading?",
        "<strong>Key events per session</strong>: signups, demo requests, purchases.",
        "<strong>Landing pages</strong>: are they arriving on buying pages or general guides?",
      ],
    },
    {
      t: "p",
      c: "Add a “How did you hear about us?” field with an “AI assistant (ChatGPT, Perplexity, etc.)” option to signup and demo forms. It catches people who read about you in an AI answer and came back later through Google or by typing your URL, which GA4 can’t attribute.",
    },
    { t: "h2", c: "Track conversions from AI visitors" },
    {
      t: "p",
      c: "Traffic only matters if it turns into customers. Make sure your important actions, such as signups, demo requests, trials and purchases, are marked as key events in <strong>Admin → Data display → Events</strong>. Then, in your exploration, add <strong>Key events</strong> and <strong>Session key event rate</strong> as metrics alongside sessions.",
    },
    {
      t: "p",
      c: "Look at the rate, not the count. A channel with 300 sessions and a 4% key event rate is worth more attention than one with 3,000 sessions and 0.5%. If AI visitors convert well, that’s the strongest argument for investing in AI visibility, and the number leadership will ask for first.",
    },
    {
      t: "p",
      c: "For B2B companies with longer sales cycles, also pass the first-touch source into your CRM. A deal that started with a ChatGPT visit three months ago won’t show up in GA4’s conversion reports, but it will in the CRM if the source was captured at signup.",
    },
    { t: "h2", c: "What GA4 can’t show you" },
    {
      t: "ul",
      items: [
        `<strong>AI Overviews and AI Mode clicks.</strong> Google counts these <a href="${google}">inside overall search traffic</a>, so in GA4 they look like google / organic.`,
        "<strong>Visits with no referrer.</strong> Some clicks from AI apps arrive without a referrer and land in Direct, especially from desktop and mobile apps.",
        `<strong>People who read but don’t click.</strong> Most people don’t click sources at all: in <a href="${pew}">Pew Research’s study</a>, people clicked a link inside an AI summary on just 1% of visits that showed one.`,
        "<strong>Mentions without links.</strong> If ChatGPT names you without citing your site, there’s nothing to click.",
      ],
    },
    {
      t: "p",
      c: `So treat GA4’s AI channel as a floor, not the full picture. Pair it with <a href="${bing}">Bing’s AI Performance report</a> for Copilot citations, and a monthly prompt check in ChatGPT and Perplexity for mentions. Our guide to <a href="/blog/ai-citations-vs-brand-mentions">citations vs brand mentions</a> shows how to report them together.`,
    },
    { t: "h2", c: "Check your server logs too" },
    {
      t: "p",
      c: "GA4 only sees visitors who load your page in a browser and run its tracking script. Your server logs see something GA4 can’t: AI assistants fetching your pages for users. When someone asks ChatGPT about a page, a request from ChatGPT-User often appears in your logs. Perplexity-User works the same way.",
    },
    {
      t: "code",
      label: "Terminal",
      c: "grep -E \"ChatGPT-User|Perplexity-User\" access.log \\\n  | awk '{print $7}' | sort | uniq -c | sort -rn | head -20",
    },
    {
      t: "p",
      c: "That list shows which pages AI assistants read on behalf of people, even when nobody clicks through. It’s a useful complement to GA4’s landing-page report. If you’re setting up crawler access at the same time, our <a href=\"/blog/gptbot-vs-oai-searchbot\">guide to OpenAI’s crawlers</a> explains which bot is which.",
    },
    { t: "h2", c: "Reading the numbers: an example" },
    {
      t: "p",
      c: "Say your AI channel shows 400 sessions last month, up from 250. ChatGPT sent 280, Perplexity 90, Copilot 30. Engagement rate is 68%, against 52% for Organic Search. The top landing pages are your comparison page, your pricing page and a guide on choosing tools in your category. Twelve signups came from the AI channel, and another eight people chose “AI assistant” in the signup form.",
    },
    {
      t: "p",
      c: "That tells you AI visitors are fewer but more engaged than search visitors, they arrive on buying pages, and the real influence is larger than GA4 alone shows. The action: keep the comparison and pricing pages current, and create similar pages for the next two competitors buyers ask about. Our <a href=\"/blog/how-to-get-cited-by-chatgpt\">ChatGPT citation playbook</a> covers how.",
    },
    { t: "h2", c: "Set up an alert for changes" },
    {
      t: "p",
      c: "AI traffic can change quickly when a page starts or stops being cited. GA4’s Insights can notify you. Go to <strong>Reports → Reports snapshot</strong>, open the Insights card, choose <strong>Create</strong>, and set a custom insight: a weekly check where sessions for your AI regex source change by more than, say, 30%. Have it emailed to the people who own your key pages, so changes are noticed quickly.",
    },
    {
      t: "p",
      c: "A sudden drop is usually worth investigating the same week. Check that robots.txt and your CDN still allow AI crawlers, that the landing page still loads its content in HTML, and whether a competitor’s page has replaced yours in the answers for that topic.",
    },
    { t: "h2", c: "A monthly AI traffic report" },
    {
      t: "code",
      label: "Report template",
      c: "AI assistant traffic, [month]\n\nSessions:        [n] (last month [n], [+/-]%)\n  ChatGPT [n] | Perplexity [n] | Copilot [n] | Gemini [n] | Claude [n]\nEngagement rate: [x]% (Organic Search: [x]%)\nKey events:      [n] signups / demos from AI channel\nTop landing pages: [page] [n], [page] [n], [page] [n]\n\"Heard about us via AI\" (form): [n]\nNotes: [new pages cited, drops, actions next month]",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t leave the AI channel below Referral in the channel order. It will never match.",
        "Don’t compare AI traffic with Google traffic by volume alone. Compare engagement and conversions.",
        "Don’t assume zero AI traffic means zero AI visibility. Most people don’t click.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Searching only “openai”.</strong> Most ChatGPT traffic now shows as chatgpt.com.",
        "<strong>Forgetting other assistants.</strong> Perplexity, Copilot, Gemini and Claude all send visits.",
        "<strong>Changing the regex without telling anyone.</strong> Reports stop matching month to month.",
        "<strong>Expecting AI Overviews in GA4.</strong> They’re in Google organic, not a separate source.",
        "<strong>Skipping the “How did you hear about us?” field.</strong> It catches the visits analytics can’t attribute.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do I see ChatGPT traffic in Google Analytics 4?",
      a: "Go to Reports → Acquisition → Traffic acquisition, switch the dimension to Session source / medium, and search for chatgpt. ChatGPT visits usually appear as chatgpt.com / referral.",
    },
    {
      q: "Why does ChatGPT traffic show as utm_source=chatgpt.com?",
      a: "ChatGPT adds that UTM parameter to many of the links it cites, which labels the visit’s source clearly in analytics.",
    },
    {
      q: "Can I see Google AI Overviews traffic in GA4?",
      a: "Not separately. Google counts AI Overviews and AI Mode clicks as part of normal Google organic search traffic.",
    },
    {
      q: "How do I create an AI channel in GA4?",
      a: "Go to Admin → Data display → Channel groups, create a new group, add an “AI assistants” channel with Source matching a regex of AI domains, move it above Referral, and save. It can be applied to past data.",
    },
    {
      q: "Why is my ChatGPT traffic so low?",
      a: "Most people read AI answers without clicking, some AI visits arrive as Direct, and mentions without links can’t send traffic. Use prompt checks and Bing’s AI Performance report alongside GA4.",
    },
  ],
  sources: [
    { title: "GA4: custom channel groups", url: channels, type: "primary", read: "2026-10-27" },
    { title: "Google AI features and your website", url: google, type: "primary", read: "2026-10-27" },
    { title: "Bing: AI Performance", url: bing, type: "primary", read: "2026-10-27" },
    { title: "Pew Research: AI summaries and clicks", url: pew, type: "research", read: "2026-10-27" },
  ],
  related: ["ai-citations-vs-brand-mentions", "how-to-track-brand-mentions-in-chatgpt", "bing-webmaster-tools-ai-performance"],
  cta: {
    mid: "Want AI traffic tracked properly from today? We’ll set up the channel, reports and prompt checks for you.",
    title: "Get your AI traffic tracking set up.",
    text: "We build your GA4 AI channel, set up landing-page and conversion reports, and add monthly prompt checks so you see clicks and mentions together.",
    button: "Set up my AI tracking",
  },
};
