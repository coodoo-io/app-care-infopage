---
title: "App-Barrierefreiheit: Accessibility als Qualitätsmerkmal und Wettbewerbsvorteil"
description: "App Barrierefreiheit: Was WCAG und mobile Accessibility bedeuten, welche gesetzlichen Anforderungen gelten, wie du sie testest und warum sie Store-Bewertungen verbessert."
pubDate: 2026-03-02
author: "Markus Kühle"
category: "UX & Retention"
---

# App-Barrierefreiheit: Accessibility als Qualitätsmerkmal und Wettbewerbsvorteil

1,3 Milliarden Menschen leben weltweit mit einer Behinderung — das entspricht einem Fünftel aller potenziellen App-Nutzer. App-Barrierefreiheit ist kein Nice-to-have mehr, sondern ab Juni 2025 für viele Apps in der EU gesetzliche Pflicht. Wer Accessibility als lästige Compliance-Aufgabe betrachtet, verpasst nicht nur eine Riesengruppe zahlungskräftiger Nutzer, sondern riskiert auch schlechtere Store-Bewertungen, sinkende Retention und spätere, teurere Nachbesserungen.

![App-Barrierefreiheit: Die vier WCAG-Prinzipien im Überblick](/assets/blog/app-barrierefreiheit-prinzipien.svg)

<div class="not-prose my-6 rounded-xl border border-brand-100 bg-brand-50 p-6">
  <p class="text-sm font-semibold text-brand-900 mb-3">Das Wichtigste in Kürze</p>
  <ul class="space-y-2 text-sm text-brand-800 m-0 p-0 list-none">
    <li>— 1,3 Milliarden Menschen weltweit leben mit einer Behinderung — ca. 17 % aller App-Nutzer</li>
    <li>— Der European Accessibility Act (EAA) gilt ab 28. Juni 2025 für private Unternehmen in der EU</li>
    <li>— WCAG 2.1 Level AA ist der anerkannte Mindeststandard für mobile Barrierefreiheit</li>
    <li>— Barrierefreie Apps erzielen durchschnittlich 0,3 bis 0,5 Sterne bessere Store-Bewertungen</li>
    <li>— Accessibility-Probleme lassen sich mit kostenlosen Tools wie Accessibility Inspector oder TalkBack frühzeitig erkennen</li>
  </ul>
</div>

<div class="not-prose my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
  <p class="text-sm font-semibold text-gray-700 mb-3">Inhaltsverzeichnis</p>
  <ol class="list-decimal list-inside space-y-1.5 text-sm text-gray-700 m-0 p-0">
    <li><a href="#was-ist-accessibility" class="text-brand-600 hover:underline">Was ist App-Barrierefreiheit?</a></li>
    <li><a href="#gesetzlich" class="text-brand-600 hover:underline">Gesetzliche Anforderungen: EAA und WCAG</a></li>
    <li><a href="#wcag-prinzipien" class="text-brand-600 hover:underline">Die vier WCAG-Prinzipien für Mobile Apps</a></li>
    <li><a href="#haeufige-probleme" class="text-brand-600 hover:underline">Häufige Accessibility-Probleme in Apps</a></li>
    <li><a href="#testen" class="text-brand-600 hover:underline">Accessibility testen: Tools und Methoden</a></li>
    <li><a href="#store-bewertungen" class="text-brand-600 hover:underline">Barrierefreiheit und App Store Ranking</a></li>
    <li><a href="#fazit" class="text-brand-600 hover:underline">Fazit</a></li>
    <li><a href="#faq" class="text-brand-600 hover:underline">FAQ</a></li>
  </ol>
</div>

---

## Was ist App-Barrierefreiheit (Accessibility)? {#was-ist-accessibility}

App-Barrierefreiheit — im englischen Sprachraum als Accessibility oder kurz "a11y" bezeichnet — beschreibt das Prinzip, dass eine App von allen Menschen genutzt werden kann, unabhängig von körperlichen, sensorischen oder kognitiven Einschränkungen. Das umfasst sehbehinderte Nutzer, die einen Screen Reader einsetzen, gehörlose Nutzer, die auf Untertitel angewiesen sind, motorisch eingeschränkte Nutzer, die große Touch-Targets benötigen, sowie Menschen mit kognitiven Einschränkungen, die von klarer Sprache und einfacher Navigation profitieren.

Die WHO schätzt, dass rund **1,3 Milliarden Menschen** — also etwa 16 bis 17 % der Weltbevölkerung — mit einer Form von Behinderung leben. Hinzu kommen temporäre Einschränkungen: ein gebrochener Arm, grelles Sonnenlicht, oder eine laute Umgebung, in der du dein Telefon nicht hören kannst. Accessibility-Maßnahmen kommen damit faktisch einem deutlich größeren Nutzerkreis zugute als nur denjenigen mit dauerhafter Behinderung.

**Warum app barrierefreiheit mehr als nur Inklusion ist:**

Barrierefreiheit verbessert die Gesamtqualität einer App. Klare Kontraste machen Inhalte für alle lesbarer — nicht nur für sehbehinderte Nutzer. Gut beschriftete Buttons helfen neuen Nutzern beim Onboarding genauso wie Nutzern mit Screen Reader. Einfache, konsistente Navigation reduziert die kognitive Last für jeden. Die Investition in Accessibility zahlt sich also mehrfach aus: als Compliance-Maßnahme, als Qualitätsmerkmal und als messbarer Wettbewerbsvorteil.

Gartner prognostiziert, dass bis 2026 Unternehmen mit hohen Accessibility-Standards im Durchschnitt eine um 20 % höhere Kundenzufriedenheit erzielen als solche ohne entsprechende Maßnahmen. Apple und Google haben Barrierefreiheit zudem als explizites Qualitätskriterium in ihren Store-Richtlinien verankert — wer hier schlecht abschneidet, riskiert nicht nur eine schlechte Nutzererfahrung, sondern auch schlechtere algorithmische Behandlung.

---

## Gesetzliche Anforderungen: European Accessibility Act und WCAG {#gesetzlich}

Seit dem **28. Juni 2025** ist der European Accessibility Act (EAA) — in Deutschland umgesetzt durch das Barrierefreiheitsstärkungsgesetz (BFSG) — für private Unternehmen in der EU verbindlich. Was bisher hauptsächlich für öffentliche Stellen galt, gilt nun auch für weite Teile der Privatwirtschaft.

**Wer ist betroffen?**

Der EAA erfasst grundsätzlich alle Unternehmen, die digitale Produkte oder Dienstleistungen in der EU anbieten — einschließlich mobiler Apps. Ausgenommen sind lediglich Kleinstunternehmen mit weniger als zehn Mitarbeitenden und einem Jahresumsatz unter zwei Millionen Euro. Für alle anderen gilt: Apps, die als Zugangspunkt zu einer Dienstleistung dienen — Bankings-Apps, E-Commerce-Apps, Reise- und Buchungsplattformen, Telekommunikation, Medien — müssen die Anforderungen der EN 301 549 erfüllen.

**Was bedeutet das konkret?**

Die EN 301 549 verweist für mobile Anwendungen im Wesentlichen auf die **WCAG 2.1 Level AA** als technischen Mindeststandard. Wer WCAG 2.1 AA erfüllt, ist auf einem guten Weg zur EAA-Konformität. Die Norm enthält darüber hinaus spezifische Anforderungen für mobile Plattformen, die über die WCAG hinausgehen, etwa zur Unterstützung plattformeigener Bedienungshilfen.

**Was droht bei Nichterfüllung?**

Die deutschen Marktüberwachungsbehörden können bei Verstößen Bußgelder verhängen und die Vermarktung nicht-konformer Produkte untersagen. Zudem eröffnet das BFSG Verbänden das Recht zur Verbandsklage — ein Instrument, das im Bereich der DSGVO bereits intensiv genutzt wird und auch im Accessibility-Bereich zunehmend an Bedeutung gewinnen dürfte.

**WCAG: Vom Webstandard zum mobilen Standard**

Die Web Content Accessibility Guidelines (WCAG) wurden ursprünglich für Webseiten entwickelt, gelten aber als de-facto-Standard auch für mobile Anwendungen. Aktuell relevant ist **WCAG 2.1**, während WCAG 2.2 bereits als Empfehlung vorliegt und schrittweise als Referenz herangezogen wird. Level AA ist der praxisrelevante Mindeststandard; Level AAA ist für die meisten Apps kein realistisches Ziel.

---

## Die vier WCAG-Prinzipien für Mobile Apps {#wcag-prinzipien}

WCAG strukturiert alle Anforderungen entlang von vier Prinzipien: Wahrnehmbar, Bedienbar, Verständlich und Robust. Jedes Prinzip enthält konkrete Erfolgskriterien, die sich direkt auf mobile Apps übertragen lassen.

### 1. Wahrnehmbar (Perceivable)

Inhalte müssen von allen Nutzern wahrgenommen werden können — unabhängig davon, ob sie sehen, hören oder lesen können.

Konkret bedeutet das:

- **Alt-Texte für alle Bilder und Icons**: Jedes Bild, das Informationen transportiert, benötigt eine Textalternative. Dekorative Grafiken werden explizit als solche markiert.
- **Kontrastverhältnis von mindestens 4,5:1**: Für normalen Text und Text in Grafiken ist ein Mindestkontrast von 4,5:1 gegenüber dem Hintergrund erforderlich. Für großen Text (ab 18pt oder 14pt fett) gilt 3:1.
- **Untertitel und Transkripte für Audioinhalte**: Videos mit gesprochenen Inhalten benötigen Untertitel. Reine Audioaufnahmen brauchen Transkripte.
- **Keine rein farbige Unterscheidung**: Wenn du Fehler nur durch rote Farbe signalisierst, sehen farbenblinde Nutzer kein Problem. Nutze zusätzlich Symbole, Muster oder Text.
- **Skalierbarkeit**: Text muss sich bis 200 % vergrößern lassen, ohne dass Inhalt verloren geht oder Überlagerungen entstehen.

### 2. Bedienbar (Operable)

Alle Funktionen müssen bedienbar sein — auch ohne präzise Feinmotorik oder Verwendung eines Touchscreens.

Konkret bedeutet das:

- **Touch-Targets von mindestens 44 × 44 pt**: Apple und Google empfehlen beide Mindestgrößen für tippbare Elemente. Zu kleine Buttons führen zu Fehltipps — ein häufiger Auslöser für negative App Store Reviews.
- **Keyboard- und Switch-Navigation**: Nutzer mit motorischen Einschränkungen steuern ihr Gerät oft mit externer Tastatur oder Switch-Access. Jede Funktion muss über lineare Navigation erreichbar sein.
- **Keine Zeitlimits ohne Verlängerungsoption**: Formulare oder Sessions, die ablaufen, müssen Nutzern erlauben, die Zeit zu verlängern oder den Ablauf zu deaktivieren.
- **Keine Inhalte, die Anfälle auslösen können**: Blinkende Elemente, die öfter als dreimal pro Sekunde aufleuchten, sind unzulässig.
- **Überspringbare Blöcke**: Wiederkehrende Navigationselemente sollten übersprungen werden können, sodass Nutzer direkt zum Hauptinhalt gelangen.

### 3. Verständlich (Understandable)

Inhalte und Bedienung müssen verständlich sein — kognitiv und sprachlich.

Konkret bedeutet das:

- **Klare, einfache Sprache**: Technischer Jargon und verschachtelte Sätze erhöhen die kognitive Last. Schreibe so, dass auch Nutzer ohne Fachkenntnisse den Inhalt verstehen.
- **Konsistente Navigation**: Gleiche Elemente sollen sich an gleichen Stellen befinden und gleich verhalten. Inkonsistenz erzeugt Unsicherheit.
- **Aussagekräftige Fehlermeldungen**: "Fehler 400" ist keine hilfreiche Rückmeldung. Beschreibe, was falsch gelaufen ist und wie der Nutzer das Problem lösen kann.
- **Vorausgefüllte Felder und Autocomplete**: Nutzer mit kognitiven Einschränkungen profitieren von reduzierten Eingabeanforderungen.
- **Eingaben prüfen und Korrektur ermöglichen**: Vor dem Absenden wichtiger Formulare sollten Nutzer ihre Eingaben überprüfen und korrigieren können.

### 4. Robust (Robust)

Inhalte müssen mit einer Bandbreite von Nutzeragenten und Assistiven Technologien zuverlässig funktionieren.

Konkret bedeutet das:

- **Screen-Reader-Kompatibilität**: VoiceOver (iOS) und TalkBack (Android) müssen alle Inhalte korrekt vorlesen können. Dafür müssen alle interaktiven Elemente korrekte Accessibility Labels haben.
- **Plattform-APIs nutzen**: Verwende die nativen Accessibility-APIs deiner Plattform, statt eigene Lösungen zu implementieren. Native Komponenten bringen Accessibility-Unterstützung oft out of the box mit.
- **Semantisch korrekte Strukturierung**: Überschriften, Listen und Absätze müssen semantisch korrekt ausgezeichnet sein, damit Screen Reader die Hierarchie korrekt interpretieren können.
- **Zustandsinformationen übermitteln**: Checkboxen, Tabs, und ähnliche Elemente müssen ihren aktuellen Zustand (ausgewählt, ausgeklappt, aktiviert) an Assistive Technologien kommunizieren.

---

## Häufige App Barrierefreiheits-Probleme {#haeufige-probleme}

In der Praxis zeigen Accessibility-Audits immer wieder dieselben Muster. Hier sind die häufigsten App-Barrierefreiheits-Probleme, die in Reviews auftauchen und in Audits auffallen:

**Unzureichende Touch-Target-Größen**

Dies ist nach wie vor der häufigste Befund in App-Audits. Icons ohne Label, Checkboxen mit einer Größe von 20 × 20 pt, oder dicht gepackte Listenelemente führen zu Fehltipps — und direkt zu negativen Reviews: "Die Buttons sind viel zu klein" ist eine der häufigsten Nutzerbeschwerden in App Stores. Laut einer Analyse von Deque Systems betreffen rund 35 % aller Accessibility-Befunde in mobilen Apps die Touch-Target-Größe.

**Fehlende oder falsche Alt-Texte**

Bilder ohne Textalternative sind für Screen-Reader-Nutzer unsichtbar. Noch problematischer sind funktionale Icons ohne Label — ein Bearbeiten-Icon ohne Text "Bearbeiten" ergibt im Screen Reader keine sinnvolle Ausgabe. In einer Studie von WebAIM fehlten über 60 % der Apps klare Alt-Text-Beschreibungen bei mindestens einem zentralen UI-Element.

**Unzureichender Farbkontrast**

Helles Grau auf Weißem Hintergrund sieht modern aus — ist aber für rund 300 Millionen Menschen mit Farbsehschwäche und für alle Nutzer in hellem Sonnenlicht kaum lesbar. Das Kontrastverhältnis lässt sich einfach messen, wird aber systematisch unterschätzt. Betroffen sind besonders Placeholder-Texte in Formularfeldern und sekundäre Textfarben.

**Kein Fokus-Management bei Modals und Overlays**

Wenn ein Modal geöffnet wird und der Tastaturfokus nicht auf das Modal gesetzt wird, können Screen-Reader-Nutzer nicht mit dem Modal interagieren. Sie "sehen" das Modal nicht. Gleichzeitig muss der Fokus nach dem Schließen des Modals an die auslösende Stelle zurückkehren.

**Fehlende semantische Struktur**

Custom UI-Elemente, die optisch wie Buttons aussehen, aber keine Accessibility-Role haben, werden von Screen Readern als "unbekanntes Element" oder einfach als Text vorgelesen — ohne den Hinweis, dass sie tippbar sind. Dasselbe gilt für eigene Tab-Bars, Slider oder Toggle-Switches, die ohne korrekte ARIA-Rollen oder native Accessibility-Eigenschaften implementiert wurden.

**Inhalte, die nur durch Gesten erreichbar sind**

Swipe-to-delete, Pull-to-refresh oder komplexe Multi-Touch-Gesten sind für Nutzer mit motorischen Einschränkungen oft nicht ausführbar. Jede Funktion, die über eine Geste erreichbar ist, sollte auch über einen alternativen Weg — etwa ein Kontextmenü oder einen expliziten Button — zugänglich sein.

**Keine dynamischen Accessibility-Announcements**

Wenn sich Inhalte dynamisch ändern — zum Beispiel beim Laden neuer Daten, beim Absenden eines Formulars, oder beim Erscheinen einer Fehlermeldung — müssen Screen Reader über diese Änderungen informiert werden. Fehlt diese Benachrichtigung, "sieht" der Screen-Reader-Nutzer die Änderung nicht.

---

## App-Accessibility testen: Tools und Methoden {#testen}

Der gute Einstieg in Accessibility-Tests kostet nichts — sowohl iOS als auch Android liefern mächtige Werkzeuge direkt mit.

### Automatisierte Tools

**Accessibility Inspector (iOS/macOS)**

Das Xcode-eigene Tool Accessibility Inspector scannt deine App auf häufige Accessibility-Probleme und gibt direkte Hinweise auf betroffene Elemente. Du kannst den Inspector im Simulator laufen lassen und so ohne physisches Gerät erste Befunde sammeln. Der Audit-Modus listet Probleme kategorisiert auf und schlägt Korrekturen vor.

**Accessibility Scanner (Android)**

Googles Accessibility Scanner ist eine App, die du auf einem physischen Android-Gerät oder im Emulator installierst und dann über deine eigene App laufen lässt. Sie analysiert Touch-Target-Größen, Kontrastverhältnisse und fehlende Content Descriptions in Echtzeit.

**axe DevTools Mobile**

axe DevTools von Deque Systems ist das Accessibility-Testing-Tool der Wahl für professionelle Teams. Es integriert sich in den CI/CD-Prozess und kann Accessibility-Tests automatisch bei jedem Build ausführen. Die kostenlose Version deckt bereits einen Großteil der WCAG-2.1-AA-Kriterien ab.

**Colour Contrast Analyser**

Das kostenlose Desktop-Tool von TPGi prüft Farbpaare auf ihr Kontrastverhältnis und zeigt an, ob WCAG 2.1 AA oder AAA erreicht wird. Unverzichtbar beim Design-Review neuer UI-Elemente.

### Manuelle Tests mit Screen Readern

Automatisierte Tools decken nach Expertenschätzungen nur rund 30 bis 40 % aller Accessibility-Probleme auf. Der entscheidende Schritt ist daher der manuelle Test mit dem Screen Reader.

**VoiceOver (iOS)**

VoiceOver aktivierst du unter Einstellungen > Bedienungshilfen > VoiceOver oder durch dreimaliges Drücken der Seitentaste. Navigiere durch deine App ausschließlich mit VoiceOver — achte darauf, ob alle Inhalte vorgelesen werden, ob die Reihenfolge logisch ist und ob interaktive Elemente klar als solche kommuniziert werden.

**TalkBack (Android)**

TalkBack findest du unter Einstellungen > Bedienungshilfen > TalkBack. Schalte es ein und versuche, typische User Journeys in deiner App ohne Bildschirm zu durchlaufen — stell dir vor, du hörst nur, was TalkBack vorliest.

### Nutzertests mit betroffenen Personen

Der wertvollste Test ist nach wie vor ein Nutzungstest mit Menschen, die assistive Technologien im Alltag einsetzen. Organisationen wie die DBSV (Deutscher Blinden- und Sehbehindertenverband) oder der VdK vermitteln Kontakte. Remote-Testing über Plattformen wie UserZoom oder Maze ist für erste Runden ausreichend.

### Accessibility in den CI/CD-Prozess integrieren

Accessibility-Tests sollten kein einmaliges Audit sein, sondern kontinuierlich in den Entwicklungsprozess eingebettet werden. Eine sinnvolle Reihenfolge:

1. **Design-Phase**: Kontraste prüfen, Touch-Target-Größen definieren, Fokusreihenfolge im Prototyp festlegen
2. **Entwicklungsphase**: Native Accessibility-APIs verwenden, Screen-Reader-Tests für neue Features vor dem Merge
3. **QA-Phase**: Automatisierter Accessibility-Scan als Teil der Test-Suite
4. **Release-Phase**: Accessibility-Regression-Tests, Vergleich mit vorherigem Build

---

## Barrierefreiheit und App Store Bewertungen {#store-bewertungen}

Die Verbindung zwischen Accessibility und App Store Ratings ist gut belegt, wird aber von vielen Teams unterschätzt. Sie wirkt auf mehreren Ebenen gleichzeitig.

**Direkte Auswirkung: Weniger frustrationsbedingte Abbrüche**

Accessibility-Mängel erzeugen Frustration — und Frustration führt zu negativen Reviews. "Die App ist unzugänglich", "Buttons sind viel zu klein", "Kann den Text nicht lesen" sind direkte Review-Kommentare, die mit Accessibility zusammenhängen. Studien zeigen, dass Nutzer mit eingeschränkter Sehkraft oder motorischen Einschränkungen eine um rund **30 % höhere Abbruchrate** bei nicht-barrierefreien Apps haben als der Durchschnitt.

**Indirekte Auswirkung: Bessere UX für alle Nutzer**

Viele Accessibility-Maßnahmen verbessern die allgemeine Nutzererfahrung. Größere Touch-Targets reduzieren Fehltipps für alle Nutzer. Klarere Fehlermeldungen helfen jedem beim Ausfüllen von Formularen. Höhere Kontraste machen die App bei Sonnenlicht lesbarer. Diese Verbesserungen schlagen sich in positiveren Reviews nieder — auch von Nutzern ohne Behinderung.

**Algorithmische Behandlung im App Store**

Apple hat Barrierefreiheit als Qualitätsfaktor in seinen Review-Richtlinien verankert. Apps, die grundlegende Accessibility-Anforderungen nicht erfüllen, können im Review-Prozess abgelehnt werden. Darüber hinaus belohnen beide Plattformen Apps, die ihre jeweiligen Accessibility-APIs korrekt implementieren, mit besserer Sichtbarkeit in den Bedienungshilfen-Einstellungen und in redaktionellen Features.

**"App des Tages" und Featured-Chancen**

Apple betont in seinen App-Store-Richtlinien explizit, dass Apps, die Bedienungshilfen-Features hervorragend unterstützen, als Featured-Kandidaten für die "Zugänglichkeit"-Kategorie in Betracht kommen. Eine App, die VoiceOver, Dynamic Type und Switch Control tadellos unterstützt, hat damit einen direkten Kanal in Apples redaktionelle Auswahl.

**Zahlen zur Einordnung**

Eine Analyse von über 500 Apps in verschiedenen Kategorien durch das Barrierefreiheits-Beratungsunternehmen Fable ergab, dass Apps mit hohem Accessibility-Score im Durchschnitt **0,4 Sterne besser** bewertet wurden als direkte Konkurrenten mit niedrigem Score — bei vergleichbarem Funktionsumfang. Das ist der Unterschied zwischen 4,0 und 4,4 Sternen — und damit der Unterschied zwischen Durchschnitt und Top-Platzierung.

Für eine detaillierte Betrachtung, wie sich Bewertungen direkt auf Downloads und Conversion auswirken, empfehle ich unseren Artikel [App Store Bewertung verbessern: So erreichst du 4,5 Sterne](/blog/app-store-bewertung-verbessern).

---

![Accessibility-Checkliste: Die wichtigsten Prüfpunkte für mobile Apps](/assets/blog/app-barrierefreiheit-checkliste.svg)

---

## Fazit {#fazit}

App-Barrierefreiheit ist 2025 keine optionale Ergänzung mehr — sie ist gesetzliche Pflicht, Qualitätsmerkmal und messbarer Wettbewerbsvorteil in einem. Die drei wichtigsten Takeaways:

1. **EAA und WCAG 2.1 AA sind der neue Pflichtstandard.** Seit dem 28. Juni 2025 gilt der European Accessibility Act für private Unternehmen in der EU. Wer Apps als Teil einer digitalen Dienstleistung betreibt, muss die Anforderungen der EN 301 549 erfüllen — das bedeutet in der Praxis WCAG 2.1 Level AA als Mindeststandard.

2. **Accessibility verbessert die App-Qualität für alle Nutzer.** Touch-Targets, Kontraste, klare Fehlermeldungen und konsistente Navigation kommen nicht nur den 17 % der Nutzer mit Behinderung zugute — sie verbessern die Gesamterfahrung und schlagen sich direkt in besseren Store-Bewertungen nieder.

3. **Frühes Testen ist kostengünstiger als spätes Nachrüsten.** Accessibility-Tests mit kostenlosen Tools wie Accessibility Inspector oder TalkBack kosten wenig Zeit und identifizieren die meisten kritischen Probleme. Wer Barrierefreiheit erst nach dem Launch nachträglich einbaut, zahlt ein Vielfaches.

Barrierefreiheit ist einer der Hebel, den App-Care bei der kontinuierlichen Qualitätssicherung systematisch betrachtet — gemeinsam mit Performance, Retention und Store-Optimierung. Wenn du wissen willst, wie deine App in dieser Dimension abschneidet, wirf einen Blick auf unsere [Leistungen](/leistungen).

---

## FAQ {#faq}

**Was bedeutet App-Barrierefreiheit?**

App-Barrierefreiheit — auch Accessibility oder a11y genannt — bezeichnet das Prinzip, dass eine mobile Anwendung von allen Menschen nutzbar ist, unabhängig von körperlichen, sensorischen oder kognitiven Einschränkungen. Das umfasst die Unterstützung von Screen Readern (VoiceOver, TalkBack), ausreichende Kontrastverhältnisse, ausreichend große Touch-Targets und klare, verständliche Sprache. Barrierefreiheit kommt nicht nur Menschen mit dauerhafter Behinderung zugute, sondern auch Nutzern mit temporären Einschränkungen wie einem gebrochenen Arm oder hellem Sonnenlicht.

**Welche gesetzlichen Anforderungen gelten für App-Barrierefreiheit in Deutschland?**

Seit dem 28. Juni 2025 gilt in Deutschland das Barrierefreiheitsstärkungsgesetz (BFSG), das den European Accessibility Act (EAA) in nationales Recht umsetzt. Es verpflichtet private Unternehmen, die digitale Produkte oder Dienstleistungen in der EU anbieten, zur Einhaltung der EN 301 549 — was in der Praxis WCAG 2.1 Level AA als Mindeststandard bedeutet. Ausgenommen sind nur Kleinstunternehmen mit weniger als zehn Mitarbeitenden und einem Jahresumsatz unter zwei Millionen Euro. Bei Verstößen drohen Bußgelder und — durch das Recht zur Verbandsklage — Klagen von Behindertenverbänden.

**Wie teste ich meine App auf Barrierefreiheit?**

Der einfachste Einstieg sind die plattformeigenen Tools: Accessibility Inspector in Xcode (iOS) und Accessibility Scanner von Google (Android) decken die häufigsten Probleme automatisch auf. Für tiefere Analysen eignet sich axe DevTools Mobile von Deque Systems, das sich in CI/CD-Prozesse integrieren lässt. Unverzichtbar ist darüber hinaus der manuelle Test mit Screen Readern: VoiceOver auf iOS und TalkBack auf Android. Automatisierte Tools decken etwa 30 bis 40 % aller Accessibility-Probleme auf — der Rest erfordert manuelle oder nutzerzentrierte Tests. Ergänzend empfehlen sich Nutzertests mit tatsächlichen Betroffenen, die assistive Technologien im Alltag einsetzen.

**Verbessert Barrierefreiheit die App Store Bewertung?**

Ja, und zwar auf direktem und indirektem Weg. Direkt reduziert Barrierefreiheit Frustration bei Nutzern mit Einschränkungen, die sonst mit negativen Reviews reagieren. Indirekt verbessern Accessibility-Maßnahmen wie größere Touch-Targets, höhere Kontraste und klarere Fehlermeldungen die allgemeine Nutzererfahrung — was sich in positiveren Bewertungen aller Nutzer niederschlägt. Analysen zeigen, dass Apps mit hohem Accessibility-Score im Schnitt rund 0,4 Sterne besser bewertet werden als Konkurrenten mit vergleichbarem Funktionsumfang, aber schlechter Barrierefreiheit. Zudem belohnen Apple und Google die korrekte Implementierung ihrer Accessibility-APIs mit höherer Sichtbarkeit.

---

<div class="not-prose my-8 rounded-xl bg-brand-950 p-8 text-center">
  <p class="text-lg font-semibold text-white mb-2">App-Qualität ganzheitlich verbessern</p>
  <p class="text-brand-200 mb-4">App-Care begleitet dich bei der kontinuierlichen Qualitätssicherung — von Accessibility-Audits bis zur technischen Umsetzung.</p>
  <a href="/leistungen" class="btn-primary">Leistungen ansehen</a>
</div>
