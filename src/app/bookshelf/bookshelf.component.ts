import { Component, OnInit } from '@angular/core';
import { BookshelfService } from './bookshelf.service';
import { Bookshelf } from './bookshelf';


@Component({
  selector: 'bt-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit {

  books: Array<any> = [{ items: [] }];

  constructor(private service: BookshelfService) { }

  ngOnInit() {
    this.service.getBooks('harry').subscribe(books => {
      this.books = books;
    });
  }

}
