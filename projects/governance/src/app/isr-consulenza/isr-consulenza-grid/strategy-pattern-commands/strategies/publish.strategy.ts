import { ExecCommandStrategy } from "../exec-command.strategy";

export class PublishCommand<T> implements ExecCommandStrategy<T> {
  exec(payloadRow: T): void {
    throw new Error("PUBLISH method not implemented." + payloadRow);
  }
}
