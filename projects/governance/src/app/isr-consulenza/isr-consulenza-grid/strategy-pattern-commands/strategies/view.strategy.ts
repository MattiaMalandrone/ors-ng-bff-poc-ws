import { Observable } from "rxjs";
import { ExecCommandStrategy } from "../exec-command.strategy";

export class ViewCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): Observable<void> {
    throw new Error("View method not implemented." +  JSON.stringify(payloadRow));
  }
}
