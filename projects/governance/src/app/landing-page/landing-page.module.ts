import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }
]

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export default class LandingPageModule { }
