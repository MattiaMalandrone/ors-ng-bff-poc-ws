import { createAction, props } from "@ngrx/store";
import { IsrRequiredProps } from "../../shared/models/isr.model";

export const enter = createAction("[Isr Consulenza GUI] Enter");

export const selectIsr = createAction(
  "[Isr Consulenza Page] Select Isr",
  props<{ isrId: string }>()
);

export const clearSelectedIsr = createAction(
  "[Isr Consulenza Page] Clear Selected Isr"
);

export const createIsr = createAction(
  "[Isr Consulenza Page] Create Isr",
  props<{ isr: IsrRequiredProps }>()
);

export const updateIsr = createAction(
  "[Isr Consulenza Page] Update Isr",
  props<{ isrId: number; changes: IsrRequiredProps }>()
);

export const deleteIsr = createAction(
  "[Isr Consulenza Page] Delete Isr",
  props<{ isrId: number }>()
);
