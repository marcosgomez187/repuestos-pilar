export interface Producto {
  /** Identificador estable, usado en la URL de detalle si hace falta y como key de lista. */
  id: string;
  nombre: string;
  /** Código de referencia del fabricante, tal como figura en la caja. */
  codigo: string;
  marca: 'Toyota' | 'Denso' | 'Bosch';
  categoria: string;
  imagen: string;
  alt: string;
  /** Aplicación indicada por el proveedor (opcional). Se muestra tal cual, sin verificar cada motor/año. */
  compatibilidad?: string;
}

export const PRODUCTOS: Producto[] = [
  // ---- Inyección y combustible ----
  {
    id: 'valvula-scv-23810-0e010',
    nombre: 'Válvula reguladora de succión (SCV)',
    codigo: '23810-0E010',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/valvula-scv-23810-0e010.jpg',
    alt: 'Válvula reguladora de succión Toyota Genuine Parts, código 23810-0E010',
  },
  {
    id: 'sensor-presion-riel-23810-30100',
    nombre: 'Sensor de presión de riel de combustible',
    codigo: '23810-30100',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/sensor-presion-riel-23810-30100.jpg',
    alt: 'Sensor de presión de riel de combustible Toyota Genuine Parts, código 23810-30100',
  },
  {
    id: 'sensor-presion-riel-23810-30110',
    nombre: 'Sensor de presión de riel de combustible',
    codigo: '23810-30110',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/sensor-presion-riel-23810-30110.jpg',
    alt: 'Sensor de presión de riel de combustible Toyota Genuine Parts, código 23810-30110',
  },
  {
    id: 'kit-bomba-denso-294200-03002f',
    nombre: 'Kit de reparación para bomba de alta presión',
    codigo: '294200-03002F',
    marca: 'Denso',
    categoria: 'inyeccion',
    imagen: '/images/productos/kit-bomba-denso-294200-03002f.jpg',
    alt: 'Kit de reparación Denso para bomba de alta presión, código 294200-03002F',
  },
  {
    id: 'kit-bomba-denso-sm294009-10004d',
    nombre: 'Kit de reparación para bomba de alta presión',
    codigo: 'SM294009-10004D',
    marca: 'Denso',
    categoria: 'inyeccion',
    imagen: '/images/productos/kit-bomba-denso-sm294009-10004d.jpg',
    alt: 'Kit de reparación Denso para bomba de alta presión, código SM294009-10004D',
  },
  {
    id: 'valvula-presion-bosch-0281006074',
    nombre: 'Válvula reguladora de presión de combustible',
    codigo: '0 281 006 074',
    marca: 'Bosch',
    categoria: 'inyeccion',
    imagen: '/images/productos/valvula-presion-bosch-0281006074.jpg',
    alt: 'Válvula reguladora de presión de combustible Bosch, código 0281006074',
  },
  {
    id: 'filtro-combustible-23390-0e011',
    nombre: 'Elemento de filtro de combustible',
    codigo: '23390-0E011',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/filtro-combustible-23390-0e011.jpg',
    alt: 'Elemento de filtro de combustible Toyota Genuine Parts, código 23390-0E011',
  },
  {
    id: 'inyector-combustible-23250-0d030',
    nombre: 'Inyector de combustible',
    codigo: '23250-0D030',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/inyector-combustible-23250-0d030.jpg',
    alt: 'Inyector de combustible Toyota Genuine Parts, código 23250-0D030',
  },
  {
    id: 'inyector-set-23209-22040',
    nombre: 'Juego de inyectores de combustible',
    codigo: '23209-22040',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/inyector-set-23209-22040.jpg',
    alt: 'Juego de inyectores de combustible Toyota Genuine Parts, código 23209-22040',
  },
  {
    id: 'inyector-set-23209-39146',
    nombre: 'Juego de inyectores de combustible',
    codigo: '23209-39146',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/inyector-set-23209-39146.jpg',
    alt: 'Juego de inyectores de combustible Toyota Genuine Parts, código 23209-39146',
  },
  {
    id: 'inyector-combustible-23250-22080',
    nombre: 'Inyector de combustible',
    codigo: '23250-22080',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/inyector-combustible-23250-22080.jpg',
    alt: 'Inyector de combustible Toyota Genuine Parts, código 23250-22080',
  },
  {
    id: 'inyector-diesel-23670-09330',
    nombre: 'Inyector de combustible diésel common-rail',
    codigo: '23670-09330',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/inyector-diesel-23670-09330.jpg',
    alt: 'Inyector de combustible diésel common-rail Toyota Genuine Parts, código 23670-09330',
  },
  {
    id: 'inyector-diesel-23670-09350',
    nombre: 'Inyector de combustible diésel common-rail',
    codigo: '23670-09350',
    marca: 'Toyota',
    categoria: 'inyeccion',
    imagen: '/images/productos/inyector-diesel-23670-09350.jpg',
    alt: 'Inyector de combustible diésel common-rail Toyota Genuine Parts, código 23670-09350',
  },
  {
    id: 'inyector-diesel-9709500-7761',
    nombre: 'Inyector de combustible diésel common-rail',
    codigo: '9709500-7761',
    marca: 'Denso',
    categoria: 'inyeccion',
    imagen: '/images/productos/inyector-diesel-9709500-7761.jpg',
    alt: 'Inyector de combustible diésel common-rail Denso, código 9709500-7761',
  },

  // ---- Sensores del motor ----
  {
    id: 'sensor-aire-combustible-89467-71120',
    nombre: 'Sensor de mezcla aire-combustible',
    codigo: '89467-71120',
    marca: 'Toyota',
    categoria: 'sensores',
    imagen: '/images/productos/sensor-aire-combustible-89467-71120.jpg',
    alt: 'Sensor de mezcla aire-combustible Toyota Genuine Parts, código 89467-71120',
  },
  {
    id: 'sensor-aire-combustible-89467-12010',
    nombre: 'Sensor de mezcla aire-combustible',
    codigo: '89467-12010',
    marca: 'Toyota',
    categoria: 'sensores',
    imagen: '/images/productos/sensor-aire-combustible-89467-12010.jpg',
    alt: 'Sensor de mezcla aire-combustible Toyota Genuine Parts, código 89467-12010',
  },
  {
    id: 'sensor-oxigeno-89465-12840',
    nombre: 'Sensor de oxígeno',
    codigo: '89465-12840',
    marca: 'Toyota',
    categoria: 'sensores',
    imagen: '/images/productos/sensor-oxigeno-89465-12840.jpg',
    alt: 'Sensor de oxígeno Toyota Genuine Parts, código 89465-12840',
  },
  {
    id: 'sensor-oxigeno-89465-12450',
    nombre: 'Sensor de oxígeno',
    codigo: '89465-12450',
    marca: 'Toyota',
    categoria: 'sensores',
    imagen: '/images/productos/sensor-oxigeno-89465-12450.jpg',
    alt: 'Sensor de oxígeno Toyota Genuine Parts, código 89465-12450',
  },
  {
    id: 'sensor-ciguenal-90919-05060',
    nombre: 'Sensor de cigüeñal',
    codigo: '90919-05060',
    marca: 'Toyota',
    categoria: 'sensores',
    imagen: '/images/productos/sensor-ciguenal-90919-05060.jpg',
    alt: 'Sensor de cigüeñal Toyota Genuine Parts, código 90919-05060',
  },
  {
    id: 'sensor-ciguenal-90919-05050',
    nombre: 'Sensor de cigüeñal',
    codigo: '90919-05050',
    marca: 'Toyota',
    categoria: 'sensores',
    imagen: '/images/productos/sensor-ciguenal-90919-05050.jpg',
    alt: 'Sensor de cigüeñal Toyota Genuine Parts, código 90919-05050',
  },
  {
    id: 'sensor-turbo-89421-71030',
    nombre: 'Sensor de presión de turbo',
    codigo: '89421-71030',
    marca: 'Toyota',
    categoria: 'sensores',
    imagen: '/images/productos/sensor-turbo-89421-71030.jpg',
    alt: 'Sensor de presión de turbo Toyota Genuine Parts, código 89421-71030',
  },
  {
    id: 'medidor-caudal-aire-22204-22010',
    nombre: 'Medidor de caudal de aire (caudalímetro)',
    codigo: '22204-22010',
    marca: 'Toyota',
    categoria: 'sensores',
    imagen: '/images/productos/medidor-caudal-aire-22204-22010.jpg',
    alt: 'Medidor de caudal de aire Toyota Genuine Parts, código 22204-22010',
  },

  // ---- Encendido ----
  {
    id: 'bujias-iridio-90919-01275',
    nombre: 'Bujía de iridio',
    codigo: '90919-01275',
    marca: 'Toyota',
    categoria: 'encendido',
    imagen: '/images/productos/bujias-iridio-90919-01275.jpg',
    alt: 'Bujías de iridio Toyota Genuine Parts, código 90919-01275',
  },
  {
    id: 'bobina-encendido-90919-02258',
    nombre: 'Bobina de encendido',
    codigo: '90919-02258',
    marca: 'Toyota',
    categoria: 'encendido',
    imagen: '/images/productos/bobina-encendido-90919-02258.jpg',
    alt: 'Bobina de encendido Toyota Genuine Parts, código 90919-02258',
  },
  {
    id: 'bobina-encendido-90919-02239',
    nombre: 'Bobina de encendido',
    codigo: '90919-02239',
    marca: 'Toyota',
    categoria: 'encendido',
    imagen: '/images/productos/bobina-encendido-90919-02239.jpg',
    alt: 'Bobina de encendido Toyota Genuine Parts, código 90919-02239',
  },

  // ---- Correas y tensores ----
  {
    id: 'polea-tensora-88440-0k042',
    nombre: 'Polea tensora',
    codigo: '88440-0K042',
    marca: 'Toyota',
    categoria: 'correas',
    imagen: '/images/productos/polea-tensora-88440-0k042.jpg',
    alt: 'Polea tensora Toyota Genuine Parts, código 88440-0K042',
  },
  {
    id: 'polea-tensora-88440-0k172',
    nombre: 'Polea tensora',
    codigo: '88440-0K172',
    marca: 'Toyota',
    categoria: 'correas',
    imagen: '/images/productos/polea-tensora-88440-0k172.jpg',
    alt: 'Polea tensora Toyota Genuine Parts, código 88440-0K172',
  },
  {
    id: 'tensor-correa-16620-30031',
    nombre: 'Tensor de correa',
    codigo: '16620-30031',
    marca: 'Toyota',
    categoria: 'correas',
    imagen: '/images/productos/tensor-correa-16620-30031.jpg',
    alt: 'Tensor de correa Toyota Genuine Parts, código 16620-30031',
  },
  {
    id: 'kit-correa-distribucion-13568-30011',
    nombre: 'Kit de correa de distribución',
    codigo: '13568-30011',
    marca: 'Toyota',
    categoria: 'correas',
    imagen: '/images/productos/kit-correa-distribucion-13568-30011.jpg',
    alt: 'Kit de correa de distribución con tensor y polea, Toyota Genuine Parts, código 13568-30011',
  },
  {
    id: 'polea-guia-13505-67042',
    nombre: 'Polea guía de distribución',
    codigo: '13505-67042',
    marca: 'Toyota',
    categoria: 'correas',
    imagen: '/images/productos/polea-guia-13505-67042.jpg',
    alt: 'Polea guía de distribución Toyota Genuine Parts, código 13505-67042',
  },
  {
    id: 'bomba-agua-16100-69357',
    nombre: 'Bomba de agua',
    codigo: '16100-69357',
    marca: 'Toyota',
    categoria: 'correas',
    imagen: '/images/productos/bomba-agua-16100-69357.jpg',
    alt: 'Bomba de agua Toyota Genuine Parts, código 16100-69357',
  },
  {
    id: 'correa-poly-v-90916-t2006',
    nombre: 'Correa poly-V de accesorios',
    codigo: '90916-T2006',
    marca: 'Toyota',
    categoria: 'correas',
    imagen: '/images/productos/correa-poly-v-90916-t2006.jpg',
    alt: 'Correa poly-V de accesorios Toyota Genuine Parts, código 90916-T2006',
    compatibilidad: 'Toyota Hilux 2005-2015, motores 1KD y 2KD (según el proveedor; confirmá con tu VIN)',
  },
];

export const MARCAS_PRODUCTO = ['Toyota', 'Denso', 'Bosch'] as const;

export function productosDeCategoria(slug: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === slug);
}

/** Primer producto (con foto) de una categoría; se usa como imagen representativa en tarjetas y previews. */
export function productoDestacado(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.categoria === slug);
}

export function buscarProducto(id: string | null | undefined): Producto | undefined {
  return PRODUCTOS.find((p) => p.id === id);
}
