// https://ngrx.io/guide/entity/adapter

import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { IsrModel } from "../../shared/models/isr.model";

export interface IsrConsulenzaState extends EntityState<IsrModel> {
  activeIsrId: string | null;
}

export const adapter = createEntityAdapter<IsrModel>();

/*
*** Entity Selectors ***
  The getSelectors method returned by the created entity adapter provides functions for selecting information from the entity.
  The getSelectors method takes a selector function as its only argument to select the piece of state for a defined entity.
*/
export const { selectAll, selectEntities } = adapter.getSelectors();

export const initialState: IsrConsulenzaState = adapter.getInitialState({
  activeIsrId: null
});
