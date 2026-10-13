"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function NavLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative py-2 text-[0.9375rem] font-semibold text-ink transition-colors duration-200 hover:text-green",
        "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100",
        active && "text-green after:scale-x-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
