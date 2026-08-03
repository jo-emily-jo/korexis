# Korexis — Landing Page

An English-only static landing page for **Korexis**. The primary customer is the Australian procurement, commercial, engineering or supplier-quality team evaluating Korean clean-energy suppliers. Korexis maps Korean filings, patent records, public awards and certification records to a buyer's project requirements, showing what is supported, what is missing and what to ask next.

## File structure

```
Korexis/
├── index.html    # Full page markup (semantic HTML, all sections + header/footer)
├── styles.css    # All styling — design tokens, layout, components, responsive rules
├── script.js     # Vanilla JS — mobile menu toggle only (smooth scroll is native CSS)
└── README.md     # This file
```

No build step, no dependencies, no external assets. Fonts are system/web-safe (Inter → Pretendard → system fallbacks).

### Sections (in order)
Header · Hero · Why now · The qualification gap · How Korexis works · Sample qualification case · Why it compounds · Founder · CTA / Contact · Footer

Core positioning: Korexis is supplier qualification intelligence, not a GTM agency, deal-sourcing service, partner-matching service or supplier marketplace. Korexis does not automatically pass or fail a supplier. It identifies what is independently supported, where the evidence stops and what the buyer should ask next.

The sample-case section walks through an anonymised public-source qualification review of a Korean clean-energy manufacturer. No real supplier, buyer, project or interview participant is named. The methodology section (`#deal-sourcing`) describes the source-to-requirement mapping discipline: identify the legal entity, map each source to a buyer requirement, and bound what the evidence supports versus where inference stops. The compounding-value section (`#vision`) separates the reusable supplier-evidence layer, which can be refreshed and reused across projects, from the buyer-controlled requirement and decision layer, which stays project-specific.

All call-to-action buttons point to `#services` (the sample case) or `#contact`. The contact CTA opens an email to `contact@korexis.co`. The LinkedIn button links to the founder's profile and opens in a new tab.

## Local preview

Just open the file:

```bash
open index.html        # macOS
```

Or serve it (optional, mirrors production):

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deployment

It's a static site, so any static host works. Pick one:

**Vercel**
```bash
npm i -g vercel
vercel            # follow prompts; framework preset = "Other"
vercel --prod
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --dir . --prod
```
Or drag the project folder onto https://app.netlify.com/drop.

**Cloudflare Pages**
- Push to a Git repo → Cloudflare dashboard → *Pages → Create → Connect Git*.
- Build command: *(none)* · Build output directory: `/` (project root).

No environment variables or build configuration are required for any host.

## Customization quick reference

- **Colors / radius / fonts:** edit the `:root` design tokens at the top of `styles.css`.
- **Copy:** all text lives in `index.html`.
- **Contact email:** search `contact@korexis.co` in `index.html`.
- **LinkedIn:** the button links to the founder's profile (`/in/emily-jo-7a94953ab`).

© 2026 Korexis. All rights reserved.
