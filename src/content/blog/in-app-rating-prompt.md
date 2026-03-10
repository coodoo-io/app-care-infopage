---
title: "In-App-Rating-Prompt: Wann und wie du Nutzer um Bewertungen bittest"
description: "In-App Rating Prompt: Wann der optimale Zeitpunkt ist, welche Trigger funktionieren, wie iOS und Android Regeln sich unterscheiden und wie du die Bewertungsrate maximierst."
pubDate: 2026-05-05
author: "Markus Kühle"
category: "App Store"
---

# In-App-Rating-Prompt: Wann und wie du Nutzer um Bewertungen bittest

Apps mit aktivem In-App-Rating-Prompt erhalten bis zu 3× mehr Bewertungen als Apps ohne — bei gleichem Bewertungs-Durchschnitt. Der Zeitpunkt des Prompts entscheidet, ob du 4,8 oder 3,2 Sterne bekommst: Wer unzufriedene Nutzer im falschen Moment fragt, schreibt sich sein schlechtes Rating selbst. Wer hingegen nach dem richtigen Nutzungserlebnis fragt, baut eine Review-Basis auf, die den Algorithmus und das Nutzervertrauen langfristig stärkt.

![In-App-Rating-Prompt: Optimale Trigger-Zeitpunkte im Nutzer-Journey](/assets/blog/in-app-rating-prompt-timing.svg)

<div class="not-prose my-6 rounded-xl border border-brand-100 bg-brand-50 p-6">
  <p class="text-sm font-semibold text-brand-900 mb-3">Das Wichtigste in Kürze</p>
  <ul class="space-y-2 text-sm text-brand-800 m-0 p-0 list-none">
    <li>— Apps mit aktivem Rating-Prompt erhalten bis zu 3× mehr Bewertungen als Apps ohne Prompt</li>
    <li>— iOS erlaubt maximal 3 Prompt-Anfragen pro App und Jahr — verschwende sie nicht beim falschen Timing</li>
    <li>— Der optimale Moment ist direkt nach einem positiven Nutzungserlebnis, nie nach einem Fehler oder Absturz</li>
    <li>— Android hat keine harten Limits, drosselt aber intern — Frequenz trotzdem strategisch planen</li>
    <li>— Internes Feedback vor dem Store-Prompt schützt vor 1-Stern-Reviews ohne Richtlinien zu verletzen</li>
  </ul>
</div>

<div class="not-prose my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
  <p class="text-sm font-semibold text-gray-700 mb-3">Inhaltsverzeichnis</p>
  <ol class="list-decimal list-inside space-y-1.5 text-sm text-gray-700 m-0 p-0">
    <li><a href="#was-ist-rating-prompt" class="text-brand-600 hover:underline">Was ist ein In-App-Rating-Prompt?</a></li>
    <li><a href="#ios-vs-android" class="text-brand-600 hover:underline">iOS vs. Android: Systemregeln und Limits</a></li>
    <li><a href="#timing" class="text-brand-600 hover:underline">Timing: Wann der Prompt am besten wirkt</a></li>
    <li><a href="#trigger-events" class="text-brand-600 hover:underline">Trigger-Events: Was einen guten Moment auslöst</a></li>
    <li><a href="#frequenz" class="text-brand-600 hover:underline">Prompt-Frequenz: Wie oft nach einer Bewertung fragen?</a></li>
    <li><a href="#feedback-abfangen" class="text-brand-600 hover:underline">Schlechte Bewertungen abfangen: Internes Feedback zuerst</a></li>
    <li><a href="#fazit" class="text-brand-600 hover:underline">Fazit + FAQ</a></li>
  </ol>
</div>

---

## Was ist ein In-App-Rating-Prompt? {#was-ist-rating-prompt}

Ein In-App-Rating-Prompt ist ein systemseitiger Dialog, der Nutzern innerhalb der App die Möglichkeit gibt, eine Bewertung direkt im App Store oder Google Play Store abzugeben — ohne die App verlassen zu müssen. Der Dialog wird vom Betriebssystem gerendert, nicht von der App selbst. Das bedeutet: Deine App löst den Prompt aus, aber Apple und Google entscheiden, ob und in welcher Form er dem Nutzer angezeigt wird.

Auf iOS heißt der zugehörige Mechanismus `SKStoreReviewController.requestReview()` (in Swift) bzw. `StoreKit.requestReview(in:)` (in SwiftUI). Auf Android setzt du die **In-App Review API** aus der Play Core Library ein. In beiden Fällen öffnet sich ein systemnativer Dialog mit Sternbewertung direkt über der App — der Nutzer muss nicht in den Store navigieren, was die Conversion deutlich erhöht.

Warum ist das entscheidend? Weil Reibung der Feind von Bewertungen ist. Jeder zusätzliche Klick, jede Weiterleitung, jede benötigte Store-Anmeldung kostet Bewertungen. Studien aus dem Mobile-Marketing-Bereich zeigen, dass der In-App-Rating-Prompt die Conversion von Bewertungsanfragen gegenüber externen Verlinkungen um den Faktor 2 bis 5 erhöht — abhängig von Zeitpunkt und Zielgruppe.

Der In-App-Rating-Prompt ist damit das wichtigste Werkzeug, um deine Review-Strategie zu skalieren. Vorausgesetzt, du nutzt ihn richtig.

### Warum zufriedene Nutzer selten von sich aus bewerten

Der Grund, warum ein aktiver Prompt so viel Unterschied macht, liegt in der Psychologie des Bewertungsverhaltens. Unzufriedene Nutzer suchen aktiv nach einem Ventil für ihre Frustration und finden den Weg zum Store von selbst. Zufriedene Nutzer haben keinen starken Impuls, die Zufriedenheit öffentlich zu dokumentieren — die App funktioniert einfach, das ist die Erwartung.

Ohne aktiven Prompt entsteht deshalb eine systematische Verzerrung: Die Reviews, die organisch eingehen, überrepräsentieren negative Erfahrungen. Eine App mit 90 Prozent zufriedenen Nutzern kann bei 3,5 Sternen landen, weil die 10 Prozent Unzufriedenen siebenmal häufiger eine Bewertung hinterlassen.

Der In-App-Rating-Prompt korrigiert diese Verzerrung, indem er zufriedene Nutzer aktiv aktiviert. Das erklärt, warum Apps mit aktivem Prompt bis zu 3× mehr Bewertungen erhalten — ohne dass sich die tatsächliche Nutzerzufriedenheit verändert hat.

### Was ein Rating-Prompt nicht ist

Ein eigener, benutzerdefinierter Dialog, der Nutzern erlaubt, eine Sternbewertung innerhalb der App selbst abzugeben, ist kein Rating-Prompt im technischen Sinne — und verstößt auf iOS gegen Apples Richtlinien. Das gleiche gilt für modale Dialoge, die Nutzer zur App-Store-Seite weiterleiten, um dort zu bewerten. Apple und Google bestehen auf der Nutzung ihrer offiziellen APIs, weil sie so die Echtheit und Qualität der Reviews kontrollieren können.

---

## iOS vs. Android: Systemregeln und Limits für Rating-Prompts {#ios-vs-android}

Die Regeln, nach denen iOS und Android den In-App-Rating-Prompt verwalten, unterscheiden sich erheblich. Das hat direkte Konsequenzen für deine Strategie.

### iOS: Strikte Limits, volle Systemkontrolle

Apple setzt eine harte Grenze: **maximal 3 Prompt-Anfragen pro App innerhalb von 365 Tagen**. Das gilt pro Gerät und pro Nutzer. Wenn du `SKStoreReviewController.requestReview()` dreimal aufgerufen hast, ignoriert iOS weitere Aufrufe im laufenden Jahr — auch wenn der Nutzer die App täglich nutzt.

Zusätzlich zeigt iOS den Dialog nicht immer, wenn du ihn anforderst. Das Betriebssystem berücksichtigt interne Faktoren wie die Zeit seit der letzten Anzeige, die App-Version und ob der Nutzer in dieser Version bereits bewertet hat. Du kannst mit deiner App-Logik steuern, *wann* du anforderst — aber nicht, ob der Dialog tatsächlich erscheint. Das bedeutet: Wenn du einen der drei Slots für einen schlechten Zeitpunkt verwendest, ist er verbraucht, auch wenn der Dialog erschienen ist.

Für den Nutzer erscheint ein standardisierter Dialog mit fünf Sternen, einem optionalen Textfeld und den Buttons "Nicht jetzt" und "Bewertung abgeben". Apple hat das Design vereinheitlicht, du kannst es nicht anpassen.

**Wichtige iOS-Einschränkung**: Apps dürfen Nutzer nicht selbst nach ihrer Zufriedenheit befragen und den Prompt nur bei positiver Antwort zeigen. Dieses Vorgehen — oft als "Pre-screening" oder "Sentiment-Gate" bezeichnet — verstößt gegen Apples App Store Review Guidelines (Abschnitt 1.1.7). Wer dabei erwischt wird, riskiert eine Ablehnung beim App-Review.

### Android: Weichere Grenzen, mehr Gestaltungsspielraum

Google Play dokumentiert keine feste Limit-Zahl für die In-App Review API. Die Play-Core-Library hat aber eine interne Quotenkontrolle: Wenn ein Nutzer den Dialog bereits gesehen oder bewertet hat, zeigt Android ihn in einem Zeitraum von etwa 30 Tagen nicht erneut an. In der Praxis bedeutet das: Auch ohne harte jährliche Limits kannst du den Prompt nicht beliebig oft zeigen.

Ein weiterer Unterschied: Auf Android kannst du testen, ob der Review-Flow korrekt initialisiert wurde, und auf Fehler reagieren. Die API gibt dir mehr Kontrolle über den Ablauf als auf iOS. Du kannst z. B. prüfen, ob der Nutzer die aktuellste App-Version hat, und nur dann den Prompt zeigen.

Google ist bei der Gestaltung ebenfalls flexibler: Der Dialog erscheint als Bottom-Sheet über der App und enthält ebenfalls ein Fünf-Sterne-System. Entwickler können keinen eigenen Text oder eigene Branding-Elemente einbetten — aber die Integration in den Nutzerfluss lässt sich besser steuern.

**Wichtige Unterschiede auf einen Blick:**

| Merkmal | iOS | Android |
|---|---|---|
| Maximale Prompts pro Jahr | 3 (hart) | Keine feste Zahl (intern gedrosselt) |
| Cooldown nach Dialog | Ja, OS-gesteuert | Ca. 30 Tage |
| Sentiment-Gate erlaubt | Nein | Nein |
| Rating-Reset möglich | Ja (in App Store Connect) | Nein |
| Dialog-Design anpassbar | Nein | Nein |
| Gewichtung neuer Bewertungen | Gesamtdurchschnitt | Gleitender Durchschnitt (neuere höher gewichtet) |

### Konsequenz für deine Strategie

Auf iOS ist jeder der drei jährlichen Slots wertvoll — du musst sie gezielt planen und für hochwahrscheinlich positive Momente reservieren. Auf Android hast du mehr Spielraum, aber auch hier gilt: Wenige, gut platzierte Prompts schlagen viele ungezielte Anfragen.

---

## Timing: Wann der In-App-Rating-Prompt am besten wirkt {#timing}

Das Timing des In-App-Rating-Prompts ist die wichtigste Variable in deiner gesamten Review-Strategie. Beim falschen Moment zu fragen, führt nicht nur zu einer schlechten Bewertung — es verbraucht auch einen deiner kostbaren Prompt-Slots und kann den Nutzer negativ konditionieren.

### Das Prinzip: Nach positivem Erlebnis, vor dem Exit

Der optimale Moment für einen In-App-Rating-Prompt liegt direkt nach einem positiven Nutzungserlebnis, das einen natürlichen Abschluss hatte. Psychologisch befindest du dich hier in einem günstigen Fenster: Der Nutzer hat gerade etwas erreicht, die Stimmung ist positiv, und er ist noch in der App — hat also kein kognitives Momentum in Richtung anderer Aktivitäten aufgebaut.

Wichtig ist der zeitliche Abstand zum Erlebnis. Ein Prompt, der 30 Sekunden nach einem abgeschlossenen Level erscheint, während der Nutzer noch die Ergebnisauswertung sieht, funktioniert deutlich besser als einer, der beim nächsten App-Start fünf Tage später erscheint.

### Wann der Prompt am schlechtesten wirkt

Genauso wichtig wie die guten Momente ist das Vermeiden der schlechten. Diese Momente solltest du explizit aus deiner Trigger-Logik ausschließen:

**Direkt nach dem ersten App-Start**: Der Nutzer kennt die App nicht, hat keinen Wert erhalten und keinen Grund für eine positive Bewertung. Prompts beim Erststart führen überdurchschnittlich häufig zu "Nicht jetzt"-Klicks und verbrauchen trotzdem einen Slot.

**Nach einem Fehler, Absturz oder Timeout**: Das ist der häufigste Fehler, den Apps machen — oft, weil die Trigger-Logik nicht mit der Fehlerbehandlung verknüpft ist. Wenn ein Nutzer gerade eine Fehlermeldung gesehen hat oder die App abgestürzt ist, ist er mit hoher Wahrscheinlichkeit frustriert. Der Prompt in diesem Moment führt systematisch zu 1- und 2-Stern-Bewertungen.

**Beim App-Schließen**: Der Nutzer hat bereits die mentale Entscheidung getroffen, die App zu verlassen. Ein Prompt in diesem Moment wirkt aufdringlich und führt häufig zu negativen Reaktionen — selbst wenn die Session an sich positiv war.

**Während eines aktiven Prozesses**: Nutzer mitten in einem Checkout, Onboarding oder einer langen Eingabemaske zu unterbrechen, erzeugt Frustration. Warte, bis der Prozess abgeschlossen ist.

**Innerhalb der ersten 3 App-Starts**: Nutzer, die die App noch kaum kennen, können keine fundierte Bewertung abgeben. Mindestens 3 bis 5 Sessions sollten vergangen sein, bevor du fragst.

### Der Aha-Moment als Trigger-Ankerpunkt

Jede App hat einen "Aha-Moment" — den Punkt, an dem Nutzer zum ersten Mal den Kernnutzen der App wirklich erleben. Bei einer Fitness-App könnte das das erste abgeschlossene Training sein. Bei einer Finanz-App der erste gespeicherte Monatsbericht. Bei einem Tool-App der erste erfolgreich exportierte Output.

Dieser Moment ist ein besonders wertvoller Trigger, weil er den höchsten positiven emotionalen Wert im gesamten Nutzer-Journey hat — und gleichzeitig oft einen natürlichen Abschluss markiert. Identifiziere den Aha-Moment deiner App und baue ihn als primären Prompt-Trigger ein.

---

## Trigger-Events: Was einen guten Moment auslöst {#trigger-events}

Nachdem du das Timing-Prinzip verstanden hast, brauchst du konkrete Events, an denen du den In-App-Rating-Prompt aufhängst. Hier sind die wirkungsvollsten Trigger-Kategorien mit Beispielen.

### Aufgaben-Completion-Events

Der Nutzer schließt eine Kernaufgabe der App erfolgreich ab. Das ist der zuverlässigste und meistgenutzte Trigger — und das aus gutem Grund.

Beispiele nach App-Typ:

- **E-Commerce-App**: Bestellung erfolgreich aufgegeben
- **Fitness-App**: Trainingseinheit abgeschlossen oder Wochenziel erreicht
- **Finanz-App**: Budget erstellt, Ausgabe erfasst, Bericht exportiert
- **Produktivitäts-App**: Aufgabe oder Projekt abgehakt, Liste geleert
- **Navigation/Reise-App**: Reise abgeschlossen, Route erfolgreich gefahren
- **Gaming-App**: Level abgeschlossen, Achievement freigeschaltet, Boss besiegt

Der Schlüssel: Das Event muss wirklich einen Abschluss markieren, kein Zwischenschritt. "Nutzer hat ein Element einer Liste angeklickt" ist kein Completion-Event. "Nutzer hat alle Elemente der Liste erledigt" ist eines.

### Milestone-Events

Der Nutzer erreicht einen quantitativen Meilenstein, der Loyalität oder Engagement dokumentiert.

Beispiele:

- **10., 20., 50. App-Start**: Nur für Nutzer, die die App regelmäßig verwenden — ein starkes Signal für Zufriedenheit
- **Streak-Erreichen**: 7 Tage in Folge genutzt, 30-Tage-Streak
- **Feature-Meilenstein**: Erste 100 erfasste Daten, erster Tausend-Euro-Sparschritt in einer Finanz-App
- **Jubiläum**: Nutzer ist seit 30 oder 90 Tagen aktiv

Milestone-Events sind besonders wertvoll, weil sie aktive, engagierte Nutzer treffen — genau die Gruppe, die am wahrscheinlichsten eine positive Bewertung abgibt.

### Feature-Discovery-Events

Der Nutzer hat ein wichtiges Feature zum ersten Mal erfolgreich genutzt. Dieser Trigger eignet sich gut für etablierte Nutzer, die noch nicht bewertet haben, und hilft, die Review-Aktivität nach Feature-Releases zu erhöhen.

Beispiel: Ein Nutzer nutzt zum ersten Mal die Export-Funktion und schließt den Export erfolgreich ab. Direkt danach: Prompt.

Achte darauf, dass das Feature einen echten Wert geliefert haben muss — nicht nur geöffnet, sondern vollständig genutzt.

### Support-Completion-Events

Der Nutzer hat einen In-App-Support-Kontakt gehabt, und die Anfrage wurde als gelöst markiert. Dieser Trigger ist weniger verbreitet, aber besonders effektiv: Nutzer, die schnell und gut geholfen bekommen haben, sind überdurchschnittlich bereit, das mit einer positiven Bewertung zu quittieren.

### Was du aus Triggern ausschließen musst

Baue eine explizite Ausschluss-Logik in deinen Rating-Prompt-Code ein:

- **Session innerhalb von 24 Stunden nach einem Absturz**: Prüfe die Crashlytics-Daten und blocke den Prompt für alle Nutzer, die in den letzten 24 Stunden einen Absturz hatten
- **Nutzer mit offenen Support-Tickets**: Wer gerade auf Hilfe wartet, ist kein guter Kandidat
- **Nutzer, die gerade eine Fehlermeldung gesehen haben**: In-Session-Tracking des letzten Error-Events
- **Nutzer, die "Nicht jetzt" im letzten Prompt geklickt haben**: Erhöhe die Wartezeit auf mindestens 60 Tage

---

## Prompt-Frequenz: Wie oft nach einer Bewertung fragen? {#frequenz}

Die Frage, wie oft du den In-App-Rating-Prompt zeigen sollst, hat zwei Dimensionen: die technischen Limits der Plattformen und die Nutzererfahrung.

### Technische Frequenzgrenzen

Auf **iOS** sind die Limits klar: 3 Anfragen pro 365 Tage. Das bedeutet rein rechnerisch maximal eine Anfrage alle 4 Monate. In der Praxis solltest du die drei Slots nicht gleichmäßig verteilen, sondern opportunistisch platzieren — immer dann, wenn ein besonders starkes Trigger-Event vorliegt.

Auf **Android** gibt es keine dokumentierten harten Limits, aber die Play Core Library drosselt eigenständig. Nutze den ersten Prompt frühestens nach dem 3. bis 5. App-Start, und warte nach einer gezeigten Anfrage mindestens 30 Tage, bevor du erneut anforderst.

### Interne Frequenzlogik

Unabhängig von den Plattform-Limits solltest du eigene Frequenzregeln implementieren:

**Minimum-Sessions**: Zeige den Prompt erst, wenn der Nutzer mindestens 3 bis 5 Sessions abgeschlossen hat. Das stellt sicher, dass er die App wirklich kennt.

**Cooldown nach Ablehnung**: Wenn ein Nutzer "Nicht jetzt" klickt, warte mindestens 60 Tage, bevor du erneut anfragst. Aggressivere Wiederholungen führen zu Frustration und schlechteren Bewertungen.

**Bewertungs-Status tracken**: Tracke, ob ein Nutzer bereits eine Bewertung hinterlassen hat (über die StoreKit-API auf iOS möglich). Nutzer, die bereits bewertet haben, brauchen keinen weiteren Prompt — sie brauchen bestenfalls nach einem Major Update einen neuen.

**Versionsbezogene Resets**: Nach einem Major Release ist es sinnvoll, die Prompt-Logik für alle Nutzer zurückzusetzen. Das neue Feature-Set rechtfertigt eine neue Anfrage — auch von Nutzern, die bereits bewertet haben.

### Das Frequenz-Paradox

Mehr Prompts bedeuten nicht automatisch mehr Bewertungen. Studien aus dem Mobile Marketing zeigen ein klares Muster: Apps, die Prompts sehr häufig zeigen, erhalten in der kurzen Frist mehr Anfragen, aber die Conversion Rate sinkt — und die durchschnittliche Bewertung auch. Nutzer, die das Gefühl haben, genervt zu werden, lehnen entweder ab oder geben Frustrationsbewertungen ab.

Wenige, gut platzierte Prompts nach starken positiven Ereignissen übertreffen in Conversion Rate und Bewertungsqualität konsistent jede Strategie mit hoher Frequenz.

---

## Schlechte Bewertungen abfangen: Internes Feedback zuerst {#feedback-abfangen}

Eine der wirkungsvollsten Methoden, die Durchschnittsbewertung zu schützen, ist das Abfangen von negativem Feedback, bevor es im Store landet. Das Prinzip: Du bietest Nutzern mit negativem Erlebnis einen internen Feedback-Kanal an, bevor sie den Store-Prompt sehen.

### Wie das funktioniert (ohne Richtlinien zu verletzen)

Das häufig diskutierte "Sentiment-Gate" — erst fragen, ob der Nutzer zufrieden ist, und nur bei "Ja" den Store-Prompt zeigen — verstößt gegen Apples Richtlinien und ist verboten. Es gibt aber eine regelkonforme Variante: das zeitliche und situative Targeting.

Du fragst nicht, ob Nutzer zufrieden sind. Du bietest Nutzern nach negativen Events (Fehlermeldung, Supportanfrage, abgebrochener Prozess) einen internen Feedback-Kanal an — und zeigst in diesen Situationen keinen Store-Prompt. Das ist keine Vorselektion nach Stimmung, sondern intelligentes Timing.

Der Ablauf:

1. Nutzer erlebt einen negativen Moment (Fehler, abgebrochener Prozess, Supportanfrage)
2. App bietet internen Feedback-Dialog an: "Etwas nicht geklappt? Schreib uns direkt."
3. Feedback geht an dein Team, nicht an den Store
4. Du kannst proaktiv helfen und das Problem lösen
5. Nach der Lösung: optional Store-Prompt als Follow-up

Dieser Ablauf schützt deinen Store-Rating, weil unzufriedene Nutzer ihren Unmut intern kanalisieren. Gleichzeitig gewinnst du wertvolles Feedback, das du sonst nicht bekommen hättest — und die Chance, den Nutzer in einen zufriedenen Bewerter zu verwandeln.

### Internes Feedback-System: Mindestanforderungen

Ein einfaches In-App-Feedback-System muss nicht komplex sein. Folgende Elemente reichen aus:

- **Freitext-Eingabefeld**: Was war das Problem? Was hätte du erwartet?
- **Screenshot-Anhang** (optional): Nutzer können einen Screenshot des Problems hinzufügen
- **E-Mail-Rückkanal**: Wer Antwort möchte, gibt seine E-Mail an
- **Kategorie-Auswahl** (optional): Bug, Feature-Wunsch, Feedback

Das Wichtigste: Das Feedback muss bei deinem Team ankommen und innerhalb von 48 Stunden bearbeitet werden. Ein Feedback-System, das ins Leere läuft, ist schlimmer als keines — es weckt Erwartungen, die nicht erfüllt werden.

### Der Follow-up-Prompt

Wenn du ein Problem aus dem internen Feedback gelöst hast, ist das der ideale Zeitpunkt für einen Store-Prompt. Der Nutzer weiß, dass sein Feedback gehört wurde, das Problem ist behoben, die Stimmung ist positiv. In diesem Kontext ist die Conversion zum positiven Review deutlich höher als bei einem generischen Prompt.

Auf iOS kannst du das realisieren, indem du nach dem Bug-Fix-Update den Prompt beim nächsten App-Start oder nach der ersten erfolgreichen Kernaufgabe zeigst — und in der Prompt-Begleitkommunikation (über eine vorgelagerte In-App-Benachrichtigung) auf das Update hinweist.

### Negative Reviews im Store nicht ignorieren

Selbst das beste Feedback-Abfang-System verhindert nicht alle negativen Store-Reviews. Nutzer, die direkt zum Store gehen, ohne den internen Kanal zu nutzen, sind nicht erreichbar. Hier hilft nur aktives Review-Management: zeitnah antworten, das Problem anerkennen, auf ein Update hinweisen.

Detaillierte Strategien zum Umgang mit negativem Feedback und zum systematischen Verbessern deiner Store-Bewertung findest du in unserem Artikel zur [App Store Bewertung verbessern](/blog/app-store-bewertung-verbessern).

![Rating-Prompt-Strategie: Gute vs. schlechte Zeitpunkte im Vergleich](/assets/blog/in-app-rating-prompt-strategie.svg)

---

## Fazit {#fazit}

Der In-App-Rating-Prompt ist das wirkungsvollste Werkzeug, das du für deine Review-Strategie hast — aber nur, wenn du ihn richtig einsetzt. Drei Takeaways, die den größten Unterschied machen:

**1. Timing ist alles.** Bitte nach einem positiven Nutzungserlebnis mit natürlichem Abschluss — nie nach einem Fehler, nie beim ersten App-Start, nie beim Schließen der App. Der Moment entscheidet, ob du eine 4,8 oder eine 3,2 als Bewertung bekommst.

**2. iOS-Limits sind kein Kostenfaktor, sondern ein Qualitätsfilter.** Drei Prompts pro Jahr zwingen dich zur Priorisierung. Nutze diese Beschränkung als Designprinzip: Jeder Prompt-Slot muss einen starken Trigger-Event haben. Das Ergebnis ist eine höhere Conversion und ein besserer Durchschnitt.

**3. Internes Feedback schützt deinen Store-Rating.** Du kannst unzufriedene Nutzer nicht aus dem Store heraushalten, aber du kannst ihnen einen besseren Kanal anbieten — einen, auf dem dein Team reagieren kann. Wer intern gehört wird, geht seltener zum Store.

Wie der Rating-Prompt in die gesamte Bewertungsstrategie eingebettet ist und wie du systematisch eine bessere Durchschnittsbewertung aufbaust, zeigen wir in unserem Artikel zur [App Store Bewertung verbessern](/blog/app-store-bewertung-verbessern).

---

## FAQ {#faq}

**Wann sollte ich den In-App-Rating-Prompt zeigen?**

Der optimale Zeitpunkt ist direkt nach einem positiven, abgeschlossenen Nutzungserlebnis: nach einer erledigten Kernaufgabe, einem erreichten Milestone oder dem ersten erfolgreichen Einsatz eines wichtigen Features. Ausschließen solltest du explizit: direkt nach dem ersten App-Start, nach einem Fehler oder Absturz, während eines aktiven Prozesses und beim Schließen der App. Frühestens nach dem 3. bis 5. App-Start sollte ein Prompt überhaupt möglich sein.

**Wie oft darf ich Nutzer nach einer Bewertung fragen?**

Auf iOS sind technisch maximal 3 Prompt-Anfragen pro App und Jahr möglich — das Betriebssystem ignoriert weitere Aufrufe. Auf Android gibt es keine dokumentierte Hartobergrenze, aber die interne Drosselung führt zu einer Cooldown-Phase von ca. 30 Tagen nach einem gezeigten Dialog. Unabhängig von den Plattform-Limits empfiehlt sich eine eigene Logik: mindestens 60 Tage Abstand nach einer Ablehnung, bewertungsbasiertes Tracking und keine Wiederholung für Nutzer, die bereits bewertet haben.

**Was ist der Unterschied zwischen iOS und Android beim Rating-Prompt?**

iOS setzt eine harte Grenze von 3 Prompt-Anfragen pro App und Jahr (pro Nutzer und Gerät). Das OS entscheidet eigenständig, ob der Dialog angezeigt wird. Android hat keine dokumentierten harten Limits, drosselt aber intern — nach einem gezeigten Dialog ca. 30 Tage Pause. Auf iOS lässt sich außerdem der Rating-Durchschnitt bei einem Major Update zurücksetzen; auf Android nicht. Google Play gewichtet neuere Bewertungen stärker als ältere (gleitender Durchschnitt), während iOS den Gesamtdurchschnitt aller Versionen anzeigt.

**Wie verhindere ich, dass unzufriedene Nutzer eine schlechte Bewertung hinterlassen?**

Das direkte Abfangen durch ein "Sentiment-Gate" — erst fragen, ob der Nutzer zufrieden ist, dann den Store-Prompt zeigen — verstößt gegen Apples Richtlinien. Die regelkonforme Alternative ist intelligentes Timing: Nach negativen Events (Fehler, Absturz, abgebrochener Prozess) zeigst du keinen Store-Prompt, sondern bietest einen internen Feedback-Kanal an. Unzufriedene Nutzer können ihr Feedback direkt an dein Team senden. Du kannst reagieren, das Problem lösen und danach einen Store-Prompt als Follow-up einsetzen. Das schützt deine Durchschnittsbewertung, ohne Plattformregeln zu verletzen.

---

<div class="not-prose my-8 rounded-xl bg-brand-950 p-8 text-center">
  <p class="text-lg font-semibold text-white mb-2">Store-Bewertungen systematisch verbessern</p>
  <p class="text-brand-200 mb-4">App-Care analysiert Bewertungstrends und hilft dir, die richtigen Momente für Rating-Prompts datenbasiert zu identifizieren.</p>
  <a href="/leistungen" class="btn-primary">Leistungen ansehen</a>
</div>
