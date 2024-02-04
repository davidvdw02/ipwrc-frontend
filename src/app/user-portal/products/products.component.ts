import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  subscription:any;
  categoryId: string = '';
  products: Product[] = [];
  constructor(private productservice: ProductService, private activatedRoute: ActivatedRoute) {
    this.subscription = productservice.productsSubject.subscribe(
      data => this.products = data
    )
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
       this.categoryId = params['id'];
        this.productservice.handleCategoryInput(this.categoryId);
    });
  }

  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
