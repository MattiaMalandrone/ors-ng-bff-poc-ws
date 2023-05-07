import { Injectable, inject } from '@angular/core';
import { DataSnapshot, Database, QueryConstraint, get, limitToFirst, objectVal, orderByChild, query, ref, startAt,  } from '@angular/fire/database';
import { MegaGridService } from '@lib/ui';
import { combineLatest, from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private database: Database = inject(Database);

  totalBooks$ = from(get(query(ref(this.database, 'Catalogo'))))
                .pipe(map((snapshot) => snapshot.size))

  books$ = combineLatest([
    this.megaGridService.pageAction$,
    this.megaGridService.sortAction$,
    this.megaGridService.filterAction$,
  ]).pipe(
    switchMap(([ page, sort, filter ]) => {
      const queryConstraints: QueryConstraint[] = [];

      queryConstraints.push(orderByChild(sort.active || "Numero"));
      queryConstraints.push(startAt(page.pageIndex * page.pageSize + 1));
      queryConstraints.push(limitToFirst(page.pageSize));

      return objectVal<{}>(query(ref(this.database, 'Catalogo'), ...queryConstraints))
      .pipe(map(result => Object.values(result)));
    })
  )

  constructor(private megaGridService: MegaGridService) {}
}
