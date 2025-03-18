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
  isCartOpen = false; 
  sortedProducts: any = [];
  totalcost: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productsObservable.subscribe((data) => {
      this.sortProducts(data)
    });
  }

  toggleCart() { 
    this.isCartOpen = !this.isCartOpen;
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
      let sortedProducts: any = [];
      products.forEach((product) => {
        const existingProduct = sortedProducts.find((sortedProduct: any) => sortedProduct.product.productId === product.productId);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          sortedProducts.push({ product: product, quantity: 1 });
        }
      });
      this.sortedProducts = sortedProducts;
      this.calculateTotalCost();
    }

  updateQuantity(sortedProduct: any, quantity: number) {

    if (quantity < 0) {
      quantity = 0;
    }
    sortedProduct.quantity = quantity;

    this.shoppingCartService.updateQuantity(sortedProduct.product, sortedProduct.quantity);
    this.calculateTotalCost();
  }

  removeItem(product: Product){
    this.shoppingCartService.removeItem(product);
  }
}