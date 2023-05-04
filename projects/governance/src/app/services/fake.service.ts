import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Database, list, listVal, objectVal, orderByChild, query, ref } from '@angular/fire/database';
import { traceUntilFirst } from '@angular/fire/performance';

import { Injectable, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { SwapiApi } from '../isr-consulenza/models/isr.model';
import { MegaGridService } from '@lib/ui';

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
  projectsResult2$ = this.http.get<SwapiApi>('https://swapi.dev/api/people', {
    params: new HttpParams()
      .set('sortOrder', this.megaGridService.sortSubject.value.direction)
      .set('offset', this.megaGridService.pageSubject.value.pageIndex.toString())
      .set('limit', this.megaGridService.pageSubject.value.pageSize.toString()),
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

  // books$ = (paging: PageEvent, sort: Sort, filter: string) => {
  //   const topUserPostsRef = query(ref(this.database, 'books'), orderByChild('starCount'));
  //   // return objectVal(ref(this.database, "books"))
  //   return objectVal(topUserPostsRef);
  // };

  books$ = () => {
    const topUserPostsRef = query(ref(this.database, 'books'), orderByChild('Autore'));
    return objectVal(topUserPostsRef);
  };

  constructor(private http: HttpClient, private megaGridService: MegaGridService) {
  }
}
