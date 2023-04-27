import { BaseCellComponent } from '../base-cell/base-cell.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-currency-cell',
  templateUrl: './currency-cell.component.html',
  styleUrls: ['./currency-cell.component.css'],
})
export class CurrencyCellComponent extends BaseCellComponent {
  @Input() data!: number
}
