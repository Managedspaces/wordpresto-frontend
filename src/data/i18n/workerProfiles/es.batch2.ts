import type { WorkerProfileTranslatable } from './types';

export const esBatch2: Record<string, WorkerProfileTranslatable> = {
  cms_handoff: {
    seoTitle: 'Worker de entrega al CMS | WordPresto',
    metaDescription:
      'Ravi empaqueta el contenido aprobado con la estructura, los metadatos y las notas necesarias para una entrega limpia a un CMS, sitio web o cliente. Para equipos que necesitan un paquete de contenido listo para publicar.',
    h1: 'Prepara el contenido aprobado para una entrega más limpia.',
    heroPara1:
      'El contenido aprobado que llega a un CMS sin los metadatos, las indicaciones de formato y las notas adecuadas genera trabajo justo donde debería ser sencillo. Ravi toma el borrador aprobado y produce un paquete de publicación completo: contenido, metadatos, notas de formato, campos del CMS. La entrega queda limpia desde la primera vez.',
    heroPara2:
      'Para equipos de contenido que hacen la entrega a desarrolladores, editores de CMS o clientes que gestionan su propia publicación.',
    problemEyebrow: 'Dónde las entregas generan trabajo extra',
    problemH2: 'Una mala entrega cuesta más tiempo que un mal borrador.',
    problemPara:
      'Un contenido que llega a un editor de CMS o a un desarrollador sin los metadatos, las notas de formato o las indicaciones de campo adecuadas se publica con errores, o se devuelve para pedir información. El paso de la entrega es barato de hacer bien y caro de hacer mal.',
    problemAnnotation: '↘ entrega bien hecha a la primera',
    beforeStamp: 'Sin empaquetar',
    beforeHtml: `<p><span class="ba-strike">Aquí tienes el contenido aprobado</span> en un documento de Word. La <span class="ba-strike">meta description está por ahí</span>, creo. Dinos si <span class="ba-strike">necesitas algo más</span>. Las <span class="ba-strike">imágenes están en mi carpeta de Descargas</span>.</p>`,
    beforeTags: ['Incompleto', 'Sin metadatos', 'El editor de CMS tiene que adivinar'],
    beforeNote: 'esto necesitará dos rondas más para resolverse',
    afterStamp: 'Empaquetado',
    afterHtml: `<p>Contenido, meta title, meta description, texto alternativo, slug de la URL, nombres de archivo de las imágenes y notas de los campos del CMS, todo <span class="ba-hl">empaquetado en un único documento de entrega</span> listo para que el editor de CMS lo publique.</p>`,
    afterTags: ['Completo', 'Listo para el CMS', 'Sin idas y vueltas'],
    afterNote: 'esto se puede publicar nada más recibirlo',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un paquete de publicación que los editores de CMS y los desarrolladores pueden usar de inmediato.',
    helpsPara:
      'Ravi produce el paquete de entrega completo que convierte el contenido aprobado en contenido publicable. Campos de metadatos, indicaciones de formato, slug de la URL, notas de imágenes: todo lo necesario para una primera publicación limpia.',
    checks: [
      'Si todos los campos de metadatos obligatorios están completos',
      'Si el formato es correcto para el CMS de destino',
      'Si las imágenes y los recursos están correctamente referenciados',
    ],
    improves: [
      'La integridad de la entrega, para que los editores de CMS puedan publicar sin tener que pedir nada más',
      'La calidad de los metadatos, para que los campos de SEO y accesibilidad sean correctos',
      'La coherencia de la publicación en todo un programa de contenido',
    ],
    prepares: [
      'Un paquete de entrega completo',
      'Notas de campos del CMS ya completadas',
      'Indicaciones de formato y de recursos',
    ],
    surfaces: [
      'Metadatos que faltan y necesitan la aportación del redactor o del cliente',
      'Contenido que no está listo para el CMS aunque esté aprobado',
      'Requisitos específicos del CMS que el contenido todavía no cumple',
    ],
    ioH2: 'De dónde parte Ravi y qué produce.',
    worksFrom: [
      'Borrador final aprobado',
      'Requisitos de los campos del CMS',
      'Brief de metadatos',
      'Directrices de marca',
      'Referencias de recursos e imágenes',
    ],
    produces: [
      'Paquete de entrega completo',
      'Notas de campos del CMS ya completadas',
      'Indicaciones de URL y slug',
      'Notas de imágenes y recursos',
      'Documento de contenido listo para publicar',
    ],
    scenarios: [
      {
        title: 'Un programa de contenido que hace la entrega a un editor de WordPress.',
        description:
          'Ravi produce un paquete de entrega que corresponde a cada campo de la plantilla del editor.',
      },
      {
        title: 'La construcción de un sitio en Astro donde el contenido debe estructurarse para el frontmatter.',
        description:
          'Empaqueta el contenido en el formato que necesita el desarrollador, incluyendo todos los campos del frontmatter.',
      },
      {
        title: 'Un cliente que gestiona su propio CMS pero le resultan confusas las entregas.',
        description:
          'Un documento de entrega claro y completo reduce los errores de publicación del cliente y las solicitudes de soporte.',
      },
      {
        title: 'Un lote de 30 páginas aprobadas que necesitan metadatos.',
        description:
          'Ravi trabaja el lote de forma consistente, para que cada página se empaquete con el mismo estándar.',
      },
      {
        title: 'Un proyecto de migración con contenido antiguo que necesita reempaquetarse.',
        description:
          'Actualiza los metadatos y las notas de formato para el nuevo CMS sin tocar el texto aprobado.',
      },
      {
        title: 'Un lanzamiento con fecha límite donde el editor de CMS tiene una hora para publicar.',
        description:
          'Un paquete de entrega completo significa que puede dedicar esa hora a publicar, no a perseguir información que falta.',
      },
    ],
    boundaryH2: 'Ravi empaqueta. Los equipos de publicación y los editores deciden qué se publica.',
    boundaryPara:
      'Un paquete de entrega es un documento listo para publicar, no un permiso para publicar. Qué se publica, cuándo y de qué forma es una decisión del equipo de publicación, del cliente o del director editorial.',
    boundaryChecklist: [
      'Ravi empaqueta contenido, nunca lo publica.',
      'Los paquetes de entrega están estructurados para que el equipo receptor los verifique.',
      'La información incompleta se señala, nunca se adivina.',
      'La entrega facilita la publicación, no la autoriza.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar contenido directamente' },
      { color: 'red', text: 'Aprobar contenido para su publicación' },
      { color: 'amber', text: 'Adivinar metadatos que faltan' },
    ],
    relatedH2: 'Workers con los que trabaja Ravi.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirma qué está aprobado antes de que empiece el empaquetado de la entrega.',
        outputLabel: 'Informe de aprobación',
        ctaLabel: 'Cómo aprueba Audrey',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Resuelve el cumplimiento normativo y el riesgo antes de producir el paquete de entrega.',
        outputLabel: 'Informe de riesgo y cumplimiento',
        ctaLabel: 'Cómo señala riesgos Vera',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Aporta la revisión final de calidad antes de la entrega.',
        outputLabel: 'Notas de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
    ],
    ctaH2: 'Prepara el contenido aprobado para una entrega más limpia.',
    ctaPara:
      'Incorpora a Ravi a tu flujo de trabajo y cada contenido aprobado llegará al CMS con todo lo necesario para publicarlo sin complicaciones.',
    guidanceFooterLabel: 'ESTADO DE LA ENTREGA',
    guidanceFooterValue: 'Listo para revisión del CMS',
  },

  editorial_risk_claims: {
    seoTitle: 'Worker de Riesgo Editorial y Afirmaciones | WordPresto',
    metaDescription:
      'Vera señala afirmaciones sin respaldo, declaraciones de riesgo y problemas de cumplimiento en el contenido antes de que se apruebe o se publique.',
    h1: 'Señala las afirmaciones de riesgo antes de que avancen.',
    heroPara1:
      'El contenido que incluye afirmaciones sin respaldo, un lenguaje legalmente arriesgado o problemas de cumplimiento no falla en el momento de la publicación, falla en el momento de la reclamación, el cuestionamiento o la auditoría. Vera revisa el contenido en busca de afirmaciones que no se pueden respaldar, declaraciones que generan responsabilidad legal y lenguaje que necesita el visto bueno de cumplimiento.',
    heroPara2:
      'Para equipos de contenido en sectores regulados, agencias con obligaciones de cumplimiento y cualquier equipo que publique afirmaciones que deban ser defendibles.',
    problemEyebrow: 'Dónde las afirmaciones se convierten en problemas',
    problemH2: 'El contenido de riesgo parece correcto hasta que se cuestiona.',
    problemPara:
      'Una afirmación que no se puede respaldar, una comparación que da a entender algo falso o un lenguaje que genera responsabilidad legal parecen un buen texto hasta que alguien los cuestiona. Detectarlos antes de publicar no cuesta nada. Resolverlos después sí.',
    problemAnnotation: '↘ señalar antes de publicar, no después',
    beforeStamp: 'Sin revisar',
    beforeHtml: `<p>Nuestra plataforma es <span class="ba-strike">la solución más segura</span> del mercado. <span class="ba-strike">Garantizamos</span> una protección de datos completa y nuestros clientes <span class="ba-strike">siempre logran</span> mejores resultados. Somos <span class="ba-strike">el líder del sector</span> en este ámbito.</p>`,
    beforeTags: ['Superlativos sin respaldo', 'Garantías sin matizar', 'Afirmaciones comparativas sin evidencia'],
    beforeNote: 'cada frase aquí es un riesgo',
    afterStamp: 'Revisado',
    afterHtml: `<p>Sección de seguridad de la plataforma: <span class="ba-hl">dos afirmaciones señaladas para respaldar con evidencia</span>, un superlativo necesita matizarse o eliminarse, el lenguaje de garantía necesita revisión legal antes de que esta pieza pueda aprobarse.</p>`,
    afterTags: ['Señalizaciones concretas', 'Necesidad de evidencia anotada', 'Revisión legal indicada'],
    afterNote: 'los riesgos son visibles antes de la aprobación',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una comprobación de cumplimiento que detecta los riesgos de las afirmaciones antes de que lleguen a publicación.',
    helpsPara:
      'Vera revisa el contenido en busca de las afirmaciones y el lenguaje que generan riesgo, no para eliminar un texto contundente, sino para asegurarse de que lo que se publica se pueda defender.',
    checks: [
      'Afirmaciones sin respaldo o sin matizar',
      'Lenguaje comparativo que da a entender una superioridad falsa',
      'Lenguaje sensible desde el punto de vista del cumplimiento en áreas reguladas',
    ],
    improves: [
      'El lenguaje de las afirmaciones, para que sea concreto y defendible',
      'La visibilidad del riesgo, para que quien aprueba tenga la información que necesita',
      'La documentación de cumplimiento con fines de auditoría',
    ],
    prepares: [
      'Un informe de riesgo y cumplimiento',
      'Señalizaciones concretas de afirmaciones con opciones de evidencia o corrección',
      'Notas de visto bueno de cumplimiento para la aprobación',
    ],
    surfaces: [
      'Afirmaciones que necesitan evidencia de terceros',
      'Lenguaje que requiere revisión legal',
      'Terminología de sectores regulados que necesita el visto bueno de un especialista',
    ],
    ioH2: 'De dónde parte Vera y qué produce.',
    worksFrom: [
      'Contenido en borrador o aprobado',
      'Directrices de cumplimiento',
      'Contexto normativo específico del sector',
      'Evidencia o fuentes de las afirmaciones',
      'Notas de cumplimiento anteriores',
    ],
    produces: [
      'Informe de riesgo y cumplimiento',
      'Afirmaciones señaladas con los requisitos de evidencia',
      'Documentación de visto bueno de cumplimiento',
      'Opciones de corrección para el lenguaje señalado',
      'Aportación para la aprobación de Audrey',
    ],
    scenarios: [
      {
        title: 'Una firma de servicios financieros que publica contenido sobre inversiones.',
        description:
          'Vera aplica los estándares de cumplimiento del sector al borrador antes de que llegue al equipo de cumplimiento.',
      },
      {
        title: 'Una marca del sector salud que hace afirmaciones sobre resultados.',
        description:
          'Las afirmaciones sobre resultados y eficacia se señalan para pedir evidencia clínica antes de la aprobación.',
      },
      {
        title: 'Una agencia que redacta contenido comparativo para un cliente.',
        description:
          'Las afirmaciones comparativas se revisan para comprobar su respaldo antes de que el cliente las vea.',
      },
      {
        title: 'El lanzamiento de un producto con afirmaciones de rendimiento contundentes.',
        description:
          'Vera señala qué afirmaciones necesitan evidencia y cuáles necesitan suavizarse antes de que el texto del lanzamiento se publique.',
      },
      {
        title: 'Una actualización de contenido que retoma páginas antiguas con afirmaciones desactualizadas.',
        description:
          'Identifica afirmaciones que en su día fueron ciertas pero que ya no son defendibles.',
      },
      {
        title: 'Una marca B2B que escribe sobre su posición en el mercado.',
        description:
          'Las afirmaciones de liderazgo y superioridad en el mercado se revisan para comprobar su respaldo antes de la publicación.',
      },
    ],
    boundaryH2: 'Vera señala. Los equipos legal y de cumplimiento toman las decisiones.',
    boundaryPara:
      'Un informe de riesgo es una aportación a la revisión editorial y de cumplimiento, no un visto bueno. Vera identifica los riesgos y los señala con claridad. Si se actúa sobre ellos, cómo hacerlo y si el contenido puede avanzar es una decisión de los equipos legal, de cumplimiento y editorial.',
    boundaryChecklist: [
      'Vera señala riesgos, nunca aprueba ni da el visto bueno al contenido.',
      'Los informes de riesgo están estructurados para la revisión editorial y legal.',
      'Las decisiones de cumplimiento se señalan, no se toman.',
      'El informe de riesgo respalda el visto bueno editorial, no sustituye a la revisión legal.',
    ],
    willNot: [
      { color: 'red', text: 'Dar el visto bueno legal' },
      { color: 'red', text: 'Aprobar contenido con señalizaciones de cumplimiento sin resolver' },
      { color: 'amber', text: 'Eliminar afirmaciones sin instrucción explícita' },
    ],
    relatedH2: 'Workers junto a los que trabaja Vera.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa la calidad antes de la comprobación de cumplimiento.',
        outputLabel: 'Notas de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
      {
        id: 'approval_report',
        description: 'Incluye las señalizaciones de cumplimiento en el informe de aprobación.',
        outputLabel: 'Informe de aprobación',
        ctaLabel: 'Cómo aprueba Audrey',
      },
      {
        id: 'cms_handoff',
        description: 'Recibe la confirmación del visto bueno antes de producir el paquete de entrega.',
        outputLabel: 'Paquete de entrega',
        ctaLabel: 'Cómo entrega Ravi',
      },
    ],
    ctaH2: 'Señala las afirmaciones de riesgo antes de que avancen.',
    ctaPara:
      'Incorpora a Vera a tu flujo de trabajo y los problemas de cumplimiento se identifican antes de la publicación, no después.',
    guidanceFooterLabel: 'REVISIÓN DE RIESGO',
    guidanceFooterValue: 'Necesita comprobación de evidencia',
  },

  content_refresh_brief: {
    seoTitle: 'Worker de Brief de Actualización de Contenido | WordPresto',
    metaDescription:
      'Iris elabora un brief estructurado para actualizar contenido existente: qué actualizar, qué eliminar y qué añadir. Para equipos que actualizan páginas con una dirección clara en lugar de ir a ciegas.',
    h1: 'Actualiza el contenido con un motivo más claro.',
    heroPara1:
      'Actualizar contenido sin un brief es la forma más segura de acabar con páginas que se han reescrito tres veces y que aún no funcionan. Iris elabora un brief de actualización estructurado que cubre qué actualizar, qué eliminar, qué añadir y por qué, para que cada actualización empiece con una dirección clara en lugar de una revisión a partir de cero.',
    heroPara2:
      'Para programas de actualización de contenido, migraciones de sitios con contenido existente y equipos que actualizan páginas para reflejar cambios en el producto, el público o el mercado.',
    problemEyebrow: 'Dónde fallan los proyectos de actualización',
    problemH2: 'Actualizar sin un brief produce una versión distinta del mismo problema.',
    problemPara:
      'Una actualización de contenido sin una dirección clara suele hacer una de dos cosas: actualizar lo que es fácil de actualizar y dejar intactos los problemas estructurales, o desencadenar una reescritura completa cuando una edición ligera habría bastado. Un brief de actualización define el alcance antes de que empiece el trabajo.',
    problemAnnotation: '↘ primero el brief de la actualización, luego el trabajo',
    beforeStamp: 'Sin brief',
    beforeHtml: `<p>¿Podemos <span class="ba-strike">actualizar esta página</span>? Se nota un poco <span class="ba-strike">desactualizada</span>. Quizá <span class="ba-strike">actualizar algo del texto</span> y <span class="ba-strike">añadir cosas nuevas</span>. En general, que quede <span class="ba-strike">mejor</span>.</p>`,
    beforeTags: ['Sin alcance', 'Sin dirección', 'Sin criterios de éxito'],
    beforeNote: 'esto producirá cambios al azar',
    afterStamp: 'Con brief',
    afterHtml: `<p><span class="ba-hl">Actualizar: introducción y sección de pruebas</span>. Eliminar: bloque de caso de estudio (desactualizado). Añadir: sección de funcionalidad del producto de la actualización del primer trimestre. Mantener: estructura y CTA. Justificación incluida para cada decisión.</p>`,
    afterTags: ['Alcance claro', 'Cambios concretos', 'Justificación incluida'],
    afterNote: 'los redactores saben exactamente qué hacer',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un brief de actualización que define el alcance del trabajo antes de que un redactor toque la página.',
    helpsPara:
      'Iris convierte una solicitud de actualización en un brief estructurado con instrucciones concretas de qué actualizar, eliminar y añadir, para que redactores y editores sepan exactamente para qué es la actualización y qué debe lograr.',
    checks: [
      'Si el propósito de la página sigue vigente',
      'Si merece la pena conservar las secciones existentes',
      'Si el alcance de la actualización es proporcional al problema',
    ],
    improves: [
      'La dirección de la actualización, para que sea concreta y no vaga',
      'La definición del alcance, para que el brief cubra el cambio, no solo la actualización',
      'La eficiencia del redactor, al eliminar la ambigüedad sobre qué hacer',
    ],
    prepares: [
      'Un brief de actualización estructurado',
      'Un plan de secciones a actualizar, eliminar y añadir',
      'Notas de justificación para quien encarga el brief',
    ],
    surfaces: [
      'Páginas que necesitan un cambio estructural, no solo una actualización',
      'Solicitudes de actualización sin una justificación clara',
      'Contenido que debería retirarse en lugar de actualizarse',
    ],
    ioH2: 'De dónde parte Iris y qué produce.',
    worksFrom: [
      'Contenido existente de la página',
      'Objetivos de la actualización o notas del motivo',
      'Análisis de contenido',
      'Actualizaciones de marca y producto',
      'Notas de cambios en el público o el mercado',
    ],
    produces: [
      'Brief de actualización estructurado',
      'Plan de secciones a actualizar, eliminar y añadir',
      'Notas de justificación de la actualización',
      'Brief de entrega para el redactor',
      'Alcance y criterios de éxito',
    ],
    scenarios: [
      {
        title: 'Una página de producto que necesita actualizarse tras un cambio de marca.',
        description:
          'Iris identifica qué hay que cambiar según la nueva dirección de marca y produce un brief de actualización concreto.',
      },
      {
        title: 'Un programa de contenido que actualiza 50 páginas en el primer trimestre.',
        description:
          'Elabora el brief de cada actualización de forma consistente, para que los redactores no tengan que reinventar el alcance en cada página.',
      },
      {
        title: 'Un sitio que ha crecido de forma orgánica y tiene páginas inconsistentes.',
        description:
          'Los briefs de actualización crean un estándar coherente para cada tipo de página.',
      },
      {
        title: 'Un archivo de blog con publicaciones desactualizadas pero que siguen generando tráfico.',
        description:
          'Iris elabora el brief de una actualización específica que mejora la precisión sin eliminar lo que a los lectores les resultaba útil.',
      },
      {
        title: 'Una nueva funcionalidad de producto que hay que añadir a páginas existentes.',
        description:
          'Define qué páginas hay que actualizar, qué añadir y dónde encaja.',
      },
      {
        title: 'Un cliente que sigue pidiendo pequeños cambios en las mismas páginas.',
        description:
          'Un brief de actualización adecuado resuelve los problemas de fondo en lugar de ir parcheándolos página por página.',
      },
    ],
    boundaryH2: 'Iris elabora el brief de la actualización. Redactores y editores hacen los cambios.',
    boundaryPara:
      'Un brief de actualización es un documento de alcance, no un conjunto de cambios aprobados. Iris define lo que hay que hacer; si se procede, y cómo, es una decisión editorial y del cliente.',
    boundaryChecklist: [
      'Iris elabora el brief de la actualización, nunca hace los cambios.',
      'Los briefs de actualización están estructurados para que redactores y editores los revisen.',
      'Las páginas recomendadas para retirar se señalan, no se eliminan.',
      'El brief de actualización respalda el alcance editorial, no lo define de forma unilateral.',
    ],
    willNot: [
      { color: 'red', text: 'Editar o reescribir páginas directamente' },
      { color: 'red', text: 'Retirar o eliminar contenido' },
      { color: 'amber', text: 'Ampliar el alcance de la actualización sin aprobación editorial' },
    ],
    relatedH2: 'Workers junto a los que trabaja Iris.',
    relatedWorkerIds: [
      {
        id: 'content_analyst',
        description: 'Aporta el análisis en el que se basa el brief de actualización.',
        outputLabel: 'Análisis de contenido',
        ctaLabel: 'Cómo analiza Omar',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Comprueba el borrador de la actualización frente al brief de actualización.',
        outputLabel: 'Informe de alineación',
        ctaLabel: 'Cómo comprueba Ada',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescribe las secciones señaladas en el brief de actualización.',
        outputLabel: 'Borrador trabajado',
        ctaLabel: 'Cómo reescribe Ellis',
      },
    ],
    ctaH2: 'Actualiza el contenido con un motivo más claro.',
    ctaPara:
      'Incorpora a Iris a tu flujo de trabajo y cada actualización empezará con un brief que indica a los redactores exactamente qué cambiar y por qué.',
    guidanceFooterLabel: 'ESTADO DE LA ACTUALIZACIÓN',
    guidanceFooterValue: 'Con brief · listo para el redactor',
  },

  content_distribution_brief: {
    seoTitle: 'Worker de Brief de Distribución de Contenido | WordPresto',
    metaDescription:
      'Nina crea un brief de distribución que define adónde debe ir el contenido aprobado y cómo debe adaptarse para cada canal.',
    h1: 'Planifica adónde debe ir después el contenido aprobado.',
    heroPara1:
      'El contenido aprobado que pasa directamente del visto bueno a un único canal desperdicia la mayor parte de su valor. Nina elabora un brief de distribución que asigna el contenido aprobado a los canales donde encaja, con notas de adaptación para cada uno, para que la misma pieza llegue más lejos sin diluirse.',
    heroPara2:
      'Para equipos de contenido, agencias y responsables de marketing que necesitan un plan de distribución estructurado y no una ocurrencia de última hora para redes sociales.',
    problemEyebrow: 'Dónde falla la distribución',
    problemH2: 'La mayor parte del contenido se publica una vez y se olvida.',
    problemPara:
      'El contenido extenso aprobado suele llegar a un solo canal, en un solo formato y en un solo momento. Las adaptaciones de canal que extenderían su alcance (extracto para newsletter, publicación en LinkedIn, tarjeta social, cita destacada) nunca llegan a hacerse porque no hay un plan para ellas. Un brief de distribución cambia eso.',
    problemAnnotation: '↘ planifica la distribución antes de publicar',
    beforeStamp: 'Sin plan',
    beforeHtml: `<p>¡Genial, el artículo está <span class="ba-strike">aprobado</span>! <span class="ba-strike">Publiquémoslo en LinkedIn</span> y <span class="ba-strike">enviémoslo en la newsletter</span>. Alguien puede <span class="ba-strike">escribir algunas publicaciones para redes sociales</span> si tiene tiempo. <span class="ba-strike">Probablemente esté bien tal cual</span>.</p>`,
    beforeTags: ['Sin plan de canales', 'Sin indicaciones de adaptación', 'Distribución al azar'],
    beforeNote: 'este contenido se usará una sola vez',
    afterStamp: 'Con brief',
    afterHtml: `<p>Sitio web: publicar la pieza completa. LinkedIn: <span class="ba-hl">resumen ejecutivo con el hallazgo clave</span>. Newsletter: extracto de 200 palabras, empezando por el problema. Redes sociales: tres citas con contexto. Notas de calendario y adaptación para cada canal.</p>`,
    afterTags: ['Específico por canal', 'Listo para adaptar', 'Distribución estructurada'],
    afterNote: 'el mismo contenido rinde más',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un brief de distribución que asigna el contenido aprobado a los canales con indicaciones de adaptación.',
    helpsPara:
      'Nina convierte el contenido aprobado en un brief de distribución por canales: adónde va, cómo se adapta a cada canal y qué necesita producir el redactor o el equipo de redes sociales para cada uno.',
    checks: [
      'Si el contenido encaja con los canales que se están planificando',
      'Si las necesidades de adaptación son adecuadas para cada canal',
      'Si el plan de distribución es proporcional al contenido',
    ],
    improves: [
      'La planificación de la distribución, para que sea específica por canal y no genérica',
      'Las indicaciones de adaptación, para que cada versión sirva a su canal',
      'El valor del contenido, al extender su alcance sin diluir la calidad',
    ],
    prepares: [
      'Un brief de distribución estructurado',
      'Notas de adaptación por canal',
      'Indicaciones de formato y extensión para cada canal',
    ],
    surfaces: [
      'Canales que no encajan bien con el contenido',
      'Contenido que se beneficiaría de reaprovecharse antes de distribuirse',
      'Conflictos de calendario o problemas de secuencia en la distribución',
    ],
    ioH2: 'De dónde parte Nina y qué produce.',
    worksFrom: [
      'Contenido aprobado',
      'Listado de canales y definiciones de audiencia',
      'Objetivos de distribución',
      'Directrices de voz de marca',
      'Calendario de publicación o notas de calendario',
    ],
    produces: [
      'Brief de distribución',
      'Notas de adaptación por canal',
      'Indicaciones de formato y extensión',
      'Notas de calendario de publicación',
      'Entrega al equipo de contenido o de redes sociales',
    ],
    scenarios: [
      {
        title: 'Un artículo extenso que necesita extractarse para LinkedIn y email.',
        description:
          'Nina elabora el brief de cada extracto de forma específica para que funcione en su canal y con su audiencia.',
      },
      {
        title: 'El lanzamiento de un producto con contenido que sale por cinco canales.',
        description:
          'Asigna el contenido del lanzamiento a cada canal con notas de calendario y adaptación en un solo brief.',
      },
      {
        title: 'Una agencia que produce contenido para un cliente con una combinación de canales compleja.',
        description:
          'El brief de distribución se convierte en la entrega a los equipos de redes sociales y email, no en una conversación aparte.',
      },
      {
        title: 'Un programa de contenido donde la distribución es una ocurrencia tardía.',
        description:
          'Nina integra la distribución en el flujo de trabajo en el momento de la aprobación, no como una tarea aparte.',
      },
      {
        title: 'Una investigación que puede sustentar varios formatos de contenido.',
        description:
          'Determina qué hallazgos funcionan en qué canales y elabora el brief de las adaptaciones en consecuencia.',
      },
      {
        title: 'Un equipo donde el redactor y el responsable de redes sociales trabajan por separado.',
        description:
          'Un brief de distribución conecta a los dos equipos sin que el redactor tenga que dar el brief directamente al equipo de redes sociales.',
      },
    ],
    boundaryH2: 'Nina planifica la distribución. Los equipos de contenido y redes sociales producen las adaptaciones.',
    boundaryPara:
      'Un brief de distribución es un plan, no contenido ya producido. Nina define adónde debe ir el contenido y cómo debe adaptarse. Las versiones adaptadas, las decisiones de publicación y el criterio sobre cada canal corresponden a los equipos de contenido y redes sociales.',
    boundaryChecklist: [
      'Nina elabora el brief de distribución, nunca produce el contenido adaptado.',
      'Los briefs de distribución están estructurados para que los equipos de canal actúen sobre ellos.',
      'Las dudas sobre el encaje de un canal se señalan, no se dan por hechas.',
      'El brief respalda a los equipos de canal, no sustituye su criterio.',
    ],
    willNot: [
      { color: 'red', text: 'Producir contenido adaptado para los canales' },
      { color: 'red', text: 'Publicar o programar contenido' },
      { color: 'amber', text: 'Ampliar el alcance de la distribución sin aprobación' },
    ],
    relatedH2: 'Workers junto a los que trabaja Nina.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirma que el contenido está aprobado antes de planificar la distribución.',
        outputLabel: 'Informe de aprobación',
        ctaLabel: 'Cómo aprueba Audrey',
      },
      {
        id: 'cms_handoff',
        description: 'Se encarga en paralelo de la entrega del canal principal.',
        outputLabel: 'Paquete de entrega',
        ctaLabel: 'Cómo entrega Ravi',
      },
      {
        id: 'content_refresh_brief',
        description: 'Reincorpora el contenido distribuido a la planificación de actualizaciones.',
        outputLabel: 'Brief de actualización',
        ctaLabel: 'Cómo actualiza Iris',
      },
    ],
    ctaH2: 'Planifica adónde debe ir después el contenido aprobado.',
    ctaPara:
      'Incorpora a Nina a tu flujo de trabajo y cada pieza aprobada saldrá con un plan de distribución por canales ya escrito.',
    guidanceFooterLabel: 'DISTRIBUCIÓN',
    guidanceFooterValue: 'Con brief · lista por canales',
  },

  seo_metadata: {
    seoTitle: 'Worker de Título y Metadatos SEO | WordPresto',
    metaDescription:
      'Nadia revisa el título SEO, la meta description y el H1 frente a la intención de búsqueda, y redacta opciones más claras para que el redactor las apruebe. Metadatos que se leen bien tanto para las personas como para los buscadores.',
    h1: 'Consigue que el título, la descripción y el H1 sean los correctos.',
    heroPara1:
      'El título, la meta description y el H1 son lo primero que ve un lector en los resultados de búsqueda, y lo más fácil de dejar para el final. Nadia los revisa frente a la página y a la intención que hay detrás de la búsqueda, señala lo que falta, es débil, demasiado largo o no da en el clavo, y redacta opciones más claras.',
    heroPara2:
      'Para redactores y editores que quieren unos metadatos que reflejen la página con honestidad, sin adivinar límites de caracteres ni perseguir palabras clave.',
    problemEyebrow: 'Dónde se gana o se pierde el clic',
    problemH2: 'Un buen contenido con un título débil sigue perdiendo el clic.',
    problemPara:
      'Los metadatos suelen escribirse al final, con prisa y por quien esté más cerca del botón de publicar. El resultado son títulos que repiten la marca, descripciones que repiten el H1 y páginas que venden por debajo de lo que realmente ofrecen. Nadia trata la capa que se ve en los resultados de búsqueda como parte de la redacción.',
    problemAnnotation: '↘ el título no dice nada, la descripción lo repite',
    beforeStamp: 'Débil',
    beforeHtml: `<p><strong>Título:</strong> <span class="ba-strike">Inicio | Blog | Nuestra Empresa S.L.</span><br/><strong>Descripción:</strong> <span class="ba-strike">Bienvenido a nuestro blog, donde escribimos sobre muchas cosas de nuestro sector.</span></p>`,
    beforeTags: ['No coincide con la intención', 'Saturado de marca', 'No dice nada'],
    beforeNote: 'quién haría clic en esto',
    afterStamp: 'Claro',
    afterHtml: `<p><strong>Título:</strong> <span class="ba-hl">Cómo elegir un flujo de trabajo de contenido (guía práctica)</span><br/><strong>Descripción:</strong> <span class="ba-hl">Un recorrido claro por cómo planificar, dar el brief, revisar y aprobar contenido, con las preguntas que hacerte antes de comprometerte.</span></p>`,
    afterTags: ['Coincide con la intención', 'Concreto', 'Promesa honesta'],
    afterNote: 'ahora se gana el clic',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un editor de metadatos que lee la intención, no solo las palabras clave.',
    helpsPara:
      'Nadia revisa el título, la descripción y el H1 como lo haría un editor cuidadoso: frente a para qué sirve la página y qué buscaba el lector, y después propone borradores que puedes aceptar, editar o rechazar.',
    checks: [
      'El título, la descripción y el H1 frente a la intención de búsqueda',
      'La extensión, las duplicaciones y el exceso de palabras clave',
      'Promesas que la página en realidad no cumple',
    ],
    improves: [
      'Títulos vagos convertidos en concretos y legibles',
      'Descripciones que dicen lo que ofrece la página',
      'Un H1 y un título que trabajan juntos, no en contra',
    ],
    prepares: [
      'Borradores de metadatos con indicaciones de extensión',
      'Un antes y un después claro para revisar',
      'Notas sobre la intención a la que apunta cada opción',
    ],
    surfaces: [
      'Títulos donde la intención es realmente confusa',
      'Afirmaciones en los metadatos que necesitan evidencia',
      'Redacción sensible desde el punto de vista del cumplimiento que hay que revisar',
    ],
    ioH2: 'De dónde parte Nadia y qué produce.',
    worksFrom: [
      'El contenido de la página y el H1 actual',
      'El título y la meta description existentes',
      'La intención de búsqueda detectada',
      'El tema o la búsqueda objetivo',
      'Las normas de marca y cumplimiento',
    ],
    produces: [
      'Opciones de borrador para el título SEO',
      'Borrador de meta description',
      'Sugerencias de H1',
      'Notas de extensión e intención',
      'Paquete de metadatos listo para revisar',
    ],
    scenarios: [
      {
        title: 'Un artículo sólido con un título olvidable.',
        description:
          'Nadia reescribe el título y la descripción para que coincidan con lo que los lectores realmente buscan, sin prometer de más.',
      },
      {
        title: 'Títulos que empiezan todos con el nombre de la marca.',
        description:
          'Mueve el valor al principio, para que la página empiece por lo que ofrece y no por quién la publicó.',
      },
      {
        title: 'Descripciones que simplemente repiten el encabezado.',
        description:
          'Nadia convierte un H1 repetido en una descripción que le dice al lector qué va a obtener de la página.',
      },
      {
        title: 'Una página que apunta a la intención equivocada.',
        description:
          'Cuando los metadatos prometen una cosa y la página entrega otra, señala el desajuste para que una persona lo resuelva.',
      },
      {
        title: 'Migrar un archivo de publicaciones antiguas.',
        description:
          'Revisa títulos y descripciones a gran escala y saca a la luz primero los más débiles, para que una revisión de metadatos empiece por donde importa.',
      },
      {
        title: 'Un tema regulado donde la redacción importa.',
        description:
          'Nadia redacta con cuidado y saca a la luz las afirmaciones que necesitan un visto bueno, en lugar de escribir una promesa que la página no puede respaldar.',
      },
    ],
    boundaryH2: 'Nadia redacta los metadatos. Las personas deciden qué se publica.',
    boundaryPara:
      'Un título es una promesa al lector. Nadia propone y revisa, pero está pensada para detenerse en el borrador. Nada de lo que escribe se publica ni se envía a un CMS sin que una persona lo apruebe antes.',
    boundaryChecklist: [
      'Nadia redacta los metadatos, nunca los publica.',
      'Cada opción se muestra para que un editor la apruebe.',
      'Los desajustes y las afirmaciones de riesgo se sacan a la luz, no se ocultan.',
      'Nadia respalda al redactor, no sustituye su criterio.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar o enviar al CMS' },
      { color: 'red', text: 'Prometer posiciones o tráfico' },
      { color: 'amber', text: 'Saturar de palabras clave para manipular la búsqueda' },
    ],
    relatedH2: 'Workers con los que trabaja Nadia.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Analiza cómo aparece la página en los resultados y dónde se pueden ganar snippets.',
        outputLabel: 'Revisión de snippets',
        ctaLabel: 'Cómo revisa Morgan',
      },
      {
        id: 'schema',
        description: 'Revisa los datos estructurados para que la página pueda optar a resultados más ricos.',
        outputLabel: 'Revisión de schema',
        ctaLabel: 'Cómo revisa Sofia',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Comprueba que el propio borrador esté claro y listo antes de cerrar los metadatos.',
        outputLabel: 'Notas de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
    ],
    ctaH2: 'Consigue que el título, la descripción y el H1 sean los correctos.',
    ctaPara:
      'Incorpora a Nadia a tu flujo de trabajo y cada página llegará a revisión con unos metadatos que la reflejan con honestidad y se leen bien en los resultados de búsqueda.',
    guidanceFooterLabel: 'METADATOS',
    guidanceFooterValue: 'Redactado · listo para revisión',
  },

  serp_snippet_opportunity: {
    seoTitle: 'Worker de Snippets en el SERP | WordPresto',
    metaDescription:
      'Morgan revisa cómo es probable que aparezca una página en los resultados de búsqueda y señala las oportunidades de snippet y de resultado enriquecido que merece la pena trabajar. Solo revisión, nunca una garantía.',
    h1: 'Da forma a cómo aparece la página en la búsqueda.',
    heroPara1:
      'Una página no solo posiciona, también aparece. El título, la descripción y la forma en que se estructura el contenido determinan lo que ve el lector en los resultados. Morgan revisa esos elementos del snippet y señala dónde una respuesta clara, una lista o una sección estructurada podrían ganar un resultado más rico.',
    heroPara2:
      'Para editores que quieren que sus páginas se lean bien en los resultados de búsqueda, no solo en la propia página.',
    problemEyebrow: 'Dónde la página se encuentra con los resultados',
    problemH2: 'El resultado que ve el lector no siempre es la página que escribiste.',
    problemPara:
      'El snippet lo construye el buscador, no tú. Si la página entierra su respuesta, no tiene una lista o una estructura de preguntas clara, o deja la descripción al azar, el resultado se lee tan plano como todo lo que lo rodea. Morgan revisa los elementos que dan forma a ese snippet, con honestidad, sin prometer que se vaya a conceder ningún destacado.',
    problemAnnotation: '↘ la respuesta está ahí, solo que enterrada',
    beforeStamp: 'Enterrada',
    beforeHtml: `<p><span class="ba-strike">Hay muchos factores que considerar y depende de una serie de cosas, que exploraremos en detalle a lo largo de este artículo en las secciones siguientes.</span></p>`,
    beforeTags: ['Sin respuesta clara', 'Sin estructura', 'Snippet plano'],
    beforeNote: 'no hay nada que el buscador pueda extraer',
    afterStamp: 'Extraíble',
    afterHtml: `<p><span class="ba-hl">Un flujo de trabajo de contenido tiene seis etapas: planificar, hacer el brief, escribir, revisar, mejorar y aprobar.</span> Cada una se explica a continuación.</p>`,
    afterTags: ['Respuesta directa', 'En formato de lista', 'Lista para snippet'],
    afterNote: 'ahora hay algo que destacar',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un revisor que lee la página como lo hace una página de resultados.',
    helpsPara:
      'Morgan analiza en conjunto el título, la descripción y la estructura de la página, y saca a la luz oportunidades concretas y revisables, para que la página tenga la mejor oportunidad honesta de conseguir un snippet claro y útil.',
    checks: [
      'La calidad del título y la descripción para los resultados',
      'Si la página responde directamente a su búsqueda',
      'Una estructura que admita listas, pasos o preguntas frecuentes',
    ],
    improves: [
      'Respuestas adelantadas y hechas explícitas',
      'Secciones trabajadas para un snippet más limpio',
      'Contenido basado en preguntas hecho más fácil de escanear',
    ],
    prepares: [
      'Una lista de oportunidades de resultados enriquecidos',
      'Mejoras de snippet sugeridas',
      'Notas sobre qué tipos de resultado encajan con la página',
    ],
    surfaces: [
      'Oportunidades que necesitan una comprobación de schema',
      'Afirmaciones que necesitarían evidencia para destacarse',
      'Casos donde la intención y el formato no coinciden',
    ],
    ioH2: 'De dónde parte Morgan y qué produce.',
    worksFrom: [
      'El título de la página y la meta description',
      'Los encabezados y la estructura del contenido',
      'La intención de búsqueda detectada',
      'Los patrones de preguntas y listas en la página',
      'La revisión de schema, cuando está disponible',
    ],
    produces: [
      'Revisión de oportunidades de snippet',
      'Sugerencias de resultados enriquecidos',
      'Notas de mejora de la estructura',
      'Priorización de mejoras rápidas',
      'Resumen listo para revisión',
    ],
    scenarios: [
      {
        title: 'Una guía práctica que nunca enumera sus pasos.',
        description:
          'Morgan sugiere una estructura numerada y clara para que los pasos se puedan leer de un vistazo y tengan alguna posibilidad de destacarse.',
      },
      {
        title: 'Una página de preguntas frecuentes con las respuestas escondidas en el texto.',
        description:
          'Señala dónde unas respuestas cortas y directas ayudarían tanto a los lectores como a la página de resultados.',
      },
      {
        title: 'Una guía sólida con una descripción plana.',
        description:
          'Morgan señala los elementos del snippet que están perjudicando a la página y se los pasa a Nadia para que los redacte de nuevo.',
      },
      {
        title: 'Una página que podría conseguir un resultado enriquecido.',
        description:
          'Anota qué tipos de resultado estructurado encajan de verdad y deriva el trabajo de schema a Sofia, sin prometer que Google vaya a concederlo.',
      },
      {
        title: 'Comparar dos páginas que compiten por la misma búsqueda.',
        description:
          'Morgan revisa cómo es probable que aparezca cada una y saca a la luz qué estructura sirve mejor al lector.',
      },
      {
        title: 'Una pregunta del lector enterrada tres párrafos más abajo.',
        description:
          'Recomienda empezar por la respuesta, para que la página sea útil de inmediato, tanto en la propia página como en la búsqueda.',
      },
    ],
    boundaryH2: 'Morgan revisa la oportunidad. El buscador sigue decidiendo.',
    boundaryPara:
      'Ninguna herramienta controla lo que muestra un buscador. Morgan revisa y recomienda, y tiene cuidado de no prometer nunca un snippet, una posición o tráfico. Cada sugerencia queda a criterio de una persona, que la valora y la aprueba.',
    boundaryChecklist: [
      'Morgan revisa snippets, nunca garantiza ninguno.',
      'Las recomendaciones se muestran para que un editor las apruebe.',
      'Las oportunidades que necesitan schema o evidencia se señalan.',
      'Morgan respalda al redactor, no sustituye su criterio.',
    ],
    willNot: [
      { color: 'red', text: 'Garantizar un featured snippet' },
      { color: 'red', text: 'Prometer posiciones o tráfico' },
      { color: 'amber', text: 'Forzar una estructura que perjudique la lectura' },
    ],
    relatedH2: 'Workers con los que trabaja Morgan.',
    relatedWorkerIds: [
      {
        id: 'seo_metadata',
        description: 'Redacta el título y la descripción que dan forma al snippet.',
        outputLabel: 'Borradores de metadatos',
        ctaLabel: 'Cómo redacta Nadia',
      },
      {
        id: 'schema',
        description: 'Revisa los datos estructurados de los que dependen los resultados enriquecidos.',
        outputLabel: 'Revisión de schema',
        ctaLabel: 'Cómo revisa Sofia',
      },
      {
        id: 'content_analyst',
        description: 'Evalúa el contenido subyacente del que se extrae el snippet.',
        outputLabel: 'Análisis de contenido',
        ctaLabel: 'Cómo revisa Omar',
      },
    ],
    ctaH2: 'Da forma a cómo aparece la página en la búsqueda.',
    ctaPara:
      'Incorpora a Morgan a tu flujo de trabajo y cada página llegará a revisión con sus oportunidades de snippet sacadas a la luz, con honestidad y listas para actuar sobre ellas.',
    guidanceFooterLabel: 'SNIPPET',
    guidanceFooterValue: 'Revisado · oportunidades anotadas',
  },

  schema: {
    seoTitle: 'Worker de Schema | WordPresto',
    metaDescription:
      'Sofia revisa los datos estructurados de una página y recomienda los tipos de schema que corresponden a lo que la página realmente es, para revisión humana. Sin campos inventados ni marcado falso.',
    h1: 'Describe la página para que las máquinas también la entiendan.',
    heroPara1:
      'Los datos estructurados le dicen a los buscadores qué es realmente una página: un artículo, un producto, una guía, un negocio. Sofia revisa el schema ya presente, evalúa qué representa realmente la página y recomienda los tipos que encajan, para que el marcado describa la página con honestidad.',
    heroPara2:
      'Para equipos que quieren unos datos estructurados que reflejen el contenido, y no un cúmulo de marcado copiado entre plantillas.',
    problemEyebrow: 'Dónde el marcado se aleja de la página',
    problemH2: 'Los datos estructurados solo ayudan cuando dicen la verdad.',
    problemPara:
      'El schema es fácil de copiar y difícil de mantener honesto. Las páginas heredan el marcado de una plantilla, se describen como algo que no son, o directamente no tienen ningún dato estructurado. Sofia revisa lo que hay frente a lo que la página realmente es, y recomienda los tipos que coinciden.',
    problemAnnotation: '↘ marcada como producto, se lee como un artículo',
    beforeStamp: 'Desajustado',
    beforeHtml: `<p><span class="ba-strike">@type: Product</span> en una página que claramente es una guía práctica, sin <span class="ba-strike">marcado Article o HowTo</span> por ningún lado.</p>`,
    beforeTags: ['Tipo incorrecto', 'Marcado heredado', 'No describe nada'],
    beforeNote: 'esto no es una página de producto',
    afterStamp: 'Ajustado',
    afterHtml: `<p><span class="ba-hl">@type: HowTo</span> con contexto de artículo, recomendado porque la página es una guía paso a paso. <span class="ba-hl">Sugerido para revisión.</span></p>`,
    afterTags: ['El tipo encaja con la página', 'Marcado honesto', 'Para aprobación'],
    afterNote: 'ahora el marcado coincide con la realidad',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un revisor que ajusta el schema a lo que la página realmente es.',
    helpsPara:
      'Sofia informa de los datos estructurados que detecta, evalúa el tipo de página aparente y recomienda el schema adecuado. Nunca inventa campos ni marca una página como algo que no es.',
    checks: [
      'Los datos estructurados ya presentes en la página',
      'Si los tipos detectados coinciden con el contenido',
      'El schema que falta y que la página podría usar con honestidad',
    ],
    improves: [
      'Recomendaciones de tipo que encajan con la página',
      'Un marcado que refleja el contenido real',
      'La claridad sobre para qué sirve cada tipo',
    ],
    prepares: [
      'Una revisión de schema con los tipos detectados',
      'Tipos recomendados para aprobación',
      'Notas de por qué encaja cada tipo',
    ],
    surfaces: [
      'Marcado que afirma más de lo que la página ofrece',
      'Campos que necesitarían datos reales para completarse',
      'Casos en los que una persona debería decidir el tipo',
    ],
    ioH2: 'De dónde parte Sofia y qué produce.',
    worksFrom: [
      'Los datos estructurados existentes',
      'El contenido y los encabezados de la página',
      'El tipo de página aparente',
      'El contexto del negocio o la organización',
      'La revisión técnica, cuando está disponible',
    ],
    produces: [
      'Informe del schema detectado',
      'Tipos de schema recomendados',
      'Justificación de cada recomendación',
      'Notas sobre los campos que necesitan datos reales',
      'Resumen de schema listo para revisión',
    ],
    scenarios: [
      {
        title: 'Una guía que arrastra marcado de producto de una plantilla.',
        description:
          'Sofia señala el desajuste y recomienda los tipos de artículo o de guía práctica que realmente describen la página.',
      },
      {
        title: 'Una página sin ningún dato estructurado.',
        description:
          'Evalúa qué es la página y recomienda un conjunto inicial razonable, para que una persona lo apruebe.',
      },
      {
        title: 'Una página de negocio sin detalles de la organización.',
        description:
          'Sofia señala el schema que describiría la organización, sin inventar datos para completarlo.',
      },
      {
        title: 'Unas preguntas frecuentes que podrían admitir marcado de FAQ.',
        description:
          'Anota la oportunidad y deriva las implicaciones de snippet a Morgan, dejando la decisión al editor.',
      },
      {
        title: 'Schema copiado en toda una sección.',
        description:
          'Sofia revisa dónde el marcado heredado ya no encaja con las páginas individuales en las que está.',
      },
      {
        title: 'Una página cargada de afirmaciones en un ámbito regulado.',
        description:
          'Saca a la luz el marcado que afirmaría más de lo que la página puede respaldar y lo deja para revisión humana.',
      },
    ],
    boundaryH2: 'Sofia recomienda el schema. Las personas aprueban el marcado.',
    boundaryPara:
      'Los datos estructurados son una declaración sobre la página. Sofia revisa y recomienda, pero nunca escribe marcado falso, inventa campos ni marca una página como algo que no es. Las recomendaciones pasan por aprobación humana antes de aplicarse.',
    boundaryChecklist: [
      'Sofia recomienda schema, nunca falsea el marcado.',
      'Los tipos detectados y las recomendaciones se muestran para revisión.',
      'Los campos que necesitan datos reales se señalan, no se completan.',
      'Sofia respalda al equipo, no sustituye su criterio.',
    ],
    willNot: [
      { color: 'red', text: 'Escribir marcado falso o inventado' },
      { color: 'red', text: 'Marcar una página como lo que no es' },
      { color: 'amber', text: 'Completar campos sin datos reales' },
    ],
    relatedH2: 'Workers con los que trabaja Sofia.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Conecta las oportunidades de schema con cómo aparece la página en los resultados.',
        outputLabel: 'Revisión de snippets',
        ctaLabel: 'Cómo revisa Morgan',
      },
      {
        id: 'technical_health',
        description: 'Comprueba las señales técnicas más amplias de las que depende la página.',
        outputLabel: 'Hallazgos técnicos',
        ctaLabel: 'Cómo revisa Maya',
      },
      {
        id: 'seo_metadata',
        description: 'Redacta el título y la descripción que acompañan al marcado.',
        outputLabel: 'Borradores de metadatos',
        ctaLabel: 'Cómo redacta Nadia',
      },
    ],
    ctaH2: 'Describe la página para que las máquinas también la entiendan.',
    ctaPara:
      'Incorpora a Sofia a tu flujo de trabajo y cada página llegará a revisión con unos datos estructurados que coinciden con lo que realmente es.',
    guidanceFooterLabel: 'SCHEMA',
    guidanceFooterValue: 'Revisado · tipos recomendados',
  },

  technical_health: {
    seoTitle: 'Worker de Salud Técnica | WordPresto',
    metaDescription:
      'Maya comprueba las señales técnicas que hay detrás de una página (metadatos, encabezados, indexabilidad y estructura) e informa de lo que necesita una mirada más de cerca. Basado en estándares y solo de revisión.',
    h1: 'Comprueba las señales técnicas que hay detrás de la página.',
    heroPara1:
      'Un buen texto puede verse frenado por problemas técnicos silenciosos: un título que falta, un orden de encabezados roto, una página que no se puede indexar. Maya revisa esas señales frente a estándares establecidos e informa de los hallazgos por categoría, para que nada técnico se deje al azar.',
    heroPara2:
      'Para editores y equipos de sitios web que quieren una lectura clara y basada en estándares de una página antes de que se publique.',
    problemEyebrow: 'Dónde el buen contenido rinde por debajo en silencio',
    problemH2: 'Una página sólida puede fallar por señales que nadie comprobó.',
    problemPara:
      'Los problemas técnicos casi nunca se anuncian. Una página con un meta title que falta, encabezados que se saltan niveles o un noindex accidental puede leerse perfectamente bien mientras rinde por debajo en silencio. Maya revisa estas señales frente a los estándares e informa, en un lenguaje claro, de lo que necesita atención.',
    problemAnnotation: '↘ se lee bien, pero está en noindex',
    beforeStamp: 'Sin comprobar',
    beforeHtml: `<p>Orden de encabezados: <span class="ba-strike">H1 → H3 → H3</span>. Meta title: <span class="ba-strike">ausente</span>. Indexable: <span class="ba-strike">no (noindex activado)</span>.</p>`,
    beforeTags: ['Encabezado saltado', 'Sin título', 'No indexable'],
    beforeNote: 'esto nunca se va a encontrar',
    afterStamp: 'Revisado',
    afterHtml: `<p>Orden de encabezados: <span class="ba-hl">H1 → H2 → H3</span>. Meta title: <span class="ba-hl">presente y revisado</span>. Indexable: <span class="ba-hl">sí</span>. Señalado para corregir antes de publicar.</p>`,
    afterTags: ['Jerarquía limpia', 'Título presente', 'Indexable'],
    afterNote: 'ahora lo básico se sostiene',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un revisor técnico que informa de hallazgos, no de ruido.',
    helpsPara:
      'Maya realiza comprobaciones técnicas basadas en estándares y agrupa lo que encuentra en categorías claras con puntuaciones, para que una persona pueda ver qué importa y decidir qué corregir. Revisa, no cambia la página.',
    checks: [
      'Los metadatos, los encabezados y la indexabilidad',
      'La estructura de la página y las señales técnicas',
      'La presencia de schema y lo básico de accesibilidad',
    ],
    improves: [
      'Una imagen clara de la salud técnica',
      'Hallazgos agrupados por categoría',
      'Un orden razonable en el que corregir las cosas',
    ],
    prepares: [
      'Hallazgos técnicos basados en estándares',
      'Puntuaciones por categoría para la página',
      'Notas sobre qué comprobar antes de publicar',
    ],
    surfaces: [
      'Problemas que necesitan que los resuelva un desarrollador',
      'Hallazgos que necesitan una decisión humana',
      'Señales que una sola página no puede confirmar por sí sola',
    ],
    ioH2: 'De dónde parte Maya y qué produce.',
    worksFrom: [
      'Los metadatos y los encabezados de la página',
      'Las señales de indexabilidad',
      'La estructura de la página y las secciones de contenido',
      'La presencia de schema',
      'Las señales de accesibilidad y técnicas',
    ],
    produces: [
      'Hallazgos de salud técnica',
      'Puntuaciones por categoría',
      'Problemas priorizados para revisar',
      'Notas para desarrolladores cuando hace falta',
      'Resumen técnico listo para revisión',
    ],
    scenarios: [
      {
        title: 'Una página con noindex activado por error.',
        description:
          'Maya lo señala antes de publicar, para que una página pensada para ser encontrada no quede escondida en silencio de la búsqueda.',
      },
      {
        title: 'Encabezados que saltan de H1 a H3.',
        description:
          'Informa de la jerarquía rota para que la estructura se lea de forma limpia para los lectores, la tecnología de asistencia y la búsqueda.',
      },
      {
        title: 'Una nueva plantilla antes de su lanzamiento.',
        description:
          'Maya revisa las señales técnicas en una página de muestra, para detectar los problemas una vez y no en cada página después.',
      },
      {
        title: 'Una actualización de contenido que tocó el marcado.',
        description:
          'Comprueba que los títulos, los encabezados y la indexabilidad se mantienen bien tras la edición.',
      },
      {
        title: 'Una página que se lee bien pero posiciona mal.',
        description:
          'Maya saca a la luz las señales técnicas que podrían estar frenándola, para que una persona lo investigue.',
      },
      {
        title: 'Entregar una lista de correcciones a un desarrollador.',
        description:
          'Agrupa los hallazgos por categoría y prioridad para que el trabajo técnico esté claro y delimitado.',
      },
    ],
    boundaryH2: 'Maya informa de los hallazgos. Las personas deciden las correcciones.',
    boundaryPara:
      'Una revisión técnica es información, no una instrucción. Maya comprueba e informa, pero no edita la página, no cambia ajustes ni publica nada. Sus hallazgos quedan para que una persona actúe sobre ellos.',
    boundaryChecklist: [
      'Maya revisa la página, nunca la edita.',
      'Los hallazgos se informan para que una persona actúe sobre ellos.',
      'Los problemas que necesitan a un desarrollador se señalan con claridad.',
      'Maya respalda al equipo, no sustituye su criterio.',
    ],
    willNot: [
      { color: 'red', text: 'Editar la página o cambiar ajustes' },
      { color: 'red', text: 'Publicar o poner nada en producción' },
      { color: 'amber', text: 'Dar por resuelta una corrección sin revisión humana' },
    ],
    relatedH2: 'Workers con los que trabaja Maya.',
    relatedWorkerIds: [
      {
        id: 'schema',
        description: 'Revisa los datos estructurados entre las señales técnicas.',
        outputLabel: 'Revisión de schema',
        ctaLabel: 'Cómo revisa Sofia',
      },
      {
        id: 'seo_metadata',
        description: 'Redacta los metadatos cuya presencia y calidad comprueba Maya.',
        outputLabel: 'Borradores de metadatos',
        ctaLabel: 'Cómo redacta Nadia',
      },
      {
        id: 'trust_author_credibility',
        description: 'Revisa las señales de confianza que acompañan a la salud técnica.',
        outputLabel: 'Revisión de confianza',
        ctaLabel: 'Cómo revisa Alex',
      },
    ],
    ctaH2: 'Comprueba las señales técnicas que hay detrás de la página.',
    ctaPara:
      'Incorpora a Maya a tu flujo de trabajo y cada página llegará a revisión con sus señales técnicas comprobadas frente a los estándares.',
    guidanceFooterLabel: 'TÉCNICO',
    guidanceFooterValue: 'Revisado · hallazgos registrados',
  },

  trust_author_credibility: {
    seoTitle: 'Worker de Confianza y Credibilidad del Autor | WordPresto',
    metaDescription:
      'Alex revisa las señales de confianza, autoría y credibilidad que rodean a una página, para que lectores y buscadores puedan ver quién respalda el contenido. Solo revisión, nunca inventadas.',
    h1: 'Muestra quién respalda el contenido.',
    heroPara1:
      'En temas que afectan al dinero, la salud o decisiones importantes, tanto los lectores como los buscadores quieren saber quién escribió esto y por qué se puede confiar en ello. Alex revisa el contexto del autor, la identidad de la organización, el respaldo de evidencia y las señales de credibilidad de una página, e informa de dónde la confianza está clara y dónde falta.',
    heroPara2:
      'Para equipos que publican contenido de asesoramiento o de mayor riesgo y quieren que su credibilidad sea visible, no algo que se dé por hecho.',
    problemEyebrow: 'Dónde la credibilidad queda sin decir',
    problemH2: 'Un buen consejo que no viene de nadie en concreto es difícil de creer.',
    problemPara:
      'Mucho contenido con una experiencia real se publica sin autor visible, sin contexto de la organización y sin ninguna señal de quién lo revisó. La experiencia es real, pero el lector no puede verla, y el buscador tampoco. Alex revisa las señales que hacen visible la credibilidad.',
    problemAnnotation: '↘ consejo experto, sin autor con nombre',
    beforeStamp: 'Sin atribuir',
    beforeHtml: `<p>Orientación médica publicada sin <span class="ba-strike">firma de autor</span>, sin <span class="ba-strike">revisor</span> y sin <span class="ba-strike">contexto de la organización</span>.</p>`,
    beforeTags: ['Sin autor', 'Sin revisión', 'Tema de alto riesgo'],
    beforeNote: '¿quién me está diciendo esto?',
    afterStamp: 'Atribuido',
    afterHtml: `<p>La misma orientación con un <span class="ba-hl">autor con nombre y credenciales</span>, <span class="ba-hl">un revisor</span> y un <span class="ba-hl">contexto de organización claro</span>. Señalado para el visto bueno.</p>`,
    afterTags: ['Autor con nombre', 'Con revisor', 'Titularidad clara'],
    afterNote: 'ahora la confianza es visible',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un revisor que comprueba si la confianza es realmente visible.',
    helpsPara:
      'Alex revisa la autoría, la titularidad de la organización, el respaldo de evidencia y las señales de credibilidad, devuelve una lectura de preparación y saca a la luz lo que necesita una mirada humana, especialmente en temas sensibles. Informa de señales, nunca inventa credenciales.',
    checks: [
      'La firma, la biografía y las credenciales del autor',
      'La titularidad y el contexto de la organización',
      'El respaldo de evidencia y las señales de revisión',
    ],
    improves: [
      'Una imagen clara de la preparación en materia de confianza',
      'Las carencias de autoría, hechas visibles',
      'Dónde se podría mostrar mejor la credibilidad',
    ],
    prepares: [
      'Una revisión de confianza y credibilidad',
      'Una lectura de preparación para la página',
      'Notas sobre el riesgo en temas sensibles',
    ],
    surfaces: [
      'Afirmaciones de alto riesgo que necesitan mostrar experiencia',
      'Contexto de autor o revisor que falta',
      'Decisiones de credibilidad para que las tome una persona',
    ],
    ioH2: 'De dónde parte Alex y qué produce.',
    worksFrom: [
      'El contexto y la firma del autor',
      'Las señales de organización y titularidad',
      'El respaldo de evidencia en la página',
      'La sensibilidad del tema (asesoramiento, salud, dinero)',
      'Las señales de credibilidad en el schema',
    ],
    produces: [
      'Revisión de confianza y credibilidad',
      'Una lectura de preparación en materia de confianza',
      'Notas de carencias de autoría',
      'Señalizaciones de riesgo en temas sensibles',
      'Resumen de confianza listo para revisión',
    ],
    scenarios: [
      {
        title: 'Un consejo de salud o finanzas sin autor con nombre.',
        description:
          'Alex señala la falta de autoría para que una persona real y cualificada pueda ser acreditada antes de que la página se publique.',
      },
      {
        title: 'Una organización respetada que nunca lo dice.',
        description:
          'Señala dónde el contexto y la titularidad de la organización podrían hacer visible una credibilidad que ya existe.',
      },
      {
        title: 'Una página que debería mostrar un revisor.',
        description:
          'Alex anota dónde una señal de "revisado por" tranquilizaría a los lectores en un tema de mayor riesgo.',
      },
      {
        title: 'Afirmaciones que se apoyan en una experiencia no demostrada.',
        description:
          'Saca a la luz dónde la página asume una autoridad que no ha demostrado, y deriva el trabajo de evidencia a Theo.',
      },
      {
        title: 'Preparar contenido para un sector regulado.',
        description:
          'Alex revisa las señales de confianza junto con Vera, para que la credibilidad y el cumplimiento se consideren juntos.',
      },
      {
        title: 'Una colaboración de invitado de un colaborador desconocido.',
        description:
          'Señala la falta de contexto del autor para que una persona pueda decidir cómo atribuirla y respaldarla.',
      },
    ],
    boundaryH2: 'Alex revisa las señales de confianza. Las personas respaldan la página.',
    boundaryPara:
      'La credibilidad no se puede fabricar. Alex revisa e informa, pero nunca inventa un autor, fabrica credenciales ni afirma una revisión que no ha ocurrido. Lo que saca a la luz queda para que una persona actúe sobre ello con honestidad.',
    boundaryChecklist: [
      'Alex revisa las señales de confianza, nunca las inventa.',
      'Las carencias de autoría se sacan a la luz para que una persona las cubra.',
      'Los riesgos en temas sensibles se señalan para revisión humana.',
      'Alex respalda al equipo, no sustituye su criterio.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar autores o credenciales' },
      { color: 'red', text: 'Afirmar una revisión que no ha ocurrido' },
      { color: 'amber', text: 'Asumir una autoridad que la página no ha demostrado' },
    ],
    relatedH2: 'Workers con los que trabaja Alex.',
    relatedWorkerIds: [
      {
        id: 'evidence_gap',
        description: 'Convierte la evidencia débil o ausente en una lista de comprobación clara.',
        outputLabel: 'Lista de comprobación de evidencia',
        ctaLabel: 'Cómo revisa Theo',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Señala las afirmaciones sin respaldo y el riesgo de cumplimiento antes de la aprobación.',
        outputLabel: 'Informe de riesgo y cumplimiento',
        ctaLabel: 'Cómo revisa Vera',
      },
      {
        id: 'schema',
        description: 'Revisa los datos estructurados que transmiten las señales de credibilidad.',
        outputLabel: 'Revisión de schema',
        ctaLabel: 'Cómo revisa Sofia',
      },
    ],
    ctaH2: 'Muestra quién respalda el contenido.',
    ctaPara:
      'Incorpora a Alex a tu flujo de trabajo y cada página llegará a revisión con sus señales de confianza y autoría comprobadas y visibles.',
    guidanceFooterLabel: 'CONFIANZA',
    guidanceFooterValue: 'Revisado · señales comprobadas',
  },

  evidence_gap: {
    seoTitle: 'Worker de Vacíos de Evidencia | WordPresto',
    metaDescription:
      'Theo convierte la evidencia débil o ausente en una lista de comprobación clara, para que las afirmaciones queden respaldadas antes de que una página se apruebe o se entregue. Qué respaldar, dónde encontrar la fuente y qué retener.',
    h1: 'Respalda las afirmaciones antes de publicarlas.',
    heroPara1:
      'El contenido está lleno de afirmaciones: cifras, comparaciones, declaraciones de hecho. Algunas son sólidas, otras son suposiciones, y otras no deberían publicarse hasta que se comprueben. Theo reúne los avisos de evidencia que surgen en todo el flujo de trabajo y los convierte en una única lista de comprobación práctica de qué respaldar, dónde encontrarlo y qué retener.',
    heroPara2:
      'Para editores y revisores que quieren que las afirmaciones estén respaldadas antes de la aprobación, no después de que un lector, o un regulador, se dé cuenta.',
    problemEyebrow: 'Dónde las afirmaciones se adelantan a la prueba',
    problemH2: 'Las afirmaciones de riesgo casi nunca son las que parecen de riesgo.',
    problemPara:
      'Una frase segura de sí misma se lee como un hecho, respalde algo o no. A lo largo de un borrador, cifras sin respaldo y comparaciones que suenan bien se cuelan porque nadie está siguiendo qué afirmación necesita una fuente. Theo reúne esos vacíos en una sola lista de comprobación, para que nada dependa de una suposición que nadie comprobó.',
    problemAnnotation: '↘ una cifra precisa, sin fuente',
    beforeStamp: 'Sin respaldo',
    beforeHtml: `<p>Nuestro método está <span class="ba-strike">demostrado que reduce el tiempo de revisión en un 40%</span> y es <span class="ba-strike">el más preciso del mercado</span>.</p>`,
    beforeTags: ['Sin fuente', 'Afirmación superlativa', 'Necesita evidencia'],
    beforeNote: '¿de dónde sale ese 40%?',
    afterStamp: 'Comprobado',
    afterHtml: `<p>Señalado: <span class="ba-hl">el "40%" necesita una fuente o hay que eliminarlo</span>. <span class="ba-hl">"El más preciso" necesita prueba o hay que reformularlo.</span> Se sugiere una redacción provisional segura.</p>`,
    afterTags: ['Fuente necesaria', 'Reformular o demostrar', 'Para revisión'],
    afterNote: 'ahora nada se publica basándose en una suposición',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una lista de comprobación que convierte la preocupación vaga en acciones concretas.',
    helpsPara:
      'Theo reúne los avisos de evidencia en una lista de comprobación estructurada: qué necesita respaldo, una fuente sugerida, el nivel de riesgo, si debería bloquear la aprobación y una redacción provisional segura. El trabajo de respaldar una afirmación sigue siendo cosa de las personas.',
    checks: [
      'Afirmaciones que carecen de fuente',
      'Cifras y comparaciones que necesitan prueba',
      'Declaraciones que podrían exagerar el caso',
    ],
    improves: [
      'Preocupaciones vagas convertidas en acciones claras',
      'Una vista única de todos los vacíos de evidencia',
      'Prioridad y riesgo de cada elemento',
    ],
    prepares: [
      'Una lista de comprobación de evidencia para la página',
      'Fuentes sugeridas que buscar',
      'Redacción provisional segura cuando resulta útil',
    ],
    surfaces: [
      'Afirmaciones que deberían bloquear la aprobación',
      'Declaraciones de alto riesgo para que una persona las valore',
      'Fuentes que necesitan que una persona las verifique',
    ],
    ioH2: 'De dónde parte Theo y qué produce.',
    worksFrom: [
      'Los avisos de evidencia del flujo de trabajo',
      'Las afirmaciones y cifras del borrador',
      'La sensibilidad y el riesgo del tema',
      'Las fuentes existentes en la página',
      'Las notas de revisión y cumplimiento',
    ],
    produces: [
      'Una lista de comprobación de evidencia consolidada',
      'Elementos que necesitan evidencia',
      'Fuentes sugeridas y niveles de riesgo',
      'Señalizaciones que bloquean la aprobación',
      'Redacción provisional segura',
    ],
    scenarios: [
      {
        title: 'Una estadística precisa sin cita.',
        description:
          'Theo señala la cifra, la marca como necesitada de una fuente y sugiere una redacción segura hasta que se encuentre una.',
      },
      {
        title: 'Un superlativo que la página no puede demostrar.',
        description:
          'Saca a la luz expresiones como "el mejor" o "el más preciso" como afirmaciones que necesitan evidencia o una reescritura antes de la aprobación.',
      },
      {
        title: 'Un borrador lleno de afirmaciones seguras de sí mismas.',
        description:
          'Theo reúne todas las afirmaciones sin respaldo en una sola lista de comprobación, para que un revisor no tenga que buscarlas línea por línea.',
      },
      {
        title: 'Un tema regulado cerca del visto bueno.',
        description:
          'Marca las afirmaciones que deberían bloquear la aprobación hasta que estén debidamente respaldadas, y pasa el riesgo a Vera.',
      },
      {
        title: 'Preparar una página para la entrega.',
        description:
          'Theo confirma que la lista de comprobación de evidencia está resuelta antes de que Audrey elabore el informe de aprobación.',
      },
      {
        title: 'Una afirmación que se apoya en una experiencia no visible.',
        description:
          'Se coordina con Alex para que tanto la autoridad como la evidencia se muestren, y no se den por hechas.',
      },
    ],
    boundaryH2: 'Theo encuentra los vacíos. Las personas aportan la prueba.',
    boundaryPara:
      'La evidencia es responsabilidad humana. Theo identifica qué necesita respaldo y cuán arriesgado es cada vacío, pero no inventa fuentes, no fabrica cifras ni aprueba una afirmación. Cubrir y verificar la evidencia sigue siendo cosa de las personas.',
    boundaryChecklist: [
      'Theo encuentra vacíos, nunca inventa evidencia.',
      'Cada elemento se muestra para que una persona lo resuelva.',
      'Las afirmaciones que deberían bloquear la aprobación se señalan.',
      'Theo respalda al revisor, no sustituye su criterio.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar fuentes o cifras' },
      { color: 'red', text: 'Aprobar una afirmación sin respaldo' },
      { color: 'amber', text: 'Dejar pasar una declaración de alto riesgo' },
    ],
    relatedH2: 'Workers con los que trabaja Theo.',
    relatedWorkerIds: [
      {
        id: 'trust_author_credibility',
        description: 'Revisa si la autoridad detrás de las afirmaciones es visible.',
        outputLabel: 'Revisión de confianza',
        ctaLabel: 'Cómo revisa Alex',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Señala las afirmaciones sin respaldo y el riesgo de cumplimiento antes de la aprobación.',
        outputLabel: 'Informe de riesgo y cumplimiento',
        ctaLabel: 'Cómo revisa Vera',
      },
      {
        id: 'approval_report',
        description: 'Incorpora la lista de comprobación de evidencia a la decisión de aprobación.',
        outputLabel: 'Informe de aprobación',
        ctaLabel: 'Cómo aprueba Audrey',
      },
    ],
    ctaH2: 'Respalda las afirmaciones antes de publicarlas.',
    ctaPara:
      'Incorpora a Theo a tu flujo de trabajo y cada página llegará a revisión con sus vacíos de evidencia reunidos en una sola lista de comprobación clara.',
    guidanceFooterLabel: 'EVIDENCIA',
    guidanceFooterValue: 'Comprobado · vacíos listados',
  },
};
