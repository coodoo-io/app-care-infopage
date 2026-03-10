---
title: "Mobile App Analytics einrichten: Der komplette Setup-Guide"
description: "Mobile App Analytics einrichten: Welche Events du tracken solltest, wie du ein sauberes Event-Schema aufbaust, welche KPIs du von Anfang an misst und typische Setup-Fehler vermeidest."
pubDate: 2026-04-07
author: "Markus Kühle"
category: "KPI & Analytics"
---

# Mobile App Analytics einrichten: Der komplette Setup-Guide

Viele Apps sammeln Daten, aber die wenigsten sammeln die richtigen. Ein Analytics-Setup, das in Jahr 1 nicht durchdacht wurde, kostet in Jahr 2 Monate an Nacharbeit — und wichtige Entscheidungen werden trotzdem auf Basis von Lücken getroffen. Wer mobile app analytics einrichten will, der sollte das von Anfang an strukturiert angehen: mit klaren Event-Kategorien, konsistenten Namenskonventionen und einem Pflicht-Event-Set, das alle relevanten KPIs messbar macht.

![Mobile App Analytics: Die vier Event-Kategorien im Überblick](/assets/blog/mobile-app-analytics-einrichten-events.svg)

<div class="not-prose my-6 rounded-xl border border-brand-200 bg-brand-50 p-6">
  <p class="text-sm font-semibold text-brand-900 mb-3">Das Wichtigste in Kürze</p>
  <ul class="space-y-2 text-sm text-brand-800 m-0 p-0 list-none">
    <li>— <strong>20–30 Pflicht-Events</strong> reichen für den Start — mehr Events bedeuten mehr Rauschen, nicht mehr Erkenntnisse</li>
    <li>— <strong>4 Event-Kategorien</strong> strukturieren jedes Analytics-Setup: Screen, Action, Conversion und Error</li>
    <li>— <strong>Max. 40 Zeichen</strong> pro Event-Name (technisches Limit vieler Analytics-Plattformen) — Konsistenz schlägt Ausführlichkeit</li>
    <li>— <strong>Min. 6 Wochen Daten</strong> sind nötig, bevor Aussagen über Trends statistisch valide sind</li>
    <li>— <strong>Event-Properties</strong> entscheiden, wie tief du auswerten kannst — sie müssen von Anfang an mitgedacht werden</li>
  </ul>
</div>

<div class="not-prose my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
  <p class="text-sm font-semibold text-gray-700 mb-3">Inhaltsverzeichnis</p>
  <ol class="list-decimal list-inside space-y-1.5 text-sm text-gray-700 m-0 p-0">
    <li><a href="#was-ist-analytics" class="text-brand-600 hover:underline">Was ist Mobile App Analytics?</a></li>
    <li><a href="#event-kategorien" class="text-brand-600 hover:underline">Die vier Event-Kategorien: Screen, Action, Conversion, Error</a></li>
    <li><a href="#event-schema" class="text-brand-600 hover:underline">Event-Schema aufbauen: Namenskonventionen und Struktur</a></li>
    <li><a href="#pflicht-events" class="text-brand-600 hover:underline">Pflicht-Events: Was du von Anfang an tracken musst</a></li>
    <li><a href="#kpis-berechnen" class="text-brand-600 hover:underline">KPIs automatisch aus Events berechnen</a></li>
    <li><a href="#fehler" class="text-brand-600 hover:underline">Häufige Analytics-Setup-Fehler</a></li>
    <li><a href="#fazit" class="text-brand-600 hover:underline">Fazit + FAQ</a></li>
  </ol>
</div>

---

## Was ist Mobile App Analytics? {#was-ist-analytics}

Mobile App Analytics bezeichnet die systematische Erfassung, Auswertung und Interpretation von Nutzungsverhalten in einer mobilen Anwendung. Das Ziel ist nicht das Sammeln von Rohdaten um ihrer selbst willen, sondern das Ableiten von Entscheidungen: Welche Features werden genutzt? Wo brechen Nutzer ab? Welche Aktionen führen zur Conversion?

Im Kern funktioniert jede Analytics-Lösung nach demselben Prinzip: Der Client — also die App selbst — sendet strukturierte Ereignisse (Events) an einen Server oder eine Cloud-Plattform, die diese Daten speichert, aggregiert und zur Auswertung bereitstellt. Jedes Event besteht mindestens aus einem Namen (z. B. `screen_view`) und einem Zeitstempel. Dazu kommen optionale Eigenschaften (Properties), die den Kontext liefern: Welcher Screen? Welcher Nutzer? Welches Betriebssystem?

Die Qualität deines Analytics-Setups hängt nicht von der Wahl der Plattform ab, sondern von drei Entscheidungen:

1. **Welche Events trackst du?** — Zu wenige Events bedeuten blinde Flecken. Zu viele bedeuten Rauschen, das die wichtigen Signale überdeckt.
2. **Wie benennst du Events konsistent?** — Ein chaotisches Namensschema macht Daten über Releases hinweg unvergleichbar.
3. **Welche Properties gibst du mit?** — Properties entscheiden, wie granular du segmentieren und auswerten kannst.

### Warum ein durchdachtes Setup von Anfang an entscheidend ist

Ein häufiges Muster: Teams starten mit dem Standard-Setup einer Analytics-Plattform, aktivieren automatisch erfasste Events und nehmen manuell ein Dutzend weitere hinzu — ohne Schema, ohne Konsistenz. Nach 6 Monaten sind die Daten nicht vergleichbar. Event-Namen wurden umbenannt, Properties fehlen, neue Entwickler haben eigene Konventionen eingeführt.

Das Ergebnis: Bevor du mit der echten Analyse beginnen kannst, musst du erst Monate Daten bereinigen — oder noch schlimmer, auf Basis fehlerhafter Daten entscheiden.

Wer mobile app analytics einrichten will, der sollte deshalb vor dem ersten Event-Call drei Dinge festlegen: das Event-Schema, die Namenskonvention und das Pflicht-Event-Set. Dieser Guide zeigt dir, wie das geht.

---

## Die vier Event-Kategorien: Screen, Action, Conversion, Error {#event-kategorien}

Bevor du einzelne Events definierst, brauchst du eine Taxonomie — ein System, das Events in sinnvolle Kategorien einteilt. Die bewährteste Einteilung für mobile Apps verwendet vier Kategorien:

### 1. Screen Events — Bildschirm-Aufrufe erfassen

Screen Events dokumentieren, welche Screens eines Nutzers die App geöffnet hat und in welcher Reihenfolge. Sie sind die Grundlage für Funnel-Analysen und Navigation-Flows.

Typische Screen Events:
- `screen_view` (oft automatisch erfasst, aber muss konfiguriert werden)
- `page_open` (für Page-basierte Strukturen)
- `tab_switch` (wenn die App eine Tab-Navigation hat)
- `modal_open`, `modal_close`

Screen Events sollten immer den Screen-Namen als Property mitführen (`screen_name: "checkout"`) und idealerweise die vorherige Seite (`previous_screen`). So kannst du Navigation-Pfade rekonstruieren.

### 2. Action Events — Nutzerinteraktionen dokumentieren

Action Events erfassen alles, was ein Nutzer aktiv tut: Tippen, Wischen, Ausfüllen, Absenden. Sie zeigen, wie Nutzer mit deiner App interagieren — und welche Features tatsächlich genutzt werden.

Typische Action Events:
- `button_tap` mit Property `button_id`
- `form_submit` mit Property `form_name`
- `swipe` mit Property `direction`
- `search_performed` mit Property `query_length` (nicht den Query-Text selbst — Datenschutz)
- `filter_applied`, `sort_changed`

Action Events bilden zusammen mit Screen Events das Fundament für Kohorten- und Flow-Analysen.

### 3. Conversion Events — Ziel-Ereignisse messen

Conversion Events markieren die Momente, die für dein Geschäft zählen. Sie sind die Events, auf die alle anderen hinarbeiten. Die Definition von Conversions ist product-spezifisch — sie hängt davon ab, was deine App leisten soll.

Typische Conversion Events:
- `user_signup` / `registration_complete`
- `first_purchase`
- `subscription_started`
- `onboarding_complete`
- `feature_unlocked`

Conversion Events brauchen immer einen Wert als Property — entweder monetär (`revenue`, `currency`) oder als Milestone-Bezeichnung. Ohne diesen Kontext sind sie nutzlos für Funnel-Analysen.

### 4. Error Events — Fehler systematisch erfassen

Error Events sind der am häufigsten vernachlässigte Bereich im Analytics-Setup — und einer der wertvollsten. Sie zeigen, wo die App technisch oder UX-seitig versagt.

Typische Error Events:
- `api_error` mit Properties `endpoint`, `status_code`, `error_message`
- `crash_trigger` (ergänzend zum automatischen Crash-Reporting)
- `validation_error` mit `field_name` und `error_type`
- `timeout_error` mit `request_duration`
- `payment_failed` mit `error_code`

Error Events sind keine Duplikate von Crash-Reports. Sie erfassen Fehler, die die App nicht zum Absturz bringen, aber den Nutzer blockieren — fehlgeschlagene API-Calls, ungültige Eingaben, Timeout-Situationen.

---

## Event-Schema aufbauen: Namenskonventionen und Struktur {#event-schema}

Ein Event-Schema ist das Regelwerk, nach dem alle Events in deiner App benannt und strukturiert werden. Es ist das wichtigste Dokument deines Analytics-Setups — wichtiger als die Wahl der Plattform.

### Die Grundregel: Konsistenz über Ausdrucksstärke

Event-Namen müssen konsistent sein, nicht präzise. `button_tap` ist besser als `tap_on_checkout_button_in_cart_screen`, weil er mit einer sauberen Property (`button_id: "checkout_cart"`) genauso viel Information trägt — aber in einem einheitlichen Format.

Gute Namenskonventionen folgen diesen Prinzipien:

- **Kleinbuchstaben mit Unterstrichen** (`snake_case`): `user_signup`, nicht `UserSignup` oder `userSignup`
- **Verb-Objekt-Struktur** für Action Events: `button_tap`, `form_submit`, `file_upload`
- **Objekt-Zustand-Struktur** für Zustände: `onboarding_complete`, `subscription_active`
- **Max. 40 Zeichen** — das ist das technische Limit vieler Analytics-Plattformen; wer es überschreitet, riskiert Silent Drops oder Trunkierungen
- **Kein PII** im Event-Namen oder in Properties (kein Name, keine E-Mail, keine User-ID im Klartext ohne Hashing)

### Property-Struktur standardisieren

Neben dem Event-Namen sind Properties das zweite kritische Element. Definiere für jeden Event-Typ ein Standard-Set an Properties:

**Globale Properties** (für jeden Event):
- `platform`: `ios` / `android`
- `app_version`: `2.3.1`
- `session_id`: anonymisierte Session-Kennung
- `user_type`: `new` / `returning` / `subscriber`

**Screen-spezifische Properties:**
- `screen_name`: Name des aktuellen Screens
- `previous_screen`: Name des vorherigen Screens
- `screen_load_time`: Ladezeit in Millisekunden

**Conversion-spezifische Properties:**
- `revenue`: Betrag als Dezimalzahl
- `currency`: ISO-4217-Code (`EUR`, `USD`)
- `product_id`: interne Produkt-Kennung
- `conversion_source`: woher kam der Nutzer (`organic`, `push`, `email`)

### Das Event-Tracking-Dokument

Lege ein zentrales Tracking-Dokument an — eine einfache Tabelle mit diesen Spalten:

| Event-Name | Kategorie | Properties | Plattform | Owner | Status |
|---|---|---|---|---|---|
| `screen_view` | Screen | `screen_name`, `previous_screen` | iOS + Android | Backend | Aktiv |
| `user_signup` | Conversion | `method`, `source` | iOS + Android | Mobile | Aktiv |
| `api_error` | Error | `endpoint`, `status_code` | iOS + Android | Backend | Aktiv |

Dieses Dokument ist das Single Source of Truth für alle Beteiligten — Entwickler, Analytics-Team, Product Manager. Ohne es entsteht innerhalb weniger Sprints Chaos.

---

## Pflicht-Events: Was du von Anfang an tracken musst {#pflicht-events}

Wer mobile app analytics einrichten will, steht vor der Frage: Womit fange ich an? Die Antwort ist ein Pflicht-Event-Set von 20–30 Events, das alle wesentlichen KPIs messbar macht — ohne die Implementierung zu überlasten.

Hier ist das empfohlene Pflicht-Event-Set, geordnet nach Priorität:

### Priorität 1 — Pflicht ab Tag 1

Diese Events müssen vor dem ersten produktiven Release implementiert sein. Ohne sie bist du analytisch blind.

**`app_open`**
Wird ausgelöst, wenn die App aus dem Hintergrund geholt oder neu gestartet wird. Grundlage für DAU- und MAU-Berechnung.
- Properties: `source` (cold_start / warm_start), `push_notification_id` (wenn über Push geöffnet)

**`screen_view`**
Jeder Bildschirmwechsel in der App. Grundlage für Navigation-Flow-Analysen.
- Properties: `screen_name`, `previous_screen`, `referrer`

**`user_signup`**
Abschluss der Registrierung. Startpunkt des Nutzer-Lifecycles.
- Properties: `method` (email / google / apple / facebook), `source` (organic / paid / referral)

**`first_purchase`**
Erste Transaktion eines Nutzers. Kritisch für LTV- und Conversion-Analysen.
- Properties: `revenue`, `currency`, `product_id`, `payment_method`

**`crash_event`**
Programmatisch ausgelöst, bevor die App abstürzt oder eine kritische Exception auftritt — ergänzend zum automatischen Crash-Reporting.
- Properties: `error_type`, `screen_name`, `stack_trace_hash`

**`session_start`** / **`session_end`**
Start und Ende einer Nutzungssession. Grundlage für Session-Längen-Analysen.
- Properties bei `session_end`: `session_duration`, `screens_visited`, `actions_performed`

**`api_error`**
Jeder fehlgeschlagene API-Call. Grundlage für technische Qualitätsmessungen.
- Properties: `endpoint`, `status_code`, `error_message` (gekürzt), `retry_count`

### Priorität 2 — Innerhalb des ersten Monats

Diese Events sollten innerhalb des ersten Monats nach Launch implementiert sein, sobald der Betrieb stabil läuft.

**`onboarding_step_viewed`** (mit Step-Nummer als Property)
Jeder Schritt im Onboarding-Flow. Ermöglicht Funnel-Analyse und Identifikation von Drop-off-Punkten.
- Properties: `step_number`, `step_name`, `is_skippable`

**`onboarding_complete`**
Abschluss des Onboardings. Wichtige Conversion für neue Nutzer.
- Properties: `time_to_complete` (in Sekunden), `steps_skipped`

**`feature_used`**
Aufruf eines spezifischen Features. Zeigt, welche Features tatsächlich genutzt werden.
- Properties: `feature_name`, `entry_point`

**`search_performed`**
Jede Suche in der App — ohne den Suchbegriff selbst (Datenschutz).
- Properties: `results_count`, `has_results` (boolean), `search_source`

**`rating_prompt_shown`** / **`rating_prompt_responded`**
Wann der Rating-Dialog gezeigt wird und wie Nutzer reagieren.
- Properties: `trigger_event`, `response` (rate / cancel / later)

**`push_notification_received`** / **`push_notification_opened`**
Empfang und Öffnung von Push-Nachrichten. Grundlage für Push-Engagement-Messungen.
- Properties: `notification_type`, `campaign_id`, `time_since_sent`

### Priorität 3 — Später optimieren

Diese Events liefern wertvolle Erkenntnisse, sind aber nicht für den Start kritisch.

**`share_content`**
Wenn ein Nutzer Inhalte teilt. Wichtig für virale Wachstumsmessungen.
- Properties: `content_type`, `share_method`, `destination`

**`notification_settings_changed`**
Opt-in oder Opt-out von Push-Benachrichtigungen.
- Properties: `new_setting`, `previous_setting`, `notification_type`

**`settings_changed`**
Jede Änderung in den App-Einstellungen.
- Properties: `setting_name`, `new_value` (anonymisiert)

**`support_opened`**
Öffnung des Support-Bereichs oder Aufruf des Help-Centers.
- Properties: `entry_point`, `context_screen`

**`subscription_cancelled`**
Kündigung eines Abonnements — einer der wichtigsten Events für churn-getriebene Analysen.
- Properties: `subscription_type`, `reason` (wenn angegeben), `time_as_subscriber`

---

## KPIs automatisch aus Events berechnen {#kpis-berechnen}

Events sind Rohdaten. KPIs sind die Kennzahlen, die du daraus berechnest. Eine der häufigsten Fragen beim Analytics-Setup ist: Welche KPIs kann ich aus welchen Events ableiten?

Hier sind die wichtigsten Berechnungen:

### Daily Active Users (DAU) und Monthly Active Users (MAU)

**Events:** `app_open` oder `session_start`

**Berechnung:** Anzahl eindeutiger Nutzer-IDs, die in einem Tag (DAU) oder einem Monat (MAU) mindestens ein `app_open`-Event ausgelöst haben.

**Hinweis:** Die Eindeutigkeit wird über eine anonymisierte Nutzer-ID bestimmt, nicht über Geräte-IDs — ein Nutzer mit zwei Geräten zählt sonst doppelt.

### Retention Rate

**Events:** `app_open` oder `session_start` mit Timestamp

**Berechnung (Day-7-Retention):**
- Kohorten-Bildung: Alle Nutzer, die an Tag 0 (`user_signup`) registriert haben
- Messung: Welcher Anteil hat an Tag 6–8 wieder `app_open` ausgelöst?
- Formel: `(Nutzer mit app_open an Tag 7 / Nutzer mit user_signup an Tag 0) × 100`

**Wichtig:** Mindestens 6 Wochen Daten sind nötig, bevor Retention-Aussagen statistisch valide sind. Mit weniger als 4 Wochen sind Kohorten zu klein für zuverlässige Trends.

### Onboarding-Completion-Rate

**Events:** `onboarding_step_viewed` (alle Steps), `onboarding_complete`

**Berechnung:** Für jeden Schritt den Drop-off messen:
- Step-1-Abschlussrate: Nutzer, die Step 2 erreicht haben / Nutzer, die Step 1 gesehen haben
- Gesamt-Completion-Rate: Nutzer mit `onboarding_complete` / Nutzer mit `onboarding_step_viewed` (Step 1)

Diese Berechnung zeigt genau, wo im Onboarding Nutzer verloren gehen.

### Feature-Adoption-Rate

**Events:** `feature_used` (nach `feature_name` gruppiert), `app_open`

**Berechnung:** Anteil der aktiven Nutzer (MAU), die ein bestimmtes Feature mindestens einmal genutzt haben.
- Formel: `(Unique User-IDs mit feature_used (feature_name: X) / MAU) × 100`

Ein Wert unter 10 % für ein Core-Feature ist ein starkes Signal für ein UX- oder Awareness-Problem.

### Push-Engagement-Rate

**Events:** `push_notification_received`, `push_notification_opened`

**Berechnung:**
- Open Rate: `(push_notification_opened / push_notification_received) × 100`
- Benchmark: 3–10 % für transaktionale Benachrichtigungen, 1–4 % für Marketing-Benachrichtigungen

### Crash Rate (aus Analytics ergänzend)

**Events:** `crash_event`, `session_start`

**Berechnung:**
- Crash Rate: `(Sessions mit crash_event / Gesamtzahl Sessions) × 100`
- Gut: unter 0,1 % — das entspricht dem Benchmark für qualitativ hochwertige Apps

**Hinweis:** Diese Berechnung ist eine Ergänzung, kein Ersatz für dediziertes Crash-Reporting. Crash-Reporting-Tools erfassen auch Abstürze, bei denen kein Event mehr gesendet werden kann.

### Conversion Rate (Signup zu First Purchase)

**Events:** `user_signup`, `first_purchase`

**Berechnung:**
- Kohorten-Bildung: Alle Nutzer nach `user_signup` in einem Zeitraum
- Messung: Welcher Anteil hat innerhalb von 30 Tagen `first_purchase` ausgelöst?
- Formel: `(Unique User-IDs mit first_purchase innerhalb 30 Tage / Unique User-IDs mit user_signup) × 100`

---

## Häufige Analytics-Setup-Fehler {#fehler}

Selbst erfahrene Teams machen beim Analytics-Setup wiederkehrende Fehler. Hier sind die häufigsten — und wie du sie vermeidest.

### Fehler 1: Events tracken, bevor das Schema steht

Der häufigste Fehler: Entwickler beginnen mit der Event-Implementierung, bevor ein Namensschema definiert wurde. Das Ergebnis sind inkonsistente Namen (`ButtonTap`, `button_tapped`, `tap_button`) für die gleiche Aktion — je nach Entwickler, Plattform oder Sprint.

**Lösung:** Das Tracking-Dokument kommt vor der ersten Event-Implementierung. Keine Ausnahme.

### Fehler 2: Kein Property-Standard für globale Felder

Teams definieren Event-spezifische Properties, vergessen aber globale Properties wie `app_version` oder `platform`. Das Ergebnis: Du kannst nicht filtern, welche App-Version ein Problem eingeführt hat.

**Lösung:** Definiere einen globalen Property-Standard, der für jeden Event automatisch mitgeschickt wird. Die meisten Analytics-SDKs bieten hierfür User-Properties oder Super-Properties an.

### Fehler 3: PII in Events

Datenschutz-Fehler im Analytics-Setup sind nicht nur ein regulatorisches Problem — sie können zur Löschung ganzer Datensätze führen. Typische Fehler: E-Mail-Adressen als User-Property, Klarnamen in `search_query`-Properties, Standortdaten ohne Aggregation.

**Lösung:** Kein PII in Event-Namen oder Properties. User-IDs hashen. Properties, die Rückschlüsse auf Personen zulassen könnten, weglassen oder aggregieren.

### Fehler 4: Zu viele Events von Anfang an

Der Gegenfehler zur unvollständigen Erfassung: Teams tracken alles, was technisch möglich ist. Das führt zu 200+ Events, die niemand auswertet, zu Quota-Überschreitungen bei der Analytics-Plattform und zu einem Rauschen, das die wichtigen Signale unsichtbar macht.

**Lösung:** Mit dem Pflicht-Event-Set von 20–30 Events starten. Weitere Events nur auf konkreten analytischen Bedarf hin hinzufügen — nicht prophylaktisch.

### Fehler 5: Keine Event-Validierung vor dem Release

Events werden implementiert, aber nicht vor dem Release validiert. Entwickler prüfen, ob der Event-Call ausgeführt wird — aber nicht, ob die Properties korrekt befüllt sind, ob der Event-Name der Konvention entspricht oder ob der Event tatsächlich beim Analytics-Backend ankommt.

**Lösung:** Jede neue Event-Implementierung wird vor dem Release in einer Entwicklungsumgebung mit dem Debug-Mode der Analytics-Plattform geprüft. Das Tracking-Dokument bekommt eine Validierungs-Spalte.

### Fehler 6: Session-Definition nicht festgelegt

Was ist eine Session? 30 Minuten Inaktivität? Hintergrund für 5 Sekunden? Jede App-Öffnung? Teams übernehmen die Default-Definition der Analytics-Plattform — die manchmal nicht zu ihrer App passt. Eine Nachrichten-App hat andere Nutzungsmuster als eine E-Commerce-App.

**Lösung:** Session-Definition explizit festlegen und dokumentieren. Wenn die Default-Definition nicht passt, Session-Start und -End manuell implementieren.

### Fehler 7: Keine regelmäßige Daten-Qualitätsprüfung

Analytics-Setups degradieren über Zeit. Events werden umbenannt, Properties verschwinden, neue Entwickler halten sich nicht ans Schema. Ohne regelmäßige Qualitätsprüfung merkst du das erst, wenn du die Daten für eine Entscheidung brauchst.

**Lösung:** Monatliche Daten-Qualitätsprüfung einplanen. Prüfe: Welche Events haben in den letzten 30 Tagen keinen einzigen Datenpunkt geliefert? Welche Properties fehlen? Welche Events haben unerwartete Werte?

---

![Analytics-Setup-Checkliste: Pflicht-Events und KPIs nach Priorität](/assets/blog/mobile-app-analytics-einrichten-checkliste.svg)

## Fazit {#fazit}

Ein solides Analytics-Setup ist keine einmalige Aufgabe — es ist ein Fundament, das du von Anfang an richtig legst und dann kontinuierlich pflegst. Die drei wichtigsten Takeaways:

1. **Schema vor Events:** Definiere Namenskonventionen und Properties-Standard, bevor die erste Zeile Tracking-Code geschrieben wird. Nachträgliche Korrekturen kosten ein Vielfaches mehr als initiale Sorgfalt.

2. **20–30 Pflicht-Events reichen:** Starte mit einem minimalen, aber vollständigen Event-Set — einem, das alle kritischen KPIs messbar macht. Erweitere es auf Basis konkreter analytischer Fragen, nicht auf Verdacht.

3. **Daten brauchen Zeit:** Mindestens 6 Wochen nach einem sauberen Setup sind nötig, bevor Trends statistisch valide ausgewertet werden können. Plane das in deine Roadmap ein.

Wenn du verstehen willst, wie du aus einem sauberen Analytics-Setup die richtigen KPIs ableitest, empfehle ich den weiterführenden Artikel zu den [wichtigsten KPIs für deinen App-Erfolg](/blog/kpis-fuer-app-success).

<div class="not-prose my-8 rounded-xl bg-brand-950 p-8 text-center">
  <p class="text-lg font-semibold text-white mb-2">Analytics-Daten verstehen und nutzen</p>
  <p class="text-brand-200 mb-4">App-Care richtet dein Analytics-Setup auf und stellt sicher, dass alle relevanten KPIs messbar und auswertbar sind.</p>
  <a href="/leistungen" class="btn-primary">Leistungen ansehen</a>
</div>

---

## FAQ {#faq}

### Welche Analytics-Events sollte jede App tracken?

Jede App sollte mindestens diese Events tracken: `app_open` (Grundlage für DAU/MAU), `screen_view` (Navigation-Flow), `user_signup` (Nutzer-Lifecycle-Start), `session_start` / `session_end` (Session-Metriken), `crash_event` (Stabilitätsmessung) und `api_error` (technische Qualität). Das sind die 6–7 absoluten Pflicht-Events, die alle fundamentalen KPIs messbar machen. Zusätzlich kommen produktspezifische Events je nach Geschäftsmodell: Conversion-Events für E-Commerce-Apps, Onboarding-Step-Events für Subscription-Apps, Feature-Usage-Events für SaaS-Apps.

### Wie baue ich ein sauberes Event-Schema auf?

Ein sauberes Event-Schema entsteht in vier Schritten: Erstens, lege die Namenskonvention fest — in der Regel `snake_case` mit Verb-Objekt-Struktur (`button_tap`, `form_submit`). Zweitens, definiere globale Properties, die für jeden Event mitgeschickt werden: `platform`, `app_version`, `session_id`, `user_type`. Drittens, erstelle ein zentrales Tracking-Dokument mit allen Events, ihren Properties, dem Eigentümer und dem Status. Viertens, richte einen Validierungsprozess ein, der vor jedem Release prüft, ob neue Events der Konvention entsprechen. Das Schema sollte versioniert und für alle Beteiligten zugänglich sein.

### Was ist der Unterschied zwischen Events und Screens in App Analytics?

Screen Events sind eine Unterkategorie von Events — sie dokumentieren spezifisch, welche Bildschirme ein Nutzer aufgerufen hat. Alle Screen Events sind Events, aber nicht alle Events sind Screen Events. Action Events erfassen Nutzerinteraktionen (Tippen, Wischen, Absenden), Conversion Events markieren Ziel-Ereignisse (Kauf, Registrierung), Error Events dokumentieren Fehler. Der wichtigste Unterschied im Tracking: Screen Events werden typischerweise automatisch oder durch den Navigation-Stack der App ausgelöst, während Action Events explizit an jeder Interaktionsstelle implementiert werden müssen.

### Wie viele Events sollte eine App tracken?

20–30 Events sind ein guter Ausgangspunkt für eine neue App oder ein überarbeitetes Analytics-Setup. Unter 15 Events entstehen blinde Flecken bei wichtigen KPIs. Über 50 Events ohne klares Schema entsteht Rauschen — und die Wahrscheinlichkeit steigt, dass Quota-Limits der Analytics-Plattform überschritten werden oder dass Daten nicht mehr konsistent ausgewertet werden. Die Zahl der Events sollte sich an analytischen Fragen orientieren, die du beantworten willst — nicht an technischen Möglichkeiten. Jedes Event sollte eine konkrete Frage beantworten: "Wie viele Nutzer schließen das Onboarding ab?" braucht `onboarding_step_viewed` und `onboarding_complete`. Kein Event ohne analytischen Zweck.
