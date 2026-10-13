import { navigation } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-sand">
      <Container className="flex h-[76px] items-center justify-between gap-6 lg:h-[88px]">
        <Logo className="w-[150px] lg:w-[172px]" priority />
        <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center bg-green px-5 text-[0.9375rem] font-semibold text-on-green transition-colors duration-200 hover:bg-green-deep active:translate-y-px"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <MobileNavigation />
      </Container>
      <div aria-hidden className="h-px bg-neutral/70" />
    </header>
  );
}
