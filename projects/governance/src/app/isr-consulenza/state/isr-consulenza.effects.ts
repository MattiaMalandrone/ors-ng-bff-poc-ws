import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, OnDestroy, inject } from '@angular/core';
import { exhaustMap, switchMap, takeUntil } from 'rxjs/operators';

import { DialogService } from '../../shared/dialog.service';
import { InitCommand } from '../../models/init.model';
import { IsrConsulenzaGuiActions } from './actions';
import { PublishDialogComponent } from '@lib/ui';
import { ServerSynchronizerService } from '../../state/server-synchronizer.service';
import { Subject } from 'rxjs';

@Injectable()
export class IsrConsulenzaEffects implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  dialogService: DialogService;

  initIsrConsulenza$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(IsrConsulenzaGuiActions.init),
        takeUntil(this.destroy$),
        switchMap(({ payload }) =>
          this.server.commandRequested<InitCommand>(
            IsrConsulenzaGuiActions.init.type,
            payload
          )
        )
      ),
    { dispatch: false }
  );

  openPublishDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IsrConsulenzaGuiActions.openPublishDialog),
      takeUntil(this.destroy$),
      exhaustMap(({ message }) => {
        return this.dialogService.handleDialog$<PublishDialogComponent, string>(
          PublishDialogComponent,
          message || '',
          IsrConsulenzaGuiActions.publishDialogOpened(),
          IsrConsulenzaGuiActions.publishDialogClosed()
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly server: ServerSynchronizerService
  ) {
    this.dialogService = inject(DialogService);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
