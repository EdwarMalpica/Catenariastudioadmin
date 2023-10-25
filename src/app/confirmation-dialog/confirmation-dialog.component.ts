import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(

    // public dialogRef: MatDialogRef<DialogoEliminarComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancelClick(): void {
    // this.dialogRef.close(false);
  }

  onDeleteClick(): void {
    // this.dialogRef.close(true);
  }

}
