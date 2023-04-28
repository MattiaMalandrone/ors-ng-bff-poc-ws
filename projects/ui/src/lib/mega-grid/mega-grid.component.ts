import { Component, Input, OnInit } from '@angular/core';
import { Column } from './model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'mega-grid',
  templateUrl: './mega-grid.component.html',
  styleUrls: ['./mega-grid.component.css']
})
export class MegaGridComponent<T> implements OnInit {

  @Input() columns: Column[] = []
  @Input() data: T[] = []
  @Input() length: number = 0;
  @Input() displayedColumns: string[] = []
  @Input() showCheckboxColumn: boolean = false;

  selection = new SelectionModel<T>(true, []);

  ngOnInit(): void {
    if(this.showCheckboxColumn)
      this.displayedColumns.unshift("select")
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: T): string {
    if (!row)
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }
}
