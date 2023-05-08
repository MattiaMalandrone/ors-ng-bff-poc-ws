import { PageEvent } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";

export interface ActionsGrid {
  page: PageEvent,
  sort: Sort,
  filter: string
}
