import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { IsrConsulenzaComponent } from './isr-consulenza.component';
import { IsrConsulenzaGridComponent } from './isr-consulenza-grid/isr-consulenza-grid.component';
import { IsrConsulenzaManagerComponent } from './isr-consulenza-manager/isr-consulenza-manager.component';

const routes: Routes = [
  {
    path: '',
    component: IsrConsulenzaComponent
  }
]

@NgModule({
  declarations: [
    IsrConsulenzaComponent,
    IsrConsulenzaGridComponent,
    IsrConsulenzaManagerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export default class IsrConsulenzaModule { }
