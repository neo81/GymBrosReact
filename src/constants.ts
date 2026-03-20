import { Exercise } from './types';

export const MUSCLES_FRONT = [
  { id: 'hombros',    label: 'Hombros',    cx: 95,  cy: 105, r: 10 },
  { id: 'biceps',     label: 'Bíceps',     cx: 75,  cy: 155, r: 10 },
  { id: 'antebrazo',  label: 'Antebrazo',  cx: 60,  cy: 185, r: 10 },
  { id: 'pectorales', label: 'Pectorales', cx: 195, cy: 115, r: 10 },
  { id: 'oblicuos',   label: 'Oblicuos',   cx: 200, cy: 190, r: 10 },
  { id: 'abdomen',    label: 'Abdomen',    cx: 160, cy: 175, r: 10 },
  { id: 'abductores', label: 'Abductores', cx: 125, cy: 270, r: 10 },
  { id: 'cuadriceps', label: 'Cuádriceps', cx: 135, cy: 340, r: 10 },
  { id: 'aductores',  label: 'Aductores',  cx: 185, cy: 290, r: 10 },
];

export const MUSCLES_BACK = [
  { id: 'triceps',        label: 'Tríceps',         cx: 85,  cy: 160, r: 10 },
  { id: 'lumbares',       label: 'Lumbares',        cx: 160, cy: 200, r: 10 },
  { id: 'isquiotibiales', label: 'Isquiotibiales',  cx: 145, cy: 330, r: 10 },
  { id: 'pantorrillas',   label: 'Pantorrillas',    cx: 145, cy: 380, r: 10 },
  { id: 'trapecio',       label: 'Trapecio',       cx: 160, cy: 85,  r: 10 },
  { id: 'dorsales',       label: 'Dorsales',        cx: 195, cy: 145, r: 10 },
  { id: 'gluteos',        label: 'Glúteos',         cx: 175, cy: 245, r: 10 },
];

export const ALL_MUSCLES = [...MUSCLES_FRONT, ...MUSCLES_BACK];

export const EXERCISES_DB: { [key: string]: Exercise[] } = {
  hombros: [
    { 
      id: 'e_hom_1', 
      name: 'Elevación Lateral (mancuernas)', 
      emoji: '🏋️', 
      muscles: ['Hombros','Trapecio'], 
      desc: 'Trabaja el deltoides lateral. Eleva los brazos hasta la altura de los hombros manteniendo leve flexión.', 
      instructions: [
        'Parate derecho con una mancuerna en cada mano a los costados del cuerpo.',
        'Elevá las mancuernas hacia los costados hasta que tus brazos estén paralelos al piso.',
        'Mantené una leve flexión en los codos durante todo el movimiento.',
        'Bajá las pesas de forma controlada hasta la posición inicial.',
        'No uses el balanceo del cuerpo para subir el peso, concentrate en el hombro.'
      ]
    },
    { 
      id: 'e_hom_2', 
      name: 'Press Militar Sentado (mancuernas)', 
      emoji: '💪', 
      muscles: ['Hombros','Tríceps'], 
      desc: 'Ejercicio compuesto para deltoides anterior y lateral. Empuja hacia arriba extendiendo completamente los codos.',
      instructions: [
        'Sentate en un banco con respaldo a 90 grados.',
        'Sostené las mancuernas a la altura de las orejas con las palmas hacia adelante.',
        'Empujá las pesas hacia arriba hasta que tus brazos estén casi extendidos.',
        'Bajá lentamente hasta que las mancuernas vuelvan al nivel de tus orejas.',
        'Mantené los pies bien apoyados en el piso para mayor estabilidad.'
      ]
    },
    { 
      id: 'e_hom_3', 
      name: 'Press Militar (barra)', 
      emoji: '🔱', 
      muscles: ['Hombros','Trapecio','Tríceps'], 
      desc: 'Movimiento compuesto de empuje vertical. Uno de los mejores para masa en hombros.',
      instructions: [
        'Parate con los pies al ancho de los hombros.',
        'Sostené la barra sobre la parte superior del pecho con un agarre un poco más ancho que los hombros.',
        'Empujá la barra hacia arriba sobre tu cabeza hasta extender los brazos.',
        'Bajá la barra con control hasta que toque suavemente la parte superior de tu pecho.',
        'Apretá los glúteos y el abdomen para proteger la espalda baja.'
      ]
    },
    { 
      id: 'e_hom_4', 
      name: 'Elevación Frontal (mancuernas)', 
      emoji: '⬆️', 
      muscles: ['Hombros'], 
      desc: 'Aísla el deltoides anterior. Eleva el brazo extendido hasta la altura del hombro.',
      instructions: [
        'Parate derecho con una mancuerna en cada mano frente a tus muslos.',
        'Levantá una mancuerna hacia adelante hasta que el brazo esté paralelo al piso.',
        'Mantené el brazo casi recto, con una mínima flexión en el codo.',
        'Bajá la pesa lentamente y repetí con el otro brazo.',
        'No uses el balanceo del cuerpo para subir el peso.'
      ]
    },
    { 
      id: 'e_hom_5', 
      name: 'Pájaros con Mancuernas', 
      emoji: '🕊️', 
      muscles: ['Hombros','Dorsales'], 
      desc: 'Trabaja el deltoides posterior con el torso inclinado hacia adelante.',
      instructions: [
        'Incliná el torso hacia adelante hasta que esté casi paralelo al piso.',
        'Sostené las mancuernas colgando debajo de tu pecho con las palmas enfrentadas.',
        'Levantá las pesas hacia los costados como si fueran alas, apretando la parte de atrás de los hombros.',
        'Mantené una leve flexión en los codos durante todo el movimiento.',
        'Bajá las mancuernas de forma controlada a la posición inicial.'
      ]
    },
    { 
      id: 'e_hom_6', 
      name: 'Face Pulls (polea)', 
      emoji: '🎭', 
      muscles: ['Hombros','Trapecio'], 
      desc: 'Excelente para la salud del hombro y deltoides posterior. Tira de la cuerda hacia tu cara separando los extremos.',
      instructions: [
        'Ajustá la polea a la altura de tu cara y usá el agarre de soga.',
        'Tirá de la soga hacia tu frente, separando los extremos hacia tus orejas.',
        'Mantené los codos altos y hacia afuera en todo momento.',
        'Apretá la parte posterior de los hombros al final del movimiento.',
        'Volvé lentamente a la posición inicial manteniendo la tensión.'
      ]
    },
    { 
      id: 'e_hom_7', 
      name: 'Press Arnold', 
      emoji: '🕶️', 
      muscles: ['Hombros','Tríceps'], 
      desc: 'Variación del press militar que incluye una rotación de muñecas para trabajar todas las cabezas del deltoides.',
      instructions: [
        'Sentate en un banco con respaldo y sostené las mancuernas frente a tus hombros con las palmas hacia vos.',
        'A medida que empujás las pesas hacia arriba, rotá las muñecas para que las palmas miren hacia adelante.',
        'Extendé los brazos por completo sobre tu cabeza.',
        'Bajá las mancuernas rotando las muñecas de vuelta a la posición inicial.',
        'Mantené el movimiento fluido y controlado.'
      ]
    },
    { 
      id: 'e_hom_8', 
      name: 'Press Militar de Pie (Barra)', 
      emoji: '🏋️', 
      muscles: ['Hombros','Core'], 
      desc: 'Press militar clásico de pie. Mantené el core firme y empujá la barra sobre la cabeza.',
      instructions: [
        'Parate con los pies al ancho de los hombros y la barra apoyada en la parte alta del pecho.',
        'Empujá la barra hacia arriba en línea recta sobre tu cabeza.',
        'Mantené el abdomen y los glúteos bien apretados para no arquear la espalda.',
        'Bajá la barra con control hasta que vuelva a tocar suavemente tu pecho.',
        'Mantené los codos levemente adelantados respecto a la barra.'
      ]
    },
    { 
      id: 'e_hom_9', 
      name: 'Remo al Mentón (Barra)', 
      emoji: '⬆️', 
      muscles: ['Hombros','Trapecio'], 
      desc: 'Tirá de la barra hacia arriba hasta el mentón, manteniendo los codos por encima de las manos.',
      instructions: [
        'Sostené la barra frente a tus muslos con un agarre un poco más estrecho que los hombros.',
        'Tirá de la barra hacia arriba pegada al cuerpo hasta que llegue al mentón.',
        'Asegurate de que tus codos apunten hacia arriba y estén por encima de tus manos.',
        'Bajá la barra lentamente hasta la posición inicial.',
        'Mantené la espalda derecha y evitá balancearte.'
      ]
    },
    { 
      id: 'e_hom_10', 
      name: 'Vuelos Posteriores en Máquina', 
      emoji: '🦅', 
      muscles: ['Hombros'], 
      desc: 'Sentado de frente a la máquina, abrí los brazos hacia atrás para trabajar el deltoides posterior.',
      instructions: [
        'Sentate de frente a la máquina de vuelos posteriores y ajustá el asiento.',
        'Agarrá los manillares con los brazos casi extendidos.',
        'Llevá los brazos hacia atrás apretando la parte posterior de los hombros.',
        'Mantené el pecho pegado al respaldo durante todo el ejercicio.',
        'Volvé lentamente a la posición inicial sin que las pesas choquen.'
      ]
    },
  ],
  pectorales: [
    { 
      id: 'e_pec_1', 
      name: 'Press de Banca Plano (barra)', 
      emoji: '🏋️', 
      muscles: ['Pectorales','Tríceps','Hombros'], 
      desc: 'El rey del pecho. Empuja la barra desde el pecho hasta extensión completa de codos.', 
      instructions: [
        'Acostate en el banco plano con los pies bien apoyados en el piso.',
        'Agarrá la barra con las manos un poco más anchas que los hombros.',
        'Bajá la barra lentamente hasta que toque la mitad de tu pecho.',
        'Empujá la barra con fuerza hacia arriba hasta extender los brazos.',
        'Mantené los omóplatos retraídos contra el banco durante todo el movimiento.'
      ]
    },
    { 
      id: 'e_pec_2', 
      name: 'Aperturas con Mancuernas', 
      emoji: '🦋', 
      muscles: ['Pectorales'], 
      desc: 'Aísla el pecho. Baja las mancuernas en arco manteniendo leve flexión en codos.',
      instructions: [
        'Acostate en un banco plano con una mancuerna en cada mano sobre el pecho.',
        'Bajá las mancuernas hacia los costados en un arco amplio hasta sentir el estiramiento en el pecho.',
        'Mantené una leve flexión en los codos para no estresar la articulación.',
        'Usá los músculos del pecho para llevar las mancuernas de vuelta al centro.',
        'No choques las mancuernas arriba, mantené la tensión.'
      ]
    },
    { 
      id: 'e_pec_3', 
      name: 'Press Inclinado (mancuernas)', 
      emoji: '📐', 
      muscles: ['Pectorales','Hombros'], 
      desc: 'Enfoca el pecho superior. Banco a 30-45 grados.',
      instructions: [
        'Ajustá el banco a una inclinación de 30 a 45 grados.',
        'Sostené las mancuernas a los costados del pecho con las palmas hacia adelante.',
        'Empujá las pesas hacia arriba sobre tu pecho hasta extender los brazos.',
        'Bajá lentamente las mancuernas hasta la posición inicial.',
        'Mantené el pecho inflado y los hombros hacia atrás.'
      ]
    },
    { 
      id: 'e_pec_4', 
      name: 'Fondos en Paralelas', 
      emoji: '↕️', 
      muscles: ['Pectorales','Tríceps'], 
      desc: 'Ejercicio con peso corporal. Inclina el torso para mayor activación pectoral.',
      instructions: [
        'Sujetate de las barras paralelas y suspendé tu cuerpo con los brazos extendidos.',
        'Incliná el torso hacia adelante para enfocar el esfuerzo en el pecho.',
        'Bajá el cuerpo flexionando los codos hasta que tus hombros estén por debajo de los codos.',
        'Empujá con fuerza hacia arriba hasta volver a la posición inicial.',
        'Mantené los codos levemente hacia afuera.'
      ]
    },
    { 
      id: 'e_pec_5', 
      name: 'Cruce de Poleas', 
      emoji: '✖️', 
      muscles: ['Pectorales'], 
      desc: 'Excelente para la contracción final del pecho. Cruza las manos en el centro.',
      instructions: [
        'Parate en el centro de la máquina de poleas con un manillar en cada mano.',
        'Da un paso hacia adelante para tener estabilidad y mantené los brazos levemente flexionados.',
        'Llevá las manos hacia el centro y abajo, cruzándolas frente a tu abdomen.',
        'Apretá fuerte el pecho en el punto de máxima contracción.',
        'Volvé lentamente a la posición inicial sintiendo el estiramiento.'
      ]
    },
    { 
      id: 'e_pec_6', 
      name: 'Flexiones de Brazo', 
      emoji: '🤸', 
      muscles: ['Pectorales','Tríceps','Hombros'], 
      desc: 'Ejercicio básico de peso corporal. Mantén el cuerpo recto como una tabla.',
      instructions: [
        'Colocá las manos en el piso un poco más anchas que los hombros.',
        'Mantené el cuerpo en línea recta desde la cabeza hasta los talones.',
        'Bajá el pecho hacia el piso flexionando los codos.',
        'Empujá con fuerza para volver a la posición inicial.',
        'No dejes que la cadera caiga ni que la espalda se arquee.'
      ]
    },
    { 
      id: 'e_pec_7', 
      name: 'Press de Banca Declinado', 
      emoji: '📉', 
      muscles: ['Pectorales','Tríceps'], 
      desc: 'Enfoca la parte inferior del pectoral.',
      instructions: [
        'Acostate en un banco declinado con los pies bien sujetos.',
        'Agarrá la barra con un agarre un poco más ancho que los hombros.',
        'Bajá la barra lentamente hasta la parte inferior de tu pecho.',
        'Empujá la barra hacia arriba hasta extender los brazos.',
        'Mantené el control del peso en todo momento.'
      ]
    },
    { 
      id: 'e_pec_8', 
      name: 'Press de Banca con Mancuernas', 
      emoji: '🏋️', 
      muscles: ['Pectorales','Tríceps'], 
      desc: 'Igual que con barra pero con mancuernas para mayor rango de movimiento y estabilidad unilateral.',
      instructions: [
        'Acostate en un banco plano con una mancuerna en cada mano sobre el pecho.',
        'Bajá las mancuernas hacia los costados del pecho de forma controlada.',
        'Empujá las pesas hacia arriba hasta que tus brazos estén extendidos.',
        'Mantené los pies apoyados en el piso para mayor estabilidad.',
        'No choques las mancuernas arriba para mantener la tensión.'
      ]
    },
    { 
      id: 'e_pec_9', 
      name: 'Press Inclinado con Barra', 
      emoji: '📐', 
      muscles: ['Pectorales','Hombros'], 
      desc: 'Enfocá la parte superior del pecho usando una barra en banco inclinado.',
      instructions: [
        'Acostate en un banco inclinado (30-45 grados).',
        'Agarrá la barra con un agarre un poco más ancho que los hombros.',
        'Bajá la barra lentamente hasta la parte superior de tu pecho.',
        'Empujá la barra hacia arriba con fuerza hasta extender los brazos.',
        'Mantené los omóplatos retraídos contra el banco.'
      ]
    },
    { 
      id: 'e_pec_10', 
      name: 'Peck Deck (Mariposa)', 
      emoji: '🦋', 
      muscles: ['Pectorales'], 
      desc: 'Sentado en la máquina, juntá los brazos al frente para un aislamiento máximo del pectoral.',
      instructions: [
        'Sentate en la máquina con la espalda bien apoyada.',
        'Apoyá los antebrazos o agarrá los manillares según el modelo de la máquina.',
        'Juntá los brazos al frente apretando fuerte el pecho.',
        'Mantené la contracción un segundo.',
        'Volvé lentamente a la posición inicial sin que las pesas choquen.'
      ]
    },
  ],
  biceps: [
    { 
      id: 'e_bic_1', 
      name: 'Curl Bíceps (barra)', 
      emoji: '💪', 
      muscles: ['Bíceps','Antebrazo'], 
      desc: 'Ejercicio básico y efectivo. Mantén los codos pegados al cuerpo.', 
      instructions: [
        'Parate derecho con los pies al ancho de los hombros.',
        'Agarrá la barra con las palmas hacia arriba y las manos al ancho de los hombros.',
        'Flexioná los codos para llevar la barra hacia tus hombros sin mover los brazos.',
        'Bajá la barra lentamente hasta la posición inicial.',
        'No uses el balanceo del cuerpo para subir el peso.'
      ],
    },
    { 
      id: 'e_bic_2', 
      name: 'Curl Martillo (mancuernas)', 
      emoji: '🔨', 
      muscles: ['Bíceps','Antebrazo'], 
      desc: 'Agarre neutro. Trabaja bíceps braquial y braquiorradial.', 
      instructions: [
        'Parate derecho con una mancuerna en cada mano y las palmas enfrentadas.',
        'Mantené los codos pegados al torso.',
        'Levantá las pesas flexionando los codos hasta que las mancuernas lleguen al nivel de los hombros.',
        'Bajá las pesas de forma controlada.',
        'Mantené el torso quieto durante todo el ejercicio.'
      ]
    },
    { 
      id: 'e_bic_3', 
      name: 'Curl Concentrado', 
      emoji: '🎯', 
      muscles: ['Bíceps'], 
      desc: 'Máximo aislamiento del bíceps. Apoya el codo en el muslo interno.',
      instructions: [
        'Sentate en el borde de un banco con las piernas abiertas.',
        'Apoyá la parte posterior del brazo en la cara interna del muslo del mismo lado.',
        'Flexioná el codo para subir la mancuerna hacia tu hombro.',
        'Bajá la pesa lentamente extendiendo el brazo por completo.',
        'Concentrate en apretar el bíceps en la parte superior del movimiento.'
      ]
    },
    { 
      id: 'e_bic_4', 
      name: 'Curl en Polea Baja', 
      emoji: '🔗', 
      muscles: ['Bíceps'], 
      desc: 'Tensión constante durante todo el recorrido gracias a la polea.',
      instructions: [
        'Parate frente a la polea baja y agarrá la barra con las palmas hacia arriba.',
        'Mantené los codos pegados a los costados.',
        'Flexioná los codos para llevar la barra hacia tus hombros.',
        'Bajá la barra lentamente resistiendo el tirón de la polea.',
        'Mantené la espalda derecha y no te balancees.'
      ]
    },
    { 
      id: 'e_bic_5', 
      name: 'Curl Predicador', 
      emoji: '⛪', 
      muscles: ['Bíceps'], 
      desc: 'Evita el balanceo apoyando los brazos en el banco Scott.',
      instructions: [
        'Sentate en el banco Scott y apoyá la parte posterior de tus brazos en la almohadilla.',
        'Agarrá la barra Z o mancuernas con las palmas hacia arriba.',
        'Flexioná los codos para subir el peso hacia tus hombros.',
        'Bajá el peso lentamente hasta que tus brazos estén casi extendidos.',
        'No despegues los brazos de la almohadilla durante el ejercicio.'
      ]
    },
    { 
      id: 'e_bic_6', 
      name: 'Curl Inverso (barra)', 
      emoji: '🔄', 
      muscles: ['Antebrazo','Bíceps'], 
      desc: 'Trabaja el braquiorradial y los extensores de la muñeca.',
      instructions: [
        'Parate derecho y agarrá la barra con las palmas hacia abajo (agarre prono).',
        'Mantené los codos pegados al cuerpo.',
        'Flexioná los codos para subir la barra hacia tus hombros.',
        'Bajá la barra de forma controlada.',
        'Este ejercicio es excelente para desarrollar el antebrazo.'
      ]
    },
    { 
      id: 'e_bic_7', 
      name: 'Curl con Mancuernas (Sentado)', 
      emoji: '🪑', 
      muscles: ['Bíceps'], 
      desc: 'Sentado en un banco, realizá el curl de forma alternada o simultánea.',
      instructions: [
        'Sentate en un banco con respaldo derecho.',
        'Sostené una mancuerna en cada mano con las palmas hacia adentro.',
        'Flexioná el codo y rotá la muñeca para que la palma mire hacia arriba al subir.',
        'Bajá la mancuerna lentamente rotando la muñeca de vuelta.',
        'Podés hacerlo alternando brazos o ambos a la vez.'
      ]
    },
    { 
      id: 'e_bic_8', 
      name: 'Curl Inclinado con Mancuernas', 
      emoji: '📐', 
      muscles: ['Bíceps'], 
      desc: 'Sentado en banco inclinado, dejá colgar los brazos para estirar al máximo la cabeza larga del bíceps.',
      instructions: [
        'Sentate en un banco inclinado a unos 45-60 grados.',
        'Dejá que tus brazos cuelguen hacia atrás con las palmas hacia adelante.',
        'Flexioná los codos para subir las mancuernas sin mover los brazos hacia adelante.',
        'Bajá lentamente sintiendo el estiramiento en el bíceps.',
        'Mantené la espalda y la cabeza apoyadas en el banco.'
      ]
    },
    { 
      id: 'e_bic_9', 
      name: 'Curl Zottman', 
      emoji: '🔄', 
      muscles: ['Bíceps','Antebrazo'], 
      desc: 'Subí como curl normal y bajá con las palmas hacia abajo para trabajar también el antebrazo.',
      instructions: [
        'Parate derecho con una mancuerna en cada mano.',
        'Subí las pesas como en un curl normal (palmas hacia arriba).',
        'En la parte superior, rotá las muñecas para que las palmas miren hacia abajo.',
        'Bajá las pesas lentamente con ese agarre inverso.',
        'Rotá las muñecas de vuelta a la posición inicial abajo.'
      ]
    },
  ],
  triceps: [
    { 
      id: 'e_tri_1', 
      name: 'Extensión en Polea Alta', 
      emoji: '📉', 
      muscles: ['Tríceps'], 
      desc: 'Empuja el cable hacia abajo extendiendo el codo completamente.', 
      instructions: [
        'Parate frente a la polea alta con un agarre de barra o soga.',
        'Mantené los codos pegados a los costados del cuerpo.',
        'Empujá el agarre hacia abajo hasta que tus brazos estén completamente extendidos.',
        'Subí el agarre lentamente hasta que tus antebrazos estén paralelos al piso.',
        'Mantené la espalda derecha y el core firme.'
      ]
    },
    { 
      id: 'e_tri_2', 
      name: 'Press Francés (mancuernas)', 
      emoji: '🗼', 
      muscles: ['Tríceps'], 
      desc: 'Flexiona el codo trayendo las mancuernas hacia la frente, luego extiende.',
      instructions: [
        'Acostate en un banco plano con una mancuerna en cada mano sobre el pecho.',
        'Flexioná los codos para bajar las pesas hacia los costados de tu frente.',
        'Mantené los brazos fijos, solo mové los antebrazos.',
        'Extendé los codos para llevar las mancuernas de vuelta a la posición inicial.',
        'Controlá el peso en todo momento para evitar golpes.'
      ]
    },
    { 
      id: 'e_tri_3', 
      name: 'Fondos en Banco', 
      emoji: '🪑', 
      muscles: ['Tríceps','Pectorales'], 
      desc: 'Peso corporal. Baja el cuerpo flexionando los codos.',
      instructions: [
        'Sentate en el borde de un banco y apoyá las manos a los costados de tus caderas.',
        'Extendé las piernas hacia adelante y desplazá el cuerpo fuera del banco.',
        'Bajá el cuerpo flexionando los codos hasta que formen un ángulo de 90 grados.',
        'Empujá con fuerza hacia arriba para volver a la posición inicial.',
        'Mantené la espalda cerca del banco durante todo el ejercicio.'
      ]
    },
    { 
      id: 'e_tri_4', 
      name: 'Copa (mancuerna)', 
      emoji: '🏆', 
      muscles: ['Tríceps'], 
      desc: 'Agarra la mancuerna con ambas manos, extiende y flexiona detrás de la cabeza.',
      instructions: [
        'Sentate o parate derecho y sostené una mancuerna con ambas manos sobre tu cabeza.',
        'Flexioná los codos para bajar la pesa por detrás de tu nuca.',
        'Mantené los codos lo más cerca posible de tus orejas.',
        'Extendé los brazos por completo para subir la mancuerna.',
        'Mantené la espalda derecha y el abdomen contraído.'
      ]
    },
    { 
      id: 'e_tri_5', 
      name: 'Patada de Tríceps', 
      emoji: '🐎', 
      muscles: ['Tríceps'], 
      desc: 'Extiende el brazo hacia atrás manteniendo el brazo paralelo al suelo.',
      instructions: [
        'Apoyá una mano y una rodilla en un banco plano.',
        'Sostené una mancuerna con la otra mano y mantené el brazo paralelo al piso y el codo flexionado a 90 grados.',
        'Extendé el brazo hacia atrás hasta que esté completamente recto.',
        'Apretá el tríceps al final del movimiento.',
        'Volvé lentamente a la posición inicial sin mover el brazo, solo el antebrazo.'
      ]
    },
    { 
      id: 'e_tri_6', 
      name: 'Press de Banca Agarre Cerrado', 
      emoji: '📏', 
      muscles: ['Tríceps','Pectorales'], 
      desc: 'Variación del press de banca que enfatiza el tríceps.',
      instructions: [
        'Acostate en un banco plano y agarrá la barra con las manos a una distancia menor al ancho de los hombros.',
        'Bajá la barra lentamente hacia la parte inferior de tu pecho, manteniendo los codos cerca del cuerpo.',
        'Empujá la barra hacia arriba con fuerza hasta extender los brazos.',
        'Mantené el control del peso para no forzar las muñecas.',
        'Mantené los pies bien apoyados en el piso.'
      ]
    },
    { 
      id: 'e_tri_7', 
      name: 'Extensión sobre la cabeza (Polea)', 
      emoji: '⬆️', 
      muscles: ['Tríceps'], 
      desc: 'De espaldas a la polea, extendé los brazos hacia adelante y arriba.',
      instructions: [
        'Enganchá una soga en la polea alta y parate de espaldas a la máquina.',
        'Incliná el torso hacia adelante y sostené la soga por detrás de tu cabeza.',
        'Extendé los brazos hacia adelante y arriba separando los extremos de la soga.',
        'Mantené los codos fijos cerca de tu cabeza.',
        'Volvé lentamente a la posición inicial sintiendo el estiramiento.'
      ]
    },
    { 
      id: 'e_tri_8', 
      name: 'Fondos en Paralelas (Tríceps)', 
      emoji: '↕️', 
      muscles: ['Tríceps'], 
      desc: 'Mantené el cuerpo erguido para que el esfuerzo recaiga principalmente en los tríceps.',
      instructions: [
        'Sujetate de las barras paralelas y suspendé tu cuerpo con los brazos extendidos.',
        'Mantené el torso lo más erguido posible (sin inclinarte hacia adelante).',
        'Bajá el cuerpo flexionando los codos hasta que formen un ángulo de 90 grados.',
        'Empujá con fuerza hacia arriba hasta extender los brazos por completo.',
        'Mantené los codos cerca del cuerpo durante todo el movimiento.'
      ]
    },
    { 
      id: 'e_tri_9', 
      name: 'Press Francés con Barra Z', 
      emoji: '🗼', 
      muscles: ['Tríceps'], 
      desc: 'Acostado, bajá la barra hacia la frente y extendé con fuerza.',
      instructions: [
        'Acostate en un banco plano y agarrá la barra Z con un agarre estrecho.',
        'Extendé los brazos sobre tu pecho.',
        'Flexioná los codos para bajar la barra hacia tu frente o un poco más atrás.',
        'Extendé los codos con fuerza para volver a la posición inicial.',
        'Mantené los brazos fijos, solo mové los antebrazos.'
      ]
    },
  ],
  dorsales: [
    { 
      id: 'e_dor_1', 
      name: 'Dominadas (agarre ancho)', 
      emoji: '🔝', 
      muscles: ['Dorsales','Bíceps'], 
      desc: 'Jala tu peso corporal. Agarre amplio enfoca la amplitud dorsal.', 
      instructions: [
        'Colgate de una barra con las manos más anchas que los hombros y las palmas hacia afuera.',
        'Tirá de tu cuerpo hacia arriba hasta que tu mentón pase la barra.',
        'Mantené el pecho inflado y tratá de llevar los codos hacia tus costados.',
        'Bajá lentamente hasta que tus brazos estén casi extendidos.',
        'Evitá el balanceo excesivo de las piernas.'
      ]
    },
    { 
      id: 'e_dor_2', 
      name: 'Remo con Barra', 
      emoji: '🚣', 
      muscles: ['Dorsales','Bíceps','Trapecio'], 
      desc: 'Torso inclinado. Tira la barra hacia el abdomen bajo.',
      instructions: [
        'Parate con los pies al ancho de los hombros y flexioná levemente las rodillas.',
        'Incliná el torso hacia adelante manteniendo la espalda bien derecha.',
        'Agarrá la barra con las palmas hacia abajo y tirá de ella hacia tu abdomen bajo.',
        'Apretá los músculos de la espalda en la parte superior del movimiento.',
        'Bajá la barra de forma controlada hasta extender los brazos.'
      ]
    },
    { 
      id: 'e_dor_3', 
      name: 'Jalón al Pecho (polea alta)', 
      emoji: '⬇️', 
      muscles: ['Dorsales','Bíceps'], 
      desc: 'Alternativa a dominadas. Jala la barra hacia el pecho.',
      instructions: [
        'Sentate en la máquina de jalón y ajustá el soporte para las piernas.',
        'Agarrá la barra con las manos más anchas que los hombros.',
        'Tirá de la barra hacia la parte superior de tu pecho inclinando levemente el torso hacia atrás.',
        'Mantené la contracción un segundo y luego subí la barra lentamente.',
        'No uses el impulso de tu cuerpo para bajar el peso.'
      ]
    },
    { 
      id: 'e_dor_4', 
      name: 'Remo con Mancuerna', 
      emoji: '🏋️', 
      muscles: ['Dorsales','Bíceps'], 
      desc: 'Apoyo en banco. Gran rango de movimiento.',
      instructions: [
        'Apoyá una rodilla y una mano en un banco plano.',
        'Sostené la mancuerna con la otra mano y dejá que cuelgue hacia el piso.',
        'Tirá de la mancuerna hacia tu cadera, manteniendo el codo cerca del cuerpo.',
        'Apretá el dorsal en la parte superior del movimiento.',
        'Bajá la pesa lentamente hasta extender el brazo por completo.'
      ]
    },
    { 
      id: 'e_dor_5', 
      name: 'Pull-over con Polea Alta', 
      emoji: '🎣', 
      muscles: ['Dorsales','Tríceps'], 
      desc: 'Aísla el dorsal. Brazos casi extendidos, tira hacia los muslos.',
      instructions: [
        'Parate frente a la polea alta y agarrá la barra con las palmas hacia abajo.',
        'Mantené los brazos casi rectos y el torso levemente inclinado hacia adelante.',
        'Tirá de la barra hacia tus muslos usando solo la fuerza de tus dorsales.',
        'Mantené la contracción un segundo abajo.',
        'Volvé lentamente a la posición inicial sintiendo el estiramiento.'
      ]
    },
    { 
      id: 'e_dor_6', 
      name: 'Remo en T', 
      emoji: '⚓', 
      muscles: ['Dorsales','Bíceps','Trapecio'], 
      desc: 'Ejercicio clásico para densidad de espalda.',
      instructions: [
        'Colocate en la máquina de remo en T o usá una barra en una esquina.',
        'Parate sobre la plataforma y agarrá los manillares con las piernas levemente flexionadas.',
        'Tirá del peso hacia tu pecho manteniendo la espalda bien derecha.',
        'Apretá las escápulas en la parte superior.',
        'Bajá el peso de forma controlada hasta extender los brazos.'
      ]
    },
    { 
      id: 'e_dor_7', 
      name: 'Remo en Polea Baja (Gironda)', 
      emoji: '🚣', 
      muscles: ['Dorsales','Bíceps'], 
      desc: 'Sentado, tirá del agarre hacia tu abdomen manteniendo la espalda derecha.',
      instructions: [
        'Sentate en la máquina de remo bajo y apoyá los pies en los soportes.',
        'Agarrá el manillar y mantené la espalda derecha con una leve flexión en las rodillas.',
        'Tirá del agarre hacia tu abdomen bajo, llevando los codos hacia atrás.',
        'Apretá los músculos de la espalda al final del tirón.',
        'Volvé lentamente a la posición inicial sin encorvarte.'
      ]
    },
    { 
      id: 'e_dor_8', 
      name: 'Jalón tras nuca', 
      emoji: '⬇️', 
      muscles: ['Dorsales','Bíceps'], 
      desc: 'Bajá la barra por detrás de la cabeza (con cuidado con la movilidad del hombro).',
      instructions: [
        'Sentate en la máquina de jalón y agarrá la barra con un agarre ancho.',
        'Tirá de la barra hacia abajo por detrás de tu nuca hasta que toque levemente la base del cuello.',
        'Mantené el torso erguido y no bajes demasiado la cabeza.',
        'Subí la barra lentamente hasta extender los brazos.',
        'Realizá este ejercicio solo si tenés buena movilidad de hombros.'
      ]
    },
    { 
      id: 'e_dor_9', 
      name: 'Remo con Barra (Agarre Supino)', 
      emoji: '🚣', 
      muscles: ['Dorsales','Bíceps'], 
      desc: 'Variación que involucra más los bíceps y la parte baja del dorsal.',
      instructions: [
        'Parate con los pies al ancho de los hombros e inclina el torso hacia adelante.',
        'Agarrá la barra con las palmas hacia arriba (agarre supino).',
        'Tirá de la barra hacia tu abdomen bajo, manteniendo los codos pegados al cuerpo.',
        'Apretá los dorsales en la parte superior.',
        'Bajá la barra lentamente hasta la posición inicial.'
      ]
    },
  ],
  trapecio: [
    { 
      id: 'e_tra_1', 
      name: 'Remo Vertical (barra)', 
      emoji: '⬆️', 
      muscles: ['Trapecio','Hombros','Bíceps'], 
      desc: 'Tira la barra hacia el mentón con agarre estrecho.',
      instructions: [
        'Parate con los pies al ancho de los hombros y agarrá la barra con las manos juntas.',
        'Tirá de la barra hacia tu mentón, manteniendo los codos siempre por encima de las manos.',
        'Mantené la barra cerca de tu cuerpo durante todo el recorrido.',
        'Bajá la barra de forma controlada hasta extender los brazos.',
        'Evitá usar el impulso de las piernas.'
      ]
    },
    { 
      id: 'e_tra_2', 
      name: 'Encogimientos (barra)', 
      emoji: '🔼', 
      muscles: ['Trapecio'], 
      desc: 'Eleva los hombros en línea recta hacia las orejas.',
      instructions: [
        'Parate derecho con una barra frente a vos agarrada con las manos al ancho de los hombros.',
        'Elevá los hombros hacia tus orejas lo más que puedas sin doblar los brazos.',
        'Mantené la contracción un segundo en la parte superior.',
        'Bajá los hombros lentamente a la posición inicial.',
        'No rotes los hombros, el movimiento debe ser puramente vertical.'
      ]
    },
    { 
      id: 'e_tra_3', 
      name: 'Encogimientos (mancuernas)', 
      emoji: '💎', 
      muscles: ['Trapecio'], 
      desc: 'Mayor rango de movimiento que con barra.',
      instructions: [
        'Parate derecho con una mancuerna en cada mano a los costados.',
        'Elevá los hombros hacia tus orejas lo más que puedas.',
        'Mantené la contracción un segundo en la parte superior.',
        'Bajá los hombros lentamente a la posición inicial.',
        'Mantené el cuello relajado y no te encorves.'
      ]
    },
    { 
      id: 'e_tra_4', 
      name: 'Face Pulls', 
      emoji: '🎭', 
      muscles: ['Trapecio','Hombros'], 
      desc: 'También trabaja el trapecio medio e inferior.',
      instructions: [
        'Ajustá la polea a la altura de tu cara con el agarre de soga.',
        'Tirá de la soga hacia tu frente, separando los extremos de la soga al final del movimiento.',
        'Mantené los codos altos y hacia afuera.',
        'Apretá las escápulas al final del tirón.',
        'Volvé lentamente a la posición inicial.'
      ]
    },
    { 
      id: 'e_tra_5', 
      name: 'Encogimientos en Máquina Smith', 
      emoji: '🔼', 
      muscles: ['Trapecio'], 
      desc: 'Usá la máquina Smith para mayor estabilidad al encoger los hombros.',
      instructions: [
        'Colocá la barra de la máquina Smith a la altura de tus muslos.',
        'Agarrá la barra con las manos al ancho de los hombros.',
        'Elevá los hombros hacia tus orejas lo más que puedas.',
        'Mantené la contracción un segundo arriba.',
        'Bajá la barra lentamente a la posición inicial.'
      ]
    },
  ],
  abdomen: [
    { 
      id: 'e_abd_1', 
      name: 'Crunchs en Suelo', 
      emoji: '🔄', 
      muscles: ['Abdomen'], 
      desc: 'Contracción abdominal clásica. Lleva las costillas hacia las caderas.', 
      instructions: [
        'Acostate boca arriba con las rodillas flexionadas y los pies apoyados.',
        'Poné las manos detrás de la cabeza o cruzadas sobre el pecho.',
        'Elevá los hombros del piso contrayendo los abdominales.',
        'Mantené la contracción un segundo y bajá lentamente.',
        'No hagas fuerza con el cuello, concentrate en el abdomen.'
      ]
    },
    { 
      id: 'e_abd_2', 
      name: 'Plancha Frontal', 
      emoji: '➡️', 
      muscles: ['Abdomen','Lumbares'], 
      desc: 'Isométrico fundamental. Mantén cadera neutra.',
      instructions: [
        'Apoyá los antebrazos y las puntas de los pies en el piso.',
        'Mantené el cuerpo en línea recta desde la cabeza hasta los talones.',
        'Apretá fuerte el abdomen y los glúteos.',
        'Mantené la posición el tiempo indicado sin dejar que la cadera caiga.',
        'No levantes demasiado la cola ni arquees la espalda.'
      ]
    },
    { 
      id: 'e_abd_3', 
      name: 'Rueda Abdominal', 
      emoji: '⚙️', 
      muscles: ['Abdomen','Dorsales','Hombros'], 
      desc: 'Ejercicio avanzado. Extiende el cuerpo controladamente.',
      instructions: [
        'Arrodillate en el piso y agarrá la rueda con ambas manos.',
        'Deslizá la rueda hacia adelante extendiendo el cuerpo lo más que puedas.',
        'Mantené el abdomen bien contraído para proteger la espalda.',
        'Usá la fuerza de tus abdominales para volver a la posición inicial.',
        'No dejes que la espalda se arquee hacia abajo.'
      ]
    },
    { 
      id: 'e_abd_4', 
      name: 'Elevación de Piernas Colgado', 
      emoji: '🪝', 
      muscles: ['Abdomen'], 
      desc: 'Trabaja especialmente el abdomen inferior.',
      instructions: [
        'Colgate de una barra con los brazos extendidos.',
        'Elevá las piernas rectas hasta que queden paralelas al piso.',
        'Bajá las piernas lentamente evitando el balanceo del cuerpo.',
        'Mantené el core firme durante todo el movimiento.',
        'Si es muy difícil, podés subir las rodillas flexionadas.'
      ]
    },
    { 
      id: 'e_abd_5', 
      name: 'Bicicleta Abdominal', 
      emoji: '🚲', 
      muscles: ['Abdomen','Oblicuos'], 
      desc: 'Toca codo con rodilla contraria alternadamente.',
      instructions: [
        'Acostate boca arriba con las manos detrás de la cabeza y las piernas elevadas.',
        'Llevá el codo derecho hacia la rodilla izquierda mientras extendés la pierna derecha.',
        'Alterná de lado llevando el codo izquierdo hacia la rodilla derecha.',
        'Mantené un movimiento fluido como si estuvieras pedaleando.',
        'Mantené la espalda baja pegada al piso en todo momento.'
      ]
    },
    { 
      id: 'e_abd_6', 
      name: 'V-Ups', 
      emoji: '✌️', 
      muscles: ['Abdomen'], 
      desc: 'Eleva torso y piernas simultáneamente para formar una V.',
      instructions: [
        'Acostate boca arriba con los brazos extendidos sobre la cabeza y las piernas estiradas.',
        'Elevá simultáneamente el torso y las piernas tratando de tocar tus pies con las manos.',
        'Tu cuerpo debe formar una "V" en el punto más alto.',
        'Bajá lentamente el torso y las piernas a la posición inicial.',
        'Mantené el abdomen contraído para controlar el descenso.'
      ]
    },
    { 
      id: 'e_abd_7', 
      name: 'Crunch en Polea Alta', 
      emoji: '🔗', 
      muscles: ['Abdomen'], 
      desc: 'Arrodillado, tirá de la cuerda hacia abajo usando solo tus abdominales.',
      instructions: [
        'Arrodillate frente a la polea alta y agarrá la soga por detrás de tu nuca.',
        'Flexioná el torso hacia abajo llevando los codos hacia tus rodillas.',
        'Contraé fuerte los abdominales en la parte baja.',
        'Volvé lentamente a la posición inicial sintiendo el estiramiento.',
        'Mantené las caderas quietas, el movimiento debe ser solo del torso.'
      ]
    },
    { 
      id: 'e_abd_8', 
      name: 'Dead Bug', 
      emoji: '🐞', 
      muscles: ['Abdomen','Core'], 
      desc: 'Tumbado boca arriba, mové brazo y pierna contraria manteniendo la espalda pegada al piso.',
      instructions: [
        'Acostate boca arriba con los brazos extendidos hacia el techo y las rodillas a 90 grados.',
        'Bajá lentamente el brazo derecho y la pierna izquierda hacia el piso.',
        'Mantené la espalda baja bien apoyada en el piso.',
        'Volvé a la posición inicial y repetí con el brazo izquierdo y la pierna derecha.',
        'Movete de forma lenta y controlada para maximizar la estabilidad.'
      ]
    },
  ],
  oblicuos: [
    { 
      id: 'e_obl_1', 
      name: 'Crunchs Laterales', 
      emoji: '↗️', 
      muscles: ['Oblicuos'], 
      desc: 'Inclínate hacia los lados de forma controlada.',
      instructions: [
        'Acostate de lado con las rodillas flexionadas.',
        'Poné la mano de arriba detrás de la cabeza.',
        'Elevá el torso lateralmente contrayendo los oblicuos.',
        'Mantené la contracción un segundo y bajá lentamente.',
        'Hacé todas las repeticiones de un lado y luego cambiá.'
      ]
    },
    { 
      id: 'e_obl_2', 
      name: 'Plancha Lateral', 
      emoji: '📏', 
      muscles: ['Oblicuos','Abdomen'], 
      desc: 'Isométrico de gran efectividad.',
      instructions: [
        'Apoyá un antebrazo en el piso y poné el cuerpo de lado.',
        'Elevá la cadera hasta que el cuerpo forme una línea recta.',
        'Mantené la posición el tiempo indicado apretando el abdomen.',
        'No dejes que la cadera caiga hacia el piso.',
        'Cambiá de lado y repetí.'
      ]
    },
    { 
      id: 'e_obl_3', 
      name: 'Rotación con Polea', 
      emoji: '🌀', 
      muscles: ['Oblicuos','Abdomen'], 
      desc: 'Rota el torso contra la resistencia de la polea.',
      instructions: [
        'Parate de costado a la polea a la altura del pecho.',
        'Agarrá el manillar con ambas manos y los brazos extendidos.',
        'Girá el torso alejándote de la polea manteniendo los brazos rectos.',
        'Volvé lentamente a la posición inicial controlando el peso.',
        'Mantené las caderas lo más quietas posible.'
      ]
    },
    { 
      id: 'e_obl_4', 
      name: 'Ruso (Russian Twist)', 
      emoji: '🇷🇺', 
      muscles: ['Oblicuos','Abdomen'], 
      desc: 'Sentado, rota el torso de lado a lado con o sin peso.',
      instructions: [
        'Sentate en el piso con las rodillas flexionadas y los pies levemente elevados.',
        'Incliná el torso hacia atrás unos 45 grados.',
        'Girá el torso de un lado a otro, tratando de tocar el piso con las manos.',
        'Mantené el core firme y el movimiento controlado.',
        'Podés sostener una pesa o disco para aumentar la dificultad.'
      ]
    },
    { 
      id: 'e_obl_5', 
      name: 'Woodchopper (Hachazo)', 
      emoji: '🪓', 
      muscles: ['Oblicuos','Abdomen'], 
      desc: 'Movimiento diagonal con polea o mancuerna simulando el corte de un hacha.',
      instructions: [
        'Parate de costado a la polea alta y agarrá el manillar con ambas manos.',
        'Tirá del cable en diagonal hacia abajo y hacia el lado opuesto de tu cuerpo.',
        'Girá el torso y las caderas durante el movimiento.',
        'Volvé lentamente a la posición inicial controlando el peso.',
        'Mantené los brazos casi extendidos durante todo el ejercicio.'
      ]
    },
  ],
  lumbares: [
    { 
      id: 'e_lum_1', 
      name: 'Hiperextensiones', 
      emoji: '🔙', 
      muscles: ['Lumbares','Glúteos'], 
      desc: 'En el banco romano, extiende la cadera.',
      instructions: [
        'Colocate en el banco romano con los talones trabados y la cadera apoyada.',
        'Bajá el torso lentamente flexionando la cadera, manteniendo la espalda derecha.',
        'Subí el torso hasta que quede en línea con tus piernas.',
        'Apretá los glúteos y lumbares en la parte superior.',
        'No hiperextiendas la espalda más allá de la línea recta.'
      ]
    },
    { 
      id: 'e_lum_2', 
      name: 'Buenos Días (barra)', 
      emoji: '🌅', 
      muscles: ['Lumbares','Isquiotibiales','Glúteos'], 
      desc: 'Inclina el torso con la barra en hombros.',
      instructions: [
        'Parate con la barra apoyada en tus hombros (como en una sentadilla).',
        'Incliná el torso hacia adelante flexionando la cadera y manteniendo las piernas casi rectas.',
        'Mantené la espalda bien derecha en todo momento.',
        'Bajá hasta que el torso esté casi paralelo al piso.',
        'Volvé a la posición inicial empujando con la cadera.'
      ]
    },
    { 
      id: 'e_lum_3', 
      name: 'Peso Muerto Rumano', 
      emoji: '🏗️', 
      muscles: ['Lumbares','Isquiotibiales','Glúteos'], 
      desc: 'Bisagra de cadera con piernas semirrectas.',
      instructions: [
        'Parate con los pies al ancho de los hombros y agarrá la barra.',
        'Bajá la barra pegada a tus piernas flexionando solo la cadera.',
        'Mantené las rodillas levemente flexionadas pero fijas.',
        'Bajá hasta sentir el estiramiento en los isquiotibiales.',
        'Subí empujando la cadera hacia adelante y apretando los glúteos.'
      ]
    },
    { 
      id: 'e_lum_4', 
      name: 'Superman', 
      emoji: '🦸', 
      muscles: ['Lumbares'], 
      desc: 'Tumbado boca abajo, eleva brazos y piernas simultáneamente.',
      instructions: [
        'Acostate boca abajo con los brazos y piernas extendidos.',
        'Elevá simultáneamente los brazos, el pecho y las piernas del piso.',
        'Mantené la posición un segundo apretando la espalda baja.',
        'Bajá lentamente a la posición inicial.',
        'Mantené la mirada hacia el piso para no forzar el cuello.'
      ]
    },
  ],
  gluteos: [
    { 
      id: 'e_glu_1', 
      name: 'Hip Thrust (barra)', 
      emoji: '🍑', 
      muscles: ['Glúteos','Isquiotibiales'], 
      desc: 'El mejor ejercicio para glúteos. Empuja la cadera hacia arriba.', 
      instructions: [
        'Apoyá la parte alta de la espalda en un banco y poné la barra sobre tu cadera.',
        'Mantené los pies apoyados en el piso al ancho de los hombros.',
        'Empujá la cadera hacia arriba hasta que el cuerpo quede paralelo al piso.',
        'Apretá fuerte los glúteos en la parte superior.',
        'Bajá la cadera de forma controlada sin llegar a tocar el piso.'
      ]
    },
    { 
      id: 'e_glu_2', 
      name: 'Sentadilla Búlgara', 
      emoji: '🎯', 
      muscles: ['Glúteos','Cuádriceps'], 
      desc: 'Pie trasero elevado. Gran activación unilateral.',
      instructions: [
        'Parate de espaldas a un banco y apoyá un pie sobre él.',
        'Da un paso hacia adelante con la otra pierna.',
        'Bajá la cadera flexionando ambas rodillas hasta que la trasera casi toque el piso.',
        'Mantené el torso levemente inclinado hacia adelante para enfocar más el glúteo.',
        'Empujá con el talón de la pierna delantera para volver a subir.'
      ]
    },
    { 
      id: 'e_glu_3', 
      name: 'Patada Trasera en Polea', 
      emoji: '🦵', 
      muscles: ['Glúteos'], 
      desc: 'Extiende la cadera hacia atrás contra la resistencia.',
      instructions: [
        'Poné la tobillera en la polea baja y enganchala en tu tobillo.',
        'Sujetate de la máquina e inclina levemente el torso.',
        'Pateá hacia atrás extendiendo la cadera por completo.',
        'Mantené la pierna casi recta y apretá el glúteo al final.',
        'Volvé lentamente a la posición inicial sin que el peso toque la torre.'
      ]
    },
    { 
      id: 'e_glu_4', 
      name: 'Peso Muerto Convencional', 
      emoji: '🏋️', 
      muscles: ['Glúteos','Isquiotibiales','Lumbares'], 
      desc: 'Rey de la cadena posterior. Espalda recta, empuja el piso.',
      instructions: [
        'Parate con los pies al ancho de los hombros y la barra sobre la mitad de tus pies.',
        'Agarrá la barra por fuera de las piernas y bajá la cadera manteniendo la espalda derecha.',
        'Empujá el piso con las piernas para subir la barra pegada a tu cuerpo.',
        'Extendé la cadera por completo en la parte superior sin arquear la espalda.',
        'Bajá la barra siguiendo el mismo recorrido de forma controlada.'
      ]
    },
    { 
      id: 'e_glu_5', 
      name: 'Abducción de Cadera (polea)', 
      emoji: '↔️', 
      muscles: ['Glúteos','Abductores'], 
      desc: 'Lleva la pierna hacia afuera lateralmente.',
      instructions: [
        'Poné la tobillera en la polea baja y enganchala en la pierna más alejada de la máquina.',
        'Sujetate de la máquina para tener estabilidad.',
        'Llevá la pierna hacia afuera lateralmente lo más que puedas.',
        'Mantené el torso quieto y no te inclines.',
        'Volvé lentamente cruzando levemente por delante de la otra pierna.'
      ]
    },
    { 
      id: 'e_glu_6', 
      name: 'Clamshells', 
      emoji: '🐚', 
      muscles: ['Glúteos'], 
      desc: 'Tumbado de lado, abre las rodillas manteniendo los pies juntos.',
      instructions: [
        'Acostate de lado con las rodillas flexionadas a 90 grados y los pies juntos.',
        'Abrí la rodilla de arriba lo más que puedas sin separar los pies ni girar la cadera.',
        'Mantené la contracción un segundo en la parte superior.',
        'Bajá la rodilla lentamente.',
        'Podés usar una banda elástica sobre las rodillas para más intensidad.'
      ]
    },
    { 
      id: 'e_glu_7', 
      name: 'Glute Bridge (Puente de Glúteo)', 
      emoji: '🌉', 
      muscles: ['Glúteos'], 
      desc: 'Acostado en el piso, elevá la cadera apretando fuerte los glúteos.',
      instructions: [
        'Acostate boca arriba con las rodillas flexionadas y los pies apoyados cerca de los glúteos.',
        'Elevá la cadera del piso empujando con los talones.',
        'Apretá fuerte los glúteos en la parte superior.',
        'Bajá lentamente hasta que la cadera casi toque el piso.',
        'Mantené el abdomen contraído para no arquear la espalda baja.'
      ]
    },
    { 
      id: 'e_glu_8', 
      name: 'Abducción de Cadera (Máquina)', 
      emoji: '↔️', 
      muscles: ['Glúteos','Abductores'], 
      desc: 'Sentado, empujá las almohadillas hacia afuera para trabajar el glúteo medio.',
      instructions: [
        'Sentate en la máquina y apoyá la cara externa de las rodillas en las almohadillas.',
        'Empujá hacia afuera abriendo las piernas lo más que puedas.',
        'Mantené la posición un segundo y volvé lentamente.',
        'Mantené la espalda apoyada en el respaldo.',
        'Concentrate en usar solo la fuerza de tus glúteos.'
      ]
    },
  ],
  cuadriceps: [
    { 
      id: 'e_cua_1', 
      name: 'Sentadilla Libre (barra)', 
      emoji: '👑', 
      muscles: ['Cuádriceps','Glúteos','Isquiotibiales'], 
      desc: 'El rey de los ejercicios de pierna.', 
      instructions: [
        'Colocá la barra sobre tus trapecios y parate con los pies al ancho de los hombros.',
        'Bajá la cadera flexionando rodillas y cadera como si te fueras a sentar.',
        'Mantené la espalda derecha y el pecho inflado.',
        'Bajá hasta que tus muslos estén al menos paralelos al piso.',
        'Subí empujando con toda la planta del pie hasta la posición inicial.'
      ]
    },
    { 
      id: 'e_cua_2', 
      name: 'Extensión de Piernas', 
      emoji: '⬆️', 
      muscles: ['Cuádriceps'], 
      desc: 'Aísla el cuádriceps. Extiende completamente la rodilla.',
      instructions: [
        'Sentate en la máquina y ajustá el rodillo sobre tus tobillos.',
        'Extendé las piernas por completo contrayendo los cuádriceps.',
        'Mantené la contracción un segundo en la parte superior.',
        'Bajá el peso lentamente hasta la posición inicial.',
        'No uses el impulso para subir el peso.'
      ]
    },
    { 
      id: 'e_cua_3', 
      name: 'Prensa de Piernas', 
      emoji: '🔩', 
      muscles: ['Cuádriceps','Glúteos'], 
      desc: 'Gran volumen de carga.',
      instructions: [
        'Sentate en la máquina y apoyá los pies en la plataforma al ancho de los hombros.',
        'Empujá la plataforma para liberar los seguros.',
        'Bajá la plataforma lentamente flexionando las rodillas hacia tu pecho.',
        'Empujá con fuerza para extender las piernas sin llegar a bloquear las rodillas.',
        'Mantené la espalda y la cadera siempre apoyadas en el respaldo.'
      ]
    },
    { 
      id: 'e_cua_4', 
      name: 'Zancadas (mancuernas)', 
      emoji: '🚶', 
      muscles: ['Cuádriceps','Glúteos'], 
      desc: 'Unilateral. Excelente para balance y desarrollo funcional.',
      instructions: [
        'Parate derecho con una mancuerna en cada mano.',
        'Da un paso largo hacia adelante y bajá la cadera hasta que ambas rodillas formen 90 grados.',
        'La rodilla trasera debe quedar cerca del piso.',
        'Empujá con la pierna delantera para volver a la posición inicial.',
        'Mantené el torso erguido durante todo el movimiento.'
      ]
    },
    { 
      id: 'e_cua_5', 
      name: 'Sentadilla Hack', 
      emoji: '🚜', 
      muscles: ['Cuádriceps','Glúteos'], 
      desc: 'Variación de sentadilla que permite mayor enfoque en cuádriceps.',
      instructions: [
        'Colocate en la máquina Hack con la espalda apoyada y los hombros bajo los soportes.',
        'Bajá la plataforma flexionando las rodillas de forma controlada.',
        'Bajá lo más que puedas manteniendo los talones apoyados.',
        'Empujá con fuerza para volver a subir.',
        'No bloquees las rodillas al final del movimiento.'
      ]
    },
    { 
      id: 'e_cua_6', 
      name: 'Sentadilla Goblet', 
      emoji: '🍷', 
      muscles: ['Cuádriceps','Glúteos'], 
      desc: 'Sujeta una pesa frente al pecho. Ayuda a mantener el torso erguido.',
      instructions: [
        'Sostené una mancuerna o pesa rusa frente a tu pecho con ambas manos.',
        'Parate con los pies un poco más anchos que los hombros.',
        'Bajá en sentadilla manteniendo la pesa pegada al cuerpo.',
        'Tus codos deben quedar por dentro de tus rodillas en la parte baja.',
        'Subí empujando con los talones y manteniendo la espalda derecha.'
      ]
    },
    { 
      id: 'e_cua_7', 
      name: 'Zancadas Laterales', 
      emoji: '↔️', 
      muscles: ['Cuádriceps','Aductores'], 
      desc: 'Desplazate hacia un lado bajando la cadera para trabajar aductores y cuádriceps.',
      instructions: [
        'Parate con los pies juntos y las manos en la cadera o sosteniendo peso.',
        'Da un paso lateral amplio y bajá la cadera flexionando esa rodilla.',
        'Mantené la otra pierna completamente recta.',
        'Empujá con la pierna flexionada para volver a la posición inicial.',
        'Mantené el pecho inflado y la espalda derecha.'
      ]
    },
  ],
  isquiotibiales: [
    { 
      id: 'e_isq_1', 
      name: 'Curl de Piernas Acostado', 
      emoji: '🦿', 
      muscles: ['Isquiotibiales'], 
      desc: 'En la máquina, flexiona las rodillas hacia los glúteos.',
      instructions: [
        'Acostate boca abajo en la máquina y ajustá el rodillo sobre tus talones.',
        'Flexioná las rodillas para llevar el rodillo hacia tus glúteos.',
        'Mantené la contracción un segundo en la parte superior.',
        'Bajá el peso lentamente hasta extender las piernas.',
        'Mantené la cadera pegada al banco en todo momento.'
      ]
    },
    { 
      id: 'e_isq_2', 
      name: 'Peso Muerto Rumano (mancuernas)', 
      emoji: '🔻', 
      muscles: ['Isquiotibiales','Glúteos','Lumbares'], 
      desc: 'Bisagra de cadera cargada.',
      instructions: [
        'Parate con los pies al ancho de los hombros y una mancuerna en cada mano.',
        'Bajá las pesas pegadas a tus piernas flexionando solo la cadera.',
        'Mantené las rodillas levemente flexionadas pero fijas.',
        'Bajá hasta sentir el estiramiento en los isquiotibiales.',
        'Subí empujando la cadera hacia adelante y apretando los glúteos.'
      ]
    },
    { 
      id: 'e_isq_3', 
      name: 'Curl Nórdico', 
      emoji: '❄️', 
      muscles: ['Isquiotibiales'], 
      desc: 'Ejercicio avanzado. Desciende el torso controlando con los isquios.',
      instructions: [
        'Arrodillate en el piso y pedile a alguien que te sujete los talones (o usá un soporte).',
        'Bajá el torso hacia adelante lo más lento que puedas usando tus isquiotibiales.',
        'Mantené el cuerpo recto desde las rodillas hasta la cabeza.',
        'Cuando no aguantes más, apoyá las manos en el piso para amortiguar.',
        'Empujate levemente para volver a la posición inicial.'
      ]
    },
    { 
      id: 'e_isq_4', 
      name: 'Curl de Piernas Sentado', 
      emoji: '🪑', 
      muscles: ['Isquiotibiales'], 
      desc: 'Variación que ofrece mayor estiramiento inicial del músculo.',
      instructions: [
        'Sentate en la máquina y ajustá el rodillo sobre tus tobillos y el soporte sobre tus muslos.',
        'Flexioná las rodillas para llevar el rodillo hacia abajo y atrás.',
        'Mantené la contracción un segundo abajo.',
        'Volvé lentamente a la posición inicial.',
        'Mantené la espalda bien apoyada en el respaldo.'
      ]
    },
    { 
      id: 'e_isq_5', 
      name: 'Buenos Días', 
      emoji: '🌅', 
      muscles: ['Isquiotibiales','Lumbares'], 
      desc: 'Enfoca el estiramiento de la cadena posterior.',
      instructions: [
        'Parate con la barra apoyada en tus hombros.',
        'Incliná el torso hacia adelante flexionando la cadera y manteniendo las piernas casi rectas.',
        'Mantené la espalda bien derecha en todo momento.',
        'Bajá hasta que el torso esté casi paralelo al piso.',
        'Volvé a la posición inicial empujando con la cadera.'
      ]
    },
    { 
      id: 'e_isq_6', 
      name: 'Curl Femoral de Pie', 
      emoji: '🦵', 
      muscles: ['Isquiotibiales'], 
      desc: 'Aislamiento unilateral del isquiotibial en máquina de pie.',
      instructions: [
        'Parate en la máquina y apoyá una pierna contra el rodillo.',
        'Flexioná la rodilla para llevar el talón hacia el glúteo.',
        'Mantené el torso quieto y apoyado en los soportes.',
        'Bajá lentamente hasta extender la pierna.',
        'Hacé todas las repeticiones con una pierna y luego cambiá.'
      ]
    },
  ],
  abductores: [
    { 
      id: 'e_abd2_1', 
      name: 'Abducción en Máquina', 
      emoji: '🦵', 
      muscles: ['Abductores','Glúteos'], 
      desc: 'Abre las piernas contra la resistencia de la máquina.',
      instructions: [
        'Sentate en la máquina y apoyá la cara externa de las rodillas en las almohadillas.',
        'Empujá hacia afuera abriendo las piernas lo más que puedas.',
        'Mantené la posición un segundo y volvé lentamente.',
        'Mantené la espalda apoyada en el respaldo.',
        'Concentrate en usar solo la fuerza de tus abductores.'
      ]
    },
    { 
      id: 'e_abd2_2', 
      name: 'Sentadilla Sumo', 
      emoji: '🏆', 
      muscles: ['Abductores','Cuádriceps','Glúteos'], 
      desc: 'Stance amplio activa más abductores.',
      instructions: [
        'Parate con los pies bien anchos y las puntas mirando hacia afuera.',
        'Sostené una mancuerna o pesa rusa entre tus piernas.',
        'Bajá la cadera flexionando las rodillas hacia afuera.',
        'Mantené el torso erguido y la espalda derecha.',
        'Subí empujando con los talones y apretando los glúteos.'
      ]
    },
    { 
      id: 'e_abd2_3', 
      name: 'Abducción con Banda', 
      emoji: '🎗️', 
      muscles: ['Abductores','Glúteos'], 
      desc: 'Usa una banda de resistencia alrededor de las rodillas.',
      instructions: [
        'Colocá una banda elástica justo por encima de tus rodillas.',
        'Parate con los pies al ancho de los hombros y flexioná levemente las rodillas.',
        'Da pasos laterales manteniendo la tensión en la banda.',
        'Mantené el core firme y el torso erguido.',
        'Podés hacerlo también acostado de lado abriendo la pierna de arriba.'
      ]
    },
  ],
  aductores: [
    { 
      id: 'e_adu_1', 
      name: 'Aducción en Máquina', 
      emoji: '🦿', 
      muscles: ['Aductores'], 
      desc: 'Cierra las piernas contra la resistencia.',
      instructions: [
        'Sentate en la máquina y apoyá la cara interna de las rodillas en las almohadillas.',
        'Cerrá las piernas juntando las almohadillas al centro.',
        'Mantené la contracción un segundo y volvé lentamente.',
        'Mantené la espalda apoyada en el respaldo.',
        'Concentrate en usar solo la fuerza de tus aductores.'
      ]
    },
    { 
      id: 'e_adu_2', 
      name: 'Aducción en Polea', 
      emoji: '🔗', 
      muscles: ['Aductores'], 
      desc: 'De pie, cruza la pierna por delante de la otra.',
      instructions: [
        'Poné la tobillera en la polea baja y enganchala en la pierna más cercana a la máquina.',
        'Sujetate de la máquina para tener estabilidad.',
        'Llevá la pierna hacia el centro y cruzala levemente por delante de la otra.',
        'Mantené el torso quieto y no te inclines.',
        'Volvé lentamente a la posición inicial controlando el peso.'
      ]
    },
    { 
      id: 'e_adu_3', 
      name: 'Copenhague Plank', 
      emoji: '🇩🇰', 
      muscles: ['Aductores','Abdomen'], 
      desc: 'Isométrico avanzado para aductores.',
      instructions: [
        'Apoyá un antebrazo en el piso y poné el pie de la pierna de arriba sobre un banco.',
        'Elevá la cadera hasta que el cuerpo forme una línea recta.',
        'La pierna de abajo debe quedar suspendida o apoyada levemente.',
        'Mantené la posición el tiempo indicado apretando fuerte el aductor.',
        'Mantené el core firme para no perder la postura.'
      ]
    },
  ],
  antebrazo: [
    { 
      id: 'e_ant_1', 
      name: 'Curl de Muñeca (barra)', 
      emoji: '🖐️', 
      muscles: ['Antebrazo'], 
      desc: 'Flexiona la muñeca con agarre supino.',
      instructions: [
        'Sentate en un banco y apoyá los antebrazos en tus muslos con las palmas hacia arriba.',
        'Dejá que la barra ruede hacia tus dedos y luego flexioná las muñecas hacia arriba.',
        'Mantené los antebrazos pegados a tus muslos en todo momento.',
        'Bajá la barra lentamente hasta la posición inicial.',
        'Apretá fuerte los antebrazos en la parte superior.'
      ]
    },
    { 
      id: 'e_ant_2', 
      name: 'Extensión de Muñeca', 
      emoji: '✋', 
      muscles: ['Antebrazo'], 
      desc: 'Agarre prono. Trabaja los extensores.',
      instructions: [
        'Sentate en un banco y apoyá los antebrazos en tus muslos con las palmas hacia abajo.',
        'Extendé las muñecas hacia arriba lo más que puedas.',
        'Bajá la barra lentamente hasta la posición inicial.',
        'Mantené los antebrazos fijos sobre tus muslos.',
        'Este ejercicio aísla los extensores del antebrazo.'
      ]
    },
    { 
      id: 'e_ant_3', 
      name: 'Paseo del Granjero', 
      emoji: '👨‍🌾', 
      muscles: ['Antebrazo','Trapecio','Core'], 
      desc: 'Camina cargando pesas pesadas. Mejora el agarre.',
      instructions: [
        'Agarrá un par de mancuernas o pesas muy pesadas.',
        'Mantené la espalda derecha, los hombros hacia atrás y el core firme.',
        'Caminá una distancia determinada con pasos cortos y controlados.',
        'No dejes que las pesas se balanceen ni que tus hombros caigan.',
        'Mantené el agarre lo más fuerte posible durante todo el trayecto.'
      ]
    },
    { 
      id: 'e_ant_4', 
      name: 'Enrollado de Cuerda', 
      emoji: '🧶', 
      muscles: ['Antebrazo'], 
      desc: 'Enrolla y desenrolla un peso atado a un palo.',
      instructions: [
        'Sostené el rodillo con ambas manos frente a vos con los brazos extendidos.',
        'Enrollá la cuerda girando las muñecas alternadamente hasta que el peso llegue arriba.',
        'Desenrollá la cuerda lentamente controlando el descenso del peso.',
        'Mantené los brazos paralelos al piso durante todo el ejercicio.',
        'Sentí el quemazón en tus antebrazos.'
      ]
    },
    { 
      id: 'e_ant_5', 
      name: 'Caminata del Granjero', 
      emoji: '👨‍🌾', 
      muscles: ['Antebrazo','Trapecio','Core'], 
      desc: 'Caminá sosteniendo mancuernas pesadas para mejorar la fuerza de agarre.',
      instructions: [
        'Sujetá dos mancuernas pesadas a los costados de tu cuerpo.',
        'Mantené una postura erguida con el pecho inflado y los hombros activos.',
        'Caminá de forma controlada manteniendo la tensión en todo el cuerpo.',
        'Asegurate de no encorvarte mientras caminás.',
        'Este ejercicio es excelente para la fuerza funcional y el agarre.'
      ]
    },
  ],
  pantorrillas: [
    { 
      id: 'e_pan_1', 
      name: 'Elevación de Talones (de pie)', 
      emoji: '👟', 
      muscles: ['Pantorrillas'], 
      desc: 'Sube en punta de pie. Máxima contracción arriba.',
      instructions: [
        'Parate en el borde de un escalón o plataforma con los talones al aire.',
        'Elevá los talones lo más que puedas quedando en puntas de pie.',
        'Mantené la contracción un segundo en la parte superior.',
        'Bajá lentamente los talones por debajo del nivel de la plataforma para estirar el músculo.',
        'Mantené las rodillas casi extendidas pero no bloqueadas.'
      ]
    },
    { 
      id: 'e_pan_2', 
      name: 'Elevación de Talones Sentado', 
      emoji: '💺', 
      muscles: ['Pantorrillas'], 
      desc: 'Trabaja el sóleo. Rodillas a 90°.',
      instructions: [
        'Sentate en la máquina de gemelos sentado y ajustá el soporte sobre tus muslos.',
        'Elevá los talones lo más que puedas contra la resistencia.',
        'Mantené la contracción un segundo arriba.',
        'Bajá los talones lentamente hasta sentir el estiramiento.',
        'Mantené la espalda derecha durante todo el ejercicio.'
      ]
    },
    { 
      id: 'e_pan_3', 
      name: 'Elevación de Talones en Prensa', 
      emoji: '🔩', 
      muscles: ['Pantorrillas'], 
      desc: 'Usa la máquina de prensa para cargar más peso.',
      instructions: [
        'Colocate en la máquina de prensa y apoyá solo las puntas de los pies en la parte inferior de la plataforma.',
        'Empujá la plataforma extendiendo los tobillos lo más que puedas.',
        'Mantené la contracción un segundo.',
        'Bajá lentamente permitiendo que los talones vuelvan hacia vos.',
        'No bloquees las rodillas, mantenelas con una mínima flexión.'
      ]
    },
    { 
      id: 'e_pan_4', 
      name: 'Salto de Comba', 
      emoji: '➰', 
      muscles: ['Pantorrillas'], 
      desc: 'Excelente para resistencia y explosividad en gemelos.',
      instructions: [
        'Sostené la cuerda por los mangos y parate con los pies juntos.',
        'Saltá sobre la cuerda aterrizando suavemente sobre las puntas de los pies.',
        'Mantené los saltos bajos y el ritmo constante.',
        'Usá las muñecas para girar la cuerda, no los brazos completos.',
        'Mantené el core firme y la mirada al frente.'
      ]
    },
    { 
      id: 'e_pan_5', 
      name: 'Elevación de Talones en Prensa', 
      emoji: '🔩', 
      muscles: ['Pantorrillas'], 
      desc: 'Usá la máquina de prensa para cargar más peso empujando con la punta de los pies.',
      instructions: [
        'Colocá los pies en la plataforma de la prensa, dejando los talones libres.',
        'Empujá la plataforma usando solo el movimiento de tus tobillos.',
        'Sentí el trabajo intenso en tus gemelos.',
        'Bajá de forma controlada hasta el máximo estiramiento.',
        'Mantené las piernas estables durante todo el recorrido.'
      ]
    },
  ],
  core: [
    { 
      id: 'e_cor_1', 
      name: 'Plancha Frontal (Plank)', 
      emoji: '➡️', 
      muscles: ['Core','Abdomen','Lumbares'], 
      desc: 'Isométrico fundamental. Mantén el cuerpo recto y contrae el abdomen.',
      instructions: [
        'Apoyá los antebrazos y las puntas de los pies en el piso.',
        'Mantené el cuerpo en línea recta desde la cabeza hasta los talones.',
        'Apretá fuerte el abdomen y los glúteos.',
        'Mantené la posición el tiempo indicado sin dejar que la cadera caiga.',
        'No levantes demasiado la cola ni arquees la espalda.'
      ]
    },
    { 
      id: 'e_cor_2', 
      name: 'Rueda Abdominal', 
      emoji: '⚙️', 
      muscles: ['Core','Abdomen','Hombros'], 
      desc: 'Extiende el cuerpo controladamente hacia adelante and regresa.',
      instructions: [
        'Arrodillate en el piso y agarrá la rueda con ambas manos.',
        'Deslizá la rueda hacia adelante extendiendo el cuerpo lo más que puedas.',
        'Mantené el abdomen bien contraído para proteger la espalda.',
        'Usá la fuerza de tus abdominales para volver a la posición inicial.',
        'No dejes que la espalda se arquee hacia abajo.'
      ]
    },
    { 
      id: 'e_cor_3', 
      name: 'Dead Bug', 
      emoji: '🐞', 
      muscles: ['Core','Abdomen'], 
      desc: 'Tumbado boca arriba, extiende brazo y pierna contraria sin arquear la espalda.',
      instructions: [
        'Acostate boca arriba con los brazos extendidos hacia el techo y las rodillas a 90 grados.',
        'Bajá lentamente el brazo derecho y la pierna izquierda hacia el piso.',
        'Mantené la espalda baja bien apoyada en el piso.',
        'Volvé a la posición inicial y repetí con el brazo izquierdo y la pierna derecha.',
        'Movete de forma lenta y controlada para maximizar la estabilidad.'
      ]
    },
    { 
      id: 'e_cor_4', 
      name: 'Bird Dog', 
      emoji: '🐕', 
      muscles: ['Core','Lumbares','Glúteos'], 
      desc: 'En cuadrupedia, extiende brazo y pierna contraria manteniendo el equilibrio.',
      instructions: [
        'Colocate en cuatro patas (manos debajo de hombros, rodillas debajo de caderas).',
        'Extendé simultáneamente el brazo derecho hacia adelante y la pierna izquierda hacia atrás.',
        'Mantené la espalda derecha y el abdomen contraído.',
        'Sostené la posición un segundo y volvé a la posición inicial.',
        'Repetí con el brazo izquierdo y la pierna derecha.'
      ]
    },
    { 
      id: 'e_cor_5', 
      name: 'Elevación de Piernas Colgado', 
      emoji: '🪝', 
      muscles: ['Core','Abdomen'], 
      desc: 'Trabaja la estabilidad del core y el abdomen inferior.',
      instructions: [
        'Colgate de una barra con los brazos extendidos.',
        'Elevá las piernas rectas hasta que queden paralelas al piso.',
        'Bajá las piernas lentamente evitando el balanceo del cuerpo.',
        'Mantené el core firme durante todo el movimiento.',
        'Si es muy difícil, podés subir las rodillas flexionadas.'
      ]
    },
    { 
      id: 'e_cor_6', 
      name: 'Press Pallof', 
      emoji: '↔️', 
      muscles: ['Core','Oblicuos'], 
      desc: 'Antirotación. Empuja la polea hacia adelante y resiste la fuerza lateral.',
      instructions: [
        'Parate de costado a la polea a la altura del pecho.',
        'Agarrá el manillar con ambas manos y llevalo al centro de tu pecho.',
        'Empujá el manillar hacia adelante extendiendo los brazos por completo.',
        'Resistí la fuerza de la polea que intenta girar tu torso.',
        'Mantené la posición un segundo y volvé al pecho con control.'
      ]
    },
    { 
      id: 'e_cor_7', 
      name: 'Hollow Body Hold', 
      emoji: '🍌', 
      muscles: ['Core','Abdomen'], 
      desc: 'Mantén la espalda baja pegada al suelo mientras elevas hombros y piernas.',
      instructions: [
        'Acostate boca arriba con los brazos extendidos sobre la cabeza y las piernas estiradas.',
        'Elevá los hombros y las piernas unos centímetros del piso.',
        'Mantené la espalda baja presionada firmemente contra el piso.',
        'Apretá el abdomen lo más fuerte posible.',
        'Mantené la posición el tiempo indicado.'
      ]
    },
  ],
};
