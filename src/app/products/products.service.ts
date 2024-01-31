import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class ProductService {
    productsSubject: Subject<Product[]> = new Subject<Product[]>();
    constructor(private http: HttpClient){}
    getAllProducts(){
        this.http.get('http://localhost:8080/products').subscribe(data => {this.productsSubject.next(data as Product[])})
    }

    handleCategoryInput(categoryId: string){

      if(!categoryId){
        this.getAllProducts();
        return;
      }
      console.log(categoryId);
      this.http.get('http://localhost:8080/products/category/'+categoryId).subscribe(data => {this.productsSubject.next(data as Product[])})
  }
}