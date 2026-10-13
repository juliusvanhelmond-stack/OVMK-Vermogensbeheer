import Image from "next/image";
import { cn } from "@/lib/cn";

type EditorialImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  credit?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
};

// Rechthoekig beeld met optioneel onderschrift. Gevonden beeld krijgt altijd een bronvermelding.
export function EditorialImage({
  src,
  alt,
  width,
  height,
  caption,
  credit,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  fill,
}: EditorialImageProps) {
  return (
    <figure className={cn("group", className)}>
      <div className={cn("relative overflow-hidden bg-neutral", fill && "h-full")}>
        {fill ? (
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("img-drift object-cover", imageClassName)} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            className={cn("img-drift h-auto w-full object-cover", imageClassName)}
          />
        )}
      </div>
      {(caption || credit) && (
        <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[0.9375rem] leading-snug text-ink-soft">
          {caption && <span>{caption}</span>}
          {credit && <span className="text-ink-soft/90">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
