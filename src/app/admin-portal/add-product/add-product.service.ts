import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AddProductService {

    constructor(private http: HttpClient) { }

    addProduct(product: any){
        console.log(product);
      this.http.post('http://localhost:8080/products', product).subscribe(data => console.log(data));
    }
}
