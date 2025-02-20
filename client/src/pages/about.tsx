import ContentSection from "@/components/content-section";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        About CA-Hub Kenya
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A food secure Kenya and climate resilient farming systems
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To connect and empower its members to promote sustainable food production
            through conservation agriculture.
          </p>
        </Card>
      </div>

      <ContentSection title="Core Values" className="bg-muted/30 p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Farmer and community centered",
              description: "Producers are the core of agriculture, food and nutrition security hence are at the core of our work"
            },
            {
              title: "Partnership driven",
              description: "CA work is driven by broad partnerships of all stakeholders"
            },
            {
              title: "Impact oriented",
              description: "We seek to deliver sustainable impact at scale"
            },
            {
              title: "Inclusivity",
              description: "We seek to ensure equitable benefit to all actors in the CA value chain"
            }
          ].map((value) => (
            <Card key={value.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </div>
  );
}