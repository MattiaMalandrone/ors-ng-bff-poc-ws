import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IsrConsulenzaState } from "./state";

export const isrConsulenzaFeature = "isrConsulenzaFeature";

export const selectIsrConsulenzaFeature = createFeatureSelector<IsrConsulenzaState>(isrConsulenzaFeature);

export const selectActiveIsrId = createSelector(
  selectIsrConsulenzaFeature,
  (state: IsrConsulenzaState) => state.activeIsrId
)

// export const selectFeatureCount = createSelector(
//   selectIsrConsulenzaFeature,
//   (state: IsrConsulenzaState) => state.activeIsrId
// );

// export const selectActiveIsrEntity = createSelector(
//   selectEntities,
//   selectActiveIsrId,
//   (isrsEntities, activeIsrId) => activeIsrId ? isrsEntities[activeIsrId]! : null
// );

// export const selectActiveIsr = createSelector(
//   selectIsrConsulenzaFeature,
//   selectActiveIsrEntity
// );

// export const selectAllIsrs = createSelector(
//   selectIsrConsulenzaFeature,
//   selectAll
// );

