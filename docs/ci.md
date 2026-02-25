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

### Primärfarbe — Coral/Orange

| Token | Hex | Verwendung |
|---|---|---|
| brand-50 | `#FFF7ED` | Hintergründe, Hover-Flächen, Badge-Hintergründe |
| brand-100 | `#FFEDD5` | Badge-Borders, leichte Akzente |
| brand-200 | `#FED7AA` | Borders |
| brand-300 | `#FDBA74` | |
| brand-400 | `#FB923C` | Akzent auf dunklen Flächen |
| brand-500 | `#F97316` | Primärbuttons, Akzent-Headlines, Favicon |
| brand-600 | `#EA580C` | Hover-States, Ghost-Button-Text |
| brand-700 | `#C2410C` | Starke Links, Badge-Text |
| brand-800 | `#9A3412` | |
| brand-900 | `#7C2D12` | |
| brand-950 | `#431407` | |

### Neutrale Farben — Warm Stone

| Token | Hex | Verwendung |
|---|---|---|
| stone-50 | `#fafaf9` | Leichte Hintergründe, Alternating Sections |
| stone-100 | `#f5f5f4` | Borders (subtil) |
| stone-200 | `#e7e5e4` | Borders, Dividers, Card-Rahmen |
| stone-400 | `#a8a29e` | Placeholder-Text, Labels |
| stone-500 | `#78716c` | Sekundärer Text, Untertitel |
| stone-800 | `#292524` | Fließtext |
| stone-900 | `#1c1917` | Headlines, dunkle Sections |
| stone-950 | `#0c0a09` | Footer-Hintergrund |

### Semantische Farben

| | Hex | Verwendung |
|---|---|---|
| Emerald-50/700 | `#ECFDF5` / `#047857` | Positive KPI-Badges |
| Red-400 | `#f87171` | Negative Indikatoren |

**Entfernt:** Kein Emerald-Akzent mehr. Kein Indigo/Violett. Keine Gradient-Hintergründe auf Hero/Sections.

---

## Typografie

| Verwendung | Familie | Gewichte |
|---|---|---|
| Headlines (H1–H6) | Manrope | 500, 600, 700, 800 |
| Fließtext | Inter | 400, 500, 600 |
| Fallback | system-ui, -apple-system, sans-serif | |

Quelle: Google Fonts
```
https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap
```

**Regeln:**
- Keine Serifenschriften
- H1: text-4xl / text-6xl (responsive), font-extrabold, tracking-tight
- Section-Titles: text-3xl / text-4xl, font-bold, tracking-tight
- Body: text-stone-800, leading-relaxed

---

## Logo & Assets

Alle Dateien unter `/public/assets/`:

| Datei | Format | Verwendung |
|---|---|---|
| `app-care-logo.png` | PNG | Header, Footer (Logo-Icon) |
| `favicon.svg` | SVG | Coral-Gradient-Hintergrund, weiße Chart-Bars + Pulse-Linie |

---

## Visueller Stil

**Ästhetik:** Minimalistisch, modern, datengetrieben — viel Weißraum, ein starker Akzent

**Formensprache:**
- Buttons: `rounded-lg` (8 px)
- Cards: `rounded-xl` (12 px)
- Weiche, gestaffelte Schatten (kein harter Drop-Shadow)
- Viel Weißraum
- Kein Glassmorphism, keine Aurora-Orbs

**Hintergründe:**
- Hero: Weiß mit dezenter Dot-Grid-Textur
- Sections: Abwechselnd `bg-white` und `bg-stone-50`
- Eine dunkle Section pro Seite: `bg-stone-900` (warm, nicht kalt)
- CTA-Highlight: `bg-brand-500` (Coral)

**Hover-Effekte:**
- Buttons: `-translate-y-px` + shadow-Verstärkung (200ms ease-out)
- Cards: `-translate-y-0.5` + shadow-lg (200ms ease-out)
- Links mit Pfeilen: `gap` vergrößert sich beim Hover

**Animationen:**
- Hero-KPI-Cards: fade-in + translateY (gestaffelt)
- Smooth Scroll
- Hover-Transitions: 200ms ease-out

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
- Coral (brand-500) als Primärfarbe für CTAs und Akzente
- Stone-Palette für alle neutralen Flächen (warm, nicht kalt)
- Manrope für Headlines, Inter für Fließtext
- Weiche Schatten mit Brand-tinted opacity
- Viel Weißraum zwischen Sections (py-24 md:py-32)

**Don't:**
- Keine Serifenschriften
- Kein Indigo/Violett mehr
- Keine Gradient-Hintergründe auf Sections
- Keine Aurora-Orbs oder Floating-Chips
- Kein Glassmorphism
- Kontrast mind. WCAG AA einhalten
- Keine Emojis in UI (außer wo explizit behalten)
