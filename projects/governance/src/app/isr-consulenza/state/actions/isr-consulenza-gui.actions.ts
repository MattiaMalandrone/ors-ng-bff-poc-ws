import { IsrModel } from '../../models/isr.model';
import { createAction, props } from '@ngrx/store';

import { InitCommand } from '../../../models/init.model';

export const init = createAction(
  'isr-consulenza/init',
  props<{ payload: InitCommand }>()
);


/*
 * Dialog ISR Actions
 */

//dialog.actions.ts
// export const openPublishDialog = createAction(
//   'isr-consulenza/publish/open',
//   props<{ isr: IsrModel; message?: string }>()
// );

// const dialogSaved = createAction(
//   '[Home Page] Dialog Saved',
//   props<{data: DataToSave}>()
// )

// export const publishDialogOpened = createAction(
//   'isr-consulenza/publish/opened'
// );

// export const publishDialogClosed = createAction(
//   'isr-consulenza/publish/closed'
// );
