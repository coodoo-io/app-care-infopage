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

## Deployments

### Branch-Previews

Jeder Push auf einen beliebigen Branch löst automatisch einen Preview-Deploy auf Cloudflare Pages aus.

Die Preview-URL ergibt sich aus dem Branch-Namen (Sonderzeichen werden durch `-` ersetzt):

```
https://preview-<branch-name>.app-care.pages.dev
```

Beispiele:

| Branch | Preview-URL |
|---|---|
| `main` | https://preview-main.app-care.pages.dev |
| `content/app-care-service-update` | https://preview-content-app-care-service-update.app-care.pages.dev |

Die exakte URL steht nach dem Deploy auch im GitHub Actions Summary des jeweiligen Workflow-Runs.

### Production Release

```
/release
```

Nutzt den `/release`-Skill: bumpt Patch-Version, erstellt Tag, pusht zu GitHub → CI deployed automatisch auf https://app-care.pages.dev.

---

## Wettbewerb

Siehe [docs/konkurrenten.md](docs/konkurrenten.md) für Analyse und Direktvergleich mit appfigures.com und runway.team.
