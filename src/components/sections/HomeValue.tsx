import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { CriteriaStory } from "@/components/interactive/CriteriaStory";

export function HomeValue() {
  return (
    <Section tone="green" labelledBy="value-title">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
        <h2 id="value-title" data-reveal className="t-section lg:col-span-6">
          Waarde herkennen vraagt om verder kijken.
        </h2>
        <div className="lg:col-span-6 lg:col-start-7" data-reveal style={{ ["--reveal-i" as string]: 1 }}>
          <p className="t-lead text-on-green">
            Value Investing betekent zoeken naar ondernemingen waarvan de werkelijke waarde hoger is dan de koers. Dat
            vraagt om fundamentele analyse, geduld en de discipline om dezelfde criteria steeds opnieuw toe te passen.
          </p>
          <p className="mt-4 text-on-green-soft">
            Een deel van de portefeuille bestaat uit kleinere ondernemingen, die vaak minder door analisten worden gevolgd.
            Precies daar ontstaan inefficiënties.
          </p>
        </div>
      </div>

      <hr className="rule-gold my-12 lg:my-16" />

      <CriteriaStory tone="dark" />

      <div className="mt-8 lg:mt-4">
        <TextLink href="/onze-filosofie" className="text-on-green hover:text-gold">
          Lees meer over onze filosofie
        </TextLink>
      </div>
    </Section>
  );
}
