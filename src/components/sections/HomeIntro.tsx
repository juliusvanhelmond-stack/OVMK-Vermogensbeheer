import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";

const facts = [
  { label: "Vergunning verkregen", value: "oktober 2009" },
  { label: "Beleggingsstijl", value: "Value Investing" },
  { label: "Actief in", value: "Nederland, Engeland, Hong Kong" },
  { label: "Depotbank", value: "InsingerGilissen" },
  { label: "Toezicht", value: "AFM en DNB" },
];

export function HomeIntro() {
  return (
    <Section tone="sand" labelledBy="intro-title">
      <Eyebrow data-reveal>Aangenaam, wij zijn OVMK</Eyebrow>
      <h2 id="intro-title" data-reveal className="t-section mt-5 max-w-[26ch] text-green-deep" style={{ ["--reveal-i" as string]: 1 }}>
        Een heldere visie op waarde. Een persoonlijke kijk op vermogen.
      </h2>
      <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-8">
        <div className="hidden lg:col-span-5 lg:block">
          <EditorialImage
            src="/images/gouda/goude-1585.jpg"
            alt="Ingekleurde stadsgezicht van Gouda vanaf het water, met de Sint-Janskerk en schepen op de Hollandse IJssel"
            width={1920}
            height={720}
            sizes="(min-width: 1024px) 40vw, 100vw"
            caption="Goude, 1585, uit Civitates Orbis Terrarum"
            credit="Braun en Hogenberg, CC0"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="prose-ovmk" data-reveal style={{ ["--reveal-i" as string]: 2 }}>
            <p className="t-lead text-ink">
              Ophorst Van Marwijk Kooy Vermogensbeheer N.V. is een initiatief van Diane Ophorst en Reinhard van Marwijk
              Kooy, beiden al jaren fervent aanhanger van de beleggingsstijl Value Investing.
            </p>
            <p>
              Vanuit ons kantoor in Gouda bieden wij individuele beheerrekeningen aan en beheren wij drie
              beleggingsfondsen. Wij doen dat met een klein, hecht team dat al vele jaren samenwerkt. Iedere belegging toetsen
              wij aan dezelfde vier criteria, ongeacht het economisch klimaat.
            </p>
          </div>

          <dl className="mt-10 border-t border-neutral" data-reveal style={{ ["--reveal-i" as string]: 3 }}>
            {facts.map((f) => (
              <div key={f.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-neutral py-3.5">
                <dt className="text-ink-soft">{f.label}</dt>
                <dd className="font-semibold text-green-deep">{f.value}</dd>
              </div>
            ))}
          </dl>

          <TextLink href="/over-ovmk" className="mt-8 text-green-deep">
            Over onze organisatie
          </TextLink>
        </div>
      </div>
    </Section>
  );
}
