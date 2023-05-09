import { ExecCommandStrategy } from "../exec-command.strategy";

export class NoCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): void {
    throw new Error("No strategy selected");
  }
}
