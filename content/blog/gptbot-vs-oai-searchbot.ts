import type { Post } from "../../lib/blog";

const bots = "https://developers.openai.com/api/docs/bots";

export const post: Post = {
  slug: "gptbot-vs-oai-searchbot",
  tracker: "3.4",
  bucket: "technical",
  style: "Comparison",
  title: "GPTBot vs OAI-SearchBot: which OpenAI crawler should you block?",
  dek: "OpenAI runs four different bots. One decides whether you can appear in ChatGPT search; another decides whether your content trains future models. Here’s what each does and the robots.txt lines for every choice.",
  description: "GPTBot vs OAI-SearchBot vs ChatGPT-User: what each OpenAI crawler does, which to block or allow, robots.txt examples, how to verify them, and common mistakes.",
  targetQuery: "gptbot vs oai-searchbot",
  status: "published",
  published: "2026-10-27",
  updated: "2026-10-27",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "OAI-SearchBot is OpenAI’s search crawler: it decides whether your pages can appear and be cited in ChatGPT search. GPTBot is its training crawler: it collects content that may be used to train OpenAI’s models. They’re controlled separately in robots.txt. If you want to appear in ChatGPT answers, allow OAI-SearchBot. Whether you allow GPTBot is a separate choice about training. ChatGPT-User fetches pages when a user’s request needs them, and OAI-AdsBot checks pages submitted as ChatGPT ads. Changes take about 24 hours to apply.",
    },
    {
      t: "p",
      c: "A lot of sites blocked “ChatGPT” in 2023 by adding GPTBot to robots.txt. At the time that was the only OpenAI crawler most people had heard of. Now there are four, and blocking the wrong one either leaves you out of ChatGPT search or doesn’t do what you intended.",
    },
    {
      t: "p",
      c: "This guide explains each one in plain terms, then gives you the exact robots.txt lines for each decision you might make.",
    },
    { t: "h2", c: "The four OpenAI bots" },
    {
      t: "table",
      head: ["Bot", "What OpenAI says it does", "Affects", "IP list"],
      rows: [
        ["OAI-SearchBot", `<a href="${bots}">“Used to surface websites in search results in ChatGPT’s search features”</a>`, "Whether you appear and get cited in ChatGPT search", "openai.com/searchbot.json"],
        ["GPTBot", "Crawls content “that may be used in training our generative AI foundation models”", "Whether your content may be used for training", "openai.com/gptbot.json"],
        ["ChatGPT-User", "Used “for certain user actions in ChatGPT and Custom GPTs”", "Pages fetched because a user’s request needs them", "openai.com/chatgpt-user.json"],
        ["OAI-AdsBot", "Used “to validate the safety of web pages submitted as ads on ChatGPT”", "Only pages submitted as ChatGPT ads", "openai.com/adsbot.json"],
      ],
      caption: "From OpenAI’s crawler documentation.",
    },
    {
      t: "p",
      c: `OpenAI states the key point directly: you can <a href="${bots}">allow OAI-SearchBot “in order to appear in search results while disallowing GPTBot”</a>, so your content isn’t used for training.`,
    },
    { t: "h2", c: "GPTBot vs OAI-SearchBot side by side" },
    {
      t: "table",
      head: ["", "OAI-SearchBot", "GPTBot"],
      rows: [
        ["Purpose", "Search: finding pages to show and cite in ChatGPT", "Training: collecting content for future models"],
        ["If you block it", "You won’t appear in ChatGPT search answers", "Your content shouldn’t be used to train future OpenAI models"],
        ["Effect is", "Immediate-ish: about 24 hours", "Gradual: only affects future training runs"],
        ["Benefits you by", "Citations, links and referral traffic from ChatGPT", "Future models learning about your brand from your own pages"],
        ["Typical choice for businesses", "Allow", "Allow, unless your content is your product"],
        ["Typical choice for publishers", "Allow", "Often block"],
      ],
    },
    { t: "h2", c: "Which one should you block?" },
    {
      t: "table",
      head: ["Your goal", "OAI-SearchBot", "GPTBot"],
      rows: [
        ["Appear in ChatGPT and let models learn about you", "Allow", "Allow"],
        ["Appear in ChatGPT, but keep content out of training", "Allow", "Block"],
        ["Stay out of ChatGPT entirely", "Block", "Block"],
        ["Block only some sections (e.g. paid content)", "Allow, with Disallow for those paths", "Block those paths, or all"],
      ],
    },
    {
      t: "p",
      c: "Blocking OAI-SearchBot but allowing GPTBot is the one combination that rarely makes sense: your content could still shape future models, but ChatGPT search can’t cite or link to you.",
    },
    { t: "cta" },
    { t: "h2", c: "robots.txt for each choice" },
    { t: "h3", c: "Allow search and training" },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nUser-agent: GPTBot\nDisallow: /admin/\nAllow: /",
    },
    { t: "h3", c: "Allow search, block training" },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nDisallow: /admin/\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /",
    },
    { t: "h3", c: "Block both" },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nDisallow: /\n\nUser-agent: GPTBot\nDisallow: /",
    },
    { t: "h3", c: "Allow search, block training on premium content only" },
    {
      t: "code",
      label: "robots.txt",
      c: "User-agent: OAI-SearchBot\nDisallow: /members/\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /members/\nDisallow: /research/\nAllow: /",
    },
    {
      t: "p",
      c: "Remember that a crawler with its own group in robots.txt ignores the <code>User-agent: *</code> rules. Repeat any private paths, like <code>/admin/</code>, inside each named group. Our <a href=\"/blog/robots-txt-for-ai-crawlers\">robots.txt template for all AI crawlers</a> covers Anthropic, Perplexity and Google too.",
    },
    { t: "h2", c: "Audit your current robots.txt in five minutes" },
    {
      t: "ol",
      items: [
        "<strong>Open</strong> <code>yoursite.com/robots.txt</code> in a browser.",
        "<strong>Search for “GPTBot”, “OAI-SearchBot” and “ChatGPT”.</strong> Note every group that names them and what it allows or disallows.",
        "<strong>Check the <code>User-agent: *</code> group.</strong> If it disallows <code>/</code> and there’s no OAI-SearchBot group, you’re blocking ChatGPT search.",
        "<strong>Look for wildcard “AI bot” lists</strong> copied from forums or plugins. They often include OAI-SearchBot alongside training crawlers.",
        "<strong>Write down the current result</strong> in one line: “Search: allowed / blocked. Training: allowed / blocked.” If it doesn’t match what you want, change it using the templates above.",
      ],
    },
    {
      t: "p",
      c: "Repeat for each subdomain. It’s common to find the main site allowing OAI-SearchBot while the help centre, hosted on another platform, blocks it.",
    },
    { t: "h2", c: "Four example setups" },
    {
      t: "table",
      head: ["Site", "OAI-SearchBot", "GPTBot", "Why"],
      rows: [
        ["B2B SaaS marketing site and docs", "Allow", "Allow", "Every page is something they want buyers and future models to know"],
        ["News publisher", "Allow", "Block", "Wants citations and traffic, but its articles are the product"],
        ["Online course platform", "Allow public pages; block lessons", "Block", "Course pages should be findable; lesson content is paid"],
        ["Ecommerce store", "Allow; block cart, checkout and account", "Allow", "Product pages and guides help sales; private paths stay out"],
      ],
    },
    {
      t: "p",
      c: "In every case, search access is allowed for the pages buyers should find. The training decision is the only one that varies, and it follows whether the content itself is what the business sells.",
    },
    { t: "h2", c: "What about ChatGPT-User?" },
    {
      t: "p",
      c: "ChatGPT-User fetches a page when a user’s request in ChatGPT or a Custom GPT needs it, for example when someone pastes your URL and asks for a summary. It isn’t used to build a search index or to train models in the way the other two are. Because these fetches are triggered by a person, OpenAI says robots.txt rules may not apply to them in the same way.",
    },
    {
      t: "p",
      c: "For most sites, ChatGPT-User visits are a good sign: someone was interested enough in your page to send ChatGPT to it. If you see them in your logs on pricing or product pages, those pages are being read by buyers through ChatGPT.",
    },
    { t: "h2", c: "How to check what’s visiting your site" },
    {
      t: "p",
      c: "Search your server or CDN logs for each user agent and count requests by page:",
    },
    {
      t: "code",
      label: "Terminal",
      c: "grep -E \"OAI-SearchBot|GPTBot|ChatGPT-User\" access.log \\\n  | grep -oE \"(OAI-SearchBot|GPTBot|ChatGPT-User)\" | sort | uniq -c",
    },
    {
      t: "p",
      c: "Then test that your robots.txt and CDN behave as intended:",
    },
    {
      t: "code",
      label: "Terminal",
      c: "curl -s -o /dev/null -w \"%{http_code}\\n\" -A \"OAI-SearchBot\" https://yoursite.com/pricing\n# 200 = reachable   403/503 = blocked at your CDN or firewall",
    },
    {
      t: "p",
      c: "A 200 means the request got through your CDN. Whether the bot is then allowed to use the page is decided by robots.txt, so check both.",
    },
    { t: "h2", c: "How to verify it’s really OpenAI" },
    {
      t: "p",
      c: "Anyone can fake a user agent. If you see heavy traffic claiming to be GPTBot, compare the IP addresses with the lists OpenAI publishes for each bot (<code>openai.com/searchbot.json</code>, <code>openai.com/gptbot.json</code>, <code>openai.com/chatgpt-user.json</code>). Traffic from other IPs isn’t OpenAI, and you can block it at your firewall without touching robots.txt.",
    },
    {
      t: "ol",
      items: [
        "Download the JSON list for the bot you want to verify.",
        "Check whether the request IP falls inside one of the listed ranges.",
        "Allow verified ranges in your CDN or firewall; treat everything else claiming the name as a scraper.",
        "Recheck the lists every few months, because ranges change.",
      ],
    },
    { t: "h2", c: "What blocking GPTBot does and doesn’t do" },
    {
      t: "p",
      c: "Blocking GPTBot is often treated as a way to “opt out of ChatGPT”. It’s narrower than that. Here’s what changes and what stays the same:",
    },
    {
      t: "table",
      head: ["Blocking GPTBot…", "Effect"],
      rows: [
        ["Stops GPTBot crawling your pages from now on", "Yes, once OpenAI picks up the change"],
        ["Removes content already collected", "No: it applies to future crawling"],
        ["Removes you from ChatGPT search", "No: that’s OAI-SearchBot"],
        ["Stops ChatGPT mentioning your brand", "No: models still learn about you from other sites"],
        ["Stops users pasting your URL into ChatGPT", "No: that’s ChatGPT-User, a user-triggered fetch"],
      ],
    },
    {
      t: "p",
      c: "So if your concern is ChatGPT describing your brand wrongly, blocking GPTBot won’t fix it, and may make it worse, because the model then learns about you only from third parties. The fix for wrong descriptions is accurate, crawlable pages and consistent information on the sites that write about you. We cover that in <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why ChatGPT recommends your competitor</a>.",
    },
    { t: "h2", c: "How long changes take" },
    {
      t: "p",
      c: `OpenAI says it can take <a href="${bots}">“~24 hours from a site’s robots.txt update”</a> for its systems to adjust. If you’ve just unblocked OAI-SearchBot, give it a day before testing ChatGPT search, then a few weeks for your pages to appear in answers as they’re crawled.`,
    },
    {
      t: "p",
      c: "Unblocking GPTBot doesn’t change anything you can see right away. It only affects future training, so there’s nothing to test except that the bot can reach your pages.",
    },
    { t: "h2", c: "The same split at other AI companies" },
    {
      t: "p",
      c: "OpenAI isn’t alone. Most AI companies now separate search from training, so you can make the same decision for each:",
    },
    {
      t: "table",
      head: ["Company", "Search crawler", "Training crawler", "User-triggered fetcher"],
      rows: [
        ["OpenAI", "OAI-SearchBot", "GPTBot", "ChatGPT-User"],
        ["Anthropic", "Claude-SearchBot", "ClaudeBot", "Claude-User"],
        ["Perplexity", "PerplexityBot", "(Perplexity says PerplexityBot isn’t used for training)", "Perplexity-User"],
        ["Google", "Googlebot (Search, AI Overviews, AI Mode)", "Google-Extended (Gemini)", "n/a"],
      ],
    },
    {
      t: "p",
      c: "If you decide to allow search and block training for OpenAI, apply the same rule to the others in the same edit, so your robots.txt says one consistent thing. Our <a href=\"/blog/robots-txt-for-ai-crawlers\">full AI crawler template</a> has every line.",
    },
    { t: "h2", c: "Record the decision" },
    {
      t: "p",
      c: "robots.txt files get edited by developers, plugins and agencies who don’t know why a line is there. Leave a comment at the top of the file so the decision survives:",
    },
    {
      t: "code",
      label: "robots.txt header",
      c: "# AI crawler policy (decided [month year] by [team]):\n# - Search crawlers (OAI-SearchBot, Claude-SearchBot, PerplexityBot): ALLOW\n#   so we can be cited in AI answers.\n# - Training crawlers (GPTBot, ClaudeBot, Google-Extended): [ALLOW/BLOCK]\n#   because [reason].\n# Ask [owner] before changing these rules.",
    },
    { t: "h2", c: "Should you allow GPTBot?" },
    {
      t: "p",
      c: "This is the real decision, and it’s a business one, not a technical one. Allowing GPTBot means future OpenAI models may learn about your products, pricing and positioning from your own pages. Blocking it means they learn about you only from what other sites say.",
    },
    {
      t: "ul",
      items: [
        "<strong>Allow it</strong> if your pages are marketing, product information and documentation you’d happily see repeated.",
        "<strong>Block it</strong> if your content is the product: research, news, courses, premium articles.",
        "<strong>Block some paths</strong> if you have both, like a public blog and a paid research library.",
      ],
    },
    {
      t: "p",
      c: "Write the decision down with the reason, so the next person who edits robots.txt doesn’t undo it. If legal, marketing and product disagree, settle it in one short meeting using the table above, then put the outcome at the top of the file as shown earlier. A clear written policy beats a perfect one that only lives in someone’s head.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t block GPTBot and assume you’ve left ChatGPT. Search uses OAI-SearchBot.",
        "Don’t block OAI-SearchBot to “protect content” if you want buyers to find you in ChatGPT.",
        "Don’t copy a “block all AI bots” list without reading it. Most include OAI-SearchBot.",
        "Don’t block by user agent at your firewall without verifying IPs. You may block real crawlers or miss fake ones.",
      ],
    },
    { t: "h2", c: "When to revisit the decision" },
    {
      t: "p",
      c: "Treat your OpenAI crawler settings as a policy you review, not a one-time fix. Revisit them when any of these happen:",
    },
    {
      t: "ul",
      items: [
        "<strong>OpenAI adds or renames a bot.</strong> Check its crawler documentation every few months; OAI-AdsBot is a recent addition.",
        "<strong>Your business model changes</strong>, for example you launch paid research or a members’ area.",
        "<strong>You sign a content licensing deal</strong>, which may set its own crawling terms.",
        "<strong>You redesign or migrate the site.</strong> New platforms often ship their own robots.txt and quietly replace yours.",
        "<strong>ChatGPT referral traffic drops suddenly.</strong> Check robots.txt and your CDN before anything else.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Only having a GPTBot rule.</strong> That says nothing about search. Add an explicit OAI-SearchBot group so your intent is clear.",
        "<strong>Forgetting the CDN.</strong> A bot-blocking setting can stop OAI-SearchBot even when robots.txt allows it.",
        "<strong>Leaving private paths open.</strong> Named groups ignore <code>User-agent: *</code>; repeat your Disallow lines.",
        "<strong>Forgetting subdomains.</strong> <code>docs.</code> and <code>help.</code> subdomains need their own robots.txt.",
        "<strong>Never checking logs.</strong> Logs tell you whether the bots you allowed are actually visiting, and which pages they read most.",
      ],
    },
    {
      t: "p",
      c: "Once OAI-SearchBot can reach you, the next question is whether it can read what it finds. Our <a href=\"/blog/can-chatgpt-read-javascript\">guide to JavaScript and AI crawlers</a> covers that.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between GPTBot and OAI-SearchBot?",
      a: "OAI-SearchBot finds pages to show and cite in ChatGPT search. GPTBot collects content that may be used to train OpenAI’s models. They’re controlled separately in robots.txt.",
    },
    {
      q: "Does blocking GPTBot remove my site from ChatGPT?",
      a: "No. ChatGPT search uses OAI-SearchBot. Blocking GPTBot only opts your content out of future training.",
    },
    {
      q: "Should I block OAI-SearchBot?",
      a: "Only if you don’t want to appear in ChatGPT search. OpenAI says sites that block it won’t be shown in ChatGPT search answers.",
    },
    {
      q: "What is ChatGPT-User?",
      a: "It’s the agent ChatGPT uses for certain user actions, such as fetching a page a user asked about. It isn’t the search crawler or the training crawler.",
    },
    {
      q: "How long do robots.txt changes take for OpenAI?",
      a: "OpenAI says about 24 hours for its systems to adjust after a robots.txt update.",
    },
  ],
  sources: [
    { title: "OpenAI crawlers", url: bots, type: "primary", read: "2026-10-27" },
    { title: "Anthropic crawlers", url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler", type: "primary", read: "2026-10-27" },
    { title: "Perplexity crawlers", url: "https://docs.perplexity.ai/guides/bots", type: "primary", read: "2026-10-27" },
  ],
  related: ["robots-txt-for-ai-crawlers", "technical-ai-search-checklist", "can-chatgpt-read-javascript"],
  cta: {
    mid: "Not sure which OpenAI bots your site allows, or whether your CDN blocks them? We’ll check in a day.",
    title: "Check your OpenAI crawler setup.",
    text: "We test your robots.txt and CDN as OAI-SearchBot, GPTBot and ChatGPT-User, check your logs, and tell you exactly what to change for the result you want.",
    button: "Check my crawler setup",
  },
};
