import { RouterModule, Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { PushPipe } from '@ngrx/component';
import { IsrConsulenzaComponent } from './isr-consulenza.component';
import { IsrConsulenzaEffects } from './state/isr-consulenza.effects';
import { IsrConsulenzaGridComponent } from './isr-consulenza-grid/isr-consulenza-grid.component';
import { IsrConsulenzaManagerComponent } from './isr-consulenza-manager/isr-consulenza-manager.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { StoreModule } from '@ngrx/store';

import * as fromIsrConsulenza from './state/isr-consuelnza.state';

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

    StoreModule.forFeature(fromIsrConsulenza.isrConsulenzaFeature),
    EffectsModule.forFeature([IsrConsulenzaEffects]),

    SharedModule,
    PushPipe
  ]
})
export default class IsrConsulenzaModule { }
