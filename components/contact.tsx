"use client";

import { ArrowUpRight, Check, X } from "lucide-react";
import { useState } from "react";
import { bookingUrl, contactEmail } from "@/lib/site";
import { ctaClass } from "./ui";

// Integration checklist: see README.md ("Contact form").
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? contactEmail;

type Status = "idle" | "sending" | "sent" | "mail" | "error";

const input =
  "mt-1.5 w-full rounded-[10px] border border-ink/15 bg-white px-3.5 py-2.5 text-ink placeholder:text-ink/35 transition-colors focus:border-ink focus:outline-none aria-[invalid=true]:border-accent";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentTo, setSentTo] = useState("");

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
      const body = `Name: ${data.name}\nWork email: ${data.email}\nCompany website: ${data.website}\nNotes: ${data.notes || "-"}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Free audit request")}&body=${encodeURIComponent(body)}`;
      return setStatus("mail");
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        // _gotcha is our own honeypot, already checked above; _subject sets the email subject.
        body: JSON.stringify({ name: data.name, email: data.email, website: data.website, notes: data.notes, _subject: `Free audit request: ${data.website}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSentTo(data.email);
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
      <div role="status" className="py-6 text-center">
        <span className="mx-auto grid size-11 place-items-center rounded-full bg-accent">
          <Check aria-hidden className="size-5" strokeWidth={2.5} />
        </span>
        <p className="mt-4 font-display text-xl font-bold">Request received.</p>
        <p className="mt-1 text-sm text-muted">We’ll look at your brand and send your audit to {sentTo}.</p>
        <p className="mt-3 text-sm text-muted">
          Want to talk it through sooner?{" "}
          <a href={bookingUrl} target="_blank" rel="noopener" className="font-medium text-ink underline decoration-accent underline-offset-2">Book a 30-min call</a>
        </p>
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
      className="space-y-3.5"
    >
      {field("name", "Your name", { autoComplete: "name" })}
      {field("email", "Work email", { type: "email", autoComplete: "email", placeholder: "you@company.com" })}
      {field("website", "Company website", { inputMode: "url", autoComplete: "url", placeholder: "company.com", pattern: "\\S+\\.\\S+", title: "Enter a website like company.com" })}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <label className="block text-sm font-medium">
        Notes <span className="font-normal text-muted">(optional)</span>
        <textarea name="notes" rows={3} className={input} placeholder="Anything we should know?" />
      </label>
      <button type="submit" disabled={status === "sending"} className={`${ctaClass("accent")} !mt-5 w-full disabled:opacity-60`}>
        {status === "sending" ? "Sending…" : "Get my free audit"}
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

/** The audit form, opened by any AuditCta via its id. */
export function AuditDialog() {
  return (
    <dialog
      id="audit"
      aria-labelledby="audit-title"
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
      className="m-auto w-[min(92vw,28rem)] rounded-3xl bg-paper p-0 text-ink outline-none backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-wider text-muted">free AI visibility audit</p>
            <h2 id="audit-title" className="mt-1.5 font-display text-2xl font-bold tracking-tight">
              Let’s find your opportunity.
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={(e) => (e.currentTarget.closest("dialog") as HTMLDialogElement).close()}
            className="grid size-11 shrink-0 place-items-center rounded-[10px] border border-ink/15 hover:border-ink"
          >
            <X aria-hidden className="size-4" />
          </button>
        </div>
        <div className="mt-5">
          <ContactForm />
        </div>
        <p className="mt-4 border-t border-line pt-4 text-center text-sm text-muted">
          Rather talk? <a href={bookingUrl} target="_blank" rel="noopener" className="font-medium text-ink underline decoration-accent underline-offset-2">Book a 30-min call</a>. Prefer email? Write to{" "}
          <a href={`mailto:${contactEmail}`} className="font-medium text-ink underline decoration-accent underline-offset-2">
            {contactEmail}
          </a>
        </p>
      </div>
    </dialog>
  );
}
