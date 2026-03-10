---
description: Neuen SEO-Blog-Artikel für app-care.pages.dev planen, schreiben und deployen
allowed-tools: Bash(date:*), Bash(ls:*), Bash(git status:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*)
---

## Kontext

- Heutiges Datum: !`date +%Y-%m-%d`
- Bestehende Blog-Artikel: !`ls src/content/blog/`
- Git-Status: !`git status`

## Deine Aufgabe

Erstelle einen neuen SEO-optimierten Blog-Artikel für App-Care basierend auf dem Input des Nutzers (Thema + Primär-Keyword). Folge exakt dieser Reihenfolge:

---

### Schritt 1 — Briefing verstehen

Lies den Nutzer-Input:
- **Thema**: Was soll der Artikel behandeln?
- **Primär-Keyword**: Welches Keyword soll ranken?
- Falls beides fehlt, frag kurz nach: "Welches Thema und Primär-Keyword soll der Artikel haben?"

Interne Link-Möglichkeiten aus bestehenden Artikeln:
- `was-ist-eine-gute-crash-rate` → Artikel über App Crash Rate Benchmarks
- `kpis-fuer-app-success` → Artikel über die 10 wichtigsten Mobile App KPIs

---

### Schritt 2 — Artikel-Plan erstellen

Präsentiere vor dem Schreiben einen strukturierten Plan:

```
Titel (H1):       [Keyword-nah, max. 65 Zeichen]
Meta-Description: [Keyword + Nutzen, max. 155 Zeichen]
Slug:             [kurz, hyphen-separated, keyword-nah]
Dateipfad:        src/content/blog/[slug].md
pubDate:          [heutiges Datum aus Schritt Kontext]

H2-Struktur:
1. #[anchor-1] — [H2-Titel]
2. #[anchor-2] — [H2-Titel]
...
N. #fazit — Fazit
N+1. #faq — Häufige Fragen

SVG-Konzepte:
1. [slug]-[name].svg — [Was wird visualisiert, welcher Typ: Kategorien/Übersicht/Flussdiagramm]
2. [slug]-[name].svg — [Was wird visualisiert, welcher Typ: Benchmarks/Matrix/Vergleich]
```

Warte auf Bestätigung des Plans, bevor du mit Schritt 3 beginnst.

---

### Schritt 3 — Artikel schreiben

Erstelle die Datei `src/content/blog/[slug].md` mit folgender Pflichtstruktur:

1. **Frontmatter**
   ```yaml
   ---
   title: "[Titel]"
   description: "[Meta-Description, max. 155 Zeichen]"
   pubDate: [YYYY-MM-DD aus Kontext-Datum]
   author: "Markus Kühle"
   category: "[Kategorie]"
   ---
   ```

2. **H1-Titel** (= title aus Frontmatter)

3. **Hook** — 2–3 Sätze: Problem des Lesers, konkrete Zahl, Warum dieser Artikel

4. **SVG-Platzhalter #1** — `![Alt-Text](/assets/blog/[slug]-[name1].svg)`

5. **"Das Wichtigste in Kürze"-Box** (not-prose)
   ```html
   <div class="not-prose my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
     <p class="text-sm font-semibold text-gray-700 mb-3">Das Wichtigste in Kürze</p>
     <ul class="list-disc list-inside space-y-1.5 text-sm text-gray-700 m-0 p-0">
       <li>[4–5 Bullets mit konkreten Zahlen]</li>
     </ul>
   </div>
   ```

6. **Inhaltsverzeichnis-Box** (not-prose)
   ```html
   <div class="not-prose my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
     <p class="text-sm font-semibold text-gray-700 mb-3">Inhaltsverzeichnis</p>
     <ol class="list-decimal list-inside space-y-1.5 text-sm text-gray-700 m-0 p-0">
       <li><a href="#[anchor]" class="text-brand-600 hover:underline">[Section]</a></li>
     </ol>
   </div>
   ```

7. **H2-Sections** — Für jede Section:
   - **Was es ist:** [Definition, selbstständig verständlich]
   - **Warum es wichtig ist:** [Relevanz + Zahl]
   - **Guter Benchmark:** [Konkrete Werte]
   - **Wie du es verbesserst:** [3 Tipps]

8. **SVG-Platzhalter #2** — `![Alt-Text](/assets/blog/[slug]-[name2].svg)`

9. **Fazit** (`#fazit`) — 2–3 Sätze + Top-3-Takeaways + interner Link zu bestehendem Artikel

10. **FAQ-Block** (`#faq`) — min. 4 Fragen als echte Suchanfragen, Antworten 3–5 Sätze

11. **CTA-Block** (not-prose, dark)
    ```html
    <div class="not-prose my-8 rounded-xl bg-brand-950 p-8 text-center">
      <p class="text-lg font-semibold text-white mb-2">[CTA-Headline]</p>
      <p class="text-brand-200 mb-4">[Nutzen in 1 Satz]</p>
      <a href="/leistungen" class="btn-primary">Mehr erfahren</a>
    </div>
    ```

**SEO-Pflicht:**
- Primär-Keyword in H1, ersten 100 Wörtern, min. 2 H2-Headings
- Min. 1 interner Link zu bestehendem Blog-Artikel
- Min. 1 interner Link zu `/leistungen` oder `/kontakt`
- Mindestlänge: 2.500 Wörter

**KI-Zitierbarkeit:**
- Jede H2 beantwortet eine klare Frage (für Featured Snippets)
- Konkrete Zahlen in jeder Section (%, Zeiträume, Ø-Werte)
- FAQ: reale Suchanfragen als Fragestellung, Antworten 3–5 Sätze (kein Bullet-Format)

**Stil-Regeln:**
- Immer Deutsch, Du-Form, professionell-zugänglich
- Keine Emojis im Artikeltext
- Tool-Namen generisch halten (kein "Firebase", "Mixpanel", "ClickUp" etc. beim ersten Nennen bevorzugen — stattdessen "Analytics-Tool", "Crash-Reporting-Tool")

---

### Schritt 4 — SVGs erstellen

Erstelle beide SVGs unter `public/assets/blog/`:

- `public/assets/blog/[slug]-[name1].svg` — Übersicht/Kategorisierung
- `public/assets/blog/[slug]-[name2].svg` — Benchmarks/Matrix

SVG-Anforderungen:
- `viewBox="0 0 800 400"` (oder 800×500 bei mehr Inhalt)
- `role="img"` und `aria-label="[Beschreibung]"` am Root-Element
- `<title>[Titel]</title>` als erstes Kind-Element
- Keine externen Ressourcen, keine @import-Fonts
- Schriftart: `font-family="system-ui, sans-serif"`
- Brand-Farben: `#2563eb` (blau/brand), `#10b981` (grün/gut), `#ef4444` (rot/schlecht), `#f97316` (orange/mittel)
- Text: `#1e293b` (dunkel), `#64748b` (grau), `white`
- Valide SVG-Syntax — alle Tags geschlossen, keine ungültigen Attribute

---

### Schritt 5 — Commit + Preview-Deploy

Sobald Artikel und SVGs erstellt sind:

1. Stage: `git add src/content/blog/[slug].md public/assets/blog/[slug]-*.svg`

2. Commit mit HEREDOC:
   ```
   git commit -m "$(cat <<'EOF'
   Add blog article: [Titel kurz]

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   EOF
   )"
   ```

3. Push: `git push origin main`

4. Ausgabe:
   ```
   Artikel veröffentlicht: [Slug]

   Preview deploy gestartet.
   Status: https://github.com/coodoo-io/app-care-infopage/actions
   Preview-URL (verfügbar nach ~1 Min.): https://preview-main.app-care.pages.dev/blog/[slug]
   ```

---

## Regeln
- `pubDate` immer aus dem Kontext-Datum oben — nie hardcoden oder schätzen
- Kein `npm run build` — CI übernimmt
- Kein git tag — nur commit + push für Preview
- Plan in Schritt 2 immer erst bestätigen lassen, bevor der Artikel geschrieben wird
