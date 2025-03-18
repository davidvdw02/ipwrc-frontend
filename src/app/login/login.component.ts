import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    errorMessage = ''; 

    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit() {
        this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
            (data) => { this.handleResponse(data); },
            (error) => { this.handleError(error); } 
        );
    }

    private handleResponse(data: any) {
        if (data.jwtToken == undefined) {
            this.errorMessage = 'Invalid username or password. Maat staat letterlijk hieronder'; 
            return;
        }
        this.loginService.jwtToken = data.jwtToken;
        this.router.navigate(['/admin']);
    }

    private handleError(error: any) {
        this.errorMessage = 'Invalid username or password. Maat staat letterlijk hieronder'; 
        console.error('Login error:', error);
    }
}