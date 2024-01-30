import { Component } from '@angular/core';
import { AppComponentService } from './app.component.service';
import { Category } from './interfaces/category.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Category[] = [];
  constructor(private appComponentService: AppComponentService) { }

  ngOnInit(): void {
    this.appComponentService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  
}
