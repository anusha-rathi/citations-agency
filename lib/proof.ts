// Proof section data. The section (and its nav link) stays unpublished while this list is empty.
// Add up to three real examples: put the screenshot in /public/proof/ and fill in an entry.
// Only add metrics that can be verified.
export type Proof = {
  /** Subreddit, or the tool/search engine the result came from. */
  category: string;
  title: string;
  /** Short context: the angle, or why it mattered. */
  context: string;
  image: string;
  url?: string;
  metrics?: { label: string; value: string }[];
};

export const proofs: Proof[] = [];
