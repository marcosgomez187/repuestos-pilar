import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { SITE } from './core/site.config';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('muestra el encabezado con el nombre del negocio y el teléfono', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const html = fixture.nativeElement as HTMLElement;
    expect(html.querySelector('header')?.textContent).toContain(SITE.name);
    expect(html.querySelector(`a[href="tel:${SITE.phone.tel}"]`)).toBeTruthy();
  });

  it('tiene un único <main> para lectores de pantalla', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('main').length).toBe(1);
  });
});
