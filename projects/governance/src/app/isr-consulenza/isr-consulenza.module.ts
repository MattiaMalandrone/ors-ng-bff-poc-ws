import { RouterModule, Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { PushPipe } from '@ngrx/component';
import { IsrConsulenzaComponent } from './isr-consulenza.component';
import { IsrConsulenzaEffects } from './state/effects';
import { IsrConsulenzaGridComponent } from './isr-consulenza-grid/isr-consulenza-grid.component';
import { IsrConsulenzaManagerComponent } from './isr-consulenza-manager/isr-consulenza-manager.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { isrConsulenzaFeature } from './state';
import { isrConsulenzaReducer } from './state/reducer';

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
    IsrConsulenzaManagerComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature(isrConsulenzaFeature, isrConsulenzaReducer),
    EffectsModule.forFeature([IsrConsulenzaEffects]),
    SharedModule,
    PushPipe
  ]
})
export default class IsrConsulenzaModule { }
