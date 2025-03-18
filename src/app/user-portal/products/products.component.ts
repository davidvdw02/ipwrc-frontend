import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  subscription: any;
  categoryId: string = '';
  products: Product[] = [];

  constructor(
    private productservice: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription = productservice.productsSubject.subscribe((data) => {
      this.products = data;
      this.preloadImages();
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.productservice.handleCategoryInput(this.categoryId);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  preloadImages() {
    if (this.products && this.products.length) {
      this.products.forEach((product) => {
        const img = new Image();
        img.src = environment.apiUrl + product.imageUrl;
      });
    }
  }
}
