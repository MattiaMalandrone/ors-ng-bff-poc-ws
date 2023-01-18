import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IsrConsulenzaState, selectAll, selectEntities } from "./state";

export const isrConsulenzaFeature = "isrConsulenzaFeature";

const selectIsrConsulenzaFeature = createFeatureSelector<IsrConsulenzaState>(isrConsulenzaFeature);

export const selectActiveIsrId = (state: IsrConsulenzaState) => state.activeIsrId;

export const selectActiveIsrEntity = createSelector(
  selectEntities,
  selectActiveIsrId,
  (isrsEntities, activeIsrId) => activeIsrId ? isrsEntities[activeIsrId]! : null
);

export const selectActiveIsr = createSelector(
  selectIsrConsulenzaFeature,
  selectActiveIsrEntity
);

export const selectAllIsrs = createSelector(
  selectIsrConsulenzaFeature,
  selectAll
);

