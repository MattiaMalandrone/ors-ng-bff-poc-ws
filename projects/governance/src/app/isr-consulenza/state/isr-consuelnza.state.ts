import { IsrConsulenzaApiActions, IsrConsulenzaGuiActions } from './actions';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

export interface IsrConsulenzaState {
  currentIsrId: number | null,
  showMessage: boolean,
  data: { fieldA: string | null, fieldB: string[], fieldC: number, fieldD: boolean | null }
}

export const initialState: IsrConsulenzaState = {
  currentIsrId: null,
  showMessage: false,
  data: {
    fieldA: null,
    fieldB: [],
    fieldC: 0,
    fieldD: null
  }
};

const isrConsulenzaReducer = createReducer(
  initialState,
  on(IsrConsulenzaApiActions.setCurrentIsrId, (state, action) => {
    return {
      ...state,
      currentIsrId: action.payload.fieldCurrentId
    };
  }),
  on(IsrConsulenzaApiActions.showMessage, (state, action) => {
    return {
      ...state,
      showMessage: action.payload.fieldShow
    };
  }),
  on(IsrConsulenzaApiActions.loadData, (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  }),

  // on(IsrConsulenzaGuiActions.publishDialogOpened, (state, action) => {
  //   return {
  //     ...state,
  //     dialogOpened: true
  //   };
  // }),
  // on(IsrConsulenzaGuiActions.publishDialogClosed, (state, action) => {
  //   return {
  //     ...state,
  //     dialogOpened: false
  //   };
  // })
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
    )
  })
})
