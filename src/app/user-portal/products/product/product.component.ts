import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent{

   apiUrl = environment.apiUrl;
  @Input() product: any;
  constructor(private shoppingCartService: ShoppingCartService){}
  addToCart() {
    this.shoppingCartService.addItem(this.product);
  }

}
