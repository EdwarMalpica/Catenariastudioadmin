import { Component } from '@angular/core';

@Component({
  selector: 'app-dialogo-eliminar',
  templateUrl: './dialogo-eliminar.component.html',
  styleUrls: ['./dialogo-eliminar.component.css']
})
export class DialogoEliminarComponent {

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
