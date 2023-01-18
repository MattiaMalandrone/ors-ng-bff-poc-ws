import { createAction, props } from "@ngrx/store";
import { IsrModel } from "../../../shared/models/isr.model";

export interface DataGridPayload {
  data: any[]
  total: number,
  skip: number,
  take: number,
  sort: any[]
}

export const isrsLoaded = createAction(
  "isr-consulenza/loaded",
  props<{ payload: DataGridPayload }>()
);

// export const isrCreated = createAction(
//   "[Isr Consulenza API] Isr Created",
//   props<{ isr: IsrModel }>()
// );

// export const isrUpdated = createAction(
//   "[Isr Consulenza API] Isr Updated",
//   props<{ isr: IsrModel }>()
// );

// export const isrDeleted = createAction(
//   "[Isr Consulenza API] Isr Deleted",
//   props<{ isrId: number }>()
// );
