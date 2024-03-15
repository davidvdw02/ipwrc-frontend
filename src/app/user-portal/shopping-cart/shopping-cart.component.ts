import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productsObservable = this.shoppingCartService.getProductsObservable();
  isDropdownOpen = false;
  sortedProducts: any[] = [];
  totalcost: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productsObservable.subscribe((data) => {
      this.sortProducts(data)
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  calculateTotalCost() {
    this.totalcost = 0;
    for(let sortedProduct of this.sortedProducts) {
      this.totalcost += sortedProduct.product.price * sortedProduct.quantity;
    }
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

  sortProducts(products: Product[]) {
    let sortedProducts: any[] = [];
    this.sortedProducts = products.map((product) => {

      if(sortedProducts.length === 0) {
        sortedProducts = [{product: product, quantity: 1}];

      }else{
        for(let sortedProduct of sortedProducts) {
          if(sortedProduct.product.productId === product.productId) {
            sortedProduct.quantity++;
            return;
          }
        }
        sortedProducts.push({product: product, quantity: 1});
      }
    });
   this.sortedProducts = sortedProducts;
    this.calculateTotalCost();
  }

  updateQuantity(sortedProduct: any) {

    if (sortedProduct.quantity < 0) {
      sortedProduct.quantity = 0;
    }

    this.shoppingCartService.updateQuantity(sortedProduct.product, sortedProduct.quantity);
  }
}
