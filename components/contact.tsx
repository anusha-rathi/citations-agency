"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ctaClass } from "./ui";

// Any endpoint that accepts a JSON POST works (Formspree, Basin, your own API route).
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const input =
  "mt-2 w-full rounded-xl border border-paper/15 bg-paper/5 px-4 py-3 text-paper placeholder:text-paper/35 transition-colors focus:border-accent focus:outline-none aria-[invalid=true]:border-accent";

const messages: Partial<Record<Status, string>> = {
  sent: "Thanks. Your request is in, and we’ll be in touch by email.",
  error: "Something went wrong and your request was not sent. Please try again.",
  unconfigured: "Nothing was sent: this form isn’t connected to an inbox yet.",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const invalid = Array.from(form.querySelectorAll<HTMLInputElement>("input:invalid"));
    // First invalid input per name wins (radio groups share one).
    setErrors(Object.fromEntries(invalid.reverse().map((el) => [el.name, el.validationMessage])));
    if (invalid.length) return invalid.at(-1)!.focus();

    const data = Object.fromEntries(new FormData(form));
    if (data._gotcha) return; // honeypot
    if (!ENDPOINT) return setStatus("unconfigured");

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field = (name: string, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <label className="block text-sm font-medium">
      {label}
      <input
        name={name}
        required
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className={input}
        {...props}
      />
      {errors[name] && (
        <span id={`${name}-error`} className="mt-1.5 block text-sm font-normal text-accent">
          {errors[name]}
        </span>
      )}
    </label>
  );

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onChange={(e) => {
        const { name } = e.target as unknown as HTMLInputElement;
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
      }}
      className="space-y-5 rounded-3xl border border-paper/10 bg-paper/[0.04] p-6 sm:p-8"
    >
      {!ENDPOINT && (
        <p className="rounded-xl border border-dashed border-accent/60 px-4 py-3 font-mono text-xs leading-relaxed text-paper/80">
          Form not connected yet. Set NEXT_PUBLIC_FORM_ENDPOINT to start receiving submissions.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Name", { autoComplete: "name", placeholder: "Ada Lovelace" })}
        {field("email", "Work email", { type: "email", autoComplete: "email", placeholder: "ada@yourbrand.com" })}
      </div>
      {field("website", "Company website", {
        inputMode: "url",
        autoComplete: "url",
        placeholder: "yourbrand.com",
        pattern: "\\S+\\.\\S+",
        title: "Enter a website like yourbrand.com",
      })}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <fieldset aria-describedby={errors.interest ? "interest-error" : undefined}>
        <legend className="text-sm font-medium">Primary interest</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Reddit Marketing", "AI Visibility", "Both"].map((v) => (
            <label
              key={v}
              className="cursor-pointer rounded-full border border-paper/15 px-4 py-2 text-sm transition-colors hover:border-paper/50 has-checked:border-accent has-checked:bg-accent has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-violet"
            >
              <input type="radio" name="interest" value={v} required className="sr-only" />
              {v}
            </label>
          ))}
        </div>
        {errors.interest && (
          <span id="interest-error" className="mt-1.5 block text-sm text-accent">
            {errors.interest}
          </span>
        )}
      </fieldset>

      <button type="submit" disabled={status === "sending"} className={`${ctaClass("accent")} w-full hover:!bg-paper hover:!text-ink disabled:opacity-60`}>
        {status === "sending" ? "Sending…" : "Get My Free Visibility Audit"}
        <ArrowUpRight aria-hidden className="size-4" />
      </button>
      <p role="status" aria-live="polite" className="min-h-5 text-sm text-paper/80">
        {messages[status]}
      </p>
    </form>
  );
}
