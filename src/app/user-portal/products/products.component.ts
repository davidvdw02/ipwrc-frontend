import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  subscription: any;
  categoryId: string = '';
  products: Product[] = [];
  filteredProducts: Product[]= [];
  searchSubscription: Subscription = new Subscription();
  sortOption: string = ''; 

  constructor(
    private productservice: ProductService,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) {
    this.subscription = productservice.productsSubject.subscribe((data) => {
      this.products = data;
      this.preloadImages();
      this.applyFilter();
      this.applySort(); // Add this
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.productservice.handleCategoryInput(this.categoryId);
    });

    this.searchSubscription = this.searchService.search$.subscribe((query) => {
      this.applyFilter(query);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }

  preloadImages() {
    if (this.products && this.products.length) {
      this.products.forEach((product) => {
        const img = new Image();
        img.src = environment.apiUrl + product.imageUrl;
      });
    }
  }

  applyFilter(query: string = '') {
    query = query.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    this.applySort(); // Add this
  }

  applySort() {
    // Add this
    if (this.sortOption === 'price-low-to-high') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'price-high-to-low') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  onSortOptionSelected(option: string) {
    // Add this
    this.sortOption = option;
    this.applySort();
  }
}