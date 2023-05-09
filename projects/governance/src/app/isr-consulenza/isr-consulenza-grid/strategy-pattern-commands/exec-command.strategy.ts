/// InterestCalculationStrategy
export interface ExecCommandStrategy<T> {
  exec(payloadRow: T): void
}
