# E & E Technologies — website

A Next.js (App Router) site for an electrical and solar inspection business:
Home, About, Services, Pricing, Booking (inspection request form), Agreement,
Contact.

Live at [eetechnologies.lk](https://eetechnologies.lk), hosted on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. This needs internet access on first build/dev
run, since the headings/body fonts (Space Grotesk & Inter) load from Google
Fonts via `next/font/google`.

## How the booking form works

The booking form (`app/booking/page.js`) submits directly from the browser to
a Google Apps Script web app (see `scripts/apps-script/Code.gs`), which logs
each request to a Google Sheet, saves the payment slip to Google Drive, and
emails a notification — all running under the business's own Google account.

## Deploying

Hosted on [Vercel](https://vercel.com), connected to this repo's `main`
branch — every push to `main` auto-deploys. The repo itself lives under the
business's own GitHub account (`eetechnologies`), not a personal one.

## Project structure

```
app/                    pages (one folder per route)
components/             shared header, footer, icons, reusable UI pieces
public/images/          logo and other static images
scripts/apps-script/    Google Apps Script backend for the booking form
```
