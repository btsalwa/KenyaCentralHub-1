import ContentSection from "@/components/content-section";

export default function About() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>About CA-Hub Kenya</h1>
      
      <ContentSection title="Our Vision">
        <p>A food secure Kenya and climate resilient farming systems</p>
      </ContentSection>

      <ContentSection title="Our Mission">
        <p>
          To connect and empower its members to promote sustainable food production
          through conservation agriculture.
        </p>
      </ContentSection>

      <ContentSection title="Core Values">
        <ul>
          <li>
            <strong>Farmer and community centered</strong>
            <p>
              Producers are the core of agriculture, food and nutrition security
              hence are at the core of our work
            </p>
          </li>
          <li>
            <strong>Partnership driven</strong>
            <p>
              CA work is driven by broad partnerships of all stakeholders
            </p>
          </li>
          <li>
            <strong>Impact oriented</strong>
            <p>
              We seek to deliver sustainable impact at scale
            </p>
          </li>
          <li>
            <strong>Inclusivity</strong>
            <p>
              We seek to ensure equitable benefit to all actors in the CA value chain
            </p>
          </li>
        </ul>
      </ContentSection>
    </div>
  );
}
