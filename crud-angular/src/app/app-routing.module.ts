import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses'
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), // Mova RouterModule.forRoot(routes) para o topo do array de imports
    CommonModule
  ],
  exports: [RouterModule] // Exporte RouterModule para que ele esteja disponível em toda a aplicação
})
export class AppRoutingModule { }
