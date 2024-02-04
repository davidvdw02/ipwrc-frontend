import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AddCategoryDialogComponent } from './add-product/add-category-dialog/add-category-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminPortalComponent,
    AddProductComponent,
    AddCategoryDialogComponent,
    DeleteProductComponent,
  ],
  imports: [CommonModule, FormsModule, MatDialogModule, RouterModule],
  exports: [AdminPortalComponent],
})
export class AdminPortalModule {}
