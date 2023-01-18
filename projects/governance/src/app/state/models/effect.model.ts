import { Action } from "@ngrx/store"

export type Effect = Action & {
  payload: unknown
}

