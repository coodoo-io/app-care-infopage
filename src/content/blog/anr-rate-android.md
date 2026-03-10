---
title: "ANR-Rate bei Android-Apps: Was \"App Not Responding\" bedeutet und wie du es behebst"
description: "ANR Rate Android: Was ANRs sind, warum Google Play sie als Ranking-Faktor nutzt, welche Schwellwerte kritisch sind und wie du ANRs systematisch reduzierst."
pubDate: 2025-07-28
author: "Markus Kühle"
category: "Stabilität & Performance"
---

# ANR-Rate bei Android-Apps: Was "App Not Responding" bedeutet und wie du es behebst

Viele App-Teams kennen ihre Crash Rate — aber die ANR-Rate übersehen sie, bis Google Play die App im Ranking abstraft. Dabei ist die anr rate android ein eigenständiger Messwert in Android Vitals, der genauso wie Crashes über die Store-Sichtbarkeit entscheidet. Wer ANRs ignoriert, riskiert nicht nur frustrierte Nutzer, sondern auch schlechtere Platzierungen im Play Store — ohne einen einzigen zusätzlichen Crash zu haben.

![ANR vs. Crash: Zwei verschiedene Stabilitätsprobleme im Vergleich](/assets/blog/anr-rate-android-erklaerung.svg)

<div class="not-prose my-6 rounded-xl border border-brand-200 bg-brand-50 p-6">
  <p class="text-sm font-semibold text-brand-700 mb-3">Das Wichtigste in Kürze</p>
  <ul class="space-y-1.5 text-sm text-brand-900 list-none m-0 p-0">
    <li>Eine ANR (App Not Responding) entsteht, wenn der Main Thread einer Android-App länger als 5 Sekunden blockiert ist</li>
    <li>Google Play markiert Apps als "schlecht", wenn ihre ANR-Rate den Bad Behavior Threshold von 0,47 % überschreitet</li>
    <li>ANRs zählen separat von Crashes — beide Metriken beeinflussen Store-Sichtbarkeit unabhängig voneinander</li>
    <li>Die häufigste Ursache: Netzwerk- oder Datenbankoperationen auf dem UI-Thread statt in Hintergrund-Threads</li>
    <li>Firebase Crashlytics und die Google Play Console (Android Vitals) sind die primären Tools zur ANR-Analyse</li>
  </ul>
</div>

<div class="not-prose my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
  <p class="text-sm font-semibold text-gray-700 mb-3">Inhaltsverzeichnis</p>
  <ol class="list-decimal list-inside space-y-1.5 text-sm text-gray-700 m-0 p-0">
    <li><a href="#was-ist-anr" class="text-brand-600 hover:underline">Was ist eine ANR (App Not Responding)?</a></li>
    <li><a href="#anr-vs-crash" class="text-brand-600 hover:underline">ANR vs. Crash: Die wichtigsten Unterschiede</a></li>
    <li><a href="#benchmarks" class="text-brand-600 hover:underline">ANR Rate Benchmarks und Google Play Schwellwerte</a></li>
    <li><a href="#anr-analysieren" class="text-brand-600 hover:underline">ANRs analysieren: Wo du sie findest</a></li>
    <li><a href="#anr-beheben" class="text-brand-600 hover:underline">ANRs beheben: Die häufigsten Ursachen</a></li>
    <li><a href="#fazit" class="text-brand-600 hover:underline">Fazit</a></li>
    <li><a href="#faq" class="text-brand-600 hover:underline">FAQ</a></li>
  </ol>
</div>

---

## Was ist eine ANR (App Not Responding)? {#was-ist-anr}

Eine ANR — kurz für "App Not Responding" — tritt auf, wenn der Main Thread einer Android-App für mindestens 5 Sekunden blockiert ist und nicht auf Nutzereingaben reagiert. Das Betriebssystem erkennt diesen Zustand und zeigt dem Nutzer einen Systemdialog: "App antwortet nicht. Möchtest du sie schließen?"

Der Main Thread (auch UI-Thread genannt) ist der einzige Thread, der in Android direkt mit der Benutzeroberfläche interagieren darf. Er verarbeitet Touch-Events, rendert Frames und führt Lifecycle-Callbacks aus. Sobald dieser Thread durch eine lang laufende Operation blockiert wird, friert die App aus Nutzersicht ein — Schaltflächen reagieren nicht, Animationen stoppen, die App wirkt tot.

Das Android-System erkennt eine ANR anhand zweier Bedingungen:

- **Input Dispatching Timeout:** Ein Input-Event (Berührung, Taste) wird innerhalb von 5 Sekunden nicht verarbeitet
- **Broadcast Receiver Timeout:** Ein Broadcast Receiver reagiert nicht innerhalb von 10 Sekunden auf einen Broadcast

Der erste Fall ist bei weitem häufiger und für den Großteil aller ANRs verantwortlich.

### Was der Nutzer sieht

Aus Nutzerperspektive ist eine ANR oft schlimmer als ein Crash. Ein Crash ist in einer Sekunde vorbei — die App schließt sich, und der Nutzer kann sie neu starten. Eine ANR dagegen lässt die App sichtbar "hängen": Die UI friert ein, Schaltflächen reagieren nicht, und nach mehreren Sekunden erscheint ein Systemdialog, der den Nutzer auffordert, die App zu beenden oder zu warten.

Dieser Dialog ist ein deutliches Qualitätssignal. Nutzer, die diesen Dialog mehrfach sehen, verlassen die App häufiger dauerhaft und hinterlassen eher negative Bewertungen als Nutzer, die gelegentliche Crashes erleben.

### Der ANR-Trace

Wenn eine ANR auftritt, erstellt Android automatisch einen sogenannten ANR-Trace — eine Momentaufnahme des Anwendungszustands zum Zeitpunkt des Timeouts. Dieser Trace enthält den Stack-Trace aller laufenden Threads, besonders des Main Threads. Er zeigt exakt, welche Methode den Thread blockiert hat.

Dieser Trace ist der wichtigste Ausgangspunkt für jede ANR-Analyse. Er ist in der Google Play Console unter Android Vitals abrufbar und enthält in der Regel ausreichend Informationen, um die Ursache zu identifizieren.

---

## ANR vs. Crash: Die wichtigsten Unterschiede {#anr-vs-crash}

ANRs und Crashes werden oft in einem Atemzug genannt — sind aber technisch und aus Nutzerperspektive grundverschieden. Beide beeinflussen die Stabilitätsbewertung durch Google Play, werden aber separat gemessen und haben unterschiedliche Ursachen.

| Merkmal | ANR | Crash |
|---|---|---|
| Was passiert | App friert ein, reagiert nicht | App schließt sich unerwartet |
| Auslöser | Main Thread blockiert (>5 Sek.) | Unbehandelte Exception oder Error |
| Nutzererlebnis | Dialog "App antwortet nicht" | App verschwindet sofort |
| Typische Ursache | I/O auf UI-Thread, Deadlock, langes Locking | NullPointerException, OutOfMemoryError |
| Google Play Threshold | 0,47 % (Bad Behavior) | 1,09 % (Bad Behavior) |
| Trace-Typ | ANR-Trace mit Thread-Dump | Stack-Trace der Exception |

### Warum beide Metriken wichtig sind

Die anr rate android ist kein Nebenprodukt der Crash-Analyse — sie ist eine eigenständige Metrik mit eigenem Schwellenwert in Android Vitals. Eine App kann eine hervorragende Crash Rate von 0,3 % haben und trotzdem mit einer ANR-Rate von 0,8 % im "Bad Behavior"-Bereich liegen.

Das ist kein theoretisches Szenario: Apps mit stabilen, defensiv programmierten Kernflows crashen selten — aber wenn dieselben Flows auf langsame Netzwerkverbindungen oder volle Speicher stoßen, können ANRs entstehen. Wer nur Crashes misst, sieht dieses Problem nicht.

Google Play behandelt beide Probleme gleichrangig: Überschreitet eine App einen der beiden Schwellenwerte, drohen dieselben Konsequenzen — schlechteres Ranking, mögliche Warnhinweise vor der Installation und Ausschluss aus Featured-Bereichen.

---

## ANR Rate Benchmarks und Google Play Schwellwerte {#benchmarks}

Die ANR Rate ist der Anteil der täglichen Nutzersessions, in denen mindestens eine ANR aufgetreten ist. Google Play berechnet diesen Wert auf Basis von Nutzeraktivität über 28 Tage und stellt ihn in der Play Console unter Android Vitals zur Verfügung.

**Formel:**

> ANR Rate = (Sessions mit mindestens einer ANR ÷ Alle Sessions) × 100

### Die offiziellen Google Play Schwellwerte

Google Play definiert zwei Stufen für die ANR-Rate:

| Bewertung | ANR Rate | Bedeutung |
|---|---|---|
| Gut | < 0,47 % | Kein Eingriff durch Google |
| Bad Behavior Threshold | 0,47 % | App wird als "schlecht" markiert |
| Kritisch | > 1 % | Hohe Wahrscheinlichkeit von Store-Abstrafungen |

Der **Bad Behavior Threshold von 0,47 %** ist der entscheidende Wert. Überschreitet deine App diesen Schwellenwert, erscheint in der Play Console ein Warnsymbol unter Android Vitals, und die App riskiert Sichtbarkeitsverluste im Play Store.

Zum Vergleich: Der Bad Behavior Threshold für die Crash Rate liegt bei 1,09 % — der ANR-Schwellenwert ist also deutlich enger. Das bedeutet: Eine App, die bei Crashes noch im grünen Bereich liegt, kann bei ANRs bereits abgestraft werden.

![Google Play Schwellwerte für ANR-Rate und Crash-Rate im Vergleich](/assets/blog/anr-rate-android-benchmarks.svg)

### Industriebenchmarks und Zielwerte

Neben den offiziellen Google-Schwellwerten haben sich in der Praxis folgende Richtwerte etabliert:

| Bewertung | ANR Rate | Empfehlung |
|---|---|---|
| Sehr gut | < 0,1 % | Aktiv anstreben bei kritischen Apps |
| Gut | 0,1 % – 0,47 % | Akzeptabel, aber Verbesserungspotenzial vorhanden |
| Warnstufe | 0,47 % – 1 % | Bad Behavior Threshold überschritten, dringend handeln |
| Kritisch | > 1 % | Sofortmaßnahmen erforderlich |

Das Ziel sollte in den meisten Fällen unter 0,2 % liegen — deutlich unterhalb des Google-Schwellwerts, um einen Puffer für saisonale Schwankungen, OS-Updates und Release-Probleme zu haben.

### Wie sich die ANR-Rate berechnet

Ein häufiges Missverständnis: Die ANR-Rate zählt nicht die Anzahl der ANR-Ereignisse, sondern den Anteil der betroffenen Sessions. Eine Session, in der drei ANRs auftreten, zählt nur einmal. Das bedeutet: Eine scheinbar kleine ANR-Rate kann auf eine hohe Gesamtzahl von ANR-Ereignissen hinweisen, wenn Nutzer die App trotz ANRs weiter nutzen.

---

## ANRs analysieren: Wo du sie findest {#anr-analysieren}

Die wichtigsten Tools zur ANR-Analyse sind die Google Play Console (Android Vitals) und Firebase Crashlytics. Beide zeigen ANR-Daten, aber aus unterschiedlichen Blickwinkeln.

### Google Play Console: Android Vitals

Android Vitals ist die primäre Quelle für die ANR-Rate, die für die Store-Bewertung relevant ist. So navigierst du dorthin:

1. Google Play Console öffnen → deine App auswählen
2. Im linken Menü: **Android Vitals** → **App-Stabilität**
3. Unter "ANRs" siehst du die aktuelle ANR-Rate und den Verlauf über die letzten 28 Tage
4. Im Abschnitt "ANR-Cluster" findest du die häufigsten ANR-Typen gruppiert nach Stack-Trace
5. Jeden ANR-Cluster öffnen: Er enthält ANR-Traces mit Thread-Dumps, betroffene Geräte und OS-Versionen

Der **ANR-Cluster-Bereich** ist das Herzstück der Analyse. Google gruppiert ähnliche ANRs automatisch und zeigt dir, welche Traces am häufigsten auftreten. Das erlaubt eine direkte Priorisierung nach Häufigkeit.

### Firebase Crashlytics

Firebase Crashlytics erfasst ANRs ebenfalls — allerdings nur, wenn das Crashlytics SDK in der App integriert ist und die ANR-Erfassung aktiviert wurde. Seit Crashlytics SDK 18.3.0 ist ANR-Reporting automatisch enthalten.

So findest du ANRs in Crashlytics:

1. Firebase Console → dein Projekt → **Crashlytics**
2. Oben rechts den Filter auf **"ANRs"** setzen (nicht "Crashes")
3. Die ANR-Liste zeigt Häufigkeit, betroffene Sessions und Trend
4. Jeden Eintrag öffnen für den vollständigen Stack-Trace und betroffene Gerätedaten

**Wichtig:** Crashlytics und Google Play Console können unterschiedliche ANR-Raten zeigen. Google erfasst ANR-Daten direkt vom Betriebssystem — unabhängig vom SDK. Crashlytics-Daten basieren nur auf dem integrierten SDK. Für die Store-Sichtbarkeit ist ausschließlich der Wert aus Android Vitals relevant.

### Den ANR-Trace lesen

Ein ANR-Trace ist zunächst einschüchternd, folgt aber einem klaren Muster. Die wichtigsten Bereiche:

```
DALVIK THREADS (20):
"main" prio=5 tid=1 Waiting
  | group="main" sCount=1 ucsCount=0 flags=1 obj=0x74... self=0x...
  | sysTid=1234 nice=-10 cgrp=default sched=0/0 handle=0x...
  at java.lang.Object.wait(Native Method)
  at android.os.MessageQueue.nativePollOnce(Native Method)
  at android.os.Looper.loopOnce(Looper.java:201)
  ...
```

**Was du suchst:** Die Zeile nach `"main"` zeigt den Zustand des Main Threads. Typische Zustände bei ANRs:

- `Waiting` oder `Blocked` auf einem Lock: Ein anderer Thread hält eine Ressource, die der Main Thread braucht
- `Sleeping`: Der Main Thread wurde explizit schlafen gelegt — ein klarer Bug
- Stack-Trace zeigt Netzwerk- oder Datenbankoperationen: I/O auf dem UI-Thread

---

## ANRs beheben: Die häufigsten Ursachen {#anr-beheben}

Die große Mehrheit aller ANRs geht auf eine handvoll bekannter Ursachen zurück. Sie lassen sich systematisch identifizieren und beheben.

### Ursache 1: Netzwerkoperationen auf dem Main Thread

Die häufigste Ursache für ANRs überhaupt. HTTP-Requests, API-Calls oder WebSocket-Operationen, die versehentlich auf dem UI-Thread ausgeführt werden, blockieren die gesamte UI für die Dauer der Netzwerkantwort.

Android verhindert Netzwerkoperationen auf dem Main Thread seit API 11 mit einer `NetworkOnMainThreadException` — aber nur wenn der StrictMode aktiv ist. In manchen Konfigurationen, besonders bei älterem Code oder bei bestimmten Bibliotheken, kann dies dennoch auftreten.

**Lösung:** Alle Netzwerkoperationen in Hintergrund-Threads ausführen. In modernem Android-Code bedeutet das: Coroutines mit `Dispatchers.IO`, RxJava mit `Schedulers.io()` oder WorkManager für Hintergrundtasks.

```kotlin
// Falsch — blockiert den Main Thread
val response = apiService.fetchData() // HTTP-Call auf UI-Thread

// Richtig — führt die Operation im IO-Dispatcher aus
viewModelScope.launch(Dispatchers.IO) {
    val response = apiService.fetchData()
    withContext(Dispatchers.Main) {
        // UI-Update zurück auf Main Thread
        updateUI(response)
    }
}
```

### Ursache 2: Datenbankoperationen auf dem Main Thread

Room-Datenbankabfragen, SQLite-Operationen oder SharedPreferences-Zugriffe auf dem Main Thread sind eine weitere häufige Ursache. Room erzwingt seit Version 2.0 standardmäßig eine `IllegalStateException` bei synchronen Abfragen auf dem Main Thread — aber dieser Schutz kann deaktiviert werden.

**Lösung:** Alle Datenbankoperationen asynchron ausführen. Room bietet native Suspend-Funktionen für Kotlin Coroutines und LiveData-Integration, die Abfragen automatisch in Hintergrund-Threads ausführen.

### Ursache 3: Deadlocks zwischen Threads

Ein Deadlock entsteht, wenn zwei oder mehr Threads aufeinander warten, um jeweils eine Ressource freizugeben, die der andere hält. Der Main Thread ist dann zwar technisch nicht blockiert durch I/O — aber durch einen Lock, auf den er wartet.

ANR-Traces von Deadlocks zeigen typischerweise den Main Thread in einem `Waiting`-Zustand, mit einem Verweis auf einen anderen Thread, der seinerseits auf den Main Thread wartet.

**Lösung:** Synchronized-Blöcke und Locks auf dem Main Thread vermeiden. Wenn Synchronisation zwischen Threads notwendig ist, Konzepte wie Channel oder StateFlow in Coroutines verwenden, die keine traditionellen Locks benötigen.

### Ursache 4: Zu langes Arbeiten in BroadcastReceivern

Ein BroadcastReceiver muss seinen `onReceive()`-Callback innerhalb von 10 Sekunden abschließen, da er auf dem Main Thread ausgeführt wird. Komplexe Operationen, Datenbankabfragen oder Netzwerkaufrufe in `onReceive()` können ANRs auslösen.

**Lösung:** In `onReceive()` nur minimale Arbeit erledigen — z.B. einen WorkManager-Job starten oder einen Intent an einen Service übergeben, der die eigentliche Arbeit im Hintergrund übernimmt.

### Ursache 5: Excessive Main Thread Work

Auch ohne explizite I/O-Operationen kann zu viel Arbeit auf dem Main Thread ANRs verursachen: aufwändige Bitmap-Berechnungen, komplexe Serialisierungen, das Iterieren über sehr große Collections oder schwere Inflate-Operationen bei der View-Erstellung.

**Lösung:** Profiling mit dem Android Profiler im Android Studio, um zeitintensive Operationen auf dem Main Thread zu identifizieren. Mit Tracing (`Trace.beginSection()` / `Trace.endSection()`) lassen sich kritische Bereiche markieren und im Systrace analysieren.

### Ursache 6: StrictMode-Verletzungen in der Produktion

StrictMode ist ein Debug-Tool, das Verletzungen wie Disk Reads oder Network Calls auf dem Main Thread erkennt und meldet. In der Entwicklungsphase ist er nützlich — aber manchmal werden Apps ohne StrictMode released, obwohl der Code Verletzungen enthält, die im Test nicht aufgefallen sind.

**Empfehlung:** StrictMode in Debug-Builds aktivieren und alle Verletzungen konsequent beheben, bevor eine neue Version in die Produktion geht.

### Präventive Maßnahmen

Neben der Behebung konkreter ANRs gibt es strukturelle Maßnahmen, die die ANR-Rate langfristig niedrig halten:

**Architektur:** Eine saubere MVVM- oder MVI-Architektur mit klarer Trennung zwischen UI-Thread und Hintergrund-Threads verhindert die meisten ANRs strukturell. Der ViewModel-Layer ist der richtige Ort für Coroutines und asynchrone Operationen.

**Code Reviews:** ANR-anfälligen Code-Patterns im Review-Prozess explizit suchen: synchrone Methoden in Callbacks, `Thread.sleep()` auf dem Main Thread, unkontrollierte Lock-Scopes.

**Staged Rollouts:** Neue Releases schrittweise ausrollen und die ANR-Rate in Android Vitals in den ersten 24–48 Stunden beobachten. Steigt die Rate nach einem Release an, ist das ein klarer Hinweis auf einen regressiven Bug.

---

## Fazit {#fazit}

Die drei wichtigsten Erkenntnisse aus diesem Guide:

**1. Die anr rate android ist kein Randproblem.** Google Play bewertet ANRs mit einem eigenen Bad Behavior Threshold von 0,47 % — strenger als der Crash-Schwellenwert von 1,09 %. Wer ANRs nicht misst, riskiert Store-Abstrafungen, ohne es zu merken.

**2. ANRs haben bekannte Ursachen.** Der Großteil aller ANRs geht auf Netzwerk- oder Datenbankoperationen auf dem Main Thread zurück — Muster, die durch Code Reviews und eine saubere asynchrone Architektur systematisch verhindert werden können.

**3. Monitoring muss regelmäßig sein.** ANRs steigen oft nach Releases oder OS-Updates an. Wer die Android Vitals monatlich prüft und Alerts einrichtet, erkennt Probleme früh — bevor Google Play reagiert.

Zur vertiefenden Lektüre empfiehlt sich der Artikel [Was ist eine gute Crash Rate?](/blog/was-ist-eine-gute-crash-rate) — er erklärt, wie ANRs und Crashes zusammen als Gesamtbild der App-Stabilität bewertet werden sollten.

<div class="not-prose my-8 rounded-xl bg-brand-950 p-8 text-center">
  <p class="text-lg font-semibold text-white mb-2">ANR-Rate und Crash Rate im Blick behalten</p>
  <p class="text-brand-200 mb-4">App-Care überwacht Stabilitätsmetriken kontinuierlich und eskaliert kritische Werte, bevor Google Play reagiert.</p>
  <a href="/leistungen" class="btn-primary">Leistungen ansehen</a>
</div>

---

## FAQ {#faq}

**Was bedeutet ANR-Rate bei Android?**

Die ANR-Rate (App Not Responding Rate) ist der Anteil der täglichen Nutzersessions, in denen mindestens eine ANR aufgetreten ist. Eine ANR entsteht, wenn der Main Thread einer Android-App für mehr als 5 Sekunden nicht auf Nutzereingaben reagiert. Android zeigt dann einen Systemdialog, der den Nutzer fragt, ob er die App schließen oder warten möchte. Google Play erfasst diese Rate automatisch über Android Vitals und bezieht sie in die Bewertung der App-Qualität ein.

**Was ist eine gute ANR-Rate für Android-Apps?**

Google Play markiert Apps als "schlecht" (Bad Behavior), wenn ihre ANR-Rate den Schwellenwert von 0,47 % überschreitet. Als praktisches Ziel sollte eine ANR-Rate unter 0,2 % angestrebt werden — das gibt ausreichend Puffer vor dem Google-Schwellenwert und berücksichtigt kurzfristige Schwankungen nach Releases oder OS-Updates. Sehr gute Apps, insbesondere in sensiblen Bereichen wie Banking oder E-Commerce, liegen unter 0,1 %.

**Wie finde ich ANRs in meiner Android-App?**

Die zwei wichtigsten Quellen sind die Google Play Console und Firebase Crashlytics. In der Play Console findest du ANRs unter Android Vitals → App-Stabilität → ANRs. Dort sind sie nach Häufigkeit gruppiert und enthalten ANR-Traces mit Thread-Dumps. In Firebase Crashlytics erreichst du ANRs über den Filter "ANRs" im Crashlytics-Dashboard — vorausgesetzt, du nutzt Crashlytics SDK 18.3.0 oder neuer. Für die Store-Sichtbarkeit ist ausschließlich der Wert in Android Vitals relevant, da Google die Daten direkt vom Betriebssystem erfasst.

**Was ist der Unterschied zwischen ANR und Crash?**

Ein Crash ist ein vollständiger Absturz der App: Eine unbehandelte Exception oder ein fataler Fehler beendet die App sofort und unerwartet. Eine ANR dagegen ist ein Einfrieren der App: Der Main Thread ist so blockiert, dass er nicht mehr auf Eingaben reagiert — die App läuft technisch weiter, wirkt aber tot. Aus Nutzersicht ist eine ANR oft unangenehmer als ein Crash, weil die App sichtbar hängt, bevor der Android-Dialog erscheint. Google Play misst beide Metriken separat mit eigenen Schwellenwerten: 1,09 % für Crashes und 0,47 % für ANRs.
