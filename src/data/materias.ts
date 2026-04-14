import { Materia } from '../types'

export const materias: Materia[] = [
  {
    id: 'lenguaje',
    nombre: 'Lenguaje y Literatura',
    icono: '📖',
    color: 'from-rose-500 to-pink-600',
    accentColor: 'bg-rose-500',
    descripcion: 'Lectura, escritura, comunicación oral y medios. Análisis literario chileno y universal.',
    temas: [
      'Comprensión lectora y análisis de textos',
      'Géneros literarios: épico, lírico, dramático',
      'Producción de textos narrativos y argumentativos',
      'Literatura chilena e hispanoamericana',
      'Medios de comunicación y lenguaje digital',
      'Ortografía y gramática',
      'Comunicación oral'
    ],
    tips: [
      'Lee al menos 20 minutos al día',
      'Subraya las ideas principales al leer',
      'Practica escribir un diario personal',
      'Habla en voz alta para mejorar tu expresión oral'
    ],
    modulos: [
      {
        titulo: 'Literatura clásica',
        contenido: 'La literatura clásica abarca obras fundamentales desde la Grecia antigua hasta el Siglo de Oro español. Estudiarás géneros como la epopeya, la tragedia y la lírica. El análisis literario incluye identificar narrador, personajes, tiempo, espacio y conflicto. En Chile, autores como Gabriela Mistral, Pablo Neruda y Vicente Huidobro son parte esencial del canon que debes conocer.',
        subtemas: ['Epopeya griega y latina', 'Teatro clásico', 'Lírica medieval y renacentista', 'Literatura colonial chilena', 'Análisis de texto literario']
      },
      {
        titulo: 'Textos argumentativos',
        contenido: 'Un texto argumentativo tiene como objetivo persuadir al lector mediante razones y evidencias. Su estructura básica es: tesis (posición del autor), argumentos (razones que la sustentan) y conclusión. Aprenderás a identificar falacias, conectores argumentativos y a redactar ensayos bien fundamentados. El debate y la disertación oral también forman parte de esta unidad.',
        subtemas: ['Estructura del texto argumentativo', 'Tesis y argumentos', 'Conectores discursivos', 'Falacias comunes', 'Ensayo y disertación']
      },
      {
        titulo: 'Medios de comunicación',
        contenido: 'Los medios de comunicación son canales que transmiten información a grandes audiencias: prensa, radio, televisión e internet. Aprenderás a leer críticamente noticias, distinguir entre información y opinión, identificar sesgos y analizar publicidad. El lenguaje digital, los memes y las redes sociales también son objeto de estudio como formas de comunicación contemporánea.',
        subtemas: ['Géneros periodísticos', 'Noticia y crónica', 'Publicidad y propaganda', 'Redes sociales como texto', 'Fake news y verificación']
      },
      {
        titulo: 'Gramática y ortografía',
        contenido: 'La gramática es el conjunto de reglas que rigen el uso correcto del idioma. En 1° Medio profundizarás en morfología (análisis de palabras), sintaxis (estructura de oraciones), ortografía acentual y literal, y puntuación. Dominar la gramática te ayudará a escribir con mayor claridad, precisión y fluidez en todas tus asignaturas.',
        subtemas: ['Morfología: sustantivos, verbos, adjetivos', 'Sintaxis: sujeto y predicado', 'Tildes y diptongos', 'Puntuación', 'Vicios del lenguaje']
      }
    ],
    recursos: [
      { icono: '📜', nombre: 'Memoria Chilena', desc: 'Literatura e historia de Chile', url: 'https://www.memoriachilena.gob.cl' },
      { icono: '📚', nombre: 'Real Academia', desc: 'Diccionario de la RAE', url: 'https://dle.rae.es' },
      { icono: '🎥', nombre: 'Aula Planeta', desc: 'Videos de Lengua', url: 'https://www.aulaplaneta.com/categoria/lengua-castellana' },
      { icono: '✍️', nombre: 'Ortografía Práctica', desc: 'Ejercicios online', url: 'https://www.rae.es/dpd' }
    ]
  },
  {
    id: 'matematica',
    nombre: 'Matemática',
    icono: '🔢',
    color: 'from-violet-500 to-purple-600',
    accentColor: 'bg-violet-500',
    descripcion: 'Números, álgebra, geometría, probabilidad y funciones. Pensamiento lógico y abstracto.',
    temas: [
      'Números racionales e irracionales',
      'Álgebra y expresiones algebraicas',
      'Ecuaciones lineales y cuadráticas',
      'Funciones y gráficos',
      'Geometría: perímetros, áreas y volúmenes',
      'Probabilidad y estadística descriptiva',
      'Transformaciones geométricas'
    ],
    tips: [
      'Practica ejercicios todos los días',
      'No memorices, entiende los conceptos',
      'Revisa tus errores para aprender de ellos',
      'Usa ejemplos del día a día'
    ],
    modulos: [
      {
        titulo: 'Números racionales e irracionales',
        contenido: 'Los números racionales son aquellos que se pueden expresar como una fracción p/q (ej: 1/2, -3, 0.75). Los irracionales no pueden expresarse como fracción y tienen decimales infinitos no periódicos, como π (3.1415…) y √2. Juntos forman los números reales. Aprenderás a operar con ambos, convertir entre fracciones y decimales, y ubicarlos en la recta numérica.',
        subtemas: ['Fracciones y decimales', 'Raíces cuadradas', 'Números irracionales', 'Recta numérica', 'Potencias y raíces']
      },
      {
        titulo: 'Álgebra y funciones',
        contenido: 'El álgebra usa letras (variables) para representar cantidades desconocidas. Aprenderás a simplificar expresiones algebraicas, factorizar, resolver ecuaciones de 1° y 2° grado, y trabajar con sistemas de ecuaciones. Las funciones describen relaciones entre variables: estudiarás funciones lineales, cuadráticas y sus gráficos en el plano cartesiano.',
        subtemas: ['Expresiones algebraicas', 'Ecuaciones lineales', 'Sistema de ecuaciones', 'Función lineal', 'Función cuadrática y parábola']
      },
      {
        titulo: 'Geometría y transformaciones',
        contenido: 'La geometría estudia figuras y sus propiedades en el plano y en el espacio. Calcularás perímetros, áreas de polígonos y círculos, y volúmenes de cuerpos geométricos. Las transformaciones geométricas incluyen traslación, rotación, reflexión y homotecia. También aplicarás el Teorema de Pitágoras y trigonometría básica.',
        subtemas: ['Áreas y perímetros', 'Volúmenes', 'Teorema de Pitágoras', 'Traslación y rotación', 'Semejanza y homotecia']
      },
      {
        titulo: 'Probabilidad y estadística',
        contenido: 'La estadística descriptiva permite organizar y resumir datos: tablas de frecuencia, gráficos de barra, histogramas, promedio, mediana, moda y desviación estándar. La probabilidad mide la posibilidad de que un evento ocurra, entre 0 (imposible) y 1 (seguro). Aprenderás experimentos aleatorios, espacio muestral y probabilidades simples y compuestas.',
        subtemas: ['Tablas y gráficos estadísticos', 'Medidas de tendencia central', 'Dispersión estadística', 'Probabilidad clásica', 'Eventos independientes']
      }
    ],
    recursos: [
      { icono: '📐', nombre: 'Khan Academy', desc: 'Matemática en español', url: 'https://es.khanacademy.org/math' },
      { icono: '📊', nombre: 'GeoGebra', desc: 'Geometría y gráficos online', url: 'https://www.geogebra.org' },
      { icono: '🔢', nombre: 'Desmos', desc: 'Calculadora gráfica', url: 'https://www.desmos.com/calculator?lang=es' },
      { icono: '🎮', nombre: 'Mathigon', desc: 'Álgebra interactiva', url: 'https://mathigon.org' }
    ]
  },
  {
    id: 'biologia',
    nombre: 'Biología',
    icono: '🧬',
    color: 'from-emerald-500 to-green-600',
    accentColor: 'bg-emerald-500',
    descripcion: 'Evolución, célula, ecosistemas y biodiversidad. La vida en todas sus formas.',
    temas: [
      'Célula: estructura y función',
      'Evolución y biodiversidad',
      'Sistemas del cuerpo humano',
      'Ecosistemas y medio ambiente',
      'Materia y energía en los seres vivos',
      'Genética básica',
      'Biotecnología'
    ],
    tips: [
      'Haz esquemas de los sistemas del cuerpo',
      'Conecta la biología con tu vida diaria',
      'Observa la naturaleza con curiosidad',
      'Usa videos para visualizar procesos'
    ],
    modulos: [
      {
        titulo: 'Evolución y biodiversidad',
        contenido: 'La teoría de la evolución, propuesta por Charles Darwin, explica cómo las especies cambian con el tiempo mediante selección natural: los individuos con características más ventajosas sobreviven y se reproducen más. La biodiversidad es la variedad de formas de vida en la Tierra. Aprenderás sobre taxonomía (clasificación de organismos), adaptaciones y extinción de especies.',
        subtemas: ['Selección natural', 'Adaptaciones', 'Clasificación de organismos', 'Biodiversidad chilena', 'Fósiles y evidencias de la evolución']
      },
      {
        titulo: 'Organización celular',
        contenido: 'La célula es la unidad básica de la vida. Existen dos tipos: procariotas (sin núcleo definido, como las bacterias) y eucariotas (con núcleo, como las células animales y vegetales). Aprenderás las funciones de orgánulos clave: mitocondrias (energía), cloroplastos (fotosíntesis), ribosomas (síntesis proteica) y núcleo (información genética con ADN).',
        subtemas: ['Célula procariota y eucariota', 'Membrana plasmática', 'Núcleo y ADN', 'Mitocondrias y respiración celular', 'Cloroplastos y fotosíntesis']
      },
      {
        titulo: 'Materia y energía en ecosistemas',
        contenido: 'Un ecosistema incluye seres vivos (biocenosis) y su ambiente físico (biotopo) interactuando. Los organismos se clasifican en productores (plantas), consumidores (animales) y descomponedores (hongos, bacterias). La energía fluye en cadenas tróficas: sol → planta → herbívoro → carnívoro. Los ciclos biogeoquímicos (agua, carbono, nitrógeno) reciclan la materia.',
        subtemas: ['Cadenas y redes tróficas', 'Productores y consumidores', 'Ciclo del agua', 'Ciclo del carbono', 'Impacto humano en ecosistemas']
      }
    ],
    recursos: [
      { icono: '🔬', nombre: 'Khan Academy Bio', desc: 'Biología en español', url: 'https://es.khanacademy.org/science/biology' },
      { icono: '🎬', nombre: 'CuriosaMente', desc: 'Ciencia en video', url: 'https://www.youtube.com/c/CuriosaMente' },
      { icono: '🌿', nombre: 'PhET Simulaciones', desc: 'Experimentos virtuales', url: 'https://phet.colorado.edu/es/simulations/filter?subjects=biology' },
      { icono: '🧠', nombre: 'Visible Body', desc: 'Anatomía 3D', url: 'https://www.visiblebody.com/es/atlas-of-anatomy' }
    ]
  },
  {
    id: 'fisica',
    nombre: 'Física',
    icono: '⚡',
    color: 'from-blue-500 to-cyan-600',
    accentColor: 'bg-blue-500',
    descripcion: 'Ondas, luz, sonido y el universo. Las leyes que rigen la naturaleza.',
    temas: [
      'El sonido y las ondas',
      'La luz y el espectro electromagnético',
      'El universo y el sistema solar',
      'Fuerza y movimiento',
      'Energía y sus transformaciones',
      'Electricidad y magnetismo',
      'Calor y temperatura'
    ],
    tips: [
      'Relaciona cada concepto con fenómenos reales',
      'Dibuja diagramas de fuerzas y movimientos',
      'Mira el cielo nocturno con curiosidad científica',
      'Los experimentos caseros son muy útiles'
    ],
    modulos: [
      {
        titulo: 'El sonido y las ondas',
        contenido: 'El sonido es una onda mecánica longitudinal que necesita un medio material para propagarse (no viaja en el vacío). Se caracteriza por su frecuencia (Hz → tono), amplitud (volumen) y velocidad (340 m/s en el aire). Estudiarás fenómenos como el eco, la resonancia y el efecto Doppler. Las ondas también incluyen ondas transversales como las del agua.',
        subtemas: ['Propiedades del sonido', 'Velocidad del sonido', 'Eco y reflexión', 'Efecto Doppler', 'Infrasonic y ultrasonido']
      },
      {
        titulo: 'La luz',
        contenido: 'La luz es una onda electromagnética que no necesita medio para propagarse (viaja en el vacío a 300.000 km/s). El espectro electromagnético incluye radio, microondas, infrarrojo, luz visible, ultravioleta, rayos X y rayos gamma. Aprenderás los fenómenos de reflexión (espejos), refracción (lentes), difracción e interferencia, fundamentales en óptica.',
        subtemas: ['Espectro electromagnético', 'Reflexión y ley de Snell', 'Refracción y prismas', 'Lentes convergentes y divergentes', 'Color y descomposición de la luz']
      },
      {
        titulo: 'El universo y el sistema solar',
        contenido: 'El universo tiene aproximadamente 13.800 millones de años y se originó en el Big Bang. Nuestro sistema solar orbita en la Vía Láctea y tiene 8 planetas. Aprenderás sobre estrellas (nacimiento, vida y muerte), galaxias, nebulosas y agujeros negros. También estudiarás las leyes de Kepler que describen el movimiento planetario.',
        subtemas: ['Big Bang y edad del universo', 'Estrellas y ciclo estelar', 'Sistema solar y planetas', 'Leyes de Kepler', 'Exploración espacial']
      }
    ],
    recursos: [
      { icono: '🚀', nombre: 'NASA en Español', desc: 'Universo y espacio', url: 'https://www.nasa.gov/es/' },
      { icono: '⚗️', nombre: 'PhET Física', desc: 'Simulaciones interactivas', url: 'https://phet.colorado.edu/es/simulations/filter?subjects=physics' },
      { icono: '📡', nombre: 'Khan Academy Física', desc: 'Física en español', url: 'https://es.khanacademy.org/science/physics' },
      { icono: '🌌', nombre: 'Stellarium Web', desc: 'Mapa del cielo nocturno', url: 'https://stellarium-web.org' }
    ]
  },
  {
    id: 'quimica',
    nombre: 'Química',
    icono: '🧪',
    color: 'from-indigo-500 to-blue-600',
    accentColor: 'bg-indigo-500',
    descripcion: 'Estructura atómica, tabla periódica y reacciones químicas cotidianas.',
    temas: [
      'Estructura atómica y tabla periódica',
      'Enlaces químicos: iónico, covalente y metálico',
      'Reacciones químicas cotidianas',
      'Ácidos, bases y pH',
      'Mezclas y soluciones',
      'Materia y sus cambios de estado',
      'Química orgánica básica'
    ],
    tips: [
      'Memoriza los primeros 20 elementos de la tabla periódica',
      'Relaciona las reacciones con la cocina y el hogar',
      'Dibuja los modelos atómicos para entenderlos mejor',
      'Los cambios de estado los ves todos los días'
    ],
    modulos: [
      {
        titulo: 'Estructura atómica y tabla periódica',
        contenido: 'El átomo está formado por un núcleo (protones + neutrones) rodeado de electrones en niveles de energía. El número atómico (Z) = número de protones e identifica al elemento. La tabla periódica organiza 118 elementos por número atómico y propiedades similares en columnas (grupos) y filas (períodos). Aprenderás sobre isótopos, iones y la configuración electrónica.',
        subtemas: ['Modelo atómico de Bohr', 'Protones, neutrones y electrones', 'Número atómico y másico', 'Tabla periódica: grupos y períodos', 'Isótopos e iones']
      },
      {
        titulo: 'Enlaces químicos',
        contenido: 'Los átomos se unen mediante enlaces para formar moléculas y compuestos. El enlace iónico ocurre entre metal y no metal (ej: NaCl, sal de mesa). El enlace covalente une no metales compartiendo electrones (ej: H₂O, agua). El enlace metálico mantiene unidos a los metales en una red con electrones libres. El tipo de enlace determina las propiedades del compuesto.',
        subtemas: ['Enlace iónico', 'Enlace covalente polar y apolar', 'Enlace metálico', 'Propiedades según el enlace', 'Notación de Lewis']
      },
      {
        titulo: 'Reacciones químicas cotidianas',
        contenido: 'Una reacción química transforma sustancias (reactivos) en nuevas sustancias (productos). Las reconoces por cambios de color, temperatura, gas o precipitado. Tipos principales: síntesis, descomposición, sustitución, combustión y neutralización ácido-base. Las ecuaciones químicas deben balancearse para respetar la ley de conservación de la masa.',
        subtemas: ['Tipos de reacciones', 'Balanceo de ecuaciones', 'Combustión', 'Oxidación y corrosión', 'Reacciones en la cocina']
      }
    ],
    recursos: [
      { icono: '⚛️', nombre: 'Ptable', desc: 'Tabla periódica interactiva', url: 'https://ptable.com/?lang=es' },
      { icono: '🧫', nombre: 'Khan Academy Química', desc: 'Química en español', url: 'https://es.khanacademy.org/science/chemistry' },
      { icono: '🔭', nombre: 'PhET Química', desc: 'Simulaciones de laboratorio', url: 'https://phet.colorado.edu/es/simulations/filter?subjects=chemistry' },
      { icono: '📖', nombre: 'Royal Society Chem', desc: 'Recursos educativos', url: 'https://www.rsc.org/education/eic/student' }
    ]
  },
  {
    id: 'historia',
    nombre: 'Historia y Geografía',
    icono: '🌍',
    color: 'from-amber-500 to-orange-600',
    accentColor: 'bg-amber-500',
    descripcion: 'Historia universal, geografía y formación ciudadana. El mundo que habitamos.',
    temas: [
      'Construcción de Estados-nación',
      'Revolución Industrial y sus consecuencias',
      'Imperialismo y Primera Guerra Mundial',
      'Geografía de Chile y América',
      'Formación ciudadana y democracia',
      'Derechos humanos',
      'Economía básica y globalización'
    ],
    tips: [
      'Crea líneas de tiempo para ordenar los eventos',
      'Conecta los hechos históricos con el presente',
      'Usa mapas para aprender geografía',
      'Debate temas de actualidad relacionados'
    ],
    modulos: [
      {
        titulo: 'Construcción de Estados-nación',
        contenido: 'Entre los siglos XVIII y XIX surgieron los modernos Estados-nación, impulsados por el liberalismo y el nacionalismo. La Revolución Francesa (1789) fue un punto de quiebre: derrocó al absolutismo, proclamó los derechos del ciudadano y extendió ideas de libertad, igualdad y fraternidad. En América, estas ideas inspiraron los procesos de Independencia, incluida la Independencia de Chile (1818).',
        subtemas: ['Revolución Francesa', 'Independencia de América Latina', 'Independencia de Chile', 'Liberalismo y nacionalismo', 'Constituciones y ciudadanía']
      },
      {
        titulo: 'Revolución Industrial',
        contenido: 'La Revolución Industrial (siglo XVIII-XIX en Gran Bretaña) transformó la producción artesanal en producción fabril a gran escala gracias al vapor, el carbón y las máquinas. Sus consecuencias fueron enormes: urbanización, surgimiento del proletariado, capitalismo industrial, condiciones laborales precarias (niños trabajando, jornadas de 16 horas) y movimientos obreros que exigieron derechos.',
        subtemas: ['Causas y origen en Inglaterra', 'Máquina de vapor', 'Capitalismo industrial', 'Condiciones de vida obrera', 'Marxismo y socialismo']
      },
      {
        titulo: 'Imperialismo y Primera Guerra Mundial',
        contenido: 'El imperialismo fue la expansión de las potencias europeas sobre África, Asia y Oceanía en el siglo XIX, motivada por materias primas, mercados y prestigio nacional. Las tensiones entre potencias imperialistas llevaron a la Primera Guerra Mundial (1914-1918), con el asesinato del archiduque Francisco Fernando como detonante. La guerra introdujo nuevas armas letales y reconfiguró el mapa mundial.',
        subtemas: ['Reparto de África y Asia', 'Causas de la WWI', 'Trincheras y nuevas armas', 'Tratado de Versalles', 'Consecuencias en el mundo']
      },
      {
        titulo: 'Formación ciudadana',
        contenido: 'La ciudadanía implica derechos (votar, educación, salud) y deberes (cumplir la ley, participar). La democracia es el sistema de gobierno donde el poder emana del pueblo. Aprenderás sobre la Constitución chilena, los tres poderes del Estado (Ejecutivo, Legislativo y Judicial), los Derechos Humanos (Declaración Universal de 1948) y la participación ciudadana activa.',
        subtemas: ['Derechos y deberes ciudadanos', 'Constitución chilena', 'Tres poderes del Estado', 'Declaración Universal de DDHH', 'Participación y voto']
      }
    ],
    recursos: [
      { icono: '🏛️', nombre: 'Memoria Chilena', desc: 'Historia de Chile', url: 'https://www.memoriachilena.gob.cl' },
      { icono: '🗺️', nombre: 'National Geographic', desc: 'Geografía y mapas', url: 'https://www.nationalgeographic.es/historia' },
      { icono: '📰', nombre: 'Khan Academy Historia', desc: 'Historia universal', url: 'https://es.khanacademy.org/humanities/world-history' },
      { icono: '🌐', nombre: 'BCN Chile', desc: 'Biblioteca del Congreso', url: 'https://www.bcn.cl/formacionciudadana' }
    ]
  },
  {
    id: 'ingles',
    nombre: 'Inglés',
    icono: '🗣️',
    color: 'from-teal-500 to-cyan-600',
    accentColor: 'bg-teal-500',
    descripcion: 'Comprensión y expresión en inglés. Listening, speaking, reading y writing.',
    temas: [
      'Personal Information and identity',
      'Teen culture and lifestyle',
      'Future plans and careers',
      'Health and lifestyle',
      'Present, past and future tenses',
      'Pronunciación y fonética',
      'Cultura anglosajona'
    ],
    tips: [
      'Escucha música en inglés con las letras',
      'Mira series con subtítulos en inglés',
      'Practica hablando aunque sea contigo mismo',
      'Usa apps como Duolingo diariamente'
    ],
    modulos: [
      {
        titulo: 'Personal Information',
        contenido: 'En este módulo aprenderás a presentarte en inglés: nombre, edad, nacionalidad, hobbies y familia. Practicarás el verbo "to be" (am/is/are), pronombres personales (I, you, he, she, it, we, they) y adjetivos posesivos (my, your, his, her). También aprenderás a hacer preguntas básicas: What\'s your name? Where are you from? How old are you?',
        subtemas: ['Verb to be', 'Personal pronouns', 'Possessive adjectives', 'Greetings and introductions', 'Wh-questions']
      },
      {
        titulo: 'Teen culture',
        contenido: 'Este módulo explora la cultura adolescente anglosajona: música, deportes, redes sociales, modas y rutinas diarias. Estudiarás el Present Simple para hablar de hábitos y el Present Continuous para acciones en progreso. Aprenderás vocabulario sobre actividades cotidianas, géneros musicales, pasatiempos y cómo expresar gustos usando "like", "love", "hate".',
        subtemas: ['Present Simple vs Continuous', 'Like / love / hate + gerund', 'Daily routines vocabulary', 'Social media language', 'Teen hobbies and interests']
      },
      {
        titulo: 'Future plans and careers',
        contenido: 'Aprenderás a hablar sobre el futuro usando "will" (predicciones y decisiones espontáneas), "be going to" (planes concretos) y el Present Continuous con valor futuro (citas programadas). Vocabulario sobre profesiones, habilidades y aspiraciones. También practicarás cómo escribir un correo formal o informal y expresar opiniones sobre el trabajo.',
        subtemas: ['Will vs be going to', 'Future time expressions', 'Careers and jobs vocabulary', 'Formal and informal writing', 'Modal verbs: can, could, should']
      },
      {
        titulo: 'Health and lifestyle',
        contenido: 'Este módulo trata sobre salud, alimentación y bienestar en inglés. Aprenderás el vocabulario del cuerpo humano, síntomas y enfermedades comunes. Practicarás el uso de imperativos para dar consejos (You should / shouldn\'t, You must / mustn\'t) y modales de obligación. También leerás textos sobre alimentación saludable y vida activa.',
        subtemas: ['Body parts and health vocabulary', 'Symptoms and ailments', 'Modal verbs: should, must, have to', 'Giving advice', 'Healthy living reading']
      }
    ],
    recursos: [
      { icono: '🎙️', nombre: 'BBC Learning English', desc: 'Inglés oficial de la BBC', url: 'https://www.bbc.co.uk/learningenglish' },
      { icono: '🦜', nombre: 'Duolingo', desc: 'Inglés gamificado', url: 'https://www.duolingo.com' },
      { icono: '🎵', nombre: 'Lyrics Training', desc: 'Inglés con canciones', url: 'https://lyricstraining.com/es' },
      { icono: '📱', nombre: 'Cambridge English', desc: 'Tests y gramática', url: 'https://www.cambridgeenglish.org/learning-english' }
    ]
  },
  {
    id: 'artes',
    nombre: 'Artes y Música',
    icono: '🎨',
    color: 'from-fuchsia-500 to-pink-600',
    accentColor: 'bg-fuchsia-500',
    descripcion: 'Expresión visual y musical. Creatividad, apreciación estética y lenguaje artístico.',
    temas: [
      'Elementos del lenguaje visual',
      'Dibujo y técnicas de pintura',
      'Historia del arte chileno y universal',
      'Lenguaje musical básico y ritmo',
      'Música chilena y latinoamericana',
      'Arte digital básico',
      'Expresión y creatividad personal'
    ],
    tips: [
      'Dibuja todos los días aunque sea 10 minutos',
      'Visita museos virtuales y exposiciones',
      'Escucha géneros musicales variados',
      'No tengas miedo de equivocarte, eso es arte'
    ],
    modulos: [
      {
        titulo: 'Lenguaje visual',
        contenido: 'El lenguaje visual es el conjunto de elementos con que se construyen imágenes. Sus componentes principales son: línea (contorno y movimiento), forma (figura geométrica o irregular), color (primarios, secundarios, temperatura), textura (táctil o visual), espacio (2D y 3D) y composición (equilibrio, simetría, ritmo visual). Aprenderás a "leer" y producir imágenes con intención artística.',
        subtemas: ['Línea, forma y punto', 'Color: círculo cromático', 'Textura visual y táctil', 'Composición y encuadre', 'Contraste y armonía']
      },
      {
        titulo: 'Historia del arte',
        contenido: 'Recorrerás los principales movimientos artísticos desde el arte rupestre hasta el arte contemporáneo: Renacimiento, Barroco, Impresionismo, Vanguardias (Cubismo, Surrealismo, Abstracción) y arte chileno (Pedro Lira, Roberto Matta, Violeta Parra como artista visual). Aprenderás a analizar obras identificando contexto histórico, técnica y mensaje.',
        subtemas: ['Arte prehistórico y antiguo', 'Renacimiento y Barroco', 'Impresionismo', 'Vanguardias del siglo XX', 'Arte chileno contemporáneo']
      },
      {
        titulo: 'Lenguaje musical',
        contenido: 'La música tiene elementos propios: ritmo (duración y pulso), melodía (sucesión de notas), armonía (notas simultáneas), timbre (color sonoro de cada instrumento) y dinámica (intensidad). Aprenderás lectura básica de partitura, figuras musicales (redonda, blanca, negra, corchea), compases y escala musical. También identificarás instrumentos de la orquesta.',
        subtemas: ['Figuras rítmicas y compás', 'Escala musical y tonos', 'Familias de instrumentos', 'Géneros musicales', 'Lectura de partitura básica']
      },
      {
        titulo: 'Creación artística',
        contenido: 'La creación artística es el proceso de dar forma a ideas y emociones usando materiales y técnicas. Explorarás técnicas de dibujo (lápiz, carboncillo), pintura (acuarela, tempera), collage y arte digital básico. También aprenderás sobre proceso creativo: boceto, experimentación, selección y obra final. El arte es una forma de comunicar tu visión del mundo.',
        subtemas: ['Proceso creativo', 'Técnicas de dibujo', 'Pintura y acuarela', 'Collage y técnicas mixtas', 'Arte digital básico']
      }
    ],
    recursos: [
      { icono: '🖼️', nombre: 'Google Arts & Culture', desc: 'Museos del mundo virtual', url: 'https://artsandculture.google.com' },
      { icono: '🏛️', nombre: 'MNBA Chile', desc: 'Museo Nacional de Bellas Artes', url: 'https://www.mnba.gob.cl' },
      { icono: '🎵', nombre: 'musictheory.net', desc: 'Teoría musical interactiva', url: 'https://www.musictheory.net/es' },
      { icono: '✏️', nombre: 'Sketchbook Online', desc: 'Dibujo digital gratis', url: 'https://www.sketchpad.app' }
    ]
  },
  {
    id: 'edfisica',
    nombre: 'Educación Física',
    icono: '⚽',
    color: 'from-red-500 to-orange-600',
    accentColor: 'bg-red-500',
    descripcion: 'Deportes, salud y bienestar. Vida activa y hábitos saludables.',
    temas: [
      'Condición física y calentamiento',
      'Deportes colectivos e individuales',
      'Alimentación saludable y nutrición',
      'Primeros auxilios básicos',
      'Bienestar emocional y autocuidado',
      'Vida activa vs. sedentarismo',
      'Prácticas corporales expresivas'
    ],
    tips: [
      'Muévete al menos 60 minutos al día',
      'Duerme 8-9 horas cada noche',
      'Toma suficiente agua durante el día',
      'Limita el tiempo de pantalla'
    ],
    modulos: [
      {
        titulo: 'Condición física',
        contenido: 'La condición física es la capacidad del cuerpo para realizar actividad física. Sus componentes son: resistencia cardiovascular, fuerza muscular, flexibilidad, coordinación y velocidad. Un buen calentamiento (5-10 min) previene lesiones elevando temperatura muscular y frecuencia cardíaca. La vuelta a la calma incluye estiramientos para recuperar el cuerpo. El test de Navette mide tu capacidad aeróbica.',
        subtemas: ['Resistencia cardiovascular', 'Fuerza y tonificación', 'Flexibilidad y elongación', 'Calentamiento correcto', 'Test de condición física']
      },
      {
        titulo: 'Deportes colectivos',
        contenido: 'Los deportes colectivos desarrollan trabajo en equipo, comunicación y estrategia. Estudiarás reglamentos básicos de fútbol, básquetbol, volleyball y handball. Aprenderás posiciones, reglas clave, gestos técnicos fundamentales (pase, recepción, lanzamiento) y tácticas básicas. También se aborda el fair play y el respeto como valores deportivos esenciales.',
        subtemas: ['Fútbol: reglas y técnica', 'Básquetbol: juego y posiciones', 'Volleyball: técnica básica', 'Handball', 'Fair play y valores']
      },
      {
        titulo: 'Prácticas corporales',
        contenido: 'Las prácticas corporales expresivas incluyen danza, expresión corporal, yoga y actividades de bienestar. La danza chilena (cueca) y latinoamericana son parte del currículo. Aprenderás a comunicar emociones a través del movimiento y a reconocer el cuerpo como medio de expresión cultural. La relajación y técnicas de respiración también se trabajan para el manejo del estrés.',
        subtemas: ['Danza chilena: la cueca', 'Expresión corporal', 'Yoga y relajación', 'Respiración y estrés', 'Baile latinoamericano']
      },
      {
        titulo: 'Vida activa y saludable',
        contenido: 'La vida activa combina actividad física regular con hábitos saludables de alimentación, sueño e higiene. El sedentarismo es uno de los mayores problemas de salud del siglo XXI. Aprenderás sobre nutrición básica (macronutrientes, hidratación), higiene postural frente a pantallas, manejo del tiempo de pantalla y cómo diseñar una rutina de actividad física equilibrada.',
        subtemas: ['Nutrición y macronutrientes', 'Sedentarismo y sus riesgos', 'Higiene postural', 'Manejo del tiempo de pantalla', 'Diseño de rutina personal']
      }
    ],
    recursos: [
      { icono: '🏃', nombre: 'JUNAEB Activo', desc: 'Recursos vida saludable', url: 'https://www.junaeb.cl/vida-sana' },
      { icono: '🧘', nombre: 'Yoga con Adriene', desc: 'Yoga gratis en YouTube', url: 'https://www.youtube.com/c/yogawithadriene' },
      { icono: '🥗', nombre: 'MINSAL Chile', desc: 'Guía alimentaria chilena', url: 'https://www.minsal.cl/guia-alimentaria' },
      { icono: '⚽', nombre: 'FIFA Enseñanza', desc: 'Técnica y reglas fútbol', url: 'https://www.fifa.com/es/education' }
    ]
  },
  {
    id: 'tecnologia',
    nombre: 'Tecnología e Informática',
    icono: '💻',
    color: 'from-slate-500 to-gray-700',
    accentColor: 'bg-slate-500',
    descripcion: 'Pensamiento computacional, programación, diseño digital y ciudadanía digital.',
    temas: [
      'Pensamiento computacional',
      'Introducción a la programación (Scratch/Python)',
      'Herramientas digitales para el estudio',
      'Diseño y proyectos tecnológicos',
      'Robótica básica',
      'Seguridad digital y privacidad',
      'Ciudadanía digital responsable'
    ],
    tips: [
      'Aprende a programar con Scratch o Python',
      'Crea proyectos propios que te entusiasmen',
      'Explora Khan Academy o Codecademy',
      'La tecnología es una herramienta, úsala bien'
    ],
    modulos: [
      {
        titulo: 'Pensamiento computacional',
        contenido: 'El pensamiento computacional es una forma de resolver problemas usando conceptos de la informática. Sus pilares son: descomposición (dividir el problema en partes), reconocimiento de patrones (encontrar similitudes), abstracción (quedarse con lo esencial) y algoritmos (pasos ordenados para resolver). Estas habilidades se aplican en la vida cotidiana, no solo en computadores.',
        subtemas: ['Descomposición de problemas', 'Reconocimiento de patrones', 'Abstracción', 'Algoritmos y diagramas de flujo', 'Aplicaciones cotidianas']
      },
      {
        titulo: 'Programación básica',
        contenido: 'La programación es dar instrucciones a un computador para que realice tareas. Comenzarás con Scratch (programación visual con bloques) para entender conceptos como variables, condicionales (si/entonces), bucles (repetir) y funciones. Luego verás Python básico: print, input, variables y listas. Lo importante es aprender a pensar lógicamente para crear programas.',
        subtemas: ['Scratch: bloques y eventos', 'Variables y tipos de datos', 'Condicionales: if/else', 'Bucles: for y while', 'Python: primeros pasos']
      },
      {
        titulo: 'Proyectos digitales',
        contenido: 'El diseño tecnológico sigue un proceso: identificar problema → investigar → diseñar solución → construir prototipo → evaluar y mejorar. Aprenderás a crear proyectos con herramientas digitales: presentaciones efectivas (Google Slides / PowerPoint), hojas de cálculo (Excel / Sheets), documentos colaborativos y elementos básicos de diseño gráfico con Canva.',
        subtemas: ['Proceso de diseño tecnológico', 'Presentaciones efectivas', 'Hojas de cálculo básicas', 'Diseño gráfico con Canva', 'Trabajo colaborativo online']
      },
      {
        titulo: 'Ciudadanía digital',
        contenido: 'Ser ciudadano digital responsable implica usar la tecnología de forma ética, segura y respetuosa. Aprenderás sobre privacidad de datos, contraseñas seguras, reconocimiento de phishing y estafas online, derechos de autor y licencias Creative Commons. También abordarás el ciberacoso (cyberbullying): cómo identificarlo, denunciarlo y prevenirlo.',
        subtemas: ['Privacidad y datos personales', 'Contraseñas seguras', 'Phishing y estafas', 'Derechos de autor', 'Ciberacoso y prevención']
      }
    ],
    recursos: [
      { icono: '🐱', nombre: 'Scratch MIT', desc: 'Programación visual gratis', url: 'https://scratch.mit.edu' },
      { icono: '💡', nombre: 'Code.org', desc: 'Aprende a programar', url: 'https://studio.code.org/s/coursee-2022/lessons/1/levels/1' },
      { icono: '🎓', nombre: 'Khan Academy Cómputo', desc: 'Informática en español', url: 'https://es.khanacademy.org/computing' },
      { icono: '🎨', nombre: 'Canva Educación', desc: 'Diseño gráfico gratuito', url: 'https://www.canva.com/es_419/education' }
    ]
  }
]
