---
title: "Was ist eine gute Crash Rate? Mobile App Stabilität verstehen"
description: "Ab wann ist eine Crash Rate kritisch? Dieser Guide erklärt Crash Rates, wie du sie misst und was zu tun ist wenn sie zu hoch sind."
pubDate: 2026-02-01
author: "Markus Kühle"
category: "Performance"
---

# Was ist eine gute Crash Rate für Mobile Apps?

Abstürze sind der schnellste Weg, Nutzer dauerhaft zu verlieren. Aber ab wann ist eine Crash Rate wirklich problematisch — und was kannst du dagegen tun?

## Was ist eine Crash Rate?

Die Crash Rate gibt an, wie hoch der Prozentsatz der Sessions ist, in denen ein Absturz aufgetreten ist.

**Formel:** Crash Rate = Abgestürzte Sessions / Alle Sessions × 100

Alternativ betrachtet man die **crash-freien Sessions** (1 - Crash Rate), was psychologisch positiver ist.

## Benchmark: Was sind gute Werte?

| Bewertung | Crash Rate | Crash-freie Sessions |
|---|---|---|
| Sehr gut | < 0,5% | > 99,5% |
| Gut | 0,5% – 1% | 99% – 99,5% |
| Akzeptabel | 1% – 2% | 98% – 99% |
| Kritisch | > 2% | < 98% |

**Google Play** markiert Apps mit einer Crash Rate über 1,09% als "schlecht" und kann die Sichtbarkeit reduzieren.

## Wo findest du deine Crash Rate?

**Firebase Crashlytics** ist das Standard-Tool:
- Firebase Console → Crashlytics
- Filter: "Crashes" (nicht "ANRs")
- Wähle den Zeitraum (z.B. letzter Monat)

Wichtig: Crash Rate wird **separat für iOS und Android** ausgewertet — die Werte können stark abweichen.

## Häufige Ursachen für hohe Crash Rates

1. **Flutter/Dart Exceptions** — NullPointerExceptions, Casting-Fehler
2. **Plugin-Inkompatibilitäten** — nach Flutter oder Package Updates
3. **iOS/Android OS Updates** — neue Versionen brechen manchmal APIs
4. **Speichermangel** — besonders auf älteren Geräten
5. **Netzwerkfehler** — unbehandelte API-Fehler

## Was tun bei hoher Crash Rate?

### Sofortmaßnahmen
1. Crashlytics öffnen → Top Crashes nach Häufigkeit sortieren
2. Den häufigsten Crash analysieren: Stack Trace lesen
3. Betroffene Geräte/OS-Versionen identifizieren
4. Root Cause finden und Bugfix einplanen

### Mittelfristig
- Crash-Rate-Alert einrichten (Crashlytics Alerts)
- Automated Testing für kritische User Flows
- Error Boundaries in Flutter für graceful degradation

---

## Fazit

Eine Crash Rate über 1% sollte dich wachrütteln. App-Care überwacht deine Crash Rate jeden Monat, analysiert Auffälligkeiten und gibt Handlungsempfehlungen — bevor Nutzer sich beschweren.

[Mehr über App-Care Monitoring erfahren →](/leistungen)
