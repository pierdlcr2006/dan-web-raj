export type Week = {
  number: number;
  slug: string;
  title: string;
  area: "Fundamentos" | "Interpretación" | "Prueba" | "Estrategia" | "Cierre";
  summary: string;
  guidingQuestion: string;
  competencies: string[];
  activities: string[];
  deliverable: string;
  evidence: string;
  professor?: WeekSource;
  work?: WeekSource;
};

export type WeekSource = {
  source: "PPT profesor" | "Trabajo de la semana";
  title: string;
  overview: string;
  highlights: string[];
  details?: {
    label: string;
    value: string;
  }[];
  tags?: string[];
};

export const student = {
  name: "Daniela Ariana Valer Alfaro",
  course: "Razonamiento y argumentación jurídica",
  profileImage: "/images/profile-placeholder.png",
};

export const learningRoute = [
  {
    title: "Leer el conflicto",
    detail: "Identificar hechos, partes, pretensiones y el problema jurídico que ordena el caso.",
  },
  {
    title: "Formular una tesis",
    detail: "Convertir la posición jurídica en una respuesta clara, defendible y verificable.",
  },
  {
    title: "Sostener con razones",
    detail: "Integrar norma, jurisprudencia, principios, prueba y argumentos interpretativos.",
  },
  {
    title: "Responder objeciones",
    detail: "Anticipar contraargumentos y cerrar la defensa con coherencia y fuerza persuasiva.",
  },
];

export const weeks: Week[] = [
  {
    number: 1,
    slug: "fundamentos-del-razonamiento-juridico",
    title: "Presentación de la asignatura y caso Llamoja",
    area: "Fundamentos",
    summary: "Inicio del curso con la presentación metodológica de la asignatura y análisis del caso Giuliana Llamoja sobre debida motivación judicial.",
    guidingQuestion: "¿Por qué la motivación de una resolución judicial es una condición de racionalidad, control y legitimidad constitucional?",
    competencies: [
      "Reconocer la organización, propósito y evaluación de la asignatura",
      "Identificar el papel de la argumentación jurídica en el Estado Constitucional de Derecho",
      "Analizar vicios de motivación en resoluciones judiciales",
    ],
    activities: [
      "Revisión de la sumilla, unidades y resultados de aprendizaje del curso",
      "Presentación grupal del caso Giuliana Llamoja Hilanares",
      "Análisis de debida motivación, arbitrariedad y justificación externa",
    ],
    deliverable: "Presentación de análisis constitucional del Expediente N.° 00728-2008-PHC/TC.",
    evidence: "Trabajo grupal sobre la Sentencia del Tribunal Constitucional en el caso Giuliana Llamoja Hilanares.",
    professor: {
      source: "PPT profesor",
      title: "Presentación de la asignatura",
      overview:
        "El Dr. Roseleyev Ramos Reymundo dio la bienvenida al curso, explicó la organización metodológica, la evaluación, la sumilla y el aporte de la asignatura a la formación jurídica profesional.",
      highlights: [
        "La asignatura es obligatoria y pertenece al noveno ciclo de Derecho.",
        "Busca desarrollar capacidades, competencias, habilidades y destrezas legales en razonamiento y argumentación jurídica.",
        "El resultado final esperado es evaluar argumentos jurídicos debidamente justificados dentro de un marco ético profesional.",
        "El curso se organiza en cuatro unidades: Derecho y argumentación, Argumentación jurídica, Análisis y evaluación de las argumentaciones, y La argumentación y sus contextos.",
        "La asignatura refuerza la deontología jurídica y la aplicación de principios ético-profesionales a casos concretos.",
      ],
      details: [
        { label: "Docente", value: "Dr. Roseleyev Ramos Reymundo" },
        { label: "Unidad inicial", value: "Derecho y argumentación" },
        { label: "Enfoque", value: "Interpretación, aplicación del derecho y evaluación ética de argumentos" },
      ],
      tags: ["Organización del curso", "Competencias", "Ética profesional"],
    },
    work: {
      source: "Trabajo de la semana",
      title: "Caso Giuliana Llamoja Hilanares - Exp. N.° 00728-2008-PHC/TC",
      overview:
        "El trabajo analizó una sentencia del Tribunal Constitucional sobre hábeas corpus contra resoluciones judiciales y vulneración del derecho a la debida motivación.",
      highlights: [
        "El petitorio solicitaba la nulidad de la sentencia condenatoria, una nueva resolución conforme a Derecho y la libertad inmediata de la demandante.",
        "El TC reformuló el problema constitucional y centró el análisis en la vulneración del derecho a la debida motivación de las resoluciones judiciales.",
        "Se revisaron supuestos de vulneración de la motivación: inexistente o aparente, falta de motivación interna, deficiencia externa, insuficiencia, incongruencia y motivación cualificada.",
        "El caso permitió distinguir razonabilidad, coherencia y suficiencia como canon de control constitucional.",
        "La sentencia penal fue cuestionada por falta de corrección lógica, incoherencia narrativa y ausencia de justificación externa.",
      ],
      details: [
        { label: "Caso", value: "Giuliana Llamoja Hilanares" },
        { label: "Expediente", value: "00728-2008-PHC/TC" },
        { label: "Derecho analizado", value: "Debida motivación de las resoluciones judiciales" },
        { label: "Participación", value: "Daniela Ariana Valer Alfaro: 100%" },
      ],
      tags: ["Hábeas corpus", "Debida motivación", "Arbitrariedad", "Control constitucional"],
    },
  },
  {
    number: 2,
    slug: "lenguaje-norma-y-proposicion-juridica",
    title: "Lenguaje, norma y proposición jurídica",
    area: "Fundamentos",
    summary: "Análisis del lenguaje jurídico, ambigüedad, vaguedad y precisión conceptual.",
    guidingQuestion: "¿Cómo influye el lenguaje en la fuerza de un argumento legal?",
    competencies: ["Detectar ambigüedades normativas", "Traducir normas en proposiciones debatibles", "Definir términos con precisión jurídica"],
    activities: ["Glosario crítico", "Reescritura de enunciados normativos", "Microdebate sobre interpretación literal"],
    deliverable: "Glosario de conceptos clave con ejemplos de uso jurídico.",
    evidence: "Ejercicios de precisión conceptual y participación oral.",
  },
  {
    number: 3,
    slug: "logica-formal-y-silogismo-juridico",
    title: "Lógica formal y silogismo jurídico",
    area: "Fundamentos",
    summary: "Uso de premisas, inferencias y conclusiones para construir razonamientos válidos.",
    guidingQuestion: "¿Cuándo una conclusión jurídica se sigue de sus premisas?",
    competencies: ["Construir silogismos jurídicos", "Evaluar validez y solidez", "Identificar premisas ocultas"],
    activities: ["Taller de premisa mayor, premisa menor y conclusión", "Corrección de inferencias defectuosas", "Aplicación a casos cotidianos"],
    deliverable: "Tres silogismos jurídicos comentados.",
    evidence: "Resolución de ejercicios lógicos aplicados al Derecho.",
  },
  {
    number: 4,
    slug: "argumentos-interpretativos",
    title: "Argumentos interpretativos",
    area: "Interpretación",
    summary: "Exploración de criterios literal, sistemático, histórico, teleológico y evolutivo.",
    guidingQuestion: "¿Qué criterio interpretativo conviene usar según el problema jurídico?",
    competencies: ["Seleccionar criterios interpretativos", "Comparar interpretaciones posibles", "Justificar la opción interpretativa"],
    activities: ["Matriz de interpretación normativa", "Debate de lecturas rivales", "Análisis de artículos legales"],
    deliverable: "Cuadro comparativo de argumentos interpretativos.",
    evidence: "Sustentación breve de una interpretación preferente.",
  },
  {
    number: 5,
    slug: "reglas-principios-y-ponderacion",
    title: "Reglas, principios y ponderación",
    area: "Interpretación",
    summary: "Diferencia entre reglas y principios, conflictos normativos y ponderación jurídica.",
    guidingQuestion: "¿Cómo se argumenta cuando dos principios parecen entrar en tensión?",
    competencies: ["Distinguir regla, principio y directriz", "Aplicar criterios de ponderación", "Explicar proporcionalidad en sentido amplio"],
    activities: ["Caso de colisión de derechos", "Tabla de intensidad, idoneidad y necesidad", "Discusión de alternativas menos lesivas"],
    deliverable: "Miniinforme de ponderación sobre un caso hipotético.",
    evidence: "Argumentación escrita con balance de razones.",
  },
  {
    number: 6,
    slug: "precedente-analogias-y-distinctions",
    title: "Precedente, analogías y distinciones",
    area: "Interpretación",
    summary: "Uso del precedente judicial, ratio decidendi, obiter dictum y razonamiento por analogía.",
    guidingQuestion: "¿Cuándo un caso anterior debe orientar la respuesta del caso actual?",
    competencies: ["Identificar la ratio de una decisión", "Argumentar por analogía", "Distinguir casos con hechos relevantes distintos"],
    activities: ["Lectura de sentencia", "Mapa de similitudes y diferencias", "Ejercicio de distinguishing"],
    deliverable: "Ficha de precedente con aplicación a un caso nuevo.",
    evidence: "Análisis de sentencia y defensa oral de la analogía.",
  },
  {
    number: 7,
    slug: "hechos-prueba-y-estandares",
    title: "Hechos, prueba y estándares",
    area: "Prueba",
    summary: "Relación entre hechos probados, inferencias probatorias y estándares de decisión.",
    guidingQuestion: "¿Qué diferencia hay entre afirmar un hecho y probarlo jurídicamente?",
    competencies: ["Ordenar hechos relevantes", "Valorar indicios", "Relacionar estándar probatorio y carga argumentativa"],
    activities: ["Línea de tiempo de hechos", "Clasificación de medios probatorios", "Discusión de inferencias razonables"],
    deliverable: "Matriz de hechos, pruebas e inferencias.",
    evidence: "Taller aplicado de razonamiento probatorio.",
  },
  {
    number: 8,
    slug: "falacias-y-sesgos-en-el-discurso-legal",
    title: "Falacias y sesgos en el discurso legal",
    area: "Prueba",
    summary: "Identificación de falacias frecuentes, sesgos cognitivos y errores de persuasión.",
    guidingQuestion: "¿Cómo detectar un argumento atractivo pero jurídicamente débil?",
    competencies: ["Reconocer falacias formales e informales", "Separar persuasión de justificación", "Corregir argumentos defectuosos"],
    activities: ["Banco de falacias jurídicas", "Análisis de alegatos", "Reformulación de argumentos"],
    deliverable: "Catálogo comentado de falacias con corrección jurídica.",
    evidence: "Ejercicios de detección y mejora argumentativa.",
  },
  {
    number: 9,
    slug: "teoria-del-caso-y-problema-juridico",
    title: "Teoría del caso y problema jurídico",
    area: "Estrategia",
    summary: "Construcción de una teoría del caso coherente, narrativa y jurídicamente sostenible.",
    guidingQuestion: "¿Cómo convertir un conjunto de hechos en una postura jurídica persuasiva?",
    competencies: ["Redactar problemas jurídicos", "Diseñar teoría del caso", "Conectar hechos, norma y pretensión"],
    activities: ["Clínica de problemas jurídicos", "Mapa de partes e intereses", "Construcción de narrativa legal"],
    deliverable: "Teoría del caso en una página.",
    evidence: "Presentación breve y retroalimentación cruzada.",
  },
  {
    number: 10,
    slug: "argumentacion-constitucional",
    title: "Argumentación constitucional",
    area: "Estrategia",
    summary: "Uso de principios constitucionales, derechos fundamentales y control de razonabilidad.",
    guidingQuestion: "¿Qué cambia cuando el argumento se formula desde la Constitución?",
    competencies: ["Invocar principios constitucionales", "Estructurar argumentos de protección de derechos", "Relacionar legalidad y constitucionalidad"],
    activities: ["Análisis de un conflicto constitucional", "Identificación de derechos involucrados", "Mesa de argumentos a favor y en contra"],
    deliverable: "Esquema de argumento constitucional.",
    evidence: "Sustentación oral de una posición constitucional.",
  },
  {
    number: 11,
    slug: "test-de-proporcionalidad-y-derechos",
    title: "Test de proporcionalidad y derechos",
    area: "Estrategia",
    summary: "Aplicación de idoneidad, necesidad y proporcionalidad en sentido estricto.",
    guidingQuestion: "¿Cuándo una medida restrictiva de derechos puede justificarse?",
    competencies: ["Aplicar el test de proporcionalidad", "Evaluar medios alternativos", "Construir balances argumentativos"],
    activities: ["Caso de restricción de derechos", "Semáforo de proporcionalidad", "Debate de medidas alternativas"],
    deliverable: "Informe breve de proporcionalidad.",
    evidence: "Rúbrica de aplicación del test al caso trabajado.",
  },
  {
    number: 12,
    slug: "contraargumentacion-y-refutacion",
    title: "Contraargumentación y refutación",
    area: "Estrategia",
    summary: "Estrategias para anticipar, responder y debilitar argumentos contrarios.",
    guidingQuestion: "¿Cómo refutar sin perder coherencia ni fuerza ética?",
    competencies: ["Identificar puntos vulnerables", "Diferenciar objeción, réplica y dúplica", "Responder con razones pertinentes"],
    activities: ["Role play de audiencias", "Mapa de objeciones", "Ejercicio de respuesta en 90 segundos"],
    deliverable: "Guion de contraargumentos y respuestas.",
    evidence: "Simulación breve de debate jurídico.",
  },
  {
    number: 13,
    slug: "redaccion-de-argumentos-juridicos",
    title: "Redacción de argumentos jurídicos",
    area: "Estrategia",
    summary: "Organización escrita de tesis, razones, fuentes, evidencia y cierre persuasivo.",
    guidingQuestion: "¿Cómo se escribe un argumento jurídico claro, ordenado y convincente?",
    competencies: ["Redactar tesis y subtesis", "Usar conectores argumentativos", "Citar fuentes con función argumentativa"],
    activities: ["Taller de párrafo jurídico", "Edición de textos", "Revisión de coherencia interna"],
    deliverable: "Borrador de argumento jurídico escrito.",
    evidence: "Texto revisado con comentarios de mejora.",
  },
  {
    number: 14,
    slug: "oralidad-y-debate-forense",
    title: "Oralidad y debate forense",
    area: "Estrategia",
    summary: "Técnicas de exposición oral, claridad, orden, énfasis y manejo de preguntas.",
    guidingQuestion: "¿Cómo adaptar el argumento escrito a una defensa oral efectiva?",
    competencies: ["Estructurar una intervención oral", "Responder preguntas difíciles", "Usar voz, ritmo y síntesis"],
    activities: ["Simulación de audiencia", "Ronda de preguntas del tribunal", "Feedback sobre claridad y persuasión"],
    deliverable: "Guion oral de defensa jurídica.",
    evidence: "Exposición evaluada con criterios de argumentación oral.",
  },
  {
    number: 15,
    slug: "taller-de-caso-integrado",
    title: "Taller de caso integrado",
    area: "Cierre",
    summary: "Integración de hechos, normas, principios, prueba, precedentes y contraargumentos.",
    guidingQuestion: "¿Qué tan consistente es la estrategia completa del caso?",
    competencies: ["Integrar herramientas del curso", "Revisar coherencia global", "Fortalecer puntos débiles"],
    activities: ["Trabajo por equipos", "Clínica de caso", "Revisión con rúbrica"],
    deliverable: "Dossier argumentativo del caso final.",
    evidence: "Entrega preliminar y retroalimentación del dossier.",
  },
  {
    number: 16,
    slug: "presentacion-final-y-reflexion",
    title: "Presentación final y reflexión",
    area: "Cierre",
    summary: "Defensa final del caso, reflexión sobre aprendizaje y proyección profesional.",
    guidingQuestion: "¿Qué aprendizajes fortalecen el perfil de una futura abogada?",
    competencies: ["Defender una posición integral", "Evaluar el propio proceso", "Comunicar aprendizajes con criterio profesional"],
    activities: ["Presentación final", "Ronda de preguntas", "Cierre reflexivo"],
    deliverable: "Presentación final y reflexión personal del curso.",
    evidence: "Exposición final, dossier completo y autoevaluación.",
  },
];

export const areas = [...new Set(weeks.map((week) => week.area))];

export const courseStats = [
  { label: "Semanas", value: "16" },
  { label: "Ruta", value: "Caso + norma + prueba" },
  { label: "Enfoque", value: "Argumentación legal" },
];
