import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Miga, migasSchema, paginaSchema } from '../../core/schema';
import { SeoService } from '../../core/seo.service';
import { SITE } from '../../core/site.config';
import { Breadcrumbs } from '../../shared/breadcrumbs';
import { CtaBanner } from '../../shared/cta-banner';

@Component({
  selector: 'app-nosotros',
  imports: [RouterLink, Breadcrumbs, CtaBanner],
  templateUrl: './nosotros.html',
})
export class Nosotros {
  protected readonly site = SITE;
  protected readonly migas: Miga[] = [{ label: 'Inicio', path: '/' }, { label: 'Quiénes somos' }];

  protected readonly valores = [
    { titulo: 'Honestidad', texto: 'Te decimos qué necesitás realmente y qué no. Si no tenemos la pieza correcta, te lo decimos.' },
    { titulo: 'Conocimiento', texto: 'Nuestro equipo conoce los repuestos y sabe orientarte, sea tu primer auto o una flota entera.' },
    { titulo: 'Compromiso', texto: 'Respaldamos cada venta con garantía y atención posventa, porque queremos que vuelvas.' },
  ];

  constructor() {
    const title = 'Quiénes somos | RepuestosPilar, autopartes en Pilar';
    const description =
      'Conocé a RepuestosPilar, tu casa de repuestos y autopartes en La Lonja, Pilar. Nuestra misión, visión y valores. Atención personalizada y asesoramiento.';
    inject(SeoService).setPage({
      title,
      description,
      path: '/nosotros',
      jsonLd: [
        paginaSchema('AboutPage', '/nosotros', 'Quiénes somos', description),
        migasSchema([{ label: 'Inicio', path: '/' }, { label: 'Quiénes somos', path: '/nosotros' }]),
      ],
    });
  }
}
