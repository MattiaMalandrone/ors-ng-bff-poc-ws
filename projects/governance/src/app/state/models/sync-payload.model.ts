import { Effect } from "./effect.model";

export interface SyncPayload {
  effects: Effect[],
  errorSummary: any
}
