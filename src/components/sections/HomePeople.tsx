import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { partners, team } from "@/data/site";
import { TeamProfile } from "./TeamProfile";

export function HomePeople() {
  return (
    <Section tone="sand" labelledBy="people-title">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
        <h2 id="people-title" data-reveal className="t-section text-green-deep lg:col-span-6">
          De mensen achter onze visie.
        </h2>
        <div className="lg:col-span-5 lg:col-start-8" data-reveal style={{ ["--reveal-i" as string]: 1 }}>
          <p>
            Vijf mensen, één beleggingsstijl. Sinds 2023 versterkt Mark Kwakkenbos het team als zeer ervaren Value
            analist. Henk van Heijst is sinds 2009 lid van de Advisory Board.
          </p>
          <TextLink href="/over-ovmk#mensen" className="mt-5 text-green-deep">
            Het hele team
          </TextLink>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {partners.map((p, i) => (
          <div key={p.name} data-reveal style={{ ["--reveal-i" as string]: i + 1 }} className="lg:col-span-4">
            <TeamProfile person={p} size="large" />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:col-span-2 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-2 lg:content-end lg:gap-x-6">
          {team.map((p, i) => (
            <div key={p.name} data-reveal style={{ ["--reveal-i" as string]: i + 2 }}>
              <TeamProfile person={p} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
