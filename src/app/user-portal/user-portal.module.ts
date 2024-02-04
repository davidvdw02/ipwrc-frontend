import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPortalComponent } from '../user-portal/user-portal.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    UserPortalComponent,
  ],
  imports: [
    CommonModule,
    ProductsModule,
  ],
  exports: [UserPortalComponent]
})
export class UserPortalModule { }
