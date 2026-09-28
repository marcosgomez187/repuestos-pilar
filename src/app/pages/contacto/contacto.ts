import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Miga, migasSchema, negocioSchema, paginaSchema } from '../../core/schema';
import { SeoService } from '../../core/seo.service';
import { MAPS_URL, SITE, whatsappUrl } from '../../core/site.config';
import { Breadcrumbs } from '../../shared/breadcrumbs';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, Breadcrumbs],
  templateUrl: './contacto.html',
})
export class Contacto {
  protected readonly site = SITE;
  protected readonly mapsUrl = MAPS_URL;
  protected readonly whatsapp = whatsappUrl();
  protected readonly migas: Miga[] = [{ label: 'Inicio', path: '/' }, { label: 'Contacto' }];

  private readonly fb = inject(FormBuilder);
  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    telefono: [''],
    vehiculo: ['', Validators.required],
    mensaje: ['', [Validators.required, Validators.minLength(5)]],
  });
  protected readonly enviado = signal(false);

  constructor() {
    const title = 'Contacto y ubicación | RepuestosPilar';
    const description =
      'Contactá a RepuestosPilar: Los Paraísos 2015, La Lonja, Pilar. Teléfono, WhatsApp, email y horarios de atención. Consultá stock y precio de repuestos.';
    inject(SeoService).setPage({
      title,
      description,
      path: '/contacto',
      jsonLd: [
        negocioSchema(),
        paginaSchema('ContactPage', '/contacto', 'Contacto y ubicación', description),
        migasSchema([{ label: 'Inicio', path: '/' }, { label: 'Contacto', path: '/contacto' }]),
      ],
    });
  }

  /** Sitio estático sin backend: la consulta se envía por WhatsApp con el mensaje ya armado. */
  protected enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { nombre, telefono, vehiculo, mensaje } = this.form.getRawValue();
    const texto = [
      `Hola! Soy ${nombre}.`,
      `Mi vehículo: ${vehiculo}.`,
      `Consulta: ${mensaje}`,
      telefono ? `Mi teléfono: ${telefono}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(whatsappUrl(texto), '_blank', 'noopener');
    this.enviado.set(true);
  }

  protected invalido(campo: 'nombre' | 'vehiculo' | 'mensaje'): boolean {
    const control = this.form.controls[campo];
    return control.invalid && control.touched;
  }
}
