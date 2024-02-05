import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/interfaces/category.interface';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
 selectedProduct: Product
  allCategories: Category[] = []
  categories: Category[] = []
  constructor(public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.selectedProduct = data.selectedProduct;
      this.allCategories = data.categories;
      this.oncategoryChange();
    }

  ngOnInit(): void {
  }
  oncategoryChange() {
    this.categories = this.allCategories.filter((category: Category) => category.categoryId !== this.selectedProduct.category.categoryId);
  }



  onEditSubmit() {
    // Add logic to handle the submission of edits to an existing product
    console.log('Edit Product submitted:', this.selectedProduct);
  }

  onEditFileSelected(event: any) {
    // Add logic to handle file selection for editing an existing product
    console.log('File selected for editing:', event.target.files[0]);
  }
  onCancel() {
    this.dialogRef.close();
    }
    onSave() {
      this.dialogRef.close(this.selectedProduct);
    }
}
