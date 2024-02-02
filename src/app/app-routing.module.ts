import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

const routes: Routes = [{path:'products/:id', component: ProductsComponent},{path:'products', component: ProductsComponent},{path:'admin', component: AdminPortalComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
