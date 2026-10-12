import {
  BookOpenCheck, Compass, Gauge, Megaphone, MessagesSquare, PenLine, Radar, Rocket, ScanSearch, Search,
  ShieldCheck, Sprout, Swords, Target, Telescope, TextSearch, TrendingUp,
} from "lucide-react";

export const nav = [
  { href: "#why", label: "Why Reddit" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const redditServices = [
  { icon: Compass, title: "Reddit Growth Strategy", text: "Audience research, subreddit selection, competitive intelligence, and community-specific planning." },
  { icon: Sprout, title: "Organic Reddit Marketing", text: "Valuable posts, helpful discussions, educational content, and authentic brand participation." },
  { icon: MessagesSquare, title: "Reddit Community Engagement", text: "Thoughtful replies, community conversations, and ongoing participation." },
  { icon: Target, title: "Reddit Lead Generation", text: "Identifying high-intent buyer discussions and turning relevant conversations into opportunities." },
  { icon: Rocket, title: "Reddit Launch Campaigns", text: "Product launches, announcements, community activations, and AMAs." },
  { icon: ShieldCheck, title: "Reddit Reputation Management", text: "Social listening, sentiment analysis, factual responses, and proactive reputation building." },
  { icon: Megaphone, title: "Reddit Ads", text: "Paid campaign strategy, targeting, creatives, testing, and optimization." },
  { icon: Search, title: "Reddit SEO & Brand Discovery", text: "Content and discussions designed to answer real search demand and help users discover a brand." },
];

export const aiServices = [
  { icon: ScanSearch, title: "AI Visibility Audits", text: "Understand where and how your brand appears in AI-generated answers." },
  { icon: Gauge, title: "Generative Engine Optimization (GEO)", text: "Improve content structure, factual clarity, topical relevance, and discoverability." },
  { icon: TextSearch, title: "Answer Engine Optimization (AEO)", text: "Develop helpful, answer-first content that addresses buyer questions." },
  { icon: Radar, title: "AI Citation Monitoring", text: "Track brand mentions, linked citations, source URLs, and competitor appearances across selected queries and models." },
  { icon: BookOpenCheck, title: "Brand Authority & Content Strategy", text: "Develop credible, expert-backed resources and consistent brand information across relevant sources." },
  { icon: Swords, title: "Competitor AI Visibility Analysis", text: "Identify where competitors appear in AI answers and uncover missed opportunities." },
];

export const reasons = [
  { title: "Strategy before posting", text: "Research the communities, conversations, and questions that matter." },
  { title: "Humans, not spam bots", text: "Authentic engagement, human review, and platform-compliant marketing." },
  { title: "Reddit + AI together", text: "Understand both the conversation itself and how your brand is represented in AI search." },
  { title: "Reporting that makes sense", text: "Follow relevant conversations, brand mentions, referral opportunities, and AI visibility over time." },
];

export const process = [
  { icon: Telescope, title: "Audit", text: "We analyze your current Reddit footprint, key communities, competitor visibility, and AI search appearances." },
  { icon: Compass, title: "Strategize", text: "We identify relevant opportunities, buyer questions, target communities, campaign priorities, and measurable objectives." },
  { icon: PenLine, title: "Execute", text: "We create helpful content, participate transparently in conversations, run approved campaigns, and improve your AI-search-ready content." },
  { icon: TrendingUp, title: "Optimize", text: "We track performance, learn from real audience responses, monitor AI visibility, and continuously refine the strategy." },
];

export const plans = [
  {
    name: "Reddit Starter",
    blurb: "For brands establishing a credible Reddit presence.",
    lead: "Includes",
    features: ["Reddit presence audit", "Subreddit research", "Monthly content strategy", "Organic content and community engagement", "Brand mention monitoring", "Monthly performance summary"],
    cta: "Discuss Starter",
  },
  {
    name: "Reddit Growth + AI",
    blurb: "For brands ready to build Reddit demand and AI-search visibility together.",
    lead: "Everything in Starter, plus",
    features: ["Expanded community engagement", "High-intent discussion research", "AI visibility baseline and tracking", "GEO/AEO recommendations", "Competitor analysis", "Regular reporting and optimization"],
    cta: "Discuss Growth",
    popular: true,
  },
  {
    name: "Category Authority",
    blurb: "For ambitious brands seeking a larger, integrated program.",
    lead: "Everything in Growth, plus",
    features: ["Comprehensive Reddit strategy", "Launch and thought-leadership campaigns", "Reputation monitoring and response planning", "Reddit Ads strategy and management", "Expanded AI citation tracking", "Customized reporting and strategy reviews", "Dedicated strategic support"],
    cta: "Build Your Plan",
  },
];

export const faqs = [
  {
    q: "Why should my brand invest in Reddit marketing?",
    a: "Because buyers go there on purpose. People turn to Reddit when they want unfiltered opinions, comparisons, and real experience. If the threads about your category exist without you, guesswork and competitors fill the gap. Showing up with something genuinely useful builds awareness and trust where decisions are being shaped.",
  },
  {
    q: "How can Reddit influence AI search visibility?",
    a: "AI search experiences draw on public web content, and public Reddit discussions can be among the sources they surface or link to. How much weight any source gets varies by model, query, and time. Useful, accurate conversations about your brand give those systems better material to work with, alongside your own site and other credible sources.",
  },
  {
    q: "Can you guarantee ChatGPT or Perplexity citations?",
    a: "No. No agency can control or guarantee a third-party AI model's outputs, and you should be wary of anyone who says otherwise. A mention (your brand named in an answer) and a linked citation (a source URL shown) are separate metrics, and both are decided algorithmically. We focus on what can be influenced: improved discoverability, credible sources about your brand, and visibility measured across an agreed set of queries.",
  },
  {
    q: "How is Reddit marketing different from traditional social media marketing?",
    a: "Reddit is organized around topics and communities, not followers. Every subreddit has its own rules, moderators, and tolerance for brands, and promotional posting gets removed fast. What works is being useful: answering questions, disclosing who you are, and contributing consistently. Threads also stay searchable long after they're posted, so good contributions keep working.",
  },
  {
    q: "What does a Reddit marketing campaign include?",
    a: "It depends on scope, but typically: an audit of your current footprint, subreddit and conversation research, a content and engagement plan, disclosed participation on behalf of your brand, brand-mention monitoring, and regular reporting. Launch campaigns, Reddit Ads, and AI visibility tracking are added where they fit.",
  },
  {
    q: "Can you help with negative Reddit discussions?",
    a: "Yes, honestly. We monitor mentions, assess what's being said, and help you respond with facts, transparency, and real fixes where the criticism is fair. We don't use fake accounts, manipulate votes, or try to bury legitimate criticism. Steady, proactive participation is the best long-term reputation work.",
  },
  {
    q: "How do you measure results?",
    a: "We agree on objectives up front and report against them: relevant conversations joined, engagement quality, brand mentions and sentiment, referral traffic and leads where trackable, and AI visibility. For AI, brand mentions and linked citations are tracked separately across a defined set of queries and models.",
  },
  {
    q: "How soon can we get started?",
    a: "Start with the free visibility audit. Once we've walked you through it and agreed on scope, onboarding begins. Timing depends on the size of the program, and you'll get a realistic schedule before you commit to anything.",
  },
];
