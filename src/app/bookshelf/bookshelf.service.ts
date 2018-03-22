import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookshelfService {
  readonly API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getBooks(q) {
    // Should be an array of books but "any" will do for now
    // Should use HttpParams but this is quicker
    return this.http.get<any[]>(`${this.API_URL}?q=${q}`);
  }
}
