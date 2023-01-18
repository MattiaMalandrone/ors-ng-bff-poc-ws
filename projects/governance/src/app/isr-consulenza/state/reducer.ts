import { createReducer, on } from "@ngrx/store";
import { IsrConsulenzaGuiActions, IsrConsulenzaApiActions } from "./actions";
import { initialState } from "./state";

export const isrConsulenzaReducer = createReducer(
  initialState,
  on(IsrConsulenzaGuiActions.selectIsr, (state, action) => {
    console.log(action);
    return {
      ...state,
      activeIsrId: action.payload.id
    };
  }),
  on(IsrConsulenzaApiActions.isrsLoaded, (state, action) => {
    console.log(action);
    return {
      ...state,
      data: action.payload.data,
      total: action.payload.total
    }
  }),
  // on(IsrConsulenzaGuiActions.clearSelectedIsr, IsrConsulenzaGuiActions.init, state => {
  //   return {
  //     ...state,
  //     activeIsrId: null
  //   };
  // }),
  // on(IsrConsulenzaApiActions.isrCreated, (state, action) => {
  //   return adapter.addOne(action.isr, {
  //     ...state,
  //     activeIsrId: null
  //   });
  // }),
  // on(IsrConsulenzaApiActions.isrUpdated, (state, action) => {
  //   return adapter.updateOne(
  //     { id: action.isr.id, changes: action.isr },
  //     {
  //       ...state,
  //       activeIsrId: null
  //     }
  //   );
  // }),
  // on(IsrConsulenzaApiActions.isrDeleted, (state, action) => {
  //   return adapter.removeOne(action.isrId, state);
  // })
);
