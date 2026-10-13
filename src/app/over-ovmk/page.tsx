import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { TeamProfile } from "@/components/sections/TeamProfile";
import { DocumentList } from "@/components/ui/DocumentList";
import { ContactInvitation } from "@/components/sections/ContactInvitation";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Button } from "@/components/ui/Button";
import { copyOnRequest, legalDocs, partners, team } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Over OVMK",
  description:
    "Ophorst Van Marwijk Kooy Vermogensbeheer werd in 2009 opgericht door Diane Ophorst en Reinhard van Marwijk Kooy. Lees over ons team, onze depotbank en het toezicht op OVMK.",
  path: "/over-ovmk",
});

const milestones = [
  { year: "2009", text: "In oktober verkrijgen Diane Ophorst en Reinhard van Marwijk Kooy de vergunning om OVMK te starten, met Value Investing als beleggingsstijl." },
  { year: "2009", text: "Henk van Heijst treedt toe tot de Advisory Board en staat OVMK sindsdien bij met zijn grote kennis." },
  { year: "2023", text: "Mark Kwakkenbos komt als zeer ervaren Value analist het team versterken." },
];

export default function OverOvmkPage() {
  return (
    <>
      <PageHero
        label="Over OVMK"
        title="Een hecht team, sinds 2009."
        intro={
          <p>
            OVMK is een initiatief van Diane Ophorst en Reinhard van Marwijk Kooy. Beiden zijn al vele jaren
            vermogensbeheerder en fervent aanhanger van Value Investing.
          </p>
        }
        image={{
          src: "/images/gouda/markt.jpg",
          alt: "De Markt in Gouda met de Waag en terrassen onder een grote boom",
          caption: "De Markt met de Waag, Gouda. Foto: Joachim Köhler, CC BY-SA 3.0",
          position: "30% 50%",
        }}
      >
        <Button href="#mensen">Maak kennis met het team</Button>
      </PageHero>

      <Section tone="sand" labelledBy="ontstaan-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="ontstaan-title" data-reveal className="t-section text-green-deep">
              Het ontstaan van OVMK
            </h2>
            <div className="prose-ovmk mt-6" data-reveal style={{ ["--reveal-i" as string]: 1 }}>
              <p>
                De oprichters zijn reeds vele jaren werkzaam als vermogensbeheerder, waarbij Value Investing een centrale
                plaats inneemt. Op basis van die kennis zijn zij ervan overtuigd zeer interessante portefeuilles te kunnen
                samenstellen.
              </p>
              <p>
                Doordat alle betrokkenen bij OVMK vele jaren met elkaar hebben samengewerkt en elkaar van haver tot gort
                kennen, was er vanaf de start sprake van een hecht team.
              </p>
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7" aria-label="Mijlpalen">
            {milestones.map((m, i) => (
              <li
                key={m.text}
                data-reveal
                style={{ ["--reveal-i" as string]: i + 1 }}
                className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-neutral py-6 last:border-b md:grid-cols-[6rem_1fr]"
              >
                <span className="figures text-[1.625rem] font-semibold leading-none text-green ">{m.year}</span>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="beige" labelledBy="mensen-title" id="mensen">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="mensen-title" data-reveal className="t-section text-green-deep">
            De mensen
          </h2>
          <p data-reveal className="max-w-[44ch] text-ink-soft">
            De partners zijn ook persoonlijk en mobiel bereikbaar.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {partners.map((p, i) => (
            <div key={p.name} data-reveal style={{ ["--reveal-i" as string]: i }}>
              <TeamProfile person={p} size="large" showContact />
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {team.map((p, i) => (
            <div key={p.name} data-reveal style={{ ["--reveal-i" as string]: i }}>
              <TeamProfile person={p} size="row" className="sm:hidden" />
              <TeamProfile person={p} className="hidden sm:block" />
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-[60ch] text-ink-soft" data-reveal>
          Advisory Board: Henk van Heijst, lid sinds 2009.
        </p>
      </Section>

      <Section tone="sand" labelledBy="depot-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-6">
            <h2 id="depot-title" data-reveal className="t-section text-green-deep">
              Uw portefeuille in depot
            </h2>
            <div className="prose-ovmk mt-6" data-reveal style={{ ["--reveal-i" as string]: 1 }}>
              <p>
                OVMK werkt samen met InsingerGilissen Services te Amsterdam, waar de portefeuilles van cliënten van OVMK
                in depot worden gehouden.
              </p>
              <p>
                InsingerGilissen Services is een handelsnaam van InsingerGilissen Bankiers NV en richt zich op de
                dienstverlening aan zelfstandige vermogensbeheerders en hun cliënten.
              </p>
            </div>
          </div>
          <EditorialImage
            className="lg:col-span-5 lg:col-start-8"
            src="/images/gouda/hollandse-ijssel.jpg"
            alt="De waaiersluis in de Hollandse IJssel bij Gouda"
            width={1600}
            height={1206}
            sizes="(min-width: 1024px) 40vw, 100vw"
            caption="Waaiersluis in de Hollandse IJssel"
            credit="S.J. de Waard, CC BY 3.0"
          />
        </div>
      </Section>

      <Section tone="green" labelledBy="toezicht-title" id="toezicht">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="toezicht-title" data-reveal className="t-section">
              Vergunningen en toezicht
            </h2>
            <p data-reveal className="t-lead mt-6 text-on-green" style={{ ["--reveal-i" as string]: 1 }}>
              OVMK beschikt over alle noodzakelijke vergunningen van de AFM voor het aanbieden van individueel en collectief
              vermogensbeheer.
            </p>
          </div>
          <dl className="lg:col-span-6 lg:col-start-7">
            {[
              {
                t: "Toetsing",
                d: "De bestuurders van OVMK zijn uitvoerig getoetst op basis van hun langjarige ervaring en hun integriteit.",
              },
              {
                t: "Toezicht",
                d: "OVMK valt onder het gedragstoezicht van de AFM en onder het prudentieel toezicht van DNB. OVMK voldeed over geheel 2025 aan de prudentiële eisen.",
              },
              {
                t: "Klachten",
                d: "OVMK is aangesloten bij het Klachteninstituut Financiële Dienstverlening (Kifid) en kiest daar bewust voor niet-bindende uitspraken. Zo blijft de gang naar de reguliere rechter voor cliënt en OVMK mogelijk als een uitspraak anders uitvalt dan verwacht.",
              },
            ].map((row, i) => (
              <div key={row.t} data-reveal style={{ ["--reveal-i" as string]: i }} className="border-t border-white/15 py-6 last:border-b">
                <dt className="t-label text-gold">{row.t}</dt>
                <dd className="mt-2 text-on-green">{row.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="sand" labelledBy="docs-title" compact>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="docs-title" className="t-sub text-green-deep">
              Wettelijk verplichte informatie
            </h2>
            <p className="mt-3 text-ink-soft">{copyOnRequest}</p>
          </div>
          <DocumentList docs={legalDocs} className="lg:col-span-6 lg:col-start-7" />
        </div>
      </Section>

      <ContactInvitation image="gracht" />
    </>
  );
}
