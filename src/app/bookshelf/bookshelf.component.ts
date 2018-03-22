import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subject, Observable } from 'rxjs/Rx';

import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'bt-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent {
  // Table definitions
  displayedColumns = ['title', 'actions'];
  dataSource = new MatTableDataSource();

  // Search is subject so we can debounce it and not overload the API
  public searchBooks = new Subject<string>();

  constructor(private service: BookshelfService) {
    // Subscribe to search keyup events, debounce, then query Google
    const subscription = this.searchBooks
      .debounceTime(500)
      .distinctUntilChanged()
      .flatMap(search => Observable.of(search))
      .subscribe(searchTerm => {
        // Perform the search
        this.service.getBooks('harry').subscribe(books => {
          this.dataSource.data = books.items;
        });
      });
  }
}
