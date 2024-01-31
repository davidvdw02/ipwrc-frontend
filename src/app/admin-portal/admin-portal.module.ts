import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminPortalComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[AdminPortalComponent]
})
export class AdminPortalModule { }
