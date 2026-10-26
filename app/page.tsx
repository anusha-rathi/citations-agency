import { Citations } from "@/components/citations";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Closing, Faq, Pricing } from "@/components/sections";
import { System } from "@/components/system";
import { Motion } from "@/components/ui";
import { Why } from "@/components/why";
import { faqs } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "citations.agency",
      url: "https://citations.agency",
      email: "connect@citations.agency",
      slogan: "AI citations = prompt-backed research + content.",
      description: "AI citations, AEO, GEO and AI SEO through prompt-backed research, content, and Reddit execution.",
      knowsAbout: ["AI citations", "Answer Engine Optimization", "Generative Engine Optimization", "AI SEO", "Prompt research", "Reddit marketing"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <Motion>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav />
      <main>
        <Hero />
        <Why />
        <System />
        <Citations />
        <Pricing />
        <Faq />
      </main>
      <Closing />
    </Motion>
  );
}
