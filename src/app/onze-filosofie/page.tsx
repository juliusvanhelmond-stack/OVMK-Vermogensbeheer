import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { CriteriaStory } from "@/components/interactive/CriteriaStory";
import { ContactInvitation } from "@/components/sections/ContactInvitation";
import { Button } from "@/components/ui/Button";
import { riskNotice } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Onze filosofie: Value Investing",
  description:
    "Hoe OVMK belegt: Value Investing, fundamentele analyse en vier vaste selectiecriteria. Onderwaardering, een trigger, dividend of rente en spreiding.",
  path: "/onze-filosofie",
});

const markets = [
  { name: "Nederland" },
  { name: "Engeland" },
  { name: "Hong Kong", text: "Ook via een eigen fonds: het OVMK Hong Kong Value Fund." },
];

export default function FilosofiePage() {
  return (
    <>
      <PageHero
        label="Onze filosofie"
        title="Value Investing, met discipline."
        intro={
          <p>
            Wij zoeken naar aandelen en obligaties waarvan de echte waarde hoger is dan de koers. Iedere belegging toetsen
            wij aan dezelfde vier criteria, ongeacht het economisch klimaat.
          </p>
        }
      >
        <Button href="#criteria">Naar de vier criteria</Button>
      </PageHero>

      <section aria-label="Gezicht op Gouda" className="bg-beige">
        <div className="mx-auto max-w-[calc(var(--container)+2*var(--gutter))] px-[var(--gutter)] pb-[var(--section-y-compact)]">
          <EditorialImage
            src="/images/gouda/goude-1585.jpg"
            alt="Ingekleurde gravure van Gouda vanaf het water in 1585, met de Sint-Janskerk, stadsmuren en zeilschepen"
            width={1920}
            height={720}
            sizes="(min-width: 1280px) 1240px, 100vw"
            caption="Goude, 1585. Ook toen draaide de stad om het wegen van waarde."
            credit="Braun en Hogenberg, Civitates Orbis Terrarum, CC0"
          />
        </div>
      </section>

      <Section tone="sand" labelledBy="wat-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 id="wat-title" data-reveal className="t-section text-green-deep">
              Wat is Value Investing?
            </h2>
            <EditorialImage
              className="mt-8"
              src="/images/gouda/waag.jpg"
              alt="Detail van de Waag in Gouda, met het reliëf waarop goederen worden gewogen"
              width={1600}
              height={2400}
              imageClassName="aspect-[4/5] object-[50%_40%]"
              sizes="(min-width: 1024px) 30vw, 100vw"
              caption="In de Waag werd gewogen, niet geraden."
              credit="Foto: Richard Broekhuijzen, CC BY-SA 3.0"
            />
          </div>
          <div className="prose-ovmk lg:col-span-7 lg:col-start-6" data-reveal style={{ ["--reveal-i" as string]: 1 }}>
            <p className="t-lead">
              Value Investing houdt in dat gezocht wordt naar aandelen en obligaties van beursgenoteerde ondernemingen
              waarin, als gevolg van inefficiënties in de markt, onderwaardering is ontstaan: de echte waarde is hoger dan
              de koers van dat moment.
            </p>
            <p>
              Een deel van de portefeuille wordt ingericht met ondernemingen van kleinere omvang. Het voordeel daarvan is
              dat die ondernemingen vaak niet of minder door andere analisten worden gevolgd.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-2 md:grid-cols-2">
          <article data-reveal className="bg-white p-7 md:p-10" aria-labelledby="fa-title">
            <h3 id="fa-title" className="t-sub text-green-deep">
              Fundamentele analyse
            </h3>
            <p className="mt-4">
              Bij fundamentele analyse is het vertrekpunt de onderneming zelf: haar balans, haar kasstromen en haar bedrijfsactiviteiten. Niet de
              koersbeweging van gisteren, maar wat de onderneming feitelijk waard is.
            </p>
          </article>
          <article data-reveal style={{ ["--reveal-i" as string]: 1 }} className="bg-beige p-7 md:p-10" aria-labelledby="iw-title">
            <h3 id="iw-title" className="t-sub text-green-deep">
              Intrinsieke waarde
            </h3>
            <p className="mt-4">
              De intrinsieke waarde is de waarde die een onderneming op basis van die analyse vertegenwoordigt. Ligt de
              koers daar duidelijk onder, dan is er sprake van onderwaardering: de eerste voorwaarde voor een belegging.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="beige" labelledBy="criteria-title" id="criteria">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <h2 id="criteria-title" data-reveal className="t-section text-green-deep lg:col-span-6">
            Vier criteria, steeds opnieuw.
          </h2>
          <p data-reveal className="lg:col-span-5 lg:col-start-8" style={{ ["--reveal-i" as string]: 1 }}>
            Een belegging komt pas in aanmerking als zij aan alle vier voldoet. Scroll langs de criteria: het paneel toetst
            ze één voor één.
          </p>
        </div>
        <div className="mt-12">
          <CriteriaStory tone="light" />
        </div>
      </Section>

      <Section tone="green" labelledBy="lang-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="lang-title" data-reveal className="t-section">
              Discipline en de lange termijn
            </h2>
            <p data-reveal className="mt-6 text-on-green" style={{ ["--reveal-i" as string]: 1 }}>
              Wij gaan niet uit van onzekere gebeurtenissen in de toekomst, maar van feiten in het hier en nu. De
              onbekende factor is vooral de tijd: wanneer is de onderwaardering verdwenen, en wanneer is het dus
              aantrekkelijk om te verkopen?
            </p>
            <p data-reveal className="mt-4 text-on-green" style={{ ["--reveal-i" as string]: 2 }}>
              Daarom vinden wij een jaarlijkse vergoeding in de vorm van dividend of rente redelijk. En daarom passen wij deze no-nonsense
              manier van beleggen consequent toe, ongeacht het economisch klimaat of andere factoren van buitenaf.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="t-label text-gold">Waar wij beleggen</h3>
            <p className="mt-3 text-on-green-soft">Wij zijn vooral actief in drie markten.</p>
            <ul className="mt-4">
              {markets.map((m, i) => (
                <li key={m.name} data-reveal style={{ ["--reveal-i" as string]: i }} className="border-t border-white/15 py-6 last:border-b">
                  <p className="t-sub">{m.name}</p>
                  {m.text && <p className="mt-2 text-on-green-soft">{m.text}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="sand" compact labelledBy="risk-title">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
          <h2 id="risk-title" className="t-label text-green lg:col-span-3">
            Risico&apos;s van beleggen
          </h2>
          <p className="max-w-[70ch] text-ink-soft lg:col-span-8 lg:col-start-5">
            {riskNotice} De beschrijving van onze beleggingsstijl is geen beleggingsadvies.
          </p>
        </div>
      </Section>

      <ContactInvitation image="markt" />
    </>
  );
}
