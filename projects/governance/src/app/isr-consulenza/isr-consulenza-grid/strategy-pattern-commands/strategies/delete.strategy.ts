import { Observable } from "rxjs";
import { ExecCommandStrategy } from "../exec-command.strategy";

export class DeleteCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): Observable<void> {
    throw new Error("DELETE method not implemented." +  JSON.stringify(payloadRow));
  }
}
