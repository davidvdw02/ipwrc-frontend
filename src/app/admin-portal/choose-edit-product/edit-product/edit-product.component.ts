import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/interfaces/category.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  apiUrl = environment.apiUrl;
  selectedProduct: Product;
  allCategories: Category[] = [];
  categories: Category[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selectedProduct = data.selectedProduct || {};
    this.allCategories = data.categories || [];
    this.oncategoryChange();
  }

  ngOnInit(): void {}

  oncategoryChange() {
    if (this.selectedProduct && this.selectedProduct.category && this.allCategories) {
      this.categories = this.allCategories.filter(
        (category: Category) =>
          category.categoryId !== this.selectedProduct.category.categoryId
      );
    }
  }

  onEditSubmit() {

  }



  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.selectedProduct);
  }
}
