import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
