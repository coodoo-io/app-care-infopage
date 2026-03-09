---
title: "Mobile App KPIs: Die 10 wichtigsten Kennzahlen für deinen App-Erfolg"
description: "Welche KPIs wirklich wichtig sind, wie du sie misst, was gute Benchmark-Werte sind und wie du sie aktiv verbesserst. Ein praxisnaher Guide für App-Betreiber."
pubDate: 2026-01-15
author: "Markus Kühle"
category: "KPI & Analytics"
---

# Mobile App KPIs: Die 10 wichtigsten Kennzahlen für deinen App-Erfolg

Deine App ist live — aber wie weißt du, ob sie wirklich erfolgreich ist? App-Downloads allein sagen wenig. Eine App kann hunderttausend Mal heruntergeladen worden sein und trotzdem scheitern, weil die Nutzer nach dem ersten Start nicht wiederkommen, die Bewertungen sinken oder Crashes unbemerkt Nutzer vertreiben.

Die eigentliche Geschichte steckt in den KPIs — den Kennzahlen, die zeigen, ob deine App wächst, stagniert oder still verliert.

Dieser Guide zeigt dir die 10 wichtigsten KPIs für Mobile Apps: was sie bedeuten, wo du sie findest, welche Werte gut sind — und was du tun kannst, wenn sie es nicht sind.

![10 App-KPIs nach Kategorie: Engagement, Stabilität, Wachstum, Store & Umsatz](/assets/blog/kpi-kategorien.svg)

<div class="not-prose my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
  <p class="text-sm font-semibold text-gray-700 mb-3">Inhaltsverzeichnis</p>
  <ol class="list-decimal list-inside space-y-1.5 text-sm text-gray-700 m-0 p-0">
    <li><a href="#1-monthly-active-users-mau" class="text-brand-600 hover:underline">Monthly Active Users (MAU)</a></li>
    <li><a href="#2-stickiness-daumau" class="text-brand-600 hover:underline">Stickiness (DAU/MAU)</a></li>
    <li><a href="#3-crash-rate" class="text-brand-600 hover:underline">Crash Rate</a></li>
    <li><a href="#4-app-store-rating" class="text-brand-600 hover:underline">App Store Rating</a></li>
    <li><a href="#5-retention-rate-day-7" class="text-brand-600 hover:underline">Retention Rate (Day 7)</a></li>
    <li><a href="#6-average-session-length" class="text-brand-600 hover:underline">Average Session Length</a></li>
    <li><a href="#7-churn-rate-subscriptions" class="text-brand-600 hover:underline">Churn Rate</a></li>
    <li><a href="#8-average-revenue-per-user-arpu" class="text-brand-600 hover:underline">Average Revenue Per User (ARPU)</a></li>
    <li><a href="#9-crash-freie-sessions" class="text-brand-600 hover:underline">Crash-freie Sessions</a></li>
    <li><a href="#10-app-store-conversion-rate" class="text-brand-600 hover:underline">App Store Conversion Rate</a></li>
    <li><a href="#fazit-welche-kpis-sind-am-wichtigsten" class="text-brand-600 hover:underline">Fazit: Welche KPIs sind am wichtigsten?</a></li>
  </ol>
</div>

---

## 1. Monthly Active Users (MAU)

**Was es ist:** Die Anzahl einzigartiger Nutzer, die deine App in einem Monat mindestens einmal geöffnet haben. MAU ist die Grundkennzahl für die Reichweite deiner App — sie zeigt, wie groß deine aktive Nutzerbasis wirklich ist.

**Wo du es findest:** Firebase Analytics → Analytics Dashboard → Aktive Nutzer (Zeitraum: 28 Tage oder kalendermonatlich)

**Warum es wichtig ist:** Downloads sind eine Einmalkennzahl. MAU ist die lebende Nutzerbasis — der Wert, der zeigt, ob deine App dauerhaft relevant ist. Investoren, Partner und interne Stakeholder orientieren sich fast immer am MAU-Trend, nicht an der Gesamtzahl der Installationen.

**Guter Benchmark:** Ein gesundes Wachstum liegt bei **5–10 % pro Monat**. Unter 2 % ist Stagnation, Rückgang ist ein Warnsignal. Absolute Zahlen hängen stark vom Markt und der Zielgruppe ab — entscheidend ist der Trend, nicht die Größe.

**Wie du es verbesserst:**
- Push-Benachrichtigungen gezielt einsetzen — nicht spammen, sondern relevante Trigger nutzen (neuer Content, wichtige Updates)
- Re-Engagement-Kampagnen für Nutzer, die 14+ Tage inaktiv waren
- Onboarding verbessern, damit neue Nutzer den Kern-Value schnell erleben

---

## 2. Stickiness (DAU/MAU)

**Was es ist:** Das Verhältnis von Daily Active Users (DAU) zu Monthly Active Users (MAU), ausgedrückt in Prozent. Stickiness misst, wie regelmäßig deine monatlich aktiven Nutzer die App tatsächlich nutzen.

**Formel:** Stickiness = DAU / MAU × 100

**Wo du es findest:** Firebase Analytics → Aktive Nutzer (täglich und monatlich), dann manuell berechnen oder im Analytics-Dashboard als "DAU/MAU Ratio" auslesen

**Warum es wichtig ist:** Ein hoher MAU sagt noch nichts darüber aus, ob Nutzer täglich oder nur einmal im Monat kommen. Stickiness zeigt die echte Nutzungstiefe. Eine App mit 50.000 MAU und 20 % Stickiness hat täglich ~10.000 aktive Nutzer — eine App mit 5 % Stickiness nur 2.500, obwohl die MAU-Zahl identisch ist.

**Guter Benchmark:**
- **20 %+** gilt als gut für die meisten App-Typen
- **50 %+** erreichen Social Apps und tägliche Utility-Apps (Wetter, Kalender, Nachrichten)
- Unter 10 % deutet auf ein Engagement-Problem hin

**Wie du es verbesserst:**
- Tägliche Nutzungsanreize schaffen (Streaks, tägliche Inhalte, Benachrichtigungen mit echtem Mehrwert)
- Die "Aha-Momente" der App früher im Onboarding zeigen — Nutzer, die den Kernwert schnell verstehen, kommen öfter zurück

---

## 3. Crash Rate

**Was es ist:** Der Prozentsatz der App-Sessions, in denen mindestens ein Absturz aufgetreten ist. Die Crash Rate ist das wichtigste Stabilitäts-KPI und direkt mit Store-Bewertungen und Nutzerretention verknüpft.

**Wo du es findest:** Firebase Crashlytics → Dashboard → Crash Rate (nach Plattform filtern: iOS / Android separat auswerten)

**Warum es wichtig ist:** Jeder Crash ist ein Nutzer, der frustriert die App verlässt — und möglicherweise eine schlechte Bewertung hinterlässt. Google Play bewertet Apps mit einer Crash Rate über 1,09 % automatisch als "schlecht" und kann die Sichtbarkeit im Store einschränken. Mehr dazu in unserem [ausführlichen Guide zur Crash Rate](/blog/was-ist-eine-gute-crash-rate).

**Guter Benchmark:**
- **Unter 0,5 %** ist sehr gut (über 99,5 % crash-freie Sessions)
- **Unter 1 %** ist das Mindestziel
- **Über 2 %** ist kritisch und sollte sofort adressiert werden

**Wie du es verbesserst:**
- Crashlytics-Alerts einrichten für neue Crash-Typen und Raten-Spikes
- Crashes nach betroffenen Sessions priorisieren, nicht nach gefühltem Schweregrad
- Staged Rollouts nutzen: neue Releases auf 5–10 % der Nutzer ausrollen und 24 h beobachten

---

## 4. App Store Rating

**Was es ist:** Die durchschnittliche Nutzerbewertung deiner App im Apple App Store und Google Play Store, typischerweise auf einer Skala von 1 bis 5 Sternen.

**Wo du es findest:** App Store Connect → Ratings & Reviews / Google Play Console → Ratings

**Warum es wichtig ist:** Das Store-Rating beeinflusst drei kritische Faktoren gleichzeitig: das **Store-Ranking** (Apps mit höherem Rating werden besser platziert), die **Conversion Rate** (Nutzer installieren eher Apps mit guten Bewertungen) und das **Vertrauen** (besonders bei B2B-Apps ein entscheidender Faktor im Entscheidungsprozess). Ein Rating unter 4,0 kostet messbar Downloads.

**Guter Benchmark:**
- **4,5+** ist stark und wettbewerbsfähig
- **4,0–4,4** ist akzeptabel, aber mit Luft nach oben
- **Unter 4,0** ist ein Problem, das aktiv angegangen werden muss

**Wie du es verbesserst:**
- Aktiv auf Bewertungen antworten — sowohl auf negative (zeigt, dass du zuhörst) als auch auf positive (stärkt die Community)
- Nutzer zu einem guten Zeitpunkt um Bewertungen bitten: nach einem erfolgreichen Abschluss, nicht beim Start der App
- Kritische Bugs schnell beheben — viele 1-Stern-Bewertungen entstehen nach schlechten Update-Erlebnissen

---

## 5. Retention Rate (Day 7)

**Was es ist:** Der Prozentsatz der Nutzer, die nach 7 Tagen noch aktiv sind. Retention ist das Herzstück jeder App-Metrik-Analyse, weil sie zeigt, ob neue Nutzer wirklich einen Wert in der App finden — oder nur einmal starten und verschwinden.

**Wo du es findest:** Firebase Analytics → Bindung → Nutzer-Kohorten (Day 1, Day 7, Day 30 auswählbar)

**Warum es wichtig ist:** Die Akquisition neuer Nutzer ist teuer. Wenn 80 % davon nach einer Woche weg sind, ist Wachstum durch Marketing eine undichte Wanne füllen. Retention-Probleme können nicht durch mehr Marketing gelöst werden — sie erfordern ein besseres Produkt.

**Guter Benchmark:**
- **25 %+ Day-7-Retention** gilt als gut
- **40 %+** ist stark
- **Unter 15 %** ist problematisch und deutet auf ein Onboarding- oder Produkt-Problem hin

**Day-1 vs. Day-7 vs. Day-30:** Diese drei Werte gemeinsam erzählen die Geschichte. Ein hoher Day-1-Wert mit schnell sinkendem Day-7-Wert deutet auf gutes Onboarding, aber schwachen Kern-Value. Umgekehrt deutet ein niedriger Day-1 auf Onboarding-Probleme hin.

**Wie du es verbesserst:**
- Onboarding straffen: Nutzer sollen den Kernwert der App innerhalb der ersten Session erleben
- Personalisierung früh einsetzen — personalisierte Erfahrungen erhöhen die Retention messbar
- Re-Engagement nach 3–5 Tagen Inaktivität mit gezielten Push-Notifications

---

## 6. Average Session Length

**Was es ist:** Die durchschnittliche Dauer einer App-Nutzungssitzung — von der Öffnung bis zum Schließen der App.

**Wo du es findest:** Firebase Analytics → Engagement → Durchschnittliche Interaktionsdauer

**Warum es wichtig ist:** Die Session Length muss im Kontext des App-Typs bewertet werden. Eine kurze Session ist kein Problem per se — eine Banking-App, die in 45 Sekunden die gewünschte Information liefert, hat exzellente UX. Problematisch ist ein Rückgang der Session Length über Zeit, der auf nachlassendes Engagement hindeutet.

**Guter Benchmark nach App-Typ:**
- **Utility-Apps** (Wetter, Rechner, Banking): 1–3 Minuten — kurz und effizient ist das Ziel
- **Content-Apps** (News, Streaming, Social): 5–15 Minuten oder länger
- **Gaming-Apps**: 10–30 Minuten je nach Genre

**Wie du es verbesserst:**
- Ladezeiten reduzieren — jede Sekunde Ladezeit kostet Session-Tiefe
- Content-Empfehlungen und Discovery-Features verbessern (für Content-Apps)
- Gamification und Flow-Elemente für Apps, bei denen längere Sessions erwünscht sind

---

## 7. Churn Rate (Subscriptions)

**Was es ist:** Der Prozentsatz der aktiven Abonnenten, die ihr Abo in einem definierten Zeitraum kündigen. Für Apps mit Subscription-Modell ist die Churn Rate eine der geschäftskritischsten Kennzahlen überhaupt.

**Formel:** Churn Rate = Verlorene Abonnements / Aktive Abonnements zu Periodenbeginn × 100

**Wo du es findest:** App Store Connect → Abonnements / Google Play Console → Abonnements / RevenueCat (empfohlen für plattformübergreifende Auswertung)

**Warum es wichtig ist:** Churn frisst Wachstum. Eine App, die 10 % neue Abonnenten gewinnt, aber 12 % verliert, schrumpft — auch wenn die Akquisitionszahlen positiv aussehen. Churn zu halbieren hat oft mehr wirtschaftliche Wirkung als die Neukundengewinnung zu verdoppeln.

**Guter Benchmark:**
- **Unter 5 % monatlich** ist ein gutes Ziel für Mobile Apps
- **Unter 2 % monatlich** ist stark
- **Über 10 %** ist kritisch und erfordert sofortiges Handeln

**Wie du es verbesserst:**
- Exit-Surveys implementieren: warum kündigen Nutzer?
- Offboarding-Flow vor der Kündigung: Pause-Option anbieten statt direkter Kündigung
- Regelmäßige Feature-Updates kommunizieren — viele Nutzer kündigen, weil sie keinen neuen Wert wahrnehmen

---

## 8. Average Revenue Per User (ARPU)

**Was es ist:** Der durchschnittliche Umsatz pro aktivem Nutzer in einem definierten Zeitraum (meist monatlich). ARPU verbindet Nutzungsdaten mit wirtschaftlicher Performance.

**Formel:** ARPU = Gesamtumsatz / Anzahl aktiver Nutzer

**Wo du es findest:** App Store Connect / Google Play Console → Finanzen, oder in RevenueCat als direkte Kennzahl

**Warum es wichtig ist:** ARPU allein sagt wenig — aber in Kombination mit dem Cost Per Install (CPI) zeigt er, ob dein Geschäftsmodell wirtschaftlich tragfähig ist. Wenn der CPI deinen ARPU übersteigt, verlierst du mit jedem neuen Nutzer Geld. Wenn dein ARPU steigt, obwohl die Nutzerzahl stagniert, kann das ein Zeichen besserer Monetarisierung sein — oder sinkender Qualität der verbliebenen Nutzer.

**Wie du es verbesserst:**
- Preisstufen einführen oder testen (monatlich vs. jährlich, Basis vs. Premium)
- In-App-Käufe für Nutzer testen, die kein Abo abschließen wollen
- Upselling zum richtigen Zeitpunkt: wenn Nutzer einen Erfolg erlebt haben, nicht direkt beim Onboarding

---

## 9. Crash-freie Sessions

**Was es ist:** Der Prozentsatz aller Sessions, in denen kein Absturz aufgetreten ist — der positive Umkehrwert der Crash Rate.

**Formel:** Crash-freie Sessions = 100 % − Crash Rate

**Wo du es findest:** Firebase Crashlytics → Dashboard → "Crash-freie Nutzer" / "Crash-freie Sessions" (direkt als Kennzahl angezeigt)

**Warum es wichtig ist:** Für Stakeholder-Berichte, Management Summaries und Kundenpräsentationen ist die crash-freie Rate oft kommunizierbarer als die Crash Rate. "Unsere App läuft in 99,6 % aller Nutzungssessions fehlerfrei" ist klarer als "wir haben 0,4 % Crash Rate". Der Inhalt ist identisch — die Perspektive ist positiver.

**Guter Benchmark:**
- **99,5 %+** ist sehr gut
- **99,0 %+** ist das Mindestziel
- **Unter 98 %** ist kritisch

---

## 10. App Store Conversion Rate

**Was es ist:** Der Prozentsatz der Nutzer, die auf die Store-Seite deiner App gelangt sind und sie tatsächlich installiert haben.

**Formel:** Conversion Rate = Installationen / Store-Seitenbesuche × 100

**Wo du es findest:** App Store Connect → Analytics → Impressionen vs. Downloads / Google Play Console → Store-Analyse → Store-Eintragsseiten

**Warum es wichtig ist:** Die Conversion Rate ist der Hebel zwischen Sichtbarkeit und tatsächlichem Wachstum. Eine App, die gut im Store gefunden wird (hohe Impressionen), aber schlecht konvertiert, hat ein Vertrauens- oder Darstellungsproblem. Verbesserungen an der Store-Page kosten keine Akquisitionskosten — sie machen vorhandenen Traffic effizienter.

**Guter Benchmark:**
- **2–5 %** ist typisch für die meisten Apps
- **Über 5 %** ist stark
- **Unter 1 %** deutet auf ein Store-Listing-Problem hin (Screenshots, Texte, Bewertungen)

**Wie du es verbesserst:**
- App-Preview-Videos einbinden — sie erhöhen die Conversion Rate messbar
- Screenshots optimieren: der erste Screenshot ist entscheidend, er muss den Kernwert sofort kommunizieren
- Keyword-Optimierung im App-Titel und der Kurzbeschreibung für bessere Sichtbarkeit

---

![Benchmark-Richtwerte für die 4 wichtigsten App-KPIs](/assets/blog/kpi-benchmarks.svg)

---

## Fazit: Welche KPIs sind am wichtigsten?

Es gibt keine universelle Antwort — der richtige KPI-Mix hängt von deinem App-Typ, deinem Geschäftsmodell und der aktuellen Entwicklungsphase ab. Trotzdem gibt es vier Kennzahlen, die für fast jede App die höchste Aussagekraft haben:

1. **MAU-Entwicklung** — wächst deine aktive Nutzerbasis oder schrumpft sie?
2. **Crash Rate** — ist deine App technisch stabil genug für eine gute Nutzererfahrung?
3. **Retention Rate (Day 7)** — finden neue Nutzer genug Wert, um wiederzukommen?
4. **App Store Rating** — vertrauen neue Nutzer deiner App, bevor sie sie installieren?

Diese vier KPIs zusammen geben dir ein klares Bild davon, ob deine App in einem gesunden Zustand ist oder wo du als Nächstes ansetzen solltest.

Der häufigste Fehler: KPIs einmal ansehen und dann ignorieren. Aussagekräftig werden sie erst im Trend — im Vergleich zum Vormonat, zur letzten Version, zu saisonalen Mustern. Ein monatliches Monitoring-Ritual von 30–60 Minuten, das alle zehn Kennzahlen systematisch durchgeht, ist der Unterschied zwischen reaktivem Feuerlöschen und aktiver App-Steuerung.

---

## Häufig gestellte Fragen

**Welche KPIs sind für eine neue App am wichtigsten?**

In der frühen Phase sind Retention Rate (Day 1, Day 7) und Crash Rate am aussagekräftigsten. Sie zeigen, ob das Produkt grundsätzlich funktioniert und ob Nutzer einen Wert darin sehen. MAU und Store Rating bauen sich erst über Zeit auf und sind in den ersten Wochen noch wenig aussagekräftig.

**Wie oft sollte ich meine App-KPIs prüfen?**

Täglich nach Releases (auf Crash-Spikes prüfen), wöchentlich für Trends, monatlich für den vollständigen KPI-Überblick inklusive Benchmarkvergleich. Ein monatlicher Management Summary, der alle relevanten Kennzahlen zusammenfasst und bewertet, ist die effizienteste Routine für App-Betreiber.

**Wo finde ich alle KPIs an einem Ort?**

Firebase Analytics und Crashlytics liefern die meisten Nutzungs- und Stabilitätsdaten. App Store Connect und Google Play Console ergänzen Store-spezifische Metriken. Für Subscription-Umsätze empfiehlt sich RevenueCat. Ein Tool, das all diese Quellen zusammenführt und monatlich auswertet, ist das App-Care Cockpit.

**Was ist der Unterschied zwischen MAU und DAU?**

MAU (Monthly Active Users) zählt einzigartige Nutzer, die die App im Monat mindestens einmal geöffnet haben. DAU (Daily Active Users) ist dasselbe auf Tagesbasis. Das Verhältnis DAU/MAU ergibt die Stickiness — ein Maß für die Nutzungsregelmäßigkeit.

App-Care überwacht alle zehn KPIs jeden Monat für dich, analysiert Auffälligkeiten und liefert konkrete Handlungsempfehlungen. [Mehr über App-Care erfahren →](/leistungen)
