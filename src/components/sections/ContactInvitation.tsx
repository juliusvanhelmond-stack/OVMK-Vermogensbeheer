import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/site";

// Afsluiting: één groen vlak met de uitnodiging, geflankeerd door een foto en een vlak in zand.
const images = {
  ijssel: { src: "/images/gouda/hollandse-ijssel.jpg", alt: "De waaiersluis in de Hollandse IJssel bij Gouda, omringd door bomen", pos: "50% 50%" },
  gracht: { src: "/images/gouda/gracht.jpg", alt: "Historische voorgevels aan een stille gracht in Gouda", pos: "30% 50%" },
  markt: { src: "/images/gouda/markt.jpg", alt: "De Markt in Gouda met de Waag", pos: "20% 50%" },
  waag: { src: "/images/gouda/waag.jpg", alt: "De gevel van de Waag in Gouda", pos: "50% 35%" },
} as const;

export function ContactInvitation({ image = "ijssel" }: { image?: keyof typeof images }) {
  const img = images[image];
  return (
    <section aria-labelledby="cta-title" className="bg-sand py-[var(--section-y-compact)]">
      <Container>
        <div className="grid gap-2 lg:grid-cols-12">
          <div className="relative hidden overflow-hidden lg:col-span-3 lg:block">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="25vw"
              className="object-cover"
              style={{ objectPosition: img.pos }}
            />
          </div>
          <div data-reveal className="on-green bg-green-deep px-5 py-12 text-on-green sm:px-7 md:px-12 md:py-14 lg:col-span-9">
            <h2 id="cta-title" className="t-section max-w-[20ch]">
              Een goed gesprek begint met vertrouwen.
            </h2>
            <p className="mt-5 max-w-[52ch] text-on-green">
              Wij vertellen u graag meer over onze organisatie en onze visie op vermogensbeheer.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/contact" variant="light">
                Neem contact op
              </Button>
              <a href={company.phoneHref} className="figures font-semibold text-on-green hover:text-gold">
                <span className="link-underline">Of bel {company.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
