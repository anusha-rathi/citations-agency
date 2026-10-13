import { proofs } from "./proof";

export const nav = [
  { href: "#why", label: "Why Reddit" },
  { href: "#advantage", label: "Advantage" },
  { href: "#process", label: "Process" },
  ...(proofs.length ? [{ href: "#proof", label: "Proof" }] : []),
  { href: "#pricing", label: "Pricing" },
];

export const growth = {
  eyebrow: "For brands ready to show up consistently",
  name: "Growth",
  price: "$2,000",
  blurb: "Your Reddit presence, strategy, content, and visibility tracking — managed together.",
  groups: [
    { label: "Research & strategy", items: ["Reddit presence audit", "Subreddit and competitor research", "Monthly content strategy"] },
    { label: "Posts & comments", items: ["20–25 organic Reddit posts per month", "35–40 relevant comments per month", "Subreddit-specific content adaptation"] },
    { label: "Tracking & reporting", items: ["Relevant keyword and SERP tracking", "AI brand mention and citation monitoring", "Regular reporting and optimization"] },
  ],
  note: "Posts and comments are planned monthly deliverables, subject to subreddit rules and content suitability. We don’t publish filler to hit a number.",
  cta: "Start Growing",
};
