/**
 * Datos del negocio. Es la única fuente de verdad: los usan el encabezado, el pie,
 * la página de contacto y los datos estructurados (JSON-LD) para Google.
 *
 * ⚠️ A confirmar antes de publicar: el dominio (`url`) y los horarios de atención.
 * La dirección y el teléfono deben ser idénticos en la web, en Google Business Profile
 * y en directorios (consistencia NAP).
 */
export const SITE = {
  name: 'RepuestosPilar',
  legalName: 'RepuestosPilar',
  // Dominio de producción. También está en public/robots.txt y public/sitemap.xml.
  url: 'https://www.repuestospilar.com.ar',
  slogan: 'Repuestos originales en Pilar',
  description:
    'Repuestos originales Toyota y Volkswagen en Pilar: inyección, sensores, encendido y correas. Asesoramiento personalizado, envíos a todo el país y garantía.',
  phone: { display: '+54 9 11 6724-0165', tel: '+5491167240165' },
  whatsapp: '5491167240165',
  email: 'Innovacionenriegos@yahoo.com.ar',
  address: {
    street: 'Los Paraísos 2015',
    neighborhood: 'La Lonja',
    city: 'Pilar',
    region: 'Buenos Aires',
    countryCode: 'AR',
    country: 'Argentina',
  },
  // Horarios a confirmar con el comercio.
  hours: [
    { label: 'Lunes a viernes', text: '8:00 a 19:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
    { label: 'Sábados', text: '9:00 a 13:00', days: ['Saturday'], opens: '09:00', closes: '13:00' },
    { label: 'Domingos y feriados', text: 'Cerrado', days: [], opens: '', closes: '' },
  ],
  defaultImage: '/og-image.png',
  logo: '/logo-512.png',
} as const;

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.neighborhood}, ${SITE.address.city}, ${SITE.address.region}, ${SITE.address.country}`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.address.street}, ${SITE.address.neighborhood}, ${SITE.address.city}, ${SITE.address.region}, ${SITE.address.country}`,
)}`;

export function whatsappUrl(message = 'Hola! Quisiera consultar por un repuesto.'): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`.replace(/\/$/, '') || SITE.url;
}
