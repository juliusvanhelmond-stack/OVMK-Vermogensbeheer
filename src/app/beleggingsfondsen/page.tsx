import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { DocumentList } from "@/components/ui/DocumentList";
import { Button } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Handelsdag } from "@/components/interactive/Handelsdag";
import { ContactInvitation } from "@/components/sections/ContactInvitation";
import { company, copyOnRequest, funds, riskNotice, umbrellaDocs } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Beleggingsfondsen",
  description:
    "OVMK beheert drie beleggingsfondsen: het OVMK Value Fund, het OVMK Special Bond Fund en het OVMK Hong Kong Value Fund. Deelnemen kan via Saxo.",
  path: "/beleggingsfondsen",
});

const steps = [
  {
    t: "Open een rekening bij Saxo",
    d: "Open online een rekening bij Saxo. Kies daarbij voor ‘zelf beleggen’, niet voor ‘Saxo Wealthcare’.",
  },
  { t: "Kies uw fonds", d: "Koop vervolgens het gewenste OVMK-fonds via uw Saxo-rekening." },
  {
    t: "Verhandeling eens per maand",
    d: "De fondsen worden één keer per maand verhandeld. Aan- en verkopen vinden plaats per de eerste werkdag van iedere maand.",
  },
  {
    t: "Bevestiging en overzichten",
    d: "U ontvangt een aan- of verkoopbevestiging en periodieke overzichten van Saxo. Bij verkopen kan het enkele dagen duren voordat de opbrengst op uw Saxo-rekening staat.",
  },
];

export default function FondsenPage() {
  return (
    <>
      <PageHero
        label="Beleggingsfondsen"
        title="Drie fondsen, één beleggingsstijl."
        intro={
          <p>
            OVMK beheert drie beleggingsfondsen binnen het OVMK Paraplufonds. CACEIS Bank is administrateur en bewaarder
            van de fondsen.
          </p>
        }
        image={{
          src: "/images/gouda/hollandse-ijssel.jpg",
          alt: "De waaiersluis in de Hollandse IJssel bij Gouda, met bomen langs het water",
          caption: "Waaiersluis in de Hollandse IJssel. Foto: S.J. de Waard, CC BY 3.0",
          position: "40% 60%",
        }}
      >
        <Button href="#fondsen">Bekijk de fondsen</Button>
      </PageHero>

      <Section tone="sand" labelledBy="fondsen-title" id="fondsen">
        <h2 id="fondsen-title" data-reveal className="t-section text-green-deep">
          De fondsen
        </h2>
        <p data-reveal className="mt-4 max-w-[60ch] text-ink-soft" style={{ ["--reveal-i" as string]: 1 }}>
          Het beleggingsbeleid, de risico&apos;s en de kosten van ieder fonds staan in het aanvullend prospectus en de
          PRIIPs KID. Lees deze documenten voordat u deelneemt.
        </p>
        <div className="mt-10 grid gap-2 lg:grid-cols-3">
          {funds.map((f, i) => (
            <article
              key={f.name}
              data-reveal
              style={{ ["--reveal-i" as string]: i }}
              className="bg-white p-7"
              aria-labelledby={`fund-${i}`}
            >
              <h3 id={`fund-${i}`} translate="no" className="t-sub text-green-deep">
                {f.name}
              </h3>
              <p className="figures mt-2 text-[0.9375rem] text-ink-soft">ISIN {f.isin}</p>
              <DocumentList docs={f.docs} className="mt-6" />
            </article>
          ))}
        </div>
      </Section>

      <Section tone="green" labelledBy="deelnemen-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="deelnemen-title" data-reveal className="t-section">
              Deelnemen in de fondsen
            </h2>
            <p data-reveal className="mt-6 text-on-green" style={{ ["--reveal-i" as string]: 1 }}>
              Aankopen van de fondsen kan via Saxo. OVMK is beheerder van de fondsen; de rekening en de transacties lopen
              via Saxo.
            </p>
            <Handelsdag className="mt-8 bg-green p-6" />
            <a
              href="https://www.home.saxo/nl-nl/self-investment"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-semibold text-on-green hover:text-gold"
            >
              <span className="link-underline">Naar Saxo, zelf beleggen</span>
              <span className="sr-only"> (opent in nieuw venster)</span>
            </a>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7" aria-label="Stappen om deel te nemen">
            {steps.map((s, i) => (
              <li
                key={s.t}
                data-reveal
                style={{ ["--reveal-i" as string]: i }}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-white/15 py-6 last:border-b"
              >
                <span aria-hidden className="grid size-8 place-items-center bg-gold text-[0.9375rem] font-bold text-green-deep">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-semibold">{s.t}</h3>
                  <p className="mt-1.5 text-on-green-soft">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="beige" labelledBy="paraplu-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="paraplu-title" data-reveal className="t-section text-green-deep">
              OVMK Paraplufonds
            </h2>
            <p data-reveal className="mt-6" style={{ ["--reveal-i" as string]: 1 }}>
              Het prospectus, de voorwaarden van beheer en bewaring en de jaarverslagen gelden voor alle drie de fondsen.
            </p>
            <p data-reveal className="mt-4" style={{ ["--reveal-i" as string]: 2 }}>
              Wilt u na afloop van ieder kwartaal de digitale nieuwsbrief ontvangen? Stuur dan een e-mail met dit verzoek
              naar{" "}
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent("Aanmelding kwartaalnieuwsbrief")}`}
                className="link-underline inline-block py-0.5 font-semibold text-green-deep"
              >
                {company.email}
              </a>
              .
            </p>
            <EditorialImage
              className="mt-10"
              src="/images/gouda/waag.jpg"
              alt="De gevel van de Waag in Gouda met het reliëf van het wegen van goederen"
              width={1600}
              height={2400}
              imageClassName="aspect-[4/3] object-[50%_38%]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              caption="De Waag, Gouda"
              credit="Richard Broekhuijzen, CC BY-SA 3.0"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <DocumentList docs={umbrellaDocs} />
            <p className="mt-4 text-[0.9375rem] text-ink-soft">{copyOnRequest}</p>
          </div>
        </div>
      </Section>

      <Section tone="sand" compact labelledBy="risk-title">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
          <h2 id="risk-title" className="t-label text-green lg:col-span-3">
            Risico&apos;s van beleggen
          </h2>
          <p className="max-w-[70ch] text-ink-soft lg:col-span-8 lg:col-start-5">
            {riskNotice} Deze pagina is geen aanbod en geen beleggingsadvies.
          </p>
        </div>
      </Section>

      <ContactInvitation image="markt" />
    </>
  );
}
