import ContentSection from "@/components/content-section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function OurWork() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
          Our Conservation Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Promoting resilient and sustainable farming practices to enhance food security and nutrition.
        </p>
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-muted/20 rounded-2xl p-8 mb-16 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-foreground">
            Core Principles and Strategic Goals
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            CA-Hub Kenya is dedicated to promoting resilient, sustainable, and resource-saving farming practices,
            building farmer resilience, and enhancing food security amidst climate change challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:scale-[1.02] transition-transform duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Strategic Focus Areas
                  </h3>
                </div>
                <ul className="space-y-5 text-lg">
                  {[
                    "Delivering CA at Scale: Community-led processes for climate change adaptation.",
                    "Research & Capacity Strengthening: Innovations for smallholder farmers.",
                    "Partnerships, Advocacy and Policy: Mainstreaming CA into national policies.",
                    "Communication and Visibility: Sharing CA knowledge and best practices.",
                    "Resource Mobilization/Financing for CA: Supporting CA initiatives."
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:scale-[1.02] transition-transform duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Key Benefits of Conservation Agriculture
                  </h3>
                </div>
                <ul className="space-y-5 text-lg">
                  {[
                    "Improved soil structure and fertility",
                    "Better water retention and reduced runoff",
                    "Cost and labor savings for farmers",
                    "Enhanced food security and nutrition",
                    "Environmental conservation and biodiversity"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ContentSection title="The Essence of CA-Hub's Initiatives" className="bg-background">
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="space-y-4 p-6 rounded-xl bg-primary/5">
            <h3 className="text-2xl font-semibold">Sustainable Farming Practices</h3>
            <p className="text-muted-foreground">
              Bridging traditional methods with innovative conservation techniques for sustainable livelihoods and ecosystem protection.
            </p>
          </div>
          <div className="space-y-4 p-6 rounded-xl bg-primary/5">
            <h3 className="text-2xl font-semibold">Community-Driven Approach</h3>
            <p className="text-muted-foreground">
              Empowering local farmers through participatory knowledge sharing and implementation of conservation practices.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Conservation Agriculture: A Sustainable Solution" className="bg-muted/5">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Conservation Agriculture (CA) combines profitable agricultural production with environmental concerns and sustainability.
          It improves productivity, increases profits and enhances food security while preserving resources.
          Key principles include minimum soil disturbance, permanent soil cover, and crop diversification.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          CA addresses land degradation, climate change, and low productivity, aligning with Sustainable Development Goals for food security,
          environmental conservation, and biodiversity.
        </p>
        <p className="text-center mt-8">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary hover:bg-primary-600 rounded-md">
            Read More About CA
          </a>
        </p>
      </ContentSection>
    </div>
  );
}
