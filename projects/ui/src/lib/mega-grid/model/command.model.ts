export interface Command<T> {
  commandType: number,
  payloadRow: T
}
