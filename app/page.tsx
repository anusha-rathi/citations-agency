import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Closing, Faq, Manifesto, Pricing, Process, Services, Story, Why } from "@/components/sections";
import { Motion } from "@/components/ui";
import { faqs } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "citations.agency",
      url: "https://citations.agency",
      slogan: "Be part of the conversation. Be part of the answer.",
      description: "Full-service Reddit marketing and AI search visibility agency.",
      knowsAbout: ["Reddit marketing", "Reddit Ads", "Generative Engine Optimization", "Answer Engine Optimization", "AI search visibility"],
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
        <Services />
        <Story />
        <Manifesto />
        <Process />
        <Pricing />
        <Faq />
      </main>
      <Closing />
    </Motion>
  );
}
