import { Component, Output, EventEmitter } from '@angular/core'; 
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-top-actions',
  templateUrl: './top-actions.component.html',
  styleUrls: ['./top-actions.component.scss'],
})
export class TopActionsComponent {
  searchQuery: string = '';
  @Output() sortOptionSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.setSearch(this.searchQuery);
  }

  onSortChange(event: any) {
    this.sortOptionSelected.emit(event.target.value);
  }
}