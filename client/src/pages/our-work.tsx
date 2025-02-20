import ContentSection from "@/components/content-section";
import { Card, CardContent } from "@/components/ui/card";

export default function OurWork() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Our Work</h1>

      <ContentSection title="Conservation Agriculture">
        <p className="text-lg text-muted-foreground mb-6">
          Conservation Agriculture (CA) is a concept that combines profitable
          agricultural production with environmental concerns and sustainability.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Strategic Areas</h3>
              <ul className="space-y-2">
                <li>Delivering CA at Scale</li>
                <li>Research and Capacity Strengthening</li>
                <li>Partnerships, Advocacy and Policy</li>
                <li>Communication and Visibility</li>
                <li>Resource Mobilization/Financing for CA</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-2">
                <li>Improved soil structure and fertility</li>
                <li>Better water retention</li>
                <li>Cost and labor savings</li>
                <li>Enhanced food security</li>
                <li>Environmental conservation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </div>
  );
}
