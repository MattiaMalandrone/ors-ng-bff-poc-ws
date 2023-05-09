import { Observable, map } from 'rxjs';
import { Column, Command, RowCommand } from '@lib/ui/mega-grid/types';
import { ColumnType } from '@lib/enum/column-type';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Book } from '../models/isr.model';
import { BooksService } from '../../services/books.service';
import { ExecCommandStrategyFactory } from './strategy-pattern-commands/exec-command.factory';
import { CommandType } from './strategy-pattern-commands/command-types.enum';

@Component({
  selector: 'app-isr-consulenza-grid',
  templateUrl: './isr-consulenza-grid.component.html',
  styleUrls: ['./isr-consulenza-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IsrConsulenzaGridComponent {

  private booksService = inject(BooksService);

  displayedColumns: string[] = ['Numero', 'Title', 'Autore', 'actions'];
  data: Book[] = [];
  selection = new SelectionModel<Book>(true, []);

  commands: RowCommand[] = [
    {
      commandType: CommandType.EDIT,
      icon: "edit"
    },
    {
      commandType: CommandType.PUBLISH,
      icon: "publish"
    },
    {
      commandType: CommandType.VIEW,
      icon: "open_in_new"
    },
    {
      commandType: CommandType.DELETE,
      icon: "delete"
    }
  ]

  columns: Column[] = [
    {
      name: 'Numero',
      label: 'Nr.',
      type: ColumnType.Number,
    },
    {
      name: 'Title',
      type: ColumnType.String,
      label: 'Titolo',
    },
    {
      name: 'Autore',
      label: 'Autore',
      type: ColumnType.String,
    }
  ];

  totalBooks$ = this.booksService.totalBooks$;
  books$ = this.booksService.books$;

  /**
   * Command executed by using
   * Strategy Pattern + Factory Method Pattern
   */
  execCommand(event: Command): Observable<void> {
    const commandFactory = new ExecCommandStrategyFactory<Book>();
    const strategy = commandFactory.getCommandStrategy(event.commandType);
    return strategy.exec(event.payloadRow as Book);
  }
}
