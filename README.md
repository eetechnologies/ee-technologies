# E & E Technologies — website

A Next.js (App Router) site for a house wiring & solar installation business:
Home, About, Services, Pricing, Booking (quote request form), Gallery, Contact.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. This needs internet access on first build/dev
run, since the headings/body fonts (Space Grotesk & Inter) load from Google
Fonts via `next/font/google`.

## Before you publish this

A few things are placeholder and marked with `TODO` comments in the code —
search the project for `TODO` to find all of them:

- **Contact details** — phone, email, and address in `components/Footer.jsx`
  and `app/contact/page.js` are fake. Replace with your real ones.
- **Pricing** — `app/pricing/page.js` has example starting prices for
  illustration only. Replace with your actual rates.
- **Booking form** — `app/booking/page.js` currently only shows a confirmation
  message locally; it doesn't send the request anywhere yet. To make it work,
  either:
  - add a Next.js API route (`app/api/booking/route.js`) that emails you the
    submission, or
  - use a form backend like Formspree or EmailJS and point the form's submit
    handler at it.
- **Gallery photos** — `app/gallery/page.js` uses icon placeholders instead of
  real project photos. Drop real photos into `public/images/gallery/` and
  swap them in.
- **About page story** — `app/about/page.js` has a generic placeholder
  paragraph where your real company background, certifications, and team
  details should go.
- **Map embed** — `app/contact/page.js` has a placeholder box where a Google
  Maps embed of your location should go.

## Deploying

The easiest option is [Vercel](https://vercel.com) (made by the Next.js
team): push this to a GitHub repo and import it there, or run `npx vercel`
from this folder.

## Project structure

```
app/            pages (one folder per route)
components/     shared header, footer, icons, reusable UI pieces
public/images/  logo and other static images
```
