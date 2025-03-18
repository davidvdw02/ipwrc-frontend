import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Router, UrlTree } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.jwtToken != null && this.loginService.jwtToken != '') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
