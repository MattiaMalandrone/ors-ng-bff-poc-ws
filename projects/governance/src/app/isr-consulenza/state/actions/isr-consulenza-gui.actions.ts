import { createAction, props } from '@ngrx/store';
import { InitCommand } from '../../../models/init.model';

export const init = createAction(
  'isr-consulenza/init',
  props<{ payload: InitCommand }>()
);

export const updateTitlePage = createAction(
  'isr-consulenza/updateTitlePage',
  props<{ payload: { text: string } }>()
);
