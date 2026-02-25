# App-Care — Corporate Identity

## Produkt

| | |
|---|---|
| **Name** | App-Care |
| **Unternehmen** | coodoo GmbH, Mainz |
| **Domain** | https://app-care.de |
| **Tagline** | „Deine App. Messbar besser." |
| **Beschreibung** | Monatliches Betreuungspaket für Mobile Apps — ein Expertenteam misst, analysiert und entwickelt die App KPI-getrieben weiter. |
| **Sprache** | Deutsch (de_DE) |

---

## Farben

### Primärfarbe — Blue

| Token | Hex | Verwendung |
|---|---|---|
| brand-50 | `#eff6ff` | Hintergründe, Hover-Flächen |
| brand-100 | `#dbeafe` | Badges, Akzentflächen |
| brand-200 | `#bfdbfe` | Borders |
| brand-300 | `#93c5fd` | Dekorative Elemente |
| brand-400 | `#60a5fa` | Links Hover, Akzente auf dunklen Flächen |
| brand-500 | `#3b82f6` | Sekundäre Links |
| brand-600 | `#2563eb` | Primärbuttons, CTAs, Hauptfarbe |
| brand-700 | `#1d4ed8` | Hover-States |
| brand-800 | `#1e40af` | Tiefe Akzente |
| brand-900 | `#1e3a8a` | Dunkler Text |
| brand-950 | `#172554` | Dunkle Sektionen (Header/Footer/CTA) |

### Neutrale Farben — Slate

| Token | Hex | Verwendung |
|---|---|---|
| slate-50 | `#f8fafc` | Sektionstrenner, leichte Hintergründe |
| slate-100 | `#f1f5f9` | Badge-Hintergründe |
| slate-200 | `#e2e8f0` | Borders, Trennlinien |
| slate-300 | `#cbd5e1` | Disabled States |
| slate-400 | `#94a3b8` | Placeholder-Text |
| slate-500 | `#64748b` | Sekundärer Text |
| slate-600 | `#475569` | Fließtext |
| slate-700 | `#334155` | Stärkerer Fließtext |
| slate-800 | `#1e293b` | Headlines sekundär |
| slate-900 | `#0f172a` | Headlines primär |
| slate-950 | `#020617` | Footer-Hintergrund |

**Keine Akzentfarbe.** Nur ein Farbsystem (Blue) in verschiedenen Abstufungen. Kein Emerald, kein Gradient.

---

## Typografie

| Verwendung | Familie | Gewichte |
|---|---|---|
| Headlines (H1–H6) | JetBrains Mono | 400, 500, 600, 700, 800 |
| Fließtext | Inter | 400, 500, 600, 700 |
| Fallback Display | monospace | |
| Fallback Body | system-ui, sans-serif | |

Quelle: Google Fonts
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap
```

**Regeln:**
- JetBrains Mono für alle Headlines — gibt der Marke einen technischen, handwerklichen Charakter
- Inter für Body — maximale Lesbarkeit
- Buttons: JetBrains Mono, bold, uppercase, tracking-wide
- Badges/Labels: JetBrains Mono, uppercase, tracking-widest, text-xs
- H1 (Hero): text-5xl / text-7xl (responsive), font-extrabold
- Section-Titles: text-3xl / text-5xl, font-bold

---

## Logo

**Rein typografisch.** Kein Icon, kein Bildlogo.

```
App-Care.
```

- Schrift: JetBrains Mono ExtraBold
- Der Punkt am Ende ist in brand-600 (#2563eb) eingefärbt
- Farbe: slate-900 auf hellem Hintergrund, white auf dunklem Hintergrund

---

## Visueller Stil

**Ästhetik:** White-first, technisch, strukturiert, handwerklich

**Formensprache:**
- Abgerundete Ecken: `rounded-lg` (Buttons), `rounded-xl` (Cards, Sektionen)
- Flache Oberflächen, Tiefe nur durch 1px-Borders (slate-200)
- Shadows nur im Hover-State (shadow-lg + translateY)
- Viel Weißraum, großzügige Section-Paddings (py-20 md:py-32)

**Interaktionen:**
- Cards: hover:translateY(-4px) + shadow-lg, 300ms ease
- Buttons: hover:translateY(-1px) + shadow-md, 200ms
- Nav-Links: 2px Underline wächst von Mitte, 200ms
- Text-Links: Underline mit decoration-2 underline-offset-4

**Verboten:**
- Keine Gradienten (kein linear-gradient, kein bg-gradient)
- Keine Aurora Orbs oder Blob-Animationen
- Keine Glassmorphism-Effekte (kein backdrop-blur)
- Keine Emojis als Icons (SVG line-icons verwenden)
- Keine text-gradient Klasse

---

## Positionierung & Leistungsversprechen

**Hauptpillar:**
1. Messen & Analysieren
2. Überwachen & Reagieren
3. Weiterentwickeln & Wachsen
4. Strategie & Empfehlungen

**Social Proof:**
- 100+ Apps betreut
- 500k+ App-Nutzer
- 11 Experten im Team
- Lokales Team in Mainz

**Integrierte Tools:** Firebase, Crashlytics, App Store Connect, RevenueCat, Task-Board, Google Play Console

---

## Do's & Don'ts

**Do:**
- Blue als einzige Primärfarbe
- JetBrains Mono für Headlines und Buttons
- Slate-Grautöne für Texte und Borders
- Großzügiger Weißraum
- Flache, strukturierte Layouts
- SVG line-icons (stroke, nicht fill)
- Border-basierte Tiefe statt Schatten

**Don't:**
- Keine Serifenschriften
- Keine Gradienten oder bunte Effekte
- Keine Emojis in der UI (außer TeamTeaser Skills)
- Keine Glassmorphism/Blur-Effekte
- Keine zweite Akzentfarbe
- Kontrast mind. WCAG AA einhalten
