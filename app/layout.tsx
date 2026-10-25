import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import { AuditDialog } from "@/components/contact";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "citations.agency — AI citations, AEO & GEO through prompt-backed research";
const description =
  "We research the questions your buyers ask AI, find where your brand is missing, and create content that strengthens your visibility across AI answers, search results, and Reddit.";

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
      <body className="font-sans">
        {children}
        <AuditDialog />
      </body>
    </html>
  );
}
