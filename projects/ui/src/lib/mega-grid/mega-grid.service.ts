import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root',
})
export class MegaGridService {
  isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  pageSubject = new BehaviorSubject<PageEvent>({
    pageSize: 10,
    pageIndex: 0,
    length: 0,
  });
  pageAction$ = this.pageSubject.asObservable();

  sortSubject = new BehaviorSubject<Sort>({ active: '', direction: '' });
  sortAction$ = this.sortSubject.asObservable();

  filterSubject = new BehaviorSubject<string>('');
  filterAction$ = this.filterSubject.asObservable();

  constructor() {}
}
