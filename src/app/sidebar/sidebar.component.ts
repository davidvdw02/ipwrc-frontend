import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories: string[] = [];
  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.getAllCategories().subscribe(data => {
      this.categories = data.map(category => category.categoryName); console.log(this.categories)
    });
  }

}
