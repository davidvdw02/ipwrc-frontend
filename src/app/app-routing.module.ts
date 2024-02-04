import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

const routes: Routes = [
  { path: 'admin', component: AdminPortalComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-portal/user-portal.module').then((m) => m.UserPortalModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
