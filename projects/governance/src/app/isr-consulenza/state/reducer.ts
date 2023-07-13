import { IsrConsulenzaApiActions, IsrConsulenzaGuiActions } from './actions';
import { createReducer, on } from '@ngrx/store';

import { IsrModel } from '../models/isr.model';

export interface IsrConsulenzaState {
  collection: IsrModel[];
  activeIsrId: number | null;
  //---------------------------------
  gridConfiguration: any;
  sort: any[];
  sortable: any;
  pagination: any;
  publishCalendarToggle: boolean;
  name: string;
  isOnlyView: boolean;
  isrDialogVisible: boolean;
  profiles: any[];
  validationError: boolean;

  lockItem: string
}

export const initialState: IsrConsulenzaState = {
  collection: [],
  activeIsrId: 0,
  // --------------------------------------------
  gridConfiguration: undefined,
  sort: [],
  sortable: undefined,
  pagination: undefined,
  publishCalendarToggle: false,
  name: '',
  isOnlyView: false,
  isrDialogVisible: false,
  profiles: [],
  validationError: false,

  lockItem: ""
};

export const isrConsulenzaReducer = createReducer(
  initialState,
  on(IsrConsulenzaGuiActions.selectIsr, (state, action) => {
    console.log(action);
    return {
      ...state,
      activeIsrId: action.isrId,
    };
  }),
  on(IsrConsulenzaGuiActions.lockItem, (state, action) => {
    console.log(action);
    return {
      ...state,
      lockItem: action.payload,
    };
  }),
  on(IsrConsulenzaApiActions.isrsLoaded, (state, action) => {
    console.log(action);
    return {
      ...state,
      collection: action.isrs.data,
    };
  }),
  on(IsrConsulenzaGuiActions.publishDialogOpened, (state, action) => {
    console.log(action);
    return {
      ...state,
      // dialogOpened: true
    };
  }),
  on(IsrConsulenzaGuiActions.publishDialogClosed, (state, action) => {
    console.log(action);
    return {
      ...state,
      // dialogOpened: false
    };
  })
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
