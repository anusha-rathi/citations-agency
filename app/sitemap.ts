import type { MetadataRoute } from "next";
import { livePosts } from "@/lib/blog";

const base = "https://citations.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base },
    { url: `${base}/blog` },
    ...livePosts()
      .filter((p) => p.status === "published")
      .map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.updated })),
    { url: `${base}/privacy` },
  ];
}
