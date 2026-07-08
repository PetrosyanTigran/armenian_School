# Սուրբ Մեսրոպ Մաշտոց — Armenian Saturday School (Prague)

A React (Vite) website for the school: information pages, a photo gallery, and a
student registration form. Built with `react-router-dom` for routing and
`react-i18next` for localization (Armenian / Czech / English, Armenian by default).

## Running it locally

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node.js 18+.

## Project structure

```
public/
  favicon.ico, favicon-*.png, apple-touch-icon.png   ← generated from the school logo
  logo.png                                            ← logo with transparent background
  images/gallery/                                     ← event photos (currently placeholders)
src/
  i18n/            ← hy.json, cs.json, en.json + i18next setup
  components/      ← Header, Footer, LanguageSwitcher, PageHero, layout, ornament
  pages/           ← Home, About, Gallery, Registration, Contact
```

## Content status

Real page copy (paragraphs, mission text, history, teacher bios, facts/numbers) is
still placeholder **Lorem ipsum** — labels, navigation, and form fields are already
translated and functional. Replace the lorem-ish keys in `src/i18n/hy.json`,
`cs.json`, and `en.json` with real content whenever it's ready; the three files
share the same key structure so it's easy to keep them in sync.

The 6 gallery photos in `public/images/gallery/` are also placeholders generated
for layout purposes — swap in real event photos (same filenames, or update the
list in `src/pages/Home.jsx` and `src/pages/Gallery.jsx`).

## Location

The Contact page embeds a Google Map centered on the coordinates from the map
link you shared (Základní a mateřská škola sv. Augustina, Praha). Update the
address text in `src/pages/Contact.jsx` if classes are held somewhere else.

## Registration form → email: which free service to use

The registration form needs somewhere to send submissions, since this is a
static site with no backend. A few good free options:

### Formspree (recommended — what's wired up already)
- Free tier: 50 submissions/month, emails go straight to your inbox, spam
  filtering included, no backend code needed.
- Setup:
  1. Go to https://formspree.io and create a free account.
  2. Create a new form, and set the notification email to whichever inbox
     should receive registrations.
  3. Copy the form endpoint it gives you (looks like
     `https://formspree.io/f/abcdwxyz`).
  4. Open `src/pages/Registration.jsx` and replace:
     ```js
     const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
     ```
     with your real endpoint.
  5. Rebuild/redeploy. Formspree will send the first submission through a
     confirmation step; after that it works silently.

### Alternatives (equally free, in case you'd rather use one of these)
- **Web3Forms** (web3forms.com) — free, no signup required beyond an access
  key, unlimited submissions on the free tier, also delivers straight to email.
- **Getform** (getform.io) — free tier with 50 submissions/month, nice
  dashboard for viewing/exporting entries, plus email notifications.
- **EmailJS** (emailjs.com) — sends the email straight from the browser using
  your own Gmail/Outlook account as the sender; free tier allows 200
  emails/month. A bit more setup (email template + service connection) but
  gives you full control over the email's appearance.

Any of these are a drop-in replacement — they all accept a simple `fetch(...)`
POST from the form, so switching later just means changing the endpoint URL
and a couple of field names in `Registration.jsx`.

## Deploying

Since this is a static Vite build, it deploys anywhere that serves static
files: Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a normal web host —
just run `npm run build` and upload the contents of `dist/`.

## Favicon

`public/favicon.ico`, the various PNG sizes, and `public/logo.png` (transparent
background) were generated directly from the uploaded school logo.
