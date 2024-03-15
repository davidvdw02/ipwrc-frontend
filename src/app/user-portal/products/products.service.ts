import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  productsSubject: Subject<Product[]> = new Subject<Product[]>();
  constructor(private http: HttpClient) {}
  getAllProducts() {
    this.http.get(this.apiUrl + 'products').subscribe((data) => {
      this.productsSubject.next(data as Product[]);
    });
  }

  handleCategoryInput(categoryId: string) {
    if (!categoryId) {
      this.getAllProducts();
      return;
    }
    this.http
      .get(this.apiUrl + 'products/category/' + categoryId)
      .subscribe((data) => {
        this.productsSubject.next(data as Product[]);
      });
  }
}
