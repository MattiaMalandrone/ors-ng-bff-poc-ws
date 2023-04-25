import { IsrModel, IsrRequiredProps } from '../../models/isr.model';
import { createAction, props } from '@ngrx/store';

import { InitCommand } from '../../../models/init.model';

/**
 * ISR GUI actions
 */
export const init = createAction(
  'isr-consulenza/init',
  props<{ payload: InitCommand }>()
);

export const selectIsr = createAction(
  'isr-consulenza/setCurrentIsrId',
  props<{ isrId: number }>()
);

export const clearSelectedIsr = createAction(
  '[Isr Consulenza Page] Clear Selected Isr'
);

export const createIsr = createAction(
  '[Isr Consulenza Page] Create Isr',
  props<{ isr: IsrRequiredProps }>()
);

export const updateIsr = createAction(
  '[Isr Consulenza Page] Update Isr',
  props<{ isrId: number; changes: IsrRequiredProps }>()
);

export const deleteIsr = createAction(
  '[Isr Consulenza Page] Delete Isr',
  props<{ isrId: number }>()
);

/**
 * Dialog ISR Actions
 */

//dialog.actions.ts
export const openPublishDialog = createAction(
  'isr-consulenza/publish/open',
  props<{ isr: IsrModel; message?: string }>()
);

// const dialogSaved = createAction(
//   '[Home Page] Dialog Saved',
//   props<{data: DataToSave}>()
// )

export const publishDialogOpened = createAction(
  'isr-consulenza/publish/opened'
);

export const publishDialogClosed = createAction(
  'isr-consulenza/publish/closed'
);
