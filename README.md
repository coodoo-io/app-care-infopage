# App-Care Infopage

Marketing-Website für **App-Care** — das monatliche Betreuungspaket für Mobile Apps von [coodoo GmbH](https://coodoo.de), Mainz.

Live: https://app-care.pages.dev

## Tech Stack

- Astro 5 + Tailwind CSS 3
- Statische Site, keine Datenbank, keine Framework-Komponenten
- Deployment via Cloudflare Pages

## Lokale Entwicklung

```bash
npm run dev       # Dev-Server auf http://localhost:4321
npm run preview   # Produktions-Build lokal vorschauen
```

## Release

```
/release
```

Nutzt den `/release`-Skill: bumpt Patch-Version, erstellt Tag, pusht zu GitHub → CI deployed automatisch.

---

## Wettbewerb

Siehe [docs/konkurrenten.md](docs/konkurrenten.md) für Analyse und Direktvergleich mit appfigures.com und runway.team.
