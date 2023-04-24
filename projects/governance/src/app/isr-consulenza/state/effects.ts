import { IsrLoadedDTO } from './../models/isr-loaded.model';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap } from "rxjs/operators";

import { IsrConsulenzaGuiActions } from './actions';
import { ServerSynchronizerService } from '../../state/server-synchronizer.service';
import { InitCommand } from "../../models/init.model";

@Injectable()
export class IsrConsulenzaEffects {

  initIsrConsulenza$ = createEffect(() => this.actions$.pipe(
    ofType(IsrConsulenzaGuiActions.init),
    exhaustMap(({ payload }) => this.server.commandRequested<InitCommand>(IsrConsulenzaGuiActions.init.type, payload))
  ), { dispatch: false });

  constructor(
    private readonly actions$: Actions,
    private readonly server: ServerSynchronizerService
  ) { }
}

/**
 * The dispatch: false flag is used to indicate to NgRx that this particular effect is not impacting the Store,
 * so it won't be dispatching a resulting Action.
 * use this flag whenever you are performing effects on actions that do not result in other actions.
 */
