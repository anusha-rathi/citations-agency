import type { Post } from "../../lib/blog";

const openaiBots = "https://developers.openai.com/api/docs/bots";
const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";
const profound = "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search";

export const post: Post = {
  slug: "can-a-new-website-show-up-in-chatgpt",
  tracker: "1.10",
  bucket: "basics",
  style: "RS Playbook",
  title: "Can a new website show up in ChatGPT? A 60-day plan",
  dek: "Yes, through ChatGPT search, often within weeks. Getting recommended without search takes longer. Here’s what a brand-new site can realistically get, and the order to do things in.",
  description: "Can a new website show up in ChatGPT? Yes, through search. A 60-day plan for new sites: crawler access, indexing, first pages to publish and first mentions.",
  targetQuery: "can a new website show up in chatgpt",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Yes. A new website can be cited by ChatGPT as soon as ChatGPT search can crawl it and its search partners can find it, which can happen within weeks. What takes longer is being recommended in answers ChatGPT gives without searching, because those come from what the model learned in training. The fastest path: allow OAI-SearchBot, get indexed in Bing and Google, publish pages that answer narrow questions nobody else answers well, and get named on a few third-party sites in your niche. Expect search citations first and unprompted recommendations much later.",
    },
    {
      t: "p",
      c: "If you’ve just launched, it’s easy to assume AI search is for established brands. It isn’t, quite. ChatGPT search doesn’t check your domain’s age before it reads a page. If your page is the best answer to the specific question it searched for, it can cite you.",
    },
    {
      t: "p",
      c: "What a new site can’t do is jump straight into answers for broad questions like “best project management tools”. Those are dominated by brands with years of mentions behind them. The plan below starts where a new site can win, and builds outward.",
    },
    { t: "h2", c: "Two ways ChatGPT can mention you" },
    {
      t: "table",
      head: ["", "Search answers", "Model answers"],
      rows: [
        ["How it works", "ChatGPT searches, reads pages and cites them", "ChatGPT answers from what it learned in training"],
        ["You can tell because", "Sources and links are shown", "No sources are shown"],
        ["Time for a new site", "Weeks, once crawled and indexed", "Months or longer: it depends on model updates"],
        ["What drives it", "Crawler access, indexing, a page that answers the exact question", "How often and how consistently the web describes you"],
        ["Where to start", "Narrow, specific questions", "Mentions on sites your category trusts"],
      ],
    },
    {
      t: "p",
      c: "Most of your early wins will be search answers. That’s fine: they come with a link to your site, and every one is evidence that your pages answer questions well.",
    },
    { t: "h2", c: "Week 1: make sure ChatGPT can reach you" },
    {
      t: "p",
      c: "New sites often block AI crawlers without knowing it. Website builders, CDNs and copied robots.txt files are the usual causes. Do these five things on day one:",
    },
    {
      t: "ol",
      items: [
        `<strong>Allow OAI-SearchBot in robots.txt.</strong> OpenAI says sites that block it <a href="${openaiBots}">“will not be shown in ChatGPT search answers”</a>. Allow PerplexityBot and Claude-SearchBot while you’re there.`,
        "<strong>Check your CDN.</strong> Some CDNs block AI crawlers by default on new domains. Run <code>curl -s -o /dev/null -w \"%{http_code}\" -A \"OAI-SearchBot\" https://yoursite.com</code> and expect 200.",
        "<strong>Remove launch blocks.</strong> Turn off “discourage search engines”, password protection and any <code>noindex</code> left from staging.",
        "<strong>Make sure your text is in the HTML.</strong> If your site is a JavaScript app, crawlers may see an empty page. View the source of your homepage and search for a sentence from it.",
        "<strong>Write a clear About page.</strong> One paragraph that says what you do, who it’s for and where you’re based. This is the description you want repeated everywhere.",
      ],
    },
    { t: "h2", c: "Week 1–2: get indexed" },
    {
      t: "p",
      c: `OpenAI says ChatGPT search sends rewritten queries to <a href="${openaiSearch}">third-party search providers, including Microsoft</a>, alongside its own crawler. A new site that isn’t in Bing’s index is invisible to part of that process.`,
    },
    {
      t: "ol",
      items: [
        "<strong>Google Search Console:</strong> verify your domain, submit your sitemap, and request indexing for your five most important pages.",
        "<strong>Bing Webmaster Tools:</strong> import your site from Search Console, submit your sitemap and switch on IndexNow so new pages are found within days instead of weeks.",
        "<strong>Check status after a week.</strong> In both tools, inspect your key URLs. If they’re “discovered but not indexed”, add internal links to them from your homepage and navigation.",
      ],
    },
    {
      t: "callout",
      tone: "note",
      title: "Why Bing matters more for new sites",
      c: "Established sites are already in Bing from years of crawling. A new site often isn’t until you submit it, and that’s one of ChatGPT’s doors left closed.",
    },
    { t: "h2", c: "Weeks 2–6: publish pages you can actually win" },
    {
      t: "p",
      c: "Don’t start with “best [category] tools”. Start with questions that are specific enough that established brands haven’t written a page for them. ChatGPT rewrites a buyer’s conversational question into narrow searches, and a narrow page can match them exactly.",
    },
    {
      t: "table",
      head: ["Page type", "Example", "Why it works for a new site"],
      rows: [
        ["Niche use case", "Invoicing for freelance translators", "Big brands rarely write for small niches"],
        ["Specific integration", "How to sync [your tool] with [popular tool]", "Exact-match questions with little competition"],
        ["Honest comparison", "[You] vs [established rival] for small teams", "Buyers ask it, and there are few fair answers"],
        ["Pricing explained", "How much does [category] cost for a 5-person team?", "Assistants look for current, specific numbers"],
        ["Original data", "We surveyed 50 [niche] businesses about [problem]", "New facts get cited because nobody else has them"],
        ["Problem guide", "How to fix [specific error] in [tool]", "Precise questions with clear answers"],
      ],
    },
    {
      t: "p",
      c: "Write each page so the answer is in the first two sentences, with a real HTML table where you compare options and a visible “Updated” date. Freshness helps: in a <a href=\"" + toronto + "\">University of Toronto study</a>, the median page GPT-4o cited for consumer-electronics queries was 79.8 days old, compared with 130.4 days for Google’s results. A new site’s pages are fresh by default; keep them that way.",
    },
    {
      t: "p",
      c: "Aim for 8 to 12 of these pages in your first six weeks, not 50 thin ones. Our <a href=\"/blog/prompt-research-for-ai-search\">prompt research guide</a> shows how to find the questions buyers actually ask.",
    },
    { t: "cta" },
    { t: "h2", c: "Your first ten pages, in order" },
    {
      t: "p",
      c: "If you’re not sure where to start, publish in this order. Each page builds on the one before, and together they cover the questions buyers ask about a new product:",
    },
    {
      t: "ol",
      items: [
        "<strong>Homepage</strong> that says what you do, for whom, in the first sentence. No slogans that need decoding.",
        "<strong>About page</strong> with the one-line description you’ll reuse everywhere, the founders’ names and where you’re based.",
        "<strong>Pricing page</strong> with real numbers in an HTML table. “Contact us” pricing gives assistants nothing to quote.",
        "<strong>One use-case page</strong> for your best-fit customer: “[Category] for [niche]”.",
        "<strong>One comparison page</strong> against the rival buyers mention most, written fairly, with a table.",
        "<strong>One alternatives page:</strong> “[Big rival] alternatives for [niche]”, including you and two or three others honestly.",
        "<strong>One integration page</strong> for the tool your customers already use most.",
        "<strong>One problem guide</strong> answering the most common question your sales calls start with.",
        "<strong>An FAQ section</strong> on your pricing page covering setup time, contracts, data and support.",
        "<strong>One original-data post</strong>, even small: a survey of 30 customers or an analysis of your own anonymised usage.",
      ],
    },
    {
      t: "p",
      c: "Ten strong pages give ChatGPT search something specific to cite for each type of buyer question. Add more only once these are indexed and you’ve checked which prompts they’re cited for. The gaps you find in that check tell you exactly what page eleven should be.",
    },
    { t: "h2", c: "A one-paragraph description to reuse everywhere" },
    {
      t: "p",
      c: "Write this once and paste it into your About page, review profiles, directory listings, social bios and press pitches. Fill in the brackets:",
    },
    {
      t: "code",
      label: "Description template",
      c: "[Brand] is a [category] for [specific audience] that [main outcome].\nIt [key difference vs alternatives], and works with [main integration].\nPlans start at [price]. Founded in [year], based in [city].",
    },
    {
      t: "p",
      c: "Consistent wording across many sites is how a new brand becomes a clear entity rather than a name that means different things in different places.",
    },
    { t: "h2", c: "Weeks 3–8: get your first mentions" },
    {
      t: "p",
      c: `Your own site is only part of the picture. AI answers lean on what other sites say. <a href="${brands}">Ahrefs’ study of 75,000 brands</a> found branded web mentions correlated 0.664 with visibility in Google’s AI Overviews, three times more than backlinks. In the Toronto study, 57% of the sources GPT-4o cited were independent publishers and review sites.`,
    },
    {
      t: "p",
      c: "A new brand doesn’t need hundreds of mentions to start. It needs a handful in the right places:",
    },
    {
      t: "ol",
      items: [
        "<strong>Review and directory profiles.</strong> Create complete profiles on the two or three review sites your category uses (G2, Capterra, Trustpilot, or the niche equivalent). Ask your first customers for honest reviews.",
        "<strong>Niche roundups.</strong> Search “best [category] for [niche]” and list the small blogs and newsletters that publish them. Email the authors with a short, specific pitch: what you do differently and for whom.",
        "<strong>Reddit and communities.</strong> Answer questions in the communities your buyers use, from a personal account, disclosing who you are when you mention your product. Reddit was the most-cited domain in <a href=\"" + profound + "\">Profound’s analysis of AI citations</a>. Start with our <a href=\"/blog/how-to-warm-up-a-reddit-account\">30-day account warm-up plan</a>.",
        "<strong>Partners and integrations.</strong> If you integrate with a bigger tool, ask to be listed in its integrations directory. These pages are often cited for “[tool] integrations” questions.",
        "<strong>Founder content.</strong> Podcasts, guest posts and interviews in your niche give the web more consistent descriptions of what you do.",
      ],
    },
    {
      t: "p",
      c: "Use the same one-line description of your product everywhere. If your site says “scheduling for dental clinics” and your directory listing says “practice management software”, assistants get mixed signals about what you are.",
    },
    { t: "h2", c: "Weeks 6–8: check what ChatGPT says" },
    {
      t: "p",
      c: "Make a list of 20 questions a buyer might ask, from narrow (“scheduling software for two-dentist practices”) to broad (“best dental scheduling software”). Ask each in ChatGPT with search on and note:",
    },
    {
      t: "ul",
      items: [
        "Whether you’re named, and whether your site is cited as a source.",
        "Which pages are cited instead, and whether you could be on them.",
        "Whether the description of your product is accurate.",
      ],
    },
    {
      t: "p",
      c: "Expect to appear for a few narrow questions first. That’s the signal the plan is working. If you appear nowhere after eight weeks, go back to week 1: in most cases a crawler block, a missing Bing index or JavaScript-only content is the reason, not the quality of your pages. Repeat monthly in a spreadsheet; our guide to <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">tracking brand mentions in ChatGPT</a> has the template.",
    },
    { t: "h2", c: "What to expect, realistically" },
    {
      t: "table",
      head: ["Timeframe", "Realistic outcome"],
      rows: [
        ["Weeks 1–2", "Crawlers can reach you; pages start getting indexed"],
        ["Weeks 3–8", "First citations in ChatGPT search for narrow, specific questions"],
        ["Months 3–6", "Cited for more mid-specific questions as mentions build; first referral traffic from chatgpt.com"],
        ["6 months+", "Named in some broader answers, depending on your category’s competition and how many places mention you"],
        ["Longer", "Recommended in answers without search, as newer models learn from a web that now includes you"],
      ],
    },
    {
      t: "p",
      c: "These are typical ranges, not promises. A tiny niche with two competitors can move much faster. A crowded category with household names takes longer. Nobody can guarantee what ChatGPT will say, and anyone who does is selling something.",
    },
    { t: "h2", c: "Should a new site allow training crawlers?" },
    {
      t: "p",
      c: "For most new businesses, yes. Training crawlers like GPTBot don’t affect ChatGPT search, but they decide whether future models can learn about you from your own pages. A new brand that blocks training relies entirely on others describing it, and early on, few others do. If you sell content itself, the trade-off is different; our <a href=\"/blog/robots-txt-for-ai-crawlers\">robots.txt guide</a> covers both choices.",
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t publish 100 AI-written pages in a week. Thin, similar pages are easy to skip and hard to index.",
        "Don’t buy reviews or fake Reddit accounts. Platforms remove them, and you lose the mentions that mattered.",
        "Don’t target “best [category]” first. Win narrow questions, then widen.",
        "Don’t change your product description every month. Consistency is what makes a new brand recognisable.",
      ],
    },
    { t: "h2", c: "Common mistakes new sites make" },
    {
      t: "ul",
      items: [
        "<strong>Launching with crawlers blocked.</strong> Staging settings, CDN defaults and builder toggles are the usual culprits.",
        "<strong>Skipping Bing.</strong> It’s one of ChatGPT search’s providers and new sites are rarely in it until submitted.",
        "<strong>Writing for the head term.</strong> Established brands own it. Start where they haven’t written.",
        "<strong>Only working on the website.</strong> Without third-party mentions, ChatGPT has little reason to name you over brands that are mentioned everywhere.",
        "<strong>Checking once and giving up.</strong> Answers change. Track monthly.",
      ],
    },
  ],
  faqs: [
    {
      q: "How long does it take for a new website to appear in ChatGPT?",
      a: "Through ChatGPT search, often a few weeks after your pages are crawlable and indexed, starting with narrow questions. Appearing in answers without search depends on future model updates and takes much longer.",
    },
    {
      q: "Does ChatGPT favour older domains?",
      a: "ChatGPT search reads pages, not domain ages. Older brands tend to win broad questions because they’re mentioned in more places, not because their domain is old.",
    },
    {
      q: "Can I submit my website to ChatGPT?",
      a: "There’s no submission form. Allow OAI-SearchBot in robots.txt and get indexed in Bing and Google; that’s how ChatGPT search finds pages.",
    },
    {
      q: "Do I need backlinks to show up in ChatGPT?",
      a: "Mentions matter more than links. Ahrefs found branded web mentions correlated three times more with AI Overview visibility than backlinks did. Focus on being named on review sites, roundups and communities.",
    },
    {
      q: "Will ChatGPT know about my brand if I just launched?",
      a: "Not from training: the model won’t have seen you. It can still find and cite you when it searches, which is why crawler access and indexing come first.",
    },
  ],
  sources: [
    { title: "OpenAI crawlers", url: openaiBots, type: "primary", read: "2026-10-26" },
    { title: "OpenAI: searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-26" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-26" },
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-26" },
    { title: "Profound: Reddit and AI search", url: profound, type: "vendor", read: "2026-10-26" },
  ],
  related: ["how-to-get-cited-by-chatgpt", "does-chatgpt-use-google-or-bing", "prompt-research-for-ai-search"],
  cta: {
    mid: "Just launched? We’ll check that ChatGPT can reach your site and find the questions you can win first.",
    title: "Launch into AI search the right way.",
    text: "We check crawler access and indexing, find the narrow buyer questions a new site can win, and list the first places you need to be mentioned.",
    button: "Get my launch plan",
  },
};
