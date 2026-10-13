// Alle bedrijfsgegevens hieronder zijn overgenomen van www.ovmk.nl (geraadpleegd 13 oktober 2026).
// Wijzig niets zonder bron: dit is een financiële dienstverlener.

const DOCS = "https://www.ovmk.nl/storage/downloads";

export const company = {
  shortName: "OVMK",
  legalName: "Ophorst Van Marwijk Kooy Vermogensbeheer N.V.",
  street: "Tielweg 16",
  postalCode: "2803 PK",
  city: "Gouda",
  phone: "0182-543676",
  phoneHref: "tel:+31182543676",
  email: "info@ovmk.nl",
  kvk: "27346479",
  vat: "NL820906669B01",
  founded: "oktober 2009",
  routeplanner: `${DOCS}/routeplanner-tielweg-16.pdf`,
  mapsUrl: "https://www.openstreetmap.org/search?query=Tielweg%2016%2C%20Gouda",
} as const;

export const navigation = [
  { href: "/over-ovmk", label: "Over OVMK" },
  { href: "/onze-filosofie", label: "Onze filosofie" },
  { href: "/vermogensbeheer", label: "Vermogensbeheer" },
  { href: "/beleggingsfondsen", label: "Beleggingsfondsen" },
] as const;

export type Person = {
  name: string;
  role: string;
  image: string;
  width: number;
  height: number;
  mobile?: string;
  mobileHref?: string;
};

export const partners: Person[] = [
  {
    name: "Diane Ophorst",
    role: "Partner",
    image: "/images/team/diane-ophorst.jpg",
    width: 1400,
    height: 1049,
    mobile: "06-24253154",
    mobileHref: "tel:+31624253154",
  },
  {
    name: "Reinhard van Marwijk Kooy",
    role: "Partner",
    image: "/images/team/reinhard-van-marwijk-kooy.jpg",
    width: 1400,
    height: 1050,
    mobile: "06-53882636",
    mobileHref: "tel:+31653882636",
  },
];

export const team: Person[] = [
  {
    name: "Mark Kwakkenbos",
    role: "Hoofd beleggingen",
    image: "/images/team/mark-kwakkenbos.jpg",
    width: 640,
    height: 528,
  },
  {
    name: "Henri de Jong",
    role: "Senior asset manager",
    image: "/images/team/henri-de-jong.jpg",
    width: 684,
    height: 478,
  },
  {
    name: "Kim van Loon",
    role: "Officemanager",
    image: "/images/team/kim-van-loon.jpg",
    width: 389,
    height: 270,
  },
];

export const criteria = [
  {
    short: "Onderwaardering",
    title: "Er is sprake van onderwaardering.",
    text: "Wij zoeken aandelen en obligaties van beursgenoteerde ondernemingen waarvan de echte waarde, door inefficiënties in de markt, hoger is dan de koers van dat moment.",
  },
  {
    short: "Een trigger",
    title: "Er is een aanleiding voor herwaardering.",
    text: "Er moet een trigger zijn die de verwachting rechtvaardigt dat de onderwaardering binnen afzienbare tijd verdwijnt. Wij gaan daarbij uit van feiten in het hier en nu, niet van onzekere gebeurtenissen in de toekomst.",
  },
  {
    short: "Dividend of rente",
    title: "De belegging levert jaarlijks iets op.",
    text: "Omdat niemand weet wanneer de waardestijging precies komt, vinden wij het redelijk om in de tussentijd een jaarlijkse vergoeding te ontvangen, in de vorm van dividend of rente.",
  },
  {
    short: "Spreiding",
    title: "Geen enkel belang wordt te groot.",
    text: "Ontwikkelingen kunnen anders lopen dan verwacht. Daarom is een individueel belang bij aanvang in principe niet groter dan circa 2% van de waarde van de portefeuille.",
  },
] as const;

export type Doc = { label: string; href: string; note?: string };

export const legalDocs: Doc[] = [
  { label: "Privacy statement", href: `${DOCS}/privacy-statement.pdf` },
  { label: "Beloningsbeleid", href: `${DOCS}/beheerst-beloningsbeleid-ovmk-v100-20260617.pdf`, note: "juni 2026" },
  { label: "Duurzaamheid", href: `${DOCS}/duurzaamheid-vermogensbeheer-mei-2026.pdf`, note: "mei 2026" },
  { label: "Uittreksel KvK", href: `${DOCS}/kvk-ovmk-dd-08-05-2018.pdf`, note: "mei 2018" },
];

export const managementDocs: Doc[] = [
  { label: "Rendement individuele beheerrekening", href: `${DOCS}/performance-2026-09.pdf`, note: "t/m september 2026" },
  { label: "Ex-ante kostenoverzicht beheerrekeningen", href: `${DOCS}/ex-ante-kosten-incl-illustratie-van-beheerrekeningen-mei-2025.pdf`, note: "mei 2025" },
  ...legalDocs,
];

const FUND_COSTS = `${DOCS}/ex-ante-kosten-incl-illustratie-van-fondsbeleggen-mei-2025.pdf`;

export type Fund = {
  name: string;
  isin: string;
  docs: Doc[];
};

// De ISIN-codes staan in de bestandsnamen van de PRIIPs KID's op ovmk.nl.
export const funds: Fund[] = [
  {
    name: "OVMK Value Fund",
    isin: "NL0011225271",
    docs: [
      { label: "Maandoverzicht", href: `${DOCS}/2026-09-maandoverzicht-vf.pdf`, note: "september 2026" },
      { label: "Aanvullend prospectus", href: `${DOCS}/bijlage-iii-aanvullend-prospectus-ovmk-value-fund-sept-2026.pdf`, note: "bijlage III" },
      { label: "PRIIPs KID", href: `${DOCS}/kiddoc-2026-06-29-en-00-2026-06-29-nl0011225271-ovmk-paraplufonds-ovmk-value-fund-c1.pdf`, note: "juni 2026" },
      { label: "Ex-ante kostenoverzicht", href: FUND_COSTS, note: "mei 2025" },
    ],
  },
  {
    name: "OVMK Special Bond Fund",
    isin: "NL0010998860",
    docs: [
      { label: "Maandoverzicht", href: `${DOCS}/2026-09-maandoverzicht-sbf.pdf`, note: "september 2026" },
      { label: "Aanvullend prospectus", href: `${DOCS}/bijlage-ii-aanvullend-prospectus-ovmk-special-bond-fund-sept-2026.pdf`, note: "bijlage II" },
      { label: "PRIIPs KID", href: `${DOCS}/kiddoc-2026-06-29-en-00-2026-06-29-nl0010998860-ovmk-paraplufonds-ovmk-special-bond-fund-c1.pdf`, note: "juni 2026" },
      { label: "Ex-ante kostenoverzicht", href: FUND_COSTS, note: "mei 2025" },
    ],
  },
  {
    name: "OVMK Hong Kong Value Fund",
    isin: "NL0002097341",
    docs: [
      { label: "Maandoverzicht", href: `${DOCS}/2026-09-maandoverzicht-hkvf.pdf`, note: "september 2026" },
      { label: "Aanvullend prospectus", href: `${DOCS}/bijlage-i-aanvullend-prospectus-ovmk-hong-kong-value-fund-sept-2026.pdf`, note: "bijlage I" },
      { label: "PRIIPs KID", href: `${DOCS}/kiddoc-2026-06-29-en-00-2026-06-29-nl0002097341-ovmk-paraplufonds-ovmk-hong-kong-value-fund-c1.pdf`, note: "juni 2026" },
      { label: "Ex-ante kostenoverzicht", href: FUND_COSTS, note: "mei 2025" },
    ],
  },
];

export const imageCredits = [
  {
    title: "Waag in 2012",
    author: "Richard Broekhuijzen",
    licence: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/w/index.php?curid=22240705",
  },
  {
    title: "Gouda-Markt-en-Waag",
    author: "Joachim Köhler",
    licence: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/w/index.php?curid=8901595",
  },
  {
    title: "Goude (uit Civitates Orbis Terrarum, 1585), uitsnede",
    author: "Georg Braun en Frans Hogenberg",
    licence: "CC0",
    href: "https://commons.wikimedia.org/w/index.php?curid=112030720",
  },
  {
    title: "Voorgevels en gracht, Gouda (RCE 20379908)",
    author: "Rijksdienst voor het Cultureel Erfgoed",
    licence: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/w/index.php?curid=24072149",
  },
  {
    title: "Waaiersluis in de Hollandse IJssel bij Gouda",
    author: "S.J. de Waard",
    licence: "CC BY 3.0",
    href: "https://commons.wikimedia.org/w/index.php?curid=4577392",
  },
] as const;

export const riskNotice =
  "Beleggen brengt risico's met zich mee. De waarde van uw beleggingen kan fluctueren en u kunt (een deel van) uw inleg verliezen. In het verleden behaalde resultaten bieden geen garantie voor de toekomst.";

export const umbrellaDocs: Doc[] = [
  { label: "Prospectus OVMK Paraplufonds", href: `${DOCS}/prospectus-ovmk-paraplufonds-sept-2026.pdf`, note: "september 2026" },
  { label: "Voorwaarden van Beheer en Bewaring", href: `${DOCS}/bijlage-iv-voorwaarden-beheer-bewaring-ovmk-paraplufonds-v6-2023.pdf`, note: "bijlage IV" },
  { label: "Jaarverslag fondsen 2025", href: `${DOCS}/jaarrekening-ovmk-paraplufonds-2025.pdf`, note: "2025" },
  { label: "Jaarverslag fondsen 2024", href: `${DOCS}/2024-ovmk-paraplufonds-jaarrekening.pdf`, note: "2024" },
  { label: "Jaarverslag fondsen 2023", href: `${DOCS}/2023-ovmk-paraplufonds-jaarrekening-wg.pdf`, note: "2023" },
  { label: "Duurzaamheid", href: `${DOCS}/duurzaamheid-vermogensbeheer-mei-2025.pdf`, note: "mei 2025" },
];

export const office = { lat: 52.02148, lon: 4.68108 } as const;

export const copyOnRequest = "Van alle verplichte informatie wordt op verzoek een afschrift verstrekt tegen kostprijs.";
