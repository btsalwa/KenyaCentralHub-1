import HeroCarousel from "@/components/hero-carousel";
import ContentSection from "@/components/content-section";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroCarousel />

      <ContentSection title="About CA-Hub Kenya" className="text-center">
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Kenya CA-hub is a network/platform of likeminded, multi-sectoral stakeholders 
          engaged in advocacy and promotion of conservation agriculture and other 
          climate smart practices through Knowledge sharing and learning.
        </p>
      </ContentSection>

      <ContentSection title="Hub Strategic Areas" className="bg-muted/30 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Delivering CA at Scale",
              description: "Community-led CA processes based on priorities, needs, knowledge, and capacities",
            },
            {
              title: "Research and Capacity Strengthening",
              description: "Developing capacity for innovations of smallholder farmers",
            },
            {
              title: "Partnerships and Policy",
              description: "Mainstreaming and scaling of CA to national policies and programmes",
            },
          ].map((area) => (
            <Card 
              key={area.title}
              className="h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {area.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </div>
  );
}