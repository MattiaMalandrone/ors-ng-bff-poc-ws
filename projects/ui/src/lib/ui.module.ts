import { CheckboxCellComponent } from './cells/checkbox-cell/checkbox-cell.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [UiComponent, CheckboxCellComponent],
  imports: [MatCheckboxModule],
  exports: [UiComponent, CheckboxCellComponent],
})
export class UiModule {}
