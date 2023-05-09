import { CommandType } from './command-types.enum';
import { DeleteCommand } from './strategies/delete.strategy';
import { EditCommand } from "./strategies/edit.strategy";
import { ExecCommandStrategy } from "./exec-command.strategy";
import { PublishCommand } from "./strategies/publish.strategy";
import { ViewCommand } from './strategies/view.strategy';
import { NoCommand } from './strategies/no.strategy';

export class ExecCommandStrategyFactory<T> {
  publishCommand: ExecCommandStrategy<T> = new PublishCommand();
  editCommand: ExecCommandStrategy<T> = new EditCommand();
  viewCommand: ExecCommandStrategy<T> = new ViewCommand();
  deleteCommand: ExecCommandStrategy<T> = new DeleteCommand();
  noCommand: ExecCommandStrategy<T> = new NoCommand();

  getCommandStrategy(commandType: CommandType): ExecCommandStrategy<T> {
    switch (commandType) {
      case CommandType.PUBLISH: return this.publishCommand;
      case CommandType.EDIT: return this.editCommand;
      case CommandType.VIEW: return this.editCommand;
      case CommandType.DELETE: return this.editCommand;
      default: {
        return this.noCommand;
      }
    }
  }
}
