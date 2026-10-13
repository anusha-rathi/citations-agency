// Proof of Work gallery data.
//
// Every entry without an `image` renders as a labelled placeholder slot.
// To publish real evidence: drop the screenshot in /public/proof/, then set
// `image`, `category`, `title`, `context`, and (where available) `url`,
// `metrics`, and `notes`. Only add metrics you can verify.

export const proofTypes = ["Reddit Posts", "Community Engagement", "Search & AI Citations"] as const;
export type ProofType = (typeof proofTypes)[number];

export type Proof = {
  type: ProofType;
  /** Subreddit, or the tool/search engine for Search & AI entries. */
  category: string;
  title: string;
  /** The strategy behind the evidence: content angle, or why the conversation mattered. */
  context: string;
  /** Search & AI only. A brand mention and a linked citation are different results. */
  result?: "Search ranking" | "Linked citation" | "Brand mention";
  image?: string;
  url?: string;
  metrics?: { label: string; value: string }[];
  notes?: { label: string; text: string }[];
};

const post = (n: number): Proof => ({
  type: "Reddit Posts",
  category: "Subreddit",
  title: `Reddit post ${n}`,
  context: "The original post, the content angle behind it, and why it suited this community.",
});

const thread = (n: number): Proof => ({
  type: "Community Engagement",
  category: "Subreddit",
  title: `Comment thread ${n}`,
  context: "Why this conversation mattered, and the buyer question or objection it addressed.",
});

export const proofs: Proof[] = [
  post(1), post(2), post(3), post(4),
  thread(1), thread(2), thread(3),
  { type: "Search & AI Citations", category: "Google", result: "Search ranking", title: "Reddit thread ranking for a target query", context: "The query, where the thread appears in results, and the buyer intent behind it." },
  { type: "Search & AI Citations", category: "ChatGPT", result: "Linked citation", title: "Reddit thread cited in a ChatGPT answer", context: "The prompt, the answer, and the linked source it cited." },
  { type: "Search & AI Citations", category: "Claude", result: "Linked citation", title: "Reddit discussion cited in a Claude answer", context: "The prompt, the answer, and the linked source it cited." },
  { type: "Search & AI Citations", category: "Monitoring", result: "Brand mention", title: "Brand named in an AI answer", context: "A mention found through monitoring, where the brand is named without a linked source." },
];

/** Field labels shown in the detail panel, per evidence type. */
export const proofFields: Record<ProofType, string[]> = {
  "Reddit Posts": ["Content angle", "Verified engagement", "Public link"],
  "Community Engagement": ["Why it mattered", "Question or objection addressed", "Response evidence"],
  "Search & AI Citations": ["Query or prompt", "Result type", "Source URL"],
};
