import type { WorkerProfileTranslatable } from './types';

export const esBatch1: Record<string, WorkerProfileTranslatable> = {
  voice_style: {
    seoTitle: 'Worker de voz y estilo | WordPresto',
    metaDescription:
      'Helena revisa cada borrador con tus normas de voz y ejemplos aprobados, y lo adapta a tu estilo de marca antes de la revisión. Para equipos que necesitan mantener una voz coherente.',
    h1: 'Mantén la voz en el trabajo.',
    heroPara1:
      'Cuando varios redactores y herramientas de IA trabajan sobre el mismo sitio, la voz de marca se desvía página a página. Helena lee tus normas de voz y tus ejemplos aprobados, y después revisa y da forma a cada borrador, de modo que siga sonando a ti cuando llega a revisión.',
    heroPara2:
      'Para equipos que necesitan una voz coherente en briefs, borradores, revisiones y contenido creado con ayuda de IA.',
    problemEyebrow: 'Dónde empieza a desviarse la voz',
    problemH2: 'La voz de marca es lo primero que se rompe en un flujo de trabajo asistido por IA.',
    problemPara:
      'Generar texto nunca fue lo difícil. Lo difícil es que cada redactor, y cada herramienta de IA, tiene su propia voz por defecto. En un sitio real, esa desviación marca la diferencia entre una marca y un montón de páginas sueltas.',
    problemAnnotation: '↘ el mismo párrafo, dos voces',
    beforeStamp: 'Fuera de voz',
    beforeHtml: `<p>En el <span class="ba-strike">vertiginoso panorama digital</span> actual, <span class="ba-strike">aprovechar</span> <span class="ba-strike">soluciones de IA de vanguardia</span> puede <span class="ba-strike">revolucionar</span> tu estrategia de contenido y desbloquear resultados <span class="ba-strike">que lo cambian todo</span>.</p>`,
    beforeTags: ['5 frases cliché', 'Sin estilo de marca', 'Suena genérico'],
    beforeNote: 'nada de esto suena a nosotros',
    afterStamp: 'En voz',
    afterHtml: `<p>La mayoría de los equipos de contenido no necesitan más producción. Necesitan una forma de mantener <span class="ba-hl">una sola voz en todas las páginas</span>, incluso cuando distintas personas, y la IA, se encargan de escribir.</p>`,
    afterTags: ['Clara y segura', 'Concreta', 'Fiel a la marca'],
    afterNote: 'ahora suena a la marca',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una editora de voz que compara cada borrador con tu estilo de marca.',
    helpsPara:
      'Helena hace el trabajo de una buena editora de voz: de forma constante, en cada página, antes de que nadie tenga que leer el borrador sin contexto.',
    checks: [
      'El tono frente a las normas de voz de marca',
      'Frases prohibidas y clichés',
      'La coherencia entre secciones',
    ],
    improves: [
      'Frases fuera de voz, reescritas en el estilo correcto',
      'Formulaciones vagas convertidas en concretas',
      'El ritmo y la legibilidad',
    ],
    prepares: [
      'Un borrador ya trabajado, listo para reescritura',
      'Notas de orientación de voz y estilo',
      'Una entrega limpia a revisión',
    ],
    surfaces: [
      'Decisiones de voz sobre las que no está segura',
      'Significados que pueden haber cambiado',
      'Afirmaciones que necesitan una revisión humana',
    ],
    ioH2: 'De qué parte Helena, y qué produce.',
    worksFrom: [
      'Normas de voz de marca',
      'Ejemplos aprobados',
      'El brief de contenido',
      'El borrador existente',
      'Notas de revisión',
    ],
    produces: [
      'Orientación de voz y estilo',
      'Borrador trabajado',
      'Sección reescrita',
      'Notas de revisión',
      'Paquete de entrega',
    ],
    scenarios: [
      {
        title: 'Tres redactores, una marca, tres voces.',
        description:
          'Helena revisa cada borrador con las mismas normas de voz, de modo que cambia la firma pero no la voz.',
      },
      {
        title: 'Borradores de IA correctos, pero que suenan como los de cualquiera.',
        description:
          'Elimina el registro genérico de la IA y acerca el texto a tu estilo de marca antes de la revisión.',
      },
      {
        title: 'Un nuevo freelance que todavía no ha encontrado la voz.',
        description:
          'Helena convierte un "casi, pero no del todo" en orientación concreta, a nivel de frase, que se puede aplicar directamente.',
      },
      {
        title: 'Migrar páginas antiguas con el tono descontrolado.',
        description:
          'Señala primero los casos más graves, para que la revisión de voz empiece donde realmente importa.',
      },
      {
        title: 'Una campaña que debe sentirse como una sola pieza, no como diez.',
        description:
          'En landing pages, correos y publicaciones, Helena mantiene una sola voz para que la campaña se lea como un conjunto.',
      },
      {
        title: 'Estás reescribiendo tus normas de voz y necesitas ponerlas a prueba.',
        description:
          'Pasa unas cuantas páginas reales por Helena para ver dónde funcionan de verdad las nuevas normas y dónde no.',
      },
    ],
    boundaryH2: 'Helena da forma a la voz. Las personas siguen decidiendo.',
    boundaryPara:
      'La voz es una cuestión de criterio, no una norma fija. Helena sugiere, revisa y prepara. Está diseñada deliberadamente para detenerse donde empieza el criterio editorial, y nada de lo que toca se publica sin que una persona lo apruebe.',
    boundaryChecklist: [
      'Helena sugiere reescrituras en voz, nunca publica.',
      'Las decisiones de voz se presentan de forma estructurada para que un editor las revise.',
      'Las frases inciertas o de riesgo se señalan, no se ocultan.',
      'Helena apoya el criterio editorial, nunca lo sustituye.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar o enviar al CMS' },
      { color: 'red', text: 'Anular la decisión de un editor' },
      { color: 'amber', text: 'Suavizar una elección deliberada' },
    ],
    relatedH2: 'Workers a los que Helena hace entrega.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Reescribe el borrador completo siguiendo las indicaciones de voz de Helena.',
        outputLabel: 'Borrador reescrito',
        ctaLabel: 'Cómo reescribe Ellis',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa el borrador trabajado para comprobar su claridad y si está listo.',
        outputLabel: 'Resumen de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
      {
        id: 'approval_report',
        description: 'Reúne la revisión en una decisión de aprobación clara.',
        outputLabel: 'Informe de aprobación',
        ctaLabel: 'Cómo aprueba Audrey',
      },
    ],
    ctaH2: 'Mantén la voz en el trabajo.',
    ctaPara:
      'Añade a Helena a tu flujo de trabajo de contenido y mantén una sola voz en todas las páginas, con aprobación humana antes de publicar nada.',
    guidanceFooterLabel: 'AJUSTE DE VOZ',
    guidanceFooterValue: 'Sólido · listo para revisión',
  },

  content_analyst: {
    seoTitle: 'Worker analista de contenido | WordPresto',
    metaDescription:
      'Omar revisa el contenido existente, el contexto y el propósito antes de empezar a editar o reescribir. Para equipos que necesitan un punto de partida claro antes de tocar una página.',
    h1: 'Entiende la página antes de reescribirla.',
    heroPara1:
      'La mayoría de las reescrituras empiezan por el lugar equivocado. Cambian lo que es fácil de cambiar, no lo que realmente hace falta cambiar. Omar lee primero la página existente: qué intenta conseguir, si lo consigue y qué merece la pena conservar. Eso da al trabajo que viene después una base sólida.',
    heroPara2:
      'Para revisiones de contenido, migraciones de sitio y cualquier reescritura que deba partir de evidencias y no de instinto.',
    problemEyebrow: 'Dónde fallan las reescrituras',
    problemH2: 'Reescribir sin leer es la forma más segura de perder lo que ya funcionaba.',
    problemPara:
      'Una página que lleva dos años publicada tiene algo dentro: una estructura a la que los lectores respondían, un tono que encajaba, secciones que posicionaban. Reescribir desde cero sin revisar antes lo que ya hay significa empezar cada proyecto más atrás de lo necesario.',
    problemAnnotation: '↘ primero el análisis, después el brief',
    beforeStamp: 'Sin análisis',
    beforeHtml: `<p>Necesitamos <span class="ba-strike">reescribir por completo</span> la página de inicio. Simplemente <span class="ba-strike">hazla más moderna</span> y <span class="ba-strike">añade más palabras clave</span>. La actual es <span class="ba-strike">demasiado larga y aburrida</span>.</p>`,
    beforeTags: ['Sin punto de partida', 'Dirección vaga', 'Nada sobre lo que construir'],
    beforeNote: 'reescribir a partir de una suposición',
    afterStamp: 'Análisis hecho',
    afterHtml: `<p>La página de inicio actual tiene <span class="ba-hl">una segunda y una tercera sección sólidas</span> que funcionan bien. El párrafo introductorio hay que sustituirlo. La estructura es correcta. No hace falta una reescritura completa.</p>`,
    afterTags: ['Punto de partida claro', 'Alcance concreto', 'Trabajo definido'],
    afterNote: 'ahora sabemos qué cambiar',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una lectura de contenido que mapea lo que ya existe antes de cambiar nada.',
    helpsPara:
      'Omar hace el trabajo de análisis que debería ocurrir antes de escribir cualquier brief, pero que casi nunca ocurre: leer la página existente para entender qué es y qué intenta conseguir.',
    checks: [
      'Si la página cumple el propósito que se le ha marcado',
      'Qué estructura y secciones ya funcionan',
      'Las diferencias entre la intención y el contenido actual',
    ],
    improves: [
      'El alcance de la reescritura, para que abarque menos pero cambie más',
      'La calidad del brief, al dar a los redactores un punto de partida real',
      'La priorización, para que los cambios más importantes vayan primero',
    ],
    prepares: [
      'Un resumen del análisis de contenido',
      'Una visión clara de qué mantener, cambiar o eliminar',
      'Un punto de partida para el brief o la fase de estructura',
    ],
    surfaces: [
      'Páginas en las que basta con una edición ligera',
      'Problemas estructurales que afectarán a cualquier reescritura',
      'Desajustes entre el propósito de la página y su contenido',
    ],
    ioH2: 'De qué parte Omar, y qué produce.',
    worksFrom: [
      'El contenido existente de la página',
      'El objetivo declarado de la página o el brief',
      'Las directrices de marca',
      'La definición de audiencia',
      'Notas de revisión previas, si las hay',
    ],
    produces: [
      'Resumen del análisis de contenido',
      'Qué mantener, cambiar o eliminar',
      'Notas de partida para el brief',
      'Informe de carencias',
      'Observaciones estructurales',
    ],
    scenarios: [
      {
        title: 'Una migración de sitio con 200 páginas por revisar.',
        description:
          'Omar lee cada página con el mismo criterio, señalando qué merece la pena conservar y qué debería retirarse.',
      },
      {
        title: 'Un brief de actualización sin alcance claro.',
        description:
          'Mapea el contenido existente para que el brief tenga un punto de partida concreto en lugar de una dirección genérica.',
      },
      {
        title: 'Un sitio web heredado que tú no construiste.',
        description: 'Omar te da una imagen rápida de lo que hay, qué funciona y qué es ruido.',
      },
      {
        title: 'Una página con buen rendimiento que te da miedo tocar.',
        description:
          'Identifica qué partes importan de verdad, para que puedas mejorar alrededor de ellas en lugar de sustituirlas.',
      },
      {
        title: 'Un cliente que insiste en una reescritura completa.',
        description:
          'El análisis suele revelar que basta con un ajuste ligero, lo que ahorra presupuesto y conserva lo que ya funciona.',
      },
      {
        title: 'Preparar el terreno para un redactor nuevo en la cuenta del cliente.',
        description:
          'Un análisis de contenido da a cualquier redactor un brief real, en lugar de empezar desde una página en blanco.',
      },
    ],
    boundaryH2: 'Omar analiza. Los editores y los clientes deciden.',
    boundaryPara:
      'El análisis de contenido es una aportación, no una instrucción. Omar mapea lo que hay y señala lo que importa. Qué cambia, qué se queda y qué se elimina es una decisión de criterio que corresponde al editor o al cliente.',
    boundaryChecklist: [
      'Omar revisa y analiza, nunca cambia el contenido directamente.',
      'Su análisis se presenta de forma estructurada para que un editor humano actúe sobre él.',
      'Las decisiones poco claras o discutidas se señalan, no se resuelven.',
      'El análisis apoya el criterio editorial, no lo sustituye.',
    ],
    willNot: [
      { color: 'red', text: 'Editar o reescribir páginas' },
      { color: 'red', text: 'Tomar decisiones finales sobre el alcance' },
      { color: 'amber', text: 'Anular las prioridades del cliente' },
    ],
    relatedH2: 'Workers a los que Omar pasa el trabajo.',
    relatedWorkerIds: [
      {
        id: 'structure',
        description: 'Usa el análisis para dar forma a la jerarquía y al flujo de las secciones.',
        outputLabel: 'Estructura de contenido',
        ctaLabel: 'Cómo estructura Marcus',
      },
      {
        id: 'content_brief_builder',
        description: 'Construye el brief a partir de las conclusiones del análisis.',
        outputLabel: 'Brief de contenido',
        ctaLabel: 'Cómo redacta el brief Luca',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescribe con una imagen clara de la página existente.',
        outputLabel: 'Borrador trabajado',
        ctaLabel: 'Cómo reescribe Ellis',
      },
    ],
    ctaH2: 'Entiende la página antes de reescribirla.',
    ctaPara:
      'Añade a Omar a tu flujo de trabajo y cada reescritura partirá de una imagen clara de lo que ya existe.',
    guidanceFooterLabel: 'ESTADO DEL ANÁLISIS',
    guidanceFooterValue: 'Completo · listo para el brief',
  },

  structure: {
    seoTitle: 'Worker de estructura | WordPresto',
    metaDescription:
      'Marcus da forma a los encabezados, las secciones y el flujo de la página para que el contenido tenga una estructura editorial clara antes o durante la redacción. Para páginas que necesitan una forma adecuada antes de empezar a escribir.',
    h1: 'Da a cada borrador una forma más clara.',
    heroPara1:
      'El contenido sin estructura es difícil de revisar, fácil de malinterpretar y frustrante de editar. Marcus mapea la jerarquía de encabezados, el orden de las secciones y el flujo del contenido, para que cada borrador empiece o continúe con una forma que tenga sentido tanto editorial como para el lector.',
    heroPara2:
      'Para páginas que necesitan una pasada de estructura antes de redactar, un reajuste a mitad de borrador o una reorganización una vez terminado.',
    problemEyebrow: 'Dónde se rompe la estructura',
    problemH2: 'Un contenido mal estructurado no se arregla escribiendo mejor.',
    problemPara:
      'Puedes mejorar cada frase de una página y aun así fallará si las secciones están en el orden equivocado, si los encabezados no cuentan una historia o si la idea más importante queda enterrada en medio del texto. La estructura no es maquetación, es lógica editorial.',
    problemAnnotation: '↘ primero la forma, después la escritura',
    beforeStamp: 'Sin estructura',
    beforeHtml: `<p>La página trata <span class="ba-strike">primero el precio, luego la introducción, luego las características y luego por qué elegirnos</span>. Cada sección se <span class="ba-strike">escribió por separado</span> y <span class="ba-strike">no hay un recorrido de lectura claro</span> por la página.</p>`,
    beforeTags: ['Secciones desordenadas', 'Sin flujo claro', 'Difícil de seguir'],
    beforeNote: 'los lectores no llegarán al final',
    afterStamp: 'Estructurada',
    afterHtml: `<p>La apertura establece el propósito. La sección de características sigue el orden de las preguntas del lector. Las pruebas van antes que el precio. <span class="ba-hl">Un recorrido de lectura claro, del problema a la decisión</span>.</p>`,
    afterTags: ['Flujo lógico', 'Orden editorial', 'Lista para redactar'],
    afterNote: 'los redactores pueden trabajar a partir de esto',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una arquitectura editorial que da a cada página un recorrido de lectura.',
    helpsPara:
      'Marcus hace el trabajo estructural que evita que el contenido se convierta en un montón de secciones sueltas. Toda página que pasa por una fase de estructura sale con una forma clara y defendible.',
    checks: [
      'La jerarquía de encabezados y la lógica de las secciones',
      'El orden de las secciones frente al recorrido del lector',
      'Elementos estructurales que faltan o están duplicados',
    ],
    improves: [
      'La secuencia de secciones, para que siga una lógica editorial',
      'La claridad de los encabezados, para que cada uno cumpla su función editorial',
      'El flujo de la página, de la apertura al cierre',
    ],
    prepares: [
      'Un esquema estructurado para el redactor',
      'La estructura de encabezados para el CMS',
      'Notas de secciones para el brief',
    ],
    surfaces: [
      'Decisiones estructurales que necesitan criterio editorial',
      'Secciones cuyo propósito no está claro',
      'Bloques de contenido que pertenecen a otra página',
    ],
    ioH2: 'De qué parte Marcus, y qué produce.',
    worksFrom: [
      'El brief de contenido o el objetivo declarado de la página',
      'El borrador existente o notas en bruto',
      'El análisis de contenido',
      'Las directrices de marca',
      'Notas sobre el recorrido del lector',
    ],
    produces: [
      'Esquema de contenido estructurado',
      'Jerarquía de encabezados ordenada',
      'Plan de secciones',
      'Notas de flujo para el redactor',
      'Recomendaciones estructurales',
    ],
    scenarios: [
      {
        title: 'Una página extensa escrita de una sentada que carece de forma.',
        description:
          'Marcus reorganiza las secciones en un orden de lectura claro sin que el redactor tenga que empezar de nuevo.',
      },
      {
        title: 'Un brief que necesita un esqueleto estructural antes de redactar.',
        description: 'Mapea la jerarquía de encabezados para que los redactores sepan exactamente qué va en cada lugar.',
      },
      {
        title: 'Una landing page con demasiadas secciones compitiendo entre sí.',
        description: 'Marcus identifica qué secciones se ganan su lugar y en qué orden deberían aparecer.',
      },
      {
        title: 'Una página migrada que se estructuró para un propósito distinto.',
        description: 'Reajusta la estructura al objetivo actual sin tocar el contenido en sí.',
      },
      {
        title: 'Una página de producto donde la sección más importante va la última.',
        description: 'A menudo basta con adelantar las pruebas antes del precio para que la página funcione mejor.',
      },
      {
        title: 'Un equipo de contenido donde cada redactor estructura de forma distinta.',
        description: 'Una fase de estructura crea un estándar de forma compartido antes de que empiece la escritura.',
      },
    ],
    boundaryH2: 'Marcus estructura. Los editores y los clientes aprueban la forma.',
    boundaryPara:
      'La estructura es una recomendación, no una orden. Marcus mapea el mejor recorrido de lectura en función del objetivo del contenido. Usar esa forma, ajustarla o descartarla es una decisión editorial y del cliente.',
    boundaryChecklist: [
      'Marcus estructura y organiza, nunca reescribe contenido.',
      'Las decisiones estructurales quedan documentadas para que los editores las revisen.',
      'Las secciones con un propósito poco claro se señalan, no se eliminan.',
      'La estructura apoya el brief, no lo sustituye.',
    ],
    willNot: [
      { color: 'red', text: 'Reescribir o editar el texto' },
      { color: 'red', text: 'Eliminar secciones sin instrucción' },
      { color: 'amber', text: 'Imponer una estructura contraria al brief' },
    ],
    relatedH2: 'Workers a los que Marcus hace entrega.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Construye el brief en torno a la estructura aprobada.',
        outputLabel: 'Brief de contenido',
        ctaLabel: 'Cómo redacta el brief Luca',
      },
      {
        id: 'draft_rewrite',
        description: 'Redacta dentro del marco estructural que define Marcus.',
        outputLabel: 'Borrador trabajado',
        ctaLabel: 'Cómo redacta Ellis',
      },
      {
        id: 'voice_style',
        description: 'Aplica la orientación de voz al borrador ya estructurado.',
        outputLabel: 'Orientación de voz y estilo',
        ctaLabel: 'Cómo trabaja la voz Helena',
      },
    ],
    ctaH2: 'Da a cada borrador una forma más clara.',
    ctaPara:
      'Añade a Marcus a tu flujo de trabajo y cada página partirá de una estructura editorial que redactores y editores podrán usar de verdad.',
    guidanceFooterLabel: 'ESTADO DE LA ESTRUCTURA',
    guidanceFooterValue: 'Esbozada · lista para redactar',
  },

  content_brief_builder: {
    seoTitle: 'Worker creador de briefs | WordPresto',
    metaDescription:
      'Luca convierte un tema y un objetivo en un brief de contenido estructurado: propósito, audiencia, enfoque y secciones, antes de empezar a redactar.',
    h1: 'Empieza con un brief que los redactores puedan usar de verdad.',
    heroPara1:
      'La mayoría de los briefs de contenido son demasiado escuetos para ayudar, o demasiado rígidos para dejar margen a la escritura. Luca construye briefs estructurados que dan a los redactores el contexto y la dirección que necesitan sin escribir por ellos: propósito, audiencia, enfoque, orientación de tono y un plan de secciones claro.',
    heroPara2:
      'Para proyectos de contenido nuevos, briefs de agencia y flujos de trabajo asistidos por IA en los que el resultado necesita un punto de partida claro.',
    problemEyebrow: 'Dónde los briefs fallan a los redactores',
    problemH2: 'Un brief débil produce un borrador que tendrás que reescribir de todos modos.',
    problemPara:
      'Un brief que dice "escribe sobre nuestro servicio para nuestros clientes" no es un brief. Es una invitación a adivinar. Cada hora que un redactor dedica a trabajar con un brief vago es una hora dedicada a producir contenido que necesitará una revisión estructural antes de poder usarse.',
    problemAnnotation: '↘ el brief decide la calidad del borrador',
    beforeStamp: 'Brief débil',
    beforeHtml: `<p>Escribe una <span class="ba-strike">entrada de blog sobre nuestra herramienta de gestión de proyectos</span>. Que sea <span class="ba-strike">atractiva y esté optimizada para SEO</span>. Unas <span class="ba-strike">800 palabras</span>. Incluye una <span class="ba-strike">llamada a la acción al final</span>.</p>`,
    beforeTags: ['Sin audiencia', 'Sin enfoque', 'Sin orientación de estructura'],
    beforeNote: 'cada redactor producirá algo distinto',
    afterStamp: 'Brief claro',
    afterHtml: `<p><span class="ba-hl">Objetivo: ayudar a los gestores de proyectos de agencia</span> a entender por qué las entregas estructuradas reducen las rondas de revisión. Audiencia: personas con capacidad de decisión. Enfoque: el coste de las entregas deficientes. Secciones: problema, enfoque, pruebas, siguiente paso.</p>`,
    afterTags: ['Audiencia concreta', 'Enfoque claro', 'Secciones estructuradas'],
    afterNote: 'los redactores pueden partir de esto',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un brief que da dirección a los redactores sin quitarles criterio propio.',
    helpsPara:
      'Luca construye la estructura de brief que evita rondas de reescritura. Un brief bien delimitado, con un enfoque real, una audiencia clara y orientación de secciones, produce mejores borradores porque los redactores saben qué están construyendo.',
    checks: [
      'Si el propósito es claro y concreto',
      'Si la audiencia está definida lo suficiente como para escribir para ella',
      'Si el enfoque es distintivo y defendible',
    ],
    improves: [
      'El alcance del brief, para que sea aplicable y no solo orientativo',
      'La estructura de secciones, para que el esquema sea utilizable',
      'La orientación de tono y voz, para que el redactor tenga un registro de partida',
    ],
    prepares: [
      'Un brief de contenido estructurado',
      'Un plan de secciones esbozado',
      'Dirección y limitaciones para la redacción',
    ],
    surfaces: [
      'Temas que necesitan más investigación antes de nada',
      'Briefs que necesitan aportación del cliente antes de redactar',
      'Conflictos de alcance que provocarán rondas de revisión más adelante',
    ],
    ioH2: 'De qué parte Luca, y qué produce.',
    worksFrom: [
      'El tema o asunto del contenido',
      'El objetivo declarado',
      'La definición de audiencia',
      'Las directrices de voz de marca',
      'El análisis de contenido o notas de investigación',
    ],
    produces: [
      'Brief de contenido estructurado',
      'Esquema de secciones',
      'Notas de audiencia y tono',
      'Limitaciones de redacción',
      'Entrega al redactor o al Worker de redacción',
    ],
    scenarios: [
      {
        title: 'Poner en marcha un programa de contenido nuevo con briefs coherentes.',
        description:
          'Luca construye cada brief con el mismo criterio, para que los borradores partan del mismo nivel de dirección.',
      },
      {
        title: 'Dar brief a herramientas de redacción asistidas por IA.',
        description:
          'Un brief estructurado marca la diferencia entre un borrador de IA utilizable y uno que necesita una reescritura completa.',
      },
      {
        title: 'Brief de agencia para un cliente recién incorporado.',
        description:
          'Luca convierte las notas de incorporación en un brief con el que un redactor puede trabajar sin tener que adivinar las preferencias del cliente.',
      },
      {
        title: 'Construir un calendario de contenido con dirección real, no solo fechas.',
        description: 'Cada pieza del calendario recibe un resumen de brief que aclara para qué es y para quién es.',
      },
      {
        title: 'Un lanzamiento de producto con varias piezas de contenido.',
        description:
          'Aplicar la misma estructura de brief de forma coherente hace que todas las piezas encajen sin necesidad de reuniones constantes de alineación.',
      },
      {
        title: 'Un redactor nuevo en la marca.',
        description:
          'Un brief claro sustituye semanas de transmisión de conocimiento implícito por un documento al que puede recurrir.',
      },
    ],
    boundaryH2: 'Luca elabora el brief. Los redactores y los editores toman las decisiones creativas.',
    boundaryPara:
      'Un brief es un punto de partida, no un guion. Luca estructura el brief para que la dirección sea clara, pero la escritura, las decisiones de voz y el criterio creativo corresponden al redactor y al editor.',
    boundaryChecklist: [
      'Luca construye briefs, nunca escribe el contenido en sí.',
      'Las decisiones del brief quedan documentadas para que el editor o el cliente las revisen.',
      'Las carencias de dirección se señalan antes de empezar a redactar.',
      'El brief apoya al redactor, no lo sustituye.',
    ],
    willNot: [
      { color: 'red', text: 'Redactar o escribir contenido' },
      { color: 'red', text: 'Tomar decisiones de posicionamiento de marca' },
      { color: 'amber', text: 'Modificar el alcance acordado' },
    ],
    relatedH2: 'Workers a los que Luca hace entrega.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Toma el brief y construye el borrador trabajado.',
        outputLabel: 'Borrador trabajado',
        ctaLabel: 'Cómo redacta Ellis',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Comprueba que el borrador realmente coincide con el brief.',
        outputLabel: 'Informe de alineación',
        ctaLabel: 'Cómo comprueba Ada',
      },
      {
        id: 'voice_style',
        description: 'Aplica las normas de voz según la dirección del brief.',
        outputLabel: 'Orientación de voz y estilo',
        ctaLabel: 'Cómo trabaja la voz Helena',
      },
    ],
    ctaH2: 'Empieza con un brief que los redactores puedan usar de verdad.',
    ctaPara:
      'Añade a Luca a tu flujo de trabajo y cada pieza de contenido partirá de un brief claro que reduce las rondas de revisión.',
    guidanceFooterLabel: 'ESTADO DEL BRIEF',
    guidanceFooterValue: 'Listo para redactar',
  },

  draft_rewrite: {
    seoTitle: 'Worker de reescritura de borradores | WordPresto',
    metaDescription:
      'Ellis construye y reescribe borradores que siguen el brief: estructurados, con propósito y listos para revisión. Para contenido que necesita un borrador trabajado antes de editar o revisar.',
    h1: 'Reescribe borradores sin perder la idea central.',
    heroPara1:
      'Un borrador que se aleja del brief, entierra la idea principal o se alarga el doble de lo necesario no está listo para revisión. Ellis reescribe borradores que siguen la estructura del brief, abren con lo que importa y se leen lo bastante bien como para que un editor pueda tomar decisiones a partir de ellos.',
    heroPara2:
      'Para primeros borradores, borradores generados por IA que necesitan forma, y reescrituras cuando el brief ha cambiado.',
    problemEyebrow: 'Dónde se quedan cortos los borradores',
    problemH2: 'Un borrador que se dispersa no se arregla editando. Hay que reescribirlo.',
    problemPara:
      'La mayoría de los primeros borradores, tanto de redactores como de IA, cubren el terreno adecuado, pero no en el orden adecuado. La idea principal queda enterrada. Las secciones se desvían. La introducción tarda tres párrafos en arrancar. Dejar un borrador listo para revisión implica más que corregir frases.',
    problemAnnotation: '↘ primero da forma al borrador, después revísalo',
    beforeStamp: 'Sin trabajar',
    beforeHtml: `<p>Somos un <span class="ba-strike">proveedor líder de soluciones innovadoras</span>. Fundada en 2018, <span class="ba-strike">nuestro equipo de profesionales comprometidos</span> trabaja duro cada día para <span class="ba-strike">aportar valor a nuestros valiosos clientes</span>. Creemos en la <span class="ba-strike">excelencia</span>.</p>`,
    beforeTags: ['Sin idea clara', 'Apertura genérica', 'No sigue el brief'],
    beforeNote: 'este borrador no se puede editar',
    afterStamp: 'Según el brief',
    afterHtml: `<p>Las buenas entregas de contenido requieren <span class="ba-hl">dos rondas de revisión en lugar de cinco</span>. La diferencia está en tener un brief que todo el equipo del proyecto ha leído de verdad antes de empezar a escribir.</p>`,
    afterTags: ['Guiado por la idea principal', 'Fiel al brief', 'Listo para revisión'],
    afterNote: 'ahora un editor puede trabajar con esto',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un redactor que sigue el brief y produce algo con lo que un editor puede trabajar.',
    helpsPara:
      'Ellis se encarga de la redacción y la reescritura que llevan el contenido a una calidad revisable. El objetivo no es una pieza terminada, sino un borrador con una forma clara, fiel al brief, que le dé a un editor algo real con lo que trabajar.',
    checks: [
      'Si el borrador sigue la estructura del brief',
      'Si la apertura establece la idea principal',
      'Si las secciones siguen un orden lógico',
    ],
    improves: [
      'La apertura, para que la idea principal vaya por delante',
      'La estructura de secciones, para que siga la lógica del brief',
      'La extensión y el ritmo, para que no se alargue de más',
    ],
    prepares: [
      'Un borrador trabajado, listo para revisión editorial',
      'Una reescritura que el equipo del brief puede dar por buena',
      'Contenido listo para una pasada de voz o de calidad',
    ],
    surfaces: [
      'Carencias del brief que salieron a la luz durante la redacción',
      'Secciones que necesitan aportación del cliente o de un experto',
      'Pasajes en los que la intención no está clara',
    ],
    ioH2: 'De qué parte Ellis, y qué produce.',
    worksFrom: [
      'El brief de contenido',
      'El borrador existente o notas en bruto',
      'Las directrices de voz de marca',
      'El esquema de estructura',
      'Notas de investigación',
    ],
    produces: [
      'Borrador trabajado',
      'Secciones de contenido reescritas',
      'Notas de redacción para el editor',
      'Notas de desviación respecto al brief',
      'Borrador listo para revisión',
    ],
    scenarios: [
      {
        title: 'Un borrador de IA correcto en el contenido, pero completamente sin trabajar.',
        description: 'Ellis le da estructura y una apertura clara, convirtiendo el resultado en un borrador revisable.',
      },
      {
        title: 'Un primer borrador de un redactor nuevo que necesita trabajo estructural.',
        description: 'Reajusta la forma sin reescribirlo todo, conservando lo que funciona.',
      },
      {
        title: 'Un brief que cambió a mitad de proyecto.',
        description: 'Ellis reescribe las secciones afectadas conforme a la nueva dirección.',
      },
      {
        title: 'Una página revisada por demasiadas personas que ha perdido coherencia.',
        description: 'Una única pasada de reescritura limpia, alineada con el brief original, devuelve la coherencia.',
      },
      {
        title: 'Contenido que hace falta rápido, sin tiempo para varias rondas.',
        description: 'Un primer borrador limpio ahorra los ciclos de revisión que generan los borradores iniciales vagos.',
      },
      {
        title: 'Un cliente que quiere ver un borrador antes de aprobar la producción completa.',
        description: 'Ellis produce un borrador ajustado que le da al cliente algo real sobre lo que reaccionar.',
      },
    ],
    boundaryH2: 'Ellis redacta. Los editores y los clientes toman la decisión final.',
    boundaryPara:
      'Un borrador trabajado es una aportación al proceso editorial, no el producto final. Ellis reescribe para llevar el contenido a una calidad revisable. Las decisiones creativas, la aprobación final y los últimos cambios corresponden al editor y al cliente.',
    boundaryChecklist: [
      'Ellis redacta y reescribe, nunca publica.',
      'Los borradores se presentan de forma estructurada para que un editor los revise y apruebe.',
      'Las desviaciones respecto al brief se anotan, no se corrigen en silencio.',
      'La redacción apoya el brief, no lo sustituye.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar o finalizar contenido' },
      { color: 'red', text: 'Modificar el alcance del brief' },
      { color: 'amber', text: 'Tomar decisiones de tono sin brief' },
    ],
    relatedH2: 'Workers a los que Ellis hace entrega.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Aplica las normas de voz al borrador trabajado por Ellis.',
        outputLabel: 'Orientación de voz y estilo',
        ctaLabel: 'Cómo trabaja la voz Helena',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa el borrador para comprobar su claridad y si está listo.',
        outputLabel: 'Notas de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Comprueba que el borrador cumple el brief.',
        outputLabel: 'Informe de alineación',
        ctaLabel: 'Cómo comprueba Ada',
      },
    ],
    ctaH2: 'Reescribe borradores sin perder la idea central.',
    ctaPara:
      'Añade a Ellis a tu flujo de trabajo y cada borrador llegará a revisión ya trabajado, estructurado y fiel al brief.',
    guidanceFooterLabel: 'ESTADO DEL BORRADOR',
    guidanceFooterValue: 'Trabajado · listo para revisión',
  },

  draft_quality_reviewer: {
    seoTitle: 'Worker revisor de calidad de borradores | WordPresto',
    metaDescription:
      'Quinn comprueba si un borrador es claro, está estructurado y listo para avanzar antes de que llegue a un cliente o al CMS. Para equipos que necesitan una revisión estructurada antes de dar el visto bueno.',
    h1: 'Revisa el borrador antes de que avance.',
    heroPara1:
      'Un borrador que llega a un cliente o a una reunión de revisión con problemas estructurales, secciones poco claras o desviaciones del brief hace perder el tiempo a todo el mundo. Quinn comprueba cada borrador antes de que avance: si es claro, si está estructurado, si sigue el brief y si está listo para el siguiente paso.',
    heroPara2:
      'Para controles de calidad antes de la entrega al cliente, antes de la entrega al CMS y antes de aprobar cualquier contenido.',
    problemEyebrow: 'Dónde los borradores avanzan demasiado pronto',
    problemH2: 'Un borrador que llega a revisión demasiado pronto sale más caro que esperar.',
    problemPara:
      'Enviar un borrador a un cliente o a un editor senior antes de que esté listo no es eficiencia, es una inversión al revés. El coste de una revisión estructural después del feedback del cliente es más alto que el de una pasada de revisión antes de que el borrador salga del equipo.',
    problemAnnotation: '↘ revisa antes de que avance',
    beforeStamp: 'Sin revisar',
    beforeHtml: `<p>Aquí tienes el <span class="ba-strike">borrador terminado</span> para tu revisión. <span class="ba-strike">Estamos contentos con él</span>. Dinos <span class="ba-strike">si quieres algún cambio</span>. Creemos que cubre <span class="ba-strike">todo</span> lo que pediste.</p>`,
    beforeTags: ['Sin comprobar', 'Brief sin verificar', 'Problemas sin detectar'],
    beforeNote: 'el cliente encontrará los problemas',
    afterStamp: 'Revisado',
    afterHtml: `<p>La sección dos entierra el beneficio principal. La apertura se lee bien. <span class="ba-hl">Tres problemas concretos señalados</span> antes de que el borrador llegue al cliente, cada uno con una solución clara.</p>`,
    afterTags: ['Problemas señalados', 'Brief comprobado', 'Lista para presentar'],
    afterNote: 'problemas detectados antes de la entrega',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un control de calidad que detecta los problemas antes de que se conviertan en comentarios del cliente.',
    helpsPara:
      'Quinn hace la pasada de revisión estructurada que debería producirse entre la redacción y la entrega. No es una corrección línea a línea, es una comprobación de si el borrador está claro, estructurado y listo para avanzar.',
    checks: [
      'Si el borrador cubre el brief',
      'Si las secciones son claras y están en orden',
      'Si la apertura establece el propósito',
    ],
    improves: [
      'El feedback de revisión, para que sea concreto y aplicable',
      'La valoración de calidad del borrador, para que los editores tengan una visión clara',
      'Las notas de entrega, para que el siguiente paso quede claro',
    ],
    prepares: [
      'Notas de revisión estructuradas para el editor',
      'Una decisión clara sobre si el borrador está listo, para el equipo',
      'Problemas concretos y soluciones propuestas',
    ],
    surfaces: [
      'Problemas estructurales que necesitan una reescritura',
      'Carencias o desviaciones del brief que el redactor pasó por alto',
      'Secciones que necesitan aportación del cliente o de un experto',
    ],
    ioH2: 'De qué parte Quinn, y qué produce.',
    worksFrom: [
      'El contenido del borrador',
      'El brief de contenido original',
      'Las directrices de voz de marca',
      'Los criterios de revisión',
      'Notas de revisión previas',
    ],
    produces: [
      'Notas de revisión estructuradas',
      'Valoración de si está listo',
      'Señalización de problemas concretos',
      'Recomendaciones de solución',
      'Notas de entrega para el siguiente paso',
    ],
    scenarios: [
      {
        title: 'Un borrador listo para entregar al cliente el viernes.',
        description: 'Quinn lo revisa el jueves para que cualquier problema pueda solucionarse antes de que el cliente lo vea.',
      },
      {
        title: 'Una pieza extensa en la que han colaborado tres redactores.',
        description: 'Identifica dónde cambia la voz, dónde se contradicen las secciones y dónde falla la estructura.',
      },
      {
        title: 'Un borrador de IA que ha pasado una comprobación básica.',
        description: 'Quinn aplica criterios editoriales, no solo gramaticales: claridad, estructura y alineación con el brief.',
      },
      {
        title: 'Un programa de contenido con una calidad irregular.',
        description:
          'Una pasada de revisión coherente en la misma fase crea un nivel de calidad de referencia con el que el equipo puede medirse.',
      },
      {
        title: 'Un brief que cambió a mitad del borrador.',
        description: 'Quinn compara el borrador con el brief final, no con el original, y señala qué hay que actualizar.',
      },
      {
        title: 'Un cliente que deja comentarios de revisión detallados en cada borrador.',
        description: 'Que lleguen menos problemas al cliente significa menos rondas de revisión y una aprobación más rápida.',
      },
    ],
    boundaryH2: 'Quinn revisa. Los editores y los clientes deciden qué cambiar.',
    boundaryPara:
      'Una revisión es una aportación estructurada al proceso editorial, no un conjunto de instrucciones. Quinn identifica los problemas y los señala con claridad. Qué se cambia, y cómo, es una decisión editorial y del cliente.',
    boundaryChecklist: [
      'Quinn revisa y señala, nunca edita directamente.',
      'Las notas de revisión se presentan de forma estructurada para que un editor actúe sobre ellas.',
      'Las decisiones inciertas o subjetivas se plantean como preguntas, no como resoluciones.',
      'La revisión apoya el criterio editorial, no lo sustituye.',
    ],
    willNot: [
      { color: 'red', text: 'Editar o reescribir contenido' },
      { color: 'red', text: 'Tomar decisiones finales sobre el contenido' },
      { color: 'amber', text: 'Aprobar contenido para su publicación' },
    ],
    relatedH2: 'Workers a los que Quinn pasa el trabajo.',
    relatedWorkerIds: [
      {
        id: 'section_rewrite',
        description: 'Reescribe las secciones concretas que Quinn señala como débiles.',
        outputLabel: 'Secciones reescritas',
        ctaLabel: 'Cómo reescribe Rosa',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Comprueba en detalle la alineación entre el brief y el borrador.',
        outputLabel: 'Informe de alineación',
        ctaLabel: 'Cómo alinea Ada',
      },
      {
        id: 'approval_report',
        description: 'Reúne la revisión en una decisión de aprobación.',
        outputLabel: 'Informe de aprobación',
        ctaLabel: 'Cómo aprueba Audrey',
      },
    ],
    ctaH2: 'Revisa el borrador antes de que avance.',
    ctaPara:
      'Añade a Quinn a tu flujo de trabajo y cada borrador llegará al cliente o al CMS ya revisado, con los problemas señalados antes de que se conviertan en rondas de revisión.',
    guidanceFooterLabel: 'ESTADO DE LA REVISIÓN',
    guidanceFooterValue: 'Revisado · problemas señalados',
  },

  section_rewrite: {
    seoTitle: 'Worker de reescritura de secciones | WordPresto',
    metaDescription:
      'Rosa reescribe secciones concretas que resultan poco claras, escasas o alejadas del brief, sin tocar el resto de la pieza. Para mejoras puntuales a nivel de sección después de la revisión.',
    h1: 'Arregla la sección débil sin reescribir toda la página.',
    heroPara1:
      'Cuando las notas de revisión señalan una sección concreta como escasa, alejada del brief o poco clara, la respuesta no es reescribir toda la página. Rosa reescribe la sección concreta que necesita arreglo, trabajando conforme al brief y en la voz del contenido que la rodea, sin alterar lo que ya funciona.',
    heroPara2:
      'Para mejoras puntuales de sección tras la revisión del borrador, ajustes a mitad de producción y peticiones de revisión concretas de clientes o editores.',
    problemEyebrow: 'Dónde las secciones dejan en mal lugar a la página',
    problemH2: 'Una sola sección débil puede echar a perder una página que, por lo demás, funciona.',
    problemPara:
      'Casi nunca es toda la página la que necesita una reescritura. Normalmente es la tercera sección la que entierra la idea, o la sección de pruebas la que se queda corta, o la conclusión la que no cierra bien. Reescribir toda la página para arreglar una sección desperdicia el trabajo que ya estaba bien hecho.',
    problemAnnotation: '↘ arregla la sección, no la página',
    beforeStamp: 'Necesita trabajo',
    beforeHtml: `<p>Nuestro <span class="ba-strike">equipo cuenta con amplia experiencia</span> en este ámbito y <span class="ba-strike">nos enorgullece</span> ofrecer <span class="ba-strike">un trabajo de alta calidad</span>. Tenemos <span class="ba-strike">muchos clientes satisfechos</span> que estarían encantados de <span class="ba-strike">recomendarnos</span>.</p>`,
    beforeTags: ['Afirmaciones vagas', 'Sin detalles concretos', 'Tono alejado del brief'],
    beforeNote: 'esta sección no aporta nada',
    afterStamp: 'Reescrita',
    afterHtml: `<p>Hemos reducido las rondas de revisión en un 40% en doce clientes de agencia durante el último año, usando <span class="ba-hl">flujos de trabajo estructurados de brief a borrador</span> que la mayoría de los equipos pueden implantar en menos de dos semanas.</p>`,
    afterTags: ['Concreta', 'Fiel al brief', 'Se gana su lugar'],
    afterNote: 'ahora esta sección funciona',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una editora de secciones que arregla lo que hay que arreglar sin tocar lo que no.',
    helpsPara:
      'Rosa reescribe a nivel de sección: el párrafo concreto, el bloque de pruebas débil, la introducción que no termina de funcionar. Sin reescribir toda la página, sin alterar las secciones que sí funcionan.',
    checks: [
      'Si la sección cumple el propósito que se le ha marcado',
      'Si encaja con el brief y con el tono que la rodea',
      'Si se gana su lugar dentro de la estructura de la página',
    ],
    improves: [
      'La claridad y concreción de la sección',
      'La alineación de tono con el resto de la pieza',
      'La extensión y la economía de la sección',
    ],
    prepares: [
      'Una sección reescrita, lista para insertar',
      'Notas de sección para el editor',
      'Confirmación de alineación con el brief',
    ],
    surfaces: [
      'Secciones en las que una reescritura no basta y hace falta un cambio estructural',
      'Información que falta y que el redactor debe aportar',
      'Conflictos con el brief que originaron el problema de la sección',
    ],
    ioH2: 'De qué parte Rosa, y qué produce.',
    worksFrom: [
      'La sección concreta que hay que reescribir',
      'El brief de contenido original',
      'Las notas de revisión',
      'Las directrices de voz de marca',
      'El contexto del resto de la página',
    ],
    produces: [
      'Sección reescrita',
      'Notas de edición de la sección',
      'Comprobación de alineación con el brief',
      'Notas de entrega para el editor',
    ],
    scenarios: [
      {
        title: 'Una revisión señaló que la sección de pruebas era demasiado escasa.',
        description: 'Rosa reescribe esa sección con datos más concretos, sin cambiar nada a su alrededor.',
      },
      {
        title: 'Un cliente pidió reconsiderar una sección después de la aprobación.',
        description: 'Reescribe esa sección concreta siguiendo la nota del cliente sin reabrir el resto de la pieza.',
      },
      {
        title: 'La introducción no coincide con la página que describía el brief.',
        description: 'Una reescritura puntual de la introducción realinea la apertura de la página sin una revisión completa.',
      },
      {
        title: 'Un borrador de IA en el que algunas secciones son buenas y una claramente no lo es.',
        description: 'Rosa arregla la sección débil y deja las demás tal cual.',
      },
      {
        title: 'Un artículo extenso que pierde fuerza en su tercio central.',
        description: 'Una reescritura a nivel de sección del tramo central débil devuelve el rumbo a la pieza.',
      },
      {
        title: 'Un redactor que produjo un buen borrador pero tuvo dificultades con la llamada a la acción.',
        description: 'Reescribir una sección es más rápido y mejor que devolver toda la pieza.',
      },
    ],
    boundaryH2: 'Rosa reescribe secciones. Los editores aprueban los cambios.',
    boundaryPara:
      'Una sección reescrita es una opción de sustitución, no una edición definitiva. Rosa produce la versión revisada; si se incorpora, se ajusta o se devuelve es una decisión editorial.',
    boundaryChecklist: [
      'Rosa reescribe secciones, nunca las publica.',
      'Las secciones reescritas se presentan para revisión editorial.',
      'El alcance se limita a la sección señalada, salvo instrucción contraria.',
      'Las reescrituras de sección apoyan el brief, no las preferencias del Worker.',
    ],
    willNot: [
      { color: 'red', text: 'Reescribir más allá de la sección acordada' },
      { color: 'red', text: 'Publicar cambios directamente' },
      { color: 'amber', text: 'Modificar el alcance del brief' },
    ],
    relatedH2: 'Workers con los que trabaja Rosa.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa el borrador completo y señala qué secciones necesitan trabajo.',
        outputLabel: 'Notas de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
      {
        id: 'readability',
        description: 'Mejora el flujo y la claridad después de las reescrituras de sección.',
        outputLabel: 'Borrador mejorado',
        ctaLabel: 'Cómo mejora Priya',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Comprueba que la sección reescrita se alinea con el brief.',
        outputLabel: 'Informe de alineación',
        ctaLabel: 'Cómo comprueba Ada',
      },
    ],
    ctaH2: 'Arregla la sección débil sin reescribir toda la página.',
    ctaPara:
      'Añade a Rosa a tu flujo de trabajo y los arreglos puntuales de sección se harán rápido, con precisión y sin alterar lo que ya funciona.',
    guidanceFooterLabel: 'ESTADO DE LA SECCIÓN',
    guidanceFooterValue: 'Reescrita · lista para el editor',
  },

  approval_report: {
    seoTitle: 'Worker de informes de aprobación | WordPresto',
    metaDescription:
      'Audrey resume qué está listo, qué necesita atención y qué no debería avanzar, para que las personas puedan dar el visto bueno con confianza.',
    h1: 'Haz que la aprobación inspire más confianza.',
    heroPara1:
      'Las decisiones de aprobación que se toman sin una imagen clara de qué está listo suelen fallar de dos maneras: se aprueba lo que no debería aprobarse, o se retiene lo que ya estaba listo para avanzar. Audrey elabora un informe de aprobación estructurado para que la persona que da el visto bueno tenga la información que realmente necesita.',
    heroPara2:
      'Para directores editoriales, responsables de proyecto, gestores de cuentas y cualquier persona que necesite aprobar con confianza sin leer cada borrador línea por línea.',
    problemEyebrow: 'Dónde falla la aprobación',
    problemH2: 'La aprobación solo es fiable cuando quien aprueba tiene la información correcta.',
    problemPara:
      'La mayoría de los problemas de aprobación son problemas de información. La persona que da el visto bueno o bien no tiene una visión clara de qué se ha revisado y qué no, o bien tiene que leer cada borrador ella misma porque no hay ningún resumen. En cualquier caso, el proceso tarda más de lo debido y las decisiones son menos seguras de lo que deberían.',
    problemAnnotation: '↘ aprobar sin adivinar',
    beforeStamp: 'Sin informe',
    beforeHtml: `<p><span class="ba-strike">Aquí tienes los 14 borradores</span> para aprobar. Algunos se han revisado, <span class="ba-strike">no estamos seguros de cuáles</span>. Hay <span class="ba-strike">algunas notas en la carpeta compartida</span>, en algún sitio. Dinos <span class="ba-strike">si te parece bien aprobarlos</span>.</p>`,
    beforeTags: ['Sin resumen', 'Sin estado claro', 'Quien aprueba tiene que adivinar'],
    beforeNote: 'nadie puede aprobar esto con confianza',
    afterStamp: 'Informe listo',
    afterHtml: `<p><span class="ba-hl">9 piezas listas para aprobación. 3 necesitan una revisión menor antes de aprobarse. 2 marcadas para revisión editorial</span>, con los problemas concretos anotados y los siguientes pasos recomendados para cada una.</p>`,
    afterTags: ['Estado claro', 'Alertas concretas', 'Quien aprueba tiene todo lo que necesita'],
    afterNote: 'la aprobación ya puede darse',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Un informe que da a quien aprueba una visión clara, en lugar de un montón de borradores.',
    helpsPara:
      'Audrey reúne todo lo que necesita la persona que aprueba en un único informe estructurado: qué está listo, qué no, cuáles son los problemas concretos y qué hay que hacer a continuación. Las decisiones de aprobación se vuelven más rápidas y más seguras.',
    checks: [
      'Si cada pieza ha pasado por las fases de revisión necesarias',
      'Si los problemas pendientes están claramente documentados',
      'Si hay algo señalado como riesgo antes de la aprobación',
    ],
    improves: [
      'La velocidad del proceso de aprobación, al eliminar la ambigüedad',
      'La confianza en la aprobación, al mostrar la información correcta',
      'La documentación de aprobación, para auditoría y consulta',
    ],
    prepares: [
      'Un informe de aprobación estructurado',
      'Un estado claro de listo o no listo para cada pieza',
      'Próximos pasos concretos para todo lo que aún no está aprobado',
    ],
    surfaces: [
      'Contenido que necesita más revisión antes de aprobarse',
      'Problemas de cumplimiento o riesgo que deberían resolverse antes',
      'Piezas retenidas por falta de información',
    ],
    ioH2: 'De qué parte Audrey, y qué produce.',
    worksFrom: [
      'Las notas de revisión de calidad del borrador',
      'Las alertas de riesgo y cumplimiento',
      'Los informes de alineación con el brief',
      'Los criterios de aprobación vigentes',
      'El estado del contenido en todo el proyecto',
    ],
    produces: [
      'Informe de aprobación estructurado',
      'Clasificación entre listo, necesita atención o no listo',
      'Notas de problemas concretos con los siguientes pasos',
      'Documentación de aprobación',
      'Notas de entrega para el CMS o la publicación',
    ],
    scenarios: [
      {
        title: 'Un lote de 20 piezas de contenido necesita la aprobación del director antes del viernes.',
        description: 'Audrey elabora un informe que el director puede revisar en 20 minutos en lugar de 2 horas.',
      },
      {
        title: 'Un cliente que revisa una migración de sitio antes del lanzamiento.',
        description:
          'El informe de aprobación da al cliente una visión clara de qué se ha revisado, qué está listo y qué sigue pendiente.',
      },
      {
        title: 'Un programa de contenido sensible en materia de cumplimiento.',
        description: 'Audrey hace seguimiento de qué piezas han superado la revisión de cumplimiento y señala las que no.',
      },
      {
        title: 'Una agencia donde las decisiones de aprobación son irregulares.',
        description: 'Un informe estructurado crea un estándar de aprobación que se aplica a todos los proyectos.',
      },
      {
        title: 'Un proyecto estancado en la fase de aprobación sin que nadie sepa por qué.',
        description: 'El informe identifica exactamente qué está bloqueando cada pieza y qué hace falta para que avance.',
      },
      {
        title: 'Varios interesados con criterios de aprobación distintos.',
        description:
          'Un único informe recoge todos los criterios y muestra el estado de cada pieza frente a cada conjunto de requisitos.',
      },
    ],
    boundaryH2: 'Audrey informa. Las personas aprueban.',
    boundaryPara:
      'La aprobación es una decisión humana. Audrey aporta la información estructurada que hace fiable esa decisión. El visto bueno, y la responsabilidad que conlleva, siempre recae en una persona.',
    boundaryChecklist: [
      'Audrey informa sobre el estado, nunca aprueba el contenido ella misma.',
      'Los informes de aprobación se presentan de forma estructurada para que la persona designada los revise.',
      'Las alertas de riesgo y cumplimiento se incluyen, no se filtran.',
      'El informe apoya el criterio de aprobación, no lo sustituye.',
    ],
    willNot: [
      { color: 'red', text: 'Aprobar o dar el visto bueno al contenido' },
      { color: 'red', text: 'Saltarse las alertas de cumplimiento' },
      { color: 'amber', text: 'Marcar contenido como listo sin evidencias' },
    ],
    relatedH2: 'Workers con los que trabaja Audrey.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Aporta la revisión de calidad que alimenta el informe de aprobación.',
        outputLabel: 'Notas de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Señala problemas de cumplimiento y riesgo antes de la aprobación.',
        outputLabel: 'Informe de riesgo y cumplimiento',
        ctaLabel: 'Cómo señala los riesgos Vera',
      },
      {
        id: 'cms_handoff',
        description: 'Toma el contenido aprobado y lo prepara para la entrega al CMS.',
        outputLabel: 'Paquete de entrega',
        ctaLabel: 'Cómo hace la entrega Ravi',
      },
    ],
    ctaH2: 'Haz que la aprobación inspire más confianza.',
    ctaPara:
      'Añade a Audrey a tu flujo de trabajo y cada decisión de aprobación se tomará con una imagen clara y completa de qué está listo y qué no.',
    guidanceFooterLabel: 'ESTADO DE APROBACIÓN',
    guidanceFooterValue: 'Lista para la aprobación humana',
  },

  readability: {
    seoTitle: 'Worker de legibilidad | WordPresto',
    metaDescription:
      'Priya ajusta las frases, simplifica la estructura y mejora el flujo para que el contenido se lea con claridad para su audiencia. Para borradores correctos pero más difíciles de leer de lo necesario.',
    h1: 'Haz que el buen contenido se lea con más facilidad.',
    heroPara1:
      'Un contenido puede ser correcto, estar bien estructurado y ser fiel al brief, y aun así costar más de leer de lo necesario. Priya ajusta las frases, desglosa los párrafos densos, elimina matizaciones innecesarias y mejora el flujo, sin cambiar el significado ni perder la voz.',
    heroPara2:
      'Para borradores que ya están listos en el fondo, pero necesitan una pasada de legibilidad antes de la revisión o la entrega.',
    problemEyebrow: 'Dónde falla la legibilidad',
    problemH2: 'Un contenido denso y correcto también pierde lectores.',
    problemPara:
      'La mayoría de los problemas de legibilidad no tienen que ver con las palabras, sino con la longitud de las frases, la densidad de los párrafos y la proporción entre matices y afirmaciones directas. Un lector que abandona en el tercer párrafo no ha leído el contenido, por muy correcto que fuera.',
    problemAnnotation: '↘ legible significa leído de verdad',
    beforeStamp: 'Difícil de leer',
    beforeHtml: `<p>En el contexto <span class="ba-strike">del panorama digital actual, en el que</span> muchas organizaciones buscan <span class="ba-strike">cada vez más aprovechar</span> las herramientas disponibles, es importante <span class="ba-strike">tener en cuenta que</span> el enfoque adoptado <span class="ba-strike">tendrá inevitablemente</span> un impacto en los resultados.</p>`,
    beforeTags: ['Demasiado larga', 'Sobrecargada de matices', 'Suena evasiva'],
    beforeNote: 'nadie leerá esto hasta el final',
    afterStamp: 'Legible',
    afterHtml: `<p>Las herramientas que usas afectan a tus resultados. <span class="ba-hl">Elegir el enfoque adecuado es la decisión que más importa</span>, y suele ser a la que los equipos menos tiempo dedican.</p>`,
    afterTags: ['Breve y directa', 'Clara', 'Se lee con naturalidad'],
    afterNote: 'esta versión sí se lee',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una pasada de legibilidad que consigue que el contenido se lea de verdad.',
    helpsPara:
      'Priya hace el trabajo a nivel de frase y de párrafo que convierte un contenido técnicamente correcto en algo que el lector termina de leer. No es una reescritura, es una pasada de ajuste que elimina todo lo que dificulta la lectura.',
    checks: [
      'La longitud de las frases frente a la audiencia prevista',
      'La densidad de los párrafos y la facilidad de lectura rápida',
      'Los matices y las cautelas innecesarias',
    ],
    improves: [
      'La estructura de las frases, para que se lean con naturalidad',
      'La longitud de los párrafos y su respiración',
      'Las frases de apertura, para que cada párrafo empiece por la idea principal',
    ],
    prepares: [
      'Un borrador mejorado con la pasada de legibilidad aplicada',
      'Notas de legibilidad para el editor',
      'Contenido listo para la revisión final',
    ],
    surfaces: [
      'Secciones en las que se sacrificó el significado por la densidad',
      'Pasajes que necesitan información adicional para tener sentido',
      'Desajustes de nivel entre el contenido y la audiencia',
    ],
    ioH2: 'De qué parte Priya, y qué produce.',
    worksFrom: [
      'El borrador existente',
      'La definición de audiencia',
      'Las directrices de voz de marca',
      'El objetivo de legibilidad o la nota del brief',
      'Las notas de revisión',
    ],
    produces: [
      'Borrador mejorado',
      'Notas de la pasada de legibilidad',
      'Mejoras concretas a nivel de frase y párrafo',
      'Notas de entrega para el editor',
    ],
    scenarios: [
      {
        title: 'Una página de producto técnica escrita por un ingeniero.',
        description: 'Priya la traduce sin simplificarla en exceso: clara para la audiencia objetivo, pero igual de precisa.',
      },
      {
        title: 'Un artículo extenso denso de principio a fin.',
        description: 'Una pasada de legibilidad crea espacio para respirar y hace que la pieza se pueda leer de una sentada.',
      },
      {
        title: 'Contenido generado por IA gramaticalmente correcto, pero difícil de leer por encima.',
        description: 'Mejora el flujo y el ritmo de las frases sin cambiar la estructura.',
      },
      {
        title: 'Un documento de cumplimiento que el departamento legal tiene que leer.',
        description: 'Las mejoras de legibilidad hacen que se lea más rápido y sea más fácil de aplicar.',
      },
      {
        title: 'Un cliente que sigue diciendo que el contenido "se hace pesado".',
        description: 'Una pasada de legibilidad suele resolver esto sin necesidad de cambios estructurales.',
      },
      {
        title: 'Una landing page con una tasa de rebote alta.',
        description: 'La legibilidad suele ser la diferencia entre una página que se lee y una página que se abandona.',
      },
    ],
    boundaryH2: 'Priya mejora la legibilidad. Los redactores y los editores conservan la voz.',
    boundaryPara:
      'Una pasada de legibilidad mejora el flujo sin cambiar el significado ni anular las decisiones de voz. Si una frase es deliberadamente compleja por motivos de estilo, Priya lo señala en lugar de simplificarla sin más.',
    boundaryChecklist: [
      'Priya mejora la legibilidad, nunca cambia el significado.',
      'Las decisiones de estilo que parecen errores se señalan, no se cambian.',
      'Los cambios de legibilidad quedan documentados para revisión editorial.',
      'La legibilidad apoya la voz, no la anula.',
    ],
    willNot: [
      { color: 'red', text: 'Cambiar el significado o la intención' },
      { color: 'red', text: 'Anular decisiones de estilo deliberadas' },
      { color: 'amber', text: 'Simplificar contenido especializado sin orientación' },
    ],
    relatedH2: 'Workers con los que trabaja Priya.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Produce el borrador trabajado sobre el que se aplica la pasada de legibilidad.',
        outputLabel: 'Borrador trabajado',
        ctaLabel: 'Cómo redacta Ellis',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa el borrador mejorado para comprobar su claridad y si está listo.',
        outputLabel: 'Notas de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
      {
        id: 'section_rewrite',
        description: 'Reescribe secciones que necesitan más que una pasada de legibilidad.',
        outputLabel: 'Secciones reescritas',
        ctaLabel: 'Cómo reescribe Rosa',
      },
    ],
    ctaH2: 'Haz que el buen contenido se lea con más facilidad.',
    ctaPara:
      'Añade a Priya a tu flujo de trabajo y cada borrador recibirá una pasada de legibilidad antes de llegar a revisión o a la entrega.',
    guidanceFooterLabel: 'LEGIBILIDAD',
    guidanceFooterValue: 'Mejorada · lista para revisión',
  },

  brief_draft_alignment: {
    seoTitle: 'Worker de alineación brief-borrador | WordPresto',
    metaDescription:
      'Ada comprueba que el borrador cumple de verdad el brief, señalando carencias, desviaciones y secciones desalineadas antes de que avancen más.',
    h1: 'Comprueba si el borrador sigue de verdad el brief.',
    heroPara1:
      'Un borrador que tiene buena pinta pero no sigue el brief es un problema que saldrá a la luz en la revisión o, peor aún, en la entrega al cliente. Ada compara el borrador final con el brief original, sección por sección, y señala cualquier carencia, desviación de alcance o desalineación antes de que el borrador siga adelante.',
    heroPara2:
      'Para fases de revisión de borradores, programas de contenido con briefs exigentes y cualquier proyecto en el que haya que verificar el cumplimiento del brief antes de la entrega.',
    problemEyebrow: 'Dónde los borradores se desvían del brief',
    problemH2: 'Un borrador que sigue el brief es la excepción, no la norma.',
    problemPara:
      'Los briefs se desvían durante la producción. Cada redactor interpreta de forma distinta. Las herramientas de IA rellenan los huecos con sus propios criterios por defecto. Cuando un borrador llega a revisión, a menudo está cubriendo un terreno distinto al que marcaba el brief. La única forma de detectarlo es comprobarlo.',
    problemAnnotation: '↘ comprueba el brief, no solo el borrador',
    beforeStamp: 'Sin comprobar',
    beforeHtml: `<p>El borrador <span class="ba-strike">nos parece bueno</span>. Cubre los <span class="ba-strike">puntos principales</span> y tiene la <span class="ba-strike">extensión adecuada</span>. Creemos que <span class="ba-strike">cumple el brief</span>, aunque no lo hemos <span class="ba-strike">comprobado sección por sección</span>.</p>`,
    beforeTags: ['Sin verificar', 'Posible desviación del brief', 'Carencias sin detectar'],
    beforeNote: 'esto fallará en la revisión del cliente',
    afterStamp: 'Comprobado',
    afterHtml: `<p>La sección dos se desvía de la audiencia definida. Falta la sección de pruebas. La apertura se alinea bien. <span class="ba-hl">Tres carencias concretas identificadas</span> frente al brief, cada una con una solución clara.</p>`,
    afterTags: ['Brief comprobado', 'Carencias señaladas', 'Soluciones concretas'],
    afterNote: 'ahora el equipo sabe qué arreglar',
    helpsEyebrow: 'Cómo ayuda este Worker',
    helpsH2: 'Una comprobación del brief que detecta la desviación antes de que se convierta en un problema con el cliente.',
    helpsPara:
      'Ada hace la comparación estructurada entre el brief y el borrador que la mayoría de los equipos se saltan porque van demasiado rápido. Las carencias y desviaciones detectadas antes de la entrega salen gratis. Detectadas en la revisión del cliente, cuestan rondas de revisión.',
    checks: [
      'Si cada sección del brief está presente y resuelta',
      'Si la audiencia y el propósito se mantienen a lo largo del texto',
      'Si el enfoque y la intención del brief sobreviven en el borrador',
    ],
    improves: [
      'El informe de alineación con el brief, para que las carencias sean concretas',
      'La orientación de revisión, para que las soluciones sean precisas',
      'Las notas de entrega del borrador, para que el redactor sepa exactamente qué corregir',
    ],
    prepares: [
      'Un informe de alineación estructurado',
      'Una comparación con el brief sección por sección',
      'Notas de solución concretas para el redactor',
    ],
    surfaces: [
      'Desviaciones de alcance que se colaron durante la producción',
      'Secciones del brief que se interpretaron de forma distinta',
      'Contenido que exigía el brief y que falta',
    ],
    ioH2: 'De qué parte Ada, y qué produce.',
    worksFrom: [
      'El brief de contenido final',
      'El borrador actual',
      'Las modificaciones del brief realizadas durante el proyecto',
      'Las notas de revisión',
      'Las definiciones de audiencia y propósito',
    ],
    produces: [
      'Informe de alineación entre el brief y el borrador',
      'Comparación sección por sección',
      'Señalización de carencias y desviaciones',
      'Notas de solución para el redactor',
      'Entrega a revisión o a corrección',
    ],
    scenarios: [
      {
        title: 'Un borrador reescrito a mitad de proyecto que puede haber perdido la alineación con el brief.',
        description: 'Ada compara el borrador actual con el brief final, con independencia del historial de revisiones.',
      },
      {
        title: 'Un programa de contenido en el que varios redactores trabajaron con el mismo brief.',
        description: 'Comprueba cada borrador con el mismo criterio e identifica dónde divergieron las interpretaciones.',
      },
      {
        title: 'Un borrador generado por IA que usó el brief como punto de partida.',
        description:
          'Las herramientas de IA rellenan los huecos con criterios por defecto; Ada identifica qué criterios sustituyeron a los requisitos del brief.',
      },
      {
        title: 'Un cliente que revisa los briefs con cuidado antes de aprobar los borradores.',
        description:
          'Un informe de alineación antes de la entrega al cliente hace que su revisión se centre en las decisiones creativas, no en el cumplimiento del brief.',
      },
      {
        title: 'Un brief extenso con muchos requisitos concretos.',
        description:
          'Ada hace seguimiento de cada requisito y confirma cuáles se cumplen, cuáles se cumplen a medias y cuáles faltan.',
      },
      {
        title: 'Una ronda de revisión que cambió el alcance del brief.',
        description: 'Vuelve a comprobar la alineación tras los cambios en el brief para confirmar que el borrador se actualizó en consecuencia.',
      },
    ],
    boundaryH2: 'Ada comprueba la alineación. Los redactores y los editores hacen los cambios.',
    boundaryPara:
      'Un informe de alineación es una aportación estructurada a la revisión, no una lista de cambios obligatorios. Ada identifica qué no coincide con el brief; si se corrige, y cómo, es una decisión del redactor y del editor.',
    boundaryChecklist: [
      'Ada comprueba la alineación, nunca reescribe contenido.',
      'Los hallazgos de alineación se presentan de forma estructurada para revisión editorial.',
      'Las secciones ambiguas del brief se plantean como preguntas, no se resuelven.',
      'La alineación apoya el brief, no lo modifica.',
    ],
    willNot: [
      { color: 'red', text: 'Reescribir o editar contenido' },
      { color: 'red', text: 'Anular modificaciones del brief acordadas con el cliente' },
      { color: 'amber', text: 'Marcar carencias como menores sin criterio editorial' },
    ],
    relatedH2: 'Workers con los que trabaja Ada.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Construye el brief con el que Ada compara.',
        outputLabel: 'Brief de contenido',
        ctaLabel: 'Cómo redacta el brief Luca',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa la calidad junto con la comprobación de alineación.',
        outputLabel: 'Notas de revisión',
        ctaLabel: 'Cómo revisa Quinn',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescribe el borrador una vez identificadas las carencias de alineación.',
        outputLabel: 'Borrador trabajado',
        ctaLabel: 'Cómo reescribe Ellis',
      },
    ],
    ctaH2: 'Comprueba si el borrador sigue de verdad el brief.',
    ctaPara:
      'Añade a Ada a tu flujo de trabajo y cada borrador llegará a revisión con la comprobación de alineación con el brief ya hecha.',
    guidanceFooterLabel: 'ESTADO DE ALINEACIÓN',
    guidanceFooterValue: 'Comprobado · carencias señaladas',
  },
};
