import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, SortDirection } from '@angular/material/sort';
import {
  Observable,
  catchError,
  map,
  merge,
  of,
  startWith,
  switchMap,
} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-isr-consulenza-grid',
  templateUrl: './isr-consulenza-grid.component.html',
  styleUrls: ['./isr-consulenza-grid.component.css'],
})
export class IsrConsulenzaGridComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'created',
    'state',
    'number',
    'title',
    'actions',
  ];
  exampleDatabase!: ExampleHttpDatabase | null;
  data: GithubIssue[] = [];
  selection = new SelectionModel<GithubIssue>(true, []);

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _httpClient: HttpClient) {}

  columns = [
    {
      columnDef: 'number',
      header: 'No.',
      cell: (element: GithubIssue) => `${element.number}`,
    },
    {
      columnDef: 'title',
      header: 'Title',
      cell: (element: GithubIssue) => `${element.title}`,
    },
    {
      columnDef: 'state',
      header: 'State',
      cell: (element: GithubIssue) => `${element.state}`,
    },
    {
      columnDef: 'created_at',
      header: 'Created At',
      cell: (element: GithubIssue) => `${element.created_at}`,
    },
  ];

  ngAfterViewInit() {
    this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex
          ).pipe(catchError(() => of(null)));
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.total_count;
          return data.items;
        })
      )
      .subscribe((data) => (this.data = data));
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

  edit(
    i: number,
    id: number,
    title: string,
    state: string,
    url: string,
    created_at: string,
    updated_at: string
  ): void {}

  view(
    i: number,
    id: number,
    title: string,
    state: string,
    url: string
  ): void {}

  delete(
    i: number,
    id: number,
    title: string,
    state: string,
    url: string
  ): void {}
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) {}

  getRepoIssues(
    sort: string,
    order: SortDirection,
    page: number
  ): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
      page + 1
    }`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}
