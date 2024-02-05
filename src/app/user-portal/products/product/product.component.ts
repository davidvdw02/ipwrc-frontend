import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent implements OnInit{

   apiUrl = environment.apiUrl;
  @Input() product: any;

  ngOnInit(): void {
   console.log(this.product)
   console.log(this.apiUrl+this.product.imageUrl)
  }
}
