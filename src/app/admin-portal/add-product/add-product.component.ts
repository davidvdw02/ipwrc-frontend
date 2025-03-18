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
  categories: any[] = [];

  // Error flags for each field
  nameError: string | null = null;
  descriptionError: string | null = null;
  priceError: string | null = null;
  quantityError: string | null = null;
  imageError: string | null = null;
  categoryError: string | null = null;

  productAddStatus: boolean | null = null;

  constructor(
    private addProductService: AddProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.addProductService.onCategorySave$.subscribe((data) => {
      this.categories.push(data);
      this.product.category = data;
    });

    // Subscribe to product add status
    this.addProductService.onProductAddStatus$.subscribe((status) => {
      this.productAddStatus = status;
      if (status) {
        // Optionally, reset the form or show a message
        this.resetForm();
      }
    });

    this.getAllCategories();
  }

  onCategoryChange() {
    if (this.product.category.categoryId == undefined) {
      this.handleAddCategoryDIalog();
    }
  }

  onSubmit() {
    if (this.validateProduct()) {
      this.addProductService.addProduct(this.product);
    }
  }

  validateProduct(): boolean {
    let isValid = true;

    // Reset errors
    this.nameError = null;
    this.descriptionError = null;
    this.priceError = null;
    this.quantityError = null;
    this.imageError = null;
    this.categoryError = null;

    if (!this.product.name) {
      this.nameError = 'Name is required.';
      isValid = false;
    }

    if (!this.product.description) {
      this.descriptionError = 'Description is required.';
      isValid = false;
    }

    if (this.product.price === null || this.product.price <= 0) {
      this.priceError = 'Price must be greater than 0.';
      isValid = false;
    }

    if (this.product.quantityInStock === null || this.product.quantityInStock < 0) {
      this.quantityError = 'Quantity must be 0 or greater.';
      isValid = false;
    }

    if (!this.product.image) {
      this.imageError = 'Image is required.';
      isValid = false;
    }

    if (
      !this.product.category ||
      !this.product.category.categoryName ||
      this.product.category.categoryName === 'Select Category'
    ) {
      this.categoryError = 'Category is required.';
      isValid = false;
    }

    return isValid;
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
        this.imageError = null; // Clear image error on selection
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
    this.addProductService.getAllCategories().subscribe((data) => this.handleCategories(data));
  }

  handleCategories(data: any) {
    this.categories = data;
    this.categories.push({ categoryName: 'Add New Category' });
  }

  resetForm() {
    this.product = {
      name: '',
      description: '',
      price: 0,
      quantityInStock: 0,
      image: '',
      category: { categoryName: 'Select Category' },
    };
    this.imagePreview = null;
    this.fileInput.nativeElement.value = ''; // Clear the file input

    // Clear all error messages
    this.nameError = null;
    this.descriptionError = null;
    this.priceError = null;
    this.quantityError = null;
    this.imageError = null;
    this.categoryError = null;
    this.productAddStatus = null;
  }
}
