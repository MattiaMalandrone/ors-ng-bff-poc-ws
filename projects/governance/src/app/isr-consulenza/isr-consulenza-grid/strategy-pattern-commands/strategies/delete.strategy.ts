import { ExecCommandStrategy } from "../exec-command.strategy";

export class DeleteCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): void {
    throw new Error("DELETE method not implemented." + payloadRow);
  }
}
