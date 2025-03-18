import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private loginService: LoginService;

    constructor(loginService: LoginService, private router: Router) {
        this.loginService = loginService;
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!req.url.includes('/login')) {
            const authReq = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    'Bearer ' + this.loginService.jwtToken
                ),
            });
            return next.handle(authReq).pipe(
                tap({
                    error: (error: any) => {
                        if (error.status === 401) {
                            this.loginService.jwtToken = ''; 
                            this.router.navigate(['/login']); 
                        }
                    },
                })
            );
        }
        return next.handle(req);
    }
}