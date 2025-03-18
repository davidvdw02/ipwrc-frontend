import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/login.guard';

const routes: Routes = [
  { path: 'admin', component: AdminPortalComponent, canActivate: [AuthGuard] },
  {
    path: 'user',
    loadChildren: () => import('./user-portal/user-portal.module').then((m) => m.UserPortalModule),
  },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
