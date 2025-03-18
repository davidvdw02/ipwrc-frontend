// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';
import { Category } from './interfaces/category.interface';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AddProductService } from './admin-portal/add-product/add-product.service';
import { Subscription } from 'rxjs'; 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    categories: Category[]= [];
    shouldHideSidebar: boolean = false;
    private categoryAddedSubscription: Subscription = new Subscription; 

    constructor(
        private appComponentService: AppComponentService,
        private router: Router,
        private addProductService: AddProductService 
    ) { }

    ngOnInit(): void {
        this.loadCategories();

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            this.updateSidebarVisibility();
        });

        this.categoryAddedSubscription = this.addProductService.categoryAdded$.subscribe(() => {
            this.loadCategories();
        });
    }

    loadCategories(): void {
        this.appComponentService.getAllCategories().subscribe((data) => {
            this.categories = data;
        });
    }

    updateSidebarVisibility(): void {
        this.shouldHideSidebar = this.router.url !== '/admin';
    }

    ngOnDestroy(): void {
        if (this.categoryAddedSubscription) {
            this.categoryAddedSubscription.unsubscribe();
        }
    }
}