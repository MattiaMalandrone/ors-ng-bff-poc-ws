import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { SwapiApi } from '../isr-consulenza/models/isr.model';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
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
          const results = projectResult.results.slice(
            paging.pageIndex,
            paging.pageSize
          );
          return {
            results,
            count: projectResult.count,
          };
        })
      );
  };

  constructor(private http: HttpClient) {}
}
