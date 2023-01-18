import { IsrConsulenzaState } from './state/state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IsrConsulenzaGuiActions } from './state/actions';

@Component({
  selector: 'app-isr-consulenza',
  templateUrl: './isr-consulenza.component.html',
  styleUrls: ['./isr-consulenza.component.css']
})
export class IsrConsulenzaComponent {

  constructor(private store: Store<IsrConsulenzaState>) {
  }

  ngOnInit() {
    this.store.dispatch(IsrConsulenzaGuiActions.init({ lockKey: "isr_key", pagination: {}, sort: {} }));
  }
}
