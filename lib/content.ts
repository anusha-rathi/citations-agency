import { proofs } from "./proof";

export const nav = [
  { href: "#why", label: "Why Reddit" },
  { href: "#advantage", label: "Advantage" },
  { href: "#process", label: "Process" },
  ...(proofs.length ? [{ href: "#proof", label: "Proof" }] : []),
  { href: "#pricing", label: "Pricing" },
];

export const plans = [
  {
    eyebrow: "For brands ready to show up consistently",
    name: "Growth",
    price: "$2,000",
    priceNote: ["Starting at", "/ month"],
    blurb: "Your Reddit presence, strategy, content, and visibility tracking — managed together.",
    groups: [
      { label: "Research & strategy", items: ["Reddit presence audit", "Subreddit and competitor research", "Monthly content strategy"] },
      { label: "Content & engagement", items: ["20–25 organic Reddit posts per month", "35–40 relevant comments per month", "Subreddit-specific content adaptation"] },
      { label: "Tracking & reporting", items: ["Relevant keyword and SERP tracking", "AI brand mention and citation monitoring", "Regular reporting and optimization"] },
    ],
    note: "Posts and comments are planned monthly deliverables, subject to subreddit rules and content suitability. We don’t publish filler to hit a number.",
    cta: "Start Growing",
    footer: "A consistent, research-led program for brands building Reddit visibility.",
  },
  {
    eyebrow: "For brands with bigger ambitions",
    name: "Built Around You",
    price: "Custom",
    blurb: "Not every brand needs the same subreddits, the same volume, or the same strategy. We build the program around the opportunity.",
    groups: [
      { label: "Scope", items: ["Everything in Growth, adjusted to your needs", "Expanded subreddit coverage", "Higher or tailored content and engagement volume"] },
      { label: "Intelligence", items: ["Advanced competitor and keyword intelligence", "Custom reputation and conversation monitoring", "Enhanced search and AI visibility analysis"] },
      { label: "Support", items: ["Reddit Ads and campaign support", "Custom reporting and strategic support", "Additional priorities agreed during discovery"] },
    ],
    cta: "Let’s Build Your Plan",
    footer: "The right scope, resources, and strategy for your market.",
    dark: true,
  },
];
