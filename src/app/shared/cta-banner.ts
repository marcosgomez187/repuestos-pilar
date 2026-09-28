import { Component, input } from '@angular/core';
import { SITE, whatsappUrl } from '../core/site.config';

@Component({
  selector: 'app-cta-banner',
  template: `
    <section class="cta-banner" aria-labelledby="cta-titulo">
      <div class="container cta-inner">
        <div>
          <h2 id="cta-titulo">{{ titulo() }}</h2>
          <p>{{ texto() }}</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-whatsapp" [href]="whatsapp" target="_blank" rel="noopener">Escribinos por WhatsApp</a>
          <a class="btn btn-light" [href]="'tel:' + site.phone.tel">Llamar al {{ site.phone.display }}</a>
        </div>
      </div>
    </section>
  `,
})
export class CtaBanner {
  readonly titulo = input('¿No encontrás el repuesto que buscás?');
  readonly texto = input('Contanos marca, modelo y año de tu auto y te respondemos con stock y precio en el día.');

  protected readonly site = SITE;
  protected readonly whatsapp = whatsappUrl();
}
