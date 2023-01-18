import { createAction, props } from "@ngrx/store";
import { InitCommand } from "../../../models/init.model";

export const init = createAction(
  "isr-consulenza/init",
  props<{ payload: InitCommand }>()
);

export const selectIsr = createAction(
  "isr-consulenza/setCurrentIsrId",
  props<{ payload: { id: number } }>()
);

// export const clearSelectedIsr = createAction(
//   "[Isr Consulenza Page] Clear Selected Isr"
// );

// export const createIsr = createAction(
//   "[Isr Consulenza Page] Create Isr",
//   props<{ isr: IsrRequiredProps }>()
// );

// export const updateIsr = createAction(
//   "[Isr Consulenza Page] Update Isr",
//   props<{ isrId: number; changes: IsrRequiredProps }>()
// );

// export const deleteIsr = createAction(
//   "[Isr Consulenza Page] Delete Isr",
//   props<{ isrId: number }>()
// );
