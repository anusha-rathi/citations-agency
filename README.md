# citations.agency

One-page site. Next.js (App Router), Tailwind CSS 4, Motion, Lucide.

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| What | File |
| --- | --- |
| Nav, services, pricing, FAQ copy | `lib/content.ts` |
| "Why Reddit" demo scenarios (5) | `lib/scenarios.ts` |
| Proof of Work gallery entries | `lib/proof.ts` |
| Section components | `components/` |

## Proof of Work

Entries in `lib/proof.ts` without an `image` render as slots labelled "Placeholder".
To publish real evidence, add the screenshot to `public/proof/` and fill in `image`,
`category`, `title`, `context`, and where available `url`, `metrics`, `notes`.
Only add metrics that can be verified.

## Contact form

The form posts JSON (`name`, `email`, `website`, `goal`) to an endpoint you configure.
Set these in Vercel → Project → Settings → Environment Variables, then redeploy:

- [ ] `NEXT_PUBLIC_FORM_ENDPOINT` — any URL that accepts a JSON `POST` and returns 2xx
      (Formspree, Basin, Web3Forms, or your own API route).
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL` — a monitored inbox. Used as the fallback: if no endpoint
      is set, submitting opens the visitor's email app with their details prefilled.
- [ ] Send a test submission from the live site and confirm it arrives.

With neither variable set, submitting shows "Your request wasn't sent" and nothing is
collected. Visitors never see configuration text. Spam protection is a hidden honeypot
field plus a minimum time-on-page check.
