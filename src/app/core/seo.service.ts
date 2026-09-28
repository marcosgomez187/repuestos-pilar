import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { JsonLd } from './schema';
import { SITE, absoluteUrl } from './site.config';

export interface SeoPage {
  /** Idealmente de 50 a 60 caracteres, con la palabra clave al principio. */
  title: string;
  /** Idealmente de 120 a 155 caracteres. */
  description: string;
  /** Ruta canónica de la página, por ejemplo `/nosotros`. */
  path: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  jsonLd?: JsonLd[];
}

const JSON_LD_ATTR = 'data-seo-jsonld';

/**
 * Actualiza title, meta tags, canonical, Open Graph, Twitter Cards y JSON-LD en cada página.
 * Como el sitio se prerenderiza, todo esto queda escrito en el HTML estático que recibe Google.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  setPage(page: SeoPage): void {
    const url = absoluteUrl(page.path);
    const image = absoluteUrl(page.image ?? SITE.defaultImage);
    const imageAlt = page.imageAlt ?? `${SITE.name}: repuestos y autopartes en ${SITE.address.city}`;

    this.titleService.setTitle(page.title);
    this.name('description', page.description);
    this.name(
      'robots',
      page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    );

    this.property('og:type', 'website');
    this.property('og:site_name', SITE.name);
    this.property('og:locale', 'es_AR');
    this.property('og:title', page.title);
    this.property('og:description', page.description);
    this.property('og:url', url);
    this.property('og:image', image);
    this.property('og:image:alt', imageAlt);

    this.name('twitter:card', 'summary_large_image');
    this.name('twitter:title', page.title);
    this.name('twitter:description', page.description);
    this.name('twitter:image', image);
    this.name('twitter:image:alt', imageAlt);

    this.setCanonical(url);
    this.setJsonLd(page.jsonLd ?? []);
  }

  private name(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private property(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setJsonLd(items: JsonLd[]): void {
    this.doc.head.querySelectorAll(`script[${JSON_LD_ATTR}]`).forEach((el) => el.remove());
    for (const item of items) {
      const script = this.doc.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute(JSON_LD_ATTR, '');
      // Se escapa "<" para que el contenido nunca pueda cerrar la etiqueta <script>.
      script.textContent = JSON.stringify(item).replace(/</g, '\\u003c');
      this.doc.head.appendChild(script);
    }
  }
}
