import { CATEGORIAS } from '../data/catalog';
import { SITE, absoluteUrl } from './site.config';

export type JsonLd = Record<string, unknown>;

const NEGOCIO_ID = `${SITE.url}/#negocio`;
const WEBSITE_ID = `${SITE.url}/#website`;

/** Ficha de negocio local: habilita el panel de Google Maps / búsqueda local. */
export function negocioSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    '@id': NEGOCIO_ID,
    name: SITE.legalName,
    alternateName: 'Repuestos Pilar',
    url: SITE.url,
    image: [absoluteUrl(SITE.defaultImage)],
    logo: absoluteUrl(SITE.logo),
    description: SITE.description,
    telephone: SITE.phone.tel,
    email: SITE.email,
    priceRange: '$$',
    currenciesAccepted: 'ARS',
    paymentAccepted: 'Efectivo, transferencia bancaria, tarjeta de débito, tarjeta de crédito',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    openingHoursSpecification: SITE.hours
      .filter((h) => h.days.length > 0)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    areaServed: [
      { '@type': 'City', name: SITE.address.city },
      { '@type': 'Country', name: SITE.address.country },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone.tel,
      contactType: 'customer service',
      areaServed: SITE.address.countryCode,
      availableLanguage: 'es',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Repuestos y autopartes',
      itemListElement: CATEGORIAS.map((c) => ({
        '@type': 'OfferCatalog',
        name: c.nombre,
        url: absoluteUrl(`/productos/${c.slug}`),
      })),
    },
  };
}

export function sitioWebSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'es-AR',
    publisher: { '@id': NEGOCIO_ID },
  };
}

export interface Miga {
  label: string;
  path?: string;
}

export function migasSchema(migas: Miga[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.label,
      ...(m.path !== undefined ? { item: absoluteUrl(m.path) } : {}),
    })),
  };
}

/** Schema de tipo de página (AboutPage, ContactPage, CollectionPage…) enlazado al negocio. */
export function paginaSchema(
  tipo: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage',
  path: string,
  nombre: string,
  descripcion: string,
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': tipo,
    '@id': `${absoluteUrl(path)}#pagina`,
    url: absoluteUrl(path),
    name: nombre,
    description: descripcion,
    inLanguage: 'es-AR',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': NEGOCIO_ID },
  };
}
