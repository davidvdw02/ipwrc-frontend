import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    private productsSubject = new Subject<Product[]>();
    private products: Product[] = [];
    getItems() {
        return this.products;
    }
    addItem(product: Product) {
        this.products.push(product);
        this.productsSubject.next(this.products);
    }


    clearCart() {
        this.products = [];
        this.productsSubject.next(this.products);
    }
    removeItem(product: Product) {
        const index = this.products.findIndex(p => p === product);
        if (index !== -1) {
          this.products.splice(index, 1);
          this.productsSubject.next(this.products.slice());
        }
      }

    getProductsObservable(): Observable<Product[]> {
        return this.productsSubject.asObservable();
    }
    updateQuantity(product: Product, quantity: number) {
        let count = 0;
        for (let prod of this.products) {
            if (prod.productId === product.productId) {
                count++;
            }
        }
        if(count > quantity){
            for (let i = 0; i < count - quantity; i++) {
               this.removeItem(product);F
            }
        }
        else{
            for (let i = 0; i < quantity - count; i++) {
                this.addItem(product);
            }
        }
      }

}
