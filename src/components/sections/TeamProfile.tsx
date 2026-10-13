import Image from "next/image";
import type { Person } from "@/data/site";
import { cn } from "@/lib/cn";

type TeamProfileProps = {
  person: Person;
  size?: "large" | "small" | "row";
  className?: string;
  showContact?: boolean;
};

export function TeamProfile({ person, size = "small", className, showContact }: TeamProfileProps) {
  if (size === "row") {
    return (
      <figure className={cn("group grid grid-cols-[7.5rem_1fr] items-center gap-4", className)}>
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral">
          <Image
            src={person.image}
            alt={`Portret van ${person.name}, ${person.role.toLowerCase()} bij OVMK`}
            fill
            sizes="120px"
            className="img-drift object-cover object-[62%_30%]"
          />
        </div>
        <figcaption>
          <span className="block text-[1.0625rem] font-semibold text-green-deep">{person.name}</span>
          <span className="block text-[0.9375rem] text-ink-soft">{person.role}</span>
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className={cn("group", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral">
        <Image
          src={person.image}
          alt={`Portret van ${person.name}, ${person.role.toLowerCase()} bij OVMK`}
          fill
          sizes={size === "large" ? "(min-width: 1024px) 34vw, 100vw" : "(min-width: 1024px) 22vw, 50vw"}
          className="img-drift object-cover object-[62%_30%]"
        />
      </div>
      <figcaption className={cn("mt-3 flex gap-x-4 gap-y-0.5", size === "large" ? "flex-wrap items-baseline justify-between" : "flex-col")}>
        <span className={cn("font-semibold text-green-deep", size === "large" ? "text-[1.0625rem]" : "text-[1.0625rem]")}>
          {person.name}
        </span>
        <span className="text-[0.9375rem] text-ink-soft">{person.role}</span>
        {showContact && person.mobile && (
          <a href={person.mobileHref} className="figures inline-block basis-full py-1 text-[0.9375rem] text-green hover:underline">
            Mobiel {person.mobile}
          </a>
        )}
      </figcaption>
    </figure>
  );
}
