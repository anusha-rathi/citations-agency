import type { Post } from "../../lib/blog";

const sync = "https://blog.cloudflare.com/bot-preference-sync/";
const managed = "https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/";
const crawl = "https://developers.cloudflare.com/ai-crawl-control/";
const crawlStart = "https://developers.cloudflare.com/ai-crawl-control/get-started/";
const blockAi = "https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/";
const bots = "https://developers.openai.com/api/docs/bots";
const google = "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers";

export const post: Post = {
  slug: "cloudflare-ai-bot-settings",
  tracker: "3.7",
  bucket: "technical",
  style: "RS Playbook",
  title: "Cloudflare AI bot settings: block training, not search",
  dek: "Cloudflare now groups AI crawlers into Search, Agent and Training, and can write your robots.txt for you. Here’s what each setting does, the right setup for most businesses, and how to check you’re not blocking the crawlers that get you cited.",
  description: "Cloudflare AI bot settings explained: Search, Agent and Training policies, Bot Preference Sync, AI Crawl Control, the setup for most sites and how to test it.",
  targetQuery: "cloudflare block ai bots",
  status: "published",
  published: "2026-10-29",
  updated: "2026-10-29",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Cloudflare now lets you set separate policies for three kinds of AI crawling: Search (indexing for search results), Agent (AI assistants fetching pages to answer users) and Training (using content to train models). For most businesses that want to be cited in AI answers, allow Search and Agent, and set Training to Allow or Disallow depending on whether your content is your product. Bot Preference Sync can then write matching rules into your robots.txt. Check AI Crawl Control to see which crawlers visit and whether any are blocked, then test with a request as OAI-SearchBot.",
    },
    {
      t: "p",
      c: "Cloudflare sits in front of a large share of websites, so its bot settings decide whether many AI crawlers can reach you at all. Those settings changed in 2026. If you set them up a while ago, or your site was added with defaults, it’s worth checking them now. It takes about fifteen minutes, and a wrong setting here can quietly remove you from AI answers without any error you’d notice.",
    },
    {
      t: "p",
      c: "The goal for most businesses is simple: let AI search find and cite you, and make a deliberate choice about training. Here’s how to do that in Cloudflare, step by step.",
    },
    { t: "h2", c: "The three policy categories" },
    {
      t: "table",
      head: ["Category", "What it covers", "Options", "Effect of blocking"],
      rows: [
        ["Search", "Crawlers indexing pages for search results", "Allow; Block on pages with ads; Block everywhere", "You can drop out of the search features those crawlers power"],
        ["Agent", "AI assistants fetching pages to answer a user’s request", "Allow; Block on pages with ads; Block everywhere", "Assistants can’t read your page when someone asks about it"],
        ["Training", "Using your content to train AI models", "Allow; Disallow; Block on pages with ads; Block everywhere", "Your content shouldn’t be used to train future models"],
      ],
      caption: `From Cloudflare’s <a href="${sync}">Bot Preference Sync announcement</a> (August 21, 2026, updated September 15, 2026).`,
    },
    {
      t: "p",
      c: `The Training “Disallow” option is the important one. Cloudflare says it writes <a href="${sync}">“a ‘no training’ preference”</a> to your robots.txt, so that cooperating mixed-use crawlers, those used for both search and training, “can still access your content for search indexing”. Mixed-use crawlers that don’t meet Cloudflare’s transparency criteria are still blocked.`,
    },
    { t: "h2", c: "The right setup for most businesses" },
    {
      t: "table",
      head: ["Your situation", "Search", "Agent", "Training"],
      rows: [
        ["B2B software, ecommerce, services (want maximum AI visibility)", "Allow", "Allow", "Allow"],
        ["Want AI citations but not training", "Allow", "Allow", "Disallow"],
        ["Ad-supported publisher", "Allow", "Allow or Block on pages with ads", "Disallow"],
        ["Members-only or licensed content", "Allow public pages only", "Block", "Block"],
      ],
    },
    {
      t: "p",
      c: "If you sell something and want buyers to hear about you in ChatGPT, Perplexity or Claude, Search and Agent should be allowed. Blocking them is the setting most likely to cost you citations.",
    },
    { t: "h2", c: "What the defaults are" },
    {
      t: "p",
      c: `According to Cloudflare, <a href="${sync}">new customers without ad monetisation get no blocks by default</a>. Sites that select “I monetize from pages with ads on this domain” during onboarding get Training set to Disallow by default. If your site was set up earlier, check what’s actually configured, because older settings may still apply.`,
    },
    {
      t: "p",
      c: `The older “Block AI bots” toggle under Security Settings, which offered Block on all pages, Block on pages with ads, or Allow, was <a href="${blockAi}">marked as deprecating on September 15, 2026</a>, with the new category policies taking its place.`,
    },
    { t: "h2", c: "Step by step: check and set your policies" },
    {
      t: "ol",
      items: [
        "<strong>Log in to Cloudflare</strong> and open the domain.",
        `<strong>Go to Security Settings</strong>, filter by <strong>Bot traffic</strong>, and select <strong>Configure AI bot policies</strong>, as described in Cloudflare’s <a href="${managed}">managed robots.txt documentation</a>.`,
        "<strong>Set Search and Agent</strong> to Allow, unless you have a specific reason not to.",
        "<strong>Set Training</strong> to Allow or Disallow, based on the table above.",
        "<strong>Decide on Bot Preference Sync</strong> (next section).",
        "<strong>Save, then test</strong> with the commands below.",
      ],
    },
    { t: "cta" },
    { t: "h2", c: "Bot Preference Sync: Cloudflare writes your robots.txt" },
    {
      t: "p",
      c: `Bot Preference Sync <a href="${managed}">“generates managed robots.txt directives”</a> from your Search, Agent and Training policies when at least one is set to Block, Block on pages with ads, or, for Training, Disallow. If you already have a robots.txt, Cloudflare <a href="${managed}">prepends its managed rules</a> before yours, combining both in a single response.`,
    },
    {
      t: "p",
      c: "When Training is set to Disallow, the managed rules include disallow lines for training crawlers such as Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, Google-Extended, GPTBot and meta-externalagent, along with Cloudflare’s Content Signals Policy explaining the search, ai-input and ai-train categories.",
    },
    {
      t: "ul",
      items: [
        "<strong>Turn it on</strong> if you want one place, Cloudflare, to control your AI preferences and keep the crawler list current.",
        "<strong>Leave it off</strong> if you maintain robots.txt carefully yourself and don’t want rules added in front of yours.",
        "<strong>Either way, read the final file</strong> at <code>yoursite.com/robots.txt</code> after saving.",
      ],
    },
    { t: "h2", c: "AI Crawl Control: see who’s visiting" },
    {
      t: "p",
      c: `<a href="${crawl}">AI Crawl Control</a> shows which AI services access your site, lets you allow or block them individually, and tracks whether crawlers follow your robots.txt. It’s available on all Cloudflare plans. Open <strong>AI Crawl Control</strong> in the dashboard and use the Overview, Crawlers and Metrics tabs. To block a single crawler, go to the Crawlers tab and, <a href="${crawlStart}">in the Action column, select Block</a>.`,
    },
    {
      t: "p",
      c: "Use it monthly. You’re looking for two things: search crawlers you want, like OAI-SearchBot, PerplexityBot and Claude-SearchBot, visiting and allowed; and anything blocked that you didn’t intend to block. Free plans identify crawlers by user agent; Enterprise plans with Bot Management get more advanced detection.",
    },
    { t: "h2", c: "Test that AI search can reach you" },
    {
      t: "code",
      label: "Terminal",
      c: "for ua in OAI-SearchBot PerplexityBot Claude-SearchBot Googlebot bingbot; do\n  echo \"$ua: $(curl -s -o /dev/null -w '%{http_code}' -A \"$ua\" https://yoursite.com/pricing)\"\ndone\n# 200 = reachable   403/503 = blocked or challenged",
    },
    {
      t: "p",
      c: "A fake user agent from your own computer won’t pass Cloudflare’s bot verification the way the real crawler does, so treat a 200 as encouraging rather than proof. AI Crawl Control’s view of real crawler requests is the better confirmation.",
    },
    { t: "h2", c: "Don’t block Google by accident" },
    {
      t: "p",
      c: `Google’s AI Overviews and AI Mode use Googlebot, the same crawler as normal Search. Google-Extended is separate: Google says it controls Gemini’s use of content and <a href="${google}">“does not impact a site’s inclusion in Google Search”</a>. So:`,
    },
    {
      t: "ul",
      items: [
        "Disallowing training can include Google-Extended without affecting Google Search or AI Overviews.",
        "Never block Googlebot unless you want to leave Google Search entirely.",
        "After changing any bot setting, inspect a key URL in Search Console to confirm Googlebot can still fetch it.",
      ],
    },
    { t: "h2", c: "Separate OpenAI’s search and training bots" },
    {
      t: "p",
      c: `OpenAI documents that you can <a href="${bots}">allow OAI-SearchBot “in order to appear in search results while disallowing GPTBot”</a>. Cloudflare’s categories follow the same split: OAI-SearchBot is search, GPTBot is training. If ChatGPT citations matter to you, confirm OAI-SearchBot isn’t blocked anywhere in Cloudflare, including in custom firewall rules. Our <a href="/blog/gptbot-vs-oai-searchbot">GPTBot vs OAI-SearchBot guide</a> has the details.`,
    },
    { t: "h2", c: "Three common scenarios" },
    { t: "h3", c: "A SaaS company on the free plan" },
    {
      t: "p",
      c: "The marketing site sits behind Cloudflare with settings nobody has looked at since launch. ChatGPT never cites the docs, which live on a subdomain. The check finds the main site fine, but an old custom rule on the docs subdomain challenges all “known bots”. Removing that rule and setting Search and Agent to Allow on both hostnames fixes access. Training stays on Allow, because everything on the site is marketing and documentation the company wants AI to learn from.",
    },
    { t: "h3", c: "An ad-supported publisher" },
    {
      t: "p",
      c: "The publisher wants traffic from AI search but doesn’t want articles used for training. They set Search to Allow, Agent to Block on pages with ads, and Training to Disallow, and turn on Bot Preference Sync so their robots.txt carries the no-training preference. Cooperating mixed-use crawlers can still index the site for search.",
    },
    { t: "h3", c: "A store whose ChatGPT traffic dropped" },
    {
      t: "p",
      c: "Referrals from chatgpt.com fall to nearly zero over a week. AI Crawl Control shows OAI-SearchBot requests being blocked since a new rate-limiting rule went live during a sale. Exempting verified crawlers from the rule restores access, and referrals return over the following weeks as pages are recrawled.",
    },
    { t: "h2", c: "A settings audit checklist" },
    {
      t: "ul",
      items: [
        "AI bot policies: Search and Agent set as intended; Training set deliberately.",
        "Bot Preference Sync: on or off by decision, and the final robots.txt read through.",
        "Custom WAF rules: none blocking verified search crawlers.",
        "Rate limiting: verified crawlers exempt, or limits high enough not to catch them.",
        "Bot fight modes: checked for side effects on AI search crawlers.",
        "Every hostname: main site, docs, help centre and blog checked separately.",
        "AI Crawl Control: wanted crawlers visiting and allowed.",
        "Search Console URL Inspection: Googlebot can fetch key pages.",
      ],
    },
    { t: "h2", c: "Check your custom rules too" },
    {
      t: "p",
      c: "Policy settings aren’t the only way to block bots. Custom WAF rules, rate limiting and “bot fight” modes can block AI crawlers even when your AI policies allow them. Review any rule that matches on user agent, known bots or country, and make sure verified search crawlers aren’t caught by it.",
    },
    { t: "h2", c: "If you’ve been blocking AI search" },
    {
      t: "p",
      c: "If the audit shows AI search crawlers were blocked, don’t panic. Fix the setting, then help the crawlers catch up:",
    },
    {
      t: "ol",
      items: [
        "Change the policy or rule, and confirm in AI Crawl Control that requests are now allowed.",
        "Check your robots.txt allows the same crawlers; OpenAI says its systems take about 24 hours to pick up robots.txt changes.",
        "Submit your key URLs to Bing through IndexNow, since Microsoft is among ChatGPT search’s providers.",
        "Re-run your buyer prompts in ChatGPT and Perplexity after two to four weeks and compare with before.",
      ],
    },
    {
      t: "p",
      c: "Citations come back as pages are recrawled, so there’s no instant switch. How quickly depends on how often each crawler visits your site and how long the block was in place. Track it with the same prompts each time, and keep a note of the date you unblocked, so you can tell recovery apart from normal month-to-month movement.",
    },
    { t: "h2", c: "If you’re not on Cloudflare" },
    {
      t: "p",
      c: "Other CDNs and hosts have similar controls under different names: bot management, firewall rules, attack challenge modes or “AI crawler” toggles. The principles are the same. Find every setting that can block or challenge bots, make sure verified search crawlers are allowed, decide on training separately, and test with real crawler traffic in your logs rather than trusting the settings page alone.",
    },
    { t: "h2", c: "A monthly routine" },
    {
      t: "p",
      c: "Spend ten minutes a month in AI Crawl Control. Check that OAI-SearchBot, PerplexityBot, Claude-SearchBot and Bingbot are visiting your key pages, that nothing you want is blocked, and that no new crawler is hitting the site unusually hard. After any change to firewall or rate-limiting rules, repeat the curl test and look at AI Crawl Control the next day. Settings that block AI search usually get added during an incident, a sale or a security review, and nobody remembers to check what else they caught.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t set Search or Agent to Block if you want to appear in AI answers.",
        "Don’t assume your robots.txt is the final word. Cloudflare can block requests before robots.txt matters, and can prepend rules to it.",
        "Don’t block Googlebot to “stop AI”. That removes you from Google Search.",
        "Don’t forget subdomains. Docs and help centres may have their own settings.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Never checking after onboarding.</strong> Defaults and features have changed, and old settings carry over.",
        "<strong>Confusing Training with Search.</strong> Disallowing training doesn’t have to cost you citations.",
        "<strong>Leaving old custom rules in place</strong> that block all “known bots”.",
        "<strong>Not reading the final robots.txt</strong> after turning on Bot Preference Sync.",
        "<strong>Testing only the homepage.</strong> Test pricing, comparison and docs pages too, since those are the pages buyers’ questions lead to.",
      ],
    },
    {
      t: "p",
      c: "Once crawlers can reach you, make sure they can read what they find. Our <a href=\"/blog/technical-ai-search-checklist\">technical AI search checklist</a> covers rendering, indexing and structure next.",
    },
  ],
  faqs: [
    {
      q: "Does Cloudflare block AI bots by default?",
      a: "Cloudflare says new customers without ad monetisation get no blocks by default, while sites that say they monetise with ads get Training set to Disallow. Older sites may have different settings, so check yours.",
    },
    {
      q: "How do I block AI training but allow AI search in Cloudflare?",
      a: "In your AI bot policies, set Search and Agent to Allow and Training to Disallow. Cloudflare can write the matching no-training rules into your robots.txt with Bot Preference Sync.",
    },
    {
      q: "Will blocking AI bots in Cloudflare affect Google rankings?",
      a: "Not if you leave Googlebot alone. Google-Extended controls Gemini’s use of content and doesn’t affect inclusion in Google Search. AI Overviews use Googlebot.",
    },
    {
      q: "What is Bot Preference Sync?",
      a: "A Cloudflare feature that generates robots.txt directives from your Search, Agent and Training policies and prepends them to your existing robots.txt.",
    },
    {
      q: "How can I see which AI crawlers visit my site on Cloudflare?",
      a: "Open AI Crawl Control in the Cloudflare dashboard. It shows which AI services access your site and lets you allow or block each one.",
    },
  ],
  sources: [
    { title: "Cloudflare: Bot Preference Sync", url: sync, type: "primary", read: "2026-10-29" },
    { title: "Cloudflare: managed robots.txt", url: managed, type: "primary", read: "2026-10-29" },
    { title: "Cloudflare: AI Crawl Control", url: crawl, type: "primary", read: "2026-10-29" },
    { title: "Cloudflare: AI Crawl Control get started", url: crawlStart, type: "primary", read: "2026-10-29" },
    { title: "Cloudflare: Block AI bots", url: blockAi, type: "primary", read: "2026-10-29" },
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-10-29" },
    { title: "Google common crawlers", url: google, type: "primary", read: "2026-10-29" },
  ],
  related: ["robots-txt-for-ai-crawlers", "gptbot-vs-oai-searchbot", "technical-ai-search-checklist"],
  cta: {
    mid: "On Cloudflare and not sure your settings let AI search in? We’ll check them for you.",
    title: "Check your Cloudflare AI settings.",
    text: "We review your Search, Agent and Training policies, custom rules and final robots.txt, and confirm AI search crawlers can reach your key pages.",
    button: "Check my Cloudflare setup",
  },
};
