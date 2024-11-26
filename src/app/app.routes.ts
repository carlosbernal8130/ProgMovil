import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'acceso',
    loadComponent: () => import('./acceso/acceso.page').then( m => m.AccesoPage)
  },
  
  {
    path: '',
    redirectTo: 'acceso',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'educacion',
    loadComponent: () => import('./educacion/educacion.page').then( m => m.EducacionPage)
  },
  {
    path: 'agenda',
    loadComponent: () => import('./agenda/agenda.page').then( m => m.AgendaPage)
  },

];
