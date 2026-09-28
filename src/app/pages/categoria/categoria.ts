import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Miga, migasSchema, paginaSchema } from '../../core/schema';
import { SeoService } from '../../core/seo.service';
import { whatsappUrl } from '../../core/site.config';
import { CATEGORIAS, buscarCategoria } from '../../data/catalog';
import { Producto, productosDeCategoria } from '../../data/productos';
import { Breadcrumbs } from '../../shared/breadcrumbs';
import { CtaBanner } from '../../shared/cta-banner';

@Component({
  selector: 'app-categoria',
  imports: [RouterLink, Breadcrumbs, CtaBanner],
  templateUrl: './categoria.html',
})
export class CategoriaPage {
  /** Parámetro `:slug` de la ruta (withComponentInputBinding). */
  readonly slug = input.required<string>();

  protected readonly categoria = computed(() => buscarCategoria(this.slug()));
  protected readonly productos = computed(() => productosDeCategoria(this.slug()));
  protected readonly relacionadas = computed(() => CATEGORIAS.filter((c) => c.slug !== this.slug()));
  protected readonly migas = computed<Miga[]>(() => [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/productos' },
    { label: this.categoria()?.nombre ?? '' },
  ]);
  protected readonly whatsapp = computed(() =>
    whatsappUrl(`Hola! Quisiera consultar por repuestos de ${this.categoria()?.nombre.toLowerCase()}.`),
  );

  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      const c = this.categoria();
      if (!c) return;
      const path = `/productos/${c.slug}`;
      const destacado = this.productos()[0];
      this.seo.setPage({
        title: c.metaTitle,
        description: c.metaDescription,
        path,
        image: destacado?.imagen,
        imageAlt: destacado?.alt,
        jsonLd: [
          paginaSchema('CollectionPage', path, c.h1, c.metaDescription),
          migasSchema([
            { label: 'Inicio', path: '/' },
            { label: 'Productos', path: '/productos' },
            { label: c.nombre, path },
          ]),
        ],
      });
    });
  }

  protected whatsappProducto(p: Producto): string {
    return whatsappUrl(`Hola! Quisiera consultar por: ${p.nombre} (código ${p.codigo}).`);
  }
}
