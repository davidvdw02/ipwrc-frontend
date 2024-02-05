import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AddCategoryDialogComponent } from './add-product/add-category-dialog/add-category-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { EditProductComponent } from './choose-edit-product/edit-product/edit-product.component';
import { ChooseEditProductComponent } from './choose-edit-product/choose-edit-product.component';

@NgModule({
  declarations: [
    AdminPortalComponent,
    AddProductComponent,
    AddCategoryDialogComponent,
    EditProductComponent,
    ChooseEditProductComponent,
  ],
  imports: [CommonModule, FormsModule, MatDialogModule, RouterModule, MatInputModule],
  exports: [AdminPortalComponent],
})
export class AdminPortalModule {}
