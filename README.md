# citations.agency

One-page site. Next.js (App Router), Tailwind CSS 4, Motion, Lucide.

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| What | File |
| --- | --- |
| Nav and pricing copy | `lib/content.ts` |
| Example buyer searches | `lib/scenarios.ts` |
| Proof entries | `lib/proof.ts` |
| Section components | `components/` |

## Proof

The "What the work looks like" section and its nav link are unpublished while
`proofs` in `lib/proof.ts` is empty. To publish, add up to three real examples:
put each screenshot in `public/proof/` and fill in `category`, `title`, `context`,
`image`, and where available `url` and `metrics`. Only add metrics that can be verified.

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
