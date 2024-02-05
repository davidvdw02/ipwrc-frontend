import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChooseEditProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }


  getAllProducts(){
    return this.http.get(this.apiUrl + 'products');
  }
  updateProduct(product: Product){
    return this.http.put(this.apiUrl + 'products/' + product.productId, product);
  }
  getAllCategories(){
    return this.http.get(this.apiUrl + 'categories');
  }
}
