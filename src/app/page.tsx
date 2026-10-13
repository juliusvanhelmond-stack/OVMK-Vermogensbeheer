import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { HomeValue } from "@/components/sections/HomeValue";
import { HomePersonal } from "@/components/sections/HomePersonal";
import { HomePeople } from "@/components/sections/HomePeople";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ContactInvitation } from "@/components/sections/ContactInvitation";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "OVMK Vermogensbeheer | Value Investing vanuit Gouda",
    description:
      "Persoonlijk vermogensbeheer vanuit een heldere beleggingsfilosofie. Ophorst Van Marwijk Kooy Vermogensbeheer in Gouda, sinds 2009.",
    path: "/",
  }),
  title: { absolute: "OVMK Vermogensbeheer | Value Investing vanuit Gouda" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeValue />
      <HomePersonal />
      <HomePeople />
      <ServiceOverview />
      <ContactInvitation />
    </>
  );
}
