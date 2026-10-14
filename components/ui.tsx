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
      initial={{ opacity: 0, y: 20 }}
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
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function Head({ eyebrow, title, children, dark, center }: { eyebrow?: string; title: ReactNode; children?: ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`font-mono text-xs tracking-wider ${dark ? "text-paper/55" : "text-muted"}`}>{eyebrow}</p>}
      <h2 className={`mt-3 ${h2}`}>{title}</h2>
      {children && <p className={`mt-4 leading-relaxed sm:text-lg ${center ? "mx-auto" : ""} max-w-2xl ${dark ? "text-paper/65" : "text-muted"}`}>{children}</p>}
    </Reveal>
  );
}

const variants = {
  accent: "bg-accent text-ink hover:bg-ink hover:text-paper",
  ink: "bg-ink text-paper hover:bg-accent hover:text-ink",
  outline: "border border-ink/15 bg-white/60 hover:border-ink",
};

export const ctaClass = (variant: keyof typeof variants = "accent") =>
  `group inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-5 text-sm font-semibold transition-colors duration-300 active:scale-[0.98] ${variants[variant]}`;

const Arrow = ({ down }: { down?: boolean }) =>
  down ? (
    <ArrowDown aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
  ) : (
    <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  );

export function Cta({
  href, children, variant = "accent", down, className = "",
}: { href: string; children: ReactNode; variant?: keyof typeof variants; down?: boolean; className?: string }) {
  return (
    <a href={href} className={`${ctaClass(variant)} ${className}`}>
      {children}
      <Arrow down={down} />
    </a>
  );
}

/** Opens the audit form dialog; falls back to the #contact section without JS. */
export function AuditCta({ children, variant = "accent", className = "" }: { children: ReactNode; variant?: keyof typeof variants; className?: string }) {
  return (
    <a
      href="#contact"
      onClick={(e) => {
        const d = document.getElementById("audit") as HTMLDialogElement | null;
        if (!d) return;
        e.preventDefault();
        d.showModal();
      }}
      className={`${ctaClass(variant)} ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}
