import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    jwtToken = '';
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        const body = { username, password };
        return this.http.post(this.apiUrl + 'login', body).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            if (error.status === 403) { 
                errorMessage = 'Invalid username or password';
            } else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}