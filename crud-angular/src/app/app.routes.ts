import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses-routing.module').then(m => m.COURSES_ROUTES)
  }
];
