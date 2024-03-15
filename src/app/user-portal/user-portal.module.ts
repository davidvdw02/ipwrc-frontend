import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPortalComponent } from '../user-portal/user-portal.component';
import { ProductsModule } from './products/products.module';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';

const userPortalRoutes: Routes = [
  { path: '', component: UserPortalComponent },
  { path: 'product/:id', component: UserPortalComponent },
];

@NgModule({
  declarations: [UserPortalComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule.forChild(userPortalRoutes),
    FormsModule,
  ],
  exports: [UserPortalComponent],
})
export class UserPortalModule {}
