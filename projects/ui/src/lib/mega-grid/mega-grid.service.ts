import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MegaGridService {

  pageSubject = new BehaviorSubject<PageEvent>({ pageSize: 0, pageIndex: 0, length: 0 })
  pageAction$ = this.pageSubject.asObservable();

  sortSubject = new BehaviorSubject<Sort>({ active: "", direction: "" })
  sortAction$ = this.sortSubject.asObservable();

  filterSubject = new BehaviorSubject<string>("");
  filterAction$ = this.filterSubject.asObservable();

  constructor() { }

}
