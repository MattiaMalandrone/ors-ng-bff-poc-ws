import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { Column } from './model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MegaGridService } from './mega-grid.service';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'mega-grid',
  templateUrl: './mega-grid.component.html',
  styleUrls: ['./mega-grid.component.css'],
})
export class MegaGridComponent<T> implements OnInit, OnDestroy {
  @Input() columns: Column[] = [];
  @Input() data: T[] = [];
  @Input() length: number = 0;
  @Input() displayedColumns: string[] = [];
  @Input() showCheckboxColumn: boolean = false;

  private megaGridService: MegaGridService = inject(MegaGridService);

  isLoading$ = this.megaGridService.isLoading$;

  selection = new SelectionModel<T>(true, []);

  ngOnInit(): void {
    if (this.showCheckboxColumn) this.displayedColumns.unshift('select');
  }

  ngOnDestroy(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.megaGridService.filterSubject.next(filterValue);
  }

  changePage(event: PageEvent) {
    this.megaGridService.pageSubject.next(event);
  }

  changeSort(event: Sort) {
    this.megaGridService.sortSubject.next(event);
  }

  checkAll(event: MatCheckboxChange) {
    event ? this.toggleAllRows() : null;
    // emit...
  }

  checkSingle(event: MatCheckboxChange, row: T) {
    event ? this.selection.toggle(row) : null;
    // emit
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
    if (!row) return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }
}
