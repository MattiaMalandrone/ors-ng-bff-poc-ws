import { ExecCommandStrategy } from "../exec-command.strategy";

export class EditCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): void {
    throw new Error("EDIT method not implemented." + payloadRow);
  }

}
