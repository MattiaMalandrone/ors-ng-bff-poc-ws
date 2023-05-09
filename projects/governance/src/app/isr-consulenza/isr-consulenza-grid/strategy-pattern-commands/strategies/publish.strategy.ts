import { Observable } from "rxjs";
import { ExecCommandStrategy } from "../exec-command.strategy";

export class PublishCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): Observable<void> {
    throw new Error("PUBLISH method not implemented." + JSON.stringify(payloadRow));
  }
}
