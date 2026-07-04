import type { WorkerProfileTranslatable } from './types';

export const deBatch4: Record<string, WorkerProfileTranslatable> = {
  safe_change_planner: {
    seoTitle: 'Änderungsplanungs-Worker | WordPresto',
    metaDescription:
      'Sam verwandelt Worker-Befunde in strukturierte vorgeschlagene Änderungen, mit Angaben zu betroffenem Bereich, Risiko und erwartetem Nutzen, ohne die Seite zu bearbeiten oder etwas anzuwenden.',
    h1: 'Aus Befunden Änderungen machen, die sich sicher prüfen lassen.',
    heroPara1:
      'Ein Befund ist noch keine Änderung. „Die Seite braucht eine klarere Struktur" ist hilfreich, aber eine Redakteurin muss trotzdem wissen, was sich wo ändern könnte, warum, welches Risiko besteht und ob die Änderung weiterverfolgt werden sollte. Sam verwandelt Worker-Befunde in strukturierte vorgeschlagene Änderungen. Er bereitet die Review-Ebene vor, ohne die Seite zu bearbeiten oder etwas anzuwenden.',
    heroPara2:
      'Für Content-Analyse, Freigabevorbereitung, Review-Queues und die Planung sicherer Bearbeitungen.',
    problemEyebrow: 'Wo die Änderungsplanung schiefgeht',
    problemH2: 'Teams springen zu schnell vom Befund zur Bearbeitung.',
    problemPara:
      'Ein Worker mag ein echtes Problem erkennen, aber der nächste Schritt sollte keine automatische Bearbeitung sein. Die vorgeschlagene Änderung braucht Kontext: welcher Bereich betroffen ist, warum die Änderung wichtig ist, wie riskant sie ist und welcher Nutzen erwartet wird. Sam schafft diese Entscheidungsebene.',
    problemAnnotation: '↘ erst die Änderung planen, dann bearbeiten',
    beforeStamp: 'Roher Befund',
    beforeHtml: `<p>Die Seite braucht eine stärkere Einleitung und einen klareren nächsten Schritt.</p>`,
    beforeTags: ['Kein betroffener Bereich', 'Keine Risikokennzeichnung', 'Keine Priorität', 'Kein Freigabestatus'],
    beforeNote: 'die Redakteurin muss den Befund noch selbst interpretieren',
    afterStamp: 'Geplante Änderung',
    afterHtml: `<p>Die Einleitung überarbeiten, um das Seitenversprechen zu klären, und nach dem ersten Abschnitt einen passenden nächsten Schritt ergänzen.</p>`,
    afterTags: ['Betroffener Bereich', 'Erwarteter Nutzen', 'Risiko vermerkt', 'Freigabe erforderlich'],
    afterNote: 'die Änderung ist bereit fürs Review',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein strukturierter Plan vor jeder Content-Änderung.',
    helpsPara:
      'Sam ordnet Befunde vorgeschlagenen Änderungen zu. Er schreibt nicht um, wendet nichts an und veröffentlicht nicht. Er bereitet einen für Menschen prüfbaren Plan vor, der in Rileys Queue oder einen späteren Freigabe-Workflow übergehen kann.',
    checks: [
      'Worker-Befunde und Empfehlungen',
      'Betroffener Content-Bereich',
      'Änderungstyp',
      'Priorität und erwarteter Nutzen',
      'Risikostufe',
      'Beleg- oder Freigabeanforderungen',
    ],
    improves: [
      'Sicherheit von Content-Workflows',
      'Qualität der Review-Entscheidungen',
      'Klarheit, bevor Bearbeitungen beginnen',
      'Trennung zwischen Empfehlung und Handlung',
    ],
    prepares: [
      'Vorgeschlagenen Änderungsplan',
      'Kennzeichnungen des betroffenen Bereichs',
      'Notizen zu Risiko und Nutzen',
      'Freigabebereite Review-Elemente',
    ],
    surfaces: [
      'Änderungen, die eine Freigabe brauchen',
      'Bearbeitungen mit hohem Risiko',
      'Elemente, die mehr Belege brauchen',
      'Empfehlungen, die noch nicht bearbeitungsreif sind',
    ],
    ioH2: 'Womit Sam arbeitet und was er liefert.',
    worksFrom: [
      'Worker-Befunde',
      'Beleg-Review',
      'Ergebnisse der Content-Analyse',
      'Risiko- und Aussagensignale',
      'Seitenkontext',
    ],
    produces: [
      'Änderungsplan',
      'Vorgeschlagene Änderungen',
      'Notizen zum betroffenen Bereich',
      'Risikokennzeichnungen',
      'Erwarteter Nutzen',
    ],
    scenarios: [
      {
        title: 'Ein Review hat mehrere Befunde ergeben.',
        description:
          'Sam macht daraus vorgeschlagene Änderungen, die die Redakteurin bewerten kann.',
      },
      {
        title: 'Das Team will automatische Bearbeitungen vermeiden.',
        description:
          'Er schafft eine Planungsebene, bevor irgendein Content angefasst wird.',
      },
      {
        title: 'Eine Empfehlung könnte riskant sein.',
        description:
          'Sam markiert Risiko und Belegbedarf, bevor sie weitergeht.',
      },
      {
        title: 'Eine Seite kommt in die Review-Queue.',
        description:
          'Er bereitet die strukturierten Elemente vor, die Riley organisieren kann.',
      },
      {
        title: 'Die Redakteurin braucht klarere Prioritäten.',
        description:
          'Sam kennzeichnet, was am wichtigsten ist und warum.',
      },
      {
        title: 'Eine Änderung sollte noch nicht bearbeitungsreif sein.',
        description:
          'Er hält vorgeschlagene Änderungen im reinen Review-Status, bis sie freigegeben sind.',
      },
    ],
    boundaryH2: 'Sam plant Änderungen. Redakteur:innen geben sie frei oder lehnen sie ab.',
    boundaryPara:
      'Sam bearbeitet die Seite nicht, entwirft keine sicheren Bearbeitungen, wendet keine Änderungen an und veröffentlicht nicht. Er bereitet vorgeschlagene Änderungen für die menschliche Entscheidung vor.',
    boundaryChecklist: [
      'Sam plant Änderungen, er bearbeitet oder wendet sie nie selbst an.',
      'Vorgeschlagene Änderungen bleiben im reinen Review-Status, bis eine Redakteurin sie freigibt.',
      'Risiko- und Belegbedarf werden markiert, nicht übersprungen oder als unbedenklich angenommen.',
      'Ein Befund wird nie als bereits freigegeben behandelt.',
    ],
    willNot: [
      { color: 'red', text: 'Content automatisch umschreiben' },
      { color: 'red', text: 'Vorgeschlagene Änderungen anwenden' },
      { color: 'red', text: 'Einen Befund als freigegeben behandeln' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
      { color: 'red', text: 'Beleg- oder Risikoprüfungen umgehen' },
    ],
    relatedH2: 'Workers, mit denen Sam zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Macht aus Sams vorgeschlagenen Änderungen eine Entscheidungs-Queue.',
        outputLabel: 'Review-Queue',
        ctaLabel: 'Wie Riley organisiert',
      },
      {
        id: 'review',
        description: 'Fasst Review-Maßnahmen für menschliche Redakteur:innen zusammen.',
        outputLabel: 'Review-Zusammenfassung',
        ctaLabel: 'Wie Helen zusammenfasst',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Prüft, ob vorgeschlagene Änderungen die Freigabe blockieren.',
        outputLabel: 'Freigabe-Gate',
        ctaLabel: 'Wie Dana entscheidet',
      },
    ],
    ctaH2: 'Die Änderung planen, bevor bearbeitet wird.',
    ctaPara:
      'Sam verwandelt Befunde in strukturierte vorgeschlagene Änderungen, damit menschliche Redakteur:innen mit Kontext freigeben, ablehnen oder zurückstellen können.',
    guidanceFooterLabel: 'ÄNDERUNGSSTATUS',
    guidanceFooterValue: 'Vorgeschlagen · Review ausstehend',
  },

  review: {
    seoTitle: 'Review-Worker | WordPresto',
    metaDescription:
      'Helen fasst Befunde und Empfehlungen zu einer strukturierten Review-Zusammenfassung für menschliches Handeln zusammen und macht das Review verständlich, ohne die Nuancen zu verlieren.',
    h1: 'Komplexe Befunde in ein klares redaktionelles Review verwandeln.',
    heroPara1:
      'Ein Seiten-Review kann technische Probleme, Content-Lücken, Bedenken zu Belegen, Lesbarkeitsnotizen, Intentionsprobleme und Freigabeblocker umfassen. Redakteur:innen brauchen eine klare Zusammenfassung, keinen weiteren Haufen unverbundener Befunde. Helen fasst Befunde und Empfehlungen zu einer strukturierten Review-Zusammenfassung für menschliches Handeln zusammen. Sie macht das Review verständlich, ohne die Nuancen zu verlieren.',
    heroPara2:
      'Für Seiten-Audits, Content-Analyse, Freigabevorbereitung und die Übergabe zwischen Worker-Befunden und redaktionellen Entscheidungen.',
    problemEyebrow: 'Wo Review-Zusammenfassungen scheitern',
    problemH2: 'Ein nützliches Audit scheitert trotzdem, wenn die Redakteurin nicht danach handeln kann.',
    problemPara:
      'Zu viele Befunde erzeugen Ermüdung. Zu wenig Detail verbirgt Risiko. Eine gute Review-Zusammenfassung muss die wichtigen Signale erhalten und gleichzeitig die nächste Handlung klar machen. Helen gibt Redakteur:innen die Version, mit der sie tatsächlich arbeiten können.',
    problemAnnotation: '↘ zusammenfassen, ohne die Belege zu verflachen',
    beforeStamp: 'Unklares Review',
    beforeHtml: `<p>Technische Befunde, Content-Befunde und Belegbefunde erscheinen getrennt, ohne klare Reihenfolge für die nächsten Schritte.</p>`,
    beforeTags: ['Verstreute Befunde', 'Keine Zusammenfassung', 'Unklare Priorität', 'Schwer freizugeben'],
    beforeNote: 'die Redakteurin muss sich das Gesamtbild selbst zusammensetzen',
    afterStamp: 'Redaktionelle Zusammenfassung',
    afterHtml: `<p>Helen gruppiert die Befunde, hebt Blocker hervor und listet die Review-Maßnahmen in der richtigen Reihenfolge auf.</p>`,
    afterTags: ['Klare Zusammenfassung', 'Priorisiert', 'Prüfbar', 'Menschengeführt'],
    afterNote: 'die Redakteurin weiß, was Aufmerksamkeit braucht',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Eine Review-Ebene für menschliche Entscheidungen.',
    helpsPara:
      'Helen liest die vorhandenen Befunde und macht daraus eine ruhige, strukturierte Zusammenfassung. Sie gibt nicht frei, bearbeitet nicht, wendet nichts an und veröffentlicht nicht. Sie hilft der Redakteurin zu verstehen, was zählt.',
    checks: [
      'Worker-Befunde und Empfehlungen',
      'Manuelle Review-Elemente',
      'Priorität und Schweregrad',
      'Beleg-Einschränkungen',
      'Freigabeblocker',
      'Reihenfolge der Maßnahmen',
    ],
    improves: [
      'Redaktionelle Klarheit',
      'Geschwindigkeit des menschlichen Reviews',
      'Freigabevorbereitung',
      'Verständnis über Teams hinweg',
    ],
    prepares: [
      'Review-Zusammenfassung',
      'Priorisierte Maßnahmenliste',
      'Notizen zum manuellen Review',
      'Blocker-Zusammenfassung',
    ],
    surfaces: [
      'Kritische Probleme zuerst',
      'Elemente, die manuelles Urteilsvermögen brauchen',
      'Widersprüchliche oder unsichere Befunde',
      'Empfehlungen, die noch nicht weitergehen sollten',
    ],
    ioH2: 'Womit Helen arbeitet und was sie liefert.',
    worksFrom: [
      'Worker-Ergebnisse',
      'Elemente der Review-Queue',
      'Vorgeschlagene Änderungen',
      'Beleg-Einschränkungen',
      'Freigabesignale',
    ],
    produces: [
      'Redaktionelle Review-Zusammenfassung',
      'Priorisierte Maßnahmenliste',
      'Notizen zum manuellen Review',
      'Blocker-Zusammenfassung',
      'Entscheidungsunterstützender Kontext',
    ],
    scenarios: [
      {
        title: 'Ein Seiten-Review hat zu viele Befunde.',
        description: 'Helen macht daraus eine klare Zusammenfassung.',
      },
      {
        title: 'Eine Redakteurin braucht die nächste Handlung.',
        description: 'Sie hebt hervor, was zuerst geprüft werden sollte.',
      },
      {
        title: 'Eine Übergabe steht an.',
        description:
          'Helen macht die Befunde für jemanden lesbar, der die Analyse nicht selbst durchgeführt hat.',
      },
      {
        title: 'Die Freigabe rückt näher.',
        description: 'Sie macht Blocker und ungelöste Review-Elemente sichtbar.',
      },
      {
        title: 'Befunde sind über Teams hinweg gemischt.',
        description:
          'Helen gruppiert technische Probleme, Content-Probleme, Belegprobleme und Governance-Probleme in einem Review.',
      },
      {
        title: 'Das Team braucht einen ruhigen redaktionellen Blick.',
        description: 'Sie reduziert Rauschen, ohne wichtige Bedenken zu verbergen.',
      },
    ],
    boundaryH2: 'Helen fasst zusammen. Redakteur:innen entscheiden.',
    boundaryPara:
      'Helen gibt Content nicht frei, bearbeitet keinen Text, wendet keine Änderungen an und veröffentlicht nicht. Sie bereitet eine Review-Zusammenfassung vor, damit Menschen bessere Entscheidungen treffen können.',
    boundaryChecklist: [
      'Helen fasst Befunde zusammen, sie gibt Content nie selbst frei oder bearbeitet ihn.',
      'Blocker werden immer sichtbar gemacht, nie verborgen, damit eine Seite bereiter wirkt, als sie ist.',
      'Zusammenfassungen erhalten wichtige Nuancen, statt sie zu verflachen.',
      'Ein spezialisiertes Recht-, Compliance- oder Barrierefreiheits-Review wird nie ersetzt.',
    ],
    willNot: [
      { color: 'red', text: 'Content automatisch freigeben' },
      { color: 'red', text: 'Umschreiben oder Korrekturen anwenden' },
      { color: 'red', text: 'Blocker verbergen, damit eine Seite bereiter wirkt' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
      { color: 'red', text: 'Ein spezialisiertes Recht-, Compliance- oder Barrierefreiheits-Review ersetzen' },
    ],
    relatedH2: 'Workers, mit denen Helen zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Organisiert vorgeschlagene Änderungen zu Entscheidungselementen.',
        outputLabel: 'Review-Queue',
        ctaLabel: 'Wie Riley organisiert',
      },
      {
        id: 'safe_change_planner',
        description: 'Verwandelt Befunde in vorgeschlagene Änderungen.',
        outputLabel: 'Änderungsplan',
        ctaLabel: 'Wie Sam plant',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Nutzt den Review-Status, um die Freigabereife zu beurteilen.',
        outputLabel: 'Freigabe-Gate',
        ctaLabel: 'Wie Dana beurteilt',
      },
    ],
    ctaH2: 'Redakteur:innen ein Review geben, nach dem sie handeln können.',
    ctaPara:
      'Helen verwandelt Worker-Befunde in eine klare redaktionelle Zusammenfassung, damit menschliche Prüfer:innen entscheiden können, wie es weitergeht.',
    guidanceFooterLabel: 'REVIEWSTATUS',
    guidanceFooterValue: 'Zusammenfassung bereit · redaktionelle Handlung nötig',
  },

  editorial_approval_gate: {
    seoTitle: 'Freigabe-Gate-Worker | WordPresto',
    metaDescription:
      'Dana liest die vorhandenen Worker-Ergebnisse und erstellt ein konservatives Freigabe-Gate, das der menschlichen Prüferin sagt, ob Content bereit fürs Review erscheint, überarbeitet werden muss oder blockiert ist.',
    h1: 'Prüfen, ob die Arbeit bereit für die menschliche Freigabe ist.',
    heroPara1:
      'Freigabe sollte kein Bauchgefühl sein. Bevor Content weitergeht, muss die Redakteurin wissen, ob die wichtigsten Prüfungen sauber sind, ob Blocker bestehen bleiben und ob noch etwas Überarbeitung, Belege oder ein spezialisiertes Review braucht. Dana liest die vorhandenen Worker-Ergebnisse und erstellt ein konservatives Freigabe-Gate. Sie gibt nicht automatisch frei. Sie sagt der menschlichen Prüferin, ob der Content bereit fürs Review erscheint, überarbeitet werden muss oder blockiert ist.',
    heroPara2:
      'Für abschließende redaktionelle Prüfungen, Freigabe-Workflows, die Vorbereitung der CMS-Übergabe und Content-Governance.',
    problemEyebrow: 'Wo Freigabe-Workflows schiefgehen',
    problemH2: 'Content geht weiter, weil alle annehmen, jemand anderes habe ihn schon geprüft.',
    problemPara:
      'Eine Seite mag guten Text haben und trotzdem ungelöste Beleglücken, Barrierefreiheitsprobleme, Metadatenprobleme, Vertrauensbedenken, Blocker bei der CMS-Übergabe oder redaktionelles Risiko enthalten. Wenn diese Probleme über verschiedene Worker-Ergebnisse verstreut sind, übersieht man sie leicht. Dana bringt den finalen Review-Status in ein einziges Gate.',
    problemAnnotation: '↘ Bereitschaft prüfen, bevor freigegeben wird',
    beforeStamp: 'Lockere Freigabe',
    beforeHtml: `<p>Der Entwurf wirkt bereit, aber Beleg-, Metadaten- und Barrierefreiheitsprüfungen enthalten noch ungelöste Punkte.</p>`,
    beforeTags: ['Ungelöste Blocker', 'Kein finales Gate', 'Verstreute Risiken', 'Freigabe unklar'],
    beforeNote: 'die Redakteurin muss Probleme selbst aufspüren',
    afterStamp: 'Gate geprüft',
    afterHtml: `<p>Dana fasst Bereitschaft, Blocker und nächste Schritte zusammen, bevor die menschliche Redakteurin freigibt.</p>`,
    afterTags: ['Konservatives Gate', 'Klarer Status', 'Priorisierte Blocker', 'Menschliche Entscheidung'],
    afterNote: 'die Freigabe wird sicherer',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein konservatives finales Gate, bevor Content weitergeht.',
    helpsPara:
      'Dana prüft bereits vorliegende Worker-Ergebnisse und stellt fest, ob der Content bereit für das menschliche redaktionelle Review erscheint. Sie zertifiziert keine Compliance, veröffentlicht keinen Content und gibt nicht automatisch frei.',
    checks: [
      'Status des Freigabeberichts',
      'Redaktionelle Risiko- und Aussagenprobleme',
      'Beleglücken',
      'Barrierefreiheitsstatus',
      'Bereitschaft von SEO-Metadaten und Suchausschnitt',
      'Schema- und Vertrauenssignale',
      'Blocker bei der CMS-Übergabe',
      'Entwurfsqualität und Reviewstatus',
    ],
    improves: [
      'Vertrauen in die Freigabe',
      'Redaktionelle Governance',
      'Sichtbarkeit von Blockern',
      'Bereitschaft vor Übergabe oder Veröffentlichungs-Workflow',
    ],
    prepares: [
      'Freigabe-Gate-Entscheidung',
      'Bereitschaftswert',
      'Blocker-Liste',
      'Priorisierte Empfehlungen',
    ],
    surfaces: [
      'Harte Blocker',
      'Überarbeitungspunkte',
      'Fehlende Review-Belege',
      'Gründe, warum Content noch nicht weitergehen sollte',
    ],
    ioH2: 'Womit Dana arbeitet und was sie liefert.',
    worksFrom: [
      'Review-Zusammenfassung',
      'Review-Queue',
      'Beleglücken-Review',
      'Befunde zu redaktionellem Risiko',
      'Ergebnisse zu Barrierefreiheit, Metadaten, Schema und Vertrauen',
    ],
    produces: [
      'Freigabe-Gate-Review',
      'Gate-Entscheidung',
      'Bereitschaftswert',
      'Blocker-Liste',
      'Priorisierte Empfehlungen',
    ],
    scenarios: [
      {
        title: 'Eine Seite steht kurz vor der finalen Freigabe.',
        description:
          'Dana prüft, ob ungelöste Worker-Befunde den Fortschritt noch blockieren.',
      },
      {
        title: 'Mehrere Review-Worker sind gelaufen.',
        description: 'Sie führt den Status zu einem klaren Bereitschafts-Gate zusammen.',
      },
      {
        title: 'Ein Entwurf bewegt sich auf die CMS-Übergabe zu.',
        description: 'Dana markiert Blocker, bevor die Übergabe operatives Risiko schafft.',
      },
      {
        title: 'Die Redakteurin braucht einen konservativen Entscheidungspunkt.',
        description:
          'Sie vergibt „freigegeben fürs Review" nur, wenn die Prüfungen sauber genug sind.',
      },
      {
        title: 'Governance ist wichtig.',
        description:
          'Dana hält Risiko-, Beleg- und Barrierefreiheitsprobleme vor der Freigabe sichtbar.',
      },
      {
        title: 'Eine Seite sollte noch nicht weitergehen.',
        description: 'Sie erklärt warum und listet die wichtigsten Maßnahmen auf.',
      },
    ],
    boundaryH2: 'Dana prüft die Bereitschaft am Gate. Menschen geben frei.',
    boundaryPara:
      'Dana gibt Content nicht automatisch frei, zertifiziert keine Compliance, veröffentlicht nicht und schreibt nicht in ein CMS. Ihre Aufgabe ist es, den Freigabestatus sichtbar zu machen, damit eine menschliche Prüferin entscheiden kann.',
    boundaryChecklist: [
      'Dana prüft die Bereitschaft am Gate, sie gibt Content nie selbst frei.',
      'Compliance (rechtlich, medizinisch, finanziell, Barrierefreiheit) wird von Dana nie zertifiziert.',
      'Blocker werden immer sichtbar gemacht, nie verborgen, damit Content bereiter wirkt, als er ist.',
      'Die Gate-Entscheidung ist konservativ: Unklare oder ungelöste Punkte gelten standardmäßig als überarbeitungsbedürftig.',
    ],
    willNot: [
      { color: 'red', text: 'Content automatisch freigeben' },
      { color: 'red', text: 'Rechtliche, medizinische, finanzielle oder Barrierefreiheits-Compliance zertifizieren' },
      { color: 'red', text: 'Content selbst veröffentlichen oder übergeben' },
      { color: 'red', text: 'Blocker verbergen, damit Content bereiter wirkt' },
      { color: 'red', text: 'Umschreiben oder Korrekturen anwenden' },
    ],
    relatedH2: 'Workers, mit denen Dana zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'review',
        description: 'Fasst Befunde und Review-Maßnahmen vor dem finalen Gate zusammen.',
        outputLabel: 'Review-Zusammenfassung',
        ctaLabel: 'Wie Helen zusammenfasst',
      },
      {
        id: 'safe_change_planner',
        description: 'Verwandelt Befunde in vorgeschlagene Änderungen, die Dana auf Blocker prüfen kann.',
        outputLabel: 'Änderungsplan',
        ctaLabel: 'Wie Sam plant',
      },
      {
        id: 'review_queue',
        description: 'Organisiert ungelöste Elemente, die Dana als Freigabeblocker behandeln kann.',
        outputLabel: 'Review-Queue',
        ctaLabel: 'Wie Riley organisiert',
      },
    ],
    ctaH2: 'Bereitschaft vor der Freigabe explizit machen.',
    ctaPara:
      'Dana hilft Redakteur:innen zu erkennen, ob Content bereit für die menschliche Freigabe ist, überarbeitet werden muss oder vor der Übergabe blockiert werden sollte.',
    guidanceFooterLabel: 'GATE-STATUS',
    guidanceFooterValue: 'Überarbeitung nötig · redaktionelle Entscheidung erforderlich',
  },

  site_discovery: {
    seoTitle: 'Site-Discovery-Worker | WordPresto',
    metaDescription:
      'Claire hilft dabei, die Seiten eines Website-Projekts zu identifizieren, damit Redakteur:innen sehen, was geprüft werden muss, wo die Content-Chancen liegen und wie die Website als Ganzes zusammenpasst.',
    h1: 'Die Seiten finden, bevor die Arbeit beginnt.',
    heroPara1:
      'Ein starker Content-Workflow beginnt damit, zu wissen, was bereits existiert. Claire hilft dabei, die Seiten eines Website-Projekts zu identifizieren, damit Redakteur:innen sehen, was geprüft werden muss, wo die Content-Chancen liegen und wie die Website als Ganzes zusammenpasst. Sie gibt dem Team einen geordneten Blick auf die Seiten der Website, frühe Content-Signale und Entdeckungsnotizen, damit die übrigen Word-Presto-Workers von einem klareren Projektbild ausgehen können.',
    heroPara2:
      'Für Website-Projekte, Content-Audits, die Planung von Seiten-Reviews, Prüfungen der internen Verlinkung und frühe Projektintelligenz.',
    problemEyebrow: 'Wo Website-Projekte unübersichtlich werden',
    problemH2: 'Man kann den Content nicht verbessern, wenn man nicht weiß, mit welchen Seiten man es zu tun hat.',
    problemPara:
      'Die meiste Content-Arbeit beginnt zu spät im Prozess. Teams stürzen sich auf eine Seite, ein Keyword oder einen Entwurf, bevor sie die gesamte Website verstehen. Wichtige Seiten werden übersehen. Schwache Seiten bleiben verborgen. Link-Chancen werden nicht erkannt. Das Projekt beginnt mit Fragmenten statt mit einer Karte. Claire gibt dem Workflow einen klareren Ausgangspunkt.',
    problemAnnotation: '↘ erst die Seiten entdecken, dann entscheiden, was Arbeit braucht',
    beforeStamp: 'Unübersichtlicher Ausgangspunkt',
    beforeHtml: `<p>Das Team hat eine Startseite, ein paar Service-Seiten und einige Blogbeiträge, aber keinen klaren Überblick, was zuerst geprüft werden sollte.</p>`,
    beforeTags: ['Seiten verstreut', 'Review-Priorität unklar', 'Schwaches Bild der Website', 'Schwer zu planen'],
    beforeNote: 'das Projekt beginnt mit Fragmenten',
    afterStamp: 'Discovery-Review',
    afterHtml: `<p>Claire organisiert die bekannten Seiten, hebt Anschlussprüfungen hervor und bereitet die Website für ein tieferes Review vor.</p>`,
    afterTags: ['Klarere Seitenliste', 'Besserer Review-Ablauf', 'Content-Signale sichtbar', 'Bereit für Workers'],
    afterNote: 'das Team weiß, wo es beginnen soll',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Eine Discovery-Ebene für Website-Projekte.',
    helpsPara:
      'Claire hilft dem Team zu verstehen, aus welchen Seiten ein Website-Projekt besteht. Sie bereitet den Ausgangsblick für Content-Inventar, Seiteninspektion, Link-Review und tiefere Projektintelligenz vor.',
    checks: [
      'Seiten, die Teil des Projekts sein sollten',
      'Website-Bereiche und Seitengruppen',
      'Frühe Content- und Struktursignale',
      'Seiten, die möglicherweise ein Review brauchen',
      'Chancen für interne Beziehungen',
      'Anschlussprüfungen für Redakteur:innen',
    ],
    improves: [
      'Projekt-Setup',
      'Planung von Content-Audits',
      'Priorisierung von Seiten-Reviews',
      'Sichtbarkeit von interner Verlinkung und Website-Struktur',
    ],
    prepares: [
      'Site-Discovery-Review',
      'Seitenliste zur Inspektion',
      'Frühe Notizen zur Website-Struktur',
      'Anstöße für das Anschluss-Review',
    ],
    surfaces: [
      'Seiten, die eine Inspektion wert sind',
      'Bereiche, die dünn oder unklar wirken könnten',
      'Stellen, an denen die Website-Struktur Aufmerksamkeit braucht',
      'Seiten, die stärkere interne Links brauchen könnten',
    ],
    ioH2: 'Womit Claire arbeitet und was sie liefert.',
    worksFrom: [
      'Website-Projekt',
      'Bekannte Website-Seiten',
      'Website-Bereiche',
      'Seitenbeziehungen',
      'Kontext des Projekt-Setups',
    ],
    produces: [
      'Site-Discovery-Review',
      'Seiten fürs Review',
      'Notizen zu Website-Bereichen',
      'Anstöße für interne Beziehungen',
      'Anschlussprüfungen',
    ],
    scenarios: [
      {
        title: 'Ein neues Website-Projekt startet.',
        description:
          'Claire hilft festzulegen, welche Seiten Teil des ersten Reviews sein sollten.',
      },
      {
        title: 'Ein Website-Audit braucht Struktur.',
        description:
          'Sie gibt Redakteur:innen einen klareren Blick auf die Seiten und Bereiche, mit denen sie arbeiten.',
      },
      {
        title: 'Ein Content-Inventar braucht einen Ausgangspunkt.',
        description:
          'Claire bereitet den Kontext der Seitenentdeckung vor, bevor Nora die Assets klassifiziert.',
      },
      {
        title: 'Die Arbeit an der internen Verlinkung braucht einen Blick auf die Website.',
        description:
          'Sie macht Seitenbeziehungen und Bereiche sichtbar, die ein Link-Review brauchen könnten.',
      },
      {
        title: 'Das Team weiß nicht, wo es anfangen soll.',
        description: 'Claire hilft, aus einer Website ein prüfbares Projekt zu machen.',
      },
      {
        title: 'Ein Projekt braucht tiefere Intelligenz.',
        description:
          'Sie gibt anderen Workers eine sauberere Ausgangskarte, bevor die Analyse weitergeht.',
      },
    ],
    boundaryH2: 'Claire entdeckt Seiten. Redakteur:innen entscheiden, was zählt.',
    boundaryPara:
      'Claire hilft, die Website fürs Review zu organisieren. Sie entscheidet keine Strategie, löscht keine Seiten, schreibt keinen Text um und veröffentlicht nicht. Redakteur:innen wählen, welche Seiten inspiziert, priorisiert und verbessert werden.',
    boundaryChecklist: [
      'Claire organisiert Seiten fürs Review, sie bearbeitet oder löscht sie nie selbst.',
      'Entdeckte Seiten sind eine Ausgangsliste für Redakteur:innen, keine automatische Prioritätenreihenfolge.',
      'Notizen zur Website-Struktur unterstützen die Planung, sie ersetzen kein menschliches Urteilsvermögen zur Strategie.',
      'Anschlussprüfungen werden klar aufgelistet, damit Redakteur:innen wissen, was noch bestätigt werden muss.',
    ],
    willNot: [
      { color: 'red', text: 'Content umschreiben oder bearbeiten' },
      { color: 'red', text: 'Seiten löschen, zusammenführen oder umleiten' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
      { color: 'red', text: 'Jede entdeckte Seite automatisch als wichtig behandeln' },
      { color: 'red', text: 'Das menschliche Review der Website-Prioritäten ersetzen' },
    ],
    relatedH2: 'Workers, mit denen Claire zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Inspiziert einzelne Seiten, sobald sie fürs Review ausgewählt sind.',
        outputLabel: 'Seitensignale',
        ctaLabel: 'Wie Patrick inspiziert',
      },
      {
        id: 'content_inventory',
        description: 'Klassifiziert Seiten als Content-Assets und erfasst Planungssignale.',
        outputLabel: 'Inventar-Review',
        ctaLabel: 'Wie Nora klassifiziert',
      },
      {
        id: 'internal_linking',
        description: 'Prüft, wie ausgewählte Seiten mit verwandtem Content verbunden sind.',
        outputLabel: 'Link-Einschätzung',
        ctaLabel: 'Wie Leo prüft',
      },
    ],
    ctaH2: 'Jedem Website-Projekt einen klareren Ausgangspunkt geben.',
    ctaPara:
      'Claire hilft Word Presto, von verstreuten Seiten zu einem organisierten Review-Ablauf zu kommen, damit Redakteur:innen wissen, was existiert und wo die Arbeit beginnen sollte.',
    guidanceFooterLabel: 'DISCOVERY-STATUS',
    guidanceFooterValue: 'Seiten bereit fürs Review',
  },

  page_inspector: {
    seoTitle: 'Seiteninspektions-Worker | WordPresto',
    metaDescription:
      'Patrick inspiziert die Seite und extrahiert die Quellsignale, auf die der Rest des Workflows angewiesen ist: Titel, Meta-Beschreibung, Überschriften, Links, Bilder, Schema, Wortzahl und sichtbare Seitenstruktur.',
    h1: 'Mit dem beginnen, was die Seite tatsächlich sagt.',
    heroPara1:
      'Bevor Word Presto Änderungen empfiehlt, muss die Seite richtig gelesen werden. Patrick inspiziert die Seite und extrahiert die Quellsignale, auf die der Rest des Workflows angewiesen ist: Titel, Meta-Beschreibung, Überschriften, Links, Bilder, Schema, Wortzahl und sichtbare Seitenstruktur. Er gibt dem Team ein genaues, aktuelles Bild der Seite, wie sie tatsächlich existiert, nicht wie irgendjemand annimmt, dass sie sei.',
    heroPara2:
      'Für Seiten-Reviews, Content-Audits, technische Prüfungen, Briefings und jeden Workflow-Schritt, der von bestätigten Seitenfakten statt von Annahmen ausgehen muss.',
    problemEyebrow: 'Wo Seiten-Reviews schiefgehen',
    problemH2: 'Man kann eine Seite nicht prüfen, die man nicht tatsächlich inspiziert hat.',
    problemPara:
      'Teams arbeiten oft aus dem Gedächtnis, von einem alten Screenshot oder danach, was eine Seite enthalten soll, statt danach, was sie tatsächlich enthält. Titel werden umgeschrieben, ohne den Live-Titel zu prüfen. Überschriften werden angenommen statt bestätigt. Fehlendes Schema bleibt unbemerkt. Das Review beginnt mit Vermutungen statt mit der Seite selbst. Patrick inspiziert zuerst, damit der Rest des Workflows von dem ausgeht, was wirklich da ist.',
    problemAnnotation: '↘ erst inspizieren, dann empfehlen',
    beforeStamp: 'Vermutung',
    beforeHtml: `<p>Das Team nimmt an, dass die Seite noch den alten Titel, eine klare H1 und funktionierende interne Links hat, ohne die Live-Seite zu prüfen.</p>`,
    beforeTags: ['Angenommener Titel', 'Unbestätigte Überschriften', 'Unbekanntes Schema', 'Keine Quellprüfung'],
    beforeNote: 'das Review beginnt mit einer Annahme',
    afterStamp: 'Seite inspiziert',
    afterHtml: `<p>Patrick bestätigt den Live-Titel, die Meta-Beschreibung, Überschriften, Links, Bilder, das Schema und die Wortzahl.</p>`,
    afterTags: ['Bestätigte Quellsignale', 'Struktur kartiert', 'Schema geprüft', 'Bereit fürs Review'],
    afterNote: 'das Review beginnt mit Fakten',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Eine Quellebene für das Review auf Seitenebene.',
    helpsPara:
      'Patrick liest die Live-Seite und extrahiert ihre Quellsignale, sodass andere Workers und Redakteur:innen einen bestätigten statt einen angenommenen Ausgangspunkt haben.',
    checks: [
      'Seitentitel und Meta-Beschreibung',
      'Überschriftenstruktur und -hierarchie',
      'Sichtbare Seitenstruktur und Abschnitte',
      'Interne und ausgehende Links',
      'Vorhandensein von Bildern und Alt-Text',
      'Vorhandensein von Schema-Markup',
      'Wortzahl',
    ],
    improves: [
      'Genauigkeit des Seiten-Reviews',
      'Ausgangspunkte für Briefing und Audit',
      'Vertrauen in technische Prüfungen',
      'Qualität der Übergabe an andere Workers',
    ],
    prepares: [
      'Zusammenfassung der Seitensignale',
      'Bestätigte Quellfakten',
      'Strukturnotizen fürs Review',
      'Markierungen für fehlende Elemente',
    ],
    surfaces: [
      'Titel oder Beschreibungen, die Aufmerksamkeit brauchen könnten',
      'Probleme mit der Überschriftenstruktur',
      'Fehlendes oder dünnes Schema',
      'Seiten mit ungewöhnlich niedriger Wortzahl',
    ],
    ioH2: 'Womit Patrick arbeitet und was er liefert.',
    worksFrom: [
      'Live-Seiten-URL',
      'Website-Projekt',
      'Ergebnisse der Site Discovery',
      'Bestehende Seitenmetadaten',
    ],
    produces: [
      'Zusammenfassung der Seitensignale',
      'Bestätigter Titel und Meta-Beschreibung',
      'Notizen zu Überschriften und Struktur',
      'Link- und Bildinventar',
      'Prüfung des Schema-Vorhandenseins',
    ],
    scenarios: [
      {
        title: 'Eine Seite wird fürs Review ausgewählt.',
        description: 'Patrick bestätigt genau, was die Live-Seite enthält, bevor das Review beginnt.',
      },
      {
        title: 'Ein Titel oder eine Meta-Beschreibung muss geprüft werden.',
        description: 'Er meldet die aktuellen Live-Werte statt dessen, was das Team annimmt.',
      },
      {
        title: 'Eine technische Prüfung ist nötig.',
        description: 'Patrick macht Schema-, Überschriften- und Struktursignale sichtbar, die Maya weiter beurteilen kann.',
      },
      {
        title: 'Ein Content-Briefing braucht Quellfakten.',
        description: 'Er gibt der Briefing-Autorin ein bestätigtes Bild davon, wie die Seite heute aussieht.',
      },
      {
        title: 'Ein Audit umfasst viele Seiten.',
        description: 'Patrick inspiziert jede Seite, damit das Audit auf aktuellen, nicht angenommenen Informationen aufbaut.',
      },
      {
        title: 'Als Nächstes stehen Suchintention oder Beleg-Review an.',
        description: 'Er übergibt Yuna und Kenji eine bestätigte Quellseite als Arbeitsgrundlage.',
      },
    ],
    boundaryH2: 'Patrick meldet, was die Seite sagt. Redakteur:innen entscheiden, was zu tun ist.',
    boundaryPara:
      'Patrick inspiziert und meldet Quellsignale. Er schreibt die Seite nicht um, beurteilt keine Qualität, vergibt keine Priorität und veröffentlicht nicht. Redakteur:innen und andere Workers nutzen seine Befunde, um zu entscheiden, wie es weitergeht.',
    boundaryChecklist: [
      'Patrick meldet die Seite, wie sie existiert, er bearbeitet oder schreibt sie nie selbst um.',
      'Seine Befunde sind Quellfakten, keine Qualitätsurteile oder Prioritätsentscheidungen.',
      'Fehlende Elemente werden klar markiert, nicht stillschweigend als unbedenklich angenommen.',
      'Tieferes technisches oder redaktionelles Urteilsvermögen bleibt beim zuständigen Worker oder der zuständigen Redakteurin.',
    ],
    willNot: [
      { color: 'red', text: 'Seiteninhalt umschreiben oder bearbeiten' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
      { color: 'red', text: 'Content-Qualität beurteilen oder Priorität vergeben' },
      { color: 'red', text: 'Seitenfakten annehmen, ohne die Live-Seite zu prüfen' },
      { color: 'red', text: 'Das menschliche Review der Bedeutung der Befunde ersetzen' },
    ],
    relatedH2: 'Workers, mit denen Patrick zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'technical_health',
        description: 'Nimmt die bestätigten Seitensignale und prüft das umfassendere technische Bild.',
        outputLabel: 'Technische Befunde',
        ctaLabel: 'Wie Maya prüft',
      },
      {
        id: 'intent_analyst',
        description: 'Nutzt die inspizierte Seite, um zu beurteilen, wie gut sie zur Suchintention passt.',
        outputLabel: 'Intentions-Einschätzung',
        ctaLabel: 'Wie Yuna beurteilt',
      },
      {
        id: 'evidence',
        description: 'Prüft die Aussagen auf der inspizierten Seite gegen vorhandene Belege.',
        outputLabel: 'Belegbündel',
        ctaLabel: 'Wie Kenji prüft',
      },
    ],
    ctaH2: 'Jedes Seiten-Review mit bestätigten Fakten beginnen.',
    ctaPara:
      'Patrick gibt Word Presto eine genaue Lesart der Seite selbst, damit der Rest des Workflows auf dem aufbaut, was wirklich da ist.',
    guidanceFooterLabel: 'INSPEKTIONSSTATUS',
    guidanceFooterValue: 'Seitensignale bereit fürs Review',
  },

  accessibility: {
    seoTitle: 'Barrierefreiheits-Worker | WordPresto',
    metaDescription:
      'Mara prüft die in den Seitenbelegen vorhandenen Barrierefreiheitssignale und markiert schwache Überschriftenstruktur, fehlende Bildalternativen, unklaren Linktext, Lesbarkeitsrisiken und Prüfungen, die eine menschliche Bestätigung brauchen.',
    h1: 'Barrierefreiheitsprobleme in den Review-Workflow bringen.',
    heroPara1:
      'Barrierefreiheit entscheidet, ob Menschen eine Seite lesen, durch sie navigieren, sie verstehen und nutzen können. Sie sollte sichtbar sein, bevor Content die Freigabe erreicht. Mara prüft die in den Seitenbelegen vorhandenen Barrierefreiheitssignale. Sie markiert Probleme wie schwache Überschriftenstruktur, fehlende Bildalternativen, unklaren Linktext, Lesbarkeitsrisiken und manuelle Prüfungen, die eine menschliche Bestätigung brauchen.',
    heroPara2:
      'Für Seiten-Reviews, technische Audits, Content-Qualitätsprüfungen und das finale Review vor der Freigabe.',
    problemEyebrow: 'Wo das Barrierefreiheits-Review schiefgeht',
    problemH2: 'Teams prüfen Barrierefreiheit oft zu spät.',
    problemPara:
      'Wenn die Überschriftenlogik verwirrend ist, Linktext vage ist oder Bildern nützliche Alternativen fehlen, sollte das Problem während des Reviews sichtbar sein, nicht erst nach dem Launch. Mara bringt diese Signale früh in den redaktionellen Workflow.',
    problemAnnotation: '↘ während des Reviews sichtbar machen, nicht erst nach dem Launch',
    beforeStamp: 'Zu spät geprüft',
    beforeHtml: `<p>Eine Seite geht live mit verwirrender Überschriftenreihenfolge, vagem Linktext und fehlenden Bildalternativen, alles unbemerkt bis nach dem Launch.</p>`,
    beforeTags: ['Überschriftenreihenfolge unklar', 'Vager Linktext', 'Fehlender Alt-Text', 'Erst nach dem Launch entdeckt'],
    beforeNote: 'das Problem zeigt sich erst, wenn die Seite schon live ist',
    afterStamp: 'Barrierefreiheits-Review',
    afterHtml: `<p>Mara markiert die Probleme bei Überschriften, Linktext, Bildern und Lesbarkeit, bevor die Seite die Freigabe erreicht.</p>`,
    afterTags: ['Probleme früh markiert', 'Manuelle Prüfungen aufgelistet', 'Korrekturhinweise bereit', 'Vor der Freigabe geprüft'],
    afterNote: 'das Problem ist vor dem Launch sichtbar',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Barrierefreiheits-Review ohne falsche Zertifizierung.',
    helpsPara:
      'Mara macht aus vorhandenen Seitensignalen prüfbare Barrierefreiheitsbefunde. Sie behauptet keine Compliance und ersetzt kein manuelles Testen.',
    checks: [
      'Überschriftenstruktur',
      'Vorhandensein von Bild-Alt-Text',
      'Klarheit des Linktexts',
      'Lesbarkeitssignale',
      'Benötigte manuelle Barrierefreiheitsprüfungen',
      'Aus den Seitenbelegen sichtbare Barrierefreiheitsrisiken',
    ],
    improves: [
      'Frühe Sichtbarkeit von Barrierefreiheitsproblemen',
      'Qualität der redaktionellen Übergabe',
      'Einheitliches Barrierefreiheits-Review auf Seitenebene',
      'Bereitschaft vor der Freigabe',
    ],
    prepares: [
      'Barrierefreiheitsbefunde',
      'Checkliste für manuelle Verifizierung',
      'Notizen zum Schweregrad der Probleme',
      'Korrekturhinweise fürs menschliche Review',
    ],
    surfaces: [
      'Fehlende oder schwache Bildalternativen',
      'Vager Linktext',
      'Bedenken zur Überschriftenstruktur',
      'Prüfungen, die ein menschliches oder spezialisiertes Audit brauchen',
    ],
    ioH2: 'Womit Mara arbeitet und was sie liefert.',
    worksFrom: [
      'Seitenstruktur',
      'Bildsignale',
      'Link- und Ankertext',
      'Lesbarkeitssignale',
      'Befunde des technischen Reviews',
    ],
    produces: [
      'Barrierefreiheits-Review',
      'Erkannte Probleme',
      'Manuelle Prüfungen',
      'Korrekturhinweise',
      'Reviewstatus',
    ],
    scenarios: [
      {
        title: 'Eine Seite wird vor der Freigabe geprüft.',
        description: 'Mara ergänzt das Review um einen Barrierefreiheits-Durchgang, bevor die Seite weitergeht.',
      },
      {
        title: 'Das technische Review hat strukturelle Probleme gefunden.',
        description: 'Sie prüft, ob diese Probleme auch die Überschriftenlogik oder die Navigation betreffen.',
      },
      {
        title: 'Eine Seite enthält viele Bilder.',
        description: 'Mara markiert Bilder ohne nützliche Alternativen, damit Redakteur:innen sie bearbeiten können.',
      },
      {
        title: 'Links sind vage oder repetitiv.',
        description: 'Sie macht Linktext sichtbar, der für Leser:innen und assistive Technologien klarer sein muss.',
      },
      {
        title: 'Die Überschriftenstruktur wirkt unübersichtlich.',
        description: 'Mara prüft die Überschriftenreihenfolge und markiert, wo sie Leser:innen oder Screenreader verwirren könnte.',
      },
      {
        title: 'Das Team braucht ehrliche Barrierefreiheitsnotizen.',
        description: 'Sie meldet, was die Belege stützen, und listet auf, was noch eine manuelle Prüfung braucht.',
      },
    ],
    boundaryH2: 'Mara markiert Barrierefreiheitsprobleme. Sie zertifiziert keine Compliance.',
    boundaryPara:
      'Mara liefert einen reinen Review-Durchgang zur Barrierefreiheit auf Basis vorhandener Seitenbelege. Sie ersetzt kein manuelles Testen, kein Screenreader-Testen, kein juristisches Review und kein formales WCAG-Audit.',
    boundaryChecklist: [
      'Mara markiert Probleme, die in den Seitenbelegen sichtbar sind, sie bearbeitet nie selbst Überschriften, Links oder Alt-Text.',
      'Ihre Befunde sind ein Ausgangspunkt fürs Review, keine Compliance-Zertifizierung.',
      'Prüfungen, die sie aus den vorhandenen Belegen nicht verifizieren kann, werden als manuelle Prüfungen aufgelistet, nicht stillschweigend übersprungen.',
      'Formale Barrierefreiheits-Audits und juristische Compliance-Entscheidungen bleiben bei einer qualifizierten menschlichen Prüferin.',
    ],
    willNot: [
      { color: 'red', text: 'Barrierefreiheits-Compliance zertifizieren' },
      { color: 'red', text: 'Vollständiges manuelles Testen mit assistiven Technologien durchführen' },
      { color: 'red', text: 'Überschriften, Links oder Alt-Text automatisch bearbeiten' },
      { color: 'red', text: 'Barrierefreiheitskorrekturen veröffentlichen' },
      { color: 'red', text: 'Probleme erfinden, die nicht durch Seitenbelege gestützt sind' },
    ],
    relatedH2: 'Workers, mit denen Mara zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrahiert die Seitenstruktur, Links und Bildsignale, die Mara prüft.',
        outputLabel: 'Seitensignale',
        ctaLabel: 'Wie Patrick inspiziert',
      },
      {
        id: 'technical_health',
        description: 'Prüft technisches SEO und verwandte Signale zur Seitengesundheit.',
        outputLabel: 'Technische Befunde',
        ctaLabel: 'Wie Maya prüft',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Nutzt den Barrierefreiheitsstatus als Teil des Bereitschafts-Reviews.',
        outputLabel: 'Freigabe-Gate',
        ctaLabel: 'Wie Dana entscheidet',
      },
    ],
    ctaH2: 'Barrierefreiheit vor der Freigabe sichtbar machen.',
    ctaPara:
      'Mara hilft Redakteur:innen, Barrierefreiheitsprobleme früh, klar und ehrlich zu erkennen, bevor Content weitergeht.',
    guidanceFooterLabel: 'BARRIEREFREIHEITSSTATUS',
    guidanceFooterValue: 'Review nötig · Prüfungen bereit',
  },

  intent_analyst: {
    seoTitle: 'Intentions-Analyse-Worker | WordPresto',
    metaDescription:
      'Yuna prüft, ob Content, Struktur, Metadaten und nächster Schritt einer Seite mit der wahrscheinlichen Such- oder Leserintention übereinstimmen.',
    h1: 'Prüfen, ob die Seite dem entspricht, wonach die Leserin gesucht hat.',
    heroPara1:
      'Eine Seite kann gut geschrieben sein und trotzdem die Intention verfehlen. Sie beantwortet vielleicht die falsche Frage, verspricht mehr, als sie liefert, oder vermischt mehrere Leserbedürfnisse zu einer verwirrten Seite. Yuna prüft, ob Content, Struktur, Metadaten und nächster Schritt mit der wahrscheinlichen Such- oder Leserintention übereinstimmen.',
    heroPara2:
      'Für Seiten-Reviews, Content-Briefings, SEO-Audits, Seitenüberarbeitungen und suchgeleitete redaktionelle Planung.',
    problemEyebrow: 'Wo die Content-Strategie schiefgeht',
    problemH2: 'Die Seite beantwortet etwas, aber nicht immer das, worauf es ankommt.',
    problemPara:
      'Suchintention ist der Grund hinter dem Besuch. Eine Leserin will vielleicht eine Definition, einen Vergleich, einen Beleg, eine Anleitung, Preishinweise, Beruhigung oder eine klare Handlungsmöglichkeit. Yuna prüft, ob die Seite diesem Grund dient.',
    problemAnnotation: '↘ erst den Grund prüfen, dann überarbeiten',
    beforeStamp: 'Intention unklar',
    beforeHtml: `<p>Die Seite liest sich gut, vermischt aber mehrere Leserbedürfnisse in einem Abschnitt, sodass unklar ist, welche Frage sie eigentlich beantwortet.</p>`,
    beforeTags: ['Vermischte Leserbedürfnisse', 'Metadaten versprechen zu viel', 'Kein klarer nächster Schritt', 'Intention unbestätigt'],
    beforeNote: 'die Seite wird optimiert, bevor die Intention klar ist',
    afterStamp: 'Intentions-Einschätzung',
    afterHtml: `<p>Yuna bestätigt die wahrscheinliche Intention, markiert die Lücken zwischen Versprechen und Einlösung und empfiehlt einen klareren Blickwinkel für die Seite.</p>`,
    afterTags: ['Intention bestätigt', 'Leserlücken aufgelistet', 'Blickwinkel empfohlen', 'Bereit zur Überarbeitung'],
    afterNote: 'die Überarbeitung zielt auf den richtigen Grund',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Intentions-Review vor der Optimierung.',
    helpsPara:
      'Yuna vergleicht, was die Seite zu versprechen scheint, mit dem, was sie tatsächlich liefert. Sie hilft der Redakteurin zu erkennen, ob die Aufgabe der Seite klar genug ist, bevor sie überarbeitet, erweitert oder freigegeben wird.',
    checks: [
      'Wahrscheinliche Leser- oder Suchintention',
      'Metadaten-Versprechen im Vergleich zur tatsächlichen Seite',
      'Fehlende Leserfragen',
      'Passung des Seitenformats',
      'Abschnittsreihenfolge',
      'Ausrichtung des nächsten Schritts',
    ],
    improves: [
      'Passung zur Suchintention',
      'Briefingqualität',
      'Klarheit des Seitenzwecks',
      'Richtung der Überarbeitung',
    ],
    prepares: [
      'Intentions-Einschätzung',
      'Lücken bei Leserbedürfnissen',
      'Empfohlener Seitenblickwinkel',
      'Suchausgerichtete nächste Schritte',
    ],
    surfaces: [
      'Intentions-Mismatch',
      'Vermischte oder konkurrierende Seitenziele',
      'Fehlende Entscheidungsinformationen',
      'Abschnitte, die vom Seitenzweck ablenken',
    ],
    ioH2: 'Womit Yuna arbeitet und was sie liefert.',
    worksFrom: [
      'Seitentitel und Metadaten',
      'Seitentext',
      'Seitenstruktur',
      'Quellsignale',
      'Themen- oder Keyword-Kontext, sofern verfügbar',
    ],
    produces: [
      'Intentions-Einschätzung',
      'Lücken bei Leserbedürfnissen',
      'Notizen zum Suchversprechen',
      'Empfohlene Seitenrolle',
      'Intentionsgerechte nächste Schritte',
    ],
    scenarios: [
      {
        title: 'Eine Seite rankt, konvertiert aber nicht.',
        description: 'Yuna prüft, ob die Seite tatsächlich der Intention dient, für die sie rankt.',
      },
      {
        title: 'Ein Entwurf wirkt unfokussiert.',
        description: 'Sie identifiziert, um welches Leserbedürfnis herum der Entwurf gebaut werden sollte.',
      },
      {
        title: 'Metadaten versprechen etwas, das die Seite nicht liefert.',
        description: 'Yuna markiert die Lücke zwischen dem Suchversprechen und dem tatsächlichen Content.',
      },
      {
        title: 'Ein Content-Briefing braucht ein klares Leserbedürfnis.',
        description: 'Sie gibt der Briefing-Autorin eine bestätigte Intention, um die herum sie planen kann.',
      },
      {
        title: 'Eine Formatentscheidung für die Seite ist nötig.',
        description: 'Yuna übergibt Ivan eine Intentions-Einschätzung, gegen die er das Format prüfen kann.',
      },
      {
        title: 'SEO-Empfehlungen ziehen in verschiedene Richtungen.',
        description: 'Sie verankert das Review in dem, wonach die Leserin tatsächlich gesucht hat.',
      },
    ],
    boundaryH2: 'Yuna klärt die Intention. Redakteur:innen entscheiden die Strategie.',
    boundaryPara:
      'Yuna schreibt die Seite nicht um, wählt keine Geschäftsstrategie und garantiert keine Ranking-Verbesserung. Sie gibt Redakteur:innen eine prüfbare Intentions-Einschätzung.',
    boundaryChecklist: [
      'Yuna beurteilt die Intention anhand der Seite und ihres Kontexts, sie schreibt Content nie selbst um.',
      'Ihre Einschätzung ist ein Ausgangspunkt für die Planung, keine Strategieentscheidung.',
      'Empfohlene Seitenblickwinkel sind Vorschläge für Redakteur:innen, keine automatischen Änderungen.',
      'Ranking-Ergebnisse werden von ihren Befunden nie versprochen oder impliziert.',
    ],
    willNot: [
      { color: 'red', text: 'Live-SERP-Daten abrufen oder erfinden' },
      { color: 'red', text: 'Content automatisch umschreiben' },
      { color: 'red', text: 'Eine Ranking-Verbesserung garantieren' },
      { color: 'red', text: 'Strategie ohne menschliches Review wählen' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
    ],
    relatedH2: 'Workers, mit denen Yuna zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrahiert die Quellsignale, die Yuna prüft.',
        outputLabel: 'Seitensignale',
        ctaLabel: 'Wie Patrick inspiziert',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Prüft, ob das Seitenformat zur erwarteten Suchform passt.',
        outputLabel: 'Format-Review',
        ctaLabel: 'Wie Ivan prüft',
      },
      {
        id: 'conversion_alignment',
        description: 'Prüft, ob der nächste Schritt zur Intention der Leserin passt.',
        outputLabel: 'Conversion-Review',
        ctaLabel: 'Wie Diane prüft',
      },
    ],
    ctaH2: 'Die Seite auf den Grund der Leserin ausrichten.',
    ctaPara:
      'Yuna hilft sicherzustellen, dass Optimierungsarbeit auf die richtige Intention zielt, bevor das Team etwas überarbeitet oder freigibt.',
    guidanceFooterLabel: 'INTENTIONSSTATUS',
    guidanceFooterValue: 'Review nötig · Lücken gefunden',
  },

  evidence: {
    seoTitle: 'Beleg-Worker | WordPresto',
    metaDescription:
      'Kenji prüft die Belege hinter Befunden und Empfehlungen und untersucht Beleggrad, unbelegte Aussagen, Herkunft und Einschränkungen vor der Freigabe.',
    h1: 'Wissen, welche Empfehlungen tatsächlich belegt sind.',
    heroPara1:
      'Content-Workflows erzeugen viele Ratschläge. Manche sind fundiert. Manche sind schwach. Manche hängen von fehlenden Daten, unvollständigem Retrieval oder Annahmen ab, die eine manuelle Verifizierung brauchen. Kenji prüft die Belege hinter den Befunden. Er untersucht Beleggrad, unbelegte Empfehlungen, Herkunft und Einschränkungen.',
    heroPara2:
      'Für Content-Audits, Freigabe-Workflows, das Beleglücken-Review, Risikoprüfungen und jede Empfehlung, die verteidigbar sein muss.',
    problemEyebrow: 'Wo Empfehlungen schiefgehen',
    problemH2: 'Ein Ratschlag ist nur nützlich, wenn man weiß, was ihn stützt.',
    problemPara:
      'Eine Empfehlung kann selbstsicher klingen und trotzdem auf dünnen Belegen ruhen. Sie mag von begrenzten Seitensignalen zu weit ausholen, auf fehlendem Retrieval beruhen oder eine Sicherheit vortäuschen, die der Workflow nicht hat. Kenji schützt Redakteur:innen vor falscher Sicherheit.',
    problemAnnotation: '↘ trennen, was belegt ist, von dem, was angenommen wird',
    beforeStamp: 'Falsche Sicherheit',
    beforeHtml: `<p>Eine Empfehlung liest sich wie eine feststehende Tatsache, ruht aber tatsächlich auf einem einzigen unvollständigen Signal ohne stützendes Retrieval.</p>`,
    beforeTags: ['Beleglage unklar', 'Herkunft fehlt', 'Sicherheit übertrieben', 'Nicht verifiziert'],
    beforeNote: 'der Ratschlag wirkt sicher, ist es aber nicht',
    afterStamp: 'Belegbündel',
    afterHtml: `<p>Kenji trennt die belegten Befunde von den schwachen und listet genau auf, was noch eine manuelle Verifizierung braucht.</p>`,
    afterTags: ['Beleggrad ausgewiesen', 'Schwache Befunde markiert', 'Herkunft vermerkt', 'Bereit für die Freigabe'],
    afterNote: 'die Sicherheit entspricht den Belegen',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Beleg-Review vor der Freigabe.',
    helpsPara:
      'Kenji prüft, ob Befunde durch vorhandenes Quellmaterial, Seitensignale, Standards oder abgerufenen Kontext gestützt sind. Er erfindet keine fehlenden Beweise.',
    checks: [
      'Beleggrad hinter den Befunden',
      'Unbelegte Empfehlungen',
      'Beleg-Einschränkungen',
      'Retrieval-Herkunft, sofern vorhanden',
      'Aussagen, die eine manuelle Verifizierung brauchen',
      'Bereiche mit fehlenden Daten',
    ],
    improves: [
      'Vertrauenswürdigkeit der Review-Ergebnisse',
      'Redaktionelle Sicherheit',
      'Trennung zwischen Beleg, Schlussfolgerung und Spekulation',
    ],
    prepares: [
      'Review zur Zuverlässigkeit der Belege',
      'Liste unbelegter Befunde',
      'Herkunftsnotizen',
      'Anstöße zur manuellen Verifizierung',
    ],
    surfaces: [
      'Aussagen, die stärkere Belege brauchen',
      'Empfehlungen, die auf unvollständigen Belegen beruhen',
      'Fehlendes Quellmaterial',
      'Einschränkungen, die vor der Freigabe sichtbar sein sollten',
    ],
    ioH2: 'Womit Kenji arbeitet und was er liefert.',
    worksFrom: [
      'Seitensignale',
      'Worker-Befunde',
      'Vorhandene Retrieval-Herkunft',
      'Standardzuordnung',
      'Beleglücken- und Risikosignale',
    ],
    produces: [
      'Belegbündel',
      'Review zum Beleggrad',
      'Liste unbelegter Befunde',
      'Zusammenfassung der Einschränkungen',
      'Notizen zur manuellen Verifizierung',
    ],
    scenarios: [
      {
        title: 'Eine Empfehlung muss verteidigbar sein.',
        description: 'Kenji prüft, was sie tatsächlich stützt, bevor sie die Freigabe erreicht.',
      },
      {
        title: 'Eine Seite trifft Aussagen.',
        description: 'Er prüft, ob diese Aussagen ausreichend belegt sind.',
      },
      {
        title: 'Ein Workflow nutzt abgerufenen Kontext.',
        description: 'Kenji prüft die Herkunft dieses Kontexts, bevor man sich darauf verlässt.',
      },
      {
        title: 'Eine Content-Freigabe steht bevor.',
        description: 'Er gibt Dana ein Belegbündel, das sie als Teil des Bereitschafts-Reviews abwägen kann.',
      },
      {
        title: 'Workers sind uneins oder liefern unsichere Befunde.',
        description: 'Kenji prüft die Belege hinter jedem Befund, damit Redakteur:innen beurteilen können, welchem sie vertrauen.',
      },
      {
        title: 'Das Thema ist sensibel oder risikoreich.',
        description: 'Er arbeitet mit Vera zusammen, um zu markieren, wo sich Beleg- und Compliance-Risiko überschneiden.',
      },
    ],
    boundaryH2: 'Kenji prüft die Belege. Redakteur:innen entscheiden, was zu tun ist.',
    boundaryPara:
      'Kenji zertifiziert weder Wahrheit noch Compliance noch Ranking-Wirkung. Wenn Belege fehlen, sagt er, dass sie fehlen.',
    boundaryChecklist: [
      'Kenji prüft die Belege hinter den Befunden, er bearbeitet oder gibt Content nie selbst frei.',
      'Fehlende oder schwache Belege werden klar gemeldet, nie stillschweigend zu Gewissheit aufgewertet.',
      'Sein Review ist ein Beitrag zur Freigabeentscheidung, nicht die Entscheidung selbst.',
      'Aussagen, die über das hinausgehen, was die vorhandenen Belege stützen, werden zur manuellen Verifizierung markiert.',
    ],
    willNot: [
      { color: 'red', text: 'Zitate, Fakten oder Beweise erfinden' },
      { color: 'red', text: 'Schwache Belege als Gewissheit behandeln' },
      { color: 'red', text: 'Unabhängige Quellen als bestätigte Belege abrufen' },
      { color: 'red', text: 'Aussagen automatisch freigeben' },
      { color: 'red', text: 'Content veröffentlichen oder bearbeiten' },
    ],
    relatedH2: 'Workers, mit denen Kenji zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Liefert Quellfakten fürs Beleg-Review.',
        outputLabel: 'Seitensignale',
        ctaLabel: 'Wie Patrick inspiziert',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Nutzt Beleg- und Aussagenkontext, um Risiko zu markieren.',
        outputLabel: 'Risiko- & Compliance-Bericht',
        ctaLabel: 'Wie Vera Risiken markiert',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Nutzt den Belegstatus als Teil des finalen Bereitschafts-Reviews.',
        outputLabel: 'Freigabe-Gate',
        ctaLabel: 'Wie Dana entscheidet',
      },
    ],
    ctaH2: 'Empfehlungen verteidigbar machen.',
    ctaPara:
      'Kenji hilft Redakteur:innen zu erkennen, welche Befunde fundiert sind, welche schwach sind und welche vor der Freigabe mehr Belege brauchen.',
    guidanceFooterLabel: 'BELEGSTATUS',
    guidanceFooterValue: 'Einschränkungen markiert · Review erforderlich',
  },

  internal_linking: {
    seoTitle: 'Content-Beziehungs-Worker | WordPresto',
    metaDescription:
      'Leo prüft, wie eine Seite mit anderem Content verbunden ist: interne Links, externe Links, Ankerqualität, Leserpfade und ob die Seite isoliert oder schlecht verbunden wirkt.',
    h1: 'Prüfen, ob die Seite mit dem Rest der Website verbunden ist.',
    heroPara1:
      'Eine Seite funktioniert selten allein. Sie braucht verwandte Seiten, stützende Ressourcen, klare nächste Schritte und nützliche interne Links. Leo prüft, wie die Seite mit anderem Content verbunden ist. Er prüft interne Links, externe Links, Ankerqualität, Leserpfade und ob die Seite isoliert oder schlecht verbunden wirkt.',
    heroPara2:
      'Für Seiten-Reviews, Prüfungen der internen Verlinkung, Content-Verbesserungs-Workflows und redaktionelle Planung.',
    problemEyebrow: 'Wo Content-Beziehungen schiefgehen',
    problemH2: 'Eine nützliche Seite kann trotzdem außerhalb der Reise stehen.',
    problemPara:
      'Einer Seite mag ein klarer nächster Schritt fehlen, der Ankertext vage sein, stützende Links schwach sein, es zu viele Ablenkungen geben oder keine erkennbare Beziehung zum umgebenden Themencluster bestehen. Leo prüft, ob sich die Seite wie ein Teil einer verbundenen Website verhält.',
    problemAnnotation: '↘ die Verbindungen prüfen, nicht nur den Text',
    beforeStamp: 'Isolierte Seite',
    beforeHtml: `<p>Die Seite liest sich für sich genommen gut, hat aber keinen klaren nächsten Schritt, vagen Ankertext und keine erkennbare Verbindung zum umgebenden Themencluster.</p>`,
    beforeTags: ['Kein nächster Schritt', 'Vage Anker', 'Schwache Cluster-Verbindung', 'Wirkt isoliert'],
    beforeNote: 'die Seite steht außerhalb der Reise',
    afterStamp: 'Beziehungs-Review',
    afterHtml: `<p>Leo prüft die Links und Pfade der Seite und markiert, wo die Verbindungen redaktionelle Aufmerksamkeit brauchen.</p>`,
    afterTags: ['Pfade geprüft', 'Schwache Anker markiert', 'Manuelle Prüfungen aufgelistet', 'Bereit fürs Review'],
    afterNote: 'die Verbindungen der Seite sind sichtbar',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Ein Beziehungs-Durchgang auf Seitenebene.',
    helpsPara:
      'Leo prüft die auf der Seite sichtbaren Links und Pfade. Er crawlt nicht die gesamte Website und bestätigt nicht jede verwaiste Seite. Er gibt Redakteur:innen ein fundiertes Beziehungs-Review auf Seitenebene.',
    checks: [
      'Vorhandensein interner Links',
      'Nutzung externer Links',
      'Klarheit des Ankertexts',
      'Nächste-Schritt-Pfade für die Leserin',
      'Verwaisungsrisiko auf Seitenebene',
      'Signale für stützenden Content',
    ],
    improves: [
      'Bewegung der Leser:innen zwischen Seiten',
      'Nützlichkeit interner Links',
      'Kohärenz des Themenclusters',
      'Sichtbarkeit schwacher Pfade',
    ],
    prepares: [
      'Link-Einschätzung',
      'Pfad-Review',
      'Notizen zur Ankerqualität',
      'Manuelle Prüfungen des Website-Graphen',
    ],
    surfaces: [
      'Fehlende Links für den nächsten Schritt',
      'Generische oder schwache Anker',
      'Ablenkende Links',
      'Seiten, die stärkere Cluster-Stützung brauchen könnten',
    ],
    ioH2: 'Womit Leo arbeitet und was er liefert.',
    worksFrom: [
      'Seitenlinks',
      'Ankertext',
      'Seitenstruktur',
      'Intentionssignale',
      'Signale aus dem Content-Inventar',
    ],
    produces: [
      'Beziehungs-Review',
      'Einschätzung der internen Verlinkung',
      'Notizen zur Ankerqualität',
      'Lücken bei Leserpfaden',
      'Manuelle Prüfungen des Website-Graphen',
    ],
    scenarios: [
      {
        title: 'Eine Seite wirkt isoliert.',
        description: 'Leo prüft, ob sie die Links und Pfade hat, die eine verbundene Seite haben sollte.',
      },
      {
        title: 'Links existieren, helfen der Leserin aber nicht.',
        description: 'Er prüft Ankertext und Platzierung auf echten Nutzen, nicht nur auf Vorhandensein.',
      },
      {
        title: 'Ein Themencluster braucht stärkere Verbindungen.',
        description: 'Leo übergibt Zara ein Beziehungs-Review, das sie gegen die Cluster-Abdeckung prüfen kann.',
      },
      {
        title: 'Ein Conversion-Pfad ist unklar.',
        description: 'Er markiert, wo der Seite ein klarer Link zum nächsten Schritt für die Leserin fehlt.',
      },
      {
        title: 'Die Seite hat ablenkende Links.',
        description: 'Leo macht Links sichtbar, die die Aufmerksamkeit vom Seitenzweck wegziehen.',
      },
      {
        title: 'Link-Empfehlungen brauchen Quellkontext.',
        description: 'Er gibt Felix einen Ausgangspunkt auf Seitenebene, bevor ein tieferes Pfad-Review folgt.',
      },
    ],
    boundaryH2: 'Leo prüft die Pfade. Redakteur:innen entscheiden, welche Links sich ändern.',
    boundaryPara:
      'Leo fügt keine Links hinzu, entfernt keine, schreibt keine Anker um und veröffentlicht keine Änderungen. Er zeigt, was ein Review braucht.',
    boundaryChecklist: [
      'Leo prüft die auf der Seite sichtbaren Links, er fügt nie selbst Links hinzu oder entfernt sie.',
      'Sein Review deckt die Seitenebene ab, nicht einen bestätigten websiteweiten Verwaisungs- oder Crawl-Status.',
      'Vorschläge zu Ankern und Pfaden sind für Redakteur:innen zur Anwendung gedacht, keine automatischen Änderungen.',
      'Verlinkte Seiten werden vermerkt, nicht abgerufen und geprüft, als hätte Leo sie gelesen.',
    ],
    willNot: [
      { color: 'red', text: 'Ankertext automatisch umschreiben' },
      { color: 'red', text: 'Links hinzufügen oder entfernen' },
      { color: 'red', text: 'Websiteweiten Verwaisungsstatus ohne Website-Daten bestätigen' },
      { color: 'red', text: 'Verlinkte Seiten abrufen, als wären sie geprüft' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
    ],
    relatedH2: 'Workers, mit denen Leo zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrahiert Links und Seitensignale, die Leo prüft.',
        outputLabel: 'Seitensignale',
        ctaLabel: 'Wie Patrick inspiziert',
      },
      {
        id: 'topical_authority',
        description: 'Prüft die Stützung des Themenclusters.',
        outputLabel: 'Abdeckungs-Review',
        ctaLabel: 'Wie Zara prüft',
      },
      {
        id: 'internal_link_pathway',
        description: 'Prüft interne Link-Pfade im Detail.',
        outputLabel: 'Pfad-Review',
        ctaLabel: 'Wie Felix prüft',
      },
    ],
    ctaH2: 'Die Seite mit dem größeren Content-System verbinden.',
    ctaPara:
      'Leo hilft Redakteur:innen zu erkennen, ob die Seite nützliche Links, klare Anker und einen Leserpfad hat, dem es sich zu folgen lohnt.',
    guidanceFooterLabel: 'BEZIEHUNGSSTATUS',
    guidanceFooterValue: 'Review nötig · Pfadlücken gefunden',
  },

  review_queue: {
    seoTitle: 'Review-Queue-Worker | WordPresto',
    metaDescription:
      'Riley verwandelt vorgeschlagene Änderungen in strukturierte Review-Elemente und zeigt, was eine menschliche Entscheidung braucht, warum es wichtig ist und welche Handlung möglich ist.',
    h1: 'Aus vorgeschlagenen Änderungen Entscheidungen machen, die eine Redakteurin verwalten kann.',
    heroPara1:
      'Ein Content-Review kann Dutzende Befunde erzeugen. Ohne Queue werden diese Befunde zu Rauschen: unklare Priorität, kein Entscheidungsstatus, keine Zuständigkeit und kein Weg zur Freigabe. Riley verwandelt vorgeschlagene Änderungen in strukturierte Review-Elemente. Jedes Element zeigt, was eine menschliche Entscheidung braucht, warum es wichtig ist und welche Handlung möglich ist.',
    heroPara2:
      'Für Content-Analyse, Änderungs-Review, Freigabe-Workflows und jede Seite, bei der mehrere Workers Probleme angemerkt haben.',
    problemEyebrow: 'Wo Review-Workflows schiefgehen',
    problemH2: 'Befunde sind nicht dasselbe wie Entscheidungen.',
    problemPara:
      'Ein Seiten-Audit kann nützliche Empfehlungen erzeugen, aber die Redakteurin muss trotzdem wissen, was sie freigeben, ablehnen, zurückstellen oder untersuchen soll. Ohne diese Ebene wirkt der Workflow beschäftigt, aber nicht operativ. Riley macht aus Befunden eine Queue, die das Team abarbeiten kann.',
    problemAnnotation: '↘ die Entscheidungen organisieren, nicht nur die Befunde',
    beforeStamp: 'Befundhaufen',
    beforeHtml: `<p>Mehrere Workers haben Probleme auf der Seite angemerkt, aber es gibt keinen gemeinsamen Überblick, was eine Entscheidung braucht oder in welcher Reihenfolge.</p>`,
    beforeTags: ['Keine Priorität', 'Kein Entscheidungsstatus', 'Keine Zuständigkeit', 'Beschäftigt, aber festgefahren'],
    beforeNote: 'das Review wirkt aktiv, bringt aber nichts hervor',
    afterStamp: 'Review-Queue',
    afterHtml: `<p>Riley organisiert die Befunde zu Entscheidungselementen, jedes mit Begründung und den für die Redakteurin verfügbaren Handlungen.</p>`,
    afterTags: ['Elemente priorisiert', 'Entscheidungen ausstehend', 'Keine Bearbeitungen angewandt', 'Bereit für redaktionelle Handlung'],
    afterNote: 'das Team kann es der Reihe nach abarbeiten',
    helpsEyebrow: 'Wie dieser Worker hilft',
    helpsH2: 'Eine Queue-Ebene zwischen Worker-Befunden und menschlicher Freigabe.',
    helpsPara:
      'Riley entscheidet nicht für die Redakteurin. Er organisiert Befunde zu prüfbaren Elementen, damit Redakteur:innen Entscheidungen treffen können, ohne den Kontext zu verlieren.',
    checks: [
      'Vorgeschlagene Änderungen von Review-Workers',
      'Benötigter Entscheidungstyp',
      'Priorität und betroffener Bereich',
      'Ob mehr Belege nötig sind',
      'Ob ein Element freigegeben, abgelehnt, zurückgestellt oder zugewiesen werden sollte',
    ],
    improves: [
      'Klarheit des Review-Workflows',
      'Redaktioneller Durchsatz',
      'Nachverfolgung von Entscheidungen',
      'Bereitschaft für die menschliche Freigabe',
    ],
    prepares: [
      'Review-Queue',
      'Ausstehende Entscheidungselemente',
      'Begründung der Elemente',
      'Verfügbare redaktionelle Handlungen',
    ],
    surfaces: [
      'Elemente, die eine Freigabe brauchen',
      'Elemente, die mehr Belege brauchen',
      'Elemente, die zurückgestellt werden sollten',
      'Elemente mit unklarer Zuständigkeit oder Priorität',
    ],
    ioH2: 'Womit Riley arbeitet und was er liefert.',
    worksFrom: [
      'Sichere Änderungspläne',
      'Worker-Befunde',
      'Vorgeschlagene Änderungen',
      'Beleg- und Risikosignale',
      'Kontext des Seiten-Reviews',
    ],
    produces: [
      'Review-Queue',
      'Entscheidungselemente',
      'Prioritätskennzeichnungen',
      'Review-Begründung',
      'Ausstehende Handlungsstatus',
    ],
    scenarios: [
      {
        title: 'Eine Seite hat viele Empfehlungen.',
        description: 'Riley organisiert sie zu einer Queue, die die Redakteurin der Reihe nach abarbeiten kann.',
      },
      {
        title: 'Die Redakteurin braucht Entscheidungsoptionen.',
        description: 'Er zeigt, welche Handlung für jedes Element möglich ist: freigeben, ablehnen, zurückstellen oder zuweisen.',
      },
      {
        title: 'Eine Review-Sitzung wird unübersichtlich.',
        description: 'Riley bringt Struktur zurück, indem er lose Befunde in nachverfolgte Elemente verwandelt.',
      },
      {
        title: 'Mehrere Workers haben verwandte Probleme angemerkt.',
        description: 'Er gruppiert sie, damit die Redakteurin das Gesamtbild sieht, nicht verstreute Notizen.',
      },
      {
        title: 'Eine Seite bewegt sich auf die Freigabe zu.',
        description: 'Riley gibt Dana einen klaren Überblick, welche Queue-Elemente noch ungelöst sind.',
      },
      {
        title: 'Das Team braucht eine saubere Übergabe.',
        description: 'Er hält den Queue-Status sichtbar, damit zwischen den Sitzungen nichts verloren geht.',
      },
    ],
    boundaryH2: 'Riley organisiert Entscheidungen. Er trifft sie nicht.',
    boundaryPara:
      'Riley gibt Änderungen nicht frei, bearbeitet keinen Content, wendet keine Korrekturen an und veröffentlicht nicht. Er koordiniert die Review-Queue, damit Menschen entscheiden können.',
    boundaryChecklist: [
      'Riley organisiert vorgeschlagene Änderungen zu einer Queue, er gibt sie nie selbst frei oder lehnt sie ab.',
      'Prioritätskennzeichnungen sind ein Ausgangspunkt für Redakteur:innen, keine endgültige Rangfolge.',
      'Ungelöste Elemente bleiben in der Queue sichtbar, statt stillschweigend gestrichen zu werden.',
      'Endgültige Entscheidungen und Content-Änderungen bleiben bei der Redakteurin und dem zuständigen Worker.',
    ],
    willNot: [
      { color: 'red', text: 'Elemente automatisch freigeben oder ablehnen' },
      { color: 'red', text: 'Content-Änderungen anwenden' },
      { color: 'red', text: 'Veröffentlichen oder in ein CMS schreiben' },
      { color: 'red', text: 'Ungelöste Review-Elemente verbergen' },
      { color: 'red', text: 'Menschliche Entscheidungsfindung ersetzen' },
    ],
    relatedH2: 'Workers, mit denen Riley zusammenarbeitet.',
    relatedWorkerIds: [
      {
        id: 'safe_change_planner',
        description: 'Verwandelt Befunde in vorgeschlagene Änderungen, die Riley in die Queue aufnehmen kann.',
        outputLabel: 'Änderungsplan',
        ctaLabel: 'Wie Sam plant',
      },
      {
        id: 'review',
        description: 'Fasst Befunde und Review-Maßnahmen für die Redakteurin zusammen.',
        outputLabel: 'Review-Zusammenfassung',
        ctaLabel: 'Wie Helen zusammenfasst',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Prüft, ob ungelöste Queue-Elemente die Freigabe blockieren.',
        outputLabel: 'Freigabe-Gate',
        ctaLabel: 'Wie Dana entscheidet',
      },
    ],
    ctaH2: 'Review-Arbeit handhabbar machen.',
    ctaPara:
      'Riley verwandelt Worker-Befunde in strukturierte Entscheidungen, damit Redakteur:innen von der Analyse zur Handlung übergehen können.',
    guidanceFooterLabel: 'QUEUE-STATUS',
    guidanceFooterValue: 'Review ausstehend · Entscheidungen erforderlich',
  },
};
