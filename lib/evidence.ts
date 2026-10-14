// Citation and search evidence for the gallery. Add or replace screenshots here:
// put the file in /public/citations/ and add an entry with its pixel size.
export type Evidence = {
  src: string;
  width: number;
  height: number;
  platform: string;
  /** A brand mention, a linked citation, and a search result are different outcomes. */
  type: "Linked citation" | "Brand mention" | "Search result";
  title: string;
  context: string;
  prompt?: string;
  captured?: string;
  url?: string;
};

export const evidence: Evidence[] = [
  { src: "/citations/shot-9.png", width: 1600, height: 891, platform: "Microsoft Copilot", type: "Linked citation", title: "AI citations over three months", context: "Bing Webmaster Tools AI Performance report: how often a site’s pages were cited as sources in Microsoft Copilot and partner answers." },
  { src: "/citations/shot-8.png", width: 1600, height: 797, platform: "Microsoft Copilot", type: "Linked citation", title: "Citations and cited pages", context: "AI Performance report showing total citations and the average number of pages cited over three months." },
  { src: "/citations/shot-7.png", width: 1600, height: 701, platform: "Microsoft Copilot", type: "Linked citation", title: "Citations growing from zero", context: "AI Performance report for a site that went from no citations to steady weekly citations over three months." },
  { src: "/citations/shot-11.png", width: 1600, height: 770, platform: "Bing Search", type: "Search result", title: "Search clicks and impressions", context: "Bing Webmaster Tools search performance over three months." },
  { src: "/citations/shot-10.png", width: 1600, height: 823, platform: "Bing Search", type: "Search result", title: "Search impressions over time", context: "Bing Webmaster Tools search performance over three months." },
  { src: "/citations/shot-12.png", width: 1600, height: 330, platform: "Google Search", type: "Search result", title: "Search performance totals", context: "Google Search Console totals for clicks, impressions, click-through rate and average position." },
  { src: "/citations/shot-14.png", width: 1600, height: 601, platform: "Google Search", type: "Search result", title: "Daily clicks from Google Search", context: "Google Search Console daily clicks, July to October 2026." },
  { src: "/citations/shot-13.png", width: 1084, height: 524, platform: "SEO analytics", type: "Search result", title: "Organic traffic and keywords", context: "Third-party estimate of organic traffic and ranking keywords, by country." },
];
