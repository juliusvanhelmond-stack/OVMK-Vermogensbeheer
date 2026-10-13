import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SpreidingRekenaar } from "@/components/interactive/SpreidingRekenaar";
import { Handelsdag } from "@/components/interactive/Handelsdag";
import { funds } from "@/data/site";

export function ServiceOverview() {
  return (
    <Section tone="beige" labelledBy="services-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="services-title" data-reveal className="t-section max-w-[20ch] text-green-deep">
          Twee manieren om met OVMK te beleggen.
        </h2>
        <p data-reveal className="max-w-[40ch] text-ink-soft" style={{ ["--reveal-i" as string]: 1 }}>
          Dezelfde beleggingsstijl, dezelfde criteria. Het verschil zit in de vorm.
        </p>
      </div>

      <div className="mt-10 grid gap-2 lg:grid-cols-2">
        <article data-reveal className="flex flex-col bg-sand p-7 md:p-10" style={{ ["--reveal-i" as string]: 1 }} aria-labelledby="svc-beheer">
          <h3 id="svc-beheer" className="t-sub text-green-deep">
            Individueel vermogensbeheer
          </h3>
          <p className="mt-4 max-w-[48ch]">
            Een eigen beheerrekening, belegd volgens Value Investing en bewaard bij InsingerGilissen. Mogelijk vanaf
            € 500.000. U heeft rechtstreeks contact met de partners.
          </p>
          <SpreidingRekenaar className="mt-8" />
          <div className="mt-8">
            <Button href="/vermogensbeheer">Over vermogensbeheer</Button>
          </div>
        </article>

        <article
          data-reveal
          className="on-green flex flex-col bg-green p-7 text-on-green md:p-10"
          style={{ ["--reveal-i" as string]: 2 }}
          aria-labelledby="svc-fondsen"
        >
          <h3 id="svc-fondsen" className="t-sub">
            Beleggingsfondsen
          </h3>
          <p className="mt-4 max-w-[48ch]">
            OVMK beheert drie fondsen. U neemt deel via een eigen rekening bij Saxo; de fondsen worden één keer per maand
            verhandeld.
          </p>
          <ul className="mt-8">
            {funds.map((f) => (
              <li key={f.name} className="flex flex-wrap items-baseline justify-between gap-x-4 border-t border-white/15 py-4 last:border-b">
                <span translate="no" className="text-[1.0625rem] font-semibold">{f.name}</span>
                <span className="figures text-[0.9375rem] text-on-green-soft">{f.isin}</span>
              </li>
            ))}
          </ul>
          <Handelsdag className="mt-8 bg-green-deep p-6" />
          <div className="mt-8 lg:mt-auto lg:pt-8">
            <Button href="/beleggingsfondsen" variant="light">
              Bekijk de fondsen
            </Button>
          </div>
        </article>
      </div>
    </Section>
  );
}
