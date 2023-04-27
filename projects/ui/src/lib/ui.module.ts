import { BaseCellComponent } from './cells/base-cell/base-cell.component';
import { CheckboxCellComponent } from './cells/checkbox-cell/checkbox-cell.component';
import { ColumnComponent } from './cells/column/column.component';
import { ColumnDirective } from './cells/column-host.directive';
import { CurrencyCellComponent } from './cells/currency-cell/currency-cell.component';
import { DateCellComponent } from './cells/date-cell/date-cell.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { NumericCellComponent } from './cells/numeric-cell/numeric-cell.component';
import { StringCellComponent } from './cells/string-cell/string-cell.component';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [
    UiComponent,
    CheckboxCellComponent,
    ColumnDirective,
    StringCellComponent,
    CurrencyCellComponent,
    NumericCellComponent,
    DateCellComponent,
    ColumnComponent,
    BaseCellComponent,
  ],
  imports: [MatCheckboxModule],
  exports: [UiComponent, CheckboxCellComponent, ColumnComponent],
})
export class UiModule {}
