import ContentSection from "@/components/content-section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Video, Newspaper } from "lucide-react";

export default function Resources() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Resource Center</h1>

      <ContentSection title="Technical Resources">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "CA Manual",
              description: "Conservation Agriculture: A Manual for Farmers and Extension Workers in Africa",
              icon: FileText,
            },
            {
              title: "Strategic Plan",
              description: "CA Hub-Kenya Strategic Plan 2023-2026",
              icon: FileText,
            },
            {
              title: "Consortium Agreement",
              description: "CA Hub-Kenya Consortium Agreement",
              icon: FileText,
            },
          ].map((resource) => (
            <Card key={resource.title} className="hover:bg-muted/50 cursor-pointer">
              <CardHeader>
                <resource.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="News and Events">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Newspaper className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Latest News</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Building networks and partnerships</h4>
                  <p className="text-sm text-muted-foreground">
                    Paper presented at 3ACCA in Rabat Morocco
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Video className="h-8 w-8 text-primary mb-2" />
              <CardTitle>CA Hub Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay updated with our latest newsletter featuring success stories
                and updates from our members.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </div>
  );
}
