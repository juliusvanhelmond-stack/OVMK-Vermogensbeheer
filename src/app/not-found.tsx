import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="beige">
      <h1 className="t-hero max-w-[16ch] text-green-deep">Deze pagina bestaat niet.</h1>
      <p className="t-lead mt-6 max-w-[48ch]">De pagina is verplaatst of het adres klopt niet. Via de homepage vindt u snel uw weg.</p>
      <div className="mt-8">
        <Button href="/">Naar de homepage</Button>
      </div>
    </Section>
  );
}
