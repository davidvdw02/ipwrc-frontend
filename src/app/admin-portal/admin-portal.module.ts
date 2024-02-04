import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AddCategoryDialogComponent } from './add-product/add-category-dialog/add-category-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AdminPortalComponent,
    AddProductComponent,
    AddCategoryDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
  ],
  exports:[AdminPortalComponent]
})
export class AdminPortalModule { }
