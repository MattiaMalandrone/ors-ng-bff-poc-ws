import { Column } from '@lib/ui/mega-grid/types';
import { ColumnType } from '@lib/enum/column-type';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Book } from '../models/isr.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-isr-consulenza-grid',
  templateUrl: './isr-consulenza-grid.component.html',
  styleUrls: ['./isr-consulenza-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IsrConsulenzaGridComponent {

  private booksService = inject(BooksService);

  displayedColumns: string[] = ['Numero', 'Title', 'Autore'];
  data: Book[] = [];
  selection = new SelectionModel<Book>(true, []);

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

  publish(): void {}

  edit(i: number, row: any): void {}

  view(i: number): void {}

  delete(i: number): void {}
}
