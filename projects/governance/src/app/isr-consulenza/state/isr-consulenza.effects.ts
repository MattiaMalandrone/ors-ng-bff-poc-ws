import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { InitCommand } from '../../models/init.model';
import { IsrConsulenzaGuiActions } from './actions';
import { ServerSynchronizerService } from '../../state/server-synchronizer.service';

@Injectable()
export class IsrConsulenzaEffects {

  initIsrConsulenza$ = createEffect(() => this.actions$.pipe(
    ofType(IsrConsulenzaGuiActions.init),
    switchMap(({ payload }) => this.server.commandRequested<InitCommand>(IsrConsulenzaGuiActions.init.type, payload))
  ), { dispatch: false });

  constructor(private readonly actions$: Actions, private readonly server: ServerSynchronizerService  ) { }
}
