import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPortalModule } from './admin-portal/admin-portal.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    AdminPortalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }