import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-no-encontrado',
  imports: [RouterLink],
  template: `
    <section class="page-hero not-found">
      <div class="container">
        <p class="eyebrow">Error 404</p>
        <h1>No encontramos esa página</h1>
        <p class="lead">Puede que el enlace haya cambiado o que la dirección esté mal escrita.</p>
        <div class="btn-row">
          <a class="btn btn-primary" routerLink="/">Volver al inicio</a>
          <a class="btn btn-outline-light" routerLink="/productos">Ver el catálogo</a>
        </div>
      </div>
    </section>
  `,
})
export class NoEncontrado {
  constructor() {
    inject(SeoService).setPage({
      title: 'Página no encontrada | RepuestosPilar',
      description: 'La página que buscás no existe. Volvé al inicio o explorá el catálogo de repuestos para autos.',
      path: '/404',
      noindex: true,
    });
  }
}
