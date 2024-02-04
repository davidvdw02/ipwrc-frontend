import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';
@Injectable({
    providedIn: 'root'
})
export class AddProductService {
  private dataSubject = new Subject<Category>();
  public onCategorySave$: Observable<Category> = this.dataSubject.asObservable();
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    addProduct(product: any){
      console.log(product)
      this.http.post(this.apiUrl+'products', product).subscribe();
    }

    getAllCategories(){
        return this.http.get(this.apiUrl+'categories');
    }
    addCategories(category: any){
        this.http.post(this.apiUrl+'categories', category).subscribe(data => this.dataSubject.next(data as Category));
    }
}
