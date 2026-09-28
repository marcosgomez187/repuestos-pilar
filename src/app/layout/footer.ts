import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MAPS_URL, SITE, whatsappUrl } from '../core/site.config';
import { CATEGORIAS } from '../data/catalog';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly site = SITE;
  protected readonly categorias = CATEGORIAS;
  protected readonly mapsUrl = MAPS_URL;
  protected readonly whatsapp = whatsappUrl();
  protected readonly anio = new Date().getFullYear();
}
