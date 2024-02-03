import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProductInterface } from 'src/app/interfaces/add.product.interface';
import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: AddProductInterface = { name: '', description: '', price: 0, quantityInStock: 0, image: '' };


  constructor(private addProductService: AddProductService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addProductService.addProduct(this.product);
    console.log(this.product);
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.product.image = reader.result as string;
      };
      reader.readAsDataURL(file);
      //test
  }

}
}
