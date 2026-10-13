# OVMK Vermogensbeheer — demo-website (JUNE Studio)

Ontwerpvoorstel voor Ophorst Van Marwijk Kooy Vermogensbeheer N.V. Niet indexeren tot akkoord van de klant (noindex + robots.txt).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

Optioneel: `NEXT_PUBLIC_SITE_URL` voor canonieke URL's, Open Graph en de sitemap.

- Content en documentlinks: `src/data/site.ts` (bron: ovmk.nl, 13 oktober 2026)
- Ontwerpconcept: `DESIGNCONCEPT.md`
- Beeldverantwoording: footer van de site en `.taste-skill/found/credits.json`
