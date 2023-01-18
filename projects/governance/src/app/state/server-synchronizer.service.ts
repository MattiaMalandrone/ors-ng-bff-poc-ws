import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { createAction, props, Store } from '@ngrx/store';
import { Effect } from './models/effect.model';
import { catchError, map, of } from 'rxjs';
import { SyncPayload } from './models/sync-payload.model';

@Injectable({
  providedIn: 'root'
})
export class ServerSynchronizerService {

  readonly baseUrl = `${environment.apiUrl}/governance/sync/`;

  constructor(private readonly http: HttpClient, private readonly store: Store) { }

  commandRequested(action: string, payload: any) {
    return this.http.post<any>(`${this.baseUrl}/${action}`, { payload }).pipe(
      map((syncPayload: SyncPayload) => {
        this.sync(syncPayload);
      }),
      catchError(() => of())
    );
  }

  sync(syncPayload: SyncPayload): void {
    syncPayload.effects.forEach((effect: Effect) => {
      const action = createAction(effect.type, props<{ payload: any }>());
      this.store.dispatch(action({ payload: effect.payload }));
    })
  }
}
