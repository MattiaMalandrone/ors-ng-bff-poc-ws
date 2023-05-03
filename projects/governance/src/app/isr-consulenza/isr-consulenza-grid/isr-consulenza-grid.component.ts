import {
  EMPTY,
  catchError,
  combineLatest,
  switchMap,
  tap
} from 'rxjs';

import { Column } from '@lib/ui/mega-grid/types';
import { ColumnType } from '@lib/enum/column-type';
import { Component } from '@angular/core';
import { FakeService } from '../../services/fake.service';
import { MegaGridService } from '@lib/ui';
import { SelectionModel } from '@angular/cdk/collections';
import { SwapiPerson } from '../models/isr.model';

@Component({
  selector: 'app-isr-consulenza-grid',
  templateUrl: './isr-consulenza-grid.component.html',
  styleUrls: ['./isr-consulenza-grid.component.css'],
})
export class IsrConsulenzaGridComponent {
  displayedColumns: string[] = ['name', 'gender', 'birth_year', 'height'];
  data: SwapiPerson[] = [];
  selection = new SelectionModel<SwapiPerson>(true, []);

  columns: Column[] = [
    {
      name: 'name',
      label: 'Name',
      type: ColumnType.String,
    },
    {
      name: 'birth_year',
      type: ColumnType.String,
      label: 'Birth Year',
    },

    {
      name: 'height',
      label: 'Height',
      type: ColumnType.String,
    },
    {
      name: 'gender',
      label: 'Gender',
      type: ColumnType.String,
    },
  ];

  resultsLength = 0;
  isLoadingResults = true;

  books$ = this.fakeService.books$();

  projects$ = combineLatest([
    this.megaGridService.pageAction$,
    this.megaGridService.sortAction$,
    this.megaGridService.filterAction$,
  ]).pipe(
    tap(() => this.megaGridService.isLoading.next(true)),
    switchMap(([paging, sort]) => {
      this.megaGridService.isLoading.next(false);
      return this.fakeService.projectsResult$(paging, sort);
    }),
    catchError((err) => {
      this.megaGridService.isLoading.next(false);
      // this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );


  constructor(
    private fakeService: FakeService,
    private megaGridService: MegaGridService
  ) {}

  publish(): void {}

  edit(i: number, row: any): void {}

  view(i: number): void {}

  delete(i: number): void {}
}
