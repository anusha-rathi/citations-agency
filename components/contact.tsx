"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { ctaClass } from "./ui";

// Integration checklist: see README.md ("Contact form").
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

type Status = "idle" | "sending" | "sent" | "mail" | "error";

const input =
  "mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/35 transition-colors focus:border-ink focus:outline-none aria-[invalid=true]:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const invalid = Array.from(form.querySelectorAll<HTMLInputElement>("input:invalid"));
    // Reversed so the first invalid input per name wins.
    setErrors(Object.fromEntries(invalid.reverse().map((el) => [el.name, el.validationMessage])));
    if (invalid.length) return invalid.at(-1)!.focus();

    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    // Spam traps: hidden honeypot field, and submissions faster than a person can type.
    if (data._gotcha || e.timeStamp < 3000) return;

    if (!ENDPOINT) {
      if (!EMAIL) return setStatus("error");
      // Fallback until the endpoint is live: hand the details to the visitor's email app.
      const body = `Name: ${data.name}\nWork email: ${data.email}\nCompany website: ${data.website}\nLooking for: ${data.goal || "Not specified"}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Free Reddit audit request")}&body=${encodeURIComponent(body)}`;
      return setStatus("mail");
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field = (name: string, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <label className="block text-sm font-medium">
      {label}
      <input name={name} required aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} className={input} {...props} />
      {errors[name] && (
        <span id={`${name}-error`} className="mt-1 block text-sm font-normal text-[#c2371c]">
          {errors[name]}
        </span>
      )}
    </label>
  );

  if (status === "sent")
    return (
      <div role="status" className="rounded-3xl bg-paper p-8 text-ink sm:p-10">
        <span className="grid size-12 place-items-center rounded-full bg-accent">
          <Check aria-hidden className="size-6" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">Request received.</h3>
        <p className="mt-2 leading-relaxed text-muted">Thanks. We’ll look at your brand and reply by email.</p>
      </div>
    );

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onChange={(e) => {
        const { name } = e.target as unknown as HTMLInputElement;
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
      }}
      className="space-y-4 rounded-3xl bg-paper p-6 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold tracking-tight">Let’s find your Reddit opportunity.</h3>
      {field("name", "Your name", { autoComplete: "name" })}
      {field("email", "Work email", { type: "email", autoComplete: "email", placeholder: "you@company.com" })}
      {field("website", "Company website", { inputMode: "url", autoComplete: "url", placeholder: "company.com", pattern: "\\S+\\.\\S+", title: "Enter a website like company.com" })}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <label className="block text-sm font-medium">
        What are you looking for? <span className="font-normal text-muted">(optional)</span>
        <select name="goal" defaultValue="" className={input}>
          <option value="">Select one</option>
          <option>Build our Reddit presence</option>
          <option>Improve existing Reddit performance</option>
          <option>Search and AI visibility</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <button type="submit" disabled={status === "sending"} className={`${ctaClass("accent")} !mt-6 w-full disabled:opacity-60`}>
        {status === "sending" ? "Sending…" : "Get My Free Reddit Audit"}
        <ArrowUpRight aria-hidden className="size-4" />
      </button>
      <p role="status" aria-live="polite" className="text-sm leading-relaxed text-muted">
        {status === "error" && (
          <span className="text-[#c2371c]">
            Your request wasn’t sent. Please try again in a moment{EMAIL ? <>, or email us at <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></> : null}.
          </span>
        )}
        {status === "mail" && <>Your email app should have opened with your details. Send that message to finish, or write to {EMAIL}.</>}
        {(status === "idle" || status === "sending") && "No generic pitch. We’ll look at your brand and its actual opportunities."}
      </p>
    </form>
  );
}
