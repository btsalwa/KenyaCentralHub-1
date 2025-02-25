import ContentSection from "@/components/content-section";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Symposium() {
  return (
    <div>
      <div className="bg-primary/10 p-8 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Conservation Agriculture Conference 2025
        </h1>
        <p className="text-xl text-muted-foreground">
          March 12, 2025 | Pride Inn Azure, Nairobi Kenya
        </p>
      </div>

      <ContentSection title="About the Symposium">
        <p className="text-lg text-muted-foreground mb-6">
          The Conservation Agriculture Conference 2025 brings together key CA
          stakeholders to interact, synthesize, and share CA best practices and
          provoke strategic thinking on how to collaboratively promote and scale
          the adoption of the CA technologies.
        </p>
      </ContentSection>

      <ContentSection title="Program Schedule">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>08:00 - 08:30</TableCell>
              <TableCell>Arrival and registration</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>08:30 - 09:00</TableCell>
              <TableCell>Opening remarks and introductions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>09:00 - 10:30</TableCell>
              <TableCell>Keynote presentations</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ContentSection>

      <ContentSection title="Registration">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Participation Fee</h3>
          <p className="mb-4">
            Registration fee: KES. 5,000 per person (covers venue and meals)
          </p>
          <Button size="lg">Register Now</Button>
        </div>
      </ContentSection>
    </div>
  );
}