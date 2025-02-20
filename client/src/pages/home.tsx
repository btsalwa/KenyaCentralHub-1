import HeroCarousel from "@/components/hero-carousel";
import ContentSection from "@/components/content-section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-16"> {/* Increased spacing */}
      <HeroCarousel />

      <ContentSection title="About CA-Hub Kenya" className="text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Kenya CA-hub is a network/platform of likeminded, multi-sectoral stakeholders 
          engaged in advocacy and promotion of conservation agriculture and other 
          climate smart practices through Knowledge sharing and learning.
        </motion.p>
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
          ].map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {area.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>
    </div>
  );
}