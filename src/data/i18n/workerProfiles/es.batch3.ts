import type { WorkerProfileTranslatable } from './types';

export const esBatch3: Record<string, WorkerProfileTranslatable> = {
  clarity_proofing: {
    seoTitle: 'Worker de Claridad y Corrección | WordPresto',
    metaDescription:
      'Esme corrige gramática, claridad, tono y redacción sensible al riesgo, y produce sugerencias solo para revisión, de modo que los editores puedan mejorar el texto sin ceder el control a la automatización.',
    h1: 'Deja el texto más limpio antes de que llegue a revisión.',
    heroPara1:
      'Una buena edición no es solo corregir erratas. Es saber dónde se desvía una frase, dónde una expresión suena casi bien, dónde el tono ha resbalado y dónde el lector tiene que esforzarse de más. Esme corrige el propio texto: gramática, ortografía, puntuación, claridad, concisión, legibilidad, tono, coherencia, repetición, elección de palabras y redacción sensible al riesgo. Produce sugerencias solo para revisión, de modo que los editores puedan mejorar el texto sin ceder el control de la página a la automatización.',
    heroPara2:
      'Para flujos de redacción, revisiones de contenido, actualizaciones de página, ediciones de cliente y comprobaciones editoriales finales antes de la aprobación.',
    problemEyebrow: 'Dónde fallan los flujos de edición',
    problemH2: 'Una página puede ser correcta en los hechos y aun así ser difícil de leer.',
    problemPara:
      'La mayoría del contenido no falla porque cada frase esté rota. Falla porque se acumulan pequeños problemas: una expresión vaga aquí, una frase larga allá, palabras repetidas, transiciones débiles, ruido de puntuación, un tono que se desvía y una complejidad innecesaria. Esme detecta los problemas a nivel de lenguaje antes de que se conviertan en fricción de revisión.',
    problemAnnotation: '↘ corrige el texto y después apruébalo',
    beforeStamp: 'Borrador en bruto',
    beforeHtml: `<p>La página se ha diseñado para ayudar a los usuarios a entender la oferta de servicio y ofrece varios ejemplos distintos que pueden resultar útiles para las personas que están valorando hacer una reserva.</p>`,
    beforeTags: ['Frase larga', 'Redacción vaga', 'Ritmo plano', 'Lenguaje de conversión débil'],
    beforeNote: 'esto hace que la página se sienta inacabada',
    afterStamp: 'Después de Esme',
    afterHtml: `<p>La página explica el servicio con claridad, da ejemplos prácticos y ayuda a los posibles clientes a decidir si reservar.</p>`,
    afterTags: ['Frase más clara', 'Menos repetición', 'Más foco en el lector', 'Ritmo más limpio'],
    afterNote: 'los editores pueden revisar la sugerencia, no reescribir desde cero',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una pasada de corrección que mejora el texto sin quitarle el control al editor.',
    helpsPara:
      'Esme revisa el lenguaje a nivel de frase, párrafo y página. Señala los problemas que hacen que el texto sea más difícil de leer, menos coherente, menos pulido o más arriesgado de lo necesario. No reescribe la página por el editor. Da sugerencias concretas y revisables para que una persona pueda aceptar, rechazar o adaptar el cambio.',
    checks: [
      'Gramática, ortografía y puntuación',
      'Claridad, concisión y extensión de las frases',
      'Repetición, redacción débil y elección de palabras',
      'Tono, ajuste de voz y coherencia',
      'Redacción sensible al riesgo y exageración',
    ],
    improves: [
      'La legibilidad antes de que la página llegue a la revisión final',
      'La precisión a nivel de frase sin cambiar el significado aprobado',
      'La coherencia entre secciones, borradores y actualizaciones de página',
    ],
    prepares: [
      'Una revisión estructurada de claridad y corrección',
      'Sugerencias a nivel de frase para revisión humana',
      'Una lista de problemas de redacción que necesitan criterio editorial',
    ],
    surfaces: [
      'Frases técnicamente correctas pero forzadas',
      'Frases que necesitan simplificarse',
      'Desviaciones de tono respecto a la voz elegida o al propósito de la página',
      'Afirmaciones arriesgadas, exageraciones o redacción poco clara',
    ],
    ioH2: 'De qué parte Esme, y qué produce.',
    worksFrom: [
      'El texto de la página o del borrador',
      'El contenido del Canvas de redacción',
      'El resultado de la reescritura de secciones',
      'Señales de voz y estilo',
      'Señales de la revisión de calidad del borrador',
    ],
    produces: [
      'Revisión de claridad',
      'Sugerencias de gramática y puntuación',
      'Señalizaciones de concisión y legibilidad',
      'Notas de tono y coherencia',
      'Avisos de redacción sensible al riesgo',
    ],
    scenarios: [
      {
        title: 'Una página está casi lista pero todavía se nota en bruto.',
        description:
          'Esme encuentra la fricción a nivel de lenguaje: frases forzadas, expresiones repetidas, redacción poco clara y problemas de puntuación.',
      },
      {
        title: 'Un borrador lo han editado varias personas.',
        description: 'Comprueba la coherencia para que la página no parezca cosida a partir de voces distintas.',
      },
      {
        title: 'Un cliente ha hecho cambios manuales en el texto.',
        description:
          'Esme revisa la nueva redacción sin deshacer la intención del cliente ni reescribir la página en silencio.',
      },
      {
        title: 'Una página necesita una pasada de corrección al estilo Grammarly dentro del flujo de Word Presto.',
        description: 'Da sugerencias prácticas a nivel de frase mientras el editor mantiene el control.',
      },
      {
        title: 'Un tema regulado o delicado necesita una redacción cuidadosa.',
        description:
          'Esme señala la exageración, la redacción arriesgada y el lenguaje que pueda necesitar una comprobación humana de cumplimiento.',
      },
      {
        title: 'Un borrador final avanza hacia la aprobación.',
        description: 'Detecta pequeños problemas antes de que la Puerta de Aprobación Editorial revise la página.',
      },
    ],
    boundaryH2: 'Esme corrige el texto. Los editores deciden qué cambia.',
    boundaryPara:
      'Una revisión de claridad no es una reescritura automática. Esme produce sugerencias, señalizaciones y notas de revisión. El editor decide qué aceptar, qué rechazar y qué necesita una edición humana distinta.',
    boundaryChecklist: [
      'Esme sugiere, nunca aplica.',
      'Las sugerencias están pensadas para revisarse dentro del flujo editorial.',
      'Las notas de tono y claridad apoyan el criterio humano, no lo sustituyen.',
      'La redacción sensible al riesgo se señala para revisión, no se trata como aprobación legal o de cumplimiento.',
    ],
    willNot: [
      { color: 'red', text: 'Editar o reescribir contenido en directo' },
      { color: 'red', text: 'Aplicar sugerencias sin aprobación humana' },
      { color: 'red', text: 'Publicar, actualizar WordPress o escribir en ningún CMS' },
      { color: 'red', text: 'Llamar a un proveedor externo para esta pasada de corrección local' },
      { color: 'red', text: 'Inventar hechos, evidencia o normas de marca' },
    ],
    relatedH2: 'Workers junto a los que trabaja Esme.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Comprueba si el texto encaja con la voz configurada antes de que la corrección ajuste el lenguaje.',
        outputLabel: 'Revisión de voz',
        ctaLabel: 'Cómo comprueba Helena',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Comprueba si el borrador cubre los cambios aprobados y tiene riesgos de calidad.',
        outputLabel: 'Revisión de calidad del borrador',
        ctaLabel: 'Cómo revisa Quinn',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Revisa si el contenido está listo para la aprobación editorial humana.',
        outputLabel: 'Puerta de aprobación',
        ctaLabel: 'Cómo decide Dana',
      },
    ],
    ctaH2: 'Deja el texto más limpio antes de que llegue a revisión.',
    ctaPara:
      'Añade a Esme a tu flujo de trabajo y cada página recibirá una pasada de corrección cuidadosa antes de llegar a la aprobación final.',
    guidanceFooterLabel: 'ESTADO DE LA CORRECCIÓN',
    guidanceFooterValue: 'Sugerencias listas · a la espera del editor',
  },

  cannibalisation_overlap: {
    seoTitle: 'Worker de Canibalización y Solapamiento | WordPresto',
    metaDescription:
      'Cleo revisa una página en busca de conflicto de intención, riesgo de solapamiento y un rol de contenido poco claro, y ayuda a los editores a decidir si conviene afinarla, reforzarla, consolidarla o revisarla manualmente frente a otras.',
    h1: 'Encuentra las páginas que intentan hacer demasiados trabajos a la vez.',
    heroPara1:
      'La canibalización de contenido no es solo un problema de posicionamiento a escala de sitio. Puede empezar dentro de una sola página: intención mixta, un rol editorial poco claro, unos metadatos que prometen algo distinto, secciones escasas que pertenecen a otro sitio, o un texto que compite con otro activo probable. Cleo revisa una página en busca de conflicto de intención, riesgo de solapamiento y un rol de contenido poco claro. Ayuda a los editores a decidir si la página debería afinarse, reforzarse, consolidarse o revisarse manualmente frente a otras páginas.',
    heroPara2: 'Para revisiones de SEO, auditorías de contenido, planificación temática y flujos de mejora de páginas.',
    problemEyebrow: 'Dónde empieza la canibalización',
    problemH2: 'Las páginas compiten entre sí cuando su rol no está claro.',
    problemPara:
      'Una página puede intentar ser una guía, una página de servicio, una página de comparación y una página de ventas al mismo tiempo. O puede contener una sección escasa que debería ser un artículo de apoyo aparte. O su título y su meta description pueden prometer una intención que el cuerpo del texto no satisface. Cleo revisa esas señales de solapamiento antes de que el sitio se vuelva más difícil de gestionar.',
    problemAnnotation: '↘ aclara el rol de la página',
    beforeStamp: 'Riesgo de solapamiento',
    beforeHtml: `<p>La página presenta el servicio, compara alternativas, responde preguntas frecuentes amplias y apunta a un título tipo guía.</p>`,
    beforeTags: ['Intención mixta', 'Rol poco claro', 'Secciones de apoyo escasas', 'Desajuste con la promesa del SERP'],
    beforeNote: 'la página puede competir con contenido futuro',
    afterStamp: 'Rol aclarado',
    afterHtml: `<p>La página se posiciona como una página de decisión de servicio, y el contenido de guía se traslada a activos de apoyo.</p>`,
    afterTags: ['Rol de página claro', 'Intención más limpia', 'Mejor planificación de clústeres', 'Comprobaciones manuales indicadas'],
    afterNote: 'el editor sabe para qué sirve esta página',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una revisión de canibalización que es honesta sobre sus límites.',
    helpsPara:
      'Cleo revisa las señales a nivel de página ya disponibles en el flujo de trabajo. Puede señalar indicadores de riesgo y comprobaciones manuales, pero no afirma detectar la canibalización completa entre todo el sitio a menos que existan datos de rastreo y de posicionamiento.',
    checks: [
      'Conflicto de intención dentro de la página',
      'Desajuste entre la promesa de los metadatos y el contenido',
      'Rol editorial poco claro',
      'Secciones escasas que pueden pertenecer a otro sitio',
      'Riesgo de solapamiento a nivel de página',
      'Comprobaciones manuales entre páginas necesarias',
    ],
    improves: [
      'La claridad del propósito de la página',
      'La planificación de clústeres temáticos',
      'Las decisiones de consolidación de contenido',
      'La confianza antes de reescribir o ampliar una página',
    ],
    prepares: [
      'Revisión de riesgo de canibalización',
      'Rol de página recomendado',
      'Comprobaciones manuales de solapamiento',
      'Próxima acción sugerida',
    ],
    surfaces: [
      'Páginas que intentan servir intenciones que compiten entre sí',
      'Secciones que podrían merecer su propia página',
      'Metadatos que pueden competir con otro activo',
      'Riesgos que necesitan confirmación de rastreo, palabras clave o SERP',
    ],
    ioH2: 'De qué parte Cleo, y qué produce.',
    worksFrom: [
      'La evaluación de intención',
      'Señales del inventario de contenido',
      'La revisión de metadatos',
      'Señales de enlaces y relaciones',
      'La estructura y profundidad de la página',
    ],
    produces: [
      'Revisión de riesgo de solapamiento',
      'Rol de página recomendado',
      'Notas de conflicto de intención',
      'Comprobaciones manuales entre páginas',
      'Sugerencias de consolidación',
    ],
    scenarios: [
      {
        title: 'Una página se nota sin foco.',
        description: 'Cleo comprueba si la página está mezclando intenciones o intentando servir demasiados propósitos.',
      },
      {
        title: 'Sospechas canibalización de palabras clave.',
        description: 'Revisa el riesgo a nivel de página y enumera lo que necesita confirmación entre páginas.',
      },
      {
        title: 'Los metadatos y el contenido no coinciden.',
        description:
          'Cleo señala cuándo el título o la meta description prometen una página distinta de la que ofrece el cuerpo del texto.',
      },
      {
        title: 'Un clúster de contenido se está volviendo confuso.',
        description: 'Ayuda a identificar si una página debería afinarse, dividirse, reforzarse o consolidarse.',
      },
      {
        title: 'Una sección se nota demasiado escasa.',
        description:
          'Cleo señala el contenido que podría funcionar mejor como página de apoyo o como destino de enlace interno.',
      },
      {
        title: 'Una reescritura podría empeorar el solapamiento.',
        description: 'Ayuda a los editores a proteger el rol de la página antes de que empiecen los cambios de texto.',
      },
    ],
    boundaryH2: 'Cleo señala el riesgo. Los editores deciden la estrategia de contenido.',
    boundaryPara:
      'Cleo no fusiona páginas, redirige URLs, elimina contenido ni declara canibalización confirmada a escala de sitio a partir de evidencia de una sola página. Da al editor una revisión de riesgo estructurada y comprobaciones manuales.',
    boundaryChecklist: [
      'Cleo señala el riesgo de solapamiento, nunca fusiona ni elimina páginas.',
      'Las afirmaciones de canibalización entre páginas solo se hacen con datos de rastreo o de posicionamiento que las respalden.',
      'Los roles de página recomendados son propuestas para revisión editorial, no cambios automáticos.',
      'Las comprobaciones manuales se enumeran con claridad para que los editores sepan qué falta confirmar.',
    ],
    willNot: [
      { color: 'red', text: 'Fusionar, podar o redirigir páginas' },
      { color: 'red', text: 'Confirmar canibalización entre páginas sin datos que la respalden' },
      { color: 'red', text: 'Reescribir títulos o contenido automáticamente' },
      { color: 'red', text: 'Eliminar secciones o páginas' },
      { color: 'red', text: 'Publicar o aplicar cambios en un CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Cleo.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Identifica la intención del lector que Cleo comprueba en busca de conflicto.',
        outputLabel: 'Evaluación de intención',
        ctaLabel: 'Cómo identifica Yuna',
      },
      {
        id: 'topical_authority',
        description: 'Revisa la profundidad y el apoyo del clúster temático.',
        outputLabel: 'Revisión de cobertura',
        ctaLabel: 'Cómo revisa Zara',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Ayuda a convertir los hallazgos de solapamiento en recomendaciones de mantenimiento.',
        outputLabel: 'Revisión de mantenimiento',
        ctaLabel: 'Cómo ayuda Hugo',
      },
    ],
    ctaH2: 'Aclara el rol antes de que la página compita consigo misma.',
    ctaPara:
      'Cleo ayuda a los editores a ver el riesgo de solapamiento, la intención mixta y las preguntas de consolidación antes de que el contenido avance.',
    guidanceFooterLabel: 'ESTADO DEL SOLAPAMIENTO',
    guidanceFooterValue: 'Necesita revisión · rol poco claro',
  },

  content_decay: {
    seoTitle: 'Worker de Desgaste de Contenido y Prioridad de Actualización | WordPresto',
    metaDescription:
      'Faye revisa las señales de vigencia y el riesgo de desgaste del contenido, y ayuda a los editores a decidir si una página sigue vigente, necesita seguimiento, debería actualizarse o requiere una revisión urgente.',
    h1: 'Sabe cuándo una página empieza a perder fuelle.',
    heroPara1:
      'Algunas páginas fallan despacio. El texto sigue ahí, la URL sigue cargando, pero la evidencia es antigua, el título promete algo actual, los ejemplos se notan desfasados o el tema ha avanzado. Faye revisa las señales de vigencia y el riesgo de desgaste del contenido. Ayuda a los editores a decidir si una página sigue vigente, necesita seguimiento, debería actualizarse o requiere una revisión urgente.',
    heroPara2:
      'Para auditorías de contenido, planificación de actualizaciones, mantenimiento de SEO y páginas donde la antigüedad, la precisión o la actualidad importan.',
    problemEyebrow: 'Dónde empieza el desgaste del contenido',
    problemH2: 'Una página puede parecer terminada mientras su utilidad se va apagando.',
    problemPara:
      'El desgaste del contenido suele ser sutil. Una fecha en el título, un ejemplo antiguo, una afirmación sin respaldo, una comparación desfasada o un tipo de página que necesita actualizaciones periódicas pueden reducir poco a poco la confianza y el rendimiento. Faye busca las señales que indican a los editores que una página necesita atención antes de que se convierta en un problema mayor de posicionamiento o de credibilidad.',
    problemAnnotation: '↘ detecta el desgaste antes de que la página caiga',
    beforeStamp: 'Contenido desactualizado',
    beforeHtml: `<p>El título promete una guía actual, pero los ejemplos, la evidencia y las recomendaciones no se han revisado recientemente.</p>`,
    beforeTags: ['Promesa temporal', 'Ejemplos antiguos', 'Vigencia de la evidencia débil', 'Sin ritmo de mantenimiento'],
    beforeNote: 'la página puede haber dejado de merecer confianza',
    afterStamp: 'Actualización planificada',
    afterHtml: `<p>La página queda marcada para revisión, se señalan los ejemplos desactualizados y se recomienda un ritmo de mantenimiento práctico.</p>`,
    afterTags: ['Estado claro', 'Prioridad útil', 'Revisión humana', 'Sin actualización falsa'],
    afterNote: 'el editor sabe qué necesita atención',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de vigencia sin fingir que se actualiza la página.',
    helpsPara:
      'Faye revisa las señales de la página disponibles en memoria e identifica el contenido que puede necesitar actualización. No edita, programa, publica ni inventa hechos actualizados. Da al editor una señal de mantenimiento clara.',
    checks: [
      'Lenguaje temporal en títulos, metadatos y texto',
      'Vigencia de la evidencia',
      'Sensibilidad del tipo de contenido a la antigüedad',
      'Desajuste entre la promesa y el SERP',
      'Indicadores de ritmo de mantenimiento',
      'Riesgos de confianza por información desactualizada',
    ],
    improves: [
      'La planificación del mantenimiento de contenido',
      'La priorización de actualizaciones',
      'La visibilidad editorial de las páginas que envejecen',
      'La confianza antes de actualizar una página o dejarla como está',
    ],
    prepares: [
      'Revisión de prioridad de actualización',
      'Ritmo de mantenimiento recomendado',
      'Lista de comprobación de señales de desgaste',
      'Avisos de revisión humana',
    ],
    surfaces: [
      'Afirmaciones o ejemplos desactualizados',
      'Promesas del año en curso que necesitan confirmación',
      'Páginas que deberían vigilarse',
      'Contenido que puede necesitar revisión urgente',
    ],
    ioH2: 'De qué parte Faye, y qué produce.',
    worksFrom: [
      'El título y los metadatos de la página',
      'El texto de la página',
      'Señales de la revisión de evidencia',
      'Señales del inventario de contenido',
      'Señales de intención y formato',
    ],
    produces: [
      'Revisión de vigencia',
      'Estado de riesgo de desgaste',
      'Prioridad de actualización',
      'Ritmo de mantenimiento',
      'Comprobaciones manuales',
    ],
    scenarios: [
      {
        title: 'Una página contiene fechas, tendencias o recomendaciones actuales.',
        description: 'Faye comprueba si la página se sigue sintiendo lo bastante actual como para ser de confianza.',
      },
      {
        title: 'Una página ha bajado de rendimiento.',
        description: 'Ayuda a identificar si la vigencia puede formar parte del problema.',
      },
      {
        title: 'Una auditoría de contenido necesita prioridades de actualización.',
        description: 'Faye ayuda a separar las páginas que están bien de las que necesitan atención.',
      },
      {
        title: 'Un título promete algo actualizado.',
        description: 'Comprueba si el cuerpo del texto realmente respalda esa promesa.',
      },
      {
        title: 'Una página incluye evidencia, ejemplos o estadísticas.',
        description: 'Faye señala los elementos que pueden necesitar verificación o sustitución.',
      },
      {
        title: 'Un flujo de mantenimiento necesita estructura.',
        description: 'Recomienda si conviene vigilar, actualizar o revisar la página con urgencia.',
      },
    ],
    boundaryH2: 'Faye señala el riesgo de vigencia. Los editores deciden la actualización.',
    boundaryPara:
      'Faye no actualiza hechos, reescribe secciones, programa actualizaciones ni publica cambios. Revisa las señales disponibles y le dice al editor qué necesita atención.',
    boundaryChecklist: [
      'Faye señala el riesgo de vigencia, nunca reescribe ni actualiza el contenido ella misma.',
      'Las señales de vigencia se revisan a partir de lo que ya existe, no de hechos o fechas inventados.',
      'La prioridad de actualización es una recomendación para la planificación editorial, no un calendario automático.',
      'El riesgo de desgaste inferido se señala para revisión, no se trata como pérdida de posicionamiento confirmada.',
    ],
    willNot: [
      { color: 'red', text: 'Reescribir contenido desactualizado automáticamente' },
      { color: 'red', text: 'Inventar ejemplos, fechas o evidencia nuevos' },
      { color: 'red', text: 'Programar actualizaciones' },
      { color: 'red', text: 'Publicar o aplicar cambios en un CMS' },
      { color: 'red', text: 'Tratar el riesgo de vigencia inferido como pérdida de posicionamiento confirmada' },
    ],
    relatedH2: 'Workers junto a los que trabaja Faye.',
    relatedWorkerIds: [
      {
        id: 'content_inventory',
        description: 'Clasifica la página como activo de contenido e identifica señales útiles de inventario.',
        outputLabel: 'Revisión de inventario',
        ctaLabel: 'Cómo clasifica Nora',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Revisa si el contenido débil o desactualizado debería actualizarse, consolidarse o podarse.',
        outputLabel: 'Revisión de mantenimiento',
        ctaLabel: 'Cómo revisa Hugo',
      },
      {
        id: 'content_refresh_brief',
        description: 'Convierte los hallazgos de la actualización en un brief de actualización de contenido estructurado.',
        outputLabel: 'Brief de actualización',
        ctaLabel: 'Cómo planifica Iris',
      },
    ],
    ctaH2: 'Mantén visibles las páginas que envejecen antes de que se conviertan en un problema.',
    ctaPara:
      'Faye ayuda a los editores a detectar el desgaste del contenido, la prioridad de revisión y el ritmo de mantenimiento antes de que la página pierda confianza.',
    guidanceFooterLabel: 'ESTADO DE VIGENCIA',
    guidanceFooterValue: 'Actualización recomendada · revisión necesaria',
  },

  topical_authority: {
    seoTitle: 'Worker de Autoridad Temática y Carencias de Cobertura | WordPresto',
    metaDescription:
      'Zara revisa las señales de cobertura temática y las carencias de contenido, y ayuda a los editores a ver si una página se ve sólida, necesita apoyo, está incompleta o requiere un plan de contenido más amplio.',
    h1: 'Comprueba si la página tiene suficiente apoyo temático.',
    heroPara1:
      'Una página puede cubrir su tema con claridad y aun así estar dentro de un clúster de contenido débil. Puede carecer de páginas de apoyo, no cubrir subtemas relacionados, estar demasiado alejada de su hub, o tener un rol temático que el sitio no ha construido de forma adecuada a su alrededor. Zara revisa las señales de cobertura temática y las carencias de contenido. Ayuda a los editores a ver si una página se ve sólida, necesita apoyo, está incompleta o requiere un plan de contenido más amplio.',
    heroPara2:
      'Para auditorías de SEO, planificación de clústeres temáticos, briefs de contenido y páginas que necesitan señales de autoridad más sólidas.',
    problemEyebrow: 'Dónde se debilita la autoridad temática',
    problemH2: 'Una buena página no siempre basta para hacer un tema sólido.',
    problemPara:
      'El rendimiento en búsqueda suele depender del sistema de contenido que rodea a la página. Puede que una página necesite explicaciones de apoyo, páginas de comparación, páginas de servicio, recursos con evidencia, enlaces internos o una ubicación más clara dentro del clúster temático. Zara revisa si la página parece bien respaldada o si está cargando sola con demasiada responsabilidad temática.',
    problemAnnotation: '↘ construye el tema alrededor de la página',
    beforeStamp: 'Apoyo débil',
    beforeHtml: `<p>La página cubre el tema principal, pero no hay recursos de apoyo evidentes, ni rutas internas, ni cobertura de subtemas relacionados.</p>`,
    beforeTags: ['Clúster escaso', 'Falta de apoyo', 'Contexto interno débil', 'Comprobaciones manuales necesarias'],
    beforeNote: 'la página trabaja sola',
    afterStamp: 'Cobertura mejorada',
    afterHtml: `<p>Se aclara el rol de la página y se enumeran las necesidades de contenido de apoyo para la planificación.</p>`,
    afterTags: ['Rol de página claro', 'Lista de carencias', 'Mejor plan de clúster', 'Decisión humana'],
    afterNote: 'el editor sabe qué construir después',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de cobertura temática antes de ampliar el contenido.',
    helpsPara:
      'Zara revisa la profundidad temática, el apoyo del clúster y las señales de cobertura que faltan a partir de la evidencia de página disponible. No crea páginas nuevas ni afirma tener un mapa temático completo de todo el sitio sin datos de rastreo y de proyecto.',
    checks: [
      'El rol temático y el propósito de la página',
      'Carencias en los subtemas de apoyo',
      'El apoyo de enlaces internos y de clúster',
      'La cobertura de intención',
      'Señales de riesgo de página huérfana',
      'Comprobaciones manuales de clúster temático necesarias',
    ],
    improves: [
      'La calidad de la planificación de contenido',
      'La estructura del clúster temático',
      'Las decisiones de apoyo interno',
      'La confianza antes de construir briefs o páginas nuevas',
    ],
    prepares: [
      'Revisión de carencias de cobertura',
      'Rol de página recomendado',
      'Ideas de contenido de apoyo',
      'Comprobaciones manuales de clúster',
    ],
    surfaces: [
      'Páginas de apoyo que faltan',
      'Cobertura temática escasa',
      'Apoyo de enlaces internos débil',
      'Conflictos o carencias de clúster que necesitan confirmación',
    ],
    ioH2: 'De qué parte Zara, y qué produce.',
    worksFrom: [
      'La evaluación de intención',
      'Señales de relación de contenido',
      'La revisión del inventario de contenido',
      'La estructura y profundidad de la página',
      'Señales de carencias de evidencia',
    ],
    produces: [
      'Revisión de cobertura',
      'Lista de carencias temáticas',
      'Rol de página recomendado',
      'Sugerencias de contenido de apoyo',
      'Comprobaciones manuales de clúster',
    ],
    scenarios: [
      {
        title: 'Una página necesita más autoridad temática.',
        description: 'Zara comprueba si el apoyo de contenido a su alrededor parece lo bastante sólido.',
      },
      {
        title: 'Estás planificando un clúster de contenido.',
        description: "Identifica las carencias de contenido de apoyo a partir del rol temático de la página.",
      },
      {
        title: 'Una página parece demasiado amplia.',
        description: 'Zara señala si los subtemas necesitan activos de apoyo independientes.',
      },
      {
        title: 'El enlazado interno se nota débil.',
        description: 'Comprueba si la página tiene suficiente apoyo de relación temática.',
      },
      {
        title: 'Un brief necesita mejor contexto temático.',
        description: 'Zara ayuda a definir qué más debería cubrir o con qué debería conectar el artículo o la página.',
      },
      {
        title: 'Search performance depende de la autoridad.',
        description: 'Da a los editores una visión más clara de la profundidad temática y las carencias de cobertura.',
      },
    ],
    boundaryH2: 'Zara revisa la cobertura. Los editores deciden el plan de contenido.',
    boundaryPara:
      'Zara no crea páginas, no construye clústeres automáticamente, no publica contenido nuevo ni afirma tener autoridad completa a escala de sitio a partir de la revisión de una sola página. Señala señales de cobertura y carencias de planificación.',
    boundaryChecklist: [
      'Zara señala las carencias de cobertura, nunca crea ni publica páginas ella misma.',
      'Las ideas de contenido de apoyo son sugerencias para la planificación, no briefs automáticos.',
      'Las afirmaciones sobre clústeres a escala de sitio solo se hacen con datos de proyecto o de rastreo que las respalden.',
      'Las comprobaciones manuales se enumeran con claridad para que los editores sepan qué falta confirmar.',
    ],
    willNot: [
      { color: 'red', text: 'Crear o publicar páginas de apoyo' },
      { color: 'red', text: 'Inventar un mapa temático completo' },
      { color: 'red', text: 'Confirmar cobertura de clúster a escala de sitio sin datos de proyecto' },
      { color: 'red', text: 'Reescribir la página automáticamente' },
      { color: 'red', text: 'Aplicar cambios en un CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Zara.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Aclara la intención del lector que Zara compara con la cobertura temática.',
        outputLabel: 'Evaluación de intención',
        ctaLabel: 'Cómo aclara Yuna',
      },
      {
        id: 'internal_linking',
        description: 'Revisa los enlaces y las rutas de lectura que apoyan la conexión temática.',
        outputLabel: 'Evaluación de enlaces',
        ctaLabel: 'Cómo revisa Leo',
      },
      {
        id: 'semantic_search_analyzer',
        description: 'Usa recuperación basada en vectores para encontrar carencias semánticas más profundas.',
        outputLabel: 'Revisión de cobertura semántica',
        ctaLabel: 'Cómo encuentra carencias Sema',
      },
    ],
    ctaH2: 'Construye contenido más sólido alrededor de la página.',
    ctaPara:
      'Zara ayuda a los editores a ver dónde una página necesita apoyo temático, activos relacionados o una mejor planificación de clúster.',
    guidanceFooterLabel: 'ESTADO DE COBERTURA',
    guidanceFooterValue: 'Necesita apoyo · carencias encontradas',
  },

  conversion_alignment: {
    seoTitle: 'Worker de Alineación de Conversión y CTA | WordPresto',
    metaDescription:
      'Diane revisa la alineación de conversión: la claridad del CTA, las señales de confianza, las carencias de prueba, el ajuste con la promesa de los metadatos y si el siguiente paso tiene sentido para la intención de la página.',
    h1: 'Comprueba si la página da al lector un siguiente paso claro.',
    heroPara1:
      'El contenido puede satisfacer la intención de búsqueda y aun así fallar comercialmente. La página puede explicar bien el tema pero enterrar la llamada a la acción, no tener señales de confianza, pedir la acción equivocada o crear una ruta de conversión que no encaja con la fase en la que está el lector. Diane revisa la alineación de conversión: la claridad del CTA, las señales de confianza, las carencias de prueba, el ajuste con la promesa de los metadatos y si el siguiente paso tiene sentido para la intención de la página.',
    heroPara2:
      'Para páginas de servicio, landing pages, contenido comercial, páginas de generación de leads y revisiones finales de página antes de la entrega.',
    problemEyebrow: 'Dónde se rompe la alineación de conversión',
    problemH2: 'Una página puede ser útil y aun así dejar al lector sin saber qué hacer.',
    problemPara:
      'El problema no suele ser la falta de un botón. Es la acción equivocada, una prueba débil, señales de confianza vagas, un momento poco claro o un siguiente paso que no coincide con el motivo por el que el lector llegó. Diane revisa si la página conduce a algún sitio con sentido.',
    problemAnnotation: '↘ alinea la intención con la acción',
    beforeStamp: 'Ruta débil',
    beforeHtml: `<p>La página explica el servicio, pero el CTA es genérico, la prueba es escasa y el siguiente paso aparece demasiado tarde.</p>`,
    beforeTags: ['CTA débil', 'Falta de prueba', 'Confianza baja', 'Momento inadecuado'],
    beforeNote: 'el lector no tiene un motivo claro para actuar',
    afterStamp: 'Ruta aclarada',
    afterHtml: `<p>La página aporta pruebas relevantes, un siguiente paso más claro y un CTA que encaja con la fase de decisión del lector.</p>`,
    afterTags: ['Más confianza', 'Acción clara', 'Ajuste de intención', 'Revisión humana'],
    afterNote: 'el editor puede mejorar la ruta',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de conversión sin fingir que se ejecutan experimentos.',
    helpsPara:
      'Diane revisa las señales de conversión ya visibles en la evidencia de la página. No ejecuta pruebas A/B, no accede a analítica ni reescribe el texto de ventas automáticamente. Da a los editores una revisión práctica de si la página apoya la acción.',
    checks: [
      'Presencia y claridad del CTA',
      'Alineación entre la intención y la acción',
      'Señales de confianza y prueba',
      'Ajuste con la promesa de los metadatos',
      'La ruta de decisión del lector',
      'Distracciones de conversión o siguientes pasos débiles',
    ],
    improves: [
      'La claridad de las páginas comerciales',
      'La ubicación y relevancia del CTA',
      'La generación de confianza antes de la acción',
      'La visibilidad editorial de las rutas de conversión débiles',
    ],
    prepares: [
      'Revisión de alineación de conversión',
      'Sugerencias de mejora del CTA',
      'Lista de carencias de señales de confianza',
      'Próxima acción recomendada',
    ],
    surfaces: [
      'CTA que faltan o son débiles',
      'Carencias de prueba',
      'Desajuste entre el CTA y la intención de la página',
      'Enlaces o secciones que distraen de la conversión',
    ],
    ioH2: 'De qué parte Diane, y qué produce.',
    worksFrom: [
      'La evaluación de intención',
      'La estructura de la página',
      'La revisión de metadatos',
      'Señales de evidencia y confianza',
      'Señales de rutas de enlazado',
    ],
    produces: [
      'Revisión de alineación de conversión',
      'Notas de claridad del CTA',
      'Lista de carencias de confianza',
      'Siguiente paso recomendado',
      'Hallazgos sobre la ruta de decisión',
    ],
    scenarios: [
      {
        title: 'Una página de servicio no está generando acción.',
        description: 'Diane comprueba si la página tiene una ruta clara y creíble hacia la consulta o la reserva.',
      },
      {
        title: 'Una página tiene tráfico pero pocos leads.',
        description: "Revisa si el siguiente paso coincide con la fase probable del lector.",
      },
      {
        title: 'Un CTA se nota genérico.',
        description: 'Diane comprueba si la acción es lo bastante concreta para el propósito de la página.',
      },
      {
        title: 'Las señales de confianza son escasas.',
        description: 'Señala la prueba, la tranquilidad o el contexto de credibilidad que faltan.',
      },
      {
        title: 'Una página mezcla información y ventas.',
        description: 'Diane ayuda a aclarar si la ruta de conversión apoya al lector o lo interrumpe.',
      },
      {
        title: 'Una página va a la revisión final.',
        description: 'Comprueba si el editor debería mejorar la ruta antes de la aprobación.',
      },
    ],
    boundaryH2: 'Diane revisa la ruta. Los editores deciden el cambio.',
    boundaryPara:
      'Diane no ejecuta experimentos, no accede a analítica, no reescribe los CTA automáticamente ni garantiza una mejora de conversión. Revisa la alineación y da a los editores humanos hallazgos prácticos.',
    boundaryChecklist: [
      'Diane señala el riesgo de conversión, nunca reescribe los CTA ni el texto ella misma.',
      'Los hallazgos provienen de la evidencia a nivel de página, no de acceso a analítica ni de experimentos en directo.',
      'Los siguientes pasos recomendados son sugerencias para revisión editorial, no cambios automáticos.',
      'No se hace ninguna afirmación de mejora de conversión garantizada.',
    ],
    willNot: [
      { color: 'red', text: 'Ejecutar pruebas A/B' },
      { color: 'red', text: 'Acceder a analítica o afirmar una mejora de conversión' },
      { color: 'red', text: 'Reescribir llamadas a la acción automáticamente' },
      { color: 'red', text: 'Añadir formularios, botones o seguimiento' },
      { color: 'red', text: 'Publicar o aplicar cambios en un CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Diane.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Aclara la intención del lector que Diane alinea con la acción de la página.',
        outputLabel: 'Evaluación de intención',
        ctaLabel: 'Cómo aclara Yuna',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Comprueba si el formato de la página apoya la forma de búsqueda esperada.',
        outputLabel: 'Revisión de formato',
        ctaLabel: 'Cómo comprueba Ivan',
      },
      {
        id: 'internal_linking',
        description: 'Revisa los enlaces y las rutas alrededor del siguiente paso.',
        outputLabel: 'Evaluación de enlaces',
        ctaLabel: 'Cómo revisa Leo',
      },
    ],
    ctaH2: 'Convierte páginas útiles en recorridos más claros.',
    ctaPara:
      'Diane ayuda a los editores a ver si la página da a los lectores suficiente confianza, claridad y dirección para dar el siguiente paso.',
    guidanceFooterLabel: 'ESTADO DE CONVERSIÓN',
    guidanceFooterValue: 'Necesita revisión · ruta débil',
  },

  content_format_serp_fit: {
    seoTitle: 'Worker de Formato de Contenido y Ajuste al SERP | WordPresto',
    metaDescription:
      'Ivan revisa si el formato actual del contenido coincide con la intención probable y la forma de página esperada, y señala conflictos de formato y metadatos que prometen una experiencia distinta.',
    h1: 'Comprueba si la página tiene la forma adecuada para el trabajo.',
    heroPara1:
      'Una página puede apuntar al tema correcto y aun así usar el formato equivocado. Quien busca puede necesitar una guía, una comparación, una lista de comprobación, una página de servicio, una explicación, unas preguntas frecuentes o una página de decisión de estilo producto, mientras el contenido le ofrece otra cosa. Ivan revisa si el formato actual del contenido coincide con la intención probable y la forma de página esperada. Señala conflictos de formato, elementos estructurales que faltan y lugares donde los metadatos prometen una experiencia distinta de la que ofrece la propia página.',
    heroPara2: 'Para revisiones de SEO, briefs de contenido, reescrituras de página y decisiones de formato antes de redactar.',
    problemEyebrow: 'Dónde falla el formato de contenido',
    problemH2: 'La página responde al tema con la forma equivocada.',
    problemPara:
      'Una "guía" que se comporta como una página de ventas. Una página de servicio que se lee como una entrada de blog. Una página de comparación sin estructura de comparación. Una página de preguntas frecuentes sin preguntas de verdad. Estos desajustes de formato hacen que la página sea más difícil de entender tanto para los lectores como para los buscadores. Ivan comprueba si el formato de la página encaja con la promesa.',
    problemAnnotation: '↘ ajusta la forma a la intención',
    beforeStamp: 'Ajuste deficiente',
    beforeHtml: `<p>El título promete una guía práctica, pero la página es sobre todo una presentación de la empresa, sin pasos, ejemplos ni apoyo para la decisión.</p>`,
    beforeTags: ['Desajuste de formato', 'Secciones que faltan', 'Ajuste débil al SERP', 'Desajuste con la expectativa del lector'],
    beforeNote: 'la página se siente como el resultado equivocado',
    afterStamp: 'Formato aclarado',
    afterHtml: `<p>La página se marca como una página de decisión de servicio, con el contenido de guía trasladado a un brief de apoyo.</p>`,
    afterTags: ['Formato claro', 'Mejores expectativas', 'Estructura útil', 'Lista para revisión'],
    afterNote: 'el editor sabe qué forma construir',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de formato antes de escribir más texto.',
    helpsPara:
      'Ivan revisa la forma actual de la página y la compara con el formato esperado más probable. No consulta SERP en directo ni reescribe la página. Da a los editores una evaluación de formato estructurada.',
    checks: [
      'El formato actual de la página',
      'El formato esperado según la intención',
      'Secciones que faltan según el formato',
      'El ajuste de la promesa de los metadatos',
      'El desajuste entre estructura y tipo de contenido',
      'Carencias en la expectativa del lector',
    ],
    improves: [
      'La planificación de la página antes de la reescritura',
      'La calidad del brief',
      'La alineación con la intención de búsqueda',
      'Las decisiones estructurales antes de escribir el texto',
    ],
    prepares: [
      'Revisión de ajuste de formato',
      'Formato de página recomendado',
      'Lista de secciones que faltan',
      'Orientación de reescritura para los editores',
    ],
    surfaces: [
      'Páginas con el formato equivocado',
      'Tipos de página mezclados',
      'Elementos de comparación, guía, preguntas frecuentes o servicio que faltan',
      'Metadatos que prometen una experiencia de contenido distinta',
    ],
    ioH2: 'De qué parte Ivan, y qué produce.',
    worksFrom: [
      'La evaluación de intención',
      'La estructura de la página',
      'La revisión de metadatos',
      'Señales del inventario de contenido',
      'Señales de schema y de snippet en el SERP',
    ],
    produces: [
      'Revisión de ajuste de formato',
      'Formato recomendado',
      'Notas de estructura que falta',
      'Preocupaciones sobre el ajuste al SERP',
      'Sugerencias de reescritura para humanos',
    ],
    scenarios: [
      {
        title: 'Una página apunta al tema correcto pero se siente equivocada.',
        description: 'Ivan comprueba si el problema es de formato, no solo de texto.',
      },
      {
        title: 'Un brief necesita un tipo de página más claro.',
        description:
          'Ayuda a decidir si la página debería ser una guía, una página de servicio, una comparación, una explicación o unas preguntas frecuentes.',
      },
      {
        title: 'Un título promete un formato que la página no entrega.',
        description: 'Ivan señala el desajuste antes de que avancen más cambios de metadatos o de texto.',
      },
      {
        title: 'Una reescritura está a punto de empezar.',
        description: 'Da al editor una estructura mejor antes de redactar.',
      },
      {
        title: 'La intención de búsqueda y las necesidades de conversión entran en conflicto.',
        description: 'Ivan ayuda a aclarar la forma que puede servir a ambas.',
      },
      {
        title: 'Una página tiene secciones esperadas que faltan.',
        description: 'Enumera las carencias específicas de formato para revisión humana.',
      },
    ],
    boundaryH2: 'Ivan recomienda la forma. Los editores deciden la estructura.',
    boundaryPara:
      'Ivan no consulta SERP en directo, no reescribe la página, no crea schema ni publica cambios. Revisa el formato de la página y da a los editores una recomendación estructurada.',
    boundaryChecklist: [
      'Ivan recomienda el formato, nunca reescribe la página él mismo.',
      'Las evaluaciones de formato provienen de la evidencia de la página, no de consultas al SERP en directo.',
      'La estructura recomendada es una sugerencia para revisión editorial, no un cambio automático.',
      'No se garantiza ninguna mejora de posicionamiento.',
    ],
    willNot: [
      { color: 'red', text: 'Consultar o inventar diseños de SERP' },
      { color: 'red', text: 'Reescribir la página automáticamente' },
      { color: 'red', text: 'Crear o aplicar schema' },
      { color: 'red', text: 'Garantizar una mejora de posicionamiento' },
      { color: 'red', text: 'Publicar o escribir en ningún CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Ivan.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Aclara la intención del lector que Ivan usa para evaluar el ajuste de formato.',
        outputLabel: 'Evaluación de intención',
        ctaLabel: 'Cómo aclara Yuna',
      },
      {
        id: 'topical_authority',
        description: 'Comprueba si el formato tiene suficiente apoyo temático.',
        outputLabel: 'Revisión de cobertura',
        ctaLabel: 'Cómo revisa Zara',
      },
      {
        id: 'conversion_alignment',
        description: 'Comprueba si el formato elegido apoya el siguiente paso.',
        outputLabel: 'Revisión de conversión',
        ctaLabel: 'Cómo comprueba Diane',
      },
    ],
    ctaH2: 'Pon la página en la forma correcta antes de mejorarla.',
    ctaPara:
      'Ivan ayuda a los editores a elegir el formato que encaja con la intención de búsqueda, la expectativa del lector y el propósito de la página.',
    guidanceFooterLabel: 'ESTADO DEL FORMATO',
    guidanceFooterValue: 'Ajuste deficiente · revisión necesaria',
  },

  internal_link_pathway: {
    seoTitle: 'Worker de Rutas de Enlazado Interno | WordPresto',
    metaDescription:
      'Felix revisa la salud de las rutas de enlazado interno: el riesgo de páginas huérfanas, la calidad del texto ancla, las relaciones de hub y satélites, los enlaces de siguiente paso que faltan, los enlaces que compiten entre sí y la coherencia de la ruta.',
    h1: 'Revisa las rutas que los lectores y los rastreadores pueden seguir de verdad.',
    heroPara1:
      'Los enlaces internos no son solo señales de SEO. Son rutas por el sitio. Los buenos enlaces ayudan a los lectores a pasar de la pregunta a la prueba, de la guía al servicio, de la página de apoyo a la página comercial y de un tema amplio a una acción concreta. Felix revisa la salud de las rutas de enlazado interno: el riesgo de páginas huérfanas, la calidad del texto ancla, las relaciones de hub y satélites, los enlaces de siguiente paso que faltan, los enlaces que compiten entre sí y la coherencia de la ruta.',
    heroPara2: 'Para auditorías de enlazado interno, revisiones de página, mejoras de clúster temático y comprobaciones de ruta de conversión.',
    problemEyebrow: 'Dónde falla el enlazado interno',
    problemH2: 'Los enlaces existen, pero no siempre crean una ruta útil.',
    problemPara:
      'Una página puede tener enlaces internos vagos, desconectados, enterrados, que distraen o apuntan al siguiente paso equivocado. Puede fallar al conectar con su hub, sus páginas de apoyo o su ruta de conversión. Felix revisa si los enlaces forman una ruta coherente, no solo si los enlaces están presentes.',
    problemAnnotation: '↘ convierte los enlaces en recorridos',
    beforeStamp: 'Ruta débil',
    beforeHtml: `<p>La página enlaza a tres publicaciones sin relación y usa anclas vagas que no explican por qué el lector debería hacer clic.</p>`,
    beforeTags: ['Enlaces sueltos', 'Anclas débiles', 'Sin relación con el hub', 'Siguiente paso deficiente'],
    beforeNote: 'el sitio se siente desconectado',
    afterStamp: 'Ruta aclarada',
    afterHtml: `<p>Los enlaces apoyan el rol de la página, usan anclas descriptivas y llevan a páginas de apoyo o de conversión útiles.</p>`,
    afterTags: ['Anclas claras', 'Mejor ruta de clúster', 'Siguiente paso útil', 'Segura para revisión'],
    afterNote: 'el lector tiene una ruta hacia adelante',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de rutas de enlazado interno antes de editar los enlaces.',
    helpsPara:
      'Felix revisa las señales de página ya visibles y el contexto de los enlaces. No edita anclas, no consulta las páginas enlazadas, no rastrea todo el sitio ni publica cambios. Da a los editores una revisión de ruta estructurada.',
    checks: [
      'La presencia y ubicación de los enlaces internos',
      'La claridad del texto ancla',
      'Los enlaces de siguiente paso que faltan',
      'Señales de hub, satélite y página de apoyo',
      'Enlaces que compiten o que distraen',
      'La coherencia de la ruta',
    ],
    improves: [
      'El movimiento del lector por el sitio',
      'La calidad del enlazado interno',
      'El apoyo del clúster temático',
      'La claridad de la ruta de conversión',
    ],
    prepares: [
      'Revisión de ruta interna',
      'Sugerencias de acción sobre enlaces',
      'Notas de calidad de anclas',
      'Comprobaciones manuales del grafo del sitio',
    ],
    surfaces: [
      'Anclas débiles',
      'Enlaces de apoyo que faltan',
      'Rutas de enlace confusas',
      'Enlaces internos que pueden competir con el propósito de la página',
    ],
    ioH2: 'De qué parte Felix, y qué produce.',
    worksFrom: [
      'Los enlaces internos',
      'El texto ancla',
      'La revisión de relaciones de contenido',
      'Señales de intención y formato',
      'Señales de alineación de conversión',
    ],
    produces: [
      'Revisión de ruta',
      'Notas de calidad de anclas',
      'Sugerencias de enlaces que faltan',
      'Riesgos de rutas que compiten',
      'Acciones de enlace recomendadas',
    ],
    scenarios: [
      {
        title: 'Una página tiene enlaces pero no un recorrido claro.',
        description: 'Felix comprueba si los enlaces forman una ruta útil.',
      },
      {
        title: 'Un clúster temático necesita mejor apoyo.',
        description: 'Revisa si la página conecta con hubs, satélites o páginas de apoyo.',
      },
      {
        title: 'El texto ancla se nota vago.',
        description: 'Felix señala los enlaces que no explican su destino.',
      },
      {
        title: 'Una página tiene un movimiento de conversión débil.',
        description: 'Comprueba si los enlaces internos apoyan o distraen del siguiente paso previsto.',
      },
      {
        title: 'Una página puede estar aislada.',
        description: 'Felix enumera las señales de riesgo de página huérfana y las comprobaciones manuales.',
      },
      {
        title: 'Los editores están planificando mejoras de enlazado.',
        description: 'Da acciones de enlace revisables antes de que nadie edite la página.',
      },
    ],
    boundaryH2: 'Felix revisa las rutas. Los editores deciden los cambios de enlace.',
    boundaryPara:
      'Felix no añade, elimina ni reescribe enlaces automáticamente. No rastrea todo el sitio ni confirma el estado huérfano completo salvo que existan datos de descubrimiento. Produce hallazgos de ruta solo para revisión.',
    boundaryChecklist: [
      'Felix señala los problemas de ruta, nunca edita los enlaces él mismo.',
      'Los hallazgos provienen de señales de página ya visibles, no de un rastreo completo del sitio.',
      'El estado huérfano solo se confirma cuando existen datos de descubrimiento.',
      'Las acciones de enlace recomendadas son sugerencias para revisión editorial, no cambios automáticos.',
    ],
    willNot: [
      { color: 'red', text: 'Editar enlaces o anclas automáticamente' },
      { color: 'red', text: 'Consultar todas las páginas enlazadas' },
      { color: 'red', text: 'Confirmar el estado huérfano a escala de sitio sin datos de rastreo' },
      { color: 'red', text: 'Crear redirecciones o cambios de navegación' },
      { color: 'red', text: 'Publicar o escribir en ningún CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Felix.',
    relatedWorkerIds: [
      {
        id: 'internal_linking',
        description: 'Revisa la capa más amplia de relaciones entre páginas.',
        outputLabel: 'Evaluación de enlaces',
        ctaLabel: 'Cómo revisa Leo',
      },
      {
        id: 'topical_authority',
        description: 'Comprueba si las rutas de enlace apoyan el clúster temático.',
        outputLabel: 'Revisión de cobertura',
        ctaLabel: 'Cómo revisa Zara',
      },
      {
        id: 'conversion_alignment',
        description: 'Comprueba si la ruta apoya la acción prevista.',
        outputLabel: 'Revisión de conversión',
        ctaLabel: 'Cómo comprueba Diane',
      },
    ],
    ctaH2: 'Haz que los enlaces internos funcionen como un sistema.',
    ctaPara:
      'Felix ayuda a los editores a convertir enlaces sueltos en rutas de lectura claras, apoyo temático y acciones de enlace revisables.',
    guidanceFooterLabel: 'ESTADO DE LA RUTA',
    guidanceFooterValue: 'Necesita revisión · rutas débiles',
  },

  content_pruning_consolidation: {
    seoTitle: 'Worker de Poda y Consolidación de Contenido | WordPresto',
    metaDescription:
      'Hugo revisa las señales de mantenimiento de contenido: riesgo de solapamiento, contenido escaso, desgaste, rol poco claro, rutas débiles y sugerencias de consolidación, y ayuda a los editores a decidir la próxima acción de mantenimiento más segura.',
    h1: 'Decide si el contenido débil debería mejorarse, fusionarse o dejarse tal cual.',
    heroPara1:
      'No todas las páginas de bajo rendimiento necesitan una reescritura. Algunas necesitan actualizarse. Otras necesitan consolidarse. Algunas deberían mantenerse porque cumplen un propósito estrecho pero válido. Otras necesitan una conversación cuidadosa sobre la poda antes de que el sitio se vuelva inflado y confuso. Hugo revisa las señales de mantenimiento de contenido: riesgo de solapamiento, contenido escaso, desgaste, rol poco claro, rutas débiles y sugerencias de consolidación. Ayuda a los editores a decidir la próxima acción de mantenimiento más segura.',
    heroPara2: 'Para auditorías de contenido, revisiones de poda, planificación de consolidación y mantenimiento del sitio a largo plazo.',
    problemEyebrow: 'Dónde falla el mantenimiento de contenido',
    problemH2: 'Los equipos, o lo conservan todo, o recortan demasiado rápido.',
    problemPara:
      'La poda de contenido es arriesgada cuando se basa en señales superficiales. Una página puede parecer débil pero seguir apoyando un recorrido de nicho, una ruta interna, una necesidad de cumplimiento o un tema de cola larga. Otra página puede parecer inofensiva mientras causa solapamiento, desgaste o confusión de clúster. Hugo ayuda a que las decisiones de mantenimiento sean más cuidadosas.',
    problemAnnotation: '↘ mejora, consolida o revisa antes de recortar',
    beforeStamp: 'Poda insegura',
    beforeHtml: `<p>La página es escasa y antigua, así que el equipo la elimina sin comprobar los enlaces, el solapamiento, el rol de la página ni el valor de apoyo.</p>`,
    beforeTags: ['Solo señal escasa', 'Sin comprobación de ruta', 'Sin revisión de rol', 'Eliminación arriesgada'],
    beforeNote: 'el mantenimiento se convierte en adivinar',
    afterStamp: 'Revisión cuidadosa',
    afterHtml: `<p>La página se marca como candidata a consolidación, con comprobaciones manuales antes de cualquier acción.</p>`,
    afterTags: ['Segura para revisión', 'Consciente del rol', 'Comprobaciones enumeradas', 'Sin eliminación automática'],
    afterNote: 'el editor decide con contexto',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de mantenimiento sin acción destructiva.',
    helpsPara:
      'Hugo combina señales ya disponibles y las convierte en una recomendación de mantenimiento revisable. No elimina páginas, no fusiona contenido, no crea redirecciones ni publica cambios.',
    checks: [
      'Señales de contenido escaso o débil',
      'Riesgo de desgaste y vigencia del contenido',
      'Riesgo de canibalización y solapamiento',
      'Claridad del rol de la página',
      'Valor de enlazado interno y de ruta',
      'Comprobaciones manuales antes de podar o consolidar',
    ],
    improves: [
      'La planificación del mantenimiento de contenido',
      'Las decisiones de poda más seguras',
      'La calidad de la revisión de consolidación',
      'La visibilidad de las páginas que necesitan acción o protección',
    ],
    prepares: [
      'Recomendación de mantenimiento',
      'Revisión de candidatas a consolidación',
      'Notas de precaución sobre poda',
      'Lista de verificación manual',
    ],
    surfaces: [
      'Páginas que pueden necesitar actualización en lugar de poda',
      'Páginas que pueden pertenecer dentro de otro activo',
      'Riesgos antes de eliminar o consolidar',
      'Datos que faltan antes de una decisión final',
    ],
    ioH2: 'De qué parte Hugo, y qué produce.',
    worksFrom: [
      'Señales del inventario de contenido',
      'La revisión de canibalización',
      'La revisión de vigencia',
      'Señales de rutas internas',
      'Señales de cobertura temática',
    ],
    produces: [
      'Revisión de mantenimiento',
      'Acción recomendada',
      'Sugerencias de consolidación',
      'Precauciones sobre poda',
      'Comprobaciones manuales',
    ],
    scenarios: [
      {
        title: 'Una página se ve débil pero podría seguir importando.',
        description: 'Hugo comprueba si la página tiene valor antes de que nadie considere podarla.',
      },
      {
        title: 'Se sospecha solapamiento de contenido.',
        description: 'Ayuda a decidir si conviene consolidar, afinar o revisar manualmente.',
      },
      {
        title: 'Una página es antigua y escasa.',
        description: 'Hugo separa las oportunidades de actualización de las candidatas a consolidación.',
      },
      {
        title: 'Un sitio tiene demasiadas páginas parecidas.',
        description: 'Da a los editores una ruta de mantenimiento más segura que la eliminación a ciegas.',
      },
      {
        title: 'Los enlaces internos dependen de la página.',
        description: 'Hugo señala el riesgo de ruta antes de eliminar o consolidar.',
      },
      {
        title: 'Un plan de mantenimiento necesita acciones revisables.',
        description: 'Convierte señales dispersas en una recomendación estructurada.',
      },
    ],
    boundaryH2: 'Hugo recomienda el mantenimiento. Los editores deciden la acción.',
    boundaryPara:
      'Hugo no elimina, fusiona, redirige, reescribe ni publica. Solo recomienda una dirección de mantenimiento y enumera las comprobaciones manuales necesarias antes de actuar.',
    boundaryChecklist: [
      'Hugo recomienda una dirección, nunca elimina ni fusiona páginas él mismo.',
      'Los hallazgos combinan señales de revisión ya existentes, no un análisis destructivo nuevo.',
      'Las comprobaciones manuales siempre se enumeran antes de cualquier poda o consolidación.',
      'Las señales débiles por sí solas nunca se tratan como suficientes para una acción destructiva.',
    ],
    willNot: [
      { color: 'red', text: 'Eliminar o podar páginas' },
      { color: 'red', text: 'Fusionar contenido automáticamente' },
      { color: 'red', text: 'Crear redirecciones' },
      { color: 'red', text: 'Reescribir o volver a publicar contenido' },
      { color: 'red', text: 'Tratar señales débiles como suficientes para una acción destructiva' },
    ],
    relatedH2: 'Workers junto a los que trabaja Hugo.',
    relatedWorkerIds: [
      {
        id: 'cannibalisation_overlap',
        description: 'Señala los riesgos de solapamiento y de rol de página poco claro.',
        outputLabel: 'Revisión de solapamiento',
        ctaLabel: 'Cómo revisa Cleo',
      },
      {
        id: 'content_decay',
        description: 'Revisa si la página necesita actualización o revisión urgente.',
        outputLabel: 'Revisión de vigencia',
        ctaLabel: 'Cómo revisa Faye',
      },
      {
        id: 'content_inventory',
        description: 'Clasifica la página como activo de contenido antes de las decisiones de mantenimiento.',
        outputLabel: 'Revisión de inventario',
        ctaLabel: 'Cómo clasifica Nora',
      },
    ],
    ctaH2: 'Haz que el mantenimiento de contenido sea más seguro.',
    ctaPara:
      'Hugo ayuda a los editores a decidir si una página debería actualizarse, consolidarse, protegerse o revisarse antes de considerar cualquier acción destructiva.',
    guidanceFooterLabel: 'ESTADO DE MANTENIMIENTO',
    guidanceFooterValue: 'Necesita revisión · candidata a consolidación',
  },

  content_inventory: {
    seoTitle: 'Worker de Inventario de Contenido | WordPresto',
    metaDescription:
      'Nora revisa la página como un activo de contenido, identificando el tipo de página, las señales estructurales, las carencias de contenido y los metadatos de inventario que pueden ayudar a los editores a planificar mejor el trabajo.',
    h1: 'Entiende con qué tipo de activo de contenido estás tratando.',
    heroPara1:
      'Antes de poder mejorar una página, hay que clasificarla. ¿Es una página de servicio, una guía, un artículo, una landing page, una página de comparación, una página de soporte o algo distinto? ¿Qué señales están presentes? ¿Qué falta? ¿Qué ayudaría a la planificación futura? Nora revisa la página como un activo de contenido. Identifica el tipo de página, las señales estructurales, las carencias de contenido y los metadatos de inventario que pueden ayudar a los editores a planificar mejor el trabajo.',
    heroPara2: 'Para auditorías de contenido, revisiones de página, planificación de contenido y evaluación editorial en fases tempranas.',
    problemEyebrow: 'Dónde falla la planificación de contenido',
    problemH2: 'Los equipos empiezan a mejorar páginas antes de saber qué se supone que debe ser la página.',
    problemPara:
      'Una página solo puede juzgarse correctamente una vez que su rol está claro. Una página de servicio escasa, un artículo débil y una página de comparación incompleta necesitan acciones distintas. Sin contexto de inventario, cada recomendación corre el riesgo de volverse genérica. Nora da al flujo de trabajo una clasificación de contenido más clara antes de que empiece una revisión más profunda.',
    problemAnnotation: '↘ clasifica el activo antes de mejorarlo',
    beforeStamp: 'Activo poco claro',
    beforeHtml: `<p>La página tiene texto de servicio, preguntas frecuentes y secciones tipo guía, pero ningún tipo de contenido claro.</p>`,
    beforeTags: ['Rol poco claro', 'Estructura mixta', 'Metadatos que faltan', 'Difícil de planificar'],
    beforeNote: 'el equipo no sabe qué trabajo tiene la página',
    afterStamp: 'Inventario revisado',
    afterHtml: `<p>La página se clasifica como una página de decisión de servicio con prueba insuficiente, poca profundidad en las preguntas frecuentes y falta de apoyo de páginas relacionadas.</p>`,
    afterTags: ['Tipo más claro', 'Carencias de planificación', 'Mejor enrutamiento de flujo', 'Lista para revisión'],
    afterNote: 'el editor sabe qué tipo de activo es este',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Inventario a nivel de página sin fingir que se rastrea todo el sitio.',
    helpsPara:
      'Nora revisa la página inspeccionada como un único activo de contenido. No construye un inventario completo del sitio, no rastrea páginas enlazadas ni clasifica todo el dominio. Da a los editores una revisión de inventario útil a nivel de página.',
    checks: [
      'El tipo de página aparente',
      'Las señales de contenido y estructura',
      'Los elementos del activo que faltan',
      'La claridad del rol de la página',
      'Las necesidades de metadatos de planificación',
      'Comprobaciones manuales para el trabajo de inventario futuro',
    ],
    improves: [
      'La claridad de la auditoría de contenido',
      'El enrutamiento de la revisión de página',
      'La planificación de briefs y mantenimiento',
      'La comprensión de qué tipo de página se está revisando',
    ],
    prepares: [
      'Revisión de inventario de contenido',
      'Clasificación de activo aparente',
      'Lista de señales que faltan',
      'Notas de planificación para el trabajo futuro',
    ],
    surfaces: [
      'Páginas con propósito poco claro',
      'Elementos de contenido que faltan',
      'Señales de tipo de página mezcladas',
      'Metadatos que ayudarían a la planificación de contenido futura',
    ],
    ioH2: 'De qué parte Nora, y qué produce.',
    worksFrom: [
      'El texto de la página',
      'La estructura de la página',
      'Los metadatos',
      'Señales de fuente',
      'Hallazgos de otros workers, cuando están disponibles',
    ],
    produces: [
      'Revisión de inventario',
      'Clasificación del tipo de página',
      'Señales de activos que faltan',
      'Notas de metadatos de planificación',
      'Comprobaciones manuales',
    ],
    scenarios: [
      {
        title: 'Una revisión de página necesita una clasificación de partida.',
        description: 'Nora identifica con qué tipo de activo de contenido está tratando el flujo de trabajo.',
      },
      {
        title: 'Una auditoría de contenido está desordenada.',
        description: 'Da a cada página revisada un contexto de inventario más claro.',
      },
      {
        title: 'Una página tiene señales mezcladas.',
        description: 'Nora señala cuándo la página se comporta como más de un tipo de contenido.',
      },
      {
        title: 'Se acerca una decisión de mantenimiento.',
        description: 'Ayuda a aclarar si el activo debería actualizarse, consolidarse o ampliarse.',
      },
      {
        title: 'Un brief necesita contexto sobre el tipo de página.',
        description: 'Nora da al creador del brief un punto de partida más claro.',
      },
      {
        title: 'El equipo necesita metadatos de planificación.',
        description: 'Enumera lo que facilitaría gestionar el activo más adelante.',
      },
    ],
    boundaryH2: 'Nora clasifica la página. Los editores deciden en qué se convierte.',
    boundaryPara:
      'Nora no crea un inventario completo del sitio, no rastrea el dominio, no edita contenido ni publica cambios. Revisa la página actual y prepara el contexto de planificación.',
    boundaryChecklist: [
      'Nora clasifica la página, nunca la edita ni la reestructura ella misma.',
      'Las revisiones cubren la página actual, no un rastreo o inventario de todo el sitio.',
      'Las notas de planificación son sugerencias para el enrutamiento editorial, no acciones automáticas.',
      'Las listas de señales que faltan se señalan para revisión, no se tratan como carencias confirmadas.',
    ],
    willNot: [
      { color: 'red', text: 'Rastrear todo el sitio' },
      { color: 'red', text: 'Confirmar la cobertura completa del inventario' },
      { color: 'red', text: 'Reescribir o reestructurar la página automáticamente' },
      { color: 'red', text: 'Crear o eliminar registros de contenido' },
      { color: 'red', text: 'Publicar o escribir en ningún CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Nora.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrae las señales de origen que Nora usa para la clasificación.',
        outputLabel: 'Señales de página',
        ctaLabel: 'Cómo extrae Patrick',
      },
      {
        id: 'intent_analyst',
        description: 'Revisa si el tipo de página aparente coincide con la intención del lector.',
        outputLabel: 'Evaluación de intención',
        ctaLabel: 'Cómo revisa Yuna',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Usa el contexto de inventario antes de recomendar una acción de mantenimiento.',
        outputLabel: 'Revisión de mantenimiento',
        ctaLabel: 'Cómo lo usa Hugo',
      },
    ],
    ctaH2: 'Clasifica la página antes de decidir qué hacer con ella.',
    ctaPara:
      'Nora ayuda a los editores a entender el activo de contenido, sus señales que faltan y su rol de planificación antes de que empiece un trabajo más profundo.',
    guidanceFooterLabel: 'ESTADO DEL INVENTARIO',
    guidanceFooterValue: 'Activo revisado · carencias encontradas',
  },

  semantic_search_analyzer: {
    seoTitle: 'Worker de Análisis de Cobertura Semántica | WordPresto',
    metaDescription:
      'Sema revisa la cobertura semántica comparando el contenido con la capa de conocimiento y el contexto de proyecto de Word Presto, y saca a la luz los subtemas que faltan y las entidades poco desarrolladas.',
    h1: 'Encuentra los conceptos que le faltan a la página.',
    heroPara1:
      'Un buen contenido no se limita a mencionar la palabra clave objetivo. Cubre las entidades, los subtemas, las relaciones y las ideas de apoyo que hacen que la página sea realmente útil. Sema revisa la cobertura semántica comparando el contenido con la capa de conocimiento y el contexto de proyecto de Word Presto. Saca a la luz los subtemas que faltan, las entidades poco desarrolladas y las carencias de cobertura que deberían revisarse antes de aprobar la página.',
    heroPara2: 'Para revisiones de SEO avanzadas, briefs de contenido, trabajo de autoridad temática y páginas que necesitan una cobertura semántica más profunda.',
    problemEyebrow: 'Dónde falla el SEO semántico',
    problemH2: 'Las páginas mencionan el tema pero se dejan el significado que lo rodea.',
    problemPara:
      'Una página puede incluir la palabra clave correcta y aun así no cubrir bien el tema. Puede saltarse entidades clave, evitar comparaciones importantes, dejar de lado conceptos de apoyo o dejar preguntas sin responder. Sema mira más allá de la presencia de palabras clave. Revisa si la página tiene suficiente profundidad semántica como para merecer confianza.',
    problemAnnotation: '↘ cubre el tema, no solo el término',
    beforeStamp: 'Cobertura escasa',
    beforeHtml: `<p>La página menciona el servicio pero se deja condiciones clave, factores de decisión, evidencia de apoyo y entidades relacionadas.</p>`,
    beforeTags: ['Palabra clave presente', 'Entidades ausentes', 'Subtemas escasos', 'Profundidad débil'],
    beforeNote: 'la página suena relevante pero se siente incompleta',
    afterStamp: 'Cobertura revisada',
    afterHtml: `<p>Sema enumera las entidades que faltan, los subtemas escasos y las carencias respaldadas por evidencia para que el editor las revise.</p>`,
    afterTags: ['Carencias de entidad', 'Profundidad temática', 'Hallazgos vinculados a fuentes', 'Segura para revisión'],
    afterNote: 'el editor sabe qué falta',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de cobertura semántica con límites de evidencia.',
    helpsPara:
      'Sema compara el contenido con el conocimiento y el contexto de proyecto disponibles, y produce carencias de cobertura revisables. No satura de palabras clave, no inventa entidades ni reescribe la página automáticamente.',
    checks: [
      'Subtemas que faltan',
      'Entidades poco desarrolladas',
      'Profundidad semántica',
      'Vigencia de la distribución de términos',
      'Carencias de cobertura frente al conocimiento recuperado',
      'Apoyo de evidencia para las adiciones sugeridas',
    ],
    improves: [
      'La profundidad temática',
      'La calidad del brief',
      'Los planes de contenido que construyen autoridad',
      'La confianza antes de aprobar el contenido',
    ],
    prepares: [
      'Revisión de cobertura semántica',
      'Lista de carencias de entidades y subtemas',
      'Hallazgos vinculados a evidencia',
      'Sugerencias de revisión para los editores',
    ],
    surfaces: [
      'Conceptos importantes que faltan en el borrador',
      'Términos sobreusados o poco desarrollados',
      'Carencias de cobertura que necesitan apoyo de fuentes',
      'Áreas donde la página es semánticamente escasa',
    ],
    ioH2: 'De qué parte Sema, y qué produce.',
    worksFrom: [
      'El borrador o el contenido de la página',
      'El contexto del proyecto',
      'Vecinos de conocimiento',
      'Señales de evidencia',
      'Candidatos de tema y entidad',
    ],
    produces: [
      'Revisión de cobertura semántica',
      'Lista de carencias de entidades',
      'Hallazgos de subtemas',
      'Señal de distribución de términos',
      'Recomendaciones vinculadas a evidencia',
    ],
    scenarios: [
      {
        title: 'Una página necesita más autoridad temática.',
        description: 'Sema identifica qué le falta al contenido más allá de las palabras clave obvias.',
      },
      {
        title: 'Un borrador se nota superficial.',
        description: 'Encuentra entidades, subtemas y conceptos de apoyo que faltan.',
      },
      {
        title: 'Un brief necesita un contexto más rico.',
        description: 'Sema da a los editores carencias de cobertura que considerar antes de redactar.',
      },
      {
        title: 'Una página compite en un tema complejo.',
        description: 'Ayuda a sacar a la luz los conceptos que suelen cubrir las páginas más sólidas.',
      },
      {
        title: 'Una actualización de contenido necesita ampliación basada en evidencia.',
        description: 'Sema enumera las carencias que deberían revisarse con contexto de apoyo.',
      },
      {
        title: 'Quieres SEO semántico sin saturar de palabras clave.',
        description: 'Se centra en el significado, la cobertura y las carencias vinculadas a fuentes.',
      },
    ],
    boundaryH2: 'Sema identifica las carencias. Los editores deciden qué pertenece a la página.',
    boundaryPara:
      'Sema no añade temas automáticamente, no satura de palabras clave, no reescribe el texto ni publica. Sus hallazgos son solo para revisión y deben ser juzgados por un editor.',
    boundaryChecklist: [
      'Sema señala las carencias, nunca añade temas ni reescribe el texto ella misma.',
      'Los hallazgos de cobertura se comparan con el conocimiento recuperado, no se inventan de la nada.',
      'Las adiciones sugeridas son propuestas para revisión editorial, no inserciones automáticas.',
      'Los vecinos recuperados se tratan como señales para revisión, no como verdad incuestionable.',
    ],
    willNot: [
      { color: 'red', text: 'Saturar el contenido de palabras clave' },
      { color: 'red', text: 'Inventar entidades sin respaldo' },
      { color: 'red', text: 'Reescribir o ampliar la página automáticamente' },
      { color: 'red', text: 'Publicar o escribir en ningún CMS' },
      { color: 'red', text: 'Tratar los vecinos recuperados como verdad incuestionable' },
    ],
    relatedH2: 'Workers junto a los que trabaja Sema.',
    relatedWorkerIds: [
      {
        id: 'topical_authority',
        description: 'Revisa el apoyo temático a nivel de página y las carencias de clúster.',
        outputLabel: 'Revisión de cobertura',
        ctaLabel: 'Cómo revisa Zara',
      },
      {
        id: 'evidence',
        description: 'Revisa si las adiciones sugeridas están respaldadas.',
        outputLabel: 'Paquete de evidencia',
        ctaLabel: 'Cómo revisa Kenji',
      },
      {
        id: 'competitor_intel',
        description: 'Compara la cobertura con evidencia real de competidores en el SERP cuando está disponible.',
        outputLabel: 'Revisión de cobertura de la competencia',
        ctaLabel: 'Cómo compara Cassius',
      },
    ],
    ctaH2: 'Encuentra el significado que la página todavía no ha cubierto.',
    ctaPara:
      'Sema ayuda a los editores a reforzar la profundidad temática con carencias semánticas revisables, no con saturación de palabras clave.',
    guidanceFooterLabel: 'ESTADO SEMÁNTICO',
    guidanceFooterValue: 'Carencias de cobertura encontradas · revisión necesaria',
  },

  competitor_intel: {
    seoTitle: 'Worker de Inteligencia Competitiva | WordPresto',
    metaDescription:
      'Cassius revisa la cobertura de la competencia a partir de datos de competidores en el SERP ya almacenados, y saca a la luz los subtemas, entidades y ángulos que los competidores parecen cubrir y que tu contenido puede estar dejando de lado.',
    h1: 'Ve qué cubren los competidores que posicionan y tú no.',
    heroPara1:
      'El análisis de la competencia solo es útil cuando se basa en evidencia de búsqueda real. Cassius revisa la cobertura de la competencia a partir de datos de competidores en el SERP ya almacenados y la compara con la página o el borrador en revisión. Saca a la luz los subtemas, entidades y ángulos que los competidores parecen cubrir y que tu contenido puede estar dejando de lado.',
    heroPara2:
      'Para revisiones de SEO competitivo, análisis de carencias de contenido, planificación basada en palabras clave y páginas que se mejoran para una oportunidad de búsqueda conocida.',
    problemEyebrow: 'Dónde falla el análisis de la competencia',
    problemH2: 'Los equipos copian a los competidores en lugar de entender la carencia.',
    problemPara:
      'Una revisión competitiva no debería significar copiar ideas e imitar otra página. Debería ayudar a los editores a entender lo que el panorama de posicionamiento parece cubrir, lo que el borrador actual se deja de lado y qué carencias son realmente relevantes. Cassius convierte la evidencia de la competencia en inteligencia de contenido revisable.',
    problemAnnotation: '↘ compara la cobertura sin copiar',
    beforeStamp: 'Comprobación superficial de la competencia',
    beforeHtml: `<p>Los competidores mencionan varios factores de decisión, pero el borrador solo cubre la definición básica.</p>`,
    beforeTags: ['Ángulos que faltan', 'Comparación escasa', 'Evidencia de SERP necesaria', 'Sin estrategia de copia'],
    beforeNote: 'a la página le falta contexto competitivo',
    afterStamp: 'Cobertura comparada',
    afterHtml: `<p>Cassius enumera los subtemas y las entidades que cubren los competidores y que el editor debería revisar.</p>`,
    afterTags: ['Base real de SERP', 'Lista de carencias', 'Criterio humano', 'Sin imitación'],
    afterNote: 'el editor puede decidir qué incorporar',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de cobertura de la competencia a partir de evidencia real del SERP.',
    helpsPara:
      'Cassius usa datos de competidores en el SERP ya existentes cuando están disponibles. Si no hay datos de SERP almacenados, muestra un estado sin datos honesto en lugar de inventar hallazgos sobre la competencia.',
    checks: [
      'Subtemas cubiertos por la competencia',
      'Entidades y ángulos que faltan',
      'El borrador frente a la cobertura de los competidores en el SERP',
      'Temas repetidos entre competidores',
      'Limitaciones de la evidencia',
      'Estados sin datos cuando falta evidencia de SERP',
    ],
    improves: [
      'La planificación de contenido competitivo',
      'La calidad del brief basado en carencias',
      'La revisión de oportunidades de búsqueda',
      'La conciencia de lo que parecen abordar las páginas que posicionan',
    ],
    prepares: [
      'Revisión de cobertura de la competencia',
      'Lista de carencias basada en el SERP',
      'Sugerencias de ángulo de contenido',
      'Notas de limitación de evidencia',
    ],
    surfaces: [
      'Temas relevantes cubiertos por la competencia',
      'Factores de decisión que faltan',
      'Temas del SERP que merece la pena considerar',
      'Áreas donde la evidencia de la competencia es demasiado escasa o no está disponible',
    ],
    ioH2: 'De qué parte Cassius, y qué produce.',
    worksFrom: [
      'El borrador o el contenido de la página',
      'Datos de competidores en el SERP ya almacenados',
      'El contexto de palabras clave o de oportunidad de búsqueda',
      'Señales de cobertura semántica',
      'Señales de la revisión de evidencia',
    ],
    produces: [
      'Revisión de cobertura de la competencia',
      'Lista de carencias basada en el SERP',
      'Notas de entidades que faltan',
      'Sugerencias de ángulo competitivo',
      'Estado sin datos cuando es necesario',
    ],
    scenarios: [
      {
        title: 'Una página apunta a una palabra clave competitiva.',
        description: 'Cassius comprueba qué parecen cubrir los competidores que posicionan y que la página puede dejarse de lado.',
      },
      {
        title: 'Un brief de contenido necesita contexto de la competencia.',
        description: 'Aporta sugerencias basadas en carencias sin convertir el brief en una imitación.',
      },
      {
        title: 'Un borrador se nota más débil que el SERP.',
        description: 'Cassius identifica los ángulos y entidades que faltan para revisión humana.',
      },
      {
        title: 'Una acción de investigación de palabras clave ha generado datos de SERP.',
        description: 'Usa esos datos almacenados para fundamentar los hallazgos de cobertura de la competencia.',
      },
      {
        title: 'Una página se está actualizando por rendimiento de SEO.',
        description: 'Cassius ayuda a los editores a ver si la cobertura de la competencia ha avanzado.',
      },
      {
        title: 'El equipo necesita evidencia competitiva honesta.',
        description: 'Muestra estados sin datos cuando la evidencia de competidores en el SERP no está disponible.',
      },
    ],
    boundaryH2: 'Cassius compara la cobertura. Los editores deciden qué usar.',
    boundaryPara:
      'Cassius no copia contenido de la competencia, no consulta páginas de competidores ocultas, no inventa datos de SERP ni garantiza mejoras de posicionamiento. Convierte la evidencia de la competencia disponible en carencias revisables.',
    boundaryChecklist: [
      'Cassius compara la cobertura, nunca copia contenido de la competencia.',
      'Los hallazgos se fundamentan en datos de SERP almacenados, no en afirmaciones inventadas sobre la competencia.',
      'Se muestra un estado sin datos con honestidad cuando falta evidencia de SERP.',
      'No se garantiza ninguna mejora de posicionamiento.',
    ],
    willNot: [
      { color: 'red', text: 'Copiar contenido de la competencia' },
      { color: 'red', text: 'Inventar hallazgos sobre la competencia sin datos de SERP' },
      { color: 'red', text: 'Consultar páginas de competidores en directo salvo que un futuro flujo de trabajo lo permita explícitamente' },
      { color: 'red', text: 'Reescribir la página automáticamente' },
      { color: 'red', text: 'Publicar o escribir en ningún CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Cassius.',
    relatedWorkerIds: [
      {
        id: 'semantic_search_analyzer',
        description: 'Encuentra carencias semánticas a partir de la capa de conocimiento y el contexto de proyecto.',
        outputLabel: 'Revisión de cobertura semántica',
        ctaLabel: 'Cómo encuentra carencias Sema',
      },
      {
        id: 'intent_analyst',
        description: 'Aclara la intención detrás de la oportunidad de búsqueda competitiva.',
        outputLabel: 'Evaluación de intención',
        ctaLabel: 'Cómo aclara Yuna',
      },
      {
        id: 'evidence',
        description: 'Revisa si los hallazgos basados en la competencia están bien respaldados.',
        outputLabel: 'Paquete de evidencia',
        ctaLabel: 'Cómo revisa Kenji',
      },
    ],
    ctaH2: 'Entiende la carencia antes de competir.',
    ctaPara:
      'Cassius ayuda a los editores a comparar la cobertura con evidencia real de competidores en el SERP sin copiar, adivinar ni fabricar datos.',
    guidanceFooterLabel: 'ESTADO DE LA COMPETENCIA',
    guidanceFooterValue: 'Carencias encontradas · evidencia necesaria',
  },
};
