import { createAction, props } from "@ngrx/store";
import { IsrRequiredProps } from "../../../shared/models/isr.model";

export const init = createAction(
  "isr-consulenza/init",
  props<{ pagination: any, sort: any, lockKey: string }>()
);

export const selectIsr = createAction(
  "isr-consulenza/setCurrentIsrId",
  props<{ id: string }>()
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
