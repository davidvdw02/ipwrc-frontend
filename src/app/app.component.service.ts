import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './interfaces/category.interface';

@Injectable({
    providedIn: 'root'
})
export class AppComponentService {

    constructor(private http: HttpClient) { }

    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>('http://localhost:8080/categories');
    }
}
