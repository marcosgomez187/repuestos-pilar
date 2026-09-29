export interface Categoria {
  slug: string;
  nombre: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  resumen: string;
  intro: string[];
  consejos: string[];
}

export const CATEGORIAS: Categoria[] = [
  {
    slug: 'inyeccion',
    nombre: 'Inyección y combustible',
    h1: 'Repuestos de inyección y sistema de combustible en Pilar',
    metaTitle: 'Repuestos de inyección Toyota en Pilar | RepuestosPilar',
    metaDescription:
      'Válvulas SCV, sensores de riel, kits de bomba, inyectores y filtros de combustible originales Toyota en Pilar. Consultá compatibilidad con tu modelo.',
    resumen: 'Válvulas, sensores de riel, kits de bomba, inyectores y filtros de combustible.',
    intro: [
      'El sistema de inyección es de precisión: una pieza que no corresponde exactamente a tu motor puede afectar el arranque, el consumo o directamente dejarte a pie. Por eso trabajamos con piezas originales, en caja de fábrica.',
      'Antes de vender cualquier componente confirmamos el código de referencia contra tu vehículo. Escribinos con marca, modelo, año y motorización, y te confirmamos si la pieza que necesitás es la que tenemos en stock.',
    ],
    consejos: [
      'Guardá siempre el código de la pieza que te sacaron del auto: es la forma más segura de pedir el repuesto correcto.',
      'Un fallo de arranque en frío o una pérdida de potencia pueden venir de un sensor de riel o una válvula reguladora, no siempre de la bomba.',
      'Cambiá el filtro de combustible en el intervalo que indica el fabricante: protege al resto del sistema de inyección.',
    ],
  },
  {
    slug: 'sensores',
    nombre: 'Sensores del motor',
    h1: 'Sensores para autos Toyota en Pilar',
    metaTitle: 'Sensores Toyota en Pilar | RepuestosPilar',
    metaDescription:
      'Sensores de oxígeno, de mezcla aire-combustible, de cigüeñal, de turbo y caudalímetros originales Toyota en Pilar. Consultá el código de tu pieza.',
    resumen: 'Sensores de oxígeno, mezcla aire-combustible, cigüeñal, turbo y caudal de aire.',
    intro: [
      'Un sensor en mal estado enciende el testigo del tablero y puede hacer que el motor entre en modo seguro, con menos potencia y más consumo. Identificar el sensor correcto por su código evita cambiar piezas de más.',
      'Trabajamos con sensores originales Toyota. Si tenés el código de la pieza o el número de chasis, te confirmamos la referencia exacta.',
    ],
    consejos: [
      'Si se encendió el testigo de check engine, anotá o pedí en el taller el código de falla antes de comprar el sensor: acorta la búsqueda.',
      'Un sensor de oxígeno gastado sube el consumo de combustible antes de dar cualquier otro síntoma.',
      'El sensor de cigüeñal es el que más frecuentemente causa que el auto no arranque de forma intermitente.',
    ],
  },
  {
    slug: 'encendido',
    nombre: 'Encendido',
    h1: 'Bujías y bobinas de encendido para Toyota en Pilar',
    metaTitle: 'Bujías y bobinas de encendido Toyota en Pilar | RepuestosPilar',
    metaDescription:
      'Bujías de iridio y bobinas de encendido originales Toyota en Pilar. Piezas con el código de fábrica confirmado para tu motor.',
    resumen: 'Bujías de iridio y bobinas de encendido originales para tu motor.',
    intro: [
      'Las bujías de iridio mantienen una chispa estable durante más kilómetros y ayudan a que el motor arranque bien y consuma lo que corresponde. Las vendemos en juego completo, según la cantidad de cilindros de tu motor.',
      'La bobina de encendido es la que le da la chispa a cada bujía. Cuando falla, el motor suele tironear o fallar en un cilindro específico, y en muchos casos enciende el testigo del tablero.',
    ],
    consejos: [
      'Cambiá el juego completo de bujías, no solo la que falla: las demás ya tienen un desgaste similar.',
      'Un motor que tironea o consume más de lo normal puede necesitar un cambio de bujías, aunque no esté encendido ningún testigo.',
      'Si el auto falla en un solo cilindro (marcha en tres, tironeos al acelerar), sospechá primero de la bobina de ese cilindro.',
    ],
  },
  {
    slug: 'correas',
    nombre: 'Correas, distribución y bombas de agua',
    h1: 'Correas de distribución, poleas y bombas de agua en Pilar',
    metaTitle: 'Correa de distribución y bomba de agua en Pilar | RepuestosPilar',
    metaDescription:
      'Kits de correa de distribución, poleas tensoras, tensores y bombas de agua originales Toyota en Pilar. Repuestos para el sistema de correas de tu motor.',
    resumen: 'Kits de distribución, poleas tensoras, tensores y bombas de agua.',
    intro: [
      'La correa de distribución marca el ritmo del motor: si se corta o salta, el daño suele ser grande. Respetar el intervalo de cambio que indica el fabricante es la mejor forma de evitar una rotura inesperada.',
      'Una polea o un tensor gastado, en cambio, suele avisar con un ruido o un chillido en la correa de accesorios antes de romperse. Cambiarlos a tiempo evita quedarte sin dirección asistida, sin carga de batería o sin refrigeración.',
    ],
    consejos: [
      'Respetá el intervalo de cambio de la correa de distribución que indica el fabricante, aunque se vea en buen estado.',
      'Aprovechá el cambio de distribución para reemplazar también la bomba de agua y los tensores: el desgaste suele ser parejo.',
      'Si escuchás un chillido al arrancar en frío, revisá el tensor y las poleas de la correa de accesorios antes de que se corte.',
    ],
  },
];

export function buscarCategoria(slug: string | null | undefined): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

export const PREGUNTAS_FRECUENTES: Pregunta[] = [
  {
    pregunta: '¿Cómo sé qué repuesto corresponde a mi auto?',
    respuesta:
      'Contanos marca, modelo, año y motorización, o pasanos el código que figura en la pieza usada o en la cédula verde. Con esos datos confirmamos la referencia exacta antes de que compres.',
  },
  {
    pregunta: '¿Los repuestos son originales?',
    respuesta:
      'Sí. Trabajamos con repuestos originales, con la calidad y el ajuste que define el fabricante. No vendemos alternativos.',
  },
  {
    pregunta: '¿Trabajan con otras marcas además de Toyota?',
    respuesta:
      'Sí, también trabajamos con Volkswagen. Nuestro catálogo publicado hoy es principalmente de repuestos Toyota; si buscás una pieza Volkswagen, escribinos por WhatsApp con marca, modelo y año y te confirmamos disponibilidad.',
  },
  {
    pregunta: '¿Hacen envíos a todo el país?',
    respuesta:
      'Sí. Enviamos por correo y transporte a todo el país, y con moto en Pilar y zonas cercanas. Te informamos el costo y el plazo antes de confirmar el pedido.',
  },
  {
    pregunta: '¿Qué medios de pago aceptan?',
    respuesta:
      'Efectivo, transferencia bancaria y tarjetas de débito y crédito. Consultanos por promociones y cuotas vigentes.',
  },
  {
    pregunta: '¿Los repuestos tienen garantía?',
    respuesta:
      'Sí. Todos nuestros repuestos tienen garantía por defectos de fabricación. El plazo depende del producto; te lo informamos al momento de la compra.',
  },
];
