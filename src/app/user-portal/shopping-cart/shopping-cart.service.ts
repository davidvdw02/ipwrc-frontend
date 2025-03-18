import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private productsSubject = new BehaviorSubject<Product[]>([]); 
  private products: Product[] = [];

  getItems() {
    return this.products;
  }

  addItem(product: Product) {
    this.products.push(product);
    this.productsSubject.next([...this.products]); 
  }

  clearCart() {
    this.products = [];
    this.productsSubject.next([]); 
  }

  removeItem(product: Product) {
    this.products = this.products.filter(p => p.productId !== product.productId);
    this.productsSubject.next([...this.products]);
  }

  getProductsObservable(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  updateQuantity(product: Product, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(product);
      return;
    }

    let productsOfId = this.products.filter(p => p.productId === product.productId);
    let count = productsOfId.length;

    if(count > quantity){
      for (let i = 0; i < count - quantity; i++) {
         this.products.splice(this.products.indexOf(productsOfId[0]), 1);
      }
    }
    else{
        for (let i = 0; i < quantity - count; i++) {
            this.addItem(product);
        }
    }
    this.productsSubject.next([...this.products]);
  }
}