import { Advantage } from "@/components/advantage";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { ProofOfWork } from "@/components/proof";
import { Closing, Pricing } from "@/components/sections";
import { Why } from "@/components/why";
import { Motion } from "@/components/ui";

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
        <Advantage />
        <ProofOfWork />
        <Pricing />
      </main>
      <Closing />
    </Motion>
  );
}
