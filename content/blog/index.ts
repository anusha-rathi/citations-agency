import type { Post } from "../../lib/blog";
import { post as aeoVsGeoVsSeo } from "./aeo-vs-geo-vs-seo";
import { post as canChatgptReadJavascript } from "./can-chatgpt-read-javascript";
import { post as doesLlmsTxtWork } from "./does-llms-txt-work";
import { post as howToGetCitedByChatgpt } from "./how-to-get-cited-by-chatgpt";
import { post as howToTrackBrandMentions } from "./how-to-track-brand-mentions-in-chatgpt";
import { post as promptResearch } from "./prompt-research-for-ai-search";
import { post as warmUpRedditAccount } from "./how-to-warm-up-a-reddit-account";
import { post as redditMarketingCost } from "./reddit-marketing-agency-cost";
import { post as whyChatgptRecommendsYourCompetitor } from "./why-chatgpt-recommends-your-competitor";
import { post as whyWasMyRedditPostRemoved } from "./why-was-my-reddit-post-removed";

// Register each post here after creating content/blog/<slug>.ts.
// Format reference: lib/blog.ts (Block and Post types). Rules: docs/blog/README.md.
export const posts: Post[] = [doesLlmsTxtWork, whyWasMyRedditPostRemoved, whyChatgptRecommendsYourCompetitor, howToGetCitedByChatgpt, aeoVsGeoVsSeo, howToTrackBrandMentions, promptResearch, canChatgptReadJavascript, warmUpRedditAccount, redditMarketingCost];
