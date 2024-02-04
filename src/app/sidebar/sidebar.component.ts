import { Component, Input } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   @Input() categories: Category[] = [];

  constructor(private router:Router) { }
}
