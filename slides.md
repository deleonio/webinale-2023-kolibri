---
theme: ./theme
colorSchema: light
highlighter: shiki
lineNumbers: true
transition: fade
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
title: Komponenten-Bibliothek für die Barrierefreiheit | KoliBri
logoHeader: true
---


# **KoliBri** - Public UI

## _Die barrierefreie Komponentenbibliothek_

---
layout: about-itzbund
logoHeader: true
---

## Informationstechnikzentrum Bund

- Zentraler IT-Dienstleister des Bundes
- Leitung: Dr. Alfred Kranstedt
- 4.100 Beschäftigte
- 12 Standorte in Deutschland

## Anforderungsanalyse und -management und SW-Design

- Referat mit über 50 Beschäftigten
- Leitung: Christine Heinrich

---
layout: about-me
logoHeader: true
---

# Speaker

- Mein Name ist Martin Oppitz
- Inzwischen über 25 Jahre im Web unterwegs
- Seit 3 Jahren beim ITZBund in der Architekturberatung
- Interessen: Familie, Rad und Ski fahren, Reisen und Open Source

---
layout: center
logoHeader: true
---

<div class="flex gap-2 mb-4"  data-theme="bmf">
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="danger" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="primary" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen.
</div>

---
layout: center
logoHeader: true
---

<div class="flex gap-2 mb-4 grey"  data-theme="bmf">
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="danger" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="primary" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen.
</div>

---
layout: center
logoHeader: true
---

<div class="flex gap-2 mb-4 grey"  data-theme="ecl-eu">
  <kol-button _icon="codicon codicon-feedback" _icon-only _label="feedback" _variant="primary" />
  <kol-button _icon="codicon codicon-comment-draft" _icon-only _label="comment-draft" _tooltip-align="bottom" />
  <kol-button _icon="codicon codicon-jersey" _icon-only _label="???" _variant="secondary" _tooltip-align="right" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Kontext-bezogene Grafik</h3>
  Interaktive Elemente mit Kontext-bezogenen Grafiken müssen mit einem Text-Äquivalent versehen werden.
</div>

---
layout: center
logoHeader: true
---

<v-click>

<img class="m-auto block w-50 pb-15" src="/assets/avatar.png" />

</v-click>

<div v-click-hide class="h-0">

# **Ko**mponenten-Bib**li**othek für die **B**ar**ri**erefreiheit

</div>

<v-after>

# **KoliBri**

</v-after>

---
layout: about-kolibri
logoHeader: false
---


<!--  - **cross-funktionales Team:** Softwarearchitektur, Koordinierende Stelle für die Barrierefreiheit, Barrierefreiheitstest und Architekturmanagement-->

# Facts

- **Start 2021** als internes Projekt

<v-clicks>

- **Erstes Release** Dezember 2021
- **2022** geprägt durch **Reifephase**
- **2023 Open Source**-Standard

</v-clicks>

<hr class="w-60 border-dotted" />

<v-clicks>

- **2024** bundesweite **Community**

</v-clicks>

<br />
<br />
<br />
<br />
<br />
<br />

---
layout: egg
handle: 1
logoHeader: true
---

# Vom **Ei** zum **Open Source**-Standard

Folgenden Fragen wollen wir auf den Grund gehen?

<v-clicks>

- Was ist die **Motivation** für KoliBri?
- Worin liegt eigentlich das **Problem**?
- Was ist eine **Web Component**?
- Warum ist KoliBri so **flexibel**?
- Wo wird denn hier was **eingespart**?
- Was macht eigentlich den **Unterschied**?
- Wo steht KoliBri und wo will er **hin**?
- Was steckt hinter der **Lizenz EUPL**?

</v-clicks>

---
layout: image-right
handle: 2
---

# Motivation

<small class="underline">Welche Ziele können damit verfolgt werden?</small>

<v-clicks>

- gesetzliche Verpflichtung zur barrierefreier Benutzeroberflächen (2025, Privatwirtschaft)
- Komponentenbibliotheken haben meist Fokus auf Design und fehlende Semantik
- Anforderungen werden immer wieder neu in Projekten umgesetzt
- Digitale Souveränität durch Framework- und Herstellerunabhängigkeit

</v-clicks>

---
layout: image-right-50
image: '/assets/w3c.jpeg'
handle: 3
---

# Viele Wege führen nach Rom

<small class="underline">Worin liegt eigentlich das Problem?</small>

Die **semantisch korrekte Auszeichnung** der Inhalte im HTML ist für die Barrierefreiheit und deren assistive Unterstützung **essentiell**.

<v-clicks>

Da die **HTML**-Spezifikation bewusst offen und flexibel (**nicht strickt**) gehaltene wurde, kann es leicht zu semantisch fehlerhaften HTML-Strukturen kommen.

**KoliBri** schließt genau diese Lücke und legt den **Fokus** auf die Erstellung wirklich semantisch korrekter HTML-Strukturen, die die **Anforderungen der Barrierefreiheit** bereits im Code **sicherstellen**, ohne dabei die notwendige Flexibilität und **Gestaltungsfreiheit** zu verlieren.

</v-clicks>

---
layout: image-right-50
image: '/assets/html-js-css.png'
handle: 4
---

# Web Components

<small class="underline">Was ist eine Web Component?</small>

Webseiten werden mit HTML-Elementen umgesetzt.

<v-clicks>

- **Web Components**-Standard ermöglicht **eigene** HTMl-Element zu definieren
- Das ist **fixiert**
  - Semantik (HTML) → Assistive Systems / Barrierefreiheit
  - Verhalten (JavaScript) → Usability & Barrierefreiheit
- Das ist **flexibel**
  - Aussehen (CSS) → Corporate Design
- so entstehen robuste und wiederverwendbare „Bausteine“

</v-clicks>

---
handle: 5
---

# Theming

<small class="underline">Wie ist KoliBri aufgestellt?</small>

<img src="/assets/theming.png" class="w-3/4 m-auto"/>


---
layout: demo-time
handle: 6
logoHeader: true
---

# Demo-Time

<small class="underline">Wo wird denn hier was eingespart?</small>

Im Code-Beispiel wird dargestellt, wie die Anforderungen an die Barrierefreiheit im Button "weg gekapselt" werden.

<!-- <kol-accordion _heading="test" _level="5">
<div slot="content"> -->

```tsx {1,14|2-8|9-13|all}
<kol-button _icon="ui-home" _icon-only _label="Primary">
	<button aria-labelledby="574540" class="primary" type="button">
		<span>
			<kol-icon>
				<i aria-hidden="true" class="icofont-ui-home"></i>
			</kol-icon>
		</span>
	</button>
	<kol-tooltip>
		<kol-badge id="574540">
			<span>Primary</span>
		</kol-badge>
	</kol-tooltip>
</kol-button>
```

<!-- </div>
</kol-accordion> -->

<small class="mt-8 text-xs"><sup>\*</sup> Quellcode ist für die bessere Nachvollziehbarkeit stark vereinfacht.</small>

---
layout: image-right-55
image: '/assets/architecture.png'
handle: 7
---

# Alleinstellungsmerkmale

<small class="underline">Was macht eigentlich den Unterschied?</small>

Aus Sicht der öffentlichen Verwaltung hat KoliBri eine ganze Reihe an Alleinstellungsmerkmalen:

- **Barrierefreiheit** - kommt zuerst und vor Design
- **Architektur** - universell im Web einsetzbar
- **Wiederverwendbarkeit** - Kleinteilig und gestaltbar
- **Digitale Souveränität** - Code-Hoheit liegt bei uns
- **Robust** - vor Manipulationen geschützt

---
layout: image-right
image: '/assets/logo.kolibri.png'
handle: 8
---

# Ausblick

<small class="underline">Wo will KoliBri hin?</small>

**KoliBri** wurde durch den **ITZBund** für die **Open Source**-Entwicklung **freigegeben**, um für alle zugänglich zu sein und um aus dem Feedback der Community kontinuierlich verbessert und erweitert werden zu können.

**KoliBri** bietet hierfür eine optimale Wiederverwendbarkeit, weil er …

- **klein** - kleinteilige Komponenten,
- **schnell** - automatisierte DevOps-Pipelines,
- **wendig** - Framework-agnostisch und
- **farbenfroh** - entkoppeltes Theming

<br/>
… ist.

---
layout: image-right
image: '/assets/eupl.jpeg'
handle: 9
---

# Lizenz

<small class="underline">Was steckt hinter der Lizenz EUPL?</small>

Die "Open-Source-Lizenz für die Europäische Union" (EUPL) ist eine von der Europäischen Union herausgegebene Copyleft-Lizenz für die Lizenzierung freier Software.

- Die reine Verwendung von Artefakten ist vollkommen **unproblematisch**.
- Das Kopieren von Code ist durch die Lizenz geschützt (**Copyleft**)!

<br/>

**EUPL** sichert die freie Nutzung und den Schutz des Urheberrechts.


---
layout: image-right-50
image: '/assets/website.png'
handle: 10
style: 'width: 100%'
---

# Nächste Schritte

Du kannst folgendes tun, um **KoliBri** kennenzulernen …

<v-clicks>

- <kol-link _href="https://public-ui.github.io" _target="website">Lese mehr über KoliBri</kol-link> (Dokumentation)
- <kol-link _href="https://public-ui.github.io/docs/get-started/erste-schritte" _target="website">Probiere KoliBri aus</kol-link> (Create-App)
- <kol-link _href="https://public-ui.github.io/docs/konzepte/architektur#erweitert" _target="github">Nutze KoliBri in Deinem Design System</kol-link> (Nutzen)
- <kol-link _href="https://public-ui.github.io/docs/concepts/styling/theming" _target="website">Gestalte Dein eigenen KoliBri</kol-link> (Designer)
- <kol-link _href="https://github.com/public-ui/kolibri/issues" _target="github">Gib uns Feedback</kol-link> (Feature, Issue)
- <kol-link _href="https://github.com/public-ui/kolibri" _target="github">Folge und teile uns</kol-link> (Follow-Button)

</v-clicks>

---
layout: center
logoHeader: true
---

<img class="m-auto block w-50 pb-10" src="/assets/qr-code.png" />

# Vielen Dank für Eure Aufmerksamkeit

<br/>
<small class="underline">
Lasst uns gemeinsam KoliBri bunter und besser machen!<br/><br/></small>


<ul class="flex">
  <li class="list-none"><kol-link _href="https://public-ui.github.io"><kol-icon _icon="codicon codicon-book" /> public-ui.github.io</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="mailto:kolibri@itzbund.de"><kol-icon _icon="codicon codicon-mail" /> kolibri@itzbund.de</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="https://github.com/public-ui/kolibri"><kol-icon _icon="codicon codicon-github" /> GitHub</kol-link></li>
</ul>

---
logoHeader: true
---

<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />
