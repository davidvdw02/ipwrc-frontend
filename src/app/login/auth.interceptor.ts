import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private loginService: LoginService;

    constructor(loginService: LoginService){
        this.loginService = loginService;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(!req.url.includes('/login')){
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.loginService.jwtToken),
              });
              console.log(authReq.headers.get('Authorization'));
              return next.handle(authReq);
        }
        return next.handle(req);
    }
}