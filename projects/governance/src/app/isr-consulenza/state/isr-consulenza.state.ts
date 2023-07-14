import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { immerOn } from 'ngrx-immer/store'; // https://github.com/timdeschryver/ngrx-immer -> Tim Deschryver Core Member of NgRx (https://ngrx.io/about?group=Core)
import { IsrConsulenzaApiActions, IsrConsulenzaGuiActions } from './actions';

export interface IsrConsulenzaState {
  titlePage: string | null
  currentIsrId: number | null,
  showMessage: boolean | null,
  data: { fieldA: string | null, fieldB: string[] | null, fieldC: number | null, fieldD: boolean | null }
}

export const initialState: IsrConsulenzaState = {
  titlePage: null,
  currentIsrId: null,
  showMessage: null,
  data: {
    fieldA: null,
    fieldB: null,
    fieldC: null,
    fieldD: null
  }
};

const isrConsulenzaReducer = createReducer(
  initialState,
  immerOn(IsrConsulenzaGuiActions.updateTitlePage, (state, action) => {
    state.titlePage = action.payload.text
  }),
  immerOn(IsrConsulenzaApiActions.setCurrentIsrId, (state, action) => {
    state.currentIsrId = action.payload.fieldCurrentId
  }),
  immerOn(IsrConsulenzaApiActions.showMessage, (state, action) => {
    state.showMessage = action.payload.fieldShow
  }),
  immerOn(IsrConsulenzaApiActions.loadData, (state, action) => {
    state.data = action.payload
  })
);

export const isrConsulenzaFeature = createFeature({
  name: "isrConsulenzaFeature",
  reducer:  isrConsulenzaReducer,
  extraSelectors: ({ selectCurrentIsrId, selectShowMessage, selectData }) => ({
    selectSomethingCustom: createSelector(
      selectCurrentIsrId,
      selectShowMessage,
      selectData,
      (currentIsrId, showMessage, data) => `currentIsrId: ${currentIsrId} showing? ${showMessage} with message: ${data.fieldA} and a total: ${data.fieldC}`
    ),
    selectThreeFieldsAllInOnce: createSelector(
      selectCurrentIsrId,
      selectShowMessage,
      selectData,
      (currentIsrId, showMessage, data) => (currentIsrId ? { currentIsrId, showMessage, fieldA: data.fieldA } : null)
    )
  })
})
