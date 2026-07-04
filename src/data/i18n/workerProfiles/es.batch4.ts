import type { WorkerProfileTranslatable } from './types';

export const esBatch4: Record<string, WorkerProfileTranslatable> = {
  safe_change_planner: {
    seoTitle: 'Worker de Planificación de Cambios Seguros | WordPresto',
    metaDescription:
      'Sam convierte los hallazgos de los Workers en cambios propuestos y estructurados, indicando el área afectada, el riesgo y el beneficio esperado, sin editar la página ni aplicar nada.',
    h1: 'Convierte hallazgos en cambios que se pueden revisar con seguridad.',
    heroPara1:
      'Un hallazgo todavía no es un cambio. "La página necesita una estructura más clara" es útil, pero un editor sigue necesitando saber qué podría cambiar, dónde, por qué, qué riesgo implica y si el cambio debería avanzar. Sam convierte los hallazgos de los Workers en cambios propuestos y estructurados. Prepara la capa de revisión sin editar la página ni aplicar nada.',
    heroPara2:
      'Para análisis de contenido, preparación de la aprobación, colas de revisión y planificación de ediciones seguras.',
    problemEyebrow: 'Dónde falla la planificación de cambios',
    problemH2: 'Los equipos saltan del hallazgo a la edición demasiado rápido.',
    problemPara:
      'Un Worker puede identificar un problema real, pero el siguiente paso no debería ser la edición automática. El cambio propuesto necesita contexto: qué área se ve afectada, por qué importa el cambio, cuánto riesgo implica y qué beneficio se espera. Sam crea esa capa de decisión.',
    problemAnnotation: '↘ planifica el cambio antes de editar',
    beforeStamp: 'Hallazgo en bruto',
    beforeHtml: `<p>La página necesita una introducción más sólida y un siguiente paso más claro.</p>`,
    beforeTags: ['Sin área afectada', 'Sin etiqueta de riesgo', 'Sin prioridad', 'Sin estado de aprobación'],
    beforeNote: 'el editor todavía tiene que interpretar el hallazgo',
    afterStamp: 'Cambio planificado',
    afterHtml: `<p>Revisa la introducción para aclarar la promesa de la página y añade un siguiente paso relevante después de la primera sección.</p>`,
    afterTags: ['Área afectada', 'Beneficio esperado', 'Riesgo señalado', 'Aprobación necesaria'],
    afterNote: 'el cambio está listo para revisión',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un plan estructurado antes de cualquier cambio de contenido.',
    helpsPara:
      'Sam convierte hallazgos en cambios propuestos. No reescribe, no aplica ni publica. Prepara un plan revisable por humanos que puede pasar a la cola de Riley o a un flujo de aprobación posterior.',
    checks: [
      'Hallazgos y recomendaciones de los Workers',
      'El área de contenido afectada',
      'El tipo de cambio',
      'La prioridad y el beneficio esperado',
      'El nivel de riesgo',
      'Los requisitos de evidencia o de aprobación',
    ],
    improves: [
      'La seguridad de los flujos de trabajo de contenido',
      'La calidad de las decisiones de revisión',
      'La claridad antes de que empiecen las ediciones',
      'La separación entre recomendación y acción',
    ],
    prepares: [
      'Un plan de cambios propuestos',
      'Etiquetas de área afectada',
      'Notas de riesgo y beneficio',
      'Elementos de revisión listos para aprobación',
    ],
    surfaces: [
      'Cambios que necesitan aprobación',
      'Ediciones de alto riesgo',
      'Elementos que necesitan más evidencia',
      'Recomendaciones que todavía no están listas para una edición segura',
    ],
    ioH2: 'De qué parte Sam, y qué produce.',
    worksFrom: [
      'Hallazgos de los Workers',
      'Revisión de evidencia',
      'Resultados del análisis de contenido',
      'Señales de riesgo y de afirmaciones',
      'Contexto de la página',
    ],
    produces: [
      'Plan de cambios',
      'Cambios propuestos',
      'Notas de área afectada',
      'Etiquetas de riesgo',
      'Beneficio esperado',
    ],
    scenarios: [
      {
        title: 'Una revisión ha producido varios hallazgos.',
        description: 'Sam los convierte en cambios propuestos que el editor puede evaluar.',
      },
      {
        title: 'El equipo necesita evitar ediciones automáticas.',
        description: 'Crea una capa de planificación antes de tocar cualquier contenido.',
      },
      {
        title: 'Una recomendación puede ser arriesgada.',
        description: 'Sam señala el riesgo y las necesidades de evidencia antes de que avance.',
      },
      {
        title: 'Una página está entrando en la cola de revisión.',
        description: 'Prepara los elementos estructurados que Riley puede organizar.',
      },
      {
        title: 'El editor necesita prioridades más claras.',
        description: 'Sam etiqueta qué importa más y por qué.',
      },
      {
        title: 'Un cambio todavía no debería estar listo para una edición segura.',
        description: 'Mantiene los cambios propuestos en estado de solo revisión hasta que se aprueben.',
      },
    ],
    boundaryH2: 'Sam planifica los cambios. Los editores los aprueban o los rechazan.',
    boundaryPara:
      'Sam no edita la página, no redacta ediciones seguras, no aplica cambios ni publica. Prepara cambios propuestos para la decisión humana.',
    boundaryChecklist: [
      'Sam planifica cambios, nunca los edita ni los aplica él mismo.',
      'Los cambios propuestos permanecen solo en revisión hasta que un editor los aprueba.',
      'Las necesidades de riesgo y evidencia se señalan, nunca se omiten ni se dan por seguras.',
      'Un hallazgo nunca se trata como ya aprobado.',
    ],
    willNot: [
      { color: 'red', text: 'Reescribir contenido automáticamente' },
      { color: 'red', text: 'Aplicar cambios propuestos' },
      { color: 'red', text: 'Tratar un hallazgo como aprobado' },
      { color: 'red', text: 'Publicar o escribir en cualquier CMS' },
      { color: 'red', text: 'Saltarse comprobaciones de evidencia o de riesgo' },
    ],
    relatedH2: 'Workers junto a los que trabaja Sam.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Convierte los cambios propuestos de Sam en una cola de decisión.',
        outputLabel: 'Cola de revisión',
        ctaLabel: 'Cómo organiza Riley',
      },
      {
        id: 'review',
        description: 'Resume las acciones de revisión para los editores humanos.',
        outputLabel: 'Resumen de revisión',
        ctaLabel: 'Cómo resume Helen',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Comprueba si los cambios propuestos bloquean la aprobación.',
        outputLabel: 'Puerta de aprobación',
        ctaLabel: 'Cómo decide Dana',
      },
    ],
    ctaH2: 'Planifica el cambio antes de editar.',
    ctaPara:
      'Añade a Sam a tu flujo de trabajo y los hallazgos se convertirán en cambios propuestos estructurados para que los editores humanos puedan aprobar, rechazar o aplazar con contexto.',
    guidanceFooterLabel: 'ESTADO DEL CAMBIO',
    guidanceFooterValue: 'Propuesto · a la espera de revisión',
  },

  review: {
    seoTitle: 'Worker de Revisión Editorial | WordPresto',
    metaDescription:
      'Helen reúne hallazgos y recomendaciones en un resumen de revisión estructurado para la acción humana, haciendo la revisión comprensible sin eliminar los matices.',
    h1: 'Convierte hallazgos complejos en una revisión editorial clara.',
    heroPara1:
      'La revisión de una página puede implicar problemas técnicos, carencias de contenido, dudas sobre evidencia, notas de legibilidad, problemas de intención y bloqueos de aprobación. Los editores necesitan un resumen claro, no otro montón de hallazgos inconexos. Helen reúne hallazgos y recomendaciones en un resumen de revisión estructurado para la acción humana. Hace que la revisión sea comprensible sin eliminar los matices.',
    heroPara2:
      'Para auditorías de página, análisis de contenido, preparación de la aprobación y la entrega entre los hallazgos de los Workers y las decisiones del editor.',
    problemEyebrow: 'Dónde fallan los resúmenes de revisión',
    problemH2: 'Una auditoría útil sigue fallando si el editor no puede actuar a partir de ella.',
    problemPara:
      'Demasiados hallazgos generan fatiga. Demasiado poco detalle oculta el riesgo. Un buen resumen de revisión necesita conservar las señales importantes y, al mismo tiempo, dejar clara la siguiente acción. Helen le da a los editores la versión que realmente pueden usar.',
    problemAnnotation: '↘ resume sin aplanar la evidencia',
    beforeStamp: 'Revisión poco clara',
    beforeHtml: `<p>Los hallazgos técnicos, de contenido y de evidencia aparecen por separado, sin un orden de acción claro.</p>`,
    beforeTags: ['Hallazgos dispersos', 'Sin resumen', 'Prioridad poco clara', 'Difícil de aprobar'],
    beforeNote: 'el editor tiene que reconstruir la historia',
    afterStamp: 'Resumen editorial',
    afterHtml: `<p>Helen agrupa los hallazgos, destaca los bloqueos y enumera las acciones de revisión por orden.</p>`,
    afterTags: ['Resumen claro', 'Priorizado', 'Revisable', 'Liderado por personas'],
    afterNote: 'el editor sabe qué necesita atención',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una capa de revisión para la toma de decisiones humanas.',
    helpsPara:
      'Helen lee los hallazgos disponibles y los convierte en un resumen tranquilo y estructurado. No aprueba, no edita, no aplica ni publica. Ayuda al editor a entender qué importa.',
    checks: [
      'Hallazgos y recomendaciones de los Workers',
      'Elementos de revisión manual',
      'Prioridad y gravedad',
      'Limitaciones de la evidencia',
      'Bloqueos de aprobación',
      'Orden de las acciones',
    ],
    improves: [
      'La claridad editorial',
      'La velocidad de la revisión humana',
      'La preparación de la aprobación',
      'La comprensión entre equipos',
    ],
    prepares: [
      'Resumen de revisión',
      'Lista de acciones priorizada',
      'Notas de revisión manual',
      'Resumen de bloqueos',
    ],
    surfaces: [
      'Los problemas críticos primero',
      'Elementos que necesitan criterio manual',
      'Hallazgos contradictorios o inciertos',
      'Recomendaciones que todavía no deberían avanzar',
    ],
    ioH2: 'De qué parte Helen, y qué produce.',
    worksFrom: [
      'Resultados de los Workers',
      'Elementos de la cola de revisión',
      'Cambios propuestos',
      'Limitaciones de evidencia',
      'Señales de aprobación',
    ],
    produces: [
      'Resumen de revisión editorial',
      'Lista de acciones prioritarias',
      'Notas de revisión manual',
      'Resumen de bloqueos',
      'Contexto de apoyo a la decisión',
    ],
    scenarios: [
      {
        title: 'Una revisión de página tiene demasiados hallazgos.',
        description: 'Helen los convierte en un resumen claro.',
      },
      {
        title: 'Un editor necesita la siguiente acción.',
        description: 'Ella destaca qué revisar primero.',
      },
      {
        title: 'Hace falta una entrega.',
        description: 'Helen hace legibles los hallazgos para alguien que no hizo el análisis.',
      },
      {
        title: 'La aprobación se acerca.',
        description: 'Ella saca a la luz los bloqueos y los elementos de revisión sin resolver.',
      },
      {
        title: 'Los hallazgos están mezclados entre equipos.',
        description: 'Helen agrupa los problemas técnicos, de contenido, de evidencia y de gobernanza en una sola revisión.',
      },
      {
        title: 'El equipo necesita una visión editorial tranquila.',
        description: 'Ella reduce el ruido sin ocultar preocupaciones importantes.',
      },
    ],
    boundaryH2: 'Helen resume. Los editores deciden.',
    boundaryPara:
      'Helen no aprueba contenido, no edita texto, no aplica cambios ni publica. Prepara un resumen de revisión para que las personas puedan tomar mejores decisiones.',
    boundaryChecklist: [
      'Helen resume hallazgos, nunca aprueba ni edita el contenido ella misma.',
      'Los bloqueos siempre se sacan a la luz, nunca se ocultan para que una página parezca lista.',
      'Los resúmenes conservan los matices importantes en lugar de aplanarlos.',
      'La revisión legal, de cumplimiento o de accesibilidad especializada nunca se sustituye.',
    ],
    willNot: [
      { color: 'red', text: 'Aprobar contenido automáticamente' },
      { color: 'red', text: 'Reescribir o aplicar correcciones' },
      { color: 'red', text: 'Ocultar bloqueos para que una página parezca lista' },
      { color: 'red', text: 'Publicar o escribir en cualquier CMS' },
      { color: 'red', text: 'Sustituir la revisión legal, de cumplimiento o de accesibilidad especializada' },
    ],
    relatedH2: 'Workers junto a los que trabaja Helen.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Organiza los cambios propuestos en elementos de decisión.',
        outputLabel: 'Cola de revisión',
        ctaLabel: 'Cómo organiza Riley',
      },
      {
        id: 'safe_change_planner',
        description: 'Convierte hallazgos en cambios propuestos.',
        outputLabel: 'Plan de cambios',
        ctaLabel: 'Cómo planifica Sam',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa el estado de la revisión para evaluar si está lista para la aprobación.',
        outputLabel: 'Puerta de aprobación',
        ctaLabel: 'Cómo evalúa Dana',
      },
    ],
    ctaH2: 'Dales a los editores la revisión sobre la que pueden actuar.',
    ctaPara:
      'Helen convierte los hallazgos de los Workers en un resumen editorial claro para que los revisores humanos puedan decidir qué pasa después.',
    guidanceFooterLabel: 'ESTADO DE LA REVISIÓN',
    guidanceFooterValue: 'Resumen listo · se necesita acción del editor',
  },

  editorial_approval_gate: {
    seoTitle: 'Worker de Puerta de Aprobación Editorial | WordPresto',
    metaDescription:
      'Dana lee los resultados ya producidos por los Workers y genera una puerta de aprobación conservadora, indicando al revisor humano si el contenido parece listo para revisión, necesita corrección o está bloqueado.',
    h1: 'Comprueba si el trabajo está listo para la aprobación humana.',
    heroPara1:
      'La aprobación no debería ser una sensación. Antes de que el contenido avance, el editor necesita saber si las comprobaciones clave están limpias, si quedan bloqueos y si todavía hace falta corrección, evidencia o revisión especializada. Dana lee los resultados ya producidos por los Workers y genera una puerta de aprobación conservadora. No aprueba automáticamente. Le dice al revisor humano si el contenido parece listo para revisión, necesita corrección o está bloqueado.',
    heroPara2:
      'Para comprobaciones editoriales finales, flujos de aprobación, preparación de la entrega al CMS y gobernanza de contenido.',
    problemEyebrow: 'Dónde fallan los flujos de aprobación',
    problemH2: 'El contenido avanza porque todo el mundo asume que otra persona ya lo comprobó.',
    problemPara:
      'Una página puede tener un buen texto y aun así contener carencias de evidencia sin resolver, problemas de accesibilidad, problemas de metadatos, dudas de confianza, bloqueos en la entrega al CMS o riesgo editorial. Si esos problemas están dispersos entre los resultados de los Workers, es fácil pasarlos por alto. Dana reúne el estado final de la revisión en una sola puerta.',
    problemAnnotation: '↘ comprueba si está listo antes de aprobar',
    beforeStamp: 'Aprobación laxa',
    beforeHtml: `<p>El borrador parece listo, pero las comprobaciones de evidencia, metadatos y accesibilidad todavía contienen elementos sin resolver.</p>`,
    beforeTags: ['Bloqueos sin resolver', 'Sin puerta final', 'Riesgos dispersos', 'Aprobación poco clara'],
    beforeNote: 'el editor tiene que ir a buscar los problemas',
    afterStamp: 'Puerta revisada',
    afterHtml: `<p>Dana resume si está listo, los bloqueos y las próximas acciones antes de que el editor humano apruebe.</p>`,
    afterTags: ['Puerta conservadora', 'Estado claro', 'Bloqueos priorizados', 'Decisión humana'],
    afterNote: 'la aprobación se vuelve más segura',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una puerta final conservadora antes de que el contenido avance.',
    helpsPara:
      'Dana revisa los resultados ya calculados por los Workers y determina si el contenido parece listo para la revisión editorial humana. No certifica el cumplimiento, no publica contenido ni aprueba automáticamente.',
    checks: [
      'Estado del informe de aprobación',
      'Problemas de riesgo editorial y de afirmaciones',
      'Carencias de evidencia',
      'Estado de accesibilidad',
      'Preparación de los metadatos SEO y del snippet en el SERP',
      'Señales de schema y de confianza',
      'Bloqueos de la entrega al CMS',
      'Calidad del borrador y estado de la revisión',
    ],
    improves: [
      'La confianza en la aprobación',
      'La gobernanza editorial',
      'La visibilidad de los bloqueos',
      'La preparación antes de la entrega o del flujo de publicación',
    ],
    prepares: [
      'Decisión de la puerta de aprobación',
      'Puntuación de preparación',
      'Lista de bloqueos',
      'Recomendaciones priorizadas',
    ],
    surfaces: [
      'Bloqueos definitivos',
      'Elementos que necesitan corrección',
      'Evidencia de revisión que falta',
      'Motivos por los que el contenido todavía no debería avanzar',
    ],
    ioH2: 'De qué parte Dana, y qué produce.',
    worksFrom: [
      'Resumen de revisión',
      'Cola de revisión',
      'Revisión de carencias de evidencia',
      'Hallazgos de riesgo editorial',
      'Resultados de accesibilidad, metadatos, schema y confianza',
    ],
    produces: [
      'Revisión de la puerta de aprobación',
      'Decisión de la puerta',
      'Puntuación de preparación',
      'Lista de bloqueos',
      'Recomendaciones priorizadas',
    ],
    scenarios: [
      {
        title: 'Una página está cerca de la aprobación final.',
        description: 'Dana comprueba si los hallazgos sin resolver de los Workers todavía bloquean el avance.',
      },
      {
        title: 'Han corrido varios Workers de revisión.',
        description: 'Ella combina el estado en una única puerta de preparación clara.',
      },
      {
        title: 'Un borrador avanza hacia la entrega al CMS.',
        description: 'Dana señala los bloqueos antes de que la entrega genere riesgo operativo.',
      },
      {
        title: 'El editor necesita un punto de decisión conservador.',
        description: 'Ella solo da "aprobado para revisión" cuando las comprobaciones están lo bastante limpias.',
      },
      {
        title: 'La gobernanza importa.',
        description: 'Dana mantiene visibles los problemas de riesgo, evidencia y accesibilidad antes del visto bueno final.',
      },
      {
        title: 'Una página todavía no debería avanzar.',
        description: 'Ella explica por qué y enumera las acciones de mayor prioridad.',
      },
    ],
    boundaryH2: 'Dana evalúa si está listo. Las personas aprueban.',
    boundaryPara:
      'Dana no aprueba contenido automáticamente, no certifica el cumplimiento, no publica ni escribe en un CMS. Su trabajo es hacer visible el estado de la aprobación para que un revisor humano pueda decidir.',
    boundaryChecklist: [
      'Dana evalúa si algo está listo, nunca aprueba el contenido ella misma.',
      'El cumplimiento (legal, médico, financiero, de accesibilidad) nunca lo certifica Dana.',
      'Los bloqueos siempre se sacan a la luz, nunca se ocultan para que el contenido parezca listo.',
      'La decisión de la puerta es conservadora: los elementos poco claros o sin resolver se dan por defecto como que necesitan corrección.',
    ],
    willNot: [
      { color: 'red', text: 'Aprobar contenido automáticamente' },
      { color: 'red', text: 'Certificar el cumplimiento legal, médico, financiero o de accesibilidad' },
      { color: 'red', text: 'Publicar o entregar contenido ella sola' },
      { color: 'red', text: 'Ocultar bloqueos para que el contenido parezca listo' },
      { color: 'red', text: 'Reescribir o aplicar correcciones' },
    ],
    relatedH2: 'Workers junto a los que trabaja Dana.',
    relatedWorkerIds: [
      {
        id: 'review',
        description: 'Resume los hallazgos y las acciones de revisión antes de la puerta final.',
        outputLabel: 'Resumen de revisión',
        ctaLabel: 'Cómo resume Helen',
      },
      {
        id: 'safe_change_planner',
        description: 'Convierte hallazgos en cambios propuestos que Dana puede evaluar en busca de bloqueos.',
        outputLabel: 'Plan de cambios',
        ctaLabel: 'Cómo planifica Sam',
      },
      {
        id: 'review_queue',
        description: 'Organiza los elementos sin resolver que Dana puede tratar como bloqueos de aprobación.',
        outputLabel: 'Cola de revisión',
        ctaLabel: 'Cómo organiza Riley',
      },
    ],
    ctaH2: 'Haz explícito si algo está listo antes de aprobarlo.',
    ctaPara:
      'Dana ayuda a los editores a ver si el contenido está listo para la aprobación humana, necesita corrección o debería bloquearse antes de la entrega.',
    guidanceFooterLabel: 'ESTADO DE LA PUERTA',
    guidanceFooterValue: 'Necesita corrección · se requiere decisión del editor',
  },

  site_discovery: {
    seoTitle: 'Worker de Descubrimiento del Sitio | WordPresto',
    metaDescription:
      'Claire ayuda a identificar las páginas de un proyecto de sitio web para que los editores puedan ver qué necesita revisión, dónde están las oportunidades de contenido y cómo empieza a encajar el sitio.',
    h1: 'Encuentra las páginas antes de que empiece el trabajo.',
    heroPara1:
      'Un flujo de trabajo de contenido sólido empieza por saber qué existe. Claire ayuda a identificar las páginas de un proyecto de sitio web para que los editores puedan ver qué necesita revisión, dónde están las oportunidades de contenido y cómo empieza a encajar el sitio. Le da al equipo una visión organizada de las páginas del sitio, señales de contenido tempranas y notas de descubrimiento, para que el resto de los Workers de Word Presto puedan partir de una imagen del proyecto más clara.',
    heroPara2:
      'Para proyectos de sitio web, auditorías de contenido, planificación de revisión de páginas, revisiones de enlazado interno e inteligencia de proyecto temprana.',
    problemEyebrow: 'Dónde los proyectos de sitio se vuelven un lío',
    problemH2: 'No puedes mejorar el contenido si no sabes con qué páginas estás trabajando.',
    problemPara:
      'La mayor parte del trabajo de contenido empieza demasiado tarde en el proceso. Los equipos se lanzan a una página, una palabra clave o un borrador antes de entender el sitio en su conjunto. Se pasan por alto páginas importantes. Las páginas débiles quedan ocultas. Se ignoran oportunidades de enlazado. El proyecto empieza con fragmentos en lugar de un mapa. Claire le da al flujo de trabajo un punto de partida más claro.',
    problemAnnotation: '↘ descubre las páginas y después decide qué necesita trabajo',
    beforeStamp: 'Punto de partida desordenado',
    beforeHtml: `<p>El equipo tiene una página de inicio, algunas páginas de servicio y algunas publicaciones de blog, pero no tiene una visión clara de qué debería revisarse primero.</p>`,
    beforeTags: ['Páginas dispersas', 'Prioridad de revisión poco clara', 'Imagen del sitio débil', 'Difícil de planificar'],
    beforeNote: 'el proyecto empieza a partir de fragmentos',
    afterStamp: 'Revisión de descubrimiento',
    afterHtml: `<p>Claire organiza las páginas conocidas, destaca comprobaciones de seguimiento y prepara el sitio para una revisión más profunda.</p>`,
    afterTags: ['Lista de páginas más clara', 'Mejor flujo de revisión', 'Señales de contenido visibles', 'Listo para los Workers'],
    afterNote: 'el equipo sabe por dónde empezar',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una capa de descubrimiento para proyectos de sitio web.',
    helpsPara:
      'Claire ayuda al equipo a entender las páginas que componen un proyecto de sitio web. Prepara la vista de partida para el inventario de contenido, la inspección de páginas, la revisión de enlaces y una inteligencia de proyecto más profunda.',
    checks: [
      'Páginas que deberían formar parte del proyecto',
      'Secciones del sitio y grupos de páginas',
      'Señales tempranas de contenido y estructura',
      'Páginas que pueden necesitar revisión',
      'Oportunidades de relación interna',
      'Comprobaciones de seguimiento para los editores',
    ],
    improves: [
      'La configuración del proyecto',
      'La planificación de auditorías de contenido',
      'La priorización de la revisión de páginas',
      'La visibilidad del enlazado interno y de la estructura del sitio',
    ],
    prepares: [
      'Revisión de descubrimiento del sitio',
      'Lista de páginas para inspección',
      'Notas tempranas de estructura del sitio',
      'Sugerencias de revisión de seguimiento',
    ],
    surfaces: [
      'Páginas que merece la pena inspeccionar',
      'Secciones que pueden ser escasas o poco claras',
      'Áreas donde la estructura del sitio necesita atención',
      'Páginas que pueden necesitar enlaces internos más sólidos',
    ],
    ioH2: 'De qué parte Claire, y qué produce.',
    worksFrom: [
      'Proyecto de sitio web',
      'Páginas conocidas del sitio',
      'Secciones del sitio',
      'Relaciones entre páginas',
      'Contexto de configuración del proyecto',
    ],
    produces: [
      'Revisión de descubrimiento del sitio',
      'Páginas para revisión',
      'Notas de secciones del sitio',
      'Sugerencias de relación interna',
      'Comprobaciones de seguimiento',
    ],
    scenarios: [
      {
        title: 'Empieza un nuevo proyecto de sitio web.',
        description: 'Claire ayuda a establecer qué páginas deberían formar parte de la primera revisión.',
      },
      {
        title: 'Una auditoría del sitio necesita estructura.',
        description: 'Le da a los editores una visión más clara de las páginas y secciones con las que están trabajando.',
      },
      {
        title: 'Un inventario de contenido necesita un punto de partida.',
        description: 'Claire prepara el contexto de descubrimiento de páginas antes de que Nora clasifique los activos.',
      },
      {
        title: 'El trabajo de enlazado interno necesita una vista del sitio.',
        description: 'Saca a la luz las relaciones entre páginas y las áreas que pueden necesitar revisión de enlaces.',
      },
      {
        title: 'El equipo no sabe por dónde empezar.',
        description: 'Claire ayuda a convertir un sitio web en un proyecto revisable.',
      },
      {
        title: 'Un proyecto necesita inteligencia más profunda.',
        description: 'Le da a otros Workers un mapa de partida más limpio antes de que continúe el análisis.',
      },
    ],
    boundaryH2: 'Claire descubre páginas. Los editores deciden qué importa.',
    boundaryPara:
      'Claire ayuda a organizar el sitio para la revisión. No decide la estrategia, no elimina páginas, no reescribe texto ni publica. Los editores eligen qué páginas inspeccionar, priorizar y mejorar.',
    boundaryChecklist: [
      'Claire organiza las páginas para revisión, nunca las edita ni las elimina ella misma.',
      'Las páginas descubiertas son una lista de partida para los editores, no un orden de prioridad automático.',
      'Las notas de estructura del sitio apoyan la planificación, no sustituyen el criterio humano sobre la estrategia.',
      'Las comprobaciones de seguimiento se enumeran con claridad para que los editores sepan qué falta confirmar.',
    ],
    willNot: [
      { color: 'red', text: 'Reescribir o editar contenido' },
      { color: 'red', text: 'Eliminar, fusionar o redirigir páginas' },
      { color: 'red', text: 'Publicar o escribir en cualquier CMS' },
      { color: 'red', text: 'Tratar cada página descubierta como automáticamente importante' },
      { color: 'red', text: 'Sustituir la revisión humana de las prioridades del sitio' },
    ],
    relatedH2: 'Workers junto a los que trabaja Claire.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Inspecciona páginas individuales una vez seleccionadas para revisión.',
        outputLabel: 'Señales de página',
        ctaLabel: 'Cómo inspecciona Patrick',
      },
      {
        id: 'content_inventory',
        description: 'Clasifica las páginas como activos de contenido y registra señales de planificación.',
        outputLabel: 'Revisión de inventario',
        ctaLabel: 'Cómo clasifica Nora',
      },
      {
        id: 'internal_linking',
        description: 'Revisa cómo se conectan las páginas seleccionadas con contenido relacionado.',
        outputLabel: 'Evaluación de enlaces',
        ctaLabel: 'Cómo revisa Leo',
      },
    ],
    ctaH2: 'Dale a cada proyecto de sitio web un punto de partida más claro.',
    ctaPara:
      'Claire ayuda a Word Presto a pasar de páginas dispersas a un flujo de revisión organizado, para que los editores sepan qué existe y por dónde debería empezar el trabajo.',
    guidanceFooterLabel: 'ESTADO DEL DESCUBRIMIENTO',
    guidanceFooterValue: 'Páginas listas para revisión',
  },

  page_inspector: {
    seoTitle: 'Worker de Inspección de Páginas | WordPresto',
    metaDescription:
      'Patrick inspecciona la página y extrae las señales de origen de las que depende el resto del flujo de trabajo: título, meta description, encabezados, enlaces, imágenes, schema, recuento de palabras y estructura visible de la página.',
    h1: 'Empieza por lo que la página realmente dice.',
    heroPara1:
      'Antes de que Word Presto recomiende cambios, la página tiene que leerse correctamente. Patrick inspecciona la página y extrae las señales de origen de las que depende el resto del flujo de trabajo: título, meta description, encabezados, enlaces, imágenes, schema, recuento de palabras y estructura visible de la página. Le da al equipo una imagen precisa y actual de la página tal como realmente es, no como alguien supone que es.',
    heroPara2:
      'Para revisión de páginas, auditorías de contenido, comprobaciones técnicas, elaboración de briefs y cualquier paso del flujo de trabajo que necesite partir de hechos confirmados sobre la página en lugar de suposiciones.',
    problemEyebrow: 'Dónde falla la revisión de páginas',
    problemH2: 'No puedes revisar una página que en realidad no has inspeccionado.',
    problemPara:
      'Los equipos suelen trabajar de memoria, a partir de una captura de pantalla antigua o de lo que se supone que contiene una página en lugar de lo que realmente contiene. Los títulos se reescriben sin comprobar el actual. Los encabezados se asumen en lugar de confirmarse. La falta de schema pasa desapercibida. La revisión empieza a partir de conjeturas en lugar de la propia página. Patrick inspecciona primero, para que el resto del flujo de trabajo empiece a partir de lo que realmente hay.',
    problemAnnotation: '↘ inspecciona primero, recomienda después',
    beforeStamp: 'Conjetura',
    beforeHtml: `<p>El equipo asume que la página todavía tiene el título antiguo, un H1 claro y enlaces internos que funcionan, sin comprobar la página en directo.</p>`,
    beforeTags: ['Título supuesto', 'Encabezados sin confirmar', 'Schema desconocido', 'Sin comprobación de origen'],
    beforeNote: 'la revisión empieza a partir de una suposición',
    afterStamp: 'Página inspeccionada',
    afterHtml: `<p>Patrick confirma el título, la meta description, los encabezados, los enlaces, las imágenes, el schema y el recuento de palabras en directo.</p>`,
    afterTags: ['Señales de origen confirmadas', 'Estructura mapeada', 'Schema comprobado', 'Lista para revisión'],
    afterNote: 'la revisión empieza a partir de hechos',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una capa de origen para la revisión a nivel de página.',
    helpsPara:
      'Patrick lee la página en directo y extrae sus señales de origen, dando a otros Workers y editores un punto de partida confirmado en lugar de uno supuesto.',
    checks: [
      'Título de la página y meta description',
      'Estructura y jerarquía de encabezados',
      'Estructura y secciones visibles de la página',
      'Enlaces internos y salientes',
      'Presencia de imágenes y texto alternativo',
      'Presencia de marcado de schema',
      'Recuento de palabras',
    ],
    improves: [
      'La precisión de la revisión de páginas',
      'Los puntos de partida de briefs y auditorías',
      'La confianza en las comprobaciones técnicas',
      'La calidad de la entrega a otros Workers',
    ],
    prepares: [
      'Resumen de señales de página',
      'Hechos de origen confirmados',
      'Notas de estructura para revisión',
      'Señalizaciones de elementos que faltan',
    ],
    surfaces: [
      'Títulos o descripciones que pueden necesitar atención',
      'Problemas en la estructura de encabezados',
      'Schema ausente o escaso',
      'Páginas con recuentos de palabras inusualmente bajos',
    ],
    ioH2: 'De qué parte Patrick, y qué produce.',
    worksFrom: [
      'URL de la página en directo',
      'Proyecto de sitio web',
      'Resultados del descubrimiento del sitio',
      'Metadatos existentes de la página',
    ],
    produces: [
      'Resumen de señales de página',
      'Título y meta description confirmados',
      'Notas de encabezados y estructura',
      'Inventario de enlaces e imágenes',
      'Comprobación de presencia de schema',
    ],
    scenarios: [
      {
        title: 'Se selecciona una página para revisión.',
        description: 'Patrick confirma exactamente qué contiene la página en directo antes de que empiece la revisión.',
      },
      {
        title: 'Hay que comprobar un título o una meta description.',
        description: 'Informa de los valores actuales en directo en lugar de lo que el equipo supone que son.',
      },
      {
        title: 'Hace falta una comprobación técnica.',
        description: 'Patrick saca a la luz señales de schema, encabezados y estructura para que Maya las evalúe más a fondo.',
      },
      {
        title: 'Un brief de contenido necesita hechos de origen.',
        description: 'Le da al redactor del brief una imagen confirmada de la página tal como está hoy.',
      },
      {
        title: 'Una auditoría cubre muchas páginas.',
        description: 'Patrick inspecciona cada página para que la auditoría se construya sobre información actual, no supuesta.',
      },
      {
        title: 'Toca revisión de intención de búsqueda o de evidencia.',
        description: 'Le entrega a Yuna y a Kenji una página de origen confirmada con la que trabajar.',
      },
    ],
    boundaryH2: 'Patrick informa de lo que dice la página. Los editores deciden qué hacer con ello.',
    boundaryPara:
      'Patrick inspecciona e informa de las señales de origen. No reescribe la página, no juzga la calidad, no asigna prioridad ni publica. Los editores y otros Workers usan sus hallazgos para decidir qué ocurre después.',
    boundaryChecklist: [
      'Patrick informa de la página tal como existe, nunca la edita ni la reescribe él mismo.',
      'Sus hallazgos son hechos de origen, no juicios de calidad ni decisiones de prioridad.',
      'Los elementos que faltan se señalan con claridad, nunca se asumen en silencio como correctos.',
      'El criterio técnico o editorial más profundo queda en manos del Worker o editor correspondiente.',
    ],
    willNot: [
      { color: 'red', text: 'Reescribir o editar el contenido de la página' },
      { color: 'red', text: 'Publicar o escribir en cualquier CMS' },
      { color: 'red', text: 'Juzgar la calidad del contenido o asignar prioridad' },
      { color: 'red', text: 'Suponer hechos de la página sin comprobar la página en directo' },
      { color: 'red', text: 'Sustituir la revisión humana de lo que significan los hallazgos' },
    ],
    relatedH2: 'Workers junto a los que trabaja Patrick.',
    relatedWorkerIds: [
      {
        id: 'technical_health',
        description: 'Toma las señales de página confirmadas y revisa el panorama técnico más amplio.',
        outputLabel: 'Hallazgos técnicos',
        ctaLabel: 'Cómo revisa Maya',
      },
      {
        id: 'intent_analyst',
        description: 'Usa la página inspeccionada para evaluar hasta qué punto coincide con la intención de búsqueda.',
        outputLabel: 'Evaluación de intención',
        ctaLabel: 'Cómo evalúa Yuna',
      },
      {
        id: 'evidence',
        description: 'Comprueba las afirmaciones de la página inspeccionada frente a la evidencia disponible.',
        outputLabel: 'Paquete de evidencia',
        ctaLabel: 'Cómo revisa Kenji',
      },
    ],
    ctaH2: 'Empieza cada revisión de página a partir de hechos confirmados.',
    ctaPara:
      'Patrick le da a Word Presto una lectura precisa de la propia página, para que el resto del flujo de trabajo se construya sobre lo que realmente hay.',
    guidanceFooterLabel: 'ESTADO DE LA INSPECCIÓN',
    guidanceFooterValue: 'Señales de página listas para revisión',
  },

  accessibility: {
    seoTitle: 'Worker de Accesibilidad | WordPresto',
    metaDescription:
      'Mara revisa las señales de accesibilidad disponibles en la evidencia de la página, señalando una estructura de encabezados débil, alternativas de imagen que faltan, texto de enlace poco claro, riesgos de legibilidad y comprobaciones que necesitan confirmación humana.',
    h1: 'Incorpora los problemas de accesibilidad al flujo de revisión.',
    heroPara1:
      'La accesibilidad determina si las personas pueden leer, navegar, entender y usar una página. Debería ser visible antes de que el contenido llegue a la aprobación. Mara revisa las señales de accesibilidad disponibles en la evidencia de la página. Señala problemas como una estructura de encabezados débil, alternativas de imagen que faltan, texto de enlace poco claro, riesgos de legibilidad y comprobaciones manuales que necesitan confirmación humana.',
    heroPara2:
      'Para revisiones de página, auditorías técnicas, comprobaciones de calidad de contenido y revisión final antes de la aprobación.',
    problemEyebrow: 'Dónde falla la revisión de accesibilidad',
    problemH2: 'Los equipos suelen comprobar la accesibilidad demasiado tarde.',
    problemPara:
      'Si la lógica de los encabezados es confusa, el texto de los enlaces es vago o las imágenes carecen de alternativas útiles, el problema debería ser visible durante la revisión, no después del lanzamiento. Mara incorpora esas señales al flujo de trabajo editorial en una fase temprana.',
    problemAnnotation: '↘ sácalo a la luz durante la revisión, no después del lanzamiento',
    beforeStamp: 'Comprobado demasiado tarde',
    beforeHtml: `<p>Una página se lanza con un orden de encabezados confuso, texto de enlace vago y alternativas de imagen que faltan, y nada de esto se detecta hasta después del lanzamiento.</p>`,
    beforeTags: ['Orden de encabezados poco claro', 'Texto de enlace vago', 'Texto alternativo ausente', 'Detectado tras el lanzamiento'],
    beforeNote: 'el problema aparece cuando ya está en directo',
    afterStamp: 'Revisión de accesibilidad',
    afterHtml: `<p>Mara señala los problemas de encabezados, texto de enlace, imágenes y legibilidad antes de que la página llegue a la aprobación.</p>`,
    afterTags: ['Problemas señalados a tiempo', 'Comprobaciones manuales enumeradas', 'Orientación de corrección lista', 'Revisado antes de la aprobación'],
    afterNote: 'el problema es visible antes del lanzamiento',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de accesibilidad sin certificación falsa.',
    helpsPara:
      'Mara convierte las señales de página disponibles en hallazgos de accesibilidad revisables. No afirma cumplimiento ni sustituye las pruebas manuales.',
    checks: [
      'Estructura de encabezados',
      'Presencia de texto alternativo en las imágenes',
      'Claridad del texto de los enlaces',
      'Señales de legibilidad',
      'Comprobaciones manuales de accesibilidad necesarias',
      'Riesgos de accesibilidad visibles en la evidencia de la página',
    ],
    improves: [
      'La visibilidad temprana de los problemas de accesibilidad',
      'La calidad de la entrega editorial',
      'La revisión habitual de accesibilidad a nivel de página',
      'La preparación antes de la aprobación',
    ],
    prepares: [
      'Hallazgos de accesibilidad',
      'Lista de verificación manual',
      'Notas de gravedad de los problemas',
      'Orientación de corrección para revisión humana',
    ],
    surfaces: [
      'Alternativas de imagen ausentes o débiles',
      'Texto de enlace vago',
      'Dudas sobre la estructura de encabezados',
      'Comprobaciones que necesitan una auditoría humana o especializada',
    ],
    ioH2: 'De qué parte Mara, y qué produce.',
    worksFrom: [
      'Estructura de la página',
      'Señales de imágenes',
      'Texto de enlaces y anclas',
      'Señales de legibilidad',
      'Hallazgos de la revisión técnica',
    ],
    produces: [
      'Revisión de accesibilidad',
      'Problemas detectados',
      'Comprobaciones manuales',
      'Orientación de corrección',
      'Estado de la revisión',
    ],
    scenarios: [
      {
        title: 'Se está revisando una página antes de la aprobación.',
        description: 'Mara añade una pasada de accesibilidad a la revisión antes de que la página avance.',
      },
      {
        title: 'La revisión técnica encontró problemas estructurales.',
        description: 'Ella comprueba si esos problemas también afectan a la lógica de encabezados o a la navegación.',
      },
      {
        title: 'Una página contiene muchas imágenes.',
        description: 'Mara señala las imágenes sin alternativas útiles para que los editores las resuelvan.',
      },
      {
        title: 'Los enlaces son vagos o repetitivos.',
        description: 'Saca a la luz el texto de enlace que necesita ser más claro para los lectores y para las tecnologías de apoyo.',
      },
      {
        title: 'La estructura de encabezados parece desordenada.',
        description: 'Mara revisa el orden de los encabezados y señala dónde puede confundir a los lectores o a los lectores de pantalla.',
      },
      {
        title: 'El equipo necesita notas de accesibilidad honestas.',
        description: 'Informa de lo que respalda la evidencia y enumera lo que todavía necesita una comprobación manual.',
      },
    ],
    boundaryH2: 'Mara señala problemas de accesibilidad. No certifica el cumplimiento.',
    boundaryPara:
      'Mara ofrece una pasada de accesibilidad solo de revisión, basada en la evidencia de página disponible. No sustituye las pruebas manuales, las pruebas con lectores de pantalla, la revisión legal ni una auditoría formal WCAG.',
    boundaryChecklist: [
      'Mara señala los problemas visibles en la evidencia de la página, nunca edita encabezados, enlaces o texto alternativo ella misma.',
      'Sus hallazgos son un punto de partida para la revisión, no una certificación de cumplimiento.',
      'Las comprobaciones que no puede verificar a partir de la evidencia disponible se enumeran como comprobaciones manuales, nunca se omiten en silencio.',
      'Las auditorías formales de accesibilidad y las decisiones de cumplimiento legal quedan en manos de un revisor humano cualificado.',
    ],
    willNot: [
      { color: 'red', text: 'Certificar el cumplimiento de accesibilidad' },
      { color: 'red', text: 'Realizar pruebas manuales completas con tecnología de apoyo' },
      { color: 'red', text: 'Editar encabezados, enlaces o texto alternativo automáticamente' },
      { color: 'red', text: 'Publicar correcciones de accesibilidad' },
      { color: 'red', text: 'Inventar problemas no respaldados por la evidencia de la página' },
    ],
    relatedH2: 'Workers junto a los que trabaja Mara.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrae la estructura de la página, los enlaces y las señales de imagen que Mara revisa.',
        outputLabel: 'Señales de página',
        ctaLabel: 'Cómo inspecciona Patrick',
      },
      {
        id: 'technical_health',
        description: 'Comprueba el SEO técnico y las señales relacionadas con la salud de la página.',
        outputLabel: 'Hallazgos técnicos',
        ctaLabel: 'Cómo revisa Maya',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa el estado de accesibilidad como parte de la revisión de preparación.',
        outputLabel: 'Puerta de aprobación',
        ctaLabel: 'Cómo decide Dana',
      },
    ],
    ctaH2: 'Haz visible la accesibilidad antes de la aprobación.',
    ctaPara:
      'Mara ayuda a los editores a ver los problemas de accesibilidad pronto, con claridad y honestidad, antes de que el contenido avance.',
    guidanceFooterLabel: 'ESTADO DE ACCESIBILIDAD',
    guidanceFooterValue: 'Necesita revisión · comprobaciones listas',
  },

  intent_analyst: {
    seoTitle: 'Worker de Análisis de Intención | WordPresto',
    metaDescription:
      'Yuna revisa si el contenido, la estructura, los metadatos y el siguiente paso de una página coinciden con la probable intención de búsqueda o del lector.',
    h1: 'Comprueba si la página coincide con lo que el lector vino a buscar.',
    heroPara1:
      'Una página puede estar bien escrita y aun así fallar en la intención. Puede responder a la pregunta equivocada, prometer más de lo que ofrece o mezclar varias necesidades del lector en una sola página confusa. Yuna revisa si el contenido, la estructura, los metadatos y el siguiente paso coinciden con la probable intención de búsqueda o del lector.',
    heroPara2:
      'Para revisiones de página, briefs de contenido, auditorías de SEO, reescrituras de página y planificación editorial guiada por la búsqueda.',
    problemEyebrow: 'Dónde falla la estrategia de contenido',
    problemH2: 'La página responde a algo, pero no siempre a lo que importa.',
    problemPara:
      'La intención de búsqueda es el motivo de la visita. Un lector puede querer una definición, una comparación, pruebas, una guía, pistas de precio, tranquilidad o una forma clara de actuar. Yuna comprueba si la página está sirviendo a ese motivo.',
    problemAnnotation: '↘ comprueba el motivo antes de la reescritura',
    beforeStamp: 'Intención poco clara',
    beforeHtml: `<p>La página se lee bien pero mezcla varias necesidades del lector en una sola sección, así que no está claro a qué pregunta responde realmente.</p>`,
    beforeTags: ['Necesidades del lector mezcladas', 'Los metadatos prometen de más', 'Sin siguiente paso claro', 'Intención sin confirmar'],
    beforeNote: 'la página se optimiza antes de que la intención esté clara',
    afterStamp: 'Evaluación de intención',
    afterHtml: `<p>Yuna confirma la intención probable, señala las carencias entre la promesa y lo que se ofrece, y recomienda un enfoque de página más claro.</p>`,
    afterTags: ['Intención confirmada', 'Carencias del lector enumeradas', 'Enfoque recomendado', 'Lista para reescribir'],
    afterNote: 'la reescritura apunta al motivo correcto',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de intención antes de la optimización.',
    helpsPara:
      'Yuna compara lo que la página parece prometer con lo que realmente ofrece. Ayuda al editor a ver si la función de la página es lo bastante clara antes de reescribirla, ampliarla o aprobarla.',
    checks: [
      'La probable intención del lector o de búsqueda',
      'La promesa de los metadatos frente a lo que ofrece la página',
      'Las preguntas del lector que faltan',
      'El ajuste del formato de la página',
      'El orden de las secciones',
      'La alineación del siguiente paso',
    ],
    improves: [
      'El ajuste a la intención de búsqueda',
      'La calidad del brief',
      'La claridad del propósito de la página',
      'La dirección de la reescritura',
    ],
    prepares: [
      'Evaluación de intención',
      'Carencias en las necesidades del lector',
      'Enfoque de página recomendado',
      'Próximas acciones alineadas con la búsqueda',
    ],
    surfaces: [
      'Desajuste de intención',
      'Objetivos de página mezclados o en competencia',
      'Información de decisión que falta',
      'Secciones que distraen del propósito de la página',
    ],
    ioH2: 'De qué parte Yuna, y qué produce.',
    worksFrom: [
      'Título de la página y metadatos',
      'Texto de la página',
      'Estructura de la página',
      'Señales de origen',
      'Contexto de tema o palabra clave, cuando está disponible',
    ],
    produces: [
      'Evaluación de intención',
      'Carencias en las necesidades del lector',
      'Notas sobre la promesa de búsqueda',
      'Rol de página recomendado',
      'Próximas acciones alineadas con la intención',
    ],
    scenarios: [
      {
        title: 'Una página posiciona pero no convierte.',
        description: 'Yuna comprueba si la página realmente sirve a la intención para la que posiciona.',
      },
      {
        title: 'Un borrador se nota disperso.',
        description: 'Identifica en torno a qué necesidad del lector debería construirse el borrador.',
      },
      {
        title: 'Los metadatos prometen algo que la página no ofrece.',
        description: 'Yuna señala la carencia entre la promesa de búsqueda y el contenido real.',
      },
      {
        title: 'Un brief de contenido necesita una necesidad del lector clara.',
        description: 'Le da al redactor del brief una intención confirmada en torno a la cual planificar.',
      },
      {
        title: 'Hace falta una decisión de formato de página.',
        description: 'Yuna le entrega a Ivan una evaluación de intención para comprobar el formato.',
      },
      {
        title: 'Las recomendaciones de SEO tiran en direcciones distintas.',
        description: 'Ella ancla la revisión en lo que el lector realmente vino a buscar.',
      },
    ],
    boundaryH2: 'Yuna aclara la intención. Los editores deciden la estrategia.',
    boundaryPara:
      'Yuna no reescribe la página, no elige la estrategia de negocio ni garantiza una mejora de posicionamiento. Le da a los editores una evaluación de intención revisable.',
    boundaryChecklist: [
      'Yuna evalúa la intención a partir de la página y su contexto, nunca reescribe el contenido ella misma.',
      'Su evaluación es un punto de partida para la planificación, no una decisión de estrategia.',
      'Los enfoques de página recomendados son sugerencias para los editores, no cambios automáticos.',
      'Los resultados de posicionamiento nunca se prometen ni se dan a entender en sus hallazgos.',
    ],
    willNot: [
      { color: 'red', text: 'Obtener o fabricar datos de SERP en directo' },
      { color: 'red', text: 'Reescribir contenido automáticamente' },
      { color: 'red', text: 'Garantizar una mejora de posicionamiento' },
      { color: 'red', text: 'Elegir la estrategia sin revisión humana' },
      { color: 'red', text: 'Publicar o escribir en cualquier CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Yuna.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrae las señales de origen que Yuna revisa.',
        outputLabel: 'Señales de página',
        ctaLabel: 'Cómo inspecciona Patrick',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Comprueba si el formato de la página coincide con la forma esperada en la búsqueda.',
        outputLabel: 'Revisión de formato',
        ctaLabel: 'Cómo comprueba Ivan',
      },
      {
        id: 'conversion_alignment',
        description: 'Comprueba si el siguiente paso encaja con la intención del lector.',
        outputLabel: 'Revisión de conversión',
        ctaLabel: 'Cómo comprueba Diane',
      },
    ],
    ctaH2: 'Haz que la página coincida con el motivo del lector.',
    ctaPara:
      'Yuna ayuda a asegurarse de que el trabajo de optimización apunta a la intención correcta antes de que el equipo reescriba o apruebe nada.',
    guidanceFooterLabel: 'ESTADO DE LA INTENCIÓN',
    guidanceFooterValue: 'Necesita revisión · carencias encontradas',
  },

  evidence: {
    seoTitle: 'Worker de Evidencia | WordPresto',
    metaDescription:
      'Kenji revisa la evidencia detrás de los hallazgos y las recomendaciones, comprobando la solidez del respaldo, las afirmaciones sin respaldo, la procedencia y las limitaciones antes de la aprobación.',
    h1: 'Sabe qué recomendaciones están realmente respaldadas.',
    heroPara1:
      'Los flujos de trabajo de contenido producen muchos consejos. Algunos están bien fundamentados. Otros son débiles. Algunos dependen de datos que faltan, de una recuperación parcial o de suposiciones que necesitan verificación manual. Kenji revisa la evidencia detrás de los hallazgos. Comprueba la solidez del respaldo, las recomendaciones sin respaldo, la procedencia y las limitaciones.',
    heroPara2:
      'Para auditorías de contenido, flujos de aprobación, revisión de carencias de evidencia, comprobaciones de riesgo y cualquier recomendación que necesite ser defendible.',
    problemEyebrow: 'Dónde fallan las recomendaciones',
    problemH2: 'Un consejo solo es útil si sabes qué lo respalda.',
    problemPara:
      'Una recomendación puede sonar segura y aun así apoyarse en evidencia débil. Puede ir más allá de lo que respaldan unas señales de página limitadas, depender de una recuperación que falta o dar a entender una certeza que el flujo de trabajo no tiene. Kenji protege a los editores de la falsa confianza.',
    problemAnnotation: '↘ separa lo probado de lo supuesto',
    beforeStamp: 'Falsa confianza',
    beforeHtml: `<p>Una recomendación se lee como un hecho consolidado, pero en realidad se apoya en una sola señal parcial sin ninguna recuperación que la respalde.</p>`,
    beforeTags: ['Respaldo poco claro', 'Procedencia ausente', 'Confianza exagerada', 'Sin verificar'],
    beforeNote: 'el consejo parece seguro pero no lo es',
    afterStamp: 'Paquete de evidencia',
    afterHtml: `<p>Kenji separa los hallazgos respaldados de los débiles y enumera exactamente qué todavía necesita verificación manual.</p>`,
    afterTags: ['Solidez del respaldo mostrada', 'Hallazgos débiles señalados', 'Procedencia anotada', 'Lista para aprobación'],
    afterNote: 'la confianza coincide con la evidencia',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Revisión de evidencia antes de la aprobación.',
    helpsPara:
      'Kenji revisa si los hallazgos están respaldados por el material de origen disponible, las señales de página, los estándares o el contexto recuperado. No inventa pruebas que faltan.',
    checks: [
      'Solidez del respaldo detrás de los hallazgos',
      'Recomendaciones sin respaldo',
      'Limitaciones de la evidencia',
      'Procedencia de la recuperación cuando existe',
      'Afirmaciones que necesitan verificación manual',
      'Áreas donde faltan datos',
    ],
    improves: [
      'La fiabilidad de los resultados de la revisión',
      'La confianza editorial',
      'La separación entre evidencia, inferencia y especulación',
    ],
    prepares: [
      'Revisión de fiabilidad de la evidencia',
      'Lista de hallazgos sin respaldo',
      'Notas de procedencia',
      'Indicaciones de verificación manual',
    ],
    surfaces: [
      'Afirmaciones que necesitan un respaldo más sólido',
      'Recomendaciones basadas en evidencia parcial',
      'Material de origen que falta',
      'Límites que deberían ser visibles antes de la aprobación',
    ],
    ioH2: 'De qué parte Kenji, y qué produce.',
    worksFrom: [
      'Señales de página',
      'Hallazgos de los Workers',
      'Procedencia de recuperación disponible',
      'Atribución de estándares',
      'Señales de carencias de evidencia y de riesgo',
    ],
    produces: [
      'Paquete de evidencia',
      'Revisión de solidez del respaldo',
      'Lista de hallazgos sin respaldo',
      'Resumen de limitaciones',
      'Notas de verificación manual',
    ],
    scenarios: [
      {
        title: 'Una recomendación necesita ser defendible.',
        description: 'Kenji comprueba qué la respalda realmente antes de que llegue a la aprobación.',
      },
      {
        title: 'Una página hace afirmaciones.',
        description: 'Revisa si esas afirmaciones tienen un respaldo adecuado detrás.',
      },
      {
        title: 'Un flujo de trabajo usa contexto recuperado.',
        description: 'Kenji comprueba la procedencia de ese contexto antes de que se use como base.',
      },
      {
        title: 'Se acerca una aprobación de contenido.',
        description: 'Le da a Dana un paquete de evidencia para que lo tenga en cuenta como parte de la revisión de preparación.',
      },
      {
        title: 'Los Workers no coinciden o producen hallazgos inciertos.',
        description: 'Kenji revisa el respaldo detrás de cada hallazgo para ayudar a los editores a juzgar en cuál confiar.',
      },
      {
        title: 'El tema es delicado o de alto riesgo.',
        description: 'Trabaja junto a Vera para señalar dónde se solapan la evidencia y el riesgo de cumplimiento.',
      },
    ],
    boundaryH2: 'Kenji revisa la evidencia. Los editores deciden qué hacer.',
    boundaryPara:
      'Kenji no certifica la verdad, el cumplimiento ni el impacto en el posicionamiento. Si falta evidencia, dice que falta.',
    boundaryChecklist: [
      'Kenji revisa el respaldo detrás de los hallazgos, nunca edita ni aprueba el contenido él mismo.',
      'La evidencia ausente o débil se informa con claridad, nunca se convierte en silencio en certeza.',
      'Su revisión es una aportación a la decisión de aprobación, no la decisión en sí.',
      'Las afirmaciones que van más allá de lo que respalda la evidencia disponible se señalan para verificación manual.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar citas, hechos o pruebas' },
      { color: 'red', text: 'Tratar la evidencia débil como certeza' },
      { color: 'red', text: 'Obtener fuentes no relacionadas como evidencia confirmada' },
      { color: 'red', text: 'Aprobar afirmaciones automáticamente' },
      { color: 'red', text: 'Publicar o editar contenido' },
    ],
    relatedH2: 'Workers junto a los que trabaja Kenji.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Aporta los hechos de origen para la revisión de evidencia.',
        outputLabel: 'Señales de página',
        ctaLabel: 'Cómo inspecciona Patrick',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Usa la evidencia y el contexto de las afirmaciones para señalar riesgos.',
        outputLabel: 'Informe de riesgo y cumplimiento',
        ctaLabel: 'Cómo señala riesgos Vera',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa el estado de la evidencia como parte de la revisión final de preparación.',
        outputLabel: 'Puerta de aprobación',
        ctaLabel: 'Cómo decide Dana',
      },
    ],
    ctaH2: 'Haz que las recomendaciones sean defendibles.',
    ctaPara:
      'Kenji ayuda a los editores a ver qué hallazgos están fundamentados, cuáles son débiles y cuáles necesitan más evidencia antes de la aprobación.',
    guidanceFooterLabel: 'ESTADO DE LA EVIDENCIA',
    guidanceFooterValue: 'Limitaciones señaladas · revisión necesaria',
  },

  internal_linking: {
    seoTitle: 'Worker de Relaciones de Contenido | WordPresto',
    metaDescription:
      'Leo revisa cómo se conecta una página con el resto del contenido: enlaces internos, enlaces externos, calidad de los anclajes, rutas del lector y si la página parece aislada o mal conectada.',
    h1: 'Comprueba si la página se conecta con el resto del sitio.',
    heroPara1:
      'Una página rara vez funciona sola. Necesita páginas relacionadas, recursos de apoyo, siguientes pasos claros y enlaces internos útiles. Leo revisa cómo se conecta la página con el resto del contenido. Comprueba los enlaces internos, los enlaces externos, la calidad de los anclajes, las rutas del lector y si la página parece aislada o mal conectada.',
    heroPara2:
      'Para revisiones de página, comprobaciones de enlazado interno, flujos de mejora de contenido y planificación editorial.',
    problemEyebrow: 'Dónde fallan las relaciones de contenido',
    problemH2: 'Una página útil puede seguir quedando fuera del recorrido.',
    problemPara:
      'Una página puede no tener un siguiente paso claro, un texto de anclaje vago, enlaces de apoyo débiles, demasiadas distracciones o ninguna relación evidente con el clúster temático que la rodea. Leo comprueba si la página se comporta como parte de un sitio conectado.',
    problemAnnotation: '↘ comprueba las conexiones, no solo el texto',
    beforeStamp: 'Página aislada',
    beforeHtml: `<p>La página se lee bien por sí sola, pero no tiene un siguiente paso claro, el texto de anclaje es vago y no hay un enlace evidente con el clúster temático que la rodea.</p>`,
    beforeTags: ['Sin siguiente paso', 'Anclajes vagos', 'Enlace de clúster débil', 'Se nota aislada'],
    beforeNote: 'la página queda fuera del recorrido',
    afterStamp: 'Revisión de relaciones',
    afterHtml: `<p>Leo revisa los enlaces y las rutas de la página y señala dónde las conexiones necesitan atención editorial.</p>`,
    afterTags: ['Rutas revisadas', 'Anclajes débiles señalados', 'Comprobaciones manuales enumeradas', 'Lista para revisión'],
    afterNote: 'las conexiones de la página son visibles',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una revisión de relaciones a nivel de página.',
    helpsPara:
      'Leo revisa los enlaces y las rutas visibles en la página. No rastrea todo el sitio ni confirma cada página huérfana. Le da a los editores una revisión de relaciones a nivel de página bien fundamentada.',
    checks: [
      'Presencia de enlaces internos',
      'Uso de enlaces externos',
      'Claridad del texto de anclaje',
      'Rutas de siguiente paso para el lector',
      'Riesgo de página huérfana a nivel de página',
      'Señales de contenido de apoyo',
    ],
    improves: [
      'El movimiento del lector entre páginas',
      'La utilidad de los enlaces internos',
      'La coherencia del clúster temático',
      'La visibilidad de las rutas débiles',
    ],
    prepares: [
      'Evaluación de enlaces',
      'Revisión de rutas',
      'Notas de calidad de anclajes',
      'Comprobaciones manuales del grafo del sitio',
    ],
    surfaces: [
      'Enlaces de siguiente paso que faltan',
      'Anclajes genéricos o débiles',
      'Enlaces que distraen',
      'Páginas que pueden necesitar más apoyo de clúster',
    ],
    ioH2: 'De qué parte Leo, y qué produce.',
    worksFrom: [
      'Enlaces de la página',
      'Texto de anclaje',
      'Estructura de la página',
      'Señales de intención',
      'Señales del inventario de contenido',
    ],
    produces: [
      'Revisión de relaciones',
      'Evaluación de enlaces internos',
      'Notas de calidad de anclajes',
      'Carencias en las rutas del lector',
      'Comprobaciones manuales del grafo del sitio',
    ],
    scenarios: [
      {
        title: 'Una página se nota aislada.',
        description: 'Leo comprueba si tiene los enlaces y las rutas que debería tener una página conectada.',
      },
      {
        title: 'Existen enlaces pero no ayudan al lector.',
        description: 'Revisa el texto de anclaje y su ubicación para comprobar su utilidad real, no solo su presencia.',
      },
      {
        title: 'Un clúster temático necesita conexiones más sólidas.',
        description: 'Leo le entrega a Zara una revisión de relaciones para comprobarla frente a la cobertura del clúster.',
      },
      {
        title: 'Una ruta de conversión no está clara.',
        description: 'Señala dónde le falta a la página un enlace de siguiente paso claro para el lector.',
      },
      {
        title: 'La página tiene enlaces que distraen.',
        description: 'Leo saca a la luz los enlaces que apartan la atención del propósito de la página.',
      },
      {
        title: 'El consejo sobre enlaces necesita contexto de origen.',
        description: 'Le da a Felix un punto de partida a nivel de página antes de una revisión de rutas más profunda.',
      },
    ],
    boundaryH2: 'Leo revisa las rutas. Los editores deciden qué enlaces cambian.',
    boundaryPara:
      'Leo no añade enlaces, no los elimina, no reescribe anclajes ni publica cambios. Muestra qué necesita revisión.',
    boundaryChecklist: [
      'Leo revisa los enlaces visibles en la página, nunca los añade ni los elimina él mismo.',
      'Su revisión cubre el nivel de página, no un estado de página huérfana confirmado a nivel de todo el sitio ni un rastreo.',
      'Las sugerencias de anclajes y rutas son para que las apliquen los editores, no cambios automáticos.',
      'Las páginas enlazadas se anotan, no se obtienen ni se revisan como si Leo las hubiera leído.',
    ],
    willNot: [
      { color: 'red', text: 'Reescribir texto de anclaje automáticamente' },
      { color: 'red', text: 'Añadir o eliminar enlaces' },
      { color: 'red', text: 'Confirmar el estado de página huérfana a nivel de todo el sitio sin datos del sitio' },
      { color: 'red', text: 'Obtener páginas enlazadas como si hubieran sido revisadas' },
      { color: 'red', text: 'Publicar o escribir en cualquier CMS' },
    ],
    relatedH2: 'Workers junto a los que trabaja Leo.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrae los enlaces y las señales de página que Leo revisa.',
        outputLabel: 'Señales de página',
        ctaLabel: 'Cómo inspecciona Patrick',
      },
      {
        id: 'topical_authority',
        description: 'Revisa el apoyo del clúster temático.',
        outputLabel: 'Revisión de cobertura',
        ctaLabel: 'Cómo revisa Zara',
      },
      {
        id: 'internal_link_pathway',
        description: 'Revisa las rutas de enlazado interno con más detalle.',
        outputLabel: 'Revisión de rutas',
        ctaLabel: 'Cómo revisa Felix',
      },
    ],
    ctaH2: 'Conecta la página con el sistema de contenido más amplio.',
    ctaPara:
      'Leo ayuda a los editores a ver si la página tiene enlaces útiles, anclajes claros y una ruta de lectura que merezca la pena seguir.',
    guidanceFooterLabel: 'ESTADO DE LA RELACIÓN',
    guidanceFooterValue: 'Necesita revisión · carencias de ruta encontradas',
  },

  review_queue: {
    seoTitle: 'Worker de Cola de Revisión | WordPresto',
    metaDescription:
      'Riley convierte los cambios propuestos en elementos de revisión estructurados, mostrando qué necesita una decisión humana, por qué importa y qué acción está disponible.',
    h1: 'Convierte los cambios propuestos en decisiones que un editor pueda gestionar.',
    heroPara1:
      'Una revisión de contenido puede generar docenas de hallazgos. Sin una cola, esos hallazgos se convierten en ruido: prioridad poco clara, sin estado de decisión, sin responsable y sin camino hacia la aprobación. Riley convierte los cambios propuestos en elementos de revisión estructurados. Cada elemento muestra qué necesita una decisión humana, por qué importa y qué acción está disponible.',
    heroPara2:
      'Para análisis de contenido, revisión de cambios, flujos de aprobación y cualquier página en la que varios Workers hayan planteado problemas.',
    problemEyebrow: 'Dónde fallan los flujos de revisión',
    problemH2: 'Los hallazgos no son lo mismo que las decisiones.',
    problemPara:
      'Una auditoría de página puede producir recomendaciones útiles, pero el editor todavía necesita saber qué aprobar, rechazar, aplazar o investigar. Sin esa capa, el flujo de trabajo se siente ocupado pero no operativo. Riley convierte los hallazgos en una cola que el equipo puede trabajar.',
    problemAnnotation: '↘ organiza las decisiones, no solo los hallazgos',
    beforeStamp: 'Montón de hallazgos',
    beforeHtml: `<p>Varios Workers han planteado problemas en la página, pero no hay una visión compartida de qué necesita una decisión, ni en qué orden.</p>`,
    beforeTags: ['Sin prioridad', 'Sin estado de decisión', 'Sin responsable', 'Ocupado pero estancado'],
    beforeNote: 'la revisión parece activa pero no produce nada',
    afterStamp: 'Cola de revisión',
    afterHtml: `<p>Riley organiza los hallazgos en elementos de decisión, cada uno con su justificación y las acciones disponibles para el editor.</p>`,
    afterTags: ['Elementos priorizados', 'Decisiones pendientes', 'Sin ediciones aplicadas', 'Lista para la acción del editor'],
    afterNote: 'el equipo puede trabajarla en orden',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una capa de cola entre los hallazgos de los Workers y la aprobación humana.',
    helpsPara:
      'Riley no decide por el editor. Organiza los hallazgos en elementos revisables para que los editores puedan tomar decisiones sin perder el contexto.',
    checks: [
      'Cambios propuestos por los Workers de revisión',
      'El tipo de decisión necesaria',
      'La prioridad y el área afectada',
      'Si hace falta más evidencia',
      'Si un elemento debería aprobarse, rechazarse, aplazarse o asignarse',
    ],
    improves: [
      'La claridad del flujo de revisión',
      'El rendimiento editorial',
      'El seguimiento de decisiones',
      'La preparación para la aprobación humana',
    ],
    prepares: [
      'Cola de revisión',
      'Elementos de decisión pendientes',
      'Justificación del elemento',
      'Acciones disponibles para el editor',
    ],
    surfaces: [
      'Elementos que necesitan aprobación',
      'Elementos que necesitan más evidencia',
      'Elementos que deberían aplazarse',
      'Elementos con responsable o prioridad poco claros',
    ],
    ioH2: 'De qué parte Riley, y qué produce.',
    worksFrom: [
      'Planes de cambio seguro',
      'Hallazgos de los Workers',
      'Cambios propuestos',
      'Señales de evidencia y de riesgo',
      'Contexto de la revisión de página',
    ],
    produces: [
      'Cola de revisión',
      'Elementos de decisión',
      'Etiquetas de prioridad',
      'Justificación de la revisión',
      'Estados de acción pendiente',
    ],
    scenarios: [
      {
        title: 'Una página tiene muchas recomendaciones.',
        description: 'Riley las organiza en una cola que el editor puede trabajar en orden.',
      },
      {
        title: 'El editor necesita opciones de decisión.',
        description: 'Muestra qué acción está disponible para cada elemento: aprobar, rechazar, aplazar o asignar.',
      },
      {
        title: 'Una sesión de revisión se está volviendo caótica.',
        description: 'Riley devuelve la estructura convirtiendo hallazgos sueltos en elementos con seguimiento.',
      },
      {
        title: 'Varios Workers han planteado problemas relacionados.',
        description: 'Los agrupa para que el editor vea el panorama completo, no notas dispersas.',
      },
      {
        title: 'Una página avanza hacia la aprobación.',
        description: 'Riley le da a Dana una visión clara de qué elementos de la cola siguen sin resolver.',
      },
      {
        title: 'El equipo necesita una entrega limpia.',
        description: 'Mantiene visible el estado de la cola para que nada se pierda entre sesiones.',
      },
    ],
    boundaryH2: 'Riley organiza las decisiones. No las toma.',
    boundaryPara:
      'Riley no aprueba cambios, no edita contenido, no aplica correcciones ni publica. Coordina la cola de revisión para que las personas puedan decidir.',
    boundaryChecklist: [
      'Riley organiza los cambios propuestos en una cola, nunca los aprueba ni los rechaza él mismo.',
      'Las etiquetas de prioridad son un punto de partida para los editores, no una clasificación definitiva.',
      'Los elementos sin resolver permanecen visibles en la cola en lugar de descartarse en silencio.',
      'Las decisiones finales y los cambios de contenido siguen correspondiendo al editor y al Worker correspondiente.',
    ],
    willNot: [
      { color: 'red', text: 'Aprobar o rechazar elementos automáticamente' },
      { color: 'red', text: 'Aplicar cambios de contenido' },
      { color: 'red', text: 'Publicar o escribir en cualquier CMS' },
      { color: 'red', text: 'Ocultar elementos de revisión sin resolver' },
      { color: 'red', text: 'Sustituir la toma de decisiones humana' },
    ],
    relatedH2: 'Workers junto a los que trabaja Riley.',
    relatedWorkerIds: [
      {
        id: 'safe_change_planner',
        description: 'Convierte hallazgos en cambios propuestos que Riley puede poner en cola.',
        outputLabel: 'Plan de cambios',
        ctaLabel: 'Cómo planifica Sam',
      },
      {
        id: 'review',
        description: 'Resume los hallazgos y las acciones de revisión para el editor.',
        outputLabel: 'Resumen de revisión',
        ctaLabel: 'Cómo revisa Helen',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Comprueba si los elementos sin resolver de la cola bloquean la aprobación.',
        outputLabel: 'Puerta de aprobación',
        ctaLabel: 'Cómo decide Dana',
      },
    ],
    ctaH2: 'Haz manejable el trabajo de revisión.',
    ctaPara:
      'Riley convierte los hallazgos de los Workers en decisiones estructuradas para que los editores puedan pasar del análisis a la acción.',
    guidanceFooterLabel: 'ESTADO DE LA COLA',
    guidanceFooterValue: 'Revisión pendiente · decisiones necesarias',
  },
};
