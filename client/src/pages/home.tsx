import HeroCarousel from "@/components/hero-carousel";
import ContentSection from "@/components/content-section";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroCarousel />
      
      <ContentSection title="About CA-Hub Kenya">
        <p className="text-lg text-muted-foreground">
          Kenya CA-hub is a network/platform of likeminded, multi-sectoral stakeholders 
          engaged in advocacy and promotion of conservation agriculture and other 
          climate smart practices through Knowledge sharing and learning.
        </p>
      </ContentSection>

      <ContentSection title="Hub Strategic Areas">
        <div className="grid md:grid-cols-3 gap-6">
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
            <Card key={area.title}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </div>
  );
}
