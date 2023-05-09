import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';

import { Column } from './model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MegaGridService } from './mega-grid.service';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Sort } from '@angular/material/sort';
import { map } from 'rxjs';
import { ActionsGrid } from './model/actions-grid';
import { Command } from './model/command.model';
import { RowCommand } from './model/row-command.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mega-grid',
  templateUrl: './mega-grid.component.html',
  styleUrls: ['./mega-grid.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MegaGridComponent<T> implements OnInit, OnDestroy {
  @Input() columns: Column[] = [];
  @Input() data: T[] = [];
  @Input() length: number | null = 0;
  @Input() displayedColumns: string[] = [];
  @Input() expandableRows: boolean = false;
  @Input() showCheckboxColumn: boolean = false;
  @Input() rowCommands: RowCommand[] = []

  @Output() checkAllEvent = new EventEmitter<MatCheckboxChange>();
  @Output() checkSingleEvent = new EventEmitter<MatCheckboxChange>();
  @Output() commandEvent = new EventEmitter<Command>();

  private mgSvc: MegaGridService = inject(MegaGridService);

  isLoading$ = this.mgSvc.isLoading$;

  pageIndex$ = this.mgSvc.actions$.pipe(map((actionsGrid: ActionsGrid) => actionsGrid.page.pageIndex))

  selection = new SelectionModel<T>(true, []);

  expandedElement!: T | null;

  ngOnInit(): void {
    if (this.showCheckboxColumn) this.displayedColumns.unshift('select');
    if (this.expandableRows) this.displayedColumns.unshift('expand');
  }

  ngOnDestroy(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.mgSvc.actionsSubject.next({ ...this.mgSvc.actionsSubject.value, filter: filterValue });
  }

  changePage(event: PageEvent) {
    this.mgSvc.actionsSubject.next({ ...this.mgSvc.actionsSubject.value, page: event });
  }

  changeSort(event: Sort) {
    // Changing sort state implifies the returns to the first page for convenience
    this.mgSvc.actionsSubject.next({
      ...this.mgSvc.actionsSubject.value,
      sort: event,
      page: { pageIndex: 0, pageSize: 10, length: 0 }
    });
  }

  checkAll(event: MatCheckboxChange) {
    event ? this.toggleAllRows() : null;
    this.checkAllEvent.emit(event);
  }

  checkSingle(event: MatCheckboxChange, row: T) {
    event ? this.selection.toggle(row) : null;
    this.checkSingleEvent.emit(event);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  private toggleAllRows() {
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

  command(commandType: number, payloadRow: T): void {
    this.commandEvent.emit({ commandType, payloadRow })
  }
}
