import { Injectable, inject } from '@angular/core';
import { DataSnapshot, Database, QueryConstraint, get, limitToFirst, objectVal, orderByChild, query, ref, startAt,  } from '@angular/fire/database';
import { MegaGridService } from '@lib/ui';
import { ActionsGrid } from 'projects/ui/src/lib/mega-grid/model/actions-grid';
import { combineLatest, distinctUntilChanged, from, map, shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private database: Database = inject(Database);

  totalBooks$ = from(get(query(ref(this.database, 'Catalogo'))))
                .pipe(map((snapshot) => snapshot.size))

  books$ = this.megaGridService.actions$.pipe(
    switchMap((actionsGrid: ActionsGrid) => {
      console.log(actionsGrid);
      const queryConstraints: QueryConstraint[] = [];

      queryConstraints.push(orderByChild(actionsGrid.sort.active || "Numero"));
      queryConstraints.push(startAt(actionsGrid.page.pageIndex * actionsGrid.page.pageSize + 1));
      queryConstraints.push(limitToFirst(actionsGrid.page.pageSize));

      return objectVal<{}>(query(ref(this.database, 'Catalogo'), ...queryConstraints))
      .pipe(map(result => Object.values(result)));
    })
  )

  constructor(private megaGridService: MegaGridService) {}
}
