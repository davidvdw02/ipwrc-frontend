import { Component, OnInit } from '@angular/core';
import { ChooseEditProductService } from './choose-edit-product.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-choose-edit-product',
  templateUrl: './choose-edit-product.component.html',
  styleUrls: ['./choose-edit-product.component.scss'],
})
export class ChooseEditProductComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  filteredProducts: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private chooseEditProductService: ChooseEditProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.chooseEditProductService.getAllProducts().subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = data;
    });
    this.chooseEditProductService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  applyFilter(event: any) {
    this.filteredProducts = this.products.filter((product: Product) => {
      return product.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
  }

  openEditProductPopup(product: Product): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '400px',
      data: {
        selectedProduct: product,
        categories: this.categories,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.chooseEditProductService
        .updateProduct(result)
        .subscribe((data: any) => {
          console.log(data);
        });
    });
  }
}
