"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";
import { h2 } from "@/lib/styles";

export const ease = [0.21, 0.6, 0.35, 1] as const;

export function Motion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Cross-fades its children whenever `k` changes. */
export function Swap({ k, children, className }: { k: string | number; children: ReactNode; className?: string }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={k}
        className={className}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function Head({ eyebrow, title, children, dark }: { eyebrow: string; title: ReactNode; children?: ReactNode; dark?: boolean }) {
  return (
    <Reveal className="max-w-4xl">
      <p className={`font-mono text-xs uppercase tracking-widest ${dark ? "text-paper/60" : "text-muted"}`}>{eyebrow}</p>
      <h2 className={`mt-4 ${h2}`}>{title}</h2>
      {children && <p className={`mt-4 max-w-2xl leading-relaxed sm:text-lg ${dark ? "text-paper/70" : "text-muted"}`}>{children}</p>}
    </Reveal>
  );
}

export function Tabs<T extends string>({
  label, items, value, onChange, dark,
}: { label: string; items: readonly T[]; value: T; onChange: (v: T) => void; dark?: boolean }) {
  return (
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((it) => (
        <button
          key={it}
          type="button"
          role="tab"
          aria-selected={it === value}
          onClick={() => onChange(it)}
          className={`min-h-11 rounded-full border px-4 text-sm font-medium sm:min-h-9 transition-colors duration-200 ${
            it === value
              ? dark ? "border-accent bg-accent text-ink" : "border-ink bg-ink text-paper"
              : dark ? "border-paper/20 hover:border-paper/60" : "border-ink/15 hover:border-ink"
          }`}
        >
          {it}
        </button>
      ))}
    </div>
  );
}

const variants = {
  accent: "bg-accent text-ink hover:bg-ink hover:text-paper",
  ink: "bg-ink text-paper hover:bg-accent hover:text-ink",
  paper: "bg-paper text-ink hover:bg-accent",
  outline: "border border-ink/20 hover:border-ink",
};

export const ctaClass = (variant: keyof typeof variants = "accent") =>
  `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-300 active:scale-[0.98] ${variants[variant]}`;

export function Cta({
  href, children, variant = "accent", down, className = "",
}: { href: string; children: ReactNode; variant?: keyof typeof variants; down?: boolean; className?: string }) {
  return (
    <a href={href} className={`${ctaClass(variant)} ${className}`}>
      {children}
      {down ? (
        <ArrowDown aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      ) : (
        <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
