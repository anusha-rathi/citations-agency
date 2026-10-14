import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy" };

// ponytail: placeholder policy covering only the audit form. Replace with a lawyer-reviewed policy before launch.
export default function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24 sm:px-8">
      <Link href="/" className="font-display text-lg font-bold tracking-tight">
        citations<span className="text-accent">.agency</span>
      </Link>
      <h1 className="mt-12 font-display text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 inline-block rounded-full bg-lav px-3 py-1 font-mono text-xs">Draft — pending legal review</p>
      <div className="mt-8 space-y-5 leading-relaxed text-muted">
        <p>
          When you request a visibility audit, we collect the details you enter in the form: your name, work email,
          company website, and any notes you add.
        </p>
        <p>
          We use that information only to prepare your audit and reply to you. We do not sell it or share it with third
          parties for their own marketing.
        </p>
        <p>To ask us to update or delete your details, reply to any email you receive from us.</p>
      </div>
    </main>
  );
}
