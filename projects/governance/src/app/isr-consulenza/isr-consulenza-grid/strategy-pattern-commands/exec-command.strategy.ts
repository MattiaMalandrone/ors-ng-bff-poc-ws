import { Observable } from 'rxjs';
/// InterestCalculationStrategy
export interface ExecCommandStrategy<T> {
  exec(payloadRow: T): Observable<void>
}
