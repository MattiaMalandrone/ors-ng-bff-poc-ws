import { ComponentType } from '@angular/cdk/overlay';
import { concat, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  handleDialog$<TComponent, TPayload>(
    customDialogComponent: ComponentType<TComponent>,
    payload: TPayload,
    openAction: TypedAction<string>,
    closeAction: TypedAction<string>
  ) {

    const dialogRef = this.dialog.open(customDialogComponent, {
      data: {
        ...payload,
      } as TPayload,
      hasBackdrop: true,
      width: '550px',
    });

    const open$ = dialogRef.afterOpened().pipe(map(() => openAction));
    const close$ = dialogRef.afterClosed().pipe(map(() => closeAction));
    return concat(open$, close$);
  }
}
