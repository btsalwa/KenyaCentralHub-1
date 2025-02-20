import ContentSection from "@/components/content-section";
import { Card, CardContent } from "@/components/ui/card";

export default function OurWork() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Our Work
      </h1>

      <div className="bg-muted/30 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6">Conservation Agriculture</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          Conservation Agriculture (CA) is a concept that combines profitable
          agricultural production with environmental concerns and sustainability.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Strategic Areas
              </h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Delivering CA at Scale
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Research and Capacity Strengthening
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Partnerships, Advocacy and Policy
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Communication and Visibility
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Resource Mobilization/Financing for CA
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Key Benefits
              </h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Improved soil structure and fertility
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Better water retention
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Cost and labor savings
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Enhanced food security
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  Environmental conservation
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}