import { BaseCellComponent } from '../base-cell/base-cell.component';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-numeric-cell',
  templateUrl: './numeric-cell.component.html',
  styleUrls: ['./numeric-cell.component.css'],
})
export class NumericCellComponent extends BaseCellComponent {}
