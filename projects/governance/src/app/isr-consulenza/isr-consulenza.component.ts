import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IsrConsulenzaState, isrConsulenzaFeature } from './state/isr-consulenza.state';
import { IsrConsulenzaGuiActions } from './state/actions';

@Component({
  selector: 'app-isr-consulenza',
  templateUrl: './isr-consulenza.component.html',
  styleUrls: ['./isr-consulenza.component.css'],
})
export class IsrConsulenzaComponent implements OnInit {
  title$ = this.store.select(isrConsulenzaFeature.selectTitlePage);

  currentIsrId$ = this.store.select(isrConsulenzaFeature.selectCurrentIsrId);
  showMessage$ = this.store.select(isrConsulenzaFeature.selectShowMessage);
  messageCustom$ = this.store.select(isrConsulenzaFeature.selectSomethingCustom);

  vm$ = this.store.select(isrConsulenzaFeature.selectThreeFieldsAllInOnce)

  constructor(private store: Store<IsrConsulenzaState>) { }

  ngOnInit(): void {
    this.store.dispatch(IsrConsulenzaGuiActions.init({ payload: { lockKey: 'isr_key', pagination: {}, sortable: {} }}));
  }

  updateTitle(): void {
    this.store.dispatch(IsrConsulenzaGuiActions.updateTitlePage({payload: { text: "Lorem ipsum dolor sit amet" }}))
  }
}
