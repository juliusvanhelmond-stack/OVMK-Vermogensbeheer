import Link from "next/link";
import { company, imageCredits, legalDocs, navigation, riskNotice } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-green bg-green-deep text-on-green">
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo variant="light" className="w-[190px]" />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed text-on-green-soft">
              {company.legalName} Onafhankelijk vermogensbeheer vanuit Gouda, met Value Investing als vaste koers sinds{" "}
              {company.founded}.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="t-label text-gold">Bezoek en contact</h2>
            <address className="mt-4 space-y-3 text-[0.9375rem] not-italic leading-relaxed">
              <p>
                {company.street}
                <br />
                {company.postalCode} {company.city}
              </p>
              <p>
                <a href={company.phoneHref} className="link-underline">
                  {company.phone}
                </a>
                <br />
                <a href={`mailto:${company.email}`} className="link-underline">
                  {company.email}
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Footernavigatie" className="md:col-span-2">
            <h2 className="t-label text-gold">Navigatie</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="t-label text-gold">Juridisch</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {legalDocs.slice(0, 3).map((doc) => (
                <li key={doc.href}>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                    {doc.label}
                    <span className="sr-only"> (pdf, opent in nieuw venster)</span>
                  </a>
                </li>
              ))}
              <li>
                <Link href="/over-ovmk#toezicht" className="hover:text-gold">
                  Vergunningen en toezicht
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule-gold mt-14" />

        <div className="mt-8 grid gap-6 text-[0.9375rem] leading-relaxed text-on-green-soft md:grid-cols-12 md:gap-8">
          <p className="md:col-span-5">{riskNotice}</p>
          <p className="md:col-span-4">
            OVMK beschikt over een vergunning van de AFM voor individueel en collectief vermogensbeheer en valt onder
            gedragstoezicht van de AFM en prudentieel toezicht van DNB. KvK {company.kvk} · btw {company.vat}.
          </p>
          <details className="group md:col-span-3">
            <summary className="cursor-pointer list-none text-on-green hover:text-gold [&::-webkit-details-marker]:hidden">
              <span className="link-underline">Beeldverantwoording</span>
            </summary>
            <ul className="mt-3 space-y-2">
              {imageCredits.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-on-green">
                    &ldquo;{c.title}&rdquo;, {c.author}, {c.licence}, via Wikimedia Commons
                  </a>
                </li>
              ))}
              <li>Portretten en logo: OVMK Vermogensbeheer.</li>
            </ul>
          </details>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-[0.9375rem] text-on-green-soft md:flex-row md:items-baseline md:justify-between">
          <p>
            © {year} {company.legalName}
          </p>
          <p>Ontwerpvoorstel door JUNE Studio. Dit is geen officieel gepubliceerde website van OVMK.</p>
        </div>
      </Container>
    </footer>
  );
}
