"use client";

import { Menu, X } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { nav } from "@/lib/content";
import { Cta } from "./ui";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-paper/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          citations<span className="text-accent">.agency</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-ink/70 transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Cta href="#contact" variant="ink" className="!px-4 !py-2.5 max-sm:hidden">
            Get a Free Audit
          </Cta>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-ink/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        onClick={() => setOpen(false)}
        className="border-t border-line px-5 pb-6 pt-2 lg:hidden"
      >
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="block border-b border-line py-4 font-display text-2xl font-semibold"
          >
            {n.label}
          </a>
        ))}
        <Cta href="#contact" className="mt-6 w-full">
          Get a Free Audit
        </Cta>
      </nav>
    </header>
  );
}
