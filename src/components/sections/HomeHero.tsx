import Image from "next/image";
import { Button, TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="bg-beige">
      <div className="lg:grid lg:min-h-[min(680px,calc(100svh-88px))] lg:grid-cols-[55fr_45fr]">
        <div className="flex flex-col justify-between gap-12 px-[var(--gutter)] py-12 md:py-16 lg:py-16 lg:pl-[max(var(--gutter),calc((100vw-var(--container))/2))] lg:pr-16">
          <div>
            <Eyebrow className="hero-in">OVMK Vermogensbeheer</Eyebrow>
            <h1 id="hero-title" className="t-hero hero-in mt-6 max-w-[13ch] text-green-deep" style={{ ["--i" as string]: 1 }}>
              Vermogensbeheer met overtuiging.
            </h1>
            <p className="t-lead hero-in mt-6 max-w-[44ch] text-ink" style={{ ["--i" as string]: 2 }}>
              Persoonlijk vermogensbeheer vanuit een heldere beleggingsfilosofie. Met aandacht voor waarde, discipline en
              de lange termijn.
            </p>
            <div className="hero-in mt-9 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ ["--i" as string]: 3 }}>
              <Button href="/onze-filosofie">Onze beleggingsfilosofie</Button>
              <TextLink href="/over-ovmk" className="text-green-deep">
                Maak kennis met OVMK
              </TextLink>
            </div>
          </div>

          <dl className="hero-in grid grid-cols-3 gap-4 text-[0.9375rem] sm:gap-8" style={{ ["--i" as string]: 4 }}>
            <div>
              <dt className="text-ink-soft">Opgericht</dt>
              <dd className="mt-1 font-semibold text-green-deep">Gouda, 2009</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Stijl</dt>
              <dd className="mt-1 font-semibold text-green-deep">Value Investing</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Toezicht</dt>
              <dd className="mt-1 font-semibold text-green-deep">AFM en DNB</dd>
            </div>
          </dl>
        </div>

        <figure className="relative h-[62vw] max-h-[520px] min-h-[300px] overflow-hidden bg-neutral sm:h-[52vw] lg:h-auto lg:max-h-none">
          <Image
            src="/images/gouda/waag.jpg"
            alt="De Waag aan de Markt in Gouda, een classicistisch gebouw uit 1668 van lichte natuursteen"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="hero-photo object-cover object-[50%_22%] lg:object-[50%_42%]"
          />
          <figcaption className="absolute bottom-0 left-0 bg-green-deep/90 px-4 py-2.5 text-[0.9375rem] leading-snug text-on-green">
            De Waag aan de Markt, Gouda (1668). Foto: Richard Broekhuijzen, CC BY-SA 3.0
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
