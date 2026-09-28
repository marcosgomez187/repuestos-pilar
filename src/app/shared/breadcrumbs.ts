import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Miga } from '../core/schema';

/** Migas de pan visibles; deben coincidir con el BreadcrumbList del JSON-LD de la página. */
@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  template: `
    <nav class="breadcrumbs" aria-label="Migas de pan">
      <ol>
        @for (miga of items(); track miga.label; let ultima = $last) {
          <li>
            @if (miga.path !== undefined && !ultima) {
              <a [routerLink]="miga.path">{{ miga.label }}</a>
            } @else {
              <span aria-current="page">{{ miga.label }}</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
})
export class Breadcrumbs {
  readonly items = input.required<Miga[]>();
}
