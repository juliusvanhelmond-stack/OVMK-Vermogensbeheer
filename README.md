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

## Documenten bijwerken (maandelijks)

Alle documenten (rendement, maandoverzichten, prospectussen, KID's, jaarverslagen, beleid) staan op deze site zelf, in `public/documenten/`. Ze zijn op 13 november 2026 overgezet van ovmk.nl, met hun originele bestandsnamen.

Een document vervangen, bijvoorbeeld het rendement van een nieuwe maand:

1. Zet het nieuwe bestand in `public/documenten/` (bijv. `performance-2026-11.pdf`).
2. Pas in `src/data/site.ts` de bestandsnaam en de datum aan (`note: "t/m november 2026"`).
3. Verwijder het oude bestand uit `public/documenten/`.
4. `npm run check:documenten` controleert of elk gekoppeld bestand bestaat. Dezelfde controle draait bij elke build, dus een ontbrekend document stopt de build in plaats van een kapotte link op te leveren.

Maandelijks wisselen: `performance-JJJJ-MM.pdf` en de drie `JJJJ-MM-maandoverzicht-*.pdf`.
