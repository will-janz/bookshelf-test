import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subject, Observable } from 'rxjs/Rx';

import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'bt-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements AfterViewInit {

  // Table definitions
  displayedColumns = ['title', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  // Saved table definitions
  savedBooksColumns = ['title', 'actions'];
  savedBooksDataSource = new MatTableDataSource();
  @ViewChild('savedMatSort') savedSort: MatSort;

  // Search is a subject so we can debounce it and not overload the API
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

    // Each data source needs this override
    this.dataSource.sortingDataAccessor = (data, sortHeaderId: string) => {
      switch (sortHeaderId) {
        case 'title': return data.volumeInfo.title;
        default: return '';
      }
    };
    this.savedBooksDataSource.sortingDataAccessor = (data, sortHeaderId: string) => {
      console.log(sortHeaderId);
      switch (sortHeaderId) {
        case 'title': return data.volumeInfo.title;
        default: return '';
      }
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.savedBooksDataSource.sort = this.savedSort;
  }

  addBook(book) {
    // Cloned because objects are passed by reference
    const clonedBook = Object.assign({}, book);

    // dataSource.data.push() doesn't propagate right
    const currentData = this.savedBooksDataSource.data;
    // No duplicate prevention because comparing JS objects is tricky at best
    // and time is of the essence
    currentData.push(clonedBook);
    this.savedBooksDataSource.data = currentData;
  }

  removeBook(book) {
    // Here pass-by-reference works like I want it to
    const index = this.savedBooksDataSource.data.indexOf(book);
    // I think 'let' makes more sense here but I don't like lint warnings
    const currentData = this.savedBooksDataSource.data;
    currentData.splice(index, 1);
    this.savedBooksDataSource.data = currentData;
  }
}
