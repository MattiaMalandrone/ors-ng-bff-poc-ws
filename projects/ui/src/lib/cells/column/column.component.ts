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

  @ViewChild(ColumnDirective, { static: true }) columnHost!: ColumnDirective;

  cells = [
    new ColumnItem(StringCellComponent, "string" {}),
    new ColumnItem(NumericCellComponent, "number" {}),
    new ColumnItem(DateCellComponent, "date", {}),
    new ColumnItem(CurrencyCellComponent, "currency", {}),
  ];

  ngOnInit(): void {
    // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const columnItem = this.cells.find(c => c.cellType === this.type);
    const viewContainerRef = this.columnHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(columnItem?.component);
    // componentRef.instance.data = adItem.data;
  }
}

export class ColumnItem {
  constructor(public component: Type<BaseCellComponent>, public cellType: string, public data: any) {}
}
