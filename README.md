# citations.agency

One-page site. Next.js (App Router), Tailwind CSS 4, Motion, Lucide.

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| What | File |
| --- | --- |
| Nav, Reddit threads, capabilities, pricing, FAQ | `lib/content.ts` |
| Citation gallery screenshots | `lib/evidence.ts` + `public/citations/` |
| Section components | `components/` |

## Citation gallery

Add a screenshot to `public/citations/` and an entry in `lib/evidence.ts` with its pixel
width and height, platform, type (`Linked citation`, `Brand mention` or `Search result`),
a title and short context. Optional: `prompt`, `captured`, `url`. Only add screenshots of
real results, and don't attribute a result to client work without evidence.

## Contact form

The audit form (a dialog opened by every "free audit" button) posts JSON (`name`, `email`, `website`, `notes`) to an endpoint you configure.
Set these in Vercel → Project → Settings → Environment Variables, then redeploy:

- [ ] `NEXT_PUBLIC_FORM_ENDPOINT` — any URL that accepts a JSON `POST` and returns 2xx
      (Formspree, Basin, Web3Forms, or your own API route).
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL` — a monitored inbox. Used as the fallback: if no endpoint
      is set, submitting opens the visitor's email app with their details prefilled.
- [ ] Send a test submission from the live site and confirm it arrives.

With neither variable set, submitting shows "Your request wasn't sent" and nothing is
collected. Visitors never see configuration text. Spam protection is a hidden honeypot
field plus a minimum time-on-page check.
