import { Observable } from 'rxjs';
import { IsrConsulenzaState } from './state/state';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IsrConsulenzaGuiActions } from './state/actions';
import * as selectors from './state/selectors';

@Component({
  selector: 'app-isr-consulenza',
  templateUrl: './isr-consulenza.component.html',
  styleUrls: ['./isr-consulenza.component.css']
})
export class IsrConsulenzaComponent {

  state$ = this.store.select(selectors.selectIsrConsulenzaFeature);
  activeIsrId$ = this.store.select(selectors.selectActiveIsrId);

  activeId!: number | null

  // We can add the facade pattern to abstract the use of the store
  constructor(private store: Store<IsrConsulenzaState>) {
  }

  ngOnInit() {
    this.store.dispatch(IsrConsulenzaGuiActions.init({ payload: { lockKey: "isr_key", pagination: {}, sortable: {} } }));
  }
}
