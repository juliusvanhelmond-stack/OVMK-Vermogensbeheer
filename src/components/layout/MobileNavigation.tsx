"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { company, navigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Sluit het menu na navigatie.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const panel = document.getElementById(panelId);
    const background = [document.getElementById("inhoud"), document.querySelector("footer")].filter(Boolean) as HTMLElement[];
    background.forEach((el) => el.setAttribute("inert", ""));
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      // Focus blijft binnen menuknop en paneel.
      if (e.key === "Tab" && panel) {
        const focusables = [buttonRef.current, ...Array.from(panel.querySelectorAll<HTMLElement>("a"))].filter(Boolean) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      background.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
    };
  }, [open, panelId]);

  const items = [{ href: "/", label: "Home" }, ...navigation, { href: "/contact", label: "Contact" }];

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 inline-flex min-h-11 items-center gap-2 px-2 text-[0.9375rem] font-semibold text-green"
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        {open ? "Sluiten" : "Menu"}
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="on-green fixed inset-x-0 bottom-0 top-[77px] z-40 overflow-y-auto overscroll-contain bg-green-deep text-on-green"
      >
        <nav aria-label="Mobiele navigatie" className="px-[var(--gutter)] pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-6">
          <ul>
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 items-center justify-between py-3 text-[1.625rem] font-semibold tracking-[-0.015em] transition-colors",
                      active ? "text-gold" : "text-on-green hover:text-gold",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-10 space-y-1 text-[0.9375rem] text-on-green-soft">
            <p>
              {company.street}, {company.postalCode} {company.city}
            </p>
            <p>
              <a href={company.phoneHref} className="inline-block py-2 text-on-green underline-offset-4 hover:underline">
                {company.phone}
              </a>
              {" · "}
              <a href={`mailto:${company.email}`} className="inline-block py-2 text-on-green underline-offset-4 hover:underline">
                {company.email}
              </a>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
