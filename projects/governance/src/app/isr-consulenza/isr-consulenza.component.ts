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
  currentIsrId$!: Observable<number | null>
  showMessage$!: Observable<boolean>
  messageCustom$!: Observable<string>

  constructor(private store: Store<IsrConsulenzaState>) {
    this.currentIsrId$ = this.store.select(isrConsulenzaFeature.selectCurrentIsrId);
    this.showMessage$ = this.store.select(isrConsulenzaFeature.selectShowMessage);
    this.messageCustom$ = this.store.select(isrConsulenzaFeature.selectSomethingCustom)
  }

  ngOnInit() {
    this.store.dispatch(
      IsrConsulenzaGuiActions.init({
        payload: { lockKey: 'isr_key', pagination: {}, sortable: {} },
      })
    );
  }

  // public dialog: MatDialog
  // openDialog() {
  //   this.store.dispatch(
  //     IsrConsulenzaGuiActions.openPublishDialog({
  //       isr: { id: 1, isPublished: true, name: 'Test' },
  //       message: 'Lorem ipsum',
  //     })
  //   );
  // }
}
