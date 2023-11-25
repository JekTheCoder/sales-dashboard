import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inbox',
  },
  {
    path: 'inbox',
    loadComponent: () => import('./pages/inbox/inbox.component'),
  },

  {
    path: 'meeting',
    loadComponent: () => import('./pages/meeting/meeting.component'),
  }
];
