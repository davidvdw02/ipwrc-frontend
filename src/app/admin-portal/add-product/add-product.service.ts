import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class AddProductService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    addProduct(product: any){
        console.log(product);
      this.http.post(this.apiUrl+'/products', product).subscribe(data => console.log(data));
    }
}
