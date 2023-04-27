import { BaseCellComponent } from '../base-cell/base-cell.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-date-cell',
  templateUrl: './date-cell.component.html',
  styleUrls: ['./date-cell.component.css'],
})
export class DateCellComponent extends BaseCellComponent {
  @Input()
  get data(): Date | string { return this._data; }
  set data(data: Date | string) {
    this._data = data
  }
  private _data!: Date | string;
}
