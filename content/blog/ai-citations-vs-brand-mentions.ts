import type { Post } from "../../lib/blog";

const pew = "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/";
const brands = "https://ahrefs.com/blog/ai-overview-brand-correlation/";
const toronto = "https://ceur-ws.org/Vol-4192/DARLIAP-paper4.pdf";
const somethingInc = "https://somethinginc.com/blog/2026-ai-citation-study/";

export const post: Post = {
  slug: "ai-citations-vs-brand-mentions",
  tracker: "2.9",
  bucket: "cited",
  style: "Comparison",
  title: "AI citations vs brand mentions: which one should you track?",
  dek: "Being cited and being recommended are different wins, and you can have one without the other. Here’s how to tell them apart, measure both, and fix whichever one you’re missing.",
  description: "AI citations vs brand mentions: what each means in ChatGPT and AI Overviews, the four states your brand can be in, how to track both, and how to improve each.",
  targetQuery: "ai citations vs brand mentions",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "A brand mention is when an AI answer names your brand in its text. A citation is when it links to your page as a source. They’re different: your page can be cited while the answer recommends a competitor, and you can be recommended with no link to you at all. Mentions are what buyers read, so they matter most for revenue; citations bring a little traffic and show which of your pages AI trusts. Track both, per prompt, and fix the gap you have: no mentions means you need third-party coverage, no citations means your pages don’t answer the question well enough.",
    },
    {
      t: "p",
      c: "Teams starting on AI search often report one number: “we got cited 40 times this month”. Then sales asks why ChatGPT still recommends the competitor. Both can be true, because a citation and a mention measure different things.",
    },
    {
      t: "p",
      c: "Get the difference straight and your reporting gets simpler, your fixes get more targeted, and you stop celebrating wins that don’t reach buyers.",
    },
    { t: "h2", c: "The definitions" },
    {
      t: "table",
      head: ["Term", "What it is", "Where you see it", "Example"],
      rows: [
        ["Brand mention (in the answer)", "The answer names your brand in its text", "The words of the answer", "“For small agencies, [Your brand] and [Rival] are popular choices.”"],
        ["Citation", "The answer links to a page as a source", "Source cards, footnotes, link lists", "A numbered link to yoursite.com/pricing"],
        ["Web mention", "Another website names your brand", "Review sites, articles, Reddit, lists", "A G2 review or a “best tools” roundup listing you"],
      ],
    },
    {
      t: "p",
      c: "The first two are outputs: what the AI says. The third is an input: what the AI reads and learns from. Most confusion comes from mixing these up, so keep the three words separate in your reports.",
    },
    { t: "h2", c: "The four states your brand can be in" },
    {
      t: "p",
      c: "For any single buyer prompt, your brand is in one of four states. Each needs a different fix:",
    },
    {
      t: "table",
      head: ["", "Cited", "Not cited"],
      rows: [
        ["<strong>Mentioned</strong>", "Best case: named and linked. Protect it and keep the page fresh.", "Recommended from third-party sources or model memory. Good, but you don’t control the description."],
        ["<strong>Not mentioned</strong>", "Your page is used as a source, but another brand is recommended. Your content is helping a rival.", "Invisible. Start with access, pages and mentions."],
      ],
    },
    {
      t: "p",
      c: "The “cited but not mentioned” box surprises people the most. It happens when your guide explains a topic well, so the AI uses it for facts, but the recommendation comes from elsewhere, such as review sites and roundups that name other brands. It’s common for companies with strong educational content and weak third-party coverage.",
    },
    { t: "h2", c: "Which one matters more?" },
    {
      t: "p",
      c: "For revenue, mentions. Buyers read the answer; few click the sources. In <a href=\"" + pew + "\">Pew Research’s study of 68,879 Google searches</a>, people clicked a link inside an AI summary on just 1% of visits that showed one. An answer that names you puts your brand in front of the buyer whether they click or not.",
    },
    {
      t: "p",
      c: "Citations still matter, for three reasons:",
    },
    {
      t: "ul",
      items: [
        "<strong>They send some traffic</strong>, and it’s often high-intent: someone who clicks a source in a buying answer wants details.",
        "<strong>They show which of your pages AI trusts</strong>, which tells you where to invest in content.",
        "<strong>They let you shape the answer.</strong> When your page is the source, the facts in the answer (pricing, features, who it’s for) come from you, not from an outdated review.",
      ],
    },
    {
      t: "p",
      c: "So the goal is the top-left box: mentioned and cited. But if you can only fix one, fix mentions, because a buyer who reads your name in the answer can still find you later through search, even without clicking a source.",
    },
    { t: "cta" },
    { t: "h2", c: "What drives each one" },
    {
      t: "table",
      head: ["", "Brand mentions in answers", "Citations of your pages"],
      rows: [
        ["Main driver", "How often and how well other sites describe you", "Whether your page answers the exact question searched"],
        ["Evidence", `Branded web mentions correlated 0.664 with AI Overview visibility, three times more than backlinks (<a href="${brands}">Ahrefs, 75,000 brands</a>)`, `Comparison and alternatives content took 33% of citations in <a href="${somethingInc}">Something Inc’s study of 4,100 B2B queries</a>`],
        ["Who controls it", "Mostly others: reviewers, journalists, communities", "Mostly you: your site and its technical health"],
        ["Speed", "Slow: builds over months", "Faster: a good page can be cited within weeks"],
        ["Fix with", "Reviews, roundup outreach, Reddit, PR, partners", "Answer-first pages, comparison tables, freshness, crawler access"],
      ],
    },
    {
      t: "p",
      c: `This split matches what AI engines cite. In a <a href="${toronto}">University of Toronto study</a>, 57% of the sources GPT-4o cited were independent publishers and review sites. Your own site is a minority of the sources even in your own category, which is why mentions elsewhere carry so much weight.`,
    },
    { t: "h2", c: "How to track both in one spreadsheet" },
    {
      t: "p",
      c: "You don’t need a tool to start. Pick 20 to 30 buyer prompts and run them monthly in ChatGPT (search on), Perplexity and Google. Record one row per prompt per engine:",
    },
    {
      t: "table",
      head: ["Column", "What to record"],
      rows: [
        ["Prompt", "The exact question, e.g. “best invoicing software for small agencies”"],
        ["Engine and date", "ChatGPT, Perplexity, Google AI Overview; the date you ran it"],
        ["Mentioned?", "Yes / No"],
        ["Position", "1st, 2nd, 3rd brand named, or “in a list”"],
        ["Cited?", "Yes / No, and which of your URLs"],
        ["Competitors named", "Every other brand in the answer"],
        ["Sources cited", "Every domain linked, yours or not"],
        ["Accurate?", "Is the description of you correct: pricing, features, audience"],
      ],
    },
    {
      t: "p",
      c: "From that sheet you get four numbers worth reporting:",
    },
    {
      t: "ul",
      items: [
        "<strong>Mention rate:</strong> prompts where you’re named ÷ prompts tracked.",
        "<strong>Citation rate:</strong> prompts where your site is a source ÷ prompts tracked.",
        "<strong>Share of voice:</strong> your mentions ÷ all brand mentions across the prompts.",
        "<strong>Accuracy rate:</strong> mentions with a correct description ÷ your mentions.",
      ],
    },
    {
      t: "p",
      c: "Run each prompt two or three times, because answers vary between runs, and count you as mentioned if you appear in most. Our guide to <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">tracking brand mentions in ChatGPT</a> has more detail and the paid tools worth considering once the spreadsheet gets big.",
    },
    { t: "h2", c: "How to find your web mentions" },
    {
      t: "p",
      c: "Web mentions are the input that drives answer mentions, so it helps to know where you stand. A quick audit takes an hour:",
    },
    {
      t: "ol",
      items: [
        "<strong>Search your brand in quotes</strong>, excluding your own site: <code>\"yourbrand\" -site:yoursite.com</code>. Note the review sites, articles and forums that come up.",
        "<strong>Search your category roundups:</strong> <code>best [category] for [audience]</code>. Open the top 20 and note which list you and which list only rivals.",
        "<strong>Search Reddit for your category</strong> with <code>site:reddit.com [category] recommendation</code> and note which brands people suggest.",
        "<strong>Compare with a rival.</strong> Run the same searches for your main competitor. The gap between the two lists is your outreach plan.",
        "<strong>Set alerts</strong> for your brand name so new mentions reach you. Free alert tools work fine to start.",
      ],
    },
    { t: "h2", c: "How to report it to leadership" },
    {
      t: "code",
      label: "Monthly report template",
      c: "AI visibility, [month] (30 buyer prompts, ChatGPT + Perplexity + Google AI)\n\nMention rate:   [X]% (last month [Y]%)\nCitation rate:  [X]% (last month [Y]%)\nShare of voice: [X]% vs [Rival A] [X]%, [Rival B] [X]%\nAccuracy:       [X]% of mentions describe us correctly\n\nWins: now named for [prompt], [prompt]\nGaps: missing from [prompt]; sources cited there: [domains]\nNext month: outreach to [domains]; new page for [prompt]",
    },
    {
      t: "p",
      c: "Keep it to one screen, and send it on the same day each month. Leadership needs to see whether buyers are hearing your name more often than last month, and what you’re doing about the gaps.",
    },
    { t: "h2", c: "Free citation data you already have" },
    {
      t: "ul",
      items: [
        "<strong>Bing Webmaster Tools → AI Performance:</strong> counts how often Copilot cites your pages and which ones.",
        "<strong>GA4 referrals:</strong> sessions from chatgpt.com and perplexity.ai show which pages are clicked from citations.",
        "<strong>Server logs:</strong> visits from ChatGPT-User and Perplexity-User often mean a person’s question led the assistant to fetch that page.",
      ],
    },
    {
      t: "p",
      c: "There’s no equivalent free data for mentions without a link. That’s why the manual prompt check matters: it’s the only way to see the answers buyers read.",
    },
    { t: "h2", c: "A worked example" },
    {
      t: "p",
      c: "Say you sell time-tracking software for agencies, and your blog post “How to calculate agency utilisation” ranks well. You run five buyer prompts in ChatGPT with search on and get this:",
    },
    {
      t: "table",
      head: ["Prompt", "Mentioned?", "Cited?", "State"],
      rows: [
        ["How do I calculate utilisation for my agency?", "No", "Yes (your blog post)", "Cited, not mentioned"],
        ["Best time tracking software for agencies", "No", "No", "Neither"],
        ["[Your brand] vs [Rival]", "Yes", "Yes (comparison page)", "Both"],
        ["Time tracking tool that integrates with [project tool]", "Yes", "No", "Mentioned, not cited"],
        ["Cheapest time tracking for a 10-person agency", "No", "No", "Neither"],
      ],
    },
    {
      t: "p",
      c: "A citation-only report would say “cited in 2 of 5 prompts”. The useful reading is different. Your utilisation guide is feeding answers that recommend rivals, so it needs a short, honest section on tracking utilisation with your tool. The two buying prompts where you’re missing are the priority: list the sources they cite and get onto them. The integration prompt is a quick win: you’re already named, so write the integration page and become the cited source too.",
    },
    {
      t: "p",
      c: "Five prompts, three different fixes. That’s why per-prompt tracking beats a single total.",
    },
    { t: "h2", c: "How often to check, and what counts as progress" },
    {
      t: "p",
      c: "Monthly is right for most teams. Weekly checks mostly measure the natural variation between runs, and quarterly is too slow to see whether a new page or a round of outreach worked.",
    },
    {
      t: "ul",
      items: [
        "<strong>First month:</strong> a baseline. Don’t judge anything yet.",
        "<strong>Months 2–3:</strong> citation rate should move first, because new or rewritten pages can be picked up within weeks.",
        "<strong>Months 3–6:</strong> mention rate should start to move as review profiles, roundup placements and community answers build up.",
        "<strong>Ongoing:</strong> watch share of voice against your top two rivals. It’s the number that best predicts whether buyers hear your name.",
      ],
    },
    {
      t: "p",
      c: "Add new prompts as you learn what buyers ask, but keep the core set unchanged for at least six months so the trend means something. Mark any prompt you add with the month it joined, so you never compare a 30-prompt month with a 40-prompt one.",
    },
    { t: "h2", c: "How to fix each state" },
    { t: "h3", c: "Cited but not mentioned" },
    {
      t: "ol",
      items: [
        "Open the answer and list the brands it recommends and the sources behind them.",
        "Get onto those sources: the roundups, review pages and threads that name your rivals.",
        "Make your cited page say clearly that you offer the thing it explains, with a short product section and a comparison table, without turning it into an ad.",
      ],
    },
    { t: "h3", c: "Mentioned but not cited" },
    {
      t: "ol",
      items: [
        "Check what the answer says about you. If it’s accurate, this is still a win.",
        "Find the page on your site that should answer the prompt. If there isn’t one, write it.",
        "If there is, check that crawlers can read it and that the answer is in its first two sentences.",
      ],
    },
    { t: "h3", c: "Neither" },
    {
      t: "ol",
      items: [
        "Check crawler access and indexing first, using our <a href=\"/blog/technical-ai-search-checklist\">technical checklist</a>.",
        "Publish a page that answers the prompt directly.",
        "Get named on two or three of the sources the answer cites.",
      ],
    },
    {
      t: "callout",
      tone: "dont",
      title: "Don’t do this",
      items: [
        "Don’t report citation counts alone. They can rise while competitors keep winning the recommendation.",
        "Don’t count a mention as a win without reading it. A mention that gets your pricing wrong or says you’re “best for enterprises” when you serve startups needs fixing.",
        "Don’t try to buy mentions in answers. You can only influence the sources.",
      ],
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Using “citation” to mean any appearance.</strong> Keep mention, citation and web mention separate.",
        "<strong>Tracking only branded prompts.</strong> “What is [your brand]?” always mentions you. Track the category questions buyers ask before they know you.",
        "<strong>Running each prompt once.</strong> Answers vary. Run two or three times.",
        "<strong>Ignoring accuracy.</strong> Being named with the wrong price or audience can cost you deals.",
        "<strong>Fixing your site when the gap is off-site.</strong> If you’re cited but not recommended, more on-site content won’t help much. You need coverage elsewhere.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is an AI citation?",
      a: "A link to a page that an AI answer shows as a source, such as the numbered sources in ChatGPT search or the links in a Google AI Overview.",
    },
    {
      q: "What is a brand mention in AI search?",
      a: "When an AI answer names your brand in its text, with or without linking to you. It’s what the buyer actually reads.",
    },
    {
      q: "Can I be cited without being recommended?",
      a: "Yes. Your page can be used as a source for facts while the answer recommends a competitor. It usually means your content is strong but your third-party coverage is weak.",
    },
    {
      q: "Which is more valuable, a citation or a mention?",
      a: "For revenue, a mention, because buyers read the answer and few click sources. Citations add traffic and show which pages AI trusts. Aim for both.",
    },
    {
      q: "How do I get more brand mentions in ChatGPT?",
      a: "Get named on the sites AI cites in your category: review platforms, roundup articles, Reddit threads and industry publications. Branded web mentions correlate strongly with AI visibility.",
    },
  ],
  sources: [
    { title: "Pew Research: AI summaries and clicks", url: pew, type: "research", read: "2026-10-26" },
    { title: "Ahrefs: brand mentions correlation", url: brands, type: "vendor", read: "2026-10-26" },
    { title: "University of Toronto study", url: toronto, type: "research", read: "2026-10-26" },
    { title: "Something Inc study", url: somethingInc, type: "vendor", read: "2026-10-26" },
  ],
  related: ["how-to-track-brand-mentions-in-chatgpt", "why-chatgpt-recommends-your-competitor", "how-to-get-cited-by-chatgpt"],
  cta: {
    mid: "Want to know which of your buyer prompts you’re mentioned in, cited in, or missing from? We’ll map all four states.",
    title: "Find out where you’re cited, mentioned or missing.",
    text: "We run your buyer prompts across ChatGPT, Perplexity and Google’s AI, sort each into the four states, and give you the fix for every gap.",
    button: "Map my AI visibility",
  },
};
