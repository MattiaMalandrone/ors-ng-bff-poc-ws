import {
  Database,
  QueryConstraint,
  limitToFirst,
  limitToLast,
  list,
  listVal,
  objectVal,
  orderByChild,
  query,
  ref,
  get,
  startAt,
  endAt,
} from '@angular/fire/database';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, catchError, combineLatest, from, map, of, switchMap, tap } from 'rxjs';

import { MegaGridService } from '@lib/ui';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Book, SwapiApi } from '../isr-consulenza/models/isr.model';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  private database: Database = inject(Database);

  /**
   * LESS DECLARATIVE
   */
  projectsResult$ = (paging: PageEvent, sort: Sort): Observable<SwapiApi> => {
    return this.http
      .get<SwapiApi>('https://swapi.dev/api/people', {
        params: new HttpParams()
          .set('sortOrder', sort.direction)
          .set('offset', paging.pageIndex.toString())
          .set('limit', paging.pageSize.toString()),
      })
      .pipe(
        map((projectResult) => {
          this.megaGridService.isLoading.next(false);
          return {
            results: projectResult.results,
            count: projectResult.count,
          };
        })
      );
  };

  /**
   * MORE DECLARATIVE
   */
  // projectsResult2$ = this.http
  //   .get<SwapiApi>('https://swapi.dev/api/people', {
  //     params: new HttpParams()
  //       .set('sortOrder', this.megaGridService.sortSubject.value.direction)
  //       .set('offset', this.megaGridService.pageSubject.value.pageIndex.toString())
  //       .set('limit', this.megaGridService.pageSubject.value.pageSize.toString()),
  //   })
  //   .pipe(
  //     map((projectResult) => {
  //       this.megaGridService.isLoading.next(false);
  //       return {
  //         results: projectResult.results,
  //         count: projectResult.count,
  //       };
  //     })
  //   );

  // projects$ = combineLatest([
  //   this.megaGridService.pageAction$,
  //   this.megaGridService.sortAction$,
  //   this.megaGridService.filterAction$,
  // ]).pipe(
  //   tap(() => this.megaGridService.isLoading.next(true)),
  //   switchMap(([ page, sort, filter ]) => this.projectsResult$(page, sort)),
  //   catchError((err) => {
  //     this.megaGridService.isLoading.next(false);
  //     // this.errorMessageSubject.next(err);
  //     return EMPTY;
  //   })
  // );

  // projects2$ = combineLatest([
  //   this.megaGridService.pageAction$,
  //   this.megaGridService.sortAction$,
  //   this.megaGridService.filterAction$,
  // ]).pipe(
  //   tap(() => this.megaGridService.isLoading.next(true)),
  //   switchMap(() => this.projectsResult2$),
  //   catchError((err) => {
  //     this.megaGridService.isLoading.next(false);
  //     // this.errorMessageSubject.next(err);
  //     return EMPTY;
  //   })
  // );

  constructor(
    private http: HttpClient,
    private megaGridService: MegaGridService
  ) {}
}
