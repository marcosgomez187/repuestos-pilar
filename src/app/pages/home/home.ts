import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { negocioSchema, sitioWebSchema } from '../../core/schema';
import { SeoService } from '../../core/seo.service';
import { ADDRESS_LINE, MAPS_URL, SITE, whatsappUrl } from '../../core/site.config';
import { CATEGORIAS, PREGUNTAS_FRECUENTES } from '../../data/catalog';
import { MARCAS_PRODUCTO, productoDestacado } from '../../data/productos';
import { CtaBanner } from '../../shared/cta-banner';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CtaBanner],
  templateUrl: './home.html',
})
export class Home {
  protected readonly site = SITE;
  protected readonly categorias = CATEGORIAS;
  protected readonly marcas = MARCAS_PRODUCTO;
  protected readonly imagenCategoria = productoDestacado;
  protected readonly preguntas = PREGUNTAS_FRECUENTES;
  protected readonly direccion = ADDRESS_LINE;
  protected readonly mapsUrl = MAPS_URL;
  protected readonly whatsapp = whatsappUrl();

  constructor() {
    inject(SeoService).setPage({
      title: 'Repuestos originales Toyota y Volkswagen en Pilar | RepuestosPilar',
      description:
        'Repuestos originales Toyota y Volkswagen en Pilar: inyección, sensores, encendido y correas. Asesoramiento personalizado, envíos a todo el país y garantía.',
      path: '/',
      jsonLd: [negocioSchema(), sitioWebSchema()],
    });
  }
}
