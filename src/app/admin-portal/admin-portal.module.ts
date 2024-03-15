import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AddCategoryDialogComponent } from './add-product/add-category-dialog/add-category-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminPortalComponent,
    AddProductComponent,
    AddCategoryDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    RouterModule,
    MatInputModule,
  ],
  exports: [AdminPortalComponent],
})
export class AdminPortalModule {}
