import { BehaviorSubject, combineLatest, map, share } from 'rxjs';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { ActionsGrid } from './model/actions-grid';

@Injectable({
  providedIn: 'root',
})
export class MegaGridService {
  isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  actionsSubject = new BehaviorSubject<ActionsGrid>({
    page: {
      pageSize: 10,
      pageIndex: 0,
      length: 0,
    },
    sort: {
      active: '',
      direction: ''
    },
    filter: ""
  })

  actions$ = this.actionsSubject.asObservable().pipe(share());

  constructor() {}
}
