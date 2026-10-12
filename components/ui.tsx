"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

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
