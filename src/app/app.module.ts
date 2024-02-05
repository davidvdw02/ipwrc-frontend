import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPortalModule } from './admin-portal/admin-portal.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserPortalModule } from './user-portal/user-portal.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminPortalModule,
    NoopAnimationsModule,
    UserPortalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
