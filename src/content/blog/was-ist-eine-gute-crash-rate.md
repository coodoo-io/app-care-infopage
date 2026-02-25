---
title: "Was ist eine gute Crash Rate? Der vollständige Guide für Mobile Apps"
description: "Ab wann ist eine Crash Rate kritisch? Benchmarks, Google Play Schwellenwerte, Firebase Crashlytics Navigation und ein Schritt-für-Schritt-Plan — der vollständige Guide."
pubDate: 2026-02-01
author: "Markus Kühle"
category: "Performance"
---

Jeder Absturz deiner App ist eine Unterbrechung im Alltag deiner Nutzer. Ein Crash zum falschen Zeitpunkt — beim Checkout, beim Speichern von Daten, mitten im Onboarding — kann Nutzer dauerhaft verlieren. Studien zeigen: Über 80 % der App-Nutzer geben einer App nach ein bis zwei negativen Erfahrungen keine weitere Chance.

Gleichzeitig ist eine Crash Rate von null unrealistisch. Das Ziel ist keine perfekte App, sondern eine kontrolliert niedrige, aktiv überwachte Fehlerquote — und schnelles Reagieren, wenn sie steigt.

Dieser Guide erklärt, was eine Crash Rate ist, welche Werte gut oder kritisch sind, wie du sie misst und wie du systematisch dagegen vorgehst.

<div class="not-prose my-6 rounded-xl border border-brand-200 bg-brand-50 p-6">
  <p class="text-sm font-semibold text-brand-700 mb-3">Das Wichtigste in Kürze</p>
  <ul class="space-y-1.5 text-sm text-brand-900 list-none m-0 p-0">
    <li>Sehr gute Crash Rate: unter 0,5 % (über 99,5 % crash-freie Sessions)</li>
    <li>Google Play markiert Apps über 1,09 % als "schlecht" — mit Sichtbarkeitsverlust im Store</li>
    <li>iOS und Android haben typischerweise unterschiedliche Crash Rates — immer separat auswerten</li>
    <li>Das wichtigste Monitoring-Tool: Firebase Crashlytics (kostenlos)</li>
    <li>Crashes nach Häufigkeit priorisieren, nicht nach gefühltem Schweregrad</li>
  </ul>
</div>

<div class="not-prose my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
  <p class="text-sm font-semibold text-gray-700 mb-3">Inhaltsverzeichnis</p>
  <ol class="list-decimal list-inside space-y-1.5 text-sm text-gray-700 m-0 p-0">
    <li><a href="#was-ist-eine-crash-rate" class="text-brand-600 hover:underline">Was ist eine Crash Rate?</a></li>
    <li><a href="#benchmark-werte-was-ist-eine-gute-crash-rate" class="text-brand-600 hover:underline">Benchmark-Werte im Überblick</a></li>
    <li><a href="#google-play-und-app-store-was-passiert-bei-schlechten-werten" class="text-brand-600 hover:underline">Google Play und App Store Auswirkungen</a></li>
    <li><a href="#ios-vs-android-warum-die-werte-meist-unterschiedlich-sind" class="text-brand-600 hover:underline">iOS vs. Android: Unterschiedliche Werte</a></li>
    <li><a href="#branchenspezifische-crash-rate-benchmarks" class="text-brand-600 hover:underline">Branchenspezifische Benchmarks</a></li>
    <li><a href="#wo-und-wie-du-deine-crash-rate-misst" class="text-brand-600 hover:underline">Wo und wie du deine Crash Rate misst</a></li>
    <li><a href="#anrs-vs-crashes-was-ist-der-unterschied" class="text-brand-600 hover:underline">ANRs vs. Crashes</a></li>
    <li><a href="#häufige-ursachen-für-hohe-crash-rates" class="text-brand-600 hover:underline">Häufige Ursachen</a></li>
    <li><a href="#crashes-priorisieren-welche-zuerst-beheben" class="text-brand-600 hover:underline">Crashes priorisieren</a></li>
    <li><a href="#schritt-für-schritt-so-senkst-du-eine-hohe-crash-rate" class="text-brand-600 hover:underline">Schritt-für-Schritt: Crash Rate senken</a></li>
    <li><a href="#crash-rate-monitoring-automatisieren" class="text-brand-600 hover:underline">Monitoring automatisieren</a></li>
    <li><a href="#häufig-gestellte-fragen" class="text-brand-600 hover:underline">Häufige Fragen</a></li>
  </ol>
</div>

---

## Was ist eine Crash Rate?

Die Crash Rate ist der Anteil der App-Sessions, in denen mindestens ein Absturz aufgetreten ist. Sie ist das meistgenutzte Stabilitäts-KPI im App-Monitoring.

**Formel:**

> Crash Rate = (Abgestürzte Sessions ÷ Alle Sessions) × 100

Ein konkretes Beispiel: Hat deine App in einem Monat 50.000 Sessions und 200 davon enden mit einem Crash, beträgt deine Crash Rate 0,4 % — das ist ein sehr guter Wert.

Zwei Dinge sind dabei wichtig zu verstehen:

- **Sessions, nicht Nutzer.** Ein Nutzer kann mehrere Sessions haben. Zählt man nach Nutzern statt Sessions, können dieselben Wiederholungs-Crashes die Rate verzerren. Crashlytics arbeitet standardmäßig mit Sessions.
- **Crashes, nicht Fehler.** Eine Crash Rate zählt nur vollständige Abstürze, bei denen die App unerwartet geschlossen wird. Abgefangene Exceptions, ANRs (App Not Responding) oder stille Fehler zählen separat.

### Crash-freie Sessions: Die positive Perspektive

Firebase Crashlytics zeigt parallel auch die **crash-freien Sessions** — den Umkehrwert der Crash Rate. Dieser Wert ist in Stakeholder-Berichten oft kommunizierbarer:

> Crash-freie Sessions = 100 % − Crash Rate

Eine App mit 0,4 % Crash Rate hat 99,6 % crash-freie Sessions. Für Management Summaries ist das der griffigere Wert: "Unsere App läuft in 99,6 % aller Nutzungssessions fehlerfrei."

---

## Benchmark-Werte: Was ist eine gute Crash Rate?

Es gibt keinen offiziellen Standard, aber in der Industrie haben sich folgende Richtwerte etabliert:

| Bewertung | Crash Rate | Crash-freie Sessions |
|---|---|---|
| Sehr gut | < 0,5 % | > 99,5 % |
| Gut | 0,5 % – 1 % | 99 % – 99,5 % |
| Akzeptabel | 1 % – 2 % | 98 % – 99 % |
| Kritisch | > 2 % | < 98 % |

![Crash Rate Bewertungsskala von sehr gut bis kritisch](/assets/blog/crash-rate-skala.svg)

### Warum < 0,5 % das eigentliche Ziel ist

Der Bereich 1–2 % klingt klein, hat aber spürbare Auswirkungen. Bei 100.000 monatlichen Sessions bedeutet 1 % Crash Rate: **1.000 Nutzungssessions mit Absturz pro Monat.** Das sind 1.000 Momente, in denen jemand frustriert die App verlässt — und möglicherweise eine Ein-Stern-Bewertung hinterlässt.

Apps im "Sehr gut"-Bereich verzeichnen statistisch deutlich bessere Store-Bewertungen, niedrigere Deinstallationsraten im ersten Monat und eine höhere langfristige Retention.

---

## Google Play und App Store: Was passiert bei schlechten Werten?

### Google Play: Automatische Abstrafung durch Android Vitals

Google Play erhebt Stabilitätsdaten direkt vom Android-Betriebssystem über Android Vitals. Der entscheidende Schwellenwert:

**Apps mit einer Crash Rate über 1,09 % werden von Google Play als "schlecht" eingestuft.**

Dieser Wert ist öffentlich dokumentiert und hat konkrete Konsequenzen:

- Die App kann in den Suchergebnissen schlechter gerankt werden
- Google Play kann eine Warnung anzeigen, bevor Nutzer die App installieren
- Die App kann aus "Featured"- und "Editor's Choice"-Bereichen ausgeschlossen werden
- Im Play Console Dashboard erscheint ein "Bad Behavior"-Flag unter Android Vitals

Wichtig: Google berechnet diese Rate auf Basis von **Nutzern über 28 Tage**, nicht Sessions wie Crashlytics. Die Werte können deshalb leicht abweichen. Der Google-Wert ist aber der, der über Store-Sichtbarkeit entscheidet.

### Apple App Store

Apple kommuniziert keine öffentlichen Schwellenwerte. Crashlytics-Daten fließen indirekt über das App Store Connect Dashboard ein — dort sieht man Crashes pro aktiven Nutzer. Kritischer ist ein anderer Effekt: Nutzerbewertungen auf iOS reagieren sehr schnell auf häufige Abstürze. Eine steigende Crash Rate korreliert fast immer mit sinkenden Ratings, was den organischen Download-Kanal schwächt.

---

## iOS vs. Android: Warum die Werte meist unterschiedlich sind

Es ist normal, dass iOS und Android deutlich unterschiedliche Crash Rates haben — selbst bei derselben App und demselben Code-Stand.

**Android:**
- Stark fragmentiertes Gerätespektrum (tausende Hardware-Varianten von Dutzenden Herstellern)
- Hersteller-Anpassungen des Betriebssystems (Samsung One UI, MIUI, ColorOS) verhalten sich unterschiedlich
- Größere Bandbreite bei RAM und Prozessorleistung — ältere Midrange-Geräte sind häufig Crash-Hotspots
- Häufigere, kleinteiligere OS-Updates

**iOS:**
- Sehr geringe Gerätevarianz (nur Apple-Hardware)
- OS-Updates erreichen schnell fast alle aktiven Geräte — ein neues iOS kann kurzfristig einen Crash-Spike auslösen, der sich nach wenigen Tagen wieder normalisiert
- Strengere Memory-Management-Regeln führen zu anderen Crash-Patterns als auf Android

**Faustregel:** Prüfe iOS und Android immer getrennt. Ein guter Gesamtwert kann einen kritischen Wert auf einer Plattform verdecken. Crashlytics hat dafür einen Platform-Switcher direkt im Dashboard.

---

## Branchenspezifische Crash Rate Benchmarks

Die Toleranz für Crashes variiert je nach App-Typ und Nutzungskontext erheblich:

| Branche / App-Typ | Empfohlener Zielwert | Begründung |
|---|---|---|
| Banking & Fintech | < 0,2 % | Sehr hohe Nutzererwartung, sensible Transaktionen |
| E-Commerce | < 0,3 % | Jeder Crash beim Checkout bedeutet direkten Umsatzverlust |
| Gaming | < 0,5 % | Crashes unterbrechen Flow-Zustände, hohe Absprungrate |
| Social / Content | < 0,5 % | Nutzer haben viele direkte Alternativen |
| B2B / Enterprise | < 1 % | Nutzer sind "gefangen", aber Support-Aufwand steigt stark |
| Utility / Tools | < 0,5 % | Vertrauen ist zentral, Crashes schaden dem Ruf dauerhaft |

---

## Wo und wie du deine Crash Rate misst

### Firebase Crashlytics (empfohlen)

Firebase Crashlytics ist das Standard-Tool für Mobile App Crash-Monitoring — kostenlos und direkt in Firebase integriert. So navigierst du zur Crash Rate:

1. Firebase Console öffnen → dein Projekt auswählen
2. Im linken Menü: **Crashlytics**
3. Oben rechts Zeitraum wählen (Empfehlung: letzter Monat für Monatsvergleich)
4. Wichtig: Den Filter auf **"Crashes"** lassen — nicht ANRs, das ist eine separate Metrik
5. Den **Platform-Switcher** nutzen: iOS und Android separat auswerten

<div class="not-prose my-8 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 text-center">
  <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Abbildung</p>
  <p class="text-gray-600 text-sm font-medium">Firebase Crashlytics Dashboard</p>
  <p class="text-gray-500 text-sm mt-1">Crash Rate Verlauf mit Zeitraum-Filter, Platform-Switcher (iOS/Android) und sortierter Top-Crashes-Liste nach betroffenen Sessions</p>
</div>

Die **Top Crashes-Liste** ist das Herzstück: Sie zeigt alle Crash-Typen sortiert nach Häufigkeit (betroffene Sessions in Prozent), Trend und betroffenen Geräten. Das ist der Ausgangspunkt für jede Analyse.

### Google Play Console: Android Vitals

Zusätzlich zu Crashlytics lohnt sich ein Blick in die **Google Play Console → Android Vitals**. Dort siehst du die Crash Rate, die Google für die Store-Bewertung heranzieht — und erkennst sofort, ob du im "Bad Behavior"-Bereich bist.

---

## ANRs vs. Crashes: Was ist der Unterschied?

Firebase Crashlytics unterscheidet zwei Arten von Stabilitätsproblemen, die oft verwechselt werden:

| Metrik | Was passiert | Typische Ursache |
|---|---|---|
| **Crash** | App schließt unerwartet | Unbehandelte Exception, Null Pointer, Speicherüberlauf |
| **ANR** (App Not Responding) | App friert ein, Android fragt nach Schließen | Blockierter Main Thread, zu langes I/O auf dem UI-Thread |

Für die Crash Rate zählen nur Crashes. ANRs sind eine separate Metrik im Crashlytics Dashboard — aber genauso relevant für die Nutzererfahrung und werden von Google Play ebenfalls in Android Vitals bewertet.

---

## Häufige Ursachen für hohe Crash Rates

### Flutter Apps

Flutter-spezifische Crash-Muster, die besonders häufig auftreten:

- **Null-Safety-Verletzungen** — häufig nach Migrationen oder in älterem Code ohne Null Safety
- **Plugin-Inkompatibilitäten** — ein Update eines Pub Packages bricht die Native Bridge zu iOS oder Android
- **Platform-Channel-Fehler** — wenn Dart-Code und nativer Code inkompatible Daten austauschen
- **Widget-Rendering-Fehler** — ListView mit unbegrenzter Höhe ohne Constraint, oder Widgets die auf null-Context zugreifen

### React Native Apps

- **JavaScript-Bridge-Typ-Fehler** — Typ-Mismatches zwischen JS und der nativen Seite
- **Native Module nach RN-Upgrades** — nicht gemigerte Native Module nach einem React Native Versionssprung
- **Hermes-Inkompatibilitäten** — ältere Libraries, die mit der Hermes JavaScript Engine nicht kompatibel sind

### Native iOS (Swift / Objective-C)

- **Force Unwraps auf nil** — das häufigste iOS-Crash-Pattern: `value!` auf einem nil Optional
- **Deprecated API Breaking Changes** — Apple entfernt APIs mit mehrjährigen Vorlaufzeiten, die trotzdem überraschen
- **Retain Cycles in Closures** — ARC verhindert keine Memory Leaks durch zirkuläre Referenzen

### Native Android (Kotlin / Java)

- **NullPointerException** — auf Android nach wie vor der häufigste Crash-Typ
- **OutOfMemoryError** — besonders auf älteren Geräten mit 2–3 GB RAM
- **NetworkOnMainThreadException** — Netzwerkoperationen versehentlich auf dem Main Thread

---

## Crashes priorisieren: Welche zuerst beheben?

Nicht jeder Crash ist gleich dringend. Die richtige Priorisierung basiert auf zwei Dimensionen:

- **Häufigkeit:** Wie viele Sessions (%) sind betroffen?
- **Auswirkung:** In welchem Kontext passiert der Crash? (Checkout, Login, Kernaktion, Randfeature)

![Crash-Priorisierungs-Matrix: Häufigkeit gegen Auswirkung auf Nutzer](/assets/blog/crash-prioritaet-matrix.svg)

**Sofort beheben** (hohe Häufigkeit + hohe Auswirkung): Alles, was beim Checkout, Login oder bei zentralen Kernfunktionen crasht und mehrere Sessions pro Tag betrifft. Diese Crashes kosten direkt Geld und Nutzer.

**Zeitnah analysieren** (niedrige Häufigkeit + hohe Auswirkung): Seltene Crashes in kritischen Flows — z.B. Abstürze beim Zahlungsabschluss, die nur 0,02 % betreffen, aber erheblichen Umsatz kosten können.

**Mittelfristig einplanen** (hohe Häufigkeit + niedrige Auswirkung): Crashes in Nebenflows oder bei Aktionen, die Nutzer problemlos wiederholen können.

**Backlog** (niedrige Häufigkeit + niedrige Auswirkung): Nicht ignorieren — aber kein Sprint nötig. Im nächsten regulären Entwicklungszyklus einplanen.

---

## Schritt-für-Schritt: So senkst du eine hohe Crash Rate

### Sofortmaßnahmen (innerhalb von 24 h)

1. Firebase Crashlytics öffnen → Crashes nach **betroffenen Sessions (%)** sortieren
2. Den Top-1-Crash öffnen: Stack Trace lesen, betroffene Geräte und OS-Versionen identifizieren
3. Frage klären: Hängt der Crash mit einem kürzlichen Release zusammen? Wenn ja — Rollback prüfen
4. Root Cause identifizieren: Null Pointer? Package-Update? Bestimmtes Gerät?
5. Hotfix priorisieren und ins Board einlasten

### Mittelfristig (1–4 Wochen)

- **Crashlytics Alerts einrichten:** E-Mail-Benachrichtigung bei neuen Crash-Typen oder wenn die Crash Rate einen Schwellenwert überschreitet — so erfährst du von Problemen, bevor Nutzer sich beschweren
- **Automated Testing für kritische User Flows:** Login, Onboarding, Checkout — die Flows, bei denen ein Crash am meisten schadet
- **Error Boundaries:** In Flutter und React Native graceful degradation statt vollständigem Crash — der Nutzer sieht eine Fehlermeldung, die App bleibt geöffnet
- **Staged Rollouts:** Neue Releases auf 5–10 % der Nutzer ausrollen, Crash Rate 24–48 h beobachten, dann schrittweise erhöhen

### Langfristig

- **Dependency Management:** Package-Updates nicht bündeln — einzeln deployen und beobachten, damit ein Crash klar einem Update zugeordnet werden kann
- **Device Testing Matrix:** Regelmäßige Tests auf den häufigsten Geräten deiner Nutzerbasis. Crashlytics zeigt dir in jedem Crash, auf welchen Geräten er auftritt
- **CI/CD-Integration:** Crashlytics API in die Release-Pipeline integrieren — eine erhöhte Crash Rate nach einem Rollout kann den weiteren Rollout automatisch stoppen

---

## Crash Rate Monitoring automatisieren

Manuelles Prüfen vergisst man. Diese drei Maßnahmen machen Monitoring systematisch:

**1. Crashlytics Email Alerts**
Firebase → Crashlytics → Einstellungen → Alerts: Benachrichtigungen für neue Issues und Regressionen einrichten. Kostenlos, sofort verfügbar.

**2. Monatliches Monitoring-Ritual**
Einmal pro Monat: Crash Rate aktueller Monat vs. Vormonat, iOS vs. Android, neue Crash-Typen, Trend-Analyse. 20 Minuten Aufwand — aber systematisch.

**3. Google Play Console Android Vitals**
Monatlich einen Blick auf Android Vitals werfen. Das ist der Wert, den Google für die Store-Sichtbarkeit heranzieht — und der sich von Crashlytics unterscheiden kann.

| Intervall | Was prüfen |
|---|---|
| Täglich (nach Releases) | Crash Rate auf ungewöhnliche Spikes prüfen |
| Wöchentlich | Trend letzte 7 Tage, neue Crash-Typen |
| Monatlich | Benchmarkvergleich, iOS vs. Android, Entwicklung über Zeit |
| Nach iOS/Android OS-Updates | Sofort prüfen — neue OS-Versionen sind häufige Auslöser |

---

## Häufig gestellte Fragen

**Wie berechnet Google Play die Crash Rate in Android Vitals — und warum weicht sie von Crashlytics ab?**

Google berechnet die Crash Rate in Android Vitals auf Basis von Nutzern über die letzten 28 Tage, nicht Sessions. Crashlytics hingegen zählt Sessions. Außerdem erfasst Google die Daten direkt vom Android-System, unabhängig davon, ob Crashlytics in der App integriert ist. Die Werte können deshalb merklich abweichen. Entscheidend für die Store-Sichtbarkeit ist der Google-Wert, nicht der Crashlytics-Wert.

**Meine App hat 0 % Crash Rate in Crashlytics — ist sie wirklich fehlerfrei?**

Nicht zwangsläufig. Crashlytics erfasst nur unbehandelte Exceptions, die zur App-Termination führen. Fehler, die abgefangen werden (try/catch ohne Re-throw), ANRs oder stille Fehler (falsche Daten, leere Screens) zählen nicht. Eine Crash Rate von 0 % ist gut — aber kein Beweis für vollständige Stabilität.

**Ist eine hohe Crash Rate auf alten Geräten ignorierbar?**

Das hängt vom Anteil dieser Geräte in deiner Nutzerbasis ab. Wenn 15 % deiner aktiven Nutzer auf Android 9 oder iOS 15 sind und diese Gruppe eine 4 % Crash Rate hat, ist das auch dann nicht ignorierbar, wenn dein Gesamtwert bei 0,6 % liegt. Crashlytics erlaubt es, nach OS-Version und Gerätemodell zu filtern — nutze das für eine segmentierte Analyse.

**Warum crasht meine Flutter App nur nach einem Update auf eine neue Flutter-Version?**

Flutter-Version-Upgrades ändern manchmal das Verhalten von nativen Plugins oder der Dart-Runtime. Häufigste Ursache: Ein Plugin mit nativen Bindings (Kamera, Bluetooth, In-App Purchases) wurde noch nicht auf die neue Flutter-Version angepasst. Prüfe den Changelog und die offenen Issues der betroffenen Dependencies auf GitHub.

**Ab wann sollte ich einen Hotfix deployen?**

Als Daumenregel: Wenn ein einzelner Crash-Typ mehr als 0,3 % der Sessions betrifft und in einem kritischen Flow (Login, Checkout, Daten speichern) auftritt, ist ein Hotfix sinnvoll. Bei unter 0,1 % und Nebenflows kann der Fix in den nächsten regulären Release.

---

## Fazit

Eine gute Crash Rate beginnt bei unter 0,5 %. Alles über 1 % sollte dich aktiv beschäftigen — nicht erst wenn Nutzer sich beschweren, sondern weil deine Daten es zeigen.

Das Wichtigste ist nicht, einmalig die Rate zu senken, sondern sie dauerhaft im Blick zu behalten. Ein monatliches Monitoring-Ritual, Crashlytics Alerts und ein klarer Prozess für Hotfixes verwandeln reaktives Feuerlöschen in professionelles, vorausschauendes App-Management.

App-Care überwacht deine Crash Rate jeden Monat, analysiert Auffälligkeiten und gibt konkrete Handlungsempfehlungen — bevor deine Nutzer die App deinstallieren.

[Mehr über App-Care Monitoring erfahren →](/leistungen)
