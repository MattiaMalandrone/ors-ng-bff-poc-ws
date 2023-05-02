import { MegaGridService } from './../../../../../ui/src/lib/mega-grid/mega-grid.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, SortDirection } from '@angular/material/sort';
import {
  Observable,
  catchError,
  combineLatest,
  map,
  switchMap
} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ColumnType } from "@lib/enum/column-type";
import { Column } from "@lib/ui/mega-grid/types";

@Component({
  selector: 'app-isr-consulenza-grid',
  templateUrl: './isr-consulenza-grid.component.html',
  styleUrls: ['./isr-consulenza-grid.component.css'],
})
export class IsrConsulenzaGridComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'created',
    'state',
    'number',
    'title',
  ];
  exampleDatabase!: ExampleHttpDatabase | null;
  data: GithubIssue[] = [];
  selection = new SelectionModel<GithubIssue>(true, []);

  columns: Column[] = [
    {
      name: 'number',
      type: ColumnType.Number,
      label: 'No.',
    },
    {
      name: 'title',
      label: 'Title',
      type: ColumnType.String,
    },
    {
      name: 'state',
      label: 'State',
      type: ColumnType.String,
    },
    {
      name: 'created',
      label: 'Created',
      type: ColumnType.Date,
    },
  ];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _httpClient: HttpClient, private megaGridService: MegaGridService) {}

  data$ = combineLatest([
    this.megaGridService.pageAction$,
    this.megaGridService.sortAction$,
    this.megaGridService.filterAction$,
  ])
  .pipe(
    switchMap(([ pageAction$, sortAction$, filterAction$ ]) => {
      // so we can pass pagination, sorting and filtering params to http call
      return this.exampleDatabase!.getRepoIssues();
    })
  )

  ngAfterViewInit() {
    this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

        this.exampleDatabase!.getRepoIssues().pipe(
            map((data) => {
              if (data === null) return [];
              this.resultsLength = data.total_count;
              return data.items;
            })
          ).subscribe((data) => (this.data = data));
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
  checkboxLabel(row?: GithubIssue): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.number + 1
    }`;
  }

  publish(): void {}

  edit(i: number, row: any): void {}

  view(i: number): void {}

  delete(i: number): void {}
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: Date;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) {}

  getRepoIssues(): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&page=1`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}
