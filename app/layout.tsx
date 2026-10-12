import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "citations.agency — Reddit Marketing & AI Visibility Agency";
const description =
  "We help brands turn real Reddit conversations into awareness, demand, and stronger visibility across ChatGPT, Perplexity, Google, and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL("https://citations.agency"),
  title: { default: title, template: "%s — citations.agency" },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "citations.agency", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
