import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { DocumentList } from "@/components/ui/DocumentList";
import { SpreidingRekenaar } from "@/components/interactive/SpreidingRekenaar";
import { ContactInvitation } from "@/components/sections/ContactInvitation";
import { Button, TextLink } from "@/components/ui/Button";
import { copyOnRequest, managementDocs, partners, riskNotice } from "@/data/site";
import { TeamProfile } from "@/components/sections/TeamProfile";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Individueel vermogensbeheer",
  description:
    "De individuele Value Investing-beheerrekening van OVMK: persoonlijk vermogensbeheer vanaf € 500.000, met de portefeuille in depot bij InsingerGilissen.",
  path: "/vermogensbeheer",
});

const features = [
  { t: "Vorm", d: "Individuele beheerrekening" },
  { t: "Instapbedrag", d: "Vanaf € 500.000" },
  { t: "Beleggingsstijl", d: "Value Investing" },
  { t: "Beleggingen", d: "Aandelen en obligaties van beursgenoteerde ondernemingen" },
  { t: "Markten", d: "Vooral Nederland, Engeland en Hong Kong" },
  { t: "Spreiding", d: "Per belang bij aanvang in principe circa 2%" },
  { t: "Depotbank", d: "InsingerGilissen Services, Amsterdam" },
  { t: "Toezicht", d: "AFM (gedrag) en DNB (prudentieel)" },
];

export default function VermogensbeheerPage() {
  return (
    <>
      <PageHero
        label="Vermogensbeheer"
        title="Een eigen beheerrekening."
        intro={
          <p>
            Wij bieden Value Investing aan in de vorm van individuele beheerrekeningen. Dat is mogelijk vanaf een bedrag
            van € 500.000.
          </p>
        }
        image={{
          src: "/images/gouda/gracht.jpg",
          alt: "Historische voorgevels aan een stille gracht in Gouda, weerspiegeld in het water",
          caption: "Gracht in Gouda. Foto: RCE, CC BY-SA 4.0",
          position: "50% 60%",
        }}
      >
        <Button href="/contact">Plan een kennismaking</Button>
      </PageHero>

      <Section tone="sand" labelledBy="rekening-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h2 id="rekening-title" data-reveal className="t-section text-green-deep">
              De individuele beheerrekening
            </h2>
            <p data-reveal className="mt-6 max-w-[54ch]" style={{ ["--reveal-i" as string]: 1 }}>
              Uw vermogen wordt belegd volgens dezelfde vier criteria die wij al vele jaren hanteren: onderwaardering,
              een trigger, dividend of rente, en spreiding. Uw portefeuille wordt in depot gehouden bij InsingerGilissen
              Services; OVMK voert het beheer.
            </p>
            <dl data-reveal className="mt-10 border-t border-neutral" style={{ ["--reveal-i" as string]: 2 }}>
              {features.map((f) => (
                <div key={f.t} className="grid gap-1 border-b border-neutral py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-ink-soft">{f.t}</dt>
                  <dd className="font-semibold text-green-deep">{f.d}</dd>
                </div>
              ))}
            </dl>
            <TextLink href="/onze-filosofie" className="mt-8 text-green-deep">
              Zo werken de vier criteria
            </TextLink>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="lg:sticky lg:top-32" data-reveal style={{ ["--reveal-i" as string]: 2 }}>
              <SpreidingRekenaar tone="dark" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="contactpersonen-title" compact>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-4">
            <h2 id="contactpersonen-title" data-reveal className="t-sub text-green-deep">
              Uw aanspreekpunten
            </h2>
            <p data-reveal className="mt-3" style={{ ["--reveal-i" as string]: 1 }}>
              De partners van OVMK zijn persoonlijk en mobiel bereikbaar.
            </p>
          </div>
          {partners.map((p, i) => (
            <div key={p.name} data-reveal style={{ ["--reveal-i" as string]: i + 1 }} className="lg:col-span-4">
              <TeamProfile person={p} size="large" showContact />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="beige" labelledBy="rendement-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="rendement-title" data-reveal className="t-section text-green-deep">
              Rendement en kosten
            </h2>
            <p data-reveal className="mt-6" style={{ ["--reveal-i" as string]: 1 }}>
              Wij publiceren het rendement van de individuele beheerrekening en een ex-ante kostenoverzicht met
              illustratie. Beide documenten vindt u hiernaast. Zo kunt u zelf de cijfers lezen, in de vorm waarin wij ze
              verantwoorden.
            </p>
            <p data-reveal className="mt-4 text-[0.9375rem] text-ink-soft" style={{ ["--reveal-i" as string]: 2 }}>
              {riskNotice}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal style={{ ["--reveal-i" as string]: 1 }}>
            <h3 className="t-label text-green">Wettelijk verplichte informatie</h3>
            <DocumentList docs={managementDocs} className="mt-3" />
            <p className="mt-4 text-[0.9375rem] text-ink-soft">{copyOnRequest}</p>
          </div>
        </div>
      </Section>

      <ContactInvitation image="markt" />
    </>
  );
}
