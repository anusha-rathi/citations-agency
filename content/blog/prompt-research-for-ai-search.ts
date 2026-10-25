import type { Post } from "../../lib/blog";

const openaiSearch = "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt";
const google = "https://developers.google.com/search/docs/appearance/ai-features";

export const post: Post = {
  slug: "prompt-research-for-ai-search",
  tracker: "2.8",
  bucket: "cited",
  style: "RS Playbook",
  title: "Prompt research for AI search: find the questions buyers ask AI",
  dek: "Keyword research tells you what people type into Google. Prompt research tells you what they ask ChatGPT, and which page you need to be the answer. A 6-step method with templates.",
  description: "Prompt research for AI search: a 6-step method to turn keywords, sales calls and Reddit threads into the buyer prompts you need to rank and get cited for.",
  targetQuery: "prompt research for ai search",
  status: "published",
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Harshi Rathi",
  body: [
    {
      t: "callout",
      tone: "tldr",
      c: "Prompt research is keyword research for AI answers: finding the full questions buyers ask ChatGPT, Perplexity and AI Overviews, then deciding which page should answer each one. The method: collect raw questions from six sources, rewrite them as prompts, sort them into five types, score them for buying intent and opportunity, run them to see who gets cited, and turn the winners into a content and outreach plan. Expect a usable list of 20–30 priority prompts after about a day of work.",
    },
    {
      t: "p",
      c: "Most teams start AI search work by asking ChatGPT one question about their category and reacting to the answer. That tells you almost nothing. Buyers don’t ask one question; they ask dozens, phrased in ways your keyword tool has never seen.",
    },
    {
      t: "p",
      c: "Prompt research fixes that. It gives you a list of the exact questions that decide whether AI recommends you, which ones you’re missing from, and what to build first. It’s the step everything else in AI visibility depends on.",
    },
    {
      t: "p",
      c: "This guide is for marketers and founders who already know their keywords and want to know what buyers actually ask AI.",
    },
    { t: "h2", c: "Keywords vs prompts: what’s different" },
    {
      t: "table",
      head: ["", "Keyword", "Prompt"],
      rows: [
        ["Example", "crm small team", "What’s the best CRM for a 6-person sales team that hates data entry?"],
        ["Length", "2–4 words", "10–30 words, often with context"],
        ["Intent", "Implied", "Stated: team size, budget, constraint, use case"],
        ["Where it comes from", "Search volume tools", "Conversations: sales calls, Reddit, support"],
        ["What wins it", "A page that ranks", "A page that answers, plus mentions on pages AI trusts"],
      ],
    },
    {
      t: "p",
      c: `Keywords still matter, because prompts get turned back into searches. OpenAI says that when ChatGPT searches, it <a href="${openaiSearch}">“rewrites your query into one or more targeted queries”</a> sent to its search partners. Google’s AI Overviews do something similar with <a href="${google}">“query fan-out”</a>, running several related searches for one answer. So a prompt is really a bundle of searches. Prompt research tells you what the bundle looks like.`,
    },
    { t: "h2", c: "Step 1: Collect raw questions from six sources" },
    { t: "p", c: "Aim for 100–200 raw questions before you filter. The best ones come from real conversations, not tools:" },
    {
      t: "table",
      head: ["Source", "How to collect", "What you get"],
      rows: [
        ["Sales calls", "Search call recordings or notes for “how”, “can it”, “vs”, “compared to”", "Buying-stage questions in buyers’ own words"],
        ["Support tickets", "Export ticket subjects from the last 90 days", "Problem questions and feature checks"],
        ["Reddit", "Google <code>site:reddit.com [category]</code> and copy thread titles", "Unfiltered questions, comparisons and complaints"],
        ["Google “People also ask”", "Search your top 10 keywords and expand the PAA box", "Common follow-up questions"],
        ["Review sites", "Read the “what do you dislike” sections on G2 or Capterra for you and rivals", "Objections and reasons people switch"],
        ["Your own site search", "Export internal search terms", "What visitors expected to find and didn’t"],
      ],
    },
    {
      t: "p",
      c: "Copy questions exactly as written. The odd phrasing (“that doesn’t need a developer”, “for someone who hates spreadsheets”) is the useful part, because it’s how people talk to ChatGPT.",
    },
    { t: "h2", c: "Step 2: Rewrite questions as prompts" },
    {
      t: "p",
      c: "Many raw questions are short or missing context. Rewrite them the way a buyer would type them into ChatGPT, using this pattern:",
    },
    {
      t: "code",
      label: "Prompt pattern",
      c: "[What they want] + [for who / what size] + [the constraint that matters]\n\nbest CRM               → best CRM for a 6-person B2B sales team under $50 a seat\nhubspot alternatives   → cheaper alternatives to HubSpot that still have email tracking\ninvoicing late payment → how do I get clients to pay invoices on time without chasing them",
    },
    {
      t: "p",
      c: "Write two or three versions of the important ones with different constraints. “Best CRM for a startup” and “best CRM for a startup with no sales ops person” can return completely different sources.",
    },
    {
      t: "p",
      c: "Constraints worth testing, because buyers mention them all the time: team size, budget per seat, a tool they already use (“works with Gmail”, “integrates with Shopify”), a skill they lack (“no developer”, “not technical”), industry, and location or language. Each one can shift which brands get named, and each one is a chance for a niche brand to win a prompt a market leader doesn’t own.",
    },
    { t: "h2", c: "Step 3: Sort prompts into five types" },
    {
      t: "table",
      head: ["Type", "What the buyer is doing", "Example"],
      rows: [
        ["Discovery", "Building a shortlist", "What are the best tools for client onboarding?"],
        ["Comparison", "Choosing between two or three", "[Rival] vs [you] for a 10-person agency"],
        ["Alternatives", "Leaving something", "What’s cheaper than [rival] but just as easy?"],
        ["Problem", "Trying to fix something", "How do I stop leads going cold after a demo?"],
        ["Brand", "Checking you out", "Is [you] worth it? / [you] pricing for 20 users"],
      ],
    },
    {
      t: "p",
      c: "Check the balance of your list. If it’s mostly problem and brand prompts, add more comparison and alternatives prompts, because those two types matter most: comparison and alternatives content took 33% of all citations in <a href=\"https://somethinginc.com/blog/2026-ai-citation-study/\">Something Inc’s study of 4,100 B2B queries</a>, more than any other format.",
    },
    { t: "cta" },
    { t: "h2", c: "Step 4: Score and pick your top 20–30" },
    {
      t: "p",
      c: "You can’t work on 200 prompts. Score each one from 1 to 3 on three things and keep the highest totals:",
    },
    {
      t: "code",
      label: "Prompt scoring",
      c: "Buying intent     1 = learning   2 = comparing   3 = ready to choose\nOpportunity       1 = you’re already named   2 = named sometimes   3 = absent\nFit               1 = loosely related   2 = good fit   3 = exactly what you do\n\nPriority = Buying intent + Opportunity + Fit   (keep everything scoring 7–9)",
    },
    {
      t: "p",
      c: "You’ll only know “Opportunity” after Step 5, so do a first pass on intent and fit, run the shortlist, then rescore. Keep a balance: roughly a third discovery, a third comparison and alternatives, and the rest problem and brand prompts.",
    },
    { t: "h2", c: "Step 5: Run the prompts and record who wins" },
    {
      t: "ol",
      items: [
        "Open a temporary chat in ChatGPT or log out, so your history doesn’t personalise the answer.",
        "Run each prompt with search on, then run it in Perplexity too.",
        "Run the important ones three times. Answers vary between runs.",
        "Log whether you’re named, whether you’re linked, which competitors appear, and every page cited.",
      ],
    },
    {
      t: "p",
      c: "The cited pages are the most valuable output of the whole exercise. They show you which listicles, review sites, Reddit threads and comparison pages AI trusts for each prompt. Our guide to <a href=\"/blog/how-to-track-brand-mentions-in-chatgpt\">tracking brand mentions in ChatGPT</a> has a sheet template you can reuse every month.",
    },
    { t: "h2", c: "How to read what each answer tells you" },
    {
      t: "p",
      c: "Every answer you log carries more information than “named or not”. Read each one for four things:",
    },
    {
      t: "ul",
      items: [
        "<strong>The kind of sources cited.</strong> Mostly listicles and review sites means the prompt is won off-site. Mostly brand sites means a strong page of your own can win it. Mostly Reddit means you need to be in the threads.",
        "<strong>Your position.</strong> Named first, named in a list of eight, or named only as “also consider” are very different results. Log the position.",
        "<strong>The language used.</strong> The phrases the answer uses to describe winners (“best for small teams”, “easiest to set up”) tell you what the sources say about them, and what your pages and mentions need to say about you.",
        "<strong>What’s missing.</strong> If the answer is vague, hedged or cites weak sources, nobody owns that prompt yet. Those are the fastest wins.",
      ],
    },
    {
      t: "p",
      c: "Add a “sources type” and “position” column to your sheet. After one round, sort by them. The pattern usually tells you whether your next month should go into pages or into outreach.",
    },
    { t: "h2", c: "Step 6: Turn prompts into a plan" },
    { t: "p", c: "Each prompt ends up needing an on-site page, an off-site mention, or both:" },
    {
      t: "table",
      head: ["Prompt type", "Page to publish", "Off-site work"],
      rows: [
        ["Discovery", "“Best [category] for [buyer]” page with a clear pick per situation", "Get onto the cited listicles and roundups"],
        ["Comparison", "“[You] vs [rival]” with the verdict up top", "Earn reviews on the review sites that get cited"],
        ["Alternatives", "“[Rival] alternatives” grouped by why people leave", "Answer the Reddit threads where people ask for alternatives"],
        ["Problem", "A how-to guide that solves it, with your product as one option", "Helpful answers in community threads"],
        ["Brand", "Clear, current pricing and feature pages", "Correct any third-party page with wrong details"],
      ],
    },
    {
      t: "p",
      c: "Put the top 10 prompts into a content calendar first. If you only have time for one thing per prompt, check where the cited sources are: if they’re mostly third-party pages, do the off-site work before writing anything new. That’s also the fastest way to understand <a href=\"/blog/why-chatgpt-recommends-your-competitor\">why a competitor keeps getting recommended</a>.",
    },
    { t: "h2", c: "Example: a prompt set for a small-team CRM" },
    {
      t: "p",
      c: "Here’s what a finished top-10 might look like for a CRM aimed at small B2B teams:",
    },
    {
      t: "ol",
      items: [
        "best CRM for a 5–10 person B2B sales team",
        "simplest CRM for a startup with no sales ops person",
        "HubSpot vs Pipedrive for a seed-stage startup",
        "[your CRM] vs HubSpot for a small team",
        "cheaper alternatives to HubSpot with email tracking",
        "CRM that works inside Gmail for a small agency",
        "how do I get my sales team to actually update the CRM",
        "how to stop leads going cold after a demo",
        "is [your CRM] worth it for a 6-person team",
        "[your CRM] pricing for 10 users per year",
      ],
    },
    {
      t: "p",
      c: "Four discovery, three comparison and alternatives, two problem, two brand: close to the balance you want. Each one maps to a page and an outreach target.",
    },
    {
      t: "p",
      c: "Notice how specific they are. None of them is just “best CRM”. Broad prompts are dominated by the biggest brands and their history in the model’s training data. Specific prompts, with a team size, a constraint or a named rival, are where a smaller company can realistically become the answer within a quarter.",
    },
    { t: "h2", c: "Prompt research for different kinds of business" },
    {
      t: "p",
      c: "The method is the same everywhere, but the prompts that matter most shift with how people buy:",
    },
    {
      t: "table",
      head: ["Business", "Prompts that matter most", "Best raw sources"],
      rows: [
        ["B2B SaaS", "Comparison, alternatives, “best X for [team size]”", "Sales calls, G2 reviews, r/SaaS and role subreddits"],
        ["Ecommerce and D2C", "“Best X for [need]”, “is [brand] worth it”, “[product] vs [product]”", "Product reviews, returns reasons, product-category subreddits"],
        ["Agencies and services", "“How much does X cost”, “how to choose an X”, “X vs doing it in-house”", "Discovery calls, proposals you lost, Reddit threads asking for recommendations"],
        ["Developer tools", "“How do I X in [framework]”, “[tool] vs [tool]”, “alternatives to [tool]”", "GitHub issues, Stack Overflow, docs search, Discord questions"],
      ],
    },
    { t: "h2", c: "Share the list beyond marketing" },
    {
      t: "p",
      c: "A good prompt list is one of the most useful documents a company can have, and it shouldn’t live only in the marketing folder. Sales can use the comparison and alternatives prompts to prepare for objections, since buyers often arrive having asked ChatGPT the same question. Product can see which features buyers ask about most. Support can turn problem prompts into help articles that answer them directly. Share the sheet, and ask each team to add the questions they hear that aren’t on it yet.",
    },
    { t: "h2", c: "How often to redo your prompt research" },
    {
      t: "p",
      c: "Rerun the prompts monthly to track progress, but redo the research itself every quarter. New competitors appear, features change, and the questions people ask shift with them. Expect each refresh to add a handful of new prompts and retire a few that no longer matter.",
    },
    { t: "h2", c: "Common mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Using keywords as prompts.</strong> “crm small team” isn’t how anyone talks to ChatGPT. Add the context.",
        "<strong>Testing in your own account.</strong> Personalisation flatters you. Test logged out.",
        "<strong>Only researching problem questions.</strong> The citations that drive buying decisions sit in comparison and alternatives prompts.",
        "<strong>Ignoring the sources.</strong> The answer tells you who wins; the cited pages tell you how to win.",
        "<strong>Never revisiting the list.</strong> Prompts drift. Refresh quarterly.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is there a tool that shows prompt volume like keyword volume?",
      a: "Not reliably. AI companies don’t publish prompt volumes, and tools that estimate them work from samples. Treat keyword volume as a rough proxy for the searches behind a prompt, and prioritise by buying intent instead.",
    },
    {
      q: "How many prompts should I track?",
      a: "Twenty to thirty is enough to see a trend and still run by hand in about two hours a month. Go beyond 50 only if you use a paid tracking tool.",
    },
    {
      q: "Should I research prompts for ChatGPT and Google separately?",
      a: "Use one prompt list, then run it in each engine. The same prompt often returns different sources in ChatGPT, Perplexity and AI Overviews, and those differences tell you where to focus.",
    },
    {
      q: "Can I use ChatGPT to generate prompt ideas?",
      a: "Yes, for brainstorming variations. But the best prompts come from real buyer language in sales calls, support tickets and Reddit threads, so start there and use AI to fill gaps.",
    },
    {
      q: "Does prompt research replace keyword research?",
      a: "No. AI answers are built from searches, so the pages that rank for the searches behind a prompt still matter. Prompt research tells you which questions to answer; keyword research helps those answers get found.",
    },
  ],
  sources: [
    { title: "OpenAI: Searching the web with ChatGPT", url: openaiSearch, type: "primary", read: "2026-10-25" },
    { title: "Google: AI features and your website", url: google, type: "primary", read: "2026-10-25" },
    { title: "Something Inc: 2026 AI Citation Study", url: "https://somethinginc.com/blog/2026-ai-citation-study/", type: "vendor", read: "2026-10-25" },
  ],
  related: ["how-to-track-brand-mentions-in-chatgpt", "how-to-get-cited-by-chatgpt", "why-chatgpt-recommends-your-competitor"],
  cta: {
    mid: "Want a prompt list built from your sales calls, reviews and Reddit, already scored? That’s the first thing our audit does.",
    title: "Get your top 30 buyer prompts, researched and scored.",
    text: "We collect the questions your buyers ask, turn them into prompts, run them across ChatGPT and Perplexity, and show you which ones you’re missing from and why.",
    button: "Research my prompts",
  },
};
