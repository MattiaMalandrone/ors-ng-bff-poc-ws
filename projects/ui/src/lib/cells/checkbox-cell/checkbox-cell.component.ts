import { Component, Input } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';

// https://dev.to/angular/does-angular-support-generic-component-types-4fkm

@Component({
  selector: 'lib-checkbox-cell',
  templateUrl: './checkbox-cell.component.html',
  styleUrls: ['./checkbox-cell.component.css'],
})
export class CheckboxCellComponent<T> {
  @Input() data: T[] = []; // this.data
  @Input() numRows: number = 0; // this.data.length;
  @Input() numSelected: number = 0; // this.selection.selected.length
  @Input() selection!: SelectionModel<T>; // this.selection

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.numSelected;
    const numRows = this.numRows;
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
  checkboxLabel(row?: T, rowNumber: number = 0): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      rowNumber + 1
    }`;
  }
}
