// https://ngrx.io/guide/entity/adapter

export interface IsrConsulenzaState {
  dataResult: any[];
  gridConfiguration: any;
  sort: any[]
  sortable: any;
  pagination: any
  publishCalendarToggle: boolean

  activeIsrId: number | null
  name: string
  isOnlyView: boolean
  isrDialogVisible: boolean
  profiles: any[]

  validationError: boolean
}

export const initialState: IsrConsulenzaState = {
  activeIsrId: 0,
  dataResult: [],
  gridConfiguration: undefined,
  sort: [],
  sortable: undefined,
  pagination: undefined,
  publishCalendarToggle: false,
  name: "",
  isOnlyView: false,
  isrDialogVisible: false,
  profiles: [],
  validationError: false
};
