import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { PushPipe } from '@ngrx/component';
import { IsrConsulenzaComponent } from './isr-consulenza.component';
import { IsrConsulenzaEffects } from './state/isr-consulenza.effects';
import { IsrConsulenzaGridComponent } from './isr-consulenza-grid/isr-consulenza-grid.component';
import { IsrConsulenzaManagerComponent } from './isr-consulenza-manager/isr-consulenza-manager.component';
import { NgModule, isDevMode } from '@angular/core';
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
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    SharedModule,
    PushPipe
  ]
})
export default class IsrConsulenzaModule { }
