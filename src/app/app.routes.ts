import { Routes } from '@angular/router';
import { HomePage } from './home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./demos/demos.routes').then((m) => m.DEMO_ROUTES),
  },
];