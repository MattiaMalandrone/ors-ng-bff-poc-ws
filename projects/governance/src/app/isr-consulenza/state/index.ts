import * as fromRoot from '../../state/state';
import * as fromIsrConsulenza from './reducer';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const isrConsulenzaFeature = "isrConsulenzaFeature";

// Extends the app state to include the IsrConsulenzaState feature.
// This is required because IsrConsulenzaState are lazy loaded.
// So the reference to IsrConsulenzaState cannot be added to app.state.ts directly.
export interface State extends fromRoot.AppState {
  products: fromIsrConsulenza.IsrConsulenzaState;
}

/**
 * Feature Selector
 */
export const selectIsrConsulenzaFeatureState = createFeatureSelector<fromIsrConsulenza.IsrConsulenzaState>(isrConsulenzaFeature);

/**
 * Isr Consulenza Selectors
 */
export const selectLockItem = createSelector(
  selectIsrConsulenzaFeatureState,
  state => state.lockItem
);

// export const selectIsrConsulenzaState = createSelector(
//   selectIsrConsulenzaFeatureState,
//   (state: State) => state.isrConsulenza
// );

// export const selectAllIsrs = createSelector(
//   selectIsrConsulenzaState,
//   fromIsrConsulenza.selectAll
// );

// export const selectActiveIsr = createSelector(
//   selectIsrConsulenzaState,
//   fromIsrConsulenza.selectActiveIsr
// );

