import { Observable } from "rxjs";
import { ExecCommandStrategy } from "../exec-command.strategy";

export class EditCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): Observable<void> {
    throw new Error("EDIT method not implemented." +  JSON.stringify(payloadRow));
  }

}
