# Korexis — Landing Page

A clean, premium one-page landing site for **Korexis** — *the GTM layer for Korean SaaS entering global markets*. Built as a static site for early customer meetings, design partners, advisors, and investors.

## File structure

```
Korexis/
├── index.html    # Full page markup (semantic HTML, all 10 sections + header/footer)
├── styles.css    # All styling — design tokens, layout, components, responsive rules
├── script.js     # Vanilla JS — mobile menu toggle only (smooth scroll is native CSS)
└── README.md     # This file
```

No build step, no dependencies, no external assets. Fonts are system/web-safe (Inter → Pretendard → system fallbacks) so Korean text renders naturally.

### Sections (in order)
Header · Hero · Problem · Why Australia · Pilot (8 weeks) · Deliverables · Pricing · Scope · Platform vision · CTA / Contact · Footer

All call-to-action buttons point to `#contact`; the primary CTA opens an email to `korexis.co@gmail.com`. The LinkedIn button links to the founder's profile and opens in a new tab.

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
- **Contact email:** search `korexis.co@gmail.com` in `index.html`.
- **LinkedIn:** the button links to the founder's profile (`/in/명지-조-a446b4414`, percent-encoded in the `href`).

© 2026 Korexis. All rights reserved.
