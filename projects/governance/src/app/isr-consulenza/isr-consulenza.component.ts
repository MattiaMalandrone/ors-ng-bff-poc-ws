import { Component, OnInit } from '@angular/core';
import { IsrConsulenzaState } from './state/isr-consuelnza.state';
import { Observable, concat, from, map, merge } from 'rxjs';

import { IsrConsulenzaGuiActions } from './state/actions';
import { IsrModel } from './models/isr.model';
import { MatDialog } from '@angular/material/dialog';
import { PublishDialogComponent } from 'projects/ui/src/lib/publish-dialog/publish-dialog.component';
import { Store } from '@ngrx/store';
import { isrConsulenzaFeature } from './state/isr-consuelnza.state';

@Component({
  selector: 'app-isr-consulenza',
  templateUrl: './isr-consulenza.component.html',
  styleUrls: ['./isr-consulenza.component.css'],
})
export class IsrConsulenzaComponent {
  lockItem$!: Observable<string>
  lockItemMessageWithOtherText$!: Observable<string>

  constructor(
    private store: Store<IsrConsulenzaState>,
    public dialog: MatDialog
  ) {
    this.lockItem$ = this.store.select(isrConsulenzaFeature.selectLockItem);
    this.lockItemMessageWithOtherText$ = this.store.select(isrConsulenzaFeature.selectMessageWithOtherText);
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
  }
}
