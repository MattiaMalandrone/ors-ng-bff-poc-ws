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
export class IsrConsulenzaComponent {
  currentIsr$: Observable<IsrModel | null>;

  // We can add the facade pattern to abstract the use of the store
  constructor(
    private store: Store<IsrConsulenzaState>,
    public dialog: MatDialog
  ) {
    this.currentIsr$ = this.store.select(selectActiveIsr);
  }

  // ngOnInit() {
  //   this.store.dispatch(
  //     IsrConsulenzaGuiActions.init({
  //       payload: { lockKey: 'isr_key', pagination: {}, sortable: {} },
  //     })
  //   );
  // }

  openDialog() {
    this.store.dispatch(
      IsrConsulenzaGuiActions.openPublishDialog({
        isr: { id: 1, isPublished: true, name: 'Test' },
        message: 'Lorem ipsum',
      })
    );
  }
}
