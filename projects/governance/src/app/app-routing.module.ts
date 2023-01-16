import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module')
  },
  {
    path: 'isr-consulenza',
    loadChildren: () => import('./isr-consulenza/isr-consulenza.module')
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
