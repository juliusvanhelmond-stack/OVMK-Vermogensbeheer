"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Elementen met data-reveal komen rustig in beeld. Alles wat de bovenrand van het venster
// (bijna) heeft bereikt of al gepasseerd is, wordt zichtbaar gemaakt. Zo blijft er ook bij
// snel scrollen, de End-toets of een ankerlink nooit een lege band achter.
// De class "js" wordt in de <head> gezet, zodat content zonder JavaScript gewoon zichtbaar blijft.
export function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    let pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    let frame = 0;

    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.94;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("is-visible");
          return false;
        }
        return true;
      });
      if (pending.length === 0) detach();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    const detach = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    check();

    return () => {
      detach();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
