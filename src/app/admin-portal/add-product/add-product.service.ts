import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AddProductService {
    private dataSubject = new Subject<Category>();
    public onCategorySave$: Observable<Category> = this.dataSubject.asObservable();
    private apiUrl = environment.apiUrl;

    private productAddStatusSubject = new Subject<boolean>();
    public onProductAddStatus$: Observable<boolean> = this.productAddStatusSubject.asObservable();

    private categoryAddedSubject = new Subject<void>();
    public categoryAdded$: Observable<void> = this.categoryAddedSubject.asObservable();

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    addProduct(product: any) {
        this.http
            .post(this.apiUrl + 'products', product, {
                observe: 'response',
                responseType: 'text',
            })
            .subscribe({
                next: (response: HttpResponse<string>) => {
                    if (response.status === 201) {
                        this.router.navigate(['']);
                        this.productAddStatusSubject.next(true);
                    } else {
                        this.productAddStatusSubject.next(false);
                    }
                },
                error: (error: HttpErrorResponse) => {
                    console.error('Error adding product:', error);
                    this.productAddStatusSubject.next(false);
                },
            });
    }

    getAllCategories() {
        return this.http.get(this.apiUrl + 'categories');
    }

    addCategories(category: any) {
        this.http
            .post(this.apiUrl + 'categories', category)
            .subscribe((data) => {
                this.dataSubject.next(data as Category);
                this.categoryAddedSubject.next();
            });
    }
}