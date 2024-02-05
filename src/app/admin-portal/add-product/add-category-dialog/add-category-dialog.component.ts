import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
})
export class AddCategoryDialogComponent {
  categoryName: string = '';
  constructor(public dialogRef: MatDialogRef<AddCategoryDialogComponent>) {}

  saveDialog(): void {
    this.dialogRef.close(this.categoryName);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
