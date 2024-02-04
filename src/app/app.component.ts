import { Component } from '@angular/core';
import { AppComponentService } from './app.component.service';
import { Category } from './interfaces/category.interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Category[] = [];
  constructor(private appComponentService: AppComponentService, private router: Router) { }

  ngOnInit(): void {
    this.appComponentService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  shouldHideSidebar(): boolean {
    console.log(this.router.url)
    return !(this.router.url ==='/admin');
  }



}
