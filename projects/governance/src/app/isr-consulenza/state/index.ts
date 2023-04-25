import * as fromIsrConsulenza from './reducer';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const isrConsulenzaFeature = "isrConsulenzaFeature";

export interface State {
  isrConsulenza: fromIsrConsulenza.IsrConsulenzaState
}

/**
 * Feature Selector
 */
export const selectIsrConsulenzaFeatureState = createFeatureSelector<State>(isrConsulenzaFeature);

/**
 * Isr Consulenza Selectors
 */
export const selectIsrConsulenzaState = createSelector(
  selectIsrConsulenzaFeatureState,
  (state: State) => state.isrConsulenza
);

export const selectAllIsrs = createSelector(
  selectIsrConsulenzaState,
  fromIsrConsulenza.selectAll
);

export const selectActiveIsr = createSelector(
  selectIsrConsulenzaState,
  fromIsrConsulenza.selectActiveIsr
);
