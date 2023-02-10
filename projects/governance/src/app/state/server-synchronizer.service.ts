import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { createAction, props, Store } from '@ngrx/store';
import { Effect } from './models/effect.model';
import { catchError, map, of, Observable, tap } from 'rxjs';
import { SyncPayload } from './models/sync-payload.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServerSynchronizerService {

  readonly baseUrl = `${environment.apiUrl}/governance/sync/`;

  constructor(private readonly http: HttpClient,
    private readonly snackBar: MatSnackBar,
    private readonly store: Store) { }

  commandRequested<TRequest>(action: string, payload: TRequest): Observable<void> {
    return this.http.post<SyncPayload>(`${this.baseUrl}/${action}`, { payload }).pipe(
      map((syncPayload: SyncPayload) => this.sync(syncPayload)),
      catchError((err) => of().pipe(
        tap(() => {
          this.snackBar.open(err, "SERVER ERROR", { duration: 2000 })
        })
      ))
    );
  }

  sync(syncPayload: SyncPayload): void {
    if (syncPayload.errorSummary)
      this.snackBar.open(syncPayload.errorSummary, "REQUEST ERROR", { duration: 2000 })
    syncPayload.effects.forEach((effect: Effect) => {
      const action = createAction(effect.type, props<{ payload: unknown }>());
      this.store.dispatch(action({ payload: effect.payload }));
    })
  }
}
