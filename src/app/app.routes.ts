import { Routes } from '@angular/router';

// Тут используем lazy loading для оптимизации начальной загрузки

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
