import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';
import { Category } from './interfaces/category.interface';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  shouldHideSidebar: boolean = false;

  constructor(
    private appComponentService: AppComponentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.appComponentService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSidebarVisibility();
      });
  }

  updateSidebarVisibility(): void {
    this.shouldHideSidebar = this.router.url !== '/admin';
  }
}