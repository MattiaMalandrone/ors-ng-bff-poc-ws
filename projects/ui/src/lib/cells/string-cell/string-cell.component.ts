import { BaseCellComponent } from '../base-cell/base-cell.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-string-cell',
  templateUrl: './string-cell.component.html',
  styleUrls: ['./string-cell.component.css'],
})
export class StringCellComponent extends BaseCellComponent {
  @Input() data!: string
}
