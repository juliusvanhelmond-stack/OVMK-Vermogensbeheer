import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

// Origineel logo (Logo_OVMK_2015.png van ovmk.nl). De lichte variant is een
// herkleuring van datzelfde bestand voor donkergroene achtergronden.
export function Logo({ variant = "default", className, priority }: { variant?: "default" | "light"; className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="OVMK Vermogensbeheer, naar de homepage" className={cn("inline-block shrink-0", className)}>
      <Image
        src={variant === "light" ? "/branding/ovmk-logo-light.png" : "/branding/ovmk-logo.png"}
        alt="Ophorst Van Marwijk Kooy Vermogensbeheer"
        width={344}
        height={116}
        priority={priority}
        className="h-auto w-full"
      />
    </Link>
  );
}
