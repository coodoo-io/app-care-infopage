# App-Care — Corporate Identity

## Produkt

| | |
|---|---|
| **Name** | App-Care |
| **Unternehmen** | coodoo GmbH, Mainz |
| **Domain** | https://app-care.de |
| **Tagline** | „Deine App. KPI-getrieben zum Erfolg." |
| **Beschreibung** | Monatliches Betreuungspaket für Mobile Apps — ein Expertenteam misst, analysiert und entwickelt die App KPI-getrieben weiter. |
| **Sprache** | Deutsch (de_DE) |

---

## Farben

### Primärfarbe — Indigo/Violett

| Token | Hex | Verwendung |
|---|---|---|
| brand-50 | `#eef2ff` | Hintergründe, Hover-Flächen |
| brand-100 | `#e0e7ff` | Badges, Akzentflächen |
| brand-200 | `#c7d2fe` | Borders |
| brand-300 | `#a5b4fc` | |
| brand-400 | `#818cf8` | Text-Gradient (Start) |
| brand-500 | `#6366f1` | |
| brand-600 | `#4f46e5` | Primärbuttons, Favicon-Hintergrund |
| brand-700 | `#4338ca` | Hover-States, sekundärer Button-Text |
| brand-800 | `#3730a3` | |
| brand-900 | `#312e81` | Hero-Gradient Mitte |
| brand-950 | `#1e1b4b` | Hero-Hintergrund (dunkelster Wert) |

### Akzentfarbe — Emerald/Grün

| Token | Hex | Verwendung |
|---|---|---|
| accent-400 | `#34d399` | Text-Gradient (Ende) |
| accent-500 | `#10b981` | Primärer Akzent |
| accent-600 | `#059669` | Hover |

### Neutrale Farben

| | Hex | Verwendung |
|---|---|---|
| Weiß | `#ffffff` | Karten, Hintergründe |
| Gray-800 | `#1f2937` | Fließtext |
| Gray-950 | `#030712` | Footer-Hintergrund |

### Gradienten

| Name | Definition |
|---|---|
| Hero | `135deg` → `#1e1b4b` (0%) → `#312e81` (40%) → `#4338ca` (100%) |
| Section | `180deg` → `#f8fafc` (0%) → `#eef2ff` (100%) |
| Text | `brand-400` → `accent-400` (via `bg-clip-text`) |

---

## Typografie

| Verwendung | Familie | Gewichte |
|---|---|---|
| Headlines (H1–H6) | Plus Jakarta Sans | 600, 700, 800 |
| Fließtext | Inter | 400, 500, 600, 700 |
| Fallback | system-ui, sans-serif | |

Quelle: Google Fonts
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap
```

**Regeln:**
- Keine Serifenschriften
- H1: text-4xl / text-6xl (responsive)
- Section-Titles: text-3xl / text-4xl

---

## Logo & Assets

Alle Dateien unter `/public/assets/`:

| Datei | Format | Maße | Verwendung |
|---|---|---|---|
| `App-Care_Logo_mit_Schriftzug.jpg` | JPG | 1324 × 386 px | Header, Footer (Wortmarke) |
| `App-Care_Logo.png` | PNG | 386 × 664 px | Icon ohne Text |
| `Favicon.svg` | SVG | — | „AC" auf `#4f46e5`-Hintergrund, abgerundetes Quadrat |

---

## Visueller Stil

**Ästhetik:** Modern, professionell, datengetrieben mit zugänglicher Wärme

**Formensprache:**
- Abgerundete Ecken: `rounded-xl` (8 px), `rounded-2xl` (16 px), `rounded-3xl` (24 px)
- Weiche, gestaffelte Schatten (kein harter Drop-Shadow)
- Glassmorphism-Effekte (Backdrop Blur)
- Viel Weißraum

**Animationen:**
- Schwebende Gradient-Orbs im Hero
- Smooth Scroll
- Hover-Transitions (200 ms)
- Fade-in für KPI-Chips

---

## Positionierung & Leistungsversprechen

**Hauptpillar:**
1. Messen & Analysieren
2. Überwachen & Reagieren
3. Weiterentwickeln & Wachsen
4. Strategie & Handlungsempfehlungen

**Social Proof:**
- 100+ Apps betreut
- 500.000+ Nutzer auf betreuten Apps
- 11 Mobile App Experten
- Lokales Team in Mainz (kein Offshoring)

**Integrierte Tools:** Firebase, Crashlytics, App Store Connect, RevenueCat, ClickUp, Google Play Console

---

## Do's & Don'ts

**Do:**
- Indigo als Primärfarbe für Aktionen und Schwerpunkte
- Emerald sparsam als Akzent einsetzen
- Plus Jakarta Sans für Headlines
- Weiche Schatten und Gradienten für Tiefe

**Don't:**
- Keine Serifenschriften
- Kein harter oder übermäßiger Schattenwurf
- Akzentfarbe nicht überbenutzen
- Kontrast mind. WCAG AA einhalten
