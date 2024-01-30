import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  subscription:any;
  products: Product[] = [];
  constructor(private productservice: ProductService) {
    this.subscription = productservice.productsSubject.subscribe(
      data => this.products = data
    )
   }

  ngOnInit(): void {
    console.log(this.productservice.getAllProducts())
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
