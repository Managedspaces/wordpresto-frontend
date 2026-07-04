import type { WorkerProfileTranslatable } from './types';

export const deBatch3: Record<string, WorkerProfileTranslatable> = {
  clarity_proofing: {
    seoTitle: 'Klarheit & Korrektorat-Worker | WordPresto',
    metaDescription:
      'Esme lektoriert Grammatik, Klarheit, Ton und risikobewusste Formulierungen und erstellt reine Review-Vorschläge, damit Redakteur:innen den Text verbessern können, ohne die Kontrolle an die Automatisierung abzugeben.',
    h1: 'Den Text sauberer machen, bevor er ins Review geht.',
    heroPara1:
      'Gutes Lektorat ist mehr als Tippfehler zu korrigieren. Es bedeutet zu erkennen, wo ein Satz abdriftet, wo eine Formulierung fast richtig klingt, wo der Ton verrutscht ist und wo die Leserin sich zu sehr anstrengen muss. Esme lektoriert den Text selbst: Grammatik, Rechtschreibung, Zeichensetzung, Klarheit, Prägnanz, Lesbarkeit, Ton, Konsistenz, Wiederholung, Wortwahl und risikobewusste Sprache. Sie erstellt reine Review-Vorschläge, damit Redakteur:innen die Copy verbessern können, ohne die Kontrolle über die Seite an die Automatisierung abzugeben.',
    heroPara2:
      'Für Entwurfs-Workflows, Content-Reviews, Seitenaktualisierungen, Kundenkorrekturen und die letzte redaktionelle Prüfung vor der Freigabe.',
    problemEyebrow: 'Wo Lektorats-Workflows schiefgehen',
    problemH2: 'Eine Seite kann sachlich richtig und trotzdem schwer zu lesen sein.',
    problemPara:
      'Die meisten Inhalte scheitern nicht, weil jeder Satz kaputt ist. Sie scheitern, weil sich kleine Probleme summieren: eine vage Formulierung hier, ein zu langer Satz dort, wiederholte Wortwahl, schwache Übergänge, störende Zeichensetzung, Tondrift und unnötige Komplexität. Esme fängt die sprachlichen Probleme ab, bevor sie zu Reibung im Review werden.',
    problemAnnotation: '↘ erst lektorieren, dann freigeben',
    beforeStamp: 'Roher Entwurf',
    beforeHtml: `<p>Die Seite soll Nutzer:innen helfen, das Leistungsangebot zu verstehen, und liefert eine Reihe unterschiedlicher Beispiele, die für Menschen nützlich sein könnten, die möglicherweise eine Buchung in Erwägung ziehen.</p>`,
    beforeTags: ['Zu langer Satz', 'Vage Formulierung', 'Flacher Rhythmus', 'Schwache Conversion-Sprache'],
    beforeNote: 'das lässt die Seite unfertig wirken',
    afterStamp: 'Nach Esme',
    afterHtml: `<p>Die Seite erklärt die Leistung klar, gibt praktische Beispiele und hilft potenziellen Kund:innen bei der Entscheidung, ob sie buchen.</p>`,
    afterTags: ['Klarerer Satz', 'Weniger Wiederholung', 'Stärkerer Leserfokus', 'Klarerer Rhythmus'],
    afterNote: 'Redakteur:innen können den Vorschlag prüfen, statt bei null neu zu schreiben',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Lektoratsdurchgang, der den Text verbessert, ohne der Redaktion die Kontrolle zu nehmen.',
    helpsPara:
      'Esme prüft die Sprache auf Satz-, Absatz- und Seitenebene. Sie hebt Probleme hervor, die die Copy schwerer lesbar, weniger konsistent, weniger geschliffen oder riskanter machen, als sie sein müsste. Sie schreibt die Seite nicht für die Redakteurin um. Sie liefert konkrete, prüfbare Vorschläge, damit ein Mensch die Änderung annehmen, ablehnen oder anpassen kann.',
    checks: [
      'Grammatik, Rechtschreibung und Zeichensetzung',
      'Klarheit, Prägnanz und Satzlänge',
      'Wiederholung, schwache Formulierungen und Wortwahl',
      'Ton, Stimmpassung und Konsistenz',
      'Risikobewusste Formulierungen und Übertreibungen',
    ],
    improves: [
      'Lesbarkeit, bevor eine Seite das finale Review erreicht',
      'Präzision auf Satzebene, ohne die freigegebene Bedeutung zu verändern',
      'Konsistenz über Abschnitte, Entwürfe und Seitenaktualisierungen hinweg',
    ],
    prepares: [
      'Eine strukturierte Klarheits- und Lektoratsprüfung',
      'Vorschläge auf Satzebene für die menschliche Prüfung',
      'Eine Liste von Formulierungsproblemen, die redaktionelles Urteilsvermögen brauchen',
    ],
    surfaces: [
      'Formulierungen, die technisch korrekt, aber unbeholfen sind',
      'Sätze, die vereinfacht werden müssen',
      'Tondrift von der gewählten Stimme oder dem Seitenzweck',
      'Riskante Aussagen, Übertreibungen oder unklare Formulierungen',
    ],
    ioH2: 'Womit Esme arbeitet und was sie liefert.',
    worksFrom: [
      'Seiten- oder Entwurfstext',
      'Writing-Canvas-Inhalt',
      'Output der Abschnittsüberarbeitung',
      'Signale zu Stimme und Stil',
      'Signale aus dem Entwurfsqualitäts-Review',
    ],
    produces: [
      'Klarheits-Review',
      'Vorschläge zu Grammatik und Zeichensetzung',
      'Hinweise zu Prägnanz und Lesbarkeit',
      'Notizen zu Ton und Konsistenz',
      'Warnungen zu risikobewussten Formulierungen',
    ],
    scenarios: [
      {
        title: 'Eine Seite ist fast fertig, wirkt aber noch roh.',
        description:
          'Esme findet die sprachliche Reibung: unbeholfene Sätze, wiederholte Formulierungen, unklare Wortwahl und Zeichensetzungsprobleme.',
      },
      {
        title: 'Ein Entwurf wurde von mehreren Personen bearbeitet.',
        description:
          'Sie prüft die Konsistenz, damit sich die Seite nicht wie aus verschiedenen Stimmen zusammengeflickt anfühlt.',
      },
      {
        title: 'Ein Kunde hat manuell Textänderungen vorgenommen.',
        description:
          'Esme prüft die neue Formulierung, ohne die Absicht des Kunden rückgängig zu machen oder die Seite stillschweigend umzuschreiben.',
      },
      {
        title: 'Eine Seite braucht einen Grammarly-artigen Lektoratsdurchgang innerhalb des Word-Presto-Workflows.',
        description:
          'Sie gibt praktische Vorschläge auf Satzebene, während die Redaktion die Kontrolle behält.',
      },
      {
        title: 'Ein reguliertes oder heikles Thema braucht sorgfältige Formulierungen.',
        description:
          'Esme markiert Übertreibungen, riskante Formulierungen und Sprache, die eine menschliche Compliance-Prüfung brauchen könnte.',
      },
      {
        title: 'Ein finaler Entwurf bewegt sich auf die Freigabe zu.',
        description:
          'Sie fängt kleine Probleme ab, bevor das Editorial Approval Gate die Seite prüft.',
      },
    ],
    boundaryH2: 'Esme lektoriert den Text. Redakteur:innen entscheiden, was sich ändert.',
    boundaryPara:
      'Ein Klarheits-Review ist kein automatisches Umschreiben. Esme liefert Vorschläge, Markierungen und Review-Notizen. Die Redakteurin entscheidet, was übernommen wird, was abgelehnt wird und was eine andere menschliche Bearbeitung braucht.',
    boundaryChecklist: [
      'Esme schlägt vor, sie wendet nie selbst an.',
      'Vorschläge sind für die Prüfung im redaktionellen Workflow gedacht.',
      'Ton- und Klarheitsnotizen unterstützen menschliches Urteilsvermögen, sie ersetzen es nicht.',
      'Risikobewusste Formulierungen werden zur Prüfung markiert, nicht als juristische oder Compliance-Freigabe behandelt.',
    ],
    willNot: [
      { color: 'red', text: 'Live-Content direkt bearbeiten oder umschreiben' },
      { color: 'red', text: 'Vorschläge ohne menschliche Freigabe anwenden' },
      { color: 'red', text: 'Veröffentlichen, WordPress aktualisieren oder in ein CMS schreiben' },
      { color: 'red', text: 'Für diesen lokalen Lektoratsdurchgang einen externen Anbieter aufrufen' },
      { color: 'red', text: 'Fakten, Belege oder Markenregeln erfinden' },
    ],
    relatedH2: 'Workers, mit denen Esme zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Prüft, ob die Copy zur konfigurierten Stimme passt, bevor das Lektorat die Sprache schärft.',
        outputLabel: 'Stimm-Review',
        ctaLabel: 'Wie Helena prüft',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Prüft, ob der Entwurf die freigegebenen Änderungen abdeckt und Qualitätsrisiken hat.',
        outputLabel: 'Entwurfsqualitäts-Review',
        ctaLabel: 'Wie Quinn prüft',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Prüft, ob der Content bereit für die redaktionelle Freigabe durch Menschen ist.',
        outputLabel: 'Freigabe-Gate',
        ctaLabel: 'Wie Dana entscheidet',
      },
    ],
    ctaH2: 'Den Text sauberer machen, bevor er ins Review geht.',
    ctaPara:
      'Nehmen Sie Esme in Ihren Workflow auf, und jede Seite erhält einen sorgfältigen Lektoratsdurchgang, bevor sie die finale Freigabe erreicht.',
    guidanceFooterLabel: 'LEKTORATSSTATUS',
    guidanceFooterValue: 'Vorschläge bereit · wartet auf Redaktion',
  },

  cannibalisation_overlap: {
    seoTitle: 'Kannibalisierung & Überschneidung-Worker | WordPresto',
    metaDescription:
      'Cleo prüft eine Seite auf Intentionskonflikte, Überschneidungsrisiken und unklare Content-Rollen und hilft Redakteur:innen zu entscheiden, ob eine Seite geschärft, gestützt, konsolidiert oder manuell gegen andere geprüft werden sollte.',
    h1: 'Seiten finden, die versuchen, zu viele Aufgaben zu erfüllen.',
    heroPara1:
      'Content-Kannibalisierung ist nicht nur ein websiteweites Ranking-Problem. Sie kann innerhalb einer einzelnen Seite beginnen: gemischte Intention, unklare redaktionelle Rolle, Metadaten, die das Falsche versprechen, dünne Abschnitte, die woanders hingehören, oder Seitentext, der mit einem anderen wahrscheinlichen Asset konkurriert. Cleo prüft eine Seite auf Intentionskonflikte, Überschneidungsrisiken und unklare Content-Rollen. Sie hilft Redakteur:innen zu entscheiden, ob die Seite geschärft, gestützt, konsolidiert oder manuell gegen andere Seiten geprüft werden sollte.',
    heroPara2: 'Für SEO-Reviews, Content-Audits, thematische Planung und Workflows zur Seitenverbesserung.',
    problemEyebrow: 'Wo Kannibalisierung beginnt',
    problemH2: 'Seiten konkurrieren, wenn ihre Rolle unklar ist.',
    problemPara:
      'Eine Seite kann versuchen, gleichzeitig Leitfaden, Service-Seite, Vergleichsseite und Verkaufsseite zu sein. Oder sie enthält einen dünnen Abschnitt, der ein eigenständiger unterstützender Artikel sein sollte. Oder Titel und Meta-Beschreibung versprechen eine Intention, die der Textkörper nicht erfüllt. Cleo prüft diese Überschneidungssignale, bevor die Website schwerer zu verwalten wird.',
    problemAnnotation: '↘ die Rolle der Seite klären',
    beforeStamp: 'Überschneidungsrisiko',
    beforeHtml: `<p>Die Seite stellt die Leistung vor, vergleicht Alternativen, beantwortet allgemeine FAQs und zielt auf einen leitfadenartigen Titel.</p>`,
    beforeTags: ['Gemischte Intention', 'Unklare Rolle', 'Dünne Stützabschnitte', 'SERP-Versprechen passt nicht'],
    beforeNote: 'die Seite könnte mit künftigem Content konkurrieren',
    afterStamp: 'Rolle geklärt',
    afterHtml: `<p>Die Seite wird als Service-Entscheidungsseite positioniert, Leitfaden-Inhalte wandern in unterstützende Assets.</p>`,
    afterTags: ['Klare Seitenrolle', 'Klarere Intention', 'Bessere Cluster-Planung', 'Manuelle Prüfungen aufgeführt'],
    afterNote: 'die Redakteurin weiß, wofür diese Seite da ist',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Kannibalisierungs-Review, das ehrlich mit seinen Grenzen umgeht.',
    helpsPara:
      'Cleo prüft die im Workflow bereits verfügbaren Signale auf Seitenebene. Sie kann Risikoindikatoren und manuelle Prüfungen markieren, beansprucht aber keine vollständige websiteweite Kannibalisierungserkennung, solange keine Crawl- und Ranking-Daten vorliegen.',
    checks: [
      'Intentionskonflikt innerhalb der Seite',
      'Diskrepanz zwischen Metadaten-Versprechen und Inhalt',
      'Unklare redaktionelle Rolle',
      'Dünne Abschnitte, die woanders hingehören könnten',
      'Überschneidungsrisiko auf Seitenebene',
      'Nötige manuelle seitenübergreifende Prüfungen',
    ],
    improves: [
      'Klarheit des Seitenzwecks',
      'Themencluster-Planung',
      'Entscheidungen zur Content-Konsolidierung',
      'Sicherheit vor dem Überarbeiten oder Erweitern einer Seite',
    ],
    prepares: [
      'Kannibalisierungsrisiko-Review',
      'Empfohlene Seitenrolle',
      'Manuelle Überschneidungsprüfungen',
      'Vorgeschlagene nächste Maßnahme',
    ],
    surfaces: [
      'Seiten, die konkurrierende Intentionen bedienen wollen',
      'Abschnitte, die eine eigene Seite verdienen könnten',
      'Metadaten, die mit einem anderen Asset konkurrieren könnten',
      'Risiken, die eine Bestätigung durch Crawl, Keywords oder SERP brauchen',
    ],
    ioH2: 'Womit Cleo arbeitet und was sie liefert.',
    worksFrom: [
      'Intentions-Einschätzung',
      'Signale aus dem Content-Inventar',
      'Metadaten-Review',
      'Link- und Beziehungssignale',
      'Seitenstruktur und Content-Tiefe',
    ],
    produces: [
      'Überschneidungsrisiko-Review',
      'Empfohlene Seitenrolle',
      'Notizen zu Intentionskonflikten',
      'Manuelle seitenübergreifende Prüfungen',
      'Konsolidierungsanstöße',
    ],
    scenarios: [
      {
        title: 'Eine Seite wirkt unfokussiert.',
        description: 'Cleo prüft, ob die Seite Intentionen mischt oder versucht, zu vielen Zwecken zu dienen.',
      },
      {
        title: 'Sie vermuten Keyword-Kannibalisierung.',
        description: 'Sie prüft das Risiko auf Seitenebene und listet auf, was eine seitenübergreifende Bestätigung braucht.',
      },
      {
        title: 'Metadaten und Content passen nicht zusammen.',
        description:
          'Cleo markiert, wenn Titel oder Meta-Beschreibung eine andere Seite versprechen, als der Textkörper liefert.',
      },
      {
        title: 'Ein Content-Cluster wird unübersichtlich.',
        description: 'Sie hilft zu erkennen, ob eine Seite geschärft, aufgeteilt, gestützt oder konsolidiert werden sollte.',
      },
      {
        title: 'Ein Abschnitt wirkt zu dünn.',
        description: 'Cleo markiert Content, der besser als unterstützende Seite oder internes Linkziel geeignet wäre.',
      },
      {
        title: 'Eine Überarbeitung könnte die Überschneidung verschlimmern.',
        description: 'Sie hilft Redakteur:innen, die Seitenrolle zu schützen, bevor Textänderungen beginnen.',
      },
    ],
    boundaryH2: 'Cleo markiert das Risiko. Redakteur:innen entscheiden die Content-Strategie.',
    boundaryPara:
      'Cleo führt keine Seiten zusammen, leitet keine URLs um, löscht keinen Content und erklärt keine bestätigte websiteweite Kannibalisierung allein aus seitenbezogenen Belegen. Sie gibt der Redakteurin ein strukturiertes Risiko-Review und manuelle Prüfungen.',
    boundaryChecklist: [
      'Cleo markiert Überschneidungsrisiken, sie führt Seiten nie zusammen oder löscht sie.',
      'Aussagen zu seitenübergreifender Kannibalisierung werden nur mit unterstützenden Crawl- oder Ranking-Daten getroffen.',
      'Empfohlene Seitenrollen sind Vorschläge für die redaktionelle Prüfung, keine automatischen Änderungen.',
      'Manuelle Prüfungen werden klar aufgelistet, damit Redakteur:innen wissen, was noch bestätigt werden muss.',
    ],
    willNot: [
      { color: 'red', text: 'Seiten zusammenführen, entfernen oder umleiten' },
      { color: 'red', text: 'Seitenübergreifende Kannibalisierung ohne unterstützende Daten bestätigen' },
      { color: 'red', text: 'Titel oder Content automatisch umschreiben' },
      { color: 'red', text: 'Abschnitte oder Seiten löschen' },
      { color: 'red', text: 'Veröffentlichen oder Änderungen an einem CMS vornehmen' },
    ],
    relatedH2: 'Workers, mit denen Cleo zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Erkennt die Leserintention, die Cleo auf Konflikte prüft.',
        outputLabel: 'Intentions-Einschätzung',
        ctaLabel: 'Wie Yuna erkennt',
      },
      {
        id: 'topical_authority',
        description: 'Prüft die Tiefe und Stützung des Themenclusters.',
        outputLabel: 'Abdeckungs-Review',
        ctaLabel: 'Wie Zara prüft',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Hilft, Überschneidungsbefunde in Pflegeempfehlungen zu verwandeln.',
        outputLabel: 'Pflege-Review',
        ctaLabel: 'Wie Hugo hilft',
      },
    ],
    ctaH2: 'Die Rolle klären, bevor die Seite mit sich selbst konkurriert.',
    ctaPara:
      'Cleo hilft Redakteur:innen, Überschneidungsrisiken, gemischte Intentionen und Konsolidierungsfragen zu erkennen, bevor der Content weitergeht.',
    guidanceFooterLabel: 'ÜBERSCHNEIDUNGSSTATUS',
    guidanceFooterValue: 'Prüfung nötig · Rolle unklar',
  },

  content_decay: {
    seoTitle: 'Content-Verfall & Auffrischungspriorität-Worker | WordPresto',
    metaDescription:
      'Faye prüft Aktualitätssignale und das Risiko von Content-Verfall und hilft Redakteur:innen zu entscheiden, ob eine Seite noch aktuell ist, beobachtet, aufgefrischt oder dringend geprüft werden muss.',
    h1: 'Erkennen, wenn eine Seite anfängt, ihre Schärfe zu verlieren.',
    heroPara1:
      'Manche Seiten scheitern langsam. Der Text existiert noch, die URL lädt noch, aber die Belege sind alt, der Titel verspricht etwas Aktuelles, die Beispiele wirken überholt, oder das Thema hat sich weiterentwickelt. Faye prüft Aktualitätssignale und das Risiko von Content-Verfall. Sie hilft Redakteur:innen zu entscheiden, ob eine Seite noch aktuell ist, beobachtet werden muss, aufgefrischt werden sollte oder dringend geprüft werden muss.',
    heroPara2:
      'Für Content-Audits, Auffrischungsplanung, SEO-Pflege und Seiten, bei denen Alter, Genauigkeit oder Aktualität eine Rolle spielen.',
    problemEyebrow: 'Wo Content-Verfall beginnt',
    problemH2: 'Eine Seite kann fertig wirken, während ihr Nutzen verblasst.',
    problemPara:
      'Content-Verfall ist oft subtil. Ein Datum im Titel, ein altes Beispiel, eine unbelegte Aussage, ein veralteter Vergleich oder ein Seitentyp, der regelmäßige Aktualisierungen braucht, können Vertrauen und Performance schleichend verringern. Faye sucht nach den Signalen, die Redakteur:innen sagen, dass eine Seite Aufmerksamkeit braucht, bevor daraus ein größeres Ranking- oder Glaubwürdigkeitsproblem wird.',
    problemAnnotation: '↘ Verfall erkennen, bevor die Seite abrutscht',
    beforeStamp: 'Veralteter Content',
    beforeHtml: `<p>Der Titel verspricht einen aktuellen Leitfaden, aber Beispiele, Belege und Empfehlungen wurden lange nicht geprüft.</p>`,
    beforeTags: ['Zeitliches Versprechen', 'Alte Beispiele', 'Schwache Aktualität der Belege', 'Kein Pflegerhythmus'],
    beforeNote: 'die Seite verdient möglicherweise kein Vertrauen mehr',
    afterStamp: 'Auffrischung geplant',
    afterHtml: `<p>Die Seite wird zur Prüfung markiert, veraltete Beispiele werden gekennzeichnet, und ein praktischer Pflegerhythmus wird empfohlen.</p>`,
    afterTags: ['Klarer Status', 'Nützliche Priorität', 'Menschliche Prüfung', 'Kein vorgetäuschtes Update'],
    afterNote: 'die Redakteurin weiß, was Aufmerksamkeit braucht',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Aktualitäts-Review, ohne vorzutäuschen, die Seite zu aktualisieren.',
    helpsPara:
      'Faye prüft die im Speicher vorhandenen Seitensignale und identifiziert Content, der aufgefrischt werden könnte. Sie bearbeitet, plant, veröffentlicht nichts und erfindet keine aktualisierten Fakten. Sie gibt der Redakteurin ein klares Pflegesignal.',
    checks: [
      'Zeitliche Sprache in Titeln, Metadaten und Text',
      'Aktualität der Belege',
      'Altersempfindlichkeit des Content-Typs',
      'Diskrepanz zwischen SERP-Versprechen und Inhalt',
      'Indikatoren für den Pflegerhythmus',
      'Vertrauensrisiken durch veraltete Informationen',
    ],
    improves: [
      'Planung der Content-Pflege',
      'Priorisierung der Auffrischung',
      'Redaktionelle Sichtbarkeit alternder Seiten',
      'Sicherheit vor dem Aktualisieren oder Belassen einer Seite',
    ],
    prepares: [
      'Auffrischungsprioritäts-Review',
      'Empfohlener Pflegerhythmus',
      'Checkliste für veraltete Signale',
      'Anstöße zur menschlichen Prüfung',
    ],
    surfaces: [
      'Veraltete Aussagen oder Beispiele',
      'Aktuelle-Jahr-Versprechen, die bestätigt werden müssen',
      'Seiten, die beobachtet werden sollten',
      'Content, der dringend geprüft werden muss',
    ],
    ioH2: 'Womit Faye arbeitet und was sie liefert.',
    worksFrom: [
      'Seitentitel und Metadaten',
      'Seitentext',
      'Signale aus dem Beleg-Review',
      'Signale aus dem Content-Inventar',
      'Intentions- und Formatsignale',
    ],
    produces: [
      'Aktualitäts-Review',
      'Verfallsrisiko-Status',
      'Auffrischungspriorität',
      'Pflegerhythmus',
      'Manuelle Prüfungen',
    ],
    scenarios: [
      {
        title: 'Eine Seite enthält Daten, Trends oder aktuelle Ratschläge.',
        description: 'Faye prüft, ob die Seite noch aktuell genug wirkt, um vertrauenswürdig zu sein.',
      },
      {
        title: 'Eine Seite hat an Performance verloren.',
        description: 'Sie hilft zu erkennen, ob Aktualität Teil des Problems sein könnte.',
      },
      {
        title: 'Ein Content-Audit braucht Auffrischungsprioritäten.',
        description: 'Faye hilft, Seiten, die in Ordnung sind, von Seiten zu trennen, die Aufmerksamkeit brauchen.',
      },
      {
        title: 'Ein Titel verspricht etwas Aktuelles.',
        description: 'Sie prüft, ob der Textkörper dieses Versprechen tatsächlich einlöst.',
      },
      {
        title: 'Eine Seite enthält Belege, Beispiele oder Statistiken.',
        description: 'Faye markiert Punkte, die überprüft oder ersetzt werden müssen.',
      },
      {
        title: 'Ein Pflege-Workflow braucht Struktur.',
        description: 'Sie empfiehlt, ob die Seite beobachtet, aufgefrischt oder dringend geprüft werden sollte.',
      },
    ],
    boundaryH2: 'Faye markiert Aktualitätsrisiken. Redakteur:innen entscheiden über die Aktualisierung.',
    boundaryPara:
      'Faye aktualisiert keine Fakten, schreibt keine Abschnitte um, plant keine Auffrischungen und veröffentlicht keine Änderungen. Sie prüft die verfügbaren Signale und sagt der Redakteurin, was Aufmerksamkeit braucht.',
    boundaryChecklist: [
      'Faye markiert Aktualitätsrisiken, sie schreibt Content nie selbst um oder aktualisiert ihn.',
      'Aktualitätssignale werden aus dem Vorhandenen geprüft, nicht aus erfundenen Fakten oder Daten.',
      'Die Auffrischungspriorität ist eine Empfehlung für die redaktionelle Planung, kein automatischer Zeitplan.',
      'Abgeleitetes Verfallsrisiko wird zur Prüfung markiert, nicht als bestätigter Ranking-Verlust behandelt.',
    ],
    willNot: [
      { color: 'red', text: 'Veralteten Content automatisch umschreiben' },
      { color: 'red', text: 'Neue Beispiele, Daten oder Belege erfinden' },
      { color: 'red', text: 'Aktualisierungen planen' },
      { color: 'red', text: 'Veröffentlichen oder Änderungen an einem CMS vornehmen' },
      { color: 'red', text: 'Abgeleitetes Aktualitätsrisiko als bestätigten Ranking-Verlust behandeln' },
    ],
    relatedH2: 'Workers, mit denen Faye zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'content_inventory',
        description: 'Klassifiziert die Seite als Content-Asset und identifiziert nützliche Inventarsignale.',
        outputLabel: 'Inventar-Review',
        ctaLabel: 'Wie Nora klassifiziert',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Prüft, ob schwacher oder alternder Content aufgefrischt, konsolidiert oder bereinigt werden sollte.',
        outputLabel: 'Pflege-Review',
        ctaLabel: 'Wie Hugo prüft',
      },
      {
        id: 'content_refresh_brief',
        description: 'Verwandelt Auffrischungsbefunde in ein strukturiertes Auffrischungs-Briefing.',
        outputLabel: 'Auffrischungs-Briefing',
        ctaLabel: 'Wie Iris plant',
      },
    ],
    ctaH2: 'Alternde Seiten sichtbar halten, bevor sie zu Problemen werden.',
    ctaPara:
      'Faye hilft Redakteur:innen, Content-Verfall, Prüfpriorität und Pflegerhythmus zu erkennen, bevor die Seite an Vertrauen verliert.',
    guidanceFooterLabel: 'AKTUALITÄTSSTATUS',
    guidanceFooterValue: 'Auffrischung empfohlen · Prüfung nötig',
  },

  topical_authority: {
    seoTitle: 'Themenautorität & Abdeckungslücken-Worker | WordPresto',
    metaDescription:
      'Zara prüft Signale zur thematischen Abdeckung und Content-Lücken und hilft Redakteur:innen zu erkennen, ob eine Seite stark wirkt, Unterstützung braucht, unvollständig ist oder einen breiteren Content-Plan erfordert.',
    h1: 'Erkennen, ob die Seite genug thematische Unterstützung hat.',
    heroPara1:
      'Eine Seite kann ihr Thema klar behandeln und trotzdem in einem schwachen Content-Cluster sitzen. Ihr können unterstützende Seiten fehlen, verwandte Unterthemen übersehen, sie kann zu weit von ihrem Hub entfernt sitzen oder eine thematische Rolle tragen, um die die Website nie richtig herumgebaut wurde. Zara prüft Signale zur thematischen Abdeckung und Content-Lücken. Sie hilft Redakteur:innen zu erkennen, ob eine Seite stark wirkt, Unterstützung braucht, unvollständig ist oder einen breiteren Content-Plan erfordert.',
    heroPara2:
      'Für SEO-Audits, Themencluster-Planung, Content-Briefings und Seiten, die stärkere Autoritätssignale brauchen.',
    problemEyebrow: 'Wo Themenautorität schwächelt',
    problemH2: 'Eine gute Seite allein macht noch kein starkes Thema.',
    problemPara:
      'Die Suchperformance hängt oft vom umgebenden Content-System ab. Eine Seite braucht möglicherweise unterstützende Erklärartikel, Vergleichsseiten, Service-Seiten, beleggestützte Ressourcen, interne Links oder eine klarere Platzierung im Themencluster. Zara prüft, ob die Seite gut gestützt wirkt oder ob sie zu viel thematische Verantwortung allein trägt.',
    problemAnnotation: '↘ das Thema um die Seite herum aufbauen',
    beforeStamp: 'Schwache Stützung',
    beforeHtml: `<p>Die Seite behandelt das Hauptthema, aber es gibt keine erkennbaren Stützressourcen, internen Pfade oder Abdeckung verwandter Unterthemen.</p>`,
    beforeTags: ['Dünner Cluster', 'Fehlende Stützung', 'Schwacher interner Kontext', 'Manuelle Prüfungen nötig'],
    beforeNote: 'die Seite arbeitet allein',
    afterStamp: 'Abdeckung verbessert',
    afterHtml: `<p>Die Seitenrolle wird geklärt, und der Bedarf an unterstützendem Content wird für die Planung aufgelistet.</p>`,
    afterTags: ['Klare Seitenrolle', 'Lückenliste', 'Besserer Cluster-Plan', 'Menschliche Entscheidung'],
    afterNote: 'die Redakteurin weiß, was als Nächstes aufgebaut werden muss',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Review der thematischen Abdeckung, bevor Content erweitert wird.',
    helpsPara:
      'Zara prüft Themen-Tiefe, Cluster-Stützung und fehlende Abdeckungssignale anhand der verfügbaren Seitenbelege. Sie erstellt keine neuen Seiten und beansprucht keine vollständige websiteweite Themenkarte ohne Crawl- und Projektdaten.',
    checks: [
      'Themenrolle und Seitenzweck',
      'Lücken bei unterstützenden Unterthemen',
      'Interne Link- und Cluster-Stützung',
      'Intentionsabdeckung',
      'Signale für Waisenrisiko',
      'Nötige manuelle Themencluster-Prüfungen',
    ],
    improves: [
      'Qualität der Content-Planung',
      'Themencluster-Struktur',
      'Entscheidungen zur internen Stützung',
      'Sicherheit vor dem Erstellen von Briefings oder neuen Seiten',
    ],
    prepares: [
      'Abdeckungslücken-Review',
      'Empfohlene Seitenrolle',
      'Ideen für unterstützenden Content',
      'Manuelle Cluster-Prüfungen',
    ],
    surfaces: [
      'Fehlende unterstützende Seiten',
      'Dünne Themenabdeckung',
      'Schwache Stützung durch interne Links',
      'Cluster-Konflikte oder Lücken, die bestätigt werden müssen',
    ],
    ioH2: 'Womit Zara arbeitet und was sie liefert.',
    worksFrom: [
      'Intentions-Einschätzung',
      'Signale zu Content-Beziehungen',
      'Content-Inventar-Review',
      'Seitenstruktur und -tiefe',
      'Signale zu Belegslücken',
    ],
    produces: [
      'Abdeckungs-Review',
      'Themenlückenliste',
      'Empfohlene Seitenrolle',
      'Anstöße für unterstützenden Content',
      'Manuelle Cluster-Prüfungen',
    ],
    scenarios: [
      {
        title: 'Eine Seite braucht stärkere thematische Autorität.',
        description: 'Zara prüft, ob die umgebende Content-Stützung stark genug wirkt.',
      },
      {
        title: 'Sie planen einen Content-Cluster.',
        description: 'Sie identifiziert Lücken bei unterstützendem Content anhand der thematischen Rolle der Seite.',
      },
      {
        title: 'Eine Seite wirkt zu breit.',
        description: 'Zara markiert, ob Unterthemen eigene Stützassets brauchen könnten.',
      },
      {
        title: 'Die interne Verlinkung wirkt schwach.',
        description: 'Sie prüft, ob die Seite genug Unterstützung durch Themenbeziehungen hat.',
      },
      {
        title: 'Ein Briefing braucht besseren thematischen Kontext.',
        description: 'Zara hilft zu definieren, was der Artikel oder die Seite sonst noch abdecken oder verknüpfen sollte.',
      },
      {
        title: 'Die Suchperformance hängt von Autorität ab.',
        description: 'Sie gibt Redakteur:innen einen klareren Blick auf Themen-Tiefe und Abdeckungslücken.',
      },
    ],
    boundaryH2: 'Zara prüft die Abdeckung. Redakteur:innen entscheiden den Content-Plan.',
    boundaryPara:
      'Zara erstellt keine Seiten, baut keine Cluster automatisch auf, veröffentlicht keinen neuen Content und beansprucht keine vollständige websiteweite Autorität aus dem Review einer einzigen Seite. Sie markiert Abdeckungssignale und Planungslücken.',
    boundaryChecklist: [
      'Zara markiert Abdeckungslücken, sie erstellt oder veröffentlicht Seiten nie selbst.',
      'Ideen für unterstützenden Content sind Anstöße für die Planung, keine automatischen Briefings.',
      'Websiteweite Cluster-Aussagen werden nur mit unterstützenden Projekt- oder Crawl-Daten getroffen.',
      'Manuelle Prüfungen werden klar aufgelistet, damit Redakteur:innen wissen, was noch bestätigt werden muss.',
    ],
    willNot: [
      { color: 'red', text: 'Unterstützende Seiten erstellen oder veröffentlichen' },
      { color: 'red', text: 'Eine vollständige Themenkarte erfinden' },
      { color: 'red', text: 'Websiteweite Cluster-Abdeckung ohne Projektdaten bestätigen' },
      { color: 'red', text: 'Die Seite automatisch umschreiben' },
      { color: 'red', text: 'Änderungen an einem CMS vornehmen' },
    ],
    relatedH2: 'Workers, mit denen Zara zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Klärt die Leserintention, die Zara mit der thematischen Abdeckung abgleicht.',
        outputLabel: 'Intentions-Einschätzung',
        ctaLabel: 'Wie Yuna klärt',
      },
      {
        id: 'internal_linking',
        description: 'Prüft Links und Leserpfade, die die Themenverbindung stützen.',
        outputLabel: 'Link-Einschätzung',
        ctaLabel: 'Wie Leo prüft',
      },
      {
        id: 'semantic_search_analyzer',
        description: 'Nutzt vektorgestützte Suche, um tiefere semantische Abdeckungslücken zu finden.',
        outputLabel: 'Semantischer Abdeckungs-Review',
        ctaLabel: 'Wie Sema Lücken findet',
      },
    ],
    ctaH2: 'Stärkeren Content um die Seite herum aufbauen.',
    ctaPara:
      'Zara hilft Redakteur:innen zu erkennen, wo eine Seite thematische Unterstützung, verwandte Assets oder eine bessere Cluster-Planung braucht.',
    guidanceFooterLabel: 'ABDECKUNGSSTATUS',
    guidanceFooterValue: 'Unterstützung nötig · Lücken gefunden',
  },

  conversion_alignment: {
    seoTitle: 'Conversion & CTA-Ausrichtung-Worker | WordPresto',
    metaDescription:
      'Diane prüft die Conversion-Ausrichtung: CTA-Klarheit, Vertrauenssignale, Beleglücken, Übereinstimmung mit dem Metadaten-Versprechen und ob der nächste Schritt zur Seitenintention passt.',
    h1: 'Prüfen, ob die Seite der Leserin einen klaren nächsten Schritt gibt.',
    heroPara1:
      "Content kann die Suchintention erfüllen und trotzdem kommerziell scheitern. Die Seite erklärt das Thema vielleicht gut, vergräbt aber den Call-to-Action, lässt Vertrauenssignale vermissen, fragt nach der falschen Handlung oder erzeugt einen Conversion-Pfad, der nicht zur Phase der Leserin passt. Diane prüft die Conversion-Ausrichtung: CTA-Klarheit, Vertrauenssignale, Beleglücken, Übereinstimmung mit dem Metadaten-Versprechen und ob der nächste Schritt zur Seitenintention passt.",
    heroPara2:
      'Für Service-Seiten, Landingpages, kommerziellen Content, Lead-Generierungsseiten und finale Seiten-Reviews vor der Übergabe.',
    problemEyebrow: 'Wo die Conversion-Ausrichtung bricht',
    problemH2: 'Eine Seite kann nützlich sein und die Leserin trotzdem allein lassen.',
    problemPara:
      'Das Problem ist oft nicht das Fehlen eines Buttons. Es ist die falsche Handlung, ein schwacher Beleg, vage Vertrauenssignale, unklares Timing oder ein nächster Schritt, der nicht zu dem passt, weshalb die Leserin gekommen ist. Diane prüft, ob die Seite irgendwo Sinnvolles hinführt.',
    problemAnnotation: '↘ Intention und Handlung ausrichten',
    beforeStamp: 'Schwacher Pfad',
    beforeHtml: `<p>Die Seite erklärt die Leistung, aber der CTA ist generisch, der Beleg ist dünn und der nächste Schritt erscheint zu spät.</p>`,
    beforeTags: ['Schwacher CTA', 'Fehlender Beleg', 'Geringes Vertrauen', 'Schlechtes Timing'],
    beforeNote: 'die Leserin hat keinen klaren Grund zu handeln',
    afterStamp: 'Pfad geklärt',
    afterHtml: `<p>Die Seite liefert relevanten Beleg, einen klareren nächsten Schritt und einen CTA, der zur Entscheidungsphase der Leserin passt.</p>`,
    afterTags: ['Mehr Vertrauen', 'Klare Handlung', 'Intentionspassung', 'Menschliche Prüfung'],
    afterNote: 'die Redakteurin kann den Pfad verbessern',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Conversion-Review, ohne vorzutäuschen, Experimente durchzuführen.',
    helpsPara:
      'Diane prüft Conversion-Signale, die in den Seitenbelegen bereits sichtbar sind. Sie führt keine A/B-Tests durch, greift nicht auf Analytics zu und schreibt keine Verkaufscopy automatisch um. Sie gibt Redakteur:innen eine praktische Einschätzung, ob die Seite zur Handlung anregt.',
    checks: [
      'Vorhandensein und Klarheit des CTA',
      'Ausrichtung von Intention und Handlung',
      'Vertrauens- und Belegsignale',
      'Übereinstimmung mit dem Metadaten-Versprechen',
      'Entscheidungspfad der Leserin',
      'Ablenkungen von der Conversion oder schwache nächste Schritte',
    ],
    improves: [
      'Klarheit kommerzieller Seiten',
      'CTA-Platzierung und Relevanz',
      'Vertrauensaufbau vor der Handlung',
      'Redaktionelle Sichtbarkeit schwacher Conversion-Pfade',
    ],
    prepares: [
      'Conversion-Ausrichtungs-Review',
      'Anstöße zur CTA-Verbesserung',
      'Liste der Vertrauenslücken',
      'Empfohlener nächster Schritt',
    ],
    surfaces: [
      'Fehlende oder schwache CTAs',
      'Beleglücken',
      'CTA passt nicht zur Seitenintention',
      'Links oder Abschnitte, die von der Conversion ablenken',
    ],
    ioH2: 'Womit Diane arbeitet und was sie liefert.',
    worksFrom: [
      'Intentions-Einschätzung',
      'Seitenstruktur',
      'Metadaten-Review',
      'Beleg- und Vertrauenssignale',
      'Signale zu Link-Pfaden',
    ],
    produces: [
      'Conversion-Ausrichtungs-Review',
      'Notizen zur CTA-Klarheit',
      'Liste der Vertrauenslücken',
      'Empfohlener nächster Schritt',
      'Befunde zum Entscheidungspfad',
    ],
    scenarios: [
      {
        title: 'Eine Service-Seite erzeugt keine Handlung.',
        description: 'Diane prüft, ob die Seite einen klaren, glaubwürdigen Weg zur Anfrage oder Buchung hat.',
      },
      {
        title: 'Eine Seite hat Traffic, aber schwache Leads.',
        description: "Sie prüft, ob der nächste Schritt zur wahrscheinlichen Phase der Leserin passt.",
      },
      {
        title: 'Ein CTA wirkt generisch.',
        description: 'Diane prüft, ob die Handlung konkret genug für den Seitenzweck ist.',
      },
      {
        title: 'Vertrauenssignale sind dünn.',
        description: 'Sie markiert fehlenden Beleg, fehlende Beruhigung oder Glaubwürdigkeitskontext.',
      },
      {
        title: 'Eine Seite mischt Information und Verkauf.',
        description: 'Diane hilft zu klären, ob der Conversion-Pfad die Leserin unterstützt oder unterbricht.',
      },
      {
        title: 'Eine Seite geht ins finale Review.',
        description: 'Sie prüft, ob die Redaktion den Pfad vor der Freigabe verbessern sollte.',
      },
    ],
    boundaryH2: 'Diane prüft den Pfad. Redakteur:innen entscheiden die Änderung.',
    boundaryPara:
      'Diane führt keine Experimente durch, greift nicht auf Analytics zu, schreibt CTAs nicht automatisch um und garantiert keine Conversion-Verbesserung. Sie prüft die Ausrichtung und gibt menschlichen Redakteur:innen praktische Befunde.',
    boundaryChecklist: [
      'Diane markiert Conversion-Risiken, sie schreibt CTAs oder Copy nie selbst um.',
      'Befunde stammen aus Belegen auf Seitenebene, nicht aus Analytics-Zugriff oder Live-Experimenten.',
      'Empfohlene nächste Schritte sind Anstöße für die redaktionelle Prüfung, keine automatischen Änderungen.',
      'Es wird keine garantierte Conversion-Verbesserung behauptet.',
    ],
    willNot: [
      { color: 'red', text: 'A/B-Tests durchführen' },
      { color: 'red', text: 'Auf Analytics zugreifen oder eine Conversion-Steigerung behaupten' },
      { color: 'red', text: 'Call-to-Actions automatisch umschreiben' },
      { color: 'red', text: 'Formulare, Buttons oder Tracking hinzufügen' },
      { color: 'red', text: 'Veröffentlichen oder Änderungen an einem CMS vornehmen' },
    ],
    relatedH2: 'Workers, mit denen Diane zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Klärt die Leserintention, die Diane mit der Seitenhandlung abgleicht.',
        outputLabel: 'Intentions-Einschätzung',
        ctaLabel: 'Wie Yuna klärt',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Prüft, ob das Seitenformat zur erwarteten Suchform passt.',
        outputLabel: 'Format-Review',
        ctaLabel: 'Wie Ivan prüft',
      },
      {
        id: 'internal_linking',
        description: 'Prüft Links und Pfade rund um den nächsten Schritt.',
        outputLabel: 'Link-Einschätzung',
        ctaLabel: 'Wie Leo prüft',
      },
    ],
    ctaH2: 'Nützliche Seiten in klarere Reisen verwandeln.',
    ctaPara:
      'Diane hilft Redakteur:innen zu erkennen, ob die Seite der Leserin genug Vertrauen, Klarheit und Richtung für den nächsten Schritt gibt.',
    guidanceFooterLabel: 'CONVERSION-STATUS',
    guidanceFooterValue: 'Prüfung nötig · schwacher Pfad',
  },

  content_format_serp_fit: {
    seoTitle: 'Content-Format & SERP-Passung-Worker | WordPresto',
    metaDescription:
      'Ivan prüft, ob das aktuelle Content-Format zur wahrscheinlichen Intention und erwarteten Seitenform passt, und markiert Formatkonflikte sowie Metadaten, die ein anderes Erlebnis versprechen.',
    h1: 'Prüfen, ob die Seite die richtige Form für ihre Aufgabe hat.',
    heroPara1:
      'Eine Seite kann auf das richtige Thema zielen und trotzdem das falsche Format nutzen. Die suchende Person braucht vielleicht einen Leitfaden, Vergleich, eine Checkliste, Service-Seite, Erklärung, FAQ, produktartige Seite oder Entscheidungsseite, während der Content etwas anderes liefert. Ivan prüft, ob das aktuelle Content-Format zur wahrscheinlichen Intention und erwarteten Seitenform passt. Er markiert Formatkonflikte, fehlende Strukturelemente und Stellen, an denen Metadaten ein anderes Erlebnis versprechen als die Seite selbst.',
    heroPara2: 'Für SEO-Reviews, Content-Briefings, Seitenüberarbeitungen und Formatentscheidungen vor dem Schreiben.',
    problemEyebrow: 'Wo das Content-Format schiefgeht',
    problemH2: 'Die Seite beantwortet das Thema in der falschen Form.',
    problemPara:
      'Ein „Leitfaden", der sich wie eine Verkaufsseite verhält. Eine Service-Seite, die wie ein Blogbeitrag klingt. Eine Vergleichsseite ohne Vergleichsstruktur. Eine FAQ-Seite ohne echte Fragen. Diese Formatkonflikte machen es Leser:innen und Suchmaschinen schwerer, die Seite zu verstehen. Ivan prüft, ob das Seitenformat zum Versprechen passt.',
    problemAnnotation: '↘ die Form der Intention anpassen',
    beforeStamp: 'Schlechte Passung',
    beforeHtml: `<p>Der Titel verspricht einen praktischen Leitfaden, aber die Seite ist größtenteils ein Unternehmensüberblick ohne Schritte, Beispiele oder Entscheidungshilfe.</p>`,
    beforeTags: ['Formatkonflikt', 'Fehlende Abschnitte', 'Schwache SERP-Passung', 'Erfüllt Lesererwartung nicht'],
    beforeNote: 'die Seite wirkt wie das falsche Ergebnis',
    afterStamp: 'Format geklärt',
    afterHtml: `<p>Die Seite wird als Service-Entscheidungsseite markiert, Leitfaden-Inhalte wandern in ein unterstützendes Briefing.</p>`,
    afterTags: ['Klares Format', 'Bessere Erwartungen', 'Nützliche Struktur', 'Reviewbereit'],
    afterNote: 'die Redakteurin weiß, welche Form sie bauen muss',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Format-Review, bevor mehr Text geschrieben wird.',
    helpsPara:
      'Ivan prüft die aktuelle Seitenform und vergleicht sie mit dem wahrscheinlich erwarteten Format. Er ruft keine Live-SERPs ab und schreibt die Seite nicht um. Er gibt Redakteur:innen eine strukturierte Formateinschätzung.',
    checks: [
      'Aktuelles Seitenformat',
      'Erwartetes Format basierend auf der Intention',
      'Formatspezifische fehlende Abschnitte',
      'Übereinstimmung mit dem Metadaten-Versprechen',
      'Konflikt zwischen Struktur und Content-Typ',
      'Lücken bei der Lesererwartung',
    ],
    improves: [
      'Seitenplanung vor der Überarbeitung',
      'Briefing-Qualität',
      'Ausrichtung an der Suchintention',
      'Strukturentscheidungen, bevor Text geschrieben wird',
    ],
    prepares: [
      'Format-Passungs-Review',
      'Empfohlenes Seitenformat',
      'Liste fehlender Abschnitte',
      'Überarbeitungshinweise für Redakteur:innen',
    ],
    surfaces: [
      'Seiten im falschen Format',
      'Gemischte Seitentypen',
      'Fehlende Vergleichs-, Leitfaden-, FAQ- oder Service-Elemente',
      'Metadaten, die ein anderes Content-Erlebnis versprechen',
    ],
    ioH2: 'Womit Ivan arbeitet und was er liefert.',
    worksFrom: [
      'Intentions-Einschätzung',
      'Seitenstruktur',
      'Metadaten-Review',
      'Signale aus dem Content-Inventar',
      'Schema- und SERP-Snippet-Signale',
    ],
    produces: [
      'Format-Passungs-Review',
      'Empfohlenes Format',
      'Notizen zu fehlender Struktur',
      'Bedenken zur SERP-Passung',
      'Anstöße für die menschliche Überarbeitung',
    ],
    scenarios: [
      {
        title: 'Eine Seite trifft das richtige Thema, wirkt aber falsch.',
        description: 'Ivan prüft, ob das Problem das Format ist, nicht nur der Text.',
      },
      {
        title: 'Ein Briefing braucht einen klareren Seitentyp.',
        description:
          'Er hilft zu entscheiden, ob die Seite ein Leitfaden, eine Service-Seite, ein Vergleich, eine Erklärung oder ein FAQ sein sollte.',
      },
      {
        title: 'Ein Titel verspricht ein Format, das die Seite nicht liefert.',
        description: 'Ivan markiert den Konflikt, bevor Metadaten- oder Textänderungen weitergehen.',
      },
      {
        title: 'Eine Überarbeitung steht bevor.',
        description: 'Er gibt der Redakteurin eine bessere Struktur vor dem Entwurf.',
      },
      {
        title: 'Suchintention und Conversion-Bedarf stehen im Konflikt.',
        description: 'Ivan hilft, die Form zu klären, die beidem dienen kann.',
      },
      {
        title: 'Einer Seite fehlen erwartete Abschnitte.',
        description: 'Er listet formatspezifische Lücken zur menschlichen Prüfung auf.',
      },
    ],
    boundaryH2: 'Ivan empfiehlt die Form. Redakteur:innen entscheiden die Struktur.',
    boundaryPara:
      'Ivan ruft keine Live-SERPs ab, schreibt die Seite nicht um, erstellt kein Schema und veröffentlicht keine Änderungen. Er prüft das Seitenformat und gibt Redakteur:innen eine strukturierte Empfehlung.',
    boundaryChecklist: [
      'Ivan empfiehlt das Format, er schreibt die Seite nie selbst um.',
      'Formateinschätzungen stammen aus Seitenbelegen, nicht aus Live-SERP-Abrufen.',
      'Die empfohlene Struktur ist ein Anstoß für die redaktionelle Prüfung, keine automatische Änderung.',
      'Es wird keine Ranking-Verbesserung garantiert.',
    ],
    willNot: [
      { color: 'red', text: 'SERP-Layouts abrufen oder erfinden' },
      { color: 'red', text: 'Die Seite automatisch umschreiben' },
      { color: 'red', text: 'Schema erstellen oder anwenden' },
      { color: 'red', text: 'Eine Ranking-Verbesserung garantieren' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
    ],
    relatedH2: 'Workers, mit denen Ivan zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Klärt die Leserintention, die Ivan zur Beurteilung der Formatpassung nutzt.',
        outputLabel: 'Intentions-Einschätzung',
        ctaLabel: 'Wie Yuna klärt',
      },
      {
        id: 'topical_authority',
        description: 'Prüft, ob das Format genug thematische Unterstützung hat.',
        outputLabel: 'Abdeckungs-Review',
        ctaLabel: 'Wie Zara prüft',
      },
      {
        id: 'conversion_alignment',
        description: 'Prüft, ob das gewählte Format den nächsten Schritt unterstützt.',
        outputLabel: 'Conversion-Review',
        ctaLabel: 'Wie Diane prüft',
      },
    ],
    ctaH2: 'Die Seite in die richtige Form bringen, bevor sie verbessert wird.',
    ctaPara:
      'Ivan hilft Redakteur:innen, das Format zu wählen, das zur Suchintention, Lesererwartung und dem Seitenzweck passt.',
    guidanceFooterLabel: 'FORMATSTATUS',
    guidanceFooterValue: 'Schlechte Passung · Prüfung nötig',
  },

  internal_link_pathway: {
    seoTitle: 'Interner Link-Pfad-Worker | WordPresto',
    metaDescription:
      'Felix prüft die Gesundheit interner Link-Pfade: Waisenrisiko, Ankertext-Qualität, Hub-Spoke-Beziehungen, fehlende Links für den nächsten Schritt, konkurrierende Links und Pfadkohärenz.',
    h1: 'Die Pfade prüfen, denen Leser:innen und Crawler tatsächlich folgen können.',
    heroPara1:
      'Interne Links sind nicht nur SEO-Signale. Sie sind Wege durch die Website. Gute Links helfen Leser:innen, von der Frage zum Beleg, vom Leitfaden zur Leistung, von der Stützseite zur kommerziellen Seite und vom breiten Thema zur konkreten Handlung zu gelangen. Felix prüft die Gesundheit interner Link-Pfade: Waisenrisiko, Ankertext-Qualität, Hub-Spoke-Beziehungen, fehlende Links für den nächsten Schritt, konkurrierende Links und Pfadkohärenz.',
    heroPara2:
      'Für Audits interner Links, Seiten-Reviews, Verbesserungen von Themenclustern und Prüfungen des Conversion-Pfads.',
    problemEyebrow: 'Wo interne Verlinkung schiefgeht',
    problemH2: 'Links existieren, ergeben aber nicht immer einen nützlichen Pfad.',
    problemPara:
      'Eine Seite kann interne Links haben, die vage, unverbunden, vergraben, ablenkend oder auf den falschen nächsten Schritt gerichtet sind. Sie kann es versäumen, sich mit ihrem Hub, Stützseiten oder dem Conversion-Pfad zu verbinden. Felix prüft, ob Links einen kohärenten Pfad ergeben, nicht nur, ob Links vorhanden sind.',
    problemAnnotation: '↘ Links in Reisen verwandeln',
    beforeStamp: 'Schwacher Pfad',
    beforeHtml: `<p>Die Seite verlinkt auf drei unabhängige Beiträge und nutzt vage Anker, die nicht erklären, warum die Leserin klicken sollte.</p>`,
    beforeTags: ['Lose Links', 'Schwache Anker', 'Keine Hub-Beziehung', 'Schwacher nächster Schritt'],
    beforeNote: 'die Website wirkt unverbunden',
    afterStamp: 'Pfad geklärt',
    afterHtml: `<p>Links unterstützen die Seitenrolle, nutzen beschreibende Anker und führen zu nützlichen Stütz- oder Conversion-Seiten.</p>`,
    afterTags: ['Klare Anker', 'Besserer Cluster-Pfad', 'Nützlicher nächster Schritt', 'Reviewsicher'],
    afterNote: 'die Leserin hat einen Weg nach vorn',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Review interner Link-Pfade, bevor Links geändert werden.',
    helpsPara:
      'Felix prüft bereits sichtbare Seitensignale und den Link-Kontext. Er bearbeitet keine Anker, ruft keine verlinkten Seiten ab, crawlt nicht die gesamte Website und veröffentlicht keine Änderungen. Er gibt Redakteur:innen ein strukturiertes Pfad-Review.',
    checks: [
      'Vorhandensein und Platzierung interner Links',
      'Klarheit des Ankertexts',
      'Fehlende Links für den nächsten Schritt',
      'Hub-, Spoke- und Stützseiten-Signale',
      'Konkurrierende oder ablenkende Links',
      'Pfadkohärenz',
    ],
    improves: [
      'Bewegung der Leser:innen durch die Website',
      'Qualität interner Links',
      'Stützung des Themenclusters',
      'Klarheit des Conversion-Pfads',
    ],
    prepares: [
      'Internes Pfad-Review',
      'Anstöße für Link-Maßnahmen',
      'Notizen zur Ankerqualität',
      'Manuelle Prüfungen des Website-Graphen',
    ],
    surfaces: [
      'Schwache Anker',
      'Fehlende Stütz-Links',
      'Verwirrende Link-Pfade',
      'Interne Links, die möglicherweise mit dem Zweck der Seite konkurrieren',
    ],
    ioH2: 'Womit Felix arbeitet und was er liefert.',
    worksFrom: [
      'Interne Links',
      'Ankertext',
      'Content-Beziehungs-Review',
      'Intentions- und Formatsignale',
      'Signale zur Conversion-Ausrichtung',
    ],
    produces: [
      'Pfad-Review',
      'Notizen zur Ankerqualität',
      'Anstöße für fehlende Links',
      'Risiken durch konkurrierende Pfade',
      'Empfohlene Link-Maßnahmen',
    ],
    scenarios: [
      {
        title: 'Eine Seite hat Links, aber keine klare Reise.',
        description: 'Felix prüft, ob die Links einen nützlichen Pfad ergeben.',
      },
      {
        title: 'Ein Themencluster braucht bessere Stützung.',
        description: 'Er prüft, ob sich die Seite mit Hubs, Spokes oder Stützseiten verbindet.',
      },
      {
        title: 'Der Ankertext wirkt vage.',
        description: 'Felix markiert Links, die ihr Ziel nicht erklären.',
      },
      {
        title: 'Eine Seite hat schwache Conversion-Bewegung.',
        description: 'Er prüft, ob interne Links den beabsichtigten nächsten Schritt unterstützen oder davon ablenken.',
      },
      {
        title: 'Eine Seite könnte isoliert sein.',
        description: 'Felix listet Waisenrisiko-Signale und manuelle Prüfungen auf.',
      },
      {
        title: 'Redakteur:innen planen Link-Verbesserungen.',
        description: 'Er gibt reviewbare Link-Maßnahmen, bevor jemand die Seite bearbeitet.',
      },
    ],
    boundaryH2: 'Felix prüft Pfade. Redakteur:innen entscheiden über Link-Änderungen.',
    boundaryPara:
      'Felix fügt Links weder automatisch hinzu noch entfernt oder schreibt er sie um. Er crawlt nicht die gesamte Website und bestätigt keinen vollständigen Waisenstatus, sofern keine Discovery-Daten vorliegen. Er erstellt reine Review-Befunde zum Pfad.',
    boundaryChecklist: [
      'Felix markiert Pfadprobleme, er bearbeitet Links nie selbst.',
      'Befunde stammen aus bereits sichtbaren Seitensignalen, nicht aus einem vollständigen Website-Crawl.',
      'Der Waisenstatus wird nur bestätigt, wenn Discovery-Daten vorliegen.',
      'Empfohlene Link-Maßnahmen sind Anstöße für die redaktionelle Prüfung, keine automatischen Änderungen.',
    ],
    willNot: [
      { color: 'red', text: 'Links oder Anker automatisch bearbeiten' },
      { color: 'red', text: 'Jede verlinkte Seite abrufen' },
      { color: 'red', text: 'Websiteweiten Waisenstatus ohne Crawl-Daten bestätigen' },
      { color: 'red', text: 'Weiterleitungen oder Navigationsänderungen erstellen' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
    ],
    relatedH2: 'Workers, mit denen Felix zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'internal_linking',
        description: 'Prüft die breitere Ebene der Seitenbeziehungen.',
        outputLabel: 'Link-Einschätzung',
        ctaLabel: 'Wie Leo prüft',
      },
      {
        id: 'topical_authority',
        description: 'Prüft, ob Link-Pfade den Themencluster stützen.',
        outputLabel: 'Abdeckungs-Review',
        ctaLabel: 'Wie Zara prüft',
      },
      {
        id: 'conversion_alignment',
        description: 'Prüft, ob der Pfad die beabsichtigte Handlung unterstützt.',
        outputLabel: 'Conversion-Review',
        ctaLabel: 'Wie Diane prüft',
      },
    ],
    ctaH2: 'Interne Links wie ein System funktionieren lassen.',
    ctaPara:
      'Felix hilft Redakteur:innen, lose Links in klare Leserpfade, Themenstützung und reviewbare Link-Maßnahmen zu verwandeln.',
    guidanceFooterLabel: 'PFADSTATUS',
    guidanceFooterValue: 'Prüfung nötig · schwache Pfade',
  },

  content_pruning_consolidation: {
    seoTitle: 'Content-Bereinigung & Konsolidierung-Worker | WordPresto',
    metaDescription:
      'Hugo prüft Signale zur Content-Pflege: Überschneidungsrisiko, dünner Content, Verfall, unklare Rolle, schwache Pfade und Konsolidierungsanstöße, und hilft Redakteur:innen, die sicherste nächste Pflegemaßnahme zu wählen.',
    h1: 'Entscheiden, ob schwacher Content verbessert, zusammengeführt oder belassen werden sollte.',
    heroPara1:
      'Nicht jede leistungsschwache Seite braucht eine Überarbeitung. Manche Seiten brauchen eine Auffrischung. Manche müssen konsolidiert werden. Manche sollten bleiben, weil sie einem engen, aber gültigen Zweck dienen. Manche brauchen eine sorgfältige Bereinigungsdiskussion, bevor die Website aufgebläht und unübersichtlich wird. Hugo prüft Signale zur Content-Pflege: Überschneidungsrisiko, dünner Content, Verfall, unklare Rolle, schwache Pfade und Konsolidierungsanstöße. Er hilft Redakteur:innen, die sicherste nächste Pflegemaßnahme zu wählen.',
    heroPara2: 'Für Content-Audits, Bereinigungs-Reviews, Konsolidierungsplanung und langfristige Website-Pflege.',
    problemEyebrow: 'Wo Content-Pflege schiefgeht',
    problemH2: 'Teams behalten entweder alles oder schneiden zu schnell.',
    problemPara:
      'Content-Bereinigung ist riskant, wenn sie auf oberflächlichen Signalen beruht. Eine Seite mag schwach wirken, unterstützt aber vielleicht noch eine Nischenreise, einen internen Pfad, einen Compliance-Bedarf oder ein Long-Tail-Thema. Eine andere Seite mag harmlos wirken, verursacht aber Überschneidung, Verfall oder Cluster-Verwirrung. Hugo hilft, Pflegeentscheidungen sorgfältiger zu treffen.',
    problemAnnotation: '↘ verbessern, konsolidieren oder prüfen, bevor geschnitten wird',
    beforeStamp: 'Unsichere Bereinigung',
    beforeHtml: `<p>Die Seite ist dünn und alt, also löscht das Team sie, ohne Links, Überschneidung, Seitenrolle oder Stützwert zu prüfen.</p>`,
    beforeTags: ['Nur dünnes Signal', 'Keine Pfadprüfung', 'Keine Rollenprüfung', 'Riskante Löschung'],
    beforeNote: 'Pflege wird zum Raten',
    afterStamp: 'Sorgfältiges Review',
    afterHtml: `<p>Die Seite wird als Konsolidierungskandidatin markiert, mit manuellen Prüfungen vor jeder Maßnahme.</p>`,
    afterTags: ['Reviewsicher', 'Rollenbewusst', 'Prüfungen aufgelistet', 'Keine automatische Löschung'],
    afterNote: 'die Redakteurin entscheidet mit Kontext',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Pflege-Review ohne destruktive Maßnahme.',
    helpsPara:
      'Hugo kombiniert bereits verfügbare Signale und verwandelt sie in eine reviewbare Pflegeempfehlung. Er löscht keine Seiten, führt Content nicht zusammen, erstellt keine Weiterleitungen und veröffentlicht keine Änderungen.',
    checks: [
      'Signale für dünnen oder schwachen Content',
      'Content-Verfall und Aktualitätsrisiko',
      'Kannibalisierungs- und Überschneidungsrisiko',
      'Klarheit der Seitenrolle',
      'Wert interner Links/Pfade',
      'Manuelle Prüfungen vor Bereinigung oder Konsolidierung',
    ],
    improves: [
      'Planung der Content-Pflege',
      'Sicherere Bereinigungsentscheidungen',
      'Qualität des Konsolidierungs-Reviews',
      'Sichtbarkeit von Seiten, die Maßnahmen oder Schutz brauchen',
    ],
    prepares: [
      'Pflegeempfehlung',
      'Review des Konsolidierungskandidaten',
      'Warnhinweise zur Bereinigung',
      'Checkliste zur manuellen Überprüfung',
    ],
    surfaces: [
      'Seiten, die eher eine Auffrischung als eine Bereinigung brauchen',
      'Seiten, die in ein anderes Asset gehören könnten',
      'Risiken vor dem Löschen oder Konsolidieren',
      'Fehlende Daten, die vor einer endgültigen Entscheidung nötig sind',
    ],
    ioH2: 'Womit Hugo arbeitet und was er liefert.',
    worksFrom: [
      'Signale aus dem Content-Inventar',
      'Kannibalisierungs-Review',
      'Aktualitäts-Review',
      'Signale zu internen Pfaden',
      'Signale zur thematischen Abdeckung',
    ],
    produces: [
      'Pflege-Review',
      'Empfohlene Maßnahme',
      'Konsolidierungsanstöße',
      'Warnhinweise zur Bereinigung',
      'Manuelle Prüfungen',
    ],
    scenarios: [
      {
        title: 'Eine Seite wirkt schwach, könnte aber trotzdem wichtig sein.',
        description: 'Hugo prüft, ob die Seite Wert hat, bevor jemand eine Bereinigung in Betracht zieht.',
      },
      {
        title: 'Eine Content-Überschneidung wird vermutet.',
        description: 'Er hilft zu entscheiden, ob konsolidiert, geschärft oder manuell geprüft werden sollte.',
      },
      {
        title: 'Eine Seite ist alt und dünn.',
        description: 'Hugo trennt Auffrischungschancen von Konsolidierungskandidaten.',
      },
      {
        title: 'Eine Website hat zu viele ähnliche Seiten.',
        description: 'Er gibt Redakteur:innen einen sichereren Pflegepfad als blindes Löschen.',
      },
      {
        title: 'Interne Links hängen von der Seite ab.',
        description: 'Hugo markiert Pfadrisiken vor der Entfernung oder Konsolidierung.',
      },
      {
        title: 'Ein Pflegeplan braucht reviewbare Maßnahmen.',
        description: 'Er verwandelt unübersichtliche Signale in eine strukturierte Empfehlung.',
      },
    ],
    boundaryH2: 'Hugo empfiehlt die Pflege. Redakteur:innen entscheiden die Maßnahme.',
    boundaryPara:
      'Hugo löscht nichts, führt nichts zusammen, leitet nicht um, schreibt nicht um und veröffentlicht nicht. Er empfiehlt nur eine Pflegerichtung und listet die manuellen Prüfungen auf, die vor einer Maßnahme nötig sind.',
    boundaryChecklist: [
      'Hugo empfiehlt eine Richtung, er löscht oder führt Seiten nie selbst zusammen.',
      'Befunde kombinieren bestehende Review-Signale, keine neue destruktive Analyse.',
      'Manuelle Prüfungen werden immer vor jeder Bereinigung oder Konsolidierung aufgelistet.',
      'Schwache Signale allein werden nie als ausreichend für eine destruktive Maßnahme behandelt.',
    ],
    willNot: [
      { color: 'red', text: 'Seiten löschen oder bereinigen' },
      { color: 'red', text: 'Content automatisch zusammenführen' },
      { color: 'red', text: 'Weiterleitungen erstellen' },
      { color: 'red', text: 'Content umschreiben oder erneut veröffentlichen' },
      { color: 'red', text: 'Schwache Signale als ausreichend für eine destruktive Maßnahme behandeln' },
    ],
    relatedH2: 'Workers, mit denen Hugo zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'cannibalisation_overlap',
        description: 'Markiert Überschneidungs- und unklare Rollenrisiken.',
        outputLabel: 'Überschneidungs-Review',
        ctaLabel: 'Wie Cleo prüft',
      },
      {
        id: 'content_decay',
        description: 'Prüft, ob die Seite eine Auffrischung oder dringende Prüfung braucht.',
        outputLabel: 'Aktualitäts-Review',
        ctaLabel: 'Wie Faye prüft',
      },
      {
        id: 'content_inventory',
        description: 'Klassifiziert die Seite als Content-Asset vor Pflegeentscheidungen.',
        outputLabel: 'Inventar-Review',
        ctaLabel: 'Wie Nora klassifiziert',
      },
    ],
    ctaH2: 'Content-Pflege sicherer machen.',
    ctaPara:
      'Hugo hilft Redakteur:innen zu entscheiden, ob eine Seite aufgefrischt, konsolidiert, geschützt oder geprüft werden sollte, bevor eine destruktive Maßnahme in Betracht gezogen wird.',
    guidanceFooterLabel: 'PFLEGESTATUS',
    guidanceFooterValue: 'Prüfung nötig · Konsolidierungskandidatin',
  },

  content_inventory: {
    seoTitle: 'Content-Inventar-Worker | WordPresto',
    metaDescription:
      'Nora prüft die Seite als Content-Asset und identifiziert Seitentyp, Strukturelemente, Content-Lücken und Inventar-Metadaten, die Redakteur:innen bei einer besseren Planung helfen.',
    h1: 'Verstehen, mit welcher Art Content-Asset Sie es zu tun haben.',
    heroPara1:
      'Bevor eine Seite verbessert werden kann, muss sie klassifiziert werden. Ist es eine Service-Seite, ein Leitfaden, ein Artikel, eine Landingpage, eine Vergleichsseite, eine Support-Seite oder etwas anderes? Welche Signale sind vorhanden? Was fehlt? Was würde der künftigen Planung helfen? Nora prüft die Seite als Content-Asset. Sie identifiziert Seitentyp, Strukturelemente, Content-Lücken und Inventar-Metadaten, die Redakteur:innen bei einer besseren Planung helfen.',
    heroPara2: 'Für Content-Audits, Seiten-Reviews, Content-Planung und frühe redaktionelle Einschätzungen.',
    problemEyebrow: 'Wo die Content-Planung schiefgeht',
    problemH2: 'Teams beginnen, Seiten zu verbessern, bevor sie wissen, was die Seite sein soll.',
    problemPara:
      'Eine Seite kann nur richtig beurteilt werden, wenn ihre Rolle klar ist. Eine dünne Service-Seite, ein schwacher Artikel und eine unvollständige Vergleichsseite brauchen unterschiedliche Maßnahmen. Ohne Inventar-Kontext riskiert jede Empfehlung, generisch zu werden. Nora gibt dem Workflow eine klarere Content-Klassifizierung, bevor die tiefere Prüfung beginnt.',
    problemAnnotation: '↘ das Asset klassifizieren, bevor es verbessert wird',
    beforeStamp: 'Unklares Asset',
    beforeHtml: `<p>Die Seite hat Service-Text, FAQs und leitfadenartige Abschnitte, aber keinen klaren Content-Typ.</p>`,
    beforeTags: ['Unklare Rolle', 'Gemischte Struktur', 'Fehlende Metadaten', 'Schwer zu planen'],
    beforeNote: 'das Team weiß nicht, welche Aufgabe die Seite hat',
    afterStamp: 'Inventar geprüft',
    afterHtml: `<p>Die Seite wird als Service-Entscheidungsseite klassifiziert, der Beleg, FAQ-Tiefe und Stützung durch verwandte Seiten fehlen.</p>`,
    afterTags: ['Klarerer Typ', 'Planungslücken', 'Bessere Workflow-Steuerung', 'Reviewbereit'],
    afterNote: 'die Redakteurin weiß, um welche Art Asset es sich handelt',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Inventar auf Seitenebene, ohne vorzutäuschen, die ganze Website zu crawlen.',
    helpsPara:
      'Nora prüft die untersuchte Seite als einzelnes Content-Asset. Sie baut kein vollständiges Website-Inventar auf, crawlt keine verlinkten Seiten und klassifiziert nicht die gesamte Domain. Sie gibt Redakteur:innen ein nützliches Inventar-Review auf Seitenebene.',
    checks: [
      'Erkennbarer Seitentyp',
      'Content- und Strukturelemente',
      'Fehlende Asset-Elemente',
      'Klarheit der Seitenrolle',
      'Bedarf an Planungs-Metadaten',
      'Manuelle Prüfungen für künftige Inventararbeit',
    ],
    improves: [
      'Klarheit des Content-Audits',
      'Steuerung des Seiten-Reviews',
      'Briefing- und Pflegeplanung',
      'Verständnis, welche Art Seite geprüft wird',
    ],
    prepares: [
      'Content-Inventar-Review',
      'Erkennbare Asset-Klassifizierung',
      'Liste fehlender Signale',
      'Planungsnotizen für künftige Arbeit',
    ],
    surfaces: [
      'Seiten mit unklarem Zweck',
      'Fehlende Content-Elemente',
      'Gemischte Seitentyp-Signale',
      'Metadaten, die künftiger Content-Planung helfen würden',
    ],
    ioH2: 'Womit Nora arbeitet und was sie liefert.',
    worksFrom: [
      'Seitentext',
      'Seitenstruktur',
      'Metadaten',
      'Quellsignale',
      'Vorhandene Befunde anderer Worker, sofern verfügbar',
    ],
    produces: [
      'Inventar-Review',
      'Seitentyp-Klassifizierung',
      'Fehlende Asset-Signale',
      'Planungs-Metadatennotizen',
      'Manuelle Prüfungen',
    ],
    scenarios: [
      {
        title: 'Ein Seiten-Review braucht eine erste Klassifizierung.',
        description: 'Nora identifiziert, mit welcher Art Content-Asset der Workflow es zu tun hat.',
      },
      {
        title: 'Ein Content-Audit ist unübersichtlich.',
        description: 'Sie gibt jeder geprüften Seite einen klareren Inventar-Kontext.',
      },
      {
        title: 'Eine Seite hat gemischte Signale.',
        description: 'Nora markiert, wenn sich die Seite wie mehr als ein Content-Typ verhält.',
      },
      {
        title: 'Eine Pflegeentscheidung steht bevor.',
        description: 'Sie hilft zu klären, ob das Asset aufgefrischt, konsolidiert oder erweitert werden sollte.',
      },
      {
        title: 'Ein Briefing braucht Kontext zum Seitentyp.',
        description: 'Nora gibt dem Briefing-Ersteller einen klareren Ausgangspunkt.',
      },
      {
        title: 'Das Team braucht Planungs-Metadaten.',
        description: 'Sie listet auf, was das Asset später leichter verwaltbar machen würde.',
      },
    ],
    boundaryH2: 'Nora klassifiziert die Seite. Redakteur:innen entscheiden, was daraus wird.',
    boundaryPara:
      'Nora erstellt kein vollständiges Website-Inventar, crawlt nicht die Domain, bearbeitet keinen Content und veröffentlicht keine Änderungen. Sie prüft die aktuelle Seite und bereitet Planungskontext vor.',
    boundaryChecklist: [
      'Nora klassifiziert die Seite, sie bearbeitet oder strukturiert sie nie selbst um.',
      'Reviews decken die aktuelle Seite ab, nicht einen vollständigen Website-Crawl oder ein Inventar.',
      'Planungsnotizen sind Anstöße für die redaktionelle Steuerung, keine automatischen Maßnahmen.',
      'Listen fehlender Signale werden zur Prüfung markiert, nicht als bestätigte Lücken behandelt.',
    ],
    willNot: [
      { color: 'red', text: 'Die gesamte Website crawlen' },
      { color: 'red', text: 'Vollständige Inventarabdeckung bestätigen' },
      { color: 'red', text: 'Die Seite automatisch umschreiben oder umstrukturieren' },
      { color: 'red', text: 'Content-Datensätze erstellen oder löschen' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
    ],
    relatedH2: 'Workers, mit denen Nora zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrahiert die Quellsignale, die Nora zur Klassifizierung nutzt.',
        outputLabel: 'Seitensignale',
        ctaLabel: 'Wie Patrick extrahiert',
      },
      {
        id: 'intent_analyst',
        description: 'Prüft, ob der erkennbare Seitentyp zur Leserintention passt.',
        outputLabel: 'Intentions-Einschätzung',
        ctaLabel: 'Wie Yuna prüft',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Nutzt den Inventar-Kontext vor der Empfehlung einer Pflegemaßnahme.',
        outputLabel: 'Pflege-Review',
        ctaLabel: 'Wie Hugo es nutzt',
      },
    ],
    ctaH2: 'Die Seite klassifizieren, bevor entschieden wird, was mit ihr geschieht.',
    ctaPara:
      'Nora hilft Redakteur:innen, das Content-Asset, seine fehlenden Signale und seine Planungsrolle zu verstehen, bevor tiefere Arbeit beginnt.',
    guidanceFooterLabel: 'INVENTARSTATUS',
    guidanceFooterValue: 'Asset geprüft · Lücken gefunden',
  },

  semantic_search_analyzer: {
    seoTitle: 'Semantische Abdeckungsanalyse | WordPresto',
    metaDescription:
      'Sema prüft die semantische Abdeckung, indem sie Content mit der Wissensebene und dem Projektkontext von Word Presto vergleicht, und deckt fehlende Unterthemen und dünn abgedeckte Entitäten auf.',
    h1: 'Die Konzepte finden, die der Seite fehlen.',
    heroPara1:
      "Guter Content erwähnt nicht nur das Zielkeyword. Er deckt die Entitäten, Unterthemen, Beziehungen und unterstützenden Ideen ab, die die Seite wirklich nützlich machen. Sema prüft die semantische Abdeckung, indem sie den Content mit der Wissensebene und dem Projektkontext von Word Presto vergleicht. Sie deckt fehlende Unterthemen, dünn abgedeckte Entitäten und Abdeckungslücken auf, die vor der Freigabe der Seite geprüft werden sollten.",
    heroPara2:
      'Für fortgeschrittene SEO-Reviews, Content-Briefings, Arbeit an der Themenautorität und Seiten, die tiefere semantische Abdeckung brauchen.',
    problemEyebrow: 'Wo semantisches SEO schiefgeht',
    problemH2: 'Seiten erwähnen das Thema, verpassen aber die umgebende Bedeutung.',
    problemPara:
      'Eine Seite kann das richtige Keyword enthalten und das Thema trotzdem nicht richtig abdecken. Sie kann wichtige Entitäten auslassen, wichtige Vergleiche vermeiden, unterstützende Konzepte verpassen oder Fragen unbeantwortet lassen. Sema schaut über die reine Keyword-Präsenz hinaus. Sie prüft, ob die Seite genug semantische Tiefe hat, um Vertrauen zu verdienen.',
    problemAnnotation: '↘ das Thema abdecken, nicht nur den Begriff',
    beforeStamp: 'Dünne Abdeckung',
    beforeHtml: `<p>Die Seite erwähnt die Leistung, verpasst aber wichtige Bedingungen, Entscheidungsfaktoren, unterstützende Belege und verwandte Entitäten.</p>`,
    beforeTags: ['Keyword vorhanden', 'Entitäten fehlen', 'Dünne Unterthemen', 'Schwache Tiefe'],
    beforeNote: 'die Seite klingt relevant, wirkt aber unvollständig',
    afterStamp: 'Abdeckung geprüft',
    afterHtml: `<p>Sema listet fehlende Entitäten, dünne Unterthemen und beleggestützte Lücken zur Prüfung durch die Redakteurin auf.</p>`,
    afterTags: ['Entitätslücken', 'Themen-Tiefe', 'Quellenverknüpfte Befunde', 'Reviewsicher'],
    afterNote: 'die Redakteurin weiß, was fehlt',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Semantisches Abdeckungs-Review mit klaren Belegsgrenzen.',
    helpsPara:
      'Sema vergleicht Content mit verfügbarem Wissen und Projektkontext und erstellt dann reviewbare Abdeckungslücken. Sie stopft keine Keywords, erfindet keine Entitäten und schreibt die Seite nicht automatisch um.',
    checks: [
      'Fehlende Unterthemen',
      'Dünn abgedeckte Entitäten',
      'Semantische Tiefe',
      'Gesundheit der Begriffsverteilung',
      'Abdeckungslücken gegenüber abgerufenem Wissen',
      'Belegunterstützung für vorgeschlagene Ergänzungen',
    ],
    improves: [
      'Themen-Tiefe',
      'Briefing-Qualität',
      'Autoritätsaufbauende Content-Pläne',
      'Sicherheit vor der Content-Freigabe',
    ],
    prepares: [
      'Semantisches Abdeckungs-Review',
      'Liste der Entitäts- und Unterthemenlücken',
      'Beleggestützte Befunde',
      'Prüfanstöße für Redakteur:innen',
    ],
    surfaces: [
      'Wichtige Konzepte, die im Entwurf fehlen',
      'Überbenutzte oder unterentwickelte Begriffe',
      'Abdeckungslücken, die Quellenstützung brauchen',
      'Bereiche, in denen die Seite semantisch dünn ist',
    ],
    ioH2: 'Womit Sema arbeitet und was sie liefert.',
    worksFrom: [
      'Entwurfs- oder Seiteninhalt',
      'Projektkontext',
      'Wissensnachbarn',
      'Belegsignale',
      'Themen- und Entitätskandidaten',
    ],
    produces: [
      'Semantisches Abdeckungs-Review',
      'Entitätslückenliste',
      'Befunde zu Unterthemen',
      'Signal zur Begriffsverteilung',
      'Beleggestützte Empfehlungen',
    ],
    scenarios: [
      {
        title: 'Eine Seite braucht tiefere thematische Autorität.',
        description: 'Sema identifiziert, was dem Content jenseits offensichtlicher Keywords fehlt.',
      },
      {
        title: 'Ein Entwurf wirkt oberflächlich.',
        description: 'Sie findet fehlende Entitäten, Unterthemen und unterstützende Konzepte.',
      },
      {
        title: 'Ein Briefing braucht reicheren Kontext.',
        description: 'Sema gibt Redakteur:innen Abdeckungslücken zur Berücksichtigung vor dem Schreiben.',
      },
      {
        title: 'Eine Seite konkurriert in einem komplexen Thema.',
        description: 'Sie hilft, die Konzepte sichtbar zu machen, die stärkere Seiten üblicherweise abdecken.',
      },
      {
        title: 'Eine Content-Aktualisierung braucht beleggestützte Erweiterung.',
        description: 'Sema listet Lücken auf, die mit unterstützendem Kontext geprüft werden sollten.',
      },
      {
        title: 'Sie wollen semantisches SEO ohne Keyword-Stuffing.',
        description: 'Sie konzentriert sich auf Bedeutung, Abdeckung und quellenverknüpfte Lücken.',
      },
    ],
    boundaryH2: 'Sema identifiziert Lücken. Redakteur:innen entscheiden, was auf die Seite gehört.',
    boundaryPara:
      'Sema fügt keine Themen automatisch hinzu, stopft keine Keywords, schreibt keinen Text um und veröffentlicht nicht. Ihre Befunde sind reine Review-Vorschläge und sollten von einer Redakteurin beurteilt werden.',
    boundaryChecklist: [
      'Sema markiert Lücken, sie fügt Themen nie selbst hinzu oder schreibt Text um.',
      'Abdeckungsbefunde werden gegen abgerufenes Wissen abgeglichen, nicht aus dem Nichts erfunden.',
      'Vorgeschlagene Ergänzungen sind Anstöße für die redaktionelle Prüfung, keine automatischen Einfügungen.',
      'Abgerufene Nachbarn werden als Signale zur Prüfung behandelt, nicht als unhinterfragbare Wahrheit.',
    ],
    willNot: [
      { color: 'red', text: 'Keywords in den Content stopfen' },
      { color: 'red', text: 'Unbelegte Entitäten erfinden' },
      { color: 'red', text: 'Die Seite automatisch umschreiben oder erweitern' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
      { color: 'red', text: 'Abgerufene Nachbarn als unhinterfragbare Wahrheit behandeln' },
    ],
    relatedH2: 'Workers, mit denen Sema zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'topical_authority',
        description: 'Prüft die thematische Unterstützung und Cluster-Lücken auf Seitenebene.',
        outputLabel: 'Abdeckungs-Review',
        ctaLabel: 'Wie Zara prüft',
      },
      {
        id: 'evidence',
        description: 'Prüft, ob vorgeschlagene Ergänzungen belegt sind.',
        outputLabel: 'Belegbündel',
        ctaLabel: 'Wie Kenji prüft',
      },
      {
        id: 'competitor_intel',
        description: 'Vergleicht die Abdeckung mit echten Wettbewerber-SERP-Belegen, sofern verfügbar.',
        outputLabel: 'Wettbewerbs-Abdeckungs-Review',
        ctaLabel: 'Wie Cassius vergleicht',
      },
    ],
    ctaH2: 'Die Bedeutung finden, die die Seite noch nicht abgedeckt hat.',
    ctaPara:
      'Sema hilft Redakteur:innen, die thematische Tiefe mit reviewbaren semantischen Lücken zu stärken, statt Keywords zu stopfen.',
    guidanceFooterLabel: 'SEMANTISCHER STATUS',
    guidanceFooterValue: 'Abdeckungslücken gefunden · Prüfung nötig',
  },

  competitor_intel: {
    seoTitle: 'Wettbewerbsanalyse-Worker | WordPresto',
    metaDescription:
      'Cassius prüft die Wettbewerberabdeckung anhand gespeicherter SERP-Wettbewerberdaten und deckt Unterthemen, Entitäten und Blickwinkel auf, die Wettbewerber offenbar abdecken und Ihrem Content fehlen könnten.',
    h1: 'Sehen, was rankende Wettbewerber abdecken und Sie nicht.',
    heroPara1:
      'Wettbewerbsanalyse ist nur nützlich, wenn sie auf echten Suchbelegen beruht. Cassius prüft die Wettbewerberabdeckung anhand gespeicherter SERP-Wettbewerberdaten und vergleicht sie mit der geprüften Seite oder dem Entwurf. Er deckt die Unterthemen, Entitäten und Blickwinkel auf, die Wettbewerber offenbar abdecken und Ihrem Content fehlen könnten.',
    heroPara2:
      'Für wettbewerbsorientierte SEO-Reviews, Content-Lückenanalysen, keywordgeleitete Planung und Seiten, die für eine bekannte Suchchance verbessert werden.',
    problemEyebrow: 'Wo Wettbewerbsanalyse schiefgeht',
    problemH2: 'Teams kopieren Wettbewerber, statt die Lücke zu verstehen.',
    problemPara:
      'Wettbewerbsorientiertes Review sollte nicht bedeuten, Ideen abzukupfern und eine andere Seite nachzuahmen. Es sollte Redakteur:innen helfen zu verstehen, was die Ranking-Landschaft offenbar abdeckt, was dem aktuellen Entwurf fehlt und welche Lücken wirklich relevant sind. Cassius verwandelt Wettbewerberbelege in reviewbare Content-Intelligenz.',
    problemAnnotation: '↘ Abdeckung vergleichen, ohne zu kopieren',
    beforeStamp: 'Oberflächliche Wettbewerberprüfung',
    beforeHtml: `<p>Wettbewerber erwähnen mehrere Entscheidungsfaktoren, aber der Entwurf deckt nur die grundlegende Definition ab.</p>`,
    beforeTags: ['Fehlende Blickwinkel', 'Dünner Vergleich', 'SERP-Beleg nötig', 'Keine Textstrategie'],
    beforeNote: 'der Seite fehlt Wettbewerbskontext',
    afterStamp: 'Abdeckung verglichen',
    afterHtml: `<p>Cassius listet von Wettbewerbern abgedeckte Unterthemen und Entitäten auf, die die Redakteurin prüfen sollte.</p>`,
    afterTags: ['Echte SERP-Grundlage', 'Lückenliste', 'Menschliches Urteilsvermögen', 'Keine Nachahmung'],
    afterNote: 'die Redakteurin kann entscheiden, was dazugehört',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Wettbewerber-Abdeckungs-Review aus echten SERP-Belegen.',
    helpsPara:
      'Cassius nutzt vorhandene Wettbewerber-SERP-Daten, sofern verfügbar. Gibt es keine gespeicherten SERP-Daten, zeigt er einen ehrlichen gesperrten Zustand, statt Wettbewerberbefunde zu erfinden.',
    checks: [
      'Von Wettbewerbern abgedeckte Unterthemen',
      'Fehlende Entitäten und Blickwinkel',
      'Entwurf im Vergleich zur SERP-Wettbewerberabdeckung',
      'Wiederkehrende Wettbewerberthemen',
      'Grenzen der Belege',
      'No-Data-Zustände, wenn SERP-Belege fehlen',
    ],
    improves: [
      'Wettbewerbsorientierte Content-Planung',
      'Lückengeleitete Briefing-Qualität',
      'Review der Suchchance',
      'Bewusstsein dafür, was rankende Seiten offenbar behandeln',
    ],
    prepares: [
      'Wettbewerber-Abdeckungs-Review',
      'SERP-gestützte Lückenliste',
      'Anstöße für Content-Blickwinkel',
      'Notizen zu Belegsgrenzen',
    ],
    surfaces: [
      'Relevante von Wettbewerbern abgedeckte Themen',
      'Fehlende Entscheidungsfaktoren',
      'SERP-Themen, die es zu berücksichtigen lohnt',
      'Bereiche, in denen Wettbewerberbelege zu dünn oder nicht verfügbar sind',
    ],
    ioH2: 'Womit Cassius arbeitet und was er liefert.',
    worksFrom: [
      'Entwurfs- oder Seiteninhalt',
      'Gespeicherte SERP-Wettbewerberdaten',
      'Keyword- oder Suchchancen-Kontext',
      'Signale zur semantischen Abdeckung',
      'Signale aus dem Beleg-Review',
    ],
    produces: [
      'Wettbewerber-Abdeckungs-Review',
      'SERP-gestützte Lückenliste',
      'Notizen zu fehlenden Entitäten',
      'Anstöße für wettbewerbsbezogene Blickwinkel',
      'No-Data-Zustand, wenn erforderlich',
    ],
    scenarios: [
      {
        title: 'Eine Seite zielt auf ein wettbewerbsintensives Keyword.',
        description: 'Cassius prüft, was rankende Wettbewerber offenbar abdecken und der Seite fehlen könnte.',
      },
      {
        title: 'Ein Content-Briefing braucht Wettbewerberkontext.',
        description: 'Er liefert lückengeleitete Anstöße, ohne das Briefing zur Nachahmung zu machen.',
      },
      {
        title: 'Ein Entwurf wirkt schwächer als die SERP.',
        description: 'Cassius identifiziert fehlende Blickwinkel und Entitäten zur menschlichen Prüfung.',
      },
      {
        title: 'Eine Keyword-Recherche-Maßnahme hat SERP-Daten erzeugt.',
        description: 'Er nutzt diese gespeicherten Daten, um Wettbewerber-Abdeckungsbefunde zu untermauern.',
      },
      {
        title: 'Eine Seite wird für die SEO-Performance aufgefrischt.',
        description: 'Cassius hilft Redakteur:innen zu sehen, ob die Wettbewerberabdeckung vorangekommen ist.',
      },
      {
        title: 'Das Team braucht ehrliche Wettbewerbsbelege.',
        description: 'Er zeigt No-Data-Zustände, wenn keine Wettbewerber-SERP-Belege verfügbar sind.',
      },
    ],
    boundaryH2: 'Cassius vergleicht die Abdeckung. Redakteur:innen entscheiden, was genutzt wird.',
    boundaryPara:
      'Cassius kopiert keinen Wettbewerber-Content, ruft keine versteckten Wettbewerberseiten ab, erfindet keine SERP-Daten und garantiert keine Ranking-Verbesserungen. Er verwandelt verfügbare Wettbewerberbelege in reviewbare Lücken.',
    boundaryChecklist: [
      'Cassius vergleicht die Abdeckung, er kopiert nie Wettbewerber-Content.',
      'Befunde stützen sich auf gespeicherte SERP-Daten, nicht auf erfundene Wettbewerberaussagen.',
      'Ein No-Data-Zustand wird ehrlich angezeigt, wenn SERP-Belege fehlen.',
      'Es wird keine Ranking-Verbesserung garantiert.',
    ],
    willNot: [
      { color: 'red', text: 'Wettbewerber-Content kopieren' },
      { color: 'red', text: 'Wettbewerberbefunde ohne SERP-Daten erfinden' },
      { color: 'red', text: 'Live-Wettbewerberseiten abrufen, sofern kein künftiger Workflow das ausdrücklich unterstützt' },
      { color: 'red', text: 'Die Seite automatisch umschreiben' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
    ],
    relatedH2: 'Workers, mit denen Cassius zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'semantic_search_analyzer',
        description: 'Findet semantische Lücken aus der Wissensebene und dem Projektkontext.',
        outputLabel: 'Semantischer Abdeckungs-Review',
        ctaLabel: 'Wie Sema Lücken findet',
      },
      {
        id: 'intent_analyst',
        description: 'Klärt die Intention hinter der wettbewerbsbezogenen Suchchance.',
        outputLabel: 'Intentions-Einschätzung',
        ctaLabel: 'Wie Yuna klärt',
      },
      {
        id: 'evidence',
        description: 'Prüft, ob wettbewerbergeleitete Befunde ordentlich belegt sind.',
        outputLabel: 'Belegbündel',
        ctaLabel: 'Wie Kenji prüft',
      },
    ],
    ctaH2: 'Die Lücke verstehen, bevor Sie konkurrieren.',
    ctaPara:
      'Cassius hilft Redakteur:innen, die Abdeckung mit echten SERP-Wettbewerberbelegen zu vergleichen, ohne zu kopieren, zu raten oder Daten zu erfinden.',
    guidanceFooterLabel: 'WETTBEWERBSSTATUS',
    guidanceFooterValue: 'Lücken gefunden · Belege erforderlich',
  },
};
