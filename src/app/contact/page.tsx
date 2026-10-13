import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/interactive/ContactForm";
import { company, copyOnRequest, office, partners, team } from "@/data/site";
import { TeamProfile } from "@/components/sections/TeamProfile";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Neem contact op met OVMK Vermogensbeheer, Tielweg 16 in Gouda. Telefoon 0182-543676, e-mail info@ovmk.nl.",
  path: "/contact",
});

const d = 0.006;
const bbox = [office.lon - d * 1.6, office.lat - d, office.lon + d * 1.6, office.lat + d].join(",");
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${office.lat},${office.lon}`;

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="page-title" className="bg-beige">
        <div className="mx-auto grid max-w-[calc(var(--container)+2*var(--gutter))] gap-12 px-[var(--gutter)] py-12 md:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <Eyebrow className="hero-in">Contact</Eyebrow>
            <h1 id="page-title" className="t-hero hero-in mt-5 text-green-deep" style={{ ["--i" as string]: 1 }}>
              Neem contact met ons op.
            </h1>
            <p className="t-lead hero-in mt-6 max-w-[42ch]" style={{ ["--i" as string]: 2 }}>
              Wij nodigen u van harte uit voor een kennismakingsgesprek op ons kantoor in Gouda.
            </p>
            <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
              <Button href={company.phoneHref}>Bel {company.phone}</Button>
              <Button href={`mailto:${company.email}`} variant="light" className="bg-white">
                Mail ons
              </Button>
            </div>

            <address className="hero-in mt-10 not-italic" style={{ ["--i" as string]: 4 }}>
              <dl className="border-t border-neutral">
                <div className="grid gap-1 border-b border-neutral py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-ink-soft">Adres</dt>
                  <dd className="font-semibold text-green-deep">
                    {company.street}
                    <br />
                    {company.postalCode} {company.city}
                    <span className="block font-normal text-ink-soft">{company.district}</span>
                  </dd>
                </div>
                <div className="grid gap-1 border-b border-neutral py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-ink-soft">Telefoon</dt>
                  <dd>
                    <a href={company.phoneHref} className="link-underline figures inline-block py-1 font-semibold text-green-deep">
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-1 border-b border-neutral py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-ink-soft">E-mail</dt>
                  <dd>
                    <a href={`mailto:${company.email}`} className="link-underline inline-block py-1 font-semibold text-green-deep">
                      {company.email}
                    </a>
                  </dd>
                </div>
                {partners.map((p) => (
                  <div key={p.name} className="grid gap-1 border-b border-neutral py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="text-ink-soft">Mobiel</dt>
                    <dd>
                      <span className="block font-semibold text-green-deep">{p.name}</span>
                      <a href={p.mobileHref} className="link-underline figures inline-block py-1 text-green-deep">
                        {p.mobile}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </address>
          </div>

          <div className="hero-in lg:col-span-6 lg:col-start-7" style={{ ["--i" as string]: 2 }}>
            <h2 className="t-sub text-green-deep">Stuur ons een bericht</h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Section tone="sand" labelledBy="route-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 id="route-title" data-reveal className="t-section text-green-deep">
              Route
            </h2>
            <p data-reveal className="mt-5" style={{ ["--reveal-i" as string]: 1 }}>
              Ons kantoor ligt aan de Tielweg 16 in {company.district}, Gouda. Een routebeschrijving kunt u als pdf downloaden.
            </p>
            <div data-reveal className="mt-6 flex flex-col items-start gap-3" style={{ ["--reveal-i" as string]: 2 }}>
              <a href={company.routeplanner} target="_blank" rel="noopener noreferrer" className="inline-block py-1 font-semibold text-green-deep">
                <span className="link-underline">Routeplanner Tielweg 16 (pdf)</span>
                <span className="sr-only"> (opent in nieuw venster)</span>
              </a>
              <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-1 font-semibold text-green-deep">
                <span className="link-underline">Open in OpenStreetMap</span>
                <span className="sr-only"> (opent in nieuw venster)</span>
              </a>
            </div>
          </div>
          <div data-reveal className="lg:col-span-8" style={{ ["--reveal-i" as string]: 1 }}>
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral sm:aspect-[16/9]">
              <iframe
                title="Kaart met de locatie van OVMK aan de Tielweg 16 in Gouda"
                src={mapSrc}
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
              />
            </div>
            <p className="mt-3 text-[0.9375rem] text-ink-soft">Kaart: © OpenStreetMap-bijdragers</p>
          </div>
        </div>
      </Section>

      <Section tone="beige" labelledBy="team-title">
        <h2 id="team-title" data-reveal className="t-section text-green-deep">
          U spreekt met
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5">
          {[...partners, ...team].map((p, i) => (
            <div key={p.name} data-reveal style={{ ["--reveal-i" as string]: i }}>
              <TeamProfile person={p} size="row" className="sm:hidden" />
              <TeamProfile person={p} className="hidden sm:block" />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand" compact labelledBy="gegevens-title">
        <div className="grid gap-4 text-[0.9375rem] lg:grid-cols-12 lg:gap-8">
          <h2 id="gegevens-title" className="t-label text-green lg:col-span-3">
            Bedrijfsgegevens
          </h2>
          <p className="text-ink-soft lg:col-span-8 lg:col-start-5">
            {company.legalName} · KvK {company.kvk} · btw {company.vat}. {copyOnRequest}
          </p>
        </div>
      </Section>
    </>
  );
}
