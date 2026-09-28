import { RenderMode, ServerRoute } from '@angular/ssr';
import { CATEGORIAS } from './data/catalog';

// Todas las páginas se generan como HTML estático en el build (SEO + velocidad).
export const serverRoutes: ServerRoute[] = [
  {
    path: 'productos/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => CATEGORIAS.map((c) => ({ slug: c.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
