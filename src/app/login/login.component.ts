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

 
  
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
   this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((data) => { this.handleResponse(data);});
  }

  private handleResponse(data: any) {
    if(data.jwtToken == undefined) {
      return;
    }
    this.loginService.jwtToken = data.jwtToken;
     this.router.navigate(['/admin']);
  }

}
