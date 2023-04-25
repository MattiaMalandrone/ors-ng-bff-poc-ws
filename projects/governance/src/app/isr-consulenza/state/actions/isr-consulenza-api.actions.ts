import { createAction, props } from "@ngrx/store";

import { IsrModel } from "../../models/isr.model";
import { IsrsLoadedDTO } from "../../models/isrs-loaded.model";

export const isrsLoaded = createAction(
  "isr-consulenza/loaded",
  props<{ isrs: IsrsLoadedDTO }>()
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
