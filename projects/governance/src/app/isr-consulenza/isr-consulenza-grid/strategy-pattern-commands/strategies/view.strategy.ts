import { ExecCommandStrategy } from "../exec-command.strategy";

export class ViewCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): void {
    throw new Error("View method not implemented." + payloadRow);
  }
}
