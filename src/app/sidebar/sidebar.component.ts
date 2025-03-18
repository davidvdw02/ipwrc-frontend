import { Component, Input } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isLoggedIn = false;
  @Input() categories: Category[] = [];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    if (this.loginService.jwtToken != null && this.loginService.jwtToken != '') {
      this.isLoggedIn = true;
    }
  }
}
