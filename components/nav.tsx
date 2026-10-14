"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav } from "@/lib/content";
import { wrap } from "@/lib/styles";
import { AuditCta } from "./ui";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/80 backdrop-blur-md">
      <div className={`${wrap} flex h-14 items-center justify-between`}>
        <a href="#top" className="font-display text-base font-bold tracking-tight">
          citations<span className="text-accent">.agency</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-[13px] font-medium lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-ink/65 transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <AuditCta variant="ink" className="!min-h-9 !px-3.5 text-[13px] max-sm:hidden">
            get a free AI visibility audit
          </AuditCta>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-[10px] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} onClick={() => setOpen(false)} className={`${wrap} pb-5 lg:hidden`}>
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="block border-t border-line py-3.5 font-display text-lg font-semibold">
            {n.label}
          </a>
        ))}
        <AuditCta className="mt-3 w-full">get a free AI visibility audit</AuditCta>
      </nav>
    </header>
  );
}
