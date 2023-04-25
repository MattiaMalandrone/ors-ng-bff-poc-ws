import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PublishDialogModel {
  id: number;
  message: string;
  isPublished: boolean;
}

@Component({
  selector: 'lib-publish-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publish-dialog.component.html',
  styleUrls: ['./publish-dialog.component.css'],
})
export class PublishDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PublishDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: PublishDialogModel
  ) {
    // console.log(payload);
  }
}
