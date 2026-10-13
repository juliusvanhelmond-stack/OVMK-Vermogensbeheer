import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { partners } from "@/data/site";

// De brief hieronder citeert de oprichters van ovmk.nl ("Het ontstaan van OVMK"), licht ingekort.
export function HomePersonal() {
  return (
    <Section tone="beige" labelledBy="personal-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-8">
        <div className="lg:col-span-6">
          <h2 id="personal-title" data-reveal className="t-section text-green-deep">
            Persoonlijk in contact. Zorgvuldig in onze keuzes.
          </h2>
          <p data-reveal className="mt-6 max-w-[50ch]" style={{ ["--reveal-i" as string]: 1 }}>
            Bij OVMK spreekt u rechtstreeks met de mensen die uw vermogen beheren: een klein, hecht team in Gouda. De
            beide partners zijn ook persoonlijk en mobiel bereikbaar.
          </p>
          <EditorialImage
            className="mt-10"
            src="/images/gouda/gracht.jpg"
            alt="Een stille gracht in Gouda met historische voorgevels die in het water weerspiegelen"
            width={1600}
            height={1588}
            imageClassName="aspect-[4/3]"
            sizes="(min-width: 1024px) 45vw, 100vw"
            caption="Voorgevels aan de gracht, Gouda"
            credit="RCE, CC BY-SA 4.0"
          />
        </div>

        <figure data-reveal className="bg-sand p-7 md:p-10 lg:col-span-5 lg:col-start-8 lg:mt-24" style={{ ["--reveal-i" as string]: 2 }}>
          <div className="flex -space-x-2">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.image}
                alt=""
                width={88}
                height={88}
                className="size-11 rounded-full border-2 border-sand object-cover object-[60%_25%]"
              />
            ))}
          </div>
          <blockquote className="mt-7 space-y-4 text-[1.0625rem] leading-relaxed text-ink">
            <p>
              &ldquo;Wij zijn reeds vele jaren werkzaam als vermogensbeheerder, waarbij Value Investing een centrale plaats
              inneemt. In oktober 2009 kregen wij de vergunning om OVMK te starten.
            </p>
            <p>
              Doordat alle betrokkenen bij OVMK vele jaren met elkaar hebben samengewerkt en elkaar van haver tot gort
              kennen, was er vanaf de start sprake van een hecht team.
            </p>
            <p>Wij nodigen u van harte uit voor een kennismakingsgesprek.&rdquo;</p>
          </blockquote>
          <figcaption className="mt-7">
            <p className="text-[1.0625rem] font-semibold text-green-deep">Diane Ophorst en Reinhard van Marwijk Kooy</p>
            <p className="text-[0.9375rem] text-ink-soft">Oprichters en partners</p>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
