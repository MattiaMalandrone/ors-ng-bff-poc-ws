import { BaseCellComponent } from '../base-cell/base-cell.component';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-date-cell',
  templateUrl: './date-cell.component.html',
  styleUrls: ['./date-cell.component.css'],
})
export class DateCellComponent extends BaseCellComponent {}
