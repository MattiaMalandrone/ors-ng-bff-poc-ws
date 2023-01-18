import { createAction, props } from "@ngrx/store";
import { IsrLoadedDTO } from "../../models/isr-loaded.model";

export const isrsLoaded = createAction(
  "isr-consulenza/loaded",
  props<{ payload: IsrLoadedDTO }>()
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
