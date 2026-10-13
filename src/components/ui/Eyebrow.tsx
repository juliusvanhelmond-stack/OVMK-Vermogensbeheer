import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// Kort label boven een kop, op verzoek van de briefing. Gewone schrijfwijze, leesbaar formaat.
export function Eyebrow({ children, className, ...rest }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("t-label flex items-center gap-3 text-green [.on-green_&]:text-gold", className)} {...rest}>
      <span aria-hidden className="h-[2px] w-6 bg-gold" />
      {children}
    </p>
  );
}
