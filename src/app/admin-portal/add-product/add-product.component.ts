import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProductInterface } from 'src/app/interfaces/add.product.interface';
import { AddProductService } from './add-product.service';
import { Category } from 'src/app/interfaces/category.interface';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export const SELECT_A_CATEGORY: Category = {
  categoryName: 'Select a category',
  categoryId: -1,
};

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;
  imagePreview: string | null = null;
  product: AddProductInterface = {
    name: '',
    description: '',
    price: 0,
    quantityInStock: 0,
    image: '',
    category: { categoryName: 'Select Category' },
  };
  categories: any = [];

  constructor(
    private addProductService: AddProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.addProductService.onCategorySave$.subscribe((data) => {
      this.categories.push(data);
      this.product.category = data;
    });
    this.getAllCategories();
  }

  onCategoryChange() {
    if (this.product.category.categoryId == undefined) {
      this.handleAddCategoryDIalog();
    }
  }

  onSubmit() {
    this.validateProduct();
    this.addProductService.addProduct(this.product);
    console.log(this.product);
  }
  validateProduct() {
    
  }
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
  
      if (file.type === 'image/png') {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.product.image = reader.result as string;
        };

        reader.onload = (e: any) => {
          this.imagePreview = e.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        this.imagePreview = null;
        this.product.image = '';
        alert('Please select a valid PNG file.');
        this.fileInput.nativeElement.value = '';
      }
    }
  }
  handleAddCategoryDIalog() {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data != undefined) {
        this.addProductService.addCategories({ categoryName: data });
        return;
      }
      this.product.category = SELECT_A_CATEGORY;
    });
  }

  getAllCategories() {
    this.addProductService
      .getAllCategories()
      .subscribe((data) => this.handleCategories(data));
  }
  handleCategories(data: any) {
    this.categories = data;
    this.categories.push({ categoryName: 'Add New Category' });
  }
}
