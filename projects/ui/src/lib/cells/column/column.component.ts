import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';

import { BaseCellComponent } from '../base-cell/base-cell.component';
import { ColumnDirective } from '../column-host.directive';
import { CurrencyCellComponent } from '../currency-cell/currency-cell.component';
import { DateCellComponent } from '../date-cell/date-cell.component';
import { NumericCellComponent } from '../numeric-cell/numeric-cell.component';
import { StringCellComponent } from '../string-cell/string-cell.component';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() type: string = "";
  @Input() col: any

  @ViewChild(ColumnDirective, { static: true }) columnHost!: ColumnDirective;

  cells = [
    new ColumnItem<StringCellComponent>(StringCellComponent, "string", {}),
    new ColumnItem<NumericCellComponent>(NumericCellComponent, "number", {}),
    new ColumnItem<DateCellComponent>(DateCellComponent, "date", {}),
    new ColumnItem<CurrencyCellComponent>(CurrencyCellComponent, "currency", {}),
  ];

  ngOnInit(): void {
    const columnItem = this.cells.find(c => c.cellType === this.type);

    if(!columnItem)
      throw new TypeError('Value not found in collection')

    const viewContainerRef = this.columnHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<BaseCellComponent>(columnItem.component);
    componentRef.instance.data = this.col;
  }
}

export class ColumnItem<T> {
  constructor(public component: Type<T>, public cellType: string, public data: any) {}
}
