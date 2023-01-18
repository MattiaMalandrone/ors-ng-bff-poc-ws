import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { IsrConsulenzaComponent } from './isr-consulenza.component';
import { IsrConsulenzaGridComponent } from './isr-consulenza-grid/isr-consulenza-grid.component';
import { IsrConsulenzaManagerComponent } from './isr-consulenza-manager/isr-consulenza-manager.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { isrConsulenzaReducer } from './state/reducer';
import { isrConsulenzaFeature } from './state/selectors';
import { IsrConsulenzaEffects } from './state/effects';

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
    StoreModule.forFeature(isrConsulenzaFeature, isrConsulenzaReducer),
    EffectsModule.forFeature([IsrConsulenzaEffects]),
    SharedModule
  ]
})
export default class IsrConsulenzaModule { }
