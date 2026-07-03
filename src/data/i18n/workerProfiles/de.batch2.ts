import type { WorkerProfileTranslatable } from './types';

export const deBatch2: Record<string, WorkerProfileTranslatable> = {
  cms_handoff: {
    seoTitle: 'CMS-Übergabe-Worker | WordPresto',
    metaDescription:
      'Ravi verpackt freigegebenen Content mit der Struktur, den Metadaten und den Hinweisen, die für eine saubere Übergabe an ein CMS, eine Website oder einen Kunden nötig sind. Für Teams, die ein veröffentlichungsfertiges Content-Paket brauchen.',
    h1: 'Freigegebenen Content für eine sauberere Übergabe vorbereiten.',
    heroPara1:
      'Freigegebener Content, der ohne die richtigen Metadaten, Formatierungshinweise und Notizen im CMS ankommt, erzeugt genau dort Mehrarbeit, wo es eigentlich einfach sein sollte. Ravi nimmt den freigegebenen Entwurf und erstellt ein vollständiges Veröffentlichungspaket: Content, Metadaten, Formatierungshinweise, CMS-Felder. Die Übergabe stimmt schon beim ersten Mal.',
    heroPara2:
      'Für Content-Teams, die an Entwickler, CMS-Redakteure oder Kunden übergeben, die ihre eigene Veröffentlichung verwalten.',
    problemEyebrow: 'Wo Übergaben zu Mehrarbeit führen',
    problemH2: 'Schlechte Übergaben kosten mehr Zeit als schlechte Entwürfe.',
    problemPara:
      'Ein Beitrag, der ohne passende Metadaten, Formatierungshinweise oder Feldangaben bei einem CMS-Redakteur oder Entwickler ankommt, wird entweder fehlerhaft veröffentlicht oder zur Nachfrage zurückgeschickt. Der Übergabeschritt ist günstig, wenn er stimmt, und teuer, wenn er es nicht tut.',
    problemAnnotation: '↘ Übergabe auf Anhieb richtig',
    beforeStamp: 'Nicht verpackt',
    beforeHtml: `<p><span class="ba-strike">Hier ist der freigegebene Content</span> in einem Word-Dokument. Die <span class="ba-strike">Meta-Beschreibung steht irgendwo drin</span>, glaube ich. Sagt Bescheid, falls ihr <span class="ba-strike">noch etwas braucht</span>. Die <span class="ba-strike">Bilder liegen in meinem Downloads-Ordner</span>.</p>`,
    beforeTags: ['Unvollständig', 'Keine Metadaten', 'CMS-Redakteur rätselt'],
    beforeNote: 'das dauert noch zwei weitere Runden',
    afterStamp: 'Verpackt',
    afterHtml: `<p>Content, Meta-Titel, Meta-Beschreibung, Alt-Text, URL-Slug, Bilddateinamen und CMS-Feldnotizen sind alle <span class="ba-hl">in einem einzigen Übergabedokument gebündelt</span>, bereit für die Veröffentlichung durch den CMS-Redakteur.</p>`,
    afterTags: ['Vollständig', 'CMS-fertig', 'Kein Hin und Her nötig'],
    afterNote: 'das kann bei Erhalt veröffentlicht werden',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Veröffentlichungspaket, mit dem CMS-Redakteure und Entwickler sofort arbeiten können.',
    helpsPara:
      'Ravi erstellt das vollständige Übergabepaket, das freigegebenen Content in veröffentlichungsfähigen Content verwandelt. Meta-Felder, Formatierungshinweise, URL-Slug, Bildnotizen: alles, was für eine saubere Erstveröffentlichung nötig ist.',
    checks: [
      'Ob alle erforderlichen Metadatenfelder ausgefüllt sind',
      'Ob die Formatierung zum Ziel-CMS passt',
      'Ob Bilder und Assets korrekt referenziert sind',
    ],
    improves: [
      'Vollständigkeit der Übergabe, damit CMS-Redakteure ohne Rückfragen veröffentlichen können',
      'Metadatenqualität, damit SEO- und Barrierefreiheitsfelder stimmen',
      'Veröffentlichungskonsistenz über ein ganzes Content-Programm hinweg',
    ],
    prepares: [
      'Ein vollständiges Übergabepaket',
      'Ausgefüllte CMS-Feldnotizen',
      'Formatierungs- und Asset-Hinweise',
    ],
    surfaces: [
      'Fehlende Metadaten, die Input von Autor oder Kunde brauchen',
      'Content, der trotz Freigabe noch nicht CMS-bereit ist',
      'CMS-spezifische Anforderungen, die der Content noch nicht erfüllt',
    ],
    ioH2: 'Womit Ravi arbeitet und was er liefert.',
    worksFrom: [
      'Freigegebener finaler Entwurf',
      'CMS-Feldanforderungen',
      'Metadaten-Briefing',
      'Markenrichtlinien',
      'Asset- und Bildreferenzen',
    ],
    produces: [
      'Vollständiges Übergabepaket',
      'Ausgefüllte CMS-Feldnotizen',
      'URL- und Slug-Hinweise',
      'Bild- und Asset-Notizen',
      'Veröffentlichungsfertiges Content-Dokument',
    ],
    scenarios: [
      {
        title: 'Ein Content-Programm übergibt an einen WordPress-Redakteur.',
        description:
          'Ravi erstellt ein Übergabepaket, das jedes Feld in der Vorlage des Redakteurs abbildet.',
      },
      {
        title: 'Ein Astro-Projekt, bei dem Content für das Frontmatter strukturiert werden muss.',
        description:
          'Er verpackt den Content in dem Format, das der Entwickler braucht, inklusive aller Frontmatter-Felder.',
      },
      {
        title: 'Ein Kunde, der sein eigenes CMS verwaltet, aber mit Übergaben überfordert ist.',
        description:
          'Ein klares, vollständiges Übergabedokument verringert Veröffentlichungsfehler und Support-Anfragen des Kunden.',
      },
      {
        title: 'Ein Stapel von 30 freigegebenen Seiten, die alle Metadaten brauchen.',
        description:
          'Ravi arbeitet den Stapel konsistent ab, sodass jede Seite nach demselben Standard verpackt wird.',
      },
      {
        title: 'Ein Migrationsprojekt mit Altbestand, der neu verpackt werden muss.',
        description:
          'Er aktualisiert Metadaten und Formatierungshinweise für das neue CMS, ohne den freigegebenen Text anzurühren.',
      },
      {
        title: 'Eine Launch-Deadline, bei der der CMS-Redakteur nur eine Stunde zum Veröffentlichen hat.',
        description:
          'Ein vollständiges Übergabepaket bedeutet, dass diese Stunde für die Veröffentlichung genutzt werden kann, nicht für die Suche nach fehlenden Informationen.',
      },
    ],
    boundaryH2: 'Ravi verpackt. Veröffentlichungsteams und Redakteure entscheiden, was live geht.',
    boundaryPara:
      'Ein Übergabepaket ist ein veröffentlichungsfertiges Dokument, keine Erlaubnis zur Veröffentlichung. Was live geht, wann und in welcher Form, entscheidet das Veröffentlichungsteam, der Kunde oder die redaktionelle Leitung.',
    boundaryChecklist: [
      'Ravi verpackt Content, er veröffentlicht ihn nie.',
      'Übergabepakete sind so strukturiert, dass das empfangende Team sie prüfen kann.',
      'Unvollständige Angaben werden markiert, nicht geraten.',
      'Die Übergabe unterstützt die Veröffentlichung, sie genehmigt sie nicht.',
    ],
    willNot: [
      { color: 'red', text: 'Content direkt veröffentlichen' },
      { color: 'red', text: 'Content zur Veröffentlichung freigeben' },
      { color: 'amber', text: 'Bei fehlenden Metadaten raten' },
    ],
    relatedH2: 'Workers, mit denen Ravi zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Bestätigt, was freigegeben ist, bevor die Übergabeverpackung beginnt.',
        outputLabel: 'Freigabebericht',
        ctaLabel: 'Wie Audrey freigibt',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Klärt Compliance und Risiko, bevor das Übergabepaket erstellt wird.',
        outputLabel: 'Risiko- & Compliance-Bericht',
        ctaLabel: 'Wie Vera Risiken markiert',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Liefert die abschließende Qualitätsprüfung vor der Übergabe.',
        outputLabel: 'Prüfnotizen',
        ctaLabel: 'Wie Quinn prüft',
      },
    ],
    ctaH2: 'Freigegebenen Content für eine sauberere Übergabe vorbereiten.',
    ctaPara:
      'Nehmen Sie Ravi in Ihren Workflow auf, und jeder freigegebene Beitrag kommt mit allem im CMS an, was für eine saubere Veröffentlichung nötig ist.',
    guidanceFooterLabel: 'ÜBERGABESTATUS',
    guidanceFooterValue: 'Bereit für CMS-Prüfung',
  },

  editorial_risk_claims: {
    seoTitle: 'Redaktionelles Risiko & Aussagen-Worker | WordPresto',
    metaDescription:
      'Vera markiert unbelegte Aussagen, riskante Formulierungen und Compliance-Probleme in Content, bevor er freigegeben oder veröffentlicht wird.',
    h1: 'Riskante Aussagen markieren, bevor sie weitergehen.',
    heroPara1:
      'Content mit unbelegten Aussagen, rechtlich riskanter Sprache oder Compliance-Problemen scheitert nicht erst bei der Veröffentlichung, sondern erst bei einer Beschwerde, einem Einspruch oder einer Prüfung. Vera prüft Content auf Aussagen, die sich nicht belegen lassen, auf Formulierungen, die Haftung begründen, und auf Sprache, die eine Compliance-Freigabe braucht.',
    heroPara2:
      'Für Content-Teams in regulierten Branchen, Agenturen mit Compliance-Pflichten und jedes Team, das Aussagen veröffentlicht, die belastbar sein müssen.',
    problemEyebrow: 'Wo Aussagen zu Problemen werden',
    problemH2: 'Riskanter Content sieht so lange gut aus, bis er infrage gestellt wird.',
    problemPara:
      'Eine Aussage, die sich nicht belegen lässt, ein Vergleich, der etwas Falsches suggeriert, oder Sprache, die Haftung begründet, sieht identisch mit guter Copy aus, bis jemand sie hinterfragt. Solche Stellen vor der Veröffentlichung zu erkennen, kostet nichts. Sie danach anzugehen, kostet viel.',
    problemAnnotation: '↘ vor der Veröffentlichung markieren, nicht danach',
    beforeStamp: 'Nicht geprüft',
    beforeHtml: `<p>Unsere Plattform ist <span class="ba-strike">die sicherste</span> Lösung auf dem Markt. Wir <span class="ba-strike">garantieren</span> vollständigen Datenschutz, und unsere Kunden <span class="ba-strike">erzielen immer</span> bessere Ergebnisse. Wir sind <span class="ba-strike">der Marktführer</span> in diesem Bereich.</p>`,
    beforeTags: ['Unbelegte Superlative', 'Uneingeschränkte Garantien', 'Vergleichende Aussagen ohne Beleg'],
    beforeNote: 'jeder Satz hier ist ein Risiko',
    afterStamp: 'Geprüft',
    afterHtml: `<p>Abschnitt zur Plattformsicherheit: <span class="ba-hl">zwei Aussagen zur Belegung markiert</span>, ein Superlativ muss eingeschränkt oder gestrichen werden, die Garantieformulierung braucht eine juristische Prüfung, bevor dieser Beitrag freigegeben werden kann.</p>`,
    afterTags: ['Konkrete Markierungen', 'Belegbedarf vermerkt', 'Juristische Prüfung angezeigt'],
    afterNote: 'Risiken sind vor der Freigabe sichtbar',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Eine Compliance-Prüfung, die Aussagerisiken vor der Veröffentlichung findet.',
    helpsPara:
      'Vera prüft Content auf Aussagen und Formulierungen, die Risiken schaffen, nicht um starke Copy abzuschwächen, sondern um sicherzustellen, dass das Veröffentlichte verteidigt werden kann.',
    checks: [
      'Unbelegte oder uneingeschränkte Aussagen',
      'Vergleichende Sprache, die eine falsche Überlegenheit suggeriert',
      'Compliance-relevante Sprache in regulierten Bereichen',
    ],
    improves: [
      'Aussagesprache, damit sie konkret und belastbar ist',
      'Risikosichtbarkeit, damit Freigebende die nötigen Informationen haben',
      'Compliance-Dokumentation für Prüfzwecke',
    ],
    prepares: [
      'Einen Risiko- und Compliance-Bericht',
      'Konkrete Markierungen mit Beleg- oder Korrekturoptionen',
      'Compliance-Freigabenotizen für die Genehmigung',
    ],
    surfaces: [
      'Aussagen, die eine Drittbelegung brauchen',
      'Sprache, die eine juristische Prüfung erfordert',
      'Fachbegriffe aus regulierten Branchen, die eine Spezialprüfung brauchen',
    ],
    ioH2: 'Womit Vera arbeitet und was sie liefert.',
    worksFrom: [
      'Entwurf oder freigegebener Content',
      'Compliance-Richtlinien',
      'Branchenspezifischer regulatorischer Kontext',
      'Belege oder Quellen für Aussagen',
      'Vorherige Compliance-Notizen',
    ],
    produces: [
      'Risiko- und Compliance-Bericht',
      'Markierte Aussagen mit Belegbedarf',
      'Compliance-Freigabedokumentation',
      'Korrekturoptionen für markierte Formulierungen',
      'Freigabe-Input für Audrey',
    ],
    scenarios: [
      {
        title: 'Ein Finanzdienstleister veröffentlicht Content zu Kapitalanlagen.',
        description:
          'Vera wendet die Compliance-Standards der Branche auf den Entwurf an, bevor er das Compliance-Team erreicht.',
      },
      {
        title: 'Eine Gesundheitsmarke macht Aussagen zu Behandlungsergebnissen.',
        description:
          'Aussagen zu Ergebnissen und Wirksamkeit werden vor der Freigabe auf klinische Belege geprüft.',
      },
      {
        title: 'Eine Agentur schreibt vergleichenden Content für einen Kunden.',
        description:
          'Vergleichende Aussagen werden auf Belastbarkeit geprüft, bevor der Kunde sie sieht.',
      },
      {
        title: 'Ein Produktlaunch mit kühnen Leistungsversprechen.',
        description:
          'Vera markiert, welche Aussagen belegt und welche vor dem Launch abgeschwächt werden müssen.',
      },
      {
        title: 'Eine Content-Auffrischung stößt auf alte Seiten mit veralteten Aussagen.',
        description:
          'Sie identifiziert Aussagen, die einst zutrafen, aber nicht mehr belastbar sind.',
      },
      {
        title: 'Eine B2B-Marke schreibt über ihre Marktposition.',
        description:
          'Aussagen zu Marktführerschaft und Überlegenheit werden vor der Veröffentlichung auf Belastbarkeit geprüft.',
      },
    ],
    boundaryH2: 'Vera markiert. Rechts- und Compliance-Teams treffen die Entscheidungen.',
    boundaryPara:
      'Ein Risikobericht ist ein Input für die redaktionelle und Compliance-Prüfung, keine Freigabe. Vera erkennt Risiken und markiert sie klar. Ob und wie darauf reagiert wird und ob der Content weitergehen kann, entscheiden Recht, Compliance und Redaktion.',
    boundaryChecklist: [
      'Vera markiert Risiken, sie gibt Content nie frei oder genehmigt ihn.',
      'Risikoberichte sind für die redaktionelle und juristische Prüfung strukturiert.',
      'Compliance-Entscheidungen werden markiert, nicht getroffen.',
      'Die Risikomarkierung unterstützt die redaktionelle Freigabe, sie ersetzt keine juristische Prüfung.',
    ],
    willNot: [
      { color: 'red', text: 'Eine juristische Freigabe erteilen' },
      { color: 'red', text: 'Content mit ungeklärten Compliance-Markierungen freigeben' },
      { color: 'amber', text: 'Aussagen ohne ausdrückliche Anweisung entfernen' },
    ],
    relatedH2: 'Workers, mit denen Vera zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Prüft die Qualität vor der Compliance-Prüfung.',
        outputLabel: 'Prüfnotizen',
        ctaLabel: 'Wie Quinn prüft',
      },
      {
        id: 'approval_report',
        description: 'Nimmt Compliance-Markierungen in den Freigabebericht auf.',
        outputLabel: 'Freigabebericht',
        ctaLabel: 'Wie Audrey freigibt',
      },
      {
        id: 'cms_handoff',
        description: 'Erhält die Freigabebestätigung, bevor das Übergabepaket erstellt wird.',
        outputLabel: 'Übergabepaket',
        ctaLabel: 'Wie Ravi übergibt',
      },
    ],
    ctaH2: 'Riskante Aussagen markieren, bevor sie weitergehen.',
    ctaPara:
      'Nehmen Sie Vera in Ihren Workflow auf, und Compliance-Probleme werden vor der Veröffentlichung erkannt, nicht danach.',
    guidanceFooterLabel: 'RISIKOPRÜFUNG',
    guidanceFooterValue: 'Beleg noch zu prüfen',
  },

  content_refresh_brief: {
    seoTitle: 'Content-Auffrischungs-Briefing-Worker | WordPresto',
    metaDescription:
      'Iris erstellt ein strukturiertes Briefing für die Auffrischung bestehenden Contents: was aktualisiert, was gestrichen und was ergänzt werden soll. Für Teams, die Seiten mit klarer Richtung statt Rätselraten auffrischen.',
    h1: 'Content mit klarerem Grund auffrischen.',
    heroPara1:
      'Content ohne Briefing aufzufrischen, führt zu Seiten, die dreimal umgeschrieben wurden und trotzdem nicht funktionieren. Iris erstellt ein strukturiertes Auffrischungs-Briefing, das abdeckt, was aktualisiert, was gestrichen, was ergänzt wird und warum, sodass jede Auffrischung mit klarer Richtung statt mit einer Sichtung auf der leeren Seite beginnt.',
    heroPara2:
      'Für Content-Auffrischungsprogramme, Site-Migrationen mit bestehendem Content und Teams, die Seiten an Veränderungen bei Produkt, Zielgruppe oder Markt anpassen.',
    problemEyebrow: 'Wo Auffrischungsprojekte scheitern',
    problemH2: 'Ohne Briefing entsteht bei der Auffrischung nur eine andere Version desselben Problems.',
    problemPara:
      'Eine Content-Auffrischung ohne klare Richtung neigt zu zwei Dingen: Sie aktualisiert, was leicht zu aktualisieren ist, und lässt die strukturellen Probleme bestehen, oder sie löst eine komplette Neufassung aus, wo eine leichte Überarbeitung gereicht hätte. Ein Auffrischungs-Briefing legt den Umfang fest, bevor die Arbeit beginnt.',
    problemAnnotation: '↘ erst die Auffrischung briefen, dann umsetzen',
    beforeStamp: 'Kein Briefing',
    beforeHtml: `<p>Können wir <span class="ba-strike">diese Seite auffrischen</span>? Sie wirkt etwas <span class="ba-strike">veraltet</span>. Vielleicht <span class="ba-strike">ein paar Texte aktualisieren</span> und <span class="ba-strike">etwas Neues ergänzen</span>. Einfach allgemein <span class="ba-strike">besser machen</span>.</p>`,
    beforeTags: ['Kein Umfang', 'Keine Richtung', 'Keine Erfolgskriterien'],
    beforeNote: 'das führt zu wahllosen Änderungen',
    afterStamp: 'Gebrieft',
    afterHtml: `<p><span class="ba-hl">Aktualisieren: Einleitung und Belegabschnitt</span>. Streichen: Fallstudien-Block (veraltet). Ergänzen: Produktfunktionsabschnitt aus dem Q1-Update. Beibehalten: Struktur und CTA. Für jede Entscheidung liegt eine Begründung vor.</p>`,
    afterTags: ['Klarer Umfang', 'Konkrete Änderungen', 'Begründung enthalten'],
    afterNote: 'Autoren wissen genau, was zu tun ist',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Auffrischungs-Briefing, das die Arbeit festlegt, bevor ein Autor die Seite anfasst.',
    helpsPara:
      'Iris verwandelt eine Auffrischungsanfrage in ein strukturiertes Briefing mit konkreten Anweisungen zum Aktualisieren, Streichen und Ergänzen, sodass Autoren und Redakteure genau wissen, wofür die Auffrischung da ist und was sie erreichen soll.',
    checks: [
      'Ob der Zweck der Seite noch aktuell ist',
      'Ob bestehende Abschnitte erhaltenswert sind',
      'Ob der Auffrischungsumfang im Verhältnis zum Problem steht',
    ],
    improves: [
      'Auffrischungsrichtung, damit sie konkret statt vage ist',
      'Umfangsdefinition, damit das Briefing echte Veränderung statt nur Aktualisierung abdeckt',
      'Effizienz der Autoren durch Beseitigung von Unklarheiten darüber, was zu tun ist',
    ],
    prepares: [
      'Ein strukturiertes Auffrischungs-Briefing',
      'Einen Aktualisieren-/Streichen-/Ergänzen-Abschnittsplan',
      'Begründungsnotizen für die Briefing-Verantwortlichen',
    ],
    surfaces: [
      'Seiten, die eine strukturelle Änderung brauchen, nicht nur eine Auffrischung',
      'Auffrischungsanfragen ohne klare Begründung',
      'Content, der eher zurückgezogen als aktualisiert werden sollte',
    ],
    ioH2: 'Womit Iris arbeitet und was sie liefert.',
    worksFrom: [
      'Bestehender Seiteninhalt',
      'Auffrischungsziele oder Auslösernotizen',
      'Content-Analyse',
      'Marken- und Produktupdates',
      'Notizen zu Zielgruppen- oder Marktveränderungen',
    ],
    produces: [
      'Strukturiertes Auffrischungs-Briefing',
      'Aktualisieren-/Streichen-/Ergänzen-Abschnittsplan',
      'Begründungsnotizen zur Auffrischung',
      'Übergabe-Briefing für Autoren',
      'Umfang und Erfolgskriterien',
    ],
    scenarios: [
      {
        title: 'Eine Produktseite, die nach einem Rebranding aktualisiert werden muss.',
        description:
          'Iris gleicht ab, was sich gegenüber der neuen Markenrichtung ändern muss, und erstellt ein konkretes Aktualisierungs-Briefing.',
      },
      {
        title: 'Ein Content-Programm, das im ersten Quartal 50 Seiten auffrischt.',
        description:
          'Sie brieft jede Auffrischung konsistent, sodass Autoren den Umfang nicht für jede Seite neu erfinden müssen.',
      },
      {
        title: 'Eine organisch gewachsene Website mit uneinheitlichen Seiten.',
        description:
          'Auffrischungs-Briefings schaffen einen einheitlichen Standard für jeden Seitentyp.',
      },
      {
        title: 'Ein Blogarchiv mit veralteten, aber weiter traffic-starken Beiträgen.',
        description:
          'Iris briefet eine gezielte Aktualisierung, die die Genauigkeit verbessert, ohne zu entfernen, was Leser als nützlich empfanden.',
      },
      {
        title: 'Eine neue Produktfunktion, die auf bestehenden Seiten ergänzt werden muss.',
        description:
          'Sie legt fest, welche Seiten aktualisiert werden müssen, was ergänzt wird und wo es hinpasst.',
      },
      {
        title: 'Ein Kunde, der immer wieder kleine Änderungen an denselben Seiten wünscht.',
        description:
          'Ein richtiges Auffrischungs-Briefing löst die zugrunde liegenden Probleme, statt sie Seite für Seite zu flicken.',
      },
    ],
    boundaryH2: 'Iris brieft die Auffrischung. Autoren und Redakteure nehmen die Änderungen vor.',
    boundaryPara:
      'Ein Auffrischungs-Briefing ist ein Umfangsdokument, keine Sammlung freigegebener Änderungen. Iris legt fest, was passieren muss; ob und wie es umgesetzt wird, entscheiden Redaktion und Kunde.',
    boundaryChecklist: [
      'Iris brieft die Auffrischung, sie nimmt nie selbst die Änderungen vor.',
      'Auffrischungs-Briefings sind für die Prüfung durch Autoren und Redakteure strukturiert.',
      'Zur Zurückziehung empfohlene Seiten werden markiert, nicht entfernt.',
      'Das Auffrischungs-Briefing unterstützt den redaktionellen Umfang, es legt ihn nicht eigenmächtig fest.',
    ],
    willNot: [
      { color: 'red', text: 'Seiten direkt bearbeiten oder umschreiben' },
      { color: 'red', text: 'Content zurückziehen oder entfernen' },
      { color: 'amber', text: 'Den Auffrischungsumfang ohne redaktionelle Freigabe erweitern' },
    ],
    relatedH2: 'Workers, mit denen Iris zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'content_analyst',
        description: 'Liefert die Analyse, auf der das Auffrischungs-Briefing aufbaut.',
        outputLabel: 'Content-Analyse',
        ctaLabel: 'Wie Omar analysiert',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Prüft den aufgefrischten Entwurf gegen das Auffrischungs-Briefing.',
        outputLabel: 'Abgleichsbericht',
        ctaLabel: 'Wie Ada prüft',
      },
      {
        id: 'draft_rewrite',
        description: 'Schreibt die im Auffrischungs-Briefing markierten Abschnitte neu.',
        outputLabel: 'Überarbeiteter Entwurf',
        ctaLabel: 'Wie Ellis umschreibt',
      },
    ],
    ctaH2: 'Content mit klarerem Grund auffrischen.',
    ctaPara:
      'Nehmen Sie Iris in Ihren Workflow auf, und jede Auffrischung beginnt mit einem Briefing, das Autoren genau sagt, was sie ändern sollen und warum.',
    guidanceFooterLabel: 'AUFFRISCHUNGSSTATUS',
    guidanceFooterValue: 'Gebrieft · bereit für Autor',
  },

  content_distribution_brief: {
    seoTitle: 'Content-Distributions-Briefing-Worker | WordPresto',
    metaDescription:
      'Nina erstellt ein Distributions-Briefing, das festlegt, wohin freigegebener Content gehen soll und wie er für jeden Kanal angepasst wird.',
    h1: 'Planen, wohin freigegebener Content als Nächstes geht.',
    heroPara1:
      'Freigegebener Content, der direkt von der Freigabe in einen einzigen Kanal geht, verschenkt den Großteil seines Werts. Nina erstellt ein Distributions-Briefing, das den freigegebenen Content den passenden Kanälen zuordnet, mit Anpassungshinweisen für jeden, sodass derselbe Beitrag weiterreicht, ohne verwässert zu werden.',
    heroPara2:
      'Für Content-Teams, Agenturen und Marketingverantwortliche, die einen strukturierten Distributionsplan brauchen statt eines nachträglichen Social-Media-Gedankens.',
    problemEyebrow: 'Wo die Distribution auseinanderfällt',
    problemH2: 'Die meiste Content wird einmal veröffentlicht und dann vergessen.',
    problemPara:
      'Freigegebener Langform-Content erreicht oft nur einen Kanal, in einem Format, zu einem Zeitpunkt. Die Kanalanpassungen, die seine Reichweite erweitern würden (Newsletter-Auszug, LinkedIn-Beitrag, Social Card, Kernzitat), passieren nie, weil es keinen Plan dafür gibt. Ein Distributions-Briefing ändert das.',
    problemAnnotation: '↘ die Distribution planen, bevor sie live geht',
    beforeStamp: 'Kein Plan',
    beforeHtml: `<p>Super, der Artikel ist <span class="ba-strike">freigegeben</span>! Lasst uns ihn <span class="ba-strike">auf LinkedIn posten</span> und <span class="ba-strike">an den Newsletter schicken</span>. Jemand kann <span class="ba-strike">ein paar Social-Posts schreiben</span>, wenn er Zeit hat. <span class="ba-strike">Passt schon so</span>.</p>`,
    beforeTags: ['Kein Kanalplan', 'Keine Anpassungshinweise', 'Distribution dem Zufall überlassen'],
    beforeNote: 'dieser Content wird nur einmal genutzt',
    afterStamp: 'Gebrieft',
    afterHtml: `<p>Website: vollständigen Beitrag veröffentlichen. LinkedIn: <span class="ba-hl">Kurzzusammenfassung mit zentraler Erkenntnis</span>. Newsletter: 200-Wörter-Auszug, problemorientiert. Social: drei Zitate mit Kontext. Timing- und Anpassungshinweise für jeden Kanal.</p>`,
    afterTags: ['Kanalspezifisch', 'Anpassungsfertig', 'Strukturierte Distribution'],
    afterNote: 'derselbe Content leistet mehr',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Distributions-Briefing, das freigegebenen Content mit Anpassungshinweisen den Kanälen zuordnet.',
    helpsPara:
      'Nina verwandelt freigegebenen Content in ein Kanal-Distributions-Briefing: wohin er geht, wie er sich für jeden Kanal anpasst und was der Autor oder das Social-Team für jeden Kanal erstellen muss.',
    checks: [
      'Ob der Content zu den geplanten Kanälen passt',
      'Ob der Anpassungsbedarf kanalgerecht ist',
      'Ob der Distributionsplan im Verhältnis zum Content steht',
    ],
    improves: [
      'Distributionsplanung, damit sie kanalspezifisch statt generisch ist',
      'Anpassungshinweise, damit jede Version ihrem Kanal dient',
      'Content-Wert durch erweiterte Reichweite ohne Qualitätsverlust',
    ],
    prepares: [
      'Ein strukturiertes Distributions-Briefing',
      'Kanalspezifische Anpassungshinweise',
      'Format- und Längenvorgaben für jeden Kanal',
    ],
    surfaces: [
      'Kanäle, die nicht zum Content passen',
      'Content, der von einer Umarbeitung vor der Distribution profitieren würde',
      'Timing-Konflikte oder Abfolgeprobleme bei der Distribution',
    ],
    ioH2: 'Womit Nina arbeitet und was sie liefert.',
    worksFrom: [
      'Freigegebener Content',
      'Kanalliste und Zielgruppendefinitionen',
      'Distributionsziele',
      'Markenstimme-Richtlinien',
      'Veröffentlichungskalender oder Timing-Notizen',
    ],
    produces: [
      'Distributions-Briefing',
      'Kanalspezifische Anpassungshinweise',
      'Format- und Längenvorgaben',
      'Timing-Notizen zur Veröffentlichung',
      'Übergabe an Content- oder Social-Team',
    ],
    scenarios: [
      {
        title: 'Ein Langform-Artikel muss für LinkedIn und E-Mail ausgekoppelt werden.',
        description:
          'Nina brieft die Auszüge gezielt, damit jeder für seinen Kanal und seine Zielgruppe funktioniert.',
      },
      {
        title: 'Ein Produktlaunch mit Content für fünf Kanäle.',
        description:
          'Sie ordnet den Launch-Content jedem Kanal mit Timing- und Anpassungshinweisen in einem Briefing zu.',
      },
      {
        title: 'Eine Agentur produziert Content für einen Kunden mit komplexem Kanalmix.',
        description:
          'Das Distributions-Briefing wird zur Übergabe an das Social- und E-Mail-Team, nicht zu einem separaten Gespräch.',
      },
      {
        title: 'Ein Content-Programm, in dem Distribution nachrangig behandelt wird.',
        description:
          'Nina verankert die Distribution bereits im Freigabeschritt im Workflow, nicht als separate Aufgabe.',
      },
      {
        title: 'Eine Recherche, die mehrere Content-Formate stützen kann.',
        description:
          'Sie ordnet zu, welche Erkenntnisse zu welchen Kanälen passen, und brieft die Anpassungen entsprechend.',
      },
      {
        title: 'Ein Team, in dem Autor und Social-Media-Manager getrennt arbeiten.',
        description:
          'Ein Distributions-Briefing verbindet beide Teams, ohne dass der Autor das Social-Team direkt briefen muss.',
      },
    ],
    boundaryH2: 'Nina plant die Distribution. Content- und Social-Teams erstellen die Anpassungen.',
    boundaryPara:
      'Ein Distributions-Briefing ist ein Plan, kein fertiger Content. Nina legt fest, wohin Content gehen und wie er sich anpassen soll. Die angepassten Versionen, die Veröffentlichungsentscheidungen und die Kanalbeurteilung treffen das Content- und Social-Team.',
    boundaryChecklist: [
      'Nina brieft die Distribution, sie erstellt nie angepassten Content.',
      'Distributions-Briefings sind so strukturiert, dass Kanalteams sie umsetzen können.',
      'Fragen zur Kanaleignung werden markiert, nicht angenommen.',
      'Das Briefing unterstützt die Kanalteams, es ersetzt nicht ihre Beurteilung.',
    ],
    willNot: [
      { color: 'red', text: 'Angepassten Content für Kanäle erstellen' },
      { color: 'red', text: 'Content veröffentlichen oder terminieren' },
      { color: 'amber', text: 'Den Distributionsumfang ohne Freigabe erweitern' },
    ],
    relatedH2: 'Workers, mit denen Nina zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Bestätigt die Freigabe des Contents, bevor die Distribution geplant wird.',
        outputLabel: 'Freigabebericht',
        ctaLabel: 'Wie Audrey freigibt',
      },
      {
        id: 'cms_handoff',
        description: 'Übernimmt parallel die Übergabe für den primären Kanal.',
        outputLabel: 'Übergabepaket',
        ctaLabel: 'Wie Ravi übergibt',
      },
      {
        id: 'content_refresh_brief',
        description: 'Speist verteilten Content zurück in die Auffrischungsplanung ein.',
        outputLabel: 'Auffrischungs-Briefing',
        ctaLabel: 'Wie Iris auffrischt',
      },
    ],
    ctaH2: 'Planen, wohin freigegebener Content als Nächstes geht.',
    ctaPara:
      'Nehmen Sie Nina in Ihren Workflow auf, und jeder freigegebene Beitrag geht mit einem bereits geschriebenen Kanal-Distributionsplan hinaus.',
    guidanceFooterLabel: 'DISTRIBUTION',
    guidanceFooterValue: 'Gebrieft · kanalfertig',
  },

  seo_metadata: {
    seoTitle: 'SEO-Titel- & Metadaten-Worker | WordPresto',
    metaDescription:
      'Nadia prüft den SEO-Titel, die Meta-Beschreibung und die H1 gegen die Suchintention und entwirft dann klarere Optionen zur Freigabe durch den Autor. Metadaten, die für Menschen und Suchmaschinen gut lesbar sind.',
    h1: 'Titel, Beschreibung und H1 richtig hinbekommen.',
    heroPara1:
      'Titel, Meta-Beschreibung und H1 sind das Erste, was ein Leser in der Suche sieht, und das, was am leichtesten zum Nachgedanken wird. Nadia liest sie im Verhältnis zur Seite und zur Absicht hinter der Suchanfrage, markiert, was fehlt, schwach, zu lang oder daneben ist, und entwirft klarere Optionen.',
    heroPara2:
      'Für Autoren und Redakteure, die Metadaten wollen, die die Seite ehrlich widerspiegeln, ohne bei Zeichenlimits zu raten oder Keywords hinterherzujagen.',
    problemEyebrow: 'Wo der Klick gewonnen oder verloren wird',
    problemH2: 'Guter Content mit schwachem Titel verliert trotzdem den Klick.',
    problemPara:
      'Metadaten werden meist zuletzt geschrieben, in Eile, von wem auch immer gerade am Veröffentlichen-Button sitzt. Das Ergebnis sind Titel, die die Marke wiederholen, Beschreibungen, die die H1 nachsprechen, und Seiten, die verkaufen, was sie eigentlich bieten. Nadia behandelt die SERP-sichtbare Ebene als Teil des Schreibens.',
    problemAnnotation: '↘ Titel sagt nichts, Beschreibung wiederholt ihn',
    beforeStamp: 'Schwach',
    beforeHtml: `<p><strong>Titel:</strong> <span class="ba-strike">Startseite | Blog | Unser Firmenname GmbH</span><br/><strong>Beschreibung:</strong> <span class="ba-strike">Willkommen auf unserem Blog, wo wir über viele Dinge in unserer Branche schreiben.</span></p>`,
    beforeTags: ['Keine Intentions-Übereinstimmung', 'Markenüberladen', 'Sagt nichts'],
    beforeNote: 'warum sollte jemand das anklicken',
    afterStamp: 'Klar',
    afterHtml: `<p><strong>Titel:</strong> <span class="ba-hl">So wählen Sie einen Content-Workflow (ein praktischer Leitfaden)</span><br/><strong>Beschreibung:</strong> <span class="ba-hl">Eine klare Anleitung zum Planen, Briefen, Prüfen und Freigeben von Content, mit den Fragen, die Sie vorher stellen sollten.</span></p>`,
    afterTags: ['Trifft die Intention', 'Konkret', 'Ehrliches Versprechen'],
    afterNote: 'jetzt verdient er den Klick',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Metadaten-Editor, der Intention liest, nicht nur Keywords.',
    helpsPara:
      'Nadia prüft Titel, Beschreibung und H1 so, wie es ein sorgfältiger Redakteur täte: im Verhältnis dazu, wofür die Seite da ist und wonach der Leser gesucht hat, und schlägt dann Entwürfe vor, die Sie annehmen, bearbeiten oder ablehnen können.',
    checks: [
      'Titel, Beschreibung und H1 gegen die Suchintention',
      'Länge, Wiederholung und Keyword-Stuffing',
      'Versprechen, die die Seite tatsächlich nicht einlöst',
    ],
    improves: [
      'Vage Titel werden konkret und lesbar',
      'Beschreibungen, die sagen, was die Seite bietet',
      'H1 und Titel, die zusammenwirken statt gegeneinander',
    ],
    prepares: [
      'Metadaten-Entwürfe mit Längenangaben',
      'Klare Vorher-Nachher-Vergleiche für die Prüfung',
      'Notizen zur Intention, die jede Option anspricht',
    ],
    surfaces: [
      'Titel, bei denen die Intention wirklich unklar ist',
      'Aussagen in den Metadaten, die einen Beleg brauchen',
      'Compliance-relevante Formulierungen zur Prüfung',
    ],
    ioH2: 'Womit Nadia arbeitet und was sie liefert.',
    worksFrom: [
      'Seiteninhalt und aktuelle H1',
      'Bestehender Titel und Meta-Beschreibung',
      'Erkannte Suchintention',
      'Zielthema oder Zielsuchanfrage',
      'Marken- und Compliance-Regeln',
    ],
    produces: [
      'SEO-Titel-Entwurfsoptionen',
      'Meta-Beschreibungsentwurf',
      'H1-Vorschläge',
      'Längen- und Intentionsnotizen',
      'Prüfbereites Metadatenpaket',
    ],
    scenarios: [
      {
        title: 'Ein starker Artikel mit einem vergesslichen Titel.',
        description:
          'Nadia schreibt Titel und Beschreibung so um, dass sie treffen, wonach Leser wirklich suchen, ohne zu viel zu versprechen.',
      },
      {
        title: 'Titel, die alle mit dem Markennamen beginnen.',
        description:
          'Sie verschiebt den Mehrwert an den Anfang, sodass die Seite mit ihrem Angebot führt, nicht mit dem Herausgeber.',
      },
      {
        title: 'Beschreibungen, die nur die Überschrift wiederholen.',
        description:
          'Nadia verwandelt eine wiederholte H1 in eine Beschreibung, die dem Leser sagt, was er von der Seite bekommt.',
      },
      {
        title: 'Eine Seite, die auf die falsche Intention zielt.',
        description:
          'Wenn Metadaten das eine versprechen und die Seite etwas anderes liefert, markiert sie die Diskrepanz für eine menschliche Klärung.',
      },
      {
        title: 'Migration einer Bibliothek alter Beiträge.',
        description:
          'Sie prüft Titel und Beschreibungen im großen Maßstab und stellt die schwächsten zuerst heraus, damit ein Metadaten-Durchgang dort ansetzt, wo es zählt.',
      },
      {
        title: 'Ein reguliertes Thema, bei dem Formulierungen wichtig sind.',
        description:
          'Nadia formuliert sorgfältig und markiert Aussagen, die eine Freigabe brauchen, statt ein Versprechen zu schreiben, das die Seite nicht einlösen kann.',
      },
    ],
    boundaryH2: 'Nadia entwirft die Metadaten. Menschen entscheiden, was live geht.',
    boundaryPara:
      'Ein Titel ist ein Versprechen an den Leser. Nadia schlägt vor und prüft, ist aber darauf ausgelegt, beim Entwurf zu stoppen. Nichts, was sie schreibt, wird veröffentlicht oder ins CMS übertragen, ohne dass eine Person es zuerst freigibt.',
    boundaryChecklist: [
      'Nadia entwirft Metadaten, sie veröffentlicht sie nie.',
      'Jede Option wird einem Redakteur zur Freigabe vorgelegt.',
      'Diskrepanzen und riskante Aussagen werden aufgezeigt, nicht verborgen.',
      'Nadia unterstützt den Autor, sie ersetzt nicht dessen Urteil.',
    ],
    willNot: [
      { color: 'red', text: 'Veröffentlichen oder ins CMS übertragen' },
      { color: 'red', text: 'Rankings oder Traffic versprechen' },
      { color: 'amber', text: 'Keywords stopfen, um die Suche zu überlisten' },
    ],
    relatedH2: 'Workers, mit denen Nadia zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Prüft, wie die Seite in den Ergebnissen erscheint und wo Suchausschnitte gewonnen werden können.',
        outputLabel: 'Suchausschnitt-Prüfung',
        ctaLabel: 'Wie Morgan prüft',
      },
      {
        id: 'schema',
        description: 'Prüft strukturierte Daten, damit die Seite für reichhaltigere Ergebnisse infrage kommt.',
        outputLabel: 'Schema-Prüfung',
        ctaLabel: 'Wie Sofia prüft',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Prüft, ob der Entwurf selbst klar und bereit ist, bevor die Metadaten finalisiert werden.',
        outputLabel: 'Prüfnotizen',
        ctaLabel: 'Wie Quinn prüft',
      },
    ],
    ctaH2: 'Titel, Beschreibung und H1 richtig hinbekommen.',
    ctaPara:
      'Nehmen Sie Nadia in Ihren Workflow auf, und jede Seite erreicht die Prüfung mit Metadaten, die sie ehrlich widerspiegeln und in der Suche gut lesbar sind.',
    guidanceFooterLabel: 'METADATEN',
    guidanceFooterValue: 'Entworfen · bereit zur Prüfung',
  },

  serp_snippet_opportunity: {
    seoTitle: 'Suchausschnitt-Worker | WordPresto',
    metaDescription:
      'Morgan prüft, wie eine Seite voraussichtlich in den Suchergebnissen erscheint, und weist auf Suchausschnitt- und Rich-Result-Chancen hin, die es wert sind, gezielt angegangen zu werden. Nur zur Prüfung, nie eine Garantie.',
    h1: 'Gestalten, wie die Seite in der Suche erscheint.',
    heroPara1:
      'Eine Seite rankt nicht nur, sie erscheint auch. Titel, Beschreibung und die Art, wie Content strukturiert ist, prägen gemeinsam, was ein Leser in den Ergebnissen sieht. Morgan prüft diese Ausschnittselemente und weist darauf hin, wo eine klare Antwort, eine Liste oder ein strukturierter Abschnitt ein reichhaltigeres Ergebnis verdienen könnte.',
    heroPara2:
      'Für Redakteure, die möchten, dass ihre Seiten auch in den Suchergebnissen gut lesbar sind, nicht nur auf der Seite selbst.',
    problemEyebrow: 'Wo die Seite auf die Ergebnisse trifft',
    problemH2: 'Das Ergebnis, das ein Leser sieht, ist nicht immer die Seite, die Sie geschrieben haben.',
    problemPara:
      'Suchmaschinen bauen den Suchausschnitt, nicht Sie. Wenn die Seite ihre Antwort vergräbt, keine klare Listen- oder Fragestruktur hat oder die Beschreibung dem Zufall überlässt, liest sich das Ergebnis so flach wie alles ringsherum. Morgan prüft die Elemente, die diesen Ausschnitt prägen, ehrlich, ohne zu versprechen, dass ein Feature gewährt wird.',
    problemAnnotation: '↘ die Antwort ist da, nur vergraben',
    beforeStamp: 'Vergraben',
    beforeHtml: `<p><span class="ba-strike">Es gibt viele Faktoren zu berücksichtigen, und es hängt von einer Reihe von Dingen ab, die wir in den folgenden Abschnitten dieses Artikels im Detail behandeln.</span></p>`,
    beforeTags: ['Keine klare Antwort', 'Keine Struktur', 'Flacher Suchausschnitt'],
    beforeNote: 'nichts, was die Suche greifen kann',
    afterStamp: 'Aufgreifbar',
    afterHtml: `<p><span class="ba-hl">Ein Content-Workflow hat sechs Phasen: planen, briefen, schreiben, prüfen, verbessern und freigeben.</span> Jede davon wird unten behandelt.</p>`,
    afterTags: ['Direkte Antwort', 'Listenfähig', 'Suchausschnitt-fertig'],
    afterNote: 'jetzt gibt es etwas, das hervorgehoben werden kann',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Prüfer, der die Seite so liest wie eine Ergebnisseite.',
    helpsPara:
      'Morgan betrachtet Titel, Beschreibung und Struktur der Seite zusammen und zeigt konkrete, prüfbare Chancen auf, damit die Seite die beste ehrliche Chance auf einen klaren, nützlichen Suchausschnitt hat.',
    checks: [
      'Titel- und Beschreibungsqualität für die Ergebnisse',
      'Ob die Seite ihre Suchanfrage direkt beantwortet',
      'Struktur, die Listen, Schritte oder FAQs unterstützt',
    ],
    improves: [
      'Antworten werden nach oben verschoben und explizit gemacht',
      'Abschnitte werden für einen saubereren Suchausschnitt gestaltet',
      'Fragenorientierter Content wird überfliegbar gemacht',
    ],
    prepares: [
      'Eine Liste von Rich-Result-Chancen',
      'Vorgeschlagene Verbesserungen für den Suchausschnitt',
      'Notizen dazu, welche Ergebnistypen zur Seite passen',
    ],
    surfaces: [
      'Chancen, die eine Schema-Prüfung brauchen',
      'Aussagen, die einen Beleg bräuchten, um vorzukommen',
      'Stellen, an denen Intention und Format nicht zusammenpassen',
    ],
    ioH2: 'Womit Morgan arbeitet und was er liefert.',
    worksFrom: [
      'Seitentitel und Meta-Beschreibung',
      'Überschriften und Content-Struktur',
      'Erkannte Suchintention',
      'Frage- und Listenmuster auf der Seite',
      'Schema-Prüfung, sofern verfügbar',
    ],
    produces: [
      'Suchausschnitt-Chancen-Prüfung',
      'Rich-Result-Vorschläge',
      'Notizen zur Strukturverbesserung',
      'Priorisierung schneller Erfolge',
      'Prüfbereite Zusammenfassung',
    ],
    scenarios: [
      {
        title: 'Eine Anleitung, die ihre Schritte nie auflistet.',
        description:
          'Morgan schlägt eine klare, nummerierte Struktur vor, damit die Schritte auf einen Blick lesbar sind und eine Chance haben, hervorgehoben zu werden.',
      },
      {
        title: 'Eine FAQ-Seite, deren Antworten im Fließtext versteckt sind.',
        description:
          'Er weist darauf hin, wo kurze, direkte Antworten sowohl Lesern als auch der Ergebnisseite helfen würden.',
      },
      {
        title: 'Ein starker Leitfaden mit einer flachen Beschreibung.',
        description:
          'Morgan markiert die Suchausschnittselemente, die die Seite ausbremsen, und übergibt sie an Nadia zur Neuformulierung.',
      },
      {
        title: 'Eine Seite, die ein Rich Result verdienen könnte.',
        description:
          'Er vermerkt, welche strukturierten Ergebnistypen tatsächlich passen, und verweist die Schema-Arbeit an Sofia, ohne zu versprechen, dass Google sie gewährt.',
      },
      {
        title: 'Zwei Seiten konkurrieren um dieselbe Suchanfrage.',
        description:
          'Morgan prüft, wie jede voraussichtlich erscheint, und zeigt auf, welche Struktur dem Leser am besten dient.',
      },
      {
        title: 'Eine Leserfrage, die drei Absätze tief vergraben ist.',
        description:
          'Er empfiehlt, mit der Antwort zu beginnen, damit die Seite sofort nützlich ist, auf der Seite und in der Suche.',
      },
    ],
    boundaryH2: 'Morgan prüft die Chance. Die Suche entscheidet trotzdem.',
    boundaryPara:
      'Kein Tool kontrolliert, was eine Suchmaschine anzeigt. Morgan prüft und empfiehlt, achtet aber sorgfältig darauf, nie einen Suchausschnitt, ein Ranking oder Traffic zu versprechen. Jeder Vorschlag liegt bei einer Person zur Abwägung und Freigabe.',
    boundaryChecklist: [
      'Morgan prüft Suchausschnitte, er garantiert nie einen.',
      'Empfehlungen werden einem Redakteur zur Freigabe vorgelegt.',
      'Chancen, die Schema oder Belege brauchen, werden markiert.',
      'Morgan unterstützt den Autor, er ersetzt nicht dessen Urteil.',
    ],
    willNot: [
      { color: 'red', text: 'Einen Featured Snippet garantieren' },
      { color: 'red', text: 'Rankings oder Traffic versprechen' },
      { color: 'amber', text: 'Eine Struktur erzwingen, die die Lesbarkeit beeinträchtigt' },
    ],
    relatedH2: 'Workers, mit denen Morgan zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'seo_metadata',
        description: 'Entwirft den Titel und die Beschreibung, die den Suchausschnitt prägen.',
        outputLabel: 'Metadaten-Entwürfe',
        ctaLabel: 'Wie Nadia entwirft',
      },
      {
        id: 'schema',
        description: 'Prüft die strukturierten Daten, von denen Rich Results abhängen.',
        outputLabel: 'Schema-Prüfung',
        ctaLabel: 'Wie Sofia prüft',
      },
      {
        id: 'content_analyst',
        description: 'Beurteilt den zugrunde liegenden Content, aus dem der Suchausschnitt stammt.',
        outputLabel: 'Content-Analyse',
        ctaLabel: 'Wie Omar prüft',
      },
    ],
    ctaH2: 'Gestalten, wie die Seite in der Suche erscheint.',
    ctaPara:
      'Nehmen Sie Morgan in Ihren Workflow auf, und jede Seite erreicht die Prüfung mit aufgezeigten Suchausschnitt-Chancen, ehrlich und einsatzbereit.',
    guidanceFooterLabel: 'SUCHAUSSCHNITT',
    guidanceFooterValue: 'Geprüft · Chancen vermerkt',
  },

  schema: {
    seoTitle: 'Schema-Worker | WordPresto',
    metaDescription:
      'Sofia prüft die strukturierten Daten einer Seite und empfiehlt die Schema-Typen, die tatsächlich zur Seite passen, zur menschlichen Prüfung. Keine erfundenen Felder, kein falsches Markup.',
    h1: 'Die Seite so beschreiben, dass Maschinen sie auch verstehen.',
    heroPara1:
      'Strukturierte Daten sagen Suchmaschinen, was eine Seite tatsächlich ist: ein Artikel, ein Produkt, ein Leitfaden, ein Unternehmen. Sofia prüft das bereits vorhandene Schema, beurteilt, was die Seite wirklich darstellt, und empfiehlt die passenden Typen, sodass das Markup die Seite ehrlich beschreibt.',
    heroPara2:
      'Für Teams, die strukturierte Daten wollen, die den Content widerspiegeln, statt eines Haufens Markup, das zwischen Vorlagen kopiert wurde.',
    problemEyebrow: 'Wo das Markup von der Seite abweicht',
    problemH2: 'Strukturierte Daten helfen nur, wenn sie die Wahrheit sagen.',
    problemPara:
      'Schema lässt sich leicht kopieren und schwer ehrlich halten. Seiten erben Markup von einer Vorlage, beschreiben sich selbst als etwas, das sie nicht sind, oder tragen gar keine strukturierten Daten. Sofia prüft, was vorhanden ist, gegen das, was die Seite tatsächlich ist, und empfiehlt passende Typen.',
    problemAnnotation: '↘ als Produkt markiert, liest sich wie ein Artikel',
    beforeStamp: 'Nicht passend',
    beforeHtml: `<p><span class="ba-strike">@type: Product</span> auf einer Seite, die eindeutig eine Schritt-für-Schritt-Anleitung ist, mit <span class="ba-strike">keinem Article- oder HowTo-Markup</span> irgendwo.</p>`,
    beforeTags: ['Falscher Typ', 'Geerbtes Markup', 'Beschreibt nichts'],
    beforeNote: 'das ist keine Produktseite',
    afterStamp: 'Passend',
    afterHtml: `<p><span class="ba-hl">@type: HowTo</span> mit Artikelkontext, empfohlen, weil die Seite eine Schritt-für-Schritt-Anleitung ist. <span class="ba-hl">Zur Prüfung vorgeschlagen.</span></p>`,
    afterTags: ['Typ passt zur Seite', 'Ehrliches Markup', 'Zur Freigabe'],
    afterNote: 'jetzt stimmt das Markup mit der Realität überein',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Prüfer, der Schema mit dem abgleicht, was die Seite wirklich ist.',
    helpsPara:
      'Sofia meldet die strukturierten Daten, die sie erkennt, beurteilt den erkennbaren Seitentyp und empfiehlt passendes Schema. Sie erfindet nie Felder und markiert eine Seite nie als etwas, das sie nicht ist.',
    checks: [
      'Bereits vorhandene strukturierte Daten auf der Seite',
      'Ob erkannte Typen zum Content passen',
      'Fehlendes Schema, das die Seite ehrlich nutzen könnte',
    ],
    improves: [
      'Typenempfehlungen, die zur Seite passen',
      'Markup, das den tatsächlichen Content widerspiegelt',
      'Klarheit darüber, wofür jeder Typ da ist',
    ],
    prepares: [
      'Eine Schema-Prüfung mit erkannten Typen',
      'Empfohlene Typen zur Freigabe',
      'Notizen dazu, warum jeder Typ passt',
    ],
    surfaces: [
      'Markup, das mehr behauptet, als die Seite bietet',
      'Felder, die echte Daten zum Ausfüllen bräuchten',
      'Fälle, in denen ein Mensch den Typ entscheiden sollte',
    ],
    ioH2: 'Womit Sofia arbeitet und was sie liefert.',
    worksFrom: [
      'Bestehende strukturierte Daten',
      'Seiteninhalt und Überschriften',
      'Erkennbarer Seitentyp',
      'Unternehmens- oder Organisationskontext',
      'Technische Prüfung, sofern verfügbar',
    ],
    produces: [
      'Bericht zu erkanntem Schema',
      'Empfohlene Schema-Typen',
      'Begründung für jede Empfehlung',
      'Notizen zu Feldern, die echte Daten brauchen',
      'Prüfbereite Schema-Zusammenfassung',
    ],
    scenarios: [
      {
        title: 'Ein Leitfaden mit Produkt-Markup aus einer Vorlage.',
        description:
          'Sofia markiert die Diskrepanz und empfiehlt die Artikel- oder How-To-Typen, die die Seite tatsächlich beschreiben.',
      },
      {
        title: 'Eine Seite ganz ohne strukturierte Daten.',
        description:
          'Sie beurteilt, was die Seite ist, und empfiehlt einen sinnvollen Grundsatz, zur Freigabe durch eine Person.',
      },
      {
        title: 'Eine Unternehmensseite ohne Organisationsangaben.',
        description:
          'Sofia weist auf das Schema hin, das die Organisation beschreiben würde, ohne Fakten zu erfinden, um es zu füllen.',
      },
      {
        title: 'Eine FAQ-Seite, die FAQ-Markup unterstützen könnte.',
        description:
          'Sie vermerkt die Chance und verweist die Auswirkungen auf den Suchausschnitt an Morgan, die Entscheidung bleibt beim Redakteur.',
      },
      {
        title: 'Schema, das über einen ganzen Bereich kopiert wurde.',
        description:
          'Sofia prüft, wo das geerbte Markup nicht mehr zu den einzelnen Seiten passt, auf denen es liegt.',
      },
      {
        title: 'Eine aussagenlastige Seite in einem regulierten Bereich.',
        description:
          'Sie zeigt Markup auf, das mehr behaupten würde, als die Seite belegen kann, und überlässt es der menschlichen Prüfung.',
      },
    ],
    boundaryH2: 'Sofia empfiehlt das Schema. Menschen geben das Markup frei.',
    boundaryPara:
      'Strukturierte Daten sind eine Aussage über die Seite. Sofia prüft und empfiehlt, schreibt aber nie falsches Markup, erfindet keine Felder und markiert eine Seite nie als etwas, das sie nicht ist. Empfehlungen durchlaufen eine menschliche Freigabe, bevor etwas angewendet wird.',
    boundaryChecklist: [
      'Sofia empfiehlt Schema, sie täuscht nie Markup vor.',
      'Erkannte Typen und Empfehlungen werden zur Prüfung vorgelegt.',
      'Felder, die echte Daten brauchen, werden aufgezeigt, nicht ausgefüllt.',
      'Sofia unterstützt das Team, sie ersetzt nicht dessen Urteil.',
    ],
    willNot: [
      { color: 'red', text: 'Falsches oder erfundenes Markup schreiben' },
      { color: 'red', text: 'Eine Seite als etwas markieren, das sie nicht ist' },
      { color: 'amber', text: 'Felder ohne echte Daten füllen' },
    ],
    relatedH2: 'Workers, mit denen Sofia zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Verknüpft Schema-Chancen damit, wie die Seite in den Ergebnissen erscheint.',
        outputLabel: 'Suchausschnitt-Prüfung',
        ctaLabel: 'Wie Morgan prüft',
      },
      {
        id: 'technical_health',
        description: 'Prüft die weiteren technischen Signale, von denen die Seite abhängt.',
        outputLabel: 'Technische Befunde',
        ctaLabel: 'Wie Maya prüft',
      },
      {
        id: 'seo_metadata',
        description: 'Entwirft den Titel und die Beschreibung, die neben dem Markup stehen.',
        outputLabel: 'Metadaten-Entwürfe',
        ctaLabel: 'Wie Nadia entwirft',
      },
    ],
    ctaH2: 'Die Seite so beschreiben, dass Maschinen sie auch verstehen.',
    ctaPara:
      'Nehmen Sie Sofia in Ihren Workflow auf, und jede Seite erreicht die Prüfung mit strukturierten Daten, die dem entsprechen, was sie tatsächlich ist.',
    guidanceFooterLabel: 'SCHEMA',
    guidanceFooterValue: 'Geprüft · Typen empfohlen',
  },

  technical_health: {
    seoTitle: 'Technischer-Gesundheit-Worker | WordPresto',
    metaDescription:
      'Maya prüft die technischen Signale hinter einer Seite, Metadaten, Überschriften, Indexierbarkeit und Struktur, und meldet, was einen genaueren Blick verdient. Standardbasiert und nur zur Prüfung.',
    h1: 'Die technischen Signale hinter der Seite prüfen.',
    heroPara1:
      'Auch guter Content kann durch stille technische Probleme ausgebremst werden: einen fehlenden Titel, eine unterbrochene Überschriftenreihenfolge, eine nicht indexierbare Seite. Maya prüft diese Signale gegen etablierte Standards und meldet Befunde nach Kategorie, damit nichts Technisches dem Zufall überlassen bleibt.',
    heroPara2:
      'Für Redakteure und Website-Teams, die eine klare, standardbasierte Einschätzung einer Seite wollen, bevor sie live geht.',
    problemEyebrow: 'Wo guter Content still unterperformt',
    problemH2: 'Eine starke Seite kann durch Signale ausgebremst werden, die niemand geprüft hat.',
    problemPara:
      'Technische Probleme kündigen sich selten an. Eine Seite mit fehlendem Meta-Titel, Überschriften, die Ebenen überspringen, oder ein versehentliches Noindex kann sich perfekt lesen und dabei still unterperformen. Maya prüft diese Signale gegen Standards und meldet in klarer Sprache, was Aufmerksamkeit braucht.',
    problemAnnotation: '↘ liest sich gut, ist auf Noindex gesetzt',
    beforeStamp: 'Ungeprüft',
    beforeHtml: `<p>Überschriftenreihenfolge: <span class="ba-strike">H1 → H3 → H3</span>. Meta-Titel: <span class="ba-strike">fehlt</span>. Indexierbar: <span class="ba-strike">nein (Noindex gesetzt)</span>.</p>`,
    beforeTags: ['Übersprungene Überschrift', 'Kein Titel', 'Nicht indexierbar'],
    beforeNote: 'das wird nie gefunden',
    afterStamp: 'Geprüft',
    afterHtml: `<p>Überschriftenreihenfolge: <span class="ba-hl">H1 → H2 → H3</span>. Meta-Titel: <span class="ba-hl">vorhanden und geprüft</span>. Indexierbar: <span class="ba-hl">ja</span>. Zur Korrektur vor Veröffentlichung markiert.</p>`,
    afterTags: ['Saubere Hierarchie', 'Titel vorhanden', 'Indexierbar'],
    afterNote: 'jetzt stimmen die Grundlagen',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein technischer Prüfer, der Befunde meldet, kein Rauschen.',
    helpsPara:
      'Maya führt standardbasierte technische Prüfungen durch und gruppiert ihre Befunde in klare Kategorien mit Bewertungen, sodass eine Person sieht, was zählt, und entscheiden kann, was zu beheben ist. Sie prüft, sie verändert die Seite nicht.',
    checks: [
      'Metadaten, Überschriften und Indexierbarkeit',
      'Seitenstruktur und technische Signale',
      'Vorhandensein von Schema und Grundlagen der Barrierefreiheit',
    ],
    improves: [
      'Ein klares Bild der technischen Gesundheit',
      'Befunde, gruppiert nach Kategorie',
      'Eine sinnvolle Reihenfolge für Korrekturen',
    ],
    prepares: [
      'Standardbasierte technische Befunde',
      'Kategoriebewertungen für die Seite',
      'Notizen dazu, was vor der Veröffentlichung zu prüfen ist',
    ],
    surfaces: [
      'Probleme, die eine Entwicklerlösung brauchen',
      'Befunde, die eine menschliche Entscheidung brauchen',
      'Signale, die eine einzelne Seite allein nicht bestätigen kann',
    ],
    ioH2: 'Womit Maya arbeitet und was sie liefert.',
    worksFrom: [
      'Seitenmetadaten und Überschriften',
      'Indexierbarkeitssignale',
      'Seitenstruktur und Content-Abschnitte',
      'Vorhandensein von Schema',
      'Barrierefreiheits- und technische Signale',
    ],
    produces: [
      'Befunde zur technischen Gesundheit',
      'Kategoriebewertungen',
      'Priorisierte Probleme zur Prüfung',
      'Notizen für Entwickler, wo nötig',
      'Prüfbereite technische Zusammenfassung',
    ],
    scenarios: [
      {
        title: 'Eine Seite, die versehentlich auf Noindex gesetzt wurde.',
        description:
          'Maya markiert das vor der Veröffentlichung, damit eine eigentlich auffindbare Seite nicht still vor der Suche verborgen bleibt.',
      },
      {
        title: 'Überschriften, die von H1 zu H3 springen.',
        description:
          'Sie meldet die unterbrochene Hierarchie, damit die Struktur für Leser, assistive Technik und die Suche sauber bleibt.',
      },
      {
        title: 'Eine neue Vorlage vor dem Launch.',
        description:
          'Maya prüft die technischen Signale an einer Beispielseite, damit Probleme einmal auffallen, nicht auf jeder Seite später.',
      },
      {
        title: 'Eine Content-Auffrischung hat das Markup berührt.',
        description:
          'Sie prüft, ob Titel, Überschriften und Indexierbarkeit nach der Bearbeitung noch stimmen.',
      },
      {
        title: 'Eine Seite, die sich gut liest, aber schlecht rankt.',
        description:
          'Maya zeigt die technischen Signale auf, die sie ausbremsen könnten, zur weiteren Untersuchung durch eine Person.',
      },
      {
        title: 'Eine Liste von Korrekturen wird an einen Entwickler übergeben.',
        description:
          'Sie gruppiert Befunde nach Kategorie und Priorität, damit die technische Arbeit klar und abgegrenzt ist.',
      },
    ],
    boundaryH2: 'Maya meldet die Befunde. Menschen entscheiden über die Korrekturen.',
    boundaryPara:
      'Eine technische Prüfung ist Information, keine Anweisung. Maya prüft und meldet, bearbeitet aber nicht die Seite, ändert keine Einstellungen und veröffentlicht nichts live. Ihre Befunde sind für eine Person zum Handeln.',
    boundaryChecklist: [
      'Maya prüft die Seite, sie bearbeitet sie nie.',
      'Befunde werden gemeldet, damit eine Person handeln kann.',
      'Probleme, die einen Entwickler brauchen, werden klar markiert.',
      'Maya unterstützt das Team, sie ersetzt nicht dessen Urteil.',
    ],
    willNot: [
      { color: 'red', text: 'Die Seite bearbeiten oder Einstellungen ändern' },
      { color: 'red', text: 'Etwas veröffentlichen oder live schalten' },
      { color: 'amber', text: 'Eine Korrektur ohne menschliche Prüfung behaupten' },
    ],
    relatedH2: 'Workers, mit denen Maya zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'schema',
        description: 'Prüft die strukturierten Daten unter den technischen Signalen.',
        outputLabel: 'Schema-Prüfung',
        ctaLabel: 'Wie Sofia prüft',
      },
      {
        id: 'seo_metadata',
        description: 'Entwirft die Metadaten, die Maya auf Vorhandensein und Qualität prüft.',
        outputLabel: 'Metadaten-Entwürfe',
        ctaLabel: 'Wie Nadia entwirft',
      },
      {
        id: 'trust_author_credibility',
        description: 'Prüft die Vertrauenssignale, die neben der technischen Gesundheit stehen.',
        outputLabel: 'Vertrauensprüfung',
        ctaLabel: 'Wie Alex prüft',
      },
    ],
    ctaH2: 'Die technischen Signale hinter der Seite prüfen.',
    ctaPara:
      'Nehmen Sie Maya in Ihren Workflow auf, und jede Seite erreicht die Prüfung mit technischen Signalen, die gegen Standards geprüft wurden.',
    guidanceFooterLabel: 'TECHNIK',
    guidanceFooterValue: 'Geprüft · Befunde erfasst',
  },

  trust_author_credibility: {
    seoTitle: 'Vertrauens- & Autoren-Glaubwürdigkeits-Worker | WordPresto',
    metaDescription:
      'Alex prüft die Vertrauens-, Autorenschafts- und Glaubwürdigkeitssignale rund um eine Seite, damit Leser und Suchmaschinen sehen können, wer hinter dem Content steht. Nur zur Prüfung, nie erfunden.',
    h1: 'Zeigen, wer hinter dem Content steht.',
    heroPara1:
      'Bei Themen, die Geld, Gesundheit oder wichtige Entscheidungen betreffen, wollen Leser und Suchmaschinen gleichermaßen wissen, wer das geschrieben hat und warum man ihm vertrauen kann. Alex prüft den Autorenkontext, die Organisationsidentität, die Belegunterstützung und die Glaubwürdigkeitssignale rund um eine Seite und meldet, wo Vertrauen klar und wo es fehlend ist.',
    heroPara2:
      'Für Teams, die ratgeberorientierten oder besonders sensiblen Content veröffentlichen und ihre Glaubwürdigkeit sichtbar statt vorausgesetzt haben wollen.',
    problemEyebrow: 'Wo Glaubwürdigkeit unausgesprochen bleibt',
    problemH2: 'Guter Rat von niemand Bestimmtem ist schwer zu vertrauen.',
    problemPara:
      'Viel echter Expertencontent wird ohne sichtbaren Autor, ohne Organisationskontext und ohne erkennbare Prüfung veröffentlicht. Die Expertise ist real, aber der Leser sieht sie nicht, und die Suche auch nicht. Alex prüft die Signale, die Glaubwürdigkeit sichtbar machen.',
    problemAnnotation: '↘ Expertenrat, kein genannter Autor',
    beforeStamp: 'Nicht zugeordnet',
    beforeHtml: `<p>Medizinischer Rat veröffentlicht mit <span class="ba-strike">keiner Autorenangabe</span>, <span class="ba-strike">keinem Prüfer</span> und <span class="ba-strike">keinem Organisationskontext</span>.</p>`,
    beforeTags: ['Kein Autor', 'Keine Prüfung', 'Sensibles Thema'],
    beforeNote: 'wer erzählt mir das hier?',
    afterStamp: 'Zugeordnet',
    afterHtml: `<p>Derselbe Rat mit <span class="ba-hl">genanntem Autor und Qualifikationen</span>, <span class="ba-hl">einem Prüfer</span> und <span class="ba-hl">klarem Organisationskontext</span>. Zur Freigabe markiert.</p>`,
    afterTags: ['Genannter Autor', 'Geprüft von', 'Klare Zuordnung'],
    afterNote: 'jetzt ist das Vertrauen sichtbar',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Prüfer, der kontrolliert, ob Vertrauen tatsächlich sichtbar ist.',
    helpsPara:
      'Alex prüft Autorenschaft, Organisationszugehörigkeit, Belegunterstützung und Glaubwürdigkeitssignale, liefert eine Einschätzung der Vertrauensbereitschaft und zeigt auf, was einen menschlichen Blick braucht, besonders bei sensiblen Themen. Er meldet Signale, er erfindet nie Qualifikationen.',
    checks: [
      'Autorenangabe, Biografie und Qualifikationen',
      'Organisationszugehörigkeit und -kontext',
      'Belegunterstützung und Prüfsignale',
    ],
    improves: [
      'Ein klares Bild der Vertrauensbereitschaft',
      'Lücken in der Autorenschaft werden sichtbar',
      'Stellen, an denen Glaubwürdigkeit besser gezeigt werden könnte',
    ],
    prepares: [
      'Eine Vertrauens- und Glaubwürdigkeitsprüfung',
      'Eine Einschätzung der Vertrauensbereitschaft für die Seite',
      'Notizen zum Risiko bei sensiblen Themen',
    ],
    surfaces: [
      'Aussagen mit hohem Einsatz, die gezeigte Expertise brauchen',
      'Fehlender Autoren- oder Prüferkontext',
      'Glaubwürdigkeitsentscheidungen, die ein Mensch treffen sollte',
    ],
    ioH2: 'Womit Alex arbeitet und was er liefert.',
    worksFrom: [
      'Autorenkontext und Namensangabe',
      'Organisations- und Zugehörigkeitssignale',
      'Belegunterstützung auf der Seite',
      'Themensensibilität (Rat, Gesundheit, Geld)',
      'Glaubwürdigkeitssignale im Schema',
    ],
    produces: [
      'Vertrauens- und Glaubwürdigkeitsprüfung',
      'Eine Einschätzung der Vertrauensbereitschaft',
      'Notizen zu Lücken in der Autorenschaft',
      'Risikomarkierungen für sensible Themen',
      'Prüfbereite Vertrauenszusammenfassung',
    ],
    scenarios: [
      {
        title: 'Gesundheits- oder Finanzberatung ohne genannten Autor.',
        description:
          'Alex markiert die fehlende Autorenschaft, damit eine echte, qualifizierte Person genannt werden kann, bevor die Seite live geht.',
      },
      {
        title: 'Eine angesehene Organisation, die das nie sagt.',
        description:
          'Er weist darauf hin, wo Organisationskontext und Zugehörigkeit bestehende Glaubwürdigkeit sichtbar machen könnten.',
      },
      {
        title: 'Eine Seite, die einen Prüfer zeigen sollte.',
        description:
          'Alex vermerkt, wo ein Geprüft-von-Signal Leser bei einem heikleren Thema beruhigen würde.',
      },
      {
        title: 'Aussagen, die sich auf nicht gezeigte Expertise stützen.',
        description:
          'Er deckt auf, wo die Seite eine Autorität annimmt, die sie nicht belegt hat, und verweist die Belegarbeit an Theo.',
      },
      {
        title: 'Content wird für eine regulierte Branche vorbereitet.',
        description:
          'Alex prüft Vertrauenssignale zusammen mit Vera, sodass Glaubwürdigkeit und Compliance gemeinsam betrachtet werden.',
      },
      {
        title: 'Ein Gastbeitrag von einem unbekannten Verfasser.',
        description:
          'Er markiert den fehlenden Autorenkontext, damit eine Person entscheiden kann, wie ehrlich zugeordnet und dahintergestanden wird.',
      },
    ],
    boundaryH2: 'Alex prüft die Vertrauenssignale. Menschen stehen hinter der Seite.',
    boundaryPara:
      'Glaubwürdigkeit lässt sich nicht herstellen. Alex prüft und meldet, erfindet aber nie einen Autor, fälscht keine Qualifikationen und behauptet keine Prüfung, die nicht stattgefunden hat. Was er aufzeigt, ist für eine Person, um ehrlich zu handeln.',
    boundaryChecklist: [
      'Alex prüft Vertrauenssignale, er erfindet sie nie.',
      'Lücken in der Autorenschaft werden aufgezeigt, damit eine Person sie schließt.',
      'Risiken bei sensiblen Themen werden zur menschlichen Prüfung markiert.',
      'Alex unterstützt das Team, er ersetzt nicht dessen Urteil.',
    ],
    willNot: [
      { color: 'red', text: 'Autoren oder Qualifikationen erfinden' },
      { color: 'red', text: 'Eine Prüfung behaupten, die nicht stattgefunden hat' },
      { color: 'amber', text: 'Eine Autorität annehmen, die die Seite nicht gezeigt hat' },
    ],
    relatedH2: 'Workers, mit denen Alex zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'evidence_gap',
        description: 'Verwandelt schwache oder fehlende Belege in eine klare Checkliste.',
        outputLabel: 'Beleg-Checkliste',
        ctaLabel: 'Wie Theo prüft',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Markiert unbelegte Aussagen und Compliance-Risiken vor der Freigabe.',
        outputLabel: 'Risiko- & Compliance-Bericht',
        ctaLabel: 'Wie Vera prüft',
      },
      {
        id: 'schema',
        description: 'Prüft die strukturierten Daten, die Glaubwürdigkeitssignale tragen.',
        outputLabel: 'Schema-Prüfung',
        ctaLabel: 'Wie Sofia prüft',
      },
    ],
    ctaH2: 'Zeigen, wer hinter dem Content steht.',
    ctaPara:
      'Nehmen Sie Alex in Ihren Workflow auf, und jede Seite erreicht die Prüfung mit geprüften und sichtbaren Vertrauens- und Autorenschaftssignalen.',
    guidanceFooterLabel: 'VERTRAUEN',
    guidanceFooterValue: 'Geprüft · Signale kontrolliert',
  },

  evidence_gap: {
    seoTitle: 'Beleglücken-Worker | WordPresto',
    metaDescription:
      'Theo verwandelt schwache oder fehlende Belege in eine klare Checkliste, damit Aussagen belegt sind, bevor eine Seite freigegeben oder übergeben wird. Was zu belegen ist, wo Quellen zu finden sind, was zurückzuhalten ist.',
    h1: 'Aussagen belegen, bevor sie live gehen.',
    heroPara1:
      'Content steckt voller Aussagen: Zahlen, Vergleiche, Tatsachenbehauptungen. Manche sind solide, manche sind Vermutungen, und manche sollten nicht veröffentlicht werden, bis sie geprüft sind. Theo sammelt die im Workflow aufkommenden Belegwarnungen und verwandelt sie in eine einzige, praktische Checkliste: was belegt werden muss, wo es zu finden ist und was zurückzuhalten ist.',
    heroPara2:
      'Für Redakteure und Prüfer, die Aussagen vor der Freigabe belegt sehen wollen, nicht erst, nachdem ein Leser oder eine Aufsichtsbehörde es bemerkt.',
    problemEyebrow: 'Wo Aussagen dem Beleg vorauseilen',
    problemH2: 'Die riskanten Aussagen sind selten die, die riskant aussehen.',
    problemPara:
      'Ein selbstbewusster Satz liest sich wie eine Tatsache, egal ob etwas dahintersteht oder nicht. Über einen Entwurf hinweg schleichen sich unbelegte Zahlen und griffig klingende Vergleiche ein, weil niemand nachhält, welche Aussage eine Quelle braucht. Theo bündelt diese Lücken in einer Checkliste, damit nichts auf einer ungeprüften Annahme ruht.',
    problemAnnotation: '↘ eine genaue Zahl, keine Quelle',
    beforeStamp: 'Unbelegt',
    beforeHtml: `<p>Unsere Methode ist <span class="ba-strike">nachweislich um 40 % schneller bei der Prüfung</span> und ist <span class="ba-strike">die genaueste auf dem Markt</span>.</p>`,
    beforeTags: ['Keine Quelle', 'Superlative Aussage', 'Braucht einen Beleg'],
    beforeNote: 'woher kommen die 40 %?',
    afterStamp: 'Geprüft',
    afterHtml: `<p>Markiert: <span class="ba-hl">"40 %" braucht eine Quelle oder muss gestrichen werden</span>. <span class="ba-hl">"Genaueste" braucht einen Beleg oder eine Umformulierung.</span> Sichere Übergangsformulierung vorgeschlagen.</p>`,
    afterTags: ['Quelle erforderlich', 'Umformulieren oder belegen', 'Zur Prüfung'],
    afterNote: 'jetzt geht nichts mehr auf Verdacht live',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Eine Checkliste, die vage Sorge in konkrete Maßnahmen verwandelt.',
    helpsPara:
      'Theo bündelt Belegwarnungen in einer strukturierten Checkliste: was Unterstützung braucht, eine vorgeschlagene Quelle, das Risikoniveau, ob es die Freigabe blockieren sollte, und sichere Übergangsformulierungen. Die eigentliche Belegarbeit bleibt bei Menschen.',
    checks: [
      'Aussagen ohne Quelle',
      'Zahlen und Vergleiche, die einen Beleg brauchen',
      'Formulierungen, die den Sachverhalt möglicherweise übertreiben',
    ],
    improves: [
      'Vage Sorgen werden zu klaren Maßnahmen',
      'Ein einziger Überblick über jede Beleglücke',
      'Priorität und Risiko zu jedem Punkt',
    ],
    prepares: [
      'Eine Beleg-Checkliste für die Seite',
      'Vorgeschlagene Quellen zur Recherche',
      'Sichere Übergangsformulierungen, wo hilfreich',
    ],
    surfaces: [
      'Aussagen, die die Freigabe blockieren sollten',
      'Hochrisiko-Aussagen, die ein Mensch abwägen sollte',
      'Quellen, die eine Person verifizieren sollte',
    ],
    ioH2: 'Womit Theo arbeitet und was er liefert.',
    worksFrom: [
      'Belegwarnungen aus dem Workflow',
      'Aussagen und Zahlen im Entwurf',
      'Themensensibilität und Risiko',
      'Bestehende Quellen auf der Seite',
      'Prüf- und Compliance-Notizen',
    ],
    produces: [
      'Eine gebündelte Beleg-Checkliste',
      'Pflichtbeleg-Punkte',
      'Vorgeschlagene Quellen und Risikostufen',
      'Freigabeblockierende Markierungen',
      'Sichere Übergangsformulierungen',
    ],
    scenarios: [
      {
        title: 'Eine genaue Statistik ohne Quellenangabe.',
        description:
          'Theo markiert die Zahl, kennzeichnet sie als beleg­bedürftig und schlägt eine sichere Formulierung vor, bis eine Quelle gefunden ist.',
      },
      {
        title: 'Ein Superlativ, den die Seite nicht belegen kann.',
        description:
          'Er zeigt "das Beste" oder "das Genaueste" als Aussagen auf, die vor der Freigabe einen Beleg oder eine Umformulierung brauchen.',
      },
      {
        title: 'Ein Entwurf voller selbstbewusster Behauptungen.',
        description:
          'Theo zieht jede unbelegte Aussage in eine Checkliste, sodass ein Prüfer sie nicht Zeile für Zeile suchen muss.',
      },
      {
        title: 'Ein reguliertes Thema kurz vor der Freigabe.',
        description:
          'Er markiert die Aussagen, die die Freigabe blockieren sollten, bis sie richtig belegt sind, und gibt das Risiko an Vera weiter.',
      },
      {
        title: 'Eine Seite wird für die Übergabe vorbereitet.',
        description:
          'Theo bestätigt, dass die Beleg-Checkliste klar ist, bevor Audrey den Freigabebericht zusammenstellt.',
      },
      {
        title: 'Eine Aussage, die sich auf ungezeigte Expertise stützt.',
        description:
          'Er stimmt sich mit Alex ab, damit sowohl Autorität als auch Beleg gezeigt werden, statt vorausgesetzt zu werden.',
      },
    ],
    boundaryH2: 'Theo findet die Lücken. Menschen liefern den Beleg.',
    boundaryPara:
      'Belege sind eine menschliche Verantwortung. Theo zeigt auf, was Unterstützung braucht und wie riskant jede Lücke ist, erfindet aber keine Quellen, fälscht keine Zahlen und gibt keine Aussage frei. Das Ausfüllen und Verifizieren der Belege bleibt bei Menschen.',
    boundaryChecklist: [
      'Theo findet Lücken, er erfindet nie Belege.',
      'Jeder Punkt wird einer Person zur Klärung vorgelegt.',
      'Aussagen, die die Freigabe blockieren sollten, werden markiert.',
      'Theo unterstützt den Prüfer, er ersetzt nicht dessen Urteil.',
    ],
    willNot: [
      { color: 'red', text: 'Quellen oder Zahlen erfinden' },
      { color: 'red', text: 'Eine unbelegte Aussage freigeben' },
      { color: 'amber', text: 'Eine hochriskante Aussage durchwinken' },
    ],
    relatedH2: 'Workers, mit denen Theo zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'trust_author_credibility',
        description: 'Prüft, ob die Autorität hinter den Aussagen sichtbar ist.',
        outputLabel: 'Vertrauensprüfung',
        ctaLabel: 'Wie Alex prüft',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Markiert unbelegte Aussagen und Compliance-Risiken vor der Freigabe.',
        outputLabel: 'Risiko- & Compliance-Bericht',
        ctaLabel: 'Wie Vera prüft',
      },
      {
        id: 'approval_report',
        description: 'Fügt die Beleg-Checkliste in die Freigabeentscheidung ein.',
        outputLabel: 'Freigabebericht',
        ctaLabel: 'Wie Audrey freigibt',
      },
    ],
    ctaH2: 'Aussagen belegen, bevor sie live gehen.',
    ctaPara:
      'Nehmen Sie Theo in Ihren Workflow auf, und jede Seite erreicht die Prüfung mit ihren Beleglücken in einer klaren Checkliste gebündelt.',
    guidanceFooterLabel: 'BELEGE',
    guidanceFooterValue: 'Geprüft · Lücken aufgelistet',
  },
};
