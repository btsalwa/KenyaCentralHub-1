import { CircleArrowRight, Eye, Goal, Gem, Settings } from "lucide-react";

const About = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-28">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            CONSERVATION AGRICULTURE HUB-KENYA
          </h1>
          <p className="w-xl text-lg">
          <strong>Conservation Agriculture (CA)</strong> is a crop production system that is
            based on three principles: <strong>minimal soil disturbance, permanent soil
            cover and crop rotations.</strong> Unique to CA is that it holds tremendous
            potential for all sizes of farms and agro-ecological systems,
            including those of smallholder farmers who are food insecure.
            Conservation Agriculture has made a significant contribution in
            increasing food production in areas where smallholder farmers
            struggle to produce food because of frequent droughts, infertile
            soils and labor shortages.<br /> 
            
            <strong>The CA-Kenya Hub is a network of
            organizations and institutions and was established in 2011.</strong> It was
            started by 5 (five) organizations funded by the <strong>Canadian Food
            Grainbank (CFGB) - MCC, CBM, World Relief Canada, World Renew, ADRA
            and 3 local implementing partner members: National Council of
            Churches of Kenya (NCCK), Utooni Development Organization (UDO),
            Sahelian Solutions (SASOL).</strong> Since then, CA Kenya Hub has grown to
            almost 20 official members and 60 participants on online platform by
            2022. The CA-Kenya Hub connects organizations and builds capacity of
            its members to promote sustainable food security through
            conservation agriculture. Accomplishments of the CA-Kenya Hub
            include the following: <strong>trainings, linkages to conferences, exchange
            visits, consistent quarterly meetings as a hub, information sharing
            amongst members, fundraising efforts, and linking/networking with
            other organizations.</strong> Individually most of the members are involved
            in projects implemented in different counties and are aimed to
            promote the CA practice. They therefore bring a diversity of
            experience that provides a very good platform for knowledge sharing.<br />

            In light of the benefits of CA, many organizations around the world
            are actively working to increase their capacity to design and
            implement CA programs. <strong>Specific focus areas include increasing the
            capacity of implementing partners to train field staff on CA,
            scaling up the adoption of CA in communities, assuring that best
            practices are followed, Institutionalizing CA within the relevant
            organizations and policy, providing a forum to discuss challenges
            and learning’s and adaptations, and adding to the generalizable
            knowledge and learning’s of CA globally.</strong>
          </p>
        </div>
        <div className="gap-6 md:grid-cols-2">
          {/* <img
            src="https://images.unsplash.com/photo-1558388556-2261d4cc1938?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="size-full max-h-96 rounded-2xl object-cover"
          /> */}
          <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
            <p className="text-center text-2xl text-black text-muted-foreground">
              Invariably , CA Hub-Kenya seeks to achieve its strategic objective
              through the following
            </p>
            <img
              src="https://i.imgur.com/ATVMWO3.png"
              alt="placeholder"
              className="size-full max-h-100 rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              We make creating software ridiculously easy
            </h2>
            <p className="text-xl text-muted-foreground">
              We aim to help empower 1,000,000 teams to create their own
              software. Here is how we plan on doing it.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Eye className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-xl font-semibold">Vision</h3>
              <p className="text-muted-foreground">
                <strong>
                  A food secure Kenya and climate resilient farming systems
                </strong>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Goal className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-xl font-semibold">Mission</h3>
              <p className="text-muted-foreground">
                <strong>
                  To connect and empower its members to promote sustainable food
                  production through conservation agriculture.
                </strong>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Gem className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-xl font-semibold">
                Optimizing for empowerment
              </h3>
              <p className="text-muted-foreground">
                <ol>
                  <li>
                    <strong>
                      1. Farmer and community cantered Producers are the core of
                      agriculture, food and nutrition security hence are at the
                      core of our work
                    </strong>
                  </li>
                  <li>
                    <strong>
                      2. Partnership driven CA work is driven by broad
                      partnerships of all stakeholders: government, research,
                      academia, producer groups, private sector, civil society,
                      development partners, philanthropists and funding partners
                    </strong>
                  </li>
                  <li>
                    <strong>
                      3. Impact oriented We seek to deliver sustainable impact
                      at scale to millions of households and actors along the CA
                      value chain
                    </strong>
                  </li>
                  <li>
                    <strong>
                      4. Inclusivity We seek to ensure equitable benefit to all
                      actors in the CA value chain, more so to women and youth
                    </strong>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
        <div className=" gap-10 md:grid-cols-2">
          {/* <div>
            <p className="mb-10 text-sm font-medium text-muted-foreground">
              JOIN OUR TEAM
            </p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              We&apos;re changing how software is made
            </h2>
          </div> */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="mb-6 max-h-45 w-full rounded-xl object-cover"
            />
            <p className="text-muted-foreground">
              And we&apos;re looking for the right people to help us do it. If
              you&apos;re passionate about making change in the world, this
              might be the place for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
