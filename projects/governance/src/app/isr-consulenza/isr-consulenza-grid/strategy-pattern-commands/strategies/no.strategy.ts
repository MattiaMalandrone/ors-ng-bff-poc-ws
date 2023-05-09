import { Observable } from "rxjs";
import { ExecCommandStrategy } from "../exec-command.strategy";

export class NoCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): Observable<void> {
    throw new Error("No strategy selected");
  }
}
