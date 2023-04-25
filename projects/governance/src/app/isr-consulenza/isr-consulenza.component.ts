import { Component, OnInit } from '@angular/core';
import { IsrConsulenzaState, selectActiveIsr } from './state/reducer';
import { Observable, concat, map, merge } from 'rxjs';

import { IsrConsulenzaGuiActions } from './state/actions';
import { IsrModel } from './models/isr.model';
import { MatDialog } from '@angular/material/dialog';
import { PublishDialogComponent } from 'projects/ui/src/lib/publish-dialog/publish-dialog.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-isr-consulenza',
  templateUrl: './isr-consulenza.component.html',
  styleUrls: ['./isr-consulenza.component.css'],
})
export class IsrConsulenzaComponent implements OnInit {
  currentIsr$: Observable<IsrModel | null>;

  // We can add the facade pattern to abstract the use of the store
  constructor(
    private store: Store<IsrConsulenzaState>,
    public dialog: MatDialog
  ) {
    this.currentIsr$ = this.store.select(selectActiveIsr);
  }

  ngOnInit() {
    this.store.dispatch(
      IsrConsulenzaGuiActions.init({
        payload: { lockKey: 'isr_key', pagination: {}, sortable: {} },
      })
    );
  }

  openDialog() {
    this.store.dispatch(
      IsrConsulenzaGuiActions.openPublishDialog({
        isr: { id: 1, isPublished: true, name: 'Test' },
        message: 'Lorem ipsum',
      })
    );
    // const dialogRef = this.dialog.open(PublishDialogComponent, {
    //   data: {},
    //   hasBackdrop: false,
    //   width: '250px',
    // });
    // const open = dialogRef.afterOpened().pipe(
    //   map(() =>
    //     IsrConsulenzaGuiActions.publishDialogOpened({
    //       message:
    //         "ACTION di APERTURA che vada ad aggiornare lo store con l'informazione che la dialog è stata APERTA",
    //     })
    //   )
    // );
    // const close = dialogRef.afterClosed().pipe(
    //   map(() =>
    //     IsrConsulenzaGuiActions.publishDialogClosed({
    //       message:
    //         "ACTION di CHIUSURA che vada ad aggiornare lo store con l'informazione che la dialog è stata CHIUSA",
    //     })
    //   )
    // );
    // concat(open, close).subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete'),
    // });
  }
}
