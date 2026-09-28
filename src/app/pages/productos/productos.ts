import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Miga, migasSchema, paginaSchema } from '../../core/schema';
import { SeoService } from '../../core/seo.service';
import { whatsappUrl } from '../../core/site.config';
import { CATEGORIAS } from '../../data/catalog';
import { MARCAS_PRODUCTO, PRODUCTOS, Producto, productoDestacado } from '../../data/productos';
import { Breadcrumbs } from '../../shared/breadcrumbs';
import { CtaBanner } from '../../shared/cta-banner';

@Component({
  selector: 'app-productos',
  imports: [RouterLink, Breadcrumbs, CtaBanner],
  templateUrl: './productos.html',
})
export class Productos {
  /** Se completan solos desde ?categoria=&marca=&q= gracias a withComponentInputBinding(). */
  readonly categoria = input<string>('');
  readonly marca = input<string>('');
  readonly q = input<string>('');

  protected readonly categorias = CATEGORIAS;
  protected readonly marcasProducto = MARCAS_PRODUCTO;
  protected readonly migas: Miga[] = [{ label: 'Inicio', path: '/' }, { label: 'Productos' }];
  protected readonly imagenCategoria = productoDestacado;

  protected readonly productos = computed(() => {
    const cat = this.categoria();
    const marca = this.marca();
    const texto = (this.q() ?? '').trim().toLowerCase();
    return PRODUCTOS.filter(
      (p) =>
        (!cat || p.categoria === cat) &&
        (!marca || p.marca === marca) &&
        (!texto || p.nombre.toLowerCase().includes(texto) || p.codigo.toLowerCase().includes(texto)),
    );
  });

  protected readonly hayFiltros = computed(() => !!(this.categoria() || this.marca() || this.q()));

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    const title = 'Catálogo de repuestos originales Toyota y Lexus | RepuestosPilar';
    const description =
      'Catálogo de repuestos originales Toyota y Lexus en Pilar: inyección, sensores, encendido y correas. Filtrá por categoría, marca o código y consultá por WhatsApp.';
    inject(SeoService).setPage({
      title,
      description,
      path: '/productos',
      jsonLd: [
        paginaSchema('CollectionPage', '/productos', 'Catálogo de repuestos originales', description),
        migasSchema([{ label: 'Inicio', path: '/' }, { label: 'Productos', path: '/productos' }]),
      ],
    });
  }

  protected onBuscar(event: Event): void {
    this.actualizarFiltro({ q: (event.target as HTMLInputElement).value || null });
  }

  protected onCategoria(event: Event): void {
    this.actualizarFiltro({ categoria: (event.target as HTMLSelectElement).value || null });
  }

  protected onMarca(event: Event): void {
    this.actualizarFiltro({ marca: (event.target as HTMLSelectElement).value || null });
  }

  protected limpiarFiltros(): void {
    this.router.navigate([], { relativeTo: this.route });
  }

  protected whatsappProducto(p: Producto): string {
    return whatsappUrl(`Hola! Quisiera consultar por: ${p.nombre} (código ${p.codigo}).`);
  }

  protected whatsappSinResultados(): string {
    const texto = (this.q() ?? '').trim();
    return whatsappUrl(`Hola! Busco un repuesto${texto ? ` (${texto})` : ''} y no lo encontré en la web. ¿Lo tienen?`);
  }

  private actualizarFiltro(cambios: Record<string, string | null>): void {
    this.router.navigate([], { relativeTo: this.route, queryParams: cambios, queryParamsHandling: 'merge' });
  }
}
