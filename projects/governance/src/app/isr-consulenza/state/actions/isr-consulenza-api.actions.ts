import { createAction, props } from "@ngrx/store";

export const setCurrentIsrId = createAction(
  "init-isr/setCurrentIsrId",
  props<{ payload: { fieldCurrentId: number } }>()
);

export const showMessage = createAction(
  "init-isr/showMessage",
  props<{ payload: { fieldShow: boolean } }>()
);

export const loadData = createAction(
  "init-isr/loadData",
  props<{ payload: {  fieldA: string, fieldB: string[], fieldC: number, fieldD: boolean  } }>()
);
