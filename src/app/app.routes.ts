import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { buscarCategoria } from './data/catalog';

const categoriaExiste: CanActivateFn = (route) =>
  buscarCategoria(route.paramMap.get('slug')) ? true : inject(Router).createUrlTree(['/404']);

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'productos', loadComponent: () => import('./pages/productos/productos').then((m) => m.Productos) },
  {
    path: 'productos/:slug',
    canActivate: [categoriaExiste],
    loadComponent: () => import('./pages/categoria/categoria').then((m) => m.CategoriaPage),
  },
  { path: 'nosotros', loadComponent: () => import('./pages/nosotros/nosotros').then((m) => m.Nosotros) },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto').then((m) => m.Contacto) },
  // '/404' se prerenderiza y se publica como 404.html (ver scripts/create-404.mjs).
  { path: '404', loadComponent: () => import('./pages/no-encontrado/no-encontrado').then((m) => m.NoEncontrado) },
  { path: '**', redirectTo: '404' },
];
