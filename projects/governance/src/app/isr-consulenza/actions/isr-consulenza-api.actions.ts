import { createAction, props } from "@ngrx/store";
import { IsrModel } from "../../shared/models/isr.model";

export const isrsLoaded = createAction(
  "[Isr Consulenza API] Isr list Loaded Success",
  props<{ isrs: IsrModel[] }>()
);

export const isrCreated = createAction(
  "[Isr Consulenza API] Isr Created",
  props<{ isr: IsrModel }>()
);

export const isrUpdated = createAction(
  "[Isr Consulenza API] Isr Updated",
  props<{ isr: IsrModel }>()
);

export const isrDeleted = createAction(
  "[Isr Consulenza API] Isr Deleted",
  props<{ isrId: number }>()
);
