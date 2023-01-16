import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { IsrConsulenzaComponent } from './isr-consulenza.component';

const routes: Routes = [
  {
    path: '',
    component: IsrConsulenzaComponent
  }
]

@NgModule({
  declarations: [
    IsrConsulenzaComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export default class IsrConsulenzaModule { }
