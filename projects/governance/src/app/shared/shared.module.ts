import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@lib/ui';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, UiModule],
  exports: [CommonModule, ReactiveFormsModule, MaterialModule, UiModule],
})
export class SharedModule {}
